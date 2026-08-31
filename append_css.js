const fs = require('fs');
const path = require('path');

const cssContent = `
/* --- Hero Mockups CSS --- */
.mockup-container {
  width: 100%;
  height: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  font-family: var(--font-sans);
  color: #0f172a;
}

/* 1. Web Dev Mockup */
.mockup-web {
  display: flex;
  height: 100%;
}
.mockup-web-sidebar {
  width: 25%;
  background: #1e293b;
  border-right: 1px solid #334155;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.mockup-web-main {
  flex: 1;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
}
.mockup-web-header {
  height: 40px;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 8px;
}
.mockup-web-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.mockup-web-body {
  padding: 24px;
}
.mockup-line {
  height: 8px;
  background: #334155;
  border-radius: 4px;
  margin-bottom: 8px;
}
.mockup-line.light {
  background: #e2e8f0;
}
.mockup-web-hero {
  background: linear-gradient(135deg, #38bdf8, #818cf8);
  height: 120px;
  border-radius: 8px;
  margin-bottom: 16px;
}
.mockup-web-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
}
.mockup-web-card {
  height: 80px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
}

/* 2. AI Mockup */
.mockup-ai {
  background: #0f172a;
  height: 100%;
  color: #f8fafc;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.mockup-ai-chat {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.mockup-ai-msg {
  max-width: 80%;
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 12px;
}
.mockup-ai-msg.user {
  align-self: flex-end;
  background: #3b82f6;
}
.mockup-ai-msg.bot {
  align-self: flex-start;
  background: #1e293b;
  border: 1px solid #334155;
}
.mockup-ai-input {
  height: 48px;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 24px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  margin-top: auto;
}
.mockup-ai-line {
  height: 6px;
  background: rgba(255,255,255,0.2);
  border-radius: 3px;
  margin-bottom: 6px;
}

/* 3. Mobile Mockup */
.mockup-mobile {
  background: #f1f5f9;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mockup-mobile-device {
  width: 240px;
  height: 480px;
  background: #ffffff;
  border-radius: 36px;
  border: 10px solid #0f172a;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  transform: scale(0.9);
}
.mockup-mobile-notch {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 90px;
  height: 20px;
  background: #0f172a;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}
.mockup-mobile-header {
  background: linear-gradient(135deg, #ec4899, #8b5cf6);
  height: 140px;
  padding: 40px 20px 20px;
  color: white;
}
.mockup-mobile-body {
  padding: 20px;
  flex: 1;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.mockup-mobile-card {
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

/* 4. Blockchain Mockup */
.mockup-crypto {
  background: #0f172a;
  height: 100%;
  color: #ffffff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.mockup-crypto-balance {
  font-size: 32px;
  font-weight: 700;
  color: #10b981;
}
.mockup-crypto-chart {
  height: 140px;
  background: linear-gradient(to top, rgba(16,185,129,0.15), transparent);
  border-bottom: 2px solid #10b981;
  position: relative;
  border-radius: 8px 8px 0 0;
}
.mockup-crypto-actions {
  display: flex;
  gap: 12px;
}
.mockup-crypto-btn {
  flex: 1;
  height: 48px;
  background: #1e293b;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid #334155;
}

/* 5. Custom Software Mockup */
.mockup-dashboard {
  background: #f8fafc;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.mockup-dash-metrics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.mockup-dash-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.02);
}
.mockup-dash-chart-area {
  flex: 1;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.02);
  display: flex;
  align-items: flex-end;
  gap: 12px;
}

/* 6. Marketing Mockup */
.mockup-marketing {
  background: #ffffff;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.mockup-mkt-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mockup-mkt-bars {
  display: flex;
  align-items: flex-end;
  gap: 12px;
  height: 180px;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 8px;
}
.mockup-mkt-bar {
  flex: 1;
  background: linear-gradient(to top, #6366f1, #a855f7);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.mockup-mkt-stats {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}
.mockup-mkt-stat-box {
  background: #f8fafc;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #f1f5f9;
}
`;

fs.appendFileSync(path.join(__dirname, 'app', 'globals.css'), cssContent);
console.log('CSS appended successfully');
