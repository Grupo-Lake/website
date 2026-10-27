/**
 * Conteúdo pt-BR do site. `en.ts` precisa satisfazer o mesmo tipo (Dictionary),
 * então qualquer chave nova aqui exige tradução em inglês.
 * Títulos com ênfase em itálico usam o formato { a, em, b } → "a <em>em</em> b".
 */
const pt = {
  meta: {
    siteTitle: "Grupo Lake",
    defaultDescription:
      "O Grupo Lake alavanca negócios com casa de software própria, investimentos com tese definida e gestão ativa ao lado de empreendedores. São Paulo, SP.",
    keywords: [
      "Grupo Lake",
      "casa de software",
      "desenvolvimento de software",
      "investimentos",
      "aceleração de negócios",
      "gestão estratégica",
      "Lake Finance",
      "São Paulo",
    ],
    home: {
      title: "Grupo Lake — software, investimentos e aceleração de negócios",
      description:
        "O Grupo Lake alavanca negócios com casa de software própria, investimentos com tese definida e gestão ativa ao lado de empreendedores. São Paulo, SP.",
      ogAlt: "Grupo Lake — construindo o futuro através de tecnologia e parcerias sólidas",
    },
    software: {
      title: "Casa de software",
      description:
        "Produto, design, engenharia, QA e IA aplicada sob o mesmo teto. Sites, plataformas e aplicativos que viram ativo do seu negócio. Inicie um projeto.",
      ogAlt: "Casa de software do Grupo Lake — software que vira ativo do seu negócio",
    },
    careers: {
      title: "Carreiras",
      description:
        "Vagas em engenharia, produto, design e negócios no Grupo Lake. Times pequenos, autonomia real e impacto direto nas empresas do portfólio. Candidate-se.",
      ogAlt: "Carreiras no Grupo Lake — construa negócios, não só software",
    },
    ri: {
      title: "Relações com investidores",
      description:
        "Portal de relações com investidores do Grupo Lake: resultados, comunicados ao mercado, governança corporativa e agenda do investidor. Em breve.",
    },
    privacy: {
      title: "Política de privacidade",
      description:
        "Como o Grupo Lake coleta, usa, armazena e protege dados pessoais em conformidade com a LGPD (Lei 13.709/2018), e como exercer seus direitos de titular.",
    },
    terms: {
      title: "Termos de uso",
      description:
        "Termos e condições de uso do site institucional do Grupo Lake: propriedade intelectual, links externos, responsabilidades e legislação aplicável.",
    },
    security: {
      title: "Segurança da informação",
      description:
        "Como o Grupo Lake protege dados e pagamentos: criptografia, controle de acesso, provedor de pagamentos certificado e como reportar vulnerabilidades.",
    },
    refund: {
      title: "Política de reembolso",
      description:
        "Regras de cancelamento, direito de arrependimento de 7 dias e reembolso dos serviços do Grupo Lake, conforme o Código de Defesa do Consumidor.",
    },
    blog: {
      title: "Blog e notícias",
      description:
        "Notícias do Grupo Lake e artigos sobre software, finanças pessoais, Open Finance, IA aplicada e proteção de dados (LGPD), escritos pelo time.",
    },
    notFound: {
      title: "Página não encontrada",
      description: "A página que você procura não existe ou foi movida.",
    },
  },

  blog: {
    eyebrow: "Blog e notícias",
    title: "Notícias e artigos do grupo.",
    lead: "Novidades das empresas do Grupo Lake e conteúdo sobre software, finanças pessoais, Open Finance, IA aplicada e proteção de dados.",
    listLabel: "Publicações",
    readMore: "Ler artigo",
    back: "Voltar ao blog",
    minutes: "min de leitura",
    by: "Por",
    published: "Publicado em",
    kinds: { news: "Notícia", article: "Artigo" },
    categories: { product: "Produto", education: "Educação", software: "Software", group: "Grupo" },
    cta: {
      title: "Quer conversar sobre software, investimento ou parceria?",
      button: "Fale com o grupo",
    },
  },

  nav: {
    links: {
      grupo: "O grupo",
      software: "Casa de software",
      portfolio: "Portfólio",
      carreiras: "Carreiras",
      blog: "Blog",
    },
    contact: "Contato",
    talkToGroup: "Fale com o grupo",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    mainNav: "Navegação principal",
    skipToContent: "Pular para o conteúdo",
    language: "Idioma",
    homeLabel: "página inicial",
    breadcrumbHome: "Início",
  },

  footer: {
    tagline:
      "Gestão estratégica, inovação e aceleração de negócios. Construindo o futuro através de investimentos e parcerias sólidas.",
    groupTitle: "Grupo",
    softwareTitle: "Casa de software",
    contactTitle: "Contato",
    group: { about: "Quem somos", leadership: "Liderança", portfolio: "Portfólio", careers: "Carreiras" },
    software: { services: "Serviços", cases: "Projetos", start: "Iniciar um projeto" },
    blog: "Blog e notícias",
    press: "Imprensa",
    privacy: "Privacidade (LGPD)",
    terms: "Termos de uso",
    security: "Segurança",
    refund: "Reembolso",
    legalNav: "Links legais",
    social: "Redes sociais",
  },

  common: {
    comingSoon: "Em breve",
    opensInNewTab: "(abre em nova aba)",
    lgpdNote: "Seus dados são tratados conforme a LGPD e nossa",
    privacyPolicy: "política de privacidade",
    faqEyebrow: "Perguntas frequentes",
    backHome: "Voltar para a página inicial",
    notFoundText: "A página que você procura não existe ou foi movida.",
  },

  forms: {
    name: "Nome",
    namePlaceholder: "Seu nome completo",
    email: "E-mail",
    emailPlaceholder: "voce@empresa.com.br",
    company: "Empresa",
    companyPlaceholder: "Nome da empresa",
    message: "Mensagem",
    messagePlaceholder: "Conte em poucas linhas o que você está construindo (opcional)",
    institution: "Instituição",
    institutionPlaceholder: "Opcional",
    sending: "Enviando…",
    success: "Mensagem enviada. Retornamos em até dois dias úteis.",
    successMailing: "Cadastro realizado. Você receberá nossos comunicados por e-mail.",
    errorGeneric: "Não foi possível enviar agora. Tente novamente ou escreva para",
    errorInvalid: "Revise os campos destacados.",
    errors: {
      name: "Informe seu nome.",
      email: "Informe um e-mail válido.",
      topic: "Escolha um assunto.",
    },
  },

  home: {
    hero: {
      eyebrow: "Gestão estratégica · Inovação · Aceleração",
      title: { a: "Construindo o futuro através de", em: "tecnologia", b: "e parcerias sólidas." },
      lead: "O Grupo Lake é um grupo estratégico que alavanca negócios por meio de sua casa de software, de investimentos com tese definida e de gestão ativa ao lado dos empreendedores.",
      ctaPrimary: "Conheça o grupo",
      ctaSecondary: "Casa de software",
      media: "Foto / vídeo institucional",
    },
    stats: {
      label: "O Grupo Lake em números",
      products: "produtos digitais entregues",
      companies: "empresas no portfólio",
      revenue: "receita consolidada",
      founded: "ano de fundação",
    },
    group: {
      eyebrow: "Quem somos",
      title: { a: "Três frentes integradas.", em: "Uma", b: "tese de valor." },
      p1: "Acreditamos que a tecnologia é a principal alavanca de crescimento de um negócio. Por isso, o Grupo Lake atua como a marca-mãe de um ecossistema integrado: combinamos capacidade própria de desenvolvimento de software com capital, ventures proprietárias e gestão estratégica.",
      p2: "Atuamos como sócios e construtores: concebemos plataformas como Lake Finance e Vocato Career, aceleramos empresas parceiras e acompanhamos cada iniciativa com governança, metas claras e prestação de contas periódica.",
      software: {
        eyebrow: "01 — Vertente principal",
        title: "Casa de software",
        desc: "Produto, design, engenharia e qualidade sob o mesmo teto. Desenvolvemos plataformas, aplicativos e sites que se tornam ativos estratégicos — para as empresas do grupo e para clientes.",
        cta: "Conheça a casa de software",
        caps: [
          { icon: "layout-template", t: "Produto & design" },
          { icon: "code-xml", t: "Engenharia" },
          { icon: "sparkles", t: "IA aplicada" },
          { icon: "shield-check", t: "Testes & QA" },
        ],
      },
      invest: {
        n: "02",
        title: "Investimentos",
        desc: "Participações em negócios onde a tecnologia multiplica valor, com tese de investimento, critérios de alocação e acompanhamento periódico.",
      },
      accel: {
        n: "03",
        title: "Aceleração",
        desc: "Gestão estratégica ao lado dos fundadores: posicionamento, operação, canais e finanças — do primeiro cliente à escala.",
      },
    },
    portfolio: {
      eyebrow: "Portfólio & parceiros",
      title: "Negócios que crescem com o grupo.",
      lakeFinance: {
        name: "Lake Finance",
        title: { a: "Clareza financeira,", em: "com IA", b: "." },
        desc: "Consultor financeiro pessoal que antecipa problemas, sugere soluções e automatiza a gestão do dinheiro via Open Finance.",
        cta: "Visitar site",
        status: "Em versão beta",
        shot: "Screenshot — Lake Finance",
      },
      partners: [
        {
          key: "vocato",
          badge: "Negócio do grupo",
          name: "Vocato Career",
          desc: "Plataforma de inteligência e orientação vocacional baseada no modelo RIASEC e dados ocupacionais O*NET.",
          img: "Imagem — Vocato Career",
        },
        {
          key: "tripSide",
          badge: "Parceiro",
          name: "Trip Side",
          desc: "Rede de revendedores autorizados com portal B2B para cadastro de lojas e pedidos em grade fechada.",
          img: "Imagem — Trip Side",
        },
        {
          key: "haze",
          badge: "Parceiro · QA",
          name: "Haze",
          desc: "Aplicativo de relacionamento. A casa de software do grupo conduziu toda a frente de testes de software.",
          img: "Imagem — Haze App",
        },
      ],
      partnerCta: "Conhecer",
    },
    cases: {
      eyebrow: "Feito pela casa de software",
      title: "Projetos entregues.",
      all: "Todos os projetos",
      shot: "Screenshot do site",
      items: [
        {
          key: "opam",
          name: "OPAM Karatê",
          domain: "karateopam.com.br",
          tag: "Site institucional",
          desc: "Presença digital da Organização Paulista de Karatê: eventos, filiados e comunicação oficial.",
        },
        {
          key: "codec",
          name: "Congresso CODEC",
          domain: "congressocodec.com.br",
          tag: "Plataforma de evento",
          desc: "Site do congresso com programação, palestrantes e inscrições reunidos em um só lugar.",
        },
      ],
    },
    leadership: {
      eyebrow: "Liderança",
      quote: {
        a: "“Construímos negócios do jeito que construímos software: com método, transparência e visão de",
        em: "longo prazo",
        b: ".”",
      },
      role: "Founder",
      portrait: "Retrato — Jefferson Silva",
    },
    governance: {
      eyebrow: "Governança & ESG",
      title: "Estruturados desde já para o mercado de capitais.",
      lead: "Transparência, controles internos e prestação de contas fazem parte da operação — não são uma etapa futura. Adotamos as boas práticas de governança corporativa como padrão para todo o grupo.",
      items: [
        { icon: "scale", t: "Conselho de administração", d: "Composição, comitês e regimentos internos." },
        { icon: "file-check", t: "Código de conduta", d: "Princípios éticos que orientam todas as empresas do grupo." },
        { icon: "shield-check", t: "Compliance & LGPD", d: "Políticas de privacidade, segurança da informação e integridade." },
        { icon: "leaf", t: "ESG", d: "Compromissos ambientais, sociais e de governança." },
        { icon: "megaphone", t: "Canal de ética", d: "Relatos confidenciais, independentes e anônimos." },
      ],
    },
    press: {
      eyebrow: "Imprensa",
      title: "Notícias do grupo.",
      kit: "Kit de imprensa",
      all: "Ver todas as publicações",
    },
    careers: {
      eyebrow: "Carreiras",
      title: "Construa negócios com a gente.",
      lead: "Engenharia, produto, design e negócios. Times pequenos, autonomia real e impacto direto no portfólio.",
      cta: "Ver vagas",
    },
    contact: {
      eyebrow: "Contato",
      title: { a: "Tem um negócio pronto para", em: "acelerar", b: "?" },
      lead: "Software, capital ou gestão — conte o que você está construindo. Retornamos em até dois dias úteis.",
      location: "São Paulo, SP",
      topicLabel: "Assunto",
      topics: ["Casa de software", "Investimento", "Parceria", "Imprensa"],
      submit: "Enviar mensagem",
    },
    faq: {
      title: "O que você precisa saber sobre o Grupo Lake.",
      items: [
        {
          q: "O que é o Grupo Lake?",
          a: "O Grupo Lake é um grupo estratégico brasileiro, com sede em São Paulo, que alavanca negócios por meio de três frentes integradas: uma casa de software própria, investimentos com tese definida e aceleração com gestão ativa ao lado dos empreendedores.",
        },
        {
          q: "O que faz a casa de software do Grupo Lake?",
          a: "A casa de software reúne produto, design, engenharia, testes & QA e IA aplicada. Desenvolve sites, plataformas web e aplicativos iOS e Android para as empresas do grupo e para clientes externos.",
        },
        {
          q: "Quais empresas fazem parte do portfólio?",
          a: "O ecossistema do Grupo Lake inclui ventures proprietárias como a Lake Finance (consultor financeiro pessoal com IA e Open Finance em versão beta) e a Vocato Career (orientação e inteligência de carreiras com RIASEC e O*NET), além de parceiros como a Trip Side e o aplicativo Haze.",
        },
        {
          q: "Como o Grupo Lake investe e acelera negócios?",
          a: "O grupo atua como sócio: faz participações em negócios onde a tecnologia multiplica valor, com tese de investimento e critérios de alocação claros, e apoia os fundadores em posicionamento, operação, canais e finanças, com governança e prestação de contas periódica.",
        },
        {
          q: "Como apresentar um negócio ou iniciar um projeto?",
          a: "Preencha o formulário de contato desta página ou escreva para jefferson.laurindo@grupolake.com.br. O time retorna em até dois dias úteis com os próximos passos.",
        },
      ],
    },
  },

  software: {
    breadcrumb: "Casa de software",
    hero: {
      eyebrow: "Casa de software · Grupo Lake",
      title: { a: "Software que vira", em: "ativo", b: "do seu negócio." },
      lead: "Do diagnóstico à operação: produto, design, engenharia e qualidade com o rigor de quem também investe e opera os negócios que constrói.",
      ctaPrimary: "Iniciar um projeto",
      ctaSecondary: "Ver projetos",
    },
    services: {
      eyebrow: "O que fazemos",
      title: "Um time completo, sob o mesmo teto.",
      lead: "Montamos squads multidisciplinares por projeto, com um responsável único pela entrega e acompanhamento contínuo após o lançamento.",
      items: [
        { icon: "compass", t: "Estratégia de produto", d: "Diagnóstico, priorização e roadmap orientados a resultado de negócio." },
        { icon: "layout-template", t: "UX & UI design", d: "Pesquisa, arquitetura de informação e interfaces com sistema de design próprio." },
        { icon: "monitor-smartphone", t: "Sites & plataformas", d: "Sites institucionais, portais B2B e plataformas de eventos de alta performance." },
        { icon: "smartphone", t: "Aplicativos", d: "Apps nativos e multiplataforma para iOS e Android." },
        { icon: "shield-check", t: "Testes & QA", d: "Estratégia de testes, automação e garantia de qualidade ponta a ponta." },
        { icon: "sparkles", t: "IA aplicada", d: "Modelos preditivos, copilotos e automações integradas ao produto." },
      ],
    },
    process: {
      eyebrow: "Como trabalhamos",
      title: "Método em cinco etapas.",
      steps: [
        { t: "Descoberta", d: "Imersão no negócio, objetivos e métricas de sucesso." },
        { t: "Design", d: "Fluxos, protótipos e sistema visual validados com usuários." },
        { t: "Engenharia", d: "Desenvolvimento em ciclos curtos, com entregas a cada sprint." },
        { t: "Qualidade", d: "Testes funcionais, automatizados e de regressão em todo o ciclo." },
        { t: "Evolução", d: "Monitoramento, suporte e roadmap contínuo após o lançamento." },
      ],
    },
    cases: {
      eyebrow: "Projetos",
      title: "Entregas recentes.",
      items: [
        {
          key: "lakeFinance",
          name: "Lake Finance",
          domain: "finance.grupolake.com.br",
          img: "Screenshot — Lake Finance",
          tags: ["Produto próprio", "IA"],
          desc: "Consultor financeiro pessoal com IA preditiva, copiloto em linguagem natural e integração via Open Finance. Produto, design e engenharia feitos pela casa.",
          cta: "Visitar",
        },
        {
          key: "haze",
          name: "Haze",
          domain: "App iOS · Android",
          img: "Telas — Haze App",
          tags: ["Testes & QA", "Aplicativo"],
          desc: "Aplicativo de relacionamento. Conduzimos toda a frente de testes de software — planejamento, casos de teste, automação e regressão.",
          cta: "Conhecer",
        },
        {
          key: "opam",
          name: "OPAM Karatê",
          domain: "karateopam.com.br",
          img: "Screenshot — OPAM",
          tags: ["Site institucional"],
          desc: "Site oficial da Organização Paulista de Karatê, com eventos, filiados e comunicação institucional.",
          cta: "Visitar",
        },
        {
          key: "codec",
          name: "Congresso CODEC",
          domain: "congressocodec.com.br",
          img: "Screenshot — CODEC",
          tags: ["Plataforma de evento"],
          desc: "Plataforma do congresso com programação, palestrantes e inscrições em uma experiência única.",
          cta: "Visitar",
        },
      ],
    },
    why: {
      title: "Por que o Grupo Lake",
      items: [
        { t: "Visão de sócio", d: "Também investimos e operamos negócios. Pensamos no produto como ativo, não como entrega pontual." },
        { t: "Qualidade desde o início", d: "Testes e QA fazem parte de cada sprint, não de uma fase final." },
        { t: "Um responsável, do início ao fim", d: "Ponto único de contato e relatórios periódicos de evolução." },
      ],
    },
    faq: {
      title: "Dúvidas sobre a casa de software.",
      items: [
        {
          q: "Que tipo de projeto a casa de software do Grupo Lake desenvolve?",
          a: "Sites institucionais, portais B2B, plataformas de eventos, aplicativos nativos e multiplataforma para iOS e Android, além de soluções de IA aplicada como modelos preditivos, copilotos e automações.",
        },
        {
          q: "Como funciona o processo de desenvolvimento?",
          a: "Em cinco etapas: descoberta, design, engenharia, qualidade e evolução. O desenvolvimento acontece em ciclos curtos, com entregas a cada sprint e testes em todo o ciclo.",
        },
        {
          q: "É possível contratar apenas testes de software e QA?",
          a: "Sim. A casa de software conduz frentes completas de testes — planejamento, casos de teste, automação e regressão —, como no aplicativo Haze.",
        },
        {
          q: "Em quanto tempo recebo um retorno?",
          a: "Respondemos em até dois dias úteis com os próximos passos e uma proposta de diagnóstico.",
        },
      ],
    },
    contact: {
      eyebrow: "Iniciar um projeto",
      title: { a: "Conte o que você quer", em: "construir", b: "." },
      lead: "Respondemos em até dois dias úteis com os próximos passos e uma proposta de diagnóstico.",
      kindLabel: "Tipo de projeto",
      kinds: ["Site institucional", "Aplicativo", "Plataforma web", "Testes & QA", "IA aplicada"],
      submit: "Enviar briefing",
    },
  },

  careers: {
    breadcrumb: "Carreiras",
    hero: {
      eyebrow: "Carreiras no Grupo Lake",
      title: { a: "Construa negócios,", em: "não só", b: "software." },
      lead: "Times pequenos, autonomia real e contato direto com os produtos e empresas do portfólio.",
      cta: "Ver vagas abertas",
      photos: ["Foto do time", "Escritório", "Evento"],
    },
    values: {
      eyebrow: "Como trabalhamos",
      title: "O que esperamos — e oferecemos.",
      items: [
        { n: "01", t: "Dono do resultado", d: "Cada pessoa responde por uma parte clara do negócio — e tem autonomia para decidir." },
        { n: "02", t: "Qualidade sem atalho", d: "Fazemos bem feito na primeira vez. Revisão e testes são parte do trabalho." },
        { n: "03", t: "Transparência", d: "Metas, números e decisões compartilhados com o time." },
        { n: "04", t: "Longo prazo", d: "Construímos empresas e carreiras para durar." },
      ],
      perksLabel: "Benefícios",
      perks: [
        { icon: "heart-pulse", t: "Plano de saúde" },
        { icon: "laptop", t: "Equipamento de trabalho" },
        { icon: "house", t: "Modelo híbrido" },
        { icon: "graduation-cap", t: "Auxílio educação" },
        { icon: "trending-up", t: "Participação nos resultados" },
        { icon: "calendar-heart", t: "Day off no aniversário" },
      ],
    },
    jobs: {
      eyebrow: "Vagas abertas",
      one: "posição aberta.",
      many: "posições abertas.",
      filterLabel: "Filtrar vagas por área",
      all: "Todas",
      areas: ["Engenharia", "Design", "Produto", "Corporativo"],
      applySubject: "Candidatura",
      apply: "Candidatar-se",
      items: [
        { t: "Engenheiro(a) de software pleno — React / Node", area: "Engenharia", loc: "São Paulo · Híbrido", type: "CLT" },
        { t: "Analista de QA — automação mobile", area: "Engenharia", loc: "Remoto", type: "CLT" },
        { t: "Product designer sênior", area: "Design", loc: "São Paulo · Híbrido", type: "PJ" },
        { t: "Product manager — Lake Finance", area: "Produto", loc: "São Paulo · Híbrido", type: "CLT" },
        { t: "Analista de relações com investidores", area: "Corporativo", loc: "São Paulo · Presencial", type: "CLT" },
      ],
      note: "Vagas ilustrativas. Não encontrou a sua? Envie seu perfil para",
    },
    process: {
      eyebrow: "Processo seletivo",
      title: "Simples e transparente.",
      items: [
        { n: "01", t: "Inscrição", d: "Envie seu perfil pela vaga ou por e-mail." },
        { n: "02", t: "Conversa inicial", d: "30 minutos com o time de pessoas." },
        { n: "03", t: "Etapa técnica", d: "Desafio prático ou entrevista com a liderança." },
        { n: "04", t: "Proposta", d: "Retorno para todas as pessoas participantes." },
      ],
    },
  },

  ri: {
    breadcrumb: "Investidores",
    soonBanner:
      "O portal de relações com investidores está em construção. As informações abaixo são ilustrativas e serão publicadas conforme o calendário oficial.",
    hero: {
      eyebrow: "Relações com investidores",
      title: { a: "Transparência como", em: "fundamento", b: "." },
      lead: "Resultados, comunicados, governança e agenda do Grupo Lake, reunidos para acionistas, analistas e o mercado.",
      ticker: "LAKE3 · B3 · Novo Mercado",
      session: "Pregão",
      price: "R$ 00,00",
      change: "+0,00%",
      stats: [
        { l: "Valor de mercado", v: "R$ 0,0B" },
        { l: "Ações", v: "000,0M" },
        { l: "Free float", v: "00%" },
      ],
      footnote: "Cotação com atraso de 15 minutos. Dados ilustrativos.",
    },
    subnav: {
      label: "Seções de relações com investidores",
      results: "Central de resultados",
      facts: "Fatos relevantes",
      agenda: "Agenda",
      governance: "Governança",
      contact: "Fale com RI",
    },
    results: {
      eyebrow: "Central de resultados",
      title: "Resultados trimestrais.",
      yearLabel: "Ano",
      kpis: [
        { label: "Receita líquida", value: "R$ 00,0M", delta: "+0,0% a/a" },
        { label: "EBITDA ajustado", value: "R$ 0,0M", delta: "+0,0% a/a" },
        { label: "Margem EBITDA", value: "00,0%", delta: "+0,0 p.p." },
        { label: "Caixa líquido", value: "R$ 00,0M", delta: "+0,0% t/t" },
      ],
      docHeader: "Documento",
      quarter: "T",
      docs: ["Release de resultados", "Apresentação", "ITR / DFP", "Planilha de fundamentos", "Teleconferência"],
      audio: "Áudio",
      footnote:
        "Documentos disponíveis em PDF e XLS. Os arquivos de períodos futuros serão publicados conforme o calendário de divulgação.",
    },
    facts: {
      eyebrow: "Comunicados ao mercado",
      title: "Fatos relevantes e avisos.",
      filterLabel: "Filtrar comunicados por tipo",
      all: "Todos",
      types: ["Fato relevante", "Comunicado", "Aviso aos acionistas", "Assembleia"],
      items: [
        { date: "00/00/2026", type: "Fato relevante", t: "Título do fato relevante divulgado ao mercado" },
        { date: "00/00/2026", type: "Comunicado", t: "Comunicado ao mercado — título" },
        { date: "00/00/2026", type: "Aviso aos acionistas", t: "Aviso aos acionistas — pagamento de proventos" },
        { date: "00/00/2026", type: "Assembleia", t: "Edital de convocação — Assembleia Geral Ordinária" },
        { date: "00/00/2026", type: "Comunicado", t: "Comunicado ao mercado — título" },
      ],
    },
    agenda: {
      eyebrow: "Agenda do investidor",
      title: "Próximos eventos.",
      add: "Adicionar à agenda",
      items: [
        { day: "00", mon: "NOV 2026", icon: "chart-column", t: "Divulgação de resultados 3T26", d: "Após o fechamento do mercado" },
        { day: "00", mon: "NOV 2026", icon: "video", t: "Teleconferência de resultados", d: "Português, com tradução simultânea" },
        { day: "00", mon: "DEZ 2026", icon: "users", t: "Lake Day — investidores", d: "São Paulo e transmissão online" },
        { day: "00", mon: "ABR 2027", icon: "landmark", t: "Assembleia Geral Ordinária", d: "Formato híbrido" },
      ],
    },
    governance: {
      eyebrow: "Governança corporativa",
      title: "Administração.",
      board: [
        { name: "Jefferson Silva", role: "Founder", tbd: false },
        { name: "Nome a definir", role: "Presidente do conselho", tbd: true },
        { name: "Nome a definir", role: "Conselheiro(a) independente", tbd: true },
        { name: "Nome a definir", role: "Diretor(a) financeiro(a) e de RI", tbd: true },
      ],
      docsEyebrow: "Documentos",
      docsTitle: "Estatuto e políticas.",
      policies: [
        "Estatuto social",
        "Código de conduta",
        "Política de divulgação",
        "Política de negociação",
        "Partes relacionadas",
        "Regimento do conselho",
      ],
    },
    contact: {
      eyebrow: "Fale com RI",
      title: { a: "Receba nossos comunicados", em: "primeiro", b: "." },
      lead: "Cadastre-se no mailing de RI para receber resultados, fatos relevantes e convites para eventos.",
      officer: "Diretor(a) de RI — nome a definir",
      emailPlaceholder: "voce@instituicao.com",
      institutional: "Sou investidor institucional",
      submit: "Cadastrar no mailing",
    },
  },

  legal: {
    updated: "Última atualização",
    privacy: {
      title: "Política de privacidade",
      intro:
        "Esta política explica como o Grupo Lake trata dados pessoais coletados por meio deste site e dos serviços que oferece (incluindo o Vocato Career e projetos de software), em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD).",
      sections: [
        {
          h: "1. Quem é o controlador",
          p: [
            "O controlador dos dados pessoais é JEFFERSON L. DA SILVA, inscrito no CNPJ sob o nº 57.924.952/0001-19, que atua sob a marca Grupo Lake, com sede em São Paulo, SP.",
            "O encarregado pelo tratamento de dados pessoais (DPO) pode ser contatado pelo e-mail jefferson.laurindo@grupolake.com.br.",
          ],
        },
        {
          h: "2. Quais dados coletamos",
          p: [
            "Dados que você nos envia voluntariamente pelos formulários e canais de contato: nome, e-mail, telefone (quando informado), empresa ou instituição, assunto e mensagem.",
            "Dados de cadastro e uso dos serviços contratados, como nome, e-mail e informações fornecidas por você ao utilizar o Vocato Career.",
            "Dados de pagamento: o pagamento é processado por um provedor de pagamentos terceirizado. Não armazenamos números completos de cartão nem códigos de segurança; recebemos apenas a confirmação da transação, o meio de pagamento e dados mínimos necessários à emissão de recibos e à prevenção a fraudes.",
            "Dados técnicos estritamente necessários ao funcionamento e à segurança do site, como o cookie de preferência de idioma, endereço IP e registros de acesso. Não utilizamos cookies de publicidade.",
          ],
        },
        {
          h: "3. Para que usamos os dados",
          p: [
            "Responder a contatos comerciais, propostas de projeto, pedidos de imprensa e candidaturas; prestar e cobrar os serviços contratados; enviar comunicados a quem se cadastrou no mailing; prevenir fraudes e incidentes de segurança; e cumprir obrigações legais, fiscais e regulatórias.",
          ],
        },
        {
          h: "4. Bases legais",
          p: [
            "Tratamos dados com base no consentimento, na execução de contrato ou de procedimentos preliminares a pedido do titular, no legítimo interesse, no exercício regular de direitos e no cumprimento de obrigação legal ou regulatória, conforme o art. 7º da LGPD.",
          ],
        },
        {
          h: "5. Compartilhamento",
          p: [
            "Os dados podem ser compartilhados com fornecedores que nos ajudam a operar o site, processar pagamentos, hospedar a infraestrutura e enviar e-mails, sempre sob contrato e apenas na medida necessária. Também podemos compartilhá-los com autoridades quando exigido por lei.",
            "Não vendemos dados pessoais.",
          ],
        },
        {
          h: "6. Transferência internacional",
          p: [
            "Alguns fornecedores podem armazenar dados em servidores fora do Brasil. Nesses casos, a transferência ocorre com as garantias previstas nos arts. 33 e seguintes da LGPD.",
          ],
        },
        {
          h: "7. Retenção",
          p: [
            "Mantemos os dados pelo tempo necessário às finalidades descritas ou exigido por lei. Registros fiscais e de transações são guardados pelos prazos legais aplicáveis. Após esse período, os dados são eliminados ou anonimizados.",
          ],
        },
        {
          h: "8. Segurança",
          p: [
            "Adotamos medidas técnicas e administrativas para proteger os dados contra acessos não autorizados, perda e alteração. Veja mais detalhes na nossa página de Segurança da informação.",
          ],
        },
        {
          h: "9. Seus direitos",
          p: [
            "Você pode solicitar confirmação de tratamento, acesso, correção, anonimização, bloqueio ou eliminação de dados desnecessários, portabilidade, informação sobre compartilhamento, informação sobre a possibilidade de não consentir e revogação do consentimento, nos termos do art. 18 da LGPD.",
            "Respondemos às solicitações em até 15 dias. Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).",
          ],
        },
        {
          h: "10. Crianças e adolescentes",
          p: [
            "Nossos serviços não são direcionados a menores de 18 anos sem a participação de um responsável legal. Se identificarmos dados de menores coletados sem esse consentimento, eles serão eliminados.",
          ],
        },
        {
          h: "11. Alterações desta política",
          p: [
            "Podemos atualizar esta política periodicamente. A data da última atualização está indicada no topo desta página.",
          ],
        },
      ],
      contact: "Para exercer seus direitos, escreva para",
    },
    terms: {
      title: "Termos de uso",
      intro:
        "Ao acessar este site ou contratar nossos serviços, você concorda com os termos abaixo. Se não concordar, recomendamos não utilizar o site nem os serviços.",
      sections: [
        {
          h: "1. Quem somos",
          p: [
            "Este site e os serviços são oferecidos por JEFFERSON L. DA SILVA, CNPJ 57.924.952/0001-19, sob a marca Grupo Lake, com sede em São Paulo, SP. Contato: jefferson.laurindo@grupolake.com.br.",
          ],
        },
        {
          h: "2. Finalidade do site e dos serviços",
          p: [
            "O site apresenta informações institucionais sobre o Grupo Lake, sua casa de software, portfólio e oportunidades de carreira. As informações têm caráter informativo e não constituem oferta ou recomendação de investimento.",
            "Por meio do site e de plataformas do grupo, oferecemos: (a) o Vocato Career, plataforma de orientação de carreira; e (b) serviços de desenvolvimento de software sob contrato. As condições específicas de cada serviço são apresentadas no momento da contratação.",
          ],
        },
        {
          h: "3. Cadastro e conta",
          p: [
            "Para usar alguns serviços é necessário criar uma conta com informações verdadeiras e atualizadas. Você é responsável por manter a confidencialidade das suas credenciais e por toda atividade realizada na sua conta.",
          ],
        },
        {
          h: "4. Preços e pagamento",
          p: [
            "Os preços são informados em reais (BRL) antes da confirmação da compra. Os pagamentos são processados por provedor de pagamentos terceirizado, por meio dos meios disponíveis no momento da compra. A contratação só é concluída após a confirmação do pagamento.",
            "Serviços de software são contratados por proposta ou contrato específico, com prazos, escopo e formas de pagamento próprios.",
          ],
        },
        {
          h: "5. Cancelamento e reembolso",
          p: [
            "As regras de cancelamento, arrependimento e reembolso estão descritas na página Política de reembolso, que integra estes termos.",
          ],
        },
        {
          h: "6. Natureza informativa da orientação de carreira",
          p: [
            "Os resultados do Vocato Career são recomendações baseadas em modelos e dados públicos. Têm caráter orientativo e não garantem resultados profissionais, aprovação em seleções ou contratação.",
          ],
        },
        {
          h: "7. Propriedade intelectual",
          p: [
            "Marcas, logotipos, textos, imagens, software e demais conteúdos pertencem ao Grupo Lake ou a seus licenciantes e não podem ser reproduzidos sem autorização prévia.",
          ],
        },
        {
          h: "8. Uso adequado",
          p: [
            "É proibido usar o site ou os serviços para fins ilícitos, tentar acessar áreas restritas, comprometer a segurança da plataforma ou prejudicar outros usuários.",
          ],
        },
        {
          h: "9. Links externos",
          p: [
            "O site pode conter links para sites de empresas do portfólio, parceiros e clientes. Não nos responsabilizamos pelo conteúdo ou pelas práticas de privacidade de sites de terceiros.",
          ],
        },
        {
          h: "10. Responsabilidades",
          p: [
            "Buscamos manter as informações corretas e atualizadas e os serviços disponíveis, mas pode haver interrupções para manutenção ou por fatores fora do nosso controle. Nada nestes termos exclui direitos garantidos ao consumidor pela legislação.",
          ],
        },
        {
          h: "11. Privacidade",
          p: [
            "O tratamento de dados pessoais é regido pela Política de privacidade.",
          ],
        },
        {
          h: "12. Legislação e foro",
          p: [
            "Estes termos são regidos pela legislação brasileira. Fica eleito o foro da comarca de São Paulo, SP, para dirimir eventuais controvérsias, ressalvado o direito do consumidor de optar pelo foro de seu domicílio.",
          ],
        },
      ],
      contact: "Dúvidas sobre estes termos:",
    },
    security: {
      title: "Segurança da informação",
      intro:
        "Levamos a proteção dos dados dos nossos clientes e usuários a sério. Esta página resume as práticas que adotamos e como reportar um problema de segurança.",
      sections: [
        {
          h: "1. Pagamentos seguros",
          p: [
            "Os pagamentos são processados por um provedor de pagamentos terceirizado, que segue os padrões do setor, incluindo o PCI-DSS. Os dados completos do seu cartão são informados diretamente no ambiente do provedor e não passam pelos nossos servidores nem são armazenados por nós.",
          ],
        },
        {
          h: "2. Criptografia em trânsito",
          p: [
            "Todo o tráfego entre o seu navegador e nossos sites é protegido por HTTPS (TLS).",
          ],
        },
        {
          h: "3. Controle de acesso",
          p: [
            "O acesso a sistemas e dados é restrito ao mínimo necessário, com autenticação nos painéis administrativos e revisão periódica de permissões.",
          ],
        },
        {
          h: "4. Infraestrutura e fornecedores",
          p: [
            "Utilizamos provedores de infraestrutura e serviços reconhecidos, contratados sob condições de proteção de dados compatíveis com a LGPD.",
          ],
        },
        {
          h: "5. Minimização de dados",
          p: [
            "Coletamos apenas os dados necessários para prestar o serviço e não utilizamos cookies de publicidade.",
          ],
        },
        {
          h: "6. Incidentes de segurança",
          p: [
            "Em caso de incidente que possa acarretar risco ou dano relevante aos titulares, comunicaremos a ANPD e os titulares afetados nos termos da LGPD.",
          ],
        },
        {
          h: "7. Como reportar uma vulnerabilidade",
          p: [
            "Se você identificar uma falha de segurança ou suspeitar de uso indevido de dados, escreva para o e-mail abaixo com o maior número de detalhes possível. Analisaremos o relato com prioridade.",
          ],
        },
      ],
      contact: "Reporte problemas de segurança para",
    },
    refund: {
      title: "Política de reembolso",
      intro:
        "Esta política descreve as regras de cancelamento, arrependimento e reembolso dos serviços oferecidos pelo Grupo Lake, em conformidade com o Código de Defesa do Consumidor (Lei nº 8.078/1990).",
      sections: [
        {
          h: "1. Direito de arrependimento (7 dias)",
          p: [
            "Nas compras feitas pela internet, você pode desistir da contratação em até 7 (sete) dias corridos a contar da data da compra ou do acesso ao serviço, nos termos do art. 49 do Código de Defesa do Consumidor, com reembolso integral dos valores pagos.",
          ],
        },
        {
          h: "2. Como solicitar",
          p: [
            "Envie a solicitação para o e-mail indicado ao final desta página, informando o nome, o e-mail usado na compra e o motivo (opcional). Confirmaremos o recebimento e a análise em até 2 dias úteis.",
          ],
        },
        {
          h: "3. Prazo e forma do reembolso",
          p: [
            "O reembolso é feito pelo mesmo meio de pagamento utilizado na compra, em até 10 dias úteis após a aprovação. Em compras no cartão de crédito, o estorno pode aparecer na fatura seguinte ou na subsequente, conforme o calendário da operadora.",
          ],
        },
        {
          h: "4. Após o prazo de arrependimento",
          p: [
            "Passados os 7 dias, avaliamos pedidos caso a caso, em especial quando houver falha no serviço, cobrança em duplicidade ou indisponibilidade que impeça o uso. Serviços já integralmente prestados não são reembolsáveis.",
          ],
        },
        {
          h: "5. Cobrança indevida ou em duplicidade",
          p: [
            "Cobranças realizadas por engano ou em duplicidade são estornadas integralmente após a verificação.",
          ],
        },
        {
          h: "6. Serviços de software sob contrato",
          p: [
            "Projetos de desenvolvimento são regidos pelas condições de cancelamento e pagamento previstas na proposta ou no contrato firmado com o cliente. Etapas já executadas e aprovadas são devidas proporcionalmente.",
          ],
        },
        {
          h: "7. Cancelamento",
          p: [
            "Você pode solicitar o cancelamento a qualquer momento pelo e-mail indicado abaixo. Salvo disposição em contrário no momento da compra, o cancelamento impede novas cobranças e o acesso permanece até o fim do período já pago.",
          ],
        },
      ],
      contact: "Para solicitar cancelamento ou reembolso, escreva para",
    },
  },

  llms: {
    summary:
      "O Grupo Lake é um grupo estratégico brasileiro, com sede em São Paulo, que alavanca negócios por meio de três frentes integradas: casa de software própria, investimentos com tese definida e aceleração com gestão ativa ao lado dos empreendedores.",
  },
};

export type Dictionary = typeof pt;
export default pt;
