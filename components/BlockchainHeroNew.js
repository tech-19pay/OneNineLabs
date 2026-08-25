"use client";
import React from 'react';
import Link from 'next/link';

export default function BlockchainHeroNew() {
  return (
    <section className="cry-hero-section">
      {/* Background Ambient Glows & Constellation Arcs */}
      <div className="cry-bg-effects">
        <div className="cry-glow-orb orb-1"></div>
        <div className="cry-glow-orb orb-2"></div>
        <svg className="cry-constellation" viewBox="0 0 1200 800" fill="none">
          <circle cx="950" cy="400" r="300" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 6" opacity="0.6" />
          <circle cx="950" cy="400" r="420" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 5" opacity="0.4" />
          <path d="M700 250 Q 880 180 1100 320" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
          <path d="M650 500 Q 850 620 1150 480" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
          <circle cx="700" cy="250" r="4" fill="#10b981" opacity="0.6" />
          <circle cx="1100" cy="320" r="3" fill="#eab308" opacity="0.6" />
          <circle cx="650" cy="500" r="4" fill="#3b82f6" opacity="0.5" />
          <circle cx="1150" cy="480" r="3" fill="#10b981" opacity="0.6" />
        </svg>
      </div>

      <div className="new-bc-container cry-container">
        {/* Left Column: Hero Copy & Actions */}
        <div className="cry-hero-left">
          <h1 className="cry-hero-title">
            <span className="cry-title-nowrap">Build the Future of</span><br />
            <span className="cry-brand-highlight cry-title-nowrap">
              Web3 & Blockchain
              <svg className="cry-swoosh-svg" viewBox="0 0 260 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M6 18C70 28 190 28 254 8C200 22 90 27 12 21" 
                  stroke="url(#cry_swoosh_grad)" 
                  strokeWidth="8" 
                  strokeLinecap="round" 
                />
                <defs>
                  <linearGradient id="cry_swoosh_grad" x1="6" y1="18" x2="254" y2="8" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1e3a8a" />
                    <stop offset="0.5" stopColor="#2563eb" />
                    <stop offset="1" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <p className="cry-hero-desc">
            End-to-end blockchain development services. From audited smart contracts and DeFi protocols to custom wallets, DEXs, and cross-chain dApps engineered for institutional-grade security and scale.
          </p>

          <div className="cry-hero-actions">
            <Link href="#get-started" className="cry-btn-primary">
              Get Started
            </Link>

            <Link href="/services/blockchain#services" className="cry-btn-secondary">
              <span>Explore Services</span>
              <span className="cry-play-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Right Column: 3D Angled Phone Mockups Scene */}
        <div className="cry-hero-right">
          <div className="cry-mockups-scene">
            
            {/* Phone 1: Front / Left Phone (Market View) */}
            <div className="cry-phone-device phone-front">
              <div className="cry-phone-inner">
                {/* Phone Header / Status Bar */}
                <div className="cphone-status-bar">
                  <span className="cphone-time">9:27</span>
                  <div className="cphone-dynamic-island"></div>
                  <div className="cphone-status-icons">
                    <svg width="12" height="10" viewBox="0 0 16 12" fill="#0f172a"><path d="M0 10h3v2H0zm5-4h3v6H5zm5-4h3v10h-3zm5-2h1v12h-1z"/></svg>
                    <svg width="14" height="10" viewBox="0 0 20 12" fill="#0f172a"><rect x="1" y="1" width="15" height="10" rx="3" stroke="#0f172a" strokeWidth="1.5" fill="none"/><rect x="3" y="3" width="9" height="6" rx="1.5" fill="#0f172a"/><path d="M17 4h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1z" fill="#0f172a"/></svg>
                  </div>
                </div>

                {/* In-App Navigation Bar */}
                <div className="cphone-nav">
                  <span className="cphone-nav-icon">☰</span>
                  <span className="cphone-nav-title">Market</span>
                  <span className="cphone-nav-icon">🔔</span>
                </div>

                {/* Search Bar */}
                <div className="cphone-search">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                  <span>Search</span>
                </div>

                {/* Favorite Section */}
                <div className="cphone-section-label">Favorite</div>
                <div className="cphone-cards-grid">
                  {/* Card 1: Ethereum */}
                  <div className="cphone-fav-card">
                    <div className="cpc-top">
                      <div className="cpc-coin-ic eth">⧫</div>
                      <div className="cpc-coin-meta">
                        <span className="cpc-name">Ethereum</span>
                        <span className="cpc-symbol">(ETH)</span>
                      </div>
                    </div>
                    {/* Sparkline Graph */}
                    <svg className="cpc-chart" viewBox="0 0 100 28" fill="none">
                      <path d="M0 20 Q 20 8 40 18 T 75 6 T 100 12" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round"/>
                    </svg>
                    <div className="cpc-bottom">
                      <span className="cpc-price">$ 19.347,2</span>
                      <span className="cpc-change green">+0,39%</span>
                    </div>
                  </div>

                  {/* Card 2: Cardano */}
                  <div className="cphone-fav-card">
                    <div className="cpc-top">
                      <div className="cpc-coin-ic ada">₳</div>
                      <div className="cpc-coin-meta">
                        <span className="cpc-name">Cardano</span>
                        <span className="cpc-symbol">(ADA)</span>
                      </div>
                    </div>
                    {/* Sparkline Graph */}
                    <svg className="cpc-chart" viewBox="0 0 100 28" fill="none">
                      <path d="M0 10 Q 25 22 50 12 T 80 24 T 100 16" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round"/>
                    </svg>
                    <div className="cpc-bottom">
                      <span className="cpc-price">$ 12.113,9</span>
                      <span className="cpc-change red">-0,89%</span>
                    </div>
                  </div>
                </div>

                {/* Trend Market Section */}
                <div className="cphone-section-label">Trend Market</div>
                <div className="cphone-market-list">
                  {/* Row 1: Ethereum */}
                  <div className="cphone-list-item">
                    <span className="cli-rank">1#</span>
                    <div className="cli-coin eth">⧫</div>
                    <div className="cli-info">
                      <span className="cli-title">Ethereum</span>
                      <span className="cli-sub">ETH</span>
                    </div>
                    <div className="cli-stats">
                      <span className="cli-price">$12,9</span>
                      <span className="cli-rate green">▲ 2,98%</span>
                    </div>
                  </div>

                  {/* Row 2: Bitcoin with Favorite Badge */}
                  <div className="cphone-list-item relative-fav">
                    <span className="cli-rank">2#</span>
                    <div className="cli-coin btc">₿</div>
                    <div className="cli-info">
                      <span className="cli-title">Bitcoin</span>
                      <span className="cli-sub">BTC</span>
                    </div>
                    <div className="cli-stats">
                      <span className="cli-price">$10,2</span>
                      <span className="cli-rate green">▲ 2,65%</span>
                    </div>
                    {/* Floating Favorite Tag */}
                    <div className="cli-fav-tag">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="#fff"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                      Favorite
                    </div>
                  </div>

                  {/* Row 3: Cardano */}
                  <div className="cphone-list-item">
                    <span className="cli-rank">3#</span>
                    <div className="cli-coin ada">₳</div>
                    <div className="cli-info">
                      <span className="cli-title">Cardano</span>
                      <span className="cli-sub">ADA</span>
                    </div>
                    <div className="cli-stats">
                      <span className="cli-price">$9,8</span>
                      <span className="cli-rate green">▲ 2,78%</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Breakout Card: Chainlink */}
              <div className="cry-floating-pill-card pill-card-1">
                <span className="cli-rank">3#</span>
                <div className="cli-coin link">🔗</div>
                <div className="cli-info">
                  <span className="cli-title">Chainlink</span>
                </div>
                <span className="cli-price">$12,9</span>
              </div>
            </div>

            {/* Phone 2: Back / Right Phone (Wallet & Balance View) */}
            <div className="cry-phone-device phone-back">
              <div className="cry-phone-inner">
                {/* Phone Header / Status Bar */}
                <div className="cphone-status-bar">
                  <span className="cphone-time">9:27</span>
                  <div className="cphone-dynamic-island"></div>
                  <div className="cphone-status-icons">
                    <svg width="12" height="10" viewBox="0 0 16 12" fill="#0f172a"><path d="M0 10h3v2H0zm5-4h3v6H5zm5-4h3v10h-3zm5-2h1v12h-1z"/></svg>
                    <svg width="14" height="10" viewBox="0 0 20 12" fill="#0f172a"><rect x="1" y="1" width="15" height="10" rx="3" stroke="#0f172a" strokeWidth="1.5" fill="none"/><rect x="3" y="3" width="9" height="6" rx="1.5" fill="#0f172a"/><path d="M17 4h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1z" fill="#0f172a"/></svg>
                  </div>
                </div>

                {/* Top Balance Card (Floating Glass Effect) */}
                <div className="cphone-bal-card">
                  <div className="cbal-header">
                    <span>Current Balance</span>
                    <div className="cbal-icons">
                      <span className="cbal-mini eth">⧫</span>
                      <span className="cbal-mini btc">₿</span>
                      <span className="cbal-mini more">1+</span>
                    </div>
                  </div>
                  <div className="cbal-amount">$ 48.369,88</div>
                  <div className="cbal-footer">
                    <span className="cbal-profit-label">Profit <strong className="cbal-profit-val">$ 191,02</strong></span>
                    <span className="cbal-profit-pct">(0,39%) <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m5 15 7-7 7 7"/></svg></span>
                  </div>
                </div>

                {/* Action Buttons Row */}
                <div className="cphone-actions-row">
                  <div className="cact-btn">
                    <div className="cact-icon">⇄</div>
                    <span>Exchange</span>
                  </div>
                  <div className="cact-btn">
                    <div className="cact-icon">+</div>
                    <span>Topup</span>
                  </div>
                  <div className="cact-btn">
                    <div className="cact-icon">↗</div>
                    <span>Withdraw</span>
                  </div>
                </div>

                {/* Assets Section */}
                <div className="cphone-section-header">
                  <span>Assets</span>
                  <span className="cphone-see-all">See all</span>
                </div>
                <div className="cphone-cards-grid">
                  {/* Asset 1: Ethereum */}
                  <div className="cphone-fav-card">
                    <div className="cpc-top">
                      <div className="cpc-coin-ic eth">⧫</div>
                      <div className="cpc-coin-meta">
                        <span className="cpc-name">Ethereum</span>
                        <span className="cpc-symbol">(ETH)</span>
                      </div>
                    </div>
                    <div className="cpc-subprice">$ 19.347,2 <span className="green-txt">+0,39%</span></div>
                    <svg className="cpc-chart" viewBox="0 0 100 24" fill="none">
                      <path d="M0 18 Q 30 6 60 14 T 100 4" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round"/>
                    </svg>
                  </div>

                  {/* Asset 2: Bitcoin */}
                  <div className="cphone-fav-card">
                    <div className="cpc-top">
                      <div className="cpc-coin-ic btc">₿</div>
                      <div className="cpc-coin-meta">
                        <span className="cpc-name">Bitcoin</span>
                        <span className="cpc-symbol">(BTC)</span>
                      </div>
                    </div>
                    <div className="cpc-subprice">$ 12.113,9 <span className="red-txt">-1,98%</span></div>
                    <svg className="cpc-chart" viewBox="0 0 100 24" fill="none">
                      <path d="M0 6 Q 30 18 60 10 T 100 20" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>

                {/* Transaction History Section */}
                <div className="cphone-section-header mt-8">
                  <span>Transaction History</span>
                  <span className="cphone-see-all">See all</span>
                </div>
                <div className="cphone-tx-list">
                  <div className="cphone-tx-item">
                    <div className="ctx-icon eth">⧫</div>
                    <div className="ctx-meta">
                      <span className="ctx-title">Ethereum</span>
                      <span className="ctx-sub">Send</span>
                    </div>
                    <div className="ctx-amount">
                      <span className="ctx-val">$12,9</span>
                      <span className="ctx-date">Today, 11:15 AM</span>
                    </div>
                  </div>
                  <div className="cphone-tx-item">
                    <div className="ctx-icon ada">₳</div>
                    <div className="ctx-meta">
                      <span className="ctx-title">Cardano</span>
                      <span className="ctx-sub">Receive</span>
                    </div>
                    <div className="ctx-amount">
                      <span className="ctx-val">$8,2</span>
                      <span className="ctx-date">Yesterday</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        .cry-hero-section {
          position: relative;
          background: #ffffff;
          padding: 20px 0 0;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, sans-serif;
        }

        /* Ambient Background Elements */
        .cry-bg-effects {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        .cry-glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.45;
        }
        .orb-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.18) 0%, rgba(255,255,255,0) 70%);
          top: -50px;
          right: 20%;
        }
        .orb-2 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(234, 179, 8, 0.12) 0%, rgba(59, 130, 246, 0.08) 50%, rgba(255,255,255,0) 70%);
          bottom: -100px;
          right: -50px;
        }
        .cry-constellation {
          position: absolute;
          right: -50px;
          top: 50%;
          transform: translateY(-50%);
          width: 900px;
          height: 600px;
        }

        .cry-container {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.05fr 1.35fr;
          gap: 40px;
          align-items: center;
        }

        /* Left Side Typography & Actions */
        .cry-hero-left {
          max-width: 580px;
        }
        .cry-title-nowrap {
          white-space: nowrap;
          display: inline-block;
        }

        .cry-hero-title {
          font-size: 52px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.18;
          letter-spacing: -1.5px;
          margin: 0 0 24px;
        }
        .cry-brand-highlight {
          position: relative;
          display: inline-block;
          color: #1e3a8a; /* Dark Royal Blue */
          background: linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .cry-swoosh-svg {
          position: absolute;
          left: -4px;
          bottom: -14px;
          width: 106%;
          height: 26px;
          pointer-events: none;
        }

        .cry-hero-desc {
          font-size: 17px;
          color: #475569;
          line-height: 1.65;
          margin: 0 0 36px;
          max-width: 460px;
        }

        .cry-hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .cry-btn-primary {
          background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%); /* Royal Blue Palette */
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
          padding: 16px 36px;
          border-radius: 100px;
          text-decoration: none;
          box-shadow: 0 10px 25px -3px rgba(37, 99, 235, 0.35);
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .cry-btn-primary:hover {
          background: linear-gradient(135deg, #172554 0%, #1d4ed8 100%);
          transform: translateY(-2px);
          box-shadow: 0 15px 30px -3px rgba(37, 99, 235, 0.45);
        }

        .cry-btn-secondary {
          background: #ffffff;
          color: #0f172a;
          font-size: 16px;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: 100px;
          border: 1.5px solid #0f172a;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
        }
        .cry-play-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1.5px solid #2563eb;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .cry-btn-secondary:hover {
          background: #f8fafc;
          border-color: #2563eb;
          color: #2563eb;
          transform: translateY(-2px);
        }
        .cry-btn-secondary:hover .cry-play-icon {
          background: #2563eb;
          color: #ffffff;
        }

        /* Right Side: Dual Angled Phones Scene */
        .cry-hero-right {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 460px;
        }
        .cry-mockups-scene {
          position: relative;
          width: 100%;
          max-width: 460px;
          height: 460px;
          perspective: 1400px;
        }

        /* Common Phone Frame Styling - White Theme */
        .cry-phone-device {
          position: absolute;
          width: 225px;
          height: 445px;
          background: #ffffff;
          border: 7px solid #e2e8f0;
          border-radius: 36px;
          box-shadow: 
            0 25px 50px -10px rgba(15, 23, 42, 0.12),
            0 12px 24px -10px rgba(15, 23, 42, 0.08),
            inset 0 0 0 1px #ffffff;
          overflow: visible;
          transform-style: preserve-3d;
          transition: transform 0.4s ease;
        }
        .cry-phone-inner {
          position: relative;
          width: 100%;
          height: 100%;
          background: #f8fafc;
          border-radius: 28px;
          overflow: hidden;
          padding: 10px 10px 14px;
          display: flex;
          flex-direction: column;
          color: #0f172a;
        }

        /* Phone 1 (Front/Left Angle) */
        .phone-front {
          left: 10px;
          bottom: 10px;
          z-index: 2;
          transform: rotate(-7deg) rotateY(12deg) scale(0.88);
        }
        .phone-front:hover {
          transform: rotate(-4deg) rotateY(6deg) scale(0.92);
        }

        /* Phone 2 (Back/Right Angle) */
        .phone-back {
          right: 10px;
          top: 10px;
          z-index: 1;
          transform: rotate(5deg) rotateY(-8deg) scale(0.84);
        }
        .phone-back:hover {
          transform: rotate(2deg) rotateY(-4deg) scale(0.88);
        }

        /* Phone Status Bar */
        .cphone-status-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 4px 10px 10px;
        }
        .cphone-time {
          font-size: 11px;
          font-weight: 700;
          color: #0f172a;
        }
        .cphone-dynamic-island {
          width: 68px;
          height: 15px;
          background: #0f172a;
          border-radius: 20px;
        }
        .cphone-status-icons {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        /* In-Phone Header / Nav */
        .cphone-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          padding: 0 4px;
        }
        .cphone-nav-icon {
          font-size: 14px;
          color: #64748b;
          cursor: pointer;
        }
        .cphone-nav-title {
          font-size: 13px;
          font-weight: 700;
          color: #0f172a;
        }

        /* Phone Search Bar */
        .cphone-search {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 8px 12px;
          font-size: 11px;
          color: #94a3b8;
          margin-bottom: 14px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.02);
        }

        /* Section Labels */
        .cphone-section-label {
          font-size: 12px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 8px 2px;
        }
        .cphone-section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }
        .cphone-see-all {
          font-size: 10px;
          font-weight: 600;
          color: #10b981;
          cursor: pointer;
        }

        /* Cards Grid */
        .cphone-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-bottom: 14px;
        }
        .cphone-fav-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.03);
        }
        .cpc-top {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .cpc-coin-ic {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          color: #fff;
        }
        .cpc-coin-ic.eth { background: #627eea; }
        .cpc-coin-ic.ada { background: #0033ad; }
        .cpc-coin-ic.btc { background: #f7931a; }
        .cpc-coin-meta {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }
        .cpc-name {
          font-size: 10px;
          font-weight: 700;
          color: #0f172a;
        }
        .cpc-symbol {
          font-size: 8px;
          color: #64748b;
        }
        .cpc-chart {
          width: 100%;
          height: 22px;
          margin: 2px 0;
        }
        .cpc-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .cpc-price {
          font-size: 11px;
          font-weight: 700;
          color: #0f172a;
        }
        .cpc-subprice {
          font-size: 10px;
          font-weight: 700;
          color: #0f172a;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .cpc-change {
          font-size: 8.5px;
          font-weight: 700;
          padding: 1px 4px;
          border-radius: 4px;
        }
        .cpc-change.green, .green-txt { color: #10b981; }
        .cpc-change.red, .red-txt { color: #ef4444; }

        /* Market List (Phone 1) */
        .cphone-market-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .cphone-list-item {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 8px 10px;
          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;
          box-shadow: 0 1px 4px rgba(0,0,0,0.02);
        }
        .cli-rank {
          font-size: 9px;
          font-weight: 700;
          color: #94a3b8;
          width: 14px;
        }
        .cli-coin {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          color: #fff;
        }
        .cli-coin.eth { background: #627eea; }
        .cli-coin.btc { background: #f7931a; }
        .cli-coin.ada { background: #0033ad; }
        .cli-coin.link { background: #375bd2; font-size: 10px; }
        .cli-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }
        .cli-title {
          font-size: 11px;
          font-weight: 700;
          color: #0f172a;
        }
        .cli-sub {
          font-size: 8.5px;
          color: #64748b;
        }
        .cli-stats {
          text-align: right;
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }
        .cli-price {
          font-size: 11px;
          font-weight: 700;
          color: #0f172a;
        }
        .cli-rate.green {
          font-size: 8.5px;
          font-weight: 700;
          color: #10b981;
        }

        /* Floating Favorite Tag */
        .cli-fav-tag {
          position: absolute;
          right: -6px;
          top: -6px;
          background: #10b981;
          color: #fff;
          font-size: 8px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 3px;
          box-shadow: 0 4px 10px rgba(16, 185, 129, 0.35);
        }

        /* Floating Pill Card (Chainlink Breakout) */
        .cry-floating-pill-card {
          position: absolute;
          bottom: 24px;
          right: -30px;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 100px;
          padding: 8px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 16px 32px rgba(15, 23, 42, 0.12);
          z-index: 10;
          color: #0f172a;
        }

        /* Phone 2 Specific Elements */
        .cphone-bal-card {
          background: linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%);
          border: 1px solid #dcfce7;
          border-radius: 18px;
          padding: 14px;
          margin-bottom: 12px;
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.08);
        }
        .cbal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 10px;
          color: #64748b;
          margin-bottom: 4px;
        }
        .cbal-icons {
          display: flex;
          align-items: center;
          gap: 3px;
        }
        .cbal-mini {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8px;
          font-weight: 700;
          color: #fff;
        }
        .cbal-mini.eth { background: #627eea; }
        .cbal-mini.btc { background: #f7931a; }
        .cbal-mini.more { background: #e2e8f0; color: #475569; font-size: 7px; }
        .cbal-amount {
          font-size: 22px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.5px;
          margin-bottom: 6px;
        }
        .cbal-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 9.5px;
        }
        .cbal-profit-label {
          color: #64748b;
        }
        .cbal-profit-val {
          color: #0f172a;
          font-weight: 700;
        }
        .cbal-profit-pct {
          background: #dcfce7;
          color: #15803d;
          border: 1px solid #bbf7d0;
          padding: 2px 6px;
          border-radius: 6px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 2px;
        }

        /* Action Buttons */
        .cphone-actions-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-bottom: 14px;
        }
        .cact-btn {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 8px 4px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          font-size: 9px;
          font-weight: 600;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 1px 3px rgba(0,0,0,0.02);
        }
        .cact-btn:hover {
          background: #f1f5f9;
          color: #0f172a;
          border-color: #cbd5e1;
        }
        .cact-icon {
          width: 26px;
          height: 26px;
          border-radius: 8px;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: #0f172a;
        }

        /* Transactions List */
        .mt-8 { margin-top: 8px; }
        .cphone-tx-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .cphone-tx-item {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 8px 10px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.02);
        }
        .ctx-icon {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          color: #fff;
        }
        .ctx-icon.eth { background: #627eea; }
        .ctx-icon.ada { background: #0033ad; }
        .ctx-meta {
          flex: 1;
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }
        .ctx-title {
          font-size: 11px;
          font-weight: 700;
          color: #0f172a;
        }
        .ctx-sub {
          font-size: 8.5px;
          color: #64748b;
        }
        .ctx-amount {
          text-align: right;
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }
        .ctx-val {
          font-size: 11px;
          font-weight: 700;
          color: #0f172a;
        }
        .ctx-date {
          font-size: 8px;
          color: #64748b;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1080px) {
          .cry-container {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .cry-hero-left {
            max-width: 100%;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .cry-hero-desc {
            max-width: 540px;
          }
          .cry-hero-actions {
            justify-content: center;
          }
          .cry-hero-right {
            min-height: 540px;
          }
          .cry-mockups-scene {
            max-width: 520px;
            height: 540px;
          }
          .cry-phone-device {
            width: 250px;
            height: 500px;
          }
        }

        @media (max-width: 640px) {
          .cry-hero-section {
            padding: 50px 0 70px;
          }
          .cry-hero-title {
            font-size: 38px;
            letter-spacing: -1px;
          }
          .cry-hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .cry-btn-primary, .cry-btn-secondary {
            width: 100%;
            justify-content: center;
          }
          .cry-mockups-scene {
            transform: scale(0.85);
            height: 480px;
          }
          .phone-front {
            left: -20px;
          }
          .phone-back {
            right: -20px;
          }
        }
      `}</style>
    </section>
  );
}
