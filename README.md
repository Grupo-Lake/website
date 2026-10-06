# Grupo Lake — site institucional

Next.js 16 (App Router, Turbopack) + React 19 + Tailwind CSS v4. Implementação do handoff
"UI mockups Grupo Lake" (design system LAKE FINANCE), mobile-first, em português e inglês.

## Rodando

```bash
npm install
npm run dev      # http://localhost:3000 → redireciona para /pt ou /en
npm run build && npm run start
npm run lint
```

## Variáveis de ambiente

| Variável         | Uso                                                                          |
| ---------------- | ---------------------------------------------------------------------------- |
| `RESEND_API_KEY` | Envio dos formulários (contato, briefing, mailing RI) via [Resend](https://resend.com). Sem ela, o formulário mostra erro amigável e loga no servidor. |
| `CONTACT_FROM`   | Remetente verificado no Resend, ex.: `Site Grupo Lake <site@grupolake.com.br>`. |

Na Vercel, o Resend pode ser instalado pela Marketplace, que injeta a chave automaticamente.

## Estrutura

```
proxy.ts                    # redireciona "/" e paths sem idioma (cookie NEXT_LOCALE > Accept-Language > pt)
app/[lang]/                 # todas as páginas (pt | en), SSG via generateStaticParams
  page.tsx                  # Home
  casa-de-software/         # Casa de software
  carreiras/                # Carreiras
  investidores/             # RI — oculta, "Em breve", noindex, fora do sitemap
  privacidade/ termos/      # páginas legais (texto-base: revisar com o jurídico)
app/actions/contact.ts      # Server Actions dos formulários (zod + honeypot + Resend)
app/sitemap.ts robots.ts manifest.ts icon.svg apple-icon.tsx llms.txt/
lib/content/site.ts         # dados institucionais e PLACEHOLDERS (preencher antes do lançamento)
lib/i18n/dictionaries/      # todo o texto do site; en.ts é tipado contra pt.ts
lib/seo.ts                  # metadata (canonical, hreflang, OG) + JSON-LD
components/ui/              # componentes do design system (Button, Card, Badge, Input…)
```

## SEO / GEO / AEO

- Metadata por página e idioma: title, description, canonical, `hreflang` pt-BR/en/x-default, Open Graph e Twitter.
- OG images geradas (`opengraph-image.tsx`) para Home, Casa de software e Carreiras.
- JSON-LD: Organization, WebSite, WebPage (speakable), BreadcrumbList, ProfessionalService + OfferCatalog, ItemList de cases e FAQPage.
- FAQ visível na Home e na Casa de software (respostas no HTML, sem depender de JS).
- `/llms.txt` com resumo factual, serviços, portfólio, FAQ e contatos.
- `robots.txt` libera explicitamente os crawlers de IA (GPTBot, ClaudeBot, PerplexityBot etc.).

## Antes de lançar

1. Preencher os itens marcados com `PLACEHOLDER` em `lib/content/site.ts`: razão social, CNPJ, números da Home, perfis de Instagram/LinkedIn e e-mails de ética/privacidade.
2. Trocar os placeholders listrados (`<Placeholder>`) por fotos e screenshots reais com `next/image`.
3. Substituir as notícias e vagas ilustrativas nos dicionários. Com vagas reais, adicionar JSON-LD `JobPosting`.
4. Revisar juridicamente Privacidade e Termos.
5. Configurar `RESEND_API_KEY` e `CONTACT_FROM`.
6. Para lançar o RI:
   - remover `noindex` em `app/[lang]/investidores/page.tsx`;
   - incluir `ri` em `app/sitemap.ts`;
   - adicionar os links no Header e no Footer.
