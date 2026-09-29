/**
 * Shared, locale-independent facts. Locale-specific copy lives in i18n/<code>.js.
 * Source of truth for listing data: app.md / app.ru.md (App Store snapshots).
 */
const { SITE_URL, URLS } = require('../constants');

module.exports = {
    SITE_URL,
    URLS,
    APP_STORE_ID: '1630645768',
    BRAND: 'CV Builder',
    DEVELOPER: 'Vladimir Ivakhnenko',
    PUBLISHER: 'c-basso',
    VERSION: '1.23.0',
    FILE_SIZE: '57.9 MB',
    MIN_IOS: 'iOS 18.6',
    SUPPORT_EMAIL: 'c-basso@ya.ru',
    PRIVACY_URL: '/privacy.html',
    TERMS_URL: '/terms.html',
    OG_IMAGE_W: 1200,
    OG_IMAGE_H: 630,
    METRIKA_ID: 103204686
};
