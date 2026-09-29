module.exports = {
    slug: 'cv-ats',
    en: 'ats-friendly-resume',
    keyword: 'CV ATS',
    tag: 'Portales de empleo',
    navTitle: 'Currículum ATS',
    title: 'CV ATS: cómo hacer un currículum que pase los filtros (2026)',
    h1: 'Cómo hacer un currículum compatible con ATS',
    description: 'Qué lee un sistema ATS, las reglas de formato para que tu CV se procese bien, cómo usar las palabras clave de la oferta y un checklist antes de enviarlo.',
    cardText: 'Reglas de formato y palabras clave para que los portales lean bien tu CV.',
    lede: 'Muchas empresas reciben candidaturas a través de un sistema de seguimiento (ATS). Este extrae el texto de tu CV y permite a los reclutadores buscar por palabras clave. Tu objetivo: que la extracción sea fácil y que aparezcan las palabras que buscan.',
    tldr: [
        'Envía PDF con texto real (o .docx si lo piden), nunca un escaneo.',
        'Títulos estándar: Perfil, Experiencia laboral, Educación, Habilidades.',
        'Usa las palabras exactas de la oferta: puesto, herramientas, certificaciones.',
        'No pongas información clave solo en imágenes, iconos o cuadros de texto.'
    ],
    sections: [
        {
            id: 'como-lee',
            h2: 'Cómo lee tu currículum un ATS',
            html: `<p>El sistema convierte el archivo en texto, identifica secciones por sus títulos y guarda puestos, fechas, habilidades y estudios. Luego el reclutador filtra («Excel» Y «analista»). Si el texto no se puede extraer o los títulos son raros, puedes quedarte fuera de esas búsquedas.</p>`
        },
        {
            id: 'formato',
            h2: 'Reglas de formato',
            html: `<ul><li>Fuentes estándar y texto real.</li><li>Títulos de sección convencionales.</li><li>Fechas homogéneas: <i>06/2021 – 03/2024</i>.</li><li>Viñetas simples; nada de tablas para el contenido principal.</li><li>Contacto en el cuerpo, no solo en el encabezado.</li><li>Para grandes portales, plantillas sencillas de una columna.</li></ul>`
        },
        {
            id: 'palabras-clave',
            h2: 'Cómo usar las palabras clave',
            html: `<ol><li>Copia la oferta y marca puesto, habilidades técnicas, herramientas y certificaciones.</li><li>Usa la misma redacción («gestión de proyectos»).</li><li>Incluye el nombre del puesto en tu perfil.</li><li>Pon las habilidades en su sección y demuéstralas en la experiencia.</li><li>No rellenes con palabras ocultas: el reclutador lo leerá.</li></ol>`
        },
        {
            id: 'checklist',
            h2: 'Checklist antes de enviar',
            html: `<ul><li>☐ ¿Puedes seleccionar y copiar el texto del PDF?</li><li>☐ Títulos estándar.</li><li>☐ El nombre del puesto aparece al menos una vez.</li><li>☐ Las 5 habilidades principales de la oferta aparecen.</li><li>☐ Archivo: Nombre-Apellido-CV.pdf.</li></ul>`
        }
    ],
    app: {
        h2: 'Crea un CV compatible con ATS en CV Builder',
        intro: 'CV Builder exporta PDF con texto real y nombres de sección convencionales, fáciles de procesar.',
        screenshot: 4,
        steps: [
            ['Completa las secciones estándar', 'Sobre mí, Experiencia laboral, Educación y Habilidades.'],
            ['Incluye las palabras clave', 'En Habilidades y en las viñetas de experiencia.'],
            ['Elige una plantilla sencilla', 'Una columna es lo más seguro para portales.'],
            ['Descarga el PDF y pruébalo', 'Ábrelo e intenta seleccionar el texto.']
        ],
        outro: 'Guarda una versión por tipo de puesto: <a href="/es/guias/adaptar-curriculum-a-una-oferta/">adaptar tu CV</a>.'
    },
    faq: [
        { q: '¿Qué es un CV ATS?', a: 'Un currículum con formato y palabras clave pensados para que los sistemas de seguimiento de candidatos lo lean correctamente.' },
        { q: '¿Los ATS leen PDF?', a: 'La mayoría de los ATS modernos leen PDF con texto real. Si piden Word, envía .docx.' },
        { q: '¿Funcionan los CV de dos columnas con ATS?', a: 'Muchos sistemas los procesan, pero una columna es la opción más segura en portales de grandes empresas.' }
    ],
    related: ['adaptar-curriculum-a-una-oferta', 'cv-formato-harvard', 'guardar-curriculum-en-pdf-iphone']
};
