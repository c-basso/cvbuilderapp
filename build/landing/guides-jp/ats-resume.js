module.exports = {
    slug: 'ats-resume',
    en: 'ats-friendly-resume',
    keyword: 'ATS レジュメ',
    tag: 'オンライン応募',
    navTitle: 'ATS対応レジュメ',
    title: 'ATS対応の英文レジュメの作り方：書式とキーワード',
    h1: 'ATS（採用管理システム）に強いレジュメの作り方',
    description: 'ATS（応募者追跡システム）がレジュメをどう読むか、読み取られやすい書式、求人票のキーワードの使い方、送信前チェックリストを解説。',
    cardText: '採用管理システムに正しく読まれる書式とキーワードのコツ。',
    lede: '外資系や大企業の多くはATS（Applicant Tracking System）で応募を管理しています。レジュメの文字を抽出し、キーワードで検索するため、読み取りやすさと単語選びが重要です。',
    tldr: ['テキストのPDF（指定があれば.docx）で提出。', '見出しは標準的な英語：Summary、Work Experience、Education、Skills。', '求人票の単語をそのまま使う。', '重要情報を画像やテキストボックスだけに入れない。'],
    sections: [
        { id: 'shikumi', h2: 'ATSの仕組み', html: `<p>ATSはファイルをテキスト化し、見出しで項目を判別して職種・期間・スキル・学歴を保存します。採用担当者は「Salesforce」AND「account manager」のように検索します。読み取れない書式や独自の見出しは検索から漏れる原因になります。</p>` },
        { id: 'rules', h2: '書式のルール', html: `<ul><li>標準フォント、画像ではない文字。</li><li>一般的な見出し名。</li><li>日付の書式を統一：<i>Jun 2021 – Mar 2024</i>。</li><li>シンプルな箇条書き。</li><li>大手の応募フォームには1カラムが安全。</li></ul>` },
        { id: 'check', h2: '送信前チェックリスト', html: `<ul><li>☐ PDFの文字を選択できるか</li><li>☐ 見出しは標準的か</li><li>☐ 求人の職種名が1回以上入っているか</li><li>☐ 主要スキル5つが入っているか</li><li>☐ ファイル名：Firstname-Lastname-Resume.pdf</li></ul>` }
    ],
    app: {
        h2: 'CV BuilderでATS対応レジュメを作る',
        intro: 'CV Builderはテキスト入りのPDFを出力し、見出しも標準的な英語なので読み取られやすい構成です。',
        screenshot: 4,
        steps: [['標準項目を入力', 'Summary、Work Experience、Education、Skills。'], ['キーワードを反映', 'Skillsと職歴の箇条書きに。'], ['シンプルなテンプレート', '1カラムが最も安全。'], ['PDFで確認', '文字を選択できるかテスト。']],
        outro: '職種ごとに版を分けましょう：<a href="/jp/guides/resume-ouboshaki-betsu/">応募先に合わせる方法</a>。'
    },
    faq: [
        { q: 'ATSとは？', a: '企業が応募書類を管理・検索するシステムです。' },
        { q: 'PDFはATSで読めますか？', a: 'テキストのPDFであれば多くのATSが読み取れます。Word指定があれば.docxで。' },
        { q: '2カラムはNG？', a: '読める場合も多いですが、1カラムが最も確実です。' }
    ],
    related: ['resume-ouboshaki-betsu', 'resume-template', 'resume-pdf-iphone']
};
