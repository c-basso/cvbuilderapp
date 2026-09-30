module.exports = {
    slug: 'yingwen-jianli',
    en: null,
    keyword: '英文简历',
    tag: '基础',
    navTitle: '英文简历怎么写',
    title: '英文简历怎么写：结构、常用动词与范例',
    h1: '英文简历写作完全指南',
    description: '英文简历怎么写？本文讲解英文简历的标准结构与板块标题、描述成果的常用动词、日期和学历的写法、篇幅要求以及中国求职者常见的翻译错误，并介绍如何在 iPhone 上用 CV Builder 快速做出一份专业、清晰的英文简历。',
    cardText: '标准结构、常用动词和范例句。',
    lede: '外企、海外工作和留学申请通常都需要英文简历。不要逐字翻译中文简历，而要使用标准标题和表达方式。',
    tldr: ['标题：Summary、Work Experience、Education、Skills、Languages。', '经历按时间倒序。', '用动词开头并加上数字。', '1–2 页，以 PDF 提交。'],
    sections: [
        { id: 'biaoti', h2: '标准板块标题', html: `<table><thead><tr><th>中文</th><th>英文</th></tr></thead><tbody><tr><td>个人简介 / 自我评价</td><td>Summary / Profile</td></tr><tr><td>工作经历</td><td>Work Experience</td></tr><tr><td>教育背景</td><td>Education</td></tr><tr><td>技能</td><td>Skills</td></tr><tr><td>语言能力</td><td>Languages</td></tr></tbody></table>` },
        { id: 'dongci', h2: '范例句', html: `<ul><li><i>Increased online sales by 35% in one year.</i></li><li><i>Led a team of 5 staff at the Shanghai office.</i></li><li><i>Reduced customer response time by 40%.</i></li></ul>` },
        { id: 'xueli', h2: '学历的英文写法', html: `<p>本科 — <i>Bachelor’s degree</i>，硕士 — <i>Master’s degree</i>，GPA 若较高可注明（如 3.7/4.0），英语证书写 CET-6、IELTS 或 TOEFL 成绩。</p>` }
    ],
    appAfter: 1,
    app: {
        h2: '用 CV Builder 制作英文简历',
        intro: '应用界面和模板标题均为英文，非常适合直接制作英文简历。',
        screenshot: 2,
        steps: [['选择模板', '简洁易读。'], ['用英文填写', '动词加数字。'], ['Preview PDF', '检查排版。'], ['Download PDF', '随时投递。']],
        outro: '包括 PDF 导出在内的全部功能属于高级版（提供免费试用）。'
    },
    faq: [
        { q: '英文简历要写年龄和籍贯吗？', a: '外企和海外求职一般不写，写姓名、电话、邮箱、城市即可。' },
        { q: '英文简历写几页？', a: '应届生 1 页，有经验者不超过 2 页。' }
    ],
    related: ['waiqi-jianli', 'geren-jianjie', 'jianli-zenme-xie']
};
