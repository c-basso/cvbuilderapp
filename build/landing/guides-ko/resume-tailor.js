module.exports = {
    slug: 'resume-tailor',
    en: 'tailor-resume-to-job-description',
    keyword: '이력서 맞춤 수정',
    tag: '작성법',
    navTitle: '공고별 맞춤 이력서',
    title: '채용 공고에 맞춰 영문 이력서를 수정하는 5단계',
    h1: '채용 공고별로 이력서를 맞춤화하는 법',
    description: '채용 공고의 키워드를 뽑아 영문 이력서의 Summary·경력·스킬에 반영하는 5단계와, 아이폰 앱에서 지원처별 버전을 관리하는 방법을 설명합니다.',
    cardText: '키워드 추출부터 버전 관리까지 5단계.',
    lede: '같은 이력서를 모든 곳에 보내면 서류 통과율이 떨어집니다. 공고에 맞춰 10분 만에 수정하는 방법입니다.',
    tldr: ['공고에서 필수 스킬·키워드 5~10개 추출.', 'Summary 첫 문장을 포지션에 맞게.', '관련 성과를 위로.', '지원처별 파일명으로 저장.'],
    sections: [
        { id: 'dangye', h2: '5단계', html: `<ol><li>공고의 Requirements를 복사해 키워드 표시.</li><li>이력서에 없는 키워드 확인.</li><li>Summary 수정.</li><li>경력 bullet 순서 조정·표현 통일.</li><li>Skills 섹션 업데이트.</li></ol>` },
        { id: 'juui', h2: '주의할 점', html: `<p>하지 않은 경험을 쓰지 마세요. 표현을 공고 용어에 맞추는 것이 핵심입니다.</p>` }
    ],
    appAfter: 1,
    app: {
        h2: 'CV Builder로 버전 관리하기',
        intro: '기본 이력서를 복제해 지원처별로 수정하면 원본을 지키면서 빠르게 맞춤화할 수 있습니다.',
        screenshot: 5,
        steps: [['기본 이력서 복제', '회사명으로 이름 변경.'], ['Summary·Skills 수정', '공고 키워드 반영.'], ['PDF로 내보내기', '지원 완료.']],
        outro: 'PDF 내보내기는 유료 플랜(무료 체험 있음)입니다.'
    },
    faq: [
        { q: '매번 수정해야 하나요?', a: '최소한 Summary와 Skills는 공고마다 조정하는 것을 권장합니다.' },
        { q: '키워드를 너무 많이 넣으면?', a: '부자연스러운 나열은 역효과입니다. 경력 문장 속에 녹이세요.' }
    ],
    related: ['ats-resume', 'resume-summary', 'yeongmun-cover-letter']
};
