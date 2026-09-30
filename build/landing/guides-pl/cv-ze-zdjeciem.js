module.exports = {
    slug: 'cv-ze-zdjeciem',
    en: 'cv-with-photo',
    keyword: 'cv ze zdjęciem',
    tag: 'Zdjęcie',
    navTitle: 'CV ze zdjęciem',
    title: 'Zdjęcie w CV: dodawać czy nie i jakie wybrać?',
    h1: 'Zdjęcie w CV — tak czy nie?',
    description: 'Czy dodawać zdjęcie do CV? Jakie są zwyczaje w Polsce i za granicą, jak powinno wyglądać dobre zdjęcie do CV i jak je dodać lub usunąć w aplikacji na iPhonie.',
    cardText: 'Zwyczaje w różnych krajach i wymagania dla zdjęcia.',
    lede: 'W Polsce zdjęcie w CV jest częste, ale nie jest obowiązkowe. Oto jak zdecydować.',
    tldr: ['Polska: częste, nieobowiązkowe.', 'USA, Wielka Brytania, Kanada: nie dodawaj.', 'Niemcy, Austria: często tak.', 'Aktualne, profesjonalne zdjęcie na jasnym tle.'],
    sections: [
        { id: 'kraje', h2: 'Zwyczaje w różnych krajach', html: `<table><thead><tr><th>Kraj</th><th>Zdjęcie</th></tr></thead><tbody><tr><td>Polska</td><td>Opcjonalne, często tak</td></tr><tr><td>Niemcy, Austria, Szwajcaria</td><td>Często tak</td></tr><tr><td>USA, Wielka Brytania, Kanada</td><td>Nie</td></tr></tbody></table>` },
        { id: 'wymagania', h2: 'Dobre zdjęcie do CV', html: `<ul><li>Aktualne i ostre.</li><li>Na wprost, z uśmiechem.</li><li>Jasne, jednolite tło.</li><li>Strój pasujący do stanowiska.</li></ul><p>Zdjęcie wykracza poza wymagane dane, dlatego warto mieć klauzulę zgody RODO.</p>` }
    ],
    appAfter: 1,
    app: {
        h2: 'Dodawanie i usuwanie zdjęcia w CV Builder',
        intro: 'Wybierz szablon ze zdjęciem lub bez i zmieniaj go w zależności od oferty.',
        screenshot: 2,
        steps: [['Szablon ze zdjęciem', 'Lub bez.'], ['Dodaj zdjęcie', 'Z galerii lub aparatu.'], ['Pobierz PDF', 'Dla danej oferty.']],
        outro: 'Eksport do PDF jest w planie premium (z darmowym okresem próbnym).'
    },
    faq: [
        { q: 'Czy pracodawca może wymagać zdjęcia?', a: 'Zwykle nie; zdjęcie to wybór kandydata.' },
        { q: 'Czy mogę użyć selfie?', a: 'Lepiej nie. Wybierz spokojne, profesjonalne zdjęcie.' }
    ],
    related: ['wzory-cv', 'klauzula-rodo-cv', 'jak-napisac-cv']
};
