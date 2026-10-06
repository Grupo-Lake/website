/**
 * Dados institucionais centralizados. Os valores marcados com "PLACEHOLDER"
 * vieram do mockup e devem ser substituídos pelos dados reais antes do lançamento.
 */
export const site = {
  name: "Grupo Lake",
  shortName: "Lake",
  url: "https://grupolake.com.br",
  foundingYear: null as number | null, // PLACEHOLDER — ano de fundação
  legalName: "Razão social a definir", // PLACEHOLDER
  cnpj: "00.000.000/0001-00", // PLACEHOLDER
  city: "São Paulo",
  region: "SP",
  country: "BR",
  emails: {
    contact: "contato@grupolake.com.br",
    ir: "ri@grupolake.com.br",
    press: "imprensa@grupolake.com.br",
    careers: "talentos@grupolake.com.br",
    ethics: "etica@grupolake.com.br", // PLACEHOLDER — confirmar canal de ética
    privacy: "privacidade@grupolake.com.br", // PLACEHOLDER — encarregado (DPO)
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
    tripSide: "https://tripside.grupolake.com.br",
    haze: "https://www.instagram.com/hazeapp.oficial/",
  },
  cases: {
    opam: "https://www.karateopam.com.br/",
    codec: "https://www.congressocodec.com.br/",
  },
  /** Data de última revisão do conteúdo — usada no sitemap */
  lastModified: "2026-10-06",
} as const;

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();
