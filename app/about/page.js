"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export default function AboutPage() {

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${siteUrl}/about#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "About Us", item: `${siteUrl}/about` },
    ],
  };

  const aboutLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About OneNineLabs",
    description: "OneNineLabs in Lucknow, UP builds web, mobile, SaaS, AI & Web3 for startups to enterprises — 80+ products, 99.9% SLA.",
    url: `${siteUrl}/about`,
    // Reference the single site-wide Organization node instead of declaring
    // a second, conflicting Organization entity.
    mainEntity: { "@id": `${siteUrl}/#organization` },
    breadcrumb: { "@id": `${siteUrl}/about#breadcrumb` },
  };

  return ( 
    <>
  <Header variant="light" />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutLd) }} />

  {/* Breadcrumb Navigation */}
  <nav aria-label="Breadcrumb" style={{ background: "#ffffff", paddingTop: "90px", paddingLeft: "24px", paddingRight: "24px", borderBottom: "1px solid #f1f5f9" }}>
    <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "12px 0" }}>
      <ol style={{ display: "flex", gap: "8px", alignItems: "center", listStyle: "none", margin: 0, padding: 0, fontSize: "13px", color: "#64748b" }}>
        <li><Link href="/" style={{ color: "#64748b", textDecoration: "none", fontWeight: 600 }}>Home</Link></li>
        <li aria-hidden="true" style={{ color: "#cbd5e1" }}>/</li>
        <li aria-current="page" style={{ color: "#0f172a", fontWeight: 700 }}>About Us</li>
      </ol>
    </div>
  </nav>

  {/* About Hero Section */}
  <section className="about-intro-section">
    <div className="about-intro-grid">
      <div className="about-intro-copy">
        <div className="about-intro-eyebrow"><span /> Independent engineering partners</div>
        <h1>About OneNineLabs <em></em></h1>
        <p className="about-intro-lead">
          OneNineLabs is a high-speed software engineering consulting firm based in Lucknow, UP, partnering with forward-thinking enterprises, high-growth startups, and Web3 protocols worldwide. We build custom Next.js web platforms, autonomous AI agents, and zero-trust cloud architectures with 99.9% uptime SLAs.
        </p>
        <div className="about-intro-actions">
          <Link href="/contact" className="about-intro-primary">Build with us <span aria-hidden="true">↗</span></Link>
          <Link href="#our-story" className="about-intro-text-link">Read our story <span aria-hidden="true">↓</span></Link>
        </div>
      </div>

      <div className="about-intro-panel" aria-label="OneNineLabs capabilities">
        <h2>What we do</h2>
        <div className="about-intro-services">
          <div className="about-intro-service"><span className="about-intro-service-icon">⌘</span><div><strong>Next.js platforms</strong><p>Fast, accessible web products built for dependable scale.</p></div></div>
          <div className="about-intro-service"><span className="about-intro-service-icon">✦</span><div><strong>AI agents</strong><p>Autonomous workflows that turn complex operations into momentum.</p></div></div>
          <div className="about-intro-service"><span className="about-intro-service-icon">◇</span><div><strong>Zero-trust cloud</strong><p>Secure, observable infrastructure with a 99.9% uptime SLA.</p></div></div>
        </div>
      </div>
    </div>
  </section>

    {/* Our Story Section */}
    <section className="story-reference-section" id="our-story">
      <div className="story-reference-inner">
        <div className="story-reference-mission-row">
          <div className="story-reference-mission-copy">
            <h2>Our Mission</h2>
            <p>To help startups, businesses, and enterprises turn complex ideas into high-performing digital products — built with engineering precision, product clarity, and measurable business impact.</p>
            <p>We combine custom software development, AI automation, SaaS architecture, Web3 systems, and growth marketing into one execution model that helps teams move faster without compromising quality.</p>
          </div>

          <div className="story-reference-metrics-card" aria-label="OneNineLabs impact metrics">
            <div className="story-reference-metrics-grid">
              <div className="story-reference-metric">
                <strong>+340%</strong>
                <span>Average organic growth</span>
              </div>
              <div className="story-reference-metric">
                <strong>4.8x</strong>
                <span>Average campaign ROAS</span>
              </div>
              <div className="story-reference-metric">
                <strong>₹5Cr+</strong>
                <span>Ad spend managed</span>
              </div>
              <div className="story-reference-metric">
                <strong>100K+</strong>
                <span>Emails delivered monthly</span>
              </div>
            </div>
          </div>
        </div>

        <div className="story-reference-story-row">
          <div className="story-reference-photo">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="OneNineLabs team collaborating together"
            />
          </div>

          <div className="story-reference-story-content">
            <h2>Our Story</h2>
            <p>What started in Lucknow as a small engineering and growth studio grew into a global digital product partner helping businesses build, launch, and scale with confidence.</p>
            <p>We saw a common problem: founders and teams were often forced to choose between speed, quality, and clarity. We built OneNineLabs to remove that tradeoff.</p>
            <p>Today, our work spans custom web platforms, mobile apps, AI-powered automation, SaaS systems, Web3 products, and full-funnel growth strategies for companies ready to scale.</p>
            <p>From early-stage ideas to enterprise-grade execution, we help teams turn momentum into lasting product and revenue growth.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Core Values Section */}
    <section style={{ background: "#ffffff", padding: "80px 24px", color: "#0f172a" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "1px", textTransform: "uppercase", color: "#0284c7" }}>Our Philosophy</span>
          <h2 style={{ fontSize: "32px", fontWeight: 900, color: "#0f172a", margin: "10px 0 12px", letterSpacing: "-0.6px" }}>What We Stand For</h2>
          <p style={{ fontSize: "15px", color: "#64748b", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>Principles that guide every architecture review, pull request, and deployment.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", marginBottom: "48px" }}>
          {[
            { icon: "⚡", t: "Engineering Excellence", c: "#0284c7", d: "Zero-bloat, clean architecture, high throughput, and strict security compliance in every codebase." },
            { icon: "🛡️", t: "Zero-Trust & Uptime", c: "#10b981", d: "99.9% uptime SLA with SOC 2 readiness, automated failover, and encrypted data layers." },
            { icon: "🤖", t: "Autonomous Innovation", c: "#8b5cf6", d: "LLM agents, vector DBs, and automated DevOps — innovation that ships, not demos." },
            { icon: "🤝", t: "Partnership Over Vendor", c: "#ea580c", d: "We embed as your pod — daily standups, weekly demos, quarterly roadmaps." },
            { icon: "📈", t: "Performance Obsessed", c: "#059669", d: "99+ Lighthouse, <40ms p95 APIs, and cost-aware infra — speed is a feature." },
            { icon: "🌍", t: "Hybrid & Worldwide", c: "#2563eb", d: "Lucknow roots, worldwide reach — on-site workshops when needed, remote at scale." },
          ].map((x) => (
            <div key={x.t} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "18px", padding: "30px", boxShadow: "0 4px 20px rgba(15,23,42,0.03)", transition: "all 0.2s ease" }}>
              <div style={{ fontSize: "32px", marginBottom: "14px" }}>{x.icon}</div>
              <h3 style={{ fontSize: "18px", fontWeight: "800", marginBottom: "10px", color: x.c }}>{x.t}</h3>
              <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.65, margin: 0 }}>{x.d}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div style={{ background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f8fafc 100%)", border: "1px solid #bae6fd", borderRadius: "24px", padding: "48px 32px", textAlign: "center", boxShadow: "0 10px 30px rgba(2,132,199,0.08)" }}>
          <h2 style={{ fontSize: "30px", fontWeight: "900", marginBottom: "12px", color: "#0f172a" }}>Ready to transform your tech stack?</h2>
          <p style={{ fontSize: "15px", color: "#475569", maxWidth: "620px", margin: "0 auto 24px", lineHeight: 1.6 }}>
            Get in touch directly with our lead solutions architects — <a href="mailto:19@oneninelabs.com" style={{ color: "#0284c7", fontWeight: 800, textDecoration: "underline", textUnderlineOffset: "3px" }}>19@oneninelabs.com</a> or <a href="tel:+918588807039" style={{ color: "#0f172a", fontWeight: 800, textDecoration: "underline", textUnderlineOffset: "3px" }}>+91 85888 07039</a>
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: "#0284c7", color: "#fff", padding: "14px 28px", borderRadius: "12px", fontWeight: "800", textDecoration: "none", fontSize: "15px", display: "inline-block", boxShadow: "0 4px 14px rgba(2,132,199,0.28)" }}>
              Schedule Expert Architecture Call →
            </Link>
            <Link href="/services" style={{ background: "#fff", border: "1px solid #cbd5e1", color: "#0f172a", padding: "14px 28px", borderRadius: "12px", fontWeight: 800, textDecoration: "none", fontSize: "15px" }}>
              Explore All Services
            </Link>
          </div>
        </div>
      </div>
    </section>

    <Footer />

    {/* Embedded CSS for Rich Showstopper Hero Section Design */}
    <style jsx>{`
        .about-hero-section,
        .about-hero-section * {
          font-family: var(--font-sans), 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif !important;
        }

        .about-hero-section {
          position: relative;
          background: 
            radial-gradient(circle at 10% 15%, rgba(186, 230, 253, 0.45) 0%, transparent 45%),
            radial-gradient(circle at 90% 25%, rgba(224, 231, 255, 0.5) 0%, transparent 50%),
            radial-gradient(circle at 50% 80%, rgba(240, 253, 244, 0.4) 0%, transparent 50%),
            linear-gradient(180deg, #ffffff 0%, #f0f7ff 60%, #f8fafc 100%);
          color: #0f172a;
          padding-top: 50px;
          padding-bottom: 80px;
          padding-left: 24px;
          padding-right: 24px;
          border-bottom: 1px solid #e2e8f0;
          overflow: hidden;
        }

        /* Ambient Glow Circles */
        .about-hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
        }
        .glow-top-left {
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, rgba(2, 132, 199, 0.15) 0%, transparent 70%);
          top: -120px;
          left: -100px;
        }
        .glow-bottom-right {
          width: 650px;
          height: 650px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%);
          bottom: -150px;
          right: -120px;
        }
        .glow-center {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%);
          top: 30%;
          left: 45%;
        }

        /* Subtle Geometric Grid Canvas */
        .about-hero-grid-canvas {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, rgba(2, 132, 199, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(2, 132, 199, 0.04) 1px, transparent 1px);
          background-size: 36px 36px;
          pointer-events: none;
          z-index: 0;
        }

        /* 1-Column Hero Layout */
        .about-hero-container {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        /* Left Column (now center aligned) */
        .about-hero-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .about-hero-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          flex-wrap: wrap;
          gap: 8px;
          padding: 6px 16px;
          background: rgba(2, 132, 199, 0.08);
          border: 1px solid rgba(2, 132, 199, 0.25);
          border-radius: 9999px;
          width: fit-content;
          box-shadow: 0 2px 10px rgba(2, 132, 199, 0.08);
        }

        .badge-pulse-glow {
          width: 8px;
          height: 8px;
          background: #0284c7;
          border-radius: 50%;
          box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.25);
          animation: pulseAnimation 2s infinite;
        }

        @keyframes pulseAnimation {
          0% { box-shadow: 0 0 0 0 rgba(2, 132, 199, 0.5); }
          70% { box-shadow: 0 0 0 6px rgba(2, 132, 199, 0); }
          100% { box-shadow: 0 0 0 0 rgba(2, 132, 199, 0); }
        }

        .badge-text {
          font-size: 11px;
          font-weight: 800;
          color: #0369a1;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .about-hero-title {
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif !important;
          font-size: clamp(34px, 4.4vw, 54px) !important;
          font-weight: 900 !important;
          letter-spacing: -1.5px !important;
          line-height: 1.15 !important;
          color: #0f172a !important;
          margin: 0;
        }

        .gradient-headline {
          background: linear-gradient(135deg, #0284c7 0%, #2563eb 45%, #7c3aed 100%);
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
          color: transparent !important;
          display: inline;
        }

        .sub-headline-text {
          color: #0f172a;
          font-weight: 900;
        }

        .about-hero-desc {
          font-size: 16px;
          color: #475569;
          line-height: 1.65;
          margin: 0;
          max-width: 620px;
        }

        /* Pill Highlights Grid */
        .about-hero-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 2px;
        }

        .highlight-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 9999px;
          padding: 6px 14px;
          font-size: 12.5px;
          color: #334155;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
        }

        .pill-icon {
          font-size: 13px;
        }

        /* Action Buttons */
        .about-hero-cta-group {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 6px;
        }

        .about-primary-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          color: #ffffff;
          padding: 13px 26px;
          border-radius: 12px;
          font-size: 14.5px;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(2, 132, 199, 0.35);
          transition: all 0.2s ease;
        }

        .about-primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(2, 132, 199, 0.45);
        }

        .btn-arrow {
          transition: transform 0.2s ease;
        }
        .about-primary-btn:hover .btn-arrow {
          transform: translateX(4px);
        }

        .about-secondary-btn {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          color: #0f172a;
          padding: 13px 22px;
          border-radius: 12px;
          font-size: 14.5px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
        }

        .about-secondary-btn:hover {
          background: #f8fafc;
          border-color: #94a3b8;
          transform: translateY(-1px);
        }

        .about-phone-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #334155;
          font-size: 13.5px;
          font-weight: 700;
          text-decoration: none;
          padding: 8px 12px;
          border-radius: 8px;
          transition: color 0.2s ease;
        }

        .about-phone-btn:hover {
          color: #0284c7;
        }

        .phone-icon-pulse {
          font-size: 14px;
        }

        /* Right Column Tech Card Stage */
        .about-hero-right {
          position: relative;
        }

        .mesh-sphere-backdrop {
          position: absolute;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(2, 132, 199, 0.18) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          filter: blur(40px);
          pointer-events: none;
          z-index: 0;
        }

        .interactive-pod-card {
          position: relative;
          z-index: 1;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(226, 232, 240, 0.95);
          border-radius: 22px;
          padding: 20px;
          box-shadow: 
            0 25px 50px -12px rgba(15, 23, 42, 0.12),
            0 4px 16px rgba(15, 23, 42, 0.04);
        }

        /* Card Header */
        .pod-card-header {
          display: flex;
          justifyContent: space-between;
          align-items: center;
          padding-bottom: 12px;
          border-bottom: 1px solid #f1f5f9;
        }

        .window-dots {
          display: flex;
          gap: 5px;
        }
        .w-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .dot-red { background: #ef4444; }
        .dot-yellow { background: #f59e0b; }
        .dot-green { background: #10b981; }

        .tech-chip-code {
          font-family: monospace !important;
          font-size: 11px;
          color: #64748b;
          font-weight: 600;
        }

        .live-pulse-badge {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 10px;
          font-weight: 800;
          color: #059669;
          background: #ecfdf5;
          padding: 3px 9px;
          border-radius: 9999px;
          border: 1px solid #a7f3d0;
        }

        .pulse-dot-green {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 6px #10b981;
        }

        /* Switcher Nav */
        .pod-switcher-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 6px;
          margin: 14px 0 14px;
          background: #f1f5f9;
          padding: 4px;
          border-radius: 12px;
        }

        .pod-nav-btn {
          flex: 1;
          border: none;
          background: none;
          padding: 8px 10px;
          border-radius: 8px;
          font-size: 11.5px;
          font-weight: 700;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
          white-space: nowrap;
        }

        .pod-nav-btn.active {
          background: #ffffff;
          color: #0284c7;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);
        }

        /* Pod Body */
        .pod-card-body {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .pod-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .pod-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: #e0f2fe;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .pod-badge-label {
          font-size: 10px;
          font-weight: 800;
          color: #0284c7;
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }

        .pod-main-title {
          font-size: 14.5px;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          line-height: 1.2;
        }

        .pod-tagline {
          font-size: 12.5px;
          color: #475569;
          line-height: 1.5;
          margin: 0;
        }

        /* Metrics */
        .pod-metrics-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: #f8fafc;
          border: 1px solid #f1f5f9;
          border-radius: 12px;
          padding: 12px 14px;
        }

        .metric-row {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .metric-info {
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
          width: 100% !important;
          font-size: 12px;
        }

        .metric-label {
          color: #334155;
          font-weight: 600;
          font-size: 12px;
        }

        .metric-value {
          font-weight: 800;
          font-size: 13.5px;
        }

        .metric-track {
          height: 6px;
          background: #e2e8f0;
          border-radius: 6px;
          overflow: hidden;
        }

        .metric-fill {
          height: 100%;
          border-radius: 6px;
          transition: width 0.4s ease;
        }

        /* Tech Badges */
        .pod-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tech-badge-item {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 4px 9px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 700;
          color: #0f172a;
          box-shadow: 0 1px 3px rgba(15,23,42,0.02);
        }

        .tech-badge-bullet {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #0284c7;
        }

        /* Card Footer */
        .pod-card-footer {
          display: flex;
          justifyContent: space-between;
          align-items: center;
          margin-top: 14px;
          padding-top: 12px;
          border-top: 1px solid #f1f5f9;
        }

        .footer-status-item {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          color: #475569;
        }

        .footer-icon {
          font-size: 13px;
        }

        /* Floating Chips */
        .floating-metric-chip {
          position: absolute;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(226, 232, 240, 0.95);
          border-radius: 14px;
          padding: 8px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 12px 30px -5px rgba(15, 23, 42, 0.12);
          z-index: 3;
          animation: floatChip 4s ease-in-out infinite;
        }

        .chip-top-accent {
          top: -20px;
          right: -16px;
        }

        .chip-bottom-accent {
          bottom: -20px;
          left: -16px;
          animation-delay: 2s;
        }

        @keyframes floatChip {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .chip-badge-icon {
          font-size: 20px;
        }

        .chip-metric-num {
          font-size: 13px;
          font-weight: 900;
          color: #0f172a;
          line-height: 1.2;
        }

        .chip-metric-txt {
          font-size: 10px;
          color: #64748b;
          font-weight: 600;
        }

        .story-reference-section {
          scroll-margin-top: 80px;
          padding: 44px 24px 72px;
          position: relative;
          overflow: hidden;
          background-color: #f8fbfe;
          background-image: linear-gradient(to right, rgba(2, 132, 199, 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(2, 132, 199, 0.045) 1px, transparent 1px);
          background-size: 36px 36px;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
        }

        .story-reference-section::before {
          content: "";
          position: absolute;
          width: 440px;
          height: 440px;
          top: -220px;
          right: -120px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.18), transparent 68%);
          pointer-events: none;
        }

        .story-reference-inner {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
        }

        .story-reference-intro {
          max-width: 920px;
          margin: 0 auto 42px;
          text-align: left;
          padding-left: 22px;
          border-left: 4px solid #0284c7;
        }

        .story-reference-kicker {
          display: inline-block;
          background: transparent;
          border: 0;
          color: #0f172a;
          font-weight: 900;
          letter-spacing: 1px;
          text-transform: uppercase;
          box-shadow: 0 4px 12px rgba(2, 132, 199, 0.12);
        }

        .story-reference-title {
          margin: 16px 0 14px;
          color: #0f172a;
          font-size: clamp(34px, 4.2vw, 54px);
          font-weight: 900;
          color: #0f172a !important;
          letter-spacing: -1.5px;
          text-wrap: balance;
        }

        .story-reference-title span {
          display: block;
        }

        .story-reference-mission-row {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(360px, 0.9fr);
          gap: 48px;
          align-items: center;
          margin-bottom: 54px;
        }

        .story-reference-mission-copy {
          max-width: 560px;
        }

        .story-reference-mission-copy h2,
        .story-reference-story-content h2 {
          margin: 0 0 18px;
          color: #0f172a;
          font-size: clamp(40px, 4vw, 58px);
          line-height: 1.06;
          letter-spacing: -1.2px;
          font-weight: 800;
        }

        .story-reference-mission-copy p,
        .story-reference-story-content p {
          margin: 0 0 18px;
          font-size: 17px;
          line-height: 1.7;
          color: #334155;
        }

        .story-reference-metrics-card {
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 24px;
          padding: 28px 30px 22px;
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
        }

        .story-reference-metrics-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px 26px;
        }

        .story-reference-metric {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .story-reference-metric strong {
          color: #0f172a;
          font-size: clamp(34px, 3vw, 52px);
          line-height: 1;
          font-weight: 700;
          letter-spacing: -1.2px;
        }

        .story-reference-metric span {
          color: #64748b;
          font-size: 12px;
          line-height: 1.4;
        }

        .story-reference-story-row {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
          gap: 42px;
          align-items: center;
        }

        .story-reference-photo {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 18px 42px rgba(15, 23, 42, 0.12);
          min-height: 360px;
        }

        .story-reference-photo img {
          display: block;
          width: 100%;
          height: 100%;
          min-height: 360px;
          object-fit: cover;
        }

        .story-reference-story-content {
          max-width: 470px;
        }

        @media (max-width: 760px) {
          .story-reference-section {
            padding: 48px 18px 56px;
          }

          .story-reference-mission-row,
          .story-reference-story-row {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .story-reference-mission-copy h2,
          .story-reference-story-content h2 {
            font-size: 34px;
            line-height: 1.1;
            margin-bottom: 14px;
          }

          .story-reference-mission-copy p,
          .story-reference-story-content p {
            font-size: 15px;
            line-height: 1.7;
            margin-bottom: 12px;
          }

          .story-reference-metrics-card {
            padding: 18px 16px 14px;
          }

          .story-reference-metrics-grid {
            gap: 14px 16px;
          }

          .story-reference-metric strong {
            font-size: 28px;
          }

          .story-reference-metric span {
            font-size: 11px;
          }

          .story-reference-photo,
          .story-reference-photo img {
            min-height: 260px;
          }
        }

        .story-reference-lead {
          max-width: 680px;
          margin: 0;
          color: #475569;
          font-size: 14px;
          line-height: 1.6;
          text-wrap: pretty;
        }

        .story-reference-lead em {
          color: #0f172a;
          font-weight: 800;
        }

        .story-reference-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(420px, 1.18fr);
          gap: 64px;
          align-items: center;
        }

        .story-reference-copy {
          max-width: 480px;
          padding: 8px 0 8px 24px;
          border-left: 1px solid #bae6fd;
          color: #475569;
          font-size: 13px;
          line-height: 1.65;
          position: relative;
        }

        .story-reference-copy::before {
          content: "01 / 02";
          display: block;
          margin-bottom: 18px;
          color: #0284c7;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1.4px;
        }

        .story-reference-copy p {
          margin: 0 0 18px;
        }

        .story-reference-copy strong {
          color: #0f172a;
        }

        .story-reference-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 26px;
        }

        .story-reference-actions a {
          color: #475569 !important;
        }

        .story-reference-actions a:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(15, 23, 42, 0.12);
        }

        .story-reference-milestones {
          position: relative;
          padding: 30px 28px;
          border: 1px solid #dbe3ed;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.94);
          color: #0f172a !important;
        }

        .story-reference-milestones::before {
          content: "TIMELINE / 2020—2026";
          display: block;
          margin-bottom: 18px;
          color: #0284c7;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1.2px;
        }

        .story-reference-milestones h3 {
          display: none;
        }

        .story-reference-milestones > div {
          position: relative;
        }

        .story-reference-milestones > div::before {
          content: "";
          position: absolute;
          top: 10px;
          bottom: 10px;
          left: 24px;
          width: 1px;
          background: linear-gradient(#0284c7, #10b981, #8b5cf6, #f59e0b);
          opacity: 0.35;
        }

        .story-reference-milestones > div > div {
          position: relative;
          z-index: 1;
          transition: transform 180ms ease;
        }

        .story-reference-milestones > div > div:hover {
          transform: translateX(5px);
        }

        .story-reference-milestones > div > div > div:first-child {
          box-shadow: 0 0 0 5px #ffffff;
        }

        .story-reference-milestones h3 {
          color: #0f172a;
          font-size: 15px;
          font-weight: 900;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        @media (max-width: 760px) {
          .story-reference-section {
            padding: 36px 16px 52px;
          }

          .story-reference-intro {
            margin-bottom: 32px;
            padding-left: 16px;
          }

          .story-reference-title {
            font-size: 32px;
            letter-spacing: -0.8px;
          }

          .story-reference-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .story-reference-copy {
            max-width: none;
            padding-left: 16px;
          }

          .story-reference-milestones {
            padding: 22px 18px;
            box-shadow: 7px 7px 0 #e0f2fe, 0 10px 24px rgba(15, 23, 42, 0.07);
          }

          .story-reference-copy::before {
            margin-bottom: 14px;
          }

          .story-reference-milestones > div::before {
            left: 22px;
          }
        }

        /* Dark editorial story treatment */
        .story-reference-section {
          padding: 72px 24px 78px;
          background: transparent;
          border: 0;
          color: #0f172a;
        }

        .story-reference-section::before {
          display: none;
        }

        .story-reference-inner {
          max-width: 1180px;
        }

        .story-reference-grid {
          grid-template-columns: minmax(300px, 0.86fr) minmax(0, 1.14fr);
          gap: 84px;
          align-items: center;
        }

        .story-reference-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 360px;
        }

        .story-reference-globe {
          position: relative;
          width: min(360px, 100%);
          aspect-ratio: 1;
          overflow: hidden;
          border-radius: 50%;
          background:
            radial-gradient(circle at 34% 27%, rgba(255, 255, 255, 0.95) 0 3%, transparent 18%),
            radial-gradient(circle at 38% 38%, rgba(255, 255, 255, 0.7), transparent 48%),
            linear-gradient(145deg, #ffffff 8%, #f5f3ff 48%, #e9e7ff 100%);
          box-shadow: -18px 18px 34px rgba(124, 110, 255, 0.14), inset 18px -18px 34px rgba(124, 110, 255, 0.18), inset -12px 12px 24px #ffffff;
        }

        .story-reference-globe::before,
        .story-reference-globe::after {
          content: "";
          position: absolute;
          inset: 12% 27%;
          border: 1px solid rgba(124, 110, 255, 0.14);
          border-radius: 50%;
          transform: rotate(-24deg);
        }

        .story-reference-globe::after {
          inset: 27% 12%;
          transform: rotate(22deg);
        }

        .story-reference-dots {
          position: absolute;
          z-index: 1;
          width: 42%;
          height: 31%;
          background-image: radial-gradient(circle, #111827 0 1.4px, transparent 1.7px);
          background-size: 8px 8px;
          opacity: 0.78;
          filter: blur(0.15px);
        }

        .story-reference-dots-top {
          top: 18%;
          left: 28%;
          border-radius: 62% 38% 55% 45%;
          transform: rotate(-19deg);
        }

        .story-reference-dots-middle {
          top: 40%;
          left: 21%;
          width: 62%;
          height: 25%;
          border-radius: 48% 52% 42% 58%;
          transform: rotate(13deg);
        }

        .story-reference-dots-bottom {
          top: 61%;
          left: 51%;
          width: 24%;
          height: 21%;
          border-radius: 50% 40% 55% 45%;
          transform: rotate(-10deg);
        }

        .story-reference-copy,
        .story-reference-copy.story-reference-body {
          max-width: none;
          padding: 0;
          border-left: 0;
          color: #475569;
          font-size: 13px;
          line-height: 1.6;
        }

        .story-reference-copy::before {
          content: none;
        }

        .story-reference-copy:first-child {
          padding-top: 4px;
        }

        .story-reference-kicker {
          padding: 6px 12px;
          background: #e0f2fe;
          border: 1px solid #bae6fd;
          color: #075985;
          font-size: 9px;
          box-shadow: none;
          border-radius: 999px;
        }

        .story-reference-title {
          max-width: 420px;
          margin: 14px 0 0;
          display: block;
          visibility: visible;
          opacity: 1;
          color: #0f172a !important;
          font-size: clamp(38px, 4.2vw, 58px);
          line-height: 0.98;
          letter-spacing: -1.8px;
        }

        .story-reference-body {
          padding-top: 2px !important;
        }

        .story-reference-section .story-reference-body p {
          width: 100%;
          max-width: 620px;
          margin: 0 0 16px;
          display: block;
          visibility: visible;
          opacity: 1;
          color: #475569 !important;
          font-size: 14px;
          line-height: 1.75;
          font-weight: 450;
          overflow-wrap: break-word;
          word-break: normal;
        }

        .story-reference-body p:first-child {
          margin-top: 0;
        }

        .story-reference-body strong,
        .story-reference-copy strong {
          color: #0f172a !important;
          font-weight: 800;
        }

        .story-reference-stats {
          display: flex;
          gap: 28px;
          margin-top: 48px;
          flex-wrap: wrap;
        }

        .story-reference-stats div {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 90px;
        }

        .story-reference-stats strong {
          color: #0f172a;
          font-size: 25px;
          font-weight: 700;
          letter-spacing: -0.6px;
        }

        .story-reference-stats span {
          color: #64748b;
          font-size: 10px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        @media (max-width: 760px) {
          .story-reference-section {
            padding: 56px 20px 64px;
          }

          .story-reference-grid {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .story-reference-visual {
            min-height: 280px;
          }

          .story-reference-globe {
            width: min(300px, 82vw);
          }

          .story-reference-title {
            max-width: 420px;
            font-size: 42px;
          }

          .story-reference-stats {
            gap: 22px;
            margin-top: 34px;
          }

          .story-reference-stats strong {
            font-size: 22px;
          }

          .story-reference-body {
            border-top: 1px solid #263640 !important;
            padding-top: 24px !important;
          }

          .story-reference-body p {
            font-size: 14px;
            line-height: 1.7;
          }
        }


        
        /* --- Minimalist Hero Styles --- */
        .minimal-hero-section {
          background: #ffffff;
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .minimal-hero-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 24px 0 24px;
          position: relative;
          z-index: 10;
        }

        .hero-text-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: flex-start;
          margin-bottom: 120px;
        }

        .hero-title {
          font-size: 64px;
          font-weight: 500;
          color: #1a1a3a;
          margin: 0;
          letter-spacing: -1.5px;
        }

        .hero-desc {
          font-size: 15px;
          line-height: 1.7;
          color: #475569;
          margin: 0;
          max-width: 520px;
        }

        .about-intro-section {
          position: relative;
          overflow: hidden;
          padding: 84px 24px 96px;
          background: linear-gradient(135deg, #f8fbfe 0%, #eef8fd 56%, #f7f8ff 100%);
          border-bottom: 1px solid #dbe7ef;
        }

        .about-intro-section::before {
          content: "";
          position: absolute;
          width: 520px;
          height: 520px;
          right: -170px;
          top: -230px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.18), transparent 68%);
          pointer-events: none;
        }

        .about-intro-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.92fr);
          align-items: center;
          gap: clamp(48px, 8vw, 120px);
          max-width: 1180px;
          margin: 0 auto;
        }

        .about-intro-copy {
          max-width: 650px;
        }

        .about-intro-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 22px;
          color: #0369a1;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1.3px;
          text-transform: uppercase;
        }

        .about-intro-eyebrow span {
          width: 28px;
          height: 2px;
          background: #06b6d4;
        }

        .about-intro-copy h1 {
          max-width: 620px;
          margin: 0 0 26px;
          color: #0f172a;
          font-size: clamp(48px, 6.2vw, 88px);
          font-weight: 900;
          letter-spacing: -4px;
          line-height: 0.98;
        }

        .about-intro-copy h1 em {
          color: #0284c7;
          font-style: normal;
        }

        .about-intro-lead {
          max-width: 610px;
          margin: 0;
          color: #475569;
          font-size: 15px;
          line-height: 1.8;
        }

        .about-intro-actions {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          margin-top: 34px;
        }

        .about-intro-primary {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          border-radius: 8px;
          background: #0f172a;
          color: #ffffff;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 0 12px 24px rgba(15, 23, 42, 0.16);
          transition: transform 180ms ease, background 180ms ease;
        }

        .about-intro-primary:hover {
          transform: translateY(-2px);
          background: #0284c7;
        }

        .about-intro-primary span,
        .about-intro-text-link span {
          font-size: 18px;
          line-height: 0;
        }

        .about-intro-text-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #334155;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
        }

        .about-intro-text-link:hover { color: #0284c7; }

        .about-intro-panel {
          position: relative;
          overflow: hidden;
          padding: 28px;
          border: 1px solid #263b49;
          border-radius: 18px;
          background: #111c25;
          box-shadow: 18px 18px 0 rgba(2, 132, 199, 0.12), 0 24px 48px rgba(15, 23, 42, 0.16);
        }

        .about-intro-panel::after {
          content: "";
          position: absolute;
          width: 220px;
          height: 220px;
          right: -70px;
          top: 60px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(34, 211, 238, 0.22), transparent 68%);
        }

        .about-intro-panel-top,
        .about-intro-metrics,
        .about-intro-tags {
          position: relative;
          z-index: 1;
        }

        .about-intro-panel-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding-bottom: 22px;
          border-bottom: 1px solid #2b414d;
        }

        .about-intro-panel-label {
          color: #9fe4d5;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        .about-intro-live {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #b9c8d0;
          font-size: 10px;
        }

        .about-intro-live i {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #a3e635;
          box-shadow: 0 0 0 4px rgba(163, 230, 53, 0.12);
        }

        .about-intro-panel-title {
          position: relative;
          z-index: 1;
          margin: 50px 0 34px;
          color: #f8fafc;
          font-size: clamp(27px, 3vw, 39px);
          font-weight: 500;
          letter-spacing: -1.6px;
          line-height: 1.08;
        }

        .about-intro-panel-title strong { color: #67e8f9; font-weight: 800; }

        .about-intro-lines {
          position: absolute;
          top: 124px;
          right: 30px;
          display: flex;
          align-items: flex-end;
          gap: 6px;
          height: 84px;
          opacity: 0.7;
        }

        .about-intro-lines span {
          width: 5px;
          border-radius: 6px;
          background: linear-gradient(#67e8f9, #22c55e);
        }

        .about-intro-lines span:nth-child(1) { height: 30%; }
        .about-intro-lines span:nth-child(2) { height: 54%; }
        .about-intro-lines span:nth-child(3) { height: 76%; }
        .about-intro-lines span:nth-child(4) { height: 100%; }

        .about-intro-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .about-intro-tags span {
          padding: 7px 9px;
          border: 1px solid #35505c;
          border-radius: 5px;
          color: #c9d7df;
          font-size: 10px;
          font-weight: 700;
        }

        .about-intro-metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 38px;
          padding-top: 18px;
          border-top: 1px solid #2b414d;
        }

        .about-intro-metrics div { display: flex; flex-direction: column; gap: 5px; }
        .about-intro-metrics strong { color: #ffffff; font-size: 21px; letter-spacing: -0.5px; }
        .about-intro-metrics span { color: #8da2ad; font-size: 9px; text-transform: uppercase; letter-spacing: 0.5px; }

        /* Reference-style about hero overrides */
        .about-intro-section {
          padding: 104px 24px 108px;
          background: #edf6fd;
          background-image: radial-gradient(circle at 15% 20%, rgba(224, 242, 254, 0.9) 0%, transparent 50%), radial-gradient(circle at 85% 35%, rgba(186, 230, 253, 0.7) 0%, transparent 55%), radial-gradient(circle at 50% 90%, rgba(240, 249, 255, 0.95) 0%, transparent 60%);
          border-bottom-color: #dbe7ef;
        }

        .about-intro-section::before {
          inset: 0;
          width: auto;
          height: auto;
          border-radius: 0;
          background: radial-gradient(circle at 80% 20%, rgba(56, 189, 248, 0.15) 0%, transparent 40%);
        }

        .about-intro-section::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: linear-gradient(to right, rgba(2, 132, 199, 0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(2, 132, 199, 0.055) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }

        .about-intro-grid { grid-template-columns: minmax(0, 1.1fr) minmax(340px, 0.72fr); gap: clamp(48px, 9vw, 150px); max-width: 1100px; }
        .about-intro-eyebrow { color: #475569; }
        .about-intro-eyebrow span { background: #0284c7; }
        .about-intro-copy h1 { width: min(500px, 100%) !important; max-width: 500px !important; color: #0f172a; font-size: clamp(48px, 6vw, 72px); line-height: 1.02; }
        .about-intro-copy h1 em { color: #0284c7; }
        .about-intro-lead { color: #475569; }
        .about-intro-primary { background: #0f172a; color: #ffffff; }
        .about-intro-primary:hover { background: #1e293b; }
        .about-intro-text-link { color: #0f172a; }

        .about-intro-panel { padding: 0; border: 0; border-left: 2px solid #0284c7; border-radius: 0; background: transparent; box-shadow: none; }
        .about-intro-panel::after { display: none; }
        .about-intro-panel h2 { margin: 0 0 26px 28px; color: #0f172a; font-size: 28px; font-weight: 900; letter-spacing: -0.6px; }
        .about-intro-services { display: grid; gap: 22px; padding-left: 28px; }
        .about-intro-service { display: flex; align-items: center; gap: 16px; }
        .about-intro-service-icon { display: grid; width: 42px; height: 48px; flex: 0 0 42px; place-items: center; border: 2px solid #0284c7; color: #0284c7; font-size: 26px; line-height: 1; }
        .about-intro-service strong { display: block; margin-bottom: 5px; color: #0f172a; font-size: 15px; font-weight: 800; }
        .about-intro-service p { margin: 0; color: #475569; font-size: 12px; line-height: 1.6; max-width: 280px; }

        /* Responsive */
        @media (max-width: 960px) {
          .about-intro-section { padding-top: 58px; padding-bottom: 72px; }
          .about-intro-grid { grid-template-columns: 1fr; gap: 54px; }
          .about-intro-copy h1 { max-width: 560px; font-size: clamp(50px, 10vw, 76px); }
          .about-intro-panel { max-width: 620px; }
          .minimal-hero-content {
            padding: 40px 24px;
          }
          .hero-text-row {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-bottom: 60px;
          }
          .hero-title {
            font-size: 40px;
          }
          .values-grid {
            gap: 20px;
            flex-wrap: wrap;
          }
        }

        @media (max-width: 560px) {
          .about-intro-section { padding: 46px 20px 58px; }
          .about-intro-copy h1 { font-size: 50px; letter-spacing: -2.5px; }
          .about-intro-lead { font-size: 14px; }
          .about-intro-panel { border-left: 0; border-top: 2px solid #fbbf24; padding-top: 28px; }
          .about-intro-panel h2, .about-intro-services { margin-left: 0; padding-left: 0; }
        }
      `}</style>
  </>
  );
}
