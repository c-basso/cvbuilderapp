/** Japanese guides. Order = priority. `en` links the English equivalent (hreflang). */
const ORDER = [
    'eibun-rirekisho-kakikata',
    'sumaho-resume-sakusei',
    'gaishikei-tenshoku-resume',
    'resume-pdf-iphone',
    'rirekisho-app',
    'eigo-cover-letter',
    'jiko-pr-summary',
    'shokumu-keirekisho',
    'cv-resume-chigai',
    'resume-ouboshaki-betsu',
    'shinsotsu-eibun-resume',
    'resume-template',
    'ats-resume',
    'resume-shashin'
];
module.exports = require('../guides/load')(__dirname, ORDER);
