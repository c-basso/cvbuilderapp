const fs = require('fs');
const path = require('path');
const { LANGUAGES, DEFAULT_LANGUAGE, SITE_URL } = require('../constants');

const MAX_SIZE_KB = 600;
const MAX_SIZE_BYTES = MAX_SIZE_KB * 1024;

// Required Open Graph meta tags
const REQUIRED_OG_TAGS = [
  'og:title',
  'og:description',
  'og:image',
  'og:type',
  'og:url',
  'og:site_name',
  'og:locale',
  'og:logo'
];

// Optional but recommended Open Graph meta tags
const OPTIONAL_OG_TAGS = [
  'og:image:alt'
];

// Description length constraints
const OG_DESCRIPTION_MIN_LENGTH = 110;
const OG_DESCRIPTION_MAX_LENGTH = 160;

function extractMetaTags(html) {
  const metaTags = {};
  // Match meta tags with proper quote handling - capture opening quote and match until matching closing quote
  const re = /<meta\s+(?:property|name)=(["'])([^"']+)\1\s+content=(["'])(.*?)\3/g;
  let m;
  while ((m = re.exec(html))) {
    const property = m[2];
    const content = m[4];
    metaTags[property] = content;
  }
  return metaTags;
}

function validateOpenGraphTags(html, { file, lang }) {
  const metaTags = extractMetaTags(html);
  const errors = [];
  const warnings = [];
  const found = {};

  // Check required tags
  for (const tag of REQUIRED_OG_TAGS) {
    if (!metaTags[tag]) {
      errors.push(`Missing required Open Graph tag: ${tag}`);
    } else {
      found[tag] = metaTags[tag];
      // Validate content is not empty
      if (!metaTags[tag].trim()) {
        errors.push(`Open Graph tag ${tag} has empty content`);
      }
    }
  }

  // Validate og:description length
  if (found['og:description']) {
    const descLength = found['og:description'].length;
    if (descLength < OG_DESCRIPTION_MIN_LENGTH) {
      errors.push(`og:description is too short: ${descLength} characters (minimum: ${OG_DESCRIPTION_MIN_LENGTH})`);
    } else if (descLength > OG_DESCRIPTION_MAX_LENGTH) {
      errors.push(`og:description is too long: ${descLength} characters (maximum: ${OG_DESCRIPTION_MAX_LENGTH})`);
    }
  }

  // Check optional tags
  for (const tag of OPTIONAL_OG_TAGS) {
    if (metaTags[tag]) {
      found[tag] = metaTags[tag];
    }
  }

  // Validate og:image URL
  if (found['og:image']) {
    const imageUrl = found['og:image'];
    if (!imageUrl.startsWith('http://') && !imageUrl.startsWith('https://')) {
      errors.push(`og:image must be an absolute URL (found: ${imageUrl})`);
    }
  }

  // Validate og:logo URL
  if (found['og:logo']) {
    const logoUrl = found['og:logo'];
    if (!logoUrl.startsWith('http://') && !logoUrl.startsWith('https://')) {
      errors.push(`og:logo must be an absolute URL (found: ${logoUrl})`);
    }
  }

  // Validate og:url
  if (found['og:url']) {
    const url = found['og:url'];
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      errors.push(`og:url must be an absolute URL (found: ${url})`);
    }
  }

  // Validate og:type
  if (found['og:type']) {
    const validTypes = ['website', 'article', 'book', 'profile', 'music', 'video'];
    if (!validTypes.includes(found['og:type'])) {
      warnings.push(`og:type "${found['og:type']}" is not a common type (common: ${validTypes.join(', ')})`);
    }
  }

  // Validate og:locale format
  if (found['og:locale']) {
    const locale = found['og:locale'];
    if (!/^[a-z]{2}_[A-Z]{2}$/.test(locale)) {
      warnings.push(`og:locale "${locale}" should follow format "xx_XX" (e.g., "en_US")`);
    }
  }

  return {
    ok: errors.length === 0,
    errors,
    warnings,
    found,
    meta: { file, lang }
  };
}

