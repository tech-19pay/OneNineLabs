"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Header({ variant }) {
  const isLight = variant === "light";
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const handleEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleLeave = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => setIsServicesOpen(false), 180);
  };

  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsServicesOpen((prev) => !prev);
  };

  const servicesDropdown = [
    { title: "Web Development", desc: "React, Next.js & Node.js Applications", href: "/services/web-development", icon: "🌐" },
    { title: "Mobile Apps", desc: "React Native, Flutter & Native iOS/Android", href: "/services/mobile-apps", icon: "📱" },
    { title: "AI & Automation", desc: "Autonomous AI Agents & ML Pipelines", href: "/services/ai-automation", icon: "🤖" },
    { title: "Multi-Tenant SaaS", desc: "B2B SaaS Architectures & Billing", href: "/services/saas", icon: "⚡" },
    { title: "Blockchain & Web3", desc: "Smart Contracts & Decentralized Systems", href: "/services/blockchain", icon: "⛓️" },
    { title: "Growth & Marketing", desc: "SEO, PPC Ads & Funnel Optimization", href: "/services/marketing", icon: "🚀" },
    { title: "Cloud & Cyber Security", desc: "Zero-Trust Audits & Threat Prevention", href: "/services/security", icon: "🛡️" },
  ];

  return (
    <>
      {isLight && (
        <style>{`
          .header.light-variant { background: rgba(255,255,255,0.92) !important; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid #e2e8f0; }
          .header.light-variant.scrolled { background: rgba(255,255,255,0.96) !important; border-bottom: 1px solid #e2e8f0; box-shadow: 0 1px 12px rgba(15,23,42,0.06); }
          .header.light-variant .logo { color: #0f172a !important; }
          .header.light-variant .logo-icon { color: #0f172a !important; }
          .header.light-variant .logo-text { color: #0f172a !important; }
          .header.light-variant .nav-link, .header.light-variant .dropdown-trigger-btn { color: #334155 !important; }
          .header.light-variant .nav-link:hover, .header.light-variant .dropdown-trigger-btn:hover { color: #0f172a !important; }
          .header.light-variant .dropdown-arrow { color: #64748b !important; }
          .header.light-variant .cta-button { background: #0f172a !important; color: #fff !important; }
          .header.light-variant .mobile-menu-btn { color: #0f172a !important; }
          .header.light-variant .nav-menu.mobile-open { background: #ffffff !important; }
          .header.light-variant .nav-menu.mobile-open .nav-link, .header.light-variant .nav-menu.mobile-open .dropdown-trigger-btn { color: #0f172a !important; }
          .header.light-variant .services-dropdown-menu { background: #ffffff !important; border: 1px solid #e2e8f0 !important; box-shadow: 0 20px 50px rgba(15,23,42,0.12) !important; }
          .header.light-variant .dropdown-header-title span { color: #64748b !important; }
          .header.light-variant .dropdown-item { background: #f8fafc !important; border-color: transparent !important; }
          .header.light-variant .dropdown-item:hover { background: #f1f5f9 !important; border-color: #e2e8f0 !important; }
          .header.light-variant .dropdown-item-title { color: #0f172a !important; }
          .header.light-variant .dropdown-item-desc { color: #64748b !important; }
        `}</style>
      )}
      <style>{`
        .header:not(.light-variant) .services-dropdown-menu { background: #0f172a !important; border: 1px solid rgba(255,255,255,0.12) !important; color: #fff !important; }
        .header:not(.light-variant) .dropdown-header-title span { color: #94a3b8 !important; }
        .header:not(.light-variant) .dropdown-item { background: rgba(255,255,255,0.03) !important; border-color: transparent !important; }
        .header:not(.light-variant) .dropdown-item:hover { background: rgba(255,255,255,0.08) !important; border-color: rgba(255,255,255,0.15) !important; }
        .header:not(.light-variant) .dropdown-item-title { color: #ffffff !important; }
        .header:not(.light-variant) .dropdown-item-desc { color: #94a3b8 !important; }
      `}</style>
      <header className={`header ${scrolled ? "scrolled" : ""} ${isMobileMenuOpen ? "mobile-menu-active" : ""} ${isLight ? "light-variant" : ""}`}>
        <div className="nav-container">
          <Link href="/" className="logo" id="nav-logo" onClick={() => { setIsMobileMenuOpen(false); setIsServicesOpen(false); }}>
            <img src="/logos/One.png" alt="OneNineLabs Logo" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
          </Link>

          <nav className={`nav-menu ${isMobileMenuOpen ? "mobile-open" : ""}`}>
            {/* Services Dropdown Item — hover with delay + click toggle, gap bridge prevents premature close */}
            <div
              className="nav-dropdown-wrapper"
              ref={dropdownRef}
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
              onFocus={handleEnter}
            >
              <button
                className="nav-link dropdown-trigger-btn"
                onClick={handleToggle}
                onMouseEnter={handleEnter}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                type="button"
              >
                Services <span className="dropdown-arrow">{isServicesOpen ? "▴" : "▾"}</span>
              </button>

              {isServicesOpen && (
                <div className="services-dropdown-menu">
                  <div className="dropdown-header-title">
                    <span>OUR CAPABILITIES</span>
                    <Link href="/services" onClick={() => { setIsServicesOpen(false); setIsMobileMenuOpen(false); }}>
                      View All Services &rarr;
                    </Link>
                  </div>
                  <div className="dropdown-grid">
                    {servicesDropdown.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="dropdown-item"
                        onClick={() => {
                          setIsServicesOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        <span className="dropdown-item-icon">{item.icon}</span>
                        <div className="dropdown-item-info">
                          <span className="dropdown-item-title">{item.title}</span>
                          <span className="dropdown-item-desc">{item.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/services/marketing" className="nav-link" id="nav-marketing" onClick={() => setIsMobileMenuOpen(false)}>Marketing</Link>
            <Link href="/about" className="nav-link" id="nav-about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link href="/contact" className="nav-link" id="nav-contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            <Link href="/why-us" className="nav-link" id="nav-why-us" onClick={() => setIsMobileMenuOpen(false)}>Why Us</Link>
            <Link href="/contact" className="nav-link mobile-only-link" id="nav-contact-mobile" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          </nav>

          <Link href="/contact" className="cta-button" id="nav-cta-get-started" onClick={() => setIsMobileMenuOpen(false)}>Get started</Link>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>
    </>
  );
}
