"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";

export default function HowWeWorkClient() {
  const stages = useMemo(() => [
    {
      id: "01",
      number: "01",
      name: "Discovery",
      duration: "3–5 Days",
      percentage: "14%",
      progressVal: 14,
      title: "DISCOVERY & STRATEGY",
      subtitle: "Aligning on goals, constraints, and measurable success before writing a single line of code.",
      icon: "🧭",
      description:
        "We dig into your product vision, target audience, technical constraints, and business KPIs. Through focused scoping workshops, we uncover potential roadblocks early and define clear boundaries for the first release.",
      keyDeliverables: [
        "Product Requirements Document (PRD)",
        "Technical Feasibility & Architecture Map",
        "User Persona & Flow Diagrams",
      ],
      guarantee: "Crystal-clear scope with zero ambiguous line items.",
      whatHappens: [
        "Stakeholder interviews and business goal mapping",
        "Competitor benchmarking and UX analysis",
        "Tech stack evaluation based on scale and budget",
      ],
      tangibleDeliverables: [
        "Product Requirements Document (PRD)",
        "Technical Feasibility & Architecture Map",
        "User Persona & Flow Diagrams",
        "Fixed Milestone & Cost Estimate",
      ],
    },
    {
      id: "02",
      number: "02",
      name: "Plan",
      duration: "3–7 Days",
      percentage: "29%",
      progressVal: 29,
      title: "SPRINT PLANNING & ARCHITECTURE",
      subtitle: "Structuring a modular, future-proof blueprint with tangible bi-weekly milestones.",
      icon: "📄",
      description:
        "We design the complete system architecture—from database schemas and API specifications to cloud infrastructure. A sprint-by-sprint roadmap is established with defined deliverables so you always know what is shipping when.",
      keyDeliverables: [
        "Database Schema & Entity Diagrams",
        "RESTful / GraphQL API Contracts",
        "Sprint-by-Sprint Jira/Linear Backlog",
      ],
      guarantee: "No generic templates; tailored for your exact workload.",
      whatHappens: [
        "Defining data models and third-party integrations",
        "Setting up Git repositories and branch protection",
        "Establishing testing and deployment environments",
      ],
      tangibleDeliverables: [
        "Database Schema & Entity Diagrams",
        "RESTful / GraphQL API Contracts",
        "Sprint-by-Sprint Jira/Linear Backlog",
        "Cloud Architecture & CI/CD Pipeline Blueprint",
      ],
    },
    {
      id: "03",
      number: "03",
      name: "Design",
      duration: "2–4 Weeks",
      percentage: "43%",
      progressVal: 43,
      title: "UI/UX & PROTOTYPING",
      subtitle: "Crafting intuitive, conversion-optimized interfaces that your users will actually love.",
      icon: "🎨",
      description:
        "We map out user journeys and wireframes before moving to high-fidelity designs. You get a clickable Figma prototype to test the flow and provide feedback before any engineering hours are spent.",
      keyDeliverables: [
        "High-Fidelity Figma Mockups",
        "Interactive Clickable Prototype",
        "Comprehensive Design System",
      ],
      guarantee: "Unlimited revisions until you approve the core flow.",
      whatHappens: [
        "Low-fidelity wireframing and user flow mapping",
        "High-fidelity UI design aligned with brand guidelines",
        "Creating a scalable component library (Design System)",
      ],
      tangibleDeliverables: [
        "High-Fidelity Figma Mockups",
        "Interactive Clickable Prototype",
        "Comprehensive Design System",
        "Exported Developer Assets",
      ],
    },
    {
      id: "04",
      number: "04",
      name: "Build",
      duration: "4–12 Weeks",
      percentage: "71%",
      progressVal: 71,
      title: "AGILE ENGINEERING",
      subtitle: "Writing clean, scalable code in iterative sprints with full transparency.",
      icon: "⚙️",
      description:
        "Our engineers bring the designs to life using modern frameworks (Next.js, React, Node.js). We work in 2-week sprints, deploying staging links continuously so you can test features as they are built, rather than waiting months.",
      keyDeliverables: [
        "Bi-Weekly Staging Releases",
        "Clean, Documented Source Code",
        "Secure API & Database Implementation",
      ],
      guarantee: "No black-box development; you see progress every week.",
      whatHappens: [
        "Front-end and back-end concurrent development",
        "Third-party API and payment gateway integrations",
        "Weekly status syncs and staging environment updates",
      ],
      tangibleDeliverables: [
        "Bi-Weekly Staging Releases",
        "Clean, Documented Source Code",
        "Secure API & Database Implementation",
        "Live Development Dashboards",
      ],
    },
    {
      id: "05",
      number: "05",
      name: "Test",
      duration: "1–2 Weeks",
      percentage: "86%",
      progressVal: 86,
      title: "QA & SECURITY TESTING",
      subtitle: "Breaking the app so your users don’t have to.",
      icon: "🧪",
      description:
        "Before any launch, we run rigorous manual and automated QA tests. We check across devices, browsers, and network speeds, ensuring the system is secure against vulnerabilities and performs perfectly under load.",
      keyDeliverables: [
        "Automated Test Coverage (Unit & E2E)",
        "Security & Penetration Audit",
        "Cross-Browser/Device Compatibility Report",
      ],
      guarantee: "Zero critical bugs on launch day.",
      whatHappens: [
        "Writing and executing unit, integration, and E2E tests",
        "Performance profiling and memory leak detection",
        "Simulating high-traffic loads and security edge cases",
      ],
      tangibleDeliverables: [
        "Automated Test Coverage (Unit & E2E)",
        "Security & Penetration Audit",
        "Cross-Browser/Device Compatibility Report",
        "Performance Optimization Log",
      ],
    },
    {
      id: "06",
      number: "06",
      name: "Launch",
      duration: "Ongoing",
      percentage: "100%",
      progressVal: 100,
      title: "DEPLOYMENT & SCALE",
      subtitle: "Taking you live to the world and keeping the system running at 99.99% uptime.",
      icon: "🚀",
      description:
        "We orchestrate a smooth, risk-free production release with instant rollback capability, telemetry instrumentation, global CDN configuration, and complete credential handoff.",
      keyDeliverables: [
        "Blue-Green Zero-Downtime Cutover",
        "Global CDN Caching & SSL Setup",
        "Real-Time APM & Telemetry Streams",
      ],
      guarantee: "Zero seconds of downtime cutover with instant rollback.",
      whatHappens: [
        "Production DNS cutover and SSL configuration",
        "Global edge CDN distribution and caching rules",
        "Real-time alerting setup with Datadog/Sentry",
      ],
      tangibleDeliverables: [
        "Live Production Deployment",
        "Full IP, Domain & Cloud Account Transfer",
        "Production Runbooks & Incident Playbooks",
        "Real-Time Telemetry Dashboard Access",
      ],
    },
    {
      id: "07",
      number: "07",
      name: "Support",
      duration: "Ongoing / 24/7",
      percentage: "100%",
      progressVal: 100,
      title: "SUPPORT & EVOLUTION",
      subtitle: "SLA-backed 99.9% uptime, security patch management, and ongoing feature sprints.",
      icon: "🌟",
      description:
        "We remain your long-term engineering partner, providing ongoing maintenance, security patching, performance optimization, and continuous feature sprints to fuel continuous growth.",
      keyDeliverables: [
        "99.9% Uptime SLA Contract",
        "Sub-15 Min Incident Escalation",
        "Monthly Security & Dependency Updates",
      ],
      guarantee: "24/7 reliability, proactive monitoring, and dedicated sprint hours.",
      whatHappens: [
        "24/7 uptime monitoring and incident response",
        "Scheduled dependency upgrades and security patches",
        "Dedicated sprint capacity for new feature iterations",
      ],
      tangibleDeliverables: [
        "Guaranteed 99.9% SLA & 15-Min Response",
        "Monthly Maintenance & Health Reports",
        "Continuous Database & Speed Optimization",
        "Dedicated Feature Sprint Pod Allocation",
      ],
    },
  ], []);

  const [activeStageId, setActiveStageId] = useState("01");
  const [isPillBarVisible, setIsPillBarVisible] = useState(true);
  const isUserClickingRef = useRef(false);
  const lastScrollYRef = useRef(0);

  // ScrollSpy with direction-aware scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
      const scrollDiff = currentScrollY - lastScrollYRef.current;

      // Smart direction detection: hide on scroll down, reveal on scroll up
      if (currentScrollY > 350) {
        if (scrollDiff > 6) {
          // Scrolling down -> shift upper side
          setIsPillBarVisible(false);
        } else if (scrollDiff < -6) {
          // Scrolling up -> show/reveal pill bar
          setIsPillBarVisible(true);
        }
      } else {
        // At the top of hero -> always show
        setIsPillBarVisible(true);
      }

      lastScrollYRef.current = currentScrollY;

      // Handle active stage tracking
      if (isUserClickingRef.current) return;

      const triggerPoint = window.innerHeight * 0.45;
      let activeId = stages[0].id;

      for (let i = 0; i < stages.length; i++) {
        const el = document.getElementById(`stage-card-${stages[i].id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerPoint) {
            activeId = stages[i].id;
          }
        }
      }

      setActiveStageId((prev) => (prev !== activeId ? activeId : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [stages]);

  const scrollToStage = (stageId) => {
    isUserClickingRef.current = true;
    setActiveStageId(stageId);

    const targetEl = document.getElementById(`stage-card-${stageId}`);
    if (targetEl) {
      const headerOffset = 130;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      isUserClickingRef.current = false;
    }, 800);
  };

  const currentStage = stages.find((s) => s.id === activeStageId) || stages[0];

  return (
    <>
      <style>{`
        /* How We Work Hero Section styling */
        .hww-hero-section {
          position: relative;
          width: 100%;
          min-height: auto;
          padding-top: calc(var(--header-height, 80px) + 36px);
          padding-bottom: 24px;
          background: #edf6fd;
          background-image: 
            radial-gradient(circle at 15% 20%, rgba(224, 242, 254, 0.9) 0%, transparent 50%),
            radial-gradient(circle at 85% 35%, rgba(186, 230, 253, 0.7) 0%, transparent 55%),
            radial-gradient(circle at 50% 90%, rgba(240, 249, 255, 0.95) 0%, transparent 60%);
          overflow: visible;
          color: #0f172a;
          font-family: var(--font-sans), 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif !important;
        }

        .hww-hero-section *,
        .hww-hero-section h1,
        .hww-hero-section h2,
        .hww-hero-section h3,
        .hww-hero-section h4,
        .hww-hero-section p,
        .hww-hero-section span,
        .hww-hero-section button,
        .hww-hero-section div {
          font-family: var(--font-sans), 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif !important;
        }

        .hww-hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(circle at 80% 20%, rgba(56, 189, 248, 0.15) 0%, transparent 40%);
          z-index: 0;
          pointer-events: none;
        }

        .hww-hero-section::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(to right, rgba(2, 132, 199, 0.055) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(2, 132, 199, 0.055) 1px, transparent 1px);
          background-size: 32px 32px;
          z-index: 0;
          pointer-events: none;
        }

        .hww-container {
          position: relative;
          max-width: 1240px;
          width: 100%;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          z-index: 1;
        }

        /* Top Pill Badge */
        .hww-top-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #e0f2fe;
          border: 1px solid #bae6fd;
          padding: 6px 18px;
          border-radius: 9999px;
          margin-bottom: 24px;
          box-shadow: 0 2px 10px rgba(2, 132, 199, 0.08);
          animation: slide-up-fade 0.5s ease forwards;
        }

        .hww-top-badge-icon {
          color: #0284c7;
          font-size: 14px;
          display: inline-block;
        }

        .hww-top-badge-text {
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #0284c7;
        }

        /* Main Heading */
        .hww-hero-title {
          font-size: clamp(34px, 5.2vw, 60px);
          font-weight: 900;
          line-height: 1.08;
          letter-spacing: -1.8px;
          text-transform: uppercase;
          margin: 0 0 20px 0;
          color: #0f172a;
          animation: slide-up-fade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hww-hero-title .title-black {
          color: #0f172a;
          display: block;
        }

        .hww-hero-title .title-gradient {
          background: linear-gradient(135deg, #0284c7 0%, #38bdf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        /* Subtitle */
        .hww-hero-subtitle {
          font-size: clamp(15.5px, 1.8vw, 18px);
          line-height: 1.62;
          color: #475569;
          font-weight: 450;
          max-width: 780px;
          margin: 0 auto 36px auto;
          animation: slide-up-fade 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* 7-Stage Interactive Pill Navigation Bar */
        .hww-stage-pillbar-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-bottom: 40px;
          position: sticky;
          top: calc(var(--header-height, 80px) + 12px);
          z-index: 30;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
        }

        .hww-stage-pillbar-wrapper.shifted-up {
          transform: translateY(-140%);
          opacity: 0;
          pointer-events: none;
        }

        .hww-stage-pillbar-wrapper.shifted-down {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        .hww-stage-pillbar {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(226, 232, 240, 0.95);
          box-shadow: 0 10px 35px -5px rgba(15, 23, 42, 0.1);
          border-radius: 9999px;
          padding: 8px 12px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          max-width: 100%;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .hww-stage-pillbar::-webkit-scrollbar {
          display: none;
        }

        .hww-stage-btn {
          border: none;
          background: transparent;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 9999px;
          font-size: 14.5px;
          font-weight: 700;
          color: #475569;
          white-space: nowrap;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hww-stage-btn:hover:not(.is-active) {
          background: #f8fafc;
          color: #0f172a;
        }

        .hww-stage-btn.is-active {
          background: #18181b;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.2);
        }

        .hww-badge-num {
          font-size: 11px;
          font-weight: 800;
          border-radius: 6px;
          padding: 2px 6px;
          line-height: 1.2;
          transition: all 0.25s ease;
        }

        .hww-stage-btn.is-active .hww-badge-num {
          background: #0284c7;
          color: #ffffff;
        }

        .hww-stage-btn:not(.is-active) .hww-badge-num {
          background: #f1f5f9;
          color: #64748b;
        }

        /* Sticky Split Layout */
        .hww-scroll-wrapper {
          width: 100%;
          display: grid;
          grid-template-columns: 370px 1fr;
          gap: 28px;
          align-items: start;
          position: relative;
          text-align: left;
        }

        /* Fixed / Sticky Left Column */
        .hww-sticky-col {
          position: sticky;
          top: calc(var(--header-height, 80px) + 14px);
          z-index: 20;
          width: 100%;
        }

        .hww-ref-card {
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.8);
          border-radius: 20px;
          padding: 28px;
          box-shadow: 0 10px 30px -4px rgba(15, 23, 42, 0.05);
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all 0.3s ease;
        }

        /* Compact Left Sticky Card Specific Styling */
        .hww-sticky-col .hww-ref-card {
          padding: 20px 22px;
          border-radius: 18px;
        }

        /* Left Card Styling */
        .hww-ref-left-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .hww-ref-active-label {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: #0284c7;
        }

        .hww-ref-duration-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: #e0f2fe;
          color: #0284c7;
          border: 1px solid #bae6fd;
          padding: 3px 10px;
          border-radius: 9999px;
          font-size: 11.5px;
          font-weight: 700;
        }

        .hww-ref-stage-number-title {
          font-size: 21px;
          font-weight: 900;
          color: #0f172a;
          letter-spacing: -0.4px;
          margin: 0 0 10px 0;
        }

        .hww-ref-stage-number-title span.slash-total {
          color: #94a3b8;
          font-weight: 600;
        }

        /* Lifecycle Completion Progress */
        .hww-ref-progress-block {
          background: #f8fafc;
          border: 1px solid #f1f5f9;
          border-radius: 12px;
          padding: 10px 12px;
          margin-bottom: 12px;
        }

        .hww-ref-progress-labels {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          font-weight: 600;
          color: #475569;
          margin-bottom: 6px;
        }

        .hww-ref-progress-percent {
          font-weight: 800;
          color: #0284c7;
          font-size: 13px;
        }

        .hww-ref-progress-track {
          width: 100%;
          height: 5px;
          background: #e2e8f0;
          border-radius: 999px;
          overflow: hidden;
          margin-bottom: 8px;
        }

        .hww-ref-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #0284c7, #38bdf8);
          border-radius: 999px;
          transition: width 0.35s ease;
        }

        .hww-ref-mini-stages-row {
          display: flex;
          justify-content: space-between;
          gap: 3px;
        }

        .hww-ref-mini-stage-btn {
          border: none;
          padding: 3px 0;
          flex: 1;
          border-radius: 6px;
          font-size: 10.5px;
          font-weight: 700;
          cursor: pointer;
          text-align: center;
          transition: all 0.2s ease;
        }

        .hww-ref-mini-stage-btn.active {
          background: #0284c7;
          color: #ffffff;
        }

        .hww-ref-mini-stage-btn:not(.active) {
          background: #f1f5f9;
          color: #64748b;
        }

        .hww-ref-mini-stage-btn:hover:not(.active) {
          background: #e2e8f0;
          color: #0f172a;
        }

        /* Stage Heading & Subheading */
        .hww-ref-stage-name-heading {
          font-size: 16.5px;
          font-weight: 900;
          color: #0f172a;
          text-transform: uppercase;
          margin: 0 0 4px 0;
          letter-spacing: -0.3px;
        }

        .hww-ref-stage-subtext {
          font-size: 12.5px;
          line-height: 1.45;
          color: #64748b;
          margin-bottom: 10px;
        }

        /* Key Deliverables Box */
        .hww-ref-deliverables-box {
          background: #f8fafc;
          border: 1px solid #f1f5f9;
          border-radius: 12px;
          padding: 10px 12px;
          margin-bottom: 10px;
        }

        .hww-ref-box-title {
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #64748b;
          margin-bottom: 6px;
        }

        .hww-ref-deliv-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #1e293b;
          margin-bottom: 5px;
          font-weight: 550;
        }

        .hww-ref-deliv-item:last-child {
          margin-bottom: 0;
        }

        .hww-ref-deliv-icon {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          border: 1.5px solid #0284c7;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #0284c7;
          font-size: 9.5px;
          font-weight: 900;
          flex-shrink: 0;
        }

        /* Highlight box */
        .hww-ref-highlight-box {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 10px;
          padding: 8px 10px;
          display: flex;
          align-items: center;
          gap: 7px;
          color: #15803d;
          font-size: 11.5px;
          font-weight: 650;
          margin-bottom: 12px;
        }

        .hww-ref-highlight-icon {
          font-size: 13px;
          flex-shrink: 0;
        }

        /* Start Button */
        .hww-ref-start-btn {
          width: 100%;
          background: #0f172a;
          color: #ffffff !important;
          border: none;
          padding: 10px 16px;
          border-radius: 10px;
          font-size: 12.5px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
        }

        .hww-ref-start-btn:hover {
          background: #1e293b;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
        }

        /* Right Scrollable Stack of Cards */
        .hww-stages-stack {
          display: flex;
          flex-direction: column;
          gap: 28px;
          width: 100%;
        }

        .hww-stage-scroll-item {
          scroll-margin-top: 130px;
        }

        .hww-stage-scroll-item.is-active-card {
          box-shadow: 0 16px 40px -8px rgba(15, 23, 42, 0.08);
        }

        .hww-ref-right-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .hww-ref-right-title-group {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .hww-ref-icon-bubble {
          width: 44px;
          height: 44px;
          background: #e0f2fe;
          border: 1px solid #bae6fd;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }

        .hww-ref-stage-tag {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: #0284c7;
          margin-bottom: 2px;
        }

        .hww-ref-main-title {
          font-size: clamp(22px, 2.5vw, 28px);
          font-weight: 900;
          color: #0f172a;
          text-transform: uppercase;
          letter-spacing: -0.6px;
          line-height: 1.15;
          margin: 0;
        }

        .hww-ref-right-duration-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #475569;
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
        }

        .hww-ref-right-desc {
          font-size: 15px;
          line-height: 1.65;
          color: #475569;
          margin: 0 0 24px 0;
        }

        .hww-ref-divider {
          width: 100%;
          height: 1px;
          background: #f1f5f9;
          margin: 0 0 24px 0;
        }

        /* "What Happens In This Phase" */
        .hww-ref-section-label {
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: #64748b;
          margin-bottom: 14px;
        }

        .hww-ref-bullet-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 28px;
        }

        .hww-ref-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: #1e293b;
          line-height: 1.45;
          font-weight: 500;
        }

        .hww-ref-orange-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #0284c7;
          margin-top: 7px;
          flex-shrink: 0;
        }

        /* "Tangible Deliverables" Pill Grid */
        .hww-ref-pills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .hww-ref-tangible-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          color: #15803d;
          padding: 7px 16px;
          border-radius: 9999px;
          font-size: 13px;
          font-weight: 650;
        }

        .hww-ref-pill-check {
          color: #16a34a;
          font-weight: 900;
          font-size: 13px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .hww-scroll-wrapper {
            grid-template-columns: 1fr;
          }
          .hww-sticky-col {
            position: relative;
            top: 0;
            margin-bottom: 30px;
          }
        }

        @media (max-width: 640px) {
          .hww-hero-section {
            padding-top: calc(var(--header-height, 80px) + 20px);
            padding-bottom: 50px;
          }
          .hww-ref-card {
            padding: 20px;
          }
          .hww-stage-pillbar {
            padding: 4px;
            width: 100%;
            justify-content: flex-start;
          }
          .hww-stage-btn {
            padding: 6px 12px;
            font-size: 13px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hww-hero-section" id="how-we-work-hero">
        <div className="hww-container">
          
          {/* 1. Top Pill Badge */}
          <div className="hww-top-badge">
            <span className="hww-top-badge-icon">✦</span>
            <span className="hww-top-badge-text">THE 7-STAGE EXECUTION PROTOCOL</span>
          </div>

          {/* 2. Main Title */}
          <h1 className="hww-hero-title">
            <span className="title-black">FROM CONCEPT TO </span>
            <span className="title-gradient">PRODUCTION SCALE.</span>
          </h1>

          {/* 3. Subtitle */}
          <p className="hww-hero-subtitle">
            We eliminate the uncertainty of typical software delivery with a transparent, disciplined 7-phase methodology engineered for velocity, security, and measurable ROI.
          </p>

          {/* 4. The 7-Stage Interactive Pill Navigation Bar (Click to scroll) */}
          <div className={`hww-stage-pillbar-wrapper ${isPillBarVisible ? "shifted-down" : "shifted-up"}`}>
            <div className="hww-stage-pillbar" role="tablist" aria-label="7-Stage Execution Protocol">
              {stages.map((stg) => {
                const isActive = stg.id === activeStageId;
                return (
                  <button
                    key={stg.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`stage-card-${stg.id}`}
                    id={`stage-tab-${stg.id}`}
                    className={`hww-stage-btn ${isActive ? "is-active" : ""}`}
                    onClick={() => scrollToStage(stg.id)}
                  >
                    <span className="hww-badge-num">{stg.number}</span>
                    <span>{stg.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 5. Sticky Split Layout: Left Card Fixed, Right Stack of 7 Cards Scrollable */}
          <div className="hww-scroll-wrapper">
            
            {/* LEFT CARD (FIXED / STICKY IN LOCATION, UPDATES DYNAMICALLY ON SCROLL) */}
            <div className="hww-sticky-col">
              <div className="hww-ref-card">
                <div className="hww-ref-left-top">
                  <span className="hww-ref-active-label">ACTIVE LIFECYCLE STAGE</span>
                  <span className="hww-ref-duration-pill">
                    <span>⏱</span> {currentStage.duration}
                  </span>
                </div>

                <div className="hww-ref-stage-number-title">
                  STAGE {currentStage.number} <span className="slash-total">/ 07</span>
                </div>

                {/* Lifecycle Completion Progress */}
                <div className="hww-ref-progress-block">
                  <div className="hww-ref-progress-labels">
                    <span>Lifecycle Completion</span>
                    <span className="hww-ref-progress-percent">{currentStage.percentage}</span>
                  </div>

                  <div className="hww-ref-progress-track">
                    <div
                      className="hww-ref-progress-fill"
                      style={{ width: `${currentStage.progressVal}%` }}
                    />
                  </div>

                  {/* 7 Mini Stage Pills */}
                  <div className="hww-ref-mini-stages-row">
                    {stages.map((stg) => (
                      <button
                        key={stg.id}
                        className={`hww-ref-mini-stage-btn ${stg.id === activeStageId ? "active" : ""}`}
                        onClick={() => scrollToStage(stg.id)}
                        title={stg.name}
                      >
                        {stg.number}
                      </button>
                    ))}
                  </div>
                </div>

                <h2 className="hww-ref-stage-name-heading">{currentStage.title}</h2>
                <p className="hww-ref-stage-subtext">{currentStage.subtitle}</p>

                {/* Key Deliverables Box */}
                <div className="hww-ref-deliverables-box">
                  <div className="hww-ref-box-title">KEY DELIVERABLES</div>
                  {currentStage.keyDeliverables.map((item, idx) => (
                    <div key={idx} className="hww-ref-deliv-item">
                      <span className="hww-ref-deliv-icon">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Guarantee Highlight Box */}
                <div className="hww-ref-highlight-box">
                  <span className="hww-ref-highlight-icon">🛡️</span>
                  <span>{currentStage.guarantee}</span>
                </div>

                {/* Start Process Button */}
                <Link href="/contact" className="hww-ref-start-btn">
                  <span>START THIS PROCESS</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: ALL 7 STAGES RENDERED SEQUENTIALLY ON SCROLL */}
            <div className="hww-stages-stack">
              {stages.map((stage) => {
                const isActive = stage.id === activeStageId;
                return (
                  <div
                    key={stage.id}
                    id={`stage-card-${stage.id}`}
                    className={`hww-ref-card hww-stage-scroll-item ${isActive ? "is-active-card" : ""}`}
                  >
                    <div className="hww-ref-right-top">
                      <div className="hww-ref-right-title-group">
                        <div className="hww-ref-icon-bubble">{stage.icon}</div>
                        <div>
                          <div className="hww-ref-stage-tag">STAGE {stage.number}</div>
                          <h2 className="hww-ref-main-title">{stage.title}</h2>
                        </div>
                      </div>
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                      <span className="hww-ref-right-duration-pill">
                        <span>⏱</span> {stage.duration}
                      </span>
                    </div>

                    <p className="hww-ref-right-desc">{stage.description}</p>

                    <div className="hww-ref-divider" />

                    {/* What Happens In This Phase */}
                    <div className="hww-ref-section-label">WHAT HAPPENS IN THIS PHASE</div>
                    <div className="hww-ref-bullet-list">
                      {stage.whatHappens.map((item, idx) => (
                        <div key={idx} className="hww-ref-bullet-item">
                          <span className="hww-ref-orange-dot" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="hww-ref-divider" />

                    {/* Tangible Deliverables */}
                    <div className="hww-ref-section-label">TANGIBLE DELIVERABLES</div>
                    <div className="hww-ref-pills-wrap">
                      {stage.tangibleDeliverables.map((item, idx) => (
                        <div key={idx} className="hww-ref-tangible-pill">
                          <span className="hww-ref-pill-check">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
