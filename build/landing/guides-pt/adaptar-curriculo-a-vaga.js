module.exports = {
    slug: 'adaptar-curriculo-a-vaga',
    en: 'tailor-resume-to-job-description',
    keyword: 'adaptar o currículo à vaga',
    tag: 'Estratégia',
    navTitle: 'Adaptar o currículo',
    title: 'Adaptar o currículo a uma oferta de emprego em 10 minutos',
    h1: 'Como adaptar o currículo a cada vaga',
    description: 'Método em 5 passos para adaptar o currículo a um anúncio: palavras-chave, ordem dos resultados, perfil profissional e várias versões do CV.',
    cardText: 'Uma rotina de 10 minutos para cada CV bater certo com o anúncio.',
    lede: 'Enviar o mesmo currículo para todo o lado é a causa mais comum do silêncio. Adaptar não é reescrever: 10 minutos chegam, a partir de uma boa versão base.',
    tldr: ['Um CV base e uma versão por tipo de função.', 'Use o título, as competências e as ferramentas do anúncio.', 'Reordene os resultados: os mais relevantes em cima.', 'Reescreva o perfil para essa função.'],
    sections: [
        { id: 'metodo', h2: 'A rotina em 5 passos', html: `<ol><li><b>Analise o anúncio:</b> título, 5 requisitos principais, ferramentas.</li><li><b>Atualize título e perfil</b> com esse título e o resultado mais relevante.</li><li><b>Reordene os resultados</b> e retire o que não interessa.</li><li><b>Ajuste as competências</b> com os termos exatos.</li><li><b>Confirme o tamanho</b> e exporte um novo PDF.</li></ol>` },
        { id: 'exemplo', h2: 'Antes e depois', html: `<div class="example"><b>O anúncio pede:</b> «gestão de projetos, Jira, metodologias ágeis, stakeholders».<br><b>Antes:</b> Trabalhei com vários departamentos em projetos.<br><b>Depois:</b> Geri projetos ágeis em Jira para 3 equipas multidisciplinares, coordenando 12 stakeholders de produto e vendas.</div>` },
        { id: 'versoes', h2: 'Quantas versões ter?', html: `<p>Uma por <em>tipo de função</em>, não por candidatura. Depois, pequenos ajustes por anúncio.</p>` }
    ],
    app: {
        h2: 'Vários currículos no CV Builder',
        intro: 'O CV Builder guarda vários currículos: uma versão por tipo de oferta, sempre no telemóvel.',
        screenshot: 5,
        steps: [['Crie o CV base', 'Preencha todas as secções uma vez.'], ['Crie uma versão por função', 'Vários currículos guardados.'], ['Ajuste «Resumo», habilidades e ordem', 'Com as palavras do anúncio.'], ['Exporte um novo PDF', 'Candidate-se em minutos.']],
        outro: 'Junte a cada versão uma <a href="/pt/guias/carta-de-apresentacao/">carta de apresentação</a> dirigida.'
    },
    faq: [
        { q: 'Tenho de adaptar o currículo a cada vaga?', a: 'Pelo menos um pouco. Alinhar título, competências e perfil com o anúncio melhora os filtros ATS e a impressão do recrutador.' },
        { q: 'Como guardo várias versões?', a: 'Uma por tipo de função. No CV Builder pode guardar vários currículos e exportar cada um em PDF.' },
        { q: 'Quanto tempo demora?', a: 'Cerca de 10 minutos com uma boa versão base.' }
    ],
    related: ['curriculo-ats', 'perfil-profissional-curriculo', 'carta-de-apresentacao']
};
