module.exports = {
    slug: 'resume-ouboshaki-betsu',
    en: 'tailor-resume-to-job-description',
    keyword: 'レジュメ 求人 合わせる',
    tag: '戦略',
    navTitle: '応募先に合わせる',
    title: 'レジュメを求人（Job Description）に合わせる方法：10分でできる5ステップ',
    h1: 'レジュメを応募先ごとに最適化する方法',
    description: '英文レジュメを求人票（Job Description）に合わせる5ステップ。キーワード、成果の並べ替え、Summaryの書き換え、複数バージョンの管理方法。',
    cardText: '10分でできる、求人ごとのレジュメ最適化ルーティン。',
    lede: '同じレジュメをすべての応募に使い回すのは、返事が来ない最大の原因です。良いベース版があれば、調整は10分で済みます。',
    tldr: ['ベース版＋職種ごとの版を用意。', '求人の職種名・スキル・ツールを反映。', '関連度の高い成果を上に。', 'Summaryを職種に合わせて書き換え。'],
    sections: [
        { id: 'steps', h2: '5ステップ', html: `<ol><li><b>求人票を分析</b>：職種名、主要要件5つ、ツール。</li><li><b>タイトルとSummaryを更新</b>。</li><li><b>成果を並べ替え</b>、関係ないものは削る。</li><li><b>Skillsを求人の表現に</b>。</li><li><b>長さを確認</b>して新しいPDFを出力。</li></ol>` },
        { id: 'rei', h2: 'ビフォー・アフター', html: `<div class="example"><b>求人の要件：</b> project management, Jira, agile, stakeholder management<br><b>Before：</b> Worked with various teams on projects.<br><b>After：</b> Managed agile delivery in Jira for 3 cross-functional teams, aligning 12 stakeholders across product and sales.</div>` }
    ],
    app: {
        h2: 'CV Builderで複数バージョンを管理',
        intro: 'CV Builderは複数のレジュメを保存できるので、職種ごとの版をスマホで管理できます。',
        screenshot: 5,
        steps: [['ベース版を作成', '全項目を一度入力。'], ['職種ごとに版を作成', '複数保存。'], ['Summary・Skills・並び順を調整', '求人の言葉で。'], ['新しいPDFを出力', 'すぐ応募。']]
    },
    faq: [
        { q: '応募ごとに変えるべき？', a: '少なくとも職種名、Summary、Skillsは合わせると、ATSでも採用担当者にも効果的です。' },
        { q: '何バージョン必要？', a: '応募ごとではなく職種タイプごとに1つが目安です。' },
        { q: '時間はどれくらい？', a: '良いベース版があれば約10分です。' }
    ],
    related: ['ats-resume', 'jiko-pr-summary', 'eigo-cover-letter']
};
