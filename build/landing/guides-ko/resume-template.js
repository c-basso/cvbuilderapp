module.exports = {
    slug: 'resume-template',
    en: 'resume-templates',
    keyword: '영문 이력서 템플릿',
    tag: '템플릿',
    navTitle: '영문 이력서 템플릿',
    title: '영문 이력서 템플릿 고르는 법: 직무별 추천',
    h1: '영문 이력서 템플릿 선택 가이드',
    description: '영문 이력서 템플릿을 직무와 지원처에 맞게 고르는 기준(심플·모던·크리에이티브)과 ATS 호환성, 아이폰 앱 100+ 템플릿 사용법을 소개합니다.',
    cardText: '직무별로 어울리는 디자인과 ATS 호환성.',
    lede: '템플릿은 내용을 돋보이게 하는 틀입니다. 직무와 지원처에 맞는 선택 기준을 정리했습니다.',
    tldr: ['금융·법률·대기업: 심플.', 'IT·마케팅: 모던.', '디자인: 크리에이티브(포트폴리오 병행).', 'ATS 지원이면 1단 레이아웃이 안전.'],
    sections: [
        { id: 'gijun', h2: '선택 기준', html: `<ul><li>가독성: 글꼴 10~12pt, 충분한 여백.</li><li>구조: 섹션 제목이 명확.</li><li>ATS: 표·이미지 속 텍스트를 피함.</li></ul>` },
        { id: 'jikmu', h2: '직무별 추천', html: `<table><thead><tr><th>직무</th><th>스타일</th></tr></thead><tbody><tr><td>금융·컨설팅</td><td>심플·클래식</td></tr><tr><td>IT·스타트업</td><td>모던</td></tr><tr><td>디자인·광고</td><td>크리에이티브</td></tr></tbody></table>` }
    ],
    appAfter: 1,
    app: {
        h2: 'CV Builder의 100+ 템플릿',
        intro: '입력한 내용은 그대로 두고 템플릿만 바꿔 비교할 수 있습니다.',
        screenshot: 1,
        steps: [['Templates 열기', '디자인 둘러보기.'], ['탭해서 적용', '내용은 자동 유지.'], ['미리보기로 비교', '가장 읽기 쉬운 것 선택.']],
        outro: '일부 템플릿과 PDF 내보내기는 유료 플랜(무료 체험 있음)입니다.'
    },
    faq: [
        { q: '화려한 템플릿이 유리한가요?', a: '디자인 직군이 아니라면 심플한 편이 안전합니다.' },
        { q: '템플릿을 바꾸면 다시 입력해야 하나요?', a: 'CV Builder에서는 내용이 유지됩니다.' }
    ],
    related: ['ats-resume', 'iryeokseo-app', 'resume-photo']
};
