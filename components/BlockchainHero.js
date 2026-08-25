"use client";

import React, { useState } from "react";
import Link from "next/link";

const protocols = [
  { id: "eth", name: "Ethereum", symbol: "ETH", tps: "15-100k", gas: "12 Gwei", tvl: "$48.2B", blockTime: "12.0s", consensus: "Proof of Stake", icon: "💎", color: "#627eea", hash: "0x3f8a...e71c" },
  { id: "sol", name: "Solana", symbol: "SOL", tps: "65,000+", gas: "<$0.001", tvl: "$8.4B", blockTime: "0.4s", consensus: "Proof of History", icon: "⚡", color: "#14f195", hash: "0x9a2c...b401" },
  { id: "poly", name: "Polygon", symbol: "POL", tps: "7,000+", gas: "<$0.01", tvl: "$2.1B", blockTime: "2.1s", consensus: "Polygon ZK-CDK", icon: "🟣", color: "#8247e5", hash: "0x5d1b...f83e" },
  { id: "arb", name: "Arbitrum", symbol: "ARB", tps: "40,000+", gas: "$0.02", tvl: "$3.9B", blockTime: "0.25s", consensus: "Nitro Rollup", icon: "🔵", color: "#28a0f0", hash: "0x1e8f...c942" },
  { id: "avax", name: "Avalanche", symbol: "AVAX", tps: "4,500+", gas: "$0.05", tvl: "$1.8B", blockTime: "1.0s", consensus: "Avalanche Snow", icon: "🔺", color: "#e84142", hash: "0x7b4a...02cd" },
  { id: "base", name: "Base", symbol: "BASE", tps: "35,000+", gas: "$0.01", tvl: "$2.5B", blockTime: "2.0s", consensus: "OP Stack L2", icon: "🛡️", color: "#0052ff", hash: "0x4e6a...719b" },
];

