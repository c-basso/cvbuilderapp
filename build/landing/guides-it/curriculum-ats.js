module.exports = {
    slug: 'curriculum-ats',
    en: 'ats-friendly-resume',
    keyword: 'curriculum ATS',
    tag: 'Portali lavoro',
    navTitle: 'Curriculum ATS',
    title: 'Curriculum ATS: come superare i software di selezione (2026)',
    h1: 'Come fare un curriculum compatibile con gli ATS',
    description: 'Cosa legge un software ATS, le regole di formattazione per un CV ben interpretato, come usare le parole chiave dell’annuncio e una checklist prima di inviare.',
    cardText: 'Formattazione e parole chiave per far leggere bene il CV ai portali.',
    lede: 'Molte aziende ricevono le candidature tramite un software di selezione (ATS). Estrae il testo del CV e permette di cercare per parole chiave. Il tuo obiettivo: facilitare l’estrazione e contenere le parole giuste.',
    tldr: ['PDF con testo reale (o .docx se richiesto), mai scansioni.', 'Titoli standard: Profilo, Esperienza, Istruzione, Competenze.', 'Parole esatte dell’annuncio: ruolo, strumenti, certificazioni.', 'Niente informazioni chiave solo in immagini o caselle di testo.'],
    sections: [
        { id: 'come-legge', h2: 'Come un ATS legge il curriculum', html: `<p>Il software converte il file in testo, riconosce le sezioni dai titoli e salva ruoli, date, competenze e titoli di studio. Il selezionatore poi filtra («Excel» E «controller»). Testo illeggibile o titoli fantasiosi = fuori dai risultati.</p>` },
        { id: 'regole', h2: 'Regole di formattazione', html: `<ul><li>Font standard, testo reale.</li><li>Titoli convenzionali.</li><li>Date uniformi: <i>06/2021 – 03/2024</i>.</li><li>Elenchi semplici, niente tabelle per il contenuto principale.</li><li>Contatti nel corpo del documento.</li><li>Per i grandi portali, modello a una colonna.</li></ul>` },
        { id: 'parole-chiave', h2: 'Usare bene le parole chiave', html: `<ol><li>Copia l’annuncio ed evidenzia ruolo, competenze, strumenti, certificazioni.</li><li>Usa la stessa formulazione.</li><li>Inserisci il ruolo nel profilo.</li><li>Metti le competenze nella loro sezione e dimostrale nell’esperienza.</li><li>Niente parole nascoste in bianco.</li></ol>` },
        { id: 'checklist', h2: 'Checklist prima dell’invio', html: `<ul><li>☐ Il testo del PDF si seleziona?</li><li>☐ Titoli standard.</li><li>☐ Il ruolo compare almeno una volta.</li><li>☐ Le 5 competenze chiave ci sono.</li><li>☐ File: Nome-Cognome-CV.pdf.</li></ul>` }
    ],
    app: {
        h2: 'Un curriculum compatibile ATS con CV Builder',
        intro: 'CV Builder esporta PDF con testo reale e sezioni convenzionali, facili da interpretare.',
        screenshot: 4,
        steps: [['Compila le sezioni standard', 'Profilo, Esperienza di lavoro, Educazione, Competenze.'], ['Inserisci le parole chiave', 'In Competenze e nei punti dell’esperienza.'], ['Scegli un modello semplice', 'Una colonna è la scelta più sicura.'], ['Scarica e prova il PDF', 'Prova a selezionare il testo.']],
        outro: 'Una versione per tipo di ruolo: <a href="/it/guide/adattare-curriculum-offerta/">adattare il curriculum</a>.'
    },
    faq: [
        { q: 'Cos’è un curriculum ATS?', a: 'Un CV con formattazione e parole chiave pensate per essere letto correttamente dai software di selezione.' },
        { q: 'Gli ATS leggono i PDF?', a: 'La maggior parte dei sistemi moderni legge i PDF con testo reale. Se chiedono Word, invia il .docx.' },
        { q: 'I CV a due colonne passano gli ATS?', a: 'Spesso sì, ma una colonna è la scelta più sicura sui grandi portali.' }
    ],
    related: ['adattare-curriculum-offerta', 'modelli-curriculum', 'curriculum-pdf-iphone']
};
