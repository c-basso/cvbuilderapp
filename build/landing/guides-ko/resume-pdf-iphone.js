module.exports = {
    slug: 'resume-pdf-iphone',
    en: 'save-resume-as-pdf-on-iphone',
    keyword: '아이폰 이력서 PDF',
    tag: 'iPhone',
    navTitle: '이력서 PDF 저장',
    title: '아이폰에서 이력서를 PDF로 저장하는 3가지 방법',
    h1: '아이폰에서 이력서를 PDF로 만드는 법',
    description: '아이폰에서 이력서를 PDF로 변환하는 3가지 방법(이력서 앱, Pages/Word, 프린트 기능)과 이메일·지원 사이트로 보내는 방법을 설명합니다.',
    cardText: '아이폰에서 PDF를 만들고 보내는 확실한 3가지 방법.',
    lede: '지원 서류는 PDF가 기본입니다. 어떤 기기에서도 똑같이 보입니다. 아이폰에서 PDF를 만드는 3가지 방법과 보내는 법입니다.',
    tldr: ['이력서 앱: 「Download PDF」가 가장 깔끔.', 'Pages / Word: 공유 → 내보내기 → PDF.', '어떤 앱이든: 공유 → 프린트 → 미리보기를 두 손가락으로 확대 → 「파일」에 저장.', '파일명은 「Firstname-Lastname-Resume.pdf」.'],
    sections: [
        { id: 'waePDF', h2: '왜 PDF로 보내나요', html: `<ul><li>글꼴과 레이아웃이 깨지지 않음.</li><li>Word 없이 열림.</li><li>텍스트가 유지되어 ATS가 읽을 수 있음.</li></ul>` },
        { id: 'pages', h2: '방법 2: Pages / Word', html: `<ol><li><b>Pages</b>: 문서 → <i>•••</i> → <i>내보내기</i> → <i>PDF</i>.</li><li><b>Word</b>: <i>•••</i> → <i>내보내기</i> → PDF.</li></ol>` },
        { id: 'print', h2: '방법 3: 프린트 기능', html: `<ol><li>문서를 열고 공유 → <i>프린트</i>.</li><li>미리보기를 두 손가락으로 벌리면 PDF로 열림.</li><li>공유 → <i>「파일」에 저장</i>.</li></ol>` }
    ],
    appAfter: 0,
    app: {
        h2: '방법 1: CV Builder에서 PDF 내보내기(추천)',
        intro: 'CV Builder로 만든 이력서는 탭 한 번으로 화면과 인쇄 모두에 맞는 PDF가 됩니다.',
        screenshot: 2,
        steps: [['이력서 열기', '보낼 버전 선택.'], ['「Preview PDF」', '여백과 쪽수 확인.'], ['「Download PDF」', '텍스트가 살아 있는 고품질 PDF.'], ['저장·공유', '「파일」, 메일, 메시지로.']],
        outro: 'PDF 내보내기를 포함한 전체 기능은 유료 플랜(무료 체험 있음)입니다. 입력 전에 앱에서 조건을 확인하세요.'
    },
    faq: [
        { q: '아이폰에서 이력서를 PDF로 바꾸려면?', a: 'CV Builder는 「Download PDF」, Pages·Word는 내보내기 → PDF, 그 외는 프린트 기능으로 PDF를 만들어 「파일」에 저장합니다.' },
        { q: 'PDF는 어디에 저장되나요?', a: '「파일」 앱의 「나의 iPhone」 또는 iCloud Drive입니다.' },
        { q: 'PDF와 Word 중 무엇으로?', a: '특별한 요청이 없다면 PDF가 안전합니다.' }
    ],
    related: ['smartphone-resume', 'yeongmun-cover-letter', 'ats-resume']
};
