"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import BlockchainHero from "@/components/BlockchainHero";

export default function BlockchainServicePage() {
  const [activeModel, setActiveModel] = useState("cex");
  const [activePair, setActivePair] = useState("BTC/USDT");

  const exchangeModels = {
    cex: {
      tag: "CENTRALIZED ARCHITECTURE",
      title: "Spot & Margin Centralized Exchange (CEX)",
      desc: "Institutional-grade centralized crypto exchange powered by an in-memory matching engine capable of executing over 1,000,000 orders per second with sub-millisecond execution latency.",
      highlights: [
        "In-Memory Order Matching Engine (<1ms latency)",
        "MPC Multi-Sig Cold & Warm Wallet Custody Architecture",
        "Automated KYC/AML Onboarding & Travel Rule Compliance",
        "Fiat On/Off Ramp Integrations (Credit Card, SEPA, SWIFT)",
        "TradingView Pro Charts with 100+ Technical Indicators",
        "High-Frequency REST, WebSocket & FIX Protocol APIs"
      ],
      badge: "1M+ Orders / Sec",
      latency: "<0.8ms",
      security: "MPC Multi-Sig Custody",
      tps: "1,200,000 TPS"
    },
    dex: {
      tag: "DECENTRALIZED PROTOCOL",
      title: "Automated Market Maker (AMM) & Orderbook DEX",
      desc: "Non-custodial decentralized exchange infrastructure supporting concentrated liquidity pools (v3/v4 models), hybrid on-chain order books, and multi-chain atomic swaps with zero custody risk.",
      highlights: [
        "Concentrated Liquidity & Dynamic Fee Tiers (Uniswap v3/v4 style)",
        "Hybrid Central Limit Order Book (CLOB) on L2 Rollups",
        "Multi-Chain Bridge & Atomic Swaps (LayerZero & Chainlink CCIP)",
        "Gasless Meta-Transactions & Account Abstraction (ERC-4337)",
        "Flash-Loan Protected Liquidity Vaults & Yield Staking",
        "Custom Token Launchpad & Initial DEX Offering (IDO) Modules"
      ],
      badge: "Non-Custodial",
      latency: "<400ms (L2)",
      security: "Audited Smart Contracts",
      tps: "65,000+ TPS (L2/SVM)"
    },
    perps: {
      tag: "DERIVATIVES & FUTURES",
      title: "Perpetual Futures & Derivatives Exchange",
      desc: "High-leverage crypto perpetuals platform featuring cross & isolated margin systems, real-time index oracle price feeds, and automated liquidation engines with zero balance protection.",
      highlights: [
        "Up to 100x Leverage on Cross & Isolated Margin Accounts",
        "Sub-Second Dynamic Funding Rate Calculations",
        "Automated Liquidation Engine & Insurance Fund Protection",
        "Decentralized Oracle Aggregation (Pyth Network & Chainlink)",
        "Advanced Order Types: Stop-Loss, Take-Profit, Trailing & OCO",
        "Multi-Asset Collateralization (USDC, USDT, BTC, ETH)"
      ],
      badge: "100x Leverage",
      latency: "<1.2ms",
      security: "Insurance Fund & Risk Engine",
      tps: "850,000 TPS"
    },
    p2p: {
      tag: "ESCROW MARKETPLACE",
      title: "P2P Crypto Exchange & Escrow Platform",
      desc: "Global peer-to-peer cryptocurrency marketplace equipped with automated smart contract escrows, 300+ local payment method integrations, and an automated multi-sign arbitration dispute resolution portal.",
      highlights: [
        "Time-Locked Smart Contract Escrow System",
        "300+ Global & Local Fiat Payment Methods Supported",
        "Real-Time Chat with Encrypted Proof-of-Payment Uploads",
        "Trader Reputation Scoring, KYC Verification & VIP Badges",
        "Automated Dispute Resolution & Admin Arbitration Dashboard",
        "Custom Fee Schedules for Makers & Takers"
      ],
      badge: "Zero-Risk Escrow",
      latency: "Instant Escrow Lock",
      security: "Smart Contract Locked",
      tps: "Global Coverage"
    }
  };

  const currentModel = exchangeModels[activeModel];

  const orderbookData = {
    "BTC/USDT": {
      price: "96,480.50",
      change: "+3.42%",
      high: "97,820.00",
      low: "94,150.00",
      volume: "$482.6M",
      asks: [
        { price: "96,492.00", amount: "1.428", total: "137.8k" },
        { price: "96,488.50", amount: "0.850", total: "82.0k" },
        { price: "96,485.00", amount: "2.120", total: "204.5k" },
        { price: "96,482.00", amount: "0.450", total: "43.4k" }
      ],
      bids: [
        { price: "96,478.00", amount: "1.890", total: "182.3k" },
        { price: "96,475.50", amount: "3.240", total: "312.5k" },
        { price: "96,472.00", amount: "0.950", total: "91.6k" },
        { price: "96,469.00", amount: "2.410", total: "232.5k" }
      ]
    },
    "ETH/USDT": {
      price: "2,784.20",
      change: "+4.18%",
      high: "2,840.00",
      low: "2,690.00",
      volume: "$264.1M",
      asks: [
        { price: "2,786.50", amount: "14.20", total: "39.5k" },
        { price: "2,785.80", amount: "8.50", total: "23.6k" },
        { price: "2,785.00", amount: "22.40", total: "62.3k" },
        { price: "2,784.50", amount: "11.10", total: "30.9k" }
      ],
      bids: [
        { price: "2,783.90", amount: "18.30", total: "50.9k" },
        { price: "2,783.00", amount: "35.20", total: "97.9k" },
        { price: "2,782.20", amount: "12.60", total: "35.0k" },
        { price: "2,781.50", amount: "40.00", total: "111.2k" }
      ]
    },
    "SOL/USDT": {
      price: "188.45",
      change: "+7.85%",
      high: "194.20",
      low: "176.50",
      volume: "$195.8M",
      asks: [
        { price: "188.70", amount: "145.0", total: "27.3k" },
        { price: "188.60", amount: "88.2", total: "16.6k" },
        { price: "188.55", amount: "210.5", total: "39.6k" },
        { price: "188.50", amount: "95.0", total: "17.9k" }
      ],
      bids: [
        { price: "188.40", amount: "180.0", total: "33.9k" },
        { price: "188.30", amount: "340.5", total: "64.1k" },
        { price: "188.20", amount: "120.0", total: "22.5k" },
        { price: "188.10", amount: "450.0", total: "84.6k" }
      ]
    }
  };

  const currentBook = orderbookData[activePair] || orderbookData["BTC/USDT"];

  const exchangeFeatures = [
    {
      title: "Ultra-Fast Matching Engine",
      desc: "Built with Rust and C++ utilizing lock‑free ring buffers (LMAX architecture) handling 1,000,000+ orders per second with sub‑millisecond execution.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      iconBg: "#fef9c3",
      iconColor: "#ca8a04"
    },
    {
      title: "MPC & Multi‑Sig Vault Custody",
      desc: "Institutional cold/warm wallet infrastructure protected by Multi‑Party Computation (MPC), threshold cryptography, and automated withdrawal whitelisting.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      iconBg: "#ede9fe",
      iconColor: "#7c3aed"
    },
    {
      title: "Automated Liquidity & MM Bots",
      desc: "Integrated liquidity aggregator bridging depth from Binance, OKX, and Bybit, paired with automated internal market‑making bots for tight bid‑ask spreads.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      ),
      iconBg: "#f0fdf4",
      iconColor: "#16a34a"
    },
    {
      title: "Fiat On/Off Ramp Gateways",
      desc: "Seamless fiat payment gateways integrated with MoonPay, Banxa, Stripe, and direct SEPA/SWIFT bank wire settlement for instant card & bank purchases.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      ),
      iconBg: "#fff1e7",
      iconColor: "#ea580c"
    },
    {
      title: "Regulatory KYC/AML & Travel Rule",
      desc: "Automated identity verification via Sumsub / Onfido with Chainalysis / Elliptic on‑chain AML transaction monitoring compliant with FATF Travel Rule.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      iconBg: "#e0f2fe",
      iconColor: "#0284c7"
    },
    {
      title: "TradingView Pro & Mobile Apps",
      desc: "Customizable high‑performance Web, iOS, and Android trading apps with TradingView charting, depth charts, order histories, and push alerts.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
      iconBg: "#fce7f3",
      iconColor: "#db2777"
    }
  ];
const capabilities = [
  // Example capability items; can reuse exchangeFeatures or define tailored items
  ...exchangeFeatures
];

  return (
    <>
      <Header variant="light" />
      <div className="bc-page-wrap">
        <BlockchainHero />
        <section className="bc-exchange-section">
          <div className="bc-exchange-container">
            <div className="bc-sec-header">
              <div className="bc-sec-pill"><span className="bc-sec-dot" />EXCHANGE ENGINEERING</div>
              <h2 className="bc-sec-title">Crypto Exchange &amp; Trading Platform Development</h2>
              <p className="bc-sec-desc">
                From high‑frequency Centralized Exchanges (CEX) handling 1M+ orders per second to non‑custodial AMM &amp; Orderbook DEXs, we engineer institutional‑grade digital asset trading infrastructure.
              </p>
            </div>
            <div className="bc-model-tabs-row">
              <button type="button" onClick={() => setActiveModel("cex")} className={`bc-model-tab ${activeModel === "cex" ? "active" : ""}`}><span className="bc-tab-icon">⚡</span>Spot &amp; CEX Exchange</button>
              <button type="button" onClick={() => setActiveModel("dex")} className={`bc-model-tab ${activeModel === "dex" ? "active" : ""}`}><span className="bc-tab-icon">🔄</span>DEX &amp; AMM Protocols</button>
              <button type="button" onClick={() => setActiveModel("perps")} className={`bc-model-tab ${activeModel === "perps" ? "active" : ""}`}><span className="bc-tab-icon">📈</span>Perpetuals &amp; Futures</button>
              <button type="button" onClick={() => setActiveModel("p2p")} className={`bc-model-tab ${activeModel === "p2p" ? "active" : ""}`}><span className="bc-tab-icon">🤝</span>P2P Escrow Exchange</button>
            </div>
            <div className="bc-showcase-canvas">
              <div className="bc-showcase-left">
                <div className="bc-showcase-tag-row">
                  <span className="bc-showcase-tag">{currentModel.tag}</span>
                  <span className="bc-showcase-badge">{currentModel.badge}</span>
                </div>
                <h3 className="bc-showcase-title">{currentModel.title}</h3>
                <p className="bc-showcase-desc">{currentModel.desc}</p>
                <div className="bc-highlights-list">
                  {currentModel.highlights.map((h, i) => (
                    <div key={i} className="bc-highlight-item"><span className="bc-check-icon">✓</span>{h}</div>
                  ))}
                </div>
                <div className="bc-showcase-cta-row">
                  <Link href="/contact" className="bc-showcase-primary-btn"><span>Deploy Your Exchange</span><span className="bc-arrow">↗</span></Link>
                  <Link href="/contact" className="bc-showcase-ghost-btn"><span>Schedule Architecture Demo</span></Link>
                </div>
              </div>
              <div className="bc-terminal-card">
                <div className="bc-terminal-top-bar">
                  <div className="bc-pair-selector">
                    {['BTC/USDT', 'ETH/USDT', 'SOL/USDT'].map(pair => (
                      <button key={pair} type="button" onClick={() => setActivePair(pair)} className={`bc-pair-pill ${activePair === pair ? 'active' : ''}`}>{pair}</button>
                    ))}
                  </div>
                  <div className="bc-terminal-status"><span className="bc-terminal-live-dot" />Matching Engine: Online</div>
                </div>
                <div className="bc-price-header">
                  <div className="bc-price-left">
                    <div className="bc-big-price">${currentBook.price}</div>
                    <div className="bc-price-change">{currentBook.change}</div>
                  </div>
                  <div className="bc-price-stats">
                    <div className="bc-price-stat-item"><span className="bc-stat-k">24h Vol</span><span className="bc-stat-v">{currentBook.volume}</span></div>
                    <div className="bc-price-stat-item"><span className="bc-stat-k">Latency</span><span className="bc-stat-v" style={{ color: '#10b981' }}>{currentModel.latency}</span></div>
                  </div>
                </div>
                <div className="bc-orderbook-box">
                  <div className="bc-orderbook-head"><span>Price (USDT)</span><span>Size</span><span>Total</span></div>
                  <div className="bc-asks-list">
                    {currentBook.asks.map((ask, i) => (
                      <div key={i} className="bc-order-row bc-ask-row">
                        <span className="bc-order-price bc-ask-price">{ask.price}</span>
                        <span className="bc-order-amount">{ask.amount}</span>
                        <span className="bc-order-total">{ask.total}</span>
                        <div className="bc-depth-bar bc-ask-bar" style={{ width: `${(i + 1) * 22}%` }} />
                      </div>
                    ))}
                  </div>
                  <div className="bc-spread-bar"><span>Spread: 0.01 USDT</span><span>SLA 99.999%</span></div>
                  <div className="bc-bids-list">
                    {currentBook.bids.map((bid, i) => (
                      <div key={i} className="bc-order-row bc-bid-row">
                        <span className="bc-order-price bc-bid-price">{bid.price}</span>
                        <span className="bc-order-amount">{bid.amount}</span>
                        <span className="bc-order-total">{bid.total}</span>
                        <div className="bc-depth-bar bc-bid-bar" style={{ width: `${(4 - i) * 20}%` }} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bc-terminal-actions">
                  <button type="button" className="bc-term-buy-btn"><span>Buy {activePair.split('/')[0]}</span></button>
                  <button type="button" className="bc-term-sell-btn"><span>Sell {activePair.split('/')[0]}</span></button>
                </div>
              </div>
            </div>
            <div className="bc-features-header">
              <h3 className="bc-features-title">Enterprise Exchange Capabilities</h3>
              <p className="bc-features-sub">Engineered with bank‑grade security, multi‑asset matching engines, and regulatory compliance modules.</p>
            </div>
            <div className="bc-exchange-grid">
              {exchangeFeatures.map((feat, i) => (
                <div key={i} className="bc-exchange-card glass-card">
                  <div className="bc-exchange-card-top">
                    <div className="bc-exchange-icon-box" style={{ background: feat.iconBg, color: feat.iconColor }}>{feat.icon}</div>
                    <h4 className="bc-exchange-card-title">{feat.title}</h4>
                  </div>
                  <p className="bc-exchange-card-desc">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bc-asym-caps-section">
          <div className="bc-asym-canvas">
            <div className="bc-asym-grid">
              {capabilities.map((cap, i) => (
                <div key={i} className="bc-asym-card">
                  <div className="bc-asym-card-header">
                    <div className="bc-asym-icon-box" style={{ background: cap.iconBg, color: cap.iconColor }}>
                      {cap.icon}
                    </div>
                    <h3 className="bc-asym-card-title">{cap.title}</h3>
                  </div>
                  <p className="bc-asym-card-desc">{cap.desc}</p>
                </div>
              ))}
              <div className="bc-asym-callout">
                <div className="bc-asym-tag">What We Do</div>
                <h2 className="bc-asym-callout-title">The Best Solution For <br />Your Business</h2>
                <Link href="/contact" className="bc-asym-btn"><span>Explore All</span></Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <style>{`
        .bc-page-wrap { background:#fff; font-family:'Inter',-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif; color:#0f172a; overflow-x:hidden; -webkit-font-smoothing:antialiased; }
        .bc-exchange-section { padding:20px 24px 80px; background:linear-gradient(180deg,#f0fdf4 0%,#fff 40%,#eff6ff 100%); display:flex; justify-content:center; }
        .bc-exchange-container { max-width:1240px; width:100%; }
        .bc-sec-header { text-align:center; max-width:820px; margin:0 auto 44px; display:flex; flex-direction:column; align-items:center; }
        .bc-sec-pill { display:inline-flex; align-items:center; gap:8px; background:rgba(255,255,255,0.9); backdrop-filter:blur(12px); border:1.5px solid rgba(226,232,240,0.9); padding:6px 16px; border-radius:100px; font-family:'Plus Jakarta Sans',sans-serif; font-size:11.5px; font-weight:800; color:#0d9488; letter-spacing:1.2px; margin-bottom:16px; box-shadow:0 4px 12px rgba(15,23,42,0.03); }
        .bc-sec-dot { width:7px; height:7px; border-radius:50%; background:#0d9488; box-shadow:0 0 6px #0d9488; }
        .bc-sec-title { font-family:'Plus Jakarta Sans',sans-serif; font-size:clamp(28px,4vw,44px); font-weight:800; color:#1e1b4b; line-height:1.15; letter-spacing:-1.2px; margin:0 0 16px; }
        .bc-sec-desc { font-family:'Inter',sans-serif; font-size:15.5px; color:#64748b; line-height:1.65; margin:0; }
        .bc-model-tabs-row { display:flex; justify-content:center; gap:12px; margin-bottom:36px; flex-wrap:wrap; }
        .bc-model-tab { background:rgba(255,255,255,0.9); backdrop-filter:blur(12px); border:1.5px solid rgba(226,232,240,0.9); padding:12px 24px; border-radius:100px; font-family:'Plus Jakarta Sans',sans-serif; font-size:14px; font-weight:700; color:#475569; cursor:pointer; display:flex; align-items:center; gap:8px; transition:all .25s cubic-bezier(.16,1,.3,1); box-shadow:0 4px 12px rgba(15,23,42,0.03); }
        .bc-model-tab:hover { background:#fff; transform:translateY(-2px); color:#0f172a; border-color:#cbd5e1; }
        .bc-model-tab.active { background:#0f172a; color:#fff; border-color:#0f172a; box-shadow:0 10px 25px rgba(15,23,42,0.18); }
        .bc-showcase-canvas { background:linear-gradient(135deg,rgba(239,244,254,0.95)0%,rgba(255,255,255,0.98)45%,rgba(253,242,248,0.95)75%,rgba(240,253,244,0.95)100%); backdrop-filter:blur(24px); -webkit-backdrop-filter:blur(24px); border:1.5px solid rgba(255,255,255,0.95); border-radius:36px 36px 180px 36px; padding:52px 48px; box-shadow:0 25px 60px rgba(59,130,246,0.07),0 4px 20px rgba(15,23,42,0.03); display:grid; grid-template-columns:1.15fr 0.85fr; gap:40px; align-items:center; margin-bottom:64px; }
        .bc-showcase-left { display:flex; flex-direction:column; }
        .bc-showcase-tag-row { display:flex; align-items:center; gap:10px; margin-bottom:14px; }
        .bc-showcase-tag { font-family:'Plus Jakarta Sans',sans-serif; font-size:11px; font-weight:800; color:#0d9488; letter-spacing:1px; text-transform:uppercase; }
        .bc-showcase-badge { background:rgba(13,148,136,0.1); border:1px solid rgba(13,148,136,0.2); color:#0d9488; font-family:'Plus Jakarta Sans',sans-serif; font-size:11px; font-weight:800; padding:3px 10px; border-radius:100px; }
        .bc-showcase-title { font-family:'Plus Jakarta Sans',sans-serif; font-size:clamp(24px,3vw,32px); font-weight:800; color:#1e1b4b; line-height:1.2; letter-spacing:-0.8px; margin:0 0 16px; }
        .bc-showcase-desc { font-family:'Inter',sans-serif; font-size:14.5px; color:#475569; line-height:1.65; margin:0 0 24px; }
        .bc-highlights-list { display:flex; flex-direction:column; gap:10px; margin-bottom:32px; }
        .bc-highlight-item { display:flex; align-items:flex-start; gap:10px; font-family:'Inter',sans-serif; font-size:13.5px; color:#334155; line-height:1.5; font-weight:500; }
        .bc-check-icon { width:18px; height:18px; border-radius:50%; background:#f0fdf4; border:1px solid #bbf7d0; color:#16a34a; display:flex; align-items:center; justify-content:center; font-size:10px; font-weight:900; flex-shrink:0; margin-top:2px; }
        .bc-showcase-cta-row { display:flex; gap:14px; flex-wrap:wrap; }
        .bc-showcase-primary-btn { font-family:'Plus Jakarta Sans',sans-serif; background:linear-gradient(135deg,#0d9488 0%,#06b6d4 100%); color:#fff !important; padding:14px 28px; border-radius:100px; font-size:14px; font-weight:700; text-decoration:none; display:inline-flex; align-items:center; gap:8px; box-shadow:0 10px 25px rgba(13,148,136,0.3); transition:all .25s ease; }
        .bc-showcase-primary-btn:hover { background:linear-gradient(135deg,#0f766e 0%,#0891b2 100%); transform:translateY(-2px); box-shadow:0 14px 32px rgba(13,148,136,0.45); }
        .bc-showcase-ghost-btn { font-family:'Plus Jakarta Sans',sans-serif; background:rgba(255,255,255,0.9); border:1.5px solid rgba(203,213,225,0.9); color:#1e293b !important; padding:14px 24px; border-radius:100px; font-size:14px; font-weight:700; text-decoration:none; display:inline-flex; align-items:center; transition:all .25s ease; }
        .bc-showcase-ghost-btn:hover { background:#fff; border-color:#94a3b8; transform:translateY(-2px); box-shadow:0 6px 18px rgba(15,23,42,0.06); }
        .bc-terminal-card { background:#0f172a; border-radius:28px; padding:24px; color:#fff; box-shadow:0 20px 45px rgba(15,23,42,0.25); display:flex; flex-direction:column; gap:16px; }
        .bc-terminal-top-bar { display:flex; justify-content:space-between; align-items:center; padding-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.08); }
        .bc-pair-selector { display:flex; gap:6px; }
        .bc-pair-pill { background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); color:#94a3b8; font-family:'Plus Jakarta Sans',sans-serif; font-size:11px; font-weight:700; padding:4px 10px; border-radius:8px; cursor:pointer; transition:all .2s ease; }
        .bc-pair-pill:hover { color:#fff; background:rgba(255,255,255,0.12); }
        .bc-pair-pill.active { background:#38bdf8; color:#0f172a; border-color:#38bdf8; font-weight:800; }
        .bc-terminal-status { display:flex; align-items:center; gap:6px; font-size:10.5px; font-weight:600; color:#94a3b8; }
        .bc-terminal-live-dot { width:6px; height:6px; border-radius:50%; background:#10b981; box-shadow:0 0 6px #10b981; animation:pulseDot 2s infinite; }
        @keyframes pulseDot { 0%,100%{transform:scale(1);opacity:1;}50%{transform:scale(1.4);opacity:0.6;} }
        .bc-price-header { display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.04); border-radius:16px; padding:12px 16px; }
        .bc-big-price { font-family:'Plus Jakarta Sans',sans-serif; font-size:22px; font-weight:800; color:#fff; line-height:1; }
        .bc-price-change { font-size:11px; font-weight:700; color:#10b981; margin-top:4px; }
        .bc-price-stats { display:flex; gap:16px; }
        .bc-price-stat-item { display:flex; flex-direction:column; align-items:flex-end; }
        .bc-stat-k { font-size:9.5px; color:#64748b; font-weight:600; text-transform:uppercase; }
        .bc-stat-v { font-family:'JetBrains Mono',monospace; font-size:11.5px; font-weight:700; color:#e2e8f0; }
        .bc-orderbook-box { display:flex; flex-direction:column; gap:4px; font-family:'JetBrains Mono',monospace; font-size:11px; }
        .bc-orderbook-head { display:flex; justify-content:space-between; color:#64748b; font-size:10px; font-weight:700; text-transform:uppercase; padding:0 4px 6px; border-bottom:1px solid rgba(255,255,255,0.06); }
        .bc-order-row { position:relative; display:flex; justify-content:space-between; padding:4px; border-radius:4px; z-index:1; }
        .bc-depth-bar { position:absolute; top:0; right:0; bottom:0; border-radius:4px; z-index:-1; opacity:0.15; }
        .bc-ask-price { color:#f43f5e; font-weight:700; }
        .bc-ask-bar { background:#f43f5e; }
        .bc-bid-price { color:#10b981; font-weight:700; }
        .bc-bid-bar { background:#10b981; }
        .bc-order-amount { color:#cbd5e1; }
        .bc-order-total { color:#64748b; }
        .bc-spread-bar { display:flex; justify-content:space-between; background:rgba(255,255,255,0.03); padding:4px 8px; border-radius:6px; font-size:9.5px; color:#94a3b8; margin:4px 0; }
        .bc-terminal-actions { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:4px; }
        .bc-term-buy-btn { background:#10b981; color:#fff; border:none; padding:10px; border-radius:12px; font-family:'Plus Jakarta Sans',sans-serif; font-size:12.5px; font-weight:800; cursor:pointer; transition:all .2s ease; }
        .bc-term-buy-btn:hover { background:#059669; transform:translateY(-1px); }
        .bc-term-sell-btn { background:#f43f5e; color:#fff; border:none; padding:10px; border-radius:12px; font-family:'Plus Jakarta Sans',sans-serif; font-size:12.5px; font-weight:800; cursor:pointer; transition:all .2s ease; }
        .bc-term-sell-btn:hover { background:#e11d48; transform:translateY(-1px); }
        .bc-features-header { text-align:center; max-width:640px; margin:0 auto 36px; }
        .bc-features-title { font-family:'Plus Jakarta Sans',sans-serif; font-size:26px; font-weight:800; color:#1e1b4b; letter-spacing:-0.5px; margin:0 0 10px; }
        .bc-features-sub { font-family:'Inter',sans-serif; font-size:14.5px; color:#64748b; line-height:1.6; margin:0; }
        .bc-exchange-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; align-items:stretch; }
        .bc-exchange-card { background:rgba(255,255,255,0.95); backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px); border-radius:20px; padding:28px 24px; box-shadow:0 10px 25px rgba(15,23,42,0.04),0 1px 3px rgba(0,0,0,0.02); border:1.5px solid rgba(255,255,255,0.95); transition:all .3s cubic-bezier(.16,1,.3,1); display:flex; flex-direction:column; }
        .bc-exchange-card:hover { transform:translateY(-6px); background:#fff; box-shadow:0 20px 45px rgba(15,23,42,0.09); border-color:#cbd5e1; }
        .bc-exchange-card-top { display:flex; align-items:center; gap:14px; margin-bottom:14px; }
        .bc-exchange-icon-box { width:46px; height:46px; border-radius:14px; display:flex; align-items:center; justify-content:center; flex-shrink:0; box-shadow:0 4px 12px rgba(0,0,0,0.03); transition:transform .25s ease; }
        .bc-exchange-card:hover .bc-exchange-icon-box { transform:scale(1.08); }
        .bc-exchange-card-title { font-family:'Plus Jakarta Sans',sans-serif; font-size:16.5px; font-weight:700; color:#0f172a; line-height:1.25; letter-spacing:-0.3px; margin:0; }
        .bc-exchange-card-desc { font-family:'Inter',sans-serif; font-size:13.5px; color:#64748b; line-height:1.65; font-weight:400; margin:0; }
        .bc-asym-caps-section { padding:10px 24px 80px; background:linear-gradient(180deg,#f0fdf4 0%,#fff 40%,#eff6ff 100%); display:flex; justify-content:center; }
        .bc-asym-canvas { max-width:1200px; width:100%; background:linear-gradient(135deg,rgba(239,244,254,0.95)0%,rgba(255,255,255,0.98)45%,rgba(253,242,248,0.95)75%,rgba(240,253,244,0.95)100%); backdrop-filter:blur(24px); -webkit-backdrop-filter:blur(24px); border:1.5px solid rgba(255,255,255,0.95); border-radius:36px 36px 180px 36px; padding:52px 48px; box-shadow:0 25px 60px rgba(59,130,246,0.07),0 4px 20px rgba(15,23,42,0.03); position:relative; }
        .bc-asym-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; align-items:stretch; }
        .bc-asym-card { background:rgba(255,255,255,0.95); backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px); border-radius:20px; padding:28px 24px; box-shadow:0 10px 25px rgba(15,23,42,0.04),0 1px 3px rgba(0,0,0,0.02); border:1.5px solid rgba(255,255,255,0.95); transition:all .3s cubic-bezier(.16,1,.3,1); display:flex; flex-direction:column; }
        .bc-asym-card:hover { transform:translateY(-6px); background:#fff; box-shadow:0 20px 45px rgba(15,23,42,0.09); border-color:#cbd5e1; }
        .bc-asym-card-header { display:flex; align-items:center; gap:14px; margin-bottom:14px; }
        .bc-asym-icon-box { width:46px; height:46px; border-radius:14px; display:flex; align-items:center; justify-content:center; flex-shrink:0; box-shadow:0 4px 12px rgba(0,0,0,0.03); transition:transform .25s ease; }
        .bc-asym-card:hover .bc-asym-icon-box { transform:scale(1.08); }
        .bc-asym-card-title { font-family:'Plus Jakarta Sans',sans-serif; font-size:16.5px; font-weight:800; color:#0f172a; line-height:1.25; letter-spacing:-0.3px; margin:0; }
        .bc-asym-card-desc { font-family:'Inter',sans-serif; font-size:13.5px; color:#64748b; line-height:1.65; font-weight:400; margin:0; }
        .bc-asym-callout { display:flex; flex-direction:column; justify-content:center; align-items:flex-start; padding:12px 18px; }
        .bc-asym-tag { font-family:'Plus Jakarta Sans',sans-serif; font-size:12px; font-weight:800; color:#0d9488; text-transform:uppercase; letter-spacing:1.2px; margin-bottom:8px; }
        .bc-asym-callout-title { font-family:'Plus Jakarta Sans',sans-serif; font-size:clamp(24px,2.8vw,34px); font-weight:800; color:#0f172a; line-height:1.15; letter-spacing:-1px; margin:0 0 22px; }
        .bc-asym-btn { font-family:'Plus Jakarta Sans',sans-serif; background:linear-gradient(135deg,#0d9488 0%,#06b6d4 100%); color:#fff !important; padding:14px 34px; border-radius:100px; font-size:14.5px; font-weight:700; text-decoration:none; display:inline-flex; align-items:center; justify-content:center; box-shadow:0 10px 25px rgba(13,148,136,0.3); transition:all .25s ease; }
        .bc-asym-btn:hover { background:linear-gradient(135deg,#0f766e 0%,#0891b2 100%); transform:translateY(-2px) scale(1.02); box-shadow:0 14px 32px rgba(13,148,136,0.45); }
        @media (max-width:1024px) { .bc-asym-grid, .bc-exchange-grid { grid-template-columns:repeat(2,1fr); } }
        @media (max-width:640px) { .bc-asym-caps-section, .bc-exchange-section { padding:20px 16px 60px; } .bc-asym-canvas { padding:32px 20px; border-radius:28px 28px 80px 28px; } .bc-asym-grid, .bc-exchange-grid { grid-template-columns:1fr; } }
      `}</style>
    </>
  );
}
