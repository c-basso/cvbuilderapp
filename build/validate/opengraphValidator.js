const fs = require('fs');
const path = require('path');
const { LANGUAGES, DEFAULT_LANGUAGE, SITE_URL } = require('../constants');
const { readImageDimensions } = require('../lib/imageDimensions');

const MAX_SIZE_KB = 600;
const MAX_SIZE_BYTES = MAX_SIZE_KB * 1024;

/**
 * Источники по спецификации: Open Graph — https://ogp.me/ ; Twitter Cards — документация X.
 *
 * В CI проверяется не «минимум ogp.me», а набор правил этого репозитория: базовые четыре поля OGP
 * плюс то, что нужно для стабильных превью и бренда (длина og:description, og:site_name,
 * og:locale, og:logo, размеры og/twitter image, лимит веса файла и т.д.). Упростить до голого
 * ogp.me можно, ослабив REQUIRED_* и связанные проверки ниже.
 *
 * Синтаксис по документации: OGP — теги `og:*` в атрибуте `property` (RDFa), как на ogp.me;
 * Twitter Cards — теги `twitter:*` в атрибуте `name`. См. validateMetaRdfaConventions().
 */

// Required Open Graph meta tags (project rules; superset of ogp.me core four)
const REQUIRED_OG_TAGS = [
  'og:title',
  'og:description',
  'og:image',
  'og:type',
  'og:url',
  'og:site_name',
  'og:locale',
  'og:logo',
  'og:image:width',
  'og:image:height'
];

// Optional but recommended Open Graph meta tags
const OPTIONAL_OG_TAGS = [
  'og:image:alt'
];

/** Twitter / X Cards — https://developer.twitter.com/en/docs/twitter-for-websites/cards */
const REQUIRED_TWITTER_TAGS = [
  'twitter:card',
  'twitter:title',
  'twitter:description',
  'twitter:image',
  'twitter:image:width',
  'twitter:image:height'
];

/** Recommended; many crawlers fall back to og:url / canonical if omitted */
const OPTIONAL_TWITTER_TAGS = ['twitter:url'];

const VALID_TWITTER_CARD_TYPES = new Set([
  'summary',
  'summary_large_image',
  'app',
  'player'
]);

// Description length constraints
const OG_DESCRIPTION_MIN_LENGTH = 110;
const OG_DESCRIPTION_MAX_LENGTH = 160;

function extractMetaTags(html) {
  const metaTags = {};
  const re = /<meta\b([^>]*?)>/gi;
  let m;
  while ((m = re.exec(html))) {
    const attrs = m[1];
    const nameMatch = attrs.match(/\b(?:property|name)=["']([^"']+)["']/i);
    const contentMatch = attrs.match(/\bcontent=["']([^"']*)["']/i);
    if (nameMatch && contentMatch) {
      metaTags[nameMatch[1]] = contentMatch[1];
    }
  }
  return metaTags;
}

/**
 * Open Graph (https://ogp.me/) — разметка через property="og:...".
 * Twitter / X Cards — через name="twitter:..." (не property).
 */
