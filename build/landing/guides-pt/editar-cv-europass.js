module.exports = {
    slug: 'editar-cv-europass',
    en: null,
    keyword: 'editar cv europass',
    tag: 'Europass',
    navTitle: 'Editar CV Europass',
    title: 'Como editar o CV Europass (atualizar e alterar): passo a passo',
    h1: 'Como editar e atualizar o seu CV Europass',
    description: 'Como editar, atualizar ou alterar o curriculum vitae Europass: com conta, a partir do PDF Europass guardado, problemas comuns e a alternativa no iPhone.',
    cardText: 'Atualizar o CV Europass no portal oficial, voltar a carregar o PDF e resolver problemas comuns.',
    lede: 'Precisa de mudar a experiência, os contactos ou as línguas num CV Europass que já fez? A edição faz-se no editor oficial Europass da UE, que é gratuito. Veja os dois caminhos (com conta ou a partir do PDF guardado), os problemas mais comuns e quando compensa refazer o CV noutro formato.',
    tldr: ['O CV Europass edita-se no portal oficial Europass da UE, gratuitamente.', 'Com conta: abra o perfil, edite e gere um novo PDF.', 'Sem conta: carregue no editor o PDF Europass que guardou (se tiver sido criado no editor).', 'Um PDF comum (Word, digitalizado) não se edita no Europass: é preciso voltar a preencher.'],
    sections: [
        { id: 'com-conta', h2: 'Editar o CV Europass com conta (perfil Europass)', html: `<ol><li>Entre no portal Europass com a sua conta.</li><li>Abra o seu perfil ou a biblioteca de documentos e escolha o CV.</li><li>Altere as secções que quer atualizar: experiência, formação, línguas, contactos.</li><li>Gere e descarregue o novo PDF. Dê-lhe um nome com a data (ex.: CV-Europass-Nome-2026.pdf).</li></ol><p>A interface do portal muda de tempos a tempos; os nomes dos botões podem não ser exatamente estes.</p>` },
        { id: 'sem-conta', h2: 'Editar sem conta, a partir do PDF guardado', html: `<p>Os PDF criados no editor Europass guardam os dados do CV dentro do ficheiro. Por isso, normalmente pode abrir o editor, escolher a opção de importar ou carregar um CV Europass, selecionar o PDF e continuar a editar.</p><ul><li>Funciona com PDF descarregados do editor Europass.</li><li>CV muito antigos (do editor anterior) podem não ser importados por completo: confirme todas as secções.</li><li>Um PDF exportado do Word, uma digitalização ou uma foto não podem ser importados: terá de preencher de novo.</li></ul>` },
        { id: 'problemas', h2: 'Problemas comuns ao alterar o CV Europass', html: `<table><thead><tr><th>Problema</th><th>Solução</th></tr></thead><tbody><tr><td>O PDF não é aceite na importação</td><td>Não foi criado no editor Europass ou foi alterado depois; preencha de novo.</td></tr><tr><td>Esqueci a conta</td><td>Recupere o acesso na página de entrada do portal ou use o PDF guardado.</td></tr><tr><td>O CV ficou com muitas páginas</td><td>Remova experiências antigas e irrelevantes; resuma as atividades em resultados.</td></tr><tr><td>Editar no telemóvel é difícil</td><td>O editor funciona no browser do telemóvel, mas é mais confortável no computador.</td></tr></tbody></table>` },
        { id: 'quando-refazer', h2: 'Quando vale a pena trocar o Europass por outro CV', html: `<p>Se a candidatura não exige o formato Europass (empresas privadas, startups, funções criativas), um CV de 1–2 páginas com design próprio destaca-se mais do que o modelo europeu padrão. Para concursos públicos, bolsas e programas da UE que o pedem, mantenha o Europass.</p>` }
    ],
    appAfter: 3,
    app: {
        h2: 'Alternativa no iPhone: um CV moderno com o CV Builder',
        intro: 'O CV Builder não edita nem gera o ficheiro oficial Europass e, por agora, não importa PDF: os dados do seu Europass introduzem-se à mão (copiar e colar). Depois, o CV fica guardado e atualiza-se facilmente no telemóvel.',
        screenshot: 5,
        steps: [['Copie os dados do seu Europass à mão', 'Abra o PDF ao lado e copie contactos, experiência, formação e línguas (com nível QECR).'], ['Escolha um modelo clássico de uma coluna', 'Sóbrio, semelhante ao modelo europeu.'], ['Atualize quando quiser', 'Altere uma secção e o design ajusta-se sozinho.'], ['Descarregue o PDF', 'Guarde uma versão por candidatura.']],
        outro: 'A exportação em PDF faz parte do plano premium (com teste gratuito). Se o concurso exigir o formato Europass, use o editor oficial, que é gratuito.'
    },
    faq: [
        { q: 'Como editar o meu CV Europass?', a: 'No portal oficial Europass: entre na sua conta e edite o CV guardado, ou carregue no editor o PDF Europass que descarregou antes. Depois gere um novo PDF.' },
        { q: 'Editar o CV Europass é grátis?', a: 'Sim. O editor Europass da União Europeia é gratuito.' },
        { q: 'Posso editar um CV Europass em Word?', a: 'Não diretamente no Europass: um ficheiro Word ou PDF comum não é importado. Copie os dados para o editor Europass ou para outra ferramenta.' },
        { q: 'O CV Builder edita o CV Europass?', a: 'Não. Cria um CV próprio com as mesmas secções, fácil de atualizar no iPhone. Para o formato oficial, use o editor Europass.' },
        { q: 'Posso carregar o PDF do Europass no CV Builder?', a: 'Por agora não: a aplicação não importa PDF. Copie os dados do seu CV Europass para as secções da aplicação; depois só terá de atualizar o que mudar.' }
    ],
    related: ['curriculo-europass', 'curriculo-no-telemovel', 'modelos-de-curriculo']
};
