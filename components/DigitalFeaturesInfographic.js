"use client";

import React, { useState } from "react";

const features = [
  {
    id: "speed-tracking",
    emoji: "⚡",
    title: "Live Speed & Mistake Tracking",
    shortDesc: "Real-time Gross & Net WPM with instant mistake detection and zero latency.",
    dataPills: [
      "Gross & Net WPM",
      "±0.1 Precision",
      "Latency < 2ms"
    ],
    color: "#f59e0b",
    colorLight: "rgba(245, 158, 11, 0.1)",
    gradient: "linear-gradient(135deg, #fcd34d 0%, #f59e0b 60%, #d97706 100%)",
    shadowColor: "rgba(245, 158, 11, 0.35)",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="rgba(255,255,255,0.2)" />
      </svg>
    ),
    screenIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    side: "left",
    cx: 385,
    cy: 515,
    cardX: 325,
    cardY: 535,
    r: 32,
    liveMockup: {
      tag: "⚡ LIVE TELEMETRY",
      metric: "52.4 WPM",
      metricLabel: "Net Speed Benchmark",
      sub1: "Accuracy: 98.6%",
      sub2: "Instant Errors: 2",
      badge: "Zero Latency Engine"
    }
  },
  {
    id: "upload-pdf",
    emoji: "📑",
    title: "Upload PDFs for Practice",
    shortDesc: "Upload court judgments or exam papers. Cleaned automatically for custom tests.",
    dataPills: [
      "PDF & TXT Files",
      "Court Judgments",
      "Auto OCR Clean"
    ],
    color: "#f97316",
    colorLight: "rgba(249, 115, 22, 0.1)",
    gradient: "linear-gradient(135deg, #fb923c 0%, #f97316 60%, #ea580c 100%)",
    shadowColor: "rgba(249, 115, 22, 0.35)",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <polyline points="9 15 12 12 15 15" />
      </svg>
    ),
    screenIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
    side: "left",
    cx: 335,
    cy: 350,
    cardX: 275,
    cardY: 350,
    r: 32,
    liveMockup: {
      tag: "📑 CUSTOM TEST",
      metric: "940 Words",
      metricLabel: "Court_Case_Exam.pdf",
      sub1: "Cleaned: 100% Text",
      sub2: "Language: Bilingual",
      badge: "Instant OCR Ready"
    }
  },
  {
    id: "custom-timer",
    emoji: "⏱️",
    title: "Custom Timer & Goals",
    shortDesc: "Custom countdown timers, target WPM benchmarks, and strict exam lockdown.",
    dataPills: [
      "1 to 30 Min Timer",
      "30–120 WPM Goal",
      "Lock Backspace"
    ],
    color: "#e11d48",
    colorLight: "rgba(225, 29, 72, 0.1)",
    gradient: "linear-gradient(135deg, #f43f5e 0%, #e11d48 60%, #be123c 100%)",
    shadowColor: "rgba(225, 29, 72, 0.35)",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="13" r="8" fill="rgba(255,255,255,0.2)" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="13" x2="14.5" y2="15.5" />
        <line x1="12" y1="2" x2="12" y2="4" />
        <line x1="10" y1="2" x2="14" y2="2" />
      </svg>
    ),
    screenIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="13" r="8" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="2" x2="12" y2="4" />
      </svg>
    ),
    side: "left",
    cx: 410,
    cy: 185,
    cardX: 350,
    cardY: 165,
    r: 32,
    liveMockup: {
      tag: "⏱️ EXAM TIMER",
      metric: "09:45",
      metricLabel: "Time Remaining",
      sub1: "Goal: 45 WPM",
      sub2: "Backspace: 🔒 Locked",
      badge: "Strict Exam Mode"
    }
  },
  {
    id: "english-support",
    emoji: "🌐",
    title: "Hindi & English Support",
    shortDesc: "Dual typing engine supporting Hindi (Mangal, Kruti Dev) & English exam reviews.",
    dataPills: [
      "Hindi & English",
      "Mangal / Kruti Dev",
      "Exam Standard"
    ],
    color: "#10b981",
    colorLight: "rgba(16, 185, 129, 0.1)",
    gradient: "linear-gradient(135deg, #34d399 0%, #10b981 60%, #059669 100%)",
    shadowColor: "rgba(16, 185, 129, 0.35)",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9.5" fill="rgba(255,255,255,0.15)" />
        <line x1="2.5" y1="12" x2="21.5" y2="12" />
        <path d="M12 2.5a14 14 0 0 1 0 19" />
        <path d="M12 2.5a14 14 0 0 0 0 19" />
      </svg>
    ),
    screenIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <line x1="3" y1="12" x2="21" y2="12" />
      </svg>
    ),
    side: "right",
    cx: 830,
    cy: 185,
    cardX: 890,
    cardY: 165,
    r: 32,
    liveMockup: {
      tag: "🌐 BILINGUAL ENGINE",
      metric: "Hindi & English",
      metricLabel: "Mangal • Kruti Dev • QWERTY",
      sub1: "Layout: Exam Standard",
      sub2: "Real-time Evaluation",
      badge: "Govt Certified"
    }
  },
  {
    id: "download-pdf",
    emoji: "📥",
    title: "Download Detailed PDF Reports",
    shortDesc: "Certified scorecards with word-by-word error highlights and penalty audits.",
    dataPills: [
      "Vector PDF Export",
      "Full & Half Errors",
      "1-Click Print"
    ],
    samplePdfUrl: "/sample-typing-report.pdf",
    color: "#0ea5e9",
    colorLight: "rgba(14, 165, 233, 0.1)",
    gradient: "linear-gradient(135deg, #38bdf8 0%, #0ea5e9 60%, #0284c7 100%)",
    shadowColor: "rgba(14, 165, 233, 0.35)",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    screenIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    side: "right",
    cx: 905,
    cy: 350,
    cardX: 965,
    cardY: 350,
    r: 32,
    liveMockup: {
      tag: "📥 EVALUATION REPORT",
      metric: "432.9 WPM",
      metricLabel: "Type_Vault_Report.pdf",
      sub1: "Accuracy: 93.76%",
      sub2: "Full Mistakes: 25",
      badge: "Verified Result"
    }
  },
  {
    id: "custom-req",
    emoji: "⚙️",
    title: "As Per Your Requirement",
    shortDesc: "Need something specific? If you have any additional custom feature requests, we will build and provide them exactly according to your unique requirements.",
    dataPills: [
      "Custom Features",
      "Bespoke Builds",
      "100% Tailored"
    ],
    color: "#2563eb",
    colorLight: "rgba(37, 99, 235, 0.1)",
    gradient: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 60%, #1d4ed8 100%)",
    shadowColor: "rgba(37, 99, 235, 0.35)",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" fill="rgba(255,255,255,0.2)" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    screenTileColor: "#2563eb",
    screenIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    side: "right",
    cx: 855,
    cy: 515,
    cardX: 915,
    cardY: 535,
    r: 32,
    liveMockup: {
      tag: "⚙️ TAILORED SYSTEM",
      metric: "Custom Built",
      metricLabel: "Built to your exact needs",
      sub1: "Custom Feature Requests",
      sub2: "Tailored Architecture",
      badge: "100% Bespoke Setup"
    }
  }
];

