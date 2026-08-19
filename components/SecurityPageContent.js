"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function SecurityPageContent() {
  const [activeTab, setActiveTab] = useState("pentest");
  const [activeCodeTab, setActiveCodeTab] = useState("zero-trust");
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeFramework, setActiveFramework] = useState("all");

  const securityModules = {
    pentest: {
      tag: "OFFENSIVE SECURITY",
      title: "Penetration Testing & Vulnerability Assessment",
      desc: "Comprehensive black-box, grey-box, and white-box penetration testing covering OWASP Top 10, GraphQL/REST API security flaws, authentication bypasses, and business-logic exploits.",
      highlights: [
        "OWASP Top 10 & API Security Top 10 exhaustive testing",
        "Business-logic and privilege escalation exploit simulation",
        "Automated continuous vulnerability scanning (DAST / SAST)",
        "Zero-day and supply chain dependency vulnerability audits",
        "Comprehensive executive and developer-ready remediation reports",
        "Free re-test verification following engineering remediation"
      ],
      badge: "OWASP Top 10 Verified",
      vulnTarget: "0 Critical Vulns",
      auditTime: "48h Fast-Track",
      standard: "NIST SP 800-115"
    },
    soc2: {
      tag: "COMPLIANCE AUTOMATION",
      title: "SOC 2 Type II & ISO 27001 Audit Readiness",
      desc: "Turnkey compliance readiness roadmap for high-growth SaaS and fintech platforms. We draft security policies, implement technical controls, automate evidence collection, and integrate directly with Vanta and Drata.",
      highlights: [
        "Complete SOC 2 Type I & Type II audit preparation roadmap",
        "ISO/IEC 27001 Information Security Management System (ISMS)",
        "Vanta, Drata & Secureframe continuous evidence automation",
        "Comprehensive employee security policies and incident response runbooks",
        "Vendor risk assessment and third-party vendor management",
        "Guaranteed auditor introduction and audit accompaniment"
      ],
      badge: "100% Audit Pass Rate",
      vulnTarget: "SOC 2 Type II",
      auditTime: "6–8 Weeks Ready",
      standard: "AICPA Trust Principles"
    },
    zerotrust: {
      tag: "CLOUD INFRASTRUCTURE",
      title: "Zero-Trust Cloud & Kubernetes Architecture",
      desc: "Identity-first, least-privilege cloud infrastructure on AWS, GCP, and Cloudflare. We eliminate static VPNs, enforce mutual TLS (mTLS) microsegmentation, and encrypt all data in transit and at rest.",
      highlights: [
        "Cloudflare Access & AWS Verified Access (ZTNA) implementation",
        "Least-privilege IAM roles with automated session expiration",
        "Hardened Kubernetes (EKS/GKE) clusters with Cilium network policies",
        "Hardware-backed KMS encryption for PostgreSQL and object storage",
        "Automated Terraform Infrastructure-as-Code security guardrails",
        "Distributed DDoS protection with WAF L7 rate-limiting rules"
      ],
      badge: "Zero-Trust Verified",
      vulnTarget: "Strict Least-Privilege",
      auditTime: "Real-Time ZTNA",
      standard: "CISA Zero Trust Model"
    },
    siem: {
      tag: "24/7 DEFENSE & INCIDENT RESPONSE",
      title: "24/7 SIEM, Threat Detection & SOC Monitoring",
      desc: "Around-the-clock Security Operations Center (SOC) monitoring powered by centralized SIEM log aggregation, automated intrusion detection, behavioral anomaly alerts, and sub-15-minute incident response SLAs.",
      highlights: [
        "Centralized log ingestion across AWS CloudTrail, Kubernetes, and APIs",
        "Automated intrusion detection & brute-force prevention",
        "Real-time alerting via PagerDuty, Slack, and dedicated security bridge",
        "Sub-15 minute incident triage and containment SLA",
        "Automated secret scanning and credential leak alerts in GitHub",
        "Quarterly disaster recovery failover and incident tabletop exercises"
      ],
      badge: "24/7 SOC Shield",
      vulnTarget: "< 15min SLA",
      auditTime: "Real-Time Ingestion",
      standard: "MITRE ATT&CK Framework"
    }
  };

  const currentModule = securityModules[activeTab];

  const codeSnippets = {
    "zero-trust": {
      title: "ZeroTrustPolicy.tf (Terraform AWS ZTNA)",
      lang: "HCL / Terraform 1.8+",
      badge: "Least-Privilege Enforced",
      sla: "Zero Static Keys",
      code: `# OneNineLabs Zero-Trust IAM & KMS Architecture
resource "aws_kms_key" "enterprise_vault_key" {
  description             = "KMS CMK for multi-tenant database & secrets"
  deletion_window_in_days = 30
  enable_key_rotation     = true

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "EnforceIdentityFirstAccess"
        Effect    = "Allow"
        Principal = { AWS = "arn:aws:iam::\${var.account_id}:root" }
        Action    = "kms:*"
        Resource  = "*"
      }
    ]
  })
}

resource "aws_security_group" "private_k8s_sg" {
  name        = "onenine-zerotrust-node-sg"
  description = "Deny all inbound ingress by default; strictly allow verified mTLS"
  vpc_id      = var.vpc_id

  egress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}`
    },
    "rate-limiter": {
      title: "DistributedRateLimiter.ts (DDoS Guard)",
      lang: "TypeScript / Redis Upstash",
      badge: "Sub-2ms Redis Latency",
      sla: "L7 DDoS Protected",
      code: `// Distributed Sliding-Window Rate Limiter Middleware
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export async function rateLimitGuard(req: Request, clientIp: string, limit = 100, windowSec = 60) {
  const currentWindow = Math.floor(Date.now() / 1000 / windowSec);
  const key = \`rate_limit:\${clientIp}:\${currentWindow}\`;

  const requestCount = await redis.incr(key);
  if (requestCount === 1) {
    await redis.expire(key, windowSec * 2);
  }

  if (requestCount > limit) {
    return new Response(JSON.stringify({ 
      error: "Too Many Requests", 
      retryAfterSec: windowSec 
    }), { 
      status: 429, 
      headers: { "Retry-After": String(windowSec) } 
    });
  }

  return null; // Request permitted
}`
    },
    "audit-logger": {
      title: "Soc2AuditLogger.ts (Immutable Trail)",
      lang: "TypeScript / Cryptographic Hash",
      badge: "SOC 2 Type II Compliant",
      sla: "100% Audit Readiness",
      code: `// Cryptographically Chained SOC 2 Audit Logger
import crypto from 'crypto';

interface AuditEvent {
  tenantId: string;
  actorId: string;
  action: 'AUTH_SUCCESS' | 'DATA_READ' | 'PRIVILEGE_ESCALATION' | 'EXPORT';
  resourceId: string;
  ipAddress: string;
  timestamp: string;
  previousHash: string;
}

export function generateAuditEvent(
  tenantId: string, 
  actorId: string, 
  action: AuditEvent['action'], 
  resourceId: string, 
  ipAddress: string, 
  prevHash: string
): AuditEvent & { hash: string } {
  const eventData: AuditEvent = {
    tenantId,
    actorId,
    action,
    resourceId,
    ipAddress,
    timestamp: new Date().toISOString(),
    previousHash: prevHash
  };

  const hash = crypto
    .createHash('sha256')
    .update(JSON.stringify(eventData))
    .digest('hex');

  return { ...eventData, hash };
}`
    },
    "sanitizer": {
      title: "InputSanitizerGuard.ts (OWASP Shield)",
      lang: "TypeScript / Zod Strict Schema",
      badge: "XSS & SQLi Immune",
      sla: "Zero Injection SLA",
      code: `// Strict Schema Validation & Sanitization Middleware
import { z } from 'zod';

export const UserPayloadSchema = z.object({
  email: z.string().email().max(255).toLowerCase().trim(),
  organizationName: z.string().min(2).max(100).regex(/^[a-zA-Z0-9\\s\\-_]+$/),
  seatAllocation: z.number().int().min(1).max(10000),
  role: z.enum(['admin', 'billing_manager', 'auditor', 'member'])
}).strict();

export function validateIncomingPayload(payload: unknown) {
  const result = UserPayloadSchema.safeParse(payload);
  if (!result.success) {
    throw new Error(\`Security Payload Violation: \${result.error.message}\`);
  }
  return result.data;
}`
    }
  };

  const activeSnippet = codeSnippets[activeCodeTab];

  const handleCopyCode = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(activeSnippet.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const capabilities = [
    {
      title: "Full-Stack Penetration Testing",
      desc: "Black-box and white-box penetration testing covering the OWASP Top 10, GraphQL/REST API security flaws, business logic bugs, and privilege escalation.",
      badge: "OWASP Top 10",
      icon: "🛡️",
      bgGradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      lightBg: "#f8fafc",
      borderCol: "#cbd5e1",
      highlights: ["API security vulnerability analysis", "Business logic & privilege escalation exploits", "Detailed developer remediation checklists"]
    },
    {
      title: "SOC 2 Type II, ISO 27001 & HIPAA",
      desc: "End-to-end audit readiness roadmap, security policy drafting, technical controls implementation, and continuous automated evidence sync with Vanta & Drata.",
      badge: "100% Pass Rate",
      icon: "📋",
      bgGradient: "linear-gradient(135deg, #2563eb 0%, #38bdf8 100%)",
      lightBg: "#eff6ff",
      borderCol: "#bfdbfe",
      highlights: ["Vanta & Drata automated sync", "Information Security Management System (ISMS)", "Auditor accompaniment until certificate issuance"]
    },
    {
      title: "Zero-Trust Cloud & Network Access",
      desc: "Identity-first access controls on AWS, GCP, and Cloudflare. Least-privilege IAM privilege minimization, mTLS encryption, and VPN elimination.",
      badge: "Zero-Trust ZTNA",
      icon: "🔒",
      bgGradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
      lightBg: "#ecfdf5",
      borderCol: "#a7f3d0",
      highlights: ["Cloudflare Access & AWS Verified Access", "Hardware KMS CMK encryption at rest", "Microsegmentation with Kubernetes network policies"]
    },
    {
      title: "24/7 SIEM & Real-Time Threat Defense",
      desc: "Real-time log aggregation across cloud environments, automated intrusion detection, vulnerability scanning, and sub-15min incident containment.",
      badge: "24/7 SIEM Shield",
      icon: "📡",
      bgGradient: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
      lightBg: "#faf5ff",
      borderCol: "#e9d5ff",
      highlights: ["Automated anomaly & brute force detection", "Sub-15 minute triage & containment SLA", "Continuous container & dependency CVE scanning"]
    },
    {
      title: "DevSecOps & Infrastructure as Code",
      desc: "Automated security guardrails built into GitHub Actions CI/CD pipelines: secret detection, SAST/DAST static analysis, and Terraform security scanning.",
      badge: "Automated CI/CD",
      icon: "⚙️",
      bgGradient: "linear-gradient(135deg, #d97706 0%, #fbbf24 100%)",
      lightBg: "#fffbeb",
      borderCol: "#fde68a",
      highlights: ["Trivy & Snyk automated container scanning", "Secret scanning & commit pre-flight hooks", "Terraform tfsec & Checkov policy enforcement"]
    },
    {
      title: "Disaster Recovery & High Availability",
      desc: "Multi-region failover architecture, automated database point-in-time recovery (PITR), encrypted cold backups, and tabletop disaster drills.",
      badge: "99.99% Uptime SLA",
      icon: "🌐",
      bgGradient: "linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)",
      lightBg: "#fff1f2",
      borderCol: "#fecdd3",
      highlights: ["Multi-region active-passive failover", "Point-in-time recovery with < 1min RPO", "Automated quarterly recovery simulations"]
    }
  ];

  const complianceStandards = [
    {
      name: "SOC 2 Type II",
      category: "SaaS & Cloud",
      badge: "Security & Confidentiality",
      scope: "AICPA Trust Services Criteria",
      timeline: "6–8 Weeks Readiness",
      tools: "Vanta, Drata, AWS Audit Manager",
      icon: "🛡️",
      color: "#2563eb"
    },
    {
      name: "ISO/IEC 27001:2022",
      category: "Global Standard",
      badge: "Information Security ISMS",
      scope: "Annex A Controls (93 Controls)",
      timeline: "8–12 Weeks Readiness",
      tools: "Secureframe, Jira, Confluence ISMS",
      icon: "🌐",
      color: "#059669"
    },
    {
      name: "HIPAA Security Rule",
      category: "Healthcare & MedTech",
      badge: "PHI Data Protection",
      scope: "Administrative, Physical & Tech Safeguards",
      timeline: "4–6 Weeks Readiness",
      tools: "AWS KMS, WebRTC e2ee, BAA Contracts",
      icon: "🏥",
      color: "#7c3aed"
    },
    {
      name: "GDPR & CCPA",
      category: "Privacy & Data Rights",
      badge: "User Data Governance",
      scope: "Consent, Right to be Forgotten, DPA",
      timeline: "3–4 Weeks Readiness",
      tools: "Cookiebot, Segment Privacy, PostgreSQL RLS",
      icon: "🔒",
      color: "#d97706"
    },
    {
      name: "PCI-DSS v4.0",
      category: "Fintech & Payments",
      badge: "Cardholder Data Security",
      scope: "12 Principal Security Requirements",
      timeline: "6–8 Weeks Readiness",
      tools: "Stripe Elements, Tokenization, Cloudflare WAF",
      icon: "💳",
      color: "#e11d48"
    },
    {
      name: "NIST CSF 2.0",
      category: "Enterprise Security",
      badge: "Cybersecurity Framework",
      scope: "Govern, Identify, Protect, Detect, Respond",
      timeline: "Continuous Alignment",
      tools: "Wazuh SIEM, Datadog Security, PagerDuty",
      icon: "⚡",
      color: "#0284c7"
    }
  ];

  const deliverySteps = [
    {
      num: "01",
      title: "Threat Modeling & Vulnerability Audit",
      desc: "We map your complete attack surface across cloud infrastructure, APIs, and dependencies, identifying security gaps and drafting a prioritized threat matrix.",
      tag: "Discovery & Mapping",
      icon: "🔍"
    },
    {
      num: "02",
      title: "Offensive Penetration Testing",
      desc: "Our ethical hackers simulate real-world attacks: OWASP Top 10, SQLi, XSS, SSRF, JWT signature forgery, and business-logic privilege escalations.",
      tag: "Exploit Simulation",
      icon: "⚔️"
    },
    {
      num: "03",
      title: "Zero-Trust Cloud & Code Hardening",
      desc: "We write Terraform IaC to enforce least-privilege IAM, configure WAF L7 rate limiters, patch application code vulnerabilities, and implement mTLS.",
      tag: "Remediation & Guardrails",
      icon: "🔒"
    },
    {
      num: "04",
      title: "Compliance Verification & 24/7 Monitoring",
      desc: "We connect automated evidence sync (Vanta/Drata), run full re-test verification, issue clean security audit certificates, and activate 24/7 SIEM monitoring.",
      tag: "Certified & Shielded",
      icon: "🛡️"
    }
  ];

  const faqs = [
    {
      q: "What is included in a OneNineLabs penetration test?",
      a: "Our penetration tests include exhaustive black-box and white-box assessments covering web applications, mobile apps, REST/GraphQL APIs, and cloud infrastructure. We test for the OWASP Top 10, authentication bypasses, privilege escalation, business logic flaws, and supply chain vulnerabilities, providing a detailed remediation report and a free re-test."
    },
    {
      q: "How fast can you prepare our platform for a SOC 2 Type II or ISO 27001 audit?",
      a: "We typically achieve full audit-readiness within 6 to 8 weeks. We draft all required security policies, configure technical controls on AWS/GCP, integrate automated evidence collection with Vanta or Drata, and accompany your team throughout the auditor evaluation until certificate issuance."
    },
    {
      q: "What is Zero-Trust architecture and how does it protect our cloud systems?",
      a: "Zero-Trust operates on the principle of 'never trust, always verify'. We eliminate vulnerable legacy VPNs and replace them with identity-aware Zero Trust Network Access (ZTNA), least-privilege IAM roles with session expiration, cryptographic mutual TLS (mTLS) microsegmentation, and hardware-backed KMS encryption."
    },
    {
      q: "Do you provide around-the-clock 24/7 monitoring and incident response?",
      a: "Yes — our 24/7 SIEM and Security Operations Center (SOC) continuously ingests logs from CloudTrail, Kubernetes clusters, and APIs. We provide real-time automated intrusion detection and commit to a sub-15 minute incident triage and containment SLA."
    },
    {
      q: "Which cloud providers and infrastructure environments do you support?",
      a: "We specialize in securing Amazon Web Services (AWS), Google Cloud Platform (GCP), Microsoft Azure, Cloudflare, and on-premise Kubernetes clusters using automated Terraform and OpenTofu Infrastructure as Code."
    },
    {
      q: "How do you prove compliance to our enterprise enterprise customers and auditors?",
      a: "We generate audit-ready SOC 2 / ISO 27001 evidence packages, cryptographic audit trails, executive security summaries, and official penetration test verification letters that you can share with enterprise prospects to accelerate sales deals."
    }
  ];

  return (
    <div className="sec-page-root">
      {/* ── 1. HERO SECTION: ZERO-TRUST THREAT DEFENSE HUD ── */}
      <section className="sec-hero-section">
        <div className="sec-hero-glow-1" />
        <div className="sec-hero-glow-2" />

        <div className="sec-hero-container">
          {/* Left Column: Heading & CTAs */}
          <div className="sec-hero-left">
            <div className="sec-badge-pill">
              <span className="sec-badge-dot" />
              SOC 2 TYPE II READY &amp; ZERO-TRUST CYBER DEFENSE
            </div>

            <h1 className="sec-hero-title">
              Enterprise Cyber Security &amp; <span className="sec-highlight-text">Zero-Trust Cloud</span>
            </h1>

            <p className="sec-hero-subtitle">
              We protect high-growth digital platforms with penetration testing, automated SOC 2 compliance readiness, zero-trust cloud architecture, and 24/7 SIEM threat defense.
            </p>

            <div className="sec-hero-actions">
              <Link href="/contact" className="sec-btn-primary">
                <span>Book Security Audit</span>
                <span className="sec-btn-arrow">→</span>
              </Link>
              <a href="#modules" className="sec-btn-ghost">
                Explore Defense Modules
              </a>
            </div>

            {/* Quick Hero Key Stats */}
            <div className="sec-hero-stats">
              <div className="sec-hstat-item">
                <span className="sec-hstat-num">0</span>
                <span className="sec-hstat-lbl">Data Breaches</span>
              </div>
              <div className="sec-hstat-div" />
              <div className="sec-hstat-item">
                <span className="sec-hstat-num" style={{ color: "#38bdf8" }}>100%</span>
                <span className="sec-hstat-lbl">SOC 2 Pass Rate</span>
              </div>
              <div className="sec-hstat-div" />
              <div className="sec-hstat-item">
                <span className="sec-hstat-num" style={{ color: "#4ade80" }}>24/7</span>
                <span className="sec-hstat-lbl">Active SIEM Shield</span>
              </div>
              <div className="sec-hstat-div" />
              <div className="sec-hstat-item">
                <span className="sec-hstat-num" style={{ color: "#facc15" }}>&lt; 15min</span>
                <span className="sec-hstat-lbl">Incident SLA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Active Threat Matrix HUD */}
          <div className="sec-hero-right">
            <div className="sec-hud-card">
              <div className="sec-hud-header">
                <div className="sec-hud-title-wrap">
                  <span className="sec-hud-radar-dot" />
                  <span className="sec-hud-title">SOC THREAT DEFENSE MATRIX</span>
                </div>
                <span className="sec-hud-status-badge">ZERO TRUST ACTIVE 🛡️</span>
              </div>

              {/* HUD 2x2 Metric Grid */}
              <div className="sec-hud-grid">
                <div className="sec-hud-stat-box">
                  <span className="sec-hud-k">OWASP Vulnerabilities</span>
                  <span className="sec-hud-v" style={{ color: "#4ade80" }}>0 Found (Clean)</span>
                  <div className="sec-hud-bar"><div style={{ width: "100%", background: "#4ade80" }} /></div>
                </div>

                <div className="sec-hud-stat-box">
                  <span className="sec-hud-k">DDoS L7 Shield</span>
                  <span className="sec-hud-v" style={{ color: "#38bdf8" }}>Active (Cloudflare WAF)</span>
                  <div className="sec-hud-bar"><div style={{ width: "95%", background: "#38bdf8" }} /></div>
                </div>

                <div className="sec-hud-stat-box">
                  <span className="sec-hud-k">Data Encryption</span>
                  <span className="sec-hud-v" style={{ color: "#facc15" }}>AES-256-GCM / KMS</span>
                  <div className="sec-hud-bar"><div style={{ width: "100%", background: "#facc15" }} /></div>
                </div>

                <div className="sec-hud-stat-box">
                  <span className="sec-hud-k">SIEM Log Ingestion</span>
                  <span className="sec-hud-v" style={{ color: "#a855f7" }}>14,200 events/sec</span>
                  <div className="sec-hud-bar"><div style={{ width: "88%", background: "#a855f7" }} /></div>
                </div>
              </div>

              {/* Compliance Badges Row */}
              <div className="sec-hud-compliance-box">
                <span className="sec-hud-comp-label">Audited Compliance Status:</span>
                <div className="sec-hud-comp-tags">
                  <span className="sec-comp-tag blue">SOC 2 Type II ✓</span>
                  <span className="sec-comp-tag green">ISO 27001 ✓</span>
                  <span className="sec-comp-tag purple">HIPAA Ready ✓</span>
                  <span className="sec-comp-tag orange">GDPR ✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. DEFENSE MODULES & PENETRATION TESTING SHOWCASE ── */}
      <section className="sec-modules-section" id="modules">
        <div className="sec-modules-container">
          <div className="sec-sec-header">
            <div className="sec-badge-pill" style={{ background: "#f0fdf4", color: "#16a34a", borderColor: "#bbf7d0" }}>
              <span className="sec-badge-dot" style={{ background: "#16a34a" }} />
              DEFENSE MODULES
            </div>
            <h2 className="sec-sec-title">Enterprise Cybersecurity Disciplines</h2>
            <p className="sec-sec-desc">
              From offensive penetration tests and exploit simulations to turnkey SOC 2 readiness and 24/7 SIEM response pods.
            </p>
          </div>

          {/* Module Switcher Tabs */}
          <div className="sec-module-tabs">
            <button
              type="button"
              onClick={() => setActiveTab("pentest")}
              className={`sec-module-tab-btn ${activeTab === "pentest" ? "active" : ""}`}
            >
              <span>⚔️ Penetration Testing</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("soc2")}
              className={`sec-module-tab-btn ${activeTab === "soc2" ? "active" : ""}`}
            >
              <span>📋 SOC 2 &amp; ISO 27001</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("zerotrust")}
              className={`sec-module-tab-btn ${activeTab === "zerotrust" ? "active" : ""}`}
            >
              <span>🔒 Zero-Trust Cloud</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("siem")}
              className={`sec-module-tab-btn ${activeTab === "siem" ? "active" : ""}`}
            >
              <span>📡 24/7 SIEM &amp; SOC</span>
            </button>
          </div>

          {/* Module Showcase Canvas */}
          <div className="sec-module-canvas">
            <div className="sec-module-left">
              <div className="sec-mtag-row">
                <span className="sec-mtag">{currentModule.tag}</span>
                <span className="sec-mbadge">{currentModule.badge}</span>
              </div>

              <h3 className="sec-mtitle">{currentModule.title}</h3>
              <p className="sec-mdesc">{currentModule.desc}</p>

              <div className="sec-mhighlights-list">
                {currentModule.highlights.map((h, i) => (
                  <div key={i} className="sec-mhighlight-item">
                    <span className="sec-mcheck">✓</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="sec-mcta-row">
                <Link href="/contact" className="sec-btn-primary">
                  <span>Deploy {currentModule.title.split(" ")[0]} Defense</span>
                  <span className="sec-btn-arrow">→</span>
                </Link>
                <Link href="/contact" className="sec-btn-ghost">
                  Schedule Scoping Call
                </Link>
              </div>
            </div>

            {/* Right Interactive Telemetry Box */}
            <div className="sec-module-right">
              <div className="sec-telemetry-card">
                <div className="sec-telemetry-header">
                  <span className="sec-telemetry-title">Security Governance Target</span>
                  <span className="sec-telemetry-live-dot" />
                </div>

                <div className="sec-telemetry-stat-row">
                  <div className="sec-tstat-box">
                    <span className="sec-tstat-k">Target Benchmark</span>
                    <span className="sec-tstat-v" style={{ color: "#38bdf8" }}>{currentModule.vulnTarget}</span>
                  </div>
                  <div className="sec-tstat-box">
                    <span className="sec-tstat-k">Delivery Timeline</span>
                    <span className="sec-tstat-v" style={{ color: "#4ade80" }}>{currentModule.auditTime}</span>
                  </div>
                </div>

                <div className="sec-telemetry-standard-box">
                  <span className="sec-tstandard-lbl">Security Framework Standard:</span>
                  <span className="sec-tstandard-val">{currentModule.standard}</span>
                </div>

                <div className="sec-telemetry-terminal">
                  <div className="sec-term-line text-green">$ onenine-security audit --deep-scan</div>
                  <div className="sec-term-line">✓ Static code analysis (SAST) passed: 0 CVEs</div>
                  <div className="sec-term-line">✓ Secret scanning: 0 exposed credentials</div>
                  <div className="sec-term-line">✓ ZTNA Mutual TLS (mTLS) verified across pods</div>
                  <div className="sec-term-line text-cyan">Audit Certificate Issued • Ready for Production</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. INTERACTIVE CODE & TERRAFORM POLICY INSPECTOR ── */}
      <section className="sec-code-section">
        <div className="sec-code-container">
          <div className="sec-sec-header">
            <div className="sec-badge-pill" style={{ background: "#e0f2fe", color: "#0284c7", borderColor: "#bae6fd" }}>
              <span className="sec-badge-dot" style={{ background: "#0284c7" }} />
              INFRASTRUCTURE AS CODE GUARDRAILS
            </div>
            <h2 className="sec-sec-title">Hardened Security Policies &amp; Middleware</h2>
            <p className="sec-sec-desc">
              We encode automated security controls directly into Terraform IaC, rate-limiting reverse proxies, and immutable audit logs.
            </p>
          </div>

          <div className="sec-code-window">
            <div className="sec-code-top-bar">
              <div className="sec-code-tabs">
                <button
                  type="button"
                  onClick={() => setActiveCodeTab("zero-trust")}
                  className={`sec-code-tab-btn ${activeCodeTab === "zero-trust" ? "active" : ""}`}
                >
                  <span>🔒 ZeroTrustPolicy.tf</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCodeTab("rate-limiter")}
                  className={`sec-code-tab-btn ${activeCodeTab === "rate-limiter" ? "active" : ""}`}
                >
                  <span>⚡ DistributedRateLimiter.ts</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCodeTab("audit-logger")}
                  className={`sec-code-tab-btn ${activeCodeTab === "audit-logger" ? "active" : ""}`}
                >
                  <span>📜 Soc2AuditLogger.ts</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCodeTab("sanitizer")}
                  className={`sec-code-tab-btn ${activeCodeTab === "sanitizer" ? "active" : ""}`}
                >
                  <span>🛡️ InputSanitizerGuard.ts</span>
                </button>
              </div>

              <div className="sec-code-actions">
                <span className="sec-code-badge-sla">✓ {activeSnippet.badge}</span>
                <button type="button" onClick={handleCopyCode} className="sec-copy-btn">
                  {copiedCode ? "✓ Copied" : "📋 Copy Code"}
                </button>
              </div>
            </div>

            <div className="sec-code-body">
              <div className="sec-code-meta">
                <span className="sec-code-filename">{activeSnippet.title}</span>
                <span className="sec-code-lang">{activeSnippet.lang}</span>
              </div>
              <pre className="sec-code-pre">
                <code>{activeSnippet.code}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. 6-PILLAR CAPABILITIES BENTO GRID ── */}
      <section className="sec-caps-section">
        <div className="sec-caps-container">
          <div className="sec-sec-header">
            <div className="sec-badge-pill">
              <span className="sec-badge-dot" />
              FULL-SPECTRUM CAPABILITIES
            </div>
            <h2 className="sec-sec-title">Enterprise Cyber Security &amp; DevOps Pillars</h2>
            <p className="sec-sec-desc">
              Six foundational pillars engineered to protect your revenue, safeguard customer data, and satisfy enterprise auditor requirements.
            </p>
          </div>

          <div className="sec-caps-grid">
            {capabilities.map((cap, i) => (
              <div key={i} className="sec-cap-card" style={{ borderColor: cap.borderCol }}>
                <div className="sec-cap-header">
                  <div className="sec-cap-icon-box" style={{ background: cap.bgGradient }}>
                    <span>{cap.icon}</span>
                  </div>
                  <span className="sec-cap-badge" style={{ background: cap.lightBg, borderColor: cap.borderCol }}>
                    {cap.badge}
                  </span>
                </div>

                <h3 className="sec-cap-title">{cap.title}</h3>
                <p className="sec-cap-desc">{cap.desc}</p>

                <div className="sec-cap-bullets">
                  {cap.highlights.map((h, hi) => (
                    <div key={hi} className="sec-cap-bullet-item">
                      <span className="sec-cap-dot" style={{ background: "#2563eb" }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. COMPLIANCE & REGULATORY STANDARDS MATRIX ── */}
      <section className="sec-compliance-section">
        <div className="sec-compliance-container">
          <div className="sec-sec-header">
            <div className="sec-badge-pill" style={{ background: "#faf5ff", color: "#7c3aed", borderColor: "#e9d5ff" }}>
              <span className="sec-badge-dot" style={{ background: "#7c3aed" }} />
              COMPLIANCE STANDARDS
            </div>
            <h2 className="sec-sec-title">Regulatory Frameworks &amp; Audit Matrices</h2>
            <p className="sec-sec-desc">
              We implement technical controls, evidence automation, and audit-ready policies compliant with global standards.
            </p>
          </div>

          <div className="sec-standards-grid">
            {complianceStandards.map((std, i) => (
              <div key={i} className="sec-std-card">
                <div className="sec-std-top">
                  <div className="sec-std-icon" style={{ borderColor: std.color }}>
                    <span>{std.icon}</span>
                  </div>
                  <div>
                    <h4 className="sec-std-name">{std.name}</h4>
                    <span className="sec-std-badge" style={{ color: std.color }}>{std.badge}</span>
                  </div>
                </div>

                <div className="sec-std-metrics">
                  <div className="sec-std-row">
                    <span className="sec-std-k">Scope Criteria:</span>
                    <span className="sec-std-v">{std.scope}</span>
                  </div>
                  <div className="sec-std-row">
                    <span className="sec-std-k">Audit Timeline:</span>
                    <span className="sec-std-v" style={{ color: "#059669" }}>{std.timeline}</span>
                  </div>
                  <div className="sec-std-row">
                    <span className="sec-std-k">Automation Stack:</span>
                    <span className="sec-std-v">{std.tools}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. 4-STAGE AUDIT & HARDENING LIFECYCLE ── */}
      <section className="sec-process-section">
        <div className="sec-process-container">
          <div className="sec-sec-header">
            <div className="sec-badge-pill">
              <span className="sec-badge-dot" />
              SECURITY LIFECYCLE
            </div>
            <h2 className="sec-sec-title">4-Stage Security Audit &amp; Hardening Pipeline</h2>
            <p className="sec-sec-desc">
              Our proven methodology for discovering vulnerabilities, remediating risks, and hardening production cloud environments.
            </p>
          </div>

          <div className="sec-process-grid">
            {deliverySteps.map((step, i) => (
              <div key={i} className="sec-process-card">
                <div className="sec-proc-num-row">
                  <span className="sec-proc-num">{step.num}</span>
                  <span className="sec-proc-icon">{step.icon}</span>
                </div>
                <span className="sec-proc-tag">{step.tag}</span>
                <h3 className="sec-proc-title">{step.title}</h3>
                <p className="sec-proc-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FAQ SECTION (WITH STICKY SIDEBAR) ── */}
      <section className="sec-faq-section">
        <div className="sec-faq-container">
          <div className="sec-sec-header">
            <div className="sec-badge-pill">
              <span className="sec-badge-dot" />
              SECURITY FAQS
            </div>
            <h2 className="sec-sec-title">Frequently Asked Questions</h2>
            <p className="sec-sec-desc">Everything you need to know about our penetration testing, SOC 2 readiness, and zero-trust cloud engineering.</p>
          </div>

          <div className="sec-faq-layout">
            <div className="sec-faq-sidebar">
              <h3>Need an Enterprise Security Assessment?</h3>
              <p>Speak directly with our Lead Security Architect to scope your penetration test, SOC 2 timeline, or cloud hardening review.</p>
              <Link href="/contact" className="sec-faq-contact-btn">
                Talk to a Security Architect →
              </Link>
              <div className="sec-faq-stat-box">
                <div className="sec-faq-stat-num">100%</div>
                <div className="sec-faq-stat-lbl">SOC 2 &amp; ISO 27001 First-Time Audit Pass Rate</div>
              </div>
            </div>

            <div className="sec-faq-accordion">
              {faqs.map((f, i) => (
                <details key={i} className="sec-faq-item">
                  <summary>
                    <span className="sec-faq-idx">{String(i + 1).padStart(2, "0")}</span>
                    <span className="sec-faq-q">{f.q}</span>
                    <span className="sec-faq-toggle">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9l6 6 6-6" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </summary>
                  <div className="sec-faq-a">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. HIGH-CONVERTING BOTTOM CTA BANNER ── */}
      <section className="sec-cta-banner-section">
        <div className="sec-cta-banner-card">
          <div className="sec-cta-glow-orb" />
          <div className="sec-cta-inner">
            <div className="sec-badge-pill" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", borderColor: "rgba(255,255,255,0.25)" }}>
              <span className="sec-badge-dot" style={{ background: "#38bdf8" }} />
              ZERO COMPROMISE SECURITY
            </div>
            <h2 className="sec-cta-title">Ready to Audit &amp; Harden Your Platform?</h2>
            <p className="sec-cta-desc">
              Receive a comprehensive penetration testing proposal, SOC 2 audit readiness roadmap, and cloud security architecture plan within 48 hours.
            </p>
            <div className="sec-cta-actions">
              <Link href="/contact" className="sec-cta-btn-primary">
                Book Free Security Audit →
              </Link>
              <Link href="/services" className="sec-cta-btn-ghost">
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── EMBEDDED SCOPED STYLING ── */}
      <style jsx>{`
        .sec-page-root {
          font-family: -apple-system, BlinkMacSystemFont, "Plus Jakarta Sans", "Inter", sans-serif;
          color: #0f172a;
          background: #ffffff;
          overflow-x: hidden;
          width: 100%;
        }

        /* Generic Header */
        .sec-sec-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .sec-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f1f5f9;
          border: 1.5px solid #cbd5e1;
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 11.5px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: 1.2px;
          margin-bottom: 16px;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05);
        }
        .sec-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #2563eb;
          box-shadow: 0 0 6px rgba(37, 99, 235, 0.8);
        }
        .sec-sec-title {
          font-size: clamp(28px, 3.8vw, 44px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.15;
          letter-spacing: -1.2px;
          margin: 0 0 16px;
        }
        .sec-sec-desc {
          font-size: 15.5px;
          color: #64748b;
          line-height: 1.65;
          margin: 0;
        }

        /* Hero Section */
        .sec-hero-section {
          background: linear-gradient(135deg, #070d18 0%, #0f172a 50%, #1e293b 100%);
          padding: 135px 24px 80px 24px;
          position: relative;
          overflow: hidden;
          color: #ffffff;
        }
        .sec-hero-glow-1 {
          position: absolute;
          top: -100px;
          right: -50px;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.25) 0%, transparent 70%);
          pointer-events: none;
        }
        .sec-hero-glow-2 {
          position: absolute;
          bottom: -100px;
          left: -50px;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%);
          pointer-events: none;
        }
        .sec-hero-container {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 540px;
          gap: 48px;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        .sec-hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .sec-hero-title {
          font-size: clamp(34px, 4.2vw, 54px);
          font-weight: 900;
          color: #ffffff;
          line-height: 1.12;
          letter-spacing: -1.5px;
          margin: 0 0 20px;
        }
        .sec-highlight-text {
          background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .sec-hero-subtitle {
          font-size: 16px;
          color: #94a3b8;
          line-height: 1.65;
          margin: 0 0 32px;
          max-width: 520px;
          font-weight: 400;
        }
        .sec-hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }
        .sec-btn-primary {
          background: #ffffff;
          color: #0f172a !important;
          font-weight: 800;
          border-radius: 100px;
          padding: 14px 28px;
          font-size: 15px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          transition: all 0.2s ease;
        }
        .sec-btn-primary:hover {
          background: #f8fafc;
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.4);
        }
        .sec-btn-arrow {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #0f172a;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
        }
        .sec-btn-ghost {
          background: rgba(255, 255, 255, 0.08);
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          color: #ffffff !important;
          font-weight: 700;
          border-radius: 100px;
          padding: 14px 26px;
          font-size: 15px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: all 0.2s ease;
        }
        .sec-btn-ghost:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-2px);
        }

        /* Hero Stats */
        .sec-hero-stats {
          display: flex;
          gap: 24px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          flex-wrap: wrap;
        }
        .sec-hstat-item {
          display: flex;
          flex-direction: column;
        }
        .sec-hstat-num {
          font-size: 24px;
          font-weight: 900;
          color: #ffffff;
          line-height: 1.1;
        }
        .sec-hstat-lbl {
          font-size: 11.5px;
          font-weight: 600;
          color: #94a3b8;
          margin-top: 4px;
        }
        .sec-hstat-div {
          width: 1px;
          height: 36px;
          background: rgba(255, 255, 255, 0.12);
        }

        /* Active Threat HUD Card */
        .sec-hud-card {
          background: #090f1d;
          border: 1.5px solid #1e293b;
          border-radius: 28px;
          padding: 28px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .sec-hud-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 14px;
        }
        .sec-hud-title-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .sec-hud-radar-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 8px #38bdf8;
          animation: pulseDot 2s infinite;
        }
        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.6; }
        }
        .sec-hud-title {
          font-size: 11.5px;
          font-weight: 800;
          color: #94a3b8;
          letter-spacing: 0.8px;
        }
        .sec-hud-status-badge {
          background: rgba(74, 222, 128, 0.12);
          border: 1px solid rgba(74, 222, 128, 0.3);
          color: #4ade80;
          font-size: 10.5px;
          font-weight: 800;
          padding: 3px 10px;
          border-radius: 100px;
        }
        .sec-hud-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .sec-hud-stat-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          padding: 12px 14px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .sec-hud-k {
          font-size: 10px;
          color: #64748b;
          font-weight: 700;
          text-transform: uppercase;
        }
        .sec-hud-v {
          font-size: 13px;
          font-weight: 800;
        }
        .sec-hud-bar {
          width: 100%;
          height: 3px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 2px;
          overflow: hidden;
          margin-top: 4px;
        }
        .sec-hud-bar div {
          height: 100%;
          border-radius: 2px;
        }
        .sec-hud-compliance-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .sec-hud-comp-label {
          font-size: 11px;
          color: #94a3b8;
          font-weight: 700;
        }
        .sec-hud-comp-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .sec-comp-tag {
          font-size: 10.5px;
          font-weight: 800;
          padding: 3px 10px;
          border-radius: 100px;
          border: 1px solid;
        }
        .sec-comp-tag.blue { background: rgba(56, 189, 248, 0.1); color: #38bdf8; border-color: rgba(56, 189, 248, 0.25); }
        .sec-comp-tag.green { background: rgba(74, 222, 128, 0.1); color: #4ade80; border-color: rgba(74, 222, 128, 0.25); }
        .sec-comp-tag.purple { background: rgba(168, 85, 247, 0.1); color: #c084fc; border-color: rgba(168, 85, 247, 0.25); }
        .sec-comp-tag.orange { background: rgba(251, 191, 36, 0.1); color: #fbbf24; border-color: rgba(251, 191, 36, 0.25); }

        /* Modules Section */
        .sec-modules-section {
          padding: 80px 24px;
          background: #ffffff;
        }
        .sec-modules-container {
          max-width: 1240px;
          margin: 0 auto;
        }
        .sec-module-tabs {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .sec-module-tab-btn {
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
        .sec-module-tab-btn:hover {
          color: #0f172a;
          background: #ffffff;
          border-color: #cbd5e1;
          transform: translateY(-2px);
        }
        .sec-module-tab-btn.active {
          background: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.18);
        }
        .sec-module-canvas {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 32px;
          padding: 44px;
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.04);
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 44px;
          align-items: center;
        }
        .sec-module-left {
          display: flex;
          flex-direction: column;
        }
        .sec-mtag-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }
        .sec-mtag {
          font-size: 11px;
          font-weight: 800;
          color: #2563eb;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .sec-mbadge {
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          color: #2563eb;
          font-size: 11px;
          font-weight: 800;
          padding: 3px 10px;
          border-radius: 100px;
        }
        .sec-mtitle {
          font-size: clamp(24px, 2.6vw, 32px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
          margin: 0 0 14px;
          letter-spacing: -0.6px;
        }
        .sec-mdesc {
          font-size: 14.5px;
          color: #64748b;
          line-height: 1.65;
          margin: 0 0 24px;
        }
        .sec-mhighlights-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 28px;
        }
        .sec-mhighlight-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13.5px;
          color: #334155;
          line-height: 1.5;
          font-weight: 500;
        }
        .sec-mcheck {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          color: #16a34a;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 900;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .sec-mcta-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        /* Module Telemetry Box */
        .sec-telemetry-card {
          background: #0f172a;
          border-radius: 24px;
          padding: 24px;
          color: #ffffff;
          border: 1px solid #1e293b;
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.2);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .sec-telemetry-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 12px;
        }
        .sec-telemetry-title {
          font-size: 12px;
          font-weight: 800;
          color: #94a3b8;
          text-transform: uppercase;
        }
        .sec-telemetry-live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 6px #10b981;
          animation: pulseDot 2s infinite;
        }
        .sec-telemetry-stat-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .sec-tstat-box {
          background: rgba(255, 255, 255, 0.04);
          border-radius: 12px;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .sec-tstat-k {
          font-size: 10px;
          color: #64748b;
          font-weight: 700;
          text-transform: uppercase;
        }
        .sec-tstat-v {
          font-size: 14px;
          font-weight: 800;
        }
        .sec-telemetry-standard-box {
          background: rgba(37, 99, 235, 0.1);
          border: 1px solid rgba(37, 99, 235, 0.25);
          padding: 10px 14px;
          border-radius: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .sec-tstandard-lbl {
          font-size: 11px;
          color: #94a3b8;
          font-weight: 600;
        }
        .sec-tstandard-val {
          font-size: 12px;
          font-weight: 800;
          color: #38bdf8;
        }
        .sec-telemetry-terminal {
          background: #070c18;
          border-radius: 12px;
          padding: 14px;
          font-family: monospace;
          font-size: 11.5px;
          line-height: 1.6;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .text-green { color: #4ade80; }
        .text-cyan { color: #38bdf8; }

        /* Code Window */
        .sec-code-section {
          padding: 80px 24px;
          background: #ffffff;
          border-top: 1px solid #f1f5f9;
        }
        .sec-code-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .sec-code-window {
          background: #0a0e1a;
          border: 1.5px solid #1e293b;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(15, 23, 42, 0.15);
        }
        .sec-code-top-bar {
          background: #0f172a;
          padding: 14px 20px;
          border-bottom: 1px solid #1e293b;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .sec-code-tabs {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .sec-code-tab-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #94a3b8;
          padding: 7px 14px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .sec-code-tab-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
        }
        .sec-code-tab-btn.active {
          background: #2563eb;
          color: #ffffff;
          border-color: #2563eb;
        }
        .sec-code-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .sec-code-badge-sla {
          background: rgba(74, 222, 128, 0.12);
          border: 1px solid rgba(74, 222, 128, 0.3);
          color: #4ade80;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
        }
        .sec-copy-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          font-size: 11.5px;
          font-weight: 700;
          padding: 5px 12px;
          border-radius: 6px;
          cursor: pointer;
        }
        .sec-code-body {
          padding: 24px 28px;
        }
        .sec-code-meta {
          display: flex;
          justify-content: space-between;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .sec-code-filename {
          font-family: monospace;
          font-size: 13px;
          font-weight: 700;
          color: #38bdf8;
        }
        .sec-code-lang {
          font-size: 11.5px;
          color: #94a3b8;
          font-weight: 600;
        }
        .sec-code-pre {
          margin: 0;
          overflow-x: auto;
          font-family: "JetBrains Mono", "Fira Code", monospace;
          font-size: 13px;
          line-height: 1.7;
          color: #e2e8f0;
          max-height: 420px;
        }

        /* Capabilities Grid */
        .sec-caps-section {
          padding: 96px 24px;
          background: #f8fafc;
        }
        .sec-caps-container {
          max-width: 1240px;
          margin: 0 auto;
        }
        .sec-caps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .sec-cap-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 24px;
          padding: 32px 28px;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03);
          display: flex;
          flex-direction: column;
          transition: all 0.25s ease;
        }
        .sec-cap-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
          border-color: #cbd5e1;
        }
        .sec-cap-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .sec-cap-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: #ffffff;
        }
        .sec-cap-badge {
          font-size: 11px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 100px;
          border: 1px solid;
        }
        .sec-cap-title {
          font-size: 18px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 12px;
          letter-spacing: -0.4px;
        }
        .sec-cap-desc {
          font-size: 13.5px;
          color: #64748b;
          line-height: 1.65;
          margin: 0 0 24px;
          flex-grow: 1;
        }
        .sec-cap-bullets {
          border-top: 1px dashed #e2e8f0;
          padding-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .sec-cap-bullet-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          color: #334155;
          font-weight: 600;
        }
        .sec-cap-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* Compliance Matrix */
        .sec-compliance-section {
          padding: 96px 24px;
          background: #ffffff;
          border-top: 1px solid #f1f5f9;
        }
        .sec-compliance-container {
          max-width: 1240px;
          margin: 0 auto;
        }
        .sec-standards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .sec-std-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 28px 24px;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03);
          transition: all 0.25s ease;
        }
        .sec-std-card:hover {
          transform: translateY(-4px);
          border-color: #cbd5e1;
          box-shadow: 0 14px 30px rgba(15, 23, 42, 0.07);
        }
        .sec-std-top {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 18px;
          padding-bottom: 14px;
          border-bottom: 1px solid #f1f5f9;
        }
        .sec-std-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          background: #f8fafc;
          border: 1.5px solid;
        }
        .sec-std-name {
          font-size: 17px;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
        }
        .sec-std-badge {
          font-size: 11.5px;
          font-weight: 700;
        }
        .sec-std-metrics {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .sec-std-row {
          display: flex;
          justify-content: space-between;
          font-size: 12.5px;
        }
        .sec-std-k {
          color: #64748b;
          font-weight: 600;
        }
        .sec-std-v {
          font-weight: 700;
        }

        /* Process Section */
        .sec-process-section {
          padding: 96px 24px;
          background: #f8fafc;
        }
        .sec-process-container {
          max-width: 1240px;
          margin: 0 auto;
        }
        .sec-process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .sec-process-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 28px 22px;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03);
          transition: all 0.25s ease;
        }
        .sec-process-card:hover {
          transform: translateY(-5px);
          border-color: #2563eb;
          box-shadow: 0 16px 36px rgba(37, 99, 235, 0.1);
        }
        .sec-proc-num-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .sec-proc-num {
          font-size: 28px;
          font-weight: 900;
          color: #2563eb;
          font-family: monospace;
          line-height: 1;
        }
        .sec-proc-icon {
          font-size: 22px;
        }
        .sec-proc-tag {
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          color: #64748b;
          display: block;
          margin-bottom: 8px;
        }
        .sec-proc-title {
          font-size: 16px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.3;
          margin: 0 0 12px;
        }
        .sec-proc-desc {
          font-size: 12.5px;
          color: #64748b;
          line-height: 1.65;
          margin: 0;
        }

        /* FAQ Section */
        .sec-faq-section {
          padding: 96px 24px;
          background: #ffffff;
        }
        .sec-faq-container {
          max-width: 1160px;
          margin: 0 auto;
        }
        .sec-faq-layout {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 48px;
          align-items: start;
        }
        .sec-faq-sidebar {
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 24px;
          padding: 36px 28px;
          position: sticky;
          top: 100px;
        }
        .sec-faq-sidebar h3 {
          font-size: 22px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 12px;
          line-height: 1.25;
        }
        .sec-faq-sidebar p {
          font-size: 14px;
          color: #475569;
          line-height: 1.65;
          margin: 0 0 24px;
        }
        .sec-faq-contact-btn {
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
        .sec-faq-contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.25);
        }
        .sec-faq-stat-box {
          margin-top: 32px;
          border-top: 1px solid #e2e8f0;
          padding-top: 20px;
        }
        .sec-faq-stat-num {
          font-size: 32px;
          font-weight: 900;
          color: #2563eb;
          line-height: 1;
        }
        .sec-faq-stat-lbl {
          font-size: 12px;
          color: #475569;
          margin-top: 4px;
          font-weight: 600;
        }
        .sec-faq-accordion {
          display: flex;
          flex-direction: column;
        }
        .sec-faq-item {
          border-bottom: 1px solid #e2e8f0;
        }
        .sec-faq-item:first-child {
          border-top: 1px solid #e2e8f0;
        }
        .sec-faq-item summary {
          list-style: none;
          padding: 22px 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 16px;
          user-select: none;
        }
        .sec-faq-item summary::-webkit-details-marker {
          display: none;
        }
        .sec-faq-idx {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11.5px;
          font-weight: 800;
          color: #94a3b8;
          flex-shrink: 0;
        }
        .sec-faq-item[open] .sec-faq-idx {
          background: #eff6ff;
          color: #2563eb;
        }
        .sec-faq-q {
          flex: 1;
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.35;
        }
        .sec-faq-item[open] .sec-faq-q {
          color: #2563eb;
        }
        .sec-faq-toggle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.25s ease, background 0.25s ease;
        }
        .sec-faq-item[open] .sec-faq-toggle {
          background: #2563eb;
          transform: rotate(180deg);
        }
        .sec-faq-item[open] .sec-faq-toggle svg path {
          stroke: #ffffff;
        }
        .sec-faq-a {
          padding: 0 0 24px 48px;
          font-size: 14.5px;
          color: #475569;
          line-height: 1.7;
        }

        /* Bottom CTA Banner */
        .sec-cta-banner-section {
          padding: 80px 24px 100px;
          background: #f8fafc;
        }
        .sec-cta-banner-card {
          max-width: 1100px;
          margin: 0 auto;
          background: linear-gradient(135deg, #070d18 0%, #0f172a 50%, #1e293b 100%);
          border-radius: 36px;
          padding: 64px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 30px 70px rgba(15, 23, 42, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .sec-cta-glow-orb {
          position: absolute;
          top: -50%;
          left: 50%;
          transform: translateX(-50%);
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.35) 0%, transparent 70%);
          pointer-events: none;
        }
        .sec-cta-inner {
          position: relative;
          z-index: 1;
          max-width: 760px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .sec-cta-title {
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 900;
          color: #ffffff;
          line-height: 1.12;
          letter-spacing: -1.2px;
          margin: 16px 0;
        }
        .sec-cta-desc {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.65;
          margin: 0 0 36px;
        }
        .sec-cta-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .sec-cta-btn-primary {
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
        .sec-cta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.3);
        }
        .sec-cta-btn-ghost {
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
        .sec-cta-btn-ghost:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .sec-hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .sec-module-canvas {
            grid-template-columns: 1fr;
            padding: 32px 24px;
          }
          .sec-caps-grid, .sec-standards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .sec-process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .sec-faq-layout {
            grid-template-columns: 1fr;
          }
          .sec-faq-sidebar {
            position: static;
          }
        }

        @media (max-width: 640px) {
          .sec-hero-section {
            padding: 110px 16px 60px;
          }
          .sec-hud-grid {
            grid-template-columns: 1fr;
          }
          .sec-caps-grid, .sec-standards-grid, .sec-process-grid {
            grid-template-columns: 1fr;
          }
          .sec-cta-banner-card {
            padding: 44px 20px;
            border-radius: 24px;
          }
        }
      `}</style>
    </div>
  );
}
