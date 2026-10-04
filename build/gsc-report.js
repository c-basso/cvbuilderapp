/**
 * Google Search Console export → gsc/ (git-ignored).
 *
 * Usage: node build/gsc-report.js [days=90]
 * Auth: service_account.json (the service account must be a user of the Search Console property,
 *       and the Search Console API must be enabled in its GCP project).
 * Output (CSV + JSON, overwritten on each run):
 *   gsc/queries.csv         query, clicks, impressions, ctr, position
 *   gsc/pages.csv           page, clicks, impressions, ctr, position
 *   gsc/query-page.csv      query, page, … (which page ranks for which query)
 *   gsc/countries.csv       country, …
 *   gsc/meta.json           property, date range, row counts
 */
const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'gsc');
const KEY_PATH = path.join(ROOT, 'service_account.json');
const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly';
const PROPERTY_CANDIDATES = ['sc-domain:cvbuilderapp.com', 'https://cvbuilderapp.com/'];
const ROW_LIMIT = 25000;

function isoDate(d) {
    return d.toISOString().slice(0, 10);
}

function toCsv(header, rows) {
    const esc = (v) => {
        const s = v == null ? '' : String(v);
        return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
    };
    return [header.join(','), ...rows.map((r) => r.map(esc).join(','))].join('\n') + '\n';
}

async function pickProperty(sc) {
    const { data } = await sc.sites.list();
    const available = (data.siteEntry || []).map((s) => s.siteUrl);
    const found = PROPERTY_CANDIDATES.find((p) => available.includes(p));
    if (!found) {
        throw new Error(
            `Service account has no access to ${PROPERTY_CANDIDATES.join(' / ')}. Visible properties: ${available.join(', ') || 'none'}`
        );
    }
    return found;
}

async function query(sc, siteUrl, startDate, endDate, dimensions) {
    const rows = [];
    for (let startRow = 0; ; startRow += ROW_LIMIT) {
        const { data } = await sc.searchanalytics.query({
            siteUrl,
            requestBody: { startDate, endDate, dimensions, rowLimit: ROW_LIMIT, startRow, dataState: 'all' },
        });
        const batch = data.rows || [];
        rows.push(...batch);
        if (batch.length < ROW_LIMIT) break;
    }
    return rows.map((r) => [
        ...r.keys,
        r.clicks,
        r.impressions,
        Math.round(r.ctr * 10000) / 100,
        Math.round(r.position * 10) / 10,
    ]);
}

async function main() {
    const days = Number(process.argv[2]) || 90;
    if (!fs.existsSync(KEY_PATH)) throw new Error(`Missing ${KEY_PATH}`);
    const key = require(KEY_PATH);
    const auth = new google.auth.JWT({ email: key.client_email, key: key.private_key, scopes: [SCOPE] });
    await auth.authorize();
    const sc = google.searchconsole({ version: 'v1', auth });

    const siteUrl = await pickProperty(sc);
    const end = new Date();
    end.setDate(end.getDate() - 2); // GSC data lags ~2 days
    const start = new Date(end);
    start.setDate(start.getDate() - days + 1);
    const [startDate, endDate] = [isoDate(start), isoDate(end)];
    console.log(`📊 ${siteUrl}  ${startDate} → ${endDate}`);

    fs.mkdirSync(OUT_DIR, { recursive: true });
    const metrics = ['clicks', 'impressions', 'ctr_%', 'position'];
    const reports = {
        queries: ['query'],
        pages: ['page'],
        'query-page': ['query', 'page'],
        countries: ['country'],
    };
    const counts = {};
    for (const [name, dims] of Object.entries(reports)) {
        const rows = await query(sc, siteUrl, startDate, endDate, dims);
        rows.sort((a, b) => b[dims.length + 1] - a[dims.length + 1]); // by impressions
        fs.writeFileSync(path.join(OUT_DIR, `${name}.csv`), toCsv([...dims, ...metrics], rows));
        counts[name] = rows.length;
        console.log(`  ✅ gsc/${name}.csv  ${rows.length} rows`);
    }
    fs.writeFileSync(
        path.join(OUT_DIR, 'meta.json'),
        JSON.stringify({ siteUrl, startDate, endDate, generatedAt: new Date().toISOString(), counts }, null, 2) + '\n'
    );
}

main().catch((err) => {
    console.error('❌', err.message || err);
    process.exit(1);
});
