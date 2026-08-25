"use client";
import React from 'react';
import Link from 'next/link';

export default function BlockchainServicesGrid() {
  return (
    <section className="bc-services-grid-section" id="services">
      <div className="new-bc-container">
        
        {/* Bento Grid Layout matching the premium light-theme aesthetic */}
        <div className="bc-bento-grid-custom">

          {/* Row 1, Card 1 (2 Columns): Smart Contract Engineering */}
          <div className="bento-card col-span-2 row-wide-card">
            <div className="bento-content-left">
              <h3>Smart Contract Engineering</h3>
              <p>Secure, gas-optimized contracts in Solidity & Rust — ERC-20/721/1155/4337 tokens, upgradeable proxies, staking vaults, and custom protocol logic engineered for scale.</p>
              <div className="bento-tags-row">
                <span className="bento-chip">Solidity</span>
                <span className="bento-chip">Rust</span>
                <span className="bento-chip">Upgradeable Proxies</span>
                <span className="bento-chip">ERC-4337</span>
              </div>
              <Link href="/contact" className="bento-btn-primary">Get Started ↗</Link>
            </div>
            
            {/* Right Mockup: Smart Contract Verification Console */}
            <div className="bento-mockup-right pad-mockup">
              <div className="mock-sc-ui">
                <div className="sc-header">
                  <div className="sc-file">
                    <span className="dot-green"></span>
                    <strong>OneNineVault.sol</strong>
                  </div>
                  <span className="sc-tag">Solidity v0.8.24</span>
                </div>

                <div className="sc-code-preview">
                  <div className="sc-line"><span className="kw">contract</span> OneNineVault <span className="kw">is</span> Initializable &#123;</div>
                  <div className="sc-line indent"><span className="kw">function</span> deposit() <span className="kw">external payable</span> &#123;</div>
                  <div className="sc-line indent-2">_mintShares(msg.sender, msg.value);</div>
                  <div className="sc-line indent">&#125;</div>
                  <div className="sc-line">&#125;</div>
                </div>

                <div className="sc-metrics-row">
                  <div className="sc-met">
                    <small>Gas Efficiency</small>
                    <strong>21,450 Gas (99.8%)</strong>
                  </div>
                  <div className="sc-met">
                    <small>Audit Status</small>
                    <strong className="green-txt">0 Warnings ✓</strong>
                  </div>
                </div>

                <div className="sc-footer">
                  <span className="sc-hash">Bytecode: 0x71C...4e92</span>
                  <span className="sc-status-pill">Mainnet Verified ⚡</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 1, Card 2 (1 Column): Smart Contract Audits */}
          <div className="bento-card col-span-1 row-standard-card">
            <div className="bento-content-top">
              <h3>Smart Contract Audits</h3>
              <p>Manual line-by-line review, automated static analysis, and reentrancy/economic attack modeling — with complete audit reports before mainnet.</p>
            </div>

            <div className="bento-mockup-bottom">
              <div className="mock-audit-ui">
                <div className="ma-head">
                  <span>Security Audit Score</span>
                  <strong className="green-txt">100 / 100</strong>
                </div>
                <div className="ma-checklist">
                  <div className="ma-item pass">
                    <span className="ma-ic">✓</span>
                    <span>Reentrancy Protection</span>
                  </div>
                  <div className="ma-item pass">
                    <span className="ma-ic">✓</span>
                    <span>Integer & Overflow Safety</span>
                  </div>
                  <div className="ma-item pass">
                    <span className="ma-ic">✓</span>
                    <span>Access Control & Timelocks</span>
                  </div>
                </div>
                <div className="ma-bar">
                  <div className="ma-bar-fill" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2, Card 3 (1 Column): DeFi Protocol Development */}
          <div className="bento-card col-span-1 row-standard-card">
            <div className="bento-content-top">
              <h3>DeFi Protocols & Yield</h3>
              <p>Lending & borrowing markets, liquid staking, yield vaults, AMMs, and algorithmic stablecoin systems engineered for capital efficiency.</p>
            </div>

            <div className="bento-mockup-bottom">
              <div className="mock-defi-ui">
                <div className="defi-top">
                  <span className="defi-lbl">Staked Vault Assets</span>
                  <span className="defi-val">$48,250,000</span>
                </div>
                <div className="defi-input-box">
                  <span className="defi-cur">18.5%</span>
                  <span className="defi-apy-tag">Fixed APY</span>
                </div>
                <div className="defi-slider">
                  <div className="slider-track"><div className="slider-thumb" style={{ left: '75%' }}></div></div>
                  <div className="slider-labels">
                    <span>25%</span>
                    <span>50%</span>
                    <span className="active">75%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2, Card 4 (2 Columns): DEX & Exchange Development */}
          <div className="bento-card col-span-2 row-wide-card">
            <div className="bento-content-left">
              <h3>DEX & Exchange Platforms</h3>
              <p>Automated Market Makers (AMM) and high-throughput orderbook exchanges with sub-millisecond matching engines, custody, KYC integrations, and deep liquidity.</p>
              <div className="bento-tags-row">
                <span className="bento-chip">AMM</span>
                <span className="bento-chip">Orderbook Engine</span>
                <span className="bento-chip">Liquidity Pools</span>
                <span className="bento-chip">Sub-millisecond</span>
              </div>
              <Link href="/contact" className="bento-btn-primary">Explore DEX Solutions ↗</Link>
            </div>

            {/* Right Mockup: DEX Swap Interface */}
            <div className="bento-mockup-right pad-mockup">
              <div className="mock-dex-ui">
                <div className="dex-swap-row">
                  <div className="ds-left">
                    <span className="ds-lbl">You Pay</span>
                    <div className="ds-val">2.50 ETH</div>
                  </div>
                  <span className="ds-pill">Balance: 5.40 ETH</span>
                </div>

                <div className="dex-arrow-divider">↓</div>

                <div className="dex-swap-row">
                  <div className="ds-left">
                    <span className="ds-lbl">You Receive</span>
                    <div className="ds-val green-txt">$8,125.00 USDT</div>
                  </div>
                  <span className="ds-pill green">Rate: $3,250.00</span>
                </div>

                <div className="dex-meta-footer">
                  <span>Network Fee: <strong>$0.42</strong></span>
                  <span>Slippage: <strong>0.1%</strong></span>
                  <span className="green-txt">● Instant Finality</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3, Card 5 (2 Columns): Custom Wallet & MPC Development */}
          <div className="bento-card col-span-2 row-wide-card">
            <div className="bento-content-left">
              <h3>Custodial & MPC Wallets</h3>
              <p>Custodial, non-custodial, and MPC multi-sig wallets for web, iOS, Android, and browser extensions — with social recovery, biometric signing, and fiat on/off ramps.</p>
              <div className="bento-tags-row">
                <span className="bento-chip">MPC Technology</span>
                <span className="bento-chip">Multi-Signature</span>
                <span className="bento-chip">Mobile & Web</span>
                <span className="bento-chip">Fiat On-Ramp</span>
              </div>
              <Link href="/contact" className="bento-btn-primary">Build Custom Wallet ↗</Link>
            </div>

            {/* Right Mockup: Multi-Sig MPC Wallet */}
            <div className="bento-mockup-right pad-mockup">
              <div className="mock-wallet-ui">
                <div className="mw-top-bar">
                  <span>Institutional Multi-Sig</span>
                  <span className="mw-badge">3/5 Signers Online</span>
                </div>
                <div className="mw-bal-box">
                  <small>Portfolio Total</small>
                  <strong>$148,369.80 USD</strong>
                </div>
                <div className="mw-coins-list">
                  <div className="mw-coin"><span>⧫ ETH</span><strong>18.4 ($59.8k)</strong></div>
                  <div className="mw-coin"><span>◎ SOL</span><strong>340 ($44.2k)</strong></div>
                  <div className="mw-coin"><span>₮ USDT</span><strong>$44,369.80</strong></div>
                </div>
                <button className="mw-action-btn">Sign Transaction with MPC 🔐</button>
              </div>
            </div>
          </div>

          {/* Row 3, Card 6 (1 Column): Layer 1 / Layer 2 & Rollups */}
          <div className="bento-card col-span-1 row-standard-card">
            <div className="bento-content-top">
              <h3>L1 / L2 App-Chains & Rollups</h3>
              <p>Custom execution chains and rollups: OP Stack app-chains, Arbitrum Orbit, Cosmos SDK zones, and validator infrastructure.</p>
            </div>

            <div className="bento-mockup-bottom">
              <div className="mock-l2-ui">
                <div className="l2-header">
                  <span>OP Stack Rollup</span>
                  <span className="l2-status">● Live</span>
                </div>
                <div className="l2-stats-grid">
                  <div className="l2-box">
                    <small>Throughput</small>
                    <strong>12,500 TPS</strong>
                  </div>
                  <div className="l2-box">
                    <small>Block Time</small>
                    <strong>250 ms</strong>
                  </div>
                </div>
                <div className="l2-savings">
                  <span>Gas Savings vs L1:</span>
                  <strong className="green-txt">99.6% Saved</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4, Card 7 (1 Column): Token Development & Tokenomics */}
          <div className="bento-card col-span-1 row-standard-card">
            <div className="bento-content-top">
              <h3>Tokenomics & Token Design</h3>
              <p>Token architecture, automated vesting schedules, bonding curves, DAO governance mechanisms, and compliant security/utility token launches.</p>
            </div>

            <div className="bento-mockup-bottom">
              <div className="mock-token-ui">
                <div className="tok-header">
                  <span>Token: <strong>$ONL</strong></span>
                  <span className="tok-badge">ERC-20 & SPL</span>
                </div>
                <div className="tok-vesting-bar">
                  <div className="tv-fill" style={{ width: '65%' }}></div>
                </div>
                <div className="tok-meta">
                  <span>Vesting: <strong>12-Month Linear</strong></span>
                  <span>TGE: <strong>20% Unlocked</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4, Card 8 (2 Columns): RWA & Enterprise Tokenization */}
          <div className="bento-card col-span-2 row-wide-card">
            <div className="bento-content-left">
              <h3>RWA Tokenization & Enterprise Tooling</h3>
              <p>Tokenize real estate, private equity, debt instruments, and commodities with built-in regulatory compliance, KYC/AML whitelisting, and secondary market liquidity.</p>
              <div className="bento-tags-row">
                <span className="bento-chip">Real Estate</span>
                <span className="bento-chip">Private Funds</span>
                <span className="bento-chip">ERC-3643 Compliant</span>
                <span className="bento-chip">Hyperledger Fabric</span>
              </div>
              <Link href="/contact" className="bento-btn-primary">Tokenize Assets ↗</Link>
            </div>

            {/* Right Mockup: RWA Asset Certificate & Registry */}
            <div className="bento-mockup-right pad-mockup">
              <div className="mock-rwa-ui">
                <div className="rwa-head">
                  <div className="rwa-type">🏢 Manhattan Commercial Real Estate</div>
                  <span className="rwa-badge">SEC / Reg D Compliant</span>
                </div>
                <div className="rwa-valuation">
                  <small>Total Tokenized Value</small>
                  <strong>$24,500,000 USD</strong>
                </div>
                <div className="rwa-details">
                  <div className="rwa-det-item"><span>Token Supply:</span><strong>245,000 Shares</strong></div>
                  <div className="rwa-det-item"><span>Yield Distribution:</span><strong>Quarterly (USDC)</strong></div>
                </div>
                <div className="rwa-status">
                  <span>Whitelisted Investors: <strong>1,420</strong></span>
                  <span className="green-txt">✓ Audit Approved</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .bc-services-grid-section {
          padding: 30px 0 30px;
          background: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, sans-serif;
        }

        /* Bento Grid 3-Column Base */
        .bc-bento-grid-custom {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .col-span-2 { grid-column: span 2; }
        .col-span-1 { grid-column: span 1; }

        /* Bento Card Styles - Consistent Light Theme */
        .bento-card {
          background: #f4f5f7;
          border: 1px solid #eef0f3;
          border-radius: 24px;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          display: flex;
        }
        .bento-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(15, 23, 42, 0.06);
          border-color: #dbeafe;
        }

        /* Card Content Layouts */
        .row-wide-card {
          flex-direction: row;
        }
        .row-standard-card {
          flex-direction: column;
        }

        .bento-content-left {
          flex: 1.15;
          padding: 38px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }
        .bento-content-top {
          padding: 36px 36px 20px;
        }

        .bento-icon-badge {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          margin-bottom: 20px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.03);
        }

        .bento-content-left h3, .bento-content-top h3 {
          font-size: 24px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.25;
          letter-spacing: -0.5px;
          margin: 0 0 12px;
        }

        .bento-content-left p, .bento-content-top p {
          font-size: 14.5px;
          color: #64748b;
          line-height: 1.6;
          margin: 0 0 22px;
        }

        .bento-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 24px;
        }
        .bento-chip {
          font-size: 11.5px;
          font-weight: 600;
          color: #1e3a8a;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 4px 10px;
          border-radius: 100px;
        }

        .bento-btn-primary {
          background: #0f172a;
          color: #ffffff;
          font-size: 13px;
          font-weight: 600;
          padding: 10px 20px;
          border-radius: 100px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: background 0.2s;
        }
        .bento-btn-primary:hover {
          background: #2563eb;
        }

        .bento-mockup-right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bento-mockup-bottom {
          padding: 0 36px 36px;
          margin-top: auto;
        }

        .pad-mockup {
          background: #ffffff;
          margin: 20px;
          border-radius: 18px;
          border: 1px solid #eee;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          padding: 20px;
        }

        /* ---------------- Mockup Widgets ---------------- */

        /* 1. Smart Contract Mockup */
        .mock-sc-ui {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .sc-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
        }
        .sc-file {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #0f172a;
        }
        .dot-green { width: 7px; height: 7px; border-radius: 50%; background: #10b981; }
        .sc-tag {
          font-size: 10.5px;
          font-weight: 700;
          color: #2563eb;
          background: #eff6ff;
          padding: 2px 8px;
          border-radius: 6px;
        }
        .sc-code-preview {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 10px 12px;
          font-family: monospace;
          font-size: 11px;
          color: #334155;
          line-height: 1.4;
        }
        .sc-line .kw { color: #2563eb; font-weight: 700; }
        .indent { padding-left: 14px; }
        .indent-2 { padding-left: 28px; color: #059669; }
        .sc-metrics-row {
          display: flex;
          justify-content: space-between;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 8px 12px;
          font-size: 11px;
        }
        .sc-met small { color: #64748b; display: block; font-size: 9.5px; }
        .sc-met strong { color: #0f172a; font-size: 12px; }
        .green-txt { color: #15803d; }
        .sc-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 10.5px;
        }
        .sc-hash { font-family: monospace; color: #64748b; }
        .sc-status-pill {
          background: #dcfce7;
          color: #15803d;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 6px;
        }

        /* 2. Audit Mockup */
        .mock-audit-ui {
          background: #ffffff;
          border: 1px solid #eee;
          border-radius: 16px;
          padding: 18px 20px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.02);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ma-head {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          font-weight: 700;
          color: #0f172a;
        }
        .ma-checklist {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .ma-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11.5px;
          color: #334155;
        }
        .ma-ic {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #dcfce7;
          color: #15803d;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          font-weight: 800;
        }
        .ma-bar {
          height: 5px;
          background: #f1f5f9;
          border-radius: 4px;
          overflow: hidden;
        }
        .ma-bar-fill {
          height: 100%;
          background: #10b981;
          border-radius: 4px;
        }

        /* 3. DeFi Mockup */
        .mock-defi-ui {
          background: #ffffff;
          border: 1px solid #eee;
          border-radius: 16px;
          padding: 18px 20px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.02);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .defi-top {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
        }
        .defi-lbl { color: #64748b; }
        .defi-val { font-weight: 700; color: #0f172a; }
        .defi-input-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 8px 12px;
        }
        .defi-cur { font-size: 20px; font-weight: 800; color: #0f172a; }
        .defi-apy-tag {
          font-size: 10px;
          font-weight: 700;
          color: #15803d;
          background: #dcfce7;
          padding: 2px 8px;
          border-radius: 6px;
        }
        .defi-slider {
          margin-top: 4px;
        }
        .slider-track {
          height: 4px;
          background: #e2e8f0;
          border-radius: 4px;
          position: relative;
          margin-bottom: 8px;
        }
        .slider-thumb {
          position: absolute;
          top: -4px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #2563eb;
          box-shadow: 0 2px 6px rgba(37,99,235,0.4);
        }
        .slider-labels {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          color: #94a3b8;
        }
        .slider-labels .active { color: #2563eb; font-weight: 700; }

        /* 4. DEX Mockup */
        .mock-dex-ui {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .dex-swap-row {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 10px 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .ds-lbl { font-size: 10px; color: #64748b; display: block; }
        .ds-val { font-size: 16px; font-weight: 700; color: #0f172a; }
        .ds-pill {
          font-size: 10px;
          font-weight: 600;
          color: #64748b;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 3px 8px;
          border-radius: 6px;
        }
        .ds-pill.green { color: #15803d; background: #dcfce7; border-color: #bbf7d0; }
        .dex-arrow-divider {
          text-align: center;
          font-size: 12px;
          color: #94a3b8;
          line-height: 1;
        }
        .dex-meta-footer {
          display: flex;
          justify-content: space-between;
          font-size: 10.5px;
          color: #64748b;
          padding-top: 4px;
        }

        /* 5. Wallet Mockup */
        .mock-wallet-ui {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .mw-top-bar {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          font-weight: 700;
          color: #0f172a;
        }
        .mw-badge {
          font-size: 9.5px;
          color: #15803d;
          background: #dcfce7;
          padding: 2px 6px;
          border-radius: 6px;
        }
        .mw-bal-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 10px 14px;
        }
        .mw-bal-box small { font-size: 10px; color: #64748b; display: block; }
        .mw-bal-box strong { font-size: 18px; font-weight: 800; color: #0f172a; }
        .mw-coins-list {
          display: flex;
          gap: 6px;
        }
        .mw-coin {
          flex: 1;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 6px 8px;
          font-size: 9.5px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .mw-coin span { color: #64748b; }
        .mw-coin strong { color: #0f172a; }
        .mw-action-btn {
          background: #0f172a;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          padding: 9px;
          font-size: 11.5px;
          font-weight: 600;
          cursor: pointer;
        }

        /* 6. L2 Mockup */
        .mock-l2-ui {
          background: #ffffff;
          border: 1px solid #eee;
          border-radius: 16px;
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .l2-header {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          font-weight: 700;
          color: #0f172a;
        }
        .l2-status { font-size: 10px; color: #15803d; }
        .l2-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        .l2-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 8px 10px;
        }
        .l2-box small { font-size: 9.5px; color: #64748b; display: block; }
        .l2-box strong { font-size: 14px; font-weight: 700; color: #0f172a; }
        .l2-savings {
          display: flex;
          justify-content: space-between;
          font-size: 10.5px;
          color: #64748b;
        }

        /* 7. Token Mockup */
        .mock-token-ui {
          background: #ffffff;
          border: 1px solid #eee;
          border-radius: 16px;
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .tok-header {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #0f172a;
        }
        .tok-badge {
          font-size: 10px;
          font-weight: 700;
          color: #2563eb;
          background: #eff6ff;
          padding: 2px 6px;
          border-radius: 4px;
        }
        .tok-vesting-bar {
          height: 6px;
          background: #e2e8f0;
          border-radius: 4px;
          overflow: hidden;
        }
        .tv-fill { height: 100%; background: #2563eb; border-radius: 4px; }
        .tok-meta {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          color: #64748b;
        }

        /* 8. RWA Mockup */
        .mock-rwa-ui {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .rwa-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .rwa-type { font-size: 12px; font-weight: 700; color: #0f172a; }
        .rwa-badge {
          font-size: 9.5px;
          font-weight: 700;
          color: #15803d;
          background: #dcfce7;
          padding: 2px 6px;
          border-radius: 4px;
        }
        .rwa-valuation {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 8px 12px;
        }
        .rwa-valuation small { font-size: 9.5px; color: #64748b; display: block; }
        .rwa-valuation strong { font-size: 17px; font-weight: 800; color: #0f172a; }
        .rwa-details {
          display: flex;
          justify-content: space-between;
          font-size: 10.5px;
          color: #64748b;
        }
        .rwa-status {
          display: flex;
          justify-content: space-between;
          font-size: 10.5px;
          padding-top: 4px;
          border-top: 1px solid #f1f5f9;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .bc-bento-grid-custom {
            grid-template-columns: 1fr;
          }
          .col-span-2 {
            grid-column: span 1;
          }
          .row-wide-card {
            flex-direction: column;
          }
          .bento-mockup-right {
            padding: 0 36px 36px;
          }
          .pad-mockup {
            margin: 0;
          }
        }

        @media (max-width: 640px) {
          .bc-services-grid-section {
            padding: 30px 0 60px;
          }
          .bento-card {
            padding: 24px 20px;
          }
          .bento-content-left, .bento-content-top {
            padding: 0;
          }
          .bento-mockup-right, .bento-mockup-bottom {
            padding: 20px 0 0;
          }
          .bento-content-left h3, .bento-content-top h3 {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
}
