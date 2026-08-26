import Link from "next/link";

const PRIMARY = "#2563eb";

const exchangePoints = [
  {
    title: "High-Performance Matching Engine",
    desc: "Custom matching engines process millions of orders per second with ultra-low latency — reliable even during peak market volatility.",
  },
  {
    title: "Institutional-Grade Security",
    desc: "Cold-wallet custody, multi-signature withdrawals, anti-DDoS, KYC/AML flows and a full risk-management layer out of the box.",
  },
  {
    title: "Deep Liquidity Integration",
    desc: "Shared order books and API connections to top global liquidity providers so your exchange launches with tight spreads from day one.",
  },
  {
    title: "CEX + DEX in One Team",
    desc: "Centralized orderbook exchanges and AMM / hybrid DEXs — same senior engineers, same audit bar, same launch playbook.",
  },
];

const walletPoints = [
  {
    title: "Custodial, Non-Custodial & MPC",
    desc: "Choose the trust model that fits your product — full custody, self-custody, or MPC shards with 3/5 threshold signing.",
  },
  {
    title: "Multi-Chain Portfolio",
    desc: "One clean balance across Ethereum, Solana, BNB Chain, Polygon and leading L2s — no manual network switching for users.",
  },
  {
    title: "Passkeys & Social Recovery",
    desc: "FaceID / passkey logins and guardian-based recovery so first-time users go from signup to first transaction in minutes.",
  },
  {
    title: "Fiat On / Off Ramps",
    desc: "Card and bank rails, Ramp / MoonPay / on-ramp aggregators, and travel-rule-ready KYC so the wallet is ready for real money.",
  },
];

const extensionPoints = [
  {
    title: "Chrome, Firefox, Brave & Edge",
    desc: "MV3 extensions with a polished popup, in-page inject and background service worker — published to every major store.",
  },
  {
    title: "dApp Injection & WalletConnect",
    desc: "window.ethereum / EIP-1193 provider, WalletConnect v2 and deep-link handoff so any dApp can connect in one click.",
  },
  {
    title: "Transaction Simulation",
    desc: "Pre-sign previews of token approvals, NFT transfers and contract calls — phishing and drain-attack protection built in.",
  },
  {
    title: "Hardware & Multi-Account",
    desc: "Ledger / Trezor pairing, multiple accounts, networks and custom RPCs — the control panel power users expect.",
  },
];