export default function DigitalFeaturesInfographic() {
  const [activeFeature, setActiveFeature] = useState(null);

  const currentActive = activeFeature !== null ? features[activeFeature] : null;

  return (
    <div className="digital-infographic-root">
      {/* DESKTOP WIDESCREEN DIAGRAM - REFINED 1240x700 ASPECT RATIO */}
      <div className="infographic-desktop-wrapper">
        <div className="infographic-stage">
          <svg
            viewBox="0 75 1240 580"
            className="infographic-svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Drop Shadows */}
              <filter id="badge-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#0f172a" floodOpacity="0.18" />
                <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#0f172a" floodOpacity="0.08" />
              </filter>
              <filter id="badge-shadow-hover" x="-60%" y="-60%" width="220%" height="220%">
                <feDropShadow dx="0" dy="10" stdDeviation="9" floodColor="#0f172a" floodOpacity="0.28" />
              </filter>
              <filter id="phone-shadow" x="-40%" y="-40%" width="180%" height="180%">
                <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="#0f172a" floodOpacity="0.22" />
              </filter>
              <filter id="hand-shadow" x="-40%" y="-40%" width="180%" height="180%">
                <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#0f172a" floodOpacity="0.10" />
              </filter>

              {/* Hand Flat Skin Color */}
              <linearGradient id="hand-skin" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f7c8a4" />
                <stop offset="100%" stopColor="#f3be98" />
              </linearGradient>

              {/* Phone Gradients */}
              <linearGradient id="phone-case" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#18181b" />
                <stop offset="100%" stopColor="#09090b" />
              </linearGradient>

              {/* Circle Gradients */}
              {features.map((feat) => (
                <linearGradient key={`grad-${feat.id}`} id={`grad-${feat.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  {feat.id === "speed-tracking" && (
                    <>
                      <stop offset="0%" stopColor="#fde047" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#d97706" />
                    </>
                  )}
                  {feat.id === "upload-pdf" && (
                    <>
                      <stop offset="0%" stopColor="#fb923c" />
                      <stop offset="50%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#ea580c" />
                    </>
                  )}
                  {feat.id === "custom-timer" && (
                    <>
                      <stop offset="0%" stopColor="#fb7185" />
                      <stop offset="50%" stopColor="#e11d48" />
                      <stop offset="100%" stopColor="#be123c" />
                    </>
                  )}
                  {feat.id === "english-support" && (
                    <>
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="50%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#059669" />
                    </>
                  )}
                  {feat.id === "download-pdf" && (
                    <>
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="50%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </>
                  )}
                  {feat.id === "custom-req" && (
                    <>
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="50%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#1d4ed8" />
                    </>
                  )}
                </linearGradient>
              ))}
            </defs>

            {/* 1. SMOOTH ARCH TRACK CONNECTING BADGES */}
            <path
              d="M 385 515 C 350 460 335 400 335 350 C 335 235 440 150 620 150 C 800 150 905 235 905 350 C 905 400 890 460 855 515"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="arc-track-line"
            />

            {/* 2. HAND HOLDING PHONE (Behind phone with wrist entering from bottom-right) */}
            <g className="hand-illustration" filter="url(#hand-shadow)">
              {/* Wrist / Arm angled from bottom right */}
              <path
                d="M 625 640 L 610 595 C 605 565 580 545 560 535 L 525 560 C 495 585 475 620 465 640 Z"
                fill="url(#hand-skin)"
              />
              {/* Palm bulk behind phone */}
              <path
                d="M 515 565 C 495 525 500 465 520 430 C 535 405 580 405 605 430 C 650 475 675 535 650 600 Z"
                fill="url(#hand-skin)"
              />
            </g>

            {/* 3. SMARTPHONE (Centered at X: 620, Y: 335 to 615) */}
            <g className="phone-device" filter="url(#phone-shadow)">
              {/* Outer Phone Case */}
              <rect
                x="543"
                y="335"
                width="154"
                height="280"
                rx="24"
                fill="url(#phone-case)"
                stroke="#27272a"
                strokeWidth="2"
              />

              {/* Top Speaker Earpiece (White / Silver Bar) */}
              <rect
                x="607"
                y="348"
                width="26"
                height="3"
                rx="1.5"
                fill="#ffffff"
                opacity="0.9"
              />

              {/* Phone Screen (White / Light Background) */}
              <rect
                x="554"
                y="363"
                width="132"
                height="222"
                rx="12"
                fill="#ffffff"
              />

              {/* SCREEN CONTENT: Dynamic Live Telemetry or 2x2 App Tiles Grid */}
              {currentActive ? (
                // DYNAMIC ACTIVE PREVIEW CARD INSIDE PHONE SCREEN
                <g className="screen-active-live-card">
                  {/* Top Status Bar */}
                  <text x="564" y="375" fontSize="7" fontWeight="700" fill="#64748b" fontFamily="Inter, sans-serif">09:41</text>
                  <text x="676" y="375" textAnchor="end" fontSize="6.5" fontWeight="700" fill="#64748b" fontFamily="Inter, sans-serif">● 5G</text>

                  {/* Top Header Tag */}
                  <rect x="560" y="379" width="120" height="20" rx="5" fill={currentActive.color} opacity="0.15" />
                  <text x="620" y="392" textAnchor="middle" fill={currentActive.color} fontSize="7.8" fontWeight="800" letterSpacing="0.4" fontFamily="Inter, sans-serif">
                    {currentActive.liveMockup.tag}
                  </text>

                  {/* Main Metric Box */}
                  <rect x="560" y="403" width="120" height="56" rx="7" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                  <text
                    x="620"
                    y="429"
                    textAnchor="middle"
                    fill="#0f172a"
                    fontSize={currentActive.liveMockup.metric.length > 9 ? "11.5" : "15"}
                    fontWeight="800"
                    letterSpacing="-0.2"
                    textLength={currentActive.liveMockup.metric.length > 9 ? "98" : undefined}
                    lengthAdjust="spacingAndGlyphs"
                    fontFamily="Inter, sans-serif"
                  >
                    {currentActive.liveMockup.metric}
                  </text>
                  <text
                    x="620"
                    y="446"
                    textAnchor="middle"
                    fill="#64748b"
                    fontSize="6.8"
                    fontWeight="600"
                    textLength={currentActive.liveMockup.metricLabel.length > 20 ? "106" : undefined}
                    lengthAdjust="spacingAndGlyphs"
                    fontFamily="Inter, sans-serif"
                  >
                    {currentActive.liveMockup.metricLabel}
                  </text>

                  {/* Sub Info Row 1 */}
                  <rect x="560" y="465" width="120" height="21" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.8" />
                  <circle cx="570" cy="475.5" r="2.2" fill={currentActive.color} />
                  <text
                    x="577"
                    y="479"
                    fill="#334155"
                    fontSize="6.8"
                    fontWeight="700"
                    textLength={currentActive.liveMockup.sub1.length > 20 ? "95" : undefined}
                    lengthAdjust="spacingAndGlyphs"
                    fontFamily="Inter, sans-serif"
                  >
                    {currentActive.liveMockup.sub1}
                  </text>

                  {/* Sub Info Row 2 */}
                  <rect x="560" y="491" width="120" height="21" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.8" />
                  <circle cx="570" cy="501.5" r="2.2" fill={currentActive.color} />
                  <text
                    x="577"
                    y="505"
                    fill="#334155"
                    fontSize="6.8"
                    fontWeight="700"
                    textLength={currentActive.liveMockup.sub2.length > 20 ? "95" : undefined}
                    lengthAdjust="spacingAndGlyphs"
                    fontFamily="Inter, sans-serif"
                  >
                    {currentActive.liveMockup.sub2}
                  </text>

                  {/* Bottom Verification Badge */}
                  <rect x="560" y="517" width="120" height="22" rx="6" fill={currentActive.gradient} />
                  <text x="620" y="531" textAnchor="middle" fill="#ffffff" fontSize="7.5" fontWeight="800" fontFamily="Inter, sans-serif">
                    {currentActive.liveMockup.badge}
                  </text>

                  {/* Back to All Apps View button */}
                  <g style={{ cursor: "pointer" }} onClick={(e) => { e.stopPropagation(); setActiveFeature(null); }}>
                    <rect x="575" y="545" width="90" height="20" rx="10" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="0.8" />
                    <text x="620" y="558" textAnchor="middle" fill="#475569" fontSize="7.2" fontWeight="700" fontFamily="Inter, sans-serif">
                      ← All Apps View
                    </text>
                  </g>
                </g>
              ) : (
                // DEFAULT 2x2 APP TILES GRID WITH COMPLETE LABELS & LIVE TELEMETRY HUD
                <g className="screen-default-tiles">
                  {/* Phone Status Bar */}
                  <text x="564" y="375" fontSize="7" fontWeight="700" fill="#64748b" fontFamily="Inter, sans-serif">09:41</text>
                  <rect x="612" y="366" width="16" height="2.5" rx="1.2" fill="#0f172a" opacity="0.3" />
                  <rect x="662" y="369" width="10" height="5" rx="1" fill="none" stroke="#94a3b8" strokeWidth="0.8" />
                  <rect x="663.5" y="370.5" width="6" height="2" rx="0.5" fill="#10b981" />

                  {/* App Header Bar */}
                  <rect x="562" y="379" width="116" height="18" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.8" />
                  <circle cx="572" cy="388" r="2.5" fill="#10b981" />
                  <text x="579" y="391" fontSize="7.5" fontWeight="800" fill="#0f172a" fontFamily="Inter, sans-serif">TypeVault Pro</text>
                  <text x="670" y="391" textAnchor="end" fontSize="6.5" fontWeight="700" fill="#6366f1" fontFamily="Inter, sans-serif">ACTIVE</text>

                  {/* Row 1 - Left: Coral Red (Timer ⏱️) */}
                  <g style={{ cursor: "pointer" }} onClick={() => setActiveFeature(2)}>
                    <rect
                      x="569"
                      y="402"
                      width="38"
                      height="30"
                      rx="7"
                      fill="#e11d48"
                      className="screen-app-tile"
                    />
                    <g transform="translate(579, 408)" pointerEvents="none">
                      {features[2].screenIcon}
                    </g>
                    <text x="588" y="442" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#1e293b" fontFamily="Inter, sans-serif">
                      Timer
                    </text>
                  </g>

                  {/* Row 1 - Right: Mint Green (English Support 🌐) */}
                  <g style={{ cursor: "pointer" }} onClick={() => setActiveFeature(3)}>
                    <rect
                      x="633"
                      y="402"
                      width="38"
                      height="30"
                      rx="7"
                      fill="#10b981"
                      className="screen-app-tile"
                    />
                    <g transform="translate(643, 408)" pointerEvents="none">
                      {features[3].screenIcon}
                    </g>
                    <text x="652" y="442" textAnchor="middle" fontSize="6.8" fontWeight="700" fill="#1e293b" fontFamily="Inter, sans-serif">
                      Hindi / Eng
                    </text>
                  </g>

                  {/* Row 2 - Left: Amber/Yellow (Speed Tracking ⚡) */}
                  <g style={{ cursor: "pointer" }} onClick={() => setActiveFeature(0)}>
                    <rect
                      x="569"
                      y="447"
                      width="38"
                      height="30"
                      rx="7"
                      fill="#f59e0b"
                      className="screen-app-tile"
                    />
                    <g transform="translate(579, 453)" pointerEvents="none">
                      {features[0].screenIcon}
                    </g>
                    <text x="588" y="487" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#1e293b" fontFamily="Inter, sans-serif">
                      Speed
                    </text>
                  </g>

                  {/* Row 2 - Right: Sky Blue (PDF Reports 📥) */}
                  <g style={{ cursor: "pointer" }} onClick={() => setActiveFeature(4)}>
                    <rect
                      x="633"
                      y="447"
                      width="38"
                      height="30"
                      rx="7"
                      fill="#0ea5e9"
                      className="screen-app-tile"
                    />
                    <g transform="translate(643, 453)" pointerEvents="none">
                      {features[4].screenIcon}
                    </g>
                    <text x="652" y="487" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#1e293b" fontFamily="Inter, sans-serif">
                      Reports
                    </text>
                  </g>

                  {/* Screen Pagination Dots (...) */}
                  <g transform="translate(620, 495)">
                    <circle cx="-8" cy="0" r="1.8" fill="#cbd5e1" />
                    <circle cx="0" cy="0" r="2.2" fill="#94a3b8" />
                    <circle cx="8" cy="0" r="1.8" fill="#cbd5e1" />
                  </g>

                  {/* Bottom Live Speed Audit Telemetry HUD Card with Full Text */}
                  <g>
                    <rect x="562" y="502" width="116" height="70" rx="7" fill="#0f172a" stroke="#1e293b" strokeWidth="0.8" />
                    <rect x="562" y="502" width="116" height="2" rx="1" fill="#0ea5e9" />
                    
                    {/* Header */}
                    <text x="570" y="515" fontSize="6.5" fontWeight="800" fill="#38bdf8" letterSpacing="0.4" fontFamily="Inter, sans-serif">
                      ⚡ LIVE SPEED AUDIT
                    </text>

                    {/* Big Numbers */}
                    <text x="570" y="533" fontSize="13" fontWeight="900" fill="#ffffff" fontFamily="Inter, sans-serif">
                      432.9
                    </text>
                    <text x="612" y="533" fontSize="7" fontWeight="700" fill="#94a3b8" fontFamily="Inter, sans-serif">
                      WPM
                    </text>
                    <rect x="632" y="522" width="40" height="13" rx="6.5" fill="#10b981" />
                    <text x="652" y="531" textAnchor="middle" fontSize="6.5" fontWeight="800" fill="#ffffff" fontFamily="Inter, sans-serif">
                      93.8% ACC
                    </text>

                    {/* Progress Bar */}
                    <rect x="570" y="540" width="100" height="3" rx="1.5" fill="#334155" />
                    <rect x="570" y="540" width="94" height="3" rx="1.5" fill="#10b981" />

                    {/* Footer Info */}
                    <text x="570" y="554" fontSize="6.5" fontWeight="700" fill="#cbd5e1" fontFamily="Inter, sans-serif">
                      25 Mistakes • 1m 5s
                    </text>
                    <text x="670" y="554" textAnchor="end" fontSize="6.5" fontWeight="800" fill="#38bdf8" fontFamily="Inter, sans-serif">
                      Passed ✓
                    </text>

                    <text x="620" y="565" textAnchor="middle" fontSize="5.8" fontWeight="600" fill="#94a3b8" fontFamily="Inter, sans-serif">
                      Tap tiles to inspect features
                    </text>
                  </g>
                </g>
              )}

              {/* Bottom Home Indicator Bar */}
              <rect
                x="602"
                y="598"
                width="36"
                height="3"
                rx="1.5"
                fill="#ffffff"
                opacity="0.8"
              />
            </g>

            {/* 4. HAND FINGERS GRIPPING THE PHONE */}
            <g className="hand-fingers-left">
              <path
                d="M 545 440 C 534 440 526 447 526 455 C 526 463 534 470 545 470 Z"
                fill="url(#hand-skin)"
                stroke="#e5a078"
                strokeWidth="0.8"
              />
              <path
                d="M 545 475 C 532 475 524 482 524 490 C 524 498 532 505 545 505 Z"
                fill="url(#hand-skin)"
                stroke="#e5a078"
                strokeWidth="0.8"
              />
              <path
                d="M 545 510 C 532 510 524 517 524 525 C 524 533 532 540 545 540 Z"
                fill="url(#hand-skin)"
                stroke="#e5a078"
                strokeWidth="0.8"
              />
              <path
                d="M 545 545 C 534 545 526 552 526 560 C 526 568 534 575 545 575 Z"
                fill="url(#hand-skin)"
                stroke="#e5a078"
                strokeWidth="0.8"
              />
            </g>

            {/* Right side: Thumb pressing on right edge */}
            <g className="hand-thumb-right">
              <path
                d="M 695 545 C 708 545 720 558 720 575 C 720 592 706 610 695 610 Z"
                fill="url(#hand-skin)"
                stroke="#e5a078"
                strokeWidth="0.8"
              />
            </g>

            {/* 5. THE 6 CIRCULAR FEATURE BADGES ALONG THE ARC */}
            {features.map((feat, idx) => {
              const isActive = activeFeature === idx;
              return (
                <g
                  key={feat.id}
                  className={`feature-node-badge ${isActive ? "active-node" : ""}`}
                  transform={`translate(${feat.cx}, ${feat.cy})`}
                  onMouseEnter={() => setActiveFeature(idx)}
                  onMouseLeave={() => setActiveFeature(null)}
                  onClick={() => setActiveFeature(activeFeature === idx ? null : idx)}
                  style={{ cursor: "pointer" }}
                >
                  {/* Main Circle Badge with Drop Shadow */}
                  <circle
                    cx="0"
                    cy="0"
                    r={feat.r}
                    fill={`url(#grad-${feat.id})`}
                    filter="url(#badge-shadow)"
                    className="badge-circle"
                  />

                  {/* Inner top rim highlight */}
                  <path
                    d={`M -${feat.r - 9} -${feat.r - 18} A ${feat.r - 5} ${feat.r - 5} 0 0 1 ${feat.r - 9} -${feat.r - 18}`}
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="1.8"
                    opacity="0.4"
                    strokeLinecap="round"
                  />

                  {/* Icon in Center */}
                  <g transform={`translate(-15, -15)`} pointerEvents="none">
                    {feat.icon}
                  </g>
                </g>
              );
            })}
          </svg>

          {/* HTML OVERLAY FOR TEXT CARDS - BALANCED & RESPONSIVELY BOXED */}
          <div className="infographic-text-layer">
            {features.map((feat, idx) => {
              const isActive = activeFeature === idx;

              const posXPercent = (feat.cardX / 1240) * 100;
              const posYPercent = ((feat.cardY - 75) / 580) * 100;

              return (
                <div
                  key={`text-${feat.id}`}
                  className={`feature-text-block side-${feat.side} ${isActive ? "is-active" : ""}`}
                  style={{
                    left: `${posXPercent}%`,
                    top: `${posYPercent}%`,
                    "--accent-color": feat.color,
                    "--accent-light": feat.colorLight
                  }}
                  onMouseEnter={() => setActiveFeature(idx)}
                  onMouseLeave={() => setActiveFeature(null)}
                  onClick={() => setActiveFeature(activeFeature === idx ? null : idx)}
                >
                  <div className="feature-structured-card">
                    {/* Main Title Row with Emoji */}
                    <div className="card-title-row">
                      <span className="card-emoji">{feat.emoji}</span>
                      <h3 className="card-heading">{feat.title}</h3>
                    </div>

                    {/* Concise Description */}
                    <p className="card-description">{feat.shortDesc}</p>

                    {/* Data Pills Row */}
                    <div className="card-pills-row">
                      {feat.dataPills.map((pill, pIdx) => (
                        <span key={pIdx} className="card-pill">
                          {pill}
                        </span>
                      ))}
                    </div>

                    {/* Sample PDF Action Link */}
                    {feat.samplePdfUrl && (
                      <div className="card-sample-row">
                        <a
                          href={feat.samplePdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="card-sample-link"
                          onClick={(e) => e.stopPropagation()}
                          title="Open sample PDF report format"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                          </svg>
                          <span>Click here for sample</span>
                          <svg className="arrow-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* MOBILE & TABLET FALLBACK VIEW - CLEAN, THUMB-FRIENDLY & RESPONSIVE */}
      <div className="infographic-mobile-wrapper">
        <div className="mobile-badge-strip">
          {features.map((feat, idx) => (
            <button
              key={`mob-btn-${feat.id}`}
              className={`mobile-badge-btn ${activeFeature === idx ? "active" : ""}`}
              style={{
                background: activeFeature === idx ? feat.gradient : "#f8fafc",
                borderColor: activeFeature === idx ? feat.color : "#cbd5e1"
              }}
              onClick={() => setActiveFeature(activeFeature === idx ? null : idx)}
            >
              <span className="mob-badge-emoji">{feat.emoji}</span>
            </button>
          ))}
        </div>

        {/* Selected Feature Card */}
        {activeFeature !== null ? (
          <div className="mobile-feature-display-card">
            <div className="mob-card-badge" style={{ background: features[activeFeature].gradient }}>
              {features[activeFeature].icon}
            </div>
            <div className="mob-card-content">
              <h3 className="mob-card-title">
                <span className="mob-card-emoji">{features[activeFeature].emoji}</span>
                {features[activeFeature].title}
              </h3>
              <p className="mob-card-desc">{features[activeFeature].shortDesc}</p>
              <div className="mob-card-pills">
                {features[activeFeature].dataPills.map((pill, pIdx) => (
                  <span key={pIdx} className="mob-pill">
                    {pill}
                  </span>
                ))}
              </div>
              {features[activeFeature].samplePdfUrl && (
                <div className="card-sample-row mob-sample-row">
                  <a
                    href={features[activeFeature].samplePdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-sample-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                    <span>Click here for sample</span>
                    <svg className="arrow-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        ) : null}

        {/* Grid of All Features on Mobile */}
        <div className="mobile-all-features-grid">
          {features.map((feat, idx) => (
            <div
              key={`mob-card-${feat.id}`}
              className={`mob-grid-item ${activeFeature === idx ? "active" : ""}`}
              onClick={() => setActiveFeature(activeFeature === idx ? null : idx)}
            >
              <div className="mob-item-icon" style={{ background: feat.gradient }}>
                {feat.icon}
              </div>
              <div className="mob-item-text">
                <h4>
                  <span className="mob-item-emoji">{feat.emoji}</span>
                  {feat.title}
                </h4>
                <p>{feat.shortDesc}</p>
                <div className="mob-item-pills">
                  {feat.dataPills.map((pill, pIdx) => (
                    <span key={pIdx} className="mob-item-pill">
                      {pill}
                    </span>
                  ))}
                </div>
                {feat.samplePdfUrl && (
                  <div className="card-sample-row mob-sample-row">
                    <a
                      href={feat.samplePdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-sample-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                      </svg>
                      <span>Click here for sample</span>
                      <svg className="arrow-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .digital-infographic-root {
          width: 100%;
          position: relative;
          padding: 0;
        }

        /* DESKTOP STAGE */
        .infographic-desktop-wrapper {
          display: block;
          width: 100%;
          max-width: 1160px;
          margin: 0 auto;
          position: relative;
        }

        .infographic-stage {
          position: relative;
          width: 100%;
          padding-bottom: 46.77%; /* 1240 / 580 aspect ratio - compressed section */
          height: 0;
          overflow: visible;
        }

        .infographic-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
          pointer-events: all;
        }

        .badge-circle {
          transform-origin: center;
        }

        .feature-node-badge:hover .badge-circle {
          transform: none;
        }

        /* TEXT LAYER OVERLAY */
        .infographic-text-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .feature-text-block {
          position: absolute;
          pointer-events: auto;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* LEFT SIDE TEXT BLOCKS - Ends at cardX with 28px clearance from icon */
        .feature-text-block.side-left {
          transform: translate(-100%, -50%);
          padding: 0;
          width: 255px;
        }

        /* RIGHT SIDE TEXT BLOCKS - Starts at cardX with 28px clearance from icon */
        .feature-text-block.side-right {
          transform: translate(0%, -50%);
          padding: 0;
          width: 255px;
        }

        /* STRUCTURED CARD STYLING */
        .feature-structured-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 13px;
          padding: 9px 12px;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: left;
          position: relative;
        }

        .side-left .feature-structured-card {
          border-right: 3px solid var(--accent-color);
        }

        .side-right .feature-structured-card {
          border-left: 3px solid var(--accent-color);
        }

        .feature-text-block:hover .feature-structured-card,
        .feature-text-block.is-active .feature-structured-card {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
          border-color: #cbd5e1;
        }

        /* Card Title Row */
        .card-title-row {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 3px;
        }

        .card-emoji {
          font-size: 15px;
          line-height: 1;
          flex-shrink: 0;
        }

        .card-heading {
          font-size: 12.5px;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.01em;
          line-height: 1.25;
          transition: color 0.2s ease;
        }

        .feature-text-block:hover .card-heading,
        .feature-text-block.is-active .card-heading {
          color: var(--accent-color);
        }

        .card-description {
          font-size: 10px;
          line-height: 1.35;
          color: #64748b;
          margin: 0 0 5px 0;
        }

        /* Card Pills */
        .card-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 3.5px;
        }

        .card-pill {
          display: inline-flex;
          align-items: center;
          font-size: 8.5px;
          font-weight: 700;
          color: #475569;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 1.5px 5px;
          border-radius: 4px;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .feature-text-block:hover .card-pill,
        .feature-text-block.is-active .card-pill {
          background: var(--accent-light);
          border-color: var(--accent-color);
          color: #0f172a;
        }

        /* Sample PDF Action Link */
        .card-sample-row {
          margin-top: 5px;
          padding-top: 4px;
          border-top: 1px dashed #e2e8f0;
          display: flex;
          align-items: center;
        }

        .mob-sample-row {
          margin-top: 9px;
          padding-top: 8px;
        }

        .card-sample-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 2.5px 7px;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: #0284c7;
          background: #f0f9ff;
          border: 1px solid #bae6fd;
          border-radius: 6px;
          text-decoration: none;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          box-shadow: 0 1px 3px rgba(14, 165, 233, 0.08);
        }

        .card-sample-link:hover {
          background: #0ea5e9;
          color: #ffffff;
          border-color: #0ea5e9;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(14, 165, 233, 0.28);
        }

        .card-sample-link svg {
          flex-shrink: 0;
        }

        .card-sample-link .arrow-icon {
          transition: transform 0.2s ease;
        }

        .card-sample-link:hover .arrow-icon {
          transform: translate(1.5px, -1.5px);
        }

        /* MOBILE VIEW */
        .infographic-mobile-wrapper {
          display: none;
        }

        @media (max-width: 960px) {
          .infographic-desktop-wrapper {
            display: none;
          }

          .infographic-mobile-wrapper {
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 0 16px;
          }

          .mobile-badge-strip {
            display: flex;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom: 8px;
          }

          .mobile-badge-btn {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            border: 2px solid #cbd5e1;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0 3px 8px rgba(0,0,0,0.06);
          }

          .mob-badge-emoji {
            font-size: 19px;
          }

          .mobile-badge-btn.active {
            transform: scale(1.12);
            box-shadow: 0 6px 16px rgba(0,0,0,0.18);
          }

          .mobile-feature-display-card {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 20px;
            padding: 22px;
            display: flex;
            align-items: flex-start;
            gap: 16px;
            box-shadow: 0 10px 25px rgba(15, 23, 42, 0.06);
          }

          .mob-card-badge {
            width: 52px;
            height: 52px;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            box-shadow: 0 6px 14px rgba(0,0,0,0.12);
          }

          .mob-card-content {
            flex: 1;
          }

          .mob-card-title {
            font-size: 16px;
            font-weight: 800;
            color: #0f172a;
            margin: 0 0 6px 0;
            display: flex;
            align-items: center;
            gap: 6px;
          }

          .mob-card-emoji {
            font-size: 18px;
          }

          .mob-card-desc {
            font-size: 13px;
            color: #64748b;
            line-height: 1.5;
            margin: 0 0 10px 0;
          }

          .mob-card-pills {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
          }

          .mob-pill {
            font-size: 10.5px;
            font-weight: 700;
            color: #334155;
            background: #f1f5f9;
            padding: 2.5px 7px;
            border-radius: 5px;
          }

          .mobile-all-features-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
            margin-top: 8px;
          }

          .mob-grid-item {
            display: flex;
            align-items: flex-start;
            gap: 14px;
            background: #ffffff;
            border: 1px solid #e2e8f0;
            padding: 16px;
            border-radius: 16px;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .mob-grid-item.active {
            border-color: #3b82f6;
            background: #f8fafc;
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.08);
          }

          .mob-item-icon {
            width: 44px;
            height: 44px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .mob-item-text {
            display: flex;
            flex-direction: column;
            flex: 1;
          }

          .mob-item-text h4 {
            font-size: 14.5px;
            font-weight: 700;
            color: #1e293b;
            margin: 0 0 4px 0;
            display: flex;
            align-items: center;
            gap: 6px;
          }

          .mob-item-emoji {
            font-size: 16px;
          }

          .mob-item-text p {
            font-size: 12px;
            color: #64748b;
            line-height: 1.45;
            margin: 0 0 8px 0;
          }

          .mob-item-pills {
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
          }

          .mob-item-pill {
            font-size: 9.5px;
            font-weight: 600;
            color: #475569;
            background: #f1f5f9;
            padding: 2px 6px;
            border-radius: 4px;
          }
        }
      `}</style>
    </div>
  );
}
