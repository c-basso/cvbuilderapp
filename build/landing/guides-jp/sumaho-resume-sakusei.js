module.exports = {
    slug: 'sumaho-resume-sakusei',
    en: 'how-to-make-a-resume-on-iphone',
    keyword: 'スマホ レジュメ 作成',
    tag: 'iPhone',
    navTitle: 'スマホでレジュメ作成',
    title: 'スマホ（iPhone）で英文レジュメを作る方法【手順ガイド】',
    h1: 'iPhoneで英文レジュメを15分で作る方法',
    description: 'スマホで英文レジュメを作る手順：事前に準備すること、アプリの選び方、構成とレイアウト、PDF保存までを解説。今日すぐ応募できます。',
    cardText: 'パソコンなしで、白紙からPDFまで最短ルートで。',
    lede: '英文レジュメはスマホだけで十分作れます。準備する情報、構成の基本、どこでも同じように表示されるPDFの作り方を順に解説します。',
    tldr: ['メモやPagesではなくレジュメ作成アプリを使うと、フォント・余白・レイアウトを自動で整えてくれます。', '構成：連絡先 → Summary → 職歴 → 学歴 → スキル。', '1〜2ページに収め、シンプルなテンプレートを選ぶ。', 'PDFで保存し「Firstname-Lastname-Resume.pdf」と命名して送付。'],
    sections: [
        { id: 'junbi', h2: '始める前に用意する6つの情報', html: `<ol><li><b>連絡先</b>：氏名（ローマ字）、都市、電話（+81表記）、メール。</li><li><b>職歴</b>：会社名、役職、在籍期間（月・年）。</li><li><b>各職歴の成果2〜4つ</b>：数字入りが理想（「売上を20%向上」など）。</li><li><b>学歴</b>：大学名、学位、卒業年。</li><li><b>スキル</b>：求人票に出てくるスキル6〜10個、語学、資格（TOEICなど）。</li><li><b>リンク</b>：LinkedInやポートフォリオ。</li></ol>` },
        { id: 'kousei', h2: '英文レジュメの基本構成', html: `<ol><li><b>Header</b>：氏名、希望職種、連絡先。</li><li><b>Summary</b>：2〜4文の自己紹介 — <a href="/jp/guides/jiko-pr-summary/">例文</a>。</li><li><b>Work Experience</b>：新しい順、動詞で始める箇条書き3〜5個。</li><li><b>Education</b>：学生・新卒は職歴より上に。</li><li><b>Skills / Languages</b>：日本語はNative、英語は具体的なレベルを。</li></ol><div class="example"><b>弱い例：</b> Responsible for social media.<br><b>強い例：</b> Grew Instagram followers from 4,000 to 19,000 in 8 months with a weekly video series.</div>` },
        { id: 'format', h2: 'レイアウトのルール', html: `<ul><li>職歴10年未満なら1ページ、最大2ページ。</li><li>フォントは1種類、日付の書式を統一（<i>Mar 2022 – Present</i>）。</li><li>写真・年齢・性別・生年月日は入れない（英語圏の慣習）。</li><li>提出は<b>PDF</b>で。</li></ul>` }
    ],
    app: {
        h2: 'CV BuilderでiPhoneからレジュメを作る',
        intro: 'CV Builderは項目ごとにガイドし、レイアウトは自動。アプリの表示は英語ですが、英文レジュメ作成にはむしろ自然です。',
        screenshot: 5,
        steps: [['CV Builderをダウンロード', 'App Storeで無料（ストア名「履歴書作成 CVメーカー」）。'], ['基本項目を入力', 'Intro、Summary、Photo（英文レジュメでは通常不要）、Contacts、Education、Work Experience。'], ['追加項目', 'Skills、Languages、Certifications、References、Links & QR codes、Custom Sections。'], ['テンプレートを選ぶ', '100以上から選び「Preview PDF」で確認。'], ['PDFをダウンロード', '「Download PDF」で「ファイル」に保存、またはメールで送信。']],
        outro: '応募先が複数なら職種ごとに版を分けましょう：<a href="/jp/guides/resume-ouboshaki-betsu/">応募先に合わせる方法</a>。'
    },
    faq: [
        { q: 'スマホだけでレジュメは作れますか？', a: 'はい。レジュメ作成アプリなら項目を入力するだけでレイアウトが整い、PDFで出力できます。' },
        { q: '日本語の履歴書も作れますか？', a: 'CV Builderは英文レジュメ・CV形式向けで、JIS規格の履歴書様式には対応していません。' },
        { q: '作成にかかる時間は？', a: '職歴や学歴を事前に準備しておけば15〜30分ほどです。' }
    ],
    related: ['resume-pdf-iphone', 'eibun-rirekisho-kakikata', 'rirekisho-app']
};
