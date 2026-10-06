import type { Metadata } from "next";
import { hasLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";
import {
  RiAgenda,
  RiContact,
  RiFacts,
  RiGovernance,
  RiHero,
  RiResults,
  RiSoonBanner,
  RiSubnav,
} from "@/components/sections/ri";

/**
 * Portal de RI — "Em breve".
 * Acessível apenas por URL direta: fora de menus, footer, CTAs e sitemap, com noindex.
 * Para lançar: remover `noindex`, incluir no sitemap (app/sitemap.ts) e nos links do Header/Footer.
 */
export async function generateMetadata({ params }: PageProps<"/[lang]/investidores">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return buildMetadata({
    lang,
    route: "ri",
    dict,
    title: `${dict.meta.ri.title} — ${dict.common.comingSoon}`,
    description: dict.meta.ri.description,
    noindex: true,
  });
}

export default async function InvestorsPage({ params }: PageProps<"/[lang]/investidores">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return null;
  const dict = await getDictionary(lang);
  const props = { lang, dict };

  return (
    <>
      <RiHero {...props} />
      <RiSoonBanner {...props} />
      <RiSubnav {...props} />
      <RiResults {...props} />
      <RiFacts {...props} />
      <RiAgenda {...props} />
      <RiGovernance {...props} />
      <RiContact {...props} />
    </>
  );
}
