/** Locales that get the new landing page + guides. Others still use build/template.html. */
const en = require('./i18n/en');
const ru = require('./i18n/ru');
en.guides = require('./guides').GUIDES;
ru.guides = require('./guides-ru').GUIDES;
module.exports = { LOCALES: [en, ru], byCode: { en, ru } };
