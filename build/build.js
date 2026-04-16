const fs = require('fs');
const path = require('path');

const {
    URLS,
    SITE_URL,
    DEFAULT_LANGUAGE,
    LANGUAGES
} = require('./constants');

const ROOT_DIR = path.join(__dirname, '..');
const TEMPLATE_PATH = path.join(__dirname, 'template.html');
const URLS_PATH = path.join(ROOT_DIR, 'urls.txt');
const BUILD_TIMESTAMP = Date.now();
const CURRENT_YEAR = new Date().getFullYear();
const DEFAULT_SITE_NAME = 'CV Builder';
const DEFAULT_OG_LOGO = `${SITE_URL}logo.webp`;

/** Keep template compatibility and explicit hreflang values in one place. */
const ALTERNATE_LANGUAGE_LINKS = URLS.map(({ code, hreflang, url }) => ({
    code,
    hreflang,
    lang: hreflang,
    url
}));

/** BCP 47 <html lang> (path codes like jp/cn are not valid tags). */
const HTML_LANG_BY_CODE = {
    cn: 'zh-CN',
    jp: 'ja'
};

/** Open Graph locale expects xx_XX. */
const OG_LOCALE_BY_LANGUAGE = {
    en: 'en_US',
    ru: 'ru_RU',
    es: 'es_ES',
    fr: 'fr_FR',
    de: 'de_DE',
    it: 'it_IT',
    pt: 'pt_PT',
    jp: 'ja_JP',
    ko: 'ko_KR',
    nl: 'nl_NL',
    pl: 'pl_PL',
    ro: 'ro_RO',
    th: 'th_TH',
    tr: 'tr_TR',
    uk: 'uk_UA',
    vi: 'vi_VN',
    cn: 'zh_CN'
};

const CANONICAL_URL_BY_LANGUAGE = new Map(
    URLS.map(({ code, url }) => [code, url])
);

function writeUrlsFile() {
    fs.writeFileSync(URLS_PATH, URLS.map(({ url }) => url).join('\n'), 'utf8');
    console.log('✅ Successfully built urls.txt file');
    console.log(`📁 Output saved to: ${URLS_PATH}`);
    console.log('');
}

function ensureDirectoryExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

