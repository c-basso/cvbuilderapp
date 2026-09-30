module.exports = {
    slug: 'cv-ats',
    en: 'ats-friendly-resume',
    keyword: 'cv ats',
    tag: 'ATS',
    navTitle: 'CV pentru ATS',
    title: 'CV compatibil ATS: cum treci de softul de recrutare',
    h1: 'Cum faci un CV compatibil cu ATS',
    description: 'Multe companii scanează CV-urile cu un ATS. Vezi cum funcționează și folosește lista de verificare pentru formatare, cuvinte cheie și tipul fișierului.',
    cardText: 'Cum citește un ATS și listă de verificare pentru formatare.',
    lede: 'Înainte să-ți citească un om CV-ul, adesea o face un program. Asigură-te că îți citește corect datele.',
    tldr: ['Titluri standard: Experiență, Educație, Competențe.', 'PDF cu text real sau Word.', 'Cuvinte cheie din anunț.', 'Fără tabele sau text în imagini.'],
    sections: [
        { id: 'lista', h2: 'Listă de verificare', html: `<ul><li>O singură coloană.</li><li>Font standard.</li><li>Date consecvente (01.2023 – prezent).</li><li>Abrevieri explicate: SEO (optimizare pentru motoarele de căutare).</li><li>Nume fișier: Prenume-Nume-CV.pdf.</li></ul>` },
        { id: 'mituri', h2: 'Mituri', html: `<p>Cuvintele cheie ascunse cu text alb se văd imediat când CV-ul ajunge la un om. Folosește-le natural în descrierea experienței.</p>` }
    ],
    appAfter: 1,
    app: {
        h2: 'CV compatibil ATS în CV Builder',
        intro: 'Alege un model simplu — PDF-ul conține text real, pe care ATS-ul îl poate citi.',
        screenshot: 2,
        steps: [['Model simplu', 'O coloană.'], ['Secțiuni standard', 'Titluri clare.'], ['Cuvinte cheie', 'Din anunț.'], ['Descarcă PDF-ul', 'Cu text real.']],
        outro: 'Exportul PDF face parte din planul premium (cu perioadă de probă gratuită). Nicio aplicație nu garantează trecerea de un anumit ATS.'
    },
    faq: [
        { q: 'ATS-ul citește PDF?', a: 'Un PDF cu text real, de obicei da. Dacă anunțul cere Word, trimite Word.' },
        { q: 'Poza încurcă ATS-ul?', a: 'Sistemul nu o citește; doar ocupă spațiu.' }
    ],
    related: ['adaptare-cv-job', 'modele-cv', 'cv-pdf-iphone']
};
