/** Portuguese guides. Order = priority. `en` links the English equivalent (hreflang). */
const ORDER = [
    'curriculo-no-telemovel',
    'curriculo-pdf-iphone',
    'curriculo-europass',
    'editar-cv-europass',
    'app-para-fazer-curriculo',
    'fazer-curriculo-gratis',
    'carta-de-apresentacao',
    'adaptar-curriculo-a-vaga',
    'como-fazer-um-curriculo',
    'perfil-profissional-curriculo',
    'competencias-curriculo',
    'curriculo-sem-experiencia',
    'modelos-de-curriculo',
    'curriculo-ats',
    'curriculo-com-foto'
];
module.exports = require('../guides/load')(__dirname, ORDER);
