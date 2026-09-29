module.exports = {
    slug: 'adattare-curriculum-offerta',
    en: 'tailor-resume-to-job-description',
    keyword: 'adattare il curriculum all’offerta',
    tag: 'Strategia',
    navTitle: 'Adattare il CV',
    title: 'Adattare il curriculum a un’offerta di lavoro in 10 minuti',
    h1: 'Come adattare il curriculum a ogni offerta',
    description: 'Metodo in 5 passi per adattare il curriculum a un annuncio di lavoro: parole chiave, ordine dei risultati, profilo personale e più versioni del CV.',
    cardText: 'Una routine di 10 minuti per far combaciare ogni CV con l’annuncio.',
    lede: 'Inviare lo stesso curriculum ovunque è la causa più comune del silenzio. Adattarlo non significa riscriverlo: bastano 10 minuti partendo da una buona versione base.',
    tldr: [
        'Un CV base e una versione per tipo di ruolo.',
        'Riprendi titolo, competenze e strumenti dell’annuncio.',
        'Riordina i risultati: i più rilevanti in alto.',
        'Riscrivi il profilo per quel ruolo.'
    ],
    sections: [
        {
            id: 'metodo',
            h2: 'La routine in 5 passi',
            html: `<ol><li><b>Analizza l’annuncio:</b> titolo, 5 requisiti principali, strumenti.</li><li><b>Aggiorna titolo e profilo</b> con quel titolo e il tuo risultato più pertinente.</li><li><b>Riordina i risultati</b>, togli ciò che non serve.</li><li><b>Adatta le competenze</b> con i termini esatti.</li><li><b>Controlla la lunghezza</b> ed esporta un nuovo PDF.</li></ol>`
        },
        {
            id: 'esempio',
            h2: 'Prima e dopo',
            html: `<div class="example"><b>L’annuncio chiede:</b> «project management, Jira, metodologie agile, gestione stakeholder».<br><b>Prima:</b> Lavorato con diversi reparti su progetti.<br><b>Dopo:</b> Gestito progetti agile in Jira per 3 team trasversali, coordinando 12 stakeholder di prodotto e vendite.</div>`
        },
        {
            id: 'versioni',
            h2: 'Quante versioni tenere?',
            html: `<p>Una per <em>tipo di ruolo</em>, non per candidatura: «Project Manager – IT», «Project Manager – Edilizia», «Operations». Poi piccoli ritocchi per annuncio.</p>`
        }
    ],
    app: {
        h2: 'Più curriculum in CV Builder',
        intro: 'CV Builder salva più curriculum: una versione per ogni tipo di offerta, sempre sul telefono.',
        screenshot: 5,
        steps: [
            ['Crea il CV base', 'Compila tutte le sezioni una volta.'],
            ['Crea una versione per ruolo', 'Più curriculum salvati nell’app.'],
            ['Adatta «Profilo», competenze e ordine dei risultati', 'Con le parole dell’annuncio.'],
            ['Esporta un nuovo PDF', 'Candidati in pochi minuti.']
        ],
        outro: 'Accompagna ogni versione con una <a href="/it/guide/lettera-di-presentazione/">lettera di presentazione</a> mirata.'
    },
    faq: [
        { q: 'Devo adattare il curriculum a ogni annuncio?', a: 'Almeno un po’. Allineare titolo, competenze e profilo all’annuncio migliora sia i filtri ATS sia l’impressione del selezionatore.' },
        { q: 'Come tengo più versioni del curriculum?', a: 'Una per tipo di ruolo. In CV Builder puoi salvare più curriculum ed esportarli in PDF.' },
        { q: 'Quanto tempo ci vuole?', a: 'Circa 10 minuti con una buona versione base.' }
    ],
    related: ['curriculum-ats', 'profilo-personale-curriculum', 'lettera-di-presentazione']
};
