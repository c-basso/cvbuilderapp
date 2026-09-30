/** Ukrainian guides. Order = priority. `en` links the English equivalent (hreflang). */
const ORDER = [
    'yak-napysaty-rezyume',
    'rezyume-na-telefoni',
    'dodatok-dlya-rezyume',
    'stvoryty-rezyume',
    'suprovidnyi-lyst',
    'rezyume-pdf-iphone',
    'rezyume-anhliiskoyu',
    'pro-sebe-v-rezyume',
    'rezyume-bez-dosvidu',
    'shablony-rezyume',
    'ats-rezyume',
    'rezyume-z-foto',
    'cv-i-rezyume',
    'rezyume-pid-vakansiyu'
];
module.exports = require('../guides/load')(__dirname, ORDER);
