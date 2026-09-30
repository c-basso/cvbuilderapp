module.exports = {
    slug: 'jianli-zhaopian',
    en: 'cv-with-photo',
    keyword: '简历照片',
    tag: '照片',
    navTitle: '简历照片',
    title: '简历要不要放照片？按国家和公司类型说明',
    h1: '简历照片：放还是不放',
    description: '简历到底要不要放照片？本文对比国内企业、外企以及美国、英国、德国、日本等不同国家的习惯做法，说明一张合格简历照片应满足哪些要求，并介绍如何在 iPhone 应用中根据投递对象和目标国家的习惯，灵活地添加或去掉简历上的照片。',
    cardText: '各国习惯与简历照片要求。',
    lede: '国内企业普遍喜欢带照片的简历，但投递部分国家的英文简历则不宜放照片。',
    tldr: ['国内企业：通常放。', '美国、英国、加拿大：不放。', '德国、日本：通常放。', '如需放：正面证件照、纯色背景、着装得体。'],
    sections: [
        { id: 'guojia', h2: '各国习惯', html: `<table><thead><tr><th>国家 / 公司</th><th>照片</th></tr></thead><tbody><tr><td>国内企业</td><td>通常放</td></tr><tr><td>美国、英国、加拿大</td><td>不放</td></tr><tr><td>德国、日本</td><td>通常放</td></tr><tr><td>在华外企</td><td>按招聘要求</td></tr></tbody></table>` },
        { id: 'yaoqiu', h2: '合格的简历照片', html: `<ul><li>近 6 个月内拍摄。</li><li>正面，微笑。</li><li>浅色纯色背景。</li><li>着装与岗位相符。</li></ul>` }
    ],
    appAfter: 1,
    app: {
        h2: '在 CV Builder 中添加或去掉照片',
        intro: '提供带照片和不带照片的模板，可按投递公司切换。',
        screenshot: 2,
        steps: [['带照片模板', '或无照片模板。'], ['添加照片', '来自相册或相机。'], ['Download PDF', '按职位投递。']],
        outro: 'PDF 导出属于高级版（提供免费试用）。'
    },
    faq: [
        { q: '可以用自拍吗？', a: '不建议，请使用正式的证件照。' },
        { q: '投美国公司要放照片吗？', a: '不建议，出于反歧视的惯例。' }
    ],
    related: ['jianli-moban', 'cv-resume-qubie', 'waiqi-jianli']
};
