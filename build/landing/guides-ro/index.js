/** Romanian guides. Order = priority. `en` links the English equivalent (hreflang). */
const ORDER = [
    'cum-sa-faci-un-cv',
    'cv-pe-telefon',
    'aplicatie-cv',
    'creare-cv',
    'cv-europass',
    'scrisoare-de-intentie',
    'modele-cv',
    'cv-pdf-iphone',
    'cv-in-engleza',
    'profil-profesional-cv',
    'cv-fara-experienta',
    'cv-ats',
    'cv-cu-poza',
    'adaptare-cv-job'
];
module.exports = require('../guides/load')(__dirname, ORDER);
