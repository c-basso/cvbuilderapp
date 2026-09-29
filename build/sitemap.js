const fs = require('fs');
const path = require('path');

const { SITE_URL, URLS, DEFAULT_LANGUAGE } = require('./constants');

(function main() {
  const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');
  const robotsPath = path.join(__dirname, '..', 'robots.txt');

  const lines = [];
  lines.push('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>');
  lines.push('<urlset ');
  lines.push('  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"');
  lines.push('  xmlns:xhtml="http://www.w3.org/1999/xhtml">');
  lines.push('  ');
  const defaultUrl = URLS.find(({ code }) => code === DEFAULT_LANGUAGE)?.url ?? SITE_URL;
  for (const { url: loc } of URLS) {
    lines.push('  <url>');
    lines.push(`    <loc>${loc}</loc>`);
    for (const { hreflang, url } of URLS) {
      lines.push(`    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${url}" />`);
    }
    lines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultUrl}" />`);
    lines.push('    <priority>1.0</priority>');
    lines.push('  </url>');
    lines.push('');
  }
  const { LOCALES, hubAlternates, guideAlternates } = require('./landing/locales');
  const { guideUrl, abs } = require('./landing/layout');
  const today = new Date().toISOString().slice(0, 10);
  const pushUrl = (loc, priority, alts) => {
    lines.push('  <url>');
    lines.push(`    <loc>${loc}</loc>`);
    for (const a of alts) lines.push(`    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`);
    lines.push(`    <lastmod>${today}</lastmod>`);
    lines.push(`    <priority>${priority}</priority>`);
    lines.push('  </url>');
    lines.push('');
  };
  for (const L of LOCALES) {
    pushUrl(abs(guideUrl(L)), '0.8', hubAlternates());
    for (const g of L.guides) pushUrl(abs(guideUrl(L, g.slug)), '0.7', guideAlternates(L, g));
  }
  lines.push('</urlset>');

  fs.writeFileSync(sitemapPath, lines.join('\n') + '\n', 'utf8');
  console.log(`✅ Successfully built sitemap.xml`);
  console.log(`📁 Output saved to: ${sitemapPath}`);
  console.log()

  const robots = `
User-agent: *
Allow: /

Sitemap: ${SITE_URL}sitemap.xml 
  `;
  fs.writeFileSync(robotsPath, robots.trim() + '\n', 'utf8');
  console.log(`✅ Successfully built robots.txt`);
  console.log(`📁 Output saved to: ${robotsPath}`);
  console.log()

})();

