"use client";
import React, { useState } from 'react';

export default function BlockchainFAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What is blockchain technology?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      q: "What is Bitcoin?",
      a: "Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network."
    },
    {
      q: "What is cryptocurrency?",
      a: "A cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend."
    },
    {
      q: "How does a cryptocurrency wallet work?",
      a: "A cryptocurrency wallet is a software program or physical device that allows you to store your public and private keys and interact with various blockchains."
    },
    {
      q: "How to create a crypto currency wallet?",
      a: "You can create a wallet by downloading a reputable wallet app or purchasing a hardware wallet and following the setup instructions."
    }
  ];

  return (
    <section className="bc-faq">
      <div className="new-bc-container">
        <div className="bc-faq-header">
          <h2 className="bc-section-title text-center">Frequently Asked<br/>Questions</h2>
          <p className="bc-section-desc text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
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
