module.exports = {
    slug: 'cv-resume-chai',
    en: 'cv-vs-resume',
    keyword: 'CV 레주메 차이',
    tag: '기본',
    navTitle: 'CV와 Resume 차이',
    title: 'CV와 Resume(레주메) 차이: 언제 무엇을 쓰나',
    h1: 'CV와 Resume의 차이',
    description: 'CV와 Resume(레주메)의 길이·내용·사용 국가 차이를 표로 비교하고, 지원 국가와 직무에 맞게 무엇을 준비해야 하는지 설명합니다.',
    cardText: '길이·내용·국가별 차이를 한눈에.',
    lede: '영문 지원 서류는 CV와 Resume 두 가지 이름으로 불립니다. 어떤 차이가 있고 언제 무엇을 써야 하는지 정리했습니다.',
    tldr: ['Resume: 1~2페이지, 경력 요약. 미국·캐나다·외국계.', 'CV: 영국·유럽에서는 이력서 전반, 미국에서는 학술용 상세 경력.', '공고에 적힌 명칭을 따르면 됨.'],
    sections: [
        { id: 'pyo', h2: '비교표', html: `<table><thead><tr><th></th><th>Resume</th><th>CV</th></tr></thead><tbody><tr><td>길이</td><td>1~2페이지</td><td>2페이지 이상 가능</td></tr><tr><td>내용</td><td>직무 관련 성과</td><td>학력·연구·발표 등 전체</td></tr><tr><td>주요 지역</td><td>미국·캐나다</td><td>영국·유럽·학계</td></tr></tbody></table>` },
        { id: 'gukga', h2: '국가별 정리', html: `<p>영국·유럽에서 말하는 CV는 사실상 Resume와 비슷한 2페이지 서류입니다. 미국 대학·연구직은 긴 Academic CV를 요구합니다.</p>` }
    ],
    appAfter: 1,
    app: {
        h2: 'CV Builder로 둘 다 만들기',
        intro: '같은 정보로 템플릿과 섹션만 바꿔 Resume와 CV 버전을 따로 저장할 수 있습니다.',
        screenshot: 2,
        steps: [['이력서 복제', '버전별로 저장.'], ['섹션 조정', 'CV는 연구·발표 추가.'], ['PDF로 내보내기', '지원처에 맞게.']],
        outro: 'PDF 내보내기는 유료 플랜(무료 체험 있음)입니다.'
    },
    faq: [
        { q: '외국계 한국 법인에는 무엇을 내나요?', a: '대부분 Resume 형식이면 충분합니다. 공고 명칭을 따르세요.' },
        { q: 'CV에 사진을 넣나요?', a: '유럽 일부는 넣기도 하지만 영미권은 넣지 않습니다.' }
    ],
    related: ['yeongmun-iryeokseo', 'resume-photo', 'resume-template']
};
