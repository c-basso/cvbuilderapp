module.exports = {
    slug: 'cv-vs-resume',
    keyword: 'CV vs resume',
    tag: 'Explainer',
    navTitle: 'CV vs resume',
    title: 'CV vs Resume: What’s the Difference and Which Do You Need?',
    h1: 'CV vs Resume: What’s the Difference?',
    description: 'CV vs resume explained: length, content, when to use each, and how the terms differ in the US, UK, Europe and elsewhere. Includes a quick comparison table.',
    cardText: 'Length, purpose and regional differences — plus which one your application needs.',
    lede: 'In the US and Canada a resume is a short job-application document and a CV is a long academic record. In the UK, Ireland, Europe and much of the world, “CV” simply means the job-application document. Here is how to know which to send.',
    tldr: [
        'Resume (US/Canada): 1–2 pages, tailored to each job.',
        'CV (US academic/medical): full career record, can run many pages.',
        'CV (UK, EU, most of the world): same as a US resume — 1–2 pages.',
        'Follow the wording in the job ad and the country you are applying in.'
    ],
    sections: [
        {
            id: 'table',
            h2: 'CV vs resume at a glance',
            html: `<table><thead><tr><th></th><th>Resume</th><th>CV (academic sense)</th></tr></thead><tbody>
<tr><td>Length</td><td>1–2 pages</td><td>2+ pages, no limit</td></tr>
<tr><td>Purpose</td><td>Win an interview for one job</td><td>Complete record of academic work</td></tr>
<tr><td>Tailored?</td><td>Yes, for every job</td><td>Rarely — it grows over time</td></tr>
<tr><td>Contents</td><td>Summary, experience, skills, education</td><td>+ publications, research, teaching, grants, conferences</td></tr>
<tr><td>Used for</td><td>Private-sector jobs</td><td>Academia, research, medicine, fellowships</td></tr>
</tbody></table>`
        },
        {
            id: 'by-country',
            h2: 'Which term is used where?',
            html: `<ul><li><b>US & Canada:</b> resume for jobs; CV for academia/medicine.</li><li><b>UK, Ireland, New Zealand:</b> CV for everything.</li><li><b>Australia, India, South Africa:</b> terms used interchangeably.</li><li><b>Continental Europe:</b> CV (often with a photo; Europass format is optional) — see <a href="/guides/cv-with-photo/">CV with photo</a>.</li></ul>`
        },
        {
            id: 'which',
            h2: 'Which one should you send?',
            html: `<p>Mirror the job ad. If it says “submit your CV” in the UK, send a 2-page job CV. If a US university asks for a CV, send the full academic version. When unsure, a tailored 1–2 page document is the safe choice.</p>`
        }
    ],
    app: {
        h2: 'Make either one in CV Builder',
        intro: 'The same app builds a concise resume or a longer CV — the sections simply expand.',
        screenshot: 4,
        steps: [
            ['Create a resume for each purpose', 'Keep a 1-page job resume and a longer CV side by side.'],
            ['Use Custom Sections for academic content', 'Publications, Research, Teaching or Conferences.'],
            ['Choose a matching template', 'Conservative designs work well for academic CVs.'],
            ['Export each as PDF', 'Name them clearly: Name-Resume.pdf and Name-CV.pdf.']
        ]
    },
    faq: [
        { q: 'Is a CV the same as a resume?', a: 'Outside North America, usually yes. In the US and Canada, a CV is a longer academic document, while a resume is a 1–2 page summary for job applications.' },
        { q: 'Is a CV longer than a resume?', a: 'In the academic sense, yes — a CV has no page limit. A UK/European job CV is typically 2 pages, similar to a resume.' },
        { q: 'Can one app create both a CV and a resume?', a: 'Yes. CV Builder lets you keep several documents and add custom sections, so you can maintain both.' }
    ],
    related: ['how-to-write-a-cv', 'cv-maker-app', 'resume-templates']
};
