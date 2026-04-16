const fs = require('fs');
const path = require('path');
const jsonld = require('jsonld');

const { LANGUAGES, DEFAULT_LANGUAGE, EXPECTED_JSON_LD_TYPES } = require('../constants');

/** schema.org root URL does not return a JSON-LD context document; use the official context file. */
const SCHEMA_ORG_CONTEXT_URL = 'https://schema.org/docs/jsonldcontext.json';

function cloneJsonLdDocument(doc) {
  if (typeof structuredClone === 'function') {
    return structuredClone(doc);
  }
  return JSON.parse(JSON.stringify(doc));
}

/** One fetch per validator run — avoids dozens of parallel requests and flaky failures. */
let schemaOrgRemoteDocument = null;

function createSchemaOrgDocumentLoader() {
  const nodeLoader = jsonld.documentLoaders.node();
  return async (url, options) => {
    const base = String(url).replace(/\/$/, '');
    if (base === 'https://schema.org' || base === 'http://schema.org') {
      if (!schemaOrgRemoteDocument) {
        schemaOrgRemoteDocument = await nodeLoader(SCHEMA_ORG_CONTEXT_URL, options);
      }
      return {
        contextUrl: schemaOrgRemoteDocument.contextUrl,
        documentUrl: schemaOrgRemoteDocument.documentUrl,
        document: cloneJsonLdDocument(schemaOrgRemoteDocument.document),
      };
    }
    return nodeLoader(url, options);
  };
}

const jsonLdExpandOptions = { documentLoader: createSchemaOrgDocumentLoader() };

function extractJsonLdBlocks(html) {
  const blocks = [];
  const re = /<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(html))) {
    blocks.push(m[1].trim());
  }
  return blocks;
}

