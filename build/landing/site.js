/**
 * Shared facts for the English landing page + guides.
 * Source of truth: app.md (App Store snapshot). Update here when the listing changes.
 */
const { SITE_URL, URLS } = require('../constants');

const STORE_URL = 'https://apps.apple.com/app/id1630645768';

module.exports = {
    SITE_URL,
    URLS,
    STORE_URL,
    APP_STORE_ID: '1630645768',
    BRAND: 'CV Builder',
    STORE_NAME: 'CV Maker - Job Resume Creator',
    STORE_SUBTITLE: 'Professional Templates & PDF',
    DEVELOPER: 'Vladimir Ivakhnenko',
    PUBLISHER: 'c-basso',
    RATING: 4.8,
    RATING_COUNT: 148,
    VERSION: '1.23.0',
    FILE_SIZE: '57.9 MB',
    MIN_IOS: 'iOS 18.6',
    CATEGORY: 'Business',
    SUPPORT_EMAIL: 'c-basso@ya.ru',
    PRIVACY_URL: '/privacy.html',
    TERMS_URL: '/terms.html',
    OG_IMAGE: 'site_preview.png',
    OG_IMAGE_W: 1200,
    OG_IMAGE_H: 630,
    SCREENSHOTS: [
        {
            n: 1,
            title: '100+ resume & CV templates',
            text: 'Browse professional designs for every industry and career level, then preview any template as a PDF before you commit.',
            alt: 'CV Builder resume maker app showing a gallery of professional CV templates with Preview PDF buttons on iPhone'
        },
        {
            n: 2,
            title: 'A finished CV, ready to send',
            text: 'Photo, contact details, links and a scannable QR code are laid out for you. Tap Download PDF and you are done.',
            alt: 'Finished curriculum vitae with photo, work experience, skills and LinkedIn QR code created in the CV Builder app'
        },
        {
            n: 3,
            title: 'Matching cover letters',
            text: 'Write a cover letter in the same app and export it as a PDF that matches your resume.',
            alt: 'Cover letter creator in the CV Builder app with Download PDF button on iPhone'
        },
        {
            n: 4,
            title: 'Every section you need',
            text: 'Skills, languages, certifications, references, links & QR codes, plus custom sections for anything else.',
            alt: 'Professional resume builder additional sections: skills, links and QR codes, languages, certifications, references, custom sections'
        },
        {
            n: 5,
            title: 'Guided, easy editor',
            text: 'Each section shows its completion percentage, and you can keep several resumes for different jobs.',
            alt: 'Easy resume editor menu with intro, summary, photo, contacts, education and work experience completion percentages'
        }
    ]
};
