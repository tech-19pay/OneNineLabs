"use client";
import React from 'react';

const industries = [
  { icon: "💹", name: "DeFi & Finance", desc: "Lending markets, staking, payment rails and stablecoin infrastructure." },
  { icon: "🎮", name: "Gaming & Metaverse", desc: "On-chain game assets, play-and-earn economies and interoperable items." },
  { icon: "🚚", name: "Supply Chain & Logistics", desc: "Immutable provenance, shipment tracking and automated settlement." },
  { icon: "🏠", name: "Real Estate", desc: "Fractional ownership, tokenized deeds and automated rent distribution." },
  { icon: "🏥", name: "Healthcare", desc: "Patient-controlled records, consent trails and research data integrity." },
  { icon: "⚡", name: "Energy & ESG", desc: "Carbon credit registries, energy trading and verifiable ESG reporting." },
  { icon: "🎵", name: "Media & IP", desc: "Creator royalties, rights registries and transparent revenue splits." },
  { icon: "🛍️", name: "E-Commerce & Loyalty", desc: "Token loyalty programs, digital collectibles and on-chain rewards." }
];

export default function BlockchainIndustries() {
  return (
    <section className="bc-industries-section">
      <div className="new-bc-container">
        <div className="bc-ind-header">
          <span className="bc-eyebrow">Use Cases</span>
          <h2 className="bc-section-title">Industries We Build For</h2>
          <p className="bc-ind-sub">
            Blockchain isn&apos;t one industry — it&apos;s infrastructure. We&apos;ve applied it across these sectors and know the pitfalls unique to each.
          </p>
        </div>

        <div className="bc-ind-grid">
          {industries.map((ind) => (
            <div key={ind.name} className="bc-ind-card">
              <span className="bc-ind-icon">{ind.icon}</span>
              <div className="bc-ind-body">
                <h4>{ind.name}</h4>
                <p>{ind.desc}</p>
              </div>
              <span className="bc-ind-arrow">→</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bc-industries-section {
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
        .bc-ind-header {
          max-width: 640px;
          margin: 0 auto 60px;
          text-align: center;
        }
        .bc-ind-sub {
          font-size: 16px;
          color: #666;
          line-height: 1.6;
          margin-top: 20px;
        }
        .bc-ind-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }
        .bc-ind-card {
          background: #fff;
          border: 1px solid #eef0f3;
          border-radius: 18px;
          padding: 24px 26px;
          display: flex;
          align-items: center;
          gap: 18px;
          transition: all 0.25s ease;
        }
        .bc-ind-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 32px rgba(15, 23, 42, 0.07);
          border-color: #dbeafe;
        }
        .bc-ind-icon {
          width: 50px;
          height: 50px;
          flex-shrink: 0;
          border-radius: 14px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          border: 1px solid #bfdbfe;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 23px;
        }
        .bc-ind-body {
          flex: 1;
        }
        .bc-ind-card h4 {
          font-size: 15.5px;
          font-weight: 700;
          color: #111;
          margin-bottom: 4px;
        }
        .bc-ind-card p {
          font-size: 13px;
          color: #666;
          line-height: 1.55;
        }
        .bc-ind-arrow {
          color: #cbd5e1;
          font-size: 18px;
          font-weight: 700;
          transition: all 0.25s ease;
        }
        .bc-ind-card:hover .bc-ind-arrow {
          color: #2563eb;
          transform: translateX(4px);
        }
        @media (max-width: 900px) {
          .bc-ind-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
