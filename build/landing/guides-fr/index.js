/** French guides. Order = priority. `en` links the English equivalent (hreflang). */
const ORDER = [
    'faire-un-cv-sur-iphone',
    'cv-en-pdf-iphone',
    'application-cv',
    'creer-un-cv-gratuit',
    'lettre-de-motivation',
    'adapter-son-cv-a-une-offre',
    'comment-faire-un-cv',
    'accroche-cv',
    'competences-cv',
    'cv-sans-experience',
    'modele-de-cv',
    'cv-ats',
    'cv-avec-photo',
    'cv-en-anglais'
];
module.exports = require('../guides/load')(__dirname, ORDER);
