/**
 * Dados institucionais centralizados. Os valores marcados com "PLACEHOLDER"
 * vieram do mockup e devem ser substituídos pelos dados reais antes do lançamento.
 */
const MAIN_EMAIL = "jefferson.laurindo@grupolake.com.br";

export const site = {
  name: "Grupo Lake",
  shortName: "Lake",
  url: "https://grupolake.com.br",
  foundingYear: null as number | null, // PLACEHOLDER — ano de fundação
  legalName: "JEFFERSON L. DA SILVA",
  cnpj: "57.924.952/0001-19",
  city: "São Paulo",
  region: "SP",
  country: "BR",
  /** Canal único por enquanto; separar por área quando houver caixas dedicadas. */
  emails: {
    contact: MAIN_EMAIL,
    ir: MAIN_EMAIL,
    press: MAIN_EMAIL,
    careers: MAIN_EMAIL,
    ethics: MAIN_EMAIL,
    privacy: MAIN_EMAIL, // encarregado (DPO)
  },
  social: {
    instagram: "https://www.instagram.com/grupolake/", // PLACEHOLDER — confirmar perfil
    linkedin: "https://www.linkedin.com/company/grupolake/", // PLACEHOLDER — confirmar perfil
  },
  founder: { name: "Jefferson Silva" },
  /** Faixa de números da Home — PLACEHOLDER (mockup usa "00") */
  stats: { products: "00+", companies: "00", revenue: "R$ 0,0M", founded: "0000" },
  portfolio: {
    lakeFinance: "https://finance.grupolake.com.br/",
    vocato: "https://vocatocareer.com.br",
    tripSide: "https://tripside.grupolake.com.br",
    haze: "https://www.instagram.com/hazeapp.oficial/",
  },
  cases: {
    opam: "https://www.karateopam.com.br/",
    codec: "https://www.congressocodec.com.br/",
  },
  /** Data de última revisão do conteúdo — usada no sitemap */
  lastModified: "2026-10-27",
} as const;

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();
