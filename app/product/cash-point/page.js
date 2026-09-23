import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "NinteenPay Cash Point | OneNine Labs",
  description: "NinteenPay Cash Point is a multi-merchant payment system for QR payments, DMT, AEPS, Aadhaar Pay, cash deposit and payout services.",
};

export default function CashPointPage() {
  return (
    <>
      <Header variant="light" />
      <main className="cash-point-page">
        <section className="cash-point-hero">
          <div className="cash-point-hero-copy">
            <span className="cash-point-eyebrow">NINTEENPAY • DIGITAL PAYMENTS</span>
            <h1>NinteenPay <span>Cash Point</span></h1>
            <p className="cash-point-lead">
              One powerful, multi-merchant payment system for retailers, agents and businesses. Accept payments, move money and manage assisted banking services from a single, secure platform.
            </p>
            <div className="cash-point-actions">
              <Link href="/contact" className="cash-point-cta">Talk to our team <span>→</span></Link>
              <Link href="#cash-point-services" className="cash-point-secondary">Explore services</Link>
            </div>
            <div className="cash-point-trust-row">
              <span>✓ Merchant-ready</span>
              <span>✓ Secure transactions</span>
              <span>✓ One unified dashboard</span>
            </div>
          </div>

          <div className="cash-point-hero-visual" aria-label="NinteenPay Cash Point payment services preview">
            <div className="cash-point-dashboard-toolbar">
              <span className="cash-point-dashboard-brand"><i></i> NinteenPay analytics</span>
              <span className="cash-point-dashboard-period">This year⌄</span>
            </div>
            <div className="cash-point-dashboard-legend">
              <span><i className="legend-revenue"></i>Revenue</span>
              <span><i className="legend-expenses"></i>Expenses</span>
              <span><i className="legend-profit"></i>Profit</span>
              <span><i className="legend-profit-percent"></i>Profit %</span>
            </div>
            <div className="cash-point-dashboard-chart">
              <div className="cash-point-chart-y-axis"><span>₹20,000</span><span>₹15,000</span><span>₹10,000</span><span>₹5,000</span><span>₹0</span></div>
              <div className="cash-point-chart-area">
                <div className="cash-point-grid-lines"><i></i><i></i><i></i><i></i><i></i></div>
                <div className="cash-point-chart-bars"><b style={{ height: "37%" }}></b><b style={{ height: "55%" }}></b><b style={{ height: "42%" }}></b><b style={{ height: "70%" }}></b><b style={{ height: "60%" }}></b><b style={{ height: "88%" }}></b><b style={{ height: "72%" }}></b></div>
                <div className="cash-point-chart-line cash-point-blue-line"></div>
                <div className="cash-point-chart-line cash-point-orange-line"></div>
                <div className="cash-point-chart-months"><span>Month 1</span><span>Month 3</span><span>Month 5</span><span>Month 7</span><span>Month 9</span><span>Month 11</span></div>
              </div>
            </div>
            <div className="cash-point-dashboard-bottom">
              <div className="cash-point-mini-card">
                <div className="cash-point-mini-tabs"><b>Profit &amp; Loss</b><span>Balance Sheet</span><span>Cash Flow</span></div>
                <div className="cash-point-mini-value">₹1,02,096 <small>↗ 4.6%</small></div>
                <label>Monthly Net Profit</label>
                <div className="cash-point-mini-area"><div></div></div>
                <div className="cash-point-mini-months"><span>Nov</span><span>Feb</span><span>May</span><span>Aug</span><span>Oct</span></div>
              </div>
              <div className="cash-point-mini-card cash-point-stream-card">
                <div className="cash-point-mini-tabs"><b>Revenue Streams</b><span>Expense Categories</span></div>
                <div className="cash-point-donut-wrap"><div className="cash-point-donut"><strong>Total<br /><b>₹86K</b></strong></div><ul><li><span><i></i>QR Collections</span><b>₹35K</b></li><li><span><i></i>DMT Services</span><b>₹12K</b></li><li><span><i></i>AEPS &amp; Aadhaar</span><b>₹21K</b></li><li><span><i></i>Merchant Payouts</span><b>₹13K</b></li></ul></div>
              </div>
            </div>
          </div>
        </section>

        <section className="cash-point-services-section" id="payment-services">
          <div className="cash-point-section-heading">
            <span className="cash-point-eyebrow">ONE PLATFORM • MANY POSSIBILITIES</span>
            <h2>Our payment services</h2>
            <p>Give every merchant a simple way to collect, transfer, deposit and pay out money while your team manages the complete operation from one place.</p>
          </div>

          <div className="cash-point-services-list">
            <article className="cash-point-service-card cash-point-service-card-featured">
              <span className="cash-point-card-number">01</span>
              <div className="cash-point-card-icon">⌁</div>
              <h3>QR Payment</h3>
              <p>Accept fast, convenient digital payments through merchant QR codes and keep every collection visible in real time.</p>
              <span className="cash-point-card-link">Quick collections <b>↗</b></span>
            </article>
            <article className="cash-point-service-card">
              <span className="cash-point-card-number">02</span>
              <div className="cash-point-card-icon">↔</div>
              <h3>Domestic Money Transfer</h3>
              <p>Help customers send money securely with a streamlined DMT experience for assisted and agent-led transactions.</p>
              <span className="cash-point-card-link">Reliable transfers <b>↗</b></span>
            </article>
            <article className="cash-point-service-card">
              <span className="cash-point-card-number">03</span>
              <div className="cash-point-card-icon">◉</div>
              <h3>AEPS</h3>
              <p>Enable Aadhaar-enabled banking services through a trusted agent network with clear transaction tracking.</p>
              <span className="cash-point-card-link">Assisted banking <b>↗</b></span>
            </article>
            <article className="cash-point-service-card">
              <span className="cash-point-card-number">04</span>
              <div className="cash-point-card-icon">₹</div>
              <h3>Aadhaar Pay</h3>
              <p>Make secure, assisted payments using Aadhaar authentication for customers who prefer convenient local access.</p>
              <span className="cash-point-card-link">Simple verification <b>↗</b></span>
            </article>
            <article className="cash-point-service-card">
              <span className="cash-point-card-number">05</span>
              <div className="cash-point-card-icon">＋</div>
              <h3>Cash Deposit</h3>
              <p>Support agent-assisted cash deposits with a transparent record of every customer, amount and settlement.</p>
              <span className="cash-point-card-link">Clear settlements <b>↗</b></span>
            </article>
            <article className="cash-point-service-card">
              <span className="cash-point-card-number">06</span>
              <div className="cash-point-card-icon">↗</div>
              <h3>Payout Services</h3>
              <p>Send business payouts with dependable controls, status visibility and a workflow designed for daily operations.</p>
              <span className="cash-point-card-link">Business-ready payouts <b>↗</b></span>
            </article>
          </div>
        </section>

        <section className="cash-point-operations-section">
          <div>
            <span className="cash-point-eyebrow">BUILT FOR EVERYDAY OPERATIONS</span>
            <h2>One dashboard for your payment network.</h2>
          </div>
          <div className="cash-point-operations-copy">
            <p>From a neighborhood retailer to a growing merchant network, NinteenPay Cash Point keeps payment services easy to launch, simple to monitor and ready to scale.</p>
            <Link href="/contact" className="cash-point-cta">Start a conversation <span>→</span></Link>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .cash-point-page { min-height: 70vh; }
        .cash-point-hero {
          min-height: 760px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(360px, 500px);
          align-items: center;
          gap: clamp(40px, 7vw, 110px);
          max-width: 1240px;
          margin: 0 auto;
          padding: 150px 32px 100px;
          text-align: left;
        }
        .cash-point-hero::before {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          left: -160px;
          top: 120px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.16);
          filter: blur(40px);
        }
        .cash-point-hero-copy { position: relative; z-index: 1; }
        .cash-point-eyebrow {
          display: inline-flex;
          padding: 8px 12px;
          border: 1px solid #a7f3d0;
          border-radius: 999px;
          background: rgba(236, 253, 245, 0.8);
          color: #047857;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.4px;
        }
        .cash-point-hero h1 {
          margin: 22px 0 24px;
          color: #0f172a;
          font-size: clamp(44px, 6vw, 78px);
          line-height: 1.02;
          letter-spacing: -2px;
        }
        .cash-point-hero h1 span { color: #059669; }
        .cash-point-lead {
          max-width: 620px;
          margin: 0;
          color: #475569;
          font-size: clamp(16px, 2vw, 19px);
          line-height: 1.7;
        }
        .cash-point-actions {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
          margin-top: 34px;
        }
        .cash-point-cta, .cash-point-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          min-height: 48px;
          padding: 13px 22px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
        }
        .cash-point-cta { background: #0f172a; color: #fff; }
        .cash-point-cta span { color: #6ee7b7; font-size: 20px; }
        .cash-point-secondary { border: 1px solid #cbd5e1; color: #334155; background: rgba(255,255,255,0.65); }
        .cash-point-trust-row {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          margin-top: 30px;
          color: #64748b;
          font-size: 12px;
          font-weight: 600;
        }
        .cash-point-hero-visual { position: relative; z-index: 1; min-width: 0; padding: 18px; border: 1px solid #e2e8f0; border-radius: 18px; background: #fff; box-shadow: 0 24px 70px rgba(15, 23, 42, 0.13); }
        .cash-point-dashboard-toolbar, .cash-point-dashboard-legend, .cash-point-mini-tabs, .cash-point-donut-wrap { display: flex; align-items: center; }
        .cash-point-dashboard-toolbar { justify-content: space-between; margin-bottom: 14px; color: #1e293b; font-size: 10px; font-weight: 800; }
        .cash-point-dashboard-brand i { display: inline-block; width: 7px; height: 7px; margin-right: 5px; border-radius: 2px; background: #10b981; }
        .cash-point-dashboard-period { padding: 5px 8px; border: 1px solid #e2e8f0; border-radius: 5px; color: #64748b; font-size: 10px; font-weight: 600; }
        .cash-point-dashboard-legend { gap: 9px; flex-wrap: wrap; margin-bottom: 8px; color: #64748b; font-size: 9px; font-weight: 600; }
        .cash-point-dashboard-legend i { display: inline-block; width: 7px; height: 7px; margin-right: 3px; border-radius: 2px; }
        .legend-revenue { background: #10b981; }.legend-expenses { background: #ec4899; }.legend-profit { border: 1px solid #3b82f6; border-radius: 50% !important; }.legend-profit-percent { border: 1px solid #f59e0b; border-radius: 50% !important; }
        .cash-point-dashboard-chart { display: flex; height: 165px; padding-top: 7px; }
        .cash-point-chart-y-axis { display: flex; flex-direction: column; justify-content: space-between; width: 52px; padding-bottom: 22px; color: #64748b; font-size: 8px; }
        .cash-point-chart-area { position: relative; flex: 1; min-width: 0; border-bottom: 1px solid #e2e8f0; }
        .cash-point-grid-lines { position: absolute; inset: 0 0 22px; display: flex; flex-direction: column; justify-content: space-between; }
        .cash-point-grid-lines i { display: block; border-top: 1px dashed #e2e8f0; }
        .cash-point-chart-bars { position: absolute; right: 2%; bottom: 22px; left: 2%; display: flex; align-items: end; justify-content: space-around; height: calc(100% - 22px); }
        .cash-point-chart-bars b { width: 12px; max-width: 9%; border-radius: 3px 3px 0 0; background: linear-gradient(#10b981, #a7f3d0); }
        .cash-point-chart-bars b:nth-child(6) { background: linear-gradient(#ec4899, #f9a8d4); }
        .cash-point-chart-line { position: absolute; right: 1%; bottom: 43px; left: 1%; height: 42px; border-top: 2px solid #3b82f6; border-radius: 50% 45% 0 0; transform: skewY(-8deg) rotate(-3deg); }
        .cash-point-orange-line { bottom: 60px; height: 20px; border-color: #f59e0b; transform: skewY(-10deg) rotate(-2deg); }
        .cash-point-chart-months, .cash-point-mini-months { position: absolute; right: 0; bottom: 4px; left: 0; display: flex; justify-content: space-between; color: #64748b; font-size: 8px; }
        .cash-point-dashboard-bottom { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 12px; }
        .cash-point-mini-card { min-width: 0; overflow: hidden; border: 1px solid #e2e8f0; border-radius: 10px; background: #fff; }
        .cash-point-mini-tabs { gap: 13px; overflow: hidden; padding: 10px 10px 8px; border-bottom: 1px solid #f1f5f9; white-space: nowrap; color: #64748b; font-size: 9px; }
        .cash-point-mini-tabs b { padding-bottom: 7px; border-bottom: 2px solid #0f172a; color: #0f172a; }
        .cash-point-mini-value { margin: 12px 10px 2px; color: #0f172a; font-size: 16px; font-weight: 800; }
        .cash-point-mini-value small { padding: 2px 4px; border-radius: 3px; background: #ecfdf5; color: #10b981; font-size: 8px; }
        .cash-point-mini-card label { margin: 0 10px; color: #64748b; font-size: 8px; }
        .cash-point-mini-area { position: relative; height: 54px; margin: 8px 10px 0; overflow: hidden; background: repeating-linear-gradient(to bottom, transparent 0, transparent 17px, #f1f5f9 18px); }
        .cash-point-mini-area div { position: absolute; right: -5%; bottom: 8px; left: -5%; height: 34px; border-top: 1.5px solid #3b82f6; background: linear-gradient(170deg, transparent 45%, rgba(59,130,246,0.14)); transform: skewY(-10deg); }
        .cash-point-mini-months { position: static; padding: 0 10px 8px; font-size: 8px; }
        .cash-point-donut-wrap { gap: 8px; padding: 14px 8px; }
        .cash-point-donut { display: grid; place-items: center; width: 75px; height: 75px; flex: 0 0 75px; border: 14px solid #8b83ed; border-right-color: #f4bd5b; border-bottom-color: #8bc8ea; border-radius: 50%; text-align: center; color: #64748b; font-size: 8px; }
        .cash-point-donut strong { font-weight: 600; }.cash-point-donut b { color: #0f172a; font-size: 12px; }
        .cash-point-donut-wrap ul { flex: 1; min-width: 0; margin: 0; padding: 0; list-style: none; color: #475569; font-size: 8px; line-height: 1.9; }
        .cash-point-donut-wrap li { display: flex; align-items: center; justify-content: space-between; gap: 5px; }.cash-point-donut-wrap li span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }.cash-point-donut-wrap li i { display: inline-block; width: 6px; height: 6px; margin-right: 3px; border-radius: 2px; background: #8b83ed; }.cash-point-donut-wrap li:nth-child(2) i { background: #e26645; }.cash-point-donut-wrap li:nth-child(3) i { background: #8bc8ea; }.cash-point-donut-wrap li:nth-child(4) i { background: #f4bd5b; }.cash-point-donut-wrap li b { flex-shrink: 0; font-weight: 700; }
        .cash-point-services-section { max-width: 1240px; margin: 0 auto; padding: 96px 32px 110px; }
        .cash-point-section-heading { max-width: 650px; margin-bottom: 42px; }
        .cash-point-section-heading h2, .cash-point-operations-section h2 { margin: 18px 0 14px; color: #0f172a; font-size: clamp(34px, 4.5vw, 56px); line-height: 1.08; letter-spacing: -1.5px; }
        .cash-point-section-heading p, .cash-point-operations-copy p { margin: 0; color: #64748b; font-size: 16px; line-height: 1.7; }
        .cash-point-services-list { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
        .cash-point-service-card { position: relative; min-height: 270px; padding: 26px; border: 1px solid #e2e8f0; border-radius: 18px; background: rgba(255,255,255,0.82); box-shadow: 0 12px 30px rgba(15,23,42,0.04); }
        .cash-point-service-card-featured { border-color: #86efac; background: linear-gradient(145deg, #ecfdf5, #ffffff); }
        .cash-point-card-number { position: absolute; top: 24px; right: 24px; color: #94a3b8; font-size: 11px; font-weight: 800; }
        .cash-point-card-icon { display: grid; place-items: center; width: 42px; height: 42px; margin-bottom: 28px; border-radius: 12px; background: #d1fae5; color: #047857; font-size: 22px; font-weight: 800; }
        .cash-point-service-card h3 { margin: 0 0 10px; color: #0f172a; font-size: 19px; line-height: 1.25; }
        .cash-point-service-card p { min-height: 78px; margin: 0; color: #64748b; font-size: 13px; line-height: 1.6; }
        .cash-point-card-link { display: flex; align-items: center; justify-content: space-between; margin-top: 22px; color: #047857; font-size: 12px; font-weight: 800; }
        .cash-point-card-link b { font-size: 17px; }
        .cash-point-operations-section { display: grid; grid-template-columns: minmax(0, 1fr) minmax(280px, 460px); gap: 60px; align-items: end; max-width: 1240px; margin: 0 auto; padding: 88px 32px 110px; border-top: 1px solid #e2e8f0; }
        .cash-point-operations-section h2 { max-width: 600px; margin-bottom: 0; }
        .cash-point-operations-copy p { margin-bottom: 26px; }
        @media (max-width: 800px) {
          .cash-point-hero { grid-template-columns: 1fr; min-height: auto; gap: 46px; padding: 130px 20px 70px; }
          .cash-point-hero h1 { letter-spacing: -1.5px; }
          .cash-point-hero-visual { max-width: 520px; width: 100%; margin: 0 auto; }
          .cash-point-services-section { padding: 70px 20px 80px; }
          .cash-point-services-list { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .cash-point-operations-section { grid-template-columns: 1fr; gap: 28px; padding: 70px 20px 80px; }
        }
        @media (max-width: 600px) {
          .cash-point-hero { padding-top: 120px; }
          .cash-point-hero h1 { font-size: clamp(40px, 13vw, 58px); }
          .cash-point-lead { font-size: 15px; }
          .cash-point-trust-row { gap: 9px 14px; font-size: 11px; }
          .cash-point-hero-visual { padding: 18px; border-radius: 18px; }
          .cash-point-balance { font-size: 25px; }
          .cash-point-service-grid { gap: 7px; }
          .cash-point-service-grid > div { padding: 8px; }
          .cash-point-service-grid small { font-size: 8px; }
          .cash-point-dashboard-bottom { grid-template-columns: 1fr; }
          .cash-point-dashboard-chart { height: 175px; }
          .cash-point-section-heading h2, .cash-point-operations-section h2 { font-size: 34px; }
          .cash-point-services-list { grid-template-columns: 1fr; }
          .cash-point-service-card { min-height: 0; padding: 22px; }
          .cash-point-service-card p { min-height: 0; }
        }
      `}</style>
    </>
  );
}
