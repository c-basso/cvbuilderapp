module.exports = {
    slug: 'smartphone-resume',
    en: 'how-to-make-a-resume-on-iphone',
    keyword: '휴대폰 이력서 만들기',
    tag: 'iPhone',
    navTitle: '휴대폰으로 이력서 만들기',
    title: '휴대폰(아이폰)으로 영문 이력서 만드는 법: 단계별 가이드',
    h1: '아이폰으로 영문 이력서를 15분 만에 만드는 법',
    description: '휴대폰으로 영문 이력서를 만드는 방법: 미리 준비할 것, 앱 선택, 구성과 레이아웃, PDF 저장까지 단계별로 설명합니다. 오늘 바로 지원하세요.',
    cardText: 'PC 없이 빈 화면에서 PDF 완성까지 가장 빠른 길.',
    lede: '영문 이력서는 휴대폰만으로 충분히 만들 수 있습니다. 준비할 정보, 기본 구성, 어디서나 똑같이 보이는 PDF 만드는 법을 순서대로 안내합니다.',
    tldr: ['메모나 Pages 대신 이력서 앱을 쓰면 글꼴·여백·레이아웃이 자동으로 정리됩니다.', '구성: 연락처 → Summary → 경력 → 학력 → 스킬.', '1~2쪽, 깔끔한 템플릿.', 'PDF로 저장해 「Firstname-Lastname-Resume.pdf」로 전송.'],
    sections: [
        { id: 'junbi', h2: '시작 전 준비할 6가지', html: `<ol><li><b>연락처</b>: 영문 이름, 도시, +82 전화, 이메일.</li><li><b>경력</b>: 회사, 직책, 기간(월·년).</li><li><b>경력별 성과 2~4개</b>: 숫자 포함.</li><li><b>학력</b>: 학교, 학위, 졸업 연도.</li><li><b>스킬</b>: 채용공고의 스킬 6~10개, 어학, 자격증.</li><li><b>링크</b>: LinkedIn, 포트폴리오.</li></ol>` },
        { id: 'guseong', h2: '기본 구성', html: `<ol><li><b>Header</b>: 이름, 희망 직무, 연락처.</li><li><b>Summary</b>: 2~4문장 — <a href="/ko/guides/resume-summary/">예시</a>.</li><li><b>Work Experience</b>: 최신순, 동사로 시작하는 3~5개 항목.</li><li><b>Education</b>: 신입은 경력보다 위에.</li><li><b>Skills / Languages</b>.</li></ol><div class="example"><b>약함:</b> Responsible for social media.<br><b>강함:</b> Grew Instagram followers from 4,000 to 19,000 in 8 months with a weekly video series.</div>` },
        { id: 'layout', h2: '레이아웃 규칙', html: `<ul><li>경력 10년 미만이면 1쪽, 최대 2쪽.</li><li>글꼴 1종, 날짜 형식 통일.</li><li>사진·나이·성별은 넣지 않음.</li><li><b>PDF</b>로 제출.</li></ul>` }
    ],
    app: {
        h2: 'CV Builder로 아이폰에서 이력서 만들기',
        intro: 'CV Builder는 항목별로 안내하고 레이아웃은 자동입니다. 앱 화면은 영어라 영문 이력서 작성에 자연스럽습니다.',
        screenshot: 5,
        steps: [['CV Builder 다운로드', 'App Store 무료(스토어 이름 「이력서 메이커 - CV 프로」).'], ['기본 항목 입력', 'Intro, Summary, Contacts, Education, Work Experience.'], ['추가 항목', 'Skills, Languages, Certifications, References, Links & QR codes, Custom Sections.'], ['템플릿 선택', '100개 이상 중 「Preview PDF」로 확인.'], ['PDF 다운로드', '「Download PDF」로 「파일」에 저장 또는 메일 전송.']],
        outro: '지원처가 여러 곳이면 직무별로 버전을 나누세요: <a href="/ko/guides/resume-tailor/">채용공고 맞춤 방법</a>.'
    },
    faq: [
        { q: '휴대폰만으로 이력서를 만들 수 있나요?', a: '네. 이력서 앱이면 항목만 입력해도 레이아웃이 정리되고 PDF로 내보낼 수 있습니다.' },
        { q: '한국식 이력서 양식도 되나요?', a: 'CV Builder는 영문 이력서·CV 형식용이며, 한국 기업 정형 양식에는 맞지 않습니다.' },
        { q: '얼마나 걸리나요?', a: '정보를 미리 준비하면 15~30분입니다.' }
    ],
    related: ['resume-pdf-iphone', 'yeongmun-iryeokseo', 'iryeokseo-app']
};
