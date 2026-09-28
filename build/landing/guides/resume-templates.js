module.exports = {
    slug: 'resume-templates',
    keyword: 'professional resume templates',
    tag: 'Templates',
    navTitle: 'Resume templates',
    title: 'Professional Resume Templates: How to Pick the Right One',
    h1: 'How to Choose a Professional Resume Template',
    description: 'How to choose a professional resume template by industry, experience level and how you apply — and preview 100+ resume and CV templates.',
    cardText: 'Match a template to your industry, seniority and how you’ll apply — in 3 decisions.',
    lede: 'The right template makes your experience easy to scan; the wrong one hides it. Make three decisions — industry, seniority and application method — and the choice becomes obvious.',
    tldr: [
        'Conservative industries → single column, restrained colour.',
        'Creative/tech → two columns and accent colour are fine.',
        'Applying through online portals → simpler layouts parse better.',
        'Always preview the template with your real content before exporting.'
    ],
    sections: [
        {
            id: 'by-industry',
            h2: 'Decision 1: Your industry',
            html: `<table><thead><tr><th>Industry</th><th>Template style</th></tr></thead><tbody>
<tr><td>Finance, law, government, healthcare</td><td>Classic, single column, black/navy</td></tr>
<tr><td>Tech, product, marketing</td><td>Modern, two columns, one accent colour</td></tr>
<tr><td>Design, media, creative</td><td>Bolder layout, photo optional, portfolio link/QR</td></tr>
<tr><td>Hospitality, retail, trades</td><td>Clean and simple, skills highlighted</td></tr>
</tbody></table>`
        },
        {
            id: 'by-level',
            h2: 'Decision 2: Your experience level',
            html: `<ul><li><b>Student / entry level:</b> templates with Education near the top and room for projects.</li><li><b>Mid-career:</b> experience-first, strong summary block.</li><li><b>Senior / executive:</b> generous white space, key achievements highlighted, two pages allowed.</li></ul>`
        },
        {
            id: 'by-method',
            h2: 'Decision 3: How you’ll apply',
            html: `<p>Uploading to big-company portals? Use a template with standard headings (“Experience”, “Education”, “Skills”) and real text rather than graphics. Emailing a hiring manager directly or handing it over in person? You have more freedom. More in <a href="/guides/ats-friendly-resume/">ATS-friendly resume</a>.</p>`
        },
        {
            id: 'avoid',
            h2: 'Template mistakes to avoid',
            html: `<ul><li>Skill “bars” or star ratings with no real meaning.</li><li>More than two fonts or three colours.</li><li>Tiny text to squeeze onto one page — cut content instead.</li><li>Choosing a template before writing content; content first, design second.</li></ul>`
        }
    ],
    app: {
        h2: 'Preview 100+ templates with your own content in CV Builder',
        intro: 'In CV Builder, templates are separate from your content — switch designs anytime without retyping.',
        screenshot: 1,
        steps: [
            ['Enter your content first', 'Complete the guided sections.'],
            ['Open the template gallery', 'Browse 100+ resume and CV templates.'],
            ['Tap Preview PDF', 'See exactly how your content looks in each design.'],
            ['Pick and export', 'Download PDF when it looks right.']
        ]
    },
    faq: [
        { q: 'What is the best resume template?', a: 'The one that suits your industry and makes your top achievements easy to find. Classic single-column for conservative fields; modern two-column for tech and creative roles.' },
        { q: 'How many resume templates does CV Builder have?', a: 'More than 100 professional resume and CV templates, from minimalist to classic corporate.' },
        { q: 'Can I change my template later?', a: 'Yes. Your content is stored separately, so you can switch templates and preview the result anytime.' }
    ],
    related: ['ats-friendly-resume', 'best-resume-builder-app-for-iphone', 'cv-maker-app']
};
