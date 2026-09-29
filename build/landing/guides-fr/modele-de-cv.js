module.exports = {
    slug: 'modele-de-cv',
    en: 'resume-templates',
    keyword: 'modèle de CV',
    tag: 'Modèles',
    navTitle: 'Modèle de CV',
    title: 'Modèle de CV : comment choisir le bon (100+ modèles)',
    h1: 'Comment choisir un modèle de CV',
    description: 'Quel modèle de CV choisir selon votre secteur, votre niveau et votre mode de candidature ? Erreurs de mise en page et 100+ modèles à prévisualiser.',
    cardText: 'Choisissez un modèle selon secteur, niveau et mode de candidature, en 3 décisions.',
    lede: 'Le bon modèle rend votre parcours lisible d’un coup d’œil ; le mauvais le noie. Prenez trois décisions — secteur, niveau, canal — et le choix devient évident.',
    tldr: [
        'Secteurs traditionnels → modèle classique, une colonne.',
        'Numérique, marketing, créatif → modèle moderne avec couleur d’accent.',
        'Candidature en ligne → mise en page simple et titres standard.',
        'Prévisualisez toujours avec vos données avant d’exporter.'
    ],
    sections: [
        {
            id: 'secteur',
            h2: 'Décision 1 : votre secteur',
            html: `<table><thead><tr><th>Secteur</th><th>Style</th></tr></thead><tbody><tr><td>Banque, droit, fonction publique, santé</td><td>Classique, une colonne, noir ou bleu marine</td></tr><tr><td>Numérique, produit, marketing</td><td>Moderne, deux colonnes, une couleur d’accent</td></tr><tr><td>Design, communication, médias</td><td>Plus audacieux, photo, lien ou QR code vers le portfolio</td></tr><tr><td>Commerce, hôtellerie, métiers manuels</td><td>Simple et clair, compétences bien visibles</td></tr></tbody></table>`
        },
        {
            id: 'niveau',
            h2: 'Décision 2 : votre niveau',
            html: `<ul><li><b>Étudiant :</b> formation en haut, place pour les projets.</li><li><b>Confirmé :</b> expérience d’abord, accroche mise en avant.</li><li><b>Cadre dirigeant :</b> plus d’air, réalisations clés en évidence, deux pages possibles.</li></ul>`
        },
        {
            id: 'canal',
            h2: 'Décision 3 : votre mode de candidature',
            html: `<p>Sur les portails des grandes entreprises, privilégiez des titres standard (« Expérience », « Formation », « Compétences ») et du vrai texte : voir <a href="/fr/guides/cv-ats/">CV ATS</a>. En envoi direct au recruteur, vous pouvez oser davantage.</p>`
        },
        {
            id: 'erreurs',
            h2: 'Erreurs de mise en page',
            html: `<ul><li>Jauges et étoiles de compétences sans valeur réelle.</li><li>Plus de deux polices ou trois couleurs.</li><li>Police minuscule pour tout faire tenir : coupez plutôt.</li><li>Choisir le modèle avant d’avoir écrit le contenu.</li></ul>`
        }
    ],
    app: {
        h2: 'Prévisualisez 100+ modèles avec vos données dans CV Builder',
        intro: 'Dans CV Builder, les modèles sont séparés du contenu : changez de design sans rien retaper.',
        screenshot: 1,
        steps: [
            ['Écrivez d’abord le contenu', 'Remplissez les rubriques guidées.'],
            ['Ouvrez la galerie de modèles', 'Plus de 100 modèles de CV.'],
            ['Touchez « Aperçu PDF »', 'Votre contenu dans chaque design.'],
            ['Choisissez et exportez', '« Télécharger PDF » quand c’est parfait.']
        ]
    },
    faq: [
        { q: 'Quel est le meilleur modèle de CV ?', a: 'Celui qui correspond à votre secteur et fait ressortir vos réalisations : classique pour les secteurs traditionnels, moderne pour le numérique et le créatif.' },
        { q: 'Combien de modèles propose CV Builder ?', a: 'Plus de 100 modèles de CV, du minimaliste au corporate classique.' },
        { q: 'Peut-on changer de modèle après coup ?', a: 'Oui, le contenu est stocké à part : changez de design quand vous voulez.' }
    ],
    related: ['cv-ats', 'application-cv', 'cv-avec-photo']
};
