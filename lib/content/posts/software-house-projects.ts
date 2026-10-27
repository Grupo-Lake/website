import { images } from "../images";
import type { Post } from "./types";

export const softwareHouseProjects: Post = {
  slug: "casa-de-software-entrega-codec-e-opam",
  date: "2026-10-24",
  kind: "news",
  category: "software",
  tone: "info",
  image: images.cases.codec,
  minutes: 3,
  copy: {
    pt: {
      title: "Casa de software entrega os sites do Congresso CODEC e da OPAM Karatê",
      excerpt:
        "Dois projetos entregues pela casa de software do grupo estão no ar: a plataforma do congresso, com programação, palestrantes e inscrições, e o site institucional da Organização Paulista de Karatê.",
      body: [
        {
          p: "A casa de software do Grupo Lake reúne produto, design, engenharia, QA e IA aplicada sob o mesmo teto. Dois projetos entregues por ela estão no ar e mostram o tipo de trabalho que o time faz para clientes fora do portfólio do grupo.",
        },
        { h2: "Congresso CODEC" },
        {
          p: "O site do Congresso CODEC (congressocodec.com.br) reúne em um só lugar a programação, os palestrantes e as inscrições do evento. A ideia de uma plataforma de evento é simples: quem chega ao site deve entender em segundos quando e onde acontece, quem participa e como garantir a vaga.",
        },
        {
          img: images.posts.codecEvent,
          alt: "Palestrantes e organizadores do 2º CODEC posando diante do banner do congresso",
          caption: "2º CODEC, realizado em 05 e 08 de outubro de 2026, em Itaquera (SP).",
        },
        { h2: "OPAM Karatê" },
        {
          p: "A Organização Paulista de Karatê (OPAM) ganhou uma presença digital própria em karateopam.com.br. O site institucional concentra os eventos, os filiados e a comunicação oficial da organização.",
        },
        {
          img: images.cases.opam,
          alt: "Página inicial do site da OPAM Karate com chamada para aula grátis",
          caption: "Página inicial redesenhada do site da OPAM Karate.",
        },
        {
          img: images.posts.opamClass,
          alt: "Alunos de karatê reunidos em círculo durante o treino",
          caption: "Treino da turma de Itaquera, que ilustra a página inicial do site.",
        },
        { h2: "Outros projetos ligados ao grupo" },
        {
          p: "Além dos clientes, a casa de software também atua no ecossistema do grupo. Na frente de parceiros, conduziu toda a frente de testes de software do Haze, um aplicativo de relacionamento. No portfólio, o Vocato Career oferece orientação vocacional baseada no modelo RIASEC e em dados ocupacionais O*NET, e o Trip Side é uma rede de revendedores autorizados com portal B2B para cadastro de lojas e pedidos em grade fechada.",
        },
        { h2: "Quer começar um projeto?" },
        {
          p: "Sites, plataformas e aplicativos que viram ativo do negócio podem ser solicitados diretamente na página da casa de software. O retorno acontece em até dois dias úteis.",
        },
      ],
    },
    en: {
      title: "Software house delivers the Congresso CODEC and OPAM Karatê websites",
      excerpt:
        "Two projects delivered by the group's software house are live: the congress platform, with schedule, speakers and registrations, and the corporate site of the São Paulo Karate Organization.",
      body: [
        {
          p: "Grupo Lake's software house brings together product, design, engineering, QA and applied AI under one roof. Two projects it delivered are now live and show the kind of work the team does for clients outside the group's portfolio.",
        },
        { h2: "Congresso CODEC" },
        {
          p: "The Congresso CODEC website (congressocodec.com.br) brings the event's schedule, speakers and registrations together in one place. The idea of an event platform is simple: whoever lands on the site should understand within seconds when and where it takes place, who is taking part and how to secure a spot.",
        },
        {
          img: images.posts.codecEvent,
          alt: "Speakers and organizers of the 2nd CODEC posing in front of the congress banner",
          caption: "2nd CODEC, held on October 5 and 8, 2026, in Itaquera (SP).",
        },
        { h2: "OPAM Karatê" },
        {
          p: "The São Paulo Karate Organization (OPAM) now has its own digital presence at karateopam.com.br. The corporate site concentrates the organization's events, members and official communications.",
        },
        {
          img: images.cases.opam,
          alt: "OPAM Karate website home page with a free class call to action",
          caption: "Redesigned home page of the OPAM Karate website.",
        },
        {
          img: images.posts.opamClass,
          alt: "Karate students gathered in a circle during training",
          caption: "Training session of the Itaquera class, which illustrates the site's home page.",
        },
        { h2: "Other projects connected to the group" },
        {
          p: "Beyond clients, the software house also works inside the group's ecosystem. On the partner side, it ran the entire software testing effort for Haze, a relationship app. In the portfolio, Vocato Career offers career guidance based on the RIASEC model and O*NET occupational data, and Trip Side is a network of authorized resellers with a B2B portal for store registration and closed-grid orders.",
        },
        { h2: "Want to start a project?" },
        {
          p: "Websites, platforms and apps that become business assets can be requested directly on the software house page. We reply within two business days.",
        },
      ],
    },
  },
};
