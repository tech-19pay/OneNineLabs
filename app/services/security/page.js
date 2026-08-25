import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SecurityPageContent from "@/components/SecurityPageContent";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export const metadata = {
  title: "Cloud & Cyber Security — Threat Defense & SOC 2 Compliance | OneNineLabs",
  description: "Enterprise cloud & cybersecurity audits, zero-trust cloud architecture, penetration testing, SOC 2 Type II compliance, and real-time threat defense.",
  keywords: [
    "cloud security audit",
    "cybersecurity services",
    "penetration testing services",
    "SOC 2 Type II compliance",
    "zero trust architecture",
    "vulnerability scanner",
    "cloud cyber security",
    "ISO 27001 readiness"
  ],
  alternates: {
    canonical: "/services/security",
    languages: {
      "en-US": "/services/security",
      en: "/services/security",
      "hi-IN": "/services/security",
      "x-default": "/services/security",
    },
  },
  openGraph: {
    title: "Cloud & Cyber Security Readiness | OneNineLabs",
    description: "Zero-trust cloud architecture, penetration testing & real-time threat defense.",
    url: `${siteUrl}/services/security`,
    type: "website",
    images: [{ url: "/services/security_preview.png", width: 1200, height: 630, alt: "Cloud & Cyber Security by OneNineLabs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud & Cyber Security Readiness | OneNineLabs",
    description: "Zero-trust cloud architecture, penetration testing & real-time threat defense.",
    images: ["/services/security_preview.png"],
  },
  robots: { index: true, follow: true },
};

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

export default function SecurityServicePage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: "Cloud & Cyber Security", item: `${siteUrl}/services/security` },
    ],
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/security#service`,
    name: "Cloud & Cyber Security",
    serviceType: "Cloud and Cyber Security",
    url: `${siteUrl}/services/security`,
    description: "Enterprise cloud & cybersecurity audits, zero-trust cloud architecture, penetration testing, SOC 2 Type II compliance, and real-time threat defense.",
    provider: { "@type": "Organization", name: "OneNineLabs", url: siteUrl },
    areaServed: { "@type": "Country", name: "Worldwide" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Header variant="light" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&family=Inter:wght@400;500;600;700;800&display=swap');
        .sec-hero-grid { display:grid; grid-template-columns:1.1fr 1fr; gap:64px; align-items:center; max-width:1280px; margin:0 auto; }
        .sec-mini-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; max-width:580px; margin-top:36px; }
        .sec-mini-card { background:#f8fafc; border:1.5px solid #e8edf5; border-radius:14px; padding:16px 18px; }
        @keyframes sec-blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes sec-scan { 0%{top:0} 100%{top:100%} }
        @media(max-width:768px){ .sec-hero-grid{grid-template-columns:1fr!important;} .sec-hero-right{display:none!important;} }
      `}</style>

      <main style={{ minHeight: "100vh", background: "#ffffff" }}>

        {/* ── PREMIUM HERO ── */}
        <section style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f0f4ff 100%)",
          padding: "120px 24px 90px",
          fontFamily: "'Inter', sans-serif",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid #e8edf5",
        }}>
          {/* Soft accent blobs */}
          <div style={{ position:"absolute", top:"-60px", right:"-60px", width:"440px", height:"440px", background:"radial-gradient(circle, rgba(239,68,68,0.06) 0%, transparent 70%)", pointerEvents:"none" }} />
          <div style={{ position:"absolute", bottom:"-40px", left:"-40px", width:"320px", height:"320px", background:"radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)", pointerEvents:"none" }} />

          <div className="sec-hero-grid">

            {/* LEFT COLUMN */}
            <div style={{ zIndex: 2 }}>
              <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"rgba(239,68,68,0.08)", border:"1px solid rgba(239,68,68,0.18)", borderRadius:"100px", padding:"5px 16px", marginBottom:"20px" }}>
                <span style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#ef4444", display:"inline-block", animation:"sec-blink 1.6s ease-in-out infinite" }} />
                <span style={{ fontSize:"11px", fontWeight:"700", color:"#ef4444", letterSpacing:"0.8px", textTransform:"uppercase" }}>Cloud &amp; Cyber Security</span>
              </div>

              <h1 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(36px, 4.5vw, 56px)",
                fontWeight: "800",
                color: "#0f172a",
                lineHeight: "1.1",
                letterSpacing: "-1.5px",
                margin: "0 0 22px 0",
              }}>
                Zero-Trust Security &{" "}
                <span style={{ background:"linear-gradient(90deg, #ef4444, #f97316)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                  SOC 2 Compliance
                </span>
              </h1>

              <p style={{ fontSize:"16px", color:"#475569", lineHeight:"1.75", marginBottom:"36px", maxWidth:"540px", fontWeight:"500" }}>
                Enterprise cybersecurity audits, penetration testing, zero-trust cloud architecture, and SOC 2 Type II compliance — engineered to protect your infrastructure and accelerate enterprise sales.
              </p>

              <div style={{ display:"flex", gap:"16px", flexWrap:"wrap" }}>
                <a href="/contact" style={{
                  background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                  color: "#ffffff", fontWeight:"700", borderRadius:"12px",
                  padding:"14px 28px", fontSize:"15px", textDecoration:"none",
                  boxShadow:"0 10px 25px rgba(239,68,68,0.28)", display:"inline-flex",
                  alignItems:"center", gap:"8px", transition:"all 0.25s ease"
                }}>
                  Request Security Audit →
                </a>
                <a href="#security-modules" style={{
                  background:"#ffffff", color:"#0f172a", fontWeight:"700",
                  borderRadius:"12px", padding:"14px 28px", fontSize:"15px",
                  textDecoration:"none", border:"1.5px solid #e2e8f0",
                  boxShadow:"0 4px 12px rgba(0,0,0,0.03)", display:"inline-flex",
                  alignItems:"center", transition:"all 0.25s ease"
                }}>
                  View Security Modules
                </a>
              </div>

              {/* 2×2 Mini Feature Cards */}
              <div className="sec-mini-grid">
                {[
                  { icon:"🛡️", title:"Penetration Testing", desc:"OWASP Top 10, black-box & white-box audits." },
                  { icon:"📋", title:"SOC 2 / ISO 27001", desc:"6–8 week audit-ready compliance roadmap." },
                  { icon:"🔒", title:"Zero-Trust Architecture", desc:"Identity-first, mTLS microsegmentation." },
                  { icon:"📡", title:"24/7 SOC Monitoring", desc:"Sub-15 min incident response SLA." },
                ].map((f, i) => (
                  <div key={i} className="sec-mini-card">
                    <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"6px" }}>
                      <span style={{ fontSize:"15px" }}>{f.icon}</span>
                      <h4 style={{ fontSize:"13px", fontWeight:"800", color:"#0f172a", margin:0 }}>{f.title}</h4>
                    </div>
                    <p style={{ fontSize:"12px", color:"#64748b", margin:0, lineHeight:"1.5" }}>{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN — Security threat dashboard mockup */}
            <div className="sec-hero-right" style={{ display:"flex", justifyContent:"center", position:"relative", zIndex:2 }}>
              {/* Glow behind card */}
              <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:"380px", height:"380px", background:"radial-gradient(circle, rgba(239,68,68,0.1) 0%, transparent 60%)", filter:"blur(30px)", zIndex:0 }} />

              <div style={{
                background: "#ffffff",
                border: "1px solid rgba(239,68,68,0.12)",
                borderRadius: "24px",
                padding: "24px",
                width: "100%",
                maxWidth: "480px",
                boxShadow: "0 25px 50px -12px rgba(239,68,68,0.12), 0 0 0 1px rgba(239,68,68,0.04)",
                position: "relative",
                zIndex: 10,
                fontFamily: "'Inter', sans-serif",
              }}>
                {/* Dashboard header */}
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"20px", paddingBottom:"16px", borderBottom:"1px solid #f1f5f9" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                    <div style={{ width:"32px", height:"32px", borderRadius:"8px", background:"rgba(239,68,68,0.1)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <span style={{ fontSize:"14px", fontWeight:"800", color:"#0f172a" }}>Threat Monitor</span>
                  </div>
                  <span style={{ fontSize:"11px", fontWeight:"700", background:"#ecfdf5", color:"#10b981", padding:"4px 10px", borderRadius:"10px" }}>ALL CLEAR</span>
                </div>

                {/* Scan progress */}
                <div style={{ marginBottom:"20px" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", fontSize:"11px", fontWeight:"700", color:"#64748b", marginBottom:"8px" }}>
                    <span>ACTIVE SCAN — OWASP TOP 10</span>
                    <span style={{ color:"#10b981" }}>94%</span>
                  </div>
                  <div style={{ background:"#f1f5f9", borderRadius:"99px", height:"6px", overflow:"hidden" }}>
                    <div style={{ width:"94%", height:"100%", background:"linear-gradient(90deg, #10b981, #34d399)", borderRadius:"99px" }} />
                  </div>
                </div>

                {/* Threat rows */}
                {[
                  { label:"SQL Injection", status:"SAFE", color:"#10b981", bg:"#ecfdf5" },
                  { label:"XSS Vulnerability", status:"SAFE", color:"#10b981", bg:"#ecfdf5" },
                  { label:"Auth Bypass", status:"PATCHED", color:"#f59e0b", bg:"#fefce8" },
                  { label:"API Rate Limit", status:"ACTIVE", color:"#3b82f6", bg:"#eff6ff" },
                ].map((t, i) => (
                  <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 14px", background:"#f8fafc", borderRadius:"10px", marginBottom:"8px", border:"1px solid #f1f5f9" }}>
                    <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                      <div style={{ width:"7px", height:"7px", borderRadius:"50%", background:t.color }} />
                      <span style={{ fontSize:"13px", fontWeight:"700", color:"#334155" }}>{t.label}</span>
                    </div>
                    <span style={{ fontSize:"11px", fontWeight:"800", color:t.color, background:t.bg, padding:"3px 10px", borderRadius:"6px" }}>{t.status}</span>
                  </div>
                ))}

                {/* Stats */}
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px", marginTop:"16px" }}>
                  <div style={{ background:"#f1f5f9", padding:"14px 16px", borderRadius:"12px" }}>
                    <div style={{ fontSize:"11px", color:"#64748b", fontWeight:"700", marginBottom:"4px" }}>VULNERABILITIES</div>
                    <div style={{ fontSize:"22px", fontWeight:"900", color:"#10b981" }}>0 Critical</div>
                  </div>
                  <div style={{ background:"#f1f5f9", padding:"14px 16px", borderRadius:"12px" }}>
                    <div style={{ fontSize:"11px", color:"#64748b", fontWeight:"700", marginBottom:"4px" }}>COMPLIANCE</div>
                    <div style={{ fontSize:"22px", fontWeight:"900", color:"#3b82f6" }}>SOC 2 ✓</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <div id="security-modules">
          <SecurityPageContent />
        </div>
      </main>

      <Footer />
    </>
  );
}
