# CV Builder – App-Store-Eintrag (Deutschland)

> Quelle: https://apps.apple.com/de/app/id1630645768, erfasst am 2026-09-29.
> Deutsche Screenshots: `assets/appstore/de/` (PNG + WebP). Icon gemeinsam: `assets/appstore/icon*`.

| Feld | Wert |
|---|---|
| Name | **Lebenslauf & CV Erstellen** |
| Untertitel | **Bewerbung, Vorlagen & PDF** |
| Bewertung | 4,3 / 5 (11 Bewertungen) |
| Preis | Kostenlos, In-App-Käufe; Abo „CV Resume, Resume Builder – Voller Zugriff auf alle Lebenslaufvorlagen“, Probeabo gratis |
| Kategorie | Wirtschaft |
| Version | 1.23.0 (19. Sept.) |
| Größe | 57,9 MB |
| Kompatibilität | iPhone, iPad; iOS 18.6+ |

## Werbetext
Lebenslauf & CV Erstellen: Erstellen Sie in Minuten einen professionellen Lebenslauf. 100+ Vorlagen, Anschreiben-Editor und PDF-Export für Ihre Bewerbung.

## Abschnitte in der App (DE)
Einführung · Überblick · Foto · Kontakte · Ausbildung · Berufserfahrung · Fertigkeiten · Links und QR-Codes · Sprachen · Zertifizierungen · Verweise · Eigene Abschnitte · Anschreiben · Vorschau PDF · PDF herunterladen (Unterschrift als eigener Abschnitt)

## Screenshots
| # | Titel | Inhalt |
|---|---|---|
| 1 | CV MAKER – lebenslauf erstellen · „Die Kunst der Vorlagen“ | Vorlagengalerie |
| 2 | RESUME BUILDER – bewerbung schreiben · „Holen Sie den Job!“ | Fertiger Lebenslauf mit Foto & QR |
| 3 | ANSCHREIBEN – kostenlos erstellen · „Alles in einer App“ | Anschreiben |
| 4 | PROFESSIONELL – lebenslauf-editor · „Was immer Sie benötigen“ | Zusätzliche Abschnitte |
| 5 | EINFACH – zu bedienen · „Nutzerfreundlich“ | Menü mit % |

## Hinweise
- Nur 11 Bewertungen → `/de/` zeigt **keine Bewertung** (und kein `aggregateRating`). Später in `build/landing/i18n/de.js` aktivieren.
- Übersetzungsschwächen in der App/Screenshots: „Verweise“ → besser **„Referenzen“**; „Herunterladen PDF“ (Screenshot 2) → **„PDF herunterladen“**; Screenshot-Titel auf Englisch („CV MAKER“, „RESUME BUILDER“) → deutsche Begriffe ranken und konvertieren besser („LEBENSLAUF ERSTELLEN“).
- Screenshot 3 verspricht „Anschreiben kostenlos erstellen“: prüfen, ob das ohne Abo stimmt (Abmahnrisiko bei irreführender Werbung).
- Die alte `build/de.json` zielte auf englische Begriffe („cv maker free“, „cv maker kündigen“, „cv maker login“) – das sind Navigations-/Kündigungssuchen anderer Anbieter; die neue Seite zielt auf deutsche Suchbegriffe.
