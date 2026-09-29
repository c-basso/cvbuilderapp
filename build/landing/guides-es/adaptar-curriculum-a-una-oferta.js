module.exports = {
    slug: 'adaptar-curriculum-a-una-oferta',
    en: 'tailor-resume-to-job-description',
    keyword: 'cómo adaptar el currículum a una oferta',
    tag: 'Estrategia',
    navTitle: 'Adaptar el CV a una oferta',
    title: 'Cómo adaptar tu currículum a una oferta de empleo en 10 minutos',
    h1: 'Cómo adaptar tu currículum a cada oferta',
    description: 'Método de 5 pasos para adaptar tu currículum a una oferta de trabajo: palabras clave, orden de logros, perfil profesional y varias versiones del CV.',
    cardText: 'Una rutina de 10 minutos para que cada currículum encaje con la oferta.',
    lede: 'Enviar el mismo currículum a todas partes es la razón más común del silencio. Adaptarlo no es reescribirlo: son 10 minutos si tienes una buena versión base.',
    tldr: [
        'Ten un currículum base y una versión por tipo de puesto.',
        'Coincide con la oferta: nombre del puesto, habilidades y herramientas.',
        'Reordena los logros: lo más relevante arriba.',
        'Reescribe el perfil profesional para ese puesto.'
    ],
    sections: [
        {
            id: 'metodo',
            h2: 'La rutina en 5 pasos',
            html: `<ol><li><b>Analiza la oferta:</b> nombre del puesto, 5 requisitos principales, herramientas.</li><li><b>Actualiza puesto y perfil</b> con ese nombre y tu resultado más relevante.</li><li><b>Reordena logros</b>: el más relevante primero; elimina lo que no aporta.</li><li><b>Ajusta habilidades</b> con las palabras exactas de la oferta.</li><li><b>Revisa la extensión</b> y exporta un PDF nuevo con nombre claro.</li></ol>`
        },
        {
            id: 'ejemplo',
            h2: 'Antes y después',
            html: `<div class="example"><b>La oferta pide:</b> «gestión de proyectos, Jira, metodologías ágiles, stakeholders».<br><b>Antes:</b> Trabajé con varios departamentos en proyectos.<br><b>Después:</b> Gestioné proyectos ágiles en Jira para 3 equipos multifuncionales, coordinando a 12 stakeholders de producto y ventas.</div>`
        },
        {
            id: 'versiones',
            h2: '¿Cuántas versiones tener?',
            html: `<p>Una por <em>tipo de puesto</em>, no por candidatura. Por ejemplo: «Project Manager – Tecnología», «Project Manager – Construcción», «Operaciones». Luego, pequeños ajustes por oferta.</p>`
        }
    ],
    app: {
        h2: 'Varios currículums en CV Builder',
        intro: 'CV Builder guarda varios currículums, así tienes una versión para cada tipo de oferta.',
        screenshot: 5,
        steps: [
            ['Crea tu currículum base', 'Completa todas las secciones una vez.'],
            ['Crea una versión por tipo de puesto', 'Guarda varios currículums en la app.'],
            ['Ajusta «Sobre mí», habilidades y orden de logros', 'Con las palabras de la oferta.'],
            ['Exporta un PDF nuevo', 'Postúlate en minutos desde el móvil.']
        ],
        outro: 'Acompaña cada versión con una <a href="/es/guias/carta-de-presentacion/">carta de presentación</a> personalizada.'
    },
    faq: [
        { q: '¿Tengo que adaptar el currículum a cada oferta?', a: 'Al menos un poco. Coincidir en puesto, habilidades y perfil con la oferta mejora tanto los filtros ATS como la impresión del reclutador.' },
        { q: '¿Cómo guardo varias versiones de mi currículum?', a: 'Una por tipo de puesto. En CV Builder puedes guardar varios currículums y exportar cada uno en PDF.' },
        { q: '¿Cuánto se tarda en adaptar un CV?', a: 'Unos 10 minutos si partes de una buena versión base.' }
    ],
    related: ['cv-ats', 'perfil-profesional-curriculum', 'carta-de-presentacion']
};
