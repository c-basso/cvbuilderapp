/** Polish guides. Order = priority. `en` links the English equivalent (hreflang). */
const ORDER = [
    'jak-napisac-cv',
    'cv-na-telefonie',
    'aplikacja-do-cv',
    'kreator-cv',
    'list-motywacyjny',
    'klauzula-rodo-cv',
    'cv-pdf-iphone',
    'cv-po-angielsku',
    'podsumowanie-zawodowe-cv',
    'cv-bez-doswiadczenia',
    'wzory-cv',
    'cv-ats',
    'cv-ze-zdjeciem',
    'dopasowanie-cv-do-oferty'
];
module.exports = require('../guides/load')(__dirname, ORDER);
