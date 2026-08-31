import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export const metadata = {
  title: "Tech Stack — Languages & Environments | OneNineLabs",
  description:
    "Inside OneNineLabs’ 12 live environments: TypeScript, Python, Go, Rust, Solidity and more — Next.js to K8s, all in production with benchmarks and terminals.",
  keywords: [
    "OneNineLabs tech stack",
    "programming languages OneNineLabs",
    "TypeScript Next.js React",
    "Python FastAPI",
    "Go gRPC",
    "Rust",
    "Solidity Web3",
    "Swift Kotlin mobile",
    "React Native",
    "Node.js",
    "Docker Kubernetes",
    "PyTorch TensorFlow",
    "GraphQL PostgreSQL",
    "Tailwind CSS",
  ],
  alternates: {
    canonical: "/languages",
    languages: {
      "en-US": "/languages",
      en: "/languages",
      "hi-IN": "/languages",
      "x-default": "/languages",
    },
  },
  openGraph: {
    title: "Core Working Languages & Environments — OneNineLabs",
    description: "12 battle-tested languages & runtimes — from Next.js & Python to Rust & Solidity — all live in production.",
    url: `${siteUrl}/languages`,
    siteName: "OneNineLabs",
    type: "website",
    images: [{ url: "/tech_banner.png", width: 1200, height: 630, alt: "OneNineLabs Languages & Environments" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Core Working Languages & Environments — OneNineLabs",
    description: "TypeScript, Python, Go, Rust, Solidity & more — explore our 12 live environments.",
    images: ["/tech_banner.png"],
  },
  robots: { index: true, follow: true },
};

const languages = [
  {
    id: "ts",
    name: "TypeScript",
    badge: "Full Stack",
    color: "#0284c7",
    category: "Frontend & Mobile",
    desc: "Next.js 15, React 19, and Node.js — typed, fast, and production-hardened for web platforms and SaaS dashboards.",
    longDesc:
      "Our primary frontend stack. We ship App Router with RSC, SSR/SSG/ISR, tRPC, and edge caching. Strict typing catches bugs at compile time, enabling 95+ Lighthouse scores and <80ms p95 APIs.",
    useCases: ["SaaS dashboards", "Marketing sites", "Admin portals", "Real-time collab"],
    stats: "Version 5.4.2 • next@16.3.0 • react@19.0.0",
    href: "/services/web-development",
  },
  {
    id: "py",
    name: "Python",
    badge: "Data & AI",
    color: "#a16207",
    category: "Web3 & AI",
    desc: "FastAPI, PyTorch, TensorFlow — LLM inference, embeddings, and data pipelines that scale.",
    longDesc:
      "Python powers our AI core: FastAPI services, vector ETL, LLM orchestration (LangChain/LlamaIndex), and GPU training. Async, typed, and observable with OpenTelemetry.",
    useCases: ["LLM RAG & agents", "Data ETL", "Model fine-tuning", "Vector search"],
    stats: "Python 3.11.8 • fastapi 0.110 • torch 2.2.1",
    href: "/services/ai-automation",
  },
  {
    id: "go",
    name: "Go Language",
    badge: "Systems",
    color: "#0891b2",
    category: "Backend & Systems",
    desc: "High-throughput gRPC backends and containerized microservices with <10ms tail latency.",
    longDesc:
      "Go handles our most concurrent paths: gRPC gateways, queue workers, and sidecars. Static binaries, tiny images, and effortless horizontal scaling on K8s.",
    useCases: ["gRPC gateways", "Queue workers", "API aggregation", "Sidecars"],
    stats: "go1.22.1 • grpc v1.62.0 • protobuf v1.32",
    href: "/services/security",
  },
  {
    id: "rs",
    name: "Rust",
    badge: "Safety",
    color: "#e11d48",
    category: "Backend & Systems",
    desc: "Memory-safe, low-latency engines — zero crashes, zero data races, C-level speed.",
    longDesc:
      "Rust secures our critical paths: parsers, crypto, and high-frequency engines. Fearless concurrency + formal correctness without GC pauses.",
    useCases: ["Parsers & compilers", "Crypto engines", "Edge proxies", "Wasm modules"],
    stats: "rustc 1.76.0 • tokio v1.37.0",
    href: "/services/security",
  },
  {
    id: "sol",
    name: "Solidity",
    badge: "Web3",
    color: "#4f46e5",
    category: "Web3 & AI",
    desc: "Ethereum smart contracts, audited and gas-optimized for EVM & L2s.",
    longDesc:
      "Solidity drives our Web3 stack: ERC-20/721/1155/4337, vaults/AMMs, proxy/diamond upgrades, and Slither/Foundry audits. Deployed to Ethereum, Arbitrum, Optimism, Base.",
    useCases: ["ERC contracts", "Vaults/AMMs", "Token launches", "L2 bridges"],
    stats: "hardhat 2.20.1 • solc 0.8.24",
    href: "/services/blockchain",
  },
  {
    id: "mbl",
    name: "Swift / Kotlin",
    badge: "Mobile",
    color: "#059669",
    category: "Frontend & Mobile",
    desc: "Native iOS & Android — 120fps feel, offline-first, and store-ready.",
    longDesc:
      "Native mobile for when performance is non-negotiable: SwiftUI & Jetpack Compose, offline sync, push, and biometric auth. We also bridge to Flutter/React Native where speed matters.",
    useCases: ["Native iOS/Android", "Offline-first apps", "Push & biometrics", "App Store launches"],
    stats: "Flutter 3.19.3 • Xcode 15.2",
    href: "/services/mobile-apps",
  },
  {
    id: "rn",
    name: "React Native",
    badge: "Mobile UI",
    color: "#0891b2",
    category: "Frontend & Mobile",
    desc: "One codebase, two stores — shared logic, native feel, OTA updates.",
    longDesc:
      "React Native accelerates mobile without sacrificing UX: shared TS logic, native modules, CodePush OTA, and Expo/EAS pipelines.",
    useCases: ["Cross-platform apps", "Shared TS logic", "OTA updates", "Native modules"],
    stats: "RN CLI v0.73.4 • pod-install synced",
    href: "/services/web-development",
  },
  {
    id: "node",
    name: "Node.js / Express",
    badge: "Runtime",
    color: "#16a34a",
    category: "Backend & Systems",
    desc: "Event-driven APIs — GraphQL/REST with <50ms TTFB and effortless real-time.",
    longDesc:
      "Node.js powers our real-time layer: Express/Nest/Fastify, tRPC, WebSockets, and BullMQ workers. Clustered, rate-limited, and traced end-to-end.",
    useCases: ["REST/GraphQL APIs", "Realtime (WS)", "Auth & billing", "Workers"],
    stats: "node v20.11.1 • npm 10.2.4",
    href: "/services/saas",
  },
  {
    id: "docker",
    name: "Docker / K8s",
    badge: "DevOps",
    color: "#2563eb",
    category: "Backend & Systems",
    desc: "Containerized, orchestrated, and self-healing — from laptop to 1000 pods.",
    longDesc:
      "Docker + Kubernetes standardize everything: builder images, Helm charts, GitOps with Argo, and rolling/canary deploys with instant rollback.",
    useCases: ["Container builds", "K8s deploys", "GitOps", "Canary rolls"],
    stats: "docker 24.0.7 • kubectl v1.28.2",
    href: "/services/security",
  },
  {
    id: "pt",
    name: "PyTorch & TensorFlow",
    badge: "AI Core",
    color: "#dc2626",
    category: "Web3 & AI",
    desc: "GPU-grade training — CUDA, mixed precision, and distributed runs.",
    longDesc:
      "Our ML core trains and serves at scale: PyTorch + TF, CUDA 12, Hugging Face, and vector stores. From fine-tunes to rerankers, all tracked with evals.",
    useCases: ["LLM fine-tuning", "Embeddings", "Rerankers", "GPU inference"],
    stats: "torch 2.2.1+cu121 • tensorflow 2.15.0",
    href: "/services/ai-automation",
  },
  {
    id: "db",
    name: "GraphQL & PostgreSQL",
    badge: "Database",
    color: "#4f46e5",
    category: "Web3 & AI",
    desc: "Typed data access — Prisma + RLS, pooled, and cache-tuned for <15ms reads.",
    longDesc:
      "Postgres is our source of truth: Prisma, RLS tenant isolation, PgBouncer pooling, and GraphQL federation with persisted queries and CDN caching.",
    useCases: ["RLS tenant isolation", "Pooled reads", "GraphQL fed", "Realtime subs"],
    stats: "psql 16.2 • graphdoc 2.4.0",
    href: "/services/saas",
  },
  {
    id: "tw",
    name: "Tailwind CSS & CSS3",
    badge: "Design System",
    color: "#0284c7",
    category: "Frontend & Mobile",
    desc: "Utility-first, glassmorphic, and motion-rich — design tokens to CSS in seconds.",
    longDesc:
      "Tailwind systematizes our UI: design tokens, dark/light, a11y, and Framer Motion. One config, infinite themes, zero drift from Figma.",
    useCases: ["Design tokens", "Glassmorphism", "Motion", "A11y"],
    stats: "tailwind v3.4.1 • 12 keyframes",
    href: "/services/web-development",
  },
];

export default function LanguagesPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Languages & Environments", item: `${siteUrl}/languages` },
    ],
  };

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "OneNineLabs Core Working Languages & Environments",
    description: "12 production environments powering OneNineLabs — frontend, backend, and Web3/AI",
    numberOfItems: languages.length,
    itemListElement: languages.map((l, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "SoftwareApplication",
        name: l.name,
        applicationCategory: l.category,
        description: l.desc,
        url: `${siteUrl}/languages#${l.id}`,
        operatingSystem: "Cross-platform",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
    })),
  };

  return (
    <>
      <Header variant="light" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />

      {/* Breadcrumb — WHITE */}
      <nav aria-label="Breadcrumb" style={{ background: "#ffffff", paddingTop: "96px", paddingLeft: "24px", paddingRight: "24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "14px 0", borderBottom: "1px solid #f1f5f9" }}>
          <ol style={{ display: "flex", gap: "8px", alignItems: "center", listStyle: "none", margin: 0, padding: 0, fontSize: "13px", color: "#64748b", flexWrap: "wrap" }}>
            <li>
              <Link href="/" style={{ color: "#64748b", textDecoration: "none", fontWeight: 600 }}>
                Home
              </Link>
            </li>
            <li aria-hidden="true" style={{ color: "#cbd5e1" }}>
              /
            </li>
            <li aria-current="page" style={{ color: "#0f172a", fontWeight: 700 }}>
              Languages & Environments
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero — WHITE */}
      <section
        className="services-hero"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
          color: "#0f172a",
          paddingTop: "28px",
          paddingBottom: "48px",
          paddingLeft: "24px",
          paddingRight: "24px",
          borderBottom: "1px solid #f1f5f9",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <span
            style={{
              display: "inline-block",
              background: "#f1f5f9",
              color: "#334155",
              border: "1px solid #e2e8f0",
              borderRadius: "999px",
              padding: "6px 14px",
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "0.6px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Frontend • Backend • Web3 & AI • All Live
          </span>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 900, letterSpacing: "-1.2px", lineHeight: 1.08, marginBottom: "14px", color: "#0f172a" }}>
            Our Core Working Languages & <span style={{ color: "#0284c7" }}>Environments</span>
          </h1>
          <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.65, maxWidth: "720px", margin: "0 auto 18px" }}>
            Every language below is <strong style={{ color: "#0f172a" }}>live in production</strong> — typed, tested, and observed. Hover a card for its live terminal, or jump to a service that uses it.
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
            {["All 12", "Frontend & Mobile (4)", "Backend & Systems (4)", "Web3 & AI (4)"].map((t) => (
              <span key={t} style={{ fontSize: "11px", fontWeight: 700, color: "#334155", background: "#fff", border: "1px solid #e2e8f0", padding: "6px 12px", borderRadius: "999px", boxShadow: "0 1px 4px rgba(15,23,42,0.04)" }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Full Grid — 12 */}
      <section style={{ background: "#ffffff", padding: "40px 24px 64px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "18px" }}>
            {languages.map((l) => (
              <div
                key={l.id}
                id={l.id}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderTop: `3px solid ${l.color}`,
                  borderRadius: "16px",
                  padding: "20px",
                  boxShadow: "0 4px 16px rgba(15,23,42,0.04)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  scrollMarginTop: "100px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "10px",
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: l.color,
                      flexShrink: 0,
                      fontWeight: 900,
                      fontSize: "14px",
                    }}
                  >
                    {l.name.charAt(0)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "15px", fontWeight: 900, color: "#0f172a" }}>{l.name}</span>
                      <span style={{ fontSize: "10px", fontWeight: 700, background: `${l.color}14`, color: l.color, border: `1px solid ${l.color}30`, padding: "2px 8px", borderRadius: "999px" }}>
                        {l.badge}
                      </span>
                    </div>
                    <div style={{ fontSize: "11px", color: "#64748b", fontWeight: 600 }}>{l.category}</div>
                  </div>
                </div>

                <p style={{ fontSize: "13px", color: "#475569", lineHeight: 1.6, margin: 0 }}>{l.desc}</p>
                <p style={{ fontSize: "12px", color: "#334155", lineHeight: 1.6, margin: 0, background: "#f8fafc", border: "1px solid #f1f5f9", borderRadius: "8px", padding: "10px 12px" }}>
                  {l.longDesc}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {l.useCases.map((u) => (
                    <span key={u} style={{ fontSize: "10px", fontWeight: 700, color: "#475569", background: "#f1f5f9", border: "1px solid #e2e8f0", padding: "4px 8px", borderRadius: "999px" }}>
                      {u}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    background: "#0b0c10",
                    color: "#4ade80",
                    borderRadius: "8px",
                    padding: "10px 12px",
                    fontFamily: "monospace",
                    fontSize: "11px",
                    lineHeight: 1.5,
                  }}
                >
                  {l.stats}
                </div>

                <Link
                  href={l.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    background: l.color,
                    color: "#fff",
                    padding: "8px 14px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontWeight: 800,
                    textDecoration: "none",
                    alignSelf: "flex-start",
                  }}
                >
                  View {l.badge} Service →
                </Link>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "28px", flexWrap: "wrap" }}>
            <Link href="/" style={{ background: "#f1f5f9", border: "1px solid #e2e8f0", color: "#0f172a", padding: "10px 18px", borderRadius: "999px", fontSize: "13px", fontWeight: 800, textDecoration: "none" }}>
              ← Back to Home
            </Link>
            <Link href="/services" style={{ background: "#0f172a", color: "#fff", padding: "10px 18px", borderRadius: "999px", fontSize: "13px", fontWeight: 800, textDecoration: "none" }}>
              Explore Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why this stack */}
      <section style={{ background: "#f8fafc", padding: "56px 24px", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 900, color: "#0f172a", letterSpacing: "-0.5px", textAlign: "center", marginBottom: "18px" }}>Why This Stack Wins</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            {[
              { t: "Typed & Tested", d: "TS + Python typing, Rust safety, and Foundry fuzz — bugs caught before prod." },
              { t: "Fast by Default", d: "Edge SSR, gRPC, and pooled Postgres keep p95 <80ms." },
              { t: "Portable", d: "Docker/K8s + IaC — same code, any cloud, zero lock-in." },
              { t: "Observable", d: "OpenTelemetry, Grafana, and evals — trace every request and prompt." },
            ].map((x) => (
              <div key={x.t} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "18px" }}>
                <div style={{ fontSize: "13px", fontWeight: 800, color: "#0f172a", marginBottom: "6px" }}>{x.t}</div>
                <div style={{ fontSize: "12px", color: "#475569", lineHeight: 1.6 }}>{x.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
