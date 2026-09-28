/** Order = priority (quick wins first). Add a guide: create <slug>.js and list it here. */
const ORDER = [
    'how-to-make-a-resume-on-iphone',
    'save-resume-as-pdf-on-iphone',
    'cv-maker-app',
    'cover-letter-app',
    'qr-code-on-resume',
    'tailor-resume-to-job-description',
    'best-resume-builder-app-for-iphone',
    'how-to-write-a-cv',
    'resume-with-no-experience',
    'resume-templates',
    'resume-summary-examples',
    'ats-friendly-resume',
    'cv-vs-resume',
    'cv-with-photo'
];

const GUIDES = ORDER.map((slug) => {
    const g = require(`./${slug}`);
    if (g.slug !== slug) throw new Error(`Guide slug mismatch: ${slug} vs ${g.slug}`);
    return g;
});

const BY_SLUG = Object.fromEntries(GUIDES.map((g) => [g.slug, g]));

for (const g of GUIDES) {
    for (const r of g.related || []) {
        if (!BY_SLUG[r]) throw new Error(`Guide ${g.slug} links to unknown related guide ${r}`);
    }
}

module.exports = { GUIDES, BY_SLUG };
