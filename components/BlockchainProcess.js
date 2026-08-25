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
          <span className="bc-eyebrow">Delivery Process</span>
          <h2 className="bc-section-title">How We Ship<br/>Blockchain Products</h2>
          <p className="bc-process-sub">
            A battle-tested delivery process that takes you from idea to audited mainnet — with fixed milestones and zero surprises.
          </p>
        </div>

        <div className="bc-pr-timeline">
          {steps.map((s, i) => (
            <div key={s.n} className={`bc-pr-row ${i % 2 === 0 ? "is-left" : "is-right"}`}>
              <div className="bc-pr-card">
                <span className="bc-pr-step-tag">Step {s.n}</span>
                <h3 className="bc-pr-title">{s.title}</h3>
                <p className="bc-pr-desc">{s.desc}</p>
              </div>
              <div className="bc-pr-node"><span>{s.n}</span></div>
              <div className="bc-pr-empty"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bc-process-section {
          padding: 110px 0;
          background: #fff;
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
        .bc-process-header {
          max-width: 640px;
          margin: 0 auto 80px;
          text-align: center;
        }
        .bc-process-sub {
          font-size: 16px;
          color: #666;
          line-height: 1.6;
          margin-top: 20px;
        }

        /* Timeline */
        .bc-pr-timeline {
          position: relative;
          max-width: 980px;
          margin: 0 auto;
        }
        .bc-pr-timeline::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          transform: translateX(-50%);
          background: linear-gradient(180deg, #bfdbfe, #e5e7eb 30%, #e5e7eb 70%, #bfdbfe);
        }
        .bc-pr-row {
          display: grid;
          grid-template-columns: 1fr 64px 1fr;
          column-gap: 40px;
          align-items: center;
          margin-bottom: 40px;
        }
        .bc-pr-row:last-child {
          margin-bottom: 0;
        }
        .bc-pr-node {
          grid-column: 2;
          grid-row: 1;
          width: 56px;
          height: 56px;
          margin: 0 auto;
          border-radius: 50%;
          background: linear-gradient(135deg, #1e3a8a, #2563eb);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 15px;
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.35);
          border: 5px solid #fff;
          z-index: 1;
        }
        .is-left .bc-pr-card {
          grid-column: 1;
          grid-row: 1;
        }
        .is-right .bc-pr-card {
          grid-column: 3;
          grid-row: 1;
        }
        .bc-pr-card {
          position: relative;
          background: #f9fafb;
          border: 1px solid #eef0f3;
          border-radius: 18px;
          padding: 28px;
          transition: all 0.3s ease;
        }
        .bc-pr-card:hover {
          background: #fff;
          transform: translateY(-3px);
          box-shadow: 0 16px 36px rgba(15, 23, 42, 0.08);
          border-color: #dbeafe;
        }
        .bc-pr-step-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 10px;
        }
        .bc-pr-title {
          font-size: 18px;
          font-weight: 700;
          color: #111;
          margin-bottom: 8px;
        }
        .bc-pr-desc {
          font-size: 13.5px;
          color: #666;
          line-height: 1.65;
        }

        @media (max-width: 900px) {
          .bc-pr-timeline::before {
            left: 27px;
            transform: none;
          }
          .bc-pr-row {
            grid-template-columns: 56px 1fr;
            column-gap: 24px;
            margin-bottom: 28px;
          }
          .bc-pr-node {
            grid-column: 1 !important;
            grid-row: 1 !important;
            width: 48px;
            height: 48px;
            margin: 0;
            font-size: 13px;
          }
          .bc-pr-card {
            grid-column: 2 !important;
            grid-row: 1 !important;
          }
          .bc-pr-empty {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
