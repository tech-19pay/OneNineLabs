"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DigitalFeaturesInfographic from "@/components/DigitalFeaturesInfographic";

const featuresData = [
  {
    id: "live-tracking",
    num: "01",
    tag: "Real-time Metrics",
    title: "Live Speed & Mistake Tracking",
    shortDesc: "Take a typing test and see your speed in Words Per Minute (WPM). The app will instantly show you exactly how many mistakes you made.",
    badge: "Instant Telemetry",
    color: "#6366f1",
    accentLight: "rgba(99, 102, 241, 0.08)",
    accentBorder: "rgba(99, 102, 241, 0.25)",
    highlights: [
      "Gross & Net WPM calculated per keystroke with zero latency",
      "Instant error categorization: spelling, omitted words & spacing",
      "Real-time visual indicator for live test pacing"
    ],
    stats: [
      { label: "WPM Precision", value: "±0.1 WPM" },
      { label: "Error Detection", value: "Instant" },
      { label: "Engine Latency", value: "< 2ms" }
    ]
  },
  {
    id: "pdf-reports",
    num: "02",
    tag: "Examination Scorecards",
    title: "Download Detailed PDF Reports",
    shortDesc: "Download a full PDF report of your test. It shows every single detail: your total words, where you made mistakes, spacing errors, and missed full stops.",
    badge: "Print & Export Ready",
    color: "#0ea5e9",
    accentLight: "rgba(14, 165, 233, 0.08)",
    accentBorder: "rgba(14, 165, 233, 0.25)",
    highlights: [
      "Comprehensive word-by-word error mapping with color highlights",
      "Accurate penalty calculation: half-mistakes & full-mistakes breakdown",
      "Direct print-ready & downloadable certified examination scorecard"
    ],
    stats: [
      { label: "Export Format", value: "Vector PDF" },
      { label: "Audit Level", value: "Exact Letter" },
      { label: "Report Time", value: "1-Click" }
    ]
  },
  {
    id: "hindi-english",
    num: "03",
    tag: "Bilingual Typing Engine",
    title: "Hindi & English Support",
    shortDesc: "Practice and test your typing in both Hindi and English. The app fully supports both languages for all your speed tests and reviews.",
    badge: "Dual Script Engine",
    color: "#10b981",
    accentLight: "rgba(16, 185, 129, 0.08)",
    accentBorder: "rgba(16, 185, 129, 0.25)",
    highlights: [
      "Complete support for Mangal Unicode (Inscript / Remington GAIL)",
      "Legacy Kruti Dev 010 & DevLys support with automatic glyph mapping",
      "Seamless single-click language switching between Hindi & English"
    ],
    stats: [
      { label: "Hindi Fonts", value: "Mangal + Kruti" },
      { label: "Keyboards", value: "GAIL & Inscript" },
      { label: "Dual Review", value: "Native" }
    ]
  },
  {
    id: "upload-pdf",
    num: "04",
    tag: "Document Ingestion",
    title: "Upload PDFs for Practice",
    shortDesc: "You can upload your own PDF documents in Hindi or English. The app will read the text so you can type, practice, and review your performance directly.",
    badge: "Smart Document OCR",
    color: "#f59e0b",
    accentLight: "rgba(245, 158, 11, 0.08)",
    accentBorder: "rgba(245, 158, 11, 0.25)",
    highlights: [
      "Upload court judgments, editorial articles, or past exam question papers",
      "Automated whitespace cleanup & punctuation normalization",
      "Instantly turns uploaded PDFs into custom practice tests"
    ],
    stats: [
      { label: "Input Files", value: "PDF & TXT" },
      { label: "Text Extraction", value: "Instant Clean" },
      { label: "Custom Tests", value: "Unlimited" }
    ]
  },
  {
    id: "custom-timer",
    num: "05",
    tag: "Pacing & Exam Modes",
    title: "Custom Timer & Goals",
    shortDesc: "Set personalized timers (1-minute, 5-minute, or custom) and word count goals to challenge yourself and track your daily progress.",
    badge: "Precision Pacing",
    color: "#8b5cf6",
    accentLight: "rgba(139, 92, 246, 0.08)",
    accentBorder: "rgba(139, 92, 246, 0.25)",
    highlights: [
      "Pre-configured 1-min, 5-min, 10-min, and 15-min examination durations",
      "Target WPM benchmark with real-time on-screen pacekeeper",
      "Strict Exam Mode: lock backspace & disable text copy-paste"
    ],
    stats: [
      { label: "Preset Times", value: "1 to 30 Min" },
      { label: "Target Goals", value: "30-120 WPM" },
      { label: "Exam Rules", value: "Lockable" }
    ]
  },
  {
    id: "custom-requirements",
    num: "06",
    tag: "Institutional Tailoring",
    title: "As Per Your Requirement",
    shortDesc: "Need something specific? If you have any additional custom feature requests, we will build and provide them exactly according to your unique requirements.",
    badge: "100% Customized",
    color: "#ec4899",
    accentLight: "rgba(236, 72, 153, 0.08)",
    accentBorder: "rgba(236, 72, 153, 0.25)",
    highlights: [
      "Custom marking schemes for SSC, High Court, RRB, and State CPCT boards",
      "Special keystroke penalty formulas and custom backspace penalty rules",
      "Institutional white-labeling, batch student tracking, and custom portals"
    ],
    stats: [
      { label: "Exam Boards", value: "All Major Govt" },
      { label: "Rule Config", value: "Fully Bespoke" },
      { label: "Support", value: "Direct Team" }
    ]
  }
];

