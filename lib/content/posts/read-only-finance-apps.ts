import { images } from "../images";
import type { Post } from "./types";

export const readOnlyFinanceApps: Post = {
  slug: "por-que-apps-financeiros-devem-ser-somente-leitura",
  date: "2026-10-27",
  kind: "article",
  category: "product",
  tone: "brand",
  image: images.press[0],
  minutes: 3,
  copy: {
    pt: {
      title: "Por que apps de finanças pessoais devem ser somente leitura",
      excerpt:
        "Um aplicativo que só lê os seus dados, e não movimenta o seu dinheiro, reduz riscos e simplifica a confiança. Veja o raciocínio por trás dessa decisão de produto do Lake Finance.",
      body: [
        {
          p: "Ao desenhar o Lake Finance, uma das primeiras decisões foi também uma das mais importantes: o aplicativo atua apenas em modo de leitura. Ele não transfere dinheiro, não paga boletos e não investe em nome do usuário. Este texto explica por que acreditamos que essa é a escolha certa para um produto de finanças pessoais.",
        },
        { h2: "O que “somente leitura” significa" },
        {
          p: "Em um aplicativo somente leitura, as informações das suas contas são consultadas para gerar análises, categorias e alertas, mas nenhuma operação financeira parte do aplicativo. Para quem usa, isso quer dizer que o pior cenário de um erro ou de um acesso indevido ao app não inclui movimentação de dinheiro.",
        },
        { h2: "Menos superfície de risco" },
        {
          p: "Cada função adicional em um produto financeiro é mais uma porta a proteger. Sem iniciação de pagamentos, o produto não precisa lidar com autorização de transações, limites, estornos ou fraude em movimentações. A energia da equipe vai para o que interessa nesta fase: entender os gastos e ajudar a decidir melhor.",
        },
        { h2: "Confiança mais simples" },
        {
          p: "Pedir acesso para ler é um pedido menor do que pedir acesso para agir. Isso torna mais fácil explicar o que o produto faz e o que ele nunca fará, o que combina com os valores de transparência e privacidade do Lake Finance.",
        },
        { h2: "Somente leitura não é “sem cuidado”" },
        {
          p: "Os dados financeiros continuam sendo sensíveis. Por isso, a conexão com os bancos acontece pelo Open Finance Brasil, via OAuth2, sem coleta de senhas bancárias, e as informações são protegidas com criptografia AES-256 em repouso e em trânsito. Além disso, o usuário pode excluir a conta e os dados, conforme a LGPD.",
        },
        { h2: "O que fica fora, por escolha" },
        {
          ul: [
            "iniciação de pagamentos, transferências e investimentos pelo aplicativo;",
            "gestão de finanças de empresas (o foco é pessoa física);",
            "preenchimento automático da declaração de Imposto de Renda, embora seja possível exportar relatórios.",
          ],
        },
        {
          p: "Essas fronteiras podem mudar no futuro, mas qualquer ampliação de escopo deve vir com o mesmo cuidado com segurança. Por ora, o objetivo é claro: dar visibilidade sobre o dinheiro, sem tocar nele.",
        },
      ],
    },
    en: {
      title: "Why personal finance apps should be read-only",
      excerpt:
        "An app that only reads your data, and never moves your money, reduces risk and makes trust simpler. Here is the reasoning behind this Lake Finance product decision.",
      body: [
        {
          p: "When designing Lake Finance, one of the first decisions was also one of the most important: the app works in read-only mode. It does not transfer money, pay bills or invest on the user's behalf. This article explains why we believe that is the right choice for a personal finance product.",
        },
        { h2: "What “read-only” means" },
        {
          p: "In a read-only app, information from your accounts is queried to generate analyses, categories and alerts, but no financial operation originates from the app. For the user, that means the worst case of a bug or unauthorized access to the app does not include money being moved.",
        },
        { h2: "Less surface for risk" },
        {
          p: "Every extra function in a financial product is one more door to protect. Without payment initiation, the product does not have to deal with transaction authorization, limits, chargebacks or fraud in money movements. The team's energy goes to what matters at this stage: understanding spending and helping people decide better.",
        },
        { h2: "Simpler trust" },
        {
          p: "Asking for access to read is a smaller request than asking for access to act. That makes it easier to explain what the product does and what it will never do, which fits Lake Finance's values of transparency and privacy.",
        },
        { h2: "Read-only does not mean “no care”" },
        {
          p: "Financial data remains sensitive. That is why connections to banks go through Open Finance Brazil, via OAuth2, with no collection of bank passwords, and information is protected with AES-256 encryption at rest and in transit. Users can also delete their account and data, in line with Brazil's LGPD.",
        },
        { h2: "What stays out, by choice" },
        {
          ul: [
            "payment initiation, transfers and investments from the app;",
            "business finance management (the focus is individuals);",
            "automatic filling of the income tax return, although reports can be exported.",
          ],
        },
        {
          p: "These boundaries may change in the future, but any expansion of scope should come with the same care for security. For now, the goal is clear: give visibility into money without touching it.",
        },
      ],
    },
  },
};
