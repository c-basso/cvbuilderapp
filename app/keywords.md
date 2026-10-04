# CV Builder — Keyword research (EN, US-first)

_Last updated 2026-09-28. Scope: English landing page at cvbuilderapp.com + one guide page per long-tail target._

## Method & data honesty

Paid volume tools (Ahrefs/Semrush) and Google Autocomplete were not reachable from this environment, so this plan combines:

1. **Your Google Trends exports already in the repo** (`relatedQueries_*.csv`) — relative interest (0–100) and rising queries. US: `resume` 89, `resume builder` 88, `cv resume` 88, `cv builder online` 43, `best cv builder` 34, `cv template` 25, `cv maker` 16, `resume maker` 13, `cv builder app` 12; rising: `resume templates` +140 %, `cv builder app` +120 %, `cv examples` +90 %. Other markets show `cv maker free`, `cv ats`, `curriculum vitae pdf`, `como fazer curriculum vitae` rising.
2. **Live SERP review (Sept 2026)** of each target — who ranks (Indeed, Zety, Novoresume, Kickresume, Resume Genius, small app blogs), what format wins (step-by-step guides, listicles, comparison pages).
3. **App-feature fit** — we only target queries the app actually solves (PDF export, 100+ templates, cover letters, photo, signature, QR/links, multiple resumes, iPhone/iPad, on-device data).

Volume tiers below are **directional** (VH ≥ 100k/mo, H 10k–100k, M 1k–10k, L < 1k, US). Verify in Google Search Console after 4–8 weeks and re-prioritise.

## How to read the scoring

- **Intent**: T = transactional (wants an app now), C = commercial (comparing), I = informational (how-to).
- **KD** = realistic ranking difficulty for a young domain: 🔴 very hard (Indeed/Zety/Canva own it), 🟠 hard, 🟢 winnable.
- **Conv.** = likelihood a visitor installs an iOS app: ★★★ high, ★★ medium, ★ low.
- **Priority** = (fit × conversion) ÷ difficulty.

## 1. Primary keywords → homepage (`/`)

| Keyword | Vol. | Intent | KD | Conv. | Where it goes |
|---|---|---|---|---|---|
| resume builder app | M–H | T | 🟠 | ★★★ | `<title>`, H1, hero, schema |
| cv builder app | M (rising +120 %) | T | 🟢 | ★★★ | title, H1 variant, meta description |
| cv maker / cv maker app | H | T | 🟠 | ★★★ | H2s, App Store name block ("CV Maker – Job Resume Creator") |
| resume maker | H | T | 🟠 | ★★★ | screenshots section copy |
| resume builder (head) | VH | T/C | 🔴 | ★★ | supporting mention only — too broad to win soon |
| resume templates / cv templates | VH (rising +140 %) | C/I | 🔴 | ★★ | screenshots + guide `/guides/resume-templates/` |
| cover letter builder | H | T | 🔴 | ★★ | how-it-works + guide |
| resume app for iphone | M | T | 🟢 | ★★★ | hero subtitle, download section |
| resume builder for iPad | L–M | T | 🟢 | ★★★ | download section, FAQ |
| resume pdf maker | L–M | T | 🟢 | ★★★ | how-it-works step 4 |

**Homepage title:** `Resume Builder App for iPhone & iPad | CV Builder – 100+ Templates, PDF` (≈ 70 chars — front-loads the two strongest transactional phrases).
**Meta description:** `Make a job-ready resume or CV on your iPhone in minutes. 100+ professional templates, matching cover letters, photo & QR code, one-tap PDF export. Rated 4.8★.`

## 2. Long-tail targets → one guide each (`/guides/<slug>/`)

Chosen for: clear searcher problem + app solves it + winnable SERP.

