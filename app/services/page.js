import ServicePageShell from "@/components/ServicePageShell";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export const metadata = {
  title: "Our Services — Web, Mobile, AI, SaaS & Web3 | OneNineLabs",
  description:
    "Explore OneNineLabs services: web, mobile, AI, SaaS, blockchain, marketing and DevOps — core capabilities, 99.9% SLA, SOC 2-ready. Let's build your next system.",
  keywords: [
    "software development services",
    "web development services",
    "AI automation services",
    "SaaS development services",
    "blockchain development services",
    "SEO PPC marketing services",
    "cybersecurity DevOps services",
    "mobile app development",
    "React Native Flutter",
    "OneNineLabs services",
  ],
  alternates: {
    canonical: "/services",
    languages: {
      "en-US": "/services",
      "en": "/services",
      "x-default": "/services",
    },
  },
  openGraph: {
    title: "OneNineLabs Services — Custom Software Engineering for Enterprise Growth",
    description:
      "From high-scale Web3 protocols and AI automation pipelines to multi-tenant SaaS platforms — OneNineLabs delivers battle-tested software tailored for enterprise growth.",
    url: `${siteUrl}/services`,
    siteName: "OneNineLabs",
    type: "website",
    images: [{ url: "/services/services_hero_main.png", width: 1200, height: 630, alt: "OneNineLabs Services Overview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OneNineLabs Services — Custom Software Engineering for Enterprise Growth",
    description: "Web, AI, SaaS, Blockchain, Marketing & Security — enterprise software that scales.",
    images: ["/services/services_hero_main.png"],
  },
  robots: { index: true, follow: true },
};

const servicesList = [
  {
    id: "web-development",
    title: "Web Development",
    role: "Next.js, React & Node.js",
    category: "Web",
    href: "/services/web-development",
    icon: "🌐",
    gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    accent: "#3b82f6",
    accentLight: "#eff6ff",
    accentBorder: "#bfdbfe",
    bullets: [
      "Next.js 15 & React 19 — SSR, SSG, RSC, edge delivery",
      "Node.js / Python APIs with PostgreSQL & Prisma ORM",
      "Headless CMS integration (Sanity, Contentful, Strapi)",
      "Lighthouse 95+ performance optimization & CWV",
    ],
    widget: "⚡ Lighthouse 98/100 • Sub-second LCP",
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    role: "React Native, Flutter & Native iOS/Android",
    category: "Mobile",
    href: "/services/mobile-apps",
    icon: "📱",
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    accent: "#059669",
    accentLight: "#ecfdf5",
    accentBorder: "#a7f3d0",
    bullets: [
      "React Native & Flutter cross-platform with native modules",
      "Offline-first WatermelonDB sync & push notifications",
      "Biometric auth (FaceID/TouchID) & OTA EAS updates",
      "Full App Store & Play Store submission with ASO",
    ],
    widget: "📱 120fps Native Feel • EAS OTA",
  },
  {
    id: "ai-automation",
    title: "AI & Intelligent Automation",
    role: "LangChain Agents & RAG Pipelines",
    category: "AI",
    href: "/services/ai-automation",
    icon: "🤖",
    gradient: "linear-gradient(135deg, #7c3aed, #5b21b6)",
    accent: "#7c3aed",
    accentLight: "#f3e8ff",
    accentBorder: "#e9d5ff",
    bullets: [
      "Autonomous LLM agents — LangChain/LlamaIndex multi-step",
      "RAG vector search with Pinecone, pgvector & Qdrant",
      "Custom Llama 3 / Mistral LoRA/QLoRA fine-tuning",
      "Event-driven queues: Slack, Salesforce & CRM bots",
    ],
    widget: "🤖 LangChain Agents • 98% Accuracy",
  },
  {
    id: "saas",
    title: "Multi-Tenant SaaS Platforms",
    role: "Multi-tenant SaaS Platforms",
    category: "SaaS",
    href: "/services/saas",
    icon: "⚡",
    gradient: "linear-gradient(135deg, #6366f1, #4f46e5)",
    accent: "#4f46e5",
    accentLight: "#eef2ff",
    accentBorder: "#c7d2fe",
    bullets: [
      "PostgreSQL Row-Level Security (RLS) tenant isolation",
      "Stripe metered billing, seats, invoices & dunning webhooks",
      "SAML SSO via WorkOS, Clerk (Okta, Google, Azure AD)",
      "Granular RBAC permissions & SOC 2 audit-ready logs",
    ],
    widget: "⚡ Stripe Billing • Row-Level Security",
  },
  {
    id: "blockchain",
    title: "Blockchain & Web3 Solutions",
    role: "Solidity, L2 & Account Abstraction",
    category: "Web3",
    href: "/services/blockchain",
    icon: "⛓️",
    gradient: "linear-gradient(135deg, #0d9488, #115e59)",
    accent: "#0d9488",
    accentLight: "#ccfbf1",
    accentBorder: "#99f6e4",
    bullets: [
      "Gas-optimized Solidity smart contracts on EVM chains",
      "ERC-4337 Account Abstraction — gasless, social login wallets",
      "Layer-2 scaling: Arbitrum, Optimism, Base & ZK rollups",
      "Foundry fuzz testing suite & Slither static analysis audits",
    ],
    widget: "⛓️ Foundry Audited • Zero Exploits",
  },
  {
    id: "marketing",
    title: "Growth Marketing, SEO & PPC",
    role: "SEO, PPC & Growth Marketing",
    category: "Marketing",
    href: "/services/marketing",
    icon: "📈",
    gradient: "linear-gradient(135deg, #ec4899, #db2777)",
    accent: "#db2777",
    accentLight: "#fce7f3",
    accentBorder: "#fbcfe8",
    bullets: [
      "Technical SEO audit, Core Web Vitals & crawl architecture",
      "Google / LinkedIn / Meta PPC with bid automation & PMax",
      "Conversion Rate Optimization (CRO) — A/B tests & heatmaps",
      "Full-funnel attribution: GA4 + server-side tagging → CRM",
    ],
    widget: "📈 +340% Organic • 4.8x Campaign ROAS",
  },
];

const faqs = [
  { q: "What industries do you serve?", a: "We work with fintech, SaaS, healthcare, e-commerce, logistics, and enterprise teams worldwide. Our architectures are SOC 2-ready and built for regulated environments." },
  { q: "How long does a typical project take?", a: "Discovery (1–2 weeks), architecture & design (2–3 weeks), build & iterate (6–12 weeks), launch + hardening (1–2 weeks). We ship MVPs in 6–8 weeks with weekly demos." },
  { q: "What technology stack do you use?", a: "We specialize in Next.js 15, React 19, Node.js (Express/NestJS), Python (FastAPI/Django), PostgreSQL, Redis, Docker, Kubernetes, and cloud native (AWS, GCP)." },
  { q: "Do you offer post-launch support & maintenance?", a: "Yes — our Scale & Operate retainer includes 24/7 endpoint monitoring, continuous security patches, on-call SLAs, Lighthouse optimization, and pipeline audits." },
  { q: "How do you ensure IP & code ownership?", a: "You own 100% of the code, IP rights, database schemas, and cloud deployment pipelines upon project milestone completion." },
  { q: "What is your development pod structure?", a: "A standard pod consists of a Lead Architect, 2-4 Senior Engineers, a UI/UX Designer, a QA Automation Engineer, and a dedicated Technical Project Manager." },
  { q: "Can you work with our in-house engineering team?", a: "Yes — we integrate directly into your Jira, Slack, and GitHub workflows as an extended engineering pod." },
  { q: "How do we get started?", a: "Book a free 30-minute architecture discovery call with our principal engineer to review your requirements and receive a fixed roadmap estimate." },
];

const cfg = {
  theme: { primary: "#2563eb", gradFrom: "#1e3a8a", gradTo: "#2563eb", glow: "rgba(37,99,235,0.3)" },

  hero: {
    badge: "Professional Engineering Services",
    titleBefore: "We Are Providing",
    titleHighlight: "Professional Engineering",
    desc: "From high-scale Web3 protocols and AI automation pipelines to multi-tenant SaaS platforms — OneNineLabs delivers battle-tested software tailored for enterprise growth.",
    primaryCta: { label: "Book Architecture Review →", href: "/#contact" },
    ghostCta: { label: "Explore Engineering Capabilities", href: "/about" },
    chips: ["99.9% Uptime SLA", "SOC 2-Ready", "Senior Engineering Pods", "100% Code Ownership"],
    image: "/services/services_hero_main.png",
    imageAlt: "OneNineLabs Custom Architecture Dashboard",
    floatChips: [],
  },

  stats: [],

  marquee: ["Next.js 15", "React 19", "Node.js", "Python", "PostgreSQL", "Redis", "Kubernetes", "Docker", "AWS", "GCP", "LangChain", "Solidity", "Stripe", "Terraform"],

  welcome: {
    badge: "Welcome To Our Engineering Firm!",
    title: "High-Quality Custom Software Built to Scale",
    desc: "We blend technical architecture, modern UI design, and rigorous QA testing to build digital products that scale seamlessly from Day 1.",
    checks: [
      "100% SLA Guarantee",
      "24/7 Monitoring & Support",
      "Senior Engineering Pods",
      "SOC 2 & ISO Compliant",
    ],
    badgeStat: { num: "10+", label: "Years Experience" },
    imageTop: "/services/welcome_architecture_3d.jpg",
    imageBottom: "/services/welcome_team_3d.jpg",
    primaryCta: { label: "Get Started", href: "/#contact" },
    ghostCta: { label: "Learn More", href: "/why-us" },
  },

  services: {
    title: "Our Engineering Services",
    desc: "Explore our specialized software disciplines built for high scale.",
    items: servicesList,
  },

  process: {
    badge: "Delivery System",
    title: "4 Steps Following We Complete Work",
    desc: "Our battle-tested 4-phase agile delivery pipeline.",
    steps: [
      { num: "01", title: "Discovery & Roadmap", desc: "Technical audit, architecture diagramming, and backlog creation." },
      { num: "02", title: "Agile Pod Build", desc: "Weekly code sprints, CI/CD setup, and automated unit testing." },
      { num: "03", title: "Security & QA Audit", desc: "Penetration testing, Lighthouse tuning, and SOC 2 evidence logs." },
      { num: "04", title: "Launch & Scale", desc: "Blue-green deployment, 24/7 SLA monitoring, and continuous iterations." },
    ],
  },

  results: {
    badge: "Proven Results",
    title: "Outcomes Our Pods Deliver",
    desc: "The scale and reliability numbers behind every engagement.",
    items: [],
  },

  pricing: {
    badge: "Engagement Models",
    title: "Flexible Ways to Work With Us",
    desc: "Three proven models — pick the one that fits your stage and budget.",
    plans: [
      {
        name: "Discovery Sprint",
        tagline: "Validate before you build",
        price: "Custom",
        priceNote: " / 2-week sprint",
        features: [
          "Technical & architecture audit",
          "Requirements & roadmap",
          "Fixed estimate for the build",
          "Risk & cost modeling",
          "Executable project plan",
        ],
        cta: { label: "Start a Discovery Sprint →", href: "/#contact" },
      },
      {
        name: "Product Build Pod",
        tagline: "Dedicated engineers, weekly demos",
        price: "Custom",
        priceNote: " / month",
        featured: true,
        features: [
          "Dedicated senior engineering pod",
          "Weekly production-ready sprints",
          "CI/CD, QA & security gates",
          "Full code & IP ownership",
          "Integrated into your Slack/GitHub",
          "99.9% uptime SLA",
        ],
        cta: { label: "Book a Free Architecture Call →", href: "/#contact" },
      },
      {
        name: "Scale & Operate",
        tagline: "Post-launch growth & reliability",
        price: "Custom",
        priceNote: " / retainer",
        features: [
          "24/7 endpoint monitoring",
          "Continuous security patches",
          "Lighthouse & performance tuning",
          "Pipeline & infra audits",
          "On-call incident response",
        ],
        cta: { label: "Talk to an Architect →", href: "/#contact" },
      },
    ],
  },

  testimonial: {
    badge: "Client Reviews",
    title: "Feedback About Their Experience With Us",
    desc: "See how our senior engineering pods have helped enterprise teams scale their digital products, maintain 99.9% uptime, and achieve 4.8x ROAS growth.",
    quote: "OneNineLabs delivered our multi-tenant SaaS architecture in under 8 weeks. Their code quality is outstanding, and their 99.9% SLA commitments are backed by 24/7 monitoring.",
    author: "Marcus Vance",
    role: "CTO, Enterprise Cloud Systems",
    avatar: "MV",
  },

  faqs: {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    desc: "Got questions? We have answers.",
    items: faqs,
  },

  cta: {
    badge: "Ready When You Are",
    titleBefore: "Let's Engineer Your",
    titleHighlight: "Next Big System",
    desc: "Book a free 30-minute architecture discovery call and get a fixed roadmap estimate within 48 hours.",
    primaryCta: { label: "Book Architecture Review →", href: "/#contact" },
    ghostCta: { label: "Explore Why Us", href: "/why-us" },
  },

  contact: {
    badge: "Contact Us",
    title: "Keep In Touch",
    desc: "Tell us about your project and we'll reply within one business day.",
    location: "Gurugram, HR, India",
    email: "ankush019pay@gmail.com",
    phone: "+91 85888 07039",
    hours: "Mon - Fri: 9AM - 8PM",
    formPlaceholder: "Tell us about your project...",
    sourcePage: "services_index_contact",
  },
};

export default function ServicesPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ServicePageShell cfg={cfg} />
    </>
  );
}
