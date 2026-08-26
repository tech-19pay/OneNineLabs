import Link from "next/link";

const PRIMARY = "#059669";

const heroChecks = [
  { title: "Zero-Trust by Default", desc: "Identity-aware access. No implicit trust, anywhere." },
  { title: "SOC 2 / ISO Ready", desc: "Policies, evidence and auditor walkthroughs included." },
  { title: "Offensive + Defensive", desc: "Pentests, hardening and 24/7 SOC in one team." },
  { title: "15-Minute IR SLA", desc: "Real-time triage and containment, not a ticket queue." },
];

const marqueeItems = [
  "AWS", "GCP", "Azure", "Cloudflare", "Kubernetes", "Terraform",
  "OWASP", "SOC 2", "ISO 27001", "NIST", "Vanta", "Drata", "Wiz", "CrowdStrike",
];

const stats = [
  { num: "15m", label: "Incident Triage SLA" },
  { num: "6–8w", label: "SOC 2 Readiness" },
  { num: "0", label: "Criticals at Launch" },
];

const services = [
  { icon: "🎯", title: "Penetration Testing", desc: "Black-box and white-box assessments of web, mobile, APIs and cloud — OWASP Top 10, auth bypass, privilege escalation and business-logic flaws, plus a free re-test.", tags: ["Web / API", "Cloud", "Re-test"] },
  { icon: "🛡️", title: "Zero-Trust Architecture", desc: "Replace legacy VPNs with identity-aware ZTNA, least-privilege IAM, mTLS microsegmentation and hardware-backed KMS encryption across every workload.", tags: ["ZTNA", "IAM", "mTLS"] },
  { icon: "📋", title: "SOC 2 & ISO 27001", desc: "Policies, technical controls, Vanta/Drata evidence collection and auditor accompaniment until the certificate is issued — typically 6–8 weeks to audit-ready.", tags: ["SOC 2 Type II", "ISO 27001"] },
  { icon: "📡", title: "24/7 SOC & SIEM", desc: "Continuous ingestion from CloudTrail, Kubernetes, identity and APIs with automated detection and a sub-15-minute incident triage SLA.", tags: ["SIEM", "Detection", "IR"] },
  { icon: "☁️", title: "Cloud Security Posture", desc: "AWS, GCP, Azure and Cloudflare hardening — CIS benchmarks, GuardDuty/Security Command Center, least-privilege IAM and IaC guardrails.", tags: ["AWS", "GCP", "Azure"] },
  { icon: "🔑", title: "Identity & Access", desc: "SSO (Okta, Azure AD, Google), just-in-time elevation, session expiry, hardware keys and break-glass procedures that auditors actually accept.", tags: ["SSO", "JIT", "Hardware Keys"] },
  { icon: "🧬", title: "Vulnerability Management", desc: "Continuous scanning, prioritized remediation and AI-assisted hunting so pentesting is not an annual checkbox — findings tracked to close.", tags: ["Scanning", "Prioritization"] },
  { icon: "🚨", title: "Incident Response", desc: "Playbooks, tabletop exercises, containment runbooks and forensics. When something fires, we are already on the call.", tags: ["Playbooks", "Forensics"] },
];

const stackDimensions = [
  {
    n: "LAYER 01",
    accent: "linear-gradient(90deg, #059669, #34d399)",
    color: "#059669",
    title: "Identity & Perimeter",
    means: "SSO, ZTNA, least-privilege IAM and hardware-backed keys — no flat networks, no standing admin.",
    matters: "Most breaches start with a stolen credential or an over-privileged role. This layer removes both.",
  },
  {
    n: "LAYER 02",
    accent: "linear-gradient(90deg, #0ea5e9, #38bdf8)",
    color: "#0284c7",
    title: "Workload & Data",
    means: "KMS encryption, mTLS between services, secrets rotation and CIS-hardened cloud baselines.",
    matters: "Even if an attacker lands, they cannot move laterally or read data without another key.",
  },
  {
    n: "LAYER 03",
    accent: "linear-gradient(90deg, #7c3aed, #a78bfa)",
    color: "#6d28d9",
    title: "Detect & Respond",
    means: "SIEM, 24/7 SOC, detections tuned to your stack and a 15-minute containment SLA.",
    matters: "Prevention fails. Detection speed is what decides whether an incident is a footnote or a headline.",
  },
];

