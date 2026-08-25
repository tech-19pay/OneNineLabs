"use client";
import React from 'react';
import Link from 'next/link';

export default function BlockchainTrustedPlatform() {
  return (
    <section className="bc-bento-section">
      <div className="new-bc-container">
        {/* Bento Grid */}
        <div className="bc-bento-grid">
          
          {/* Top Left Card (2 Columns) */}
          <div className="bento-card col-span-2 row-top-left">
            <div className="bento-content-left">
              <h2 className="bento-main-heading">
                Everything You Need. <span className="bc-bento-highlight">Nothing You Don&apos;t.</span>
              </h2>
              <p>Policy-driven withdrawal flows, multi-sig approvals and real-time balances across 20+ chains — the custody and payout infrastructure exchanges and fintechs run on.</p>
              <Link href="/contact" className="bento-btn-black">Get Started ↗</Link>
            </div>
            <div className="bento-mockup-right pad-mockup">
              {/* Withdraw UI */}
              <div className="mock-withdraw-ui">
                <div className="mw-header">
                  <h4>Withdraw</h4>
                  <span>Policy-checked transfers with multi-sig approval</span>
                </div>
                <div className="mw-steps">
                  <div className="mw-step active"><span className="ic">↓</span><small>Withdraw</small></div>
                  <div className="mw-line"></div>
                  <div className="mw-step"><span className="ic">@</span><small>Input Amount</small></div>
                  <div className="mw-line"></div>
                  <div className="mw-step"><span className="ic">🏛</span><small>Select Destination</small></div>
                  <div className="mw-line"></div>
                  <div className="mw-step"><span className="ic">👁</span><small>Review</small></div>
                </div>
                <div className="mw-assets">
                  <div className="mw-asset-row selected">
                    <div className="mw-ast-l"><span className="coin-ic blue"></span> Cash (USD)</div>
                    <div className="mw-ast-r"><strong>$310.40</strong></div>
                  </div>
                  <div className="mw-asset-row">
                    <div className="mw-ast-l"><span className="coin-ic orange"></span> Bitcoin (BTC)</div>
                    <div className="mw-ast-r"><strong>0.245 BTC</strong></div>
                  </div>
                  <div className="mw-asset-row">
                    <div className="mw-ast-l"><span className="coin-ic gray"></span> Ethereum (ETH)</div>
                    <div className="mw-ast-r"><strong>1.530 ETH</strong></div>
                  </div>
                </div>
                <div className="mw-footer">
                  <span className="info-ic">i</span> Withdrawal limits, allowlists and review steps — all configurable.
                </div>
                <button className="mw-btn-black">Continue</button>
              </div>
            </div>
          </div>

          {/* Top Right Card (1 Column) */}
          <div className="bento-card col-span-1 row-top-right">
            <div className="bento-content-top">
              <h3>DeFi Staking & Savings Flows</h3>
              <p>Staking, savings and yield products with frictionless amount controls, lock periods and live APY previews — engineered on-chain for your users.</p>
            </div>
            <div className="bento-mockup-bottom">
              {/* Slider UI */}
              <div className="mock-slider-ui">
                <div className="ms-top">
                  <span className="ms-lbl">Amount</span>
                  <span className="ms-val">$310.40</span>
                </div>
                <div className="ms-input">25<span className="cursor">|</span></div>
                <div className="ms-slider-track">
                  <div className="ms-slider-fill"></div>
                  <div className="ms-slider-thumb"></div>
                </div>
                <div className="ms-marks">
                  <span className="active">25%</span>
                  <span>50%</span>
                  <span>75%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Left Card (1 Column) */}
          <div className="bento-card col-span-1 row-bottom-left">
            <div className="bento-mockup-top">
              {/* Spot/Balance UI */}
              <div className="mock-spot-ui">
                <div className="mspot-icon-top">
                   <div className="mspot-ic-inner">🛡️</div>
                </div>
                <div className="mspot-balance">
                  <span className="mspot-token-ic">⬡</span>
                  <strong>2447.73 ACT</strong>
                </div>
                <div className="mspot-trading">
                  <div className="ms-tr-title"><span className="chart-ic">📈</span> Spot Trading</div>
                  <p>Trade crypto easily on the Spot Market.</p>
                  <button className="ms-tr-btn">View Spot Wallet</button>
                </div>
              </div>
            </div>
            <div className="bento-content-bottom">
              <h3>Spot Trading Modules</h3>
              <p>Production-ready trading UIs wired to matching engines and live order books — pair switching, price feeds and wallet views included.</p>
            </div>
          </div>

          {/* Bottom Right Card (2 Columns) */}
          <div className="bento-card col-span-2 row-bottom-right">
            <div className="bento-content-left">
              <h3>Fiat On-Ramps & Swap Infrastructure</h3>
              <p>Fiat-to-crypto purchases and in-app swaps with transparent fee engines — Ramp, card processors and DEX aggregators integrated. Multi-sig and cold-wallet security come standard.</p>
              <Link href="/contact" className="bento-btn-black mt-auto">Get Started ↗</Link>
            </div>
            <div className="bento-mockup-right transparent">
              {/* Swap/Fees UI */}
              <div className="mock-swap-ui">
                <div className="mswap-top">
                  <button className="mswap-selector"><span className="m-logo">⬡</span> ACT <span className="m-chev">v</span></button>
                  <div className="mswap-amt">$100</div>
                  <div className="mswap-rate">You get ≈ 312.40 ACT</div>
                  
                  <div className="ms-slider-track mt">
                    <div className="ms-slider-fill w-30"></div>
                    <div className="ms-slider-thumb t-30"></div>
                  </div>
                  <div className="ms-marks">
                    <span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                  </div>
                </div>
                <div className="mswap-bottom">
                  <div className="mswap-b-header">
                    <span><strong>$100 USD</strong> is all you pay, fees included</span>
                    <span className="chev">^</span>
                  </div>
                  <div className="mswap-fee-row">
                    <span>Ramp Network fee</span>
                    <strong>$1.85</strong>
                  </div>
                  <div className="mswap-fee-row">
                    <span>Network fee</span>
                    <strong>$0.42</strong>
                  </div>
                  <div className="mswap-fee-row total">
                    <span>Total fees</span>
                    <strong>$2.27</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .bc-bento-section {
          padding: 20px 0 70px;
          background: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, sans-serif;
        }

        .bento-main-heading {
          font-size: 32px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.25;
          letter-spacing: -0.8px;
          margin: 0 0 16px 0;
        }

        .bc-bento-highlight {
          color: #1e3a8a;
          background: linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .bc-bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        
        .bento-card {
          background: #f4f5f7;
          border-radius: 20px;
          display: flex;
          overflow: hidden;
        }
        
        .col-span-2 {
          grid-column: span 2;
        }
        .col-span-1 {
          grid-column: span 1;
        }

        .bento-content-left {
          flex: 1;
          padding: 40px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }
        .bento-content-left h3, .bento-content-top h3, .bento-content-bottom h3 {
          font-size: 24px;
          font-weight: 600;
          color: #111;
          margin: 0 0 16px 0;
          letter-spacing: -0.5px;
        }
        .bento-content-left p, .bento-content-top p, .bento-content-bottom p {
          font-size: 15px;
          color: #666;
          line-height: 1.6;
          margin: 0 0 32px 0;
        }
        .bento-btn-black {
          background: #0f172a;
          color: #fff;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
          text-decoration: none;
          display: inline-block;
        }
        .bento-btn-black:hover {
          background: #000;
        }
        .mt-auto {
          margin-top: auto;
        }

        .bento-mockup-right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .pad-mockup {
          background: #fff;
          margin: 20px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          border: 1px solid #eee;
        }
        .transparent {
          background: transparent;
        }

        .bento-content-top {
          padding: 40px 40px 20px 40px;
        }
        .bento-mockup-bottom {
          padding: 0 40px 40px 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: auto;
        }
        
        .bento-mockup-top {
          padding: 40px 40px 20px 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bento-content-bottom {
          padding: 0 40px 40px 40px;
          margin-top: auto;
        }

        .row-top-left {
          flex-direction: row;
        }
        .row-top-right {
          flex-direction: column;
        }
        .row-bottom-left {
          flex-direction: column;
        }
        .row-bottom-right {
          flex-direction: row;
        }

        /* Withdraw UI Mockup */
        .mock-withdraw-ui {
          width: 100%;
          max-width: 380px;
          padding: 24px;
          background: #fff;
          border-radius: 16px;
        }
        .mw-header {
          text-align: center;
          margin-bottom: 24px;
        }
        .mw-header h4 {
          font-size: 16px;
          font-weight: 600;
          color: #111;
          margin: 0 0 4px 0;
        }
        .mw-header span {
          font-size: 12px;
          color: #888;
        }
        .mw-steps {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }
        .mw-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          opacity: 0.5;
        }
        .mw-step.active {
          opacity: 1;
        }
        .mw-step .ic {
          width: 24px;
          height: 24px;
          background: #f1f5f9;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }
        .mw-step.active .ic {
          background: #0f172a;
          color: #fff;
        }
        .mw-step small {
          font-size: 10px;
          font-weight: 500;
        }
        .mw-line {
          flex: 1;
          height: 1px;
          background: #e2e8f0;
          margin: 0 8px;
          margin-top: -16px;
        }
        
        .mw-assets {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }
        .mw-asset-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #f1f5f9;
        }
        .mw-asset-row.selected {
          background: #f8fafc;
          border-color: #e2e8f0;
        }
        .mw-ast-l {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
          color: #333;
        }
        .coin-ic {
          width: 16px;
          height: 16px;
          border-radius: 50%;
        }
        .coin-ic.blue { background: #3b82f6; }
        .coin-ic.orange { background: #f59e0b; }
        .coin-ic.gray { background: #64748b; }
        .mw-ast-r strong {
          font-size: 13px;
          font-weight: 600;
          color: #111;
        }
        
        .mw-footer {
          font-size: 11px;
          color: #666;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 20px;
        }
        .info-ic {
          width: 16px;
          height: 16px;
          background: #e2e8f0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: bold;
        }
        .mw-btn-black {
          width: 100%;
          background: #0f172a;
          color: #fff;
          border: none;
          padding: 12px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
        }

        /* Slider Mockup UI */
        .mock-slider-ui {
          width: 100%;
          background: #fff;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          border: 1px solid #eee;
        }
        .ms-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .ms-lbl { font-size: 12px; color: #666; }
        .ms-val { font-size: 13px; font-weight: 600; color: #111; }
        
        .ms-input {
          font-size: 28px;
          font-weight: 500;
          color: #111;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
        }
        .cursor {
          color: #3b82f6;
          font-weight: 300;
          animation: blink 1s infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }
        
        .ms-slider-track {
          height: 6px;
          background: #f1f5f9;
          border-radius: 4px;
          position: relative;
          margin-bottom: 16px;
        }
        .ms-slider-fill {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 25%;
          background: linear-gradient(90deg, #fbbf24 0%, #10b981 100%);
          border-radius: 4px;
        }
        .ms-slider-thumb {
          position: absolute;
          left: 25%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 14px;
          height: 14px;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          border: 2px solid #10b981;
        }
        
        .ms-marks {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: #94a3b8;
        }
        .ms-marks .active {
          color: #111;
          font-weight: 500;
          background: #f1f5f9;
          padding: 2px 6px;
          border-radius: 4px;
        }

        /* Spot Mockup UI */
        .mock-spot-ui {
          width: 100%;
          background: #fff;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          border: 1px solid #eee;
          position: relative;
        }
        .mspot-icon-top {
          position: absolute;
          top: -16px;
          left: 50%;
          transform: translateX(-50%);
          background: #f4f5f7;
          padding: 8px;
          border-radius: 12px;
        }
        .mspot-ic-inner {
          width: 24px;
          height: 24px;
          background: #e2e8f0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }
        .mspot-balance {
          background: #f8fafc;
          border-radius: 8px;
          padding: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 16px;
          margin-bottom: 24px;
          border: 1px solid #f1f5f9;
        }
        .mspot-token-ic {
          width: 24px;
          height: 24px;
          background: #e0e7ff;
          color: #6366f1;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }
        .mspot-balance strong {
          font-size: 18px;
          font-weight: 700;
          color: #111;
        }
        
        .ms-tr-title {
          font-size: 14px;
          font-weight: 600;
          color: #111;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 4px;
        }
        .mspot-trading p {
          font-size: 12px;
          color: #666;
          margin: 0 0 16px 0;
        }
        .ms-tr-btn {
          width: 100%;
          background: #0f172a;
          color: #fff;
          border: none;
          padding: 12px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 500;
        }

        /* Swap Mockup UI */
        .mock-swap-ui {
          width: 100%;
          max-width: 380px;
        }
        .mswap-top {
          background: #fff;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          border: 1px solid #eee;
          text-align: center;
          margin-bottom: 16px;
        }
        .mswap-selector {
          background: #f1f5f9;
          border: none;
          padding: 6px 12px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          color: #111;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 24px;
        }
        .m-logo { color: #8b5cf6; }
        .m-chev { color: #888; font-size: 10px; }
        
        .mswap-amt {
          font-size: 32px;
          font-weight: 700;
          color: #111;
          margin-bottom: 4px;
        }
        .mswap-rate {
          font-size: 12px;
          color: #64748b;
          margin-bottom: 24px;
        }
        .w-30 { width: 30%; }
        .t-30 { left: 30%; }
        .mt { margin-bottom: 12px; }

        .mswap-bottom {
          background: #fff;
          border-radius: 16px;
          padding: 20px 24px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          border: 1px solid #eee;
        }
        .mswap-b-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          color: #64748b;
          padding-bottom: 16px;
          border-bottom: 1px solid #f1f5f9;
          margin-bottom: 16px;
        }
        .mswap-b-header strong { color: #111; }
        .chev { font-size: 10px; }
        
        .mswap-fee-row {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #64748b;
          margin-bottom: 12px;
        }
        .mswap-fee-row strong { color: #111; font-weight: 600; }
        .mswap-fee-row.total {
          margin-top: 16px;
          margin-bottom: 0;
          color: #111;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .bc-bento-grid {
            grid-template-columns: 1fr;
          }
          .col-span-2, .col-span-1 {
            grid-column: span 1;
          }
          .row-top-left, .row-bottom-right {
            flex-direction: column;
          }
          .bento-content-left {
            padding: 32px 32px 0 32px;
          }
          .bento-mockup-right {
            padding: 32px;
          }
          .pad-mockup {
            margin: 0;
            margin-top: 24px;
            box-shadow: none;
            border: none;
          }
        }
      `}</style>
    </section>
  );
}
