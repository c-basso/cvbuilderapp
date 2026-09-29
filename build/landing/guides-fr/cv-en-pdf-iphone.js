module.exports = {
    slug: 'cv-en-pdf-iphone',
    en: 'save-resume-as-pdf-on-iphone',
    keyword: 'enregistrer un CV en PDF sur iPhone',
    tag: 'iPhone',
    navTitle: 'CV en PDF sur iPhone',
    title: 'Enregistrer son CV en PDF sur iPhone : 3 méthodes',
    h1: 'Comment enregistrer son CV en PDF sur iPhone',
    description: 'Trois façons de mettre son CV en PDF sur iPhone : depuis une app CV, depuis Pages ou Word, ou avec l’astuce Imprimer. Et comment l’envoyer au recruteur.',
    cardText: 'Trois méthodes fiables pour sortir un CV PDF de l’iPhone et l’envoyer.',
    lede: 'Recruteurs et sites d’emploi préfèrent le PDF : il s’affiche à l’identique partout. Voici trois façons de le créer sur iPhone et de l’envoyer sans perdre la mise en page.',
    tldr: [
        'Application CV : bouton « Télécharger PDF », résultat le plus propre.',
        'Pages ou Word : Partager → Exporter → PDF.',
        'N’importe quel document : Partager → Imprimer → écarter deux doigts sur l’aperçu → Enregistrer dans Fichiers.',
        'Nommez-le « Prenom-Nom-CV.pdf ».'
    ],
    sections: [
        {
            id: 'pourquoi-pdf',
            h2: 'Pourquoi envoyer son CV en PDF ?',
            html: `<ul><li>Polices, marges et mise en page restent intactes.</li><li>Il s’ouvre partout sans Word.</li><li>Le texte reste du texte, lisible par les logiciels ATS.</li></ul><p>N’envoyez un .docx que si on vous le demande.</p>`
        },
        {
            id: 'pages-word',
            h2: 'Méthode 2 : depuis Pages ou Word',
            html: `<ol><li><b>Pages :</b> ouvrez le document → <i>•••</i> → <i>Exporter</i> → <i>PDF</i> → « Enregistrer dans Fichiers » ou partager.</li><li><b>Word pour iOS :</b> <i>•••</i> → <i>Exporter</i> ou <i>Enregistrer une copie</i> → PDF.</li></ol><p>Vérifiez le résultat : les modèles créés sur ordinateur se décalent souvent sur mobile.</p>`
        },
        {
            id: 'imprimer',
            h2: 'Méthode 3 : l’astuce Imprimer (toute app)',
            html: `<ol><li>Ouvrez le CV (page web, Google Docs, pièce jointe).</li><li>Partager → <i>Imprimer</i>.</li><li>Sur l’aperçu, écartez deux doigts : il s’ouvre en PDF.</li><li>Partager → <i>Enregistrer dans Fichiers</i>.</li></ol>`
        },
        {
            id: 'envoyer',
            h2: 'Comment envoyer le PDF',
            html: `<ul><li><b>E-mail :</b> dans Mail, touchez la pièce jointe → Fichiers → votre PDF, avec quelques lignes ou votre <a href="/fr/guides/lettre-de-motivation/">lettre de motivation</a>.</li><li><b>Sites d’emploi :</b> bouton d’import → Parcourir → Fichiers → votre PDF.</li><li><b>Nom du fichier :</b> <code>Camille-Martin-CV.pdf</code>, jamais <code>cv_final_v3.pdf</code>.</li></ul>`
        }
    ],
    appAfter: 0,
    app: {
        h2: 'Méthode 1 : exporter le PDF depuis CV Builder (recommandé)',
        intro: 'Si votre CV est fait dans CV Builder, le PDF est à un geste, soigné à l’écran comme à l’impression.',
        screenshot: 2,
        steps: [
            ['Ouvrez votre CV', 'Choisissez la version à envoyer.'],
            ['Touchez « Aperçu PDF »', 'Vérifiez marges et nombre de pages.'],
            ['Touchez « Télécharger PDF »', 'L’app génère un PDF de qualité avec du vrai texte.'],
            ['Enregistrez ou partagez', 'Dans Fichiers, par e-mail ou messagerie.']
        ],
        outro: 'La lettre de motivation s’exporte de la même façon, au même style.'
    },
    faq: [
        { q: 'Comment convertir son CV en PDF sur iPhone ?', a: 'Dans CV Builder : « Télécharger PDF ». Dans Pages ou Word : Exporter → PDF. Ailleurs : Partager → Imprimer, agrandir l’aperçu, enregistrer dans Fichiers.' },
        { q: 'Où sont enregistrés les PDF sur iPhone ?', a: 'Dans l’app Fichiers, dans « Sur mon iPhone » ou iCloud Drive selon votre choix.' },
        { q: 'CV en PDF ou en Word ?', a: 'En PDF, sauf demande contraire : la mise en page est conservée partout.' }
    ],
    related: ['faire-un-cv-sur-iphone', 'lettre-de-motivation', 'cv-ats']
};
