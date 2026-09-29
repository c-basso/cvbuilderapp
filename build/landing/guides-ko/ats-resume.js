module.exports = {
    slug: 'ats-resume',
    en: 'ats-friendly-resume',
    keyword: 'ATS 이력서',
    tag: 'ATS',
    navTitle: 'ATS 통과 이력서',
    title: 'ATS 통과하는 영문 이력서 만드는 법',
    h1: 'ATS(채용 관리 시스템)에 강한 이력서 작성법',
    description: '외국계·글로벌 기업이 쓰는 ATS가 이력서를 읽는 방식과, 서식·키워드·파일 형식 측면에서 ATS를 통과하는 영문 이력서 체크리스트를 정리했습니다.',
    cardText: 'ATS가 읽는 방식과 서식·키워드 체크리스트.',
    lede: '많은 외국계 기업은 ATS로 이력서를 먼저 걸러냅니다. 사람이 보기 전에 시스템이 읽을 수 있어야 합니다.',
    tldr: ['표준 섹션 제목(Experience, Education, Skills).', '텍스트 기반 PDF 또는 Word.', '공고 키워드를 그대로 사용.', '표·그래픽·머리글 속 정보 피하기.'],
    sections: [
        { id: 'checklist', h2: 'ATS 체크리스트', html: `<ul><li>1단 레이아웃.</li><li>기본 글꼴.</li><li>날짜 형식 통일(Jan 2023 – Present).</li><li>약어와 풀네임 병기(SEO, Search Engine Optimization).</li><li>파일명: Firstname-Lastname-Resume.pdf.</li></ul>` },
        { id: 'ohae', h2: '흔한 오해', html: `<p>흰 글씨로 키워드를 숨기는 방법은 사람이 확인할 때 역효과가 납니다. 실제 경험 속에 키워드를 쓰세요.</p>` }
    ],
    appAfter: 1,
    app: {
        h2: 'CV Builder로 ATS에 강한 이력서 만들기',
        intro: '심플 템플릿을 고르면 텍스트가 살아 있는 PDF로 내보내져 ATS가 읽기 쉽습니다.',
        screenshot: 2,
        steps: [['심플 템플릿 선택', '1단 레이아웃.'], ['표준 섹션 사용', '제목은 영어 기본값.'], ['키워드 반영', '공고 용어 그대로.'], ['PDF로 내보내기', '텍스트 PDF.']],
        outro: 'PDF 내보내기는 유료 플랜(무료 체험 있음)입니다. 특정 ATS 통과를 보장하지는 않습니다.'
    },
    faq: [
        { q: 'ATS는 PDF를 읽을 수 있나요?', a: '텍스트 기반 PDF는 대부분 읽습니다. 공고에 Word 지정이 있으면 따르세요.' },
        { q: '사진은 ATS에 영향을 주나요?', a: '읽히지 않으며 영미권에서는 넣지 않는 것이 일반적입니다.' }
    ],
    related: ['resume-tailor', 'resume-template', 'resume-pdf-iphone']
};
