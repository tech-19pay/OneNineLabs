const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../components/SaasPageContent.js');
let content = fs.readFileSync(filePath, 'utf8');

const badChunk = `  return (
    <div className="saas-page-root">
            {/* ── 0. NAVBAR ── */}
      

      {/* ── 1. HERO SECTION ── */}
      <section className="saas-landing-hero">
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
  ];`;

if (content.includes(badChunk)) {
  content = content.replace(badChunk, '');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Successfully removed duplicated hero block!");
} else {
  console.log("badChunk not found by exact string, trying regex...");
  const firstReturnIdx = content.indexOf('return (\n    <div className="saas-page-root">');
  const secondReturnIdx = content.indexOf('return (\n    <div className="saas-page-root">', firstReturnIdx + 10);
  
  if (firstReturnIdx !== -1 && secondReturnIdx !== -1) {
    content = content.substring(0, firstReturnIdx) + content.substring(secondReturnIdx);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Successfully removed duplicate return block using indices!");
  }
}
