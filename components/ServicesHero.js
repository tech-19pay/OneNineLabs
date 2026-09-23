"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ServicesHero({ cfg }) {
  const [selectedService, setSelectedService] = useState(null);

  // Fallback services in case cfg.services.items is empty
  const servicesList = cfg?.services?.items || [
    {
      id: "web-development",
      title: "Web Development",
      role: "Next.js, React & Node.js",
      icon: "🌐",
      bullets: [
        "Next.js 15 & React 19 — SSR, SSG, RSC, edge delivery",
        "Node.js / Python APIs with PostgreSQL & Prisma ORM",
        "Headless CMS integration (Sanity, Contentful, Strapi)",
        "Lighthouse 95+ performance optimization & CWV",
      ],
      widget: "⚡ Lighthouse 98/100 • Sub-second LCP",
      href: "/services/web-development",
    },
    {
      id: "mobile-apps",
      title: "Mobile App Development",
      role: "React Native, Flutter & Native iOS/Android",
      icon: "📱",
      bullets: [
        "React Native & Flutter cross-platform with native modules",
        "Offline-first WatermelonDB sync & push notifications",
        "Biometric auth (FaceID/TouchID) & OTA EAS updates",
        "Full App Store & Play Store submission with ASO",
      ],
      widget: "📱 120fps Native Feel • EAS OTA",
      href: "/services/mobile-apps",
    },
    {
      id: "ai-automation",
      title: "AI & Intelligent Automation",
      role: "LangChain Agents & RAG Pipelines",
      icon: "🤖",
      bullets: [
        "Autonomous LLM agents — LangChain/LlamaIndex multi-step",
        "RAG vector search with Pinecone, pgvector & Qdrant",
        "Custom Llama 3 / Mistral LoRA/QLoRA fine-tuning",
        "Event-driven queues: Slack, Salesforce & CRM bots",
      ],
      widget: "🤖 LangChain Agents • 98% Accuracy",
      href: "/services/ai-automation",
    },
    {
      id: "saas",
      title: "Multi-Tenant SaaS Platforms",
      role: "Multi-tenant SaaS Platforms",
      icon: "⚡",
      bullets: [
        "PostgreSQL Row-Level Security (RLS) tenant isolation",
        "Stripe metered billing, seats, invoices & dunning webhooks",
        "SAML SSO via WorkOS, Clerk (Okta, Google, Azure AD)",
        "Granular RBAC permissions & SOC 2 audit-ready logs",
      ],
      widget: "⚡ Stripe Billing • Row-Level Security",
      href: "/services/saas",
    },
    {
      id: "blockchain",
      title: "Blockchain & Web3 Solutions",
      role: "Solidity, L2 & Account Abstraction",
      icon: "⛓️",
      bullets: [
        "Gas-optimized Solidity smart contracts on EVM chains",
        "ERC-4337 Account Abstraction — gasless, social login wallets",
        "Layer-2 scaling: Arbitrum, Optimism, Base & ZK rollups",
        "Foundry fuzz testing suite & Slither static analysis audits",
      ],
      widget: "⛓️ Foundry Audited • Zero Exploits",
      href: "/services/blockchain",
    },
    {
      id: "marketing",
      title: "Growth Marketing, SEO & PPC",
      role: "SEO, PPC & Growth Marketing",
      icon: "📈",
      bullets: [
        "Technical SEO audit, Core Web Vitals & crawl architecture",
        "Google / LinkedIn / Meta PPC with bid automation & PMax",
        "Conversion Rate Optimization (CRO) — A/B tests & heatmaps",
        "Full-funnel attribution: GA4 + server-side tagging → CRM",
      ],
      widget: "📈 +340% Organic • 4.8x Campaign ROAS",
      href: "/services/marketing",
    },
  ];

  // Custom text fallback or from cfg
  const titleBefore = cfg?.hero?.titleBefore || "We Are Providing";
  const titleHighlight = cfg?.hero?.titleHighlight || "Professional Engineering";
  const desc = cfg?.hero?.desc || "Boost sales, enhance customer experience, and streamline operations with our cutting-edge AI & software engineering technology.";

  return (
    <section className="sh-section">
      <div className="sh-container">
        {/* ── TOP HERO BOX ── */}
        <div className="sh-hero-box">
          {/* Background Micro Grid Effect */}
          <div className="sh-grid-bg" />

          {/* Left Column: Typography & Action Form */}
          <div className="sh-hero-left">
            <h1 className="sh-title">
              {titleBefore} <br />
              {titleHighlight}{" "}

              <span className="sh-title-powered">Powered</span>
            </h1>

            <p className="sh-desc">{desc}</p>

            <div className="sh-action-btns">
              <Link href="/contact" className="sh-btn-contact">
                Contact Us →
              </Link>
              <div className="sh-hero-chips">
                <span className="sh-hero-chip">🟢 99.9% Uptime SLA</span>
                <span className="sh-hero-chip">👥 Senior Pods</span>
                <span className="sh-hero-chip">🔒 SOC 2 Ready</span>
                <span className="sh-hero-chip">📜 Full Ownership</span>
              </div>
            </div>
          </div>

          {/* Right Column: Optimized Browser Mockup Window & Floating Overlay Badges */}
          <div className="sh-hero-right">
            <div className="sh-mockup-wrapper">
              {/* Ambient Glow Backdrop */}
              <div className="sh-mockup-glow" />

              {/* Floating Badge Top Right */}
              <div className="sh-mockup-float-badge top-right">
                <span className="sh-mockup-pulse-dot" />
                <span>⚡ Sub-Second LCP • 99.9% SLA</span>
              </div>

              {/* Floating Badge Bottom Left */}
              <div className="sh-mockup-float-badge bottom-left">
                <div className="sh-mockup-check-icon">✓</div>
                <div>
                  <div className="sh-mockup-float-title">SOC 2 &amp; Zero-Trust</div>
                  <div className="sh-mockup-float-sub">Enterprise Production Live</div>
                </div>
              </div>

              {/* Browser Window Mockup Frame */}
              <div className="sh-browser-mockup">
                {/* Browser Title Bar */}
                <div className="sh-browser-header">
                  <div className="sh-browser-dots">
                    <span className="sh-dot sh-dot-red" />
                    <span className="sh-dot sh-dot-yellow" />
                    <span className="sh-dot sh-dot-green" />
                  </div>
                  <div className="sh-browser-address-bar">
                    <span className="sh-lock-icon">🔒</span>
                    <span className="sh-url-text">oneninelabs.com/services</span>
                  </div>
                  <div className="sh-browser-status">
                    <span className="sh-live-dot" />
                    <span>Live</span>
                  </div>
                </div>

                {/* Viewport with existing hero image */}
                <div className="sh-browser-viewport">
                  <img
                    src={cfg?.hero?.image || "/services/services_hero_main.png"}
                    alt={titleHighlight || "OneNineLabs Software Engineering Services"}
                    className="sh-browser-img"
                  />
                  <div className="sh-browser-glare" />
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
