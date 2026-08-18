/* Shared Service Page Premium Styles — Aurora Modern Design System (vd-* prefix) */
/* Import in each service page via <style>{servicePageStyles(primaryColor, gradFrom, gradTo, glowRgba)}</style> */

export const servicePageStyles = (primaryColor = "#2563eb", gradFrom = "#1e3a8a", gradTo = "#2563eb", glowRgba = "rgba(37,99,235,0.3)") => `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap');

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(30px); }
    to { opacity: 1; transform: translateX(0); }
  }

  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }

  @keyframes shimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
  }

  .vd-wrap {
    background-color: #ffffff;
    color: #0f172a;
    min-height: 100vh;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }
  /* ── 2. WELCOME SECTION (ASYMMETRIC GEOMETRIC PILL GRID UI) ── */
  .ws-section {
    background: #ffffff;
    padding: 60px 24px 15px;
    border-bottom: 1px solid #f1f5f9;
  }
  .ws-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 540px;
    gap: 60px;
    align-items: center;
  }

  .ws-left {
    display: flex;
    flex-direction: column;
  }
  .ws-badge {
    font-size: 12.5px;
    font-weight: 800;
    letter-spacing: 1.5px;
    color: #0d3b2e;
    text-transform: uppercase;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .ws-badge-dash {
    font-size: 18px;
    font-weight: 900;
    color: #0d3b2e;
  }
  .ws-title {
    font-size: clamp(34px, 4.5vw, 56px);
    font-weight: 900;
    line-height: 1.08;
    color: #0f172a;
    letter-spacing: -1.5px;
    margin-bottom: 24px;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
  .ws-title-italic {
    font-style: italic;
    font-weight: 800;
    color: #0f172a;
    font-family: Georgia, serif;
  }
  .ws-desc {
    font-size: 16px;
    color: #475569;
    line-height: 1.75;
    max-width: 480px;
    margin-bottom: 36px;
  }

  .ws-actions-row {
    display: flex;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
  }
  .ws-btn-dark {
    background: #0d3b2e;
    color: #ffffff !important;
    padding: 16px 36px;
    border-radius: 99px;
    font-weight: 800;
    font-size: 15px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 12px 30px rgba(13, 59, 46, 0.25);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .ws-btn-dark:hover {
    background: #145946;
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 18px 40px rgba(13, 59, 46, 0.35);
  }

  .ws-reviews-block {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .ws-avatars-row { display: flex; }
  .ws-avatar {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #e2e8f0;
    border: 2px solid #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    margin-left: -10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.06);
  }
  .ws-avatar:first-child { margin-left: 0; }
  .ws-stars-info { display: flex; flex-direction: column; }
  .ws-stars-row { color: #f59e0b; font-size: 13px; font-weight: 800; letter-spacing: 2px; }
  .ws-rating { color: #0f172a; font-weight: 900; margin-left: 4px; font-size: 13px; }
  .ws-reviews-sub { font-size: 11.5px; color: #64748b; font-weight: 600; margin-top: 2px; }

  /* ── RIGHT ASYMMETRIC GRID (4 SHAPES) ── */
  .ws-right { position: relative; }
  .ws-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-items: center;
  }

  .ws-card {
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .ws-card:hover {
    transform: translateY(-4px);
  }

  /* Shape 1: Top Left Squircle Image */
  .ws-card-squircle-top {
    height: 210px;
    border-radius: 36px;
    overflow: hidden;
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  }

  /* Shape 2: Top Right Beige Vertical Stadium Pill */
  .ws-card-pill-beige {
    height: 210px;
    background: #f5f4eb;
    border-radius: 100px;
    padding: 24px 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.04);
  }
  .ws-check-circle {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #ffffff;
    color: #0f172a;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 16px;
    margin-bottom: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  }
  .ws-pill-title {
    font-size: 16px;
    font-weight: 800;
    color: #1e293b;
    line-height: 1.3;
    margin-bottom: 6px;
  }
  .ws-pill-date {
    font-size: 11px;
    font-style: italic;
    color: #64748b;
    font-weight: 600;
  }

  /* Shape 3: Bottom Left Dark Forest Green Vertical Stadium Pill */
  .ws-card-pill-dark {
    height: 230px;
    background: #0d3b2e;
    color: #ffffff;
    border-radius: 100px;
    padding: 24px 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: 0 20px 48px rgba(13, 59, 46, 0.3);
  }
  .ws-icon-circle {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #ffffff;
    color: #0d3b2e;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 16px;
    margin-bottom: 10px;
  }
  .ws-stat-val {
    font-size: 28px;
    font-weight: 900;
    color: #ffffff;
    line-height: 1.1;
  }
  .ws-stat-sub {
    font-size: 11px;
    font-style: italic;
    color: #a7f3d0;
    margin-top: 4px;
    margin-bottom: 14px;
  }
  .ws-pill-avatar {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #fbcfe8;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ffffff;
    font-size: 16px;
  }

  /* Shape 4: Bottom Right Squircle Image */
  .ws-card-squircle-bottom {
    height: 230px;
    border-radius: 36px;
    overflow: hidden;
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  }

  .ws-card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* ── Buttons ── */
  .vd-btn-primary {
    background: ${primaryColor};
    color: #ffffff;
    padding: 14px 28px;
    border-radius: 99px;
    font-weight: 700;
    font-size: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px ${glowRgba};
  }
  .vd-wrap * { font-family: 'Inter', sans-serif; box-sizing: border-box; }
  .vd-wrap h1, .vd-wrap h2, .vd-wrap h3, .vd-wrap h4, .vd-wrap .vd-title { font-family: 'Plus Jakarta Sans', sans-serif; }

  /* ── SERVICES HERO (AI E-COMMERCE / ENGINEERING MODERN UI) ── */
  .sh-section {
    background: transparent;
    padding: 40px 20px 40px;
    position: relative;
    overflow: hidden;
  }
  .sh-container {
    max-width: 1240px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  /* ── TOP HERO BOX ── */
  .sh-hero-box {
    background: transparent;
    border: none;
    border-radius: 32px;
    padding: 24px 0 48px;
    display: grid;
    grid-template-columns: 1fr 480px;
    gap: 40px;
    position: relative;
    overflow: hidden;
    box-shadow: none;
  }
  .sh-grid-bg {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
  }

  .sh-hero-left {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .sh-title {
    font-size: clamp(28px, 4.2vw, 46px);
    font-weight: 900;
    line-height: 1.12;
    color: #0f172a;
    letter-spacing: -1.2px;
    margin-bottom: 20px;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
  .sh-ai-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 12px;
    background: linear-gradient(135deg, #3b82f6, #06b6d4);
    color: #ffffff;
    vertical-align: middle;
    margin: 0 6px;
    box-shadow: 0 6px 18px rgba(59, 130, 246, 0.35);
  }
  .sh-title-powered {
    color: #0f172a;
  }
  .sh-desc {
    font-size: 16px;
    color: #475569;
    line-height: 1.7;
    max-width: 480px;
    margin-bottom: 36px;
  }

  .sh-action-btns {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 14px;
    margin-top: 16px;
    width: 100%;
  }
  .sh-btn-contact {
    background: #ffffff;
    color: #0f172a !important;
    padding: 16px 40px;
    border-radius: 99px;
    font-weight: 800;
    font-size: 15.5px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.1);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    cursor: pointer;
    border: 2px solid #0f172a;
    white-space: nowrap;
  }
  .sh-btn-contact:hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.2);
    background: #0f172a;
    color: #ffffff !important;
    border-color: #0f172a;
  }
  .sh-hero-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    margin-left: 12px;
  }
  .sh-hero-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(15, 23, 42, 0.04);
    border: 1px solid rgba(15, 23, 42, 0.08);
    color: #475569;
    font-size: 11.5px;
    font-weight: 700;
    padding: 6px 14px;
    border-radius: 99px;
    transition: all 0.2s ease;
    cursor: default;
    white-space: nowrap;
  }
  .sh-hero-chip:hover {
    background: rgba(15, 23, 42, 0.08);
    border-color: rgba(15, 23, 42, 0.15);
    color: #0f172a;
    transform: translateY(-1px);
  }
  .sh-form-input {
    border: none;
    outline: none;
    background: transparent;
    flex: 1;
    font-size: 15px;
    color: #0f172a;
    font-weight: 500;
  }
  .sh-form-input::placeholder { color: #94a3b8; }
  .sh-form-btn {
    background: #0f172a;
    color: #ffffff;
    font-weight: 700;
    font-size: 14.5px;
    padding: 14px 30px;
    border-radius: 999px;
    border: none;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 4px 14px rgba(15, 23, 42, 0.2);
    white-space: nowrap;
  }
  .sh-form-btn:hover {
    background: #1e293b;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.3);
  }

  .sh-trust-note {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: #64748b;
    font-weight: 600;
  }
  .sh-trust-icon { font-size: 14px; }

  /* ── RIGHT COLUMN: PHONE MOCKUP & FLOATING CARDS ── */
  .sh-hero-right {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sh-phone-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px 0;
  }
  .sh-phone-backdrop {
    position: absolute;
    width: 290px;
    height: 400px;
    background: rgba(186, 230, 253, 0.5);
    border-radius: 40px;
    z-index: 1;
    filter: blur(2px);
  }
  .sh-phone-frame {
    position: relative;
    z-index: 2;
    width: 260px;
    height: 480px;
    background: #0a0f1d;
    border-radius: 40px;
    padding: 10px 10px 14px;
    box-shadow: 0 35px 80px rgba(15, 23, 42, 0.3), inset 0 0 0 2px rgba(255, 255, 255, 0.15);
    display: flex;
    flex-direction: column;
  }
  .sh-phone-island {
    width: 80px;
    height: 18px;
    background: #000000;
    border-radius: 20px;
    margin: 2px auto 6px;
    flex-shrink: 0;
  }
  .sh-phone-statusbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 14px 6px;
    font-size: 11px;
    color: #ffffff;
    font-weight: 700;
    flex-shrink: 0;
  }
  .sh-status-icons { display: flex; gap: 4px; font-size: 10px; }

  .sh-phone-screen {
    flex: 1;
    background: #0f172a;
    border-radius: 26px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    color: #ffffff;
    padding: 12px;
  }
  .sh-phone-header {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    flex-shrink: 0;
  }
  .sh-header-avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #2563eb;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
  }
  .sh-header-name { font-size: 12px; font-weight: 800; color: #ffffff; }
  .sh-header-date { font-size: 9px; color: #94a3b8; }

  .sh-phone-chat {
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 10px 0;
  }
  .sh-phone-chat::-webkit-scrollbar { width: 3px; }
  .sh-phone-chat::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 3px; }

  .sh-chat-msg {
    font-size: 11px;
    padding: 8px 11px;
    border-radius: 14px;
    line-height: 1.4;
    max-width: 88%;
    word-break: break-word;
  }
  .sh-chat-msg.ai {
    background: #ffffff;
    color: #0f172a;
    align-self: flex-start;
    border-bottom-left-radius: 3px;
    font-weight: 500;
  }
  .sh-chat-msg.user {
    background: #1e3a8a;
    color: #ffffff;
    align-self: flex-end;
    border-bottom-right-radius: 3px;
    font-weight: 500;
  }

  .sh-chat-tools {
    display: flex;
    gap: 12px;
    padding: 4px 6px 8px;
    flex-shrink: 0;
  }
  .sh-chat-tools button {
    background: transparent;
    border: none;
    color: #94a3b8;
    cursor: pointer;
    font-size: 12px;
    opacity: 0.8;
    transition: opacity 0.2s;
  }
  .sh-chat-tools button:hover { opacity: 1; }

  .sh-phone-input-bar {
    display: flex;
    gap: 6px;
    background: rgba(255, 255, 255, 0.08);
    padding: 4px 6px 4px 12px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    flex-shrink: 0;
  }
  .sh-phone-input-bar input {
    background: transparent;
    border: none;
    outline: none;
    color: #ffffff;
    font-size: 10.5px;
    flex: 1;
  }
  .sh-phone-input-bar input::placeholder { color: #64748b; }
  .sh-phone-input-bar button {
    background: #3b82f6;
    color: #ffffff;
    border: none;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    cursor: pointer;
  }

  /* ── PHONE SERVICES SCREEN ── */
  .sh-phone-services {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 8px 0 0;
  }
  .sh-phone-subtitle {
    font-size: 9.5px;
    color: #64748b;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 8px;
    padding: 0 4px;
  }
  .sh-phone-services-list {
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-right: 2px;
  }
  .sh-phone-services-list::-webkit-scrollbar { width: 3px; }
  .sh-phone-services-list::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 3px; }

  .sh-phone-service-item {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 8px 12px;
    cursor: pointer;
    text-align: left;
    transition: all 0.2s ease;
    width: 100%;
  }
  .sh-phone-service-item:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
  }
  .sh-phone-service-icon {
    font-size: 16px;
    background: rgba(255, 255, 255, 0.08);
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    flex-shrink: 0;
  }
  .sh-phone-service-info {
    flex: 1;
    min-width: 0;
  }
  .sh-phone-service-title {
    font-size: 11px;
    font-weight: 700;
    color: #ffffff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .sh-phone-service-role {
    font-size: 9px;
    color: #94a3b8;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .sh-phone-service-chevron {
    font-size: 10px;
    color: #475569;
    transition: transform 0.2s ease;
  }
  .sh-phone-service-item:hover .sh-phone-service-chevron {
    color: #ffffff;
    transform: translateX(2px);
  }

  /* ── PHONE SERVICE DETAIL VIEW ── */
  .sh-phone-service-detail {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    animation: fadeIn 0.3s ease-out;
  }
  .sh-phone-back-btn {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: transparent;
    border: none;
    color: #3b82f6;
    font-size: 10px;
    font-weight: 700;
    cursor: pointer;
    padding: 0 0 10px;
    align-self: flex-start;
  }
  .sh-phone-back-btn:hover {
    color: #60a5fa;
  }
  .sh-phone-detail-header {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 10px;
  }
  .sh-phone-detail-icon {
    font-size: 20px;
    background: rgba(255, 255, 255, 0.08);
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }
  .sh-phone-detail-title {
    font-size: 12px;
    font-weight: 800;
    color: #ffffff;
  }
  .sh-phone-detail-role {
    font-size: 9.5px;
    color: #94a3b8;
  }
  .sh-phone-detail-scroll {
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-right: 2px;
    margin-bottom: 8px;
  }
  .sh-phone-detail-scroll::-webkit-scrollbar { width: 3px; }
  .sh-phone-detail-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 3px; }

  .sh-phone-bullets {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .sh-phone-bullet-item {
    font-size: 9.5px;
    line-height: 1.4;
    color: #cbd5e1;
    display: flex;
    gap: 6px;
    align-items: flex-start;
  }
  .sh-phone-bullet-dot {
    color: #3b82f6;
    font-size: 10px;
    line-height: 1;
    margin-top: 1px;
  }
  .sh-phone-detail-widget {
    background: rgba(59, 130, 246, 0.1);
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: 8px;
    padding: 6px 10px;
    font-size: 9px;
    font-weight: 600;
    color: #60a5fa;
    text-align: center;
    margin-top: 4px;
  }
  .sh-phone-cta-button {
    background: #2563eb;
    color: #ffffff !important;
    text-align: center;
    padding: 8px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 10.5px;
    text-decoration: none;
    transition: background 0.2s;
    margin-top: auto;
  }
  .sh-phone-cta-button:hover {
    background: #1d4ed8;
  }

  /* ── FLOATING OVERLAY CARDS ── */
  .sh-float-card {
    position: absolute;
    z-index: 10;
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .sh-float-card:hover {
    transform: translateY(-4px) scale(1.02);
  }

  /* Card 1: Top Left Trophy Badge */
  .sh-float-card-1 {
    top: 15px;
    left: -45px;
    background: #ffffff;
    border: 1.5px solid #e2e8f0;
    border-radius: 16px;
    padding: 10px 14px;
    box-shadow: 0 16px 36px rgba(15, 23, 42, 0.1);
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .sh-trophy-icon {
    font-size: 16px;
    font-weight: 900;
    color: #0f172a;
    background: #fef3c7;
    padding: 6px 10px;
    border-radius: 10px;
  }
  .sh-trophy-sub { font-size: 10.5px; color: #64748b; font-weight: 600; }
  .sh-trophy-title { font-size: 11.5px; font-weight: 800; color: #0f172a; }

  /* Card 2: Middle Dark Stopwatch Box */
  .sh-float-card-2 {
    top: 220px;
    left: -65px;
    background: linear-gradient(145deg, #0f172a, #1e293b);
    color: #ffffff;
    border-radius: 20px;
    padding: 14px 16px;
    box-shadow: 0 24px 50px rgba(15, 23, 42, 0.35);
    width: 170px;
    border: 1px solid rgba(255, 255, 255, 0.12);
  }
  .sh-dark-card-header {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    font-weight: 700;
    color: #94a3b8;
    margin-bottom: 8px;
  }
  .sh-stopwatch-icon { font-size: 12px; }
  .sh-chart-wrap { width: 100%; height: 32px; margin-bottom: 6px; }
  .sh-chart-svg { width: 100%; height: 100%; overflow: visible; }
  .sh-dark-card-val { display: flex; align-items: baseline; gap: 5px; }
  .sh-val-num { font-size: 26px; font-weight: 900; color: #ffffff; line-height: 1; }
  .sh-val-unit { font-size: 11px; color: #94a3b8; font-weight: 600; }

  /* Card 3: Bottom Right Users Card */
  .sh-float-card-3 {
    bottom: 10px;
    right: -30px;
    background: linear-gradient(135deg, #ffffff, #f0f9ff);
    border: 1.5px solid #bae6fd;
    border-radius: 22px;
    padding: 14px 18px;
    box-shadow: 0 20px 40px rgba(2, 132, 199, 0.15);
    text-align: center;
  }
  .sh-avatars-row {
    display: flex;
    justify-content: center;
    margin-bottom: 6px;
  }
  .sh-avatar {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: #e2e8f0;
    border: 2px solid #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    margin-left: -8px;
  }
  .sh-avatar:first-child { margin-left: 0; }
  .sh-users-num { font-size: 18px; font-weight: 900; color: #0f172a; line-height: 1.1; }
  .sh-users-lbl { font-size: 9.5px; font-weight: 900; color: #0284c7; letter-spacing: 0.8px; margin-top: 2px; }

  /* ── BOTTOM GRID ROW (3 CARDS) ── */
  .sh-grid-row {
    display: grid;
    grid-template-columns: 290px 345px 1fr;
    gap: 20px;
    margin-top: 4px;
  }

  /* Card 1: Dark Navy Metric Card */
  .sh-card-dark {
    background: linear-gradient(145deg, #0f172a, #1e293b);
    border-radius: 26px;
    padding: 24px 22px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 220px;
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.08);
    transition: all 0.3s ease;
  }
  .sh-card-dark:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 50px rgba(15, 23, 42, 0.25);
  }
  .sh-big-num { font-size: 44px; font-weight: 900; color: #ffffff; line-height: 1; letter-spacing: -1px; }
  .sh-dark-footer { display: flex; flex-direction: column; gap: 8px; }
  .sh-stat-pill {
    display: inline-block;
    width: fit-content;
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #ffffff;
    font-size: 11px;
    font-weight: 700;
    padding: 3px 10px;
    border-radius: 999px;
  }
  .sh-dark-prompt { font-size: 12px; color: #cbd5e1; font-weight: 600; line-height: 1.4; }

  /* Card 2: Vibrant Blue Radial Tag Cloud Card */
  .sh-card-blue {
    background: linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #1d4ed8 100%);
    border-radius: 26px;
    padding: 20px 16px;
    color: #ffffff;
    min-height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    box-shadow: 0 16px 40px rgba(37, 99, 235, 0.25);
    transition: all 0.3s ease;
  }
  .sh-card-blue:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 50px rgba(37, 99, 235, 0.35);
  }
  .sh-blue-bg-glow {
    position: absolute;
    inset: -20px;
    background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), transparent 70%);
    pointer-events: none;
  }
  .sh-tag-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
  }
  .sh-cloud-pill {
    background: rgba(255, 255, 255, 0.2);
    border: 1.5px solid rgba(255, 255, 255, 0.35);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    color: #ffffff;
    font-size: 11.5px;
    font-weight: 700;
    padding: 6px 12px;
    border-radius: 999px;
    transition: all 0.25s ease;
    cursor: default;
  }
  .sh-cloud-pill.icon-only {
    padding: 7px 11px;
    font-size: 14px;
  }
  .sh-cloud-pill:hover {
    background: rgba(255, 255, 255, 0.35);
    transform: scale(1.06);
  }

  /* Card 3: Light Blue Container with Split Layout */
  .sh-card-light {
    background: #e0f2fe;
    border-radius: 26px;
    padding: 16px 14px;
    min-height: 220px;
    display: grid;
    grid-template-columns: 1fr 1.15fr;
    gap: 10px;
    box-shadow: 0 16px 40px rgba(186, 230, 253, 0.3);
  }
  .sh-sugg-box {
    background: #ffffff;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 8px 24px rgba(2, 132, 199, 0.06);
  }
  .sh-sugg-header {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12.5px;
    font-weight: 800;
    color: #0f172a;
  }
  .sh-sugg-icon { font-size: 15px; }
  .sh-sugg-text {
    font-size: 12px;
    color: #475569;
    line-height: 1.5;
    margin: 10px 0;
    font-weight: 500;
  }
  .sh-update-btn {
    background: #0f172a;
    color: #ffffff;
    border: none;
    font-size: 11.5px;
    font-weight: 700;
    padding: 7px 16px;
    border-radius: 999px;
    width: fit-content;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .sh-update-btn:hover {
    background: #1e293b;
    transform: scale(1.04);
  }

  .sh-feat-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .sh-feat-pill {
    background: #ffffff;
    border-radius: 16px;
    padding: 12px 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    font-weight: 700;
    color: #0f172a;
    box-shadow: 0 6px 16px rgba(2, 132, 199, 0.05);
    transition: all 0.25s ease;
  }
  .sh-feat-pill:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(2, 132, 199, 0.1);
  }
  .sh-feat-icon { font-size: 14px; }

  /* ── Buttons ── */
  .vd-btn-primary {
    background: linear-gradient(135deg, ${gradTo}, ${primaryColor});
    color: #ffffff !important; padding: 16px 36px; border-radius: 99px;
    font-weight: 800; font-size: 15px; text-decoration: none; display: inline-flex; align-items: center; gap: 10px;
    box-shadow: 0 16px 48px ${glowRgba}, 0 4px 12px rgba(0,0,0,0.12);
    transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
    border: 2px solid transparent; cursor: pointer;
    letter-spacing: 0.2px; position: relative; overflow: hidden;
  }
  .vd-btn-primary::before {
    content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0));
    opacity: 0; transition: opacity 0.35s cubic-bezier(0.16,1,0.3,1); pointer-events: none;
  }
  .vd-btn-primary:hover {
    transform: translateY(-6px) scale(1.03); filter: brightness(1.15);
    box-shadow: 0 24px 64px ${glowRgba}, 0 8px 24px rgba(0,0,0,0.15);
    letter-spacing: 0.8px;
  }
  .vd-btn-primary:hover::before { opacity: 1; }
  .vd-btn-primary:active { transform: translateY(-3px) scale(1.01); }
  
  .vd-btn-ghost {
    background: rgba(255,255,255,0.08);
    color: #0f172a !important; padding: 14px 28px; border-radius: 99px;
    font-weight: 700; font-size: 14.5px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
    border: 2px solid rgba(15,23,42,0.14); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
    transition: background 0.25s cubic-bezier(0.16,1,0.3,1), transform 0.25s, border-color 0.25s, box-shadow 0.25s; 
    cursor: pointer; position: relative;
  }
  .vd-btn-ghost:hover { 
    background: rgba(255,255,255,0.95); 
    border-color: ${primaryColor}; 
    transform: translateY(-2px); 
    box-shadow: 0 8px 24px rgba(15,23,42,0.08);
  }
  .vd-btn-ghost:active { transform: translateY(0); }

  /* Eyebrow badge */
  .vd-badge-tag {
    display: inline-flex; align-items: center; gap: 8px;
    background: linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.08));
    border: 1.5px solid rgba(255,255,255,0.22);
    backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
    color: #0f172a; padding: 9px 20px; border-radius: 99px;
    font-size: 11px; font-weight: 900; letter-spacing: 1.6px; text-transform: uppercase; margin-bottom: 18px;
    position: relative; width: fit-content; transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  }
  .vd-badge-tag::before {
    content: ''; display: inline-block; width: 8px; height: 8px; border-radius: 50%;
    background: ${primaryColor}; box-shadow: 0 0 16px ${primaryColor}, 0 0 32px rgba(${primaryColor.split('(')[1]?.split(')')[0]}, 0.5); 
    animation: pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.2); }
  }
  .vd-badge-tag:hover { 
    background: linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.12));
    border-color: rgba(255,255,255,0.35);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    transform: translateY(-2px);
  }

  /* ── 1. HERO — DARK AURORA ── */
  .vd-hero-section {
    background: linear-gradient(135deg, #0a0f1f 0%, #050812 50%, #0d1220 100%);
    background-image:
      radial-gradient(1000px 600px at 12% -10%, ${glowRgba}, transparent 55%),
      radial-gradient(900px 580px at 100% -5%, ${glowRgba.replace('0.3', '0.2')}, transparent 50%),
      radial-gradient(800px 700px at 50% 130%, ${glowRgba.replace('0.3', '0.12')}, transparent 65%);
    padding: 180px 24px 200px; position: relative; overflow: hidden;
    min-height: 720px; display: flex; align-items: center;
  }
  /* Enhanced grid overlay with animation */
  .vd-hero-section::before {
    content: ''; position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse 85% 70% at 50% 25%, #000 25%, transparent 80%);
    -webkit-mask-image: radial-gradient(ellipse 85% 70% at 50% 25%, #000 25%, transparent 80%);
    pointer-events: none;
    animation: gridDrift 20s linear infinite;
  }
  @keyframes gridDrift {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(60px); opacity: 1; }
  }
  /* Hero section glow orbs */
  .vd-hero-section::after {
    content: ''; position: absolute; inset: 0;
    background: 
      radial-gradient(circle 300px at 15% 50%, rgba(59, 130, 246, 0.15), transparent 40%),
      radial-gradient(circle 250px at 90% 20%, rgba(236, 72, 153, 0.1), transparent 35%);
    pointer-events: none; z-index: 1;
    animation: glowShift 8s ease-in-out infinite;
  }
  @keyframes glowShift {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  .vd-hero-grid {
    display: grid; grid-template-columns: 1fr 480px; gap: 56px; align-items: center;
    max-width: 1200px; margin: 0 auto; position: relative; z-index: 2;
  }
  .vd-hero-left .vd-badge-tag { color: #cbd5e1; background: rgba(255,255,255,0.08); border: 1.5px solid rgba(255,255,255,0.16); }
  .vd-hero-left h1 {
    font-size: clamp(42px, 6vw, 68px); font-weight: 950; letter-spacing: -2.2px;
    line-height: 1.04; color: #ffffff; margin-bottom: 24px; animation: fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1);
    text-shadow: 0 4px 20px rgba(0,0,0,0.3), 0 0 40px rgba(59, 130, 246, 0.2);
  }
  .vd-hero-left h1 .highlight {
    background: linear-gradient(110deg, ${gradTo} 0%, ${primaryColor} 30%, #22d3ee 60%, #06b6d4 100%);
    -webkit-background-clip: text; background-clip: text; color: transparent;
    animation: shimmerText 3s ease-in-out infinite;
  }
  @keyframes shimmerText {
    0%, 100% { filter: brightness(1) drop-shadow(0 0 8px rgba(34, 211, 238, 0.3)); }
    50% { filter: brightness(1.1) drop-shadow(0 0 16px rgba(34, 211, 238, 0.5)); }
  }
  .vd-hero-left p { 
    font-size: 18px; color: #cbd5e1; line-height: 1.8; margin-bottom: 38px; max-width: 580px; 
    animation: fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both;
    text-shadow: 0 2px 12px rgba(0,0,0,0.2);
  }
  .vd-hero-btns { 
    display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 48px; 
    animation: fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both;
  }
  .vd-hero-left .vd-btn-ghost { 
    color: #ffffff !important; 
    border-color: rgba(255,255,255,0.25); 
    background: rgba(255,255,255,0.08);
    backdrop-filter: blur(12px);
  }
  .vd-hero-left .vd-btn-ghost:hover { 
    background: rgba(255,255,255,0.15); 
    color: #ffffff !important;
    border-color: rgba(255,255,255,0.4);
    box-shadow: 0 12px 32px rgba(255,255,255,0.1);
  }

  /* Floating mini-chips under CTAs */
  .vd-hero-chips { 
    display: flex; gap: 14px; flex-wrap: wrap; 
    animation: fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s both;
  }
  .vd-hero-chip {
    display: inline-flex; align-items: center; gap: 10px;
    background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04));
    border: 1.5px solid rgba(255,255,255,0.18);
    backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
    border-radius: 99px; padding: 10px 18px;
    font-size: 12px; font-weight: 700; color: #cbd5e1; transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
  }
  .vd-hero-chip:hover { 
    background: rgba(255,255,255,0.14); 
    border-color: rgba(255,255,255,0.28);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  }
  .vd-hero-chip .dot { 
    width: 8px; height: 8px; border-radius: 50%; 
    background: #10b981; 
    box-shadow: 0 0 12px #10b981, 0 0 24px rgba(16, 185, 129, 0.4); 
    animation: pulse 2s ease-in-out infinite;
  }

  .vd-hero-right { 
    position: relative; 
    animation: slideInRight 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s both;
  }
  .vd-hero-visual {
    position: relative; border-radius: 32px; overflow: hidden;
    background: rgba(255,255,255,0.06);
    border: 2px solid rgba(255,255,255,0.16);
    backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
    box-shadow: 0 50px 120px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.12), 
                0 0 40px ${glowRgba.replace('0.3', '0.25')};
    padding: 16px;
    transform: perspective(1400px) rotateY(-5deg) rotateX(3deg) rotateZ(1deg);
    transition: all 0.5s cubic-bezier(0.16,1,0.3,1);
  }
  .vd-hero-visual:hover { 
    transform: perspective(1400px) rotateY(0deg) rotateX(0deg) rotateZ(0deg);
    box-shadow: 0 60px 140px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.15), 
                0 0 60px ${glowRgba.replace('0.3', '0.35')};
    border-color: ${primaryColor};
  }
  .vd-hero-visual img { width: 100%; height: auto; display: block; border-radius: 24px; }
  .vd-hero-float-chip {
    position: absolute; display: flex; align-items: center; gap: 11px;
    background: linear-gradient(135deg, rgba(10,15,31,0.95), rgba(5,8,18,0.85));
    border: 1.5px solid rgba(255,255,255,0.18);
    backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
    color: #ffffff; border-radius: 16px;
    padding: 14px 20px; font-size: 13px; font-weight: 700; 
    box-shadow: 0 24px 56px rgba(0,0,0,0.5), 0 0 30px ${glowRgba.replace('0.3', '0.2')};
    animation: vdFloat 5s cubic-bezier(0.42, 0, 0.58, 1) infinite;
  }
  .vd-hero-float-chip .chip-icon { font-size: 18px; }
  .vd-hero-float-chip .chip-sub { font-size: 11px; color: #94a3b8; font-weight: 600; }
  .vd-hero-float-chip.chip-1 { top: -20px; right: -10px; animation-delay: 0s; }
  .vd-hero-float-chip.chip-2 { bottom: 30px; left: -35px; animation-delay: 1.8s; }
  @keyframes vdFloat { 
    0%,100% { transform: translateY(0) scale(1); } 
    50% { transform: translateY(-14px) scale(1.02); }
  }

  /* ── Overlay Stats Bar (glass) ── */
  .vd-hero-stats-bar {
    background: linear-gradient(135deg, rgba(255,255,255,0.94), rgba(255,255,255,0.88));
    backdrop-filter: blur(28px); -webkit-backdrop-filter: blur(28px);
    color: #0f172a; padding: 44px 56px;
    max-width: 1150px; margin: -88px auto 0; position: relative; z-index: 10;
    border-radius: 32px; 
    box-shadow: 0 40px 100px rgba(2,6,23,0.2), 0 0 1px rgba(2,6,23,0.15),
                inset 0 1px 0 rgba(255,255,255,0.4);
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px; text-align: center;
    border: 2px solid rgba(255,255,255,0.8);
    animation: scaleIn 0.7s cubic-bezier(0.16,1,0.3,1);
  }
  .vd-stat-item { 
    border-right: 1px solid #e2e8f0; transition: all 0.4s cubic-bezier(0.16,1,0.3,1); 
    padding: 8px 0; cursor: pointer;
  }
  .vd-stat-item:hover { 
    transform: translateY(-4px) scale(1.06);
    filter: brightness(1.05);
  }
  .vd-stat-item:last-child { border-right: none; }
  .vd-stat-item .num {
    font-size: 48px; font-weight: 950; line-height: 1; margin-bottom: 12px;
    background: linear-gradient(125deg, ${gradFrom} 0%, ${primaryColor} 50%, #06b6d4 100%);
    -webkit-background-clip: text; background-clip: text; color: transparent;
    animation: shimmerText 3s ease-in-out infinite;
  }
  .vd-stat-item .lbl { 
    font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.4px; 
    color: #64748b;
  }

  /* ── 1b. TECH MARQUEE STRIP ── */
  .vd-marquee-section { background: #ffffff; padding: 26px 0; border-bottom: 1px solid #f1f5f9; overflow: hidden; }
  .vd-marquee-track {
    display: flex; gap: 48px; align-items: center; width: max-content;
    animation: vdMarquee 32s linear infinite;
  }
  .vd-marquee-item { display: flex; align-items: center; gap: 10px; font-size: 13.5px; font-weight: 800; color: #94a3b8; letter-spacing: 0.4px; white-space: nowrap; }
  .vd-marquee-item .sep { color: ${primaryColor}; font-size: 10px; }
  @keyframes vdMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  .vd-marquee-section:hover .vd-marquee-track { animation-play-state: paused; }

  /* ── 2. WELCOME / INTRO (2-COL) ── */
  .vd-welcome-section { background: #ffffff; padding: 110px 24px 96px; border-bottom: 1px solid #f1f5f9; }
  .vd-welcome-grid {
    display: grid; grid-template-columns: 440px 1fr; gap: 72px; align-items: center;
    max-width: 1200px; margin: 0 auto;
  }
  .vd-welcome-img-wrap { position: relative; }
  .vd-welcome-img-blob {
    width: 400px; height: 400px; margin: 0 auto; overflow: hidden; position: relative;
    border-radius: 32px;
    background: linear-gradient(145deg, ${glowRgba.replace('0.3', '0.14')}, transparent 60%), #f8fafc;
    border: 2px solid #e2e8f0;
    box-shadow: 0 32px 80px rgba(15,23,42,0.1), inset 0 1px 0 rgba(255,255,255,0.5);
    display: flex; align-items: center; justify-content: center;
    transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
  }
  .vd-welcome-img-blob:hover { transform: translateY(-8px); box-shadow: 0 40px 100px rgba(15,23,42,0.12), inset 0 1px 0 rgba(255,255,255,0.5); }
  .vd-welcome-img-blob img { width: 92%; height: 92%; object-fit: contain; }
  .vd-exp-badge {
    position: absolute; bottom: 18px; left: 18px;
    background: linear-gradient(135deg, ${gradFrom}, ${primaryColor});
    color: #ffffff; width: 128px; height: 128px; border-radius: 28px;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    text-align: center; font-weight: 800; font-size: 11px;
    box-shadow: 0 22px 50px ${glowRgba}, 0 8px 16px rgba(0,0,0,0.1); 
    border: 4px solid #ffffff; letter-spacing: 0.4px; transition: all 0.3s ease;
  }
  .vd-exp-badge:hover { transform: scale(1.05); box-shadow: 0 28px 60px ${glowRgba}, 0 10px 20px rgba(0,0,0,0.12); }
  .vd-exp-badge .big { font-size: 28px; font-weight: 900; line-height: 1; margin-bottom: 4px; color: #ffffff; }

  .vd-welcome-right h2 { font-size: clamp(28px, 4vw, 44px); font-weight: 900; color: #0f172a; margin-bottom: 18px; line-height: 1.12; letter-spacing: -1px; }
  .vd-welcome-right p { font-size: 16px; color: #475569; line-height: 1.75; margin-bottom: 30px; }
  .vd-check-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 34px; }
  .vd-check-item { display: flex; align-items: center; gap: 11px; font-size: 14.5px; font-weight: 700; color: #1e293b; transition: transform 0.2s ease; }
  .vd-check-item:hover { transform: translateX(4px); }
  .vd-check-icon {
    width: 28px; height: 28px; border-radius: 50%;
    background: ${glowRgba.replace('0.3', '0.12')}; color: ${primaryColor};
    display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 900; flex-shrink: 0;
    border: 1.5px solid ${primaryColor};
  }

  /* ── 3. SERVICES CARDS GRID ── */
  .vd-services-section { background: #f8fafc; padding: 104px 24px; border-bottom: 1px solid #f1f5f9; }
  .vd-section-top { display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 16px; max-width: 1200px; margin: 0 auto 52px; }
  .vd-section-top .vd-badge-tag { color: ${primaryColor}; background: ${glowRgba.replace('0.3', '0.1')}; border-color: ${glowRgba.replace('0.3', '0.25')}; }
  .vd-services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; max-width: 1200px; margin: 0 auto; }

  .vd-service-card {
    background: #ffffff; border-radius: 24px; overflow: hidden; border: 1.5px solid #e2e8f0;
    box-shadow: 0 12px 32px rgba(15,23,42,0.06); display: flex; flex-direction: column;
    position: relative; transition: all 0.32s cubic-bezier(0.16, 1, 0.3, 1); min-height: 360px;
    text-decoration: none; color: inherit;
  }
  .vd-service-card::before {
    content: ''; position: absolute; inset: 0 0 auto 0; height: 4px;
    background: linear-gradient(90deg, ${gradFrom}, ${primaryColor}, #22d3ee);
    opacity: 0; transition: opacity 0.3s ease; z-index: 3;
  }
  .vd-service-card:hover { 
    transform: translateY(-12px); 
    border-color: ${primaryColor}; 
    box-shadow: 0 32px 72px ${glowRgba.replace('0.3', '0.18')}, 0 12px 28px rgba(15,23,42,0.08);
  }
  .vd-service-card:hover::before { opacity: 1; }
  .vd-service-card-img-wrap { height: 200px; width: 100%; position: relative; overflow: hidden; background: linear-gradient(135deg, #f1f5f9, #e2e8f0); }
  .vd-service-card-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s cubic-bezier(0.16,1,0.3,1); }
  .vd-service-card:hover .vd-service-card-img { transform: scale(1.08); }

  .vd-service-card-pill {
    position: absolute; top: 16px; left: 16px; background: rgba(15,23,42,0.82);
    backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
    border: 1.5px solid rgba(255,255,255,0.22); padding: 6px 14px; border-radius: 99px;
    font-size: 11px; font-weight: 800; color: #ffffff; letter-spacing: 0.6px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.2); z-index: 2; transition: all 0.3s ease;
  }
  .vd-service-card:hover .vd-service-card-pill { background: rgba(15,23,42,0.9); transform: translateY(-2px); }
  
  .vd-service-card-body { padding: 28px; flex: 1; display: flex; flex-direction: column; justify-content: space-between; gap: 14px; }
  .vd-service-card-title { font-size: 18px; font-weight: 800; color: #0f172a; margin-bottom: 8px; line-height: 1.3; }
  .vd-service-card-desc { font-size: 13.8px; color: #64748b; line-height: 1.65; }

  /* Icon-tile card variant */
  .vd-service-card-tile { display: flex; align-items: center; justify-content: center; width: 52px; height: 52px; border-radius: 16px; font-size: 24px; margin-bottom: 16px; box-shadow: 0 8px 20px rgba(15,23,42,0.08); }
  .vd-service-card-bullets { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 9px; }
  .vd-service-card-bullets li { display: flex; gap: 9px; align-items: flex-start; font-size: 13px; font-weight: 600; color: #334155; line-height: 1.5; }
  .vd-service-card-bullets li::before { content: '✓'; flex-shrink: 0; width: 18px; height: 18px; border-radius: 50%; background: ${glowRgba.replace('0.3', '0.12')}; color: ${primaryColor}; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 900; margin-top: 1px; }

  /* Featured Active Card */
  .vd-service-card-active {
    background: linear-gradient(150deg, ${gradFrom} 0%, ${primaryColor} 100%);
    color: #ffffff !important; border-color: transparent;
    box-shadow: 0 26px 60px ${glowRgba.replace('0.3', '0.35')};
  }
  .vd-service-card-active::before { display: none; }
  .vd-service-card-active .vd-service-card-title { color: #ffffff !important; }
  .vd-service-card-active .vd-service-card-desc { color: #cbd5e1 !important; }
  .vd-info-badge {
    width: 44px; height: 44px; border-radius: 14px; background: rgba(255,255,255,0.18);
    display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 18px; margin-bottom: 18px; color: #fff;
    border: 1px solid rgba(255,255,255,0.25); box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  }

  .vd-card-widget {
    background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 10px 14px;
    margin-top: 16px; display: flex; align-items: center; justify-content: space-between;
    font-size: 12px; font-weight: 700; color: #475569;
  }
  .vd-card-widget-pulse { display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #10b981; margin-right: 7px; box-shadow: 0 0 10px #10b981; }

  .vd-service-link-row { border-top: 1px solid #f1f5f9; padding: 15px 26px; display: flex; align-items: center; justify-content: space-between; }
  .vd-service-link-row span { font-size: 13px; font-weight: 800; color: ${primaryColor}; }
  .vd-service-link-arrow { width: 30px; height: 30px; border-radius: 50%; background: ${glowRgba.replace('0.3', '0.1')}; border: 1px solid ${glowRgba.replace('0.3', '0.25')}; display: flex; align-items: center; justify-content: center; font-size: 13px; color: ${primaryColor}; transition: transform 0.25s ease; }
  .vd-service-card:hover .vd-service-link-arrow { transform: translateX(3px); }

  /* ── ALTERNATING ARCH-CARD PILL ROWS UI (COMPACT & DARK NAVY BUTTON) ── */
  .sas-section {
    padding: 10px 24px 50px;
    background: #ffffff;
    border-bottom: 1px solid #f1f5f9;
  }
  .sas-container {
    max-width: 1140px;
    margin: 0 auto;
  }
  .sas-header {
    text-align: center;
    max-width: 680px;
    margin: 0 auto 18px;
  }
  .sas-header .vd-badge-tag {
    margin: 0 auto 14px;
  }
  .sas-stack {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
  .sas-card-row {
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 60%, #f1f5f9 100%);
    border-radius: 28px;
    padding: 28px 44px;
    display: grid;
    gap: 40px;
    align-items: center;
    border: 1.5px solid #e2e8f0;
    box-shadow: 0 12px 36px rgba(15, 23, 42, 0.04);
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
  }
  .sas-card-row.image-left {
    grid-template-columns: 210px 1fr;
  }
  .sas-card-row.image-right {
    grid-template-columns: 1fr 210px;
  }
  .sas-card-row:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 50px rgba(15, 23, 42, 0.08);
    border-color: #cbd5e1;
  }

  .sas-col-visual {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .sas-circle-frame {
    width: 185px;
    height: 185px;
    border-radius: 24px;
    background: #ffffff;
    position: relative;
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.12);
    border: 4px solid #ffffff;
    overflow: hidden;
    flex-shrink: 0;
  }
  .sas-circle-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .sas-card-row:hover .sas-circle-img {
    transform: scale(1.08);
  }
  .sas-circle-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 50%, rgba(15, 23, 42, 0.15) 100%);
    pointer-events: none;
  }

  .sas-col-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    min-width: 0;
    width: 100%;
  }
  .sas-category-pill {
    font-size: 10.5px;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #0f172a;
    margin-bottom: 4px;
  }
  .sas-card-title {
    font-size: 22px;
    font-weight: 900;
    color: #0f172a;
    margin-bottom: 4px;
    line-height: 1.2;
    letter-spacing: -0.4px;
  }
  .sas-card-role {
    font-size: 13.5px;
    font-weight: 600;
    color: #64748b;
    margin-bottom: 12px;
  }
  .sas-bullets-grid {
    list-style: none;
    padding: 0;
    margin: 4px 0 16px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px 24px;
    width: 100%;
  }
  .sas-bullets-grid li {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 13px;
    font-weight: 600;
    color: #334155;
    line-height: 1.45;
  }
  .sas-check {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #0f172a;
    color: #ffffff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    font-weight: 900;
    flex-shrink: 0;
    margin-top: 2px;
  }
  .sas-card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 4px;
    gap: 16px;
    flex-wrap: wrap;
  }
  .sas-widget-badge {
    display: inline-flex;
    align-items: center;
    background: #ffffff;
    border: 1px solid #cbd5e1;
    padding: 5px 14px;
    border-radius: 99px;
    font-size: 11.5px;
    font-weight: 700;
    color: #334155;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  }
  .sas-btn-learn {
    background: #0f172a;
    color: #ffffff !important;
    padding: 10px 24px;
    border-radius: 99px;
    font-weight: 800;
    font-size: 13.5px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.22);
    transition: all 0.3s ease;
  }
  .sas-btn-learn:hover {
    background: #1e293b;
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.32);
  }
  .sas-footer-cta {
    text-align: center;
    margin-top: 56px;
  }

  @media (max-width: 900px) {
    .sas-card-row, .sas-card-row.image-right {
      grid-template-columns: 1fr;
      border-radius: 40px;
      padding: 32px 24px;
      text-align: center;
    }
    .sas-card-row.image-right .sas-col-visual { order: 1; }
    .sas-card-row.image-right .sas-col-content { order: 2; }
    .sas-col-content { align-items: center; }
    .sas-bullets-list li { justify-content: center; text-align: left; }
  }

  /* ── Hub & Spoke Layout ── */
  .vd-services-hub-header { text-align: center; max-width: 700px; margin: 0 auto 60px; }
  .vd-services-hub-header .vd-badge-tag { margin: 0 auto 18px; color: ${primaryColor}; background: ${glowRgba.replace('0.3', '0.1')}; border-color: ${glowRgba.replace('0.3', '0.25')}; }

  .vd-services-hub-container {
    position: relative;
    max-width: 1100px;
    margin: 0 auto;
    min-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .vd-hub-center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: #ffffff;
    border: 3px solid ${primaryColor};
    box-shadow: 0 0 0 14px ${glowRgba.replace('0.3', '0.08')}, 0 24px 60px rgba(15,23,42,0.12);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
    transition: all 0.3s ease;
  }
  .vd-hub-center:hover { transform: translate(-50%, -50%) scale(1.08); box-shadow: 0 0 0 16px ${glowRgba.replace('0.3', '0.12')}, 0 32px 80px rgba(15,23,42,0.15); }

  .vd-hub-icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${primaryColor};
    margin-bottom: 6px;
    font-size: 28px;
  }

  .vd-hub-label {
    font-size: 12px;
    font-weight: 800;
    color: ${primaryColor};
    text-transform: uppercase;
    letter-spacing: 0.9px;
  }

  .vd-spoke-lines {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }

  .vd-hub-cards {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  .vd-hub-card {
    position: absolute;
    width: 210px;
    background: #ffffff;
    border: 1.5px solid #e2e8f0;
    border-radius: 20px;
    padding: 24px;
    box-shadow: 0 12px 32px rgba(15,23,42,0.08);
    text-decoration: none;
    color: inherit;
    transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
  }

  .vd-hub-card:hover {
    transform: translate(-50%, -50%) translateY(-8px) !important;
    box-shadow: 0 24px 56px rgba(15,23,42,0.14);
    border-color: ${primaryColor};
  }

  .vd-hub-card-icon {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    margin-bottom: 16px;
    box-shadow: 0 8px 24px rgba(15,23,42,0.12);
    transition: transform 0.2s ease;
  }
  .vd-hub-card:hover .vd-hub-card-icon { transform: scale(1.1); }

  .vd-hub-card-title {
    font-size: 15.5px;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 6px;
    line-height: 1.3;
  }

  .vd-hub-card-desc {
    font-size: 13px;
    color: #64748b;
    line-height: 1.5;
    margin-bottom: 14px;
  }

  .vd-hub-card-link {
    font-size: 13px;
    font-weight: 700;
    color: ${primaryColor};
    display: inline-flex;
    align-items: center;
    gap: 5px;
    transition: all 0.2s ease;
  }
  .vd-hub-card:hover .vd-hub-card-link { gap: 8px; }

  .vd-services-hub-footer {
    text-align: center;
    margin-top: 40px;
  }

  /* ── 4. POD BANNER (dark gradient) ── */
  .vd-pod-banner {
    background: #0a0f1f;
    background-image: radial-gradient(800px 400px at 85% 20%, ${glowRgba}, transparent 60%);
    padding: 96px 24px; border-bottom: 1px solid #f1f5f9;
  }
  .vd-pod-grid { display: grid; grid-template-columns: 1fr 480px; gap: 60px; align-items: center; max-width: 1200px; margin: 0 auto; }
  .vd-pod-left h2 { font-size: clamp(26px, 3.6vw, 40px); font-weight: 900; color: #ffffff; margin-bottom: 16px; letter-spacing: -0.8px; }
  .vd-pod-left p { font-size: 15.5px; color: #94a3b8; line-height: 1.75; margin-bottom: 30px; }
  .vd-pod-right img { width: 100%; height: auto; display: block; border-radius: 22px; box-shadow: 0 30px 70px rgba(0,0,0,0.45); border: 1px solid rgba(255,255,255,0.12); }

  /* ── 5. 4-STEP CONNECTED PROCESS ── */
  .vd-process-section { background: #ffffff; padding: 90px 24px 40px; border-bottom: none; text-align: center; }
  .vd-process-section .vd-badge-tag { margin-left: auto; margin-right: auto; color: ${primaryColor}; background: ${glowRgba.replace('0.3', '0.1')}; border-color: ${glowRgba.replace('0.3', '0.25')}; }
  .vd-process-timeline {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
    max-width: 1150px; margin: 64px auto 0; position: relative;
  }
  .vd-process-timeline::before {
    content: ''; position: absolute; top: 41px; left: 12%; right: 12%; height: 3px;
    background: linear-gradient(90deg, ${gradFrom}, ${primaryColor}, #22d3ee);
    opacity: 0.45; z-index: 1; border-radius: 2px;
  }
  .vd-step-node { position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center; }
  .vd-step-circle {
    width: 84px; height: 84px; border-radius: 24px;
    background: linear-gradient(150deg, ${gradFrom}, ${primaryColor});
    color: #ffffff; display: flex; align-items: center; justify-content: center;
    font-weight: 900; font-size: 24px; margin-bottom: 20px;
    border: 5px solid #ffffff; box-shadow: 0 18px 40px ${glowRgba.replace('0.3', '0.35')}, 0 4px 12px rgba(0,0,0,0.08);
    transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
  }
  .vd-step-node:hover .vd-step-circle { transform: translateY(-6px) rotate(2deg) scale(1.06); box-shadow: 0 24px 50px ${glowRgba.replace('0.3', '0.4')}, 0 6px 16px rgba(0,0,0,0.1); }
  .vd-step-title { font-size: 16.5px; font-weight: 800; color: #0f172a; margin-bottom: 8px; }
  .vd-step-desc { font-size: 13.5px; color: #64748b; line-height: 1.6; max-width: 240px; }

  /* ── VERTICAL ALTERNATING TIMELINE ── */
  .vd-process-timeline-v2 {
    position: relative;
    max-width: 1100px;
    margin: 64px auto 0;
    padding: 20px 0;
  }
  .vt-line {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #0f172a;
    transform: translateX(-50%);
    border-radius: 99px;
    opacity: 0.15;
  }
  .vt-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 72px;
    position: relative;
    width: 100%;
  }
  .vt-item:last-child {
    margin-bottom: 0;
  }
  .vt-dot {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background: #0f172a;
    border: 4px solid #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(15, 23, 42, 0.15);
    z-index: 10;
  }
  .vt-content {
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
  .vt-step-badge {
    font-size: 11px;
    font-weight: 800;
    color: #2563eb;
    background: rgba(37, 99, 235, 0.08);
    padding: 6px 12px;
    border-radius: 99px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 12px;
  }
  .vt-title {
    font-size: clamp(20px, 2.5vw, 24px);
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 12px;
    line-height: 1.25;
  }
  .vt-desc {
    font-size: 14.5px;
    color: #475569;
    line-height: 1.65;
  }
  .vt-visual {
    width: 45%;
  }
  .vt-image-container {
    background: linear-gradient(135deg, #eff6ff, #dbeafe);
    border-radius: 24px;
    padding: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 16px 40px rgba(37, 99, 235, 0.05);
  }
  /* ── TIMELINE MOCK CARDS STYLING ── */
  .vt-mock-card {
    background: #ffffff;
    border: 1.5px solid #e2e8f0;
    border-radius: 20px;
    padding: 18px 20px;
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
    width: 100%;
    max-width: 440px;
    margin: 0 auto;
    text-align: left;
    transition: all 0.3s ease;
  }
  .vt-mock-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 48px rgba(15, 23, 42, 0.1);
    border-color: #cbd5e1;
  }
  .vt-mock-card.dark {
    background: #020617;
    border-color: rgba(255, 255, 255, 0.12);
    box-shadow: 0 20px 48px rgba(15, 23, 42, 0.35);
    color: #f8fafc;
  }
  .vt-mock-card.dark:hover {
    border-color: rgba(255, 255, 255, 0.25);
  }
  .vt-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12.5px;
    font-weight: 800;
    color: #1e293b;
    border-bottom: 1px solid #f1f5f9;
    padding-bottom: 10px;
    margin-bottom: 12px;
  }
  .vt-mock-card.dark .vt-card-header {
    color: #94a3b8;
    border-bottom-color: rgba(255, 255, 255, 0.08);
  }
  .vt-status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: inline-block;
  }
  .vt-status-dot.green { background: #10b981; }

  .vt-status-tag {
    font-size: 9.5px;
    font-weight: 800;
    text-transform: uppercase;
    padding: 3px 8px;
    border-radius: 6px;
    font-family: 'JetBrains Mono', monospace;
  }
  .vt-status-tag.green {
    background: rgba(16, 185, 129, 0.15);
    color: #34d399;
  }

  .vt-card-body {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .vt-backlog-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f8fafc;
    border: 1px solid #f1f5f9;
    border-radius: 10px;
    padding: 8px 12px;
  }
  .vt-task-title {
    font-size: 11px;
    font-weight: 700;
    color: #334155;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 60%;
  }
  .vt-badge {
    font-size: 9px;
    font-weight: 800;
    padding: 3px 8px;
    border-radius: 6px;
    text-transform: uppercase;
  }
  .vt-badge.high { background: #fee2e2; color: #ef4444; }
  .vt-badge.progress { background: #e0f2fe; color: #0284c7; }
  .vt-badge.todo { background: #f1f5f9; color: #64748b; }
  .vt-badge.secure { background: rgba(37, 99, 235, 0.1); color: #2563eb; }

  .vt-progress-row {
    margin-top: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .vt-progress-label {
    font-size: 10.5px;
    font-weight: 700;
    color: #475569;
  }
  .vt-progress-bar-wrap {
    flex: 1;
    height: 6px;
    background: #e2e8f0;
    border-radius: 99px;
    overflow: hidden;
  }
  .vt-progress-bar {
    height: 100%;
    background: #2563eb;
    border-radius: 99px;
  }
  .vt-progress-percent {
    font-size: 11px;
    font-weight: 800;
    color: #0f172a;
  }

  /* Console logs */
  .console {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    line-height: 1.5;
    color: #cbd5e1;
    background: #020617;
    padding: 12px;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.06);
    text-align: left;
  }
  .console-line { font-family: 'JetBrains Mono', monospace; }
  .console-line.text-green { color: #10b981; }
  .console-line.text-cyan { color: #06b6d4; }

  /* Security grid */
  .grid-2x2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
  .vt-grid-item {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    text-align: left;
  }
  .vt-grid-lbl {
    font-size: 9px;
    font-weight: 700;
    color: #64748b;
    text-transform: uppercase;
  }
  .vt-grid-val {
    font-size: 12px;
    font-weight: 800;
  }
  .vt-grid-val.text-green { color: #059669; }
  .vt-grid-val.text-blue { color: #2563eb; }

  /* Live metrics */
  .vt-live-ping {
    font-size: 10.5px;
    font-weight: 800;
    color: #10b981;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .ping-dot {
    width: 6px;
    height: 6px;
    background: #10b981;
    border-radius: 50%;
    display: inline-block;
    animation: pulse 1.5s infinite;
  }
  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.6); opacity: 0.4; }
    100% { transform: scale(1); opacity: 1; }
  }

  .vt-metric-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 4px;
  }
  .vt-metric-item {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 10px 14px;
    display: flex;
    flex-direction: column;
  }
  .vt-metric-item .lbl { font-size: 9px; color: #64748b; font-weight: 700; text-transform: uppercase; }
  .vt-metric-item .val { font-size: 15px; color: #0f172a; font-weight: 900; margin-top: 2px; }

  .vt-log-row {
    border-top: 1px solid #f1f5f9;
    padding-top: 10px;
  }
  .vt-log-title {
    font-size: 10px;
    font-weight: 800;
    color: #475569;
    margin-bottom: 8px;
    text-transform: uppercase;
  }
  .vt-endpoints-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .endpoint-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 10px;
    color: #334155;
    background: #f8fafc;
    padding: 6px 10px;
    border-radius: 8px;
    font-family: 'JetBrains Mono', monospace;
  }
  .endpoint-item span { font-family: 'JetBrains Mono', monospace; }
  .endpoint-item .dot { width: 5px; height: 5px; border-radius: 50%; display: inline-block; }
  .endpoint-item .dot.green { background: #10b981; }
  .endpoint-item .ms { margin-left: auto; font-weight: 700; color: #64748b; }

  .vt-item.vt-left .vt-content { order: 1; }
  .vt-item.vt-left .vt-visual { order: 2; }
  .vt-item.vt-right .vt-content { order: 2; }
  .vt-item.vt-right .vt-visual { order: 1; }


  /* ── 6. RESULTS / CASE STUDY STAT CARDS ── */
  .vd-results-section { background: #f8fafc; padding: 104px 24px; border-bottom: 1px solid #f1f5f9; text-align: center; }
  .vd-results-section .vd-badge-tag { margin-left: auto; margin-right: auto; color: ${primaryColor}; background: ${glowRgba.replace('0.3', '0.1')}; border-color: ${glowRgba.replace('0.3', '0.25')}; }
  .vd-results-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; max-width: 1150px; margin: 56px auto 0; }
  .vd-result-card {
    background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 26px; padding: 40px 34px;
    text-align: left; position: relative; overflow: hidden;
    transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
  }
  .vd-result-card:hover { 
    transform: translateY(-8px); 
    box-shadow: 0 28px 64px rgba(15,23,42,0.1); 
    border-color: ${primaryColor};
  }
  .vd-result-card::after {
    content: ''; position: absolute; right: -40px; top: -40px; width: 140px; height: 140px;
    border-radius: 50%; background: ${glowRgba.replace('0.3', '0.08')}; pointer-events: none;
  }
  .vd-result-num { font-size: 46px; font-weight: 900; line-height: 1; background: linear-gradient(120deg, ${gradFrom}, ${primaryColor}); -webkit-background-clip: text; background-clip: text; color: transparent; margin-bottom: 16px; }
  .vd-result-label { font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.1px; color: #334155; margin-bottom: 10px; }
  .vd-result-desc { font-size: 14px; color: #64748b; line-height: 1.65; }

  /* ── 7. PRICING PLANS ── */
  .vd-pricing-section { background: #ffffff; padding: 40px 24px 40px; border-bottom: none; text-align: center; }
  .vd-pricing-section .vd-badge-tag {
    margin-left: auto;
    margin-right: auto;
    color: #0f172a;
    background: rgba(15, 23, 42, 0.05);
    border-color: rgba(15, 23, 42, 0.15);
  }
  .vd-pricing-rows-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 1200px;
    margin: 56px auto 0;
  }
  .vd-pricing-row {
    display: grid;
    grid-template-columns: 280px 1fr 180px;
    gap: 40px;
    align-items: center;
    background: #ffffff;
    border: 1.5px solid #e2e8f0;
    border-radius: 24px;
    padding: 32px 32px;
    text-align: left;
    transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.02);
  }
  .vd-pricing-row:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 48px rgba(15, 23, 42, 0.05);
    border-color: #0f172a;
  }
  .vd-pricing-row-featured {
    background: #faf6eb; /* Cream background */
    border-color: #e4dcd0;
    box-shadow: 0 20px 48px rgba(139, 92, 26, 0.04);
  }
  .vd-pricing-row-featured:hover {
    border-color: #b59c77;
    box-shadow: 0 24px 60px rgba(139, 92, 26, 0.08);
  }
  
  /* Meta section */
  .vd-prow-meta {
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
  }
  .vd-prow-badge {
    align-self: flex-start;
    background: #0f172a;
    color: #ffffff;
    font-size: 9px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 4px 10px;
    border-radius: 99px;
    margin-bottom: 4px;
  }
  .vd-prow-name {
    font-size: 20px;
    font-weight: 900;
    text-transform: uppercase;
    color: #0f172a;
    letter-spacing: 0.5px;
    margin: 0;
  }
  .vd-prow-tagline {
    font-size: 13px;
    color: #64748b;
    font-weight: 600;
    margin: 0;
    line-height: 1.4;
  }
  .vd-pricing-row-featured .vd-prow-tagline {
    color: #475569;
  }
  .vd-prow-price {
    font-size: 28px;
    font-weight: 900;
    color: #0f172a;
    margin-top: 4px;
    display: flex;
    align-items: baseline;
    gap: 4px;
  }
  .vd-prow-price-note {
    font-size: 13px;
    color: #64748b;
    font-weight: 700;
  }
  .vd-pricing-row-featured .vd-prow-price-note {
    color: #475569;
  }

  /* Features section */
  .vd-prow-features {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px 24px;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .vd-prow-features li {
    font-size: 13.5px;
    color: #334155;
    display: flex;
    gap: 10px;
    align-items: flex-start;
    font-weight: 600;
    line-height: 1.4;
  }
  .vd-prow-check {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: rgba(15, 23, 42, 0.05);
    color: #0f172a;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 900;
    border: 1px solid #94a3b8;
  }
  .vd-pricing-row-featured .vd-prow-check {
    background: rgba(139, 92, 26, 0.08);
    color: #854d0e;
    border-color: #d97706;
  }

  /* Button section */
  .vd-prow-action {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  .vd-prow-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    color: #0f172a;
    border: 1.5px solid #0f172a;
    border-radius: 12px;
    padding: 12px 24px;
    font-size: 13.5px;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.25s ease;
    width: 100%;
    max-width: 180px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.04);
  }
  .vd-prow-btn:hover {
    background: #faf6eb; /* Cream hover */
    color: #0f172a;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.06);
  }
  .vd-pricing-row-featured .vd-prow-btn {
    background: #0f172a;
    color: #ffffff;
    border-color: #0f172a;
    box-shadow: 0 4px 12px rgba(15,23,42,0.1);
  }
  .vd-pricing-row-featured .vd-prow-btn:hover {
    background: #ffffff;
    color: #0f172a;
    box-shadow: 0 6px 16px rgba(15,23,42,0.08);
  }

  /* ── 8. TESTIMONIAL ── */
  .vd-testimonial-section { background: #f8fafc; padding: 104px 24px; border-bottom: 1px solid #f1f5f9; }
  .vd-testimonial-grid { display: grid; grid-template-columns: 1fr 540px; gap: 60px; align-items: center; max-width: 1150px; margin: 0 auto; }
  .vd-testimonial-section .vd-badge-tag { color: ${primaryColor}; background: ${glowRgba.replace('0.3', '0.1')}; border-color: ${glowRgba.replace('0.3', '0.25')}; }
  .vd-testimonial-card {
    background: linear-gradient(160deg, ${gradFrom} 0%, ${primaryColor} 100%);
    color: #ffffff; border-radius: 32px; padding: 60px 44px 44px;
    position: relative; box-shadow: 0 40px 100px ${glowRgba.replace('0.3', '0.5')}, 0 12px 28px rgba(0,0,0,0.12); 
    text-align: center; overflow: hidden; border: 1px solid rgba(255,255,255,0.15);
    transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
  }
  .vd-testimonial-card:hover { transform: translateY(-8px); box-shadow: 0 48px 120px ${glowRgba.replace('0.3', '0.55')}, 0 16px 36px rgba(0,0,0,0.15); }
  .vd-testimonial-card::before {
    content: '"'; position: absolute; top: -35px; right: 25px; font-size: 200px; font-weight: 900;
    color: rgba(255,255,255,0.08); font-family: Georgia, serif; line-height: 1;
  }
  .vd-avatar-top-floating {
    width: 92px; height: 92px; border-radius: 50%; border: 5px solid #ffffff;
    position: absolute; top: -46px; left: 50%; transform: translateX(-50%);
    overflow: hidden; background: linear-gradient(135deg, ${gradFrom}, ${primaryColor});
    box-shadow: 0 16px 40px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center;
    color: #ffffff; font-weight: 900; font-size: 32px;
  }
  .vd-avatar-top-floating img { width: 100%; height: 100%; object-fit: cover; }
  .vd-stars { color: #fbbf24; font-size: 21px; margin-bottom: 18px; margin-top: 12px; letter-spacing: 4px; }
  .vd-testimonial-quote { font-size: 17px; line-height: 1.75; color: #f0f7ff; margin-bottom: 28px; font-style: italic; }
  .vd-testimonial-author { font-size: 17px; font-weight: 800; color: #ffffff; }
  .vd-testimonial-role { font-size: 13px; color: #cbd5e1; margin-top: 4px; }

  /* ── 9. FAQ ── */
  .vd-faq-section { background: #ffffff; padding: 40px 24px 90px; border-bottom: 1px solid #f1f5f9; text-align: center; }
  .vd-faq-section .vd-badge-tag { margin-left: auto; margin-right: auto; color: ${primaryColor}; background: ${glowRgba.replace('0.3', '0.1')}; border-color: ${glowRgba.replace('0.3', '0.25')}; }
  .vd-faq-grid-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; max-width: 1150px; margin: 52px auto 0; text-align: left; }
  details.vd-faq-box {
    background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 18px; overflow: hidden;
    transition: all 0.28s cubic-bezier(0.16,1,0.3,1);
  }
  details.vd-faq-box[open] { background: #ffffff; border-color: ${primaryColor}; box-shadow: 0 16px 40px rgba(15,23,42,0.08), inset 0 1px 0 rgba(255,255,255,0.5); }
  details.vd-faq-box summary {
    cursor: pointer; font-weight: 700; color: #0f172a; font-size: 15px;
    list-style: none; padding: 22px 28px; display: flex; justify-content: space-between; align-items: center; gap: 16px;
    transition: all 0.2s ease;
  }
  details.vd-faq-box:hover summary { color: ${primaryColor}; }
  details.vd-faq-box summary::-webkit-details-marker { display: none; }
  details.vd-faq-box summary::after {
    content: '+'; font-size: 24px; color: ${primaryColor}; flex-shrink: 0; font-weight: 700;
    width: 32px; height: 32px; border-radius: 50%; background: ${glowRgba.replace('0.3', '0.1')};
    display: flex; align-items: center; justify-content: center; transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
    border: 1px solid ${glowRgba.replace('0.3', '0.25')};
  }
  details.vd-faq-box[open] summary::after { content: '−'; transform: rotate(180deg) scale(1.1); background: ${glowRgba.replace('0.3', '0.2')}; }
  .vd-faq-ans-text { padding: 0 28px 24px; font-size: 14px; color: #64748b; line-height: 1.75; border-top: 1.5px solid #f1f5f9; padding-top: 18px; animation: fadeIn 0.3s ease; }

  /* ── 10. CTA BANNER (white theme) ── */
  .vd-cta-section {
    background: #ffffff;
    padding: 100px 24px;
    position: relative;
    overflow: hidden;
    text-align: center;
    border-top: 1px solid #f1f5f9;
    border-bottom: 1px solid #f1f5f9;
  }
  .vd-cta-section::before {
    display: none; /* Remove dark gradient glowing overlays */
  }
  .vd-cta-inner { position: relative; z-index: 2; max-width: 780px; margin: 0 auto; animation: fadeInUp 0.8s ease-out; }
  .vd-cta-section .vd-badge-tag {
    margin: 0 auto 24px;
    color: #0f172a;
    background: rgba(15, 23, 42, 0.05);
    border-color: rgba(15, 23, 42, 0.15);
  }
  .vd-cta-title { font-size: clamp(32px, 5vw, 52px); font-weight: 900; color: #0f172a; letter-spacing: -1.8px; line-height: 1.1; margin-bottom: 20px; }
  .vd-cta-title span { background: linear-gradient(135deg, ${gradFrom}, ${primaryColor}); -webkit-background-clip: text; background-clip: text; color: transparent; }
  .vd-cta-desc { font-size: 17px; color: #475569; line-height: 1.75; margin-bottom: 40px; }
  .vd-cta-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
  
  /* Overrides for CTA buttons */
  .vd-cta-section .vd-btn-primary {
    background: #0f172a !important;
    color: #ffffff !important;
    border: 1.5px solid #0f172a !important;
    box-shadow: 0 4px 14px rgba(15, 23, 42, 0.15);
  }
  .vd-cta-section .vd-btn-primary:hover {
    background: #ffffff !important;
    color: #0f172a !important;
    border-color: #0f172a !important;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(15, 23, 42, 0.1);
  }
  .vd-cta-section .vd-btn-ghost {
    background: #ffffff !important;
    color: #0f172a !important;
    border: 1.5px solid #0f172a !important;
    box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05);
  }
  .vd-cta-section .vd-btn-ghost:hover {
    background: #0f172a !important;
    color: #ffffff !important;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(15, 23, 42, 0.15);
  }

  /* ── 11. CONTACT ── */
  .vd-contact-section { background: #f8fafc; padding: 104px 24px; border-bottom: 1px solid #f1f5f9; text-align: center; }
  .vd-contact-section .vd-badge-tag { margin-left: auto; margin-right: auto; color: ${primaryColor}; background: ${glowRgba.replace('0.3', '0.1')}; border-color: ${glowRgba.replace('0.3', '0.25')}; }
  .vd-contact-grid { display: grid; grid-template-columns: 1fr 560px; gap: 50px; max-width: 1150px; margin: 52px auto 0; text-align: left; }
  .vd-2x2-info-chips { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .vd-info-chip { background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 24px; padding: 32px; text-align: center; transition: all 0.3s cubic-bezier(0.16,1,0.3,1); }
  .vd-info-chip:hover { 
    transform: translateY(-6px); 
    box-shadow: 0 20px 50px rgba(15,23,42,0.08); 
    border-color: ${primaryColor};
  }
  .vd-info-chip.blue { 
    background: linear-gradient(150deg, ${gradFrom}, ${primaryColor}); 
    color: #ffffff; 
    border-color: transparent; 
    box-shadow: 0 24px 56px ${glowRgba.replace('0.3', '0.38')};
  }
  .vd-info-chip.blue:hover { box-shadow: 0 30px 70px ${glowRgba.replace('0.3', '0.45')}; }
  .vd-info-chip .ic-icon { font-size: 32px; margin-bottom: 12px; }
  .vd-info-chip .ic-title { font-size: 16px; font-weight: 800; margin-bottom: 6px; }
  .vd-info-chip .ic-sub { font-size: 13px; color: #64748b; font-weight: 600; }
  .vd-info-chip.blue .ic-sub { color: #e2e8f0; }

  .vd-contact-form-wrap { background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 28px; padding: 42px; box-shadow: 0 24px 56px rgba(15,23,42,0.08); }
  .vd-form-group { margin-bottom: 20px; }
  .vd-form-group input, .vd-form-group textarea {
    width: 100%; padding: 16px 22px; border-radius: 14px; border: 1.5px solid #e2e8f0;
    font-size: 14.5px; background: #f8fafc; color: #0f172a; outline: none; transition: all 0.3s ease;
    font-family: 'Inter', sans-serif;
  }
  .vd-form-group input::placeholder, .vd-form-group textarea::placeholder { color: #94a3b8; }
  .vd-form-group input:focus, .vd-form-group textarea:focus { 
    border-color: ${primaryColor}; 
    background: #ffffff; 
    box-shadow: 0 0 0 5px ${glowRgba.replace('0.3', '0.12')}, 0 2px 8px rgba(15,23,42,0.04);
  }

  /* ── USE CASES / FLEXIBLE WAYS ── */
  .vd-usecases-section { background: #ffffff; padding: 110px 24px; border-bottom: 1px solid #f1f5f9; }
  .vd-usecases-section .vd-badge-tag { margin: 0 auto 18px; color: ${primaryColor}; background: ${glowRgba.replace('0.3', '0.1')}; border-color: ${glowRgba.replace('0.3', '0.25')}; display: inline-flex !important; }
  .vd-usecases-header { text-align: center; max-width: 800px; margin: 0 auto 64px; }
  .vd-usecases-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; max-width: 1200px; margin: 0 auto; }
  
  .vd-usecase-card {
    background: #ffffff; border-radius: 24px; overflow: hidden;
    border: 1.5px solid #e2e8f0;
    box-shadow: 0 12px 32px rgba(15,23,42,0.06);
    transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
    display: flex; flex-direction: column; height: 100%;
    position: relative;
  }
  .vd-usecase-card::before {
    content: ''; position: absolute; inset: 0 0 auto 0; height: 4px;
    background: linear-gradient(90deg, ${gradFrom}, ${primaryColor}, #22d3ee);
    opacity: 0; transition: opacity 0.3s ease; z-index: 3;
  }
  .vd-usecase-card:hover {
    transform: translateY(-12px);
    border-color: ${primaryColor};
    box-shadow: 0 32px 72px ${glowRgba.replace('0.3', '0.18')}, 0 12px 28px rgba(15,23,42,0.08);
  }
  .vd-usecase-card:hover::before { opacity: 1; }

  .vd-usecase-image-wrap {
    width: 100%; height: 220px; overflow: hidden; position: relative;
    background: linear-gradient(135deg, ${glowRgba.replace('0.3', '0.1')}, #f8fafc);
  }
  .vd-usecase-image { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s cubic-bezier(0.16,1,0.3,1); }
  .vd-usecase-card:hover .vd-usecase-image { transform: scale(1.08); }

  .vd-usecase-content { padding: 32px; flex: 1; display: flex; flex-direction: column; justify-content: space-between; gap: 16px; }
  .vd-usecase-title { font-size: 20px; font-weight: 800; color: #0f172a; line-height: 1.3; margin: 0; }
  .vd-usecase-desc { font-size: 14px; color: #64748b; line-height: 1.65; margin: 0; flex: 1; }

  .vd-usecase-link {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 14px; font-weight: 700; color: ${primaryColor};
    text-decoration: none; transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
    border-bottom: 2px solid ${primaryColor}; padding-bottom: 2px; width: fit-content;
  }
  .vd-usecase-link:hover { 
    gap: 12px;
    color: ${gradTo};
    border-color: ${gradTo};
  }

  /* Shared section headings */
  .vd-section-h2 { font-size: clamp(28px, 3.6vw, 40px) !important; font-weight: 900 !important; color: #0f172a !important; letter-spacing: -0.8px !important; margin: 0 !important; line-height: 1.15 !important; }
  .vd-section-p { color: #64748b !important; margin-top: 10px !important; line-height: 1.65 !important; font-size: 15px !important; }

  /* ── COMPREHENSIVE TABLET & MOBILE RESPONSIVE DESIGN ── */
  @media (max-width: 1024px) {
    .ws-container { grid-template-columns: 1fr; gap: 40px; }
    .ws-title { font-size: clamp(28px, 4.8vw, 42px); }
    .ws-desc { max-width: 100%; }

    .sas-card-row,
    .sas-card-row.image-left,
    .sas-card-row.image-right {
      padding: 24px 28px;
      gap: 24px;
      border-radius: 24px;
      grid-template-columns: 140px 1fr !important;
    }
    .sas-card-row.image-right .sas-col-visual {
      order: -1;
    }
    .sas-circle-frame {
      width: 130px;
      height: 130px;
      border-radius: 18px;
    }

    /* Hero Section Tablet */
    .sh-hero-box {
      grid-template-columns: 1fr 380px;
      gap: 28px;
      padding: 20px 0 36px;
    }
    .sh-phone-frame {
      width: 260px;
      min-height: 440px;
    }
    .sh-float-card-1 { left: -30px; }
    .sh-float-card-2 { left: -40px; width: 150px; }
    .sh-grid-row {
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .sh-card-light {
      grid-column: 1 / -1;
    }

    .vd-hero-grid, .vd-welcome-grid, .vd-pod-grid, .vd-testimonial-grid, .vd-contact-grid { grid-template-columns: 1fr; }
    .vd-services-grid, .vd-results-grid, .vd-process-timeline, .vd-usecases-grid, .vd-faq-grid-2col { grid-template-columns: 1fr 1fr; }
    .vd-pricing-row {
      grid-template-columns: 1fr;
      gap: 24px;
      padding: 24px;
      max-width: 460px;
      margin: 0 auto;
    }
    .vd-prow-features {
      grid-template-columns: 1fr;
      gap: 12px;
    }
    .vd-prow-action {
      justify-content: center;
    }
    .vd-prow-btn {
      max-width: 100%;
    }
    .vd-pricing-row-featured {
      transform: none !important;
    }
    .vd-pricing-row-featured:hover {
      transform: translateY(-4px) !important;
    }
    .vd-process-timeline::before { display: none; }
    .vd-hero-stats-bar { grid-template-columns: 1fr 1fr; }
    .vd-stat-item { border-right: none; border-bottom: 1px solid #e2e8f0; padding-bottom: 14px; }
    .vd-hero-visual { transform: none; }
    .vd-contact-form-wrap { padding: 32px 24px; }
  }

  @media (max-width: 768px) {
    .ws-section { padding: 60px 16px; }
    .ws-grid { grid-template-columns: 1fr 1fr; gap: 14px; }
    .ws-card-squircle-top, .ws-card-squircle-bottom { height: 160px; border-radius: 20px; }
    .ws-card-pill-beige, .ws-card-pill-dark { height: 170px; border-radius: 70px; padding: 16px 10px; }
    .ws-stat-val { font-size: 22px; }

    .sas-section { padding: 60px 16px; }
    .sas-header { margin-bottom: 32px; }
    .sas-stack { gap: 18px; }

    /* Tablet: compact side-by-side cards — all image-left */
    .sas-card-row,
    .sas-card-row.image-left,
    .sas-card-row.image-right {
      padding: 18px 20px;
      border-radius: 20px;
      gap: 16px;
      grid-template-columns: 100px 1fr !important;
    }
    .sas-card-row.image-right .sas-col-visual {
      order: -1;
    }
    .sas-circle-frame {
      width: 90px;
      height: 90px;
      border-radius: 14px;
    }
    .sas-category-pill { font-size: 9px; letter-spacing: 1px; }
    .sas-card-title { font-size: 16px; }
    .sas-card-role { font-size: 11px; margin-bottom: 6px; }
    .sas-bullets-grid {
      grid-template-columns: 1fr;
      gap: 4px;
      margin: 4px 0 8px;
    }
    .sas-bullets-grid li { font-size: 11px; }
    .sas-check { width: 14px; height: 14px; font-size: 8px; }
    .sas-card-footer {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
    }
    .sas-btn-learn { padding: 8px 14px; font-size: 11.5px; }
    .sas-widget-badge { font-size: 9px; padding: 3px 8px; }

    /* ── Hero Section Mobile ── */
    .sh-section {
      padding: 80px 16px 30px;
    }
    .sh-hero-box {
      grid-template-columns: 1fr !important;
      gap: 32px;
      padding: 16px 0 32px;
    }
    .sh-hero-left {
      text-align: center;
      padding: 0 8px;
    }
    .sh-title {
      font-size: clamp(26px, 7vw, 38px) !important;
      text-align: center;
    }
    .sh-desc {
      text-align: center;
      font-size: 14px !important;
    }
    .sh-action-btns {
      flex-direction: column;
      gap: 16px;
      justify-content: center;
    }
    .sh-hero-chips {
      margin-left: 0;
      justify-content: center;
    }
    .sh-hero-right {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .sh-phone-wrapper {
      position: relative;
      width: 100%;
      max-width: 280px;
      margin: 0 auto;
    }
    .sh-phone-frame {
      width: 100%;
      max-width: 260px;
      min-height: 400px;
      margin: 0 auto;
    }
    .sh-float-card {
      display: none !important;
    }
    .sh-grid-row {
      grid-template-columns: 1fr !important;
      gap: 16px;
    }
    .sh-card-dark,
    .sh-card-blue {
      min-height: 160px;
    }
    .sh-card-light {
      grid-template-columns: 1fr !important;
      min-height: auto;
    }
    .sh-feat-grid {
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }
    .sh-big-num { font-size: 36px; }

    .vd-hero-section { padding: 120px 16px 140px; }
    .vd-hero-stats-bar { grid-template-columns: 1fr; padding: 22px; margin-top: -40px; }
    .vd-services-grid, .vd-pricing-rows-container, .vd-results-grid, .vd-process-timeline, .vd-faq-grid-2col, .vd-2x2-info-chips, .vd-usecases-grid { grid-template-columns: 1fr; gap: 20px; }
    .vd-check-grid { grid-template-columns: 1fr; }

    /* Mobile Alternating Timeline */
    .vd-process-timeline-v2 {
      margin-top: 40px;
    }
    .vt-line, .vt-dot {
      display: none !important;
    }
    .vt-item {
      flex-direction: column !important;
      gap: 24px !important;
      margin-bottom: 48px !important;
      align-items: flex-start !important;
    }
    .vt-content {
      width: 100% !important;
      order: 1 !important;
    }
    .vt-visual {
      width: 100% !important;
      order: 2 !important;
    }
    .vt-image-container {
      padding: 16px;
      border-radius: 16px;
    }
    .vd-hero-float-chip.chip-1 { right: 0; }
    .vd-hero-float-chip.chip-2 { left: 0; }
    .vd-contact-form-wrap { padding: 24px 18px; border-radius: 20px; }
    .vd-pricing-card-featured { transform: none; }
    .vd-pricing-card-featured:hover { transform: translateY(-6px); }
    .vd-pod-grid { gap: 32px; }
    .vd-pod-left h2 { font-size: clamp(22px, 5vw, 32px); }
    .vd-testimonial-card { padding: 48px 24px 32px; border-radius: 24px; }
    .vd-testimonial-quote { font-size: 15px; }
  }

  /* ── Small phones: stack service cards vertically ── */
  @media (max-width: 480px) {
    .ws-grid { grid-template-columns: 1fr; gap: 12px; }

    .sas-card-row,
    .sas-card-row.image-left,
    .sas-card-row.image-right {
      grid-template-columns: 1fr !important;
      padding: 24px 20px;
      gap: 16px;
      text-align: center;
    }
    .sas-card-row.image-left .sas-col-visual,
    .sas-card-row.image-right .sas-col-visual {
      order: 1;
      justify-content: center;
    }
    .sas-card-row.image-left .sas-col-content,
    .sas-card-row.image-right .sas-col-content {
      order: 2;
    }
    .sas-col-content {
      align-items: center;
      text-align: center;
    }
    .sas-content-header { text-align: center; }
    .sas-circle-frame {
      width: 120px;
      height: 120px;
      margin: 0 auto;
    }
    .sas-btn-learn {
      width: 100%;
      justify-content: center;
    }
    .sas-card-footer {
      align-items: center;
    }
  }
`;


