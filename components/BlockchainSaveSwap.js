"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function BlockchainSaveSwap() {
  const [activeTab, setActiveTab] = useState('swap');
  const [payAmount, setPayAmount] = useState('2.50');

  return (
    <section className="bc-dex-section" id="dex-development">
      <div className="new-bc-container">
        
        {/* 3-Column Content Layout */}
        <div className="bc-dex-3col-grid">
          
          {/* Column 1: Left Copy & CTA */}
          <div className="bc-dex-col-left">
            <h2 className="bc-dex-section-heading">
              Next-Gen DEX & AMM Development
            </h2>
            <h3 className="bc-dex-lead-text">
              High-throughput decentralized exchanges engineered for institutional liquidity, sub-millisecond execution, and minimal slippage.
            </h3>
            <p className="bc-dex-sub-text">
              We build custom Automated Market Makers (AMM), orderbook matching engines, concentrated liquidity vaults, and cross-chain routing protocols built for scale and capital efficiency.
            </p>
            <Link href="/contact" className="bc-dex-cta-pill">
              <span className="dex-cta-icon">↗</span>
              <span className="dex-cta-label">Build Your DEX</span>
            </Link>
          </div>

          {/* Column 2: Center Real DEX Terminal Mockup (White Theme) */}
          <div className="bc-dex-col-center">
            <div className="dex-terminal-wrapper">
              <div className="dex-terminal-glow"></div>
              
              <div className="dex-terminal-card white-theme-dex">
                
                {/* DEX Top Bar */}
                <div className="rd-top-bar">
                  <div className="rd-tabs">
                    <button 
                      className={`rd-tab ${activeTab === 'swap' ? 'active' : ''}`}
                      onClick={() => setActiveTab('swap')}
                    >
                      Swap
                    </button>
                    <button 
                      className={`rd-tab ${activeTab === 'limit' ? 'active' : ''}`}
                      onClick={() => setActiveTab('limit')}
                    >
                      Limit
                    </button>
                    <button 
                      className={`rd-tab ${activeTab === 'pool' ? 'active' : ''}`}
                      onClick={() => setActiveTab('pool')}
                    >
                      Liquidity
                    </button>
                  </div>
                  
                  <div className="rd-settings-btn">
                    <span>⚙ 0.1%</span>
                  </div>
                </div>

                {/* You Pay Input Box */}
                <div className="rd-token-box pay-box">
                  <div className="rd-tb-head">
                    <span className="rd-lbl">You Pay</span>
                    <span className="rd-bal">Balance: <strong>4.82 ETH</strong> <span className="max-tag">MAX</span></span>
                  </div>
                  <div className="rd-tb-input-row">
                    <input 
                      type="text" 
                      className="rd-input" 
                      value={payAmount} 
                      onChange={(e) => setPayAmount(e.target.value)}
                    />
                    <div className="rd-token-select">
                      <span className="coin-ic eth">⧫</span>
                      <span className="token-symbol">ETH</span>
                      <span className="arrow-down">⌄</span>
                    </div>
                  </div>
                  <div className="rd-tb-sub">
                    <span>$8,122.50 USD</span>
                  </div>
                </div>

                {/* Floating Flip Swap Icon */}
                <div className="rd-flip-btn-wrap">
                  <div className="rd-flip-btn">⇅</div>
                </div>

                {/* You Receive Output Box */}
                <div className="rd-token-box receive-box">
                  <div className="rd-tb-head">
                    <span className="rd-lbl">You Receive</span>
                    <span className="rd-bal">Balance: <strong>24,500.00 USDT</strong></span>
                  </div>
                  <div className="rd-tb-input-row">
                    <input 
                      type="text" 
                      className="rd-input text-blue" 
                      value="8,122.45" 
                      readOnly
                    />
                    <div className="rd-token-select">
                      <span className="coin-ic usdt">₮</span>
                      <span className="token-symbol">USDT</span>
                      <span className="arrow-down">⌄</span>
                    </div>
                  </div>
                  <div className="rd-tb-sub">
                    <span>$8,122.45 USD</span>
                    <span className="est-pill">Optimal Route</span>
                  </div>
                </div>

                {/* On-Chain Route & Gas Telemetry */}
                <div className="rd-telemetry-box">
                  <div className="rd-tele-row">
                    <span>Exchange Rate</span>
                    <span className="tele-val">1 ETH = 3,248.98 USDT</span>
                  </div>
                  <div className="rd-tele-row">
                    <span>Price Impact</span>
                    <span className="tele-val green">&lt; 0.01%</span>
                  </div>
                  <div className="rd-tele-row">
                    <span>Network Fee</span>
                    <span className="tele-val">~$0.42 (12 Gwei)</span>
                  </div>
                  <div className="rd-tele-row">
                    <span>Route</span>
                    <span className="tele-val route-pill">Uniswap v3 AMM Pool</span>
                  </div>
                </div>

                {/* Action Swap Button */}
                <button className="rd-swap-action-btn">
                  <span>Swap Tokens</span>
                  <span className="swap-bolt">⚡</span>
                </button>

                {/* Execution Telemetry Footer */}
                <div className="rd-footer-meta">
                  <span className="live-dot"></span>
                  <span>Automated Market Maker • 0.01ms Execution</span>
                </div>

              </div>
            </div>
          </div>

          {/* Column 3: Right Stats & Impact */}
          <div className="bc-dex-col-right">
            
            {/* Stat Item 1 */}
            <div className="dex-stat-item">
              <div className="dex-stat-num-row">
                <span className="dex-stat-num">43%</span>
                <span className="dex-stat-arrow">↑</span>
              </div>
              <span className="dex-stat-label">Novice traders</span>
            </div>

            <div className="dex-stat-divider"></div>

            {/* Stat Item 2 */}
            <div className="dex-stat-item">
              <div className="dex-stat-num-row">
                <span className="dex-stat-num">67%</span>
                <span className="dex-stat-arrow">↑</span>
              </div>
              <span className="dex-stat-label">Advanced users</span>
            </div>

            {/* Bottom Quote / Takeaway */}
            <p className="dex-right-quote">
              Investing in scalable architecture and automated routing dramatically elevates your decentralized exchange volume and user retention.
            </p>
          </div>

        </div>

      </div>

      <style>{`
        .bc-dex-section {
          padding: 30px 0 30px;
          background: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, sans-serif;
        }

        .bc-dex-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #2563eb;
          background: rgba(37, 99, 235, 0.08);
          padding: 5px 14px;
          border-radius: 100px;
          margin-bottom: 16px;
        }

        .bc-dex-section-heading {
          font-size: 34px;
          font-weight: 800;
          color: #091326;
          line-height: 1.25;
          letter-spacing: -0.8px;
          margin: 0 0 16px 0;
        }

        /* 3-Column Grid */
        .bc-dex-3col-grid {
          display: grid;
          grid-template-columns: 1.05fr 1.18fr 0.9fr;
          gap: 48px;
          align-items: center;
        }

        /* Left Column */
        .bc-dex-col-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .bc-dex-lead-text {
          font-size: 17px;
          font-weight: 700;
          color: #091326;
          line-height: 1.5;
          margin: 0 0 16px;
        }
        .bc-dex-sub-text {
          font-size: 14.5px;
          color: #64748b;
          line-height: 1.65;
          margin: 0 0 22px;
        }

        .bc-dex-caps-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 28px;
        }
        .cap-pill {
          font-size: 11.5px;
          font-weight: 700;
          color: #1e3a8a;
          background: #eff6ff;
          border: 1px solid #dbeafe;
          padding: 4px 10px;
          border-radius: 100px;
        }

        /* Pill CTA Button (Midnight Dark Blue) */
        .bc-dex-cta-pill {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, #091326 0%, #0f224a 100%);
          color: #ffffff;
          border: none;
          padding: 7px 24px 7px 8px;
          border-radius: 100px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          transition: all 0.25s ease;
          box-shadow: 0 6px 18px rgba(9, 19, 38, 0.35);
        }
        .bc-dex-cta-pill:hover {
          transform: translateY(-2px);
          background: linear-gradient(135deg, #050b17 0%, #0b1a38 100%);
          box-shadow: 0 10px 25px rgba(9, 19, 38, 0.45);
        }
        .dex-cta-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #ffffff;
          color: #091326;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 800;
          transition: all 0.2s;
        }

        /* Center Column: Terminal Mockup Frame */
        .bc-dex-col-center {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .dex-terminal-wrapper {
          position: relative;
          width: 100%;
          max-width: 380px;
        }
        .dex-terminal-glow {
          position: absolute;
          inset: -15px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, rgba(59, 130, 246, 0.04) 50%, transparent 75%);
          filter: blur(25px);
          border-radius: 40px;
          pointer-events: none;
        }
        
        /* White Theme DEX Card UI */
        .white-theme-dex {
          position: relative;
          background: #ffffff;
          border: none;
          border-radius: 22px;
          padding: 24px 22px;
          color: #0f172a;
          box-shadow: 
            0 20px 45px -10px rgba(15, 23, 42, 0.08),
            0 4px 16px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        /* DEX Top Navigation */
        .rd-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4px;
        }
        .rd-tabs {
          display: flex;
          gap: 4px;
          background: #f1f5f9;
          padding: 3px;
          border-radius: 10px;
        }
        .rd-tab {
          background: transparent;
          border: none;
          color: #64748b;
          font-size: 12px;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 7px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .rd-tab.active {
          background: #ffffff;
          color: #0f172a;
          font-weight: 700;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
        }
        .rd-settings-btn {
          font-size: 11px;
          color: #64748b;
          background: #f1f5f9;
          padding: 4px 8px;
          border-radius: 8px;
          font-weight: 600;
        }

        /* Input / Output Token Boxes */
        .rd-token-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 12px 14px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .rd-tb-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 11px;
        }
        .rd-lbl { color: #64748b; font-weight: 600; }
        .rd-bal { color: #64748b; font-size: 10.5px; }
        .rd-bal strong { color: #0f172a; }
        .max-tag {
          color: #2563eb;
          font-weight: 700;
          cursor: pointer;
          margin-left: 2px;
          background: #eff6ff;
          padding: 1px 4px;
          border-radius: 4px;
        }

        .rd-tb-input-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 8px;
        }
        .rd-input {
          background: transparent;
          border: none;
          color: #0f172a;
          font-size: 22px;
          font-weight: 800;
          width: 140px;
          outline: none;
          font-family: inherit;
        }
        .rd-input.text-blue {
          color: #2563eb;
        }

        .rd-token-select {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          padding: 5px 10px;
          border-radius: 100px;
          cursor: pointer;
          box-shadow: 0 1px 2px rgba(0,0,0,0.03);
        }
        .coin-ic {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 800;
        }
        .coin-ic.eth { background: #627eea; color: #fff; }
        .coin-ic.usdt { background: #26a17b; color: #fff; }
        .token-symbol { font-size: 13px; font-weight: 700; color: #0f172a; }
        .arrow-down { font-size: 10px; color: #64748b; }

        .rd-tb-sub {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 10.5px;
          color: #64748b;
        }
        .est-pill {
          background: #eff6ff;
          color: #1e3a8a;
          font-size: 9.5px;
          font-weight: 700;
          padding: 1px 6px;
          border-radius: 4px;
        }

        /* Floating Flip Swap Icon */
        .rd-flip-btn-wrap {
          display: flex;
          justify-content: center;
          margin: -14px 0;
          position: relative;
          z-index: 2;
        }
        .rd-flip-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #ffffff;
          border: 2px solid #f1f5f9;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 800;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
          cursor: pointer;
          transition: transform 0.2s;
        }
        .rd-flip-btn:hover {
          transform: rotate(180deg);
        }

        /* On-Chain Route & Gas Telemetry */
        .rd-telemetry-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 10px 12px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          font-size: 10.5px;
        }
        .rd-tele-row {
          display: flex;
          justify-content: space-between;
          color: #64748b;
        }
        .tele-val { color: #0f172a; font-weight: 600; }
        .tele-val.green { color: #2563eb; font-weight: 700; }
        .route-pill {
          background: #eff6ff;
          color: #1e3a8a;
          padding: 1px 6px;
          border-radius: 4px;
          font-size: 9.5px;
          font-weight: 600;
        }

        /* Action Swap Button */
        .rd-swap-action-btn {
          width: 100%;
          background: linear-gradient(135deg, #091326 0%, #0f224a 100%);
          color: #ffffff;
          border: none;
          border-radius: 14px;
          padding: 13px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 6px 20px rgba(9, 19, 38, 0.3);
          transition: all 0.2s;
          margin-top: 2px;
        }
        .rd-swap-action-btn:hover {
          transform: translateY(-1px);
          background: linear-gradient(135deg, #050b17 0%, #0b1a38 100%);
          box-shadow: 0 8px 24px rgba(9, 19, 38, 0.4);
        }

        /* Footer Telemetry */
        .rd-footer-meta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 10px;
          color: #64748b;
          margin-top: 2px;
        }
        .live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2563eb;
          box-shadow: 0 0 6px #2563eb;
        }

        /* Right Column */
        .bc-dex-col-right {
          display: flex;
          flex-direction: column;
          padding-left: 20px;
        }
        .dex-stat-item {
          margin-bottom: 24px;
        }
        .dex-stat-num-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 4px;
        }
        .dex-stat-num {
          font-size: 56px;
          font-weight: 800;
          color: #091326;
          letter-spacing: -2px;
          line-height: 1;
        }
        .dex-stat-arrow {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #eff6ff;
          color: #091326;
          border: 1px solid #bfdbfe;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 800;
        }
        .dex-stat-label {
          font-size: 15px;
          color: #64748b;
          font-weight: 500;
        }
        .dex-stat-divider {
          width: 100%;
          height: 1px;
          background: #e2e8f0;
          margin: 0 0 28px;
        }
        .dex-right-quote {
          font-size: 14px;
          color: #091326;
          line-height: 1.6;
          margin: 0;
          opacity: 0.85;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .bc-dex-3col-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .bc-dex-col-right {
            padding-left: 0;
          }
        }

        @media (max-width: 640px) {
          .bc-dex-section {
            padding: 50px 0 70px;
          }
          .bc-dex-main-title {
            font-size: 32px;
          }
          .dex-stat-num {
            font-size: 42px;
          }
        }
      `}</style>
    </section>
  );
}
