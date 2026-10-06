import type { Metadata } from "next";
import { hasLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { site } from "@/lib/content/site";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd, localizedUrl, webPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/ui/Decor";
import { Faq } from "@/components/ui/Faq";
import {
  SoftwareCases,
  SoftwareContact,
  SoftwareHero,
  SoftwareProcess,
  SoftwareServices,
  SoftwareWhy,
} from "@/components/sections/software";

export async function generateMetadata({ params }: PageProps<"/[lang]/casa-de-software">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return buildMetadata({
    lang,
    route: "software",
    dict,
    title: dict.meta.software.title,
    description: dict.meta.software.description,
  });
}

export default async function SoftwarePage({ params }: PageProps<"/[lang]/casa-de-software">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return null;
  const dict = await getDictionary(lang);
  const props = { lang, dict };
  const sw = dict.software;
  const pageUrl = localizedUrl(lang, "software");

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${pageUrl}#service`,
    name: `${dict.meta.software.title} · ${site.name}`,
    description: dict.meta.software.description,
    url: pageUrl,
    parentOrganization: { "@id": `${site.url}/#organization` },
    areaServed: "BR",
    address: { "@type": "PostalAddress", addressLocality: site.city, addressRegion: site.region, addressCountry: site.country },
    email: site.emails.contact,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: sw.services.title,
      itemListElement: sw.services.items.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.t, description: s.d },
      })),
    },
  };

  const casesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: sw.cases.title,
    itemListElement: sw.cases.items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "CreativeWork", name: c.name, description: c.desc, keywords: c.tags.join(", ") },
    })),
  };

  return (
    <>
      <SoftwareHero {...props} />
      <SoftwareServices {...props} />
      <SoftwareProcess {...props} />
      <SoftwareCases {...props} />
      <SoftwareWhy {...props} />
      <Faq id="faq" eyebrow={dict.common.faqEyebrow} title={sw.faq.title} items={sw.faq.items} />
      <div className="border-t border-subtle">
        <SoftwareContact {...props} />
      </div>
      <JsonLd
        data={[
          webPageJsonLd({ lang, route: "software", name: dict.meta.software.title, description: dict.meta.software.description }),
          breadcrumbJsonLd(lang, dict, [{ route: "software", name: sw.breadcrumb }]),
          serviceJsonLd,
          casesJsonLd,
          faqJsonLd(sw.faq.items),
        ]}
      />
    </>
  );
}