function readJsonFile(filePath) {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function stripHtml(value) {
    if (typeof value !== 'string') {
        return value;
    }

    return value
        .replace(/<[^>]*>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function getOutputDirectory(lang) {
    return path.join(ROOT_DIR, lang === DEFAULT_LANGUAGE ? '.' : lang);
}

function getJsonPath(lang) {
    return path.join(__dirname, `${lang}.json`);
}

function getOutputPath(lang) {
    return path.join(getOutputDirectory(lang), 'index.html');
}

function getMissingTranslationFiles() {
    return LANGUAGES
        .map((lang) => ({ lang, jsonPath: getJsonPath(lang) }))
        .filter(({ jsonPath }) => !fs.existsSync(jsonPath));
}

function getPreviewPath(lang) {
    const relativePath = lang === DEFAULT_LANGUAGE ? 'site_preview.png' : `${lang}/site_preview.png`;
    const absolutePath = path.join(ROOT_DIR, relativePath);
    return `${SITE_URL}${fs.existsSync(absolutePath) ? relativePath : 'site_preview.png'}`;
}

function getCanonicalUrl(meta, lang) {
    return (
        meta.canonical ||
        meta.alternate_url ||
        meta.altenate_url ||
        CANONICAL_URL_BY_LANGUAGE.get(lang) ||
        SITE_URL
    );
}

function removeAlternateMetaFields(meta) {
    for (const key of Object.keys(meta)) {
        if (key.startsWith('alternate_')) {
            delete meta[key];
        }
    }
}

function normalizeMeta(data, lang) {
    data.meta = data.meta || {};
    removeAlternateMetaFields(data.meta);

    const canonicalUrl = getCanonicalUrl(data.meta, lang);
    const previewPath = getPreviewPath(lang);

    data.meta.lang = data.meta.lang || lang;
    data.meta.html_lang = data.meta.html_lang || HTML_LANG_BY_CODE[lang] || data.meta.lang;
    data.meta.version = BUILD_TIMESTAMP;
    data.meta.canonical = canonicalUrl;
    data.meta.alternate_default = SITE_URL;
    data.meta.alternate_languages = ALTERNATE_LANGUAGE_LINKS;
    data.meta.og_url = canonicalUrl;
    data.meta.twitter_url = canonicalUrl;
    data.meta.og_image = previewPath;
    data.meta.twitter_image = previewPath;
    data.meta.og_logo = data.meta.og_logo || DEFAULT_OG_LOGO;
    data.meta.og_site_name = data.meta.og_site_name || DEFAULT_SITE_NAME;
    data.meta.og_locale = data.meta.og_locale || OG_LOCALE_BY_LANGUAGE[lang] || OG_LOCALE_BY_LANGUAGE.en;
}

function normalizeFooter(data) {
    if (typeof data.footer?.copyright === 'string') {
        data.footer.copyright = data.footer.copyright.replace(/\{year\}/g, String(CURRENT_YEAR));
    }
}

function ensureSeoShape(data) {
    data.seo = data.seo || {};
    data.seo.structured_data = data.seo.structured_data || {};
}

function buildOrganizationStructuredData(data) {
    if (data.seo.structured_data.organization) {
        return;
    }

    data.seo.structured_data.organization = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: data.meta?.og_site_name || data.app_info?.name || DEFAULT_SITE_NAME,
        url: data.meta?.canonical || SITE_URL,
        logo: data.meta?.og_logo || DEFAULT_OG_LOGO
    };
}

function buildSoftwareApplicationStructuredData(data) {
    const application = data.seo.structured_data.software_application;

    if (!application || typeof application !== 'object') {
        return;
    }

    application.url = data.meta?.canonical;
    application.downloadUrl = data.header?.download_url || data.hero?.cta_url;
}

function buildWebsiteStructuredData(data) {
    const fallbackName = data.meta?.og_site_name || data.app_info?.name || DEFAULT_SITE_NAME;

    if (!data.seo.structured_data.website) {
        data.seo.structured_data.website = {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: fallbackName,
            url: data.meta?.canonical || SITE_URL
        };
        return;
    }

    if (typeof data.seo.structured_data.website === 'object') {
        data.seo.structured_data.website.url = data.meta?.canonical;
        data.seo.structured_data.website.name = data.seo.structured_data.website.name || fallbackName;
    }
}

function buildHowToStructuredData(data) {
    if (!data.seo.structured_data.howto) {
        data.seo.structured_data.howto = {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: stripHtml(data.meta?.title),
            description: stripHtml(data.meta?.description)
        };
    }

    if (typeof data.seo.structured_data.howto !== 'object') {
        return;
    }

    if (Array.isArray(data.how_it_works?.steps)) {
        data.seo.structured_data.howto.step = data.how_it_works.steps.map((step) => ({
            '@type': 'HowToStep',
            name: stripHtml(step?.title),
            text: stripHtml(step?.description)
        }));
    }

    if (!Array.isArray(data.seo.structured_data.howto.step)) {
        data.seo.structured_data.howto.step = [];
    }
}

function buildFaqStructuredData(data) {
    const faqItems = Array.isArray(data.faq?.items)
        ? data.faq.items
        : Array.isArray(data.seo?.faq)
            ? data.seo.faq
            : [];

    if (faqItems.length === 0) {
        if (!data.seo.structured_data.faqpage) {
            data.seo.structured_data.faqpage = {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: []
            };
        }
        return;
    }

    data.seo.structured_data.faqpage = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((faq) => ({
            '@type': 'Question',
            name: stripHtml(faq?.question),
            acceptedAnswer: {
                '@type': 'Answer',
                text: stripHtml(faq?.answer)
            }
        }))
    };
}

function buildBreadcrumbStructuredData(data) {
    data.seo.breadcrumb_home = data.seo.breadcrumb_home || data.meta?.title || 'Home';
    data.seo.structured_data.breadcrumb_list = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: data.seo.breadcrumb_home,
                item: data.meta?.canonical
            }
        ]
    };
}

function preparePageData(data, lang) {
    normalizeMeta(data, lang);
    normalizeFooter(data);
    ensureSeoShape(data);
    buildOrganizationStructuredData(data);
    buildSoftwareApplicationStructuredData(data);
    buildWebsiteStructuredData(data);
    buildHowToStructuredData(data);
    buildFaqStructuredData(data);
    buildBreadcrumbStructuredData(data);
    return data;
}