function ExchangeMockup() {
  return (
    <div className="bc-spot-desk">
      <div className="bc-spot-desk-bar">
        <span className="dot r" />
        <span className="dot y" />
        <span className="dot g" />
        <div className="bc-spot-url">exchange.oneninelabs.com</div>
      </div>
      <div className="bc-spot-desk-body">
        <div className="bc-spot-ex-nav">
          <strong>⬡ ONLX</strong>
          <span>Exchange</span>
          <span>Markets</span>
          <span>Wallet</span>
          <button type="button">Connect</button>
        </div>
        <div className="bc-spot-ex-grid">
          <div className="bc-spot-ex-left">
            <div className="pair">
              <span className="coin">₿</span>
              <div>
                <b>BTC / USDT</b>
                <small>Bitcoin</small>
              </div>
            </div>
            <div className="price">79,106.77</div>
            <small className="usd">$79,106.77 USD</small>
            <div className="buy-card">
              <div className="tabs">
                <span className="on">Limit</span>
                <span>Market</span>
              </div>
              <div className="inp">
                <span>Price</span>
                <b>79,106.77</b>
              </div>
              <div className="inp">
                <span>Total</span>
                <b>791.07</b>
              </div>
              <button type="button" className="buy">Buy BTC</button>
            </div>
          </div>
          <div className="bc-spot-ex-mid">
            <div className="stats">
              <div>
                <b className="up">+2.08%</b>
                <small>24h Change</small>
              </div>
              <div>
                <b>80,214.55</b>
                <small>24h High</small>
              </div>
              <div>
                <b className="dn">76,931.12</b>
                <small>24h Low</small>
              </div>
            </div>
            <div className="candles">
              {[30, 50, 70, 40, 60, 90, 80, 40, 100, 70, 30, 60, 80, 50, 90].map((h, i) => (
                <span key={i} className={i % 3 === 1 ? "red" : "grn"} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <div className="bc-spot-ex-right">
            <div className="ob-h">
              <span>Price</span>
              <span>Amount</span>
            </div>
            {[
              ["79,345", "0.92", "dn"],
              ["79,287", "0.41", "dn"],
              ["79,214", "1.20", "dn"],
              ["79,168", "0.08", "dn"],
              ["79,094", "0.74", "up"],
              ["79,051", "0.19", "up"],
              ["78,998", "1.05", "up"],
              ["78,940", "0.36", "up"],
            ].map((r) => (
              <div key={r[0]} className="ob-r">
                <span className={r[2]}>{r[0]}</span>
                <span>{r[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function WalletPhone() {
  return (
    <div className="bc-spot-phone">
      <div className="notch" />
      <div className="ph-top">
        <div>
          <small>Web3 Wallet</small>
          <b>Portfolio</b>
        </div>
        <span className="pill">Multi-chain</span>
      </div>
      <div className="ph-bal">
        <small>Total balance</small>
        <strong>$12,480.35</strong>
        <em>▲ 8.2% this month</em>
      </div>
      <div className="ph-acts">
        {["↗ Send", "↙ Receive", "⇅ Swap", "＋ Buy"].map((a) => (
          <span key={a}>{a}</span>
        ))}
      </div>
      {[
        ["Ξ", "Ethereum", "2.40 ETH", "+$8,412"],
        ["◎", "Solana", "48.2 SOL", "+$6,104"],
        ["₮", "USDT", "1,850.00", "$1,850"],
      ].map((r) => (
        <div key={r[1]} className="ph-row">
          <span className="ic">{r[0]}</span>
          <div>
            <b>{r[1]}</b>
            <small>{r[2]}</small>
          </div>
          <em>{r[3]}</em>
        </div>
      ))}
    </div>
  );
}

function ExtensionPopup() {
  return (
    <div className="bc-spot-ext">
      <div className="ext-chrome">
        <div className="chrome-bar">
          <span className="dot r" />
          <span className="dot y" />
          <span className="dot g" />
          <div className="chrome-url">🔒 app.uniswap.org</div>
          <div className="ext-icon">🦊</div>
        </div>
        <div className="ext-page">
          <div className="dapp-ghost">
            <div className="gh-line w40" />
            <div className="gh-line w70" />
            <div className="gh-box" />
          </div>
          <div className="ext-popup">
            <div className="ext-pop-h">
              <b>ONL Wallet</b>
              <span>Ethereum</span>
            </div>
            <div className="ext-acc">Account 1 · 0x4f8A…9aB3</div>
            <div className="ext-req">
              <small>Signature request</small>
              <p>Swap 0.50 ETH → 1,842 USDC on Uniswap</p>
              <div className="sim">
                <span>✓ Simulation passed</span>
                <span>Gas ≈ $1.84</span>
              </div>
            </div>
            <div className="ext-btns">
              <span className="ghost">Reject</span>
              <span className="ok">Confirm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Spotlight({ id, eyebrow, title, lead, points, flip, cta, visual }) {
  return (
    <section id={id} className={`bc-spot ${flip ? "flip" : ""}`}>
      <div className="bc-spot-inner">
        <div className="bc-spot-copy">
          <span className="bc-spot-eye">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{lead}</p>
          <ul>
            {points.map((p) => (
              <li key={p.title}>
                <span className="chk">✓</span>
                <div>
                  <strong>{p.title}</strong>
                  <span>{p.desc}</span>
                </div>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="bclean-btn-dark">
            {cta}
          </Link>
        </div>
        <div className="bc-spot-visual">{visual}</div>
      </div>
    </section>
  );
}

export default function BlockchainSpotlights() {
  return (
    <>
      <Spotlight
        id="exchange"
        eyebrow="Service Spotlight · Exchange Development"
        title="Crypto Exchange Development"
        lead="We design and ship centralized and decentralized exchanges — matching engines, custody, KYC, liquidity and a trading UI your users will actually trust."
        points={exchangePoints}
        cta="Scope an exchange →"
        visual={<ExchangeMockup />}
      />
      <Spotlight
        id="wallet"
        eyebrow="Service Spotlight · Web3 Wallet Development"
        title="Web3 Wallet Development"
        lead="Custodial, non-custodial and MPC wallets for web and mobile — multi-chain portfolios, passkeys, social recovery and fiat ramps, engineered for real users."
        points={walletPoints}
        flip
        cta="Scope a wallet →"
        visual={<WalletPhone />}
      />
      <Spotlight
        id="wallet-extension"
        eyebrow="Service Spotlight · Browser Extension"
        title="Web3 Wallet Extension Development"
        lead="Chrome, Firefox, Brave and Edge extensions that inject into every dApp — transaction simulation, hardware-wallet pairing and a popup UX that feels native."
        points={extensionPoints}
        cta="Scope an extension →"
        visual={<ExtensionPopup />}
      />

      <style>{`
        .bc-spot {
          background: #ffffff;
          padding: 96px 24px;
          border-bottom: 1px solid #f1f5f9;
        }
        .bc-spot:nth-of-type(even), .bc-spot.flip {
          background: #f8fafc;
        }
        .bc-spot-inner {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: 56px;
          align-items: center;
        }
        .bc-spot.flip .bc-spot-inner { grid-template-columns: 1.05fr 1fr; }
        .bc-spot.flip .bc-spot-copy { order: 2; }
        .bc-spot.flip .bc-spot-visual { order: 1; }
        .bc-spot-eye {
          display: inline-block;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          color: ${PRIMARY};
          background: rgba(37,99,235,0.08);
          padding: 6px 14px;
          border-radius: 99px;
          margin-bottom: 16px;
        }
        .bc-spot-copy h2 {
          font-size: clamp(28px, 3.4vw, 40px);
          font-weight: 900;
          color: #0f172a;
          letter-spacing: -1.2px;
          line-height: 1.15;
          margin: 0 0 14px;
        }
        .bc-spot-copy > p {
          font-size: 15.5px;
          color: #475569;
          line-height: 1.7;
          font-weight: 500;
          margin: 0 0 26px;
        }
        .bc-spot-copy ul {
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .bc-spot-copy li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .bc-spot-copy .chk {
          width: 26px; height: 26px; border-radius: 8px;
          background: #ecfdf5; color: #059669; font-weight: 900;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; font-size: 13px; margin-top: 1px;
        }
        .bc-spot-copy li strong {
          display: block; font-size: 14.5px; color: #0f172a; font-weight: 800; margin-bottom: 3px;
        }
        .bc-spot-copy li span:last-child {
          font-size: 13px; color: #64748b; line-height: 1.55;
        }

        /* Exchange mockup */
        .bc-spot-desk {
          background: #fff;
          border: 1.5px solid #e2e8f0;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 24px 50px rgba(15,23,42,0.08);
        }
        .bc-spot-desk-bar {
          height: 32px; background: #f1f5f9; display: flex; align-items: center;
          padding: 0 12px; gap: 6px; border-bottom: 1px solid #e5e7eb;
        }
        .dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
        .dot.r { background: #ef4444; } .dot.y { background: #f59e0b; } .dot.g { background: #10b981; }
        .bc-spot-url {
          margin: 0 auto; background: #fff; color: #94a3b8; font-size: 10px;
          padding: 3px 28px; border-radius: 6px;
        }
        .bc-spot-desk-body { background: #fafafa; }
        .bc-spot-ex-nav {
          display: flex; align-items: center; gap: 14px; padding: 8px 12px;
          background: #fff; border-bottom: 1px solid #eee; font-size: 10px; color: #64748b; font-weight: 600;
        }
        .bc-spot-ex-nav strong { color: #0f172a; font-size: 11px; }
        .bc-spot-ex-nav button {
          margin-left: auto; background: ${PRIMARY}; color: #fff; border: none;
          border-radius: 99px; padding: 4px 10px; font-size: 9px; font-weight: 800;
        }
        .bc-spot-ex-grid { display: grid; grid-template-columns: 130px 1fr 110px; min-height: 260px; }
        .bc-spot-ex-left { background: #fff; border-right: 1px solid #eee; padding: 12px; }
        .bc-spot-ex-left .pair { display: flex; gap: 8px; align-items: center; margin-bottom: 10px; }
        .bc-spot-ex-left .coin {
          width: 22px; height: 22px; border-radius: 50%; background: #3b82f6; color: #fff;
          display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 800;
        }
        .bc-spot-ex-left b { display: block; font-size: 11px; color: #0f172a; }
        .bc-spot-ex-left small { font-size: 8px; color: #94a3b8; }
        .bc-spot-ex-left .price { font-size: 18px; font-weight: 900; color: #0f172a; }
        .bc-spot-ex-left .usd { display: block; margin-bottom: 10px; }
        .buy-card { background: #f8fafc; border-radius: 10px; padding: 8px; }
        .buy-card .tabs { display: flex; background: #e5e7eb; border-radius: 99px; padding: 2px; margin-bottom: 8px; }
        .buy-card .tabs span { flex: 1; text-align: center; font-size: 8px; font-weight: 700; padding: 3px; color: #64748b; }
        .buy-card .tabs .on { background: #fff; color: ${PRIMARY}; border-radius: 99px; }
        .buy-card .inp { display: flex; justify-content: space-between; background: #fff; border: 1px solid #e5e7eb; border-radius: 6px; padding: 4px 6px; font-size: 8px; color: #94a3b8; margin-bottom: 6px; }
        .buy-card .inp b { color: #0f172a; }
        .buy-card .buy { width: 100%; background: ${PRIMARY}; color: #fff; border: none; border-radius: 99px; padding: 6px; font-size: 9px; font-weight: 800; }
        .bc-spot-ex-mid { background: #fff; border-right: 1px solid #eee; display: flex; flex-direction: column; }
        .bc-spot-ex-mid .stats { display: flex; gap: 16px; padding: 8px 12px; border-bottom: 1px solid #eee; }
        .bc-spot-ex-mid .stats b { display: block; font-size: 10px; color: #0f172a; }
        .bc-spot-ex-mid .stats .up { color: #10b981; } .bc-spot-ex-mid .stats .dn { color: #ef4444; }
        .bc-spot-ex-mid .stats small { font-size: 8px; color: #94a3b8; }
        .candles { flex: 1; display: flex; align-items: flex-end; gap: 5px; padding: 16px 12px; }
        .candles span { width: 5px; border-radius: 1px; position: relative; }
        .candles span::before { content: ""; position: absolute; left: 2px; top: -20%; height: 140%; width: 1px; background: inherit; }
        .candles .grn { background: #10b981; } .candles .red { background: #ef4444; }
        .bc-spot-ex-right { background: #fff; padding: 10px; font-family: ui-monospace, monospace; }
        .ob-h { display: flex; justify-content: space-between; font-size: 8px; color: #94a3b8; font-weight: 700; margin-bottom: 8px; }
        .ob-r { display: flex; justify-content: space-between; font-size: 9px; color: #64748b; margin-bottom: 5px; }
        .ob-r .dn { color: #ef4444; font-weight: 700; } .ob-r .up { color: #10b981; font-weight: 700; }

        /* Wallet phone */
        .bc-spot-phone {
          width: 280px; margin: 0 auto; background: #0f172a; color: #fff;
          border-radius: 32px; padding: 22px 16px 18px; border: 8px solid #1e293b;
          box-shadow: 0 28px 60px rgba(15,23,42,0.25); position: relative;
        }
        .bc-spot-phone .notch {
          width: 90px; height: 16px; background: #1e293b; border-radius: 0 0 12px 12px;
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
        }
        .ph-top { display: flex; justify-content: space-between; align-items: center; margin: 10px 0 14px; }
        .ph-top small { display: block; font-size: 10px; color: #94a3b8; }
        .ph-top b { font-size: 16px; }
        .ph-top .pill { font-size: 9px; background: #1e293b; padding: 4px 8px; border-radius: 99px; color: #93c5fd; font-weight: 700; }
        .ph-bal {
          background: linear-gradient(135deg, #1e3a8a, ${PRIMARY});
          border-radius: 16px; padding: 16px; margin-bottom: 12px;
        }
        .ph-bal small { font-size: 10px; color: #bfdbfe; font-weight: 700; }
        .ph-bal strong { display: block; font-size: 26px; letter-spacing: -0.5px; margin: 4px 0; }
        .ph-bal em { font-style: normal; font-size: 10px; background: rgba(255,255,255,0.16); padding: 3px 8px; border-radius: 6px; font-weight: 800; }
        .ph-acts { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-bottom: 14px; }
        .ph-acts span { text-align: center; background: #1e293b; border: 1px solid #334155; border-radius: 10px; padding: 8px 0; font-size: 9px; font-weight: 800; }
        .ph-row { display: flex; align-items: center; gap: 10px; background: #111827; border: 1px solid #1f2937; border-radius: 12px; padding: 9px 10px; margin-bottom: 8px; }
        .ph-row .ic { width: 28px; height: 28px; border-radius: 50%; background: #1e3a8a; display: flex; align-items: center; justify-content: center; font-weight: 800; }
        .ph-row b { display: block; font-size: 12px; } .ph-row small { font-size: 10px; color: #94a3b8; }
        .ph-row em { margin-left: auto; font-style: normal; font-size: 11px; font-weight: 800; color: #34d399; }

        /* Extension */
        .bc-spot-ext { position: relative; }
        .ext-chrome {
          background: #fff; border: 1.5px solid #e2e8f0; border-radius: 16px; overflow: hidden;
          box-shadow: 0 24px 50px rgba(15,23,42,0.08);
        }
        .chrome-bar {
          display: flex; align-items: center; gap: 6px; padding: 10px 12px; background: #f1f5f9; border-bottom: 1px solid #e5e7eb;
        }
        .chrome-url { flex: 1; background: #fff; color: #64748b; font-size: 11px; padding: 5px 12px; border-radius: 8px; }
        .ext-icon { font-size: 18px; }
        .ext-page { position: relative; min-height: 320px; background: #f8fafc; padding: 24px; }
        .dapp-ghost { max-width: 280px; }
        .gh-line { height: 10px; background: #e2e8f0; border-radius: 6px; margin-bottom: 10px; }
        .gh-line.w40 { width: 40%; } .gh-line.w70 { width: 70%; }
        .gh-box { height: 140px; background: #e2e8f0; border-radius: 12px; }
        .ext-popup {
          position: absolute; right: 18px; top: 18px; width: 240px; background: #0f172a; color: #fff;
          border-radius: 16px; padding: 16px; box-shadow: 0 20px 40px rgba(15,23,42,0.35); border: 1px solid #1e293b;
        }
        .ext-pop-h { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
        .ext-pop-h span { font-size: 10px; background: #1e293b; padding: 3px 8px; border-radius: 99px; color: #93c5fd; font-weight: 700; }
        .ext-acc { font-size: 11px; color: #94a3b8; margin-bottom: 12px; }
        .ext-req { background: #111827; border: 1px solid #1f2937; border-radius: 12px; padding: 12px; margin-bottom: 12px; }
        .ext-req small { font-size: 10px; color: #94a3b8; font-weight: 700; text-transform: uppercase; letter-spacing: 0.4px; }
        .ext-req p { font-size: 12.5px; font-weight: 700; margin: 6px 0 10px; line-height: 1.4; }
        .sim { display: flex; justify-content: space-between; font-size: 10px; color: #34d399; font-weight: 700; }
        .ext-btns { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
        .ext-btns span { text-align: center; padding: 8px; border-radius: 10px; font-size: 12px; font-weight: 800; }
        .ext-btns .ghost { background: #1e293b; color: #e2e8f0; }
        .ext-btns .ok { background: ${PRIMARY}; color: #fff; }

        @media (max-width: 1024px) {
          .bc-spot-inner, .bc-spot.flip .bc-spot-inner { grid-template-columns: 1fr !important; }
          .bc-spot.flip .bc-spot-copy, .bc-spot.flip .bc-spot-visual { order: unset; }
        }
        @media (max-width: 640px) {
          .bc-spot-ex-grid { grid-template-columns: 1fr; }
          .bc-spot-ex-right { display: none; }
        }
      `}</style>
    </>
  );
}
