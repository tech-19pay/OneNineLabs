"use client";
import React from 'react';
import Link from 'next/link';

export default function BlockchainHeroNew() {
  return (
    <section className="bc-hero-new">
      <div className="new-bc-container">
        <div className="bc-hero-content">
          <div className="bc-hero-left">
            <h1 className="bc-hero-title">
              <span style={{ whiteSpace: 'nowrap' }}>Build the Future of</span><br/><span className="text-gradient">Web3 & Blockchain</span>
            </h1>
            <p className="bc-hero-subtitle">
              End-to-end blockchain development services. We build secure smart contracts, scalable decentralized applications, and high-performance crypto exchanges.
            </p>
            <div className="bc-hero-features">
              <div className="hero-feature-item">
                <span className="hf-icon">✓</span>
                <span className="hf-text">Advanced audits, secure smart contracts, and multi-sig integration for absolute safety.</span>
              </div>
              <div className="hero-feature-item">
                <span className="hf-icon">✓</span>
                <span className="hf-text">Optimized network throughput and low latency architecture for instant settlements.</span>
              </div>
              <div className="hero-feature-item">
                <span className="hf-icon">✓</span>
                <span className="hf-text">Plug-and-play infrastructure and robust APIs for wallets, exchanges, and DeFi platforms.</span>
              </div>
            </div>

            <div className="bc-hero-actions">
              <Link href="#get-started" className="bc-hero-primary-btn">
                Get Started <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>
          
          <div className="bc-hero-right">
            <div className="bc-hero-mockup-scene dual-phones">
              <div className="bc-hero-glow"></div>
              {/* Floating stars */}
              <div className="bc-float-star s1">✦</div>
              <div className="bc-float-star s2">✦</div>
              <div className="bc-float-star s3">✦</div>
              <div className="bc-float-star s4">✦</div>
              
              {/* Circular Rings Background */}
              <div className="bc-rings-bg">
                <div className="bc-ring r1"></div>
                <div className="bc-ring r2"></div>
                <div className="bc-ring r3"></div>
              </div>
              
              {/* Left Phone (Crypto Wallet) */}
              <div className="bc-phone-frame dark-phone phone-left">
                <div className="bc-phone-notch"></div>
                <div className="bc-phone-screen dark">
                  <div className="dp-header">
                    <div className="dp-greeting">Hi Arima Kou</div>
                    <div className="dp-sub">Manage your money here 💰</div>
                    <div className="dp-scan-icon">⎚</div>
                  </div>
                  
                  <div className="dp-card blue-card">
                    <div className="dp-card-top">
                      <span>Crypto Exchange</span>
                      <span className="dp-card-icons">📈</span>
                    </div>
                    <div className="dp-card-bal">$3,720.60</div>
                    <div className="dp-card-bot">
                      <span>Monthly profit<br/>$12.00</span>
                      <span className="dp-badge">▲ 12%</span>
                    </div>
                  </div>
                  
                  <div className="dp-actions">
                    <button>↗ Send</button>
                    <button>↙ Buy</button>
                  </div>
                  
                  <div className="dp-activity">
                    <div className="dp-act-header">
                      <span>Your Activity</span>
                      <span className="dp-act-filter">Last 7 days ⌄</span>
                    </div>
                    <div className="dp-act-list">
                      <div className="dp-act-item">
                        <div className="dp-act-icon blue">SN</div>
                        <div className="dp-act-info">
                          <div className="dp-act-name">Sarouti</div>
                          <div className="dp-act-date">23 Oct • 08:30 AM</div>
                        </div>
                        <div className="dp-act-amt negative">-$19.0<br/><span>Send</span></div>
                      </div>
                      <div className="dp-act-item">
                        <div className="dp-act-icon green">MG</div>
                        <div className="dp-act-info">
                          <div className="dp-act-name">Megu</div>
                          <div className="dp-act-date">23 Oct • 08:00 AM</div>
                        </div>
                        <div className="dp-act-amt negative">-$12.0<br/><span>Send</span></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="dp-navbar">
                    <span className="active">⌂</span>
                    <span>💳</span>
                    <span>◒</span>
                    <span>👤</span>
                  </div>
                </div>
              </div>
              
              {/* Right Phone (Web3 Wallet) */}
              <div className="bc-phone-frame dark-phone phone-right">
                <div className="bc-phone-notch"></div>
                <div className="bc-phone-screen dark">
                  <div className="dp-stacked-cards">
                    <div className="dp-card purple-card stacked-back">
                      <div className="dp-card-top">
                        <span>Web3 Wallet</span>
                        <span className="dp-card-icons">💳</span>
                      </div>
                      <div className="dp-card-bal">$1,240.60</div>
                      <div className="dp-card-bot">
                        <span>Monthly profit<br/>$10.00</span>
                        <span className="dp-badge">▲ 10%</span>
                      </div>
                    </div>
                    <div className="dp-card blue-card stacked-front">
                      <div className="dp-card-top">
                        <span>Web3 Wallet</span>
                        <span className="dp-card-icons">💳</span>
                      </div>
                      <div className="dp-card-bal">$3,720.60</div>
                      <div className="dp-card-bot">
                        <span>Monthly profit<br/>$12.00</span>
                        <span className="dp-badge">▲ 12%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="dp-dots">
                    <span className="dot active"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                  
                  <div className="dp-web3-info">
                    <h3>Web3 Wallet crypto</h3>
                    <div className="dp-mini-swap">
                      <div className="dp-mini-swap-row">
                        <span className="label">Swap</span> <span className="val">0.5 BTC → USDT</span>
                      </div>
                      <div className="dp-mini-swap-row">
                        <span className="label">Rate</span> <span className="val">1 BTC = 47,743 USDT</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="dp-bottom-action">
                    <button className="dp-round-btn">→</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bc-hero-new {
          padding: 20px 0 10px;
          background: #fdfdfd;
          position: relative;
          overflow: hidden;
        }
        .bc-hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }
        .bc-hero-left {
          max-width: 600px;
          align-self: flex-start;
          margin-top: 40px;
        }

        .bc-hero-title {
          font-size: 52px;
          font-weight: 800;
          line-height: 1.1;
          color: #111;
          margin-bottom: 24px;
        }
        .text-gradient {
          background: linear-gradient(90deg, #1e3a8a 0%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .bc-hero-subtitle {
          font-size: 16px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 24px;
          max-width: 440px;
        }
        .bc-hero-actions {
          margin-top: 40px;
        }
        .bc-hero-primary-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(90deg, #1e3a8a 0%, #2563eb 100%);
          color: #fff;
          font-weight: 600;
          padding: 16px 32px;
          border-radius: 100px;
          text-decoration: none;
          box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);
          transition: transform 0.2s;
        }
        .bc-hero-primary-btn:hover {
          transform: translateY(-2px);
        }
        .bc-hero-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 32px;
        }
        .hero-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .hf-icon {
          color: #2563eb;
          font-weight: 800;
          font-size: 14px;
          margin-top: 2px;
        }
        .hf-text {
          font-size: 15px;
          color: #555;
          line-height: 1.5;
        }

        .bc-hero-right {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .bc-hero-mockup-scene {
          position: relative;
          width: 500px;
          height: 600px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .bc-hero-glow {
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(255,255,255,0) 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 0;
        }
        
        .bc-float-star {
          position: absolute;
          color: #2563eb;
          font-size: 14px;
          opacity: 0.6;
        }
        .s1 { top: 10%; left: 20%; font-size: 18px; }
        .s2 { top: 20%; right: 10%; font-size: 12px; color: #1e3a8a; }
        .s3 { bottom: 10%; left: 30%; font-size: 16px; }
        .s4 { bottom: 20%; right: 20%; font-size: 12px; }

        /* Dual Phone Mockup Scene CSS */
        .bc-hero-mockup-scene.dual-phones {
          width: 550px;
          height: 600px;
          perspective: 1000px;
        }
        
        .bc-rings-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 0;
          pointer-events: none;
        }
        .bc-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(0,0,0,0.1);
          transform: rotateX(60deg);
        }
        .r1 { width: 350px; height: 350px; }
        .r2 { width: 450px; height: 450px; }
        .r3 { width: 550px; height: 550px; }
        
        .dark-phone {
          width: 250px;
          height: 520px;
          background: #fff;
          border: 6px solid #e5e7eb;
          box-shadow: 0 40px 80px rgba(0,0,0,0.1), inset 0 0 0 2px #f3f4f6;
          position: absolute;
          border-radius: 36px;
        }
        .dark-phone .bc-phone-notch {
          background: #1a1a1a;
          width: 100px;
          height: 20px;
        }
        .dark-phone .bc-phone-screen.dark {
          background: #fdfdfd;
          color: #111;
          border-radius: 30px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        
        .phone-left {
          top: 20px;
          left: 20px;
          transform: rotate(-10deg) rotateY(15deg) scale(0.9);
          z-index: 1;
        }
        .phone-right {
          bottom: 20px;
          right: 20px;
          transform: rotate(5deg) rotateY(-10deg) scale(0.95);
          z-index: 2;
        }
        
        /* Dark Phone Inner UI - Converted to Light Theme */
        .dp-header {
          padding: 30px 16px 16px;
          position: relative;
        }
        .dp-greeting { font-size: 14px; font-weight: 700; margin-bottom: 4px; }
        .dp-sub { font-size: 10px; color: #666; }
        .dp-scan-icon { position: absolute; right: 16px; top: 30px; font-size: 16px; color: #666; }
        
        .dp-card {
          margin: 0 16px;
          padding: 16px;
          border-radius: 16px;
          position: relative;
          overflow: hidden;
          color: #fff;
        }
        .dp-card::after {
          content: '';
          position: absolute;
          right: -20px;
          bottom: -20px;
          width: 100px;
          height: 100px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
        }
        .blue-card { background: linear-gradient(135deg, #1e3a8a, #2563eb); }
        .purple-card { background: linear-gradient(135deg, #581c87, #9333ea); }
        
        .dp-card-top { display: flex; justify-content: space-between; font-size: 10px; margin-bottom: 12px; }
        .dp-card-bal { font-size: 24px; font-weight: 700; margin-bottom: 16px; }
        .dp-card-bot { display: flex; justify-content: space-between; align-items: flex-end; font-size: 9px; opacity: 0.9; }
        .dp-badge { background: rgba(0,0,0,0.2); padding: 4px 6px; border-radius: 6px; font-weight: 600; }
        
        .dp-actions {
          display: flex;
          gap: 12px;
          padding: 16px;
        }
        .dp-actions button {
          flex: 1;
          background: #f3f4f6;
          border: 1px solid #e5e7eb;
          color: #111;
          padding: 10px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
        }
        
        .dp-activity {
          flex: 1;
          padding: 0 16px;
        }
        .dp-act-header {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .dp-act-filter { color: #666; font-weight: 400; font-size: 9px; }
        
        .dp-act-list { display: flex; flex-direction: column; gap: 12px; }
        .dp-act-item { display: flex; align-items: center; gap: 10px; }
        .dp-act-icon { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; color: #fff; }
        .dp-act-icon.blue { background: #1d4ed8; }
        .dp-act-icon.green { background: #047857; }
        .dp-act-info { flex: 1; }
        .dp-act-name { font-size: 12px; font-weight: 600; }
        .dp-act-date { font-size: 9px; color: #888; margin-top: 2px; }
        .dp-act-amt { font-size: 11px; font-weight: 600; text-align: right; }
        .dp-act-amt.negative { color: #ef4444; }
        .dp-act-amt span { font-size: 9px; color: #888; font-weight: 400; }
        
        .dp-navbar {
          display: flex;
          justify-content: space-around;
          padding: 16px;
          background: #fff;
          border-top: 1px solid #e5e7eb;
          font-size: 18px;
          color: #9ca3af;
        }
        .dp-navbar .active { color: #3b82f6; }
        
        /* Right Phone Specific UI */
        .dp-stacked-cards {
          padding: 40px 16px 20px;
          position: relative;
          height: 240px;
        }
        .stacked-back {
          position: absolute;
          top: 40px;
          left: 16px;
          right: 32px;
          transform: rotate(-5deg);
          opacity: 0.9;
        }
        .stacked-front {
          position: absolute;
          top: 80px;
          left: 16px;
          right: 16px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .dp-dots {
          display: flex;
          justify-content: center;
          gap: 6px;
          margin-bottom: 24px;
        }
        .dp-dots .dot {
          width: 16px;
          height: 4px;
          background: #e5e7eb;
          border-radius: 4px;
        }
        .dp-dots .active { background: #3b82f6; }
        
        .dp-web3-info {
          text-align: center;
          padding: 0 20px;
          flex: 1;
        }
        .dp-web3-info h3 { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
        .dp-mini-swap {
          background: #f3f4f6;
          border-radius: 12px;
          padding: 10px 12px;
          margin-top: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .dp-mini-swap-row {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
        }
        .dp-mini-swap-row .label { color: #666; }
        .dp-mini-swap-row .val { color: #111; font-weight: 600; }
        
        .dp-bottom-action {
          padding: 24px;
          display: flex;
          justify-content: center;
        }
        .dp-round-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #2563eb;
          color: #fff;
          border: none;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 20px rgba(37, 99, 235, 0.4);
        }
        @media (max-width: 900px) {
          .bc-hero-content { grid-template-columns: 1fr; text-align: center; }
          .bc-hero-left { margin: 0 auto; }
          .bc-hero-trustpilot { justify-content: center; }
          .bc-phone-frame.tilted { transform: rotate(0); }
        }
      `}</style>
    </section>
  );
}