function getValue(obj, keyPath) {
    return keyPath.split('.').reduce((value, key) => {
        if (value && typeof value === 'object' && key in value) {
            return value[key];
        }
        return undefined;
    }, obj);
}

function warnForTemplateIssue(lang, message) {
    console.warn(`Warning [${lang}]: ${message}`);
}

function escapeHtmlAttr(value) {
    if (typeof value !== 'string') {
        return value;
    }

    return value
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function applyFilters(value, filters, rawKey, lang) {
    let nextValue = value;

    for (const filter of filters) {
        if (filter === 'json') {
            nextValue = JSON.stringify(nextValue);
            continue;
        }

        if (filter === 'html_attr') {
            nextValue = escapeHtmlAttr(String(nextValue));
            continue;
        }

        warnForTemplateIssue(lang, `Unknown filter "${filter}" in ${rawKey}`);
    }

    return nextValue;
}

function replaceVariables(template, context, lang) {
    return template.replace(/\{\{([^}]+)\}\}/g, (match, key) => {
        const rawKey = key.trim();

        if (rawKey.startsWith('#each') || rawKey === '/each') {
            return match;
        }

        const [pathExpression, ...filters] = rawKey
            .split('|')
            .map((segment) => segment.trim())
            .filter(Boolean);

        const value = getValue(context, pathExpression);

        if (value === undefined) {
            warnForTemplateIssue(lang, `Variable ${pathExpression} not found in data`);
            return match;
        }

        return applyFilters(value, filters, rawKey, lang);
    });
}

function cleanupJsonArtifacts(value) {
    return value
        .replace(/,\s*\n[\s\n]*\]/g, '\n            ]')
        .replace(/,\s*\]/g, ']');
}

function processEachBlocks(template, context, lang) {
    const eachPattern = /\{\{#each\s+([^\s]+)\s+as\s+\|([^|]+)\|\}\}([\s\S]*?)\{\{\/each\}\}/;
    let result = template;
    let match = result.match(eachPattern);

    while (match) {
        const [fullMatch, arrayPathRaw, variableNameRaw, blockContent] = match;
        const arrayPath = arrayPathRaw.trim();
        const variableName = variableNameRaw.trim();
        const array = getValue(context, arrayPath);

        if (!Array.isArray(array)) {
            warnForTemplateIssue(lang, `${arrayPath} is not an array or not found`);
            result = result.replace(fullMatch, '');
            match = result.match(eachPattern);
            continue;
        }

        const renderedBlocks = cleanupJsonArtifacts(
            array
                .map((item) => {
                    const nestedContext = { ...context, [variableName]: item };
                    const renderedBlock = processEachBlocks(blockContent, nestedContext, lang);
                    return replaceVariables(renderedBlock, nestedContext, lang);
                })
                .join('')
        );

        result = result.replace(fullMatch, renderedBlocks);
        match = result.match(eachPattern);
    }

    return result;
}

function renderTemplate(template, data, lang) {
    const withEachBlocks = processEachBlocks(template, data, lang);
    const withVariables = replaceVariables(withEachBlocks, data, lang);
    return cleanupJsonArtifacts(withVariables);
}

function buildPage(template, lang) {
    const outputDirectory = getOutputDirectory(lang);
    const outputPath = getOutputPath(lang);
    const jsonPath = getJsonPath(lang);

    ensureDirectoryExists(outputDirectory);

    const data = preparePageData(readJsonFile(jsonPath), lang);
    const result = renderTemplate(template, data, lang);

    fs.writeFileSync(outputPath, result, 'utf8');

    console.log(`✅ Successfully built ${lang}.html from template and ${lang}.json`);
    console.log(`📁 Output saved to: ${outputPath}`);
}

function main() {
    const missingTranslations = getMissingTranslationFiles();

    if (missingTranslations.length > 0) {
        const missingFiles = missingTranslations
            .map(({ lang, jsonPath }) => `${lang}: ${path.basename(jsonPath)}`)
            .join(', ');

        console.error(`❌ Missing translation files: ${missingFiles}`);
        process.exit(1);
    }

    const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');

    writeUrlsFile();

    for (const lang of LANGUAGES) {
        try {
            buildPage(template, lang);
        } catch (error) {
            console.error(`❌ Error building ${lang}.html:`, error.message);
            process.exit(1);
        }
    }
}

main();
