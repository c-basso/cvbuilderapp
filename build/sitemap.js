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
  lines.push('  <url>');
  lines.push(`    <loc>${SITE_URL}</loc>`);
  for (const { code, hreflang, url } of URLS.filter(({code}) => code !== DEFAULT_LANGUAGE)) {
    lines.push(`    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${url}" />`);
  }
  lines.push('    <priority>1.0</priority>');
  lines.push('  </url>');
  lines.push('');
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

