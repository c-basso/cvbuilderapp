module.exports = {
    slug: 'cv-en-anglais',
    keyword: 'CV en anglais',
    tag: 'International',
    navTitle: 'CV en anglais',
    title: 'CV en anglais : structure, traductions et exemples (2026)',
    h1: 'Comment faire un CV en anglais',
    description: 'Faire un CV en anglais : structure, titres de rubriques, traduction des diplômes et postes, formats de date, verbes d’action et erreurs de « franglais ».',
    cardText: 'Structure, titres, traduction des diplômes et erreurs de franglais à éviter.',
    lede: 'Pour une entreprise internationale ou un poste à l’étranger, il faut un CV en anglais — et pas une simple traduction mot à mot. Voici la structure, les formulations et les détails qui trahissent un CV « traduit ».',
    tldr: [
        'Rubriques : Summary, Work Experience, Education, Skills, Languages, Certifications.',
        'Réalisations au passé avec verbes d’action : Led, Increased, Reduced.',
        'Dates « Mar 2022 – Present » ; ni photo ni âge pour le Royaume-Uni et les États-Unis.',
        'Resume (US) = 1 page ; CV (UK) = 2 pages max.'
    ],
    sections: [
        {
            id: 'rubriques',
            h2: 'Les titres de rubriques',
            html: `<table><thead><tr><th>En français</th><th>En anglais</th></tr></thead><tbody>
<tr><td>Accroche / Profil</td><td>Summary / Profile</td></tr><tr><td>Expérience professionnelle</td><td>Work Experience</td></tr><tr><td>Formation</td><td>Education</td></tr><tr><td>Compétences</td><td>Skills</td></tr><tr><td>Langues</td><td>Languages</td></tr><tr><td>Certifications</td><td>Certifications</td></tr><tr><td>Centres d’intérêt</td><td>Interests</td></tr><tr><td>Références</td><td>References</td></tr>
</tbody></table>`
        },
        {
            id: 'diplomes',
            h2: 'Traduire diplômes et intitulés',
            html: `<ul><li><b>Bac</b> : French Baccalaureate (high school diploma).</li><li><b>Licence</b> : Bachelor’s degree (3 years).</li><li><b>Master</b> : Master’s degree.</li><li><b>BTS / DUT / BUT</b> : Two/Three-year technical degree (précisez le domaine).</li><li><b>Grande école</b> : ajoutez une courte explication (« top-ranked business school »).</li><li><b>Chargé·e de…</b> : cherchez l’équivalent réel (Account Manager, Project Officer), pas le mot à mot.</li></ul>`
        },
        {
            id: 'formulations',
            h2: 'Formuler ses réalisations',
            html: `<div class="example"><b>En français :</b> Responsable des achats, réduction des coûts.<br><b>En anglais :</b> Reduced procurement costs by 15% (€120K per year) by renegotiating contracts with 8 key suppliers.</div><p>Verbes utiles : Led, Managed, Launched, Increased, Reduced, Implemented, Negotiated, Delivered.</p>`
        },
        {
            id: 'pieges',
            h2: 'Les pièges du franglais',
            html: `<ul><li>« Formation » ≠ <i>formation</i> → <b>Education</b> ou <b>Training</b>.</li><li>« Stage » → <b>Internship</b>.</li><li>« Compétences informatiques » → <b>IT skills</b>, pas <i>informatic</i>.</li><li>« Actuellement » → <b>currently</b>, pas <i>actually</i>.</li><li>Niveau de langue : French — Native, English — C1 (Advanced).</li></ul>`
        }
    ],
    app: {
        h2: 'Votre CV en anglais dans CV Builder',
        intro: 'Gardez la version française et la version anglaise côte à côte dans la même app.',
        screenshot: 2,
        steps: [
            ['Créez un CV séparé', 'Par exemple « Resume EN », à côté du CV français.'],
            ['Remplissez les rubriques en anglais', 'Avec les formulations et formats de date de ce guide.'],
            ['Vérifiez les titres dans l’aperçu', 'S’ils restent en français, passez la langue de l’app en anglais : Réglages iOS → l’app → Langue.'],
            ['Téléchargez le PDF', 'Nommez-le Camille_Martin_Resume.pdf.']
        ],
        outro: 'Pour le Royaume-Uni et les États-Unis, retirez la photo : voir <a href="/fr/guides/cv-avec-photo/">photo sur le CV</a>.'
    },
    faq: [
        { q: 'CV ou resume en anglais ?', a: 'Resume pour les États-Unis et le Canada (souvent 1 page), CV pour le Royaume-Uni et l’Europe (2 pages max).' },
        { q: 'Comment traduire « licence » sur un CV en anglais ?', a: 'Bachelor’s degree, en précisant le domaine et la durée si utile.' },
        { q: 'Peut-on faire un CV en anglais sur iPhone ?', a: 'Oui. Dans CV Builder, créez un CV dédié en anglais, vérifiez-le dans l’aperçu et téléchargez-le en PDF.' }
    ],
    related: ['comment-faire-un-cv', 'cv-avec-photo', 'competences-cv']
};
