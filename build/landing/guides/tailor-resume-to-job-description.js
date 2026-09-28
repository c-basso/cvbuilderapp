module.exports = {
    slug: 'tailor-resume-to-job-description',
    keyword: 'how to tailor your resume to a job description',
    tag: 'Strategy',
    navTitle: 'Tailor your resume',
    title: 'How to Tailor Your Resume to a Job Description (in 10 Minutes)',
    h1: 'How to Tailor Your Resume to Each Job',
    description: 'A 10-minute, 5-step method to tailor your resume to a job description: match keywords, reorder bullets, rewrite your summary, keep versions.',
    cardText: 'A repeatable 10-minute routine to match every application to the job ad.',
    lede: 'Sending the same resume everywhere is the most common reason for silence. Tailoring doesn’t mean rewriting from scratch — it’s a 10-minute routine once you have a solid base resume.',
    tldr: [
        'Keep a master resume plus one version per job type.',
        'Match the job title, top skills and tools from the ad.',
        'Reorder bullets so the most relevant proof comes first.',
        'Rewrite the summary for the specific role.'
    ],
    sections: [
        {
            id: 'method',
            h2: 'The 5-step tailoring routine',
            html: `<ol><li><b>Scan the ad</b> and list the job title, the top 5 requirements and any tools/certifications.</li><li><b>Update the headline and summary</b> to use that job title and your most relevant result.</li><li><b>Reorder bullets</b> under each role — most relevant first; cut ones that don’t matter for this job.</li><li><b>Adjust Skills</b> to mirror the ad’s exact wording.</li><li><b>Check length</b> and export a fresh PDF with a clear file name.</li></ol>`
        },
        {
            id: 'example',
            h2: 'Before and after',
            html: `<div class="example"><b>Job ad asks for:</b> “stakeholder management, Jira, agile delivery”.<br><b>Before:</b> Worked with different teams on projects.<br><b>After:</b> Managed agile delivery for 3 cross-functional squads in Jira, aligning 12 stakeholders across product and sales.</div>`
        },
        {
            id: 'versions',
            h2: 'How many versions should you keep?',
            html: `<p>One per <em>job type</em>, not per application. For example: “Project Manager – Tech”, “Project Manager – Construction”, “Operations”. Then make small edits for each application.</p>`
        }
    ],
    app: {
        h2: 'Keep multiple tailored resumes in CV Builder',
        intro: 'CV Builder stores multiple resumes, so you can keep a version for every job type on your phone.',
        screenshot: 5,
        steps: [
            ['Build your master resume', 'Complete every section once.'],
            ['Create a version per job type', 'Keep several resumes side by side in the app.'],
            ['Edit Summary, Skills and bullet order', 'Use the job ad’s wording.'],
            ['Export a fresh PDF', 'Apply within minutes — even from your phone.']
        ],
        outro: 'Pair each version with a tailored <a href="/guides/cover-letter-app/">cover letter</a>.'
    },
    faq: [
        { q: 'Should I tailor my resume for every job?', a: 'Yes, at least lightly. Matching the job title, key skills and summary to the ad improves both ATS matching and recruiter interest.' },
        { q: 'How do I keep multiple versions of my resume?', a: 'Keep one version per job type. CV Builder lets you store multiple resumes in the app and export each as a PDF.' },
        { q: 'How long does tailoring take?', a: 'About 10 minutes once you have a strong base resume.' }
    ],
    related: ['ats-friendly-resume', 'resume-summary-examples', 'cover-letter-app']
};
