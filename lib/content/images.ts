export type SiteImage = { src: string; width: number; height: number };

const img = (name: string, width: number, height: number): SiteImage => ({
  src: `/images/${name}.webp`,
  width,
  height,
});

/** Imagens do site em /public/images (screenshots dos projetos e artes de marca). A legenda/alt vem do dicionário. */
export const images = {
  hero: img("hero", 1760, 680),
  portrait: img("portrait", 880, 1100),
  lakeFinance: img("lake-finance", 1440, 900),
  partners: {
    vocato: img("vocato-career", 1440, 900),
    tripSide: img("trip-side", 1440, 900),
    haze: img("haze", 1440, 900),
  },
  cases: {
    opam: img("opam-karate", 1440, 900),
    codec: img("codec", 1440, 900),
  },
  press: [img("press-1", 1000, 563), img("press-2", 1000, 563), img("press-3", 1000, 563)],
  careers: [img("team", 900, 900), img("office", 700, 700), img("event", 700, 700)],
} as const;

/** Screenshot por chave de projeto (cases da home e da página de software). */
export const projectShots: Record<string, SiteImage> = {
  lakeFinance: images.lakeFinance,
  ...images.partners,
  ...images.cases,
};
