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

const stripHtml = (s = '') => String(s).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

const abs = (p = '') => S.SITE_URL + String(p).replace(/^\//, '');

const jsonLd = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;

const storeBadge = (label = 'Download CV Builder on the App Store', eager = false) =>
    `<a class="store-badge" href="${S.STORE_URL}" rel="nofollow noopener" data-cta aria-label="${esc(label)}"><img src="/download.svg" alt="Download on the App Store" width="168" height="56"${eager ? '' : ' loading="lazy"'}></a>`;

const shot = (n, size = '') => `/assets/appstore/screenshot-${n}${size}.webp`;

const stars = (r = S.RATING) => '★★★★★'.slice(0, Math.round(r));

function nav() {
    return `<a class="skip" href="#main">Skip to content</a>
<nav class="nav" aria-label="Main">
  <div class="wrap">
    <a class="brand" href="/"><img src="/assets/appstore/icon-192.webp" alt="" width="34" height="34">${S.BRAND}</a>
    <div class="nav-links">
      <a href="/#screenshots">Screenshots</a>
      <a href="/#how-it-works">How it works</a>
      <a href="/guides/">Guides</a>
      <a href="/#faq">FAQ</a>
    </div>
    <a class="btn btn-primary" href="${S.STORE_URL}" rel="nofollow noopener" data-cta>Get the app</a>
  </div>
</nav>`;
}

function footer(guides) {
    const langs = S.URLS.filter(u => u.code !== 'en')
        .map(u => `<li><a href="${u.url.replace(S.SITE_URL, '/')}" hreflang="${u.hreflang}" lang="${u.hreflang}">${u.hreflang}</a></li>`).join('');
    const half = Math.ceil(guides.length / 2);
    const g = (list) => list.map(x => `<li><a href="/guides/${x.slug}/">${esc(x.navTitle || x.h1)}</a></li>`).join('');
    return `<footer class="footer">
  <div class="wrap">
    <div class="footer-grid">
      <div>
        <a class="brand" href="/"><img src="/assets/appstore/icon-192.webp" alt="" width="34" height="34" loading="lazy">${S.BRAND}</a>
        <p>The resume builder and CV maker app for iPhone and iPad. 100+ templates, cover letters and one-tap PDF export. Listed on the App Store as “${esc(S.STORE_NAME)}”.</p>
        ${storeBadge()}
      </div>
      <div><h3>Guides</h3><ul>${g(guides.slice(0, half))}</ul></div>
      <div><h3>More guides</h3><ul>${g(guides.slice(half))}</ul></div>
      <div><h3>App</h3><ul>
        <li><a href="${S.STORE_URL}" rel="nofollow noopener">Download on the App Store</a></li>
        <li><a href="/#faq">FAQ</a></li>
        <li><a href="/guides/">All guides</a></li>
        <li><a href="mailto:${S.SUPPORT_EMAIL}">Support</a></li>
        <li><a href="${S.PRIVACY_URL}" rel="nofollow">Privacy Policy</a></li>
        <li><a href="${S.TERMS_URL}" rel="nofollow">Terms of Use</a></li>
      </ul>
      <h3 style="margin-top:22px">Languages</h3><ul class="lang-list">${langs}</ul></div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} ${S.PUBLISHER}. ${S.BRAND} — resume builder &amp; CV maker for iPhone and iPad.</span>
      <span>App Store is a service mark of Apple Inc.</span>
    </div>
  </div>
</footer>
<a class="sticky-cta" href="${S.STORE_URL}" rel="nofollow noopener" data-cta aria-label="Download CV Builder on the App Store">
  <img src="/assets/appstore/icon-192.webp" alt="" width="42" height="42" loading="lazy">
  <span><b>${S.BRAND}</b><small>${S.RATING}★ · Free on the App Store</small></span>
  <span class="btn btn-primary">Get</span>
</a>`;
}

const SCRIPT = `<script>
(function(){var s=document.querySelector('.sticky-cta');if(!s)return;var h=document.querySelector('.hero,.g-hero');
function u(){var y=window.scrollY||0,lim=h?h.offsetHeight:500;var f=document.querySelector('.footer');var fv=f&&f.getBoundingClientRect().top<window.innerHeight;s.classList.toggle('show',y>lim&&!fv)}
window.addEventListener('scroll',u,{passive:true});u();
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('[data-cta]');if(a&&window.ym){try{ym(103204686,'reachGoal','app_store_click',{place:a.className,page:location.pathname})}catch(_){}}});})();
</script>`;

const METRIKA = `<script>(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");ym(103204686,"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true});</script><noscript><div><img src="https://mc.yandex.ru/watch/103204686" style="position:absolute;left:-9999px" alt=""></div></noscript>`;

/**
 * @param {object} o
 * @param {string} o.title
 * @param {string} o.description
 * @param {string} o.path  e.g. "/" or "/guides/x/"
 * @param {object[]} o.schema  JSON-LD objects
 * @param {string} o.body
 * @param {object[]} o.guides
 * @param {boolean} [o.hreflang]  emit language alternates (homepage only)
 * @param {string} [o.ogType]
 * @param {string} [o.preload]  image to preload (LCP)
 * @param {string} [o.lastmod]
 */
function page(o) {
    const url = abs(o.path);
    const img = abs(S.OG_IMAGE);
    const alternates = o.hreflang
        ? S.URLS.map(u => `<link rel="alternate" hreflang="${u.hreflang}" href="${u.url}">`).join('\n') +
          `\n<link rel="alternate" hreflang="x-default" href="${S.SITE_URL}">`
        : '';
    return `<!DOCTYPE html>
<html lang="en">
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
<meta property="og:locale" content="en_US">
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
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&display=swap">
${o.preload ? `<link rel="preload" as="image" href="${o.preload}" fetchpriority="high">` : ''}
${(o.schema || []).map(jsonLd).join('\n')}
<style>${CSS}</style>
${METRIKA}
</head>
<body>
${nav()}
<main id="main">
${o.body}
</main>
${footer(o.guides)}
${SCRIPT}
</body>
</html>
`;
}

module.exports = { page, esc, stripHtml, abs, storeBadge, shot, stars, jsonLd };
