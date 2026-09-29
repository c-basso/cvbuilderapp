/** Russian guides. Order = priority. `en` field links the English equivalent (hreflang pair). */
const ORDER = [
    'kak-sostavit-rezyume-na-iphone',
    'rezyume-v-pdf-na-iphone',
    'konstruktor-rezyume',
    'soprovoditelnoe-pismo',
    'rezyume-pod-vakansiyu',
    'prilozhenie-dlya-rezyume',
    'kak-sostavit-rezyume',
    'o-sebe-v-rezyume',
    'klyuchevye-navyki-v-rezyume',
    'rezyume-bez-opyta-raboty',
    'shablony-rezyume',
    'rezyume-na-angliyskom',
    'rezyume-s-foto',
    'cv-i-rezyume-raznica'
];
module.exports = require('../guides/load')(__dirname, ORDER);
