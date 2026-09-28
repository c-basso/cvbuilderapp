const S = require('./site');
const { page, esc, stripHtml, abs, storeBadge, shot } = require('./layout');

const HOW_IT_WORKS = [
    ['Enter your details', 'Guided sections — intro, summary, photo, contacts, education, work experience — show what to write and how complete you are.'],
    ['Add what makes you stand out', 'Skills, languages, certifications, references, links & QR codes, signature, or any custom section.'],
    ['Pick one of 100+ templates', 'Switch designs anytime and tap Preview PDF to see your real content in each layout.'],
    ['Download PDF and apply', 'One tap exports a print-ready PDF. Add a matching cover letter and send both.']
];

const FAQ = [
    { q: 'How do I make a resume on my iPhone?', a: 'Download CV Builder, fill in the guided sections (contacts, summary, experience, education, skills), choose a template and tap Download PDF. Most people finish in 15–30 minutes.', link: 'how-to-make-a-resume-on-iphone' },
    { q: 'Is CV Builder free?', a: 'CV Builder is free to download and comes with a free trial. Premium plans (weekly, monthly, annual or a one-time lifetime option) unlock full access; prices are shown in the app before you buy.', link: 'cv-maker-app' },
    { q: 'How do I save my resume as a PDF on iPhone?', a: 'In CV Builder, tap Preview PDF to check it, then Download PDF to save it to Files or share it by email. The PDF keeps your layout identical on every device.', link: 'save-resume-as-pdf-on-iphone' },
    { q: 'Can I write a cover letter in the app?', a: 'Yes. CV Builder includes a cover letter creator that matches your resume design and exports as PDF.', link: 'cover-letter-app' },
    { q: 'Which resume template should I choose?', a: 'Pick by industry and how you’ll apply: classic single-column for conservative fields and online portals, modern two-column for tech and creative roles. CV Builder has 100+ templates you can preview with your own content.', link: 'resume-templates' },
    { q: 'Are CV Builder resumes ATS-friendly?', a: 'CV Builder exports text-based PDFs with standard section names. For large-company portals, choose a simple single-column template and mirror the job ad’s keywords.', link: 'ats-friendly-resume' },
    { q: 'Can I make a resume with no work experience?', a: 'Yes. Put education first and use custom sections for projects, volunteering or activities — the app’s guided flow makes a strong one-page first resume.', link: 'resume-with-no-experience' },
    { q: 'Can I keep different resumes for different jobs?', a: 'Yes. Store multiple resumes in the app and tailor the summary, skills and bullet order for each type of role.', link: 'tailor-resume-to-job-description' },
    { q: 'Can I add a photo, signature or QR code?', a: 'Yes. CV Builder has Photo and signature options and a Links & QR codes section that turns your LinkedIn or portfolio URL into a scannable code.', link: 'qr-code-on-resume' },
    { q: 'What is the difference between a CV and a resume?', a: 'In the US and Canada a resume is a 1–2 page job document and a CV is a longer academic record; in the UK, Europe and most other countries “CV” means the job document. CV Builder makes both.', link: 'cv-vs-resume' },
    { q: 'Does it work on iPad?', a: `Yes. CV Builder runs on both iPhone and iPad (${S.MIN_IOS} or later), and the larger iPad screen makes previewing your resume easier.`, link: 'best-resume-builder-app-for-iphone' },
    { q: 'Is my data private?', a: 'Your resume data is stored on your device. The App Store privacy label lists only purchases and identifiers, not linked to your identity, and your personal information is not sold.', link: null }
];

