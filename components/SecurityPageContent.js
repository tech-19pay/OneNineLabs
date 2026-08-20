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
      {/* ── 1. HERO SECTION: GET SECURE AND PRIVATE SURFING ── */}
      <section className="vpn-hero-section">
        {/* Subtle Cyber Network Grid Watermark */}
        <div className="vpn-hero-grid-bg" />

        <div className="vpn-hero-container">
          {/* Left Column: Headline, Subtitle, & CTA */}
          <div className="vpn-hero-left">

            <h1 className="vpn-hero-title">
              <span className="vpn-title-orange">Cloud &amp; Cyber </span>
              <span className="vpn-title-dark">Security Scale</span>
            </h1>

            <p className="vpn-hero-subtitle">
              Harden your cloud infrastructure, automate compliance audits, and shield multi-cloud perimeters with real-time zero-trust enforcement.
            </p>

            <div className="vpn-hero-actions">
              <Link href="/contact" className="vpn-hero-btn">
                Schedule Audit Call →
              </Link>
              <div className="vpn-live-status-badge">
                <span className="vpn-pulse-dot" />
                Active Protection
              </div>
            </div>

          </div>

          {/* Right Column: Premium Card Displaying generated security_hero.jpg */}
          <div className="vpn-hero-right">
            <div className="vpn-hero-visual-frame">
              <div className="vpn-hero-image-wrap">
                <img
                  src="/services/security_hero.jpg"
                  alt="OneNineLabs Cloud & Cyber Security Infrastructure Map"
                  className="vpn-hero-main-img"
                />
                <div className="vpn-hero-image-overlay" />

                {/* Scan line effect */}
                <div className="vpn-hero-scan-line" />
              </div>

              {/* Floating Stat Card 1 */}
              <div className="vpn-float-card fc-top">
                <span className="fc-icon">🛡️</span>
                <div className="fc-text">
                  <strong>Zero Trust</strong>
                  <span>Active Workloads</span>
                </div>
              </div>

              {/* Floating Stat Card 2 */}
              <div className="vpn-float-card fc-bottom">
                <span className="fc-icon">⚡</span>
                <div className="fc-text">
                  <strong>480B+</strong>
                  <span>Threats Blocked Daily</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. BYPASS THREATS & CLOUD IMMUNITY SECTION ── */}
      <section className="sec-cloud-mesh-section">
        <div className="sec-cloud-mesh-container">
          {/* Left Column: Text, Subtitle, Stats, and CTA */}
          <div className="sec-cloud-mesh-left">
            <span className="sec-cm-tag">ABOUT ONENINELABS CLOUD SECURITY</span>
            <h2 className="sec-cm-title">
              Bypass Threats and<br />
              Remain Fully Resilient<br />
              Across Every Cloud
            </h2>
            <p className="sec-cm-desc">
              With OneNineLabs Zero-Trust Cloud Armor, your infrastructure and multi-cloud workloads operate inside an encrypted, isolated perimeter. Shield sensitive data, stop lateral threat movement, and prevent unauthorized breaches with continuous real-time verification.
            </p>

            {/* Feature Stat Blocks */}
            <div className="sec-cm-stats-grid">
              <div className="sec-cm-stat-card">
                <div className="sec-cm-stat-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f04e23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                    <line x1="6" y1="6" x2="6.01" y2="6" />
                    <line x1="6" y1="18" x2="6.01" y2="18" />
                  </svg>
                </div>
                <div className="sec-cm-stat-info">
                  <span className="sec-cm-stat-num">1650+</span>
                  <span className="sec-cm-stat-lbl">Secure Cloud Nodes</span>
                </div>
              </div>

              <div className="sec-cm-stat-card">
                <div className="sec-cm-stat-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f04e23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div className="sec-cm-stat-info">
                  <span className="sec-cm-stat-num">125</span>
                  <span className="sec-cm-stat-lbl">Global Cloud PoPs</span>
                </div>
              </div>
            </div>

            {/* Dark CTA Button */}
            <div className="sec-cm-btn-wrap">
              <Link href="/contact" className="sec-cm-cta-btn">
                Get Started →
              </Link>
            </div>
          </div>

          {/* Right Column: Floating Gauge Card, Region List Card, and Modern Phone Mockup */}
          <div className="sec-cloud-mesh-right">
            {/* Left Sub-Stack: Gauge Card + PoP List Card */}
            <div className="sec-cm-floating-stack">
              {/* 1. Speedometer / Inspection Gauge Card */}
              <div className="sec-cm-gauge-card">
                <div className="sec-cm-speedometer">
                  <svg viewBox="0 0 120 70" className="sec-speed-svg">
                    <path
                      d="M 15 60 A 45 45 0 0 1 105 60"
                      fill="none"
                      stroke="#f1f5f9"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 15 60 A 45 45 0 0 1 95 30"
                      fill="none"
                      stroke="url(#speedGrad)"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="speedGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="70%" stopColor="#f04e23" />
                        <stop offset="100%" stopColor="#dc2626" />
                      </linearGradient>
                    </defs>
                    <line x1="60" y1="60" x2="80" y2="35" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="60" cy="60" r="4.5" fill="#1e293b" />
                  </svg>
                </div>
                <div className="sec-cm-gauge-metric">
                  <span className="sec-cm-gauge-lbl">Download & Inspection Speed</span>
                  <span className="sec-cm-gauge-val">80.5 <small>Gbps/sec</small></span>
                </div>
              </div>

              {/* 2. Global Server Locations Card */}
              <div className="sec-cm-locations-card">
                <div className="sec-cm-loc-item">
                  <div className="sec-cm-loc-left">
                    <span className="sec-cm-flag">🇬🇧</span>
                    <div className="sec-cm-loc-text">
                      <strong>London</strong>
                      <span>AWS Cloud Region</span>
                    </div>
                  </div>
                  <span className="sec-cm-status-dot green" />
                </div>

                <div className="sec-cm-loc-item">
                  <div className="sec-cm-loc-left">
                    <span className="sec-cm-flag">🇧🇷</span>
                    <div className="sec-cm-loc-text">
                      <strong>São Paulo</strong>
                      <span>GCP Mesh Core</span>
                    </div>
                  </div>
                  <span className="sec-cm-status-dot green" />
                </div>

                <div className="sec-cm-loc-item">
                  <div className="sec-cm-loc-left">
                    <span className="sec-cm-flag">🇩🇪</span>
                    <div className="sec-cm-loc-text">
                      <strong>Frankfurt</strong>
                      <span>Azure Edge PoP</span>
                    </div>
                  </div>
                  <span className="sec-cm-status-dot green" />
                </div>

                <div className="sec-cm-loc-item">
                  <div className="sec-cm-loc-left">
                    <span className="sec-cm-flag">🇫🇷</span>
                    <div className="sec-cm-loc-text">
                      <strong>Paris</strong>
                      <span>Dedicated Zero-Trust</span>
                    </div>
                  </div>
                  <span className="sec-cm-status-dot green" />
                </div>
              </div>
            </div>

            {/* Right Sub-Stack: Sleek Smartphone Mockup with Active Shield UI */}
            <div className="sec-cm-phone-mockup">
              <div className="sec-phone-frame">
                {/* Phone Speaker / Dynamic Island */}
                <div className="sec-phone-island" />

                {/* Phone Screen App UI */}
                <div className="sec-phone-screen">
                  <div className="sec-app-header">
                    <span className="sec-app-title">Cloud Shield Status</span>
                    <div className="sec-app-badges">
                      <span className="sec-app-badge green">99.99% TLS</span>
                      <span className="sec-app-badge red">Threats: 0</span>
                    </div>
                  </div>

                  {/* Central Shield Power Switch */}
                  <div className="sec-app-power-wrap">
                    <div className="sec-app-power-ring-outer">
                      <div className="sec-app-power-ring-inner">
                        <div className="sec-app-power-btn">
                          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
                            <line x1="12" y1="2" x2="12" y2="12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connected Time Counter */}
                  <div className="sec-app-timer">
                    <span className="sec-app-timer-lbl">Connected Time</span>
                    <span className="sec-app-timer-val">02:49:35</span>
                  </div>

                  {/* Active Cloud Region Strip */}
                  <div className="sec-app-region-bar">
                    <span className="sec-app-region-flag">🇩🇪</span>
                    <div className="sec-app-region-txt">
                      <strong>Frankfurt Core PoP</strong>
                      <span>IP: 185.199.108.153 (Hidden)</span>
                    </div>
                  </div>

                  {/* App Action Button */}
                  <button className="sec-app-action-btn">
                    Active Protection Mode
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SIX CORE PILLARS OF CLOUD SECURITY & ZERO-TRUST ── */}
      <section className="sec-pillars-section">
        <div className="sec-pillars-container">
          <div className="sec-pillars-grid">
            {/* 1. High-Speed Threat Inspection */}
            <div className="sec-pillar-item">
              <div className="sec-pillar-icon-wrap">
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="1" y1="21" x2="23" y2="21" />
                </svg>
                <span className="sec-pillar-dot-accent">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f04e23" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
              </div>
              <div className="sec-pillar-content">
                <h3 className="sec-pillar-title">High-Speed Threat Inspection</h3>
                <p className="sec-pillar-desc">
                  With our ultra-fast zero-trust mesh, enjoy seamless cloud throughput and sub-millisecond edge latency while every packet is deeply inspected in real time.
                </p>
              </div>
            </div>

            {/* 2. IP & Cloud Perimeter Cloaking */}
            <div className="sec-pillar-item">
              <div className="sec-pillar-icon-wrap">
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <span className="sec-pillar-dot-accent">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f04e23" strokeWidth="2.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
              </div>
              <div className="sec-pillar-content">
                <h3 className="sec-pillar-title">IP & Cloud Perimeter Cloaking</h3>
                <p className="sec-pillar-desc">
                  Your internal cloud traffic is protected from surveillance, origin IPs are masked, and data is shielded preventing unauthorized reconnaissance.
                </p>
              </div>
            </div>

            {/* 3. Zero-Knowledge SOC 2 Policy */}
            <div className="sec-pillar-item">
              <div className="sec-pillar-icon-wrap">
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
                <span className="sec-pillar-dot-accent">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f04e23" strokeWidth="2.5">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </span>
              </div>
              <div className="sec-pillar-content">
                <h3 className="sec-pillar-title">Zero-Knowledge SOC 2 Policy</h3>
                <p className="sec-pillar-desc">
                  Your enterprise data is protected under strict zero-knowledge protocols. No sensitive payload logs or confidential metadata are ever stored.
                </p>
              </div>
            </div>

            {/* 4. Quantum-Resistant Encryption */}
            <div className="sec-pillar-item">
              <div className="sec-pillar-icon-wrap">
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <circle cx="12" cy="10" r="3" />
                  <path d="M7 17h10" />
                </svg>
                <span className="sec-pillar-dot-accent">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f04e23" strokeWidth="2.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
              </div>
              <div className="sec-pillar-content">
                <h3 className="sec-pillar-title">Quantum-Resistant Encryption</h3>
                <p className="sec-pillar-desc">
                  Next-generation AES-256-GCM and post-quantum cryptographic cipher suites ensure your data in transit and at rest remains uncompromised.
                </p>
              </div>
            </div>

            {/* 5. Unmetered Cloud Defense */}
            <div className="sec-pillar-item">
              <div className="sec-pillar-icon-wrap">
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span className="sec-pillar-dot-accent">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f04e23" strokeWidth="2.5">
                    <polyline points="13 17 18 12 13 7" />
                    <polyline points="6 17 11 12 6 7" />
                  </svg>
                </span>
              </div>
              <div className="sec-pillar-content">
                <h3 className="sec-pillar-title">Unmetered Cloud Defense</h3>
                <p className="sec-pillar-desc">
                  Enjoy unmetered bandwidth, automated auto-scaling edge capacity, and continuous layer 7 protection without throttling or overage constraints.
                </p>
              </div>
            </div>

            {/* 6. 24/7 Dedicated SOC Defense */}
            <div className="sec-pillar-item">
              <div className="sec-pillar-icon-wrap">
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span className="sec-pillar-dot-accent">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f04e23" strokeWidth="2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </span>
              </div>
              <div className="sec-pillar-content">
                <h3 className="sec-pillar-title">24/7 Dedicated SOC Defense</h3>
                <p className="sec-pillar-desc">
                  Our dedicated Security Operations Center (SOC) engineers and cloud specialists are on standby around the clock to assist with threat mitigation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. 24/7 SURVEILLANCE & CLOUD THREAT MONITORING SECTION ── */}
      <section className="sec-monitor-section">
        <div className="sec-monitor-container">
          {/* Top 2-Column Row */}
          <div className="sec-monitor-main-row">
            {/* Left: Rounded Hardware/Camera Photo Card */}
            <div className="sec-monitor-visual-wrap">
              <div className="sec-monitor-console-card">
                {/* Console Window Top Header Bar */}
                <div className="sec-console-header">
                  <div className="sec-console-dots">
                    <span className="sec-dot d-red" />
                    <span className="sec-dot d-yellow" />
                    <span className="sec-dot d-green" />
                  </div>
                  <div className="sec-console-title">cloud-sentinel-agent-v2</div>
                  <div className="sec-console-status">
                    <span className="sec-status-ping" />
                    SECURE
                  </div>
                </div>

                {/* Dashboard Stats Row */}
                <div className="sec-console-stats">
                  <div className="sec-cstat-box">
                    <span className="sec-cstat-val">0.02s</span>
                    <span className="sec-cstat-lbl">Detection Latency</span>
                  </div>
                  <div className="sec-cstat-box">
                    <span className="sec-cstat-val text-green">100%</span>
                    <span className="sec-cstat-lbl">mTLS Enforced</span>
                  </div>
                  <div className="sec-cstat-box">
                    <span className="sec-cstat-val">0</span>
                    <span className="sec-cstat-lbl">Active Alerts</span>
                  </div>
                </div>

                {/* Live Threat Map Wave Graph Overlay */}
                <div className="sec-console-graph">
                  <svg viewBox="0 0 320 80" className="sec-wave-svg">
                    <path
                      d="M0,40 C40,40 60,10 100,10 C140,10 160,65 200,65 C240,65 280,25 320,25"
                      fill="none"
                      stroke="#f04e23"
                      strokeWidth="2.5"
                      className="sec-wave-line"
                    />
                    <path
                      d="M0,40 C40,40 60,10 100,10 C140,10 160,65 200,65 C240,65 280,25 320,25 L320,80 L0,80 Z"
                      fill="url(#waveGrad)"
                      opacity="0.15"
                    />
                    <defs>
                      <linearGradient id="waveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#f04e23" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="sec-graph-indicator">Live Cloud Infrastructure Ingress</span>
                </div>

                {/* Live Console Terminal Feed logs */}
                <div className="sec-console-terminal">
                  <div className="sec-terminal-line"><span className="term-t">[12:04:12]</span> <span className="term-inf">INF:</span> Inbound TLS handshake from US-EAST-1 (Verified)</div>
                  <div className="sec-terminal-line"><span className="term-t">[12:04:15]</span> <span className="term-warn">WRN:</span> Port scan attempt blocked from 198.51.100.42</div>
                  <div className="sec-terminal-line"><span className="term-t">[12:04:22]</span> <span className="term-inf">INF:</span> Cilium network policy enforced on cluster-kube-3</div>
                  <div className="sec-terminal-line"><span className="term-t">[12:04:31]</span> <span className="term-ok">OK:</span> Zero-trust token rotated for user admin@onenine.com</div>
                </div>
              </div>
            </div>

            {/* Right: Content, Description, and CTA Row */}
            <div className="sec-monitor-content-col">
              <span className="sec-mon-tag">CONTINUOUS CLOUD & INFRASTRUCTURE DEFENSE</span>
              <h2 className="sec-mon-title">
                Monitor your Cloud via<br />
                your Smartphone or<br />
                Security Console
              </h2>
              <p className="sec-mon-desc">
                Gain real-time telemetry, automated threat detection, and unified visibility across all cloud workloads, Kubernetes clusters, and remote employee endpoints from a single pane of glass.
              </p>

              {/* Action Buttons Row */}
              <div className="sec-mon-actions-row">
                <Link href="/contact" className="sec-mon-btn-dark">
                  Explore Platform →
                </Link>

                <a href="tel:+18001995227" className="sec-mon-phone-widget">
                  <span className="sec-mon-phone-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f04e23" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span className="sec-mon-phone-number">+1 800-19-SECURE</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom 4 Big Numbers Metrics Grid */}
          <div className="sec-monitor-stats-bar">
            <div className="sec-mon-stat-item">
              <span className="sec-mon-stat-giant">24/7</span>
              <span className="sec-mon-stat-caption">Continuous SOC Monitoring</span>
            </div>

            <div className="sec-mon-stat-item">
              <span className="sec-mon-stat-giant">1.5k+</span>
              <span className="sec-mon-stat-caption">Cloud Workloads Secured</span>
            </div>

            <div className="sec-mon-stat-item">
              <span className="sec-mon-stat-giant">15+</span>
              <span className="sec-mon-stat-caption">Years of Security Experience</span>
            </div>

            <div className="sec-mon-stat-item">
              <span className="sec-mon-stat-giant">35+</span>
              <span className="sec-mon-stat-caption">Certified SOC Professionals</span>
            </div>
          </div>
        </div>
      </section>



      {/* ── 3. AI TRANSFORMATION & THREAT INTEL SECTION ── */}
      <section className="sec-intel-section">
        <div className="sec-intel-container">
          {/* Left Column: The Response & Progress Bars */}
          <div className="sec-intel-left">
            <span className="sec-intel-tag-good">THE RESPONSE</span>
            <h2 className="sec-intel-title">
              AI-Driven Threat<br />Resolution at Scale
            </h2>
            <p className="sec-intel-subtitle-text">
              Harnessing machine learning models to isolate and contain threats at sub-second speeds before they reach critical database layers.
            </p>

            <div className="sec-intel-bars-wrap">
              {/* Bar 1 */}
              <div className="sec-intel-bar-item">
                <span className="sec-intel-bar-label">Automated Threat Containment Rate</span>
                <div className="sec-intel-bar-row">
                  <div className="sec-intel-progress-track">
                    <div className="sec-intel-progress-fill p-fill-98" style={{ width: "98%" }} />
                  </div>
                  <span className="sec-intel-bar-pct">98.4%</span>
                </div>
              </div>

              {/* Bar 2 */}
              <div className="sec-intel-bar-item">
                <span className="sec-intel-bar-label">SecOps Alert Noise Reduction</span>
                <div className="sec-intel-bar-row">
                  <div className="sec-intel-progress-track">
                    <div className="sec-intel-progress-fill p-fill-85" style={{ width: "85%" }} />
                  </div>
                  <span className="sec-intel-bar-pct">85.0%</span>
                </div>
              </div>

              {/* Bar 3 */}
              <div className="sec-intel-bar-item">
                <span className="sec-intel-bar-label">Edge Firewall Policy Sync Latency</span>
                <div className="sec-intel-bar-row">
                  <div className="sec-intel-progress-track">
                    <div className="sec-intel-progress-fill p-fill-100" style={{ width: "100%" }} />
                  </div>
                  <span className="sec-intel-bar-pct">&lt; 1.2s</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Circular Gauges & The Risk Box */}
          <div className="sec-intel-right">
            {/* Donut Gauges Row */}
            <div className="sec-intel-gauges-row">
              {/* Gauge 1 */}
              <div className="sec-intel-gauge-box">
                <div className="sec-intel-circle-wrap">
                  <svg className="sec-gauge-svg" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="50" className="sec-gauge-track" />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      className="sec-gauge-fill"
                      style={{ strokeDashoffset: "calc(314.159 * (1 - 0.94))" }}
                    />
                  </svg>
                  <span className="sec-gauge-number text-green">94%</span>
                </div>
                <div className="sec-gauge-caption">
                  <strong>Efficiency Gains</strong>
                  <span>reported by SecOps teams adopting AI copilots</span>
                </div>
              </div>

              {/* Gauge 2 */}
              <div className="sec-intel-gauge-box">
                <div className="sec-intel-circle-wrap">
                  <svg className="sec-gauge-svg" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="50" className="sec-gauge-track" />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      className="sec-gauge-fill fill-orange"
                      style={{ strokeDashoffset: "calc(314.159 * (1 - 0.78))" }}
                    />
                  </svg>
                  <span className="sec-gauge-number">78%</span>
                </div>
                <div className="sec-gauge-caption">
                  <strong>Attack Growth</strong>
                  <span>in automated edge scanner queries blocked YoY</span>
                </div>
              </div>
            </div>

            {/* The Risk Landscape Box */}
            <div className="sec-intel-bad-card">
              <span className="sec-intel-tag-bad">THE RISK FACTOR</span>
              <h3 className="sec-intel-bad-title">
                Threat actors are weaponizing machine learning to locate open hybrid cloud perimeters.
              </h3>
            </div>
          </div>
        </div>
      </section>


      {/* ── EMBEDDED SCOPED STYLING ── */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700;800&display=swap');

        .sec-page-root {
          font-family: 'Inter', sans-serif;
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
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 850;
          color: #0f172a;
          line-height: 1.15;
          letter-spacing: -1px;
          margin: 0 0 16px;
        }
        .sec-sec-desc {
          font-size: 15px;
          color: #64748b;
          line-height: 1.65;
          margin: 0;
        }

        /* ── Hero Section: Two-Column Premium Layout ── */
        .vpn-hero-section {
          background: radial-gradient(circle at top right, #fbfbfd 0%, #f7f9fc 100%);
          padding: 160px 24px 120px;
          position: relative;
          overflow: hidden;
          color: #0f172a;
          display: flex;
          align-items: center;
          min-height: 85vh;
        }
        .vpn-hero-grid-bg {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(#e2e8f0 1.5px, transparent 1.5px);
          background-size: 32px 32px;
          opacity: 0.5;
          pointer-events: none;
        }
        .vpn-hero-container {
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
          width: 100%;
        }
        .vpn-hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        .vpn-hero-tag {
          font-size: 12.5px;
          font-weight: 800;
          color: #f04e23;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: inline-block;
        }
        .vpn-hero-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(36px, 4.8vw, 62px);
          font-weight: 900;
          line-height: 1.06;
          letter-spacing: -1.8px;
          margin: 0 0 24px;
        }
        .vpn-title-orange {
          color: #f04e23;
        }
        .vpn-title-dark {
          color: #0f172a;
        }
        .vpn-hero-subtitle {
          font-size: 16px;
          color: #475569;
          line-height: 1.7;
          max-width: 520px;
          margin: 0 0 36px;
          font-weight: 500;
        }
        .vpn-hero-actions {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }
        .vpn-hero-btn {
          background: #f04e23;
          color: #ffffff !important;
          font-size: 15.5px;
          font-weight: 700;
          padding: 16px 38px;
          border-radius: 9999px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 10px 25px rgba(240, 78, 35, 0.35);
          transition: all 0.2s ease;
        }
        .vpn-hero-btn:hover {
          background: #e03e12;
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(240, 78, 35, 0.45);
        }
        .vpn-live-status-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          color: #059669;
          font-size: 11px;
          font-weight: 850;
          padding: 6px 14px;
          border-radius: 9999px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .vpn-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          display: inline-block;
          box-shadow: 0 0 6px #10b981;
          animation: statusPulse 2s infinite;
        }
        @keyframes statusPulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        .vpn-hero-trust-row {
          display: flex;
          gap: 32px;
          border-top: 1px solid #e2e8f0;
          padding-top: 28px;
          width: 100%;
          max-width: 520px;
        }
        .vpn-trust-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .vpn-trust-item strong {
          font-size: 20px;
          font-weight: 900;
          color: #0f172a;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .vpn-trust-item span {
          font-size: 12px;
          color: #64748b;
          font-weight: 600;
        }
        .vpn-hero-right {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 100%;
        }
        .vpn-hero-visual-frame {
          position: relative;
          width: 100%;
          max-width: 440px;
        }
        .vpn-hero-image-wrap {
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 28px;
          overflow: hidden;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 20px 48px rgba(15, 23, 42, 0.06);
          position: relative;
          background: #ffffff;
        }
        .vpn-hero-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .vpn-hero-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(240, 78, 35, 0.05) 0%, transparent 70%);
        }
        .vpn-hero-scan-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #f04e23, transparent);
          animation: scanY 4s linear infinite;
        }
        @keyframes scanY {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
        .vpn-float-card {
          position: absolute;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border: 1px solid #e2e8f0;
          padding: 12px 18px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
          z-index: 3;
        }
        .vpn-float-card.fc-top {
          top: 10%;
          left: -40px;
        }
        .vpn-float-card.fc-bottom {
          bottom: 10%;
          right: -30px;
        }
        .fc-icon {
          font-size: 20px;
        }
        .fc-text {
          display: flex;
          flex-direction: column;
        }
        .fc-text strong {
          font-size: 13.5px;
          color: #0f172a;
          font-weight: 800;
        }
        .fc-text span {
          font-size: 10.5px;
          color: #64748b;
          font-weight: 600;
        }
        @media (max-width: 1024px) {
          .vpn-hero-container {
            grid-template-columns: 1fr;
            gap: 56px;
            text-align: center;
          }
          .vpn-hero-left {
            align-items: center;
            text-align: center;
          }
          .vpn-hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }
          .vpn-hero-actions {
            justify-content: center;
          }
          .vpn-hero-trust-row {
            margin-left: auto;
            margin-right: auto;
            justify-content: center;
          }
          .vpn-float-card.fc-top {
            left: -10px;
          }
          .vpn-float-card.fc-bottom {
            right: -10px;
          }
        }
        @media (max-width: 640px) {
          .vpn-hero-section {
            padding: 110px 16px 80px;
          }
        }

        /* ── 2. Cloud Mesh & Zero-Trust Immunity Section ── */
        .sec-cloud-mesh-section {
          padding: 120px 24px 100px;
          background: #ffffff;
          color: #0f172a;
          border-top: 1px solid #f1f5f9;
          position: relative;
          overflow: hidden;
        }
        .sec-cloud-mesh-container {
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .sec-cloud-mesh-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .sec-cm-tag {
          font-size: 12.5px;
          font-weight: 800;
          color: #94a3b8;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: inline-block;
        }
        .sec-cm-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 850;
          color: #0f172a;
          line-height: 1.1;
          letter-spacing: -1px;
          margin: 0 0 24px;
        }
        .sec-cm-desc {
          font-size: 16px;
          color: #475569;
          line-height: 1.65;
          max-width: 520px;
          margin: 0 0 36px;
        }
        .sec-cm-stats-grid {
          display: flex;
          gap: 36px;
          align-items: center;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .sec-cm-stat-card {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .sec-cm-stat-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: #fff5f5;
          border: 1.5px solid #fed7aa;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .sec-cm-stat-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .sec-cm-stat-num {
          font-size: 28px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1;
          letter-spacing: -0.5px;
        }
        .sec-cm-stat-lbl {
          font-size: 13.5px;
          color: #64748b;
          font-weight: 500;
        }
        .sec-cm-btn-wrap {
          display: flex;
        }
        .sec-cm-cta-btn {
          background: #111827;
          color: #ffffff !important;
          font-size: 15.5px;
          font-weight: 700;
          padding: 15px 38px;
          border-radius: 9999px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 15px rgba(17, 24, 39, 0.2);
          transition: all 0.2s ease;
        }
        .sec-cm-cta-btn:hover {
          background: #000000;
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(17, 24, 39, 0.35);
        }

        /* Right Column Dashboards & Mockups */
        .sec-cloud-mesh-right {
          display: flex;
          gap: 24px;
          align-items: center;
          justify-content: center;
        }
        .sec-cm-floating-stack {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 250px;
        }
        .sec-cm-gauge-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 22px;
          padding: 22px 18px;
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.05);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .sec-cm-speedometer {
          width: 130px;
          height: 75px;
        }
        .sec-speed-svg {
          width: 100%;
          height: 100%;
        }
        .sec-cm-gauge-metric {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
        }
        .sec-cm-gauge-lbl {
          font-size: 11.5px;
          color: #64748b;
          font-weight: 600;
        }
        .sec-cm-gauge-val {
          font-size: 24px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.5px;
        }
        .sec-cm-gauge-val small {
          font-size: 13px;
          font-weight: 600;
          color: #94a3b8;
        }

        .sec-cm-locations-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 22px;
          padding: 16px 14px;
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.05);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .sec-cm-loc-item {
          background: #f8fafc;
          border: 1px solid #f1f5f9;
          border-radius: 12px;
          padding: 8px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: background 0.2s ease;
        }
        .sec-cm-loc-item:hover {
          background: #f1f5f9;
        }
        .sec-cm-loc-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .sec-cm-flag {
          font-size: 16px;
        }
        .sec-cm-loc-text {
          display: flex;
          flex-direction: column;
          text-align: left;
        }
        .sec-cm-loc-text strong {
          font-size: 13px;
          color: #0f172a;
          font-weight: 700;
        }
        .sec-cm-loc-text span {
          font-size: 11px;
          color: #64748b;
        }
        .sec-cm-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .sec-cm-status-dot.green {
          background: #22c55e;
          box-shadow: 0 0 8px rgba(34, 197, 94, 0.6);
        }

        /* Smartphone Mockup */
        .sec-cm-phone-mockup {
          position: relative;
        }
        .sec-phone-frame {
          width: 270px;
          height: 520px;
          background: #0f172a;
          border-radius: 42px;
          border: 6px solid #1e293b;
          padding: 14px;
          box-shadow: 0 25px 60px rgba(15, 23, 42, 0.16), inset 0 0 10px rgba(0, 0, 0, 0.6);
          position: relative;
        }
        .sec-phone-island {
          width: 65px;
          height: 16px;
          background: #000000;
          border-radius: 20px;
          margin: 0 auto 14px;
        }
        .sec-phone-screen {
          background: #18181b;
          border-radius: 30px;
          height: calc(100% - 30px);
          padding: 18px 14px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #ffffff;
        }
        .sec-app-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .sec-app-title {
          font-size: 13px;
          font-weight: 700;
          color: #e4e4e7;
        }
        .sec-app-badges {
          display: flex;
          gap: 6px;
        }
        .sec-app-badge {
          font-size: 10px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 100px;
        }
        .sec-app-badge.green {
          background: rgba(34, 197, 94, 0.15);
          color: #4ade80;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }
        .sec-app-badge.red {
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }
        .sec-app-power-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 10px 0;
        }
        .sec-app-power-ring-outer {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: #27272a;
          border: 2px solid rgba(240, 78, 35, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 25px rgba(240, 78, 35, 0.25);
        }
        .sec-app-power-ring-inner {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          background: #3f3f46;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sec-app-power-btn {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #ff6b4a, #f04e23 80%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(240, 78, 35, 0.7);
        }
        .sec-app-timer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }
        .sec-app-timer-lbl {
          font-size: 11px;
          color: #71717a;
        }
        .sec-app-timer-val {
          font-size: 20px;
          font-weight: 800;
          color: #ffffff;
          font-variant-numeric: tabular-nums;
          letter-spacing: 1px;
        }
        .sec-app-region-bar {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 8px 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .sec-app-region-flag {
          font-size: 16px;
        }
        .sec-app-region-txt {
          display: flex;
          flex-direction: column;
          text-align: left;
        }
        .sec-app-region-txt strong {
          font-size: 11.5px;
          color: #ffffff;
        }
        .sec-app-region-txt span {
          font-size: 9.5px;
          color: #a1a1aa;
        }
        .sec-app-action-btn {
          background: #f04e23;
          color: #ffffff;
          border: none;
          padding: 11px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 12.5px;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        }

        /* ── 3. Six Core Pillars Feature Grid Section ── */
        .sec-pillars-section {
          padding: 110px 24px 120px;
          background: #ffffff;
          color: #0f172a;
          border-top: 1px solid #f1f5f9;
        }
        .sec-pillars-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .sec-pillars-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 60px 80px;
        }
        .sec-pillar-item {
          display: flex;
          gap: 22px;
          align-items: flex-start;
        }
        .sec-pillar-icon-wrap {
          position: relative;
          width: 52px;
          height: 52px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sec-pillar-dot-accent {
          position: absolute;
          bottom: -2px;
          right: -2px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #ffffff;
          border: 1.5px solid #fed7aa;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(240, 78, 35, 0.15);
        }
        .sec-pillar-content {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .sec-pillar-title {
          font-size: 20px;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.4px;
        }
        .sec-pillar-desc {
          font-size: 14.5px;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
          max-width: 480px;
        }

        @media (max-width: 860px) {
          .sec-pillars-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 1024px) {
          .sec-cloud-mesh-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .sec-cloud-mesh-right {
            justify-content: center;
            flex-wrap: wrap;
          }
        }
        @media (max-width: 640px) {
          .sec-cloud-mesh-right {
            flex-direction: column;
          }
          .sec-cm-floating-stack {
            width: 100%;
          }
        }

        /* ── 4. 24/7 Cloud & Threat Monitoring Section ── */
        .sec-monitor-section {
          padding: 120px 24px 100px;
          background: #ffffff;
          color: #0f172a;
          border-top: 1px solid #f1f5f9;
          position: relative;
        }
        .sec-monitor-container {
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 80px;
        }
        .sec-monitor-main-row {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 70px;
          align-items: center;
        }
        .sec-monitor-visual-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .sec-monitor-console-card {
          width: 100%;
          max-width: 480px;
          background: #090d16;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 28px;
          padding: 22px;
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
          box-sizing: border-box;
          color: #ffffff;
        }
        .sec-console-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 12px;
        }
        .sec-console-dots {
          display: flex;
          gap: 6px;
        }
        .sec-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
        }
        .sec-dot.d-red { background: #ef4444; }
        .sec-dot.d-yellow { background: #f59e0b; }
        .sec-dot.d-green { background: #10b981; }
        .sec-console-title {
          color: #94a3b8;
          font-size: 11px;
          font-weight: 700;
        }
        .sec-console-status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 9px;
          color: #10b981;
          font-weight: 700;
        }
        .sec-status-ping {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          display: inline-block;
          box-shadow: 0 0 6px #10b981;
          animation: secPing 1.5s infinite;
        }
        @keyframes secPing {
          0% { transform: scale(0.9); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(0.9); opacity: 0.6; }
        }
        .sec-console-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
        .sec-cstat-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 10px 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .sec-cstat-val {
          font-size: 13.5px;
          font-weight: 700;
        }
        .sec-cstat-val.text-green {
          color: #10b981;
        }
        .sec-cstat-lbl {
          font-size: 8.5px;
          color: #64748b;
          text-align: center;
          font-weight: 600;
        }
        .sec-console-graph {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 14px;
          padding: 10px;
          position: relative;
          height: 85px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .sec-wave-svg {
          width: 100%;
          height: 50px;
          overflow: visible;
        }
        .sec-graph-indicator {
          font-size: 8.5px;
          color: #475569;
          font-weight: 700;
          margin-top: 6px;
          display: block;
        }
        .sec-console-terminal {
          background: #05070c;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 14px;
          padding: 12px 14px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 9px;
          color: #94a3b8;
          height: 105px;
          overflow-y: hidden;
          text-align: left;
        }
        .sec-terminal-line {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .term-t { color: #475569; }
        .term-inf { color: #3b82f6; font-weight: 700; }
        .term-warn { color: #f59e0b; font-weight: 700; }
        .term-ok { color: #10b981; font-weight: 700; }
        .sec-monitor-content-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .sec-mon-tag {
          font-size: 12.5px;
          font-weight: 800;
          color: #94a3b8;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: inline-block;
        }
        .sec-mon-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 850;
          color: #0f172a;
          line-height: 1.1;
          letter-spacing: -1px;
          margin: 0 0 24px;
        }
        .sec-mon-desc {
          font-size: 16px;
          color: #475569;
          line-height: 1.65;
          max-width: 520px;
          margin: 0 0 36px;
        }
        .sec-mon-actions-row {
          display: flex;
          align-items: center;
          gap: 28px;
          flex-wrap: wrap;
        }
        .sec-mon-btn-dark {
          background: #111827;
          color: #ffffff !important;
          font-size: 15.5px;
          font-weight: 700;
          padding: 15px 38px;
          border-radius: 9999px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 15px rgba(17, 24, 39, 0.2);
          transition: all 0.2s ease;
        }
        .sec-mon-btn-dark:hover {
          background: #000000;
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(17, 24, 39, 0.35);
        }
        .sec-mon-phone-widget {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          transition: transform 0.2s ease;
        }
        .sec-mon-phone-widget:hover {
          transform: translateY(-1px);
        }
        .sec-mon-phone-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #fff5f5;
          border: 1.5px solid #fed7aa;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(240, 78, 35, 0.15);
        }
        .sec-mon-phone-number {
          font-size: 16px;
          font-weight: 800;
          color: #111827;
          letter-spacing: -0.2px;
        }

        /* 4 Big Numbers Metrics Grid */
        .sec-monitor-stats-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          padding-top: 50px;
          border-top: 1px solid #f1f5f9;
          text-align: center;
        }
        .sec-mon-stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .sec-mon-stat-giant {
          font-size: clamp(52px, 6vw, 76px);
          font-weight: 800;
          color: #edd5c5;
          line-height: 1;
          letter-spacing: -2px;
          font-variant-numeric: tabular-nums;
        }
        .sec-mon-stat-caption {
          font-size: 14px;
          font-weight: 600;
          color: #475569;
          letter-spacing: -0.2px;
        }

        @media (max-width: 1024px) {
          .sec-monitor-main-row {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .sec-monitor-stats-bar {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px 24px;
          }
        }
        @media (max-width: 640px) {
          .sec-monitor-stats-bar {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

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
          .sec-module-left {
            align-items: center;
            text-align: center;
          }
          .sec-mtag-row {
            justify-content: center;
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
          .sec-cloud-mesh-left {
            align-items: center;
            text-align: center;
          }
          .sec-cm-desc {
            margin-left: auto;
            margin-right: auto;
          }
          .sec-cm-stats-grid {
            justify-content: center;
          }
          .sec-cm-btn-wrap {
            justify-content: center;
          }
          .sec-monitor-content-col {
            align-items: center;
            text-align: center;
          }
          .sec-mon-desc {
            margin-left: auto;
            margin-right: auto;
          }
          .sec-mon-actions-row {
            justify-content: center;
          }
        }

        /* ── Why Palo Alto Networks Section (White Theme) ── */
        .sec-why-section {
          background: #ffffff;
          color: #0f172a;
          padding: 100px 24px 80px;
          position: relative;
          overflow: hidden;
          border-top: 1px solid #f1f5f9;
        }
        .sec-why-radar-bg {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 1200px;
          height: 600px;
          pointer-events: none;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          z-index: 1;
        }
        .sec-why-arc {
          position: absolute;
          border-radius: 50%;
          bottom: -40px;
          border-style: solid;
        }
        .arc-1 {
          width: 950px;
          height: 950px;
          border-width: 1.5px;
          border-color: rgba(229, 9, 20, 0.12);
        }
        .arc-2 {
          width: 680px;
          height: 680px;
          border-width: 1.5px;
          border-color: rgba(229, 9, 20, 0.22);
        }
        .arc-3 {
          width: 420px;
          height: 420px;
          border-width: 1.5px;
          border-color: rgba(229, 9, 20, 0.35);
        }
        .sec-why-arc-glow {
          position: absolute;
          bottom: -90px;
          width: 460px;
          height: 280px;
          border-radius: 50% 50% 0 0;
          background: radial-gradient(ellipse at bottom, rgba(229, 9, 20, 0.14) 0%, rgba(229, 9, 20, 0.05) 50%, transparent 75%);
          filter: blur(35px);
          opacity: 0.9;
        }
        .sec-why-container {
          max-width: 1240px;
          margin: 0 auto;
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .sec-why-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(30px, 4.2vw, 46px);
          font-weight: 850;
          color: #0f172a;
          text-align: center;
          margin: 0 0 64px;
          letter-spacing: -1px;
        }
        .sec-why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          width: 100%;
          margin-bottom: 56px;
        }
        .sec-why-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 34px 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          box-shadow: 0 12px 35px rgba(15, 23, 42, 0.05), 0 2px 6px rgba(15, 23, 42, 0.02);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .sec-why-card:hover {
          transform: translateY(-5px);
          border-color: #fca5a5;
          box-shadow: 0 20px 45px rgba(229, 9, 20, 0.09);
        }
        .sec-why-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .sec-why-icon-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #fef2f2;
          border: 1.5px solid #fecaca;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #dc2626;
          flex-shrink: 0;
        }
        .sec-why-stat {
          font-size: 17.5px;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          line-height: 1.32;
        }
        .sec-why-card-desc {
          font-size: 14.5px;
          color: #475569;
          line-height: 1.65;
          margin: 0;
        }
        .sec-why-center-node-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 90px;
          height: 90px;
          margin-top: 10px;
          z-index: 4;
        }
        .sec-why-node-ring {
          position: absolute;
          width: 82px;
          height: 82px;
          border-radius: 50%;
          border: 1.5px solid rgba(229, 9, 20, 0.35);
          box-shadow: 0 0 20px rgba(229, 9, 20, 0.15);
        }
        .sec-why-node-btn {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #ff4d4d, #dc2626 80%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 25px rgba(229, 9, 20, 0.4);
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .sec-why-node-btn:hover {
          transform: scale(1.08);
        }

        /* ── AI Transformation & Threat Intel Section (Optimized White Theme) ── */
        .sec-intel-section {
          padding: 120px 24px 100px;
          background: #ffffff;
          color: #0f172a;
          border-top: 1px solid #f1f5f9;
          position: relative;
          overflow: hidden;
        }
        .sec-intel-container {
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 70px;
          align-items: start;
        }
        .sec-intel-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .sec-intel-tag-good {
          color: #e50914;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: inline-block;
        }
        .sec-intel-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 850;
          color: #0f172a;
          line-height: 1.06;
          letter-spacing: -1px;
          margin: 0 0 52px;
        }
        .sec-intel-bars-wrap {
          display: flex;
          flex-direction: column;
          gap: 34px;
          width: 100%;
          max-width: 540px;
        }
        .sec-intel-bar-item {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .sec-intel-bar-label {
          font-size: 15px;
          font-weight: 700;
          color: #334155;
          letter-spacing: -0.2px;
        }
        .sec-intel-bar-row {
          display: flex;
          align-items: center;
          gap: 22px;
        }
        .sec-intel-progress-track {
          flex: 1;
          height: 18px;
          background: #f1f5f9;
          border-radius: 100px;
          overflow: hidden;
          position: relative;
          border: 1px solid #e2e8f0;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.04);
        }

        .sec-intel-progress-fill {
          height: 100%;
          border-radius: 100px;
          background: linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%);
          box-shadow: 0 0 14px rgba(59, 130, 246, 0.4);
          transition: width 1s ease-in-out;
        }
        .sec-intel-progress-fill.p-fill-98 {
          background: linear-gradient(90deg, #0d9488 0%, #06b6d4 50%, #22d3ee 100%);
          box-shadow: 0 0 14px rgba(6, 182, 212, 0.4);
        }
        .sec-intel-progress-fill.p-fill-85 {
          background: linear-gradient(90deg, #059669 0%, #10b981 50%, #34d399 100%);
          box-shadow: 0 0 14px rgba(16, 185, 129, 0.4);
        }
        .sec-intel-progress-fill.p-fill-100 {
          background: linear-gradient(90deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%);
          box-shadow: 0 0 14px rgba(59, 130, 246, 0.4);
        }

        .sec-intel-bar-pct {
          font-size: 30px;
          font-weight: 800;
          color: #0f172a;
          min-width: 75px;
          letter-spacing: -0.8px;
        }
        .sec-intel-right {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }
        .sec-intel-gauges-row {
          display: flex;
          gap: 36px;
          align-items: flex-start;
          justify-content: space-around;
        }
        .sec-intel-gauge-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 18px;
          flex: 1;
        }
        .sec-intel-circle-wrap {
          position: relative;
          width: 150px;
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sec-gauge-svg {
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
        }
        .sec-gauge-track {
          fill: none;
          stroke: #f1f5f9;
          stroke-width: 13;
        }
        .sec-gauge-fill {
          fill: none;
          stroke: #10b981;
          stroke-width: 13;
          stroke-linecap: round;
          stroke-dasharray: 314.159;
          transition: stroke-dashoffset 1s ease;
        }
        .sec-gauge-fill.fill-orange {
          stroke: #f04e23;
        }
        .sec-gauge-number {
          position: absolute;
          font-size: 30px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.6px;
        }
        .sec-gauge-number.text-green {
          color: #10b981;
        }
        .sec-intel-subtitle-text {
          font-size: 15.5px;
          color: #475569;
          line-height: 1.65;
          max-width: 500px;
          margin: 0 0 40px;
        }
        .sec-gauge-caption {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .sec-gauge-caption strong {
          font-size: 16.5px;
          color: #0f172a;
          font-weight: 800;
        }
        .sec-gauge-caption span {
          font-size: 14px;
          color: #64748b;
          line-height: 1.45;
        }
        .sec-intel-bad-card {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border: 1.5px solid #e2e8f0;
          border-radius: 22px;
          padding: 40px 36px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          box-shadow: 0 15px 40px rgba(15, 23, 42, 0.05), 0 2px 6px rgba(15, 23, 42, 0.02);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .sec-intel-bad-card:hover {
          transform: translateY(-4px);
          border-color: #cbd5e1;
          box-shadow: 0 20px 48px rgba(15, 23, 42, 0.08);
        }
        .sec-intel-tag-bad {
          color: #e50914;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .sec-intel-bad-title {
          font-size: 24px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.35;
          margin: 0;
          letter-spacing: -0.6px;
        }

        @media (max-width: 1024px) {
          .sec-why-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .sec-intel-container {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
        @media (max-width: 640px) {
          .sec-intel-gauges-row {
            flex-direction: column;
            gap: 28px;
          }
          .sec-caps-grid, .sec-standards-grid, .sec-process-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .sec-monitor-console-card {
            padding: 16px !important;
            gap: 12px !important;
            border-radius: 20px !important;
          }
          .sec-console-stats {
            gap: 6px !important;
          }
          .sec-cstat-box {
            padding: 8px 4px !important;
            border-radius: 8px !important;
          }
          .sec-cstat-val {
            font-size: 11px !important;
          }
          .sec-cstat-lbl {
            font-size: 8px !important;
          }
          .sec-console-terminal {
            height: 90px !important;
            padding: 10px !important;
          }
        }
      ` }} />
    </div>
  );
}
