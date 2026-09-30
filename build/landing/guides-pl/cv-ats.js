module.exports = {
    slug: 'cv-ats',
    en: 'ats-friendly-resume',
    keyword: 'cv ats',
    tag: 'ATS',
    navTitle: 'CV pod ATS',
    title: 'CV pod ATS: jak przejść przez system rekrutacyjny',
    h1: 'Jak przygotować CV przyjazne systemom ATS',
    description: 'Jak działa ATS i jak przez niego przejść: lista kontrolna formatowania, słów kluczowych i typu pliku dla CV przyjaznego systemom rekrutacyjnym.',
    cardText: 'Jak czyta ATS i lista kontrolna formatowania.',
    lede: 'Zanim CV przeczyta człowiek, często robi to program. Zadbaj, by poprawnie odczytał Twoje dane.',
    tldr: ['Standardowe nagłówki: Doświadczenie, Wykształcenie, Umiejętności.', 'PDF z prawdziwym tekstem lub Word.', 'Słowa kluczowe z ogłoszenia.', 'Bez tabel i tekstu w grafikach.'],
    sections: [
        { id: 'lista', h2: 'Lista kontrolna', html: `<ul><li>Jedna kolumna.</li><li>Standardowa czcionka.</li><li>Spójny zapis dat (01.2023 – obecnie).</li><li>Skróty z rozwinięciem: SEO (pozycjonowanie).</li><li>Nazwa pliku: Imie-Nazwisko-CV.pdf.</li></ul>` },
        { id: 'mity', h2: 'Mity', html: `<p>Ukrywanie słów kluczowych białą czcionką wychodzi na jaw, gdy CV czyta rekruter. Używaj ich po prostu w opisie doświadczenia.</p>` }
    ],
    appAfter: 1,
    app: {
        h2: 'CV przyjazne ATS w CV Builder',
        intro: 'Wybierz prosty szablon — PDF zawiera prawdziwy tekst, który ATS potrafi odczytać.',
        screenshot: 2,
        steps: [['Prosty szablon', 'Jedna kolumna.'], ['Standardowe sekcje', 'Wyraźne nagłówki.'], ['Słowa kluczowe', 'Z ogłoszenia.'], ['Pobierz PDF', 'Z prawdziwym tekstem.']],
        outro: 'Eksport do PDF jest w planie premium (z darmowym okresem próbnym). Żadna aplikacja nie gwarantuje przejścia przez konkretny ATS.'
    },
    faq: [
        { q: 'Czy ATS czyta PDF?', a: 'PDF z prawdziwym tekstem zwykle tak. Jeśli ogłoszenie wymaga Worda, wyślij Worda.' },
        { q: 'Czy zdjęcie przeszkadza ATS?', a: 'System go nie odczyta; zdjęcie zajmuje tylko miejsce.' }
    ],
    related: ['dopasowanie-cv-do-oferty', 'wzory-cv', 'cv-pdf-iphone']
};
