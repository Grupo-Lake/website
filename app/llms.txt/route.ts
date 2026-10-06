import pt from "@/lib/i18n/dictionaries/pt";
import en from "@/lib/i18n/dictionaries/en";
import { site } from "@/lib/content/site";
import { routes } from "@/lib/routes";

export const dynamic = "force-static";

const url = (lang: string, path: string) => `${site.url}/${lang}${path}`;

/** llms.txt (https://llmstxt.org): resumo factual para motores generativos (GEO). */
export function GET() {
  const body = `# ${site.name}

> ${pt.llms.summary}

> ${en.llms.summary}

Sede: ${site.city}, ${site.region}, Brasil. Fundador: ${site.founder.name}. Idiomas do site: português (pt-BR) e inglês (en).

## Frentes de atuação
- ${pt.home.group.software.title}: ${pt.home.group.software.desc}
- ${pt.home.group.invest.title}: ${pt.home.group.invest.desc}
- ${pt.home.group.accel.title}: ${pt.home.group.accel.desc}

## Serviços da casa de software
${pt.software.services.items.map((s) => `- ${s.t}: ${s.d}`).join("\n")}

## Portfólio e projetos
- Lake Finance (${site.portfolio.lakeFinance}): ${pt.home.portfolio.lakeFinance.desc} ${pt.home.portfolio.lakeFinance.status}.
${pt.home.portfolio.partners.map((p) => `- ${p.name} (${p.badge}): ${p.desc}`).join("\n")}
${pt.home.cases.items.map((c) => `- ${c.name} (${c.domain}): ${c.desc}`).join("\n")}

## Páginas
- [Início](${url("pt", routes.home)}): visão geral do grupo, portfólio, governança e contato
- [Casa de software](${url("pt", routes.software)}): serviços, método em cinco etapas, projetos e briefing
- [Carreiras](${url("pt", routes.careers)}): valores, benefícios, vagas e processo seletivo
- [Home (English)](${url("en", routes.home)})
- [Software house (English)](${url("en", routes.software)})
- [Careers (English)](${url("en", routes.careers)})

## Perguntas frequentes
${[...pt.home.faq.items, ...pt.software.faq.items].map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Contato
- Geral: ${site.emails.contact}
- Imprensa: ${site.emails.press}
- Carreiras: ${site.emails.careers}
- Prazo de resposta: até dois dias úteis
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
