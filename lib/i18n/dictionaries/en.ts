import type { Dictionary } from "./pt";

const en: Dictionary = {
  meta: {
    siteTitle: "Grupo Lake",
    defaultDescription:
      "Grupo Lake grows businesses through an in-house software house, thesis-driven investments and hands-on management alongside founders. São Paulo, Brazil.",
    keywords: [
      "Grupo Lake",
      "software house",
      "software development",
      "investments",
      "business acceleration",
      "strategic management",
      "Lake Finance",
      "São Paulo",
    ],
    home: {
      title: "Grupo Lake — software, investments and business acceleration",
      description:
        "Grupo Lake grows businesses through an in-house software house, thesis-driven investments and hands-on management alongside founders. São Paulo, Brazil.",
      ogAlt: "Grupo Lake — building the future through technology and solid partnerships",
    },
    software: {
      title: "Software house",
      description:
        "Product, design, engineering, QA and applied AI under one roof. Websites, platforms and apps that become real assets for your business. Start a project.",
      ogAlt: "Grupo Lake software house — software that becomes a business asset",
    },
    careers: {
      title: "Careers",
      description:
        "Open roles in engineering, product, design and business at Grupo Lake. Small teams, real autonomy and direct impact on portfolio companies. Apply now.",
      ogAlt: "Careers at Grupo Lake — build businesses, not just software",
    },
    ri: {
      title: "Investor relations",
      description:
        "Grupo Lake investor relations portal: earnings, market announcements, corporate governance and the investor calendar. Coming soon.",
    },
    privacy: {
      title: "Privacy policy",
      description:
        "How Grupo Lake collects, uses, stores and protects personal data in compliance with Brazil's LGPD (Law 13,709/2018), and how to exercise your rights.",
    },
    terms: {
      title: "Terms of use",
      description:
        "Terms and conditions for using the Grupo Lake corporate website: intellectual property, external links, responsibilities and governing law.",
    },
    notFound: {
      title: "Page not found",
      description: "The page you are looking for does not exist or has moved.",
    },
  },

  nav: {
    links: {
      grupo: "The group",
      software: "Software house",
      portfolio: "Portfolio",
      carreiras: "Careers",
      imprensa: "Press",
    },
    contact: "Contact",
    talkToGroup: "Talk to the group",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main navigation",
    skipToContent: "Skip to content",
    language: "Language",
    homeLabel: "home page",
    breadcrumbHome: "Home",
  },

  footer: {
    tagline:
      "Strategic management, innovation and business acceleration. Building the future through investments and solid partnerships.",
    groupTitle: "Group",
    softwareTitle: "Software house",
    contactTitle: "Contact",
    group: { about: "About us", leadership: "Leadership", portfolio: "Portfolio", careers: "Careers" },
    software: { services: "Services", cases: "Projects", start: "Start a project" },
    press: "Press",
    privacy: "Privacy (LGPD)",
    ethics: "Ethics hotline",
    terms: "Terms of use",
    legalNav: "Legal links",
    social: "Social media",
  },

  common: {
    comingSoon: "Coming soon",
    opensInNewTab: "(opens in a new tab)",
    lgpdNote: "Your data is processed in accordance with Brazil's LGPD and our",
    privacyPolicy: "privacy policy",
    faqEyebrow: "Frequently asked questions",
    backHome: "Back to the home page",
    notFoundText: "The page you are looking for does not exist or has moved.",
  },

  forms: {
    name: "Name",
    namePlaceholder: "Your full name",
    email: "Email",
    emailPlaceholder: "you@company.com",
    company: "Company",
    companyPlaceholder: "Company name",
    message: "Message",
    messagePlaceholder: "Tell us in a few lines what you are building (optional)",
    institution: "Institution",
    institutionPlaceholder: "Optional",
    sending: "Sending…",
    success: "Message sent. We will get back to you within two business days.",
    successMailing: "You're subscribed. You will receive our announcements by email.",
    errorGeneric: "We couldn't send it right now. Please try again or write to",
    errorInvalid: "Please review the highlighted fields.",
    errors: {
      name: "Please enter your name.",
      email: "Please enter a valid email.",
      topic: "Please choose a subject.",
    },
  },

  home: {
    hero: {
      eyebrow: "Strategic management · Innovation · Acceleration",
      title: { a: "Building the future through", em: "technology", b: "and solid partnerships." },
      lead: "Grupo Lake is a strategic group that grows businesses through its software house, thesis-driven investments and hands-on management alongside founders.",
      ctaPrimary: "Meet the group",
      ctaSecondary: "Software house",
      media: "Corporate photo / video",
    },
    stats: {
      label: "Grupo Lake in numbers",
      products: "digital products delivered",
      companies: "portfolio companies",
      revenue: "consolidated revenue",
      founded: "year founded",
    },
    group: {
      eyebrow: "Who we are",
      title: { a: "Three integrated fronts.", em: "One", b: "value thesis." },
      p1: "We believe technology is the main growth lever of any business. That is why Grupo Lake combines in-house software development with capital and strategic management.",
      p2: "We act as partners: we build the product, structure the operation and follow every portfolio company with governance, clear goals and regular reporting.",
      software: {
        eyebrow: "01 — Core business",
        title: "Software house",
        desc: "Product, design, engineering and quality under one roof. We build platforms, apps and websites that become strategic assets — for group companies and for clients.",
        cta: "Discover the software house",
        caps: [
          { icon: "layout-template", t: "Product & design" },
          { icon: "code-xml", t: "Engineering" },
          { icon: "sparkles", t: "Applied AI" },
          { icon: "shield-check", t: "Testing & QA" },
        ],
      },
      invest: {
        n: "02",
        title: "Investments",
        desc: "Stakes in businesses where technology multiplies value, backed by an investment thesis, allocation criteria and regular monitoring.",
      },
      accel: {
        n: "03",
        title: "Acceleration",
        desc: "Strategic management side by side with founders: positioning, operations, channels and finance — from the first customer to scale.",
      },
    },
    portfolio: {
      eyebrow: "Portfolio & partners",
      title: "Businesses that grow with the group.",
      lakeFinance: {
        name: "Lake Finance",
        title: { a: "Financial clarity,", em: "powered by AI", b: "." },
        desc: "A personal financial advisor that anticipates problems, suggests solutions and automates money management through Open Finance.",
        cta: "Visit website",
        status: "In beta",
        shot: "Screenshot — Lake Finance",
      },
      partners: [
        {
          key: "tripSide",
          badge: "Partner",
          name: "Trip Side",
          desc: "A network of authorized resellers with a B2B portal for store registration and pre-pack orders.",
          img: "Image — Trip Side",
        },
        {
          key: "haze",
          badge: "Partner · QA",
          name: "Haze",
          desc: "A dating app. The group's software house led the entire software testing effort.",
          img: "Image — Haze App",
        },
      ],
      partnerCta: "Learn more",
    },
    cases: {
      eyebrow: "Built by the software house",
      title: "Delivered projects.",
      all: "All projects",
      shot: "Website screenshot",
      items: [
        {
          key: "opam",
          name: "OPAM Karatê",
          domain: "karateopam.com.br",
          tag: "Corporate website",
          desc: "Digital presence for the São Paulo Karate Organization: events, members and official communication.",
        },
        {
          key: "codec",
          name: "CODEC Congress",
          domain: "congressocodec.com.br",
          tag: "Event platform",
          desc: "The congress website, bringing schedule, speakers and registration together in one place.",
        },
      ],
    },
    leadership: {
      eyebrow: "Leadership",
      quote: {
        a: "“We build businesses the way we build software: with method, transparency and a",
        em: "long-term",
        b: "view.”",
      },
      role: "Founder",
      portrait: "Portrait — Jefferson Silva",
    },
    governance: {
      eyebrow: "Governance & ESG",
      title: "Structured for capital markets from day one.",
      lead: "Transparency, internal controls and accountability are part of the operation — not a future milestone. Corporate governance best practices are the standard across the whole group.",
      items: [
        { icon: "scale", t: "Board of directors", d: "Composition, committees and internal charters." },
        { icon: "file-check", t: "Code of conduct", d: "Ethical principles guiding every group company." },
        { icon: "shield-check", t: "Compliance & LGPD", d: "Privacy, information security and integrity policies." },
        { icon: "leaf", t: "ESG", d: "Environmental, social and governance commitments." },
        { icon: "megaphone", t: "Ethics hotline", d: "Confidential, independent and anonymous reports." },
      ],
    },
    press: {
      eyebrow: "Press",
      title: "Group news.",
      kit: "Press kit",
      image: "Image",
      items: [
        { cat: "Portfolio", tone: "brand", date: "00 OCT 2026", t: "Lake Finance opens early access to its beta" },
        { cat: "Software", tone: "info", date: "00 SEP 2026", t: "Software house delivers the CODEC Congress platform" },
        { cat: "Group", tone: "neutral", date: "00 AUG 2026", t: "Group corporate news headline" },
      ],
    },
    careers: {
      eyebrow: "Careers",
      title: "Build businesses with us.",
      lead: "Engineering, product, design and business. Small teams, real autonomy and direct impact on the portfolio.",
      cta: "See openings",
    },
    contact: {
      eyebrow: "Contact",
      title: { a: "Have a business ready to", em: "accelerate", b: "?" },
      lead: "Software, capital or management — tell us what you are building. We reply within two business days.",
      location: "São Paulo, Brazil",
      topicLabel: "Subject",
      topics: ["Software house", "Investment", "Partnership", "Press"],
      submit: "Send message",
    },
    faq: {
      title: "What you need to know about Grupo Lake.",
      items: [
        {
          q: "What is Grupo Lake?",
          a: "Grupo Lake is a Brazilian strategic group headquartered in São Paulo that grows businesses through three integrated fronts: an in-house software house, thesis-driven investments and acceleration with hands-on management alongside founders.",
        },
        {
          q: "What does the Grupo Lake software house do?",
          a: "The software house brings together product, design, engineering, testing & QA and applied AI. It builds websites, web platforms and iOS and Android apps for group companies and for external clients.",
        },
        {
          q: "Which companies are in the portfolio?",
          a: "The portfolio includes Lake Finance, an AI-powered personal financial advisor using Open Finance (in beta), and partners such as Trip Side, a reseller network with a B2B portal, and the Haze app, whose testing was led by the software house.",
        },
        {
          q: "How does Grupo Lake invest in and accelerate businesses?",
          a: "The group acts as a partner: it takes stakes in businesses where technology multiplies value, with a clear investment thesis and allocation criteria, and supports founders in positioning, operations, channels and finance, with governance and regular reporting.",
        },
        {
          q: "How can I pitch a business or start a project?",
          a: "Fill in the contact form on this page or write to contato@grupolake.com.br. The team replies within two business days with next steps.",
        },
      ],
    },
  },

  software: {
    breadcrumb: "Software house",
    hero: {
      eyebrow: "Software house · Grupo Lake",
      title: { a: "Software that becomes an", em: "asset", b: "for your business." },
      lead: "From discovery to operations: product, design, engineering and quality with the rigor of a team that also invests in and runs the businesses it builds.",
      ctaPrimary: "Start a project",
      ctaSecondary: "See projects",
    },
    services: {
      eyebrow: "What we do",
      title: "A complete team, under one roof.",
      lead: "We set up multidisciplinary squads per project, with a single owner accountable for delivery and continuous support after launch.",
      items: [
        { icon: "compass", t: "Product strategy", d: "Discovery, prioritization and roadmaps driven by business outcomes." },
        { icon: "layout-template", t: "UX & UI design", d: "Research, information architecture and interfaces built on a dedicated design system." },
        { icon: "monitor-smartphone", t: "Websites & platforms", d: "Corporate websites, B2B portals and high-performance event platforms." },
        { icon: "smartphone", t: "Mobile apps", d: "Native and cross-platform apps for iOS and Android." },
        { icon: "shield-check", t: "Testing & QA", d: "Test strategy, automation and end-to-end quality assurance." },
        { icon: "sparkles", t: "Applied AI", d: "Predictive models, copilots and automations built into the product." },
      ],
    },
    process: {
      eyebrow: "How we work",
      title: "A five-step method.",
      steps: [
        { t: "Discovery", d: "Immersion in the business, its goals and success metrics." },
        { t: "Design", d: "Flows, prototypes and a visual system validated with users." },
        { t: "Engineering", d: "Development in short cycles, shipping every sprint." },
        { t: "Quality", d: "Functional, automated and regression testing throughout the cycle." },
        { t: "Evolution", d: "Monitoring, support and an ongoing roadmap after launch." },
      ],
    },
    cases: {
      eyebrow: "Projects",
      title: "Recent work.",
      items: [
        {
          key: "lakeFinance",
          name: "Lake Finance",
          domain: "finance.grupolake.com.br",
          img: "Screenshot — Lake Finance",
          tags: ["In-house product", "AI"],
          desc: "A personal financial advisor with predictive AI, a natural-language copilot and Open Finance integration. Product, design and engineering by the software house.",
          cta: "Visit",
        },
        {
          key: "haze",
          name: "Haze",
          domain: "iOS · Android app",
          img: "Screens — Haze App",
          tags: ["Testing & QA", "Mobile app"],
          desc: "A dating app. We led the entire software testing effort — planning, test cases, automation and regression.",
          cta: "Learn more",
        },
        {
          key: "opam",
          name: "OPAM Karatê",
          domain: "karateopam.com.br",
          img: "Screenshot — OPAM",
          tags: ["Corporate website"],
          desc: "Official website of the São Paulo Karate Organization, with events, members and institutional communication.",
          cta: "Visit",
        },
        {
          key: "codec",
          name: "CODEC Congress",
          domain: "congressocodec.com.br",
          img: "Screenshot — CODEC",
          tags: ["Event platform"],
          desc: "The congress platform, with schedule, speakers and registration in a single experience.",
          cta: "Visit",
        },
      ],
    },
    why: {
      title: "Why Grupo Lake",
      items: [
        { t: "A partner's mindset", d: "We also invest in and run businesses. We treat the product as an asset, not a one-off delivery." },
        { t: "Quality from day one", d: "Testing and QA are part of every sprint, not a final phase." },
        { t: "One owner, end to end", d: "A single point of contact and regular progress reports." },
      ],
    },
    faq: {
      title: "Questions about the software house.",
      items: [
        {
          q: "What kind of projects does the Grupo Lake software house build?",
          a: "Corporate websites, B2B portals, event platforms, native and cross-platform iOS and Android apps, plus applied AI solutions such as predictive models, copilots and automations.",
        },
        {
          q: "How does the development process work?",
          a: "In five steps: discovery, design, engineering, quality and evolution. Development happens in short cycles, shipping every sprint, with testing throughout.",
        },
        {
          q: "Can I hire only software testing and QA?",
          a: "Yes. The software house runs complete testing engagements — planning, test cases, automation and regression — as it did for the Haze app.",
        },
        {
          q: "How soon will I hear back?",
          a: "We reply within two business days with next steps and a discovery proposal.",
        },
      ],
    },
    contact: {
      eyebrow: "Start a project",
      title: { a: "Tell us what you want to", em: "build", b: "." },
      lead: "We reply within two business days with next steps and a discovery proposal.",
      kindLabel: "Project type",
      kinds: ["Corporate website", "Mobile app", "Web platform", "Testing & QA", "Applied AI"],
      submit: "Send brief",
    },
  },

  careers: {
    breadcrumb: "Careers",
    hero: {
      eyebrow: "Careers at Grupo Lake",
      title: { a: "Build businesses,", em: "not just", b: "software." },
      lead: "Small teams, real autonomy and direct contact with the products and companies in the portfolio.",
      cta: "See open roles",
      photos: ["Team photo", "Office", "Event"],
    },
    values: {
      eyebrow: "How we work",
      title: "What we expect — and offer.",
      items: [
        { n: "01", t: "Own the outcome", d: "Everyone is accountable for a clear part of the business — and has the autonomy to decide." },
        { n: "02", t: "No shortcuts on quality", d: "We do it right the first time. Reviews and testing are part of the job." },
        { n: "03", t: "Transparency", d: "Goals, numbers and decisions shared with the team." },
        { n: "04", t: "Long term", d: "We build companies and careers that last." },
      ],
      perksLabel: "Benefits",
      perks: [
        { icon: "heart-pulse", t: "Health insurance" },
        { icon: "laptop", t: "Work equipment" },
        { icon: "house", t: "Hybrid model" },
        { icon: "graduation-cap", t: "Education allowance" },
        { icon: "trending-up", t: "Profit sharing" },
        { icon: "calendar-heart", t: "Birthday day off" },
      ],
    },
    jobs: {
      eyebrow: "Open roles",
      one: "open position.",
      many: "open positions.",
      filterLabel: "Filter roles by area",
      all: "All",
      areas: ["Engineering", "Design", "Product", "Corporate"],
      applySubject: "Application",
      apply: "Apply",
      items: [
        { t: "Mid-level software engineer — React / Node", area: "Engineering", loc: "São Paulo · Hybrid", type: "CLT" },
        { t: "QA analyst — mobile automation", area: "Engineering", loc: "Remote", type: "CLT" },
        { t: "Senior product designer", area: "Design", loc: "São Paulo · Hybrid", type: "Contractor" },
        { t: "Product manager — Lake Finance", area: "Product", loc: "São Paulo · Hybrid", type: "CLT" },
        { t: "Investor relations analyst", area: "Corporate", loc: "São Paulo · On-site", type: "CLT" },
      ],
      note: "Illustrative openings. Didn't find yours? Send your profile to",
    },
    process: {
      eyebrow: "Hiring process",
      title: "Simple and transparent.",
      items: [
        { n: "01", t: "Apply", d: "Send your profile through the opening or by email." },
        { n: "02", t: "Intro call", d: "30 minutes with the people team." },
        { n: "03", t: "Technical step", d: "A hands-on challenge or an interview with leadership." },
        { n: "04", t: "Offer", d: "Feedback for every participant." },
      ],
    },
  },

  ri: {
    breadcrumb: "Investors",
    soonBanner:
      "The investor relations portal is under construction. The information below is illustrative and will be published according to the official calendar.",
    hero: {
      eyebrow: "Investor relations",
      title: { a: "Transparency as a", em: "foundation", b: "." },
      lead: "Grupo Lake earnings, announcements, governance and calendar, gathered for shareholders, analysts and the market.",
      ticker: "LAKE3 · B3 · Novo Mercado",
      session: "Trading",
      price: "R$ 00.00",
      change: "+0.00%",
      stats: [
        { l: "Market cap", v: "R$ 0.0B" },
        { l: "Shares", v: "000.0M" },
        { l: "Free float", v: "00%" },
      ],
      footnote: "Quotes delayed by 15 minutes. Illustrative data.",
    },
    subnav: {
      label: "Investor relations sections",
      results: "Earnings center",
      facts: "Material facts",
      agenda: "Calendar",
      governance: "Governance",
      contact: "Contact IR",
    },
    results: {
      eyebrow: "Earnings center",
      title: "Quarterly results.",
      yearLabel: "Year",
      kpis: [
        { label: "Net revenue", value: "R$ 00.0M", delta: "+0.0% YoY" },
        { label: "Adjusted EBITDA", value: "R$ 0.0M", delta: "+0.0% YoY" },
        { label: "EBITDA margin", value: "00.0%", delta: "+0.0 p.p." },
        { label: "Net cash", value: "R$ 00.0M", delta: "+0.0% QoQ" },
      ],
      docHeader: "Document",
      quarter: "Q",
      docs: ["Earnings release", "Presentation", "ITR / DFP", "Fundamentals spreadsheet", "Conference call"],
      audio: "Audio",
      footnote:
        "Documents available in PDF and XLS. Files for future periods will be published according to the disclosure calendar.",
    },
    facts: {
      eyebrow: "Market announcements",
      title: "Material facts and notices.",
      filterLabel: "Filter announcements by type",
      all: "All",
      types: ["Material fact", "Announcement", "Shareholder notice", "Meeting"],
      items: [
        { date: "00/00/2026", type: "Material fact", t: "Title of the material fact disclosed to the market" },
        { date: "00/00/2026", type: "Announcement", t: "Market announcement — title" },
        { date: "00/00/2026", type: "Shareholder notice", t: "Shareholder notice — dividend payment" },
        { date: "00/00/2026", type: "Meeting", t: "Call notice — Annual General Meeting" },
        { date: "00/00/2026", type: "Announcement", t: "Market announcement — title" },
      ],
    },
    agenda: {
      eyebrow: "Investor calendar",
      title: "Upcoming events.",
      add: "Add to calendar",
      items: [
        { day: "00", mon: "NOV 2026", icon: "chart-column", t: "3Q26 earnings release", d: "After market close" },
        { day: "00", mon: "NOV 2026", icon: "video", t: "Earnings conference call", d: "Portuguese, with simultaneous translation" },
        { day: "00", mon: "DEC 2026", icon: "users", t: "Lake Day — investors", d: "São Paulo and live stream" },
        { day: "00", mon: "APR 2027", icon: "landmark", t: "Annual General Meeting", d: "Hybrid format" },
      ],
    },
    governance: {
      eyebrow: "Corporate governance",
      title: "Management.",
      board: [
        { name: "Jefferson Silva", role: "Founder", tbd: false },
        { name: "To be announced", role: "Chair of the board", tbd: true },
        { name: "To be announced", role: "Independent board member", tbd: true },
        { name: "To be announced", role: "CFO and IR officer", tbd: true },
      ],
      docsEyebrow: "Documents",
      docsTitle: "Bylaws and policies.",
      policies: [
        "Bylaws",
        "Code of conduct",
        "Disclosure policy",
        "Trading policy",
        "Related parties",
        "Board charter",
      ],
    },
    contact: {
      eyebrow: "Contact IR",
      title: { a: "Get our announcements", em: "first", b: "." },
      lead: "Join the IR mailing list to receive earnings, material facts and event invitations.",
      officer: "IR officer — to be announced",
      emailPlaceholder: "you@institution.com",
      institutional: "I am an institutional investor",
      submit: "Join mailing list",
    },
  },

  legal: {
    updated: "Last updated",
    privacy: {
      title: "Privacy policy",
      intro:
        "This policy explains how Grupo Lake processes personal data collected through this website, in compliance with Brazil's General Data Protection Law (Law No. 13,709/2018 — LGPD).",
      sections: [
        {
          h: "1. Data controller",
          p: [
            "The controller of personal data is Grupo Lake, headquartered in São Paulo, Brazil. Privacy questions and requests can be sent to our data protection officer at the email address at the end of this policy.",
          ],
        },
        {
          h: "2. Data we collect",
          p: [
            "Data you voluntarily send through our forms: name, email, company or institution, subject and message.",
            "Technical data strictly necessary for the website to work, such as the language preference cookie. We do not use advertising cookies.",
          ],
        },
        {
          h: "3. How we use data",
          p: [
            "To reply to business inquiries, project proposals, press requests and job applications; to send announcements to mailing list subscribers; and to comply with legal and regulatory obligations.",
          ],
        },
        {
          h: "4. Legal bases",
          p: [
            "We process data based on consent, pre-contractual steps requested by the data subject, legitimate interest and compliance with legal obligations, under Article 7 of the LGPD.",
          ],
        },
        {
          h: "5. Sharing",
          p: [
            "Data may be shared with vendors that help us run the website and send emails, always under contract and only as needed. We do not sell personal data.",
          ],
        },
        {
          h: "6. Retention and security",
          p: [
            "We keep data for as long as needed for the purposes described or as required by law, with technical and administrative measures to protect it from unauthorized access.",
          ],
        },
        {
          h: "7. Your rights",
          p: [
            "You may request confirmation of processing, access, correction, anonymization, portability, deletion, information about sharing and withdrawal of consent, under Article 18 of the LGPD.",
          ],
        },
      ],
      contact: "To exercise your rights, write to",
    },
    terms: {
      title: "Terms of use",
      intro: "By accessing this website you agree to the terms below. If you do not agree, please do not use the website.",
      sections: [
        {
          h: "1. Purpose of the website",
          p: [
            "This website presents corporate information about Grupo Lake, its software house, portfolio and career opportunities. The information is for reference only and does not constitute an offer or investment recommendation.",
          ],
        },
        {
          h: "2. Intellectual property",
          p: [
            "Trademarks, logos, texts, images and other content belong to Grupo Lake or its licensors and may not be reproduced without prior authorization.",
          ],
        },
        {
          h: "3. External links",
          p: [
            "The website may link to portfolio companies, partners and clients. We are not responsible for the content or privacy practices of third-party websites.",
          ],
        },
        {
          h: "4. Responsibilities",
          p: [
            "We strive to keep information accurate and up to date, but it may change without notice. Use of the website is at the user's own responsibility.",
          ],
        },
        {
          h: "5. Governing law and venue",
          p: [
            "These terms are governed by Brazilian law. The courts of São Paulo, Brazil, have jurisdiction over any disputes.",
          ],
        },
      ],
      contact: "Questions about these terms:",
    },
  },

  llms: {
    summary:
      "Grupo Lake is a Brazilian strategic group headquartered in São Paulo that grows businesses through three integrated fronts: an in-house software house, thesis-driven investments and acceleration with hands-on management alongside founders.",
  },
};

export default en;
