const S = require('./site');
const { page, esc, stripHtml, abs, storeBadge, shot, guideUrl, ICON } = require('./layout');

function render(L, guides, lastmod, alternates) {
    const H = L.home;
    const g = (slug) => guides.find((x) => x.slug === slug);
    const lm = H.learnMore;

    const body = `
<header class="hero">
  <div class="wrap">
    <div>
      <span class="eyebrow">${H.eyebrow}</span>
      <h1>${H.h1}</h1>
      <p class="lede">${H.lede}</p>
      ${L.rating ? `<div class="rating" aria-label="${esc(H.ratingAria(L))}"><span class="stars" aria-hidden="true">★★★★★</span><span>${H.ratingText(L)}</span></div>` : ''}
      <div class="hero-ctas">
        ${storeBadge(L, true)}
        <a class="btn btn-ghost" href="#how-it-works">${H.seeHow}</a>
      </div>
      <ul class="chips" aria-label="${H.chipsLabel}">
        ${H.chips.map((c) => `<li>${c}</li>`).join('')}
      </ul>
    </div>
    <div class="hero-visual" aria-hidden="true">
      <img class="s1" src="${shot(L, 1, '-sm')}" alt="" width="320" height="692" loading="eager">
      <img class="s2" src="${shot(L, 2)}" alt="" width="640" height="1385" fetchpriority="high">
      <img class="s3" src="${shot(L, 4, '-sm')}" alt="" width="320" height="692" loading="eager">
      <div class="float-card a">📄<span>${H.floatPdf}<small>${H.floatPdfSub}</small></span></div>
      ${L.rating ? `<div class="float-card b">⭐ ${L.num(L.rating)}<small>&nbsp;App Store</small></div>` : ''}
    </div>
  </div>
</header>

<section class="download" id="download" aria-labelledby="download-h">
  <div class="wrap">
    <div class="download-card">
      <img class="icon" src="${ICON}" alt="${esc(H.iconAlt)}" width="96" height="96">
      <div>
        <h2 id="download-h">${H.downloadH2}</h2>
        <p class="listed">${esc(H.listedAs(L))}</p>
        <ul class="meta-row">${H.meta(L).map((m) => `<li>${m}</li>`).join('')}</ul>
      </div>
      <div class="download-actions">
        ${storeBadge(L)}
        <div class="qr-box"><img class="qr" src="/assets/images/qr.png" alt="${esc(H.qrAlt)}" width="84" height="84" loading="lazy"><div class="qr-label">${H.qrLabel}</div></div>
      </div>
    </div>
  </div>
</section>

<section id="screenshots" aria-labelledby="screenshots-h">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">${H.shotsEyebrow}</span>
      <h2 id="screenshots-h">${H.shotsH2}</h2>
      <p class="lede">${H.shotsLede}</p>
    </div>
    <div class="shots" tabindex="0" aria-label="${esc(H.shotsAria)}">
      ${L.screenshots.map((s) => `<figure class="shot">
        <img src="${shot(L, s.n)}" srcset="${shot(L, s.n, '-sm')} 320w, ${shot(L, s.n)} 640w" sizes="(max-width:600px) 70vw, 240px" alt="${esc(s.alt)}" width="640" height="1385" loading="lazy">
        <figcaption><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></figcaption>
      </figure>`).join('\n      ')}
    </div>
  </div>
</section>

<section id="how-it-works" class="alt" aria-labelledby="how-h">
  <div class="wrap howto-grid">
    <div>
      <div class="section-head">
        <span class="eyebrow">${H.howEyebrow}</span>
        <h2 id="how-h">${H.howH2}</h2>
        <p class="lede">${H.howLede}</p>
      </div>
      <ol class="steps two">
        ${H.steps.map(([t, d]) => `<li class="step"><h3>${esc(t)}</h3><p>${esc(d)}</p></li>`).join('\n        ')}
      </ol>
      <p style="margin-top:26px"><a class="learn-more" href="${guideUrl(L, g(H.howGuide.slug).slug)}">${H.howGuide.text}</a></p>
    </div>
    <img class="phone" src="${shot(L, 5)}" alt="${esc(L.screenshots[4].alt)}" width="640" height="1385" loading="lazy">
  </div>
</section>

<section id="guides" aria-labelledby="guides-h">
  <div class="wrap">
    <div class="section-head center">
      <span class="eyebrow">${H.guidesEyebrow}</span>
      <h2 id="guides-h">${H.guidesH2}</h2>
      <p class="lede">${H.guidesLede}</p>
    </div>
    <div class="guide-grid">
      ${guides.map((x) => `<a class="guide-card" href="${guideUrl(L, x.slug)}"><span class="tag">${esc(x.tag)}</span><h3>${esc(x.h1)}</h3><p>${esc(x.cardText)}</p><span class="more">${L.t.readGuide}</span></a>`).join('\n      ')}
    </div>
  </div>
</section>

<section id="faq" class="alt" aria-labelledby="faq-h">
  <div class="wrap">
    <div class="section-head center">
      <span class="eyebrow">${H.faqEyebrow}</span>
      <h2 id="faq-h">${H.faqH2}</h2>
    </div>
    <div class="faq">
      ${H.faq.map((f, i) => `<details${i === 0 ? ' open' : ''}><summary>${esc(f.q)}</summary><div class="answer"><p>${esc(f.a)}</p>${f.link ? `<a class="learn-more" href="${guideUrl(L, g(f.link).slug)}" aria-label="${esc(H.learnMoreAria + ' ' + g(f.link).h1)}">${lm}</a>` : `<a class="learn-more" href="${S.PRIVACY_URL}" rel="nofollow">${lm}</a>`}</div></details>`).join('\n      ')}
    </div>
  </div>
</section>

<section id="get-started" aria-labelledby="cta-h">
  <div class="wrap">
    <div class="cta">
      <div>
        <span class="eyebrow" style="color:#ffb3d6">${H.ctaEyebrow}</span>
        <h2 id="cta-h">${H.ctaH2}</h2>
        <p>${H.ctaP(L)}</p>
        <div class="hero-ctas" style="margin-bottom:0">${storeBadge(L)}</div>
      </div>
      <img class="phone" src="${shot(L, 3)}" alt="${esc(L.screenshots[2].alt)}" width="640" height="1385" loading="lazy">
    </div>
  </div>
</section>`;

    const url = abs(L.base);
    const schema = [
        {
            '@context': 'https://schema.org',
            '@type': 'MobileApplication',
            name: S.BRAND,
            alternateName: H.altNames,
            description: H.appDescription,
            url,
            inLanguage: L.lang,
            operatingSystem: 'iOS, iPadOS',
            applicationCategory: 'BusinessApplication',
            applicationSubCategory: 'Productivity',
            softwareVersion: S.VERSION,
            fileSize: S.FILE_SIZE,
            dateModified: lastmod,
            downloadUrl: L.storeUrl,
            installUrl: L.storeUrl,
            image: abs('/assets/appstore/icon-512.webp'),
            screenshot: L.screenshots.map((s) => abs(shot(L, s.n))),
            offers: { '@type': 'Offer', price: '0', priceCurrency: L.priceCurrency, availability: 'https://schema.org/InStock' },
            ...(L.rating ? { aggregateRating: { '@type': 'AggregateRating', ratingValue: L.rating, ratingCount: L.ratingCount, bestRating: 5, worstRating: 1 } } : {}),
            author: { '@type': 'Person', name: S.DEVELOPER },
            publisher: { '@type': 'Organization', name: S.PUBLISHER },
            featureList: H.features
        },
        { '@context': 'https://schema.org', '@type': 'Organization', name: S.BRAND, url: S.SITE_URL, logo: abs('assets/images/logo.webp'), email: S.SUPPORT_EMAIL, sameAs: [L.storeUrl] },
        { '@context': 'https://schema.org', '@type': 'WebSite', name: S.BRAND, url, inLanguage: L.lang, description: H.siteDescription },
        {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: H.howSchemaName,
            inLanguage: L.lang,
            totalTime: 'PT20M',
            step: H.steps.map(([t, d], i) => ({ '@type': 'HowToStep', position: i + 1, name: t, text: d, url: `${url}#how-it-works` }))
        },
        { '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: L.lang, mainEntity: H.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: stripHtml(f.a) } })) },
        { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: L.t.home, item: url }] }
    ];

    return page({
        L,
        title: H.title,
        ogTitle: H.ogTitle,
        description: H.description(L),
        path: L.base,
        schema,
        body,
        guides,
        alternates,
        preload: shot(L, 2),
        lastmod
    });
}

module.exports = { render };
