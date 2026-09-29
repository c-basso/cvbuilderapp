module.exports = {
    slug: 'curriculum-con-foto',
    en: 'cv-with-photo',
    keyword: 'currículum con foto',
    tag: 'Internacional',
    navTitle: 'Currículum con foto',
    title: 'Currículum con foto: ¿sí o no? Guía por países y consejos',
    h1: '¿Hay que poner foto en el currículum?',
    description: 'Cuándo poner foto en el currículum y cuándo no: España, México, Latinoamérica, EE. UU. y Reino Unido. Cómo debe ser la foto y cómo añadirla en el iPhone.',
    cardText: 'Normas por país, cómo debe ser la foto y cómo añadirla bien.',
    lede: 'En España y buena parte de Latinoamérica un currículum sin foto puede parecer incompleto; en EE. UU., en cambio, se desaconseja. Te explicamos cuándo ponerla y cómo acertar.',
    tldr: [
        'España, México y gran parte de Latinoamérica: habitual.',
        'EE. UU., Canadá, Reino Unido: mejor sin foto.',
        'Foto reciente de hombros hacia arriba, buena luz, fondo neutro.',
        'Si la oferta indica algo, sigue la oferta.'
    ],
    sections: [
        {
            id: 'paises',
            h2: 'Foto en el currículum según el país',
            html: `<table><thead><tr><th>Región</th><th>¿Foto?</th></tr></thead><tbody>
<tr><td>España</td><td>Habitual, aunque cada vez más opcional</td></tr>
<tr><td>México, Colombia, Perú, Chile, Argentina</td><td>Habitual</td></tr>
<tr><td>Alemania, Francia, Italia</td><td>Habitual</td></tr>
<tr><td>EE. UU., Canadá</td><td>No recomendada</td></tr>
<tr><td>Reino Unido, Irlanda, Australia</td><td>Normalmente sin foto</td></tr>
</tbody></table><p>Las multinacionales a menudo siguen la norma estadounidense: fíjate en la oferta.</p>`
        },
        {
            id: 'como-debe-ser',
            h2: 'Cómo debe ser la foto',
            html: `<ul><li>De hombros hacia arriba, mirando a cámara, sonrisa natural.</li><li>Fondo liso y claro; luz natural de una ventana.</li><li>Ropa como para la entrevista.</li><li>Nada de selfies, filtros, gafas de sol ni recortes de fotos de grupo.</li><li>Formato vertical y buena resolución.</li></ul>`
        },
        {
            id: 'firma',
            h2: '¿Y la firma?',
            html: `<p>La firma es opcional en el CV; es más habitual en cartas de presentación y en algunos países europeos como Alemania.</p>`
        }
    ],
    app: {
        h2: 'Foto y firma en CV Builder',
        intro: 'CV Builder tiene una sección «Foto» y plantillas que la colocan en el encabezado.',
        screenshot: 2,
        steps: [
            ['Abre la sección «Foto»', 'Elígela de la galería o hazla en el momento.'],
            ['Elige una plantilla con foto', 'Revisa el encuadre en la vista previa.'],
            ['Añade tu firma si la necesitas', 'Útil para cartas y CV europeos.'],
            ['Crea una versión sin foto', 'Para EE. UU. y Reino Unido.']
        ]
    },
    faq: [
        { q: '¿Es obligatorio poner foto en el currículum?', a: 'No es obligatorio. En España y Latinoamérica es habitual; en EE. UU., Canadá y Reino Unido se recomienda no ponerla.' },
        { q: '¿Qué foto poner en el currículum?', a: 'Una foto reciente y profesional, de hombros hacia arriba, con fondo neutro y buena luz.' },
        { q: '¿Puedo añadir foto a mi currículum en el iPhone?', a: 'Sí. CV Builder tiene una sección «Foto» y plantillas pensadas para mostrarla.' }
    ],
    related: ['crear-curriculum-gratis', 'plantillas-de-curriculum', 'hoja-de-vida-y-curriculum']
};
