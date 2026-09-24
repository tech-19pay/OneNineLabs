/**
 * Single source of truth for page FAQs.
 *
 * IMPORTANT (Google FAQ structured-data guideline): every Question/Answer in
 * FAQPage JSON-LD must be rendered visibly on the same page. Keeping the
 * arrays here — imported by BOTH the visible <details> accordion components
 * and the page-level JSON-LD — makes drift impossible.
 */

export const saasFaqs = [
  {
    q: "What is multi-tenant SaaS architecture and why is PostgreSQL RLS the best approach?",
    a: "Multi-tenant architecture allows a single application and database instance to securely serve thousands of distinct customers (tenants). We use PostgreSQL Row-Level Security (RLS), which enforces data isolation directly at the database engine layer. Every query is filtered by tenant_id, guaranteeing that no tenant can ever view or modify another tenant's data.",
  },
  {
    q: "How do you handle Stripe billing, seat changes, and usage-based tiers?",
    a: "We implement full-lifecycle Stripe integrations using webhooks: seat-based recurring tiers, metered usage counters, automated proration when seats are added mid-month, invoice PDF downloads, and dunning retry logic to recover failed card payments.",
  },
  {
    q: "Can you implement enterprise SAML SSO (Okta, Google, Azure AD)?",
    a: "Yes — we integrate enterprise Single Sign-On (SSO) via WorkOS or Clerk. Enterprise customers can authenticate using their existing identity providers (Okta, Azure Active Directory, Google Workspace), and we support SCIM for automated user directory provisioning.",
  },
  {
    q: "How fast can you build and launch a production-grade SaaS MVP?",
    a: "Using our battle-tested Next.js + Node.js SaaS starter foundation, our dedicated engineering pod ships a production-ready multi-tenant MVP in 6 to 8 weeks, complete with auth, database isolation, Stripe billing, and user dashboards.",
  },
  {
    q: "Is the SaaS platform architecture SOC 2 Type II audit ready?",
    a: "Yes — we bake in immutable cryptographic audit logging, role-based access controls (RBAC), database encryption at rest (KMS), and automated compliance evidence logs that integrate seamlessly with Vanta and Drata.",
  },
  {
    q: "Who owns the source code and database schemas upon handover?",
    a: "You receive 100% full, exclusive ownership of all codebases, database schemas, Figma design files, deployment pipelines, and Stripe accounts upon milestone completion with zero vendor lock-in.",
  },
];

export const securityFaqs = [
  {
    q: "What is included in a OneNineLabs penetration test?",
    a: "Black-box and white-box coverage of web apps, mobile, REST/GraphQL APIs and cloud infrastructure. We test the OWASP Top 10, authentication bypass, privilege escalation, business-logic flaws and supply-chain issues, then deliver a remediation report and a free re-test.",
  },
  {
    q: "How fast can you prepare us for SOC 2 Type II or ISO 27001?",
    a: "Most platforms are audit-ready in 6–8 weeks. We draft the policies, configure technical controls, integrate Vanta or Drata for evidence and stay with your team through the auditor evaluation.",
  },
  {
    q: "What is Zero-Trust and how does it protect our cloud?",
    a: "Never trust, always verify. We retire legacy VPNs for identity-aware ZTNA, least-privilege IAM with session expiry, mTLS microsegmentation and hardware-backed KMS encryption.",
  },
  {
    q: "Do you provide 24/7 monitoring and incident response?",
    a: "Yes. Our SIEM and SOC ingest CloudTrail, Kubernetes and API logs continuously. Automated detection plus a sub-15-minute triage and containment SLA.",
  },
  {
    q: "Which clouds and environments do you support?",
    a: "AWS, GCP, Azure, Cloudflare and on-prem Kubernetes, declared in Terraform / OpenTofu so every control is versioned.",
  },
  {
    q: "How do you prove compliance to enterprise buyers?",
    a: "Audit-ready SOC 2 / ISO evidence packs, cryptographic trails, executive summaries and pentest verification letters you can share with prospects.",
  },
];