const concerns = [
  {
    icon: "🔍",
    tint: "rgba(5,150,105,0.1)",
    labelColor: PRIMARY,
    title: "What a real pentest covers",
    question: "Is this just an automated scan we could run ourselves?",
    answer: "No. We combine automated scanners with manual black-box and white-box review of web, mobile, APIs and cloud. We hunt business-logic flaws, auth bypass and privilege escalation — then we re-test every fix.",
  },
  {
    icon: "📑",
    tint: "rgba(14,165,233,0.1)",
    labelColor: "#0284c7",
    title: "Audit timelines",
    question: "How fast can we be SOC 2 Type II or ISO 27001 ready?",
    answer: "Most teams are audit-ready in 6–8 weeks. We draft policies, wire technical controls on AWS/GCP/Azure, plug Vanta or Drata into evidence collection and sit with your auditor until the letter is issued.",
  },
  {
    icon: "🌐",
    tint: "rgba(124,58,237,0.1)",
    labelColor: "#7c3aed",
    title: "Clouds we secure",
    question: "Do you only work on AWS?",
    answer: "We harden AWS, GCP, Azure, Cloudflare and on-prem Kubernetes. Infrastructure is declared in Terraform / OpenTofu so every control is reviewable and repeatable.",
  },
];

const processSteps = [
  { num: "01", title: "Threat & Scope Review", desc: "We map your attack surface, compliance targets and crown-jewel systems, then issue a fixed, itemized proposal.", metric: "48h proposal" },
  { num: "02", title: "Baseline & Architecture", desc: "Identity, network, encryption and logging design — signed off before we change production.", metric: "Threat model" },
  { num: "03", title: "Hardening Sprints", desc: "Weekly control delivery: IAM, ZTNA, CIS baselines, secrets, backups and detection rules.", metric: "Weekly demos" },
  { num: "04", title: "Pentest & Remediation", desc: "Offensive assessment, prioritized findings, fixes and a free re-test until criticals are gone.", metric: "0 critical" },
  { num: "05", title: "Evidence & Audit", desc: "SOC 2 / ISO packages, Vanta/Drata wiring and auditor Q&A until the certificate lands.", metric: "Audit-ready" },
  { num: "06", title: "Monitor & Respond", desc: "24/7 SIEM, on-call IR and quarterly tabletop exercises under a written SLA.", metric: "15m SLA" },
];

const faqs = [
  { q: "What is included in a OneNineLabs penetration test?", a: "Black-box and white-box coverage of web apps, mobile, REST/GraphQL APIs and cloud infrastructure. We test the OWASP Top 10, authentication bypass, privilege escalation, business-logic flaws and supply-chain issues, then deliver a remediation report and a free re-test." },
  { q: "How fast can you prepare us for SOC 2 Type II or ISO 27001?", a: "Most platforms are audit-ready in 6–8 weeks. We draft the policies, configure technical controls, integrate Vanta or Drata for evidence and stay with your team through the auditor evaluation." },
  { q: "What is Zero-Trust and how does it protect our cloud?", a: "Never trust, always verify. We retire legacy VPNs for identity-aware ZTNA, least-privilege IAM with session expiry, mTLS microsegmentation and hardware-backed KMS encryption." },
  { q: "Do you provide 24/7 monitoring and incident response?", a: "Yes. Our SIEM and SOC ingest CloudTrail, Kubernetes and API logs continuously. Automated detection plus a sub-15-minute triage and containment SLA." },
  { q: "Which clouds and environments do you support?", a: "AWS, GCP, Azure, Cloudflare and on-prem Kubernetes, declared in Terraform / OpenTofu so every control is versioned." },
  { q: "How do you prove compliance to enterprise buyers?", a: "Audit-ready SOC 2 / ISO evidence packs, cryptographic trails, executive summaries and pentest verification letters you can share with prospects." },
];

const pill = {
  background: "#f8fafc", color: "#475569", border: "1px solid #e2e8f0",
  padding: "3px 9px", borderRadius: "99px", fontSize: "11px", fontWeight: "700",
};

