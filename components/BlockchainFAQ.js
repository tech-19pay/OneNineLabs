"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function BlockchainFAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What blockchain development services do you offer?",
      a: "We cover the full lifecycle: smart contract development and audits, dApp and Web3 integration, DeFi protocols, DEX and CEX exchange platforms, custodial and non-custodial wallets, NFT marketplaces, token creation and tokenomics, RWA tokenization, DAO tooling, Layer 1/Layer 2 protocol engineering and enterprise blockchain networks."
    },
    {
      q: "Which blockchains and frameworks do you build on?",
      a: "We develop on Ethereum, Solana, Polygon, BNB Chain, Avalanche, Arbitrum, Optimism, Base and Hyperledger Fabric, using Solidity, Rust, Hardhat, Foundry, Ethers.js/Viem, The Graph, Chainlink and IPFS. We help you pick the chain that fits your cost, speed and compliance needs."
    },
    {
      q: "How long does it take to build a dApp or exchange?",
      a: "A focused MVP — such as a staking dApp, token or single-marketplace — typically ships in 6–8 weeks. Full DeFi protocols, DEXs or exchange platforms with matching engines usually take 3–6 months depending on scope, integrations and audit depth."
    },
    {
      q: "Are your smart contracts audited?",
      a: "Yes. Every contract goes through internal review, automated static analysis and gas optimization, followed by an independent third-party audit before mainnet. We fix all findings, re-verify and deliver the full audit report."
    },
    {
      q: "How much does blockchain development cost?",
      a: "Pricing depends on scope: standalone smart contracts and token launches start in the low four figures, while full platforms like exchanges or DeFi protocols are quoted per milestone. After a free discovery call we provide a fixed, itemized proposal — no hourly surprises."
    },
    {
      q: "Do you provide support after launch?",
      a: "Yes. We offer monitoring, incident response, contract upgrades via proxy patterns, dependency updates and feature iterations under an SLA — so your product stays secure as the ecosystem evolves."
    }
  ];

  return (
    <section className="bc-faq">
      <div className="new-bc-container">
        <div className="bc-faq-layout">
          <div className="bc-faq-intro">
            <span className="bc-eyebrow">Answers</span>
            <h2 className="bc-section-title">Frequently Asked<br/>Questions</h2>
            <p className="bc-section-desc">
              Everything founders and product teams usually ask us before starting a blockchain project.
            </p>
            <div className="bc-faq-contact-card">
              <strong>Still have questions?</strong>
              <p>Talk directly with a blockchain engineer — no sales gate, no waiting.</p>
              <Link href="/contact">Contact us <span>→</span></Link>
            </div>
          </div>

          <div className="bc-faq-list">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`bc-faq-item ${openIdx === idx ? 'open' : ''}`}
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              >
                <div className="bc-faq-question">
                  <span className="bc-faq-icon">?</span>
                  <span className="bc-faq-text">{faq.q}</span>
                  <span className="bc-faq-toggle">{openIdx === idx ? '▲' : '▼'}</span>
                </div>
                {openIdx === idx && (
                  <div className="bc-faq-answer">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .bc-faq {
          padding: 110px 0 130px;
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
        .bc-faq-layout {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: 64px;
          align-items: start;
        }
        .bc-faq-intro {
          position: sticky;
          top: 110px;
        }
        .bc-faq-intro .bc-section-desc {
          margin-bottom: 28px;
        }
        .bc-faq-contact-card {
          background: linear-gradient(135deg, #0f172a, #1e3a8a);
          border-radius: 18px;
          padding: 26px;
          color: #fff;
        }
        .bc-faq-contact-card strong {
          display: block;
          font-size: 16px;
          margin-bottom: 6px;
        }
        .bc-faq-contact-card p {
          font-size: 13px;
          color: #cbd5e1;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .bc-faq-contact-card a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          font-weight: 700;
          color: #0f172a;
          background: #fff;
          text-decoration: none;
          padding: 11px 20px;
          border-radius: 100px;
          transition: transform 0.2s;
        }
        .bc-faq-contact-card a:hover {
          transform: translateY(-2px);
        }

        .bc-faq-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .bc-faq-item {
          background: #f9fafb;
          border-radius: 16px;
          padding: 22px 24px;
          cursor: pointer;
          transition: all 0.2s;
          border: 1px solid #eef0f3;
        }
        .bc-faq-item:hover {
          border-color: #dbeafe;
        }
        .bc-faq-item.open {
          background: #fff;
          border-color: rgba(37, 99, 235, 0.35);
          box-shadow: 0 14px 32px rgba(37, 99, 235, 0.08);
        }
        .bc-faq-question {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .bc-faq-icon {
          width: 28px;
          height: 28px;
          background: #e5e7eb;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
          color: #666;
          flex-shrink: 0;
        }
        .bc-faq-item.open .bc-faq-icon {
          background: #2563eb;
          color: #fff;
        }
        .bc-faq-text {
          flex: 1;
          font-size: 16px;
          font-weight: 600;
          color: #111;
        }
        .bc-faq-toggle {
          color: #2563eb;
          font-size: 11px;
        }
        .bc-faq-answer {
          margin-top: 16px;
          padding-left: 44px;
          font-size: 14px;
          color: #666;
          line-height: 1.65;
        }

        @media (max-width: 1024px) {
          .bc-faq-layout { grid-template-columns: 1fr; gap: 48px; }
          .bc-faq-intro { position: static; }
        }
      `}</style>
    </section>
  );
}
