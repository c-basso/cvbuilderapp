module.exports = {
    slug: 'adapter-son-cv-a-une-offre',
    en: 'tailor-resume-to-job-description',
    keyword: 'adapter son CV à une offre',
    tag: 'Stratégie',
    navTitle: 'Adapter son CV',
    title: 'Adapter son CV à une offre d’emploi en 10 minutes',
    h1: 'Comment adapter son CV à chaque offre',
    description: 'Méthode en 5 étapes pour adapter son CV à une offre d’emploi : mots-clés, ordre des réalisations, phrase d’accroche et plusieurs versions du CV.',
    cardText: 'Une routine de 10 minutes pour que chaque CV colle à l’offre.',
    lede: 'Envoyer le même CV partout est la première cause de silence. Adapter n’est pas tout réécrire : 10 minutes suffisent à partir d’une bonne version de base.',
    tldr: [
        'Un CV de base et une version par type de poste.',
        'Reprenez l’intitulé du poste, les compétences et les outils de l’offre.',
        'Réordonnez les réalisations : les plus pertinentes en haut.',
        'Réécrivez l’accroche pour ce poste.'
    ],
    sections: [
        {
            id: 'methode',
            h2: 'La routine en 5 étapes',
            html: `<ol><li><b>Analysez l’offre :</b> intitulé, 5 exigences principales, outils.</li><li><b>Mettez à jour titre et accroche</b> avec cet intitulé et votre résultat le plus pertinent.</li><li><b>Réordonnez les réalisations</b> ; supprimez ce qui n’apporte rien.</li><li><b>Ajustez les compétences</b> avec les termes exacts de l’offre.</li><li><b>Vérifiez la longueur</b> et exportez un nouveau PDF bien nommé.</li></ol>`
        },
        {
            id: 'exemple',
            h2: 'Avant / après',
            html: `<div class="example"><b>L’offre demande :</b> « gestion de projet, Jira, méthodes agiles, parties prenantes ».<br><b>Avant :</b> Travail avec différents services sur des projets.<br><b>Après :</b> Piloté des projets agiles sous Jira pour 3 équipes transverses, en coordonnant 12 parties prenantes produit et commerce.</div>`
        },
        {
            id: 'versions',
            h2: 'Combien de versions garder ?',
            html: `<p>Une par <em>type de poste</em>, pas par candidature : « Chef de projet – Numérique », « Chef de projet – BTP », « Opérations ». Puis de petites retouches par offre.</p>`
        }
    ],
    app: {
        h2: 'Plusieurs CV dans CV Builder',
        intro: 'CV Builder conserve plusieurs CV : une version par type d’offre, toujours sur votre téléphone.',
        screenshot: 5,
        steps: [
            ['Créez votre CV de base', 'Remplissez toutes les rubriques une fois.'],
            ['Créez une version par type de poste', 'Gardez plusieurs CV dans l’app.'],
            ['Ajustez « À propos », compétences et ordre des réalisations', 'Avec les mots de l’offre.'],
            ['Exportez un nouveau PDF', 'Postulez en quelques minutes.']
        ],
        outro: 'Accompagnez chaque version d’une <a href="/fr/guides/lettre-de-motivation/">lettre de motivation</a> personnalisée.'
    },
    faq: [
        { q: 'Faut-il adapter son CV à chaque offre ?', a: 'Au moins légèrement. Reprendre l’intitulé, les compétences et l’accroche de l’offre améliore à la fois le passage des ATS et l’intérêt du recruteur.' },
        { q: 'Comment garder plusieurs versions de son CV ?', a: 'Une par type de poste. CV Builder permet de conserver plusieurs CV et d’exporter chacun en PDF.' },
        { q: 'Combien de temps pour adapter un CV ?', a: 'Environ 10 minutes à partir d’une bonne version de base.' }
    ],
    related: ['cv-ats', 'accroche-cv', 'lettre-de-motivation']
};
