/** Locales that get the new landing page + guides. Others still use build/template.html. */
const en = require('./i18n/en');
const ru = require('./i18n/ru');
const es = require('./i18n/es');
const fr = require('./i18n/fr');
const de = require('./i18n/de');
const it = require('./i18n/it');
const pt = require('./i18n/pt');
const jp = require('./i18n/jp');
const ko = require('./i18n/ko');
const nl = require('./i18n/nl');
en.guides = require('./guides').GUIDES;
ru.guides = require('./guides-ru').GUIDES;
es.guides = require('./guides-es').GUIDES;
fr.guides = require('./guides-fr').GUIDES;
de.guides = require('./guides-de').GUIDES;
it.guides = require('./guides-it').GUIDES;
pt.guides = require('./guides-pt').GUIDES;
jp.guides = require('./guides-jp').GUIDES;
ko.guides = require('./guides-ko').GUIDES;
nl.guides = require('./guides-nl').GUIDES;

const LOCALES = [en, ru, es, fr, de, it, pt, jp, ko, nl];
const byCode = Object.fromEntries(LOCALES.map((L) => [L.code, L]));

function lazyLayout() { return require('./layout'); }

/** hreflang alternates for the guides hub (all locales). */
function hubAlternates() {
    const { abs, guideUrl } = lazyLayout();
    return [
        ...LOCALES.map((L) => ({ hreflang: L.lang, href: abs(guideUrl(L)) })),
        { hreflang: 'x-default', href: abs(guideUrl(en)) }
    ];
}

/** hreflang alternates for a guide: every locale's guide that maps to the same EN slug (via `en` field). */
function guideAlternates(L, g) {
    const { abs, guideUrl } = lazyLayout();
    const enSlug = L.code === 'en' ? g.slug : g.en;
    if (!enSlug) return [];
    const alts = [];
    for (const X of LOCALES) {
        const match = X.code === 'en' ? X.guides.find((x) => x.slug === enSlug) : X.guides.find((x) => x.en === enSlug);
        if (match) alts.push({ hreflang: X.lang, href: abs(guideUrl(X, match.slug)) });
    }
    if (alts.length < 2) return [];
    alts.push({ hreflang: 'x-default', href: abs(guideUrl(en, enSlug)) });
    return alts;
}

module.exports = { LOCALES, byCode, hubAlternates, guideAlternates };
