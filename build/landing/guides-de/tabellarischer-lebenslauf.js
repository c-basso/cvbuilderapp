module.exports = {
    slug: 'tabellarischer-lebenslauf',
    keyword: 'tabellarischer Lebenslauf',
    tag: 'Form',
    navTitle: 'Tabellarischer Lebenslauf',
    title: 'Tabellarischer Lebenslauf: Aufbau, Muster und Tipps (2026)',
    h1: 'Tabellarischer Lebenslauf: Aufbau und Muster',
    description: 'So ist ein tabellarischer Lebenslauf aufgebaut: Abschnitte, Reihenfolge, Datumsformat, Ort, Datum und Unterschrift – mit Muster und Umsetzung am iPhone.',
    cardText: 'Aufbau, Reihenfolge, Datumsformat und Unterschrift – mit Muster.',
    lede: 'Der tabellarische Lebenslauf ist in Deutschland, Österreich und der Schweiz der Standard. Links stehen die Zeiträume, rechts die Stationen – klar, knapp, antichronologisch. So bauen Sie ihn richtig auf.',
    tldr: [
        'Zweispaltig: Zeitraum links, Station rechts.',
        'Antichronologisch: die aktuellste Station zuerst.',
        'Abschnitte: persönliche Daten, Berufserfahrung, Ausbildung, Kenntnisse, ggf. Engagement.',
        'Abschluss mit Ort, Datum und Unterschrift.'
    ],
    sections: [
        {
            id: 'aufbau',
            h2: 'Aufbau des tabellarischen Lebenslaufs',
            html: `<table><thead><tr><th>Abschnitt</th><th>Inhalt</th></tr></thead><tbody>
<tr><td>Persönliche Daten</td><td>Name, Adresse, Telefon, E-Mail; freiwillig: Geburtsdatum, Foto</td></tr>
<tr><td>Kurzprofil (optional)</td><td>2–4 Sätze</td></tr>
<tr><td>Berufserfahrung</td><td>MM/JJJJ – MM/JJJJ · Position · Arbeitgeber, Ort · 3–5 Stichpunkte</td></tr>
<tr><td>Ausbildung</td><td>Studium/Ausbildung, Schulabschluss (nur der höchste)</td></tr>
<tr><td>Weiterbildungen</td><td>Kurs, Anbieter, Jahr</td></tr>
<tr><td>Kenntnisse</td><td>EDV, Sprachen mit Niveau, Führerschein</td></tr>
<tr><td>Engagement / Interessen</td><td>Nur mit Bezug zur Stelle</td></tr>
<tr><td>Abschluss</td><td>Ort, Datum, Unterschrift</td></tr>
</tbody></table>`
        },
        {
            id: 'muster',
            h2: 'Muster: eine Station',
            html: `<div class="example"><b>03/2021 – heute</b> &nbsp; Sachbearbeiterin Einkauf · Muster GmbH, Köln<br>• Lieferantenverträge neu verhandelt: Einkaufskosten −12 %<br>• Bestellprozess in SAP MM standardisiert, Durchlaufzeit −30 %<br>• Ansprechpartnerin für 40 Lieferanten</div>`
        },
        {
            id: 'regeln',
            h2: 'Formale Regeln',
            html: `<ul><li>Einheitliches Datumsformat (MM/JJJJ).</li><li>Lücken ab ca. 3 Monaten kurz erklären (Elternzeit, Weiterbildung, Jobsuche).</li><li>Max. 2 Seiten, bei langer Karriere 3.</li><li>Unterschrift passend zum Datum des Anschreibens.</li></ul>`
        }
    ],
    app: {
        h2: 'Tabellarischen Lebenslauf in CV Builder erstellen',
        intro: 'Die Vorlagen von CV Builder setzen Zeiträume und Stationen automatisch in eine übersichtliche Tabellenform.',
        screenshot: 5,
        steps: [
            ['Kontakte und Foto ausfüllen', 'Foto ist freiwillig.'],
            ['Berufserfahrung und Ausbildung eintragen', 'Mit Zeitraum, Position, Arbeitgeber und Stichpunkten.'],
            ['Fertigkeiten, Sprachen und Zertifizierungen ergänzen', 'Mit Niveauangaben.'],
            ['Unterschrift hinzufügen', 'Im Abschnitt „Unterschrift“.'],
            ['Klassische Vorlage wählen und PDF herunterladen', 'In der „Vorschau PDF“ die Seitenzahl prüfen.']
        ]
    },
    faq: [
        { q: 'Was ist ein tabellarischer Lebenslauf?', a: 'Ein Lebenslauf in Tabellenform mit Zeiträumen links und Stationen rechts, meist antichronologisch – der Standard im deutschsprachigen Raum.' },
        { q: 'Muss der Lebenslauf unterschrieben werden?', a: 'Üblich ist ein Abschluss mit Ort, Datum und Unterschrift; eine digital eingefügte Unterschrift ist bei Online-Bewerbungen akzeptiert.' },
        { q: 'Kann ich einen tabellarischen Lebenslauf am iPhone erstellen?', a: 'Ja. In CV Builder füllen Sie die Abschnitte aus, wählen eine klassische Vorlage, fügen Ihre Unterschrift hinzu und laden das PDF herunter.' }
    ],
    related: ['lebenslauf-schreiben', 'bewerbungsfoto', 'lebenslauf-vorlagen']
};
