"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function SaasPageContent() {
  const [activeTab, setActiveTab] = useState("Role-based clarity");
  const [activeRoleHover, setActiveRoleHover] = useState(null);
  const [activeArchTab, setActiveArchTab] = useState("rls");
  const [copiedCode, setCopiedCode] = useState(false);

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
      file: "tenant_rls_policy.sql",
      lang: "SQL (PostgreSQL 16+)",
      code: `-- Enforce Row-Level Security (RLS) per Tenant
ALTER TABLE public.organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;

-- Tenant Isolation Policy for Documents Table
CREATE POLICY tenant_isolation_policy ON public.documents
  FOR ALL
  USING (tenant_id = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid)
  WITH CHECK (tenant_id = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);

-- Automated Trigger to Verify Current Active Tenant
CREATE OR REPLACE FUNCTION set_tenant_context(user_tenant_id uuid)
RETURNS void AS $$
BEGIN
  PERFORM set_config('app.current_tenant_id', user_tenant_id::text, false);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;`
    },
    billing: {
      title: "Stripe Recurring & Metered Billing",
      badge: "Automated Invoicing & Dunning",
      desc: "Full-lifecycle subscription management with Stripe webhooks. Supports seat-based tiers, metered usage-based billing, automated proration, and dunning retry logic.",
      file: "stripe_webhook_handler.ts",
      lang: "TypeScript / Node.js",
      code: `// Stripe Webhook Event Dispatcher for B2B Subscriptions
import Stripe from 'stripe';
import { db } from '@/lib/db';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function handleStripeWebhook(payload: string, signature: string) {
  const event = stripe.webhooks.constructEvent(payload, signature, process.env.STRIPE_WEBHOOK_SECRET!);

  switch (event.type) {
    case 'customer.subscription.updated':
    case 'customer.subscription.created': {
      const sub = event.data.object as Stripe.Subscription;
      await db.subscription.upsert({
        where: { stripeSubscriptionId: sub.id },
        update: {
          status: sub.status,
          currentPeriodEnd: new Date(sub.current_period_end * 1000),
          seatCount: sub.items.data[0]?.quantity || 1
        },
        create: {
          tenantId: sub.metadata.tenantId,
          stripeSubscriptionId: sub.id,
          planId: sub.items.data[0]?.price.id,
          status: sub.status,
          currentPeriodEnd: new Date(sub.current_period_end * 1000)
        }
      });
      break;
    }
  }
}`
    },
    sso: {
      title: "Enterprise SAML SSO & SCIM Directory",
      badge: "Okta, Google & Azure AD Ready",
      desc: "Turnkey enterprise single sign-on (SSO) integrated via WorkOS and Clerk. Supports SAML 2.0, OpenID Connect, and automated SCIM user provisioning and deprovisioning.",
      file: "saml_sso_middleware.ts",
      lang: "TypeScript / Next.js Edge",
      code: `// SAML SSO & Granular RBAC Role Verification Middleware
import { NextRequest, NextResponse } from 'next/server';
import { verifyJwtSession } from '@/lib/auth';

export async function ssoAuthMiddleware(req: NextRequest) {
  const session = await verifyJwtSession(req);
  if (!session || !session.tenantId) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Enforce enterprise RBAC permissions
  const userRole = session.role; // 'admin' | 'editor' | 'viewer'
  const isProtectedAdminRoute = req.nextUrl.pathname.startsWith('/admin');

  if (isProtectedAdminRoute && userRole !== 'admin') {
    return new NextResponse('Forbidden: Insufficient Tenant Permissions', { status: 403 });
  }

  // Inject active tenant ID into downstream headers
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-tenant-id', session.tenantId);
  return NextResponse.next({ request: { headers: requestHeaders } });
}`
    },
    audit: {
      title: "Audit Logging & Usage Telemetry",
      badge: "SOC 2 Type II Ready",
      desc: "Immutable cryptographic audit logs for every tenant transaction. Track user sessions, privilege escalations, billing alterations, and document exports with zero overhead.",
      file: "tenant_audit_logger.ts",
      lang: "TypeScript / Cryptographic Hash",
      code: `// Immutable Cryptographic Audit Log Generator
import crypto from 'crypto';
import { db } from '@/lib/db';

export async function logTenantAuditEvent(
  tenantId: string,
  actorId: string,
  action: 'SEAT_ADDED' | 'ROLE_CHANGED' | 'SSO_ENABLED' | 'DATA_EXPORTED',
  details: Record<string, any>
) {
  const timestamp = new Date().toISOString();
  const rawPayload = JSON.stringify({ tenantId, actorId, action, details, timestamp });
  const cryptographicHash = crypto.createHash('sha256').update(rawPayload).digest('hex');

  await db.auditLog.create({
    data: {
      tenantId,
      actorId,
      action,
      details,
      signatureHash: cryptographicHash,
      createdAt: new Date()
    }
  });
}`
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
      title: "Tenant Data Modeling & Architecture",
      desc: "We define PostgreSQL Row-Level Security (RLS) schemas, auth flows (SAML/OAuth), and subscription pricing models in Stripe.",
      tag: "Architecture Blueprint",
      icon: "📐"
    },
    {
      num: "02",
      title: "Rapid MVP Pod Build (6–8 Weeks)",
      desc: "Our senior SaaS pod builds your production MVP: Next.js 15 frontend, backend APIs, Stripe billing, and user management.",
      tag: "Production Sprints",
      icon: "⚡"
    },
    {
      num: "03",
      title: "Security Hardening & Penetration Testing",
      desc: "We conduct exhaustive multi-tenant penetration tests, eliminate cross-tenant leak vectors, and configure SOC 2 audit logging.",
      tag: "Zero-Leak Verification",
      icon: "🔒"
    },
    {
      num: "04",
      title: "Production Launch & Scale Retainer",
      desc: "We deploy to AWS/Vercel with CI/CD automation, configure 24/7 endpoint monitoring, and provide SLA-backed maintenance.",
      tag: "Launch & Operate",
      icon: "🚀"
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
      {/* ── 1. HERO SECTION WITH NODE GRAPH NETWORK ── */}
      <div className="saas-hero-wrapper">
        <section className="saas-hero">
          {/* Left Column: Interactive Role Graph Hub */}
          <div className="node-network-wrapper">
            <div className="network-ambient-glow" />

            {/* Central Diamond Logo Hub */}
            <div className="central-hub-container">
              <div className="central-hub-outer-ring" />
              <div className="central-hub" title="OneNineLabs Core Engine">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
            </div>

            {/* Floating Role Node 1: HR Manager */}
            <div
              className={`node-card node-pos-1 ${activeRoleHover === "hr" ? "node-active" : ""}`}
              onMouseEnter={() => setActiveRoleHover("hr")}
              onMouseLeave={() => setActiveRoleHover(null)}
            >
              <div className="node-avatar-circle" style={{ background: "linear-gradient(135deg, #10b981, #059669)" }}>
                HR
              </div>
              <div>
                <div className="node-title-text">HR &amp; People Lead</div>
                <div className="node-subtitle-text">Role-based policies</div>
              </div>
            </div>

            {/* Floating Role Node 2: Operations Lead */}
            <div
              className={`node-card node-pos-2 ${activeRoleHover === "ops" ? "node-active" : ""}`}
              onMouseEnter={() => setActiveRoleHover("ops")}
              onMouseLeave={() => setActiveRoleHover(null)}
            >
              <div className="node-avatar-circle" style={{ background: "linear-gradient(135deg, #0284c7, #0369a1)" }}>
                OP
              </div>
              <div>
                <div className="node-title-text">Operations Manager</div>
                <div className="node-subtitle-text">Multi-org structure</div>
              </div>
            </div>

            {/* Floating Role Node 3: Finance / CFO */}
            <div
              className={`node-card node-pos-3 ${activeRoleHover === "fin" ? "node-active" : ""}`}
              onMouseEnter={() => setActiveRoleHover("fin")}
              onMouseLeave={() => setActiveRoleHover(null)}
            >
              <div className="node-avatar-circle" style={{ background: "linear-gradient(135deg, #ca8a04, #a16207)" }}>
                FN
              </div>
              <div>
                <div className="node-title-text">Finance &amp; Billing</div>
                <div className="node-subtitle-text">Stripe MRR engine</div>
              </div>
            </div>

            {/* Floating Role Node 4: Executive Admin */}
            <div
              className={`node-card node-pos-4 ${activeRoleHover === "exec" ? "node-active" : ""}`}
              onMouseEnter={() => setActiveRoleHover("exec")}
              onMouseLeave={() => setActiveRoleHover(null)}
            >
              <div className="node-avatar-circle" style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}>
                EX
              </div>
              <div>
                <div className="node-title-text">Executive Admin</div>
                <div className="node-subtitle-text">Real-time audit log</div>
              </div>
            </div>

            {/* Floating Role Node 5: IT / Security Lead */}
            <div
              className={`node-card node-pos-5 ${activeRoleHover === "it" ? "node-active" : ""}`}
              onMouseEnter={() => setActiveRoleHover("it")}
              onMouseLeave={() => setActiveRoleHover(null)}
            >
              <div className="node-avatar-circle" style={{ background: "linear-gradient(135deg, #e11d48, #be123c)" }}>
                IT
              </div>
              <div>
                <div className="node-title-text">Security Architect</div>
                <div className="node-subtitle-text">SAML SSO &amp; RLS</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Heading & CTAs */}
          <div className="saas-hero-right">
            <div className="saas-badge-pill">
              <span className="saas-badge-dot" />
              MULTI-TENANT SAAS ENGINEERING
            </div>

            <h1 className="saas-hero-title">
              Engineering High-Scale <span className="saas-highlight-text">B2B SaaS Platforms</span>
            </h1>

            <p className="saas-hero-subtitle">
              We architect multi-tenant SaaS platforms on Next.js 15, PostgreSQL Row-Level Security, Stripe recurring billing, and enterprise SAML SSO.
            </p>

            <div className="saas-hero-actions">
              <Link href="/contact" className="saas-btn-primary">
                <span>Start SaaS Project</span>
                <span className="saas-btn-arrow">→</span>
              </Link>
              <a href="#architecture" className="saas-btn-ghost">
                Explore Architecture
              </a>
            </div>

            {/* Quick Hero Key Stats */}
            <div className="saas-hero-stats">
              <div className="saas-hstat-item">
                <span className="saas-hstat-num">100%</span>
                <span className="saas-hstat-lbl">Tenant Isolation (RLS)</span>
              </div>
              <div className="saas-hstat-div" />
              <div className="saas-hstat-item">
                <span className="saas-hstat-num" style={{ color: "#059669" }}>Stripe</span>
                <span className="saas-hstat-lbl">Billing Engine</span>
              </div>
              <div className="saas-hstat-div" />
              <div className="saas-hstat-item">
                <span className="saas-hstat-num" style={{ color: "#0284c7" }}>SAML SSO</span>
                <span className="saas-hstat-lbl">Okta &amp; Google Ready</span>
              </div>
              <div className="saas-hstat-div" />
              <div className="saas-hstat-item">
                <span className="saas-hstat-num" style={{ color: "#0f172a" }}>6–8 Wks</span>
                <span className="saas-hstat-lbl">Production MVP</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── 2. 4 CORE PILLARS SECTION ── */}
      <section className="saas-pillars-section">
        <div className="saas-pillars-container">
          <div className="saas-pillars-grid">
            {pillarCards.map((pillar) => (
              <div key={pillar.id} className="saas-pillar-card">
                <div className="saas-pillar-icon-box">{pillar.icon}</div>
                <h3 className="saas-pillar-title">{pillar.title}</h3>
                <p className="saas-pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. INTERACTIVE MULTI-TENANT ARCHITECTURE & CODE INSPECTOR ── */}
      <section className="saas-arch-section" id="architecture">
        <div className="saas-arch-container">
          <div className="saas-sec-header">
            <div className="saas-badge-pill" style={{ background: "#ecfdf5", color: "#059669", borderColor: "#a7f3d0" }}>
              <span className="saas-badge-dot" style={{ background: "#059669" }} />
              DATA ISOLATION &amp; BILLING
            </div>
            <h2 className="saas-sec-title">Enterprise Multi-Tenant SaaS Architecture</h2>
            <p className="saas-sec-desc">
              We design modular SaaS systems with zero cross-tenant data leaks, automated Stripe revenue pipelines, and enterprise SAML single sign-on.
            </p>
          </div>

          {/* Architecture Switcher Tabs */}
          <div className="saas-arch-tabs">
            <button
              type="button"
              onClick={() => setActiveArchTab("rls")}
              className={`saas-arch-tab-btn ${activeArchTab === "rls" ? "active" : ""}`}
            >
              <span>🔒 PostgreSQL RLS Isolation</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveArchTab("billing")}
              className={`saas-arch-tab-btn ${activeArchTab === "billing" ? "active" : ""}`}
            >
              <span>💳 Stripe Billing &amp; Webhooks</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveArchTab("sso")}
              className={`saas-arch-tab-btn ${activeArchTab === "sso" ? "active" : ""}`}
            >
              <span>🔑 SAML SSO &amp; RBAC</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveArchTab("audit")}
              className={`saas-arch-tab-btn ${activeArchTab === "audit" ? "active" : ""}`}
            >
              <span>📊 Audit Logs &amp; Telemetry</span>
            </button>
          </div>

          {/* Architecture Showcase Card */}
          <div className="saas-arch-canvas">
            <div className="saas-arch-left">
              <div className="saas-atag-row">
                <span className="saas-abadge">{currentArchTab.badge}</span>
              </div>

              <h3 className="saas-atitle">{currentArchTab.title}</h3>
              <p className="saas-adesc">{currentArchTab.desc}</p>

              <div className="saas-aaction-row">
                <Link href="/contact" className="saas-btn-primary">
                  <span>Build with {currentArchTab.title.split(" ")[0]}</span>
                  <span className="saas-btn-arrow">→</span>
                </Link>
                <Link href="/contact" className="saas-btn-ghost">
                  Request Architecture Call
                </Link>
              </div>
            </div>

            {/* Code Window Box */}
            <div className="saas-arch-right">
              <div className="saas-acode-top">
                <div className="saas-acode-dots">
                  <span style={{ background: "#ef4444" }} />
                  <span style={{ background: "#f59e0b" }} />
                  <span style={{ background: "#10b981" }} />
                </div>
                <span className="saas-acode-file">{currentArchTab.file}</span>
                <button type="button" onClick={handleCopyCode} className="saas-acopy-btn">
                  {copiedCode ? "✓ Copied" : "📋 Copy Code"}
                </button>
              </div>
              <pre className="saas-acode-pre">
                <code>{currentArchTab.code}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. SAAS SOLUTIONS BY BUSINESS MODEL (6 CARDS) ── */}
      <section className="saas-solutions-section">
        <div className="saas-solutions-container">
          <div className="saas-sec-header">
            <div className="saas-badge-pill" style={{ background: "#eff6ff", color: "#2563eb", borderColor: "#bfdbfe" }}>
              <span className="saas-badge-dot" style={{ background: "#2563eb" }} />
              SAAS DISCIPLINES
            </div>
            <h2 className="saas-sec-title">Tailored SaaS Platforms by Business Model</h2>
            <p className="saas-sec-desc">
              Whether building a high-velocity self-serve PLG application or a complex B2B enterprise platform with SAML SSO, we engineer for compounding growth.
            </p>
          </div>

          <div className="saas-solutions-grid">
            {saasSolutions.map((sol, i) => (
              <div key={i} className="saas-sol-card">
                <div className="saas-sol-top">
                  <div className="saas-sol-icon-box">{sol.icon}</div>
                  <span className="saas-sol-badge">{sol.badge}</span>
                </div>

                <h3 className="saas-sol-title">{sol.title}</h3>
                <p className="saas-sol-desc">{sol.desc}</p>

                <div className="saas-sol-bullets">
                  {sol.bullets.map((b, bi) => (
                    <div key={bi} className="saas-sol-bullet-item">
                      <span className="saas-sol-check">✓</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. LAYERED 6-TIER SAAS STACK ARCHITECTURE ── */}
      <section className="saas-layer-section">
        <div className="saas-layer-container">
          <div className="saas-sec-header">
            <div className="saas-badge-pill">
              <span className="saas-badge-dot" />
              LAYERED SAAS PIPELINE
            </div>
            <h2 className="saas-sec-title">How We Layer Your SaaS Stack</h2>
            <p className="saas-sec-desc">
              A high-performance pipeline from Edge SSR interface to PostgreSQL Row-Level Security, Stripe billing, and real-time telemetry.
            </p>
          </div>

          <div className="saas-layer-grid">
            {archLayers.map((layer, i) => (
              <div key={i} className="saas-layer-card">
                <div className="saas-layer-top">
                  <span className="saas-layer-num">{layer.num}</span>
                  <span className="saas-layer-icon">{layer.icon}</span>
                </div>
                <span className="saas-layer-tag">{layer.tag}</span>
                <h3 className="saas-layer-title">{layer.title}</h3>
                <p className="saas-layer-desc">{layer.desc}</p>
                <div className="saas-layer-indicator" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. PERFORMANCE & SCALABILITY BENCHMARK SHOWCASE ── */}
      <section className="saas-perf-section">
        <div className="saas-perf-container">
          <div className="saas-perf-grid">
            {/* Left: Heading + Gauge */}
            <div className="saas-perf-left">
              <div className="saas-badge-pill" style={{ background: "#ecfdf5", color: "#059669", borderColor: "#a7f3d0" }}>
                <span className="saas-badge-dot" style={{ background: "#059669" }} />
                PRODUCTION SLA
              </div>
              <h2 className="saas-sec-title" style={{ textAlign: "left", margin: "16px 0" }}>
                Engineered for 99.99% Multi-Tenant Uptime SLA
              </h2>
              <p className="saas-sec-desc" style={{ textAlign: "left", margin: "0 0 32px 0" }}>
                Our architecture guarantees sub-millisecond database query routing, sub-second cold starts, and zero cross-tenant interference under peak enterprise traffic.
              </p>

              <div className="saas-gauge-card">
                <svg width="84" height="84" viewBox="0 0 36 36" className="saas-gauge-svg">
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                  <circle
                    className="saas-gauge-circle"
                    cx="18"
                    cy="18"
                    r="15.915"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeDasharray="99.99 100"
                    strokeDashoffset="100"
                    strokeLinecap="round"
                    style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
                  />
                  <text x="18" y="20.5" fontFamily="monospace" fontSize="6.5" fontWeight="bold" textAnchor="middle" fill="#0f172a">
                    99.99%
                  </text>
                </svg>
                <div>
                  <div className="saas-gauge-title">Multi-Tenant Uptime SLA</div>
                  <div className="saas-gauge-sub">Production Performance Benchmark</div>
                </div>
              </div>
            </div>

            {/* Right: Metric Progress Rows */}
            <div className="saas-perf-right">
              <div className="saas-metric-row">
                <div className="saas-metric-header">
                  <span className="saas-metric-name">PostgreSQL RLS Query Isolation Latency</span>
                  <span className="saas-metric-val" style={{ color: "#059669" }}>&lt; 5ms</span>
                </div>
                <div className="saas-metric-bar-bg">
                  <div className="saas-metric-bar-fill fill-1" style={{ width: "98%", background: "linear-gradient(90deg, #059669, #10b981)" }} />
                </div>
              </div>

              <div className="saas-metric-row">
                <div className="saas-metric-header">
                  <span className="saas-metric-name">Next.js 15 Edge SSR Cold Start</span>
                  <span className="saas-metric-val" style={{ color: "#0f172a" }}>0.38s</span>
                </div>
                <div className="saas-metric-bar-bg">
                  <div className="saas-metric-bar-fill fill-2" style={{ width: "92%", background: "linear-gradient(90deg, #0f172a, #334155)" }} />
                </div>
              </div>

              <div className="saas-metric-row">
                <div className="saas-metric-header">
                  <span className="saas-metric-name">Stripe Webhook Event Sync Response</span>
                  <span className="saas-metric-val" style={{ color: "#2563eb" }}>12ms</span>
                </div>
                <div className="saas-metric-bar-bg">
                  <div className="saas-metric-bar-fill fill-3" style={{ width: "95%", background: "linear-gradient(90deg, #2563eb, #38bdf8)" }} />
                </div>
              </div>

              <div className="saas-metric-row">
                <div className="saas-metric-header">
                  <span className="saas-metric-name">Multi-Tenant Hosting Spend Reduction</span>
                  <span className="saas-metric-val" style={{ color: "#059669" }}>-35% Cloud Cost</span>
                </div>
                <div className="saas-metric-bar-bg">
                  <div className="saas-metric-bar-fill fill-4" style={{ width: "90%", background: "linear-gradient(90deg, #059669, #10b981)" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. 4-STAGE SAAS DELIVERY PROCESS ── */}
      <section className="saas-process-section">
        <div className="saas-process-container">
          <div className="saas-sec-header">
            <div className="saas-badge-pill">
              <span className="saas-badge-dot" />
              AGILE POD LIFECYCLE
            </div>
            <h2 className="saas-sec-title">4-Stage SaaS Delivery Process</h2>
            <p className="saas-sec-desc">
              From data modeling and Stripe billing integration to penetration testing and 6–8 week MVP production rollout.
            </p>
          </div>

          <div className="saas-process-grid">
            {deliverySteps.map((step, i) => (
              <div key={i} className="saas-process-card">
                <div className="saas-proc-num-row">
                  <span className="saas-proc-num">{step.num}</span>
                  <span className="saas-proc-icon">{step.icon}</span>
                </div>
                <span className="saas-proc-tag">{step.tag}</span>
                <h3 className="saas-proc-title">{step.title}</h3>
                <p className="saas-proc-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. SAAS ENGINEERING FAQS (WITH STICKY SIDEBAR) ── */}
      <section className="saas-faq-section">
        <div className="saas-faq-container">
          <div className="saas-sec-header">
            <div className="saas-badge-pill">
              <span className="saas-badge-dot" />
              SAAS ENGINEERING FAQS
            </div>
            <h2 className="saas-sec-title">Frequently Asked Questions</h2>
            <p className="saas-sec-desc">Everything you need to know about our multi-tenant SaaS architecture, billing integrations, and MVP timelines.</p>
          </div>

          <div className="saas-faq-layout">
            <div className="saas-faq-sidebar">
              <h3>Have a Custom SaaS Platform in Mind?</h3>
              <p>Speak directly with our principal SaaS architect to evaluate multi-tenant data modeling, Stripe billing structures, and launch timelines.</p>
              <Link href="/contact" className="saas-faq-contact-btn">
                Talk to a SaaS Architect →
              </Link>
              <div className="saas-faq-stat-box">
                <div className="saas-faq-stat-num">6–8 Wks</div>
                <div className="saas-faq-stat-lbl">Average Multi-Tenant MVP Delivery Time</div>
              </div>
            </div>

            <div className="saas-faq-accordion">
              {faqs.map((f, i) => (
                <details key={i} className="saas-faq-item">
                  <summary>
                    <span className="saas-faq-idx">{String(i + 1).padStart(2, "0")}</span>
                    <span className="saas-faq-q">{f.q}</span>
                    <span className="saas-faq-toggle">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9l6 6 6-6" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </summary>
                  <div className="saas-faq-a">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. HIGH-CONVERTING BOTTOM CTA BANNER ── */}
      <section className="saas-cta-banner-section">
        <div className="saas-cta-banner-card">
          <div className="saas-cta-glow-orb" />
          <div className="saas-cta-inner">
            <div className="saas-badge-pill" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", borderColor: "rgba(255,255,255,0.25)" }}>
              <span className="saas-badge-dot" style={{ background: "#34d399" }} />
              READY TO BUILD &amp; SCALE
            </div>
            <h2 className="saas-cta-title">Build &amp; Scale Your B2B SaaS Platform With OneNineLabs</h2>
            <p className="saas-cta-desc">
              Receive a comprehensive multi-tenant architecture proposal, Stripe billing blueprint, and 6–8 week MVP roadmap from our principal engineers within 48 hours.
            </p>
            <div className="saas-cta-actions">
              <Link href="/contact" className="saas-cta-btn-primary">
                Book Free Architecture Review →
              </Link>
              <Link href="/services" className="saas-cta-btn-ghost">
                Explore All Services
              </Link>
            </div>
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

        /* Pillars Section */
        .saas-pillars-section {
          padding: 60px 24px 40px;
          background: #ffffff;
        }
        .saas-pillars-container {
          max-width: 1240px;
          margin: 0 auto;
        }
        .saas-pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .saas-pillar-card {
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          transition: all 0.25s ease;
        }
        .saas-pillar-card:hover {
          transform: translateY(-4px);
          border-color: #cbd5e1;
          box-shadow: 0 14px 30px rgba(15, 23, 42, 0.05);
        }
        .saas-pillar-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 6px;
        }
        .saas-pillar-title {
          font-size: 17px;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
        }
        .saas-pillar-desc {
          font-size: 13px;
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
      `}</style>
    </div>
  );
}
