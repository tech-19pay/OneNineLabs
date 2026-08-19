"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function SaasPageContent() {
  const [activeTab, setActiveTab] = useState("Role-based clarity");
  const [activeRoleHover, setActiveRoleHover] = useState(null);

  const tabs = [
    "Role-based clarity",
    "Short sections",
    "Benefit-first copy",
    "Easy to scan",
    "Visual-friendly layout",
  ];

  const pillarCards = [
    {
      id: "clarity",
      title: "Clarity",
      desc: "Centralize records and access data.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="3" />
          <path d="M7 15h0M2 9.5h20" />
        </svg>
      ),
    },
    {
      id: "control",
      title: "Control",
      desc: "Easily manage payroll and policies.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
    {
      id: "accuracy",
      title: "Accuracy",
      desc: "Minimize errors with automation.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      id: "visibility",
      title: "Visibility",
      desc: "Monitor performance and compliance.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <div className="saas-page-root">
      <style jsx global>{`
        @keyframes subtleFloat1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        @keyframes subtleFloat2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(6px); }
        }
        @keyframes subtleFloat3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.08); }
        }
        @keyframes dashMove {
          to { stroke-dashoffset: -20; }
        }
        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.3); opacity: 1; }
        }
      `}</style>

      <style jsx>{`
        .saas-page-root {
          font-family: -apple-system, BlinkMacSystemFont, "Plus Jakarta Sans", "Inter", sans-serif;
          color: #0f172a;
          background: #ffffff;
          overflow-x: hidden;
          width: 100%;
        }

        /* ─── HERO SECTION ─── */
        .saas-hero-wrapper {
          position: relative;
          background: radial-gradient(circle at 25% 45%, rgba(209, 250, 229, 0.45) 0%, rgba(240, 253, 244, 0.2) 40%, #ffffff 70%);
          padding: 130px 24px 80px;
          border-bottom: 1px solid #f1f5f9;
        }

        .saas-hero {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.18fr 1fr;
          gap: 40px;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .saas-hero {
            grid-template-columns: 1fr;
            padding-top: 10px;
            gap: 50px;
          }
        }

        /* Hero Left: Node Graph Network */
        .node-network-wrapper {
          position: relative;
          width: 100%;
          min-height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 640px) {
          .node-network-wrapper {
            min-height: 460px;
            transform: scale(0.85);
            transform-origin: center center;
          }
        }

        /* Ambient background glow */
        .network-ambient-glow {
          position: absolute;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(52, 211, 153, 0.22) 0%, rgba(16, 185, 129, 0.05) 55%, transparent 70%);
          border-radius: 50%;
          z-index: 1;
          animation: pulseGlow 6s ease-in-out infinite;
          pointer-events: none;
        }

        /* Central Diamond Logo Hub */
        .central-hub-container {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .central-hub-outer-ring {
          position: absolute;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          border: 1.5px dashed rgba(16, 185, 129, 0.35);
          animation: pulseGlow 4s ease-in-out infinite;
        }

        .central-hub {
          width: 68px;
          height: 68px;
          background: linear-gradient(135deg, #063a2f 0%, #03211a 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 16px 35px rgba(6, 58, 47, 0.32), 0 0 0 1px rgba(52, 211, 153, 0.25);
          cursor: pointer;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease;
        }

        .central-hub:hover {
          transform: scale(1.12);
          box-shadow: 0 20px 45px rgba(6, 58, 47, 0.45), 0 0 0 2px #34d399;
        }

        /* Floating Role Node Cards */
        .node-card {
          position: absolute;
          background: #ffffff;
          border: 1px solid #eef2f6;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.07), 0 2px 6px rgba(15, 23, 42, 0.03);
          border-radius: 14px;
          padding: 10px 16px 10px 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 8;
          transition: all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
          user-select: none;
          backdrop-filter: blur(8px);
        }

        .node-card:hover {
          transform: translateY(-4px) scale(1.03) !important;
          box-shadow: 0 20px 38px rgba(15, 23, 42, 0.12), 0 4px 10px rgba(15, 23, 42, 0.05);
          border-color: #cbd5e1;
        }

        .node-avatar-circle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          color: #ffffff;
          flex-shrink: 0;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
        }

        .node-title-text {
          font-size: 13px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.25;
          letter-spacing: -0.2px;
        }

        .node-subtitle-text {
          font-size: 11px;
          color: #64748b;
          margin-top: 2px;
          font-weight: 500;
        }

        /* 5 Node Specific Positions & Animations */
        .node-pos-1 {
          top: 30px;
          left: 15px;
          animation: subtleFloat1 5.5s ease-in-out infinite;
        }

        .node-pos-2 {
          top: 185px;
          left: -5px;
          animation: subtleFloat2 6.2s ease-in-out infinite 0.8s;
        }

        .node-pos-3 {
          bottom: 35px;
          left: 30px;
          animation: subtleFloat3 5.8s ease-in-out infinite 1.4s;
        }

        .node-pos-4 {
          top: 60px;
          right: 25px;
          animation: subtleFloat2 6.5s ease-in-out infinite 0.4s;
        }

        .node-pos-5 {
          bottom: 70px;
          right: 15px;
          animation: subtleFloat1 6s ease-in-out infinite 1.2s;
        }

        /* Hero Right Column: Copy & Actions */
        .hero-right-col {
          padding-left: 10px;
        }

        .hero-main-heading {
          font-family: -apple-system, BlinkMacSystemFont, "Plus Jakarta Sans", "Inter", sans-serif;
          font-size: clamp(40px, 5vw, 68px);
          font-weight: 800;
          color: #063a2f;
          line-height: 1.05;
          letter-spacing: -1.8px;
          margin-bottom: 22px;
        }

        .hero-subtitle-p {
          font-size: 16.5px;
          color: #475569;
          line-height: 1.65;
          margin-bottom: 30px;
          max-width: 490px;
          font-weight: 400;
        }

        .hero-bullet-list {
          list-style: none;
          padding: 0;
          margin: 0 0 34px;
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .hero-bullet-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          font-weight: 500;
          color: #1e293b;
        }

        .hero-check-circle {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #063a2f;
          flex-shrink: 0;
        }

        /* Hero Metric Flip Display */
        .hero-metric-row {
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          gap: 14px;
          margin-top: 14px;
          max-width: 480px;
        }

        .metric-reduce-label {
          font-size: 12.5px;
          color: #64748b;
          font-weight: 600;
          padding-bottom: 8px;
        }

        .metric-digit-boxes {
          display: flex;
          gap: 5px;
          align-items: center;
        }

        .digit-card {
          width: 36px;
          height: 48px;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 800;
          color: #063a2f;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.03);
          position: relative;
        }

        .digit-card-symbol {
          font-size: 22px;
          font-weight: 800;
          color: #063a2f;
          margin-right: 2px;
        }

        .digit-card-blank {
          background: #f8fafc;
          border: 1.5px dashed #cbd5e1;
        }

        .metric-caption-text {
          font-size: 11.5px;
          color: #94a3b8;
          text-align: right;
          margin-top: 5px;
          max-width: 480px;
          font-weight: 500;
        }

        /* ─── 2. PILLARS SECTION ─── */
        .pillars-section {
          padding: 85px 24px;
          max-width: 1240px;
          margin: 0 auto;
          text-align: center;
        }

        .pillars-title {
          font-size: clamp(30px, 3.8vw, 44px);
          font-weight: 800;
          color: #063a2f;
          letter-spacing: -0.8px;
          margin-bottom: 12px;
        }

        .pillars-subtitle {
          font-size: 16px;
          color: #64748b;
          max-width: 640px;
          margin: 0 auto 54px;
          line-height: 1.5;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        @media (max-width: 900px) {
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 550px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
        }

        .pillar-card {
          background: #f8fafc;
          border: 1px solid #f1f5f9;
          border-radius: 20px;
          padding: 32px 22px;
          text-align: left;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 240px;
          transition: all 0.25s ease;
        }

        .pillar-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 32px rgba(15, 23, 42, 0.07);
          background: #ffffff;
          border-color: #e2e8f0;
        }

        .pillar-icon-box {
          width: 40px;
          height: 40px;
          background: #e2e8f0;
          color: #475569;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .pillar-name {
          font-size: 18px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .pillar-desc {
          font-size: 14px;
          color: #64748b;
          line-height: 1.45;
          margin-bottom: 28px;
        }

        .pillar-btn {
          width: 100%;
          padding: 10px 16px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 99px;
          font-size: 13px;
          font-weight: 700;
          color: #0f172a;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          display: inline-block;
        }

        .pillar-btn:hover {
          background: #063a2f;
          color: #ffffff;
          border-color: #063a2f;
        }

        /* ─── 3. YELLOW BENTO SECTION ─── */
        .yellow-bento-section {
          background: #fde047;
          padding: 95px 24px;
          width: 100%;
        }

        .bento-container {
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .bento-top-row {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 24px;
        }

        @media (max-width: 960px) {
          .bento-top-row {
            grid-template-columns: 1fr;
          }
        }

        .bento-bottom-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 960px) {
          .bento-bottom-row {
            grid-template-columns: 1fr;
          }
        }

        .bento-card {
          background: #ffffff;
          border-radius: 26px;
          padding: 36px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .bento-card-title {
          font-size: 21px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .bento-card-subtitle {
          font-size: 14px;
          color: #64748b;
          line-height: 1.5;
          max-width: 320px;
          margin-bottom: 24px;
        }

        .bento-dark-pill-btn {
          background: #0f172a;
          color: #ffffff;
          border-radius: 99px;
          padding: 11px 24px;
          font-size: 13.5px;
          font-weight: 700;
          text-decoration: none;
          display: inline-block;
          width: fit-content;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .bento-dark-pill-btn:hover {
          background: #063a2f;
          transform: translateY(-2px);
        }

        /* Integration Cluster Graphic */
        .integration-cluster {
          position: relative;
          min-height: 190px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cluster-center {
          width: 54px;
          height: 54px;
          background: #063a2f;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          z-index: 5;
          box-shadow: 0 8px 20px rgba(6, 58, 47, 0.28);
        }

        .cluster-icon-pill {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 13px;
          color: #ffffff;
          position: absolute;
          box-shadow: 0 4px 12px rgba(0,0,0,0.12);
          transition: transform 0.2s ease;
        }

        .cluster-icon-pill:hover {
          transform: scale(1.15);
        }

        /* Intelligent Workflow Automation preview */
        .workflow-preview-window {
          background: #fafafa;
          border: 1px solid #f1f5f9;
          border-radius: 16px;
          padding: 18px;
          min-height: 160px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .wf-header-bar {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 4px;
        }

        .wf-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .wf-block-pink {
          background: #fdf2f8;
          border: 1px solid #fce7f3;
          border-radius: 10px;
          padding: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .wf-block-purple {
          background: #f5f3ff;
          border: 1px solid #ede9fe;
          border-radius: 10px;
          padding: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Bottom Bento Mini Previews */
        .cascade-alert-pill {
          background: #0f172a;
          color: #ffffff;
          font-size: 11.5px;
          font-weight: 700;
          border-radius: 99px;
          padding: 6px 14px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 18px;
          width: fit-content;
        }

        .compliance-bar {
          height: 10px;
          background: #f1f5f9;
          border-radius: 99px;
          overflow: hidden;
          margin-bottom: 8px;
        }

        .compliance-bar-fill-1 {
          width: 78%;
          height: 100%;
          background: #38bdf8;
          border-radius: 99px;
        }

        .compliance-bar-fill-2 {
          width: 52%;
          height: 100%;
          background: #818cf8;
          border-radius: 99px;
        }

        .insights-shift-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 14px;
        }

        .shift-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 12px;
        }

        .green-status-dot {
          width: 7px;
          height: 7px;
          background: #10b981;
          border-radius: 50%;
          display: inline-block;
          margin-right: 6px;
        }

        /* ─── 4. ONE SYSTEM. EVERY TEAM. ─── */
        .one-system-section {
          padding: 95px 24px;
          max-width: 1240px;
          margin: 0 auto;
          text-align: center;
        }

        .one-system-title {
          font-size: clamp(32px, 4.2vw, 50px);
          font-weight: 800;
          color: #063a2f;
          letter-spacing: -0.8px;
          margin-bottom: 32px;
        }

        .pill-tabs-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }

        .filter-tab {
          padding: 9px 22px;
          border-radius: 99px;
          font-size: 13.5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          color: #475569;
        }

        .filter-tab.active {
          background: #063a2f;
          color: #ffffff;
          border-color: #063a2f;
        }

        .showcase-canvas {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border-radius: 32px;
          padding: 48px 36px;
          position: relative;
          min-height: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #e2e8f0;
          overflow: hidden;
        }

        @media (max-width: 800px) {
          .showcase-canvas {
            padding: 24px 16px;
            min-height: 540px;
          }
        }

        /* ─── 5. STEP SETUP SECTION ─── */
        .step-setup-section {
          padding: 85px 24px 115px;
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        @media (max-width: 900px) {
          .step-setup-section {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .pipeline-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 28px;
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
        }

        .pipeline-header {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14.5px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 24px;
        }

        .pipeline-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .pipeline-item {
          border-radius: 14px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .pipeline-number {
          font-size: 28px;
          font-weight: 800;
          line-height: 1;
          margin: 10px 0 4px;
        }

        .step-badge-circle {
          width: 36px;
          height: 36px;
          background: #0284c7;
          color: #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .step-category {
          font-size: 13px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 8px;
        }

        .step-heading {
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 800;
          color: #063a2f;
          letter-spacing: -0.8px;
          line-height: 1.15;
          margin-bottom: 16px;
        }

        .step-desc {
          font-size: 16px;
          color: #64748b;
          line-height: 1.6;
          max-width: 440px;
        }
      `}</style>

      {/* ─────────────────────────────────────────────────────────────
          1. UPGRADED HERO SECTION
      ────────────────────────────────────────────────────────────── */}
      <div className="saas-hero-wrapper">
        <section className="saas-hero">
          {/* Left Side: Org Chart Network Visualization */}
          <div className="node-network-wrapper">
            {/* Ambient Radial Glow */}
            <div className="network-ambient-glow" />

            {/* SVG Connecting Bezier Lines & Data Stream Pulses */}
            <svg
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 3,
              }}
              viewBox="0 0 580 500"
              fill="none"
            >
              <defs>
                <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Center point at (290, 250) */}
              {/* Line to Node 1: Lead Backend Engineer (top-left) */}
              <path
                d="M 290 250 C 230 150, 160 90, 110 55"
                stroke={activeRoleHover === 1 ? "#10b981" : "#cbd5e1"}
                strokeWidth={activeRoleHover === 1 ? "2.5" : "1.8"}
                strokeDasharray="5 5"
                style={{
                  transition: "all 0.3s ease",
                  animation: "dashMove 3s linear infinite",
                }}
              />
              <circle cx="110" cy="55" r="3.5" fill="#f43f5e" />

              {/* Line to Node 2: Head of Development Team (mid-left) */}
              <path
                d="M 290 250 C 200 235, 150 215, 95 210"
                stroke={activeRoleHover === 2 ? "#10b981" : "#94a3b8"}
                strokeWidth={activeRoleHover === 2 ? "2.5" : "2"}
                style={{ transition: "all 0.3s ease" }}
              />
              <circle cx="95" cy="210" r="4" fill="#10b981" />

              {/* Line to Node 3: Lead Full Stack Engineer (bottom-left) */}
              <path
                d="M 290 250 C 230 330, 170 385, 125 410"
                stroke={activeRoleHover === 3 ? "#10b981" : "#cbd5e1"}
                strokeWidth={activeRoleHover === 3 ? "2.5" : "1.8"}
                strokeDasharray="5 5"
                style={{
                  transition: "all 0.3s ease",
                  animation: "dashMove 3s linear infinite reverse",
                }}
              />
              <circle cx="125" cy="410" r="3.5" fill="#8b5cf6" />

              {/* Line to Node 4: Lead Software Developer (top-right) */}
              <path
                d="M 290 250 C 350 170, 390 120, 430 85"
                stroke={activeRoleHover === 4 ? "#10b981" : "#94a3b8"}
                strokeWidth={activeRoleHover === 4 ? "2.5" : "2"}
                style={{ transition: "all 0.3s ease" }}
              />
              <circle cx="430" cy="85" r="4" fill="#ec4899" />

              {/* Line to Node 5: Chief Software Architect (bottom-right) */}
              <path
                d="M 290 250 C 355 305, 395 345, 435 375"
                stroke={activeRoleHover === 5 ? "#10b981" : "#cbd5e1"}
                strokeWidth={activeRoleHover === 5 ? "2.5" : "1.8"}
                strokeDasharray="5 5"
                style={{
                  transition: "all 0.3s ease",
                  animation: "dashMove 3s linear infinite",
                }}
              />
              <circle cx="435" cy="375" r="3.5" fill="#0ea5e9" />
            </svg>

            {/* Central Diamond Hub */}
            <div className="central-hub-container">
              <div className="central-hub-outer-ring" />
              <div className="central-hub">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L2 12L12 22L22 12L12 2Z"
                    fill="#063a2f"
                    stroke="#10b981"
                    strokeWidth="2.2"
                  />
                  <path
                    d="M12 6.5L6.5 12L12 17.5L17.5 12L12 6.5Z"
                    fill="#34d399"
                  />
                </svg>
              </div>
            </div>

            {/* Node 1: Lead Backend Engineer */}
            <div
              className="node-card node-pos-1"
              onMouseEnter={() => setActiveRoleHover(1)}
              onMouseLeave={() => setActiveRoleHover(null)}
            >
              <div className="node-avatar-circle" style={{ background: "linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)" }}>
                BE
              </div>
              <div>
                <div className="node-title-text">Lead Backend Engineer</div>
                <div className="node-subtitle-text">$180k - $190k • Remote</div>
              </div>
            </div>

            {/* Node 2: Head of Development Team */}
            <div
              className="node-card node-pos-2"
              onMouseEnter={() => setActiveRoleHover(2)}
              onMouseLeave={() => setActiveRoleHover(null)}
            >
              <div className="node-avatar-circle" style={{ background: "linear-gradient(135deg, #10b981 0%, #059669 100%)" }}>
                HD
              </div>
              <div>
                <div className="node-title-text">Head of Development Team</div>
                <div className="node-subtitle-text">$190k - $210k • California</div>
              </div>
            </div>

            {/* Node 3: Lead Full Stack Engineer */}
            <div
              className="node-card node-pos-3"
              onMouseEnter={() => setActiveRoleHover(3)}
              onMouseLeave={() => setActiveRoleHover(null)}
            >
              <div className="node-avatar-circle" style={{ background: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)" }}>
                FS
              </div>
              <div>
                <div className="node-title-text">Lead Full Stack Engineer</div>
                <div className="node-subtitle-text">$120k - $220k • Illinois</div>
              </div>
            </div>

            {/* Node 4: Lead Software Developer */}
            <div
              className="node-card node-pos-4"
              onMouseEnter={() => setActiveRoleHover(4)}
              onMouseLeave={() => setActiveRoleHover(null)}
            >
              <div className="node-avatar-circle" style={{ background: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)" }}>
                SD
              </div>
              <div>
                <div className="node-title-text">Lead Software Developer</div>
                <div className="node-subtitle-text">$100k - $170k • Oregon</div>
              </div>
            </div>

            {/* Node 5: Chief Software Architect */}
            <div
              className="node-card node-pos-5"
              onMouseEnter={() => setActiveRoleHover(5)}
              onMouseLeave={() => setActiveRoleHover(null)}
            >
              <div className="node-avatar-circle" style={{ background: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)" }}>
                SA
              </div>
              <div>
                <div className="node-title-text">Chief Software Architect</div>
                <div className="node-subtitle-text">$210k - $250k • Florida</div>
              </div>
            </div>
          </div>

          {/* Right Side: Hero Content */}
          <div className="hero-right-col">
            <h1 className="hero-main-heading">Powering modern teams</h1>
            <p className="hero-subtitle-p">
              Zapeo adapts to different roles across your organization—helping HR leaders, managers, and growing companies stay aligned, compliant, and in control.
            </p>

            <ul className="hero-bullet-list">
              <li className="hero-bullet-item">
                <span className="hero-check-circle" />
                <span>Centralized employee management</span>
              </li>
              <li className="hero-bullet-item">
                <span className="hero-check-circle" />
                <span>Automated payroll workflows</span>
              </li>
              <li className="hero-bullet-item">
                <span className="hero-check-circle" />
                <span>Real-time HR visibility</span>
              </li>
            </ul>

            {/* Metric Digit Display */}
            <div className="hero-metric-row">
              <span className="metric-reduce-label">Reduce up to</span>
              <div className="metric-digit-boxes">
                <span className="digit-card-symbol">$</span>
                <div className="digit-card">4</div>
                <div className="digit-card">3</div>
                <div className="digit-card">6</div>
                <div className="digit-card digit-card-blank" />
                <div className="digit-card digit-card-blank" />
              </div>
            </div>
            <div className="metric-caption-text">manual HR tasks</div>
          </div>
        </section>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. FOUR PILLARS: RUN HR WITH CLARITY AND CONTROL
      ────────────────────────────────────────────────────────────── */}
      <section className="pillars-section">
        <h2 className="pillars-title">Run HR with clarity and control</h2>
        <p className="pillars-subtitle">
          Manage employee records, payroll, compliance, and performance from one connected dashboard.
        </p>

        <div className="pillars-grid">
          {pillarCards.map((card) => (
            <div key={card.id} className="pillar-card">
              <div>
                <div className="pillar-icon-box">{card.icon}</div>
                <h3 className="pillar-name">{card.title}</h3>
                <p className="pillar-desc">{card.desc}</p>
              </div>
              <Link href="/contact" className="pillar-btn">
                Request a demo
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. YELLOW BENTO BOX SECTION: MANAGE HR IN ONE PLACE
      ────────────────────────────────────────────────────────────── */}
      <section className="yellow-bento-section">
        <div className="bento-container">
          {/* Top Row of Bento */}
          <div className="bento-top-row">
            {/* Top Left: Manage HR in one place (with App Cluster) */}
            <div className="bento-card" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "20px" }}>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <h3 className="bento-card-title">Manage HR in one place</h3>
                  <p className="bento-card-subtitle">
                    Run payroll, track attendance, and manage employee records with clarity and control.
                  </p>
                </div>
                <Link href="/contact" className="bento-dark-pill-btn">
                  Start free trial
                </Link>
              </div>

              {/* App Integration Node Cluster Graphic */}
              <div className="integration-cluster">
                <svg
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                  }}
                  viewBox="0 0 220 160"
                  fill="none"
                >
                  <path d="M 60 80 L 110 40" stroke="#e2e8f0" strokeWidth="1.5" />
                  <path d="M 60 80 L 125 75" stroke="#e2e8f0" strokeWidth="1.5" />
                  <path d="M 60 80 L 120 120" stroke="#e2e8f0" strokeWidth="1.5" />
                  <path d="M 125 75 L 175 50" stroke="#e2e8f0" strokeWidth="1.5" />
                  <path d="M 125 75 L 180 90" stroke="#e2e8f0" strokeWidth="1.5" />
                  <path d="M 125 75 L 170 130" stroke="#e2e8f0" strokeWidth="1.5" />
                </svg>

                {/* Left Central Logo Circle */}
                <div
                  className="cluster-center"
                  style={{
                    position: "absolute",
                    left: "25px",
                    top: "54px",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 12L12 22L22 12L12 2Z" fill="#063a2f" stroke="#34d399" strokeWidth="2" />
                  </svg>
                </div>

                {/* Right Cluster App Icons */}
                <div className="cluster-icon-pill" style={{ background: "#2563eb", top: "18px", left: "105px" }}>W</div>
                <div className="cluster-icon-pill" style={{ background: "#e11d48", top: "22px", left: "145px" }}>A</div>
                <div className="cluster-icon-pill" style={{ background: "#7c3aed", top: "30px", left: "182px" }}>d.</div>
                <div className="cluster-icon-pill" style={{ background: "#0f172a", top: "68px", left: "115px" }}>N</div>
                <div className="cluster-icon-pill" style={{ background: "#4f46e5", top: "72px", left: "155px" }}>#</div>
                <div className="cluster-icon-pill" style={{ background: "#ea580c", top: "70px", left: "192px" }}>⚡</div>
                <div className="cluster-icon-pill" style={{ background: "#1e293b", top: "118px", left: "110px" }}>B</div>
                <div className="cluster-icon-pill" style={{ background: "#eab308", top: "116px", left: "148px" }}>▲</div>
                <div className="cluster-icon-pill" style={{ background: "#f97316", top: "118px", left: "185px" }}>✏️</div>
              </div>
            </div>

            {/* Top Right: Intelligent Workflow Automation */}
            <div className="bento-card">
              <h3 className="bento-card-title">Intelligent Workflow Automation</h3>
              <div className="workflow-preview-window">
                <div className="wf-header-bar">
                  <div className="wf-dot" style={{ background: "#f87171" }} />
                  <div className="wf-dot" style={{ background: "#fbbf24" }} />
                  <div className="wf-dot" style={{ background: "#34d399" }} />
                </div>
                <div className="wf-block-purple">
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "14px" }}>⚙️</span>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#5b21b6" }}>Trigger: New Employee Onboarded</span>
                  </div>
                  <span style={{ fontSize: "11px", background: "#ede9fe", color: "#6d28d9", padding: "2px 8px", borderRadius: "99px", fontWeight: "600" }}>Instant</span>
                </div>
                <div className="wf-block-pink">
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "14px" }}>📋</span>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#9d174d" }}>Action: Auto-Generate Payroll & Tax ID</span>
                  </div>
                  <span style={{ fontSize: "11px", background: "#fce7f3", color: "#be185d", padding: "2px 8px", borderRadius: "99px", fontWeight: "600" }}>Success</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row of 3 Bento Cards */}
          <div className="bento-bottom-row">
            {/* Card 1: Secure & Compliant */}
            <div className="bento-card">
              <h3 className="bento-card-title">Secure & Compliant</h3>
              <div style={{ marginTop: "16px" }}>
                <div className="cascade-alert-pill">
                  <span style={{ color: "#ef4444" }}>●</span> Task #474801 causing cascade delay
                </div>
                <div className="compliance-bar">
                  <div className="compliance-bar-fill-1" />
                </div>
                <div className="compliance-bar">
                  <div className="compliance-bar-fill-2" />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#94a3b8", marginTop: "10px" }}>
                  <span>SOC2 Type II</span>
                  <span>100% Compliant</span>
                </div>
              </div>
            </div>

            {/* Card 2: Real-Time Insights */}
            <div className="bento-card">
              <h3 className="bento-card-title">Real-Time Insights</h3>
              <div style={{ marginTop: "16px" }}>
                <div className="insights-shift-box">
                  <div className="shift-header">
                    <span>
                      <span className="green-status-dot" /> System Shift Detection
                    </span>
                    <div style={{ width: "28px", height: "16px", background: "#10b981", borderRadius: "99px", position: "relative" }}>
                      <div style={{ width: "12px", height: "12px", background: "#ffffff", borderRadius: "50%", position: "absolute", top: "2px", right: "2px" }} />
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <div style={{ height: "6px", background: "#e2e8f0", borderRadius: "99px", width: "90%" }} />
                    <div style={{ height: "6px", background: "#e2e8f0", borderRadius: "99px", width: "70%" }} />
                    <div style={{ height: "6px", background: "#cbd5e1", borderRadius: "99px", width: "85%" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: User-Friendly Interface */}
            <div className="bento-card">
              <h3 className="bento-card-title">User-Friendly Interface</h3>
              <div style={{ marginTop: "16px", textAlign: "center" }}>
                <div className="cascade-alert-pill" style={{ background: "#0f172a" }}>
                  Delivery risk + 24% by Q4
                </div>
                <div style={{ height: "70px", width: "100%", position: "relative" }}>
                  <svg width="100%" height="70" viewBox="0 0 200 70" fill="none">
                    <path
                      d="M 0 50 Q 50 15, 100 35 T 200 10"
                      stroke="#38bdf8"
                      strokeWidth="2.5"
                      fill="none"
                    />
                    <circle cx="100" cy="35" r="4" fill="#0284c7" />
                    <circle cx="195" cy="12" r="4" fill="#0284c7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. ONE SYSTEM. EVERY TEAM. SHOWCASE CANVAS
      ────────────────────────────────────────────────────────────── */}
      <section className="one-system-section">
        <h2 className="one-system-title">One system. Every team.</h2>

        {/* Filter Navigation Tabs */}
        <div className="pill-tabs-row">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`filter-tab ${activeTab === tab ? "active" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Large Interactive Showcase Canvas */}
        <div className="showcase-canvas">
          {/* Top Banner Link */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "99px",
              padding: "6px 16px",
              fontSize: "12px",
              fontWeight: "600",
              color: "#334155",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
              zIndex: 10,
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} />
            <span>join HEX. We make sure to be part of our team.</span>
            <span style={{ color: "#94a3b8", cursor: "pointer" }}>✕</span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.3fr 1fr",
              gap: "24px",
              width: "100%",
              maxWidth: "1000px",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            {/* Left Column: Alex Carter Profile */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "18px",
                  padding: "18px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                  border: "1px solid #e2e8f0",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)",
                    margin: "0 auto 10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                  }}
                >
                  👩‍💻
                </div>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#0f172a" }}>Alex Carter</div>
                <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>Software Engineer</div>
              </div>

              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "14px",
                  padding: "12px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.04)",
                  border: "1px solid #e2e8f0",
                }}
              >
                <span style={{ fontSize: "14px" }}>🟢</span>
                <span style={{ fontSize: "12px", fontWeight: "700", color: "#0f172a" }}>Ops Team Active</span>
              </div>
            </div>

            {/* Center Column: Video Call / Interview Featured Card */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                padding: "12px",
                boxShadow: "0 20px 40px rgba(15, 23, 42, 0.1)",
                border: "1px solid #e2e8f0",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "260px",
                  borderRadius: "18px",
                  background: "linear-gradient(135deg, #78350f 0%, #451a03 100%)",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ textAlign: "center", color: "#ffffff" }}>
                  <div style={{ fontSize: "72px", marginBottom: "6px" }}>👩‍💼</div>
                  <div style={{ fontSize: "13px", fontWeight: "700", color: "#fef3c7" }}>Live Video Assessment</div>
                </div>

                <div
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    left: "12px",
                    right: "12px",
                    background: "rgba(15, 23, 42, 0.75)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "12px",
                    padding: "8px 14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: "#ffffff",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ background: "#38bdf8", color: "#0f172a", width: "20px", height: "20px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "800" }}>8</span>
                    <span style={{ fontSize: "11px", fontWeight: "600" }}>Connecting interviews</span>
                  </div>
                  <span style={{ fontSize: "10px", color: "#94a3b8" }}>First applicants</span>
                </div>
              </div>
            </div>

            {/* Right Column: Role Candidates & Data Analyst */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "18px",
                  padding: "16px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div style={{ display: "flex", gap: "6px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "9px", background: "#e0f2fe", color: "#0369a1", padding: "2px 6px", borderRadius: "4px", fontWeight: "700" }}>NOT INCREMENTAL FIT</span>
                  <span style={{ fontSize: "9px", background: "#f1f5f9", color: "#475569", padding: "2px 6px", borderRadius: "4px", fontWeight: "700" }}>Partner Platform</span>
                </div>
                <div style={{ fontSize: "13px", fontWeight: "800", color: "#0f172a" }}>Lead Deployment Specialist</div>
                <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>Looking for 3 candidates • $200k+ • Performance Bonuses</div>
              </div>

              <div
                style={{
                  background: "#063a2f",
                  borderRadius: "14px",
                  padding: "14px 18px",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: "0 10px 25px rgba(6, 58, 47, 0.22)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444" }} />
                  <span style={{ fontSize: "13px", fontWeight: "700" }}>Data Analyst</span>
                </div>
                <span style={{ fontSize: "12px", color: "#34d399" }}>Assigned →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. STEP 01 SETUP: SET UP YOUR TEAM STRUCTURE
      ────────────────────────────────────────────────────────────── */}
      <section className="step-setup-section">
        {/* Left Side: Employee Pipeline Dashboard Widget */}
        <div className="pipeline-card">
          <div className="pipeline-header">
            <span style={{ fontSize: "18px" }}>👥</span>
            <span>Employee Pipeline</span>
          </div>

          <div className="pipeline-grid">
            {/* Box 1: Onboarded */}
            <div className="pipeline-item" style={{ background: "#fdf2f8", border: "1px solid #fce7f3" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "11.5px", fontWeight: "700", color: "#9d174d" }}>Onboarded</span>
                <span style={{ fontSize: "12px" }}>🌸</span>
              </div>
              <div className="pipeline-number" style={{ color: "#9d174d" }}>34</div>
              <div style={{ fontSize: "10.5px", color: "#be185d", fontWeight: "600" }}>15% completed</div>
            </div>

            {/* Box 2: Active */}
            <div className="pipeline-item" style={{ background: "#f0f9ff", border: "1px solid #e0f2fe" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "11.5px", fontWeight: "700", color: "#0369a1" }}>Active</span>
                <span style={{ fontSize: "12px" }}>🔵</span>
              </div>
              <div className="pipeline-number" style={{ color: "#0369a1" }}>215</div>
              <div style={{ fontSize: "10.5px", color: "#0284c7", fontWeight: "600" }}>50% completed</div>
            </div>

            {/* Box 3: Offboarding */}
            <div className="pipeline-item" style={{ background: "#fefce8", border: "1px solid #fef08a" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "11.5px", fontWeight: "700", color: "#a16207" }}>Offboarding</span>
                <span style={{ fontSize: "12px" }}>🟡</span>
              </div>
              <div className="pipeline-number" style={{ color: "#a16207" }}>5</div>
              <div style={{ fontSize: "10.5px", color: "#ca8a04", fontWeight: "600" }}>45% completed</div>
            </div>

            {/* Box 4: Pending Approvals */}
            <div className="pipeline-item" style={{ background: "#f0fdf4", border: "1px solid #dcfce7" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "11.5px", fontWeight: "700", color: "#15803d" }}>Pending Approvals</span>
                <span style={{ fontSize: "12px" }}>🟢</span>
              </div>
              <div className="pipeline-number" style={{ color: "#15803d" }}>18</div>
              <div style={{ fontSize: "10.5px", color: "#16a34a", fontWeight: "600" }}>80% completed</div>
            </div>
          </div>
        </div>

        {/* Right Side: Step Description */}
        <div>
          <div className="step-badge-circle">01</div>
          <div className="step-category">Team Setup</div>
          <h2 className="step-heading">Set up your team structure</h2>
          <p className="step-desc">
            Create your company workspace in minutes. Add teams, roles, policies, and permissions with full control over how your organization operates.
          </p>

          <div style={{ marginTop: "32px" }}>
            <Link
              href="/contact"
              style={{
                background: "#063a2f",
                color: "#ffffff",
                borderRadius: "99px",
                padding: "14px 30px",
                fontSize: "14.5px",
                fontWeight: "700",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 10px 25px rgba(6, 58, 47, 0.22)",
              }}
            >
              Get Started with Team Setup →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
