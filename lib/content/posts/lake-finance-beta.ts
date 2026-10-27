import { images } from "../images";
import type { Post } from "./types";

export const lakeFinanceBeta: Post = {
  slug: "lake-finance-abre-acesso-antecipado-beta",
  date: "2026-10-27",
  kind: "news",
  category: "product",
  tone: "brand",
  image: images.lakeFinance,
  minutes: 3,
  copy: {
    pt: {
      title: "Lake Finance abre acesso antecipado à versão beta",
      excerpt:
        "A plataforma de finanças pessoais do portfólio do Grupo Lake usa inteligência artificial e Open Finance para reunir contas, analisar gastos e antecipar problemas. O acesso antecipado e gratuito está aberto.",
      body: [
        {
          p: "O Lake Finance, plataforma de finanças pessoais do portfólio do Grupo Lake, está em versão beta e aceita inscrições para acesso antecipado e gratuito. Em junho de 2026, o produto divulgou o início dessa fase, que reúne os primeiros usuários em torno de uma proposta simples: clareza financeira sem planilha e sem complicação.",
        },
        { h2: "A ideia por trás do produto" },
        {
          p: "A tese do Lake Finance é que a maioria das pessoas não tem um problema de renda, e sim de visibilidade: o dinheiro entra, sai, e no fim do mês ninguém sabe ao certo o que aconteceu. Em vez de mais um aplicativo de planilhas, o produto se propõe a ser um consultor financeiro pessoal, que reúne suas contas, analisa seus gastos e avisa antes do erro, não depois.",
        },
        {
          p: "Na prática, isso significa sair do modelo reativo, em que você olha o que já foi gasto, para um modelo que alerta e sugere correções. Um exemplo que aparece na própria interface é o aviso de que o saldo pode ficar negativo em uma data futura, com um plano para evitar isso.",
        },
        { h2: "O que está em construção" },
        { p: "O roadmap público do produto coloca o segundo trimestre de 2026 como a fase de construção do MVP. Os itens dessa fase são:" },
        {
          ul: [
            "integração com o Open Finance Brasil, para trazer os dados bancários sem digitação manual;",
            "categorização automática de transações com inteligência artificial;",
            "Health Score, um indicador de saúde financeira;",
            "o copiloto financeiro Lakefi, para conversar sobre as suas finanças;",
            "aplicativos para iOS e Android.",
          ],
        },
        {
          p: "As fases seguintes, de lançamento para os primeiros usuários e de crescimento, ainda estão por definir. Como o produto está em beta, funcionalidades podem mudar ao longo do caminho com base no feedback de quem testa.",
        },
        { h2: "Privacidade e segurança desde o início" },
        {
          p: "A conexão com os bancos acontece exclusivamente pelo Open Finance Brasil, regulado pelo Banco Central, via OAuth2: o Lake Finance não coleta senhas bancárias. Os dados financeiros são criptografados com AES-256 em repouso e em trânsito, e o tratamento segue a LGPD, incluindo a possibilidade de excluir a conta.",
        },
        { h2: "Como participar" },
        {
          p: "O acesso antecipado é gratuito e pode ser solicitado no site do Lake Finance, que também oferece uma demo web para conhecer o produto. Imprensa e parceiros podem falar com o grupo pelo contato oficial.",
        },
      ],
    },
    en: {
      title: "Lake Finance opens early access to its beta",
      excerpt:
        "The personal finance platform in Grupo Lake's portfolio uses artificial intelligence and Open Finance to bring accounts together, analyze spending and anticipate problems. Free early access is open.",
      body: [
        {
          p: "Lake Finance, the personal finance platform in Grupo Lake's portfolio, is in beta and accepting registrations for free early access. In June 2026 the product announced the start of this phase, which gathers its first users around a simple proposition: financial clarity without spreadsheets and without complication.",
        },
        { h2: "The idea behind the product" },
        {
          p: "Lake Finance starts from the premise that most people don't have an income problem, they have a visibility problem: money comes in, money goes out, and by the end of the month nobody is sure what happened. Instead of yet another spreadsheet app, the product aims to be a personal financial advisor that brings your accounts together, analyzes your spending and warns you before the mistake, not after.",
        },
        {
          p: "In practice, that means moving away from the reactive model, where you look at what has already been spent, toward one that alerts and suggests corrections. One example shown in the interface itself is a warning that your balance may go negative on a future date, along with a plan to avoid it.",
        },
        { h2: "What is being built" },
        { p: "The product's public roadmap places the second quarter of 2026 as the MVP build phase. The items in that phase are:" },
        {
          ul: [
            "integration with Open Finance Brazil, to bring in bank data without manual entry;",
            "automatic transaction categorization with artificial intelligence;",
            "Health Score, a financial health indicator;",
            "the Lakefi financial copilot, to talk through your finances;",
            "iOS and Android apps.",
          ],
        },
        {
          p: "The following phases, launch to the first users and growth, are still to be defined. Because the product is in beta, features may change along the way based on feedback from the people testing it.",
        },
        { h2: "Privacy and security from day one" },
        {
          p: "Connections to banks happen exclusively through Open Finance Brazil, regulated by the Central Bank, via OAuth2: Lake Finance does not collect bank passwords. Financial data is encrypted with AES-256 at rest and in transit, and processing follows Brazil's LGPD, including the ability to delete your account.",
        },
        { h2: "How to take part" },
        {
          p: "Early access is free and can be requested on the Lake Finance website, which also offers a web demo to try the product. Press and partners can reach the group through the official contact.",
        },
      ],
    },
  },
};
