module.exports = {
    slug: 'oegugye-resume',
    en: null,
    keyword: '외국계 영문 이력서',
    tag: '외국계',
    navTitle: '외국계 이력서',
    title: '외국계 기업 영문 이력서: 합격하는 구성과 팁',
    h1: '외국계 기업 영문 이력서 작성법',
    description: '외국계 기업 지원용 영문 이력서의 구성, 성과 중심 표현, 사진·나이 생략 등 국문 이력서와의 차이와 아이폰으로 빠르게 만드는 방법을 설명합니다.',
    cardText: '국문 이력서와 다른 점과 성과 중심 쓰기.',
    lede: '외국계 기업은 영문 이력서(Resume)로 1차 평가를 합니다. 국문 이력서와 다른 점과 합격하는 구성을 정리했습니다.',
    tldr: ['경력 중심 1~2페이지.', '사진·생년월일·가족관계는 넣지 않음.', '동사 + 수치로 성과 표현.', '공고 키워드로 맞춤화.'],
    sections: [
        { id: 'chai', h2: '국문 이력서와의 차이', html: `<ul><li>양식이 자유롭고 최근 경력부터 역순.</li><li>개인 정보는 이름·연락처·링크드인 정도.</li><li>업무 나열보다 성과와 결과.</li></ul>` },
        { id: 'gusung', h2: '추천 구성', html: `<ol><li>Contact</li><li>Summary(2~3줄)</li><li>Experience</li><li>Education</li><li>Skills·Languages·Certifications</li></ol>` },
        { id: 'pyohyeon', h2: '성과 표현 예시', html: `<ul><li><i>Led a team of 6 to launch a mobile app with 200K downloads.</i></li><li><i>Reduced costs by 15% by renegotiating vendor contracts.</i></li></ul>` }
    ],
    appAfter: 2,
    app: {
        h2: 'CV Builder로 외국계용 이력서 만들기',
        intro: '영어 템플릿에 섹션별로 입력하면 레이아웃이 자동으로 정리됩니다. 앱 화면은 영어입니다.',
        screenshot: 1,
        steps: [['템플릿 선택', '심플하고 ATS에 강한 디자인.'], ['경력 입력', '성과를 수치로.'], ['Summary·Skills 추가', '공고 키워드 반영.'], ['PDF로 내보내기', '지원 사이트에 업로드.']],
        outro: 'PDF 내보내기를 포함한 전체 기능은 유료 플랜(무료 체험 있음)입니다.'
    },
    faq: [
        { q: '외국계 이력서에 사진을 넣어야 하나요?', a: '영미권 기준으로는 넣지 않는 것이 일반적입니다.' },
        { q: '국문 이력서를 번역하면 되나요?', a: '직역보다 성과 중심으로 다시 쓰는 편이 좋습니다.' },
        { q: '영어 실력은 어떻게 표시하나요?', a: 'Languages 섹션에 수준(Fluent 등)과 점수를 적습니다.' }
    ],
    related: ['yeongmun-iryeokseo', 'resume-summary', 'ats-resume']
};
