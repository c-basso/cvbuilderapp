/** Korean guides. Order = priority. `en` links the English equivalent (hreflang). */
const ORDER = [
    'yeongmun-iryeokseo',
    'smartphone-resume',
    'oegugye-resume',
    'resume-pdf-iphone',
    'iryeokseo-app',
    'yeongmun-cover-letter',
    'jagisogaeseo-cover-letter',
    'resume-summary',
    'cv-resume-chai',
    'resume-tailor',
    'sinip-yeongmun-resume',
    'resume-template',
    'ats-resume',
    'resume-photo'
];
module.exports = require('../guides/load')(__dirname, ORDER);
