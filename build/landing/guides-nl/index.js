/** Dutch guides. Order = priority. `en` links the English equivalent (hreflang). */
const ORDER = [
    'cv-maken',
    'cv-maken-op-telefoon',
    'cv-app',
    'cv-maker',
    'motivatiebrief-schrijven',
    'cv-opslaan-als-pdf',
    'gratis-cv-maken',
    'persoonlijk-profiel-cv',
    'cv-voorbeeld-sjablonen',
    'cv-zonder-werkervaring',
    'cv-aanpassen-vacature',
    'ats-cv',
    'cv-met-foto',
    'europass-cv'
];
module.exports = require('../guides/load')(__dirname, ORDER);
