/**
 * Builds the landing page + keyword guides for each locale in build/landing/locales.js
 * (en → /, /guides/…; ru → /ru/, /ru/guides/…; es → /es/, /es/guias/…).
 * Other locales are still built by build.js from template.html + <lang>.json.
 *   node build/landing.js
 */
const fs = require('fs');
const path = require('path');
const S = require('./landing/site');
const { LOCALES, hubAlternates, guideAlternates } = require('./landing/locales');
const home = require('./landing/home');
const guide = require('./landing/guide');
const { abs, guideUrl } = require('./landing/layout');

const ROOT = path.join(__dirname, '..');
const LASTMOD = new Date().toISOString().slice(0, 10);

function write(rel, html) {
    const out = path.join(ROOT, rel);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html, 'utf8');
    console.log(`✅ ${rel}`);
}

const rel = (urlPath) => urlPath.replace(/^\//, '') + 'index.html';

/** All homepages (incl. template-built locales) are alternates of each other. */
const homeAlternates = [
    ...S.URLS.map((u) => ({ hreflang: u.hreflang, href: u.url })),
    { hreflang: 'x-default', href: S.SITE_URL }
];

function updateLlms() {
    const llmsPath = path.join(ROOT, 'llms.txt');
    if (!fs.existsSync(llmsPath)) return;
    const marker = '## Guides';
    let txt = fs.readFileSync(llmsPath, 'utf8');
    const i = txt.indexOf(marker);
    if (i !== -1) txt = txt.slice(0, i).trimEnd() + '\n';
    for (const L of LOCALES) {
        txt += `\n${marker} (${L.lang})\n` + L.guides.map((g) => `- [${g.h1}](${abs(guideUrl(L, g.slug))}): ${g.cardText}`).join('\n') + '\n';
    }
    fs.writeFileSync(llmsPath, txt, 'utf8');
    console.log('✅ llms.txt (guides sections)');
}

for (const L of LOCALES) {
    write(rel(L.base), home.render(L, L.guides, LASTMOD, homeAlternates));
    write(rel(guideUrl(L)), guide.renderHub(L, L.guides, LASTMOD, hubAlternates()));
    for (const g of L.guides) write(rel(guideUrl(L, g.slug)), guide.render(L, g, L.guides, LASTMOD, guideAlternates(L, g)));
}
updateLlms();
console.log(`\n📚 Built ${LOCALES.map((L) => `${L.code}: home + ${L.guides.length} guides`).join(', ')}`);
