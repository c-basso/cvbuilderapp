module.exports = {
    slug: 'resume-pdf-iphone',
    en: 'save-resume-as-pdf-on-iphone',
    keyword: '履歴書 PDF iPhone',
    tag: 'iPhone',
    navTitle: 'レジュメをPDF保存',
    title: 'iPhoneで履歴書・レジュメをPDF保存する3つの方法',
    h1: 'iPhoneでレジュメをPDFにする方法',
    description: 'iPhoneで履歴書・レジュメをPDFに変換する3つの方法（アプリ、Pages/Word、プリント機能）と、メールや応募フォームでの送り方を解説。',
    cardText: 'iPhoneからPDFを作って送るための確実な3つの方法。',
    lede: '応募書類はPDFが基本。どの端末でも同じ見た目で表示されます。iPhoneでPDFを作る3つの方法と送り方を紹介します。',
    tldr: ['レジュメアプリ：「Download PDF」が最もきれい。', 'Pages / Word：共有 → 書き出し → PDF。', 'どのアプリでも：共有 → プリント → プレビューを2本指で拡大 → 「ファイル」に保存。', 'ファイル名は「Firstname-Lastname-Resume.pdf」。'],
    sections: [
        { id: 'naze', h2: 'なぜPDFで送るのか', html: `<ul><li>フォントやレイアウトが崩れない。</li><li>Wordがなくても開ける。</li><li>テキストのまま保存され、ATS（採用管理システム）でも読み取れる。</li></ul>` },
        { id: 'pages', h2: '方法2：Pages / Wordから', html: `<ol><li><b>Pages</b>：書類 → <i>•••</i> → <i>書き出す</i> → <i>PDF</i> → 「ファイルに保存」。</li><li><b>Word</b>：<i>•••</i> → <i>エクスポート</i> → PDF。</li></ol>` },
        { id: 'print', h2: '方法3：プリント機能を使う', html: `<ol><li>書類を開き、共有 → <i>プリント</i>。</li><li>プレビューを2本指で広げるとPDF表示に。</li><li>共有 → <i>「ファイル」に保存</i>。</li></ol>` }
    ],
    appAfter: 0,
    app: {
        h2: '方法1：CV BuilderからPDF出力（おすすめ）',
        intro: 'CV Builderで作ったレジュメなら、ワンタップで画面にも印刷にも適したPDFになります。',
        screenshot: 2,
        steps: [['レジュメを開く', '送りたい版を選択。'], ['「Preview PDF」', '余白とページ数を確認。'], ['「Download PDF」', 'テキスト入りの高品質PDFを作成。'], ['保存・共有', '「ファイル」、メール、メッセージで。']],
        outro: 'PDF出力を含む全機能は有料プラン（無料トライアルあり）です。入力前にアプリ内で条件をご確認ください。'
    },
    faq: [
        { q: 'iPhoneでレジュメをPDFにするには？', a: 'CV Builderなら「Download PDF」。Pages・Wordは書き出し→PDF。その他はプリント機能でPDF化して「ファイル」に保存します。' },
        { q: 'PDFはどこに保存されますか？', a: '「ファイル」アプリの「このiPhone内」またはiCloud Driveです。' },
        { q: 'PDFとWord、どちらで送る？', a: '指定がなければPDFが安全です。' }
    ],
    related: ['sumaho-resume-sakusei', 'eigo-cover-letter', 'ats-resume']
};
