"use client";
import React, { useState } from 'react';

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
        <div className="bc-faq-header">
          <h2 className="bc-section-title text-center">Frequently Asked<br/>Questions</h2>
          <p className="bc-section-desc text-center">
            Everything founders and product teams usually ask us before starting a blockchain project.
          </p>
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
      
      <style>{`
        .bc-faq {
          padding: 100px 0 120px;
          background: #fdfdfd;
        }
        .bc-faq-header {
          max-width: 600px;
          margin: 0 auto 60px;
        }
        .bc-faq-list {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .bc-faq-item {
          background: #f9fafb;
          border-radius: 12px;
          padding: 20px 24px;
          cursor: pointer;
          transition: all 0.2s;
          border: 1px solid #f3f4f6;
        }
        .bc-faq-item.open {
          background: rgba(37, 99, 235, 0.05);
          border-color: rgba(37, 99, 235, 0.2);
        }
        .bc-faq-question {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .bc-faq-icon {
          width: 24px;
          height: 24px;
          background: #e5e7eb;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          color: #666;
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
          font-size: 12px;
        }
        .bc-faq-answer {
          margin-top: 16px;
          padding-left: 40px;
          font-size: 14px;
          color: #666;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
