const S = require('./site');
const { page, esc, stripHtml, abs, storeBadge, shot, guideUrl, ICON } = require('./layout');

function appBlock(L, g) {
    const a = g.app;
    return `<section class="app-block" id="use-the-app" aria-labelledby="use-the-app-h">
  <div>
    <h2 id="use-the-app-h">${esc(a.h2)}</h2>
    <p>${a.intro}</p>
    <ol>${a.steps.map(([t, d]) => `<li><b>${esc(t)}.</b> ${d}</li>`).join('')}</ol>
    ${a.outro ? `<p>${a.outro}</p>` : ''}
    ${storeBadge(L)}
  </div>
  <img src="${shot(L, a.screenshot)}" alt="${esc(L.screenshots[a.screenshot - 1].alt)}" width="640" height="1385" loading="lazy">
</section>`;
}

function inlineCta(L, text) {
    return `<div class="inline-cta">
  <img class="ic" src="${ICON}" alt="" width="52" height="52" loading="lazy">
  <p><b>${text}</b>${L.t.inlineCtaSub(L)}</p>
  ${storeBadge(L)}
</div>`;
}

function render(L, g, guides, lastmod, alternates) {
    const t = L.t;
    const path = guideUrl(L, g.slug);
    const url = abs(path);
    const hub = guideUrl(L);
    const appAfter = typeof g.appAfter === 'number' ? g.appAfter : g.sections.length - 1;
    const tocItems = g.sections.map((s) => ({ id: s.id, t: s.h2 }));
    tocItems.splice(appAfter + 1, 0, { id: 'use-the-app', t: g.app.h2 });
    tocItems.push({ id: 'faq', t: t.faqH });

    const bodySections = [];
    g.sections.forEach((s, i) => {
        bodySections.push(`<h2 id="${s.id}">${esc(s.h2)}</h2>\n${s.html}`);
        if (i === 0 && appAfter !== 0) bodySections.push(inlineCta(L, t.inlineCta1));
        if (i === appAfter) bodySections.push(appBlock(L, g));
    });

    const related = g.related.map((slug) => guides.find((x) => x.slug === slug));
    const words = stripHtml(g.lede + g.tldr.join(' ') + g.sections.map((s) => s.html).join(' ') + g.app.steps.flat().join(' ')).split(' ').length;
    const minutes = Math.max(3, Math.round(words / 200));

    const body = `
<header class="g-hero">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="${L.base}">${t.home}</a> › <a href="${hub}">${t.guides}</a> › <span aria-current="page">${esc(g.navTitle)}</span></nav>
    <span class="eyebrow">${esc(g.tag)}</span>
    <h1>${esc(g.h1)}</h1>
    <p class="lede">${g.lede}</p>
    <div class="g-meta"><span>${t.updated} <time datetime="${lastmod}">${L.dateFmt(lastmod)}</time></span><span>${t.minRead(minutes)}</span><span>${t.byTeam}</span></div>
  </div>
</header>
<div class="wrap g-layout">
  <article class="g-body">
    <div class="tldr"><strong>${t.quickAnswer}</strong><ul>${g.tldr.map((x) => `<li>${x}</li>`).join('')}</ul></div>
    ${bodySections.join('\n')}
    <h2 id="faq">${t.faqH}</h2>
    <div class="faq" style="margin:0">
      ${g.faq.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer"><p>${f.a}</p></div></details>`).join('\n')}
    </div>
    ${inlineCta(L, t.inlineCta2)}
    <section class="related" aria-labelledby="related-h">
      <h2 id="related-h">${t.relatedH}</h2>
      <div class="guide-grid">
        ${related.map((r) => `<a class="guide-card" href="${guideUrl(L, r.slug)}"><span class="tag">${esc(r.tag)}</span><h3>${esc(r.h1)}</h3><p>${esc(r.cardText)}</p><span class="more">${t.readGuide}</span></a>`).join('')}
      </div>
    </section>
  </article>
  <aside class="g-aside">
    <nav class="toc" aria-label="${t.onThisPage}"><h2>${t.onThisPage}</h2><ol>${tocItems.map((x) => `<li><a href="#${x.id}">${esc(x.t)}</a></li>`).join('')}</ol></nav>
    <div class="aside-cta">
      <img class="ic" src="${ICON}" alt="" width="72" height="72" loading="lazy">
      <b>${S.BRAND}</b>
      <p>${t.asideSub(L)}</p>
      ${storeBadge(L)}
    </div>
  </aside>
</div>`;

    const schema = [
        {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: g.h1,
            description: g.description,
            url,
            mainEntityOfPage: url,
            datePublished: lastmod,
            dateModified: lastmod,
            inLanguage: L.lang,
            image: [abs(shot(L, g.app.screenshot)), abs(L.ogImage)],
            author: { '@type': 'Organization', name: t.teamName, url: abs(L.base) },
            publisher: { '@type': 'Organization', name: S.BRAND, logo: { '@type': 'ImageObject', url: abs('assets/images/logo.webp') } },
            about: { '@type': 'MobileApplication', name: S.BRAND, operatingSystem: 'iOS', applicationCategory: 'BusinessApplication', installUrl: L.storeUrl }
        },
        {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: g.app.h2,
            inLanguage: L.lang,
            description: stripHtml(g.app.intro),
            tool: [{ '@type': 'HowToTool', name: t.howtoTool }],
            step: g.app.steps.map(([s, d], i) => ({ '@type': 'HowToStep', position: i + 1, name: s, text: stripHtml(d), url: `${url}#use-the-app` }))
        },
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            inLanguage: L.lang,
            mainEntity: g.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: stripHtml(f.a) } }))
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: t.home, item: abs(L.base) },
                { '@type': 'ListItem', position: 2, name: t.guides, item: abs(hub) },
                { '@type': 'ListItem', position: 3, name: g.navTitle, item: url }
            ]
        }
    ];

    return page({ L, title: g.title, description: g.description, path, schema, body, guides, alternates, ogType: 'article', lastmod });
}

function renderHub(L, guides, lastmod, alternates) {
    const t = L.t;
    const h = t.hub;
    const path = guideUrl(L);
    const body = `
<header class="g-hero">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="${L.base}">${t.home}</a> › <span aria-current="page">${t.guides}</span></nav>
    <span class="eyebrow">${h.eyebrow}</span>
    <h1>${h.h1}</h1>
    <p class="lede">${h.lede}</p>
  </div>
</header>
<section>
  <div class="wrap">
    <div class="guide-grid">
      ${guides.map((g) => `<a class="guide-card" href="${guideUrl(L, g.slug)}"><span class="tag">${esc(g.tag)}</span><h2 style="font-size:1.1rem;margin:0">${esc(g.h1)}</h2><p>${esc(g.cardText)}</p><span class="more">${t.readGuide}</span></a>`).join('\n')}
    </div>
  </div>
</section>
<section style="padding-top:0"><div class="wrap">${inlineCta(L, h.cta)}</div></section>`;
    const schema = [
        {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: h.name,
            url: abs(path),
            inLanguage: L.lang,
            dateModified: lastmod,
            hasPart: guides.map((g) => ({ '@type': 'Article', headline: g.h1, url: abs(guideUrl(L, g.slug)) }))
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: t.home, item: abs(L.base) },
                { '@type': 'ListItem', position: 2, name: t.guides, item: abs(path) }
            ]
        }
    ];
    return page({ L, title: h.title, description: h.description, path, schema, body, guides, alternates, lastmod });
}

module.exports = { render, renderHub };
