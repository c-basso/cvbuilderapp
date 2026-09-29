module.exports = {
    slug: 'yeongmun-iryeokseo',
    keyword: '영문 이력서 작성법',
    tag: '작성법',
    navTitle: '영문 이력서 작성법',
    title: '영문 이력서(레쥬메) 작성법과 예시 [2026]',
    h1: '영문 이력서 작성법: 한국식 이력서와의 차이와 예시',
    description: '영문 이력서 작성법을 정리했습니다. 한국식 이력서와의 차이, 항목과 순서, 학력·경력 영어 표기, 쓸 만한 동사, 흔한 실수까지. 휴대폰으로 만드는 방법도 소개합니다.',
    cardText: '한국식 이력서와의 차이, 구성, 영어 표기와 예문을 한눈에.',
    lede: '외국계 기업이나 해외 취업에는 영문 이력서(레쥬메)가 필요합니다. 정해진 양식을 채우는 한국식 이력서와 달리, 성과를 어필하는 서류입니다.',
    tldr: ['형식 자유, 1~2쪽, 최신순.', '사진·나이·성별·생년월일·가족관계는 쓰지 않음.', '경력은 동사로 시작하고 숫자로 성과를 보여 줌.', '한국어는 Native, 영어는 TOEIC/OPIc 등 구체적으로.'],
    sections: [
        { id: 'chai', h2: '한국식 이력서와의 차이', html: `<table><thead><tr><th></th><th>한국식 이력서</th><th>영문 이력서</th></tr></thead><tbody><tr><td>양식</td><td>정형 양식</td><td>자유</td></tr><tr><td>순서</td><td>오래된 순이 많음</td><td>최신순</td></tr><tr><td>사진·나이</td><td>기재하는 경우 많음</td><td>기재하지 않음</td></tr><tr><td>내용</td><td>사실 나열</td><td>성과·실적 중심</td></tr><tr><td>자기소개</td><td>별도 자기소개서</td><td>상단 Summary</td></tr></tbody></table>` },
        { id: 'hangmok', h2: '항목과 순서', html: `<ol><li>Name / Contact (이름, +82 전화, 이메일, 도시, LinkedIn)</li><li>Summary (2~4문장)</li><li>Work Experience (최신순)</li><li>Education</li><li>Skills / Languages / Certifications</li></ol>` },
        { id: 'pyogi', h2: '영어 표기 요령', html: `<ul><li><b>학위</b>: 학사 Bachelor of ~, 석사 Master of ~.</li><li><b>직급</b>: 대리 Associate, 과장 Manager 등 실제 역할에 맞게.</li><li><b>어학</b>: Korean (Native), English (Business, TOEIC 900).</li><li><b>날짜</b>: Mar 2021 – Present.</li></ul><div class="example"><b>예:</b> Reduced procurement costs by 15% (₩180M per year) by renegotiating contracts with 8 key suppliers.</div>` },
        { id: 'silsu', h2: '흔한 실수', html: `<ul><li>한국식 이력서를 그대로 번역.</li><li>「담당」만 있고 성과가 없음.</li><li>사진·생년월일 기재.</li><li>철자 오류.</li></ul>` }
    ],
    app: {
        h2: 'CV Builder로 영문 이력서 만들기',
        intro: '앱 화면이 영어라서 항목 이름이 그대로 영문 이력서의 제목이 됩니다.',
        screenshot: 2,
        steps: [['Contacts·Summary를 영어로 입력', '처음에 강점을 전달.'], ['Work Experience·Education 입력', '최신순, 숫자로 성과.'], ['Skills·Languages·Certifications', 'TOEIC 점수 등.'], ['깔끔한 템플릿 선택', '사진 없는 버전.'], ['Download PDF', '「Firstname-Lastname-Resume.pdf」로 저장.']],
        outro: '커버레터도 준비하세요: <a href="/ko/guides/yeongmun-cover-letter/">영문 커버레터 작성법</a>.'
    },
    faq: [
        { q: '영문 이력서에 사진이 필요한가요?', a: '미국·영국 등에서는 필요 없고, 넣지 않는 것이 일반적입니다.' },
        { q: '몇 쪽이 적당한가요?', a: '1~2쪽. 경력이 짧다면 1쪽.' },
        { q: '휴대폰으로 만들 수 있나요?', a: '네. CV Builder로 영어 항목에 맞춰 입력하고 PDF로 내보낼 수 있습니다.' }
    ],
    related: ['oegugye-resume', 'resume-summary', 'yeongmun-cover-letter']
};
