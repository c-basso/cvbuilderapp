module.exports = {
    slug: 'ats-cv',
    en: 'ats-friendly-resume',
    keyword: 'ats cv',
    tag: 'ATS',
    navTitle: 'ATS-vriendelijk cv',
    title: 'ATS-vriendelijk cv: zo kom je door de selectiesoftware',
    h1: 'Een cv dat door ATS-systemen komt',
    description: 'Veel werkgevers en uitzendbureaus scannen cv’s met een ATS. Zo werkt die software en met deze checklist voor opmaak, kernwoorden en bestandstype kom je erdoor.',
    cardText: 'Hoe ATS leest en een checklist voor opmaak en kernwoorden.',
    lede: 'Voordat een mens je cv leest, doet software dat vaak al. Zorg dat die je gegevens goed kan uitlezen.',
    tldr: ['Standaardkopjes: Werkervaring, Opleiding, Vaardigheden.', 'PDF met echte tekst of Word.', 'Kernwoorden uit de vacature.', 'Geen tabellen of tekst in afbeeldingen.'],
    sections: [
        { id: 'checklist', h2: 'Checklist', html: `<ul><li>Eén kolom.</li><li>Standaardlettertype.</li><li>Datums consequent (jan 2023 – heden).</li><li>Afkortingen voluit: SEO (zoekmachineoptimalisatie).</li><li>Bestandsnaam: Voornaam-Achternaam-CV.pdf.</li></ul>` },
        { id: 'mythes', h2: 'Mythes', html: `<p>Kernwoorden in witte tekst verstoppen valt op zodra een recruiter kijkt. Gebruik ze gewoon in je ervaring.</p>` }
    ],
    appAfter: 1,
    app: {
        h2: 'Een ATS-vriendelijk cv in CV Builder',
        intro: 'Kies een eenvoudig sjabloon: de PDF bevat echte tekst die ATS-systemen kunnen lezen.',
        screenshot: 2,
        steps: [['Eenvoudig sjabloon', 'Eén kolom.'], ['Standaardsecties', 'Duidelijke kopjes.'], ['Kernwoorden', 'Uit de vacaturetekst.'], ['PDF downloaden', 'Met echte tekst.']],
        outro: 'PDF-export hoort bij premium (met gratis proefperiode). Geen enkele app kan garanderen dat je door een specifiek ATS komt.'
    },
    faq: [
        { q: 'Kan een ATS een PDF lezen?', a: 'Een PDF met echte tekst meestal wel. Vraagt de vacature om Word, volg dat.' },
        { q: 'Heeft een foto invloed op ATS?', a: 'De software leest de foto niet; hij neemt alleen ruimte in.' }
    ],
    related: ['cv-aanpassen-vacature', 'cv-voorbeeld-sjablonen', 'cv-opslaan-als-pdf']
};
