/** Simplified Chinese guides. Order = priority. `en` links the English equivalent (hreflang). */
const ORDER = [
    'yingwen-jianli',
    'shouji-zuo-jianli',
    'jianli-zhizuo-app',
    'jianli-zenme-xie',
    'jianli-moban',
    'waiqi-jianli',
    'jianli-pdf',
    'qiuzhixin',
    'geren-jianjie',
    'yingjiesheng-jianli',
    'cv-resume-qubie',
    'ats-jianli',
    'jianli-zhaopian',
    'jianli-gangwei'
];
module.exports = require('../guides/load')(__dirname, ORDER);
