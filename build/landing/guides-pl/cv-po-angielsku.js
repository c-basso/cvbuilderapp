module.exports = {
    slug: 'cv-po-angielsku',
    en: null,
    keyword: 'cv po angielsku',
    tag: 'Angielski',
    navTitle: 'CV po angielsku',
    title: 'CV po angielsku: nazwy sekcji, zwroty i przykłady',
    h1: 'Jak napisać CV po angielsku',
    description: 'Jak napisać CV po angielsku dla firmy międzynarodowej: nazwy sekcji, czasowniki na osiągnięcia, zapis dat i wykształcenia oraz CV a resume.',
    cardText: 'Nazwy sekcji, czasowniki i zapis dat po angielsku.',
    lede: 'Coraz więcej ofert w Polsce wymaga CV po angielsku. Nie tłumacz dosłownie — użyj standardowych nagłówków i zwrotów.',
    tldr: ['Nagłówki: Summary, Work Experience, Education, Skills, Languages.', 'Osiągnięcia zaczynaj od czasownika: Led, Increased, Reduced.', 'Daty: Jan 2023 – Present.', 'W USA/UK bez zdjęcia i daty urodzenia.'],
    sections: [
        { id: 'sekcje', h2: 'Nazwy sekcji', html: `<table><thead><tr><th>Po polsku</th><th>Po angielsku</th></tr></thead><tbody><tr><td>Podsumowanie zawodowe</td><td>Summary / Profile</td></tr><tr><td>Doświadczenie zawodowe</td><td>Work Experience</td></tr><tr><td>Wykształcenie</td><td>Education</td></tr><tr><td>Umiejętności</td><td>Skills</td></tr><tr><td>Języki obce</td><td>Languages</td></tr></tbody></table>` },
        { id: 'zwroty', h2: 'Przykładowe zdania', html: `<ul><li><i>Increased online sales by 35% in one year.</i></li><li><i>Led a team of 5 developers.</i></li><li><i>Reduced delivery time by 2 days.</i></li></ul>` },
        { id: 'studia', h2: 'Wykształcenie po angielsku', html: `<p>Licencjat — <i>Bachelor’s degree (BA/BSc)</i>, magister — <i>Master’s degree (MA/MSc)</i>, technikum — <i>technical secondary school</i>.</p>` }
    ],
    appAfter: 1,
    app: {
        h2: 'CV po angielsku w CV Builder',
        intro: 'Interfejs CV Builder jest po angielsku, a szablony używają standardowych angielskich nagłówków — dobrze sprawdza się przy CV po angielsku.',
        screenshot: 2,
        steps: [['Nowe CV', 'Lub kopia polskiej wersji.'], ['Treść po angielsku', 'Czasowniki i liczby.'], ['Szablon', 'Prosty, jednokolumnowy.'], ['Pobierz PDF', 'Gotowe.']],
        outro: 'Eksport do PDF jest w planie premium (z darmowym okresem próbnym).'
    },
    faq: [
        { q: 'CV czy resume?', a: 'W Europie i Wielkiej Brytanii mówi się CV, w USA resume. Do polskiej firmy międzynarodowej zwykle wystarczy CV.' },
        { q: 'Czy mogę mieć wersję polską i angielską?', a: 'Tak, w aplikacji zapiszesz kilka wersji CV.' }
    ],
    related: ['aplikacja-do-cv', 'podsumowanie-zawodowe-cv', 'cv-ats']
};
