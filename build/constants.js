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
    'pt'
];

const URLS = LANGUAGES.map((lang) => ({
    lang,
    local: lang === DEFAULT_LANGUAGE ? LOCAL_URL : `${LOCAL_URL}${lang}/`,
    url: lang === DEFAULT_LANGUAGE ? SITE_URL : `${SITE_URL}${lang}/`,
}));

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
    INDEX_NOW_ENGINES
};