/** Turkish guides. Order = priority. `en` links the English equivalent (hreflang). */
const ORDER = [
    'cv-nasil-hazirlanir',
    'telefondan-cv-hazirlama',
    'cv-hazirlama-uygulamasi',
    'cv-olusturucu',
    'on-yazi',
    'ucretsiz-cv-hazirlama',
    'cv-pdf-iphone',
    'ingilizce-cv',
    'cv-ornekleri-sablonlari',
    'cv-ozet-ornekleri',
    'deneyimsiz-cv',
    'ats-uyumlu-cv',
    'cv-fotograf',
    'cv-ilana-gore-uyarlama'
];
module.exports = require('../guides/load')(__dirname, ORDER);