function validateMetaRdfaConventions(html, { lang }) {
  const errors = [];
  const re = /<meta\b([^>]*?)>/gi;
  let m;
  while ((m = re.exec(html))) {
    const attrs = m[1];
    const propMatch = attrs.match(/\bproperty=["']([^"']+)["']/i);
    const nameMatch = attrs.match(/\bname=["']([^"']+)["']/i);
    const contentMatch = attrs.match(/\bcontent=["']([^"']*)["']/i);
    if (!contentMatch) {
      continue;
    }

    if (propMatch && nameMatch) {
      errors.push(
        `${lang}: one <meta> must not use both property and name (property="${propMatch[1]}", name="${nameMatch[1]}")`
      );
      continue;
    }

    if (propMatch) {
      const key = propMatch[1];
      if (key.startsWith('twitter:')) {
        errors.push(
          `${lang}: Twitter Card "${key}" must use name=, not property= (X Cards markup)`
        );
      }
    } else if (nameMatch) {
      const key = nameMatch[1];
      if (key.startsWith('og:')) {
        errors.push(
          `${lang}: Open Graph "${key}" must use property=, not name= (https://ogp.me/)`
        );
      }
    }
  }

  return errors;
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

  // Validate og:type (see global types at https://ogp.me/ — not only bare "music"/"video")
  if (found['og:type']) {
    if (!isPlausibleOgType(found['og:type'])) {
      warnings.push(
        `og:type "${found['og:type']}" is unusual; ogp.me uses e.g. website, article, book, profile, music.*, video.*, or a namespaced type`
      );
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

function validateTwitterTags(html, { file, lang }) {
  const metaTags = extractMetaTags(html);
  const errors = [];
  const warnings = [];
  const found = {};

  for (const tag of REQUIRED_TWITTER_TAGS) {
    if (!metaTags[tag]) {
      errors.push(`Missing required Twitter Card tag: ${tag}`);
    } else {
      found[tag] = metaTags[tag];
      if (!metaTags[tag].trim()) {
        errors.push(`Twitter Card tag ${tag} has empty content`);
      }
    }
  }

  for (const tag of OPTIONAL_TWITTER_TAGS) {
    if (metaTags[tag]) {
      found[tag] = metaTags[tag];
    }
  }

  if (found['twitter:card'] && !VALID_TWITTER_CARD_TYPES.has(found['twitter:card'])) {
    errors.push(
      `twitter:card must be one of: ${[...VALID_TWITTER_CARD_TYPES].join(', ')} (found: ${found['twitter:card']})`
    );
  }

  if (found['twitter:image']) {
    const imageUrl = found['twitter:image'];
    if (!imageUrl.startsWith('http://') && !imageUrl.startsWith('https://')) {
      errors.push(`twitter:image must be an absolute URL (found: ${imageUrl})`);
    }
  }

  if (found['twitter:url']) {
    const url = found['twitter:url'];
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      errors.push(`twitter:url must be an absolute URL (found: ${url})`);
    }
  }

  for (const tag of OPTIONAL_TWITTER_TAGS) {
    if (!metaTags[tag]) {
      warnings.push(`Optional Twitter Card tag missing (recommended): ${tag}`);
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

function isPlausibleOgType(value) {
  if (!value) return false;
  const builtins = new Set(['website', 'article', 'book', 'profile']);
  if (builtins.has(value)) return true;
  // Verticals from ogp.me: music.song, video.movie, etc.
  if (/^(music|video)\.[a-z_]+$/i.test(value)) return true;
  // User-defined namespaced types use a colon (CURIE)
  if (value.includes(':')) return true;
  return false;
}

function resolveSiteImageUrlToLocalPath(imageUrl, projectRoot) {
  if (!imageUrl || typeof imageUrl !== 'string') return null;
  if (imageUrl.startsWith(SITE_URL)) {
    const relativePath = imageUrl.replace(SITE_URL, '');
    return path.join(projectRoot, relativePath);
  }
  return path.join(projectRoot, imageUrl);
}

/**
 * Ensures og:image:* / twitter:image:* width and height match the local raster file bytes.
 */
async function validateDeclaredImageDimensions(metaTags, projectRoot, { file, lang }) {
  const errors = [];
  const bases = ['og:image', 'twitter:image'];

  for (const base of bases) {
    const wKey = `${base}:width`;
    const hKey = `${base}:height`;
    const wStr = metaTags[wKey];
    const hStr = metaTags[hKey];

    if (!wStr?.trim() || !hStr?.trim()) {
      continue;
    }

    const wTag = parseInt(wStr, 10);
    const hTag = parseInt(hStr, 10);
    if (!Number.isFinite(wTag) || wTag <= 0 || !Number.isFinite(hTag) || hTag <= 0) {
      errors.push(
        `${wKey} and ${hKey} must be positive integers (${lang}: "${wStr}", "${hStr}")`
      );
      continue;
    }

    const imageUrl = metaTags[base];
    const localPath = resolveSiteImageUrlToLocalPath(imageUrl, projectRoot);

    if (!localPath || !fs.existsSync(localPath)) {
      errors.push(
        `Cannot verify ${base} dimensions: file missing for URL (${imageUrl})`
      );
      continue;
    }

    let actual;
    try {
      actual = await readImageDimensions(localPath);
    } catch (e) {
      errors.push(
        `Cannot read dimensions of ${path.relative(projectRoot, localPath)}: ${e.message}`
      );
      continue;
    }

    if (actual.width !== wTag || actual.height !== hTag) {
      errors.push(
        `${base}: meta declares ${wTag}×${hTag} but ${path.relative(projectRoot, localPath)} is ${actual.width}×${actual.height} (${lang})`
      );
    }
  }

  return errors;
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

async function validateOpenGraph() {
  const projectRoot = path.join(__dirname, '..', '..');
  const results = [];
  let allTagsOk = true;
  let allImagesOk = true;

  // Validate Open Graph tags in HTML files
  console.log('Validating Open Graph and Twitter Card meta tags...');
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
    const metaTags = extractMetaTags(html);
    const rdfaErrors = validateMetaRdfaConventions(html, { lang });
    const tagResult = validateOpenGraphTags(html, { file: htmlPath, lang });
    const twitterResult = validateTwitterTags(html, { file: htmlPath, lang });
    const dimensionErrors = await validateDeclaredImageDimensions(metaTags, projectRoot, {
      file: htmlPath,
      lang
    });

    const tagsOk =
      tagResult.ok &&
      twitterResult.ok &&
      dimensionErrors.length === 0 &&
      rdfaErrors.length === 0;
    const mergedErrors = [
      ...rdfaErrors,
      ...tagResult.errors,
      ...twitterResult.errors,
      ...dimensionErrors
    ];
    const mergedWarnings = [...tagResult.warnings, ...twitterResult.warnings];

    if (!tagsOk) {
      allTagsOk = false;
      results.push({
        ok: false,
        errors: mergedErrors,
        warnings: mergedWarnings,
        meta: { file: htmlPath, lang },
        type: 'tags'
      });
    } else {
      console.log(`  ${lang}: All required Open Graph and Twitter Card tags found`);
      if (mergedWarnings.length > 0) {
        console.log(`  ${lang}: Warnings:`);
        mergedWarnings.forEach(w => console.log(`    - ${w}`));
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
    console.log('\n✅ Open Graph / Twitter Card validation OK: all tags present and image size within limit');
  }

  return { ok: allOk, results };
}

module.exports = {
  validateOpenGraph,
  validateOpenGraphTags,
  validateTwitterTags,
  extractMetaTags,
  validateMetaRdfaConventions,
  validateDeclaredImageDimensions
};
