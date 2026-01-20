const path = require('path');
const {URL} = require('url');
const {execSync} = require('child_process');
const fs = require('fs');

const {INDEX_NOW_KEY, URLS, SITE_URL, INDEX_NOW_ENGINES} = require('./constants');

const indexNow = async (engine) => {
    console.log('🚀 Starting IndexNow submit...');

    const data = {
        host: new URL(SITE_URL).hostname,
        key: INDEX_NOW_KEY,
        urlList: URLS.map(({url}) => url)
    };

    console.log()
    console.log('🌐 Target search engine:', engine);
    console.log('📦 Payload:', JSON.stringify(data, null, 2));

    const command = `curl --header "Content-Type: application/json; charset=utf-8" \
  --request POST \
  --data '${JSON.stringify(data)}' \
  https://${engine}/indexnow`;

    console.log('💻 Executing command:\n', command);

    try {
        execSync(command, {stdio: 'inherit'});
        console.log('✅ IndexNow request finished (see curl output above).');
    } catch (error) {
        console.error('❌ IndexNow request failed.');
        console.error('Error message:', error.message);
        if (error.stdout) console.error('STDOUT:', error.stdout.toString());
        if (error.stderr) console.error('STDERR:', error.stderr.toString());
        process.exitCode = 1;
    }
    console.log()
    console.log('-'.repeat(30))
    console.log()
};

const initKeyFile = () => {
    fs.writeFileSync(path.resolve(__dirname, '..', `${INDEX_NOW_KEY}.txt`), INDEX_NOW_KEY);
    console.log(`✅ Successfully initialized key file`);
    console.log(`📁 Output saved to: ${path.resolve(__dirname, '..', `${INDEX_NOW_KEY}.txt`)}`);
    console.log()
}

(async () => {
    initKeyFile();

    for (const engine of INDEX_NOW_ENGINES) {
        await indexNow(engine);
    }
})()