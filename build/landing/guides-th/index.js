/** Thai guides. Order = priority. `en` links the English equivalent (hreflang). */
const ORDER = [
    'resume-phasa-angkrit',
    'tham-resume-mue-thue',
    'app-resume',
    'withi-khian-resume',
    'resume-borisat-tangchat',
    'resume-pdf-iphone',
    'cover-letter',
    'cv-resume-tangkan',
    'resume-summary',
    'resume-jop-mai',
    'resume-template',
    'ats-resume',
    'resume-photo',
    'resume-tailor'
];
module.exports = require('../guides/load')(__dirname, ORDER);
