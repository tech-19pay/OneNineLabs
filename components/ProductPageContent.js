"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProductPageContent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="product-page-wrapper">
      <Header variant="light" />

      {/* Hero Section */}
      <section className="product-hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
        </div>
        <div className="hero-content">
          <div className="badge">✨ OUR LATEST PRODUCT</div>
          <h1 className="hero-title">
            Stenography Practice & <br />
            <span className="text-gradient">Speed Test Apps</span>
          </h1>
          <p className="hero-subtitle">
            Test your stenography speed with precision. Get real-time chord analytics, accurate WPM tracking, and instant feedback to evaluate your performance.
          </p>
          <div className="hero-highlight">
            ⌨️ You can easily attach an external keyboard to your mobile app for typing practice.
          </div>
          <div className="hero-actions">
            <Link href="#features" className="btn-primary">Explore Features</Link>
            <Link href="/contact" className="btn-secondary">Contact us for More </Link>
          </div>
        </div>
      </section>

      {/* Main Details Section */}
      <section id="features" className="product-details-section">
        <div className="details-container">
          <div className="section-header">
            <h2>Complete Typing Features
            </h2>
            <p>Take tests, track every single mistake, download detailed PDF reports, and practice in both Hindi and English.</p>
          </div>

          <div className="features-grid">
            {/* Feature 1 */}
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M12 6v6l4 2" /><path d="M16 3l2 2" /><path d="M8 3L6 5" /></svg>
              </div>
              <h3>Live Speed & Mistake Tracking</h3>
              <p>Take a typing test and see your speed in Words Per Minute (WPM). The app will instantly show you exactly how many mistakes you made.</p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="12" y1="18" x2="12" y2="12" /><polyline points="9 15 12 18 15 15" /></svg>
              </div>
              <h3>Download Detailed PDF Reports</h3>
              <p>Download a full PDF report of your test. It shows every single detail: your total words, where you made mistakes, spacing errors, and missed full stops.</p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21V4a2 2 0 0 1 2-2h8l6 6v13" /><path d="M9 13h6" /><path d="M9 17h3" /><text x="7" y="11" fontSize="7" fill="#10b981" stroke="none" fontWeight="bold">अ</text><text x="15" y="11" fontSize="7" fill="#10b981" stroke="none" fontWeight="bold">A</text></svg>
              </div>
              <h3>Hindi & English Support</h3>
              <p>Practice and test your typing in both Hindi and English. The app fully supports both languages for all your speed tests and reviews.</p>
            </div>

            {/* Feature 4 */}
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
              </div>
              <h3>Upload PDFs for Practice</h3>
              <p>You can upload your own PDF documents in Hindi or English. The app will read the text so you can type, practice, and review your performance directly.</p>
            </div>

            {/* Feature 5 */}
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /><line x1="12" y1="2" x2="12" y2="6" /></svg>
              </div>
              <h3>Custom Timer & Goals</h3>
              <p>Set personalized timers (1-minute, 5-minute, or custom) and word count goals to challenge yourself and track your daily progress.</p>
            </div>

            {/* Feature 6 */}
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
              </div>
              <h3>As Per Your Requirment</h3>
              <p>Need something specific? If you have any additional custom feature requests, we will build and provide them exactly according to your unique requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="product-cta">
        <div className="cta-box">
          <h2>Ready to Master the Keyboard?</h2>
          <p>Join thousands of users who have transformed their productivity.</p>
          <Link href="/contact" className="btn-primary">Start Your Free Trial</Link>
        </div>
      </section>

      <Footer />

      <style dangerouslySetInnerHTML={{
        __html: `
        .product-page-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: #f8fafc;
          font-family: 'Inter', sans-serif;
        }

        /* Hero */
        .product-hero {
          position: relative;
          padding: 160px 24px 100px;
          text-align: center;
          overflow: hidden;
          background: #ffffff;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
        }

        .orb-1 {
          width: 500px;
          height: 500px;
          background: #6366f1;
          top: -100px;
          left: -100px;
        }

        .orb-2 {
          width: 600px;
          height: 600px;
          background: #0ea5e9;
          bottom: -200px;
          right: -100px;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 900px;
          margin: 0 auto;
        }

        .badge {
          display: inline-block;
          padding: 8px 16px;
          background: rgba(99, 102, 241, 0.1);
          color: #4f46e5;
          border-radius: 9999px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: clamp(40px, 6vw, 72px);
          font-weight: 900;
          color: #0f172a;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -0.03em;
        }

        .text-gradient {
          background: linear-gradient(135deg, #6366f1, #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 18px;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 24px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-highlight {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #f0fdf4;
          color: #15803d;
          padding: 12px 24px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 40px;
          border: 1px solid #bbf7d0;
          box-shadow: 0 4px 12px rgba(21, 128, 61, 0.05);
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: #0f172a;
          color: #ffffff;
          padding: 14px 28px;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 10px 20px rgba(15, 23, 42, 0.15);
        }

        .btn-primary:hover {
          background: #1e293b;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: #ffffff;
          color: #0f172a;
          padding: 14px 28px;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          border: 1px solid #e2e8f0;
        }

        .btn-secondary:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
        }

        /* Details */
        .product-details-section {
          position: relative;
          padding: 100px 24px;
          background: #edf6fd;
          background-image: 
            radial-gradient(circle at 15% 20%, rgba(224, 242, 254, 0.9) 0%, transparent 50%),
            radial-gradient(circle at 85% 35%, rgba(186, 230, 253, 0.7) 0%, transparent 55%),
            radial-gradient(circle at 50% 90%, rgba(240, 249, 255, 0.95) 0%, transparent 60%);
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
        }

        .details-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px;
        }

        .section-header h2 {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 20px;
        }

        .section-header p {
          font-size: 17px;
          color: #64748b;
          line-height: 1.6;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .feature-card {
          background: #ffffff;
          padding: 32px;
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.04);
        }

        .feature-icon {
          font-size: 32px;
          width: 64px;
          height: 64px;
          background: #f0f9ff;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          margin-bottom: 24px;
        }

        .feature-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 12px;
        }

        .feature-card p {
          font-size: 15px;
          color: #475569;
          line-height: 1.6;
        }

        /* CTA */
        .product-cta {
          padding: 80px 24px;
          background: #ffffff;
        }

        .cta-box {
          max-width: 1000px;
          margin: 0 auto;
          background: linear-gradient(135deg, #0ea5e9, #6366f1);
          padding: 60px 40px;
          border-radius: 32px;
          text-align: center;
          color: #ffffff;
          box-shadow: 0 25px 50px rgba(99, 102, 241, 0.2);
        }

        .cta-box h2 {
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 800;
          margin-bottom: 16px;
        }

        .cta-box p {
          font-size: 18px;
          opacity: 0.9;
          margin-bottom: 32px;
        }

        /* Steno Section */
        .steno-section {
          padding: 100px 24px;
          background: #ffffff;
        }

        .steno-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 60px;
          flex-wrap: wrap;
        }

        .steno-image-wrapper {
          flex: 1;
          min-width: 300px;
          position: relative;
        }

        .steno-image {
          width: 100%;
          border-radius: 24px;
          box-shadow: 0 30px 60px -15px rgba(0,0,0,0.15);
          position: relative;
          z-index: 10;
        }

        .steno-glow {
          position: absolute;
          inset: -20px;
          background: linear-gradient(135deg, #6366f1, #0ea5e9);
          filter: blur(40px);
          opacity: 0.15;
          z-index: 0;
          border-radius: 40px;
        }

        .steno-content {
          flex: 1;
          min-width: 300px;
        }

        .steno-badge {
          background: rgba(14, 165, 233, 0.1);
          color: #0ea5e9;
        }

        .steno-content h2 {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 24px;
          line-height: 1.1;
        }

        .steno-content p {
          font-size: 18px;
          color: #475569;
          line-height: 1.7;
          margin-bottom: 32px;
        }

        .steno-features {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .steno-features li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          font-weight: 600;
          color: #1e293b;
        }

        .steno-features li span {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #e0f2fe;
          color: #0284c7;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        /* Mobile & Tablet Responsiveness */
        @media (max-width: 1024px) {
          .product-hero {
            padding: 120px 24px 80px;
          }
          .hero-title {
            font-size: clamp(36px, 5vw, 56px);
          }
          .hero-subtitle {
            font-size: 18px;
          }
          .product-details-section, .product-cta {
            padding: 80px 24px;
          }
        }

        @media (max-width: 768px) {
          .product-hero {
            padding: 100px 16px 60px;
          }
          .hero-title {
            font-size: clamp(28px, 8vw, 40px);
          }
          .hero-subtitle {
            font-size: 16px;
            margin-bottom: 32px;
          }
          .hero-actions {
            flex-direction: column;
            gap: 16px;
            width: 100%;
          }
          .btn-primary, .btn-secondary {
            width: 100%;
            display: block;
            text-align: center;
          }
          .product-details-section, .product-cta {
            padding: 60px 16px;
          }
          .section-header h2 {
            font-size: 28px;
          }
          .section-header p {
            font-size: 16px;
          }
          .features-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .cta-box {
            padding: 40px 24px;
          }
          .cta-box h2 {
            font-size: 28px;
          }
          .cta-box p {
            font-size: 16px;
          }
        }
      `}} />
    </div>
  );
}
