"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function SaasPageContent() {
  const [activeTab, setActiveTab] = useState("Role-based clarity");
  const [activeRoleHover, setActiveRoleHover] = useState(null);
  const [activeArchTab, setActiveArchTab] = useState("rls");
  const [copiedCode, setCopiedCode] = useState(false);
  const [selectedLayerIndex, setSelectedLayerIndex] = useState(0);

  const stackLayersDetail = [
    {
      id: "frontend",
      num: "01",
      name: "Next.js 15 & React 19 Frontend",
      tech: "Edge SSR & Subdomain Routing",
      badge: "Sub-Second LCP",
      icon: "⚡",
      badgeBg: "#ecfdf5",
      badgeColor: "#059669",
      desc: "Sub-second LCP with Next.js 15 server components, Cloudflare Edge middleware, and dynamic tenant subdomain routing.",
      specs: ["React Server Components (RSC)", "Custom CNAME Subdomain Resolver", "Vercel / Cloudflare Edge CDN Cache"]
    },
    {
      id: "auth",
      num: "02",
      name: "Edge Auth & Tenant Middleware",
      tech: "SAML 2.0, OAuth & SCIM Directory",
      badge: "Edge Auth Guard",
      icon: "🔑",
      badgeBg: "#eff6ff",
      badgeColor: "#2563eb",
      desc: "Cloudflare Edge middleware validating tenant JWT tokens, injecting tenant context, and syncing Okta/Azure AD SAML SSO.",
      specs: ["Okta, Google & Azure AD SAML SSO", "SCIM Directory User Sync", "Cryptographic JWT Session Cookies"]
    },
    {
      id: "api",
      num: "03",
      name: "Core API & Microservices",
      tech: "Type-Safe gRPC & REST Engine",
      badge: "10k req/sec",
      icon: "⚙️",
      badgeBg: "#f5f3ff",
      badgeColor: "#7c3aed",
      desc: "High-concurrency NestJS and FastAPI microservices communicating over gRPC with Redis sliding-window rate limiters.",
      specs: ["gRPC & OpenAPI Schema Validation", "Redis Sliding-Window Rate Limiter", "Sub-2ms API Response Caching"]
    },
    {
      id: "db",
      num: "04",
      name: "PostgreSQL Database with RLS",
      tech: "PostgreSQL Row-Level Isolation",
      badge: "100% Zero-Leak Isolation",
      icon: "🛡️",
      badgeBg: "#f0fdf4",
      badgeColor: "#16a34a",
      desc: "Zero cross-tenant data leaks guaranteed. Database-level policy isolation ensuring every query is bound to tenant_id.",
      specs: ["PostgreSQL Row-Level Security (RLS)", "Automated Schema Migrations", "SOC 2 Type II Cryptographic Audit"]
    },
    {
      id: "billing",
      num: "05",
      name: "Stripe Recurring & Metered Billing",
      tech: "Automated Invoicing Engine",
      badge: "Automated Billing",
      icon: "💳",
      badgeBg: "#fff7ed",
      badgeColor: "#ea580c",
      desc: "Full-lifecycle subscription management with Stripe webhooks: seat tiers, usage counters, proration, and dunning automation.",
      specs: ["Seat-Based & Metered Usage Tiering", "Automated Invoice PDF & Webhooks", "Dunning Retry & Failed Card Recovery"]
    }
  ];

  const tabs = [
    "Role-based clarity",
    "Short sections",
    "Benefit-first copy",
    "Easy to scan",
    "Visual-friendly layout",
  ];

  const pillarCards = [
    {
      id: "clarity",
      title: "Clarity",
      desc: "Centralize tenant records, access logs, and permissions in one unified dashboard.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="3" />
          <path d="M7 15h0M2 9.5h20" />
        </svg>
      ),
    },
    {
      id: "control",
      title: "Control",
      desc: "Easily manage seat allocations, tiered subscriptions, and automated Stripe billing.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
    {
      id: "accuracy",
      title: "Accuracy",
      desc: "Zero cross-tenant data leaks with PostgreSQL Row-Level Security (RLS) policies.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      id: "visibility",
      title: "Visibility",
      desc: "Real-time user engagement telemetry, audit trails, and subscription MRR metrics.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
  ];

  const archTabs = {
    rls: {
      title: "PostgreSQL Row-Level Security (RLS)",
      badge: "Zero Cross-Tenant Leaks",
      desc: "We enforce strict database-level isolation. Every query is filtered by tenant_id through PostgreSQL RLS policies, ensuring complete multi-tenant safety even if application logic is bypassed.",
      statusPill: "100% RLS Isolated",
      metric1Label: "Active Tenant Schemas",
      metric1Value: "2,481",
      metric1Trend: "↑ 14% this month",
      metric2Label: "Avg Query Latency",
      metric2Value: "1.2ms",
      metric2Trend: "0 Leaks Detected",
      logsTitle: "Database RLS Enforcement Stream",
      logs: [
        { text: "tenant_isolation_policy applied to app.documents", time: "Just now", badge: "RLS ACTIVE" },
        { text: "set_config('app.current_tenant_id', 'tenant_a_uuid')", time: "12s ago", badge: "PASSED" },
        { text: "Cross-tenant query attempt blocked (403)", time: "1m ago", badge: "BLOCKED" }
      ]
    },
    billing: {
      title: "Stripe Recurring & Metered Billing",
      badge: "Automated Invoicing & Dunning",
      desc: "Full-lifecycle subscription management with Stripe webhooks. Supports seat-based tiers, metered usage-based billing, automated proration, and dunning retry logic.",
      statusPill: "Stripe Webhooks Active",
      metric1Label: "Monthly Recurring (MRR)",
      metric1Value: "$142,850",
      metric1Trend: "↑ 22% YoY Growth",
      metric2Label: "Webhook Sync Latency",
      metric2Value: "18ms",
      metric2Trend: "99.99% Reliability",
      logsTitle: "Stripe Revenue Event Stream",
      logs: [
        { text: "customer.subscription.updated (Enterprise Tier)", time: "Just now", badge: "SYNCED" },
        { text: "invoice.payment_succeeded ($1,200.00)", time: "28s ago", badge: "PAID" },
        { text: "seat_count updated (+5 seats allocated)", time: "3m ago", badge: "UPDATED" }
      ]
    },
    sso: {
      title: "Enterprise SAML SSO & SCIM Directory",
      badge: "Okta, Google & Azure AD Ready",
      desc: "Turnkey enterprise single sign-on (SSO) integrated via WorkOS and Clerk. Supports SAML 2.0, OpenID Connect, and automated SCIM user provisioning and deprovisioning.",
      statusPill: "IdP Directory Synced",
      metric1Label: "Enterprise Connections",
      metric1Value: "184 Orgs",
      metric1Trend: "Okta / Azure AD",
      metric2Label: "SAML Auth Success Rate",
      metric2Value: "99.98%",
      metric2Trend: "Zero Fallback Errors",
      logsTitle: "SAML SSO & SCIM User Stream",
      logs: [
        { text: "Okta SAML 2.0 Auth Assertion: user@acme-corp.com", time: "Just now", badge: "AUTH OK" },
        { text: "SCIM Sync: 12 Users auto-provisioned", time: "45s ago", badge: "PROVISIONED" },
        { text: "RBAC Middleware: Admin Role Verified", time: "2m ago", badge: "VERIFIED" }
      ]
    },
    audit: {
      title: "Audit Logging & Usage Telemetry",
      badge: "SOC 2 Type II Ready",
      desc: "Immutable cryptographic audit logs for every tenant transaction. Track user sessions, privilege escalations, billing alterations, and document exports with zero overhead.",
      statusPill: "Cryptographically Signed",
      metric1Label: "Total Audit Hash Log",
      metric1Value: "1.85M",
      metric1Trend: "SHA-256 Verified",
      metric2Label: "Tamper Detection",
      metric2Value: "0 Anomalies",
      metric2Trend: "Immutable Chain",
      logsTitle: "SOC 2 Telemetry & Audit Stream",
      logs: [
        { text: "ROLE_CHANGED: User promoted to Tenant Admin", time: "Just now", badge: "SIGNED" },
        { text: "DATA_EXPORTED: Bulk CSV export initiated", time: "18s ago", badge: "AUDITED" },
        { text: "IP_CHANGE_DETECTED: Session re-verified", time: "4m ago", badge: "SECURED" }
      ]
    }
  };

  const currentArchTab = archTabs[activeArchTab];

  const handleCopyCode = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(currentArchTab.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const saasSolutions = [
    {
      title: "B2B Enterprise SaaS",
      category: "Enterprise Software",
      badge: "Multi-Org Hierarchies",
      desc: "Complex organizational trees, SAML SSO, granular RBAC permissions, audit trails, and custom domain white-labeling.",
      icon: "🏢",
      bullets: [
        "Okta, Google & Azure AD SAML SSO integrations",
        "Subdomain & custom CNAME domain routing",
        "Granular department role-based access controls (RBAC)"
      ]
    },
    {
      title: "Product-Led Growth (PLG) SaaS",
      category: "Self-Serve Platforms",
      badge: "Viral Onboarding",
      desc: "Frictionless self-serve onboarding, in-app paywalls, viral teammate invitations, and automated feature flagging.",
      icon: "⚡",
      bullets: [
        "1-Click Google & GitHub social auth onboarding",
        "Interactive in-app trial countdowns & paywalls",
        "PostHog / Mixpanel user funnel event tracking"
      ]
    },
    {
      title: "Usage-Based & Metered API SaaS",
      category: "API & Developer Platforms",
      badge: "Metered Billing",
      desc: "Stripe metered usage ingestion, API key management, sliding-window rate limiters, and live telemetry dashboards.",
      icon: "📊",
      bullets: [
        "Real-time event metering & automated Stripe invoicing",
        "Cryptographic API key generation with scoping",
        "Sub-2ms Redis sliding-window rate limiter guards"
      ]
    },
    {
      title: "Vertical SaaS & Compliance",
      category: "Industry Specialized",
      badge: "Domain Regulated",
      desc: "Tailored workflows for healthcare (HIPAA), real estate, finance, or legal tech with electronic document signing.",
      icon: "🏥",
      bullets: [
        "HIPAA & SOC 2 Type II compliant storage controls",
        "Electronic signature capture & PDF contract generators",
        "Automated compliance evidence export"
      ]
    },
    {
      title: "Multi-Tenant Marketplaces",
      category: "Marketplace Platforms",
      badge: "Split Payments",
      desc: "Merchant onboarding via Stripe Connect, split payout ledgers, automated platform fee collection, and merchant dashboards.",
      icon: "🛍️",
      bullets: [
        "Stripe Connect Custom & Express merchant onboarding",
        "Automated platform take-rate & split payouts",
        "Multi-currency payout reconciliation ledgers"
      ]
    },
    {
      title: "AI-Powered SaaS Applications",
      category: "GenAI & Automation",
      badge: "Vector Search RAG",
      desc: "Tenant-scoped vector databases, LLM streaming interfaces, token consumption budgets, and autonomous agent queues.",
      icon: "🤖",
      bullets: [
        "pgvector & Pinecone tenant namespace isolation",
        "OpenAI & Claude streaming SSE text generation",
        "Token quota limits & cost attribution per tenant"
      ]
    }
  ];

  const archLayers = [
    {
      num: "01",
      title: "Next.js 15 & React 19 Frontend",
      desc: "Edge SSR, React Server Components (RSC), and optimistic UI updates for sub-second page rendering across tenant subdomains.",
      icon: "✨",
      tag: "Sub-Second LCP"
    },
    {
      num: "02",
      title: "Tenant Scoped Middleware",
      desc: "Subdomain resolution, signed JWT cookie sessions, and enterprise SAML SSO token injection at the Cloudflare Edge.",
      icon: "🔑",
      tag: "Edge Routing"
    },
    {
      num: "03",
      title: "Core API & Microservices",
      desc: "Type-safe NestJS & FastAPI microservices communicating over gRPC, handling high-concurrency throughput with Redis caching.",
      icon: "⚙️",
      tag: "High Concurrency"
    },
    {
      num: "04",
      title: "PostgreSQL Database with RLS",
      desc: "Shared database with PostgreSQL Row-Level Security (RLS) isolating every tenant's records, eliminating data leaks.",
      icon: "💾",
      tag: "100% RLS Isolation"
    },
    {
      num: "05",
      title: "Stripe Recurring Billing Engine",
      desc: "Automated webhook dispatcher handling tiered subscriptions, metered usage counters, proration, and dunning workflows.",
      icon: "💳",
      tag: "Automated Invoicing"
    },
    {
      num: "06",
      title: "Telemetry & SOC 2 Audit Logs",
      desc: "Cryptographically hashed audit trails, Datadog observability, and automated compliance evidence collection for auditors.",
      icon: "🛡️",
      tag: "SOC 2 Type II"
    }
  ];

  const deliverySteps = [
    {
      num: "01",
      category: "STAGE 01 • ARCHITECTURE",
      title: "Tenant Data Modeling & RLS Architecture",
      desc: "We define PostgreSQL Row-Level Security (RLS) schemas, auth flows (SAML/OAuth), and subscription pricing models in Stripe.",
      tag: "Architecture Blueprint",
      link: "Read Full Resource",
      bgGradient: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
      mockupType: "strategy"
    },
    {
      num: "02",
      category: "STAGE 02 • MVP SPRINTS",
      title: "Rapid MVP Pod Build (6–8 Weeks)",
      desc: "Our senior SaaS pod builds your production MVP: Next.js 15 frontend, backend APIs, Stripe billing, and user management.",
      tag: "Production Sprints",
      link: "Read Full Resource",
      bgGradient: "linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)",
      mockupType: "sprint"
    },
    {
      num: "03",
      category: "STAGE 03 • SECURITY VERIFICATION",
      title: "Security Hardening & Penetration Testing",
      desc: "We conduct exhaustive multi-tenant penetration tests, eliminate cross-tenant leak vectors, and configure SOC 2 audit logging.",
      tag: "Zero-Leak Verification",
      link: "Read Full Resource",
      bgGradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
      mockupType: "security"
    },
    {
      num: "04",
      category: "STAGE 04 • LAUNCH & SCALE",
      title: "Production Launch & Scale Retainer",
      desc: "We deploy to AWS/Vercel with CI/CD automation, configure 24/7 endpoint monitoring, and provide SLA-backed maintenance.",
      tag: "Launch & Operate",
      link: "Read Full Resource",
      bgGradient: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
      mockupType: "launch"
    }
  ];

  const faqs = [
    {
      q: "What is multi-tenant SaaS architecture and why is PostgreSQL RLS the best approach?",
      a: "Multi-tenant architecture allows a single application and database instance to securely serve thousands of distinct customers (tenants). We use PostgreSQL Row-Level Security (RLS), which enforces data isolation directly at the database engine layer. Every query is filtered by tenant_id, guaranteeing that no tenant can ever view or modify another tenant's data."
    },
    {
      q: "How do you handle Stripe billing, seat changes, and usage-based tiers?",
      a: "We implement full-lifecycle Stripe integrations using webhooks: seat-based recurring tiers, metered usage counters, automated proration when seats are added mid-month, invoice PDF downloads, and dunning retry logic to recover failed card payments."
    },
    {
      q: "Can you implement enterprise SAML SSO (Okta, Google, Azure AD)?",
      a: "Yes — we integrate enterprise Single Sign-On (SSO) via WorkOS or Clerk. Enterprise customers can authenticate using their existing identity providers (Okta, Azure Active Directory, Google Workspace), and we support SCIM for automated user directory provisioning."
    },
    {
      q: "How fast can you build and launch a production-grade SaaS MVP?",
      a: "Using our battle-tested Next.js + Node.js SaaS starter foundation, our dedicated engineering pod ships a production-ready multi-tenant MVP in 6 to 8 weeks, complete with auth, database isolation, Stripe billing, and user dashboards."
    },
    {
      q: "Is the SaaS platform architecture SOC 2 Type II audit ready?",
      a: "Yes — we bake in immutable cryptographic audit logging, role-based access controls (RBAC), database encryption at rest (KMS), and automated compliance evidence logs that integrate seamlessly with Vanta and Drata."
    },
    {
      q: "Who owns the source code and database schemas upon handover?",
      a: "You receive 100% full, exclusive ownership of all codebases, database schemas, Figma design files, deployment pipelines, and Stripe accounts upon milestone completion with zero vendor lock-in."
    }
  ];

  return (
    <div className="saas-page-root">
      {/* ── 1. HERO SECTION (SAME-TO-SAME AS REFERENCE IMAGE WITH WHITE CREAM THEME) ── */}
      <section className="saas-landing-hero" style={{ background: "#fdfbf7", padding: "120px 24px 80px", position: "relative", overflow: "hidden" }}>
        
        {/* Subtle Background Glow Shapes */}
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(167,243,208,0.3) 0%, rgba(254,249,195,0.2) 50%, rgba(253,251,247,0) 70%)", pointerEvents: "none" }} />

        <div className="saas-landing-hero-container" style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", gap: "50px", position: "relative", zIndex: 10 }}>
          
          {/* Left Column: Text & Checkmark List */}
          <div className="saas-landing-hero-content" style={{ flex: 1, paddingRight: "10px" }}>
            
            {/* Main Serific Headline */}
            <h1 style={{ fontFamily: "Georgia, 'Playfair Display', serif", fontSize: "clamp(36px, 4.2vw, 54px)", fontWeight: "800", color: "#0f172a", lineHeight: "1.15", letterSpacing: "-0.5px", marginBottom: "22px" }}>
              Elevate Your Enterprise with Next-Gen SaaS Architecture
            </h1>

            {/* Paragraph Description */}
            <p style={{ fontSize: "16px", color: "#475569", lineHeight: "1.7", marginBottom: "28px", maxWidth: "520px" }}>
              Scale your B2B platform with 100% database isolation via PostgreSQL RLS, automated Stripe revenue pipelines, and Okta/SAML SSO out of the box.
            </p>

            {/* Primary CTA Button */}
            <div style={{ marginBottom: "28px" }}>
              <a href="/contact" style={{ background: "#00bba7", color: "#ffffff", padding: "15px 34px", borderRadius: "8px", fontWeight: "700", fontSize: "15px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", boxShadow: "0 10px 25px rgba(0, 187, 167, 0.25)" }}>
                <span>Get Started</span>
              </a>
            </div>

            {/* Checkmark Bullet Points */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#475569", fontSize: "14px", fontWeight: "600" }}>
                <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#00bba7", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "900" }}>✓</span>
                <span>100% PostgreSQL RLS Multi-Tenant Security SLA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Same-to-Same White-Cream Dashboard Graphic */}
          <div className="saas-landing-hero-image" style={{ flex: 1.1, display: "flex", justifyContent: "flex-end", marginTop: "60px" }}>
            <div style={{
              width: "100%",
              maxWidth: "560px",
              background: "linear-gradient(145deg, #a7f3d0 0%, #ecfdf5 40%, #fef9c3 100%)",
              borderRadius: "28px",
              padding: "24px",
              boxShadow: "0 25px 60px rgba(0, 187, 167, 0.12)",
              display: "flex",
              flexDirection: "column",
              gap: "16px"
            }}>
              
              {/* Top Row: 2 Stat Cards Side-by-Side */}
              <div className="saas-hero-mockup-stats" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                
                {/* Net Salary / Revenue Card */}
                <div style={{ background: "#ffffff", borderRadius: "18px", padding: "18px", boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#00bba7", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>
                      👤
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", color: "#64748b", fontWeight: "700" }}>Net Revenue</div>
                      <div style={{ fontSize: "19px", fontWeight: "800", color: "#0f172a" }}>$12,928.10</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "#94a3b8", fontWeight: "700", marginBottom: "4px" }}>
                    <span>Target</span>
                    <span style={{ color: "#00bba7" }}>65%</span>
                  </div>
                  <div style={{ width: "100%", height: "5px", background: "#f1f5f9", borderRadius: "100px", overflow: "hidden", marginBottom: "8px" }}>
                    <div style={{ width: "65%", height: "100%", background: "#00bba7", borderRadius: "100px" }} />
                  </div>
                  <div style={{ fontSize: "10px", color: "#94a3b8", fontWeight: "600" }}>📅 Per February 2026</div>
                </div>

                {/* Gross Salary / ARR Card */}
                <div style={{ background: "#ffffff", borderRadius: "18px", padding: "18px", boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#f97316", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>
                      💰
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", color: "#64748b", fontWeight: "700" }}>Gross ARR</div>
                      <div style={{ fontSize: "19px", fontWeight: "800", color: "#0f172a" }}>$48,250.00</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "#94a3b8", fontWeight: "700", marginBottom: "4px" }}>
                    <span>Target</span>
                    <span style={{ color: "#f97316" }}>70%</span>
                  </div>
                  <div style={{ width: "100%", height: "5px", background: "#f1f5f9", borderRadius: "100px", overflow: "hidden", marginBottom: "8px" }}>
                    <div style={{ width: "70%", height: "100%", background: "#f97316", borderRadius: "100px" }} />
                  </div>
                  <div style={{ fontSize: "10px", color: "#94a3b8", fontWeight: "600" }}>📅 Per February 2026</div>
                </div>

              </div>

              {/* Middle Row: Large Analytics Bar Chart Card */}
              <div style={{ background: "#ffffff", borderRadius: "20px", padding: "20px", boxShadow: "0 4px 15px rgba(0,0,0,0.03)", position: "relative" }}>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#0f172a", marginBottom: "12px" }}>
                  Platform Payroll Summary
                </div>
                
                {/* Platform Metric Badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "20px", fontSize: "11px", color: "#64748b" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ background: "#ecfdf5", padding: "3px 6px", borderRadius: "6px" }}>🛍️</span>
                    <span>Shopify <strong>200.98k View</strong></span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ background: "#fef2f2", padding: "3px 6px", borderRadius: "6px" }}>❤️</span>
                    <span>Next.js <strong>340.50k View</strong></span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ background: "#f8fafc", padding: "3px 6px", borderRadius: "6px" }}>📦</span>
                    <span>Stripe <strong>180.20k View</strong></span>
                  </div>
                </div>

                {/* Stacked Bar Chart Columns Visual */}
                <div style={{ position: "relative", paddingTop: "10px" }}>
                  {/* Floating Tooltip Bubble */}
                  <div style={{
                    position: "absolute",
                    top: "-14px",
                    left: "48%",
                    transform: "translateX(-50%)",
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "10px",
                    padding: "6px 12px",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                    fontSize: "10px",
                    color: "#64748b",
                    fontWeight: "600",
                    display: "flex",
                    gap: "10px",
                    zIndex: 10
                  }}>
                    <div><span style={{ color: "#00bba7" }}>●</span> Shopify <strong>45.5%</strong></div>
                    <div><span style={{ color: "#f97316" }}>●</span> Next.js <strong>45.5%</strong></div>
                    <div><span style={{ color: "#6366f1" }}>●</span> Stripe <strong>45.5%</strong></div>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", height: "110px", borderBottom: "1px solid #f1f5f9", paddingBottom: "6px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px", width: "38px" }}>
                      <div style={{ height: "30px", background: "#00bba7", borderRadius: "6px" }} />
                      <div style={{ height: "25px", background: "#34d399", borderRadius: "6px" }} />
                      <div style={{ height: "20px", background: "#a7f3d0", borderRadius: "6px" }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px", width: "38px" }}>
                      <div style={{ height: "35px", background: "#00bba7", borderRadius: "6px" }} />
                      <div style={{ height: "20px", background: "#34d399", borderRadius: "6px" }} />
                      <div style={{ height: "25px", background: "#a7f3d0", borderRadius: "6px" }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px", width: "38px" }}>
                      <div style={{ height: "40px", background: "#00bba7", borderRadius: "6px" }} />
                      <div style={{ height: "30px", background: "#34d399", borderRadius: "6px" }} />
                      <div style={{ height: "15px", background: "#a7f3d0", borderRadius: "6px" }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px", width: "38px" }}>
                      <div style={{ height: "25px", background: "#00bba7", borderRadius: "6px" }} />
                      <div style={{ height: "45px", background: "#34d399", borderRadius: "6px" }} />
                      <div style={{ height: "20px", background: "#a7f3d0", borderRadius: "6px" }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px", width: "38px" }}>
                      <div style={{ height: "35px", background: "#00bba7", borderRadius: "6px" }} />
                      <div style={{ height: "25px", background: "#34d399", borderRadius: "6px" }} />
                      <div style={{ height: "30px", background: "#a7f3d0", borderRadius: "6px" }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px", width: "38px" }}>
                      <div style={{ height: "50px", background: "#00bba7", borderRadius: "6px" }} />
                      <div style={{ height: "20px", background: "#34d399", borderRadius: "6px" }} />
                      <div style={{ height: "15px", background: "#a7f3d0", borderRadius: "6px" }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Status Goal Bar Card */}
              <div style={{ background: "#ffffff", borderRadius: "16px", padding: "14px 18px", boxShadow: "0 4px 15px rgba(0,0,0,0.03)", display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#ccfbf1", color: "#0d9488", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "900" }}>
                  ☻
                </div>
                <div>
                  <div style={{ fontSize: "12.5px", fontWeight: "800", color: "#0f172a" }}>You are doing good!</div>
                  <div style={{ fontSize: "11px", color: "#64748b" }}>You're close to reaching your target goal of 99.99% multi-tenant SLA.</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── 2. ABOUT US SECTION (SHIFTED UP TOWARDS HERO) ── */}
      <section className="saas-landing-about" style={{ paddingTop: "0px", marginTop: "-70px", paddingBottom: "20px", position: "relative", zIndex: 12 }}>
        <div className="saas-landing-about-container-flex" style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          <div className="saas-landing-about-image">
            <img src="/assets/about_img.jpg" alt="Dashboard Illustration" />
          </div>
          <div className="saas-landing-about-content">
            <h2>Zero Cross-Tenant Data Leaks Guaranteed</h2>
            <p>We build robust multi-tenant systems using PostgreSQL Row-Level Security (RLS) to guarantee complete data isolation between organizations. Our architectures are designed to pass rigorous SOC 2 Type II and HIPAA compliance audits out of the box, ensuring your enterprise clients trust your platform with their most sensitive data.</p>
          </div>
        </div>
      </section>

      {/* ── 3. HIGH-PERFORMANCE MULTI-TENANT ARCHITECTURE (5-CARD BENTO GRID MATCHING REFERENCE DESIGN) ── */}
      <section className="saas-arch-section" id="architecture" style={{ background: "#ffffff", paddingTop: "0px", marginTop: "-30px", paddingBottom: "80px", paddingLeft: "24px", paddingRight: "24px", position: "relative", zIndex: 11 }}>
        
        <div className="saas-arch-container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          


          {/* 5-Card Bento Grid Layout (2 Top Cards + 3 Bottom Cards) */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            
            {/* Top Row: 2 Large Equal Bento Cards Side-by-Side */}
            <div className="saas-arch-top-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              
              {/* Top Left Card (Card 1: PostgreSQL RLS Data Isolation) */}
              <div style={{
                background: "#ffffff",
                border: "1px solid #f1f5f9",
                borderRadius: "24px",
                padding: "28px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
                display: "flex",
                flexDirection: "column",
                justify: "space-between",
                minHeight: "360px"
              }}>
                {/* Top UI Visual: Horizontal Gantt/Progress Bar Timeline */}
                <div style={{ background: "#f8fafc", borderRadius: "18px", padding: "20px", border: "1px solid #e2e8f0", marginBottom: "24px", position: "relative" }}>
                  {/* Floating Cursor Badge */}
                  <div style={{ position: "absolute", top: "10px", right: "20px", display: "flex", flexDirection: "column", alignItems: "center", zIndex: 10 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#00bba7" xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotate(-20deg)", marginBottom: "-2px" }}>
                      <path d="M4.148 2.352l16.148 10.765c1.114.743.642 2.502-.686 2.502h-6.26l-3.327 7.072c-.52 1.107-2.13.93-2.38-.28l-3.95-18.983c-.244-1.17 1.053-2.023 2.055-1.076z" />
                    </svg>
                    <div style={{ background: "#00bba7", color: "#ffffff", fontSize: "9px", fontWeight: "800", padding: "2px 8px", borderRadius: "100px", boxShadow: "0 4px 10px rgba(0,187,167,0.3)" }}>Tenant 1</div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#00bba7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ color: "#ffffff", fontSize: "11px", fontWeight: "800" }}>A</span>
                      </div>
                      <div style={{ flex: 1, height: "10px", background: "#e2e8f0", borderRadius: "100px", display: "flex" }}>
                        <div style={{ width: "100%", height: "100%", background: "linear-gradient(90deg, #00bba7 0%, #34d399 100%)", borderRadius: "100px", position: "relative" }}>
                          <span style={{ position: "absolute", right: "0", top: "-18px", fontSize: "10px", fontWeight: "800", color: "#00bba7" }}>90%</span>
                        </div>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#6366f1", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ color: "#ffffff", fontSize: "11px", fontWeight: "800" }}>B</span>
                      </div>
                      <div style={{ flex: 1, height: "10px", background: "#e2e8f0", borderRadius: "100px", display: "flex" }}>
                        <div style={{ width: "75%", height: "100%", background: "linear-gradient(90deg, #6366f1 0%, #818cf8 100%)", borderRadius: "100px" }} />
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#f97316", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ color: "#ffffff", fontSize: "11px", fontWeight: "800" }}>C</span>
                      </div>
                      <div style={{ flex: 1, height: "10px", background: "#e2e8f0", borderRadius: "100px", display: "flex" }}>
                        <div style={{ width: "60%", height: "100%", background: "linear-gradient(90deg, #f97316 0%, #fb923c 100%)", borderRadius: "100px" }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Centered Text */}
                <div style={{ textAlign: "center" }}>
                  <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", marginBottom: "8px" }}>
                    PostgreSQL Row-Level Security (RLS)
                  </h3>
                  <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6", margin: 0 }}>
                    We enforce strict database-level isolation. Every query is filtered by <code>tenant_id</code> through PostgreSQL RLS policies.
                  </p>
                </div>
              </div>

              {/* Top Right Card (Card 2: Stripe Recurring & Metered Billing) */}
              <div style={{
                background: "#ffffff",
                border: "1px solid #f1f5f9",
                borderRadius: "24px",
                padding: "28px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
                display: "flex",
                flexDirection: "column",
                justify: "space-between",
                minHeight: "360px"
              }}>
                {/* Top UI Visual: Clean Stage & Task Table Mockup */}
                <div style={{ background: "#f8fafc", borderRadius: "18px", padding: "16px", border: "1px solid #e2e8f0", marginBottom: "24px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr", fontSize: "10.5px", fontWeight: "800", color: "#94a3b8", textTransform: "uppercase", paddingBottom: "8px", borderBottom: "1px solid #e2e8f0" }}>
                    <span>Pipeline Task</span>
                    <span>Stage</span>
                    <span>Status</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "8px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr", fontSize: "11.5px", alignItems: "center" }}>
                      <span style={{ color: "#0f172a", fontWeight: "700" }}>PostgreSQL RLS</span>
                      <span style={{ background: "#e2e8f0", color: "#475569", padding: "2px 8px", borderRadius: "100px", fontSize: "10px", fontWeight: "700", width: "fit-content" }}>BACKLOG</span>
                      <span style={{ color: "#059669", fontWeight: "800" }}>✓ PASS</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr", fontSize: "11.5px", alignItems: "center" }}>
                      <span style={{ color: "#0f172a", fontWeight: "700" }}>Stripe Webhook</span>
                      <span style={{ background: "#e0f2fe", color: "#0284c7", padding: "2px 8px", borderRadius: "100px", fontSize: "10px", fontWeight: "700", width: "fit-content" }}>IN PROGRESS</span>
                      <span style={{ color: "#0284c7", fontWeight: "800" }}>● SYNC</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr", fontSize: "11.5px", alignItems: "center" }}>
                      <span style={{ color: "#0f172a", fontWeight: "700" }}>Okta SAML SSO</span>
                      <span style={{ background: "#ecfdf5", color: "#059669", padding: "2px 8px", borderRadius: "100px", fontSize: "10px", fontWeight: "700", width: "fit-content" }}>COMPLETED</span>
                      <span style={{ color: "#059669", fontWeight: "800" }}>✓ DONE</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Centered Text */}
                <div style={{ textAlign: "center" }}>
                  <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", marginBottom: "8px" }}>
                    Stripe Recurring & Metered Billing
                  </h3>
                  <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6", margin: 0 }}>
                    Full-lifecycle subscription management with Stripe webhooks, seat-based tiers, metered usage counters, and dunning retry logic.
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Row: 3 Equal Bento Cards Side-by-Side */}
            <div className="saas-bento-bottom-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
              
              {/* Bottom Card 1 (Card 3: Enterprise SAML SSO & SCIM) */}
              <div style={{
                background: "#ffffff",
                border: "1px solid #f1f5f9",
                borderRadius: "24px",
                padding: "24px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
                display: "flex",
                flexDirection: "column",
                justify: "space-between",
                minHeight: "340px"
              }}>
                {/* Top UI Visual: Schedule & Meeting Timeline */}
                <div style={{ background: "#f8fafc", borderRadius: "16px", padding: "14px", border: "1px solid #e2e8f0", marginBottom: "20px", position: "relative" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{ background: "#ffffff", padding: "10px", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
                      <span style={{ fontSize: "10px", color: "#94a3b8", fontWeight: "700" }}>09:00 AM</span>
                      <div style={{ fontSize: "12px", fontWeight: "700", color: "#0f172a" }}>Okta SAML 2.0 Auth</div>
                    </div>
                    <div style={{ background: "#eff6ff", padding: "10px", borderRadius: "10px", border: "1px solid #bfdbfe", position: "relative" }}>
                      <span style={{ fontSize: "10px", color: "#2563eb", fontWeight: "700" }}>10:00 AM</span>
                      <div style={{ fontSize: "12px", fontWeight: "700", color: "#1d4ed8" }}>SCIM Directory Sync</div>
                      
                      {/* Floating Name Badge */}
                      <div style={{ position: "absolute", top: "-15px", right: "-10px", display: "flex", flexDirection: "column", alignItems: "center", zIndex: 10 }}>
                        <div style={{ background: "#8b5cf6", color: "#ffffff", fontSize: "9px", fontWeight: "800", padding: "4px 8px", borderRadius: "100px", boxShadow: "0 4px 10px rgba(139,92,246,0.3)" }}>Albert</div>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#8b5cf6" xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotate(20deg)", marginTop: "-2px" }}>
                          <path d="M4.148 2.352l16.148 10.765c1.114.743.642 2.502-.686 2.502h-6.26l-3.327 7.072c-.52 1.107-2.13.93-2.38-.28l-3.95-18.983c-.244-1.17 1.053-2.023 2.055-1.076z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Centered Text */}
                <div style={{ textAlign: "center" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a", marginBottom: "6px" }}>
                    Enterprise SAML SSO
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: "1.5", margin: 0 }}>
                    Turnkey enterprise single sign-on via WorkOS, Okta, and Azure AD directory syncing.
                  </p>
                </div>
              </div>

              {/* Bottom Card 2 (Card 4: Concentric Orbit Integrations) */}
              <div style={{
                background: "#ffffff",
                border: "1px solid #f1f5f9",
                borderRadius: "24px",
                padding: "24px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
                display: "flex",
                flexDirection: "column",
                justify: "space-between",
                minHeight: "340px"
              }}>
                {/* Top Centered Text */}
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a", marginBottom: "6px" }}>
                    Seamless Integrations
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: "1.5", margin: 0 }}>
                    Connect with Stripe, Redis rate-limiters, Cloudflare edge, and WorkOS out of the box.
                  </p>
                </div>

                {/* Bottom UI Visual: Concentric Orbit Integrations Graphic */}
                <div style={{ background: "#f8fafc", borderRadius: "16px", padding: "16px", border: "1px solid #e2e8f0", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "130px", flex: 1 }}>
                  <div style={{ position: "relative", width: "100px", height: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ position: "absolute", width: "100px", height: "100px", borderRadius: "50%", border: "1px dashed #cbd5e1" }} />
                    <div style={{ position: "absolute", width: "65px", height: "65px", borderRadius: "50%", border: "1px dashed #cbd5e1" }} />
                    <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#3b82f6", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", zIndex: 5, boxShadow: "0 4px 12px rgba(59,130,246,0.3)" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    </div>
                    {/* Orbiting App Icons */}
                    <div style={{ position: "absolute", top: "-5px", left: "40%", width: "24px", height: "24px", background: "#ffffff", borderRadius: "50%", boxShadow: "0 2px 6px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px" }}>💳</div>
                    <div style={{ position: "absolute", bottom: "5px", right: "-5px", width: "24px", height: "24px", background: "#ffffff", borderRadius: "50%", boxShadow: "0 2px 6px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px" }}>🔑</div>
                    <div style={{ position: "absolute", bottom: "5px", left: "-5px", width: "24px", height: "24px", background: "#ffffff", borderRadius: "50%", boxShadow: "0 2px 6px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px" }}>💾</div>
                  </div>
                </div>
              </div>

              {/* Bottom Card 3 (Card 5: Audit Logging & Telemetry) */}
              <div style={{
                background: "#ffffff",
                border: "1px solid #f1f5f9",
                borderRadius: "24px",
                padding: "24px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
                display: "flex",
                flexDirection: "column",
                justify: "space-between",
                minHeight: "340px"
              }}>
                {/* Top UI Visual: Drag & Drop Security Task Box */}
                <div style={{ background: "#f8fafc radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "12px 12px", borderRadius: "16px", padding: "14px", border: "1px solid #e2e8f0", marginBottom: "20px", minHeight: "130px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  
                  {/* Floating Name Badge */}
                  <div style={{ position: "absolute", top: "10px", left: "10px", background: "#0f172a", color: "#ffffff", fontSize: "9px", fontWeight: "800", padding: "4px 8px", borderRadius: "100px", display: "flex", alignItems: "center", gap: "4px", zIndex: 10 }}>
                    <span style={{ width: "6px", height: "6px", background: "#38bdf8", borderRadius: "50%" }}></span>
                    System Auth
                  </div>

                  <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "12px", boxShadow: "0 10px 25px rgba(0,0,0,0.05)", width: "100%", position: "relative", zIndex: 5 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                      <span style={{ fontSize: "10px", color: "#ec4899", fontWeight: "800", background: "#fdf2f8", padding: "3px 8px", borderRadius: "100px" }}>• High</span>
                      <span style={{ fontSize: "10px", color: "#94a3b8", fontWeight: "600" }}>2/4</span>
                    </div>
                    <div style={{ fontSize: "13px", fontWeight: "800", color: "#0f172a", marginBottom: "12px" }}>Audit Trail Sealed</div>
                    
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ fontSize: "10px", color: "#94a3b8", fontWeight: "600" }}>Jan 23 2026</div>
                      <div style={{ display: "flex", marginLeft: "-4px" }}>
                        <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#0284c7", border: "2px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "9px", fontWeight: "800" }}>U</div>
                        <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#6366f1", border: "2px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "9px", fontWeight: "800", marginLeft: "-6px" }}>P</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Centered Text */}
                <div style={{ textAlign: "center" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a", marginBottom: "6px" }}>
                    Audit Logging Telemetry
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: "1.5", margin: 0 }}>
                    Immutable cryptographic audit logs for every tenant transaction with zero overhead.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── 5. WORK THE WAY YOU WANT (CUSTOM UI) ── */}
      <section id="work-the-way" style={{ background: "#ffffff", padding: "0 24px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          


          {/* Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            
            {/* Card 1 */}
            <div className="saas-custom-card" style={{ display: "flex", alignItems: "stretch", background: "#ffffff", borderRadius: "24px", overflow: "hidden", boxShadow: "0 4px 20px rgba(15, 23, 42, 0.02)" }}>
              <div className="saas-custom-card-text" style={{ flex: 1, padding: "40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>

                <h3 style={{ fontSize: "32px", fontWeight: "800", color: "#0f172a", lineHeight: "1.25", marginBottom: "20px", maxWidth: "380px" }}>
                  Effortless Task Flow Management
                </h3>
                <p style={{ fontSize: "16px", color: "#64748b", lineHeight: "1.7", marginBottom: "36px", maxWidth: "440px" }}>
                  Move tasks seamlessly between stages with an intuitive drag-and-drop system.
                </p>

              </div>
              <div className="saas-custom-card-img right-img" style={{ flex: 1.1, background: "#f8fafc", padding: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {/* Kanban Mockup */}
                <div style={{ width: "100%", background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "20px", boxShadow: "0 10px 25px rgba(0,0,0,0.03)" }}>
                  <div className="saas-mockup-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
                    <div style={{ background: "#f8fafc", borderRadius: "12px", padding: "16px", minHeight: "200px" }}>
                      <div style={{ fontSize: "12px", fontWeight: "800", marginBottom: "12px", color: "#475569" }}>Backlog</div>
                      <div style={{ background: "#ffffff", padding: "12px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.02)", border: "1px solid #e2e8f0", marginBottom: "8px" }}>
                        <div style={{ fontSize: "10px", color: "#ef4444", background: "#fee2e2", display: "inline-block", padding: "2px 6px", borderRadius: "4px", marginBottom: "6px" }}>High</div>
                        <div style={{ fontSize: "13px", fontWeight: "700", color: "#0f172a" }}>CRM Feature List</div>
                        <div style={{ fontSize: "11px", color: "#64748b", marginTop: "4px" }}>Define core modules...</div>
                      </div>
                    </div>
                    <div style={{ background: "#f8fafc", borderRadius: "12px", padding: "16px", minHeight: "200px" }}>
                      <div style={{ fontSize: "12px", fontWeight: "800", marginBottom: "12px", color: "#475569" }}>In Progress</div>
                      <div style={{ background: "#ffffff", padding: "12px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.02)", border: "1px solid #e2e8f0" }}>
                        <div style={{ width: "100%", height: "4px", background: "#e2e8f0", borderRadius: "2px", marginBottom: "8px" }}><div style={{ width: "60%", height: "100%", background: "#0ea5e9", borderRadius: "2px" }}></div></div>
                        <div style={{ fontSize: "13px", fontWeight: "700", color: "#0f172a" }}>API Integration</div>
                      </div>
                    </div>
                    <div style={{ background: "#f8fafc", borderRadius: "12px", padding: "16px", minHeight: "200px" }}>
                      <div style={{ fontSize: "12px", fontWeight: "800", marginBottom: "12px", color: "#475569" }}>Review</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="saas-custom-card reverse" style={{ display: "flex", flexDirection: "row-reverse", alignItems: "stretch", background: "#ffffff", borderRadius: "24px", overflow: "hidden", boxShadow: "0 4px 20px rgba(15, 23, 42, 0.02)" }}>
              <div className="saas-custom-card-text" style={{ flex: 1, padding: "40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>

                <h3 style={{ fontSize: "32px", fontWeight: "800", color: "#0f172a", lineHeight: "1.25", marginBottom: "20px", maxWidth: "380px" }}>
                  Stay Organized with Calendar View
                </h3>
                <p style={{ fontSize: "16px", color: "#64748b", lineHeight: "1.7", marginBottom: "36px", maxWidth: "440px" }}>
                  Plan ahead, set deadlines, and never miss an important task with a clear timeline view.
                </p>

              </div>
              <div className="saas-custom-card-img left-img" style={{ flex: 1.1, background: "#f8fafc", padding: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {/* Calendar Mockup */}
                <div style={{ width: "100%", background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "20px", boxShadow: "0 10px 25px rgba(0,0,0,0.03)" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "40px repeat(3, 1fr)", gap: "1px", background: "#e2e8f0", border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden" }}>
                    <div style={{ background: "#ffffff", padding: "10px", fontSize: "10px", color: "#94a3b8", textAlign: "center" }}>Time</div>
                    <div style={{ background: "#ffffff", padding: "10px", fontSize: "11px", fontWeight: "700", textAlign: "center" }}>Mon</div>
                    <div style={{ background: "#ffffff", padding: "10px", fontSize: "11px", fontWeight: "700", textAlign: "center" }}>Tue</div>
                    <div style={{ background: "#ffffff", padding: "10px", fontSize: "11px", fontWeight: "700", textAlign: "center" }}>Wed</div>
                    
                    <div style={{ background: "#ffffff", padding: "10px", fontSize: "10px", color: "#94a3b8", textAlign: "center" }}>09:00</div>
                    <div style={{ background: "#ffffff", padding: "4px" }}>
                      <div style={{ background: "#e0f2fe", borderLeft: "3px solid #0ea5e9", padding: "6px", borderRadius: "4px", fontSize: "10px", color: "#0284c7" }}>Internal meeting</div>
                    </div>
                    <div style={{ background: "#ffffff" }}></div>
                    <div style={{ background: "#ffffff" }}></div>

                    <div style={{ background: "#ffffff", padding: "10px", fontSize: "10px", color: "#94a3b8", textAlign: "center" }}>11:00</div>
                    <div style={{ background: "#ffffff" }}></div>
                    <div style={{ background: "#ffffff", padding: "4px" }}>
                      <div style={{ background: "#f3e8ff", borderLeft: "3px solid #a855f7", padding: "6px", borderRadius: "4px", fontSize: "10px", color: "#7e22ce" }}>Kick Off Project</div>
                    </div>
                    <div style={{ background: "#ffffff" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="saas-custom-card" style={{ display: "flex", alignItems: "stretch", background: "#ffffff", borderRadius: "24px", overflow: "hidden", boxShadow: "0 4px 20px rgba(15, 23, 42, 0.02)" }}>
              <div className="saas-custom-card-text" style={{ flex: 1, padding: "40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>

                <h3 style={{ fontSize: "32px", fontWeight: "800", color: "#0f172a", lineHeight: "1.25", marginBottom: "20px", maxWidth: "380px" }}>
                  Gain Clarity with Project Overview
                </h3>
                <p style={{ fontSize: "16px", color: "#64748b", lineHeight: "1.7", marginBottom: "36px", maxWidth: "440px" }}>
                  Track progress, team workload, and key milestones—all in one comprehensive dashboard.
                </p>

              </div>
              <div className="saas-custom-card-img right-img" style={{ flex: 1.1, background: "#f8fafc", padding: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {/* Overview Mockup */}
                <div style={{ width: "100%", background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "20px", boxShadow: "0 10px 25px rgba(0,0,0,0.03)" }}>
                  <div className="saas-mockup-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div style={{ border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px" }}>
                      <div style={{ fontSize: "12px", fontWeight: "700", color: "#475569", marginBottom: "16px" }}>Total Task</div>
                      {/* Fake Area Chart */}
                      <div style={{ height: "80px", background: "linear-gradient(180deg, #e0e7ff 0%, #ffffff 100%)", borderRadius: "8px", position: "relative", overflow: "hidden" }}>
                         <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "100%" }}>
                           <path d="M0,100 L0,60 Q25,30 50,70 T100,20 L100,100 Z" fill="#c7d2fe" />
                           <path d="M0,100 L0,80 Q25,60 50,90 T100,40 L100,100 Z" fill="#818cf8" opacity="0.8" />
                         </svg>
                      </div>
                    </div>
                    <div style={{ border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ fontSize: "12px", fontWeight: "700", color: "#475569", alignSelf: "flex-start", marginBottom: "16px", width: "100%" }}>Workload</div>
                      {/* Fake Donut Chart */}
                      <div style={{ width: "90px", height: "90px", borderRadius: "50%", border: "12px solid #e2e8f0", borderTopColor: "#3b82f6", borderRightColor: "#818cf8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a" }}>290</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 7. 4-STAGE SAAS DELIVERY PROCESS (BENTO GRID MATCHING REFERENCE DESIGN) ── */}
      <section className="saas-process-section" style={{ padding: "0 24px 80px", background: "#ffffff", position: "relative", zIndex: 11 }}>
        <div className="saas-process-container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          
          {/* Header */}
          <div className="saas-sec-header" style={{ maxWidth: "800px", margin: "0 auto 50px", textAlign: "center" }}>

            <h2 className="saas-sec-title-dark" style={{ fontSize: "clamp(34px, 4vw, 48px)", fontWeight: "800", color: "#475569", lineHeight: "1.18", letterSpacing: "-1px", marginBottom: "16px" }}>
              4-Stage SaaS Delivery Process
            </h2>
            <p className="saas-sec-desc-dark" style={{ fontSize: "16.5px", color: "#718096", lineHeight: "1.7", maxWidth: "660px", margin: "0 auto" }}>
              From data modeling and Stripe billing integration to penetration testing and 6–8 week MVP production rollout.
            </p>
          </div>

          {/* Bento Grid Container */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            
            {/* Top Row: 2 Large Bento Cards Side-by-Side */}
            <div className="saas-process-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              
              {/* Top Left Bento Card (Stage 01: Tenant Data Modeling & RLS) */}
              <div style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "28px",
                padding: "36px 36px 0 36px",
                display: "flex",
                flexDirection: "column",
                justify: "space-between",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(15, 23, 42, 0.03)"
              }}>
                <div style={{ marginBottom: "24px" }}>
                  <h3 style={{ fontSize: "24px", fontWeight: "800", color: "#0f172a", marginBottom: "12px", lineHeight: "1.3" }}>
                    {deliverySteps[0].title}
                  </h3>
                  <p style={{ fontSize: "15px", color: "#475569", lineHeight: "1.6" }}>
                    {deliverySteps[0].desc}
                  </p>
                </div>

                {/* Overlapping Dual Code & Contract Window Mockup */}
                <div style={{ display: "flex", gap: "14px", transform: "translateY(10px)" }}>
                  <div style={{ flex: 1, background: "#0f172a", borderRadius: "14px 14px 0 0", padding: "14px", fontFamily: "monospace", fontSize: "10.5px", color: "#e2e8f0" }}>
                    <div style={{ color: "#94a3b8", marginBottom: "4px" }}>dataset: tenant_catalog</div>
                    <div style={{ color: "#38bdf8" }}>checks:</div>
                    <div style={{ color: "#4ade80", paddingLeft: "10px" }}>- schema: PostgreSQL RLS</div>
                    <div style={{ color: "#cbd5e1", paddingLeft: "10px" }}>- tenant_id filter: REQUIRED</div>
                  </div>
                  <div style={{ flex: 1.3, background: "#ffffff", borderRadius: "14px 14px 0 0", padding: "14px", boxShadow: "0 -8px 25px rgba(0,0,0,0.08)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", fontWeight: "800", color: "#0f172a", marginBottom: "8px" }}>
                      <span>RLS Contract</span>
                      <span style={{ color: "#00bba7" }}>● Active</span>
                    </div>
                    <div style={{ fontSize: "10px", color: "#64748b", marginBottom: "6px" }}>Filter: tenant_id = app.current_tenant</div>
                    <div style={{ background: "#ecfdf5", color: "#059669", fontSize: "10px", padding: "4px 8px", borderRadius: "6px", fontWeight: "700" }}>✓ Zero-Leak Schema Enforced</div>
                  </div>
                </div>
              </div>

              {/* Top Right Bento Card (Stage 02: Rapid MVP Pod Build 6-8 Weeks) */}
              <div style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "28px",
                padding: "36px",
                display: "flex",
                flexDirection: "column",
                justify: "space-between",
                boxShadow: "0 10px 30px rgba(15, 23, 42, 0.03)"
              }}>
                <div>
                  <h3 style={{ fontSize: "24px", fontWeight: "800", color: "#0f172a", marginBottom: "12px", lineHeight: "1.3" }}>
                    {deliverySteps[1].title}
                  </h3>
                  <p style={{ fontSize: "15px", color: "#475569", lineHeight: "1.6" }}>
                    {deliverySteps[1].desc}
                  </p>
                </div>

                {/* Node Flowchart Diagram Visual (Exact match with reference image) */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "30px", position: "relative" }}>
                  
                  {/* Left Alert Node Pills */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ background: "#fef2f2", color: "#ef4444", border: "1px solid #fecaca", padding: "6px 12px", borderRadius: "100px", fontSize: "11px", fontWeight: "700" }}>
                      ✕ Missing Isolation
                    </span>
                    <span style={{ background: "#fefce8", color: "#eab308", border: "1px solid #fef08a", padding: "6px 12px", borderRadius: "100px", fontSize: "11px", fontWeight: "700" }}>
                      ⚠ Duplicated Keys
                    </span>
                    <span style={{ background: "#fef2f2", color: "#ef4444", border: "1px solid #fecaca", padding: "6px 12px", borderRadius: "100px", fontSize: "11px", fontWeight: "700" }}>
                      ✕ Invalid Session
                    </span>
                  </div>

                  {/* Center Glowing Node Pill */}
                  <div style={{ width: "48px", height: "48px", borderRadius: "16px", background: "#00bba7", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", boxShadow: "0 10px 25px rgba(0, 187, 167, 0.4)" }}>
                    ⚡
                  </div>

                  {/* Right Verified Node Pills */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ background: "#ecfdf5", color: "#059669", border: "1px solid #a7f3d0", padding: "6px 12px", borderRadius: "100px", fontSize: "11px", fontWeight: "700" }}>
                      ✓ Customer records
                    </span>
                    <span style={{ background: "#ecfdf5", color: "#059669", border: "1px solid #a7f3d0", padding: "6px 12px", borderRadius: "100px", fontSize: "11px", fontWeight: "700" }}>
                      ✓ Sales records
                    </span>
                    <span style={{ background: "#ecfdf5", color: "#059669", border: "1px solid #a7f3d0", padding: "6px 12px", borderRadius: "100px", fontSize: "11px", fontWeight: "700" }}>
                      ✓ Transactional records
                    </span>
                  </div>

                </div>
              </div>

            </div>

            {/* Bottom Row: Full-Width Bento Card (Stage 03 & 04: Security Verification & Launch) */}
            <div className="saas-process-flex-col" style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "28px",
              padding: "40px",
              display: "flex",
              alignItems: "center",
              gap: "40px",
              boxShadow: "0 10px 30px rgba(15, 23, 42, 0.03)"
            }}>
              
              {/* Left Column: Text & Pill Action Link */}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "11.5px", fontWeight: "800", color: "#7c3aed", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>
                  STAGE 03 & 04 • SECURITY AUDIT & LAUNCH
                </div>
                <h3 style={{ fontSize: "28px", fontWeight: "800", color: "#0f172a", marginBottom: "14px", lineHeight: "1.25" }}>
                  Security Hardening, Penetration Testing & Production Launch
                </h3>
                <p style={{ fontSize: "15.5px", color: "#475569", lineHeight: "1.7", marginBottom: "28px" }}>
                  We conduct exhaustive multi-tenant penetration tests, eliminate cross-tenant leak vectors, configure SOC 2 audit logging, and deploy with CI/CD automation for 99.99% SLA-backed maintenance.
                </p>
                <a href="/contact" style={{ background: "#ffffff", color: "#0f172a", padding: "12px 24px", borderRadius: "100px", fontWeight: "700", fontSize: "14px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", boxShadow: "0 4px 15px rgba(0,0,0,0.06)", border: "1px solid #e2e8f0" }}>
                  <span>Learn more</span>
                  <span>›</span>
                </a>
              </div>

              {/* Right Column: Large Browser Window UI Visual */}
              <div style={{ flex: 1.2, width: "100%" }}>
                <div style={{ background: "#ffffff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 15px 35px rgba(0,0,0,0.08)", border: "1px solid #e2e8f0" }}>
                  {/* Chrome Bar */}
                  <div style={{ display: "flex", alignItems: "center", padding: "10px 16px", background: "#f8fafc", borderBottom: "1px solid #e2e8f0", gap: "6px" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444" }} />
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#eab308" }} />
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e" }} />
                    <span style={{ marginLeft: "10px", fontSize: "10.5px", color: "#64748b", fontFamily: "monospace" }}>audit.saas-platform.com</span>
                  </div>

                  {/* Window Content Split */}
                  <div className="saas-process-flex-col" style={{ display: "flex", minHeight: "180px" }}>
                    {/* Dark Copilot Panel */}
                    <div style={{ width: "40%", background: "#0f172a", padding: "16px", color: "#ffffff", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                      <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg, #a855f7, #6366f1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", marginBottom: "10px" }}>
                        🔮
                      </div>
                      <div style={{ fontSize: "12px", fontWeight: "700", color: "#ffffff", marginBottom: "4px" }}>Audit Copilot</div>
                      <div style={{ fontSize: "10px", color: "#94a3b8" }}>0 Leak Vectors Detected</div>
                    </div>

                    {/* White Workspace Panel */}
                    <div style={{ width: "60%", padding: "16px", background: "#ffffff" }}>
                      <div style={{ fontSize: "12px", fontWeight: "800", color: "#0f172a", marginBottom: "8px" }}>Contract Verification</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "10.5px", color: "#64748b" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", background: "#f8fafc", padding: "6px 8px", borderRadius: "6px" }}>
                          <span>PostgreSQL RLS</span>
                          <span style={{ color: "#059669", fontWeight: "700" }}>VERIFIED</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", background: "#f8fafc", padding: "6px 8px", borderRadius: "6px" }}>
                          <span>Stripe Webhooks</span>
                          <span style={{ color: "#059669", fontWeight: "700" }}>VERIFIED</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", background: "#f8fafc", padding: "6px 8px", borderRadius: "6px" }}>
                          <span>SAML 2.0 Auth</span>
                          <span style={{ color: "#059669", fontWeight: "700" }}>VERIFIED</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── 8. SAAS ENGINEERING FAQS (MODERN CENTERED DESIGN) ── */}
      <section className="saas-faq-section" style={{ paddingTop: "20px", marginTop: "-40px", paddingBottom: "20px", position: "relative", zIndex: 12 }}>
        <div className="saas-faq-container">
          <div className="saas-sec-header" style={{ marginBottom: "60px" }}>
            <h2 className="saas-sec-title">Frequently Asked Questions</h2>
            <p className="saas-sec-desc">Everything you need to know about our multi-tenant SaaS architecture, billing integrations, and MVP timelines.</p>
          </div>

          <div className="saas-faq-accordion">
            {faqs.map((f, i) => (
              <details key={i} className="saas-faq-item">
                <summary>
                  <span className="saas-faq-q">{f.q}</span>
                  <span className="saas-faq-toggle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </summary>
                <div className="saas-faq-a">{f.a}</div>
              </details>
            ))}
          </div>


        </div>
      </section>

      {/* ── EMBEDDED SCOPED STYLING ── */}
      <style jsx>{`
        .saas-page-root {
          font-family: -apple-system, BlinkMacSystemFont, "Plus Jakarta Sans", "Inter", sans-serif;
          color: #0f172a;
          background: #ffffff;
          overflow-x: hidden;
          width: 100%;
        }

        /* Generic Header */
        .saas-sec-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .saas-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f0fdf4;
          border: 1.5px solid #a7f3d0;
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 11.5px;
          font-weight: 800;
          color: #059669;
          letter-spacing: 1.2px;
          margin-bottom: 16px;
          box-shadow: 0 4px 12px rgba(5, 150, 105, 0.06);
        }
        .saas-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #059669;
          box-shadow: 0 0 6px rgba(5, 150, 105, 0.8);
        }
        .saas-sec-title {
          font-size: clamp(28px, 3.8vw, 44px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.15;
          letter-spacing: -1.2px;
          margin: 0 0 16px;
        }
        .saas-sec-desc {
          font-size: 15.5px;
          color: #64748b;
          line-height: 1.65;
          margin: 0;
        }

        /* Hero Section */
        .saas-hero-wrapper {
          background: radial-gradient(circle at 25% 45%, rgba(209, 250, 229, 0.45) 0%, rgba(240, 253, 244, 0.2) 40%, #ffffff 70%);
          padding: 130px 24px 80px;
          border-bottom: 1px solid #f1f5f9;
        }
        .saas-hero {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.18fr 1fr;
          gap: 40px;
          align-items: center;
        }
        .node-network-wrapper {
          position: relative;
          width: 100%;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .network-ambient-glow {
          position: absolute;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(52, 211, 153, 0.22) 0%, rgba(16, 185, 129, 0.05) 55%, transparent 70%);
          border-radius: 50%;
          z-index: 1;
          pointer-events: none;
        }
        .central-hub-container {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .central-hub-outer-ring {
          position: absolute;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          border: 1.5px dashed rgba(16, 185, 129, 0.35);
        }
        .central-hub {
          width: 68px;
          height: 68px;
          background: linear-gradient(135deg, #063a2f 0%, #03211a 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 16px 35px rgba(6, 58, 47, 0.32), 0 0 0 1px rgba(52, 211, 153, 0.25);
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .central-hub:hover {
          transform: scale(1.1);
        }
        .node-card {
          position: absolute;
          background: #ffffff;
          border: 1px solid #eef2f6;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.07);
          border-radius: 14px;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 8;
          transition: all 0.28s ease;
          cursor: pointer;
        }
        .node-card:hover {
          transform: translateY(-4px) scale(1.03);
          border-color: #cbd5e1;
          box-shadow: 0 18px 36px rgba(15, 23, 42, 0.12);
        }
        .node-avatar-circle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          color: #ffffff;
          flex-shrink: 0;
        }
        .node-title-text {
          font-size: 13px;
          font-weight: 700;
          color: #0f172a;
        }
        .node-subtitle-text {
          font-size: 11px;
          color: #64748b;
          margin-top: 2px;
        }
        .node-pos-1 { top: 30px; left: 15px; }
        .node-pos-2 { top: 30px; right: 15px; }
        .node-pos-3 { bottom: 40px; right: 15px; }
        .node-pos-4 { bottom: 40px; left: 15px; }
        .node-pos-5 { top: 225px; left: -10px; }

        .saas-hero-right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          z-index: 2;
        }
        .saas-hero-title {
          font-size: clamp(34px, 4.2vw, 54px);
          font-weight: 900;
          color: #0f172a;
          line-height: 1.12;
          letter-spacing: -1.5px;
          margin: 0 0 20px;
        }
        .saas-highlight-text {
          background: linear-gradient(135deg, #059669, #10b981);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .saas-hero-subtitle {
          font-size: 16px;
          color: #64748b;
          line-height: 1.65;
          margin: 0 0 32px;
          max-width: 520px;
        }
        .saas-hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }
        .saas-btn-primary {
          background: #0f172a;
          color: #ffffff !important;
          font-weight: 700;
          border-radius: 100px;
          padding: 14px 28px;
          font-size: 15px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.18);
          transition: all 0.2s ease;
        }
        .saas-btn-primary:hover {
          background: #1e293b;
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(15, 23, 42, 0.25);
        }
        .saas-btn-arrow {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 1.5px solid rgba(255, 255, 255, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
        }
        .saas-btn-ghost {
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          color: #0f172a !important;
          font-weight: 700;
          border-radius: 100px;
          padding: 14px 26px;
          font-size: 15px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: all 0.2s ease;
        }
        .saas-btn-ghost:hover {
          background: #f8fafc;
          border-color: #94a3b8;
          transform: translateY(-2px);
        }
        .saas-hero-stats {
          display: flex;
          gap: 24px;
          padding-top: 24px;
          border-top: 1px solid #e2e8f0;
          flex-wrap: wrap;
        }
        .saas-hstat-item {
          display: flex;
          flex-direction: column;
        }
        .saas-hstat-num {
          font-size: 24px;
          font-weight: 900;
          color: #0f172a;
          line-height: 1.1;
        }
        .saas-hstat-lbl {
          font-size: 11.5px;
          font-weight: 600;
          color: #64748b;
          margin-top: 4px;
        }
        .saas-hstat-div {
          width: 1px;
          height: 36px;
          background: #e2e8f0;
        }

        /* Pillars Section - White Theme */
        .saas-pillars-section {
          padding: 40px 24px 60px;
          background: #ffffff;
        }
        .saas-pillars-container {
          max-width: 1240px;
          margin: 0 auto;
        }
        .saas-pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        @media (max-width: 992px) {
          .saas-pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 576px) {
          .saas-pillars-grid {
            grid-template-columns: 1fr;
          }
        }
        .saas-pillar-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .saas-pillar-card:hover {
          transform: translateY(-5px);
          border-color: #cbd5e1;
          box-shadow: 0 16px 36px rgba(15, 23, 42, 0.08);
        }
        .saas-pillar-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4px;
        }
        .saas-pillar-title {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
        }
        .saas-pillar-desc {
          font-size: 14px;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        /* Architecture Section */
        .saas-arch-section {
          padding: 80px 24px;
          background: #ffffff;
        }
        .saas-arch-container {
          max-width: 1240px;
          margin: 0 auto;
        }
        .saas-arch-tabs {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .saas-arch-tab-btn {
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          padding: 12px 24px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 700;
          color: #475569;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .saas-arch-tab-btn:hover {
          color: #0f172a;
          background: #ffffff;
          border-color: #cbd5e1;
          transform: translateY(-2px);
        }
        .saas-arch-tab-btn.active {
          background: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.18);
        }
        .saas-arch-canvas {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 32px;
          padding: 44px;
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.04);
          display: grid;
          grid-template-columns: 1.05fr 1.15fr;
          gap: 40px;
          align-items: center;
        }
        .saas-arch-left {
          display: flex;
          flex-direction: column;
        }
        .saas-atag-row {
          margin-bottom: 12px;
        }
        .saas-abadge {
          background: #f0fdf4;
          border: 1px solid #a7f3d0;
          color: #059669;
          font-size: 11px;
          font-weight: 800;
          padding: 3px 10px;
          border-radius: 100px;
        }
        .saas-atitle {
          font-size: clamp(24px, 2.6vw, 32px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
          margin: 0 0 14px;
        }
        .saas-adesc {
          font-size: 14.5px;
          color: #64748b;
          line-height: 1.65;
          margin: 0 0 28px;
        }
        .saas-aaction-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .saas-arch-right {
          background: #0f172a;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #1e293b;
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.2);
        }
        .saas-acode-top {
          background: #1e293b;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .saas-acode-dots {
          display: flex;
          gap: 6px;
        }
        .saas-acode-dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .saas-acode-file {
          font-size: 11.5px;
          font-weight: 700;
          color: #38bdf8;
          font-family: monospace;
        }
        .saas-acopy-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
          cursor: pointer;
        }
        .saas-acode-pre {
          padding: 20px;
          margin: 0;
          overflow-x: auto;
          font-family: "JetBrains Mono", "Fira Code", monospace;
          font-size: 12px;
          line-height: 1.65;
          color: #e2e8f0;
          max-height: 380px;
        }

        /* Solutions Grid */
        .saas-solutions-section {
          padding: 96px 24px;
          background: #f8fafc;
        }
        .saas-solutions-container {
          max-width: 1240px;
          margin: 0 auto;
        }
        .saas-solutions-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .saas-sol-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 24px;
          padding: 32px 28px;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03);
          display: flex;
          flex-direction: column;
          transition: all 0.25s ease;
        }
        .saas-sol-card:hover {
          transform: translateY(-6px);
          border-color: #cbd5e1;
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
        }
        .saas-sol-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }
        .saas-sol-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
        }
        .saas-sol-badge {
          font-size: 11px;
          font-weight: 800;
          color: #059669;
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          padding: 3px 10px;
          border-radius: 100px;
        }
        .saas-sol-title {
          font-size: 18px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 10px;
        }
        .saas-sol-desc {
          font-size: 13.5px;
          color: #64748b;
          line-height: 1.6;
          margin: 0 0 20px;
          flex-grow: 1;
        }
        .saas-sol-bullets {
          border-top: 1px dashed #e2e8f0;
          padding-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .saas-sol-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12px;
          color: #334155;
          font-weight: 600;
        }
        .saas-sol-check {
          color: #059669;
          font-weight: 900;
        }

        /* Layer Pipeline */
        .saas-layer-section {
          padding: 96px 24px;
          background: #ffffff;
          border-top: 1px solid #f1f5f9;
        }
        .saas-layer-container {
          max-width: 1240px;
          margin: 0 auto;
        }
        .saas-layer-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .saas-layer-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 30px 24px;
          position: relative;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03);
          transition: all 0.25s ease;
        }
        .saas-layer-card:hover {
          transform: translateY(-5px);
          border-color: #059669;
          box-shadow: 0 16px 36px rgba(5, 150, 105, 0.09);
        }
        .saas-layer-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }
        .saas-layer-num {
          font-size: 26px;
          font-weight: 900;
          color: #059669;
          font-family: monospace;
          line-height: 1;
        }
        .saas-layer-icon {
          font-size: 22px;
        }
        .saas-layer-tag {
          font-size: 10.5px;
          font-weight: 800;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          display: block;
          margin-bottom: 6px;
        }
        .saas-layer-title {
          font-size: 17px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 10px;
        }
        .saas-layer-desc {
          font-size: 13px;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }
        .saas-layer-indicator {
          position: absolute;
          bottom: 14px;
          right: 18px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
        }

        /* Performance Section */
        .saas-perf-section {
          padding: 96px 24px;
          background: #f8fafc;
        }
        .saas-perf-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .saas-perf-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .saas-gauge-card {
          display: flex;
          align-items: center;
          gap: 20px;
          background: #ffffff;
          padding: 22px 24px;
          border-radius: 20px;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.03);
        }
        @keyframes drawGaugeCircle {
          0%, 100% { stroke-dashoffset: 100; }
          70%, 90% { stroke-dashoffset: 0; }
        }
        .saas-gauge-circle {
          animation: drawGaugeCircle 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .saas-gauge-title {
          font-size: 16px;
          font-weight: 800;
          color: #0f172a;
        }
        .saas-gauge-sub {
          font-size: 12.5px;
          color: #64748b;
          margin-top: 2px;
        }
        .saas-perf-right {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .saas-metric-row {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 18px 20px;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.02);
        }
        .saas-metric-header {
          display: flex;
          justify-content: space-between;
          font-size: 13.5px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 10px;
        }
        .saas-metric-bar-bg {
          width: 100%;
          height: 6px;
          background: #f1f5f9;
          border-radius: 3px;
          overflow: hidden;
        }
        .saas-metric-bar-fill {
          height: 100%;
          border-radius: 3px;
        }

        /* Process Section */
        .saas-process-section {
          padding: 96px 24px;
          background: #ffffff;
        }
        .saas-process-container {
          max-width: 1240px;
          margin: 0 auto;
        }
        .saas-process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .saas-process-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 28px 22px;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03);
          transition: all 0.25s ease;
        }
        .saas-process-card:hover {
          transform: translateY(-5px);
          border-color: #059669;
          box-shadow: 0 16px 36px rgba(5, 150, 105, 0.1);
        }
        .saas-proc-num-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .saas-proc-num {
          font-size: 28px;
          font-weight: 900;
          color: #059669;
          font-family: monospace;
          line-height: 1;
        }
        .saas-proc-icon {
          font-size: 22px;
        }
        .saas-proc-tag {
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          color: #64748b;
          display: block;
          margin-bottom: 8px;
        }
        .saas-proc-title {
          font-size: 16px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.3;
          margin: 0 0 12px;
        }
        .saas-proc-desc {
          font-size: 12.5px;
          color: #64748b;
          line-height: 1.65;
          margin: 0;
        }

        /* FAQ Section */
        .saas-faq-section {
          padding: 96px 24px;
          background: #f8fafc;
        }
        .saas-faq-container {
          max-width: 1160px;
          margin: 0 auto;
        }
        .saas-faq-layout {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 48px;
          align-items: start;
        }
        .saas-faq-sidebar {
          background: #f0fdf4;
          border: 1.5px solid #a7f3d0;
          border-radius: 24px;
          padding: 36px 28px;
          position: sticky;
          top: 100px;
        }
        .saas-faq-sidebar h3 {
          font-size: 22px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 12px;
          line-height: 1.25;
        }
        .saas-faq-sidebar p {
          font-size: 14px;
          color: #475569;
          line-height: 1.65;
          margin: 0 0 24px;
        }
        .saas-faq-contact-btn {
          display: inline-block;
          background: #0f172a;
          color: #ffffff !important;
          font-weight: 700;
          font-size: 14px;
          padding: 13px 24px;
          border-radius: 100px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.15);
          transition: all 0.2s ease;
        }
        .saas-faq-contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.25);
        }
        .saas-faq-stat-box {
          margin-top: 32px;
          border-top: 1px solid #bbf7d0;
          padding-top: 20px;
        }
        .saas-faq-stat-num {
          font-size: 32px;
          font-weight: 900;
          color: #059669;
          line-height: 1;
        }
        .saas-faq-stat-lbl {
          font-size: 12px;
          color: #475569;
          margin-top: 4px;
          font-weight: 600;
        }
        .saas-faq-accordion {
          display: flex;
          flex-direction: column;
        }
        .saas-faq-item {
          border-bottom: 1px solid #e2e8f0;
        }
        .saas-faq-item:first-child {
          border-top: 1px solid #e2e8f0;
        }
        .saas-faq-item summary {
          list-style: none;
          padding: 22px 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 16px;
          user-select: none;
        }
        .saas-faq-item summary::-webkit-details-marker {
          display: none;
        }
        .saas-faq-idx {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11.5px;
          font-weight: 800;
          color: #94a3b8;
          flex-shrink: 0;
        }
        .saas-faq-item[open] .saas-faq-idx {
          background: #ecfdf5;
          color: #059669;
          border-color: #a7f3d0;
        }
        .saas-faq-q {
          flex: 1;
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.35;
        }
        .saas-faq-item[open] .saas-faq-q {
          color: #059669;
        }
        .saas-faq-toggle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.25s ease, background 0.25s ease;
        }
        .saas-faq-item[open] .saas-faq-toggle {
          background: #059669;
          transform: rotate(180deg);
        }
        .saas-faq-item[open] .saas-faq-toggle svg path {
          stroke: #ffffff;
        }
        .saas-faq-a {
          padding: 0 0 24px 48px;
          font-size: 14.5px;
          color: #475569;
          line-height: 1.7;
        }

        /* Bottom CTA Banner */
        .saas-cta-banner-section {
          padding: 80px 24px 100px;
          background: #ffffff;
          border-top: 1px solid #f1f5f9;
        }
        .saas-cta-banner-card {
          max-width: 1100px;
          margin: 0 auto;
          background: linear-gradient(135deg, #052e16 0%, #064e3b 50%, #0f172a 100%);
          border-radius: 36px;
          padding: 64px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 30px 70px rgba(5, 46, 22, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .saas-cta-glow-orb {
          position: absolute;
          top: -50%;
          left: 50%;
          transform: translateX(-50%);
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, transparent 70%);
          pointer-events: none;
        }
        .saas-cta-inner {
          position: relative;
          z-index: 1;
          max-width: 760px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .saas-cta-title {
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 900;
          color: #ffffff;
          line-height: 1.12;
          letter-spacing: -1.2px;
          margin: 16px 0;
        }
        .saas-cta-desc {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.65;
          margin: 0 0 36px;
        }
        .saas-cta-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .saas-cta-btn-primary {
          background: #ffffff;
          color: #0f172a !important;
          padding: 15px 32px;
          border-radius: 100px;
          font-weight: 800;
          font-size: 15px;
          text-decoration: none;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          transition: all 0.2s ease;
        }
        .saas-cta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.3);
        }
        .saas-cta-btn-ghost {
          background: rgba(255, 255, 255, 0.1);
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          color: #ffffff !important;
          padding: 15px 30px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .saas-cta-btn-ghost:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .saas-hero {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .saas-pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .saas-arch-canvas {
            grid-template-columns: 1fr;
            padding: 32px 24px;
          }
          .saas-solutions-grid, .saas-layer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .saas-perf-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .saas-process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .saas-faq-layout {
            grid-template-columns: 1fr;
          }
          .saas-faq-sidebar {
            position: static;
          }
        }

        @media (max-width: 640px) {
          .saas-hero-wrapper {
            padding: 110px 16px 60px;
          }
          .node-network-wrapper {
            transform: scale(0.8);
          }
          .saas-pillars-grid, .saas-solutions-grid, .saas-layer-grid, .saas-process-grid {
            grid-template-columns: 1fr;
          }
          .saas-cta-banner-card {
            padding: 44px 20px;
            border-radius: 24px;
          }
        }
      

        
        /* SAAS SAAS-LANDING STYLES */
        :root {
          --saas-landing-pink: #ff3366;
          --saas-landing-pink-hover: #e62050;
          --saas-landing-purple: #6a1b9a;
          --saas-landing-dark: #2d3748;
          --saas-landing-gray: #718096;
          --saas-landing-bg-pink: #fff0f5;
        }

        /* Background Shapes */
        .saas-landing-shape {
          position: absolute;
          z-index: 0;
        }
        .shape-large-bg {
          top: -100px;
          right: -5%;
          width: 55%;
          height: 120%;
          background: #f8f6fb; /* Very light purple/gray */
          border-radius: 40% 0 0 50%;
          transform: rotate(-10deg);
        }
        .shape-triangle-1 {
          top: 15%;
          left: 12%;
          width: 0; 
          height: 0; 
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 14px solid #f6e05e; /* Yellow */
          transform: rotate(20deg);
        }
        .shape-circle-outline-1 {
          top: 10%;
          left: 20%;
          width: 24px;
          height: 24px;
          border: 3px solid #f8f6fb;
          border-radius: 50%;
        }
        .shape-circle-outline-2 {
          bottom: 15%;
          left: 25%;
          width: 120px;
          height: 120px;
          border: 15px solid #f8f6fb;
          border-radius: 50%;
        }
        .shape-triangle-2 {
          bottom: 12%;
          left: 22%;
          width: 0; 
          height: 0; 
          border-left: 12px solid transparent;
          border-right: 12px solid transparent;
          border-bottom: 20px solid #e2e8f0; /* Light gray/yellowish */
          transform: rotate(-15deg);
        }

        /* Buttons */
        .saas-landing-btn-solid {
          background: #ff3366;
          color: #ffffff;
          border: none;
          padding: 10px 24px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(255, 51, 102, 0.25);
        }
        .saas-landing-btn-solid:hover {
          background: #e62050;
          transform: translateY(-2px);
        }
        .saas-landing-btn-large {
          padding: 14px 34px;
          font-size: 16px;
        }
        .saas-landing-btn-ghost {
          background: #fff0f5;
          color: #ff3366;
          border: 1px solid #ff3366;
          padding: 9px 23px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .saas-landing-btn-ghost:hover {
          background: transparent;
        }

        /* Tag */
        .saas-landing-tag {
          color: #ff3366;
          font-weight: 700;
          font-size: 15px;
          margin-bottom: 12px;
          display: block;
        }

        /* Navbar */
        .saas-landing-nav {
          width: 100%;
          padding: 30px 0;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 100;
        }
        .saas-landing-nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 24px;
        }
        .saas-landing-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 24px;
          font-weight: 900;
          color: #ff3366;
        }
        .saas-landing-nav-links {
          display: flex;
          gap: 36px;
        }
        .saas-landing-nav-links a {
          text-decoration: none;
          color: #2d3748;
          font-weight: 600;
          font-size: 14px;
          transition: color 0.2s;
        }
        .saas-landing-nav-links a:hover {
          color: #ff3366;
        }
        .saas-landing-nav-actions {
          display: flex;
          gap: 16px;
        }

        /* Hero */
        .saas-landing-hero {
          position: relative;
          padding: 60px 24px 120px;
          overflow: hidden;
          background: #ffffff; /* Explicit White Theme */
        }
        .saas-landing-hero-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 40px;
          position: relative;
          z-index: 10;
        }
        .saas-landing-hero-content {
          flex: 1;
          padding-right: 40px;
        }
        .saas-landing-hero-content h1 {
          font-size: clamp(36px, 4vw, 48px);
          font-weight: 800;
          color: #2d3748;
          line-height: 1.2;
          margin-bottom: 20px;
          letter-spacing: -1px;
        }
        .saas-landing-hero-content p {
          font-size: 16px;
          color: #718096;
          line-height: 1.8;
          margin-bottom: 36px;
          max-width: 440px;
        }
        .saas-landing-hero-image {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          position: relative;
        }
        .saas-landing-hero-image img {
          max-width: 100%;
          height: auto;
          position: relative;
          z-index: 2;
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
/* About Us */
        .saas-landing-about {\n          padding: 40px 24px;
        }
        .saas-landing-about-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 80px;
        }
        .saas-landing-about-image {
          flex: 1;
        }
        .saas-landing-about-image img {
          width: 100%;
          height: auto;
          border-radius: 20px;
        }
        .saas-landing-about-content {
          flex: 1;
        }
        .saas-landing-about-content h2 {
          font-size: clamp(32px, 4vw, 44px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
          margin-bottom: 24px;
        }
        .saas-landing-about-content p {
          font-size: 16px;
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 40px;
        }

        /* Services Grid */
        .saas-landing-services {\n          padding: 40px 24px 80px;
          background: #fafcff;
        }
        .saas-landing-services-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .saas-landing-section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px;
        }
        .saas-landing-section-header h2 {
          font-size: clamp(32px, 4vw, 44px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
          margin-bottom: 20px;
        }
        .saas-landing-section-header p {
          font-size: 16px;
          color: #64748b;
          line-height: 1.7;
        }
        .saas-landing-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }
        .saas-landing-card {
          background: #ffffff;
          border: 1px solid #f1f5f9;
          border-radius: 16px;
          padding: 40px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 10px 40px rgba(0,0,0,0.02);
        }
        .saas-landing-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          border-color: rgba(106, 27, 154, 0.1);
        }
        .saas-landing-card-icon {
          width: 70px;
          height: 70px;
          border-radius: 16px;
          background: #faf5ff;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 24px;
          color: #6a1b9a;
        }
        .saas-landing-card-title {
          font-size: 18px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 12px;
          line-height: 1.3;
        }
        .saas-landing-card-desc {
          font-size: 14px;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 30px;
          flex-grow: 1;
        }
        .saas-landing-card-link {
          font-size: 14px;
          font-weight: 700;
          color: #ff3366;
          text-decoration: none;
          transition: all 0.2s ease;
          opacity: 0.8;
        }
        .saas-landing-card:hover .saas-landing-card-link {
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .saas-landing-hero-container, .saas-landing-about-container {
            flex-direction: column;
            text-align: center;
            gap: 40px;
          }
          .saas-landing-hero-content p {
            margin: 0 auto 40px;
          }
          .saas-landing-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .saas-landing-nav-links {
            display: none;
          }
        }
        /* Architecture Section - White Theme */
        .saas-arch-section {
          padding: 30px 24px;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }
        .saas-arch-glow-bg {
          position: absolute;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(59,130,246,0.06) 0%, rgba(255,255,255,0) 70%);
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 0;
          pointer-events: none;
        }
        .saas-arch-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }
        .saas-arch-header-center {
          text-align: center;
          margin-bottom: 25px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .saas-badge-glass {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          color: #16a34a;
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
        }
        .saas-badge-dot-cyan {
          width: 8px;
          height: 8px;
          background: #16a34a;
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(22, 163, 74, 0.4);
        }
        .saas-sec-title-dark {
          font-size: clamp(32px, 3.8vw, 44px);
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 16px;
          line-height: 1.2;
        }
        .saas-sec-desc-dark {
          font-size: 17px;
          color: #64748b;
          max-width: 620px;
          line-height: 1.7;
        }

        /* White Theme Tabs */
        .saas-arch-tabs-glass {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }
        .saas-tab-glass {
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          color: #475569;
          padding: 12px 24px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .saas-tab-glass:hover {
          background: #ffffff;
          color: #0f172a;
          border-color: #cbd5e1;
          transform: translateY(-2px);
        }
        .saas-tab-glass.active {
          background: #0f172a;
          border-color: #0f172a;
          color: #ffffff;
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.15);
        }

        /* White Theme Showcase Card - No Border */
        .saas-arch-glass-canvas {
          background: #ffffff;
          border: none;
          border-radius: 28px;
          display: flex;
          gap: 30px;
          padding: 28px 32px;
          align-items: center;
          box-shadow: 0 16px 45px rgba(15, 23, 42, 0.06);
        }
        .saas-arch-glass-canvas.saas-arch-reverse {
          flex-direction: row-reverse;
        }
        @media (max-width: 992px) {
          .saas-arch-glass-canvas,
          .saas-arch-glass-canvas.saas-arch-reverse {
            flex-direction: column;
          }
        }
        
        .saas-arch-glass-left {
          flex: 1;
        }
        .saas-glass-badge-cyan {
          color: #0284c7;
          background: #e0f2fe;
          border: none;
          font-weight: 700;
          font-size: 12px;
          padding: 4px 12px;
          border-radius: 100px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
          display: inline-block;
        }
        .saas-glass-title {
          font-size: 30px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 16px;
          line-height: 1.3;
        }
        .saas-glass-desc {
          font-size: 15.5px;
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 28px;
        }
        .saas-glass-action-row {
          display: flex;
          gap: 16px;
        }
        .saas-btn-cyan-glow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #0f172a;
          color: #ffffff;
          padding: 14px 28px;
          border-radius: 100px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.15);
        }
        .saas-btn-cyan-glow:hover {
          background: #1e293b;
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(15, 23, 42, 0.22);
        }

        /* Right Dashboard Panel (White Theme) - No Border */
        .saas-arch-glass-right {
          flex: 1.2;
          background: #f8fafc;
          border: none;
          border-radius: 20px;
          padding: 28px;
          width: 100%;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.03);
        }
        .saas-dash-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 16px;
          margin-bottom: 20px;
        }
        .saas-dash-title {
          font-size: 17px;
          color: #0f172a;
          font-weight: 700;
          margin: 0;
        }
        .saas-status-pill {
          background: #ecfdf5;
          border: none;
          color: #059669;
          padding: 5px 12px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse-green 2s infinite;
        }
        @keyframes pulse-green {
          0% { box-shadow: 0 0 0 0 rgba(16,185,129,0.7); }
          70% { box-shadow: 0 0 0 8px rgba(16,185,129,0); }
          100% { box-shadow: 0 0 0 0 rgba(16,185,129,0); }
        }

        .saas-dash-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 20px;
        }
        .saas-dash-metric-card {
          background: #ffffff;
          border: none;
          padding: 18px;
          border-radius: 14px;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.03);
        }
        .saas-metric-label {
          display: block;
          font-size: 11.5px;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 700;
          margin-bottom: 6px;
        }
        .saas-metric-value {
          display: block;
          font-size: 28px;
          font-weight: 800;
          color: #0f172a;
        }
        .saas-metric-trend {
          display: block;
          font-size: 12px;
          color: #059669;
          margin-top: 4px;
          font-weight: 600;
        }

        .saas-dash-log-card {
          background: #ffffff;
          border: none;
          padding: 20px;
          border-radius: 14px;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.03);
        }
        .saas-log-title {
          font-size: 13.5px;
          color: #0f172a;
          font-weight: 700;
          margin: 0 0 14px 0;
        }
        .saas-log-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .saas-log-item {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 10px;
        }
        .saas-log-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .saas-log-text {
          color: #334155;
          font-weight: 500;
        }
        .saas-log-time {
          color: #94a3b8;
          font-size: 12px;
        }
        /* ── FAQ STYLING ── */
        .saas-faq-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px 40px;
        }
        .saas-faq-accordion {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .saas-faq-item {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.02);
          transition: all 0.2s;
        }
        .saas-faq-item:hover {
          border-color: #cbd5e1;
        }
        .saas-faq-item[open] {
          border-color: #00bba7;
          box-shadow: 0 8px 24px rgba(0, 187, 167, 0.08);
        }
        .saas-faq-item summary {
          display: flex;
          align-items: center;
          padding: 24px;
          cursor: pointer;
          list-style: none;
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
        }
        .saas-faq-item summary::-webkit-details-marker {
          display: none;
        }
        .saas-faq-q {
          flex: 1;
          padding-right: 20px;
          line-height: 1.4;
        }
        .saas-faq-toggle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.3s;
        }
        .saas-faq-item[open] .saas-faq-toggle {
          transform: rotate(180deg);
          background: #e0f2fe;
        }
        .saas-faq-item[open] .saas-faq-toggle svg path {
          stroke: #0284c7;
        }
        .saas-faq-a {
          padding: 0 24px 24px 24px;
          font-size: 15.5px;
          color: #475569;
          line-height: 1.7;
        }

        /* ── RESPONSIVE GRID & MEDIA QUERIES (PC, TAB, MOBILE) ── */
        .saas-stack-split-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 50px;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .saas-stack-split-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .saas-landing-hero-container {
            flex-direction: column !important;
            text-align: center;
            gap: 36px !important;
          }
          .saas-landing-hero-content {
            max-width: 100% !important;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .saas-landing-hero-content p {
            margin: 0 auto 30px !important;
          }
          .saas-landing-hero-image {
            width: 100% !important;
            justify-content: center !important;
          }
          .saas-arch-glass-canvas,
          .saas-arch-glass-canvas.saas-arch-reverse {
            flex-direction: column !important;
            padding: 24px 20px !important;
          }
          .saas-arch-glass-left,
          .saas-arch-glass-right {
            width: 100% !important;
          }
        }

        @media (max-width: 768px) {
          .saas-page-root {
            overflow-x: hidden;
          }
          .saas-landing-hero {
            padding: 40px 16px !important;
          }
          .saas-landing-hero-content h1 {
            font-size: clamp(26px, 7vw, 36px) !important;
          }
          .saas-landing-hero-content p {
            font-size: 15px !important;
          }
          .saas-sec-title-dark {
            font-size: clamp(24px, 6vw, 32px) !important;
          }
          .saas-sec-desc-dark {
            font-size: 14.5px !important;
          }
          .saas-landing-btn-large {
            width: 100% !important;
            justify-content: center;
          }
          .saas-dash-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .saas-landing-grid {
            grid-template-columns: 1fr !important;
          }
          .saas-arch-tabs-glass {
            gap: 8px !important;
          }
          .saas-tab-glass {
            padding: 8px 16px !important;
            font-size: 12.5px !important;
          }
        }

        @media (max-width: 480px) {
          .saas-landing-hero {
            padding: 28px 12px !important;
          }
          .saas-glass-title {
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 16px;
          margin-bottom: 20px;
        }
        .saas-dash-title {
          font-size: 17px;
          color: #0f172a;
          font-weight: 700;
          margin: 0;
        }
        .saas-status-pill {
          background: #ecfdf5;
          border: none;
          color: #059669;
          padding: 5px 12px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse-green 2s infinite;
        }
        @keyframes pulse-green {
          0% { box-shadow: 0 0 0 0 rgba(16,185,129,0.7); }
          70% { box-shadow: 0 0 0 8px rgba(16,185,129,0); }
          100% { box-shadow: 0 0 0 0 rgba(16,185,129,0); }
        }

        .saas-dash-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 20px;
        }
        .saas-dash-metric-card {
          background: #ffffff;
          border: none;
          padding: 18px;
          border-radius: 14px;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.03);
        }
        .saas-metric-label {
          display: block;
          font-size: 11.5px;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 700;
          margin-bottom: 6px;
        }
        .saas-metric-value {
          display: block;
          font-size: 28px;
          font-weight: 800;
          color: #0f172a;
        }
        .saas-metric-trend {
          display: block;
          font-size: 12px;
          color: #059669;
          margin-top: 4px;
          font-weight: 600;
        }

        .saas-dash-log-card {
          background: #ffffff;
          border: none;
          padding: 20px;
          border-radius: 14px;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.03);
        }
        .saas-log-title {
          font-size: 13.5px;
          color: #0f172a;
          font-weight: 700;
          margin: 0 0 14px 0;
        }
        .saas-log-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .saas-log-item {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 10px;
        }
        .saas-log-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .saas-log-text {
          color: #334155;
          font-weight: 500;
        }
        .saas-log-time {
          color: #94a3b8;
          font-size: 12px;
        }

        /* ── RESPONSIVE GRID & MEDIA QUERIES (PC, TAB, MOBILE) ── */
        .saas-stack-split-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 50px;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .saas-layer-card-alt,
          .saas-layer-card-alt.saas-card-reverse {
            flex-direction: column !important;
            padding: 24px 20px !important;
            gap: 24px !important;
          }
          .saas-stack-split-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .saas-faq-layout {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .saas-faq-sidebar {
            position: relative !important;
            top: 0 !important;
          }
          .saas-landing-hero-container {
            flex-direction: column !important;
            text-align: center;
            gap: 36px !important;
          }
          .saas-landing-hero-content {
            max-width: 100% !important;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .saas-landing-hero-content h1 {
            font-size: clamp(34px, 5vw, 46px) !important;
            line-height: 1.2 !important;
          }
          .saas-landing-hero-content p {
            margin: 0 auto 30px !important;
          }
          .saas-landing-hero-image {
            width: 100% !important;
            justify-content: center !important;
          }
          .saas-arch-glass-canvas,
          .saas-arch-glass-canvas.saas-arch-reverse {
            flex-direction: column !important;
            padding: 24px 20px !important;
          }
          .saas-arch-glass-left,
          .saas-arch-glass-right {
            width: 100% !important;
          }
          .saas-custom-card {
            flex-direction: column !important;
          }
          .saas-custom-card-text {
            padding: 40px 24px !important;
            align-items: center !important;
            text-align: center !important;
          }
          .saas-custom-card-text button,
          .saas-custom-card-text div {
            align-self: center !important;
          }
          .saas-custom-card-img.right-img,
          .saas-custom-card-img.left-img {
            border: none !important;
            padding: 24px !important;
          }
          .saas-bento-bottom-grid,
          .saas-mockup-grid-3,
          .saas-mockup-grid-2,
          .saas-process-grid-2,
          .saas-arch-top-grid {
            grid-template-columns: 1fr !important;
          }
          .saas-landing-about-container-flex {
            flex-direction: column !important;
            text-align: center;
          }
          .saas-process-flex-col {
            flex-direction: column !important;
          }
          .saas-process-flex-col > div {
            width: 100% !important;
          }
        }

        @media (max-width: 768px) {
          .saas-page-root {
            overflow-x: hidden;
          }
          .saas-landing-hero {
            padding: 120px 16px 40px !important;
          }
          .saas-landing-hero-content h1 {
            font-size: clamp(26px, 7vw, 36px) !important;
          }
          .saas-landing-hero-content p {
            font-size: 15px !important;
          }
          .saas-sec-title-dark {
            font-size: clamp(24px, 6vw, 32px) !important;
          }
          .saas-sec-desc-dark {
            font-size: 14.5px !important;
          }
          .saas-landing-btn-large {
            width: 100% !important;
            justify-content: center;
          }
          .saas-hero-mockup-stats {
            grid-template-columns: 1fr !important;
          }
          .saas-dash-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .saas-landing-grid {
            grid-template-columns: 1fr !important;
          }
          .saas-arch-tabs-glass {
            gap: 8px !important;
          }
          .saas-tab-glass {
            padding: 8px 16px !important;
            font-size: 12.5px !important;
          }
        }

        @media (max-width: 480px) {
          .saas-landing-hero {
            padding: 100px 12px 30px !important;
          }
          .saas-glass-title {
            font-size: 22px !important;
          }
          .saas-metric-value {
            font-size: 22px !important;
          }
        }
      `}</style>
    </div>
  );
}
