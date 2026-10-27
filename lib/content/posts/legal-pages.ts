import { images } from "../images";
import type { Post } from "./types";

export const legalPages: Post = {
  slug: "grupo-lake-publica-politicas-de-privacidade-e-seguranca",
  date: "2026-10-27",
  kind: "news",
  category: "group",
  tone: "neutral",
  image: images.press[2],
  minutes: 3,
  copy: {
    pt: {
      title: "Grupo Lake publica políticas de privacidade, termos, segurança e reembolso",
      excerpt:
        "O site institucional do grupo passa a reunir, em português e inglês, os documentos que explicam como os dados são tratados, como os pagamentos são protegidos e como cancelar ou pedir reembolso.",
      body: [
        {
          p: "O site do Grupo Lake agora reúne, em português e em inglês, quatro documentos que explicam as regras de relacionamento com quem visita o site, contrata a casa de software ou acompanha o grupo: a política de privacidade, os termos de uso, a página de segurança da informação e a política de reembolso.",
        },
        { h2: "Privacidade e LGPD" },
        {
          p: "A política de privacidade descreve como o grupo coleta, usa, armazena e protege dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018), e como o titular pode exercer seus direitos. Ela também lista as finalidades do tratamento, como responder a contatos comerciais, prestar e cobrar os serviços contratados, prevenir fraudes e cumprir obrigações legais.",
        },
        { h2: "Termos de uso" },
        {
          p: "Os termos de uso do site institucional tratam de propriedade intelectual, links para sites de empresas do portfólio, parceiros e clientes, responsabilidades e legislação aplicável. Eles remetem à política de privacidade para tudo o que envolve dados pessoais.",
        },
        { h2: "Segurança da informação" },
        {
          p: "A página de segurança explica como o grupo protege dados e pagamentos: criptografia, controle de acesso e o uso de um provedor de pagamentos certificado. Ela também informa como reportar uma vulnerabilidade, o que permite que pesquisadores e usuários avisem o grupo de forma responsável.",
        },
        { h2: "Cancelamento e reembolso" },
        {
          p: "A política de reembolso reúne as regras de cancelamento e o direito de arrependimento de 7 dias, conforme o Código de Defesa do Consumidor, além das condições de reembolso dos serviços do grupo.",
        },
        { h2: "Um canal único" },
        {
          p: "Para dúvidas sobre qualquer um dos documentos, pedidos de titulares de dados, imprensa ou parcerias, o grupo mantém por enquanto um canal único de contato por e-mail, divulgado no rodapé do site. Os textos são uma base inicial e serão atualizados à medida que o grupo e suas empresas evoluem.",
        },
      ],
    },
    en: {
      title: "Grupo Lake publishes privacy, terms, security and refund policies",
      excerpt:
        "The group's corporate website now brings together, in Portuguese and English, the documents explaining how data is handled, how payments are protected and how to cancel or request a refund.",
      body: [
        {
          p: "The Grupo Lake website now brings together, in Portuguese and English, four documents that set out the rules for anyone who visits the site, hires the software house or follows the group: the privacy policy, the terms of use, the information security page and the refund policy.",
        },
        { h2: "Privacy and LGPD" },
        {
          p: "The privacy policy describes how the group collects, uses, stores and protects personal data, in line with Brazil's General Data Protection Law (Law 13,709/2018), and how data subjects can exercise their rights. It also lists the purposes of processing, such as answering business inquiries, providing and billing contracted services, preventing fraud and meeting legal obligations.",
        },
        { h2: "Terms of use" },
        {
          p: "The terms of use for the corporate website cover intellectual property, links to sites of portfolio companies, partners and clients, responsibilities and applicable law. They refer to the privacy policy for anything involving personal data.",
        },
        { h2: "Information security" },
        {
          p: "The security page explains how the group protects data and payments: encryption, access control and the use of a certified payment provider. It also explains how to report a vulnerability, so that researchers and users can alert the group responsibly.",
        },
        { h2: "Cancellation and refunds" },
        {
          p: "The refund policy sets out the cancellation rules and the 7-day right of withdrawal under Brazil's Consumer Protection Code, as well as the refund conditions for the group's services.",
        },
        { h2: "A single point of contact" },
        {
          p: "For questions about any of the documents, data subject requests, press or partnerships, the group currently keeps a single email contact, shown in the site footer. The texts are an initial baseline and will be updated as the group and its companies evolve.",
        },
      ],
    },
  },
};