export default function BlockchainHero() {
  const [activeChain, setActiveChain] = useState("eth");
  const selected = protocols.find((p) => p.id === activeChain) || protocols[0];

  return (
    <section className="bc-hero-wrap">
      {/* Dynamic Background Lights & Orbs */}
      <div className="bc-hero-bg-glow">
        <div className="bc-glow-orb bc-glow-1" />
        <div className="bc-glow-orb bc-glow-2" />
        <div className="bc-glow-orb bc-glow-3" />
      </div>

      {/* Floating 3D Spheres with Labels */}
      <div className="bc-sphere-wrap bc-sphere-wrap-right">
        <div className="bc-sphere-ball bc-sphere-pink" />
        <div className="bc-sphere-label">Web3</div>
      </div>

      <div className="bc-floating-sphere bc-sphere-white-top" />
      <div className="bc-floating-sphere bc-sphere-mini-bottom" />

      <div className="bc-hero-container">

        {/* Rich Dynamic Header Stage with Flanking Floating Telemetry Widgets */}
        <div className="bc-header-stage">

          {/* Left Flanking Floating Telemetry Widget */}
          <div className="bc-header-flank bc-flank-left">
            <div className="bc-flank-glass-card">
              <div className="bc-flank-top-row">
                <span className="bc-flank-live-dot" />
                <span className="bc-flank-label">Live Network</span>
              </div>
              <div className="bc-flank-metric-row">
                <span className="bc-flank-icon">⚡</span>
                <div className="bc-flank-metric-val">65.4k <span className="bc-flank-unit">TPS</span></div>
              </div>
              <div className="bc-flank-sparkline-box">
                <svg viewBox="0 0 60 16" className="bc-flank-svg">
                  <path d="M0,12 Q15,2 30,8 T60,2" fill="none" stroke="#0d9488" strokeWidth="2" />
                </svg>
                <span className="bc-flank-subtext">0.4s Finality</span>
              </div>
            </div>
          </div>

          {/* Center Title with Ambient Glow Aura & Particle Accents */}
          <div className="bc-header-center">
            <div className="bc-title-aura" />
            <h1 className="bc-hero-title">
              <span className="bc-title-line">Architecting Your</span>
              <span className="bc-title-accent bc-title-line">Decentralized Ecosystem</span>
            </h1>
          </div>

          {/* Right Flanking Floating Security Widget */}
          <div className="bc-header-flank bc-flank-right">
            <div className="bc-flank-glass-card">
              <div className="bc-flank-top-row">
                <span className="bc-flank-shield-dot">🛡️</span>
                <span className="bc-flank-label">Formal Verification</span>
              </div>
              <div className="bc-flank-metric-row">
                <span className="bc-flank-icon">🔒</span>
                <div className="bc-flank-metric-val">$500M+ <span className="bc-flank-unit">TVL</span></div>
              </div>
              <div className="bc-flank-sparkline-box">
                <span className="bc-verified-badge">✓ CertiK &amp; OpenZeppelin</span>
              </div>
            </div>
          </div>

        </div>

        {/* Center Stage: 3D Core + Floating Glassmorphic Cards Composition */}
        <div className="bc-visual-stage">

          {/* Central 3D Background Mesh/Node */}
          <div className="bc-center-asset-box">
            <img
              src="/blockchain_core_3d.jpg"
              alt="Blockchain Neural Network Node"
              className="bc-center-3d-img"
            />
            <div className="bc-center-radial-overlay" />
          </div>

          {/* LEFT FLOATING CARDS */}
          <div className="bc-left-cards-col">
            {/* Top Left Card: Client Rating / Audit Score */}
            <div className="bc-glass-card bc-card-rating">
              <div className="bc-rating-badge">
                <span className="bc-rating-number">9.9</span>
              </div>
              <div className="bc-rating-info">
                <div className="bc-rating-title">Security Audit Score</div>
                <div className="bc-rating-sub">
                  Over <strong>100K+ On-Chain Txns</strong>.
                </div>
              </div>
            </div>

            {/* Bottom Left Card: Circular Progress Ring / TPS Gauge */}
            <div className="bc-glass-card bc-card-gauge">
              <div className="bc-gauge-circle-wrap">
                <svg className="bc-gauge-svg" viewBox="0 0 100 100">
                  <circle
                    className="bc-gauge-bg"
                    cx="50"
                    cy="50"
                    r="40"
                  />
                  <circle
                    className="bc-gauge-progress"
                    cx="50"
                    cy="50"
                    r="40"
                  />
                </svg>
                <div className="bc-gauge-inner-content">
                  <div className="bc-gauge-icon">⚡</div>
                  <div className="bc-gauge-val">65k</div>
                  <div className="bc-gauge-label">TPS Speed</div>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER FLOATING CARD (Overlapping 3D asset) */}
          <div className="bc-glass-card bc-card-center-params">
            <div className="bc-params-left">
              <div className="bc-params-header-row">
                <div className="bc-icon-pill bc-pill-red">⚡</div>
                <div className="bc-icon-pill bc-pill-blood">🔒</div>
                <span className="bc-params-heading">Multi-Chain Ecosystem</span>
              </div>

              {/* Interactive Chain / Protocol Pills */}
              <div className="bc-pills-grid">
                {protocols.map((p) => {
                  const isActive = activeChain === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setActiveChain(p.id)}
                      className={`bc-filter-pill ${isActive ? "active" : ""}`}
                    >
                      {p.name}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Telemetry Mini-Footer */}
              <div className="bc-params-meta">
                <div className="bc-meta-item">
                  <span className="bc-meta-label">Throughput</span>
                  <span className="bc-meta-val">{selected.tps}</span>
                </div>
                <div className="bc-meta-item">
                  <span className="bc-meta-label">Avg Gas</span>
                  <span className="bc-meta-val">{selected.gas}</span>
                </div>
                <div className="bc-meta-item">
                  <span className="bc-meta-label">Secured TVL</span>
                  <span className="bc-meta-val">{selected.tvl}</span>
                </div>
              </div>
            </div>

            {/* Live On-Chain Node Status Visualizer on Right */}
            <div className="bc-node-monitor-col">
              <div className="bc-node-monitor-card">

                {/* Protocol Badge & Glowing Icon */}
                <div className="bc-node-top">
                  <div className="bc-node-avatar" style={{ background: `radial-gradient(circle, ${selected.color}26 0%, ${selected.color}08 100%)`, borderColor: `${selected.color}44` }}>
                    <span className="bc-node-icon">{selected.icon}</span>
                  </div>
                  <div className="bc-node-title-box">
                    <div className="bc-node-name">{selected.name}</div>
                    <div className="bc-node-status-line">
                      <span className="bc-live-ping" />
                      <span>100% Synced</span>
                    </div>
                  </div>
                </div>

                {/* Real-time Block Stats */}
                <div className="bc-node-stats-grid">
                  <div className="bc-node-stat-item">
                    <span className="bc-node-stat-k">Consensus</span>
                    <span className="bc-node-stat-v">{selected.consensus}</span>
                  </div>
                  <div className="bc-node-stat-item">
                    <span className="bc-node-stat-k">Block Time</span>
                    <span className="bc-node-stat-v">{selected.blockTime}</span>
                  </div>
                </div>

                {/* Animated Block Hash Stream */}
                <div className="bc-node-hash-box">
                  <div className="bc-hash-label">Latest Verified Block</div>
                  <div className="bc-hash-val">{selected.hash}</div>
                  <div className="bc-hash-bar">
                    <div className="bc-hash-progress" style={{ background: selected.color }} />
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT FLOATING CARD (Real-Time Live Telemetry Wave Chart) */}
          <div className="bc-glass-card bc-card-telemetry">
            <div className="bc-telemetry-header">
              <span className="bc-heart-icon">⚡</span>
              <span className="bc-telemetry-title">Real-Time On-Chain Telemetry</span>
            </div>

            {/* Glowing Spline Line Chart Area */}
            <div className="bc-chart-box">
              <svg
                viewBox="0 0 320 120"
                className="bc-wave-svg"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="wavePinkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f43f5e" />
                    <stop offset="50%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#fb7185" />
                  </linearGradient>
                  <linearGradient id="waveOrangeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fb923c" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>
                  <linearGradient id="waveCyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                  <radialGradient id="dotGlow">
                    <stop offset="0%" stopColor="#ec4899" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Soft grid lines */}
                <line x1="0" y1="30" x2="320" y2="30" stroke="#f1f5f9" strokeDasharray="3,3" />
                <line x1="0" y1="60" x2="320" y2="60" stroke="#f1f5f9" strokeDasharray="3,3" />
                <line x1="0" y1="90" x2="320" y2="90" stroke="#f1f5f9" strokeDasharray="3,3" />

                {/* Wave Line 1: Orange/Amber */}
                <path
                  d="M0,95 Q40,90 80,75 T160,85 T240,65 T320,40"
                  fill="none"
                  stroke="url(#waveOrangeGrad)"
                  strokeWidth="2.5"
                  className="bc-wave-path-1"
                />

                {/* Wave Line 2: Cyan/Blue */}
                <path
                  d="M0,85 Q45,70 90,82 T180,68 T260,80 T320,60"
                  fill="none"
                  stroke="url(#waveCyanGrad)"
                  strokeWidth="2"
                  className="bc-wave-path-2"
                />

                {/* Wave Line 3: Pink/Red Top Wave */}
                <path
                  d="M0,80 Q50,78 100,60 T190,45 T250,55 T320,25"
                  fill="none"
                  stroke="url(#wavePinkGrad)"
                  strokeWidth="3"
                  className="bc-wave-path-3"
                />

                {/* Pulsing Hotspot on the pink curve */}
                <circle cx="215" cy="50" r="16" fill="url(#dotGlow)" opacity="0.6" className="bc-pulse-ring" />
                <circle cx="215" cy="50" r="6" fill="#ffffff" stroke="#ec4899" strokeWidth="3" className="bc-pulse-center" />
              </svg>

              {/* Chart Tooltip Badge */}
              <div className="bc-chart-tooltip">
                <span className="bc-tooltip-dot" />
                <span>Peak 65,400 TPS • 12 Gwei</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA Button below Hero Section Data */}
        <div className="bc-cta-row bc-cta-bottom">
          <Link href="/contact" className="bc-btn-pill">
            <span>Explore Web3 Solutions</span>
            <span className="bc-btn-arrow">↗</span>
          </Link>
        </div>

      </div>

      <style>{`
        /* ==========================================================================
           HERO CONTAINER & BACKGROUND
           ========================================================================== */
        .bc-hero-wrap {
          position: relative;
          background: linear-gradient(135deg, #eff4fe 0%, #ffffff 42%, #fdf2f8 82%, #f0fdf4 100%);
          padding: 120px 24px 30px;
          min-height: auto;
          overflow: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #1e293b;
        }

        .bc-hero-bg-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        .bc-glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.55;
        }

        .bc-glow-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(199, 210, 254, 0.7) 0%, rgba(224, 231, 255, 0) 70%);
          top: -100px;
          left: -50px;
        }

        .bc-glow-2 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(252, 231, 243, 0.7) 0%, rgba(253, 242, 248, 0) 70%);
          top: 30%;
          right: -150px;
        }

        .bc-glow-3 {
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, rgba(207, 250, 254, 0.6) 0%, rgba(236, 254, 255, 0) 70%);
          bottom: -80px;
          left: 30%;
        }

        /* Floating 3D Pastel Spheres with Labels */
        .bc-sphere-wrap {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 4;
          pointer-events: none;
        }

        .bc-sphere-wrap-left {
          top: 220px;
          left: 8%;
          animation: floatOrb 7s ease-in-out infinite;
        }

        .bc-sphere-wrap-right {
          top: 360px;
          right: 12%;
          animation: floatOrb 8.5s ease-in-out infinite 1.5s;
        }

        .bc-sphere-ball {
          border-radius: 50%;
        }

        .bc-sphere-cyan {
          width: 72px;
          height: 72px;
          background: radial-gradient(circle at 35% 35%, #a5f3fc 0%, #38bdf8 60%, #0284c7 100%);
          box-shadow: 0 16px 36px rgba(56, 189, 248, 0.35), inset -4px -4px 10px rgba(0, 0, 0, 0.15);
        }

        .bc-sphere-pink {
          width: 56px;
          height: 56px;
          background: radial-gradient(circle at 35% 35%, #fbcfe8 0%, #f472b6 60%, #db2777 100%);
          box-shadow: 0 14px 30px rgba(244, 114, 182, 0.35), inset -3px -3px 8px rgba(0, 0, 0, 0.15);
        }

        .bc-sphere-label {
          margin-top: 8px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          border-radius: 100px;
          padding: 3px 12px;
          font-size: 11px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          box-shadow: 0 6px 16px rgba(15, 23, 42, 0.08);
          white-space: nowrap;
        }

        .bc-floating-sphere {
          position: absolute;
          border-radius: 50%;
          z-index: 2;
          pointer-events: none;
        }

        .bc-sphere-white-top {
          width: 32px;
          height: 32px;
          background: radial-gradient(circle at 35% 35%, #ffffff 0%, #e2e8f0 70%, #94a3b8 100%);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          top: 60px;
          left: 50%;
          transform: translateX(-50%);
          animation: floatOrb 6s ease-in-out infinite 0.8s;
        }

        .bc-sphere-mini-bottom {
          width: 24px;
          height: 24px;
          background: radial-gradient(circle at 35% 35%, #ddd6fe 0%, #a78bfa 70%, #7c3aed 100%);
          box-shadow: 0 8px 18px rgba(124, 58, 237, 0.25);
          bottom: 120px;
          left: 18%;
          animation: floatOrb 9s ease-in-out infinite 2s;
        }

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(6deg); }
        }

        /* Container */
        .bc-hero-container {
          position: relative;
          z-index: 5;
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ==========================================================================
           HEADER STAGE WITH FLANKING WIDGETS
           ========================================================================== */
        .bc-header-stage {
          width: 100%;
          max-width: 1220px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
          position: relative;
          z-index: 6;
        }

        .bc-header-center {
          text-align: center;
          max-width: 780px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .bc-title-aura {
          position: absolute;
          width: 500px;
          height: 180px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(ellipse at center, rgba(199, 210, 254, 0.45) 0%, rgba(244, 114, 182, 0.15) 50%, transparent 75%);
          filter: blur(40px);
          pointer-events: none;
          z-index: -1;
          animation: auraBreathe 6s ease-in-out infinite alternate;
        }

        @keyframes auraBreathe {
          0% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(1.15); opacity: 1; }
        }

        .bc-mini-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          padding: 5px 14px;
          border-radius: 100px;
          font-size: 11.5px;
          font-weight: 700;
          color: #475569;
          margin-bottom: 12px;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04);
        }

        .bc-badge-sparkle {
          font-size: 12px;
          animation: sparkleSpin 3s linear infinite;
        }

        @keyframes sparkleSpin {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.2) rotate(15deg); }
        }

        .bc-hero-title {
          font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
          font-size: clamp(28px, 4vw, 50px);
          font-weight: 800;
          color: #1e1b4b;
          line-height: 1.15;
          letter-spacing: -1.5px;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .bc-title-line {
          display: block;
          white-space: nowrap;
        }

        .bc-title-accent {
          background: linear-gradient(135deg, #1e1b4b 0%, #312e81 60%, #4338ca 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        /* Flanking Floating Widgets */
        .bc-header-flank {
          width: 220px;
          flex-shrink: 0;
          z-index: 3;
        }

        .bc-flank-left {
          animation: floatFlankLeft 6.5s ease-in-out infinite;
        }

        .bc-flank-right {
          animation: floatFlankRight 7.5s ease-in-out infinite 0.8s;
        }

        @keyframes floatFlankLeft {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-1.5deg); }
        }

        @keyframes floatFlankRight {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1.5deg); }
        }

        .bc-flank-glass-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 14px 18px;
          box-shadow: 0 14px 30px rgba(15, 23, 42, 0.06), 0 2px 8px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
          gap: 6px;
          transition: all 0.3s ease;
        }

        .bc-flank-glass-card:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.1);
        }

        .bc-flank-top-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .bc-flank-live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: pulseLiveDot 1.8s infinite;
        }

        @keyframes pulseLiveDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.6; }
        }

        .bc-flank-shield-dot {
          font-size: 11px;
        }

        .bc-flank-label {
          font-size: 10.5px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .bc-flank-metric-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .bc-flank-icon {
          font-size: 13px;
        }

        .bc-flank-metric-val {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 18px;
          font-weight: 900;
          color: #0f172a;
          line-height: 1;
        }

        .bc-flank-unit {
          font-size: 11px;
          font-weight: 700;
          color: #0d9488;
        }

        .bc-flank-sparkline-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 2px;
          padding-top: 6px;
          border-top: 1px dashed #e2e8f0;
        }

        .bc-flank-svg {
          width: 50px;
          height: 14px;
        }

        .bc-flank-subtext {
          font-size: 10px;
          font-weight: 700;
          color: #0d9488;
        }

        .bc-verified-badge {
          font-size: 10px;
          font-weight: 700;
          color: #2563eb;
        }

        .bc-cta-row {
          display: flex;
          justify-content: center;
        }

        .bc-cta-bottom {
          margin-top: 32px;
          margin-bottom: 0px;
          position: relative;
          z-index: 10;
        }

        .bc-btn-pill {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid rgba(255, 255, 255, 0.95);
          color: #0f172a;
          font-weight: 700;
          font-size: 15px;
          padding: 14px 34px;
          border-radius: 100px;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .bc-btn-pill:hover {
          background: #ffffff;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.14);
          color: #3b82f6;
        }

        .bc-btn-arrow {
          font-size: 16px;
          font-weight: 800;
          transition: transform 0.25s ease;
        }

        .bc-btn-pill:hover .bc-btn-arrow {
          transform: translate(3px, -3px);
        }

        /* ==========================================================================
           VISUAL STAGE & 3D BRAIN COMPOSITION
           ========================================================================== */
        .bc-visual-stage {
          position: relative;
          width: 100%;
          max-width: 1220px;
          min-height: 520px;
          margin-top: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Centerpiece 3D Asset */
        .bc-center-asset-box {
          position: absolute;
          width: 620px;
          height: 480px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .bc-center-3d-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 40px;
          animation: floatCenter 8s ease-in-out infinite;
          filter: drop-shadow(0 20px 40px rgba(99, 102, 241, 0.2));
        }

        .bc-center-radial-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 45%, rgba(255, 255, 255, 0.2) 75%, #ffffff 100%);
          pointer-events: none;
        }

        @keyframes floatCenter {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }

        /* ==========================================================================
           FROSTED GLASSMORPHISM CARDS
           ========================================================================== */
        .bc-glass-card {
          background: rgba(255, 255, 255, 0.82);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid rgba(255, 255, 255, 0.95);
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.08), 0 4px 12px rgba(0, 0, 0, 0.03);
          border-radius: 28px;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 6;
        }

        .bc-glass-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 25px 55px rgba(15, 23, 42, 0.12);
        }

        /* Left Column Wrapper */
        .bc-left-cards-col {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 24px;
          z-index: 7;
        }

        /* 1) Top-Left Card: Client Rating */
        .bc-card-rating {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 24px;
          width: 280px;
          animation: floatLeftCard 7s ease-in-out infinite;
        }

        .bc-rating-badge {
          width: 52px;
          height: 48px;
          border-radius: 14px;
          background: #f0fdfa;
          border: 1px solid #ccfbf1;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .bc-rating-number {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 20px;
          font-weight: 900;
          color: #0d9488;
          letter-spacing: -0.5px;
        }

        .bc-rating-info {
          display: flex;
          flex-direction: column;
        }

        .bc-rating-title {
          font-size: 12px;
          font-weight: 600;
          color: #64748b;
          margin-bottom: 2px;
        }

        .bc-rating-sub {
          font-size: 13px;
          font-weight: 700;
          color: #0f172a;
        }

        .bc-rating-sub strong {
          text-decoration: underline;
          text-decoration-color: #0d9488;
          text-underline-offset: 3px;
        }

        /* 2) Bottom-Left Card: Circular Gauge */
        .bc-card-gauge {
          padding: 20px;
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 50px;
          animation: floatLeftCard 8s ease-in-out infinite 1s;
        }

        .bc-gauge-circle-wrap {
          position: relative;
          width: 90px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bc-gauge-svg {
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
        }

        .bc-gauge-bg {
          fill: none;
          stroke: #e2e8f0;
          stroke-width: 8;
        }

        .bc-gauge-progress {
          fill: none;
          stroke: #38bdf8;
          stroke-width: 8;
          stroke-linecap: round;
          stroke-dasharray: 251.2;
          stroke-dashoffset: 75;
          filter: drop-shadow(0 2px 6px rgba(56, 189, 248, 0.5));
          animation: dashAnim 2.5s ease-out forwards;
        }

        @keyframes dashAnim {
          from { stroke-dashoffset: 251.2; }
          to { stroke-dashoffset: 75; }
        }

        .bc-gauge-inner-content {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }

        .bc-gauge-icon {
          font-size: 10px;
          margin-bottom: 2px;
        }

        .bc-gauge-val {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 17px;
          font-weight: 800;
          color: #0f172a;
        }

        .bc-gauge-label {
          font-size: 9px;
          font-weight: 600;
          color: #64748b;
          margin-top: 2px;
        }

        @keyframes floatLeftCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        /* ==========================================================================
           3) CENTER WIDE PARAMETERS CARD
           ========================================================================== */
        .bc-card-center-params {
          position: relative;
          z-index: 8;
          display: flex;
          align-items: stretch;
          width: 520px;
          padding: 24px 28px;
          margin-top: 60px;
          box-shadow: 0 30px 60px rgba(15, 23, 42, 0.12), 0 4px 16px rgba(0, 0, 0, 0.04);
          animation: floatCenterCard 8s ease-in-out infinite 0.5s;
        }

        @keyframes floatCenterCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .bc-params-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .bc-params-header-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 18px;
        }

        .bc-icon-pill {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }

        .bc-pill-red {
          background: #ffe4e6;
          border: 1px solid #fecdd3;
        }

        .bc-pill-blood {
          background: #fee2e2;
          border: 1px solid #fecaca;
        }

        .bc-params-heading {
          font-size: 14px;
          font-weight: 700;
          color: #0f172a;
          margin-left: 4px;
        }

        /* Filter Pills */
        .bc-pills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .bc-filter-pill {
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          color: #475569;
          font-size: 12px;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.2s ease;
          outline: none;
        }

        .bc-filter-pill:hover {
          background: #e2e8f0;
          color: #0f172a;
          transform: translateY(-1px);
        }

        .bc-filter-pill.active {
          background: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.2);
        }

        .bc-params-meta {
          display: flex;
          gap: 16px;
          border-top: 1px dashed #e2e8f0;
          padding-top: 12px;
        }

        .bc-meta-item {
          display: flex;
          flex-direction: column;
        }

        .bc-meta-label {
          font-size: 9px;
          font-weight: 700;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .bc-meta-val {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: #0f172a;
        }

        /* Live On-Chain Node Status Visualizer */
        .bc-node-monitor-col {
          width: 190px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 14px;
        }

        .bc-node-monitor-card {
          width: 100%;
          background: rgba(15, 23, 42, 0.03);
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 20px;
          padding: 14px 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.02);
          transition: all 0.3s ease;
        }

        .bc-node-top {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .bc-node-avatar {
          width: 36px;
          height: 36px;
          border-radius: 12px;
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
          transition: all 0.3s ease;
        }

        .bc-node-icon {
          font-size: 18px;
        }

        .bc-node-title-box {
          display: flex;
          flex-direction: column;
        }

        .bc-node-name {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
        }

        .bc-node-status-line {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 10px;
          font-weight: 700;
          color: #10b981;
        }

        .bc-live-ping {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 6px #10b981;
          animation: pulseDot 2s infinite;
        }

        .bc-node-stats-grid {
          display: flex;
          flex-direction: column;
          gap: 6px;
          background: #ffffff;
          padding: 8px 10px;
          border-radius: 12px;
          border: 1px solid #f1f5f9;
        }

        .bc-node-stat-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .bc-node-stat-k {
          font-size: 9.5px;
          color: #94a3b8;
          font-weight: 700;
          text-transform: uppercase;
        }

        .bc-node-stat-v {
          font-size: 10.5px;
          font-weight: 800;
          color: #0f172a;
          font-family: monospace, sans-serif;
        }

        .bc-node-hash-box {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .bc-hash-label {
          font-size: 9px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .bc-hash-val {
          font-family: monospace;
          font-size: 10px;
          font-weight: 700;
          color: #0f172a;
          letter-spacing: 0.5px;
        }

        .bc-hash-bar {
          width: 100%;
          height: 4px;
          background: #e2e8f0;
          border-radius: 10px;
          overflow: hidden;
          margin-top: 2px;
        }

        .bc-hash-progress {
          width: 75%;
          height: 100%;
          border-radius: 10px;
          animation: hashStream 2s infinite linear;
        }

        @keyframes hashStream {
          0% { width: 20%; opacity: 0.7; }
          50% { width: 90%; opacity: 1; }
          100% { width: 20%; opacity: 0.7; }
        }

        /* ==========================================================================
           4) RIGHT TELEMETRY WAVE CHART CARD
           ========================================================================== */
        .bc-card-telemetry {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 320px;
          padding: 22px;
          z-index: 7;
          animation: floatRightCard 7.5s ease-in-out infinite 0.7s;
        }

        @keyframes floatRightCard {
          0%, 100% { transform: translateY(-50%) translateY(0px); }
          50% { transform: translateY(-50%) translateY(-12px); }
        }

        .bc-telemetry-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 18px;
        }

        .bc-heart-icon {
          font-size: 16px;
          animation: pulseHeart 1.4s ease-in-out infinite;
        }

        @keyframes pulseHeart {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.25); }
        }

        .bc-telemetry-title {
          font-size: 13px;
          font-weight: 700;
          color: #0f172a;
        }

        .bc-chart-box {
          position: relative;
          width: 100%;
          height: 120px;
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid #f1f5f9;
          padding: 8px;
          overflow: hidden;
          box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.02);
        }

        .bc-wave-svg {
          width: 100%;
          height: 100%;
        }

        .bc-pulse-ring {
          animation: pulseWaveRing 2s infinite ease-out;
          transform-origin: 215px 50px;
        }

        @keyframes pulseWaveRing {
          0% { transform: scale(0.6); opacity: 0.8; }
          100% { transform: scale(1.4); opacity: 0; }
        }

        .bc-pulse-center {
          animation: pulseWaveCenter 1.5s infinite alternate ease-in-out;
        }

        @keyframes pulseWaveCenter {
          from { transform: scale(0.9); }
          to { transform: scale(1.15); }
        }

        .bc-chart-tooltip {
          position: absolute;
          top: 8px;
          right: 8px;
          background: rgba(15, 23, 42, 0.06);
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 6px;
          padding: 3px 8px;
          font-size: 9px;
          font-weight: 700;
          color: #334155;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .bc-tooltip-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #10b981;
        }

        /* ==========================================================================
           RESPONSIVENESS & BREAKPOINTS
           ========================================================================== */
        @media (max-width: 1024px) {
          .bc-header-stage {
            flex-direction: column;
            gap: 16px;
          }

          .bc-header-flank {
            display: none;
          }
        }

        @media (max-width: 1200px) {
          .bc-visual-stage {
            min-height: auto;
            flex-direction: column;
            gap: 24px;
            align-items: center;
          }

          .bc-left-cards-col,
          .bc-card-telemetry {
            position: static;
            transform: none !important;
            animation: none !important;
          }

          .bc-left-cards-col {
            flex-direction: row;
            justify-content: center;
            width: 100%;
            flex-wrap: wrap;
          }

          .bc-card-gauge {
            margin-left: 0;
          }

          .bc-card-center-params {
            margin-top: 0;
            width: 100%;
            max-width: 520px;
          }

          .bc-card-telemetry {
            width: 100%;
            max-width: 520px;
          }

          .bc-center-asset-box {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .bc-hero-wrap {
            padding: 100px 16px 60px;
          }

          .bc-hero-title {
            font-size: 34px;
            letter-spacing: -1px;
          }

          .bc-title-br {
            display: none;
          }

          .bc-card-center-params {
            flex-direction: column;
            padding: 20px;
          }

          .bc-node-monitor-col {
            width: 100%;
            margin-left: 0;
            margin-top: 16px;
          }

          .bc-card-rating {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
