"use client";
import React from 'react';

export default function BlockchainInvestingTrading() {
  const items = [
    { title: "High-Performance Matching Engine", desc: "Our custom-built matching engines process millions of transactions per second with ultra-low latency, ensuring reliability during peak market volatility." },
    { title: "Institutional-Grade Security", desc: "We implement advanced security protocols including cold wallet storage, multi-signature authentication, anti-DDoS, and comprehensive risk management systems." },
    { title: "Deep Liquidity Integration", desc: "Launch your exchange with shared order books and API integrations with top global liquidity providers to ensure tight spreads from day one." }
  ];

  return (
    <section className="bc-invest-trade">
      <div className="new-bc-container">
        <div className="bc-it-content">
          <div className="bc-it-left">
            <div className="bc-it-mockup">
              {/* Desktop Exchange Mockup */}
              <div className="bc-desktop-frame">
                <div className="bc-desk-header">
                  <div className="bc-desk-dots"><span></span><span></span><span></span></div>
                  <div className="bc-desk-url">exchange.oneninelabs.com</div>
                </div>
                <div className="bc-desk-body light-theme">
                  <div className="bc-ex-nav">
                    <div className="bc-ex-logo">⬡ COINXFLEX</div>
                    <div className="bc-ex-links"><span>Exchange</span><span>Buy Crypto</span><span>Market</span><span>Discover</span></div>
                    <div className="bc-ex-actions">
                      <div className="bc-ex-search">🔍 Search Token...</div>
                      <button className="bc-ex-wallet-btn">My Wallet</button>
                    </div>
                  </div>
                  
                  <div className="bc-ex-main-layout">
                    {/* Left Sidebar */}
                    <div className="bc-ex-left">
                      <div className="bc-ex-pair">
                        <div className="bc-ex-pair-icon">₿</div>
                        <div>
                          <div className="pair-title">BTC / USDT ⌄</div>
                          <div className="pair-sub">BTC</div>
                        </div>
                      </div>
                      <div className="bc-ex-price-block">
                        <div className="lbl">Market Price</div>
                        <div className="val">63,489.20</div>
                        <div className="sub">$63,489.20 USD</div>
                      </div>
                      <div className="bc-ex-buy-card">
                        <div className="bc-ex-tabs"><span className="active">Limit</span><span>Market</span></div>
                        <div className="bc-ex-input"><span>Price</span> <span>581.78</span></div>
                        <div className="bc-ex-input"><span>Total</span> <span>581.78</span></div>
                        <button className="bc-ex-buy-btn">Buy</button>
                      </div>
                    </div>
                    
                    {/* Middle Section */}
                    <div className="bc-ex-mid">
                      <div className="bc-ex-stats">
                        <div className="stat-col"><div className="stat-val green">6446.37 +0.92%</div><div className="stat-lbl">24h Change</div></div>
                        <div className="stat-col"><div className="stat-val">65,435.23 +1.25%</div><div className="stat-lbl">24h High</div></div>
                        <div className="stat-col"><div className="stat-val red">63,989.63 -1.08%</div><div className="stat-lbl">24h Low</div></div>
                      </div>
                      <div className="bc-ex-chart-area">
                        <div className="bc-ex-chart-header">
                          <span>Time</span> <span className="active">1H</span> <span>4H</span> <span>1D</span> <span>1W</span>
                        </div>
                        <div className="bc-ex-candles">
                          <div className="c-bar green h30"></div>
                          <div className="c-bar red h50"></div>
                          <div className="c-bar green h70"></div>
                          <div className="c-bar green h40"></div>
                          <div className="c-bar red h60"></div>
                          <div className="c-bar green h90"></div>
                          <div className="c-bar green h80"></div>
                          <div className="c-bar red h40"></div>
                          <div className="c-bar green h100"></div>
                          <div className="c-bar green h70"></div>
                          <div className="c-bar red h30"></div>
                          <div className="c-bar green h60"></div>
                          <div className="c-bar green h80"></div>
                          <div className="c-bar red h50"></div>
                          <div className="c-bar green h90"></div>
                        </div>
                      </div>
                      <div className="bc-ex-mood">
                        <div className="mood-title">Market Mood</div>
                        <div className="mood-cards">
                          <div className="m-card">
                            <div className="mc-icon">🚀</div>
                            <div className="mc-text">Trend:<br/><b>Bull</b></div>
                          </div>
                          <div className="m-card active">
                            <div className="mc-icon">😊</div>
                            <div className="mc-text">Mood:<br/><b>Optimistic</b></div>
                          </div>
                          <div className="m-card">
                            <div className="mc-icon">📊</div>
                            <div className="mc-text">Volatility:<br/><b>34.5%</b></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Section */}
                    <div className="bc-ex-right">
                      <div className="ob-header"><span>Price (USDT)</span><span>Amount (BTC)</span></div>
                      <div className="ob-list ob-asks">
                        <div className="ob-row"><span className="red">64,345.34</span><span>0.925602</span></div>
                        <div className="ob-row"><span className="red">64,345.34</span><span>0.925602</span></div>
                        <div className="ob-row"><span className="red">64,345.34</span><span>0.925602</span></div>
                        <div className="ob-row"><span className="red">64,345.34</span><span>0.925602</span></div>
                        <div className="ob-row"><span className="red">64,345.34</span><span>0.925602</span></div>
                      </div>
                      <div className="ob-list ob-bids">
                        <div className="ob-row"><span className="green">64,345.34</span><span>0.925602</span></div>
                        <div className="ob-row"><span className="green">64,345.34</span><span>0.925602</span></div>
                        <div className="ob-row"><span className="green">64,345.34</span><span>0.925602</span></div>
                        <div className="ob-row"><span className="green">64,345.34</span><span>0.925602</span></div>
                        <div className="ob-row"><span className="green">64,345.34</span><span>0.925602</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bc-it-right">
            <h2 className="bc-section-title">Exchange Development</h2>
            <div className="bc-it-list">
              {items.map((item, idx) => (
                <div key={idx} className="bc-it-item">
                  <div className="bc-it-item-header">
                    <span className="bc-it-icon">❖</span>
                    <h4 className="bc-it-title">{item.title}</h4>
                  </div>
                  <p className="bc-it-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .bc-invest-trade {
          padding: 100px 0;
          background: #fdfdfd;
        }
        .bc-it-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        
        .bc-it-left {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .bc-it-mockup {
          position: relative;
          width: 500px;
          height: 380px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        /* Desktop Exchange Mockup */
        .bc-desktop-frame {
          width: 100%;
          height: 100%;
          background: #fff;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 24px 48px rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          z-index: 2;
        }
        .bc-desk-header {
          height: 30px;
          background: #f3f4f6;
          display: flex;
          align-items: center;
          padding: 0 12px;
          border-bottom: 1px solid #e5e7eb;
        }
        .bc-desk-dots {
          display: flex;
          gap: 6px;
        }
        .bc-desk-dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #d1d5db;
        }
        .bc-desk-dots span:nth-child(1) { background: #ef4444; }
        .bc-desk-dots span:nth-child(2) { background: #f59e0b; }
        .bc-desk-dots span:nth-child(3) { background: #10b981; }
        
        .bc-desk-url {
          margin: 0 auto;
          background: #fff;
          padding: 2px 40px;
          border-radius: 4px;
          font-size: 10px;
          color: #9ca3af;
        }
        
        .bc-desk-body.light-theme {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: #fafafa;
          color: #333;
        }
        
        /* Nav */
        .bc-ex-nav {
          display: flex;
          align-items: center;
          padding: 8px 12px;
          background: #fff;
          border-bottom: 1px solid #eaeaea;
          gap: 16px;
        }
        .bc-ex-logo {
          font-weight: 800;
          font-size: 10px;
          color: #111;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .bc-ex-links {
          display: flex;
          gap: 12px;
          font-size: 8px;
          font-weight: 600;
          color: #666;
        }
        .bc-ex-actions {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .bc-ex-search {
          background: #f3f4f6;
          padding: 4px 8px;
          border-radius: 100px;
          font-size: 8px;
          color: #999;
        }
        .bc-ex-wallet-btn {
          background: #2563eb;
          color: #fff;
          border: none;
          padding: 4px 8px;
          border-radius: 100px;
          font-size: 7px;
          font-weight: bold;
        }

        .bc-ex-main-layout {
          display: flex;
          flex: 1;
        }

        /* Left Column */
        .bc-ex-left {
          width: 120px;
          background: #fff;
          border-right: 1px solid #eaeaea;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .bc-ex-pair {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .bc-ex-pair-icon {
          width: 20px;
          height: 20px;
          background: #3b82f6;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: bold;
        }
        .pair-title { font-size: 10px; font-weight: 800; color: #111; }
        .pair-sub { font-size: 8px; color: #888; }
        
        .bc-ex-price-block { margin-top: 4px; }
        .bc-ex-price-block .lbl { font-size: 7px; color: #888; }
        .bc-ex-price-block .val { font-size: 16px; font-weight: 800; color: #111; margin: 2px 0; }
        .bc-ex-price-block .sub { font-size: 7px; color: #666; }

        .bc-ex-buy-card {
          background: #f9fafb;
          border-radius: 8px;
          padding: 8px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: 10px;
        }
        .bc-ex-tabs {
          display: flex;
          gap: 4px;
          background: #eaeaea;
          border-radius: 100px;
          padding: 2px;
        }
        .bc-ex-tabs span {
          flex: 1;
          text-align: center;
          font-size: 7px;
          font-weight: 600;
          padding: 4px;
          border-radius: 100px;
          color: #666;
        }
        .bc-ex-tabs span.active { background: #fff; color: #2563eb; box-shadow: 0 1px 2px rgba(0,0,0,0.1); }
        .bc-ex-input {
          display: flex;
          justify-content: space-between;
          background: #fff;
          border: 1px solid #eaeaea;
          padding: 4px 6px;
          border-radius: 4px;
          font-size: 7px;
          color: #888;
        }
        .bc-ex-input span:last-child { color: #111; font-weight: bold; }
        .bc-ex-buy-btn {
          background: #2563eb;
          color: #fff;
          border: none;
          padding: 6px;
          border-radius: 100px;
          font-size: 8px;
          font-weight: bold;
          margin-top: 4px;
        }

        /* Middle Column */
        .bc-ex-mid {
          flex: 1;
          display: flex;
          flex-direction: column;
          border-right: 1px solid #eaeaea;
        }
        .bc-ex-stats {
          display: flex;
          gap: 16px;
          padding: 8px 16px;
          border-bottom: 1px solid #eaeaea;
          background: #fff;
        }
        .stat-col { display: flex; flex-direction: column; gap: 2px; }
        .stat-val { font-size: 9px; font-weight: 700; color: #111; }
        .stat-val.green { color: #10b981; }
        .stat-val.red { color: #ef4444; }
        .stat-lbl { font-size: 7px; color: #888; }
        
        .bc-ex-chart-area {
          flex: 1;
          background: #fff;
          padding: 12px;
          display: flex;
          flex-direction: column;
        }
        .bc-ex-chart-header {
          display: flex;
          gap: 8px;
          font-size: 8px;
          color: #888;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .bc-ex-chart-header span.active { color: #2563eb; }
        
        .bc-ex-candles {
          flex: 1;
          display: flex;
          align-items: flex-end;
          gap: 4px;
          justify-content: space-around;
        }
        .c-bar { width: 4px; border-radius: 1px; position: relative; }
        .c-bar::before { content: ""; position: absolute; width: 1px; height: 140%; left: 1.5px; top: -20%; background: inherit; z-index: 0; }
        .c-bar.green { background: #10b981; }
        .c-bar.red { background: #ef4444; }
        .h30 { height: 30%; } .h40 { height: 40%; } .h50 { height: 50%; } .h60 { height: 60%; } .h70 { height: 70%; } .h80 { height: 80%; } .h90 { height: 90%; } .h100 { height: 100%; }
        
        .bc-ex-mood {
          padding: 12px;
          background: #fff;
          border-top: 1px solid #eaeaea;
        }
        .mood-title { font-size: 9px; font-weight: 700; margin-bottom: 8px; color: #111; }
        .mood-cards {
          display: flex;
          gap: 8px;
        }
        .m-card {
          flex: 1;
          background: #f9fafb;
          border-radius: 8px;
          padding: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          text-align: center;
        }
        .m-card.active {
          background: #eff6ff;
          box-shadow: 0 4px 12px rgba(37,99,235,0.1);
        }
        .mc-icon {
          width: 24px;
          height: 24px;
          background: #111;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
        }
        .m-card.active .mc-icon { background: #2563eb; }
        .mc-text { font-size: 7px; color: #666; }
        .mc-text b { color: #111; font-size: 8px; }

        /* Right Column */
        .bc-ex-right {
          width: 120px;
          background: #fff;
          padding: 12px;
          display: flex;
          flex-direction: column;
        }
        .ob-header {
          display: flex;
          justify-content: space-between;
          font-size: 7px;
          color: #888;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .ob-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .ob-asks { margin-bottom: 12px; }
        .ob-row {
          display: flex;
          justify-content: space-between;
          font-size: 8px;
          font-family: monospace;
          color: #666;
        }
        .ob-row span.red { color: #ef4444; font-weight: 600; }
        .ob-row span.green { color: #10b981; font-weight: 600; }
        
        .bc-it-rings {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 0;
        }
        .bc-it-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed rgba(255, 0, 127, 0.3);
        }
        .ring-1 { width: 300px; height: 300px; }
        .ring-2 { width: 400px; height: 400px; border: 1px dashed rgba(255, 0, 127, 0.15); }
        .ring-3 { width: 500px; height: 500px; border: 1px dashed rgba(255, 0, 127, 0.05); }
        
        .bc-it-phone {
          z-index: 1;
        }
        
        /* Inner phone styles reused */
        .bc-phone-transactions {
          margin-top: 16px;
          padding: 0 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .bc-pt-row {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #fff;
          padding: 8px 12px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .bc-pt-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
        }
        .bc-pt-icon.blue { background: #3b82f6; }
        .bc-pt-icon.orange { background: #f59e0b; }
        .bc-pt-info { flex: 1; font-size: 11px; font-weight: 600; color: #111; }
        .bc-pt-val { font-size: 11px; font-weight: 700; color: #111; }
        
        .bc-it-right {
          max-width: 600px;
        }
        .bc-section-title {
          font-size: 42px;
          font-weight: 800;
          line-height: 1.15;
          color: #111;
          white-space: nowrap;
        }
        .bc-it-list {
          display: flex;
          flex-direction: column;
          gap: 32px;
          margin-top: 32px;
        }
        .bc-it-item-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }
        .bc-it-icon {
          color: #2563eb;
          font-size: 18px;
        }
        .bc-it-title {
          font-size: 18px;
          font-weight: 700;
          color: #111;
        }
        .bc-it-desc {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          padding-left: 30px;
        }
        
        @media (max-width: 900px) {
          .bc-it-content { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