| # | Target keyword (primary) | Secondary / variants | Vol. | Intent | KD | Conv. | Slug |
|---|---|---|---|---|---|---|---|
| 1 | how to make a resume on iphone | make resume on phone, create resume on iphone free | M | I→T | 🟢 | ★★★ | `how-to-make-a-resume-on-iphone` |
| 2 | best resume builder app for iphone | resume app iphone, resume builder ipad | M | C | 🟠 | ★★★ | `best-resume-builder-app-for-iphone` |
| 3 | cv maker app | free cv maker app, cv maker for phone | M | T | 🟢 | ★★★ | `cv-maker-app` |
| 4 | how to save a resume as a pdf on iphone | resume pdf iphone, export resume pdf | M | I→T | 🟢 | ★★★ | `save-resume-as-pdf-on-iphone` |
| 5 | how to write a cv | cv format, what to put on a cv | H | I | 🔴 | ★★ | `how-to-write-a-cv` |
| 6 | resume with no experience | first job resume, student resume | H | I | 🟠 | ★★ | `resume-with-no-experience` |
| 7 | cv vs resume | difference between cv and resume | H | I | 🟠 | ★ | `cv-vs-resume` |
| 8 | cover letter app | write cover letter on iphone, cover letter maker | M | T | 🟢 | ★★★ | `cover-letter-app` |
| 9 | professional resume templates | which resume template, modern resume template | VH | C | 🔴 | ★★ | `resume-templates` |
| 10 | resume summary examples | professional summary for resume | H | I | 🟠 | ★★ | `resume-summary-examples` |
| 11 | ats friendly resume | ats resume format, ats cv | H (rising) | I | 🟠 | ★★ | `ats-friendly-resume` |
| 12 | how to tailor your resume to a job description | multiple resumes for different jobs | M | I | 🟢 | ★★ | `tailor-resume-to-job-description` |
| 13 | cv with photo | should i put a photo on my cv, resume photo | M | I | 🟢 | ★★ | `cv-with-photo` |
| 14 | qr code on resume | add linkedin qr code to resume | L | I→T | 🟢 | ★★★ | `qr-code-on-resume` |

### Quick wins first (lowest KD × highest conversion)
1 → 4 → 3 → 8 → 14 → 12 → 2. These are "do it on my phone" searches where the app _is_ the answer.

### Authority builders (harder, bigger)
5, 6, 9, 10, 11, 7 — informational; win links and topical authority, then pass PageRank to the quick-win pages via internal links.

## 3. On-page placement rules (applied in the build)

- One primary keyword per URL; it appears in `<title>`, H1, first 100 words, URL slug, meta description, one H2, and image alt of the in-guide screenshot.
- Every guide: TL;DR box (answer-first, good for AI Overviews / LLM citations), numbered steps (`HowTo` schema), 3 FAQs (`FAQPage` schema), `Article` + `BreadcrumbList` schema, "Do it in CV Builder" block with a real App Store screenshot, 3 related guides, 2 CTAs.
- Homepage FAQ: each question targets one long-tail phrase and links "Learn more" → its guide (internal-link hub).
- Hub page `/guides/` lists all guides (crawl path + topical cluster).
- Guides added to `sitemap.xml`, `llms.txt`, and IndexNow submission list.

## 4. App Store (ASO) suggestions (outside the website)

- Title is already strong ("CV Maker - Job Resume Creator"). Subtitle "Professional Templates & PDF" could become **"Resume Builder & Cover Letter"** to add two high-intent words not in the title.
- Keyword field ideas (no repeats of title/subtitle words): `builder,curriculum,vitae,cover,letter,template,ats,student,iphone,ipad,editor,format,europass,photo,signature`.
- Screenshot 3 says "Creator Free" — make sure the free tier matches that wording to avoid review complaints.

## 5. Next markets (you already have the localized homepages)

Rising queries worth localized guides later: ES `cv harvard`, `cv ats`; IT `curriculum vitae europeo`; PT `curriculum vitae europass editar`, `como fazer curriculum vitae simples`; DE `cv ats maker`, `lebenslauf erstellen`; RU `создать резюме бесплатно`, `резюме в формате pdf`.