/** Strip <script type="application/ld+json">...</script> blocks to check only body/HTML for embedded structured data. */
function htmlWithoutJsonLdScripts(html) {
  return html.replace(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');
}

/** Detect structured data embedded in HTML (microdata/RDFa). Returns list of attribute names found. */
function findStructuredDataInHtml(html) {
  const withoutScripts = htmlWithoutJsonLdScripts(html);
  const found = [];

  if (/\bitemscope\b/i.test(withoutScripts)) found.push('itemscope');
  if (/\bitemtype\b/i.test(withoutScripts)) found.push('itemtype');
  if (/\bitemprop\b/i.test(withoutScripts)) found.push('itemprop');
  if (/\bvocab\s*=/i.test(withoutScripts) && /vocab\s*=\s*["']https?:\/\/schema\.org/i.test(withoutScripts)) found.push('vocab');
  if (/\btypeof\b/i.test(withoutScripts)) found.push('typeof');

  return found;
}


function contextAround(str, pos, radius = 160) {
  const start = Math.max(0, pos - radius);
  const end = Math.min(str.length, pos + radius);
  return str.slice(start, end);
}

function parseJsonLd(block, { file, lang, index }) {
  try {
    const obj = JSON.parse(block);
    if (!obj || typeof obj !== 'object') {
      return {
        ok: false,
        error: `JSON-LD block is not an object (got ${typeof obj})`,
      };
    }
    const type = obj['@type'];
    return { ok: true, type, obj };
  } catch (e) {
    const msg = e && e.message ? e.message : String(e);
    const posMatch = msg.match(/position (\d+)/);
    const pos = posMatch ? Number(posMatch[1]) : null;
    return {
      ok: false,
      error: msg,
      pos,
      context: pos === null ? null : contextAround(block, pos),
      meta: { file, lang, index },
    };
  }
}

function normalizeTypes(typeValue) {
  if (Array.isArray(typeValue)) return typeValue.map(String).filter(Boolean);
  if (typeof typeValue === 'string') return [typeValue];
  if (typeValue == null) return [];
  return [String(typeValue)];
}

function checkDuplicatesInBlock(obj, path = '', duplicates = []) {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    return duplicates;
  }

  const keys = Object.keys(obj);
  const seenKeys = new Set();

  for (const key of keys) {
    const currentPath = path ? `${path}.${key}` : key;
    
    // Check for duplicate keys at the same level
    if (seenKeys.has(key)) {
      duplicates.push({
        path: currentPath,
        key: key,
        message: `Duplicate property "${key}" found at path "${path || 'root'}"`
      });
    }
    seenKeys.add(key);

    // Recursively check nested objects
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      checkDuplicatesInBlock(obj[key], currentPath, duplicates);
    }
  }

  return duplicates;
}

async function validateJsonLD() {
  const projectRoot = path.join(__dirname, '..', '..');
  const results = [];

  for (const lang of LANGUAGES) {
    const htmlPath = path.join(
      projectRoot,
      lang === DEFAULT_LANGUAGE ? 'index.html' : `${lang}/index.html`
    );

    if (!fs.existsSync(htmlPath)) {
      results.push({
        ok: false,
        error: `Missing built HTML file: ${htmlPath}`,
        meta: { file: htmlPath, lang },
      });
      continue;
    }

    const html = fs.readFileSync(htmlPath, 'utf8');

    // Structured data in HTML is not allowed (only in <script type="application/ld+json">).
    // Duplicate structured data in HTML and in script is not allowed.
    const htmlStructuredDataIssues = findStructuredDataInHtml(html);
    if (htmlStructuredDataIssues.length > 0) {
      results.push({
        ok: false,
        error: `Structured data in HTML is not allowed (use only <script type="application/ld+json">). Found in HTML: ${htmlStructuredDataIssues.join(', ')}`,
        meta: { file: htmlPath, lang },
      });
    }

    const blocks = extractJsonLdBlocks(html);
    const foundTypes = new Set();
    const typeCounts = {};
    const typeBlocks = {}; // Track blocks by type for duplicate detection

    if (blocks.length === 0) {
      results.push({
        ok: false,
        error: `No JSON-LD blocks found in ${htmlPath}`,
        meta: { file: htmlPath, lang },
      });
      continue;
    }

    for (let i = 0; i < blocks.length; i++) {
      const res = parseJsonLd(blocks[i], { file: htmlPath, lang, index: i + 1 });
      if (!res.ok) {
        results.push(res);
        continue;
      }

      // Deep JSON-LD validation using jsonld.expand (async, schema-aware).
      try {
        // This will throw if JSON-LD syntax or context resolution is invalid.
        await jsonld.expand(res.obj, jsonLdExpandOptions);
      } catch (error) {
        results.push({
          ok: false,
          error: `JSON-LD validation failed for block #${i + 1}: ${error.message}`,
          meta: { file: htmlPath, lang, index: i + 1 },
        });
        // Skip further checks for this block once expansion fails.
        continue;
      }

      const types = normalizeTypes(res.type);
      for (const t of types) {
        foundTypes.add(t);
        typeCounts[t] = (typeCounts[t] || 0) + 1;
        
        // Track blocks by type
        if (!typeBlocks[t]) {
          typeBlocks[t] = [];
        }
        typeBlocks[t].push({ index: i + 1, obj: res.obj });
      }
      const printableType = types.length ? types.join(', ') : '(missing @type)';
      console.log(`${lang}: ${path.relative(projectRoot, htmlPath)} block #${i + 1} @type=${printableType}`);

      // Check for duplicate properties within this block
      const blockDuplicates = checkDuplicatesInBlock(res.obj);
      if (blockDuplicates.length > 0) {
        for (const dup of blockDuplicates) {
          results.push({
            ok: false,
            error: `Duplicate property in JSON-LD block #${i + 1}: ${dup.message}`,
            meta: { file: htmlPath, lang, index: i + 1, path: dup.path },
          });
        }
      }
    }

    // Check for duplicate @type blocks (same type appearing multiple times)
    for (const [type, blocks] of Object.entries(typeBlocks)) {
      if (blocks.length > 1) {
        const blockIndices = blocks.map(b => `#${b.index}`).join(', ');
        results.push({
          ok: false,
          error: `Duplicate JSON-LD @type "${type}" found in ${blocks.length} blocks: ${blockIndices}`,
          meta: { file: htmlPath, lang, type, count: blocks.length },
        });
      }
    }

    const missing = (EXPECTED_JSON_LD_TYPES || []).filter((t) => !foundTypes.has(t));
    if (missing.length) {
      results.push({
        ok: false,
        error: `Missing expected JSON-LD @type(s): ${missing.join(', ')}`,
        meta: { file: htmlPath, lang },
      });
    }
  }

  if (results.length === 0) {
    console.log(`✅ JSON-LD validation OK: all blocks parse correctly in ${LANGUAGES.length} page(s)`);
    return { ok: true };
  }

  console.error(`❌ JSON-LD validation failed: ${results.length} issue(s)`);
  for (const r of results) {
    const file = r.meta?.file || '(unknown file)';
    const lang = r.meta?.lang || '(unknown lang)';
    const idx = r.meta?.index ? ` block #${r.meta.index}` : '';
    console.error(`\n- ${lang}: ${file}${idx}`);
    console.error(`  ${r.error}`);
    if (typeof r.pos === 'number' && r.context) {
      console.error(`  (near position ${r.pos})`);
      console.error(`  --- context ---\n${r.context}\n  --- end context ---`);
    }
  }
  return { ok: false, errors: results };
}

module.exports = { validateJsonLD };
