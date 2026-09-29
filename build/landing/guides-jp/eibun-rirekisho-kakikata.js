module.exports = {
    slug: 'eibun-rirekisho-kakikata',
    keyword: '英文履歴書 書き方',
    tag: '書き方',
    navTitle: '英文履歴書の書き方',
    title: '英文履歴書（英文レジュメ）の書き方と例文【2026年版】',
    h1: '英文履歴書（レジュメ）の書き方：日本の履歴書との違いと例文',
    description: '英文履歴書の書き方を解説。日本の履歴書との違い、項目と順番、使える動詞、学歴・職歴の英語表記、NG例まで。スマホで作る方法も紹介。',
    cardText: '日本の履歴書との違い、構成、英語表記と例文をまとめて。',
    lede: '外資系企業や海外就職では英文履歴書（レジュメ）が必要です。日本の履歴書とは考え方がまったく違い、「決まった様式に埋める」のではなく「成果を売り込む」書類です。',
    tldr: ['様式は自由、1〜2ページ、新しい順（逆時系列）。', '写真・年齢・性別・生年月日・家族構成は書かない。', '各職歴は動詞で始め、数字で成果を示す。', '日本語はNative、英語はTOEIC/IELTSのスコアなど具体的に。'],
    sections: [
        { id: 'chigai', h2: '日本の履歴書との違い', html: `<table><thead><tr><th></th><th>日本の履歴書</th><th>英文レジュメ</th></tr></thead><tbody><tr><td>様式</td><td>JIS規格など定型</td><td>自由（デザイン可）</td></tr><tr><td>順番</td><td>古い順</td><td>新しい順</td></tr><tr><td>写真・年齢</td><td>記載する</td><td>記載しない</td></tr><tr><td>内容</td><td>経歴の事実</td><td>成果・実績のアピール</td></tr><tr><td>自己PR</td><td>別欄</td><td>冒頭のSummary</td></tr></tbody></table>` },
        { id: 'koumoku', h2: '項目と順番', html: `<ol><li>Name / Contact（氏名、電話+81、メール、都市、LinkedIn）</li><li>Summary（2〜4文）</li><li>Work Experience（新しい順）</li><li>Education</li><li>Skills / Languages / Certifications</li></ol>` },
        { id: 'hyouki', h2: '英語表記のポイント', html: `<ul><li><b>学位</b>：学士 Bachelor of Arts/Science in ～、修士 Master of ～。</li><li><b>役職</b>：課長 Manager、主任 Senior Associate など、直訳より実態に合う表現を。</li><li><b>語学</b>：Japanese (Native), English (Business level, TOEIC 860)。</li><li><b>日付</b>：Apr 2019 – Mar 2023。</li></ul><div class="example"><b>例：</b> Reduced procurement costs by 15% (¥18M per year) by renegotiating contracts with 8 key suppliers.</div><p>使える動詞：Led, Managed, Launched, Increased, Reduced, Implemented, Negotiated, Delivered。</p>` },
        { id: 'ng', h2: 'よくあるNG', html: `<ul><li>日本の履歴書をそのまま翻訳する。</li><li>「担当しました」だけで成果がない。</li><li>写真や生年月日を入れる。</li><li>スペルミス（必ず見直す）。</li></ul>` }
    ],
    app: {
        h2: 'CV Builderで英文レジュメを作る',
        intro: 'アプリの表示は英語なので、各項目名がそのまま英文レジュメの見出しになります。',
        screenshot: 2,
        steps: [['Contacts・Summaryを英語で入力', '冒頭で強みを伝えます。'], ['Work Experience・Educationを入力', '新しい順に、成果を数字で。'], ['Skills・Languages・Certifications', 'TOEICスコアなども。'], ['シンプルなテンプレートを選択', '写真なしの版を使用。'], ['Download PDF', '「Firstname-Lastname-Resume.pdf」で保存。']],
        outro: 'カバーレターも作成しましょう：<a href="/jp/guides/eigo-cover-letter/">英文カバーレターの書き方</a>。'
    },
    faq: [
        { q: '英文履歴書に写真は必要ですか？', a: '米国・英国などでは不要で、むしろ入れないのが一般的です。' },
        { q: '英文履歴書は何枚が目安？', a: '1〜2ページ。経験が浅い場合は1ページにまとめます。' },
        { q: 'スマホで英文履歴書を作れますか？', a: 'はい。CV Builderなら英語の項目に沿って入力し、PDFで出力できます。' }
    ],
    related: ['gaishikei-tenshoku-resume', 'jiko-pr-summary', 'eigo-cover-letter']
};
