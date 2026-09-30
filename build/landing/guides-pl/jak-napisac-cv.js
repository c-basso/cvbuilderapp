module.exports = {
    slug: 'jak-napisac-cv',
    en: 'how-to-write-a-cv',
    keyword: 'jak napisać cv',
    tag: 'Podstawy',
    navTitle: 'Jak napisać CV',
    title: 'Jak napisać CV: układ, przykłady i najczęstsze błędy',
    h1: 'Jak napisać dobre CV w 7 krokach',
    description: 'Jak napisać CV, które przyciąga rekruterów: układ sekcji, co w nich wpisać, długość CV i błędy, których unikać. Plus jak zrobić je w 15 minut na iPhonie.',
    cardText: 'Układ sekcji, co wpisać i czego unikać.',
    lede: 'Rekruter poświęca na pierwsze przejrzenie CV kilka sekund. Dobry układ i konkretne wyniki sprawiają, że te sekundy działają na Twoją korzyść.',
    tldr: ['Układ: dane kontaktowe → podsumowanie → doświadczenie → wykształcenie → umiejętności → języki → klauzula RODO.', 'Doświadczenie od najnowszego, z wynikami w liczbach.', '1–2 strony.', 'Zawsze wysyłaj PDF.'],
    sections: [
        { id: 'uklad', h2: 'Standardowy układ CV', html: `<ol><li><b>Dane kontaktowe</b>: imię i nazwisko, telefon, e-mail, miasto, LinkedIn.</li><li><b>Podsumowanie zawodowe</b>: 2–4 zdania.</li><li><b>Doświadczenie</b>: od najnowszego.</li><li><b>Wykształcenie</b>.</li><li><b>Umiejętności i języki</b>.</li><li><b>Klauzula RODO</b> na końcu, jeśli pracodawca jej wymaga.</li></ol>` },
        { id: 'wyniki', h2: 'Opisuj wyniki, nie obowiązki', html: `<p>Zamiast: <i>odpowiedzialny za social media</i>. Lepiej: <i>zwiększyłem liczbę obserwujących na Instagramie o 120% w 12 miesięcy</i>. Zaczynaj od czasownika i podawaj liczby.</p>` },
        { id: 'bledy', h2: 'Najczęstsze błędy', html: `<ul><li>Literówki i błędy językowe.</li><li>Nieprofesjonalny adres e-mail.</li><li>Brak klauzuli RODO, gdy jest wymagana.</li><li>To samo CV do każdej oferty.</li></ul>` }
    ],
    appAfter: 1,
    app: {
        h2: 'Tworzenie CV w CV Builder',
        intro: 'Aplikacja prowadzi Cię przez wszystkie sekcje i automatycznie nadaje dokumentowi profesjonalny wygląd. Interfejs jest po angielsku, treść wpisujesz w dowolnym języku.',
        screenshot: 5,
        steps: [['Wypełnij sekcje', 'Z procentem wypełnienia.'], ['Wybierz szablon', 'Ponad 100 projektów.'], ['Sprawdź podgląd PDF', 'Marginesy, strony i nagłówki.'], ['Pobierz PDF', 'Gotowe do wysłania.']],
        outro: 'Pełne funkcje, w tym eksport do PDF, są w planie premium (z darmowym okresem próbnym).'
    },
    faq: [
        { q: 'Ile stron powinno mieć CV?', a: 'Jedna strona na start kariery, maksymalnie dwie przy dużym doświadczeniu.' },
        { q: 'Czy podawać datę urodzenia?', a: 'Nie jest potrzebna. Wystarczą imię, nazwisko, telefon, e-mail i miasto.' },
        { q: 'Czy CV musi być po polsku?', a: 'Pisz w języku ogłoszenia. Do firm międzynarodowych często po angielsku.' }
    ],
    related: ['cv-na-telefonie', 'podsumowanie-zawodowe-cv', 'wzory-cv']
};
