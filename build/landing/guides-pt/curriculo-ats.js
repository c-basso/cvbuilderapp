module.exports = {
    slug: 'curriculo-ats',
    en: 'ats-friendly-resume',
    keyword: 'currículo ATS',
    tag: 'Portais de emprego',
    navTitle: 'Currículo ATS',
    title: 'Currículo ATS: como passar nos sistemas de recrutamento',
    h1: 'Como fazer um currículo compatível com ATS',
    description: 'O que lê um sistema ATS, regras de formatação para o CV ser bem interpretado, como usar as palavras-chave do anúncio e checklist antes de enviar.',
    cardText: 'Formatação e palavras-chave para os portais lerem bem o seu CV.',
    lede: 'Muitas empresas recebem candidaturas através de um sistema de recrutamento (ATS). Este extrai o texto do CV e permite pesquisar por palavras-chave. O objetivo: facilitar a extração e conter as palavras certas.',
    tldr: ['PDF com texto real (ou .docx se pedido), nunca digitalizações.', 'Títulos padrão: Perfil, Experiência, Educação, Competências.', 'Palavras exatas do anúncio.', 'Nada de informação essencial só em imagens.'],
    sections: [
        { id: 'como-le', h2: 'Como um ATS lê o currículo', html: `<p>O sistema converte o ficheiro em texto, reconhece secções pelos títulos e guarda funções, datas, competências e formação. O recrutador filtra depois («Excel» E «controller»). Texto ilegível ou títulos criativos = fora dos resultados.</p>` },
        { id: 'regras', h2: 'Regras de formatação', html: `<ul><li>Fontes padrão, texto real.</li><li>Títulos convencionais.</li><li>Datas uniformes: <i>06/2021 – 03/2024</i>.</li><li>Listas simples.</li><li>Contactos no corpo do documento.</li><li>Em grandes portais, modelo de uma coluna.</li></ul>` },
        { id: 'palavras', h2: 'Usar bem as palavras-chave', html: `<ol><li>Copie o anúncio e marque função, competências, ferramentas, certificados.</li><li>Use a mesma redação.</li><li>Ponha a função no perfil.</li><li>Prove as competências na experiência.</li><li>Nada de palavras escondidas a branco.</li></ol>` },
        { id: 'checklist', h2: 'Checklist antes de enviar', html: `<ul><li>☐ O texto do PDF seleciona-se?</li><li>☐ Títulos padrão.</li><li>☐ A função aparece pelo menos uma vez.</li><li>☐ As 5 competências-chave estão lá.</li><li>☐ Ficheiro: Nome-Apelido-CV.pdf.</li></ul>` }
    ],
    app: {
        h2: 'Um currículo compatível com ATS no CV Builder',
        intro: 'O CV Builder exporta PDF com texto real e secções convencionais.',
        screenshot: 4,
        steps: [['Preencha as secções padrão', 'Resumo, Experiência de trabalho, Educação, Habilidades.'], ['Inclua as palavras-chave', 'Em Habilidades e na experiência.'], ['Escolha um modelo simples', 'Uma coluna é o mais seguro.'], ['Descarregue e teste o PDF', 'Tente selecionar o texto.']],
        outro: 'Uma versão por tipo de função: <a href="/pt/guias/adaptar-curriculo-a-vaga/">adaptar o currículo</a>.'
    },
    faq: [
        { q: 'O que é um currículo ATS?', a: 'Um CV com formatação e palavras-chave pensadas para ser lido corretamente pelos sistemas de recrutamento.' },
        { q: 'Os ATS leem PDF?', a: 'A maioria dos sistemas modernos lê PDF com texto real. Se pedirem Word, envie .docx.' },
        { q: 'CV em duas colunas passa nos ATS?', a: 'Muitas vezes sim, mas uma coluna é a opção mais segura.' }
    ],
    related: ['adaptar-curriculo-a-vaga', 'modelos-de-curriculo', 'curriculo-pdf-iphone']
};
