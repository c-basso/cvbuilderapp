const puppeteer = require('puppeteer');

const wait = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

const takeHtmlPageScreenshot = async (options) => {
    const {htmlPath, url, screenshotPath, width, height} = options;

    const browser = await puppeteer.launch();

    try {
        const page = await browser.newPage();
        await page.setViewport({width, height});
        await page.goto(url ? url : 'file://' + htmlPath, { waitUntil: 'networkidle0' });
        await wait(100);
        await page.screenshot({path: screenshotPath});
    } catch (e) {
        console.log(e);
    }

    await browser.close();
};

module.exports = {
    takeHtmlPageScreenshot
};