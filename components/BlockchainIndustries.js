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
          <h2 className="bc-section-title text-center">Industries We Build For</h2>
          <p className="bc-ind-sub text-center">
            Blockchain isn&apos;t one industry — it&apos;s infrastructure. We&apos;ve applied it across these sectors and know the pitfalls unique to each.
          </p>
        </div>

        <div className="bc-ind-grid">
          {industries.map((ind) => (
            <div key={ind.name} className="bc-ind-card">
              <span className="bc-ind-icon">{ind.icon}</span>
              <div>
                <h4>{ind.name}</h4>
                <p>{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bc-industries-section {
          padding: 100px 0;
          background: #f9fafb;
        }
        .bc-ind-header {
          max-width: 640px;
          margin: 0 auto 56px;
        }
        .bc-ind-sub {
          font-size: 16px;
          color: #666;
          line-height: 1.6;
          margin-top: 20px;
        }
        .bc-ind-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .bc-ind-card {
          background: #fff;
          border: 1px solid #f3f4f6;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          gap: 14px;
          align-items: flex-start;
          transition: all 0.25s ease;
        }
        .bc-ind-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.06);
        }
        .bc-ind-icon {
          font-size: 24px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .bc-ind-card h4 {
          font-size: 15px;
          font-weight: 700;
          color: #111;
          margin-bottom: 6px;
        }
        .bc-ind-card p {
          font-size: 12.5px;
          color: #666;
          line-height: 1.55;
        }
        @media (max-width: 1024px) {
          .bc-ind-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .bc-ind-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
