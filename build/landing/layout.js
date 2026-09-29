const fs = require('fs');
const path = require('path');
const S = require('./site');

const CSS = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s*\n\s*/g, '')
    .trim();

const esc = (s = '') => String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const stripHtml = (s = '') => String(s).replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();

const abs = (p = '') => S.SITE_URL + String(p).replace(/^\//, '');

const jsonLd = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;

const guideUrl = (L, slug) => `${L.base}${L.guidesDir}/${slug ? slug + '/' : ''}`;

const storeBadge = (L, eager = false) =>
    `<a class="store-badge" href="${L.storeUrl}" rel="nofollow noopener" data-cta aria-label="${esc(L.t.badgeLabel)}"><img src="${L.badge}" alt="${esc(L.t.badgeAlt)}" width="168" height="56"${eager ? '' : ' loading="lazy"'}></a>`;

const shot = (L, n, size = '') => `${L.shotDir}screenshot-${n}${size}.webp`;

const ICON = '/assets/appstore/icon-192.webp';

function nav(L) {
    const t = L.t;
    return `<a class="skip" href="#main">${t.skip}</a>
<nav class="nav" aria-label="${t.navMain}">
  <div class="wrap">
    <a class="brand" href="${L.base}"><img src="${ICON}" alt="" width="34" height="34">${S.BRAND}</a>
    <div class="nav-links">
      <a href="${L.base}#screenshots">${t.nav.screenshots}</a>
      <a href="${L.base}#how-it-works">${t.nav.how}</a>
      <a href="${guideUrl(L)}">${t.nav.guides}</a>
      <a href="${L.base}#faq">${t.nav.faq}</a>
    </div>
    <a class="btn btn-primary" href="${L.storeUrl}" rel="nofollow noopener" data-cta>${t.getApp}</a>
  </div>
</nav>`;
}

function footer(L, guides) {
    const t = L.t;
    const langs = S.URLS.filter(u => u.url !== S.SITE_URL + L.base.replace(/^\//, ''))
        .map(u => `<li><a href="${u.url.replace(S.SITE_URL, '/')}" hreflang="${u.hreflang}" lang="${u.hreflang}">${u.hreflang}</a></li>`).join('');
    const half = Math.ceil(guides.length / 2);
    const g = (list) => list.map(x => `<li><a href="${guideUrl(L, x.slug)}">${esc(x.navTitle)}</a></li>`).join('');
    return `<footer class="footer">
  <div class="wrap">
    <div class="footer-grid">
      <div>
        <a class="brand" href="${L.base}"><img src="${ICON}" alt="" width="34" height="34" loading="lazy">${S.BRAND}</a>
        <p>${esc(t.footerAbout(L))}</p>
        ${storeBadge(L)}
      </div>
      <div><h3>${t.footerGuides}</h3><ul>${g(guides.slice(0, half))}</ul></div>
      <div><h3>${t.footerMoreGuides}</h3><ul>${g(guides.slice(half))}</ul></div>
      <div><h3>${t.footerApp}</h3><ul>
        <li><a href="${L.storeUrl}" rel="nofollow noopener">${t.footerDownload}</a></li>
        <li><a href="${L.base}#faq">FAQ</a></li>
        <li><a href="${guideUrl(L)}">${t.footerAllGuides}</a></li>
        <li><a href="mailto:${S.SUPPORT_EMAIL}">${t.footerSupport}</a></li>
        <li><a href="${S.PRIVACY_URL}" rel="nofollow">${t.footerPrivacy}</a></li>
        <li><a href="${S.TERMS_URL}" rel="nofollow">${t.footerTerms}</a></li>
      </ul>
      <h3 style="margin-top:22px">${t.footerLanguages}</h3><ul class="lang-list">${langs}</ul></div>
    </div>
    <div class="footer-bottom">
      <span>${t.footerCopy(new Date().getFullYear())}</span>
      <span>${t.appleMark}</span>
    </div>
  </div>
</footer>
<a class="sticky-cta" href="${L.storeUrl}" rel="nofollow noopener" data-cta aria-label="${esc(t.badgeLabel)}">
  <img src="${ICON}" alt="" width="42" height="42" loading="lazy">
  <span><b>${S.BRAND}</b><small>${t.stickySub(L)}</small></span>
  <span class="btn btn-primary">${t.stickyBtn}</span>
</a>`;
}

const SCRIPT = `<script>
(function(){var s=document.querySelector('.sticky-cta');if(!s)return;var h=document.querySelector('.hero,.g-hero');
function u(){var y=window.scrollY||0,lim=h?h.offsetHeight:500;var f=document.querySelector('.footer');var fv=f&&f.getBoundingClientRect().top<window.innerHeight;s.classList.toggle('show',y>lim&&!fv)}
window.addEventListener('scroll',u,{passive:true});u();
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('[data-cta]');if(a&&window.ym){try{ym(${S.METRIKA_ID},'reachGoal','app_store_click',{place:a.className,page:location.pathname})}catch(_){}}});})();
</script>`;

const METRIKA = `<script>(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");ym(${S.METRIKA_ID},"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true});</script><noscript><div><img src="https://mc.yandex.ru/watch/${S.METRIKA_ID}" style="position:absolute;left:-9999px" alt=""></div></noscript>`;

/**
 * o: { L, title, description, path, schema[], body, guides, alternates?: [{hreflang,href}], ogType?, ogTitle?, preload?, lastmod? }
 */
function page(o) {
    const L = o.L;
    const url = abs(o.path);
    const img = abs(L.ogImage);
    const alternates = (o.alternates || []).map(a => `<link rel="alternate" hreflang="${a.hreflang}" href="${a.href}">`).join('\n');
    return `<!DOCTYPE html>
<html lang="${L.lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(o.title)}</title>
<meta name="description" content="${esc(o.description)}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
<meta name="author" content="${S.DEVELOPER}">
<link rel="canonical" href="${url}">
${alternates}
<meta name="apple-itunes-app" content="app-id=${S.APP_STORE_ID}">
<meta name="theme-color" content="#071a4a">
<meta name="color-scheme" content="light dark">
${o.lastmod ? `<meta name="last-modified" content="${o.lastmod}">` : ''}
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta property="og:type" content="${o.ogType || 'website'}">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(o.ogTitle || o.title)}">
<meta property="og:description" content="${esc(o.description)}">
<meta property="og:image" content="${img}">
<meta property="og:image:width" content="${S.OG_IMAGE_W}">
<meta property="og:image:height" content="${S.OG_IMAGE_H}">
<meta property="og:site_name" content="${S.BRAND}">
<meta property="og:locale" content="${L.ogLocale}">
<meta property="og:logo" content="${abs('logo.webp')}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="${url}">
<meta name="twitter:title" content="${esc(o.ogTitle || o.title)}">
<meta name="twitter:description" content="${esc(o.description)}">
<meta name="twitter:image" content="${img}">
<meta name="twitter:image:width" content="${S.OG_IMAGE_W}">
<meta name="twitter:image:height" content="${S.OG_IMAGE_H}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
${L.font && !L.font.href ? '' : `<link rel="stylesheet" href="${L.font ? L.font.href : 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&display=swap'}">`}
${o.preload ? `<link rel="preload" as="image" href="${o.preload}" fetchpriority="high">` : ''}
${(o.schema || []).map(jsonLd).join('\n')}
<style>${CSS}${L.font ? `:root{--font-display:${L.font.family}}` : ''}${L.css || ''}</style>
${METRIKA}
</head>
<body>
${nav(L)}
<main id="main">
${o.body}
</main>
${footer(L, o.guides)}
${SCRIPT}
</body>
</html>
`;
}

module.exports = { page, esc, stripHtml, abs, storeBadge, shot, jsonLd, guideUrl, ICON };
