const S = require('./site');
const { page, esc, stripHtml, abs, storeBadge, shot } = require('./layout');

function appBlock(g) {
    const a = g.app;
    return `<section class="app-block" id="use-the-app" aria-labelledby="use-the-app-h">
  <div>
    <h2 id="use-the-app-h">${esc(a.h2)}</h2>
    <p>${a.intro}</p>
    <ol>${a.steps.map(([t, d]) => `<li><b>${esc(t)}.</b> ${d}</li>`).join('')}</ol>
    ${a.outro ? `<p>${a.outro}</p>` : ''}
    ${storeBadge(`Download ${S.BRAND} on the App Store`)}
  </div>
  <img src="${shot(a.screenshot)}" alt="${esc(S.SCREENSHOTS[a.screenshot - 1].alt)}" width="640" height="1385" loading="lazy">
</section>`;
}

function inlineCta(text) {
    return `<div class="inline-cta">
  <img class="ic" src="/assets/appstore/icon-192.webp" alt="" width="52" height="52" loading="lazy">
  <p><b>${text}</b>${S.RATING}★ from ${S.RATING_COUNT} ratings · iPhone &amp; iPad · Free to download</p>
  ${storeBadge()}
</div>`;
}

function render(g, guides, lastmod) {
    const path = `/guides/${g.slug}/`;
    const url = abs(path);
    const appAfter = typeof g.appAfter === 'number' ? g.appAfter : g.sections.length - 1;
    const tocItems = [...g.sections.map((s) => ({ id: s.id, t: s.h2 }))];
    tocItems.splice(appAfter + 1, 0, { id: 'use-the-app', t: g.app.h2 });
    tocItems.push({ id: 'faq', t: 'FAQ' });

    const bodySections = [];
    g.sections.forEach((s, i) => {
        bodySections.push(`<h2 id="${s.id}">${esc(s.h2)}</h2>\n${s.html}`);
        if (i === 0 && appAfter !== 0) bodySections.push(inlineCta('Skip the formatting — build it in CV Builder.'));
        if (i === appAfter) bodySections.push(appBlock(g));
    });

    const related = g.related.map((slug) => guides.find((x) => x.slug === slug));
    const words = stripHtml(g.lede + g.tldr.join(' ') + g.sections.map((s) => s.html).join(' ')).split(' ').length;
    const minutes = Math.max(3, Math.round(words / 220));

    const body = `
<header class="g-hero">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> › <a href="/guides/">Guides</a> › <span aria-current="page">${esc(g.navTitle)}</span></nav>
    <span class="eyebrow">${esc(g.tag)}</span>
    <h1>${esc(g.h1)}</h1>
    <p class="lede">${g.lede}</p>
    <div class="g-meta"><span>Updated <time datetime="${lastmod}">${new Date(lastmod).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time></span><span>${minutes} min read</span><span>By the ${S.BRAND} team</span></div>
  </div>
</header>
<div class="wrap g-layout">
  <article class="g-body">
    <div class="tldr"><strong>Quick answer</strong><ul>${g.tldr.map((t) => `<li>${t}</li>`).join('')}</ul></div>
    ${bodySections.join('\n')}
    <h2 id="faq">Frequently asked questions</h2>
    <div class="faq" style="margin:0">
      ${g.faq.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer"><p>${f.a}</p></div></details>`).join('\n')}
    </div>
    ${inlineCta('Ready? Make yours on your iPhone now.')}
    <section class="related" aria-labelledby="related-h">
      <h2 id="related-h">Related guides</h2>
      <div class="guide-grid">
        ${related.map((r) => `<a class="guide-card" href="/guides/${r.slug}/"><span class="tag">${esc(r.tag)}</span><h3>${esc(r.h1)}</h3><p>${esc(r.cardText)}</p><span class="more">Read guide</span></a>`).join('')}
      </div>
    </section>
  </article>
  <aside class="g-aside">
    <nav class="toc" aria-label="On this page"><h2>On this page</h2><ol>${tocItems.map((t) => `<li><a href="#${t.id}">${esc(t.t)}</a></li>`).join('')}</ol></nav>
    <div class="aside-cta">
      <img class="ic" src="/assets/appstore/icon-192.webp" alt="" width="72" height="72" loading="lazy">
      <b>${S.BRAND}</b>
      <p>100+ templates · Cover letters · PDF export · ${S.RATING}★</p>
      ${storeBadge()}
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
            inLanguage: 'en',
            image: [abs(shot(g.app.screenshot)), abs(S.OG_IMAGE)],
            author: { '@type': 'Organization', name: `${S.BRAND} team`, url: S.SITE_URL },
            publisher: { '@type': 'Organization', name: S.BRAND, logo: { '@type': 'ImageObject', url: abs('logo.webp') } },
            about: { '@type': 'MobileApplication', name: S.BRAND, operatingSystem: 'iOS', applicationCategory: 'BusinessApplication', installUrl: S.STORE_URL }
        },
        {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: g.app.h2,
            description: stripHtml(g.app.intro),
            tool: [{ '@type': 'HowToTool', name: `${S.BRAND} app for iPhone or iPad` }],
            step: g.app.steps.map(([t, d], i) => ({ '@type': 'HowToStep', position: i + 1, name: t, text: stripHtml(d), url: `${url}#use-the-app` }))
        },
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: g.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: stripHtml(f.a) } }))
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: S.SITE_URL },
                { '@type': 'ListItem', position: 2, name: 'Guides', item: abs('/guides/') },
                { '@type': 'ListItem', position: 3, name: g.navTitle, item: url }
            ]
        }
    ];

    return page({ title: g.title, description: g.description, path, schema, body, guides, ogType: 'article', lastmod });
}

function renderHub(guides, lastmod) {
    const path = '/guides/';
    const body = `
<header class="g-hero">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> › <span aria-current="page">Guides</span></nav>
    <span class="eyebrow">Resume &amp; CV guides</span>
    <h1>Resume and CV Guides</h1>
    <p class="lede">Practical, step-by-step answers to the questions job seekers actually search — from making a resume on your iPhone to beating applicant tracking systems. Each guide ends with how to do it in ${S.BRAND}.</p>
  </div>
</header>
<section>
  <div class="wrap">
    <div class="guide-grid">
      ${guides.map((g) => `<a class="guide-card" href="/guides/${g.slug}/"><span class="tag">${esc(g.tag)}</span><h2 style="font-size:1.1rem;margin:0">${esc(g.h1)}</h2><p>${esc(g.cardText)}</p><span class="more">Read guide</span></a>`).join('\n')}
    </div>
  </div>
</section>
<section style="padding-top:0"><div class="wrap">${inlineCta('Build your resume while you read.')}</div></section>`;
    const schema = [
        {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Resume and CV Guides',
            url: abs(path),
            dateModified: lastmod,
            hasPart: guides.map((g) => ({ '@type': 'Article', headline: g.h1, url: abs(`/guides/${g.slug}/`) }))
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: S.SITE_URL },
                { '@type': 'ListItem', position: 2, name: 'Guides', item: abs(path) }
            ]
        }
    ];
    return page({
        title: 'Resume & CV Guides: Step-by-Step Help for Job Seekers | CV Builder',
        description: 'Free step-by-step resume and CV guides: make a resume on iPhone, save as PDF, write a CV, cover letters, ATS tips, summaries, templates and more.',
        path, schema, body, guides, lastmod
    });
}

module.exports = { render, renderHub };
