module.exports = {
    slug: 'cv-ats',
    en: 'ats-friendly-resume',
    keyword: 'CV ATS',
    tag: 'Candidatures en ligne',
    navTitle: 'CV compatible ATS',
    title: 'CV ATS : faire un CV compatible avec les logiciels de recrutement',
    h1: 'Comment faire un CV compatible ATS',
    description: 'Ce que lit un logiciel ATS, les règles de mise en forme pour que votre CV soit bien analysé, l’usage des mots-clés de l’offre et une checklist avant envoi.',
    cardText: 'Mise en forme et mots-clés pour que les logiciels de recrutement lisent bien votre CV.',
    lede: 'Beaucoup d’entreprises reçoivent les candidatures via un logiciel de suivi (ATS). Il extrait le texte du CV et permet de rechercher par mots-clés. Votre objectif : faciliter cette extraction et contenir les bons mots.',
    tldr: [
        'PDF en texte réel (ou .docx si demandé), jamais un scan.',
        'Titres standard : Profil, Expérience, Formation, Compétences.',
        'Mots exacts de l’offre : intitulé, outils, certifications.',
        'Pas d’informations clés uniquement dans des images ou zones de texte.'
    ],
    sections: [
        {
            id: 'lecture',
            h2: 'Comment un ATS lit votre CV',
            html: `<p>Le logiciel convertit votre fichier en texte, identifie les rubriques par leurs titres et enregistre postes, dates, compétences et diplômes. Le recruteur filtre ensuite (« Excel » ET « contrôleur de gestion »). Texte illisible ou titres fantaisistes : vous sortez des résultats.</p>`
        },
        {
            id: 'regles',
            h2: 'Règles de mise en forme',
            html: `<ul><li>Polices standard, texte réel.</li><li>Titres de rubrique classiques.</li><li>Dates homogènes : <i>06/2021 – 03/2024</i>.</li><li>Puces simples, pas de tableaux pour l’essentiel.</li><li>Coordonnées dans le corps du document.</li><li>Pour les grands portails, modèle simple à une colonne.</li></ul>`
        },
        {
            id: 'mots-cles',
            h2: 'Bien utiliser les mots-clés',
            html: `<ol><li>Copiez l’offre et surlignez intitulé, compétences techniques, outils, certifications.</li><li>Reprenez la même formulation.</li><li>Mettez l’intitulé du poste dans votre titre et votre accroche.</li><li>Placez les compétences dans leur rubrique et prouvez-les dans l’expérience.</li><li>Pas de mots cachés en blanc : le recruteur lira le résultat.</li></ol>`
        },
        {
            id: 'checklist',
            h2: 'Checklist avant envoi',
            html: `<ul><li>☐ Le texte du PDF se sélectionne-t-il ?</li><li>☐ Titres standard.</li><li>☐ L’intitulé du poste apparaît au moins une fois.</li><li>☐ Les 5 compétences clés de l’offre figurent.</li><li>☐ Fichier : Prenom-Nom-CV.pdf.</li></ul>`
        }
    ],
    app: {
        h2: 'Un CV compatible ATS avec CV Builder',
        intro: 'CV Builder exporte des PDF en texte réel avec des rubriques conventionnelles, faciles à analyser.',
        screenshot: 4,
        steps: [
            ['Remplissez les rubriques standard', 'À propos, Expérience, Formation, Compétences.'],
            ['Intégrez les mots-clés', 'Dans Compétences et dans les puces d’expérience.'],
            ['Choisissez un modèle simple', 'Une colonne, le plus sûr pour les portails.'],
            ['Téléchargez et testez le PDF', 'Essayez de sélectionner le texte.']
        ],
        outro: 'Gardez une version par type de poste : <a href="/fr/guides/adapter-son-cv-a-une-offre/">adapter son CV</a>.'
    },
    faq: [
        { q: 'Qu’est-ce qu’un CV ATS ?', a: 'Un CV dont la mise en forme et les mots-clés permettent aux logiciels de suivi des candidatures de le lire correctement.' },
        { q: 'Les ATS lisent-ils les PDF ?', a: 'La plupart des ATS modernes lisent les PDF en texte réel. Si Word est demandé, envoyez un .docx.' },
        { q: 'Un CV en deux colonnes passe-t-il les ATS ?', a: 'Souvent oui, mais une colonne reste le choix le plus sûr sur les grands portails.' }
    ],
    related: ['adapter-son-cv-a-une-offre', 'modele-de-cv', 'cv-en-pdf-iphone']
};
