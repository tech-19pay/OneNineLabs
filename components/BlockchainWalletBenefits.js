"use client";
import React from 'react';
import Link from 'next/link';

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
        <div className="bc-wb-layout">
          <div className="bc-wb-intro">
            <span className="bc-eyebrow">Wallet Engineering</span>
            <h2 className="bc-section-title">Wallet Development,<br/>Done Right</h2>
            <p className="bc-section-desc">
              We design and build custodial, non-custodial and MPC wallets for exchanges, fintechs and Web3 products. Every wallet we ship delivers these six fundamentals.
            </p>
            <div className="bc-wb-modes">
              <span>Custodial</span>
              <span>Non-custodial</span>
              <span>MPC</span>
              <span>Multi-sig</span>
            </div>
            <Link href="/contact" className="bc-wb-link">Start a wallet project <span>→</span></Link>
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
      </div>

      <style>{`
        .bc-wallet-benefits {
          padding: 110px 0;
          background: #f9fafb;
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
        .bc-wb-layout {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: 64px;
          align-items: start;
        }
        .bc-wb-intro {
          position: sticky;
          top: 110px;
        }
        .bc-wb-intro .bc-section-desc {
          margin-bottom: 24px;
        }
        .bc-wb-modes {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 28px;
        }
        .bc-wb-modes span {
          font-size: 12px;
          font-weight: 700;
          color: #0f172a;
          background: #fff;
          border: 1px solid #e5e7eb;
          padding: 7px 14px;
          border-radius: 100px;
        }
        .bc-wb-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          font-weight: 700;
          color: #2563eb;
          text-decoration: none;
          padding: 14px 26px;
          border-radius: 100px;
          background: rgba(37, 99, 235, 0.08);
          transition: all 0.2s;
        }
        .bc-wb-link:hover {
          background: #2563eb;
          color: #fff;
        }
        .bc-wb-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .bc-wb-card {
          background: #fff;
          border: 1px solid #eef0f3;
          border-radius: 18px;
          padding: 26px;
          transition: all 0.3s ease;
        }
        .bc-wb-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(15, 23, 42, 0.07);
          border-color: #dbeafe;
        }
        .bc-wb-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          border: 1px solid #bfdbfe;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          margin-bottom: 16px;
        }
        .bc-wb-title {
          font-size: 16px;
          font-weight: 700;
          color: #111;
          margin-bottom: 8px;
        }
        .bc-wb-desc {
          font-size: 13px;
          color: #666;
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .bc-wb-layout { grid-template-columns: 1fr; gap: 40px; }
          .bc-wb-intro { position: static; }
        }
        @media (max-width: 640px) {
          .bc-wb-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
