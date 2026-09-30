module.exports = {
    slug: 'jianli-pdf',
    en: 'save-resume-as-pdf-on-iphone',
    keyword: '简历pdf',
    tag: 'iPhone',
    navTitle: '简历导出 PDF',
    title: 'iPhone 上把简历存成 PDF 的 3 种方法',
    h1: '如何在 iPhone 上把简历保存为 PDF',
    description: '在 iPhone 上把简历保存为 PDF 的 3 种方法：使用简历制作应用、用 Pages 或 Word 导出、或者借助系统自带的打印功能生成 PDF，并说明如何命名文件、通过邮件发送或上传到招聘网站，以及为什么投递时应该首选 PDF 格式。',
    cardText: '3 种可靠方法生成并发送 PDF。',
    lede: '企业普遍希望收到 PDF 简历，因为在任何设备上显示都一样。下面是在 iPhone 上的做法。',
    tldr: ['简历应用：Download PDF，效果最整洁。', 'Pages / Word：共享 → 导出 → PDF。', '任意应用：共享 → 打印 → 双指放大预览 → 存储到“文件”。', '文件名：Name-Resume.pdf。'],
    sections: [
        { id: 'weishenme', h2: '为什么用 PDF', html: `<ul><li>字体和排版不会错乱。</li><li>没有 Word 也能打开。</li><li>文字仍可被 ATS 读取。</li></ul>` },
        { id: 'pages', h2: '方法 2：Pages 或 Word', html: `<ol><li><b>Pages</b>：文稿 → <i>•••</i> → <i>导出</i> → <i>PDF</i>。</li><li><b>Word</b>：<i>•••</i> → <i>导出</i> → PDF。</li></ol>` },
        { id: 'dayin', h2: '方法 3：打印功能', html: `<ol><li>打开文档，点击 共享 → <i>打印</i>。</li><li>双指在预览上张开，会以 PDF 打开。</li><li>共享 → <i>存储到“文件”</i>。</li></ol>` }
    ],
    appAfter: 0,
    app: {
        h2: '方法 1：在 CV Builder 中导出 PDF（推荐）',
        intro: '在 CV Builder 中制作的简历，一键即可生成高质量 PDF。',
        screenshot: 2,
        steps: [['打开简历', '选择要发送的版本。'], ['Preview PDF', '检查页边距和页数。'], ['Download PDF', '真实文字，高清输出。'], ['保存或分享', '文件、邮件、微信。']],
        outro: 'PDF 导出属于高级版（提供免费试用）。'
    },
    faq: [
        { q: 'PDF 保存在 iPhone 哪里？', a: '在“文件”App 的“我的 iPhone”或 iCloud 云盘中。' },
        { q: '发 PDF 还是 Word？', a: '除非招聘要求 Word，否则发 PDF。' }
    ],
    related: ['shouji-zuo-jianli', 'ats-jianli', 'qiuzhixin']
};