function MockTerminal({ title, titleColor, children, status, statusColor }) {
  return (
    <div className="dashboard-mockup" style={{ background: "#0f172a", border: "1px solid #1e293b" }}>
      <div className="mockup-header" style={{ borderBottom: "1px solid #334155" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ef4444" }} />
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f59e0b" }} />
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} />
          <span className="mockup-title" style={{ color: titleColor, fontFamily: "monospace", fontSize: "7px" }}>{title}</span>
        </div>
      </div>
      <div className="mockup-body" style={{ height: "130px", display: "flex", flexDirection: "column", justifyContent: "space-between", fontFamily: "monospace", color: "#cbd5e1" }}>
        <div style={{ fontSize: "6.5px", lineHeight: "1.5" }}>{children}</div>
        <div style={{ background: "#1e293b", padding: "4px 6px", borderRadius: "4px", fontSize: "6px", border: "1px solid #334155" }}>
          <span style={{ color: statusColor }}>{status}</span>
        </div>
      </div>
    </div>
  );
}

export default function SecurityPageClean() {
  return (
    <div className="vd-wrap" style={{ fontFamily: "'Inter', sans-serif" }}>

      <section style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 45%, #ecfdf5 100%)",
        padding: "115px 24px 140px 24px",
        borderBottom: "1px solid #f1f5f9",
        position: "relative",
        overflow: "hidden",
      }}>
        <div className="sec-hero-grid" style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "56px", alignItems: "center" }}>
          <div style={{ textAlign: "left", zIndex: 2 }}>
            <div className="vd-badge-tag" style={{ color: PRIMARY, background: "rgba(5,150,105,0.08)", borderColor: "rgba(5,150,105,0.25)" }}>Cloud &amp; Cyber Security</div>
            <h1 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(32px, 4.2vw, 48px)", fontWeight: "800", color: "#1e1b4b",
              lineHeight: "1.12", letterSpacing: "-1.5px", marginBottom: "20px",
            }}>
              Zero-trust defense &amp; <span className="sec-highlight">audit-ready security</span> for cloud products
            </h1>
            <p style={{ fontSize: "16px", color: "#475569", lineHeight: "1.7", marginBottom: "36px", maxWidth: "560px", fontWeight: "500" }}>
              Penetration testing, SOC 2 / ISO 27001, identity-aware Zero-Trust and a 24/7 SOC — one senior team that hardens your stack and stays on the line when it matters.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "48px" }}>
              <Link href="/contact" className="sec-btn-dark">Book a Security Review →</Link>
              <a href="#capabilities" className="sec-btn-ghost">Explore Capabilities</a>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", maxWidth: "600px" }}>
              {heroChecks.map((item) => (
                <div key={item.title} className="sec-check-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                    <span style={{ color: "#10b981", fontWeight: "900", fontSize: "14px" }}>✓</span>
                    <h4 style={{ fontSize: "14px", fontWeight: "800", color: "#1e1b4b", margin: 0 }}>{item.title}</h4>
                  </div>
                  <p style={{ fontSize: "12px", color: "#64748b", margin: 0, lineHeight: "1.5" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center", position: "relative", zIndex: 2 }}>
            <div className="sec-console-wrap" style={{ background: "#ffffff", borderRadius: "28px", padding: "16px", boxShadow: "0 25px 60px rgba(5,150,105,0.12)", maxWidth: "420px", width: "100%" }}>
              <div style={{ background: "#0f172a", borderRadius: "20px", padding: "18px", color: "#ffffff", border: "1px solid #1e293b" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: "800" }}>SOC Live</div>
                    <div style={{ fontSize: "10px", color: "#94a3b8" }}>oneninelabs · production</div>
                  </div>
                  <span style={{ fontSize: "10px", background: "rgba(16,185,129,0.15)", color: "#34d399", padding: "5px 10px", borderRadius: "99px", fontWeight: "800" }}>● 0 critical</span>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "14px" }}>
                  {[
                    ["Findings", "12 · 0 crit"],
                    ["MTTD", "4m 12s"],
                    ["SOC 2", "Ready"],
                    ["Uptime", "99.99%"],
                  ].map((c) => (
                    <div key={c[0]} style={{ background: "#111827", border: "1px solid #1f2937", borderRadius: "12px", padding: "10px" }}>
                      <div style={{ fontSize: "9px", color: "#94a3b8", fontWeight: "700" }}>{c[0]}</div>
                      <div style={{ fontSize: "14px", fontWeight: "900", marginTop: "4px" }}>{c[1]}</div>
                    </div>
                  ))}
                </div>

                <div style={{ fontSize: "9.5px", fontWeight: "800", color: "#94a3b8", marginBottom: "8px", letterSpacing: "0.6px" }}>RECENT SIGNALS</div>
                {[
                  { ok: true, t: "IAM least-privilege pass", s: "just now" },
                  { ok: true, t: "GuardDuty: no anomalies", s: "2m ago" },
                  { ok: false, t: "Open S3 ACL — auto-remediated", s: "18m ago" },
                ].map((r) => (
                  <div key={r.t} style={{ display: "flex", alignItems: "center", gap: "10px", background: "#111827", border: "1px solid #1f2937", borderRadius: "10px", padding: "9px 10px", marginBottom: "7px" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: r.ok ? "#34d399" : "#fbbf24", flexShrink: 0 }} />
                    <div style={{ flex: 1, fontSize: "11px", fontWeight: "700" }}>{r.t}</div>
                    <span style={{ fontSize: "9px", color: "#64748b" }}>{r.s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sec-float-chip" style={{ position: "absolute", left: "-12px", top: "48px", background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "12px 16px", boxShadow: "0 16px 40px rgba(15,23,42,0.12)", display: "flex", alignItems: "center", gap: "10px", zIndex: 3 }}>
              <span style={{ fontSize: "20px" }}>🛡️</span>
              <div>
                <div style={{ fontSize: "12px", fontWeight: "900", color: "#0f172a" }}>Zero-Trust On</div>
                <div style={{ fontSize: "10px", color: "#64748b", fontWeight: "600" }}>ZTNA · mTLS · KMS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="vd-hero-stats-bar" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        {stats.map((s) => (
          <div className="vd-stat-item" key={s.label}>
            <div className="num">{s.num}</div>
            <div className="lbl">{s.label}</div>
          </div>
        ))}
      </div>

      <section className="vd-marquee-section" style={{ marginTop: "56px" }}>
        <div className="vd-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span className="vd-marquee-item" key={`${item}-${i}`}><span className="sep">◆</span>{item}</span>
          ))}
        </div>
      </section>

      <section id="capabilities" style={{ background: "#f8fafc", padding: "88px 24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ textAlign: "center", marginBottom: "48px", maxWidth: "760px" }}>
          <span style={{ fontSize: "13px", fontWeight: "900", letterSpacing: "2.5px", textTransform: "uppercase", color: "#0f172a", display: "block", marginBottom: "12px" }}>OUR CAPABILITIES</span>
          <h2 style={{ fontSize: "clamp(28px, 4.5vw, 48px)", fontWeight: "900", color: "#0f172a", lineHeight: "1.1", letterSpacing: "-1px", margin: "0 0 12px 0" }}>Offense, Defense &amp; Compliance</h2>
          <p style={{ color: "#475569", fontSize: "16px", fontWeight: "600", margin: 0 }}>We break it, we harden it, we prove it to auditors — then we stay on watch.</p>
        </div>

        <div className="reports-grid">
          <div className="report-card">
            <MockTerminal title="pentest.sh — engagement day 4" titleColor="#34d399" status="✓ 0 critical • 3 medium queued for fix" statusColor="#4ade80">
              <span style={{ color: "#4ade80" }}>$ nmap + manual review</span><br />
              <span style={{ color: "#64748b" }}>{"// auth, IDOR, SSRF, IAM"}</span><br />
              <span style={{ color: "#facc15" }}>finding</span>.<span style={{ color: "#38bdf8" }}>severity</span> = <span style={{ color: "#4ade80" }}>&quot;medium&quot;</span><br />
              <span style={{ color: "#c084fc" }}>retest</span>(fix) → <span style={{ color: "#4ade80" }}>closed</span>
            </MockTerminal>
            <h3 className="card-title">Penetration Testing</h3>
            <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: "1.6", margin: "0 0 18px 0" }}>
              Manual + automated coverage of web, mobile, APIs and cloud — with a written report and a free re-test.
            </p>
            <div className="card-buttons">
              <Link href="#services" className="btn-details">View details</Link>
              <Link href="/contact" className="btn-preview">Book a pentest</Link>
            </div>
          </div>

          <div className="report-card">
            <MockTerminal title="zero-trust.yaml — ZTNA" titleColor="#38bdf8" status="🔒 VPN retired • identity-aware access live" statusColor="#38bdf8">
              <span style={{ color: "#c084fc" }}>policy</span>:<br />
              &nbsp;&nbsp;mode: <span style={{ color: "#4ade80" }}>never-trust</span><br />
              &nbsp;&nbsp;mTLS: <span style={{ color: "#38bdf8" }}>true</span><br />
              &nbsp;&nbsp;jit_admin: <span style={{ color: "#38bdf8" }}>15m</span>
            </MockTerminal>
            <h3 className="card-title">Zero-Trust Architecture</h3>
            <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: "1.6", margin: "0 0 18px 0" }}>
              Identity-aware access, least-privilege IAM and mTLS — no implicit trust on the network.
            </p>
            <div className="card-buttons">
              <Link href="#services" className="btn-details">View details</Link>
              <Link href="/contact" className="btn-preview">Design ZTNA</Link>
            </div>
          </div>

          <div className="report-card">
            <MockTerminal title="soc2.evidence — Vanta" titleColor="#a78bfa" status="✓ 94 controls mapped • auditor packet ready" statusColor="#a78bfa">
              <span style={{ color: "#4ade80" }}>✓ CC6.1 access control</span><br />
              <span style={{ color: "#4ade80" }}>✓ CC7.2 monitoring</span><br />
              <span style={{ color: "#4ade80" }}>✓ A1.2 backups tested</span><br />
              <span style={{ color: "#38bdf8" }}>export</span>(<span style={{ color: "#4ade80" }}>&quot;auditor.zip&quot;</span>)
            </MockTerminal>
            <h3 className="card-title">SOC 2 &amp; ISO 27001</h3>
            <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: "1.6", margin: "0 0 18px 0" }}>
              Policies, technical controls and evidence collection — typically audit-ready in 6–8 weeks.
            </p>
            <div className="card-buttons">
              <Link href="#services" className="btn-details">View details</Link>
              <Link href="/contact" className="btn-preview">Start readiness</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="services" style={{ background: "#ffffff", padding: "104px 24px", borderBottom: "1px solid #f1f5f9", textAlign: "center" }}>
        <div className="vd-badge-tag" style={{ marginLeft: "auto", marginRight: "auto", color: PRIMARY, background: "rgba(5,150,105,0.1)", borderColor: "rgba(5,150,105,0.25)" }}>Full-Stack Security</div>
        <h2 className="vd-section-h2">Cloud &amp; Cyber Security Services</h2>
        <p className="vd-section-p" style={{ maxWidth: "640px", marginLeft: "auto", marginRight: "auto" }}>
          From the first threat model to a signed SOC 2 letter and a staffed SOC — one team owns the whole loop.
        </p>

        <div className="vd-results-grid">
          {services.map((s, i) => (
            <div className="vd-result-card" key={s.title} style={{ textAlign: "left" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <div className="vd-result-num" style={{ marginBottom: 0 }}>{String(i + 1).padStart(2, "0")}</div>
                <div style={{ fontSize: "22px" }}>{s.icon}</div>
              </div>
              <div className="vd-result-label">{s.title}</div>
              <div className="vd-result-desc">
                {s.desc}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "16px", paddingTop: "16px", borderTop: "1px dashed #e2e8f0" }}>
                  {s.tags.map((t) => <span key={t} style={pill}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#f8fafc", padding: "96px 24px", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ width: "24px", height: "6px", background: PRIMARY, borderRadius: "3px" }} />
            <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: "900", color: "#0f172a", margin: 0, letterSpacing: "-0.5px" }}>Defense in Three Layers</h2>
          </div>
          <p style={{ fontSize: "16px", color: "#475569", marginBottom: "52px", maxWidth: "800px", lineHeight: "1.7" }}>
            Identity, workload and detection — stacked so a single failure never becomes a breach.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {stackDimensions.map((d) => (
              <div key={d.n} className="sec-dim-card">
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "4px", background: d.accent }} />
                <div style={{ fontSize: "11px", color: d.color, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px", fontWeight: "800" }}>{d.n}</div>
                <h3 style={{ fontSize: "22px", fontWeight: "800", margin: "0 0 24px 0", color: "#0f172a" }}>{d.title}</h3>
                <div style={{ height: "1px", background: "#f1f5f9", width: "100%", marginBottom: "24px" }} />
                <div style={{ fontSize: "12px", color: "#94a3b8", fontWeight: "700", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>What It Means</div>
                <p style={{ fontSize: "14.5px", color: "#475569", margin: "0 0 24px 0", lineHeight: "1.6" }}>{d.means}</p>
                <div style={{ fontSize: "12px", color: "#94a3b8", fontWeight: "700", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Why It Matters</div>
                <p style={{ fontSize: "14.5px", color: "#0f172a", margin: 0, lineHeight: "1.6", fontWeight: "500" }}>{d.matters}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "96px 24px" }}>
        <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ width: "24px", height: "6px", background: PRIMARY, borderRadius: "3px" }} />
            <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: "900", color: "#0f172a", margin: 0, letterSpacing: "-0.5px" }}>Security Questions — Answered</h2>
          </div>
          <p style={{ fontSize: "16px", color: "#475569", marginBottom: "52px", maxWidth: "820px", lineHeight: "1.7" }}>
            The three conversations we have on every first call.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {concerns.map((c) => (
              <div key={c.title} className="sec-concern-row">
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: c.tint, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", flexShrink: 0 }}>{c.icon}</div>
                  <div style={{ fontSize: "16px", fontWeight: "800", color: "#0f172a", lineHeight: "1.3", letterSpacing: "-0.5px" }}>{c.title}</div>
                </div>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: "800", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>The Question</div>
                  <p style={{ fontSize: "15px", color: "#475569", lineHeight: "1.6", margin: 0 }}>{c.question}</p>
                </div>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: "800", color: c.labelColor, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>Our Solution</div>
                  <p style={{ fontSize: "15px", color: "#0f172a", lineHeight: "1.6", margin: 0, fontWeight: "500" }}>{c.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vd-process-section" style={{ padding: "104px 24px 90px", background: "#f8fafc" }}>
        <div className="vd-badge-tag" style={{ marginLeft: "auto", marginRight: "auto", color: PRIMARY, background: "rgba(5,150,105,0.1)", borderColor: "rgba(5,150,105,0.25)" }}>Delivery Process</div>
        <h2 className="vd-section-h2">From Threat Model to Signed Audit</h2>
        <p className="vd-section-p" style={{ maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
          Fixed milestones. No hourly surprises. You always know what ships next.
        </p>

        <div className="vd-process-timeline-v2">
          <div className="vt-line" />
          {processSteps.map((step, idx) => {
            const isRight = idx % 2 === 1;
            return (
              <div className={`vt-item ${isRight ? "vt-right" : "vt-left"}`} key={step.num}>
                <div className="vt-dot" />
                <div className="vt-content">
                  <span className="vt-step-badge" style={{ color: PRIMARY, background: "rgba(5,150,105,0.08)" }}>Step {step.num}</span>
                  <h3 className="vt-title">{step.title}</h3>
                  <p className="vt-desc">{step.desc}</p>
                </div>
                <div className="vt-visual">
                  <div className="vt-image-container" style={{ background: "linear-gradient(135deg, #ecfdf5, #d1fae5)" }}>
                    <div style={{ background: "#ffffff", borderRadius: "16px", border: "1px solid #e2e8f0", padding: "20px", width: "100%", maxWidth: "300px", boxShadow: "0 10px 30px rgba(15,23,42,0.06)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                        <span style={{ fontSize: "12px", fontWeight: "900", color: "#0f172a" }}>{step.title}</span>
                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981" }} />
                      </div>
                      <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "600" }}>Milestone</span>
                        <span style={{ fontSize: "12px", fontWeight: "900", color: PRIMARY }}>{step.metric}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#0f172a", textAlign: "center", marginBottom: "40px" }}>Security FAQs</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {faqs.map((f) => (
              <details key={f.q} style={{ background: "#ffffff", border: "1.5px solid #e2e8f0", borderRadius: "16px", padding: "18px 24px", cursor: "pointer" }}>
                <summary style={{ fontWeight: "700", color: "#0f172a", fontSize: "16px" }}>{f.q}</summary>
                <p style={{ color: "#64748b", marginTop: "12px", lineHeight: "1.65", fontSize: "14.5px" }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="vd-cta-section" id="get-started">
        <div className="vd-cta-inner">
          <div className="vd-badge-tag" style={{ marginLeft: "auto", marginRight: "auto" }}>Free Security Review</div>
          <div className="vd-cta-title">Need a pentest, SOC 2 or a SOC? <span>Let&apos;s scope it.</span></div>
          <p className="vd-cta-desc">
            Tell us your stack and compliance target. Within 48 hours you will get a threat-model sketch, a control gap list and a fixed, itemized proposal.
          </p>
          <div className="vd-cta-btns">
            <Link href="/contact" className="vd-btn-primary">Book Security Review →</Link>
            <Link href="/services" className="vd-btn-ghost">View All Services</Link>
          </div>
        </div>
      </section>

      <style>{`
        .sec-highlight {
          background: linear-gradient(135deg, #065f46, ${PRIMARY});
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .sec-btn-dark {
          background: #0f172a; color: #ffffff; font-weight: 700; border-radius: 12px;
          padding: 14px 28px; font-size: 15px; text-decoration: none;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.15);
          display: inline-flex; align-items: center; gap: 8px;
          border: 1.5px solid #0f172a; transition: all 0.25s ease;
        }
        .sec-btn-dark:hover { background: #ffffff; color: #0f172a; transform: translateY(-2px); }
        .sec-btn-ghost {
          background: #ffffff; color: #0f172a; font-weight: 700; border-radius: 12px;
          padding: 14px 28px; font-size: 15px; text-decoration: none;
          border: 1.5px solid #e2e8f0; display: inline-flex; align-items: center; transition: all 0.25s ease;
        }
        .sec-btn-ghost:hover { border-color: #0f172a; transform: translateY(-2px); }
        .sec-check-card {
          background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 16px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sec-check-card:hover { transform: translateY(-4px); border-color: #a7f3d0; box-shadow: 0 10px 24px rgba(15,23,42,0.04); }
        @keyframes secFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .sec-console-wrap { animation: secFloat 6s ease-in-out infinite; }
        @keyframes secChip { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
        .sec-float-chip { animation: secChip 5s ease-in-out 0.6s infinite; }

        .reports-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; max-width: 1200px; width: 100%; }
        .report-card {
          background: #ffffff; border-radius: 12px; padding: 24px;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
          display: flex; flex-direction: column;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }
        .report-card:hover { transform: translateY(-8px); box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }
        .dashboard-mockup { border-radius: 8px; padding: 12px; margin-bottom: 24px; }
        .mockup-header { display: flex; justify-content: space-between; align-items: center; padding-bottom: 8px; margin-bottom: 8px; }
        .card-title { font-size: 20px; font-weight: 700; color: #0f172a; margin: 0 0 10px 0; }
        .card-buttons { display: flex; gap: 12px; margin-top: auto; }
        .btn-details, .btn-preview {
          flex: 1; text-align: center; padding: 10px; border-radius: 6px;
          font-size: 13px; font-weight: 600; text-decoration: none;
          background: #ffffff; color: #475569; border: 1px solid #d1d5db;
        }
        .btn-details:hover, .btn-preview:hover { background: #f8fafc; color: #1e293b; }

        .sec-dim-card {
          background: #ffffff; border-radius: 24px; padding: 40px 32px;
          border: 1.5px solid #f1f5f9; box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          position: relative; overflow: hidden; transition: all 0.3s ease;
        }
        .sec-dim-card:hover { transform: translateY(-4px); box-shadow: 0 20px 44px rgba(15,23,42,0.07); }
        .sec-concern-row {
          background: #ffffff; border: 1.5px solid #f1f5f9; border-radius: 20px; padding: 32px;
          display: grid; grid-template-columns: 280px 1fr 1fr; gap: 40px; align-items: start;
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
        }
        .sec-concern-row:hover { border-color: #a7f3d0; }

        @media (max-width: 1024px) {
          .sec-hero-grid { grid-template-columns: 1fr !important; gap: 50px !important; }
          .reports-grid { grid-template-columns: 1fr; max-width: 560px; }
          .sec-concern-row { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </div>
  );
}
