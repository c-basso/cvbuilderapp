module.exports = {
    slug: 'competences-cv',
    keyword: 'compétences CV',
    tag: 'Exemples',
    navTitle: 'Compétences CV',
    title: 'Compétences CV : savoir-faire, savoir-être et exemples par métier',
    h1: 'Quelles compétences mettre sur un CV ?',
    description: 'Quelles compétences mettre sur un CV : savoir-faire et savoir-être, comment les tirer de l’offre, combien en indiquer et exemples pour 8 métiers.',
    cardText: 'Savoir-faire, savoir-être, comment les choisir et exemples par métier.',
    lede: 'Les recruteurs filtrent les candidatures par compétences, et les logiciels ATS comparent votre CV à l’offre. Une bonne liste de compétences, c’est ce qui vous rend « trouvable ».',
    tldr: [
        '6 à 10 compétences techniques (savoir-faire) présentes dans l’offre.',
        '2 ou 3 savoir-être, chacun prouvé dans l’expérience.',
        'Reprenez les termes exacts de l’offre : « Excel (TCD) », pas « bureautique ».',
        'Évitez les jauges et étoiles de niveau sans signification.'
    ],
    sections: [
        {
            id: 'savoir-faire-etre',
            h2: 'Savoir-faire et savoir-être',
            html: `<table><thead><tr><th></th><th>Savoir-faire (hard skills)</th><th>Savoir-être (soft skills)</th></tr></thead><tbody>
<tr><td>Définition</td><td>Connaissances et outils vérifiables</td><td>Qualités personnelles et façon de travailler</td></tr>
<tr><td>Exemples</td><td>Excel, SQL, Sage, Figma, AutoCAD, prospection B2B, anglais B2</td><td>Sens de l’organisation, esprit d’équipe, adaptabilité</td></tr>
<tr><td>Comment prouver</td><td>Certifications, projets, chiffres</td><td>Exemples tirés de l’expérience</td></tr>
</tbody></table>`
        },
        {
            id: 'choisir',
            h2: 'Choisir ses compétences à partir de l’offre',
            html: `<ol><li>Ouvrez 3 à 5 offres similaires et relevez les exigences récurrentes.</li><li>Gardez celles que vous maîtrisez réellement.</li><li>Reprenez les formulations exactes.</li><li>Placez les plus importantes en premier.</li><li>Illustrez-les dans vos réalisations.</li></ol>`
        },
        {
            id: 'exemples',
            h2: 'Exemples de compétences par métier',
            html: `<table><thead><tr><th>Métier</th><th>Compétences</th></tr></thead><tbody>
<tr><td>Commercial</td><td>Prospection B2B, négociation, traitement des objections, CRM (Salesforce, HubSpot)</td></tr>
<tr><td>Comptable</td><td>Tenue comptable, déclarations TVA, clôtures, Sage / Cegid, liasse fiscale</td></tr>
<tr><td>Marketing</td><td>Google Ads, SEO, Google Analytics 4, emailing, A/B tests</td></tr>
<tr><td>Développeur</td><td>Python, SQL, Git, Docker, API REST, revue de code</td></tr>
<tr><td>Designer</td><td>Figma, UI/UX, design system, prototypage, Adobe Creative Suite</td></tr>
<tr><td>Assistant·e administratif·ve</td><td>Gestion d’agenda, accueil, Pack Office, classement, facturation</td></tr>
<tr><td>RH</td><td>Recrutement, onboarding, paie, droit du travail, SIRH</td></tr>
<tr><td>Logistique</td><td>CACES, gestion de stocks, WMS, préparation de commandes</td></tr>
</tbody></table>`
        },
        {
            id: 'erreurs',
            h2: 'Erreurs à éviter',
            html: `<ul><li>25 compétences : personne ne vous croira.</li><li>Uniquement des savoir-être.</li><li>Compétences datées : « maîtrise d’Internet ».</li><li>Compétences absentes de votre expérience : on vous interrogera dessus.</li></ul>`
        }
    ],
    app: {
        h2: 'Vos compétences dans CV Builder',
        intro: 'CV Builder a une rubrique « Compétences » dédiée, bien mise en valeur dans chaque modèle.',
        screenshot: 4,
        steps: [
            ['Ouvrez « Compétences »', 'Ajoutez 6 à 10 compétences de l’offre.'],
            ['Ajoutez Langues et Certifications', 'Niveaux et années.'],
            ['Prouvez-les dans « Expérience »', 'Avec des résultats concrets.'],
            ['Vérifiez l’« Aperçu PDF »', 'Les compétences doivent sauter aux yeux.']
        ],
        outro: 'Une liste de compétences par type de poste : voir <a href="/fr/guides/adapter-son-cv-a-une-offre/">adapter son CV</a>.'
    },
    faq: [
        { q: 'Combien de compétences mettre sur un CV ?', a: '6 à 10 savoir-faire et 2 ou 3 savoir-être, tous liés au poste visé.' },
        { q: 'Quelles compétences mettre sans expérience ?', a: 'Celles acquises en formation, stages, projets ou bénévolat : logiciels, langues, outils de base, illustrés par des exemples.' },
        { q: 'Faut-il mettre des niveaux (étoiles, jauges) ?', a: 'Mieux vaut préciser un niveau concret (ex. anglais B2, Excel avancé : TCD, RECHERCHEV) que des jauges subjectives.' }
    ],
    related: ['accroche-cv', 'adapter-son-cv-a-une-offre', 'comment-faire-un-cv']
};
