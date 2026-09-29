const path = require('path');

/** Load guide modules from `dir` in `order`, validating slugs and related links. */
module.exports = function load(dir, order) {
    const GUIDES = order.map((slug) => {
        const g = require(path.join(dir, slug));
        if (g.slug !== slug) throw new Error(`Guide slug mismatch: ${slug} vs ${g.slug}`);
        return g;
    });
    const BY_SLUG = Object.fromEntries(GUIDES.map((g) => [g.slug, g]));
    for (const g of GUIDES) {
        for (const r of g.related || []) {
            if (!BY_SLUG[r]) throw new Error(`Guide ${g.slug} links to unknown related guide ${r}`);
        }
    }
    return { GUIDES, BY_SLUG };
};
