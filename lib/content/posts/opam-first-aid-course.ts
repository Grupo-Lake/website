import { images } from "../images";
import { site } from "../site";
import type { Post } from "./types";

const courseSlug = "curso-primeiros-socorros-para-atletas";
const opamPost = `${site.cases.opam}blog/${courseSlug}`;
const codecPost = `${site.cases.codec}blog/${courseSlug}`;
const instructor = "https://www.instagram.com/prof_wagner_cortez/";

export const opamFirstAidCourse: Post = {
  slug: "casa-de-software-atualiza-site-da-opam-curso-primeiros-socorros",
  date: "2026-10-29",
  kind: "news",
  category: "software",
  tone: "info",
  image: images.cases.opam,
  minutes: 3,
  copy: {
    pt: {
      title: "Site da OPAM ganha destaque e blog para o Curso de Primeiros Socorros para Atletas",
      excerpt:
        "A casa de software atualizou o site da OPAM Karatê com um destaque na página inicial e uma seção de blog, e criou um blog no site do CODEC, para divulgar o curso que as duas organizações apoiam.",
      body: [
        {
          p: "No dia 28 de novembro, em Itaquera, acontece o Curso de Primeiros Socorros para Atletas, realizado pela OPAM com o apoio do Congresso CODEC e ministrado pelo Prof. Wagner Cortez Domingos. Para que a informação chegue a quem treina e a quem acompanha os treinos, a casa de software do Grupo Lake atualizou os sites das duas organizações.",
        },
        { h2: "O que mudou no site da OPAM" },
        {
          ul: [
            "Um destaque do evento logo abaixo da abertura da página inicial, com data, horário, local, investimento e o botão de inscrição pelo WhatsApp.",
            "Uma nova seção de blog, no mesmo padrão visual do site, com a publicação completa sobre o curso e o cartão do post original no Instagram.",
            "O endereço oficial karateopam.com.br como domínio canônico, para que buscadores e compartilhamentos apontem sempre para o mesmo lugar.",
            "O crédito do Grupo Lake no rodapé.",
          ],
        },
        {
          img: images.posts.firstAidCourse,
          alt: "Cartaz do Curso de Primeiros Socorros para Atletas, 28 de novembro, Academia Cross Fênix, com o Prof. Wagner Cortez",
          caption: "Cartaz do curso, usado no destaque da página inicial da OPAM.",
          narrow: true,
        },
        { h2: "E no site do CODEC" },
        {
          p: "O site do Congresso CODEC também ganhou um blog. O primeiro texto trata do apoio ao curso e aponta para a publicação original no site da OPAM, o que conecta os dois endereços e leva o leitor direto à informação completa.",
        },
        { h2: "Sobre o curso" },
        {
          p: "É um curso prático, com materiais para treinar técnicas de primeiros socorros esportivos, imobilização e atendimento de emergência. As aulas são do Prof. Wagner Cortez Domingos, gestor de segurança pública e privada, técnico de enfermagem do trabalho e instrutor de formação de bombeiros. São 25 vagas, com investimento de R$ 50 e dois certificados.",
        },
        { h2: "Leia nos sites e acompanhe" },
        {
          links: [
            { label: "Publicação no site da OPAM Karatê", href: opamPost, external: true },
            { label: "Publicação no site do CODEC", href: codecPost, external: true },
            { label: "Perfil do Prof. Wagner Cortez no Instagram", href: instructor, external: true },
          ],
        },
        { h2: "Quer um site ou blog para o seu evento?" },
        {
          p: "Sites, páginas de evento e blogs podem ser solicitados diretamente na página da casa de software. O retorno acontece em até dois dias úteis.",
        },
      ],
    },
    en: {
      title: "OPAM website gets a highlight and a blog for the First Aid Course for Athletes",
      excerpt:
        "The software house updated the OPAM Karatê website with a home page highlight and a blog section, and created a blog on the CODEC website, to promote the course both organizations support.",
      body: [
        {
          p: "On November 28, in Itaquera (São Paulo), OPAM holds the First Aid Course for Athletes, supported by Congresso CODEC and taught by Prof. Wagner Cortez Domingos. So that the news reaches those who train and those who follow the training, Grupo Lake's software house updated both organizations' websites.",
        },
        { h2: "What changed on the OPAM website" },
        {
          ul: [
            "An event highlight right below the home page opening, with date, time, venue, price and a WhatsApp registration button.",
            "A new blog section, matching the site's visual style, with the full article about the course and a card for the original Instagram post.",
            "The official karateopam.com.br address as the canonical domain, so search engines and shared links always point to the same place.",
            "A Grupo Lake credit in the footer.",
          ],
        },
        {
          img: images.posts.firstAidCourse,
          alt: "Poster of the First Aid Course for Athletes, November 28, Academia Cross Fênix, with Prof. Wagner Cortez",
          caption: "Course poster, used in the highlight on the OPAM home page.",
          narrow: true,
        },
        { h2: "And on the CODEC website" },
        {
          p: "The Congresso CODEC website also got a blog. The first article covers the support for the course and points to the original article on the OPAM website, linking both addresses and taking readers straight to the full information.",
        },
        { h2: "About the course" },
        {
          p: "It is a hands-on course, with materials to practice sports first aid, immobilization and emergency care techniques. Classes are taught by Prof. Wagner Cortez Domingos, a public and private security manager, occupational nursing technician and firefighter training instructor. There are 25 spots, a R$ 50 fee and two certificates.",
        },
        { h2: "Read on the websites and follow along" },
        {
          links: [
            { label: "Article on the OPAM Karatê website", href: opamPost, external: true },
            { label: "Article on the CODEC website", href: codecPost, external: true },
            { label: "Prof. Wagner Cortez on Instagram", href: instructor, external: true },
          ],
        },
        { h2: "Want a website or blog for your event?" },
        {
          p: "Websites, event pages and blogs can be requested directly on the software house page. We reply within two business days.",
        },
      ],
    },
  },
};
