module.exports = {
    slug: 'ats-jianli',
    en: 'ats-friendly-resume',
    keyword: 'ats简历',
    tag: 'ATS',
    navTitle: 'ATS 简历',
    title: 'ATS 简历：如何通过招聘系统的自动筛选',
    h1: '如何写出能通过 ATS 筛选的简历',
    description: '很多外企和大公司会用 ATS 招聘系统自动筛选简历。本文解释 ATS 读取简历的方式，并提供一份关于版式、关键词、板块标题和文件格式的检查清单，帮你的简历顺利通过系统筛选、交到 HR 手中，同时避开求职者最常见的几个误区。',
    cardText: 'ATS 如何读简历，以及版式检查清单。',
    lede: '在真人阅读之前，简历往往先经过软件筛选。确保它能正确读取你的信息。',
    tldr: ['标准标题：Work Experience、Education、Skills。', '真实文字的 PDF 或 Word。', '使用职位描述中的关键词。', '不用表格，不把文字放进图片。'],
    sections: [
        { id: 'qingdan', h2: '检查清单', html: `<ul><li>单栏布局。</li><li>常规字体。</li><li>日期格式统一（Jan 2023 – Present）。</li><li>缩写写全称：SEO (Search Engine Optimization)。</li><li>文件名：Name-Resume.pdf。</li></ul>` },
        { id: 'wuqu', h2: '误区', html: `<p>用白色文字隐藏关键词，一旦 HR 打开就会被发现。把关键词自然地写进经历描述里。</p>` }
    ],
    appAfter: 1,
    app: {
        h2: '在 CV Builder 中制作 ATS 友好简历',
        intro: '选择简洁模板，导出的 PDF 包含 ATS 可读取的真实文字。',
        screenshot: 2,
        steps: [['简洁模板', '单栏。'], ['标准板块', '标题清晰。'], ['关键词', '来自职位描述。'], ['Download PDF', '真实文字。']],
        outro: 'PDF 导出属于高级版（提供免费试用）。任何应用都无法保证通过某个特定 ATS。'
    },
    faq: [
        { q: 'ATS 能读 PDF 吗？', a: '真实文字的 PDF 一般可以。若要求 Word，就发 Word。' },
        { q: '照片会影响 ATS 吗？', a: '系统不会读取照片，照片只会占用版面。' }
    ],
    related: ['jianli-gangwei', 'jianli-moban', 'jianli-pdf']
};
