const SITE_URL = 'https://cvbuilderapp.com/';
const LOCAL_URL = 'http://127.0.0.1:8080/';
const DEFAULT_LANGUAGE = 'en';

const LANGUAGES = [
    DEFAULT_LANGUAGE,
    'ru',
    'es',
    'fr',
    'de',
    'it',
    'pt',
    'jp',
    'ko',
    'nl',
    'pl',
    'ro',
    'th',
    'tr',
    'uk',
    'vi',
    'cn'
];

/** BCP 47 hreflang values (URL path stays short: jp, cn, …). */
const HREFLANG_BY_CODE = {
    jp: 'ja',
    cn: 'zh-CN'
};

const URLS = LANGUAGES.map((code) => ({
    code,
    hreflang: HREFLANG_BY_CODE[code] || code,
    url: code === DEFAULT_LANGUAGE ? SITE_URL : `${SITE_URL}${code}/`
}));

const ADDITIONAL_URLS = [
    `${SITE_URL}llms.txt`,
    `${SITE_URL}guides/`,
    ...require('./landing/guides').GUIDES.map((g) => `${SITE_URL}guides/${g.slug}/`),
    `${SITE_URL}ru/guides/`,
    ...require('./landing/guides-ru').GUIDES.map((g) => `${SITE_URL}ru/guides/${g.slug}/`),
    `${SITE_URL}es/guias/`,
    ...require('./landing/guides-es').GUIDES.map((g) => `${SITE_URL}es/guias/${g.slug}/`),
    `${SITE_URL}fr/guides/`,
    ...require('./landing/guides-fr').GUIDES.map((g) => `${SITE_URL}fr/guides/${g.slug}/`),
    `${SITE_URL}de/ratgeber/`,
    ...require('./landing/guides-de').GUIDES.map((g) => `${SITE_URL}de/ratgeber/${g.slug}/`),
    `${SITE_URL}it/guide/`,
    ...require('./landing/guides-it').GUIDES.map((g) => `${SITE_URL}it/guide/${g.slug}/`),
    `${SITE_URL}pt/guias/`,
    ...require('./landing/guides-pt').GUIDES.map((g) => `${SITE_URL}pt/guias/${g.slug}/`),
    `${SITE_URL}jp/guides/`,
    ...require('./landing/guides-jp').GUIDES.map((g) => `${SITE_URL}jp/guides/${g.slug}/`)
];

// Expected JSON-LD types that should be present on each generated page.
// Keep this list in sync with `build/template.html` structured data scripts.
// Note: MobileApplication is a subtype of SoftwareApplication and is acceptable
const EXPECTED_JSON_LD_TYPES = [
    'MobileApplication', // or 'SoftwareApplication' - MobileApplication is more specific
    'Organization',
    'WebSite',
    'HowTo',
    'FAQPage',
    'BreadcrumbList'
];

const INDEX_NOW_KEY = 'BHyEKml9wPWc9rnQEIp44o2u';

/**
 * ISO date (UTC) for “content / numbers last updated” in {{statistics.last_updated}}.
 * Edit this when you refresh stats copy; month+year is rendered per locale in `getStatisticsLastUpdated`.
 */
const SITE_LAST_UPDATED_AT = new Date().toISOString().slice(0, 10);


// https://www.indexnow.org/searchengines.json
const INDEX_NOW_ENGINES = [
    'indexnow.yep.com',
    'search.seznam.cz',
    'searchadvisor.naver.com',
    'indexnow.amazonbot.amazon',
    'api.indexnow.org',
    'yandex.com',
    'bing.com'
];

module.exports = {
    SITE_URL,
    URLS,
    DEFAULT_LANGUAGE,
    LANGUAGES,
    EXPECTED_JSON_LD_TYPES,
    INDEX_NOW_KEY,
    INDEX_NOW_ENGINES,
    ADDITIONAL_URLS,
    SITE_LAST_UPDATED_AT
};