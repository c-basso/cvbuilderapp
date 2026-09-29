/** Italian guides. Order = priority. `en` links the English equivalent (hreflang). */
const ORDER = [
    'curriculum-sul-telefono',
    'curriculum-pdf-iphone',
    'curriculum-europeo',
    'app-curriculum',
    'creare-curriculum-gratis',
    'lettera-di-presentazione',
    'adattare-curriculum-offerta',
    'come-fare-un-curriculum',
    'profilo-personale-curriculum',
    'competenze-curriculum',
    'curriculum-senza-esperienza',
    'modelli-curriculum',
    'curriculum-ats',
    'curriculum-con-foto'
];
module.exports = require('../guides/load')(__dirname, ORDER);
