module.exports = {
    slug: 'cv-resume-chigai',
    en: 'cv-vs-resume',
    keyword: 'CV レジュメ 違い',
    tag: '基礎知識',
    navTitle: 'CVとレジュメの違い',
    title: 'CVとレジュメ（Resume）の違いは？使い分けを解説',
    h1: 'CVとレジュメ（Resume）の違い',
    description: 'CVとレジュメの違いを、長さ・内容・使われる国ごとに解説。日本の履歴書・職務経歴書との対応関係と、どれを出すべきかも分かります。',
    cardText: '長さ・内容・国ごとの違いと、日本の書類との対応関係。',
    lede: '外資系の求人で「CVを送ってください」と言われて戸惑う方は多いはず。米国と英国・欧州で意味が違うのがポイントです。',
    tldr: ['米国・カナダ：resume＝1〜2ページの応募書類、CV＝学術向けの詳細な経歴書。', '英国・欧州・アジア：CV＝一般的な応募書類（resumeとほぼ同じ）。', '日本の職務経歴書に近いのはresume／CV。', '求人の表記と国に合わせる。'],
    sections: [
        { id: 'hikaku', h2: '比較表', html: `<table><thead><tr><th></th><th>Resume</th><th>学術CV</th></tr></thead><tbody><tr><td>長さ</td><td>1〜2ページ</td><td>制限なし</td></tr><tr><td>目的</td><td>面接につなげる</td><td>研究・学術経歴の全記録</td></tr><tr><td>カスタマイズ</td><td>応募ごと</td><td>ほぼしない</td></tr><tr><td>内容</td><td>Summary、職歴、スキル、学歴</td><td>＋論文、研究、教育歴、助成金</td></tr></tbody></table>` },
        { id: 'nihon', h2: '日本の書類との対応', html: `<ul><li><b>履歴書（JIS）</b>：英語圏に同等の定型様式はない。</li><li><b>職務経歴書</b>：内容はresume／CVに近い。詳しくは<a href="/jp/guides/shokumu-keirekisho/">職務経歴書の書き方</a>。</li></ul>` }
    ],
    app: {
        h2: 'CV Builderで両方を管理',
        intro: '1つのアプリで短いresumeと詳しいCVを並べて保存できます。',
        screenshot: 4,
        steps: [['用途ごとに作成', 'resumeとCVを別々に保存。'], ['Custom Sectionsを活用', 'Publications、Researchなど。'], ['テンプレートを選ぶ', '学術CVはクラシックなデザインが無難。'], ['それぞれPDF出力', 'ファイル名で区別。']]
    },
    faq: [
        { q: 'CVとレジュメは同じですか？', a: '英国・欧州ではほぼ同じ意味。米国ではCVは学術向けの長い経歴書を指します。' },
        { q: '外資系で「CV」と言われたら？', a: '多くの場合、1〜2ページの英文レジュメを送れば問題ありません。' },
        { q: '1つのアプリで両方作れますか？', a: 'はい。CV Builderは複数の書類を保存でき、自由項目も追加できます。' }
    ],
    related: ['eibun-rirekisho-kakikata', 'shokumu-keirekisho', 'gaishikei-tenshoku-resume']
};
