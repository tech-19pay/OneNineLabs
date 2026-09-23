"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function Header({ variant }) {
  const isLight = variant === "light";
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
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
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

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
    closeTimeoutRef.current = setTimeout(() => setIsServicesOpen(false), 160);
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

  const handleLogoClick = (e) => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      const heroEl =
        document.getElementById("hero") ||
        document.querySelector("main.hero") ||
        document.querySelector(".hero");
      if (heroEl) {
        heroEl.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileProductOpen(false);
  };

  const productDropdown = [
    {
      title: "Cash Point",
      desc: "Smart cash management and payment solutions",
      href: "/product/cash-point",
      theme: { bg: "#ecfdf5", border: "#a7f3d0", color: "#059669" },
      icon: "💳",
    },
    {
      title: "Typing Practice & Speed Test",
      desc: "Stenography practice with real-time speed analytics",
      href: "/product",
      theme: { bg: "#eef2ff", border: "#c7d2fe", color: "#4f46e5" },
      icon: "⌨️",
    },
  ];

  const servicesDropdown = [
    {
      title: "Web Development",
      desc: "Next.js, React & Node.js full-stack apps",
      href: "/services/web-development",
      tag: "Popular",
      theme: { bg: "#f0f9ff", border: "#bae6fd", color: "#0284c7" },
      iconSvg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <path d="m8 9-2 2 2 2" />
          <path d="m16 9 2 2-2 2" />
        </svg>
      ),
    },
    {
      title: "Mobile Apps",
      desc: "React Native, Flutter & iOS/Android",
      href: "/services/mobile-apps",
      tag: null,
      theme: { bg: "#f5f3ff", border: "#ddd6fe", color: "#7c3aed" },
      iconSvg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="3" ry="3" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
          <path d="M10 5h4" />
        </svg>
      ),
    },
    {
      title: "AI & Automation",
      desc: "Autonomous AI agents & ML workflows",
      href: "/services/ai-automation",
      tag: "Hot",
      theme: { bg: "#ecfeff", border: "#a5f3fc", color: "#0891b2" },
      iconSvg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4Z" />
          <path d="M6 14a6 6 0 0 0 12 0" />
          <path d="M12 18v4" />
          <path d="M8 22h8" />
          <circle cx="10" cy="6" r="1" fill="currentColor" />
          <circle cx="14" cy="6" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "Multi-Tenant SaaS",
      desc: "B2B SaaS architectures & billing engines",
      href: "/services/saas",
      tag: null,
      theme: { bg: "#fffbeb", border: "#fde68a", color: "#d97706" },
      iconSvg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      title: "Blockchain & Web3",
      desc: "Smart contracts, tokens & dApps",
      href: "/services/blockchain",
      tag: null,
      theme: { bg: "#eef2ff", border: "#c7d2fe", color: "#4f46e5" },
      iconSvg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="8" height="8" rx="2" />
          <rect x="14" y="7" width="8" height="8" rx="2" />
          <path d="M10 11h4" />
          <path d="M6 7V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3" />
          <path d="M6 15v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3" />
        </svg>
      ),
    },
    {
      title: "Growth & Marketing",
      desc: "SEO authority, PPC ads & viral funnels",
      href: "/services/marketing",
      tag: null,
      theme: { bg: "#fff1f2", border: "#fecdd3", color: "#e11d48" },
      iconSvg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      ),
    },
    {
      title: "Cloud & Cyber Security",
      desc: "Zero-trust audits & threat protection",
      href: "/services/security",
      tag: null,
      theme: { bg: "#ecfdf5", border: "#a7f3d0", color: "#059669" },
      iconSvg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Student Services",
      desc: "Social media posts, reels & branding",
      href: "/services/student",
      tag: "399/mo",
      theme: { bg: "#f0f9ff", border: "#bae6fd", color: "#0284c7" },
      iconSvg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
        </svg>
      ),
    },
  ];

  const mobileNavLinks = [
    { label: "Marketing", href: "/services/marketing", id: "mob-nav-marketing" },
    { label: "About Us", href: "/about", id: "mob-nav-about" },
    { label: "Why Us", href: "/why-us", id: "mob-nav-why-us" },
    { label: "How We Work", href: "/how-we-work", id: "mob-nav-how-we-work" },
  ];

  return (
    <>
      <style>{`
        .header,
        .header *,
        .services-popup-card,
        .services-popup-card * {
          font-family: var(--font-sans), 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif !important;
        }

        .nav-dropdown-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
          height: 100%;
        }

        .dropdown-trigger-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 6px 12px;
          border-radius: 9999px;
          font-size: 14px;
          font-weight: 600;
          color: #334155;
          transition: all 0.2s ease;
        }

        .dropdown-trigger-btn:hover,
        .dropdown-trigger-btn[aria-expanded="true"] {
          background: rgba(15, 23, 42, 0.05);
          color: #0f172a;
        }

        .dropdown-arrow-icon {
          display: inline-block;
          transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 8px;
          color: #64748b;
        }

        .dropdown-trigger-btn[aria-expanded="true"] .dropdown-arrow-icon {
          transform: rotate(180deg);
          color: #0284c7;
        }

        .services-dropdown-menu-bridge {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          width: 590px;
          max-width: min(94vw, 600px);
          padding-top: 8px;
          z-index: 1000;
          animation: dropdownSlideIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes dropdownSlideIn {
          0% { opacity: 0; transform: translateX(-50%) translateY(6px) scale(0.98); }
          100% { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
        }

        .services-popup-card {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(226, 232, 240, 0.95);
          border-radius: 16px;
          padding: 14px 16px;
          box-shadow: 0 18px 45px -10px rgba(15, 23, 42, 0.12), 0 3px 12px -2px rgba(15, 23, 42, 0.04);
          color: #0f172a;
          text-align: left;
        }

        .popup-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 8px;
          border-bottom: 1px solid #f1f5f9;
        }

        .popup-eyebrow-label {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: #0284c7;
        }

        .popup-view-all-link {
          font-size: 11px;
          font-weight: 700;
          color: #0284c7;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 3px;
          padding: 3px 9px;
          border-radius: 9999px;
          background: #f0f9ff;
          border: 1px solid #bae6fd;
          transition: all 0.2s ease;
        }

        .popup-view-all-link:hover { background: #0284c7; color: #ffffff; border-color: #0284c7; }

        .services-popup-card div.popup-services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 6px !important;
          margin: 10px 0;
        }

        .product-popup-card .product-popup-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        }

        .popup-service-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 10px;
          border-radius: 10px;
          background: #f8fafc;
          border: 1px solid #f1f5f9;
          text-decoration: none;
          color: inherit;
          transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .popup-service-item:hover {
          background: #ffffff;
          border-color: #bae6fd;
          transform: translateY(-1px);
          box-shadow: 0 4px 14px -2px rgba(2, 132, 199, 0.1);
        }

        .popup-icon-box {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.15s ease;
        }

        .popup-service-item:hover .popup-icon-box { transform: scale(1.08); }
        .popup-text-box { flex: 1; min-width: 0; }

        .popup-item-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4px;
        }

        .popup-item-title {
          font-size: 12.5px;
          font-weight: 700;
          color: #0f172a;
          letter-spacing: -0.01em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .popup-service-item:hover .popup-item-title { color: #0284c7; }

        .popup-item-tag {
          font-size: 9px;
          font-weight: 750;
          padding: 1px 5px;
          border-radius: 9999px;
          text-transform: uppercase;
          flex-shrink: 0;
        }

        .popup-item-tag.hot { background: #fee2e2; color: #ef4444; border: 1px solid #fecaca; }
        .popup-item-tag.popular { background: #e0f2fe; color: #0284c7; border: 1px solid #bae6fd; }
        .popup-item-tag.price { background: #f0fdf4; color: #16a34a; border: 1px solid #dcfce7; }

        .popup-item-desc {
          font-size: 11px;
          line-height: 1.35;
          color: #64748b;
          font-weight: 500;
          margin: 1px 0 0 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .popup-bottom-cta-strip {
          background: #f0f9ff;
          border: 1px solid #bae6fd;
          border-radius: 10px;
          padding: 8px 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 8px;
        }

        .popup-bottom-txt {
          font-size: 11px;
          color: #0369a1;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .popup-bottom-btn {
          font-size: 11px;
          font-weight: 700;
          color: #ffffff;
          background: #0284c7;
          border: none;
          padding: 4px 12px;
          border-radius: 9999px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 3px;
          transition: all 0.15s ease;
          white-space: nowrap;
        }

        .popup-bottom-btn:hover { background: #0369a1; }

        .header.light-variant {
          background: rgba(255, 255, 255, 0.92) !important;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid #e2e8f0;
        }

        .header.light-variant.scrolled {
          background: rgba(255, 255, 255, 0.96) !important;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 1px 12px rgba(15, 23, 42, 0.06);
        }

        .header.light-variant .logo { color: #0f172a !important; }
        .header.light-variant .nav-link,
        .header.light-variant .dropdown-trigger-btn { color: #334155 !important; }
        .header.light-variant .nav-link:hover,
        .header.light-variant .dropdown-trigger-btn:hover { color: #0f172a !important; }

        /* ═══════════════════════════════════════
           MOBILE DRAWER NAVBAR (max-width: 768px)
        ═══════════════════════════════════════ */

        .mob-hamburger-btn {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: none;
          border: 1.5px solid rgba(15,23,42,0.15);
          cursor: pointer;
          z-index: 110;
          padding: 0;
          transition: background 0.2s ease;
        }

        .mob-hamburger-btn:active { background: rgba(15,23,42,0.06); }

        .mob-bar {
          width: 20px;
          height: 2px;
          border-radius: 999px;
          background: #0f172a;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease, width 0.25s ease;
          transform-origin: center;
        }

        .mob-hamburger-btn.is-open .mob-bar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .mob-hamburger-btn.is-open .mob-bar:nth-child(2) { opacity: 0; width: 0; }
        .mob-hamburger-btn.is-open .mob-bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .mob-drawer-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(15,23,42,0.5);
          backdrop-filter: blur(3px);
          -webkit-backdrop-filter: blur(3px);
          z-index: 998;
          animation: fadeOverlay 0.25s ease forwards;
        }

        @keyframes fadeOverlay {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .mob-drawer-overlay.active { display: block; }

        .mob-drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: min(88vw, 340px);
          height: 100dvh;
          background: #ffffff;
          z-index: 999;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: -8px 0 48px rgba(15,23,42,0.2);
          overflow: hidden;
        }

        .mob-drawer.is-open { transform: translateX(0); }

        .mob-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 20px 16px;
          border-bottom: 1px solid #f1f5f9;
          flex-shrink: 0;
        }

        .mob-drawer-brand {
          font-size: 15px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.4px;
        }

        .mob-drawer-close-btn {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 16px;
          color: #64748b;
          transition: all 0.2s ease;
          line-height: 1;
        }

        .mob-drawer-close-btn:active { background: #f1f5f9; color: #0f172a; }

        .mob-drawer-body {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 12px 14px 8px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .mob-drawer-body::-webkit-scrollbar { width: 3px; }
        .mob-drawer-body::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 99px; }

        .mob-section-label {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          color: #94a3b8;
          padding: 10px 4px 6px;
        }

        .mob-services-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 11px 13px;
          border-radius: 14px;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          cursor: pointer;
          user-select: none;
          transition: background 0.2s ease, border-color 0.2s ease;
        }

        .mob-services-toggle:active { background: #f1f5f9; }
        .mob-services-toggle.expanded { background: #eff6ff; border-color: #bfdbfe; }

        .mob-stoggle-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .mob-stoggle-icon-wrap {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: #0f172a;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
        }

        .mob-stoggle-title {
          font-size: 14.5px;
          font-weight: 700;
          color: #0f172a;
        }

        .mob-stoggle-sub {
          font-size: 11px;
          color: #64748b;
          font-weight: 500;
          margin-top: 1px;
        }

        .mob-chevron {
          width: 18px;
          height: 18px;
          color: #94a3b8;
          transition: transform 0.25s ease;
          flex-shrink: 0;
        }

        .mob-services-toggle.expanded .mob-chevron {
          transform: rotate(180deg);
          color: #2563eb;
        }

        .mob-services-panel {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 14px;
          border: 1.5px solid transparent;
          background: #ffffff;
          margin-top: 0;
          flex-shrink: 0;
        }

        .mob-services-panel.open {
          max-height: 700px;
          border-color: #e2e8f0;
          margin-top: 4px;
        }

        .mob-drawer div.mob-services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr !important;
          gap: 1px !important;
          background: #f1f5f9;
        }

        .mob-svc-card {
          background: #ffffff;
          padding: 13px 11px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 7px;
          text-decoration: none;
          color: inherit;
          transition: background 0.15s ease;
        }

        .mob-svc-card:active { background: #f8fafc; }

        .mob-svc-icon {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .mob-svc-name {
          font-size: 11.5px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.3;
        }

        .mob-svc-tag {
          font-size: 9px;
          font-weight: 800;
          padding: 2px 6px;
          border-radius: 9999px;
          text-transform: uppercase;
        }

        .mob-svc-tag.hot { background: #fee2e2; color: #ef4444; border: 1px solid #fecaca; }
        .mob-svc-tag.popular { background: #e0f2fe; color: #0284c7; border: 1px solid #bae6fd; }
        .mob-svc-tag.price { background: #f0fdf4; color: #16a34a; border: 1px solid #dcfce7; }

        .mob-panel-footer {
          padding: 11px 13px;
          border-top: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .mob-panel-footer-txt { font-size: 12px; color: #64748b; font-weight: 500; }

        .mob-view-all-pill {
          font-size: 11.5px;
          font-weight: 700;
          color: #0284c7;
          text-decoration: none;
          padding: 5px 12px;
          border-radius: 9999px;
          background: #e0f2fe;
          border: 1px solid #bae6fd;
          display: inline-flex;
          align-items: center;
          gap: 3px;
          transition: all 0.15s ease;
        }

        .mob-view-all-pill:active { background: #0284c7; color: #ffffff; }

        .mob-nav-link-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-decoration: none;
          padding: 12px 13px;
          border-radius: 12px;
          color: #0f172a;
          font-size: 14.5px;
          font-weight: 600;
          transition: background 0.15s ease;
        }

        .mob-nav-link-row:active { background: #f8fafc; }
        .mob-nav-link-arrow { font-size: 16px; color: #cbd5e1; font-weight: 400; }

        .mob-drawer-footer {
          padding: 14px 14px 20px;
          border-top: 1px solid #f1f5f9;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .mob-cta-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #0f172a;
          color: #ffffff !important;
          font-size: 14px;
          font-weight: 700;
          padding: 14px 20px;
          border-radius: 14px;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.15s ease;
        }

        .mob-cta-primary:active { background: #1e293b; transform: scale(0.98); }

        .mob-cta-secondary {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f1f5f9;
          color: #334155 !important;
          font-size: 13px;
          font-weight: 600;
          padding: 12px 20px;
          border-radius: 12px;
          text-decoration: none;
          transition: background 0.15s ease;
        }

        .mob-cta-secondary:active { background: #e2e8f0; }

        @media (max-width: 768px) {
          .nav-menu { display: none !important; }
          .cta-button#nav-cta-get-started { display: none !important; }
          .mob-hamburger-btn { display: flex !important; }
          .header.mobile-menu-active {
            background: #ffffff !important;
            backdrop-filter: blur(12px) !important;
            border-bottom: 1px solid #e2e8f0 !important;
            box-shadow: 0 4px 20px rgba(15, 23, 42, 0.08) !important;
          }
        }

        @media (min-width: 769px) {
          .mob-hamburger-btn,
          .mob-drawer,
          .mob-drawer-overlay { display: none !important; }
        }
      `}</style>

      {/* Overlay */}
      <div
        className={`mob-drawer-overlay${isMobileMenuOpen ? " active" : ""}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Slide-in Drawer */}
      <div className={`mob-drawer${isMobileMenuOpen ? " is-open" : ""}`} role="dialog" aria-label="Navigation">
        <div className="mob-drawer-header">
          <div className="mob-drawer-brand">OneNine Labs</div>
          <button className="mob-drawer-close-btn" onClick={closeMobileMenu} aria-label="Close menu">✕</button>
        </div>

        <div className="mob-drawer-body">
          <div className="mob-section-label">Services</div>

          {/* Services Accordion */}
          <div
            className={`mob-services-toggle${mobileServicesOpen ? " expanded" : ""}`}
            onClick={() => setMobileServicesOpen((p) => !p)}
          >
            <div className="mob-stoggle-left">
              <div className="mob-stoggle-icon-wrap">⚡</div>
              <div>
                <div className="mob-stoggle-title">All Services</div>
                <div className="mob-stoggle-sub">8 capabilities</div>
              </div>
            </div>
            <svg className="mob-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className={`mob-services-panel${mobileServicesOpen ? " open" : ""}`}>
            <div className="mob-services-grid">
              {servicesDropdown.map((item, idx) => (
                <Link key={idx} href={item.href} className="mob-svc-card" onClick={closeMobileMenu}>
                  <div
                    className="mob-svc-icon"
                    style={{ background: item.theme.bg, border: `1px solid ${item.theme.border}`, color: item.theme.color }}
                  >
                    {item.iconSvg}
                  </div>
                  <div className="mob-svc-name">{item.title}</div>
                  {item.tag && (
                    <span className={`mob-svc-tag ${item.tag === "Hot" ? "hot" : item.tag === "Popular" ? "popular" : "price"}`}>
                      {item.tag}
                    </span>
                  )}
                </Link>
              ))}
            </div>
            <div className="mob-panel-footer">
              <span className="mob-panel-footer-txt">Need something custom?</span>
              <Link href="/services" className="mob-view-all-pill" onClick={closeMobileMenu}>View All →</Link>
            </div>
          </div>

          <div className="mob-section-label">Products</div>

          {/* Product Accordion */}
          <div
            className={`mob-services-toggle${mobileProductOpen ? " expanded" : ""}`}
            onClick={() => setMobileProductOpen((p) => !p)}
          >
            <div className="mob-stoggle-left">
              <div className="mob-stoggle-icon-wrap">✦</div>
              <div>
                <div className="mob-stoggle-title">Our Product</div>
                <div className="mob-stoggle-sub">2 products</div>
              </div>
            </div>
            <svg className="mob-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className={`mob-services-panel${mobileProductOpen ? " open" : ""}`}>
            <div className="mob-services-grid">
              {productDropdown.map((item) => (
                <Link key={item.href} href={item.href} className="mob-svc-card" onClick={closeMobileMenu}>
                  <div className="mob-svc-icon" style={{ background: item.theme.bg, border: `1px solid ${item.theme.border}`, color: item.theme.color }}>
                    {item.icon}
                  </div>
                  <div className="mob-svc-name">{item.title}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <div className="mob-section-label">Navigation</div>
          {mobileNavLinks.map((link) => (
            <Link key={link.id} href={link.href} className="mob-nav-link-row" id={link.id} onClick={closeMobileMenu}>
              <span>{link.label}</span>
              <span className="mob-nav-link-arrow">›</span>
            </Link>
          ))}
        </div>

        <div className="mob-drawer-footer">
          <Link href="/contact" className="mob-cta-primary" onClick={closeMobileMenu}>Get Started →</Link>
          <Link href="/services" className="mob-cta-secondary" onClick={closeMobileMenu}>Explore Services</Link>
        </div>
      </div>

      <header
        className={`header ${scrolled ? "scrolled" : ""} ${isMobileMenuOpen ? "mobile-menu-active" : ""} ${isLight ? "light-variant" : ""}`}
      >
        <div className="nav-container">
          <div className="logo" id="nav-logo" onClick={handleLogoClick}>
            <Logo variant={isLight ? "light" : "dark"} size="md" />
          </div>

          <nav className="nav-menu">
            <div className="nav-dropdown-wrapper" ref={dropdownRef} onMouseEnter={handleEnter} onMouseLeave={handleLeave} onFocus={handleEnter}>
              <button
                className="nav-link dropdown-trigger-btn"
                onClick={handleToggle}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                type="button"
                id="header-services-dropdown-btn"
              >
                <span>Services</span>
                <span className="dropdown-arrow-icon">▼</span>
              </button>

              {isServicesOpen && (
                <div className="services-dropdown-menu-bridge" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                  <div className="services-popup-card product-popup-card">
                    <div className="popup-header-row">
                      <div className="popup-eyebrow-label"><span>✦</span><span>OUR CORE CAPABILITIES</span></div>
                      <Link href="/services" className="popup-view-all-link" onClick={() => { setIsServicesOpen(false); setIsMobileMenuOpen(false); }}>
                        <span>All Services</span><span>&rarr;</span>
                      </Link>
                    </div>

                    <div className="popup-services-grid">
                      {servicesDropdown.map((item, idx) => (
                        <Link key={idx} href={item.href} className="popup-service-item" onClick={() => { setIsServicesOpen(false); setIsMobileMenuOpen(false); }}>
                          <div className="popup-icon-box" style={{ background: item.theme.bg, border: `1px solid ${item.theme.border}`, color: item.theme.color }}>
                            {item.iconSvg}
                          </div>
                          <div className="popup-text-box">
                            <div className="popup-item-title-row">
                              <span className="popup-item-title">{item.title}</span>
                              {item.tag && (
                                <span className={`popup-item-tag ${item.tag === "Hot" ? "hot" : item.tag === "Popular" ? "popular" : "price"}`}>{item.tag}</span>
                              )}
                            </div>
                            <p className="popup-item-desc">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="popup-bottom-cta-strip">
                      <div className="popup-bottom-txt"><span>⚡</span><span>Need a custom estimate or technical consultation?</span></div>
                      <Link href="/contact" className="popup-bottom-btn" onClick={() => { setIsServicesOpen(false); setIsMobileMenuOpen(false); }}>
                        <span>Talk to Expert</span><span>&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="nav-dropdown-wrapper" onMouseEnter={() => setIsProductOpen(true)} onMouseLeave={() => setIsProductOpen(false)}>
              <button
                className="nav-link dropdown-trigger-btn"
                onClick={() => setIsProductOpen((p) => !p)}
                aria-expanded={isProductOpen}
                aria-haspopup="true"
                type="button"
                id="header-product-dropdown-btn"
              >
                <span>Our Product</span>
                <span className="dropdown-arrow-icon">▼</span>
              </button>

              {isProductOpen && (
                <div className="services-dropdown-menu-bridge" onMouseEnter={() => setIsProductOpen(true)} onMouseLeave={() => setIsProductOpen(false)}>
                  <div className="services-popup-card product-popup-card">
                    <div className="popup-header-row">
                      <div className="popup-eyebrow-label"><span>✦</span><span>OUR PRODUCTS</span></div>
                      <Link href="/product" className="popup-view-all-link" onClick={() => setIsProductOpen(false)}>
                        <span>View Products</span><span>&rarr;</span>
                      </Link>
                    </div>
                    <div className="popup-services-grid product-popup-grid">
                      {productDropdown.map((item) => (
                        <Link key={item.href} href={item.href} className="popup-service-item" onClick={() => setIsProductOpen(false)}>
                          <div className="popup-icon-box" style={{ background: item.theme.bg, border: `1px solid ${item.theme.border}`, color: item.theme.color }}>
                            {item.icon}
                          </div>
                          <div className="popup-text-box">
                            <span className="popup-item-title">{item.title}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link href="/services/marketing" className="nav-link" id="nav-marketing" onClick={() => setIsMobileMenuOpen(false)}>Marketing</Link>
            <Link href="/about" className="nav-link" id="nav-about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link href="/why-us" className="nav-link" id="nav-why-us" onClick={() => setIsMobileMenuOpen(false)}>Why Us</Link>
            <Link href="/how-we-work" className="nav-link" id="nav-how-we-work" onClick={() => setIsMobileMenuOpen(false)}>How We Work</Link>
          </nav>

          <Link href="/contact" className="cta-button" id="nav-cta-get-started" onClick={() => setIsMobileMenuOpen(false)}>
            Get started
          </Link>

          <button
            className={`mob-hamburger-btn${isMobileMenuOpen ? " is-open" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="mob-bar" />
            <span className="mob-bar" />
            <span className="mob-bar" />
          </button>
        </div>
      </header>
    </>
  );
}
