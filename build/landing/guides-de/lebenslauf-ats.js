module.exports = {
    slug: 'lebenslauf-ats',
    en: 'ats-friendly-resume',
    keyword: 'ATS Lebenslauf',
    tag: 'Bewerberportale',
    navTitle: 'ATS-Lebenslauf',
    title: 'ATS-Lebenslauf: So kommt Ihr CV durch Bewerbermanagementsysteme',
    h1: 'Einen ATS-tauglichen Lebenslauf erstellen',
    description: 'Was ein Bewerbermanagementsystem (ATS) liest, Formatierungsregeln für einen gut auslesbaren Lebenslauf, Schlüsselwörter aus der Anzeige und eine Checkliste.',
    cardText: 'Formatierung und Schlüsselwörter, damit Bewerberportale Ihren Lebenslauf richtig lesen.',
    lede: 'Viele Unternehmen nehmen Bewerbungen über ein Bewerbermanagementsystem (ATS) an. Es liest den Text aus Ihrem Lebenslauf aus und macht ihn per Stichwort durchsuchbar. Ihr Ziel: leicht auslesbar sein und die richtigen Begriffe enthalten.',
    tldr: [
        'PDF mit echtem Text (oder .docx, wenn verlangt) – nie ein Scan.',
        'Standard-Überschriften: Kurzprofil, Berufserfahrung, Ausbildung, Kenntnisse.',
        'Begriffe der Anzeige wörtlich übernehmen: Titel, Tools, Zertifikate.',
        'Keine wichtigen Infos nur in Grafiken oder Textfeldern.'
    ],
    sections: [
        {
            id: 'wie-ats-liest',
            h2: 'So liest ein ATS Ihren Lebenslauf',
            html: `<p>Das System wandelt die Datei in Text um, erkennt Abschnitte an ihren Überschriften und speichert Positionen, Zeiträume, Kenntnisse und Abschlüsse. Recruiter filtern dann („SAP“ UND „Controller“). Nicht auslesbarer Text oder ungewöhnliche Überschriften kosten Treffer.</p>`
        },
        {
            id: 'regeln',
            h2: 'Formatierungsregeln',
            html: `<ul><li>Standardschriften, echter Text.</li><li>Übliche Abschnittsüberschriften.</li><li>Einheitliche Daten: <i>06/2021 – 03/2024</i>.</li><li>Einfache Stichpunkte, keine Tabellen für Kerninhalte.</li><li>Kontaktdaten im Dokument, nicht nur in der Kopfzeile.</li><li>Für große Portale einspaltige Vorlagen.</li></ul>`
        },
        {
            id: 'schluesselwoerter',
            h2: 'Schlüsselwörter richtig nutzen',
            html: `<ol><li>Anzeige kopieren und Titel, Fachkenntnisse, Tools, Zertifikate markieren.</li><li>Gleiche Formulierung verwenden.</li><li>Positionstitel ins Kurzprofil.</li><li>Kenntnisse im Abschnitt „Kenntnisse“ und als Beleg in der Erfahrung.</li><li>Keine versteckten weißen Wörter – der Recruiter liest mit.</li></ol>`
        },
        {
            id: 'checkliste',
            h2: 'Checkliste vor dem Absenden',
            html: `<ul><li>☐ Lässt sich der Text im PDF markieren?</li><li>☐ Standard-Überschriften.</li><li>☐ Positionstitel mindestens einmal enthalten.</li><li>☐ Die 5 wichtigsten Anforderungen tauchen auf.</li><li>☐ Datei: Vorname-Nachname-Lebenslauf.pdf.</li></ul>`
        }
    ],
    app: {
        h2: 'ATS-tauglicher Lebenslauf mit CV Builder',
        intro: 'CV Builder exportiert PDFs mit echtem Text und üblichen Abschnitten – gut auslesbar.',
        screenshot: 4,
        steps: [
            ['Standard-Abschnitte ausfüllen', 'Überblick, Berufserfahrung, Ausbildung, Fertigkeiten.'],
            ['Schlüsselwörter einbauen', 'In Fertigkeiten und Stichpunkten der Erfahrung.'],
            ['Schlichte Vorlage wählen', 'Einspaltig ist für Portale am sichersten.'],
            ['PDF herunterladen und testen', 'Text im PDF markieren – klappt es?']
        ],
        outro: 'Eine Version pro Stellenart: <a href="/de/ratgeber/lebenslauf-anpassen/">Lebenslauf anpassen</a>.'
    },
    faq: [
        { q: 'Was ist ein ATS-Lebenslauf?', a: 'Ein Lebenslauf, dessen Format und Schlüsselwörter es Bewerbermanagementsystemen erlauben, ihn korrekt auszulesen.' },
        { q: 'Können ATS-Systeme PDFs lesen?', a: 'Die meisten modernen Systeme lesen PDFs mit echtem Text. Wird Word verlangt, senden Sie .docx.' },
        { q: 'Funktionieren zweispaltige Lebensläufe im ATS?', a: 'Oft ja, aber einspaltig ist bei großen Portalen die sicherste Wahl.' }
    ],
    related: ['lebenslauf-anpassen', 'lebenslauf-vorlagen', 'lebenslauf-als-pdf-iphone']
};