export default function ProductPageContent() {
  const [mounted, setMounted] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="product-page-wrapper">
      <Header variant="light" />

      {/* Hero Section */}
      <section className="product-hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
        </div>
        <div className="hero-content">
          <div className="badge">✨ OUR LATEST PRODUCT</div>
          <h1 className="hero-title">
            Stenography Practice & <br />
            <span className="text-gradient">Speed Test Apps</span>
          </h1>
          <p className="hero-subtitle">
            Test your stenography speed with precision. Get real-time chord analytics, accurate WPM tracking, and instant feedback to evaluate your performance.
          </p>
          <div className="hero-highlight">
            ⌨️ You can easily attach an external keyboard to your mobile app for typing practice.
          </div>
          <div className="hero-actions">
            <Link href="#features" className="btn-primary">Explore Features</Link>
            <Link href="/contact" className="btn-secondary">Contact us for More </Link>
          </div>
        </div>
      </section>

      {/* Main Details Section */}
      <section id="features" className="product-details-section">
        <div className="details-container">
          <div className="section-header">
            <div className="feature-pill-badge">
              <span className="pill-dot"></span>
              ALL-IN-ONE PRACTICE &amp; EVALUATION ENGINE
            </div>
            <h2>Complete Typing Features</h2>
            <p>Take tests, track every single mistake, download detailed PDF reports, and practice with precision.</p>
          </div>

          {/* Digital Products Features Infographic Matching User Reference Image */}
          <DigitalFeaturesInfographic />
        </div>
      </section>

      {/* CTA Section */}
      <section className="product-cta">
        <div className="cta-box">
          <h2>Ready to Master the Keyboard?</h2>
          <p>Join thousands of users who have transformed their productivity.</p>
          <Link href="/contact" className="btn-primary">Start Your Free Trial</Link>
        </div>
      </section>

      <Footer />

      <style dangerouslySetInnerHTML={{
        __html: `
        .product-page-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: #f8fafc;
          font-family: 'Inter', sans-serif;
        }

        /* Hero */
        .product-hero {
          position: relative;
          padding: 130px 24px 35px;
          text-align: center;
          overflow: hidden;
          background: #ffffff;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
        }

        .orb-1 {
          width: 500px;
          height: 500px;
          background: #6366f1;
          top: -100px;
          left: -100px;
        }

        .orb-2 {
          width: 600px;
          height: 600px;
          background: #0ea5e9;
          bottom: -200px;
          right: -100px;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 900px;
          margin: 0 auto;
        }

        .badge {
          display: inline-block;
          padding: 8px 16px;
          background: rgba(99, 102, 241, 0.1);
          color: #4f46e5;
          border-radius: 9999px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: clamp(40px, 6vw, 72px);
          font-weight: 900;
          color: #0f172a;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -0.03em;
        }

        .text-gradient {
          background: linear-gradient(135deg, #6366f1, #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 18px;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 24px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-highlight {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #f0fdf4;
          color: #15803d;
          padding: 12px 24px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 40px;
          border: 1px solid #bbf7d0;
          box-shadow: 0 4px 12px rgba(21, 128, 61, 0.05);
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: #0f172a;
          color: #ffffff;
          padding: 14px 28px;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 10px 20px rgba(15, 23, 42, 0.15);
        }

        .btn-primary:hover {
          background: #1e293b;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: #ffffff;
          color: #0f172a;
          padding: 14px 28px;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          border: 1px solid #e2e8f0;
        }

        .btn-secondary:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
        }

        /* Details */
        .product-details-section {
          position: relative;
          padding: 42px 20px 40px;
          background: #ffffff;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
        }

        .details-container {
          max-width: 1240px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 12px;
        }

        .section-header h2 {
          font-size: clamp(26px, 3.2vw, 36px);
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 4px;
        }

        .section-header p {
          font-size: 14.5px;
          color: #64748b;
          line-height: 1.45;
        }

        .feature-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 4px 12px;
          background: rgba(99, 102, 241, 0.08);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 9999px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #4f46e5;
          margin-bottom: 6px;
          text-transform: uppercase;
        }

        .pill-dot {
          width: 7px;
          height: 7px;
          background: #4f46e5;
          border-radius: 50%;
          box-shadow: 0 0 10px #4f46e5;
          animation: pulseDot 2s infinite;
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }

        /* CTA */
        .product-cta {
          padding: 36px 24px;
          background: #ffffff;
        }

        .cta-box {
          max-width: 1000px;
          margin: 0 auto;
          background: linear-gradient(135deg, #0ea5e9, #6366f1);
          padding: 60px 40px;
          border-radius: 32px;
          text-align: center;
          color: #ffffff;
          box-shadow: 0 25px 50px rgba(99, 102, 241, 0.2);
        }

        .cta-box h2 {
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 800;
          margin-bottom: 16px;
        }

        .cta-box p {
          font-size: 18px;
          opacity: 0.9;
          margin-bottom: 32px;
        }

        /* Steno Section */
        .steno-section {
          padding: 100px 24px;
          background: #ffffff;
        }

        .steno-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 60px;
          flex-wrap: wrap;
        }

        .steno-image-wrapper {
          flex: 1;
          min-width: 300px;
          position: relative;
        }

        .steno-image {
          width: 100%;
          border-radius: 24px;
          box-shadow: 0 30px 60px -15px rgba(0,0,0,0.15);
          position: relative;
          z-index: 10;
        }

        .steno-glow {
          position: absolute;
          inset: -20px;
          background: linear-gradient(135deg, #6366f1, #0ea5e9);
          filter: blur(40px);
          opacity: 0.15;
          z-index: 0;
          border-radius: 40px;
        }

        .steno-content {
          flex: 1;
          min-width: 300px;
        }

        .steno-badge {
          background: rgba(14, 165, 233, 0.1);
          color: #0ea5e9;
        }

        .steno-content h2 {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 24px;
          line-height: 1.1;
        }

        .steno-content p {
          font-size: 18px;
          color: #475569;
          line-height: 1.7;
          margin-bottom: 32px;
        }

        .steno-features {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .steno-features li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          font-weight: 600;
          color: #1e293b;
        }

        .steno-features li span {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #e0f2fe;
          color: #0284c7;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        /* Mobile & Tablet Responsiveness */
        @media (max-width: 1024px) {
          .product-hero {
            padding: 120px 24px 80px;
          }
          .hero-title {
            font-size: clamp(36px, 5vw, 56px);
          }
          .hero-subtitle {
            font-size: 18px;
          }
          .product-details-section, .product-cta {
            padding: 80px 24px;
          }
          .studio-container {
            grid-template-columns: 1fr;
          }

        }

        @media (max-width: 768px) {
          .product-hero {
            padding: 100px 16px 60px;
          }
          .hero-title {
            font-size: clamp(28px, 8vw, 40px);
          }
          .hero-subtitle {
            font-size: 16px;
            margin-bottom: 32px;
          }
          .hero-actions {
            flex-direction: column;
            gap: 16px;
            width: 100%;
          }
          .btn-primary, .btn-secondary {
            width: 100%;
            display: block;
            text-align: center;
          }
          .product-details-section, .product-cta {
            padding: 60px 16px;
          }
          .section-header h2 {
            font-size: 28px;
          }
          .section-header p {
            font-size: 16px;
          }
          .studio-nav-column {
            padding: 14px;
            border-radius: 18px;
          }
          .studio-nav-item {
            padding: 12px;
          }

          .cta-box {
            padding: 40px 24px;
          }
          .cta-box h2 {
            font-size: 28px;
          }
          .cta-box p {
            font-size: 16px;
          }
        }
      `}} />
    </div>
  );
}
