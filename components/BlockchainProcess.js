"use client";
import React from 'react';

const steps = [
  {
    n: "01",
    title: "Discovery & Scoping",
    desc: "We map your business goals to on-chain mechanics: tokenomics, chain selection, compliance needs and a fixed, itemized proposal."
  },
  {
    n: "02",
    title: "Architecture & Design",
    desc: "Protocol architecture, contract schema, threat model and product UX — signed off before a single line of Solidity is written."
  },
  {
    n: "03",
    title: "Development Sprints",
    desc: "Weekly demo cycles for contracts, backend indexing and frontends, with full test coverage and a staging testnet from day one."
  },
  {
    n: "04",
    title: "Security Audit",
    desc: "Internal review plus independent third-party audit. Every finding is fixed, re-verified and documented in a public-ready report."
  },
  {
    n: "05",
    title: "Testnet & QA",
    desc: "Full end-to-end dry runs on testnets: mainnet forks, load testing, incident drills and multisig governance rehearsals."
  },
  {
    n: "06",
    title: "Launch & Support",
    desc: "Coordinated mainnet deployment, monitoring dashboards and an SLA-backed support team for upgrades and iteration."
  }
];

export default function BlockchainProcess() {
  return (
    <section className="bc-process-section">
      <div className="new-bc-container">
        <div className="bc-process-header">
          <h2 className="bc-section-title text-center">How We Ship<br/>Blockchain Products</h2>
          <p className="bc-process-sub text-center">
            A battle-tested delivery process that takes you from idea to audited mainnet — with fixed milestones and zero surprises.
          </p>
        </div>

        <div className="bc-process-grid">
          {steps.map((s) => (
            <div key={s.n} className="bc-process-card">
              <div className="bc-process-n">{s.n}</div>
              <h3 className="bc-process-title">{s.title}</h3>
              <p className="bc-process-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bc-process-section {
          padding: 100px 0;
          background: #fff;
        }
        .bc-process-header {
          max-width: 640px;
          margin: 0 auto 60px;
        }
        .bc-process-sub {
          font-size: 16px;
          color: #666;
          line-height: 1.6;
          margin-top: 20px;
        }
        .bc-process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .bc-process-card {
          background: #f9fafb;
          border: 1px solid #f3f4f6;
          border-radius: 20px;
          padding: 32px;
          position: relative;
          transition: all 0.3s ease;
        }
        .bc-process-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.06);
          background: #fff;
        }
        .bc-process-n {
          font-size: 14px;
          font-weight: 800;
          color: #2563eb;
          background: rgba(37, 99, 235, 0.08);
          border-radius: 8px;
          padding: 6px 10px;
          display: inline-block;
          margin-bottom: 18px;
        }
        .bc-process-title {
          font-size: 17px;
          font-weight: 700;
          color: #111;
          margin-bottom: 10px;
        }
        .bc-process-desc {
          font-size: 13.5px;
          color: #666;
          line-height: 1.65;
        }
        @media (max-width: 1024px) {
          .bc-process-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .bc-process-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
