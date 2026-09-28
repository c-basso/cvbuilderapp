/**
 * Builds the English landing page (index.html) and keyword guides (guides/<slug>/index.html).
 * Localized homepages are still built by build.js from template.html + <lang>.json.
 *   node build/landing.js
 */
const fs = require('fs');
const path = require('path');
const S = require('./landing/site');
const { GUIDES } = require('./landing/guides');
const home = require('./landing/home');
const guide = require('./landing/guide');

const ROOT = path.join(__dirname, '..');
const LASTMOD = new Date().toISOString().slice(0, 10);

function write(rel, html) {
    const out = path.join(ROOT, rel);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html, 'utf8');
    console.log(`✅ ${rel}`);
}

function updateLlms() {
    const llmsPath = path.join(ROOT, 'llms.txt');
    if (!fs.existsSync(llmsPath)) return;
    const marker = '## Guides';
    let txt = fs.readFileSync(llmsPath, 'utf8');
    const i = txt.indexOf(marker);
    if (i !== -1) txt = txt.slice(0, i).trimEnd() + '\n';
    txt += `\n${marker}\n` + GUIDES.map((g) => `- [${g.h1}](${S.SITE_URL}guides/${g.slug}/): ${g.cardText}`).join('\n') + '\n';
    fs.writeFileSync(llmsPath, txt, 'utf8');
    console.log('✅ llms.txt (guides section)');
}

write('index.html', home.render(GUIDES, LASTMOD));
write('guides/index.html', guide.renderHub(GUIDES, LASTMOD));
for (const g of GUIDES) write(`guides/${g.slug}/index.html`, guide.render(g, GUIDES, LASTMOD));
updateLlms();
console.log(`\n📚 Built homepage + ${GUIDES.length} guides`);