function validateImageSize(ogImageUrl, { file, lang }) {
  if (!ogImageUrl) {
    return {
      ok: false,
      error: 'og:image URL not found',
      imagePath: null,
      sizeKB: null
    };
  }

  const projectRoot = path.join(__dirname, '..', '..');
  
  // Extract local file path by removing SITE_URL prefix
  // e.g., "https://bluetoothfinderapp.com/site_preview.png" -> "site_preview.png"
  let imagePath;
  if (ogImageUrl.startsWith(SITE_URL)) {
    const relativePath = ogImageUrl.replace(SITE_URL, '');
    imagePath = path.join(projectRoot, relativePath);
  } else {
    // If URL doesn't start with SITE_URL, assume it's already a relative path
    imagePath = path.join(projectRoot, ogImageUrl);
  }

  if (!fs.existsSync(imagePath)) {
    return {
      ok: false,
      error: `og:image file not found: ${path.relative(projectRoot, imagePath)}`,
      imagePath,
      sizeKB: null,
      meta: { file, lang }
    };
  }

  const stats = fs.statSync(imagePath);
  const sizeKB = (stats.size / 1024).toFixed(2);
  const sizeBytes = stats.size;

  if (sizeBytes > MAX_SIZE_BYTES) {
    return {
      ok: false,
      error: `og:image file size ${sizeKB} KB exceeds maximum of ${MAX_SIZE_KB} KB`,
      imagePath,
      sizeKB: parseFloat(sizeKB),
      sizeBytes,
      meta: { file, lang }
    };
  }

  return {
    ok: true,
    imagePath,
    sizeKB: parseFloat(sizeKB),
    sizeBytes,
    meta: { file, lang }
  };
}

function validateOpenGraph() {
  const projectRoot = path.join(__dirname, '..', '..');
  const results = [];
  let allTagsOk = true;
  let allImagesOk = true;

  // Validate Open Graph tags in HTML files
  console.log('Validating Open Graph meta tags...');
  const ogImageUrls = new Set();
  
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
        type: 'file_missing'
      });
      allTagsOk = false;
      continue;
    }

    const html = fs.readFileSync(htmlPath, 'utf8');
    const tagResult = validateOpenGraphTags(html, { file: htmlPath, lang });

    if (!tagResult.ok) {
      allTagsOk = false;
      results.push({
        ...tagResult,
        type: 'tags'
      });
    } else {
      console.log(`  ${lang}: All required Open Graph tags found`);
      if (tagResult.warnings.length > 0) {
        console.log(`  ${lang}: Warnings:`);
        tagResult.warnings.forEach(w => console.log(`    - ${w}`));
      }
      
      // Collect og:image URL for validation
      if (tagResult.found['og:image']) {
        ogImageUrls.add(tagResult.found['og:image']);
      }
    }
  }

  // Validate og:image file size(s)
  console.log('\nValidating og:image file size(s)...');
  for (const ogImageUrl of ogImageUrls) {
    // Find which HTML file this URL came from for better error messages
    let sourceFile = null;
    let sourceLang = null;
    for (const lang of LANGUAGES) {
      const htmlPath = path.join(
        projectRoot,
        lang === DEFAULT_LANGUAGE ? 'index.html' : `${lang}/index.html`
      );
      if (fs.existsSync(htmlPath)) {
        const html = fs.readFileSync(htmlPath, 'utf8');
        const metaTags = extractMetaTags(html);
        if (metaTags['og:image'] === ogImageUrl) {
          sourceFile = htmlPath;
          sourceLang = lang;
          break;
        }
      }
    }
    
    const imageResult = validateImageSize(ogImageUrl, { 
      file: sourceFile || 'unknown', 
      lang: sourceLang || 'unknown' 
    });
    
    if (!imageResult.ok) {
      allImagesOk = false;
      results.push({
        ...imageResult,
        type: 'image_size',
        ogImageUrl
      });
    } else {
      const relativePath = path.relative(projectRoot, imageResult.imagePath);
      console.log(`  ✅ ${relativePath}: ${imageResult.sizeKB} KB (max allowed: ${MAX_SIZE_KB} KB)`);
    }
  }
  
  if (ogImageUrls.size === 0) {
    console.log('  ⚠️  No og:image URLs found to validate');
  }

  // Summary
  const allOk = allTagsOk && allImagesOk;
  if (!allOk) {
    console.error('\n❌ Open Graph validation failed:');
    for (const r of results) {
      if (r.type === 'tags') {
        const file = r.meta?.file || '(unknown file)';
        const lang = r.meta?.lang || '(unknown lang)';
        console.error(`\n- ${lang}: ${file}`);
        r.errors.forEach(err => console.error(`  ❌ ${err}`));
        if (r.warnings && r.warnings.length > 0) {
          r.warnings.forEach(warn => console.error(`  ⚠️  ${warn}`));
        }
      } else if (r.type === 'image_size') {
        const imagePath = r.imagePath ? path.relative(projectRoot, r.imagePath) : r.ogImageUrl || 'unknown';
        const lang = r.meta?.lang || '';
        console.error(`\n- ${lang ? `${lang}: ` : ''}${imagePath}: ${r.error}`);
      } else {
        console.error(`\n- ${r.meta?.file || 'unknown'}: ${r.error}`);
      }
    }
  } else {
    console.log('\n✅ Open Graph validation OK: all tags present and image size within limit');
  }

  return { ok: allOk, results };
}

module.exports = { validateOpenGraph };
