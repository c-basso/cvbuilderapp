module.exports = {
    slug: 'cv-with-photo',
    keyword: 'CV with photo',
    tag: 'International',
    navTitle: 'CV with photo',
    title: 'CV with Photo: Should You Add One? (Country Guide + Tips)',
    h1: 'Should You Put a Photo on Your CV?',
    description: 'Should you put a photo on your CV? Country-by-country norms (US, UK, Germany, France, Spain, Asia), photo tips, and how to add one cleanly.',
    cardText: 'Country-by-country norms, photo tips, and how to add one cleanly.',
    lede: 'In some countries a CV without a photo looks incomplete; in others, a photo can get your application set aside. Here’s how to decide — and how to get it right if you include one.',
    tldr: [
        'US, Canada, UK, Ireland, Australia: usually no photo.',
        'Germany, Austria, Switzerland, France, Spain, Italy, much of Eastern Europe, Latin America, Middle East and Asia: photo common or expected.',
        'Use a recent, well-lit head-and-shoulders shot with a neutral background.',
        'Follow the job ad — it overrides general norms.'
    ],
    sections: [
        {
            id: 'by-country',
            h2: 'CV photo norms by region',
            html: `<table><thead><tr><th>Region</th><th>Photo?</th></tr></thead><tbody>
<tr><td>US, Canada</td><td>No — anti-discrimination practice</td></tr>
<tr><td>UK, Ireland, Australia, NZ</td><td>Generally no</td></tr>
<tr><td>Germany, Austria, Switzerland</td><td>Common, often expected</td></tr>
<tr><td>France, Spain, Italy, Portugal</td><td>Common</td></tr>
<tr><td>Eastern Europe, Türkiye</td><td>Common</td></tr>
<tr><td>Latin America</td><td>Common</td></tr>
<tr><td>Middle East, much of Asia</td><td>Common or expected</td></tr>
</tbody></table>
<p>Norms vary by company and industry — international firms often follow the US/UK approach.</p>`
        },
        {
            id: 'tips',
            h2: 'Photo tips',
            html: `<ul><li>Head and shoulders, looking at the camera, natural smile.</li><li>Plain light background; daylight from a window works well.</li><li>Dress as you would for the interview.</li><li>No selfies, filters, sunglasses or cropped group photos.</li><li>Portrait orientation, high resolution.</li></ul>`
        },
        {
            id: 'signature',
            h2: 'What about a signature?',
            html: `<p>A signature is traditional on CVs in some countries (for example, German Lebenslauf documents often end with place, date and signature) and on cover letters. It’s optional elsewhere.</p>`
        }
    ],
    app: {
        h2: 'Add a photo (and signature) in CV Builder',
        intro: 'CV Builder has a dedicated Photo section, and templates place it neatly in the header.',
        screenshot: 2,
        steps: [
            ['Open the Photo section', 'Pick a photo from your library or take one.'],
            ['Choose a template with a photo slot', 'Preview to check framing.'],
            ['Add your signature if needed', 'Useful for European CVs and cover letters.'],
            ['Keep a no-photo version', 'Duplicate your resume for US/UK applications.']
        ]
    },
    faq: [
        { q: 'Should I put a photo on my CV?', a: 'It depends on the country. Photos are common in much of Europe, Latin America, the Middle East and Asia, but usually left off in the US, Canada, UK, Ireland and Australia.' },
        { q: 'What kind of photo is best for a CV?', a: 'A recent, professional head-and-shoulders photo with a plain background and good lighting.' },
        { q: 'Can I add a photo to my resume on iPhone?', a: 'Yes. CV Builder has a Photo section and templates designed to display it.' }
    ],
    related: ['cv-maker-app', 'cv-vs-resume', 'qr-code-on-resume']
};
