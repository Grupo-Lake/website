import type { Metadata } from "next";
import { hasLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata, faqJsonLd, webPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/ui/Decor";
import { Faq } from "@/components/ui/Faq";
import {
  HomeCareers,
  HomeCases,
  HomeContact,
  HomeGovernance,
  HomeGroup,
  HomeHero,
  HomeLeadership,
  HomePortfolio,
  HomePress,
  HomeStats,
} from "@/components/sections/home";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return buildMetadata({
    lang,
    route: "home",
    dict,
    title: dict.meta.home.title,
    description: dict.meta.home.description,
    absoluteTitle: true,
  });
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return null;
  const dict = await getDictionary(lang);
  const props = { lang, dict };

  return (
    <>
      <HomeHero {...props} />
      <HomeStats {...props} />
      <HomeGroup {...props} />
      <HomePortfolio {...props} />
      <HomeCases {...props} />
      <HomeLeadership {...props} />
      <HomeGovernance {...props} />
      <HomePress {...props} />
      <HomeCareers {...props} />
      <HomeContact {...props} />
      <div className="bg-sunken">
        <Faq id="faq" eyebrow={dict.common.faqEyebrow} title={dict.home.faq.title} items={dict.home.faq.items} />
      </div>
      <JsonLd
        data={[
          webPageJsonLd({
            lang,
            route: "home",
            name: dict.meta.home.title,
            description: dict.meta.home.description,
          }),
          faqJsonLd(dict.home.faq.items),
        ]}
      />
    </>
  );
}
