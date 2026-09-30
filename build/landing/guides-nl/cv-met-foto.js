module.exports = {
    slug: 'cv-met-foto',
    en: 'cv-with-photo',
    keyword: 'cv met foto',
    tag: 'Foto',
    navTitle: 'CV met foto',
    title: 'CV met foto: wel of niet doen, en welke foto kies je?',
    h1: 'Een foto op je cv: wel of niet?',
    description: 'Hoort er een foto op je cv? Wat gebruikelijk is in Nederland, België en andere landen, wat een goede cv-foto is en hoe je hem toevoegt of weglaat.',
    cardText: 'Gewoonten per land en eisen voor een goede cv-foto.',
    lede: 'In Nederland en België zie je vaak een foto op het cv, maar het is niet verplicht. Zo beslis je wat voor jou werkt.',
    tldr: ['Nederland en België: gebruikelijk, niet verplicht.', 'VS, VK, Canada: weglaten.', 'Duitsland, Oostenrijk: vaak wel.', 'Recente, professionele foto met rustige achtergrond.'],
    sections: [
        { id: 'landen', h2: 'Per land', html: `<table><thead><tr><th>Land</th><th>Foto</th></tr></thead><tbody><tr><td>Nederland, België</td><td>Optioneel, vaak wel</td></tr><tr><td>Duitsland, Oostenrijk, Zwitserland</td><td>Vaak wel</td></tr><tr><td>VS, VK, Canada</td><td>Niet doen</td></tr></tbody></table>` },
        { id: 'eisen', h2: 'Een goede cv-foto', html: `<ul><li>Recent en scherp.</li><li>Recht in de camera, vriendelijke uitstraling.</li><li>Rustige, lichte achtergrond.</li><li>Kleding die past bij de functie.</li></ul>` }
    ],
    appAfter: 1,
    app: {
        h2: 'Foto toevoegen of weglaten in CV Builder',
        intro: 'Kies een sjabloon met of zonder foto en wissel per sollicitatie.',
        screenshot: 2,
        steps: [['Sjabloon met foto', 'Of zonder.'], ['Foto toevoegen', 'Uit je fotobibliotheek of camera.'], ['PDF downloaden', 'Per vacature.']],
        outro: 'PDF-export hoort bij premium (met gratis proefperiode).'
    },
    faq: [
        { q: 'Mag een werkgever een foto eisen?', a: 'Meestal niet; een foto is een keuze van de sollicitant.' },
        { q: 'Mag ik een selfie gebruiken?', a: 'Liever niet. Kies een rustige, professionele foto.' }
    ],
    related: ['cv-voorbeeld-sjablonen', 'europass-cv', 'cv-maken']
};
