import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Code2, Network, ShieldCheck, Timer, UsersRound, Zap, Gem, Pointer, Heart, Sparkles, Star, User, TrendingUp, ShoppingCart, Package, Target, Hand } from "lucide-react";


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export const metadata = {
  title: "Why OneNineLabs — 6 Reasons Leaders Choose Us | Lucknow",
  description:
    "Why leaders choose OneNineLabs for custom software: 6–8 week MVP, SOC 2-ready, 99.9% uptime and hybrid pods. Lucknow & worldwide — see our advantage.",
  keywords: ["why OneNineLabs", "OneNineLabs advantage", "custom software partner", "SOC 2 development company"],
  alternates: {
    canonical: "/why-us",
    languages: {
      "en-US": "/why-us",
      en: "/why-us",
      "x-default": "/why-us",
    },
  },
  openGraph: {
    locale: "en_US", siteName: "OneNineLabs",
    title: "Why Enterprise Leaders Partner With OneNineLabs",
    description: "High-speed execution + enterprise rigor — 6-8 week MVPs, SOC 2, 99.9% SLA, AI-native. Lucknow & worldwide.",
    url: `${siteUrl}/why-us`,
    siteName: "OneNineLabs",
    type: "website",
    images: [
      { url: "/og/default.jpg", width: 1200, height: 630, alt: "Why choose OneNineLabs", type: "image/jpeg" },
    ],
  },
  twitter: {
    site: "@oneninelabs", creator: "@oneninelabs",
    card: "summary_large_image",
    title: "Why Enterprise Leaders Partner With OneNineLabs",
    description: "6–8 week MVPs, SOC 2-ready, 99.9% SLA. Lucknow and worldwide.",
    images: ["/og/default.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function WhyUsPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Why Us", item: `${siteUrl}/why-us` },
    ],
  };

  return (
    <>
      <Header variant="light" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* New Dark Split Hero Section (Section 1) */}
      <section className="dark-split-hero">
        <div className="dark-hero-left"></div>
        <div className="dark-hero-right">
          <h1 className="dark-hero-title">Why Choose Us</h1>
          <div className="dark-banner-list">

            <div className="dark-banner left-aligned" style={{ background: '#3a4beb' }}>
              <div className="dark-banner-icon"><TrendingUp size={36} color="#ffffff" /></div>
              <div className="dark-banner-divider"></div>
              <div className="dark-banner-content">
                <h4>Rapid High-Speed MVPs</h4>
                <p>Get to market faster with a focused, production-ready release in 6–8 weeks, retaining full IP ownership.</p>
              </div>
            </div>

            <div className="dark-banner right-aligned" style={{ background: '#359b68' }}>
              <div className="dark-banner-content right-text">
                <h4>Elite Hybrid Teams</h4>
                <p>Multi-disciplinary pods of engineers and designers acting as your dedicated extension.</p>
              </div>
              <div className="dark-banner-divider"></div>
              <div className="dark-banner-icon"><UsersRound size={36} color="#ffffff" /></div>
            </div>

            <div className="dark-banner left-aligned" style={{ background: '#c79c32' }}>
              <div className="dark-banner-icon"><ShieldCheck size={36} color="#ffffff" /></div>
              <div className="dark-banner-divider"></div>
              <div className="dark-banner-content">
                <h4>Enterprise SOC 2 Security</h4>
                <p>Zero-Trust Kubernetes, rigorous CI/CD, and 99.99% uptime targets keep your critical platform resilient.</p>
              </div>
            </div>

            <div className="dark-banner right-aligned" style={{ background: '#9f7556' }}>
              <div className="dark-banner-content right-text">
                <h4>Intelligent AI & Automation</h4>
                <p>Integrating autonomous LLM agents and RAG vector search to streamline your complex business operations.</p>
              </div>
              <div className="dark-banner-divider"></div>
              <div className="dark-banner-icon"><Target size={36} color="#ffffff" /></div>
            </div>

            <div className="dark-banner left-aligned" style={{ background: '#ec4989' }}>
              <div className="dark-banner-icon"><Network size={36} color="#ffffff" /></div>
              <div className="dark-banner-divider"></div>
              <div className="dark-banner-content">
                <h4>Cloud-Native Edge Architecture</h4>
                <p>We build for extreme scale with serverless, Next.js, and API-first microservices for sub-second performance.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Grid Hero Section (Now Section 2) */}
      <section className="new-hero-section">
        <div className="new-hero-container">
          <div className="new-hero-header">
            <span className="eyebrow"><Sparkles size={16} /> Built To Support Your Growth</span>
            <h2>Why partner with us</h2>
          </div>

          <div className="new-hero-grid">
            <div className="new-hero-card">
              <div className="new-hero-card-content">
                <h3>Launch and pivot faster</h3>
                <p>Our team helps startups quickly launch an effective brand and website, making it easy to pivot if needed.</p>
              </div>
              <div className="new-hero-widget">
                <div style={{ textAlign: 'center', width: '100%' }}>
                  <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'none', letterSpacing: '0px', marginBottom: '16px' }}>Time to launch</div>
                  <div style={{ fontSize: '48px', fontWeight: '800', fontFamily: 'monospace', color: '#6b3fc5', background: 'linear-gradient(90deg, #b993d6 0%, #8ca6db 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    01:12
                  </div>
                </div>
              </div>
            </div>

            <div className="new-hero-card">
              <div className="new-hero-card-content">
                <h3>Multi-expert team</h3>
                <p>Get access to a skilled, multi-disciplinary team at a fair rate—ready to support your startup's growth.</p>
              </div>
              <div className="new-hero-widget">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #a370df, #6b3fc5)' }}></div>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #1fc1c4, #0da6a9)' }}></div>
                  </div>
                  <div style={{ width: '30px', height: '1px', background: '#e2e8f0' }}></div>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#f1e8fa', display: 'grid', placeItems: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                    <User size={20} color="#6b3fc5" />
                  </div>
                  <div style={{ width: '30px', height: '1px', background: '#e2e8f0' }}></div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #6a82fb, #4e5cd9)' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="new-hero-card">
              <div className="new-hero-card-content">
                <h3>Improved startup legitimacy</h3>
                <p>We partner directly with startups to boost credibility and attract interest from clients and investors.</p>
              </div>
              <div className="new-hero-widget">
                <div style={{ width: '100%' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '16px', fontWeight: '500' }}>Lead volume</div>
                  <div style={{ display: 'flex', height: '80px', width: '100%', gap: '8px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '9px', color: '#94a3b8', height: '65px' }}>
                      <span>50K</span><span>40K</span><span>30K</span><span>20K</span>
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '65px', borderLeft: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', paddingLeft: '8px' }}>
                        {[20, 30, 45, 60, 40, 75, 90, 85, 100, 70, 80].map((h, i) => (
                          <div key={i} style={{ flex: 1, height: `${h}%`, background: `linear-gradient(180deg, #f4b4c7 0%, #a370df 100%)`, borderRadius: '2px 2px 0 0', opacity: 0.9 }}></div>
                        ))}
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#94a3b8', marginTop: '6px', paddingLeft: '8px' }}>
                        <span>01</span><span>03</span><span>05</span><span>07</span><span>09</span><span>11</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="new-hero-card">
              <div className="new-hero-card-content">
                <h3>Specialized in B2B</h3>
                <p>We offer tailored solutions specifically designed for business-to-business success and long-term growth.</p>
              </div>
              <div className="new-hero-widget">
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ width: '70px', height: '70px', background: '#fff', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.06)', display: 'grid', placeItems: 'center', color: '#6b3fc5', fontWeight: '800', fontSize: '28px', border: '1px solid #f8fafc' }}>$</div>
                  <div style={{ width: '70px', height: '70px', background: '#fff', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.06)', display: 'grid', placeItems: 'center', color: '#6b3fc5', fontWeight: '800', fontSize: '28px', border: '1px solid #f8fafc', transform: 'translateY(24px)' }}>$</div>
                </div>
              </div>
            </div>

            <div className="new-hero-card">
              <div className="new-hero-card-content">
                <h3>Flexible Packages</h3>
                <p>Choose from packages that suit your current stage—from early ideas to fast-growing businesses.</p>
              </div>
              <div className="new-hero-widget">
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px', padding: '0 10px' }}>
                  {[{ p: '31%', c: '#ffafbd' }, { p: '74%', c: '#6b3fc5' }, { p: '48%', c: '#8ca6db' }].map((s, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ flex: 1, height: '6px', background: '#e2e8f0', borderRadius: '3px', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '50%', left: s.p, transform: 'translate(-50%, -50%)', width: '18px', height: '18px', borderRadius: '50%', background: s.c, boxShadow: '0 2px 6px rgba(0,0,0,0.15)', border: '2px solid #fff' }}></div>
                      </div>
                      <div style={{ fontSize: '11px', color: '#94a3b8', width: '28px', fontWeight: '500' }}>{s.p}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="new-hero-card">
              <div className="new-hero-card-content">
                <h3>Proven track record</h3>
                <p>Trusted by companies across industries that rely on our design, speed, and consistency.</p>
              </div>
              <div className="new-hero-widget">
                <div style={{ width: '100%', background: '#fff', borderRadius: '16px', padding: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', border: '1px solid #f8fafc' }}>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '16px', justifyContent: 'center' }}>
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#b993d6" color="#b993d6" />)}
                  </div>
                  <div style={{ width: '100%', height: '8px', background: '#f1f5f9', borderRadius: '4px', marginBottom: '10px' }}></div>
                  <div style={{ width: '70%', height: '8px', background: '#f1f5f9', borderRadius: '4px', marginBottom: '20px' }}></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg, #a370df, #6b3fc5)' }}></div>
                    <div style={{ width: '60px', height: '6px', background: '#e2e8f0', borderRadius: '3px' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Circular Section (Now Section 2) */}
      <section className="why-us-hero" aria-labelledby="why-us-title">
        <div className="why-us-layout">
          <div className="why-us-orbit">
            <div className="why-us-orbit-copy">
              <h1 id="why-us-title">Why choose OneNineLabs?</h1>
              <p>We bring sharp engineering, clear communication, and dependable delivery together.</p>
            </div>
            <div className="why-us-orbit-title">
              <span>WHY</span>
              <span>CHOOSE</span>
              <span style={{ fontSize: "0.55em", fontWeight: 700, letterSpacing: "0.5px", marginTop: "4px" }}>ONENINELABS</span>
            </div>
            <span className="why-us-orbit-icon why-us-tone-blue"><Gem aria-hidden="true" /></span>
            <span className="why-us-orbit-icon why-us-tone-violet"><Timer aria-hidden="true" /></span>
            <span className="why-us-orbit-icon why-us-tone-teal"><Pointer aria-hidden="true" /></span>
            <span className="why-us-orbit-icon why-us-tone-gray"><Heart aria-hidden="true" /></span>
          </div>

          <div className="why-us-benefits">
            <article className="why-us-benefit why-us-benefit-1 why-us-tone-blue">
              <span className="why-us-benefit-icon"><Gem aria-hidden="true" /></span>
              <div>
                <h2>Cloud-Native Edge Architecture</h2>
                <p>We build for extreme scale with serverless, Next.js, and API-first microservices for sub-second performance.</p>
              </div>
            </article>
            <article className="why-us-benefit why-us-benefit-2 why-us-tone-violet">
              <span className="why-us-benefit-icon"><Timer aria-hidden="true" /></span>
              <div>
                <h2>Intelligent AI & Automation</h2>
                <p>Integrating autonomous LLM agents and RAG vector search to streamline your complex business operations.</p>
              </div>
            </article>
            <article className="why-us-benefit why-us-benefit-3 why-us-tone-teal">
              <span className="why-us-benefit-icon"><Pointer aria-hidden="true" /></span>
              <div>
                <h2>Enterprise SOC 2 Security</h2>
                <p>Zero-Trust Kubernetes, rigorous CI/CD, and 99.99% uptime targets keep your critical platform resilient.</p>
              </div>
            </article>
            <article className="why-us-benefit why-us-benefit-4 why-us-tone-gray">
              <span className="why-us-benefit-icon"><Heart aria-hidden="true" /></span>
              <div>
                <h2>Rapid High-Speed MVPs</h2>
                <p>Get to market faster with a focused, production-ready release in 6–8 weeks, retaining full IP ownership.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: "#f8fafc", padding: "64px 24px", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 900, color: "#0f172a", textAlign: "center", marginBottom: "24px" }}>Our Delivery Process — From Idea to Scale</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            {[
              { n: "01", t: "Discover & Scope", d: "Workshops, KPI mapping, audit — 90-day roadmap in 2 weeks." },
              { n: "02", t: "Architect & Design", d: "System diagrams, Figma, API contracts — SOC 2 & CWV targets set." },
              { n: "03", t: "Build & Automate", d: "Agile sprints, CI/CD, IaC, AI agents — weekly demos." },
              { n: "04", t: "Launch & Scale", d: "Blue-green, observability, SEO & cost tuning — on-call playbooks." },
            ].map((s) => (
              <div key={s.n} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "18px" }}>
                <div style={{ fontSize: "11px", fontWeight: 900, color: "#16a34a" }}>{s.n}</div>
                <div style={{ fontSize: "14px", fontWeight: 800, color: "#0f172a", margin: "4px 0" }}>{s.t}</div>
                <div style={{ fontSize: "12px", color: "#475569", lineHeight: 1.6 }}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#ffffff", padding: "64px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)", border: "1px solid #e2e8f0", borderRadius: "24px", padding: "48px 32px", textAlign: "center", boxShadow: "0 10px 30px rgba(15,23,42,0.04)" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "900", marginBottom: "12px", color: "#0f172a" }}>Experience the OneNineLabs Difference</h2>
          <p style={{ fontSize: "15px", color: "#475569", maxWidth: "100%", margin: "0 auto 20px" }}>
            Get a custom architecture audit — email <a href="mailto:19@oneninelabs.com" style={{ color: "#16a34a", fontWeight: 800, textDecoration: "underline", textUnderlineOffset: "3px", whiteSpace: "nowrap" }}>19@oneninelabs.com</a> or call <a href="tel:+918588807039" style={{ color: "#0f172a", fontWeight: 800, textDecoration: "underline", textUnderlineOffset: "3px", whiteSpace: "nowrap" }}>+91 85888 07039</a>
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: "#16a34a", color: "#fff", padding: "14px 28px", borderRadius: "10px", fontWeight: "800", textDecoration: "none", fontSize: "15px", display: "inline-block", boxShadow: "0 4px 14px rgba(22,163,74,0.25)" }}>
              Talk to Engineering Leads →
            </Link>
            <Link href="/about" style={{ background: "#fff", border: "1px solid #e2e8f0", color: "#0f172a", padding: "14px 28px", borderRadius: "10px", fontWeight: 800, textDecoration: "none", fontSize: "15px" }}>
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
