module.exports = {
    slug: 'yeongmun-cover-letter',
    en: 'cover-letter-app',
    keyword: '영문 커버레터',
    tag: '커버레터',
    navTitle: '영문 커버레터',
    title: '영문 커버레터 쓰는 법: 구성·예시·아이폰 작성법',
    h1: '영문 커버레터 작성법',
    description: '외국계·해외 지원에 필요한 영문 커버레터의 4단 구성, 첫 문장과 마무리 예시, 아이폰 앱으로 이력서와 함께 만드는 방법을 설명합니다.',
    cardText: '4단 구성과 예시 문장으로 한 페이지 커버레터 완성.',
    lede: '영문 커버레터는 이력서에 없는 「왜 이 회사인가」를 전하는 한 페이지 편지입니다. 구성과 예시, 아이폰에서 만드는 법을 정리했습니다.',
    tldr: ['A4 한 장, 250~400단어.', '구성: 인사 → 지원 동기 → 성과 2~3개 → 마무리.', '공고의 키워드를 자연스럽게 반영.', '이력서와 같은 디자인·PDF로 제출.'],
    sections: [
        { id: 'gusung', h2: '기본 4단 구성', html: `<ol><li><b>Opening</b>: 지원 포지션과 한 줄 강점.</li><li><b>Why you</b>: 수치가 있는 성과 2~3개.</li><li><b>Why them</b>: 회사·제품에 대한 구체적 관심.</li><li><b>Closing</b>: 면접 요청과 감사.</li></ol>` },
        { id: 'yesi', h2: '예시 문장', html: `<ul><li><i>I am applying for the Marketing Manager role, bringing five years of B2B growth experience.</i></li><li><i>At ABC, I grew qualified leads by 40% in one year.</i></li><li><i>I would welcome the opportunity to discuss how I can contribute.</i></li></ul>` },
        { id: 'jagiso', h2: '자기소개서와의 차이', html: `<p>한국식 자기소개서(성장 과정·성격 장단점 등)와 달리 커버레터는 짧고 직무 중심입니다. 자세한 비교는 <a href="/ko/guides/jagisogaeseo-cover-letter/">자기소개서 vs 커버레터</a>를 참고하세요.</p>` }
    ],
    appAfter: 1,
    app: {
        h2: 'CV Builder로 커버레터 만들기',
        intro: 'CV Builder에는 이력서와 어울리는 커버레터 기능이 있습니다. 앱 화면은 영어이며 영문 서류 작성에 맞춰져 있습니다.',
        screenshot: 4,
        steps: [['Cover Letter 선택', '새 커버레터 만들기.'], ['수신자·포지션 입력', '회사명과 담당자.'], ['본문 작성', '4단 구성으로.'], ['PDF로 내보내기', '이력서와 함께 제출.']],
        outro: 'PDF 내보내기를 포함한 전체 기능은 유료 플랜(무료 체험 있음)입니다.'
    },
    faq: [
        { q: '영문 커버레터는 꼭 필요한가요?', a: '필수가 아니어도 제출하면 동기와 적합성을 보여줄 수 있어 유리합니다.' },
        { q: '길이는 어느 정도가 적당한가요?', a: 'A4 한 장, 250~400단어가 일반적입니다.' },
        { q: '담당자 이름을 모르면?', a: '「Dear Hiring Manager」를 사용하세요.' }
    ],
    related: ['jagisogaeseo-cover-letter', 'yeongmun-iryeokseo', 'resume-tailor']
};
