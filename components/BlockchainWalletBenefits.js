"use client";
import React from 'react';

export default function BlockchainWalletBenefits() {
  const benefits = [
    { icon: "🎧", title: "Support", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." },
    { icon: "📈", title: "Sales", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." },
    { icon: "🚀", title: "Onboarding", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." },
    { icon: "📦", title: "Product", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." },
    { icon: "⭐", title: "Quality", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." },
    { icon: "🎯", title: "Result", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." }
  ];

  return (
    <section className="bc-wallet-benefits">
      <div className="new-bc-container">
        <div className="bc-wb-header">
          <h2 className="bc-section-title text-center">Benefits Of The New<br/>Crypto Wallet</h2>
          <p className="bc-section-desc text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
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
