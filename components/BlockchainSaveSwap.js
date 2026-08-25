"use client";
import React from 'react';
import Link from 'next/link';

export default function BlockchainSaveSwap() {
  return (
    <section className="bc-save-swap">
      <div className="new-bc-container">
        <div className="bc-ss-content">
          <div className="bc-ss-left">
            <div className="bc-phones-scene">
              <div className="bc-phone-frame single-phone">
                <div className="bc-phone-notch"></div>
                <div className="bc-phone-screen">
                  <div className="bc-swap-header">
                    <span>Swap</span>
                    <span className="bc-swap-settings">⚙</span>
                  </div>
                  <div className="bc-swap-body">
                    <div className="bc-swap-box">
                      <div className="bc-swap-label">You pay</div>
                      <div className="bc-swap-input">
                        <span className="bc-swap-amt">1.50</span>
                        <span className="bc-swap-token"><span className="coin blue">B</span> BTC ⌄</span>
                      </div>
                      <div className="bc-swap-bal">Balance: 2.45 BTC</div>
                    </div>
                    
                    <div className="bc-swap-divider">
                      <div className="bc-swap-arrow">⇅</div>
                    </div>
                    
                    <div className="bc-swap-box">
                      <div className="bc-swap-label">You receive</div>
                      <div className="bc-swap-input">
                        <span className="bc-swap-amt pulse-anim">118,659.75</span>
                        <span className="bc-swap-token"><span className="coin green">T</span> USDT ⌄</span>
                      </div>
                      <div className="bc-swap-bal">Balance: 0.00 USDT</div>
                    </div>
                    
                    <div className="bc-swap-details">
                      <div className="bc-sd-row"><span>Rate</span><span>1 BTC = 79,106.50 USDT</span></div>
                      <div className="bc-sd-row"><span>Network Fee</span><span>$2.50</span></div>
                    </div>
                    
                    <button className="bc-swap-btn">Review Swap</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bc-ss-right">
            <span className="bc-eyebrow">Service Spotlight 01</span>
            <h2 className="bc-section-title">
              DEX Development
            </h2>
            <p className="bc-section-desc">
              We build high-performance Decentralized Exchanges (DEX) tailored to your business needs. From custom AMM algorithms to deep liquidity integration, we deliver secure, scalable, and fully decentralized trading platforms.
            </p>
            <ul className="bc-ss-features">
              <li><span className="check">✓</span> <div><strong>AMM & Orderbook:</strong> Custom Automated Market Maker models and decentralized order books.</div></li>
              <li><span className="check">✓</span> <div><strong>Liquidity Pools:</strong> Advanced staking, yield farming, and LP reward mechanisms.</div></li>
              <li><span className="check">✓</span> <div><strong>Cross-Chain Swaps:</strong> Seamless token bridges and interoperability across major blockchains.</div></li>
            </ul>
          </div>
        </div>
      </div>
      
      <style>{`
        .bc-save-swap {
          padding: 110px 0;
          background: #fdfdfd;
        }
        .bc-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #2563eb;
          background: rgba(37, 99, 235, 0.08);
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 20px;
        }
        .bc-ss-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          align-items: center;
        }
        
        .bc-ss-left {
          display: flex;
          justify-content: center;
        }
        .bc-phones-scene {
          position: relative;
          width: 400px;
          height: 500px;
        }
        .bc-phones-scene::before {
          content: '';
          position: absolute;
          inset: -30px;
          background: radial-gradient(closest-side, rgba(37, 99, 235, 0.14), transparent 72%);
          pointer-events: none;
        }
        
        .bc-phone-frame {
          width: 240px;
          height: 480px;
          background: #fff;
          border-radius: 36px;
          border: 6px solid #e5e7eb;
          box-shadow: 0 24px 48px rgba(0,0,0,0.08);
          position: absolute;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .bc-phone-notch {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 20px;
          background: #e5e7eb;
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
          z-index: 10;
        }
        .bc-phone-screen {
          flex: 1;
          background: #f9fafb;
          display: flex;
          flex-direction: column;
        }
        
        /* Single Phone Swap UI positioning */
        .single-phone {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 280px;
          height: 540px;
        }
        
        /* Swap UI Specifics */
        .bc-swap-header {
          padding: 32px 20px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 700;
          font-size: 16px;
          color: #111;
          background: #fff;
          border-bottom: 1px solid #f3f4f6;
        }
        .bc-swap-settings { color: #888; font-size: 18px; cursor: pointer; }
        
        .bc-swap-body {
          padding: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .bc-swap-box {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 16px;
        }
        .bc-swap-label { font-size: 11px; color: #666; margin-bottom: 8px; font-weight: 600; }
        .bc-swap-input {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        .bc-swap-amt { font-size: 24px; font-weight: 800; color: #111; }
        .bc-swap-token {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #fff;
          padding: 6px 10px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 700;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          color: #111;
        }
        .coin {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8px;
          color: #fff;
        }
        .coin.blue { background: #3b82f6; }
        .coin.green { background: #10b981; }
        .bc-swap-bal { font-size: 10px; color: #888; }
        
        .bc-swap-divider {
          height: 24px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .bc-swap-arrow {
          width: 32px;
          height: 32px;
          background: #2563eb;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: bold;
          position: absolute;
          z-index: 10;
          border: 4px solid #fff;
          cursor: pointer;
          animation: spinArrow 4s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
        }
        
        @keyframes spinArrow {
          0%, 20% { transform: rotate(0deg); }
          40%, 70% { transform: rotate(180deg); }
          90%, 100% { transform: rotate(360deg); }
        }
        
        .pulse-anim {
          animation: pulseAmt 2s infinite;
        }
        @keyframes pulseAmt {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        
        .bc-swap-details {
          margin-top: auto;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 0 8px;
        }
        .bc-sd-row { display: flex; justify-content: space-between; font-size: 11px; color: #666; }
        .bc-sd-row span:last-child { color: #111; font-weight: 600; }
        
        .bc-swap-btn {
          width: 100%;
          background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
          color: #fff;
          padding: 16px;
          border-radius: 100px;
          border: none;
          font-size: 14px;
          font-weight: 700;
          box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3);
          transition: 0.2s;
        }
        .bc-swap-btn:hover { transform: translateY(-2px); }

        /* Right text area */
        .bc-ss-right {
          max-width: 500px;
        }
        .bc-section-title {
          font-size: 42px;
          font-weight: 800;
          line-height: 1.15;
          color: #111;
          margin-bottom: 24px;
        }
        .bc-section-desc {
          font-size: 16px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .bc-ss-features {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }
        .bc-ss-features li {
          background: #fff;
          border: 1px solid #f3f4f6;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
          display: flex;
          align-items: flex-start;
          gap: 16px;
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          transition: all 0.3s ease;
        }
        .bc-ss-features li:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(0,0,0,0.06);
          border-color: #e5e7eb;
        }
        .bc-ss-features .check {
          color: #fff;
          background: #2563eb;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          font-size: 16px;
          flex-shrink: 0;
        }
        .bc-ss-features strong {
          color: #111;
          display: block;
          font-size: 16px;
          margin-bottom: 6px;
        }
        .bc-outline-btn {
          display: inline-block;
          border: 2px solid #111;
          color: #111;
          font-weight: 600;
          padding: 12px 28px;
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .bc-outline-btn:hover {
          background: #111;
          color: #fff;
        }

        @media (max-width: 900px) {
          .bc-ss-content { grid-template-columns: 1fr; text-align: center; }
          .bc-ss-right { margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
