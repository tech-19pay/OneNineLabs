"use client";
import React from 'react';

export default function BlockchainWalletBenefits() {
  const benefits = [
    { icon: "🛡️", title: "Bank-Grade Security", desc: "MPC key management, multi-signature approvals, hardware-wallet pairing and built-in anti-phishing transaction simulation." },
    { icon: "🌐", title: "Multi-Chain by Default", desc: "One clean portfolio across Ethereum, Solana, BNB Chain, Polygon and leading Layer 2s — no manual network switching." },
    { icon: "⚡", title: "Gas-Optimized Transfers", desc: "Accurate gas estimation, transaction batching and smart L2 routing keep every transfer fast and cheap." },
    { icon: "🚀", title: "Frictionless Onboarding", desc: "Passkey logins, social recovery and fiat on-ramps let new users go from signup to first transaction in minutes." },
    { icon: "📊", title: "Portfolio Insights", desc: "Real-time valuation, P&L tracking, staking rewards and exportable tax reports built directly into the wallet." },
    { icon: "✅", title: "Compliance Ready", desc: "Pluggable KYC/AML flows and travel-rule-ready architecture so your wallet scales with regulators, not against them." }
  ];

  return (
    <section className="bc-wallet-benefits">
      <div className="new-bc-container">
        <div className="bc-wb-header">
          <h2 className="bc-section-title text-center">Wallet Development,<br/>Done Right</h2>
          <p className="bc-section-desc text-center">
            We design and build custodial, non-custodial and MPC wallets for exchanges, fintechs and Web3 products. Every wallet we ship delivers these six fundamentals.
          </p>
        </div>
        
        <div className="bc-wb-grid">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bc-wb-card">
              <div className="bc-wb-icon">{benefit.icon}</div>
              <h4 className="bc-wb-title">{benefit.title}</h4>
              <p className="bc-wb-desc">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .bc-wallet-benefits {
          padding: 100px 0;
          background: #fdfdfd;
        }
        .bc-wb-header {
          max-width: 600px;
          margin: 0 auto 60px;
        }
        .text-center {
          text-align: center;
        }
        .bc-wb-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        .bc-wb-card {
          text-align: center;
          padding: 20px;
        }
        .bc-wb-icon {
          font-size: 32px;
          margin-bottom: 16px;
          color: #2563eb;
          display: inline-block;
          padding: 16px;
          background: rgba(37, 99, 235, 0.05);
          border-radius: 20px;
        }
        .bc-wb-title {
          font-size: 18px;
          font-weight: 700;
          color: #111;
          margin-bottom: 12px;
        }
        .bc-wb-desc {
          font-size: 13px;
          color: #666;
          line-height: 1.6;
        }
        
        @media (max-width: 900px) {
          .bc-wb-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .bc-wb-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
