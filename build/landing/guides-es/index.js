/** Spanish guides. Order = priority. `en` links the English equivalent (hreflang). */
const ORDER = [
    'como-hacer-un-curriculum-en-el-celular',
    'guardar-curriculum-en-pdf-iphone',
    'app-para-hacer-curriculum',
    'crear-curriculum-gratis',
    'carta-de-presentacion',
    'adaptar-curriculum-a-una-oferta',
    'como-hacer-un-curriculum',
    'perfil-profesional-curriculum',
    'cv-formato-harvard',
    'curriculum-sin-experiencia',
    'plantillas-de-curriculum',
    'cv-ats',
    'curriculum-con-foto',
    'hoja-de-vida-y-curriculum'
];
module.exports = require('../guides/load')(__dirname, ORDER);
