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

module.exports = require('./load')(__dirname, ORDER);
