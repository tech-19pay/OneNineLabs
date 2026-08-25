"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function BlockchainWalletBenefits() {
  const [walletTab, setWalletTab] = useState('tokens');
  const [selectedNetwork, setSelectedNetwork] = useState('Ethereum');

  const capabilities = [
    {
      icon: "🛡️",
      title: "Bank-Grade MPC Security",
      desc: "Multi-Party Computation (MPC) key sharding, threshold signatures (TSS), and HSM hardware pairing for zero single point of failure.",
      tag: "MPC & TSS"
    },
    {
      icon: "🌐",
      title: "Universal Multi-Chain Engine",
      desc: "Native EVM, Solana, Bitcoin, Cosmos, and L2 cross-chain routing with automated RPC failover and zero manual chain switching.",
      tag: "20+ Chains"
    },
    {
      icon: "🔑",
      title: "Passkeys & Social Recovery",
      desc: "Frictionless Web2-style onboarding via FaceID/TouchID biometric passkeys, social sign-in, and programmable guardian recovery.",
      tag: "ERC-4337"
    },
    {
      icon: "💳",
      title: "Fiat On/Off Ramps & Cards",
      desc: "Global on/off ramps supporting Apple Pay, Google Pay, credit cards, and virtual or physical crypto debit card issuance.",
      tag: "Global Rails"
    }
  ];

  return (
    <section className="bc-wallet-section" id="wallet-development">
      <div className="new-bc-container">
        
        {/* Main Showcase Grid */}
        <div className="bc-wallet-showcase-grid">
          
          {/* Left Column: Real Web3 Wallet UI Mockup */}
          <div className="bc-wallet-mockup-col">
            <div className="web3-wallet-wrapper">
              <div className="web3-wallet-glow"></div>
              
              <div className="web3-wallet-device">
                
                {/* 1. Wallet Top Navigation Bar */}
                <div className="ww-top-bar">
                  {/* Account Badge */}
                  <div className="ww-account-pill">
                    <div className="ww-avatar">
                      <span className="avatar-dot"></span>
                    </div>
                    <span className="ww-acc-name">Account 1</span>
                    <span className="ww-acc-addr">(0x71C...4e92)</span>
                    <span className="ww-copy-ic" title="Copy Address">📋</span>
                  </div>

                  {/* Network Selector Pill */}
                  <div className="ww-network-select">
                    <span className="net-ic eth">⧫</span>
                    <span className="net-name">{selectedNetwork}</span>
                    <span className="net-arrow">⌄</span>
                  </div>
                </div>

                {/* 2. Main Balance Hero Section */}
                <div className="ww-balance-section">
                  <span className="ww-bal-title">Total Balance</span>
                  <div className="ww-main-amount">
                    $28,495.80 <span className="ww-cur">USD</span>
                  </div>
                  <div className="ww-pnl-pill">
                    <span className="pnl-arrow">▲</span>
                    <span>+$1,280.45 (+4.68%) today</span>
                  </div>
                </div>

                {/* 3. Primary Action Buttons (Round Web3 Style) */}
                <div className="ww-actions-grid">
                  <button className="ww-action-item">
                    <div className="ww-action-circle">↑</div>
                    <span>Send</span>
                  </button>
                  <button className="ww-action-item">
                    <div className="ww-action-circle">↓</div>
                    <span>Receive</span>
                  </button>
                  <button className="ww-action-item">
                    <div className="ww-action-circle">⇅</div>
                    <span>Swap</span>
                  </button>
                  <button className="ww-action-item">
                    <div className="ww-action-circle">🌉</div>
                    <span>Bridge</span>
                  </button>
                  <button className="ww-action-item">
                    <div className="ww-action-circle primary-circle">⚡</div>
                    <span>Buy</span>
                  </button>
                </div>

                {/* 4. Tab Navigation (Tokens / NFTs / Activity) */}
                <div className="ww-tabs-bar">
                  <button 
                    className={`ww-tab ${walletTab === 'tokens' ? 'active' : ''}`}
                    onClick={() => setWalletTab('tokens')}
                  >
                    Tokens <span className="tab-cnt">3</span>
                  </button>
                  <button 
                    className={`ww-tab ${walletTab === 'nfts' ? 'active' : ''}`}
                    onClick={() => setWalletTab('nfts')}
                  >
                    NFTs <span className="tab-cnt">2</span>
                  </button>
                  <button 
                    className={`ww-tab ${walletTab === 'activity' ? 'active' : ''}`}
                    onClick={() => setWalletTab('activity')}
                  >
                    Activity
                  </button>
                </div>

                {/* 5. Tab Content: Live Token Portfolio */}
                {walletTab === 'tokens' && (
                  <div className="ww-token-list">
                    {/* Ethereum */}
                    <div className="ww-token-row">
                      <div className="wt-left">
                        <div className="wt-icon eth">⧫</div>
                        <div className="wt-info">
                          <span className="wt-name">Ethereum</span>
                          <span className="wt-sub">4.85 ETH</span>
                        </div>
                      </div>
                      <div className="wt-right">
                        <span className="wt-val">$15,758.15</span>
                        <span className="wt-pnl green">+$420.20 (+2.7%)</span>
                      </div>
                    </div>

                    {/* Solana */}
                    <div className="ww-token-row">
                      <div className="wt-left">
                        <div className="wt-icon sol">◎</div>
                        <div className="wt-info">
                          <span className="wt-name">Solana</span>
                          <span className="wt-sub">55.20 SOL</span>
                        </div>
                      </div>
                      <div className="wt-right">
                        <span className="wt-val">$7,176.00</span>
                        <span className="wt-pnl green">+$310.80 (+4.5%)</span>
                      </div>
                    </div>

                    {/* USD Coin */}
                    <div className="ww-token-row">
                      <div className="wt-left">
                        <div className="wt-icon usdc">$</div>
                        <div className="wt-info">
                          <span className="wt-name">USD Coin</span>
                          <span className="wt-sub">5,561.65 USDC</span>
                        </div>
                      </div>
                      <div className="wt-right">
                        <span className="wt-val">$5,561.65</span>
                        <span className="wt-pnl neutral">$1.00 (0.0%)</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab Content: NFTs */}
                {walletTab === 'nfts' && (
                  <div className="ww-nft-grid">
                    <div className="ww-nft-card">
                      <div className="nft-preview-box nft-1">🎨</div>
                      <span className="nft-name">Pudgy Penguin #4812</span>
                      <span className="nft-floor">Floor: 12.4 ETH</span>
                    </div>
                    <div className="ww-nft-card">
                      <div className="nft-preview-box nft-2">🚀</div>
                      <span className="nft-name">Mad Lads #1094</span>
                      <span className="nft-floor">Floor: 145 SOL</span>
                    </div>
                  </div>
                )}

                {/* Tab Content: Activity */}
                {walletTab === 'activity' && (
                  <div className="ww-activity-list">
                    <div className="ww-act-row">
                      <span className="act-type-ic in">↓</span>
                      <div className="act-info">
                        <strong>Received ETH</strong>
                        <small>From: 0x48...91A2</small>
                      </div>
                      <span className="act-amount green">+1.50 ETH</span>
                    </div>
                    <div className="ww-act-row">
                      <span className="act-type-ic swap">⇅</span>
                      <div className="act-info">
                        <strong>Swapped on Uniswap</strong>
                        <small>ETH → USDC</small>
                      </div>
                      <span className="act-amount">2,450 USDC</span>
                    </div>
                  </div>
                )}

                {/* 6. Security Footer Badge */}
                <div className="ww-footer-sec">
                  <div className="sec-left">
                    <span className="sec-shield">🛡️</span>
                    <span>MPC Key Shards: <strong>3/3 Verified</strong></span>
                  </div>
                  <span className="sec-badge">Biometric Active</span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Heading & Clean Feature List */}
          <div className="bc-wallet-content-col">
            <div className="bc-wallet-header-right">
              <h2 className="bc-wallet-title">Wallet Development</h2>
              <p className="bc-wallet-sub">
                Secure, multi-chain custodial, non-custodial, and MPC wallet infrastructure engineered for exchanges, fintech platforms, and Web3 products.
              </p>
            </div>

            {/* Clean Feature Rows */}
            <div className="wallet-features-list">
              {capabilities.map((c, idx) => (
                <div key={idx} className="wallet-feature-item">
                  <div className="wf-icon-box">
                    <span>{c.icon}</span>
                  </div>
                  <div className="wf-content">
                    <div className="wf-head">
                      <h3 className="wf-title">{c.title}</h3>
                      <span className="wf-tag-pill">{c.tag}</span>
                    </div>
                    <p className="wf-desc">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .bc-wallet-section {
          padding: 30px 0 80px;
          background: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, sans-serif;
        }

        /* Showcase Grid */
        .bc-wallet-showcase-grid {
          display: grid;
          grid-template-columns: 1fr 1.22fr;
          gap: 48px;
          align-items: center;
        }

        /* Left Column: Web3 Wallet Mockup */
        .bc-wallet-mockup-col {
          display: flex;
          justify-content: center;
        }
        .web3-wallet-wrapper {
          position: relative;
          width: 100%;
          max-width: 420px;
        }
        .web3-wallet-glow {
          position: absolute;
          inset: -15px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, rgba(59, 130, 246, 0.03) 50%, transparent 75%);
          filter: blur(25px);
          border-radius: 40px;
          pointer-events: none;
        }

        /* Real Web3 Wallet Device Card */
        .web3-wallet-device {
          position: relative;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 26px;
          padding: 20px 20px 16px;
          box-shadow: 
            0 20px 45px -10px rgba(15, 23, 42, 0.08),
            0 4px 16px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        /* 1. Top Bar */
        .ww-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 12px;
          border-bottom: 1px solid #f1f5f9;
        }
        .ww-account-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 4px 10px;
          border-radius: 100px;
          font-size: 11.5px;
          cursor: pointer;
        }
        .ww-avatar {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .avatar-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ffffff;
        }
        .ww-acc-name {
          font-weight: 700;
          color: #091326;
        }
        .ww-acc-addr {
          color: #64748b;
          font-size: 10.5px;
        }
        .ww-copy-ic {
          font-size: 10px;
          color: #94a3b8;
        }

        .ww-network-select {
          display: flex;
          align-items: center;
          gap: 5px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 4px 10px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 700;
          color: #091326;
          cursor: pointer;
        }
        .net-ic {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
        }
        .net-ic.eth { background: #eff6ff; color: #2563eb; }
        .net-arrow { font-size: 9px; color: #94a3b8; }

        /* 2. Main Balance Section */
        .ww-balance-section {
          text-align: center;
          padding: 6px 0 2px;
        }
        .ww-bal-title {
          font-size: 11.5px;
          color: #64748b;
          font-weight: 600;
          display: block;
          margin-bottom: 2px;
        }
        .ww-main-amount {
          font-size: 32px;
          font-weight: 800;
          color: #091326;
          letter-spacing: -0.8px;
          line-height: 1.1;
        }
        .ww-cur {
          font-size: 16px;
          color: #64748b;
          font-weight: 600;
        }
        .ww-pnl-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: #eff6ff;
          color: #2563eb;
          border: 1px solid #dbeafe;
          padding: 3px 10px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 700;
          margin-top: 6px;
        }
        .pnl-arrow {
          font-size: 9px;
        }

        /* 3. Primary Action Buttons */
        .ww-actions-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 8px;
          padding: 4px 0;
        }
        .ww-action-item {
          background: transparent;
          border: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          cursor: pointer;
        }
        .ww-action-item span {
          font-size: 11px;
          font-weight: 600;
          color: #091326;
        }
        .ww-action-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #091326;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 800;
          transition: all 0.2s;
          box-shadow: 0 2px 6px rgba(0,0,0,0.02);
        }
        .ww-action-item:hover .ww-action-circle {
          background: #eff6ff;
          border-color: #bfdbfe;
          color: #2563eb;
          transform: translateY(-2px);
        }
        .ww-action-circle.primary-circle {
          background: linear-gradient(135deg, #091326 0%, #0f224a 100%);
          color: #ffffff;
          border: none;
        }
        .ww-action-item:hover .primary-circle {
          background: linear-gradient(135deg, #050b17 0%, #0b1a38 100%);
          color: #ffffff;
        }

        /* 4. Tabs Bar */
        .ww-tabs-bar {
          display: flex;
          gap: 12px;
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 8px;
        }
        .ww-tab {
          background: transparent;
          border: none;
          font-size: 13px;
          font-weight: 600;
          color: #64748b;
          cursor: pointer;
          padding: 4px 6px;
          display: flex;
          align-items: center;
          gap: 6px;
          position: relative;
        }
        .ww-tab.active {
          color: #091326;
          font-weight: 800;
        }
        .ww-tab.active::after {
          content: '';
          position: absolute;
          bottom: -9px;
          left: 0;
          right: 0;
          height: 2.5px;
          background: #091326;
          border-radius: 4px;
        }
        .tab-cnt {
          font-size: 10px;
          background: #f1f5f9;
          color: #64748b;
          padding: 1px 6px;
          border-radius: 100px;
        }

        /* 5. Token List */
        .ww-token-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .ww-token-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #f8fafc;
          border: 1px solid #f1f5f9;
          border-radius: 14px;
          padding: 10px 12px;
          transition: background 0.2s;
        }
        .ww-token-row:hover {
          background: #f1f5f9;
        }
        .wt-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .wt-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 800;
        }
        .wt-icon.eth { background: #eff6ff; color: #2563eb; border: 1px solid #dbeafe; }
        .wt-icon.sol { background: #faf5ff; color: #9333ea; border: 1px solid #f3e8ff; }
        .wt-icon.usdc { background: #f0fdf4; color: #16a34a; border: 1px solid #bbf7d0; }

        .wt-info {
          display: flex;
          flex-direction: column;
        }
        .wt-name {
          font-size: 13px;
          font-weight: 700;
          color: #091326;
        }
        .wt-sub {
          font-size: 11px;
          color: #64748b;
        }

        .wt-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .wt-val {
          font-size: 13px;
          font-weight: 700;
          color: #091326;
        }
        .wt-pnl {
          font-size: 10.5px;
          font-weight: 600;
        }
        .wt-pnl.green { color: #2563eb; }
        .wt-pnl.neutral { color: #64748b; }

        /* NFTs Grid */
        .ww-nft-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .ww-nft-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 8px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .nft-preview-box {
          height: 70px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }
        .nft-preview-box.nft-1 { background: linear-gradient(135deg, #dbeafe, #eff6ff); }
        .nft-preview-box.nft-2 { background: linear-gradient(135deg, #ede9fe, #faf5ff); }
        .nft-name { font-size: 11px; font-weight: 700; color: #091326; }
        .nft-floor { font-size: 10px; color: #64748b; }

        /* Activity List */
        .ww-activity-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .ww-act-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #f8fafc;
          border: 1px solid #f1f5f9;
          border-radius: 12px;
          padding: 10px 12px;
        }
        .act-type-ic {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 800;
        }
        .act-type-ic.in { background: #eff6ff; color: #2563eb; }
        .act-type-ic.swap { background: #f1f5f9; color: #091326; }
        .act-info { display: flex; flex-direction: column; flex: 1; margin-left: 10px; }
        .act-info strong { font-size: 12px; color: #091326; }
        .act-info small { font-size: 10px; color: #64748b; }
        .act-amount { font-size: 12px; font-weight: 700; color: #091326; }
        .act-amount.green { color: #2563eb; }

        /* 6. Security Footer */
        .ww-footer-sec {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 10px;
          border-top: 1px solid #f1f5f9;
          font-size: 11px;
          color: #64748b;
        }
        .sec-left {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .sec-shield { font-size: 13px; }
        .sec-left strong { color: #091326; }
        .sec-badge {
          font-size: 10px;
          font-weight: 700;
          color: #1e3a8a;
          background: #eff6ff;
          border: 1px solid #dbeafe;
          padding: 2px 7px;
          border-radius: 6px;
        }

        /* Right Column: Content Column */
        .bc-wallet-content-col {
          display: flex;
          flex-direction: column;
        }

        .bc-wallet-header-right {
          margin-bottom: 24px;
        }
        .bc-wallet-title {
          font-size: 38px;
          font-weight: 800;
          color: #091326;
          line-height: 1.2;
          letter-spacing: -1px;
          margin: 0 0 12px 0;
        }
        .bc-wallet-sub {
          font-size: 15px;
          color: #64748b;
          line-height: 1.65;
          margin: 0;
        }

        /* Clean Feature Rows */
        .wallet-features-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 28px;
        }
        .wallet-feature-item {
          background: #f8fafc;
          border: 1px solid #eef0f3;
          border-radius: 16px;
          padding: 16px 18px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          transition: all 0.2s ease;
        }
        .wallet-feature-item:hover {
          transform: translateX(3px);
          background: #f1f5f9;
          border-color: #dbeafe;
        }
        .wf-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
          box-shadow: 0 2px 6px rgba(0,0,0,0.02);
        }
        .wf-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .wf-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .wf-title {
          font-size: 16px;
          font-weight: 700;
          color: #091326;
          margin: 0;
        }
        .wf-tag-pill {
          font-size: 10.5px;
          font-weight: 700;
          color: #1e3a8a;
          background: #eff6ff;
          border: 1px solid #dbeafe;
          padding: 2px 8px;
          border-radius: 100px;
        }
        .wf-desc {
          font-size: 13.5px;
          color: #64748b;
          line-height: 1.55;
          margin: 0;
        }

        /* Pill CTA Button (Midnight Dark Blue) */
        .wallet-cta-wrap {
          display: flex;
        }
        .bc-wallet-cta-pill {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, #091326 0%, #0f224a 100%);
          color: #ffffff;
          border: none;
          padding: 7px 24px 7px 8px;
          border-radius: 100px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          transition: all 0.25s ease;
          box-shadow: 0 6px 18px rgba(9, 19, 38, 0.35);
        }
        .bc-wallet-cta-pill:hover {
          transform: translateY(-2px);
          background: linear-gradient(135deg, #050b17 0%, #0b1a38 100%);
          box-shadow: 0 10px 25px rgba(9, 19, 38, 0.45);
        }
        .wallet-cta-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #ffffff;
          color: #091326;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 800;
          transition: all 0.2s;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .bc-wallet-showcase-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 640px) {
          .bc-wallet-section {
            padding: 24px 0 60px;
          }
          .bc-wallet-title {
            font-size: 28px;
          }
          .wf-head {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }
        }
      `}</style>
    </section>
  );
}
