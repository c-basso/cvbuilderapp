/** Vietnamese guides. Order = priority. `en` links the English equivalent (hreflang). */
const ORDER = [
    'cach-viet-cv',
    'tao-cv-tren-dien-thoai',
    'app-tao-cv',
    'cv-tieng-anh',
    'mau-cv',
    'thu-xin-viec',
    'cv-pdf-iphone',
    'muc-tieu-nghe-nghiep',
    'cv-sinh-vien',
    'cv-cong-ty-nuoc-ngoai',
    'cv-va-resume',
    'cv-ats',
    'cv-co-anh',
    'cv-theo-vi-tri'
];
module.exports = require('../guides/load')(__dirname, ORDER);
