import { images } from "../images";
import type { Post } from "./types";

export const openFinanceExplained: Post = {
  slug: "o-que-e-open-finance",
  date: "2026-10-27",
  kind: "article",
  category: "education",
  tone: "brand",
  image: images.press[0],
  minutes: 4,
  copy: {
    pt: {
      title: "O que é Open Finance e como ele muda a gestão do seu dinheiro",
      excerpt:
        "O Open Finance Brasil permite compartilhar seus dados entre instituições financeiras com o seu consentimento. Entenda como funciona, o que é compartilhado e por que isso importa para quem organiza as próprias finanças.",
      body: [
        {
          p: "Quem tem conta em mais de um banco conhece o problema: o extrato de um lado, a fatura do cartão de outro, o investimento em um terceiro aplicativo. Juntar tudo para responder a uma pergunta simples, como quanto sobrou no mês, costuma terminar em uma planilha manual. O Open Finance foi criado para mudar isso.",
        },
        { h2: "O que é o Open Finance" },
        {
          p: "O Open Finance Brasil é um sistema regulado pelo Banco Central que permite que clientes compartilhem seus dados e serviços financeiros entre instituições diferentes, de forma padronizada e segura. A regra central é que o dado é seu: nenhuma instituição acessa as suas informações em outra sem que você autorize.",
        },
        { h2: "Como o consentimento funciona" },
        { p: "Para compartilhar dados, você passa por um fluxo de consentimento. De forma geral:" },
        {
          ul: [
            "você escolhe qual instituição vai receber os dados e quais dados serão compartilhados;",
            "a autenticação acontece no ambiente do próprio banco onde está a sua conta, e não no aplicativo que recebe os dados;",
            "o consentimento tem finalidade e prazo definidos;",
            "você pode revogá-lo quando quiser.",
          ],
        },
        {
          p: "Esse desenho é parecido com o de “entrar com o Google” em um site: o aplicativo de destino nunca precisa saber a sua senha do banco.",
        },
        { h2: "O que isso muda para as finanças pessoais" },
        {
          p: "Com o consentimento dado, um aplicativo de finanças pessoais pode ler as suas contas de vários bancos em um só lugar, sem que você digite cada gasto. Isso permite consolidar o saldo, categorizar as transações e enxergar padrões, como os gastos que se repetem todos os meses, que passam despercebidos quando o dado está espalhado.",
        },
        {
          p: "O Open Finance é implementado em fases, e o que está disponível depende de cada instituição e de cada tipo de dado. Por isso, vale conferir no momento do consentimento exatamente o que será compartilhado.",
        },
        { h2: "Como o Lake Finance usa o Open Finance" },
        {
          p: "O Lake Finance, plataforma de finanças pessoais do portfólio do Grupo Lake, conecta as contas dos usuários exclusivamente pelo Open Finance Brasil, via OAuth2, e não coleta senhas bancárias. A leitura dos dados alimenta a categorização automática e os alertas do produto, que está em versão beta.",
        },
        { h2: "Antes de conectar sua conta" },
        {
          ul: [
            "confira quem vai receber os dados e para qual finalidade;",
            "prefira serviços que explicam como protegem as informações e que seguem a LGPD;",
            "lembre-se de que você pode revogar o consentimento a qualquer momento no seu banco.",
          ],
        },
      ],
    },
    en: {
      title: "What is Open Finance and how it changes the way you manage money",
      excerpt:
        "Open Finance Brazil lets you share your data between financial institutions with your consent. Learn how it works, what gets shared and why it matters for anyone organizing their own finances.",
      body: [
        {
          p: "Anyone with accounts at more than one bank knows the problem: the statement in one place, the credit card bill in another, the investment in a third app. Putting it all together to answer a simple question, like how much is left this month, usually ends in a manual spreadsheet. Open Finance was created to change that.",
        },
        { h2: "What Open Finance is" },
        {
          p: "Open Finance Brazil is a system regulated by the Central Bank that lets customers share their financial data and services between different institutions, in a standardized and secure way. The core rule is that the data is yours: no institution can access your information held at another without your authorization.",
        },
        { h2: "How consent works" },
        { p: "To share data, you go through a consent flow. In general:" },
        {
          ul: [
            "you choose which institution will receive the data and which data will be shared;",
            "authentication happens in the environment of the bank where your account is held, not in the app receiving the data;",
            "the consent has a defined purpose and duration;",
            "you can revoke it whenever you want.",
          ],
        },
        {
          p: "The design is similar to “sign in with Google” on a website: the destination app never needs to know your bank password.",
        },
        { h2: "What it changes for personal finance" },
        {
          p: "Once consent is given, a personal finance app can read your accounts from several banks in one place, without you typing in every expense. That makes it possible to consolidate your balance, categorize transactions and spot patterns, such as expenses that repeat every month, that go unnoticed when the data is scattered.",
        },
        {
          p: "Open Finance is being rolled out in phases, and what is available depends on each institution and each type of data. That is why it is worth checking exactly what will be shared at the moment of consent.",
        },
        { h2: "How Lake Finance uses Open Finance" },
        {
          p: "Lake Finance, the personal finance platform in Grupo Lake's portfolio, connects users' accounts exclusively through Open Finance Brazil, via OAuth2, and does not collect bank passwords. Reading the data powers the product's automatic categorization and alerts. The product is in beta.",
        },
        { h2: "Before you connect your account" },
        {
          ul: [
            "check who will receive the data and for what purpose;",
            "prefer services that explain how they protect information and that follow Brazil's LGPD;",
            "remember you can revoke consent at any time in your bank.",
          ],
        },
      ],
    },
  },
};
