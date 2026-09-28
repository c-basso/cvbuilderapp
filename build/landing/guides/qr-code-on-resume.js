module.exports = {
    slug: 'qr-code-on-resume',
    keyword: 'QR code on resume',
    tag: 'Stand out',
    navTitle: 'QR code on resume',
    title: 'QR Code on Resume: How to Add Your LinkedIn or Portfolio',
    h1: 'How to Add a QR Code to Your Resume',
    description: 'Should you put a QR code on your resume? When it helps, what to link (LinkedIn, portfolio, GitHub), where to place it, and how to add a scannable QR code in minutes.',
    cardText: 'Link printed resumes to your LinkedIn or portfolio — and where to place the code.',
    lede: 'A QR code bridges a printed resume and your online presence. At a career fair or interview, one scan opens your LinkedIn or portfolio. Used right, it’s a small but memorable touch.',
    tldr: [
        'Best for printed resumes, career fairs, creative and tech roles.',
        'Link to one destination: LinkedIn, portfolio, GitHub or a video intro.',
        'Place it in the header or sidebar, about 2–2.5 cm (0.8–1 in) wide.',
        'Always include the clickable URL too — ATS can’t scan images.'
    ],
    sections: [
        {
            id: 'when',
            h2: 'When a QR code helps (and when it doesn’t)',
            html: `<p><b>Helps:</b> career fairs, in-person interviews, networking events, portfolios for design/marketing/engineering roles.</p><p><b>Doesn’t help:</b> online-only applications through ATS portals (the image is ignored), conservative industries where it may look gimmicky.</p>`
        },
        {
            id: 'what-to-link',
            h2: 'What to link to',
            html: `<ul><li>Your LinkedIn profile (update it first!)</li><li>An online portfolio or case studies</li><li>GitHub or a live project</li><li>A 60-second video introduction</li></ul><p>Test the link on your own phone before you print.</p>`
        },
        {
            id: 'placement',
            h2: 'Placement and size',
            html: `<ul><li>Header next to contact details, or top of a sidebar.</li><li>At least 2 cm / 0.8 in wide so it scans from a printed page.</li><li>Add a short label: “Scan for portfolio”.</li></ul>`
        }
    ],
    app: {
        h2: 'Add a QR code to your resume in CV Builder',
        intro: 'CV Builder has a Links & QR codes section — paste a URL and templates render a scannable code for you.',
        screenshot: 4,
        steps: [
            ['Open Links & QR codes', 'Add your LinkedIn, portfolio or GitHub URL.'],
            ['Choose a template', 'The QR code appears in the resume layout alongside your links.'],
            ['Preview PDF and test-scan', 'Scan it with another phone.'],
            ['Download PDF and print', 'Bring copies to your interview or career fair.']
        ]
    },
    faq: [
        { q: 'Is it OK to put a QR code on a resume?', a: 'Yes, especially on printed resumes for creative, tech or networking contexts. Always include the written URL as well.' },
        { q: 'How do I add a LinkedIn QR code to my resume?', a: 'In CV Builder, add your LinkedIn URL in the Links & QR codes section; templates render a scannable QR code automatically.' },
        { q: 'Where should a QR code go on a resume?', a: 'In the header near your contact details or at the top of a sidebar, at least 2 cm wide.' }
    ],
    related: ['cv-with-photo', 'resume-templates', 'how-to-make-a-resume-on-iphone']
};
