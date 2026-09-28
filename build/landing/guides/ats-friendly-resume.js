module.exports = {
    slug: 'ats-friendly-resume',
    keyword: 'ATS friendly resume',
    tag: 'Job portals',
    navTitle: 'ATS-friendly resume',
    title: 'ATS-Friendly Resume: Format Rules & Checklist (2026)',
    h1: 'How to Make an ATS-Friendly Resume',
    description: 'How applicant tracking systems read resumes, formatting rules that keep yours parseable, how to use job-ad keywords, and a quick pre-submit checklist.',
    cardText: 'The format rules and keyword habits that keep your resume readable by job portals.',
    lede: 'Most large employers collect applications through an applicant tracking system (ATS). It extracts text from your resume into fields and lets recruiters search by keyword. Your job: make that extraction easy and include the words they search for.',
    tldr: [
        'Submit a text-based PDF (or .docx if requested) — never a scanned image.',
        'Use standard headings: Summary, Experience, Education, Skills.',
        'Mirror exact keywords from the job ad — job title, tools, certifications.',
        'Avoid putting key info only in headers, images, icons or text boxes.'
    ],
    sections: [
        {
            id: 'how-ats-works',
            h2: 'How an ATS reads your resume',
            html: `<p>The system converts your file to plain text, identifies sections by their headings, and stores job titles, dates, skills and education. Recruiters then filter or search (“Salesforce” AND “account manager”). If your text can’t be extracted — or uses unusual headings — you may not appear in those searches.</p>`
        },
        {
            id: 'format',
            h2: 'Formatting rules',
            html: `<ul><li>Standard fonts, real text (not text converted to outlines or images).</li><li>Conventional section names.</li><li>Dates in a consistent format, e.g. <i>06/2021 – 03/2024</i> or <i>Jun 2021 – Mar 2024</i>.</li><li>Simple bullet points; no tables for core content.</li><li>Contact info in the body, not only in a page header.</li><li>Simpler, cleaner templates are safest for large-company portals.</li></ul>`
        },
        {
            id: 'keywords',
            h2: 'Using keywords the right way',
            html: `<ol><li>Copy the job ad and highlight: job title, hard skills, tools, certifications.</li><li>Use the exact phrasing (“project management”, not only “managed projects”).</li><li>Include the target job title in your summary.</li><li>Place skills in both the Skills section and in experience bullets as proof.</li><li>Don’t keyword-stuff or hide white text — recruiters read the result.</li></ol>`
        },
        {
            id: 'checklist',
            h2: 'Pre-submit checklist',
            html: `<ul><li>☐ Can you select and copy the text in your PDF?</li><li>☐ Headings are standard.</li><li>☐ Job title from the ad appears at least once.</li><li>☐ Top 5 skills from the ad appear.</li><li>☐ File name: Firstname-Lastname-Resume.pdf.</li></ul>`
        }
    ],
    app: {
        h2: 'Build an ATS-friendly resume in CV Builder',
        intro: 'CV Builder exports text-based PDFs and uses conventional section names, which keeps your resume easy to parse.',
        screenshot: 4,
        steps: [
            ['Fill the standard sections', 'Summary, Work Experience, Education and Skills.'],
            ['Paste keywords into Skills and bullets', 'Use the exact phrasing from the job ad.'],
            ['Pick a clean, simple template', 'Single-column designs are the safest choice for portals.'],
            ['Download PDF and test it', 'Open the PDF and try selecting the text.']
        ],
        outro: 'Keep one resume per job type so the keywords always match — see <a href="/guides/tailor-resume-to-job-description/">tailoring your resume</a>.'
    },
    faq: [
        { q: 'What makes a resume ATS-friendly?', a: 'Selectable text, standard section headings, a simple layout, consistent dates, and keywords that match the job description.' },
        { q: 'Are PDF resumes ATS-friendly?', a: 'Text-based PDFs are read by most modern ATS. If the employer specifically asks for Word, send a .docx.' },
        { q: 'Do two-column resumes work with ATS?', a: 'Many modern systems handle them, but single-column layouts are the safest choice when applying through large-company portals.' }
    ],
    related: ['tailor-resume-to-job-description', 'resume-templates', 'save-resume-as-pdf-on-iphone']
};
