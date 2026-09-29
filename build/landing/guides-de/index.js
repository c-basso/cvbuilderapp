/** German guides. Order = priority. `en` links the English equivalent (hreflang). */
const ORDER = [
    'lebenslauf-am-handy-erstellen',
    'lebenslauf-als-pdf-iphone',
    'lebenslauf-app',
    'lebenslauf-kostenlos-erstellen',
    'anschreiben',
    'lebenslauf-anpassen',
    'lebenslauf-schreiben',
    'tabellarischer-lebenslauf',
    'kurzprofil-lebenslauf',
    'lebenslauf-ohne-berufserfahrung',
    'lebenslauf-vorlagen',
    'lebenslauf-ats',
    'bewerbungsfoto',
    'europass-lebenslauf'
];
module.exports = require('../guides/load')(__dirname, ORDER);
