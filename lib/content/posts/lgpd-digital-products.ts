import { images } from "../images";
import type { Post } from "./types";

export const lgpdDigitalProducts: Post = {
  slug: "lgpd-na-pratica-para-produtos-digitais",
  date: "2026-10-27",
  kind: "article",
  category: "education",
  tone: "neutral",
  image: images.press[2],
  minutes: 4,
  copy: {
    pt: {
      title: "LGPD na prática: o que times de produto precisam considerar",
      excerpt:
        "A Lei Geral de Proteção de Dados não é só um documento jurídico: ela molda como um produto digital coleta, guarda e apaga informações. Um guia prático, do ponto de vista de quem constrói software.",
      body: [
        {
          p: "A Lei Geral de Proteção de Dados Pessoais (LGPD, Lei 13.709/2018) vale para qualquer produto que trate dados de pessoas no Brasil, de um site institucional a um aplicativo financeiro. Para quem desenvolve software, a lei vira, na prática, um conjunto de decisões de produto e de engenharia. Este texto reúne as principais, sem substituir a orientação de um profissional jurídico.",
        },
        { h2: "Colete só o necessário" },
        {
          p: "Um dos princípios centrais é a necessidade: trate apenas os dados indispensáveis para a finalidade informada. No dia a dia, isso começa em perguntar, para cada campo de um formulário, se o produto realmente precisa dele. Dado que não foi coletado não vaza e não precisa ser protegido nem apagado.",
        },
        { h2: "Tenha finalidade e base legal claras" },
        {
          p: "Todo tratamento precisa de uma finalidade específica e de uma base legal, como o consentimento, a execução de um contrato ou o cumprimento de uma obrigação legal. A política de privacidade deve dizer, em linguagem simples, o que é coletado, para quê e com quem é compartilhado.",
        },
        { h2: "Garanta os direitos do titular" },
        { p: "A lei dá ao titular uma série de direitos, e o produto precisa ter um caminho para atendê-los. Entre eles:" },
        {
          ul: [
            "confirmar que há tratamento e acessar os dados;",
            "corrigir dados incompletos ou desatualizados;",
            "pedir a anonimização, o bloqueio ou a eliminação de dados desnecessários;",
            "solicitar a portabilidade dos dados;",
            "revogar o consentimento e pedir a exclusão dos dados tratados com base nele.",
          ],
        },
        {
          p: "Em produtos com conta de usuário, o jeito mais direto de cumprir a eliminação é oferecer a exclusão definitiva da conta dentro do próprio aplicativo.",
        },
        { h2: "Proteja os dados de forma técnica" },
        {
          p: "A lei exige medidas de segurança proporcionais ao risco. Na prática, isso inclui criptografia em trânsito e em repouso (o Lake Finance, por exemplo, usa AES-256 e TLS 1.3 para dados financeiros), controle de acesso por função e registro de acessos. Prestadores que tratam dados em nome da empresa também devem estar sob contrato que exija o cumprimento da LGPD.",
        },
        { h2: "Esteja pronto para um incidente" },
        {
          p: "Se um incidente de segurança puder acarretar risco ou dano relevante aos titulares, a empresa deve comunicar a Autoridade Nacional de Proteção de Dados (ANPD) e os afetados. Ter um canal para receber relatos de vulnerabilidade e um plano de resposta antes de precisar dele faz toda a diferença.",
        },
        { h2: "Um ponto de contato" },
        {
          p: "Por fim, indique um canal de contato do encarregado pelo tratamento de dados, para que os titulares saibam a quem recorrer. É o que o Grupo Lake faz hoje, com um canal único de e-mail divulgado no rodapé do site e na política de privacidade.",
        },
      ],
    },
    en: {
      title: "LGPD in practice: what product teams need to consider",
      excerpt:
        "Brazil's General Data Protection Law is not just a legal document: it shapes how a digital product collects, stores and deletes information. A practical guide from the point of view of people who build software.",
      body: [
        {
          p: "Brazil's General Data Protection Law (LGPD, Law 13,709/2018) applies to any product that processes data about people in Brazil, from a corporate website to a financial app. For software developers, the law becomes, in practice, a set of product and engineering decisions. This article collects the main ones, without replacing advice from a legal professional.",
        },
        { h2: "Collect only what is necessary" },
        {
          p: "One of the core principles is necessity: process only the data that is indispensable for the stated purpose. Day to day, that starts with asking, for each field in a form, whether the product really needs it. Data that was never collected cannot leak and does not need to be protected or deleted.",
        },
        { h2: "Have a clear purpose and legal basis" },
        {
          p: "Every processing activity needs a specific purpose and a legal basis, such as consent, performance of a contract or compliance with a legal obligation. The privacy policy should say, in plain language, what is collected, for what and with whom it is shared.",
        },
        { h2: "Guarantee data subject rights" },
        { p: "The law gives data subjects a series of rights, and the product needs a path to honor them. Among them:" },
        {
          ul: [
            "confirming that processing takes place and accessing the data;",
            "correcting incomplete or outdated data;",
            "requesting anonymization, blocking or deletion of unnecessary data;",
            "requesting data portability;",
            "revoking consent and requesting deletion of data processed on that basis.",
          ],
        },
        {
          p: "In products with user accounts, the most direct way to honor deletion is to offer permanent account deletion inside the app itself.",
        },
        { h2: "Protect data technically" },
        {
          p: "The law requires security measures proportional to the risk. In practice, that includes encryption in transit and at rest (Lake Finance, for example, uses AES-256 and TLS 1.3 for financial data), role-based access control and access logging. Providers that process data on the company's behalf should also be under a contract requiring LGPD compliance.",
        },
        { h2: "Be ready for an incident" },
        {
          p: "If a security incident may cause relevant risk or harm to data subjects, the company must notify the National Data Protection Authority (ANPD) and those affected. Having a channel to receive vulnerability reports and a response plan before you need one makes all the difference.",
        },
        { h2: "A point of contact" },
        {
          p: "Finally, provide a contact channel for the data protection officer, so data subjects know whom to turn to. That is what Grupo Lake does today, with a single email channel shown in the site footer and in the privacy policy.",
        },
      ],
    },
  },
};
