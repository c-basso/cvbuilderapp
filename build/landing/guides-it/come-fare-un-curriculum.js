module.exports = {
    slug: 'come-fare-un-curriculum',
    en: 'how-to-write-a-cv',
    keyword: 'come fare un curriculum vitae',
    tag: 'Guida',
    navTitle: 'Come fare un curriculum',
    title: 'Come fare un curriculum vitae: guida completa con esempi (2026)',
    h1: 'Come fare un curriculum vitae che porta ai colloqui',
    description: 'Come fare un curriculum vitae passo passo: formato, cosa scrivere in ogni sezione, esempi, lunghezza, consenso privacy GDPR ed errori comuni.',
    cardText: 'Ogni sezione spiegata con esempi, lunghezza giusta, privacy ed errori da evitare.',
    lede: 'Un buon curriculum risponde in fretta a una domanda: questa persona sa fare il lavoro? Ecco come scrivere ogni sezione perché il selezionatore trovi la risposta in 10 secondi.',
    tldr: [
        'Formato cronologico inverso; europeo se richiesto.',
        'Ordine: dati personali → profilo → esperienza → istruzione → competenze e lingue → autorizzazione privacy.',
        'Risultati, non mansioni: verbo + attività + risultato misurabile.',
        '1–2 pagine, un font, date uniformi, PDF.'
    ],
    sections: [
        {
            id: 'formato',
            h2: 'Passo 1: scegli il formato',
            html: `<table><thead><tr><th>Formato</th><th>Per chi</th></tr></thead><tbody><tr><td>Cronologico inverso</td><td>La maggior parte, percorso continuo</td></tr><tr><td>Funzionale (per competenze)</td><td>Cambio settore, periodi di inattività</td></tr><tr><td>Europeo (Europass)</td><td>Enti pubblici, bandi, estero — vedi <a href="/it/guide/curriculum-europeo/">curriculum europeo</a></td></tr></tbody></table>`
        },
        {
            id: 'dati',
            h2: 'Passo 2: dati personali',
            html: `<p>Nome, ruolo cercato, telefono, email, città, LinkedIn. Data di nascita, stato civile e codice fiscale non servono.</p>`
        },
        {
            id: 'profilo',
            h2: 'Passo 3: il profilo personale',
            html: `<p>Tre frasi: chi sei, in cosa sei forte, cosa cerchi.</p><div class="example"><b>Esempio:</b> Customer Success Manager con 6 anni nel SaaS B2B. Ho mantenuto il 96% di un portafoglio da 2,1 M€ e creato il percorso di onboarding dell’intero team. Cerco un ruolo di responsabile.</div><p>Altri esempi: <a href="/it/guide/profilo-personale-curriculum/">profilo personale</a>.</p>`
        },
        {
            id: 'esperienza',
            h2: 'Passo 4: esperienza con risultati',
            html: `<p>Per ogni ruolo: date, ruolo, azienda, città e 3–5 punti con la formula <b>verbo + attività + risultato</b>.</p><div class="example"><b>Mansione:</b> Gestione reclami.<br><b>Risultato:</b> Gestiti oltre 40 reclami a settimana, riducendo il tempo medio di risoluzione da 3 giorni a 1.</div>`
        },
        {
            id: 'istruzione',
            h2: 'Passo 5: istruzione',
            html: `<p>Titolo, istituto, anni, voto se buono. Studenti: prima dell’esperienza — vedi <a href="/it/guide/curriculum-senza-esperienza/">CV senza esperienza</a>.</p>`
        },
        {
            id: 'competenze-privacy',
            h2: 'Passo 6: competenze, lingue e privacy',
            html: `<p>6–10 competenze dall’annuncio, lingue con livello QCER, certificazioni. In fondo aggiungi: <i>«Autorizzo il trattamento dei miei dati personali ai sensi del Reg. UE 2016/679 (GDPR)».</i></p>`
        },
        {
            id: 'errori',
            h2: 'Errori comuni',
            html: `<ul><li>Lo stesso CV per tutto: <a href="/it/guide/adattare-curriculum-offerta/">adattalo</a>.</li><li>Paragrafi al posto degli elenchi.</li><li>Buchi oltre 6 mesi senza spiegazione.</li><li>Refusi e date incoerenti.</li><li>Dimenticare il consenso privacy.</li></ul>`
        }
    ],
    app: {
        h2: 'Fai il curriculum passo passo in CV Builder',
        intro: 'CV Builder segue esattamente questa struttura.',
        screenshot: 5,
        steps: [
            ['Introduzione e Contatti', 'Nome, ruolo e contatti.'],
            ['Profilo', 'Il tuo profilo in tre frasi.'],
            ['Esperienza di lavoro ed Educazione', 'La percentuale mostra cosa manca.'],
            ['Competenze, Lingue, Certificazioni', 'Più una sezione personalizzata «Privacy» con la frase GDPR.'],
            ['Modello e PDF', 'Scegli tra 100+ modelli, controlla e tocca «Scaricare PDF».']
        ]
    },
    faq: [
        { q: 'Quante pagine deve avere un curriculum?', a: '1 pagina per studenti e junior, massimo 2 per profili esperti.' },
        { q: 'Serve la frase sulla privacy nel curriculum?', a: 'È prassi in Italia inserire in fondo l’autorizzazione al trattamento dei dati ai sensi del GDPR (Reg. UE 2016/679).' },
        { q: 'Meglio curriculum europeo o moderno?', a: 'Europeo se richiesto (enti pubblici, bandi, estero); per le aziende private un CV moderno e chiaro spesso colpisce di più.' }
    ],
    related: ['curriculum-europeo', 'profilo-personale-curriculum', 'competenze-curriculum']
};
