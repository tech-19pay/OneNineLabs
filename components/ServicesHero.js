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

          {/* Right Column: Phone Mockup & Floating Overlay Cards */}
          <div className="sh-hero-right">
            <div className="sh-phone-wrapper">
              {/* Soft blue backdrop glow behind phone */}
              <div className="sh-phone-backdrop" />

              {/* Phone Frame */}
              <div className="sh-phone-frame">
                {/* Dynamic Island Notch */}
                <div className="sh-phone-island" />
                <div className="sh-phone-statusbar">
                  <span>9:41</span>
                  <div className="sh-status-icons">
                    <span>📶</span>
                    <span>🔋</span>
                  </div>
                </div>

                {/* Phone Screen App Header */}
                <div className="sh-phone-screen">
                  <div className="sh-phone-header">
                    <div className="sh-header-avatar">
                      <span role="img" aria-label="OneNine logo">🚀</span>
                    </div>
                    <div>
                      <div className="sh-header-name">OneNine Hub</div>
                      <div className="sh-header-date">Services Explorer</div>
                    </div>
                  </div>

                  {!selectedService ? (
                    <div className="sh-phone-services">
                      <div className="sh-phone-subtitle">Core Capabilities</div>
                      <div className="sh-phone-services-list">
                        {servicesList.map((service) => (
                          <button
                            key={service.id}
                            type="button"
                            className="sh-phone-service-item"
                            onClick={() => setSelectedService(service)}
                          >
                            <span className="sh-phone-service-icon">{service.icon}</span>
                            <div className="sh-phone-service-info">
                              <div className="sh-phone-service-title">{service.title}</div>
                              <div className="sh-phone-service-role">{service.role}</div>
                            </div>
                            <span className="sh-phone-service-chevron">➔</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="sh-phone-service-detail">
                      <button
                        type="button"
                        className="sh-phone-back-btn"
                        onClick={() => setSelectedService(null)}
                      >
                        ← Back to List
                      </button>
                      <div className="sh-phone-detail-header">
                        <span className="sh-phone-detail-icon">{selectedService.icon}</span>
                        <div>
                          <div className="sh-phone-detail-title">{selectedService.title}</div>
                          <div className="sh-phone-detail-role">{selectedService.role}</div>
                        </div>
                      </div>
                      <div className="sh-phone-detail-scroll">
                        <ul className="sh-phone-bullets">
                          {selectedService.bullets.map((bullet, idx) => (
                            <li key={idx} className="sh-phone-bullet-item">
                              <span className="sh-phone-bullet-dot">✦</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                        {selectedService.widget && (
                          <div className="sh-phone-detail-widget">
                            {selectedService.widget}
                          </div>
                        )}
                      </div>
                      <Link href={selectedService.href || "/contact"} className="sh-phone-cta-button">
                        Explore Capability →
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {/* ── FLOATING OVERLAY CARDS ── */}

              {/* Floating Card 2: Middle Dark Stopwatch Graph */}
              <div className="sh-float-card sh-float-card-2">
                <div className="sh-dark-card-header">
                  <span className="sh-stopwatch-icon">⏱️</span>
                  <span>Average Turnaround</span>
                </div>
                <div className="sh-chart-wrap">
                  <svg viewBox="0 0 100 40" className="sh-chart-svg">
                    <path
                      d="M 5 30 Q 30 35, 50 15 T 95 10"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="50" cy="15" r="4" fill="#38bdf8" className="sh-chart-dot" />
                  </svg>
                </div>
                <div className="sh-dark-card-val">
                  <span className="sh-val-num">6-8</span>
                  <span className="sh-val-unit">weeks MVP</span>
                </div>
              </div>

            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