function render(guides, lastmod) {
    const g = (slug) => guides.find((x) => x.slug === slug);

    const body = `
<header class="hero">
  <div class="wrap">
    <div>
      <span class="eyebrow">Resume builder app for iPhone &amp; iPad</span>
      <h1>Make a job-ready resume <em>on your iPhone</em> in minutes</h1>
      <p class="lede">${S.BRAND} is the CV maker that does the formatting for you: 100+ professional templates, guided sections, matching cover letters and one-tap PDF export.</p>
      <div class="rating" aria-label="Rated ${S.RATING} out of 5 from ${S.RATING_COUNT} ratings on the App Store"><span class="stars" aria-hidden="true">★★★★★</span><span>${S.RATING} · ${S.RATING_COUNT} App Store ratings</span></div>
      <div class="hero-ctas">
        ${storeBadge(`Download ${S.BRAND} on the App Store`, true)}
        <a class="btn btn-ghost" href="#how-it-works">See how it works</a>
      </div>
      <ul class="chips" aria-label="Highlights">
        <li>100+ templates</li><li>PDF export</li><li>Cover letters</li><li>Photo &amp; QR code</li><li>Data stays on device</li>
      </ul>
    </div>
    <div class="hero-visual" aria-hidden="true">
      <img class="s1" src="${shot(1, '-sm')}" alt="" width="320" height="692" loading="eager">
      <img class="s2" src="${shot(2)}" alt="" width="640" height="1385" fetchpriority="high">
      <img class="s3" src="${shot(4, '-sm')}" alt="" width="320" height="692" loading="eager">
      <div class="float-card a">📄<span>Resume.pdf<small>Exported in 1 tap</small></span></div>
      <div class="float-card b">⭐ ${S.RATING}<small>&nbsp;App Store</small></div>
    </div>
  </div>
</header>

<section class="download" id="download" aria-labelledby="download-h">
  <div class="wrap">
    <div class="download-card">
      <img class="icon" src="/assets/appstore/icon-192.webp" alt="${S.BRAND} app icon" width="96" height="96">
      <div>
        <h2 id="download-h">Download ${S.BRAND} — free on the App Store</h2>
        <p style="margin:0;color:var(--muted)">Listed as “${esc(S.STORE_NAME)}” · ${esc(S.STORE_SUBTITLE)}</p>
        <ul class="meta-row">
          <li><strong>${S.RATING}★</strong> ${S.RATING_COUNT} ratings</li>
          <li><strong>iPhone · iPad</strong></li>
          <li><strong>${S.MIN_IOS}+</strong></li>
          <li><strong>Free</strong> · In-app purchases</li>
        </ul>
      </div>
      <div class="download-actions">
        <div class="store-wrap">${storeBadge()}</div>
        <div class="qr-box"><img class="qr" src="/qr.png" alt="QR code to download ${S.BRAND} from the App Store" width="104" height="104" loading="lazy"><div class="qr-label">Scan with iPhone</div></div>
      </div>
    </div>
  </div>
</section>

<section id="screenshots" aria-labelledby="screenshots-h">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Inside the app</span>
      <h2 id="screenshots-h">A resume maker built for your phone</h2>
      <p class="lede">From template gallery to finished PDF, every screen is designed for one thumb — no laptop, no formatting headaches.</p>
    </div>
    <div class="shots" tabindex="0" aria-label="App screenshots, scroll horizontally">
      ${S.SCREENSHOTS.map((s) => `<figure class="shot">
        <img src="${shot(s.n)}" srcset="${shot(s.n, '-sm')} 320w, ${shot(s.n)} 640w" sizes="(max-width:600px) 70vw, 240px" alt="${esc(s.alt)}" width="640" height="1385" loading="lazy">
        <figcaption><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></figcaption>
      </figure>`).join('\n      ')}
    </div>
  </div>
</section>

<section id="how-it-works" class="alt" aria-labelledby="how-h">
  <div class="wrap howto-grid">
    <div>
      <div class="section-head">
        <span class="eyebrow">How it works</span>
        <h2 id="how-h">From blank page to PDF resume in 4 steps</h2>
        <p class="lede">The guided editor tells you what each section needs, so you never miss the essentials employers look for.</p>
      </div>
      <ol class="steps two">
        ${HOW_IT_WORKS.map(([t, d]) => `<li class="step"><h3>${esc(t)}</h3><p>${esc(d)}</p></li>`).join('\n        ')}
      </ol>
      <p style="margin-top:26px"><a class="learn-more" href="/guides/${g('how-to-make-a-resume-on-iphone').slug}/">Read the full guide: how to make a resume on iPhone</a></p>
    </div>
    <img class="phone" src="${shot(5)}" alt="${esc(S.SCREENSHOTS[4].alt)}" width="640" height="1385" loading="lazy">
  </div>
</section>

<section id="guides" aria-labelledby="guides-h">
  <div class="wrap">
    <div class="section-head center">
      <span class="eyebrow">Guides</span>
      <h2 id="guides-h">Resume &amp; CV guides</h2>
      <p class="lede">Step-by-step answers to the questions job seekers search for most — each with how to do it in ${S.BRAND}.</p>
    </div>
    <div class="guide-grid">
      ${guides.map((x) => `<a class="guide-card" href="/guides/${x.slug}/"><span class="tag">${esc(x.tag)}</span><h3>${esc(x.h1)}</h3><p>${esc(x.cardText)}</p><span class="more">Read guide</span></a>`).join('\n      ')}
    </div>
  </div>
</section>

<section id="faq" class="alt" aria-labelledby="faq-h">
  <div class="wrap">
    <div class="section-head center">
      <span class="eyebrow">FAQ</span>
      <h2 id="faq-h">Questions about making a resume with ${S.BRAND}</h2>
    </div>
    <div class="faq">
      ${FAQ.map((f, i) => `<details${i === 0 ? ' open' : ''}><summary>${esc(f.q)}</summary><div class="answer"><p>${esc(f.a)}</p>${f.link ? `<a class="learn-more" href="/guides/${f.link}/" aria-label="Learn more: ${esc(g(f.link).h1)}">Learn more</a>` : `<a class="learn-more" href="${S.PRIVACY_URL}" rel="nofollow">Learn more</a>`}</div></details>`).join('\n      ')}
    </div>
  </div>
</section>

<section id="get-started" aria-labelledby="cta-h">
  <div class="wrap">
    <div class="cta">
      <div>
        <span class="eyebrow" style="color:#ffb3d6">Your next job starts here</span>
        <h2 id="cta-h">Create your resume now — send it today</h2>
        <p>Join job seekers who rate ${S.BRAND} ${S.RATING}★. Download free, pick a template and export your first PDF in minutes.</p>
        <div class="hero-ctas" style="margin-bottom:0">${storeBadge()}</div>
      </div>
      <img class="phone" src="${shot(3)}" alt="${esc(S.SCREENSHOTS[2].alt)}" width="640" height="1385" loading="lazy">
    </div>
  </div>
</section>`;

    const schema = [
        {
            '@context': 'https://schema.org',
            '@type': 'MobileApplication',
            name: S.BRAND,
            alternateName: [S.STORE_NAME, 'CV Maker', 'Resume Builder'],
            description: 'Resume builder and CV maker app for iPhone and iPad with 100+ templates, cover letters and PDF export.',
            url: S.SITE_URL,
            operatingSystem: 'iOS, iPadOS',
            applicationCategory: 'BusinessApplication',
            applicationSubCategory: 'Productivity',
            softwareVersion: S.VERSION,
            fileSize: S.FILE_SIZE,
            dateModified: lastmod,
            downloadUrl: S.STORE_URL,
            installUrl: S.STORE_URL,
            image: abs('/assets/appstore/icon-512.webp'),
            screenshot: S.SCREENSHOTS.map((s) => abs(shot(s.n))),
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
            aggregateRating: { '@type': 'AggregateRating', ratingValue: S.RATING, ratingCount: S.RATING_COUNT, bestRating: 5, worstRating: 1 },
            author: { '@type': 'Person', name: S.DEVELOPER },
            publisher: { '@type': 'Organization', name: S.PUBLISHER },
            featureList: ['100+ resume and CV templates', 'Guided step-by-step editor', 'One-tap PDF export', 'Cover letter creator', 'Photo and signature', 'Links and QR codes', 'Multiple resumes', 'On-device data storage']
        },
        { '@context': 'https://schema.org', '@type': 'Organization', name: S.BRAND, url: S.SITE_URL, logo: abs('logo.webp'), email: S.SUPPORT_EMAIL, sameAs: [S.STORE_URL] },
        { '@context': 'https://schema.org', '@type': 'WebSite', name: S.BRAND, url: S.SITE_URL, inLanguage: 'en', description: 'Resume builder app for iPhone and iPad, plus free resume and CV guides.' },
        {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to make a resume on iPhone with CV Builder',
            totalTime: 'PT20M',
            step: HOW_IT_WORKS.map(([t, d], i) => ({ '@type': 'HowToStep', position: i + 1, name: t, text: d, url: `${S.SITE_URL}#how-it-works` }))
        },
        { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: stripHtml(f.a) } })) },
        { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: S.SITE_URL }] }
    ];

    return page({
        title: 'Resume Builder App for iPhone & iPad | CV Builder: 100+ Templates',
        ogTitle: 'CV Builder – Resume Builder & CV Maker App for iPhone',
        description: `Make a job-ready resume or CV on your iPhone in minutes: 100+ templates, matching cover letters, photo & QR code, one-tap PDF export. Rated ${S.RATING}★.`,
        path: '/',
        schema,
        body,
        guides,
        hreflang: true,
        preload: shot(2),
        lastmod
    });
}

module.exports = { render, FAQ };
