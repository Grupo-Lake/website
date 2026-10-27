import { images } from "../images";
import type { Post } from "./types";

export const aiCostControl: Post = {
  slug: "ia-em-produtos-sem-estourar-o-custo",
  date: "2026-10-27",
  kind: "article",
  category: "software",
  tone: "info",
  image: images.press[2],
  minutes: 4,
  copy: {
    pt: {
      title: "IA em produtos de software sem estourar o custo",
      excerpt:
        "Modelos de linguagem são cobrados por uso. Três decisões de arquitetura, usadas no planejamento do Lake Finance, ajudam a ter um copiloto de IA sem que a conta cresça mais rápido que o produto.",
      body: [
        {
          p: "Colocar um assistente de IA dentro de um produto é a parte fácil. A parte difícil é manter a operação saudável quando milhares de pessoas começam a usá-lo, porque o custo de modelos de linguagem é variável: cresce com cada pergunta, com cada imagem e com cada token processado. No planejamento do Lake Finance, que terá um copiloto financeiro, esse risco foi tratado como requisito de arquitetura, não como detalhe.",
        },
        { h2: "1. Use IA só onde ela é necessária" },
        {
          p: "Nem toda pergunta exige um modelo de linguagem. Uma pergunta como “qual é o meu saldo?” tem resposta exata e determinística, que o sistema tradicional entrega de graça e sem risco de erro. Já “como posso economizar este mês?” é analítica e se beneficia da IA. A estratégia é interceptar as perguntas repetitivas com rotas convencionais e acionar o modelo, que é mais caro, apenas para as perguntas analíticas.",
        },
        { h2: "2. Limite o que cada chamada pode consumir" },
        {
          p: "Prompts com limite estrito de tokens, respostas com tamanho máximo e contexto enxuto evitam que uma única conversa consuma o orçamento de muitas. Limites por usuário também protegem o produto contra uso abusivo e contra custos imprevisíveis.",
        },
        { h2: "3. Valide primeiro, adicione IA depois" },
        {
          p: "O roadmap do Lake Finance parte da regra de priorizar o que gera o menor custo fixo mensal depois de lançado. Por isso, a primeira fase é uma versão sem IA pesada, rodando sobre infraestrutura padrão, com autenticação, banco de dados, lançamentos, orçamentos, metas, alertas, dashboard e relatórios. Só depois de validar que o produto entrega valor entram as funções mais caras, como o copiloto e os insights preditivos.",
        },
        { h2: "Um checklist para o seu produto" },
        {
          ul: [
            "liste as perguntas e ações do usuário e separe as que têm resposta determinística;",
            "defina limites de tokens, de tamanho de resposta e de uso por usuário;",
            "meça o custo por usuário ativo desde o início, e não só o custo total;",
            "lance a versão essencial primeiro e adicione IA onde os dados mostrarem ganho real.",
          ],
        },
        {
          p: "Esse raciocínio vale para qualquer produto, não só para finanças: a IA mais valiosa é a que você aciona na hora certa.",
        },
      ],
    },
    en: {
      title: "AI in software products without blowing up the bill",
      excerpt:
        "Language models are billed by usage. Three architecture decisions, used in Lake Finance's planning, help you ship an AI copilot without the bill growing faster than the product.",
      body: [
        {
          p: "Putting an AI assistant inside a product is the easy part. The hard part is keeping operations healthy when thousands of people start using it, because language model costs are variable: they grow with every question, every image and every token processed. In planning Lake Finance, which will have a financial copilot, this risk was treated as an architecture requirement, not a detail.",
        },
        { h2: "1. Use AI only where it is needed" },
        {
          p: "Not every question requires a language model. A question like “what is my balance?” has an exact, deterministic answer that a traditional system delivers for free and without risk of error. “How can I save this month?”, on the other hand, is analytical and benefits from AI. The strategy is to intercept repetitive questions with conventional routes and call the more expensive model only for analytical ones.",
        },
        { h2: "2. Limit what each call can consume" },
        {
          p: "Prompts with a strict token limit, capped response size and lean context keep a single conversation from consuming the budget of many. Per-user limits also protect the product against abuse and unpredictable costs.",
        },
        { h2: "3. Validate first, add AI later" },
        {
          p: "Lake Finance's roadmap starts from the rule of prioritizing what generates the lowest fixed monthly cost once launched. That is why the first phase is a version without heavy AI, running on standard infrastructure, with authentication, database, transactions, budgets, goals, alerts, dashboard and reports. Only after validating that the product delivers value do the more expensive features come in, such as the copilot and predictive insights.",
        },
        { h2: "A checklist for your product" },
        {
          ul: [
            "list user questions and actions and separate those with deterministic answers;",
            "set limits for tokens, response size and per-user usage;",
            "measure cost per active user from the start, not just total cost;",
            "ship the essential version first and add AI where the data shows a real gain.",
          ],
        },
        {
          p: "This reasoning applies to any product, not just finance: the most valuable AI is the one you call at the right moment.",
        },
      ],
    },
  },
};
