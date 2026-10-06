import type { Metadata } from "next";
import { hasLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/ui/Decor";
import { CareersHero, CareersJobs, CareersProcess, CareersValues } from "@/components/sections/careers";

export async function generateMetadata({ params }: PageProps<"/[lang]/carreiras">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return buildMetadata({
    lang,
    route: "careers",
    dict,
    title: dict.meta.careers.title,
    description: dict.meta.careers.description,
  });
}

/* JobPosting não é emitido: as vagas atuais são ilustrativas. Adicionar quando houver vagas reais. */
export default async function CareersPage({ params }: PageProps<"/[lang]/carreiras">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return null;
  const dict = await getDictionary(lang);
  const props = { lang, dict };

  return (
    <>
      <CareersHero {...props} />
      <CareersValues {...props} />
      <CareersJobs {...props} />
      <CareersProcess {...props} />
      <JsonLd
        data={[
          webPageJsonLd({ lang, route: "careers", name: dict.meta.careers.title, description: dict.meta.careers.description }),
          breadcrumbJsonLd(lang, dict, [{ route: "careers", name: dict.careers.breadcrumb }]),
        ]}
      />
    </>
  );
}
