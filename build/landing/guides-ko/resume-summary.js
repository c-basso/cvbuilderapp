module.exports = {
    slug: 'resume-summary',
    en: 'resume-summary-examples',
    keyword: '영문 이력서 자기소개 요약',
    tag: '작성법',
    navTitle: 'Summary 작성법',
    title: '영문 이력서 Summary 작성법과 직무별 예시',
    h1: '영문 이력서 Summary(자기소개 요약) 쓰는 법',
    description: '영문 이력서 맨 위의 Summary를 2~3문장으로 쓰는 공식과 마케팅·개발·신입 등 직무별 예시, 아이폰 앱에서 추가하는 방법을 소개합니다.',
    cardText: '2~3문장 공식과 바로 쓰는 직무별 예시.',
    lede: '채용 담당자는 이력서 상단을 몇 초만 봅니다. Summary는 그 몇 초를 위한 2~3문장입니다.',
    tldr: ['공식: 직함 + 경력 연수 + 강점 + 대표 성과.', '2~3문장, 주어 I 생략.', '공고마다 조정.'],
    sections: [
        { id: 'gongsik', h2: 'Summary 공식', html: `<p><b>[직함] with [N] years of experience in [분야]. [대표 성과]. [강점/스킬].</b></p>` },
        { id: 'yesi', h2: '직무별 예시', html: `<ul><li><b>마케팅</b>: <i>Digital marketer with 5 years in B2C e-commerce. Grew organic traffic 120% in 18 months.</i></li><li><b>개발</b>: <i>Backend engineer with 4 years building scalable APIs in Go and Python.</i></li><li><b>신입</b>: <i>Recent business graduate with internship experience in data analysis and strong English skills.</i></li></ul>` }
    ],
    appAfter: 1,
    app: {
        h2: 'CV Builder에서 Summary 추가하기',
        intro: '앱의 Summary(Profile) 섹션에 입력하면 템플릿 상단에 자동 배치됩니다.',
        screenshot: 3,
        steps: [['이력서 열기', '편집 화면으로.'], ['Summary 섹션', '2~3문장 입력.'], ['미리보기', '길이와 줄바꿈 확인.']],
        outro: 'PDF 내보내기는 유료 플랜(무료 체험 있음)입니다.'
    },
    faq: [
        { q: 'Summary와 Objective의 차이는?', a: 'Summary는 경력 요약, Objective는 목표 중심이며 요즘은 Summary가 일반적입니다.' },
        { q: '신입도 Summary를 쓰나요?', a: '네. 전공·인턴·스킬 중심으로 씁니다.' }
    ],
    related: ['yeongmun-iryeokseo', 'resume-tailor', 'sinip-yeongmun-resume']
};
