module.exports = {
    slug: 'cv-resume-qubie',
    en: 'cv-vs-resume',
    keyword: 'cv和resume区别',
    tag: '基础',
    navTitle: 'CV 与 Resume 区别',
    title: 'CV 和 Resume 有什么区别？该用哪一种',
    h1: 'CV 和 Resume 的区别',
    description: 'CV 和 Resume 有什么区别？本文从篇幅、内容重点和使用国家三方面对比两者，说明在国内外企、海外求职、申请留学和奖学金时分别应该准备哪一种，并介绍如何在 CV Builder 中用同一份资料分别保存两个版本，按需投递。',
    cardText: '篇幅、内容和使用地区一表看懂。',
    lede: '英文求职材料有 CV 和 Resume 两种叫法，来看看区别和使用场合。',
    tldr: ['Resume：1–2 页，概括成果，美国、加拿大常用。', 'CV：在英国和欧洲指普通求职简历；在美国指详细的学术履历。', '国内外企两个词常混用。'],
    sections: [
        { id: 'duibi', h2: '对比表', html: `<table><thead><tr><th></th><th>Resume</th><th>CV</th></tr></thead><tbody><tr><td>篇幅</td><td>1–2 页</td><td>可超过 2 页</td></tr><tr><td>内容</td><td>与职位相关的成果</td><td>教育、研究、发表成果</td></tr><tr><td>地区</td><td>美国、加拿大</td><td>英国、欧洲、学术界</td></tr></tbody></table>` },
        { id: 'guonei', h2: '在国内', html: `<p>大多数外企期待的是 1–2 页的英文简历，无论叫 CV 还是 Resume。申请留学、奖学金或科研岗位时，才需要详细的 Academic CV。</p>` }
    ],
    appAfter: 1,
    app: {
        h2: '在 CV Builder 中两种都能做',
        intro: '使用同一份资料，更换模板和板块后分别保存。',
        screenshot: 2,
        steps: [['复制简历', '另存一个版本。'], ['调整板块', 'Academic CV 增加研究与发表。'], ['Download PDF', '按要求投递。']],
        outro: 'PDF 导出属于高级版（提供免费试用）。'
    },
    faq: [
        { q: '投国内外企用哪种？', a: '通常用 1–2 页的 Resume 式英文简历即可。' },
        { q: '申请留学用哪种？', a: '一般要求详细的 Academic CV。' }
    ],
    related: ['yingwen-jianli', 'jianli-zhaopian', 'jianli-moban']
};
