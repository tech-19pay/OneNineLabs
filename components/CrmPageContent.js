"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CrmPageContent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="product-page-wrapper">
      <Header variant="light" />

      {/* Hero Section */}
      <section className="product-hero split-hero">
        <div className="hero-background">
          <div className="hero-grid-pattern"></div>
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
        </div>
        <div className="hero-content-split">
          <div className="hero-text-column">
            <div className="badge animate-fade-in">🌟 NEXT-GEN CRM</div>
            <h1 className="hero-title animate-slide-up">
              The Ultimate CRM for <br />
              <span className="text-gradient">Explosive Growth</span>
            </h1>
            <p className="hero-subtitle animate-slide-up-delay">
              Manage your leads, close deals faster, and track your entire sales pipeline with our intuitive and powerful Customer Relationship Management software.
            </p>
            <div className="hero-highlight animate-fade-in-delay">
              💼 Fully customizable dashboards & workflows.
            </div>
            <div className="hero-actions animate-slide-up-delay-2">
              <Link href="#features" className="btn-primary">Explore Features</Link>
              <Link href="/contact" className="btn-secondary">Request Demo</Link>
            </div>
          </div>

          <div className="hero-visual-column">
            <div className="floating-composition">
              <div className="float-card card-deal animate-scale-in">
                <div className="card-icon">💰</div>
                <div className="card-info">
                  <div className="card-title">Deal Won!</div>
                  <div className="card-desc">Acme Corp - 45,000</div>
                </div>
              </div>

              <div className="float-card card-user animate-scale-in-delay-1">
                <div className="avatar">CRM</div>
                <div className="card-info" >
                  <div className="card-title"></div>
                  <div className="card-desc">New Lead Added</div>
                </div>
                <div className="status-dot"></div>
              </div>

              <div className="float-card card-chart animate-scale-in-delay-2">
                <div className="card-title">Revenue Growth</div>
                <div className="mini-chart">
                  <div className="m-bar" style={{ height: '40%' }}></div>
                  <div className="m-bar" style={{ height: '60%' }}></div>
                  <div className="m-bar" style={{ height: '80%' }}></div>
                  <div className="m-bar" style={{ height: '100%', background: 'linear-gradient(to top, #16a34a, #22c55e)' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Section */}
      <section id="features" className="product-details-section">
        <div className="sticky-feature-container">
          <div className="sticky-header-col">
            <div className="badge" style={{ marginBottom: "16px" }}>✨ CORE FEATURES</div>
            <h2>
              Everything you need <br />
              <span className="text-gradient">to scale your growth</span>
            </h2>
            <p>From lead capture to deal closure, our CRM provides all the powerful tools necessary for modern sales teams to succeed in one unified platform.</p>
          </div>

          <div className="features-timeline-col">
            <div className="features-timeline">
              {/* Feature 1 */}
              <div className="timeline-item">
                <div className="timeline-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div className="timeline-content">
                  <h3>Contact Management</h3>
                  <p>Keep all your customer data in one centralized place. Easily view interactions, notes, and activity history for every lead.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="timeline-item">
                <div className="timeline-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                </div>
                <div className="timeline-content">
                  <h3>Pipeline Tracking</h3>
                  <p>Visualize your sales funnel with drag-and-drop kanban boards. Know exactly where each deal stands and what needs to happen next.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="timeline-item">
                <div className="timeline-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                </div>
                <div className="timeline-content">
                  <h3>Sales Automation</h3>
                  <p>Automate repetitive tasks like email follow-ups and data entry. Let your team focus on selling rather than admin work.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="timeline-item">
                <div className="timeline-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
                </div>
                <div className="timeline-content">
                  <h3>Advanced Analytics</h3>
                  <p>Generate detailed reports on sales performance, conversion rates, and revenue forecasting with just a few clicks.</p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="timeline-item">
                <div className="timeline-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </div>
                <div className="timeline-content">
                  <h3>Meeting Scheduler</h3>
                  <p>Allow clients to book meetings directly into your calendar. Syncs perfectly with Google Calendar and Outlook.</p>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="timeline-item">
                <div className="timeline-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className="timeline-content">
                  <h3>Email Integration</h3>
                  <p>Connect your inbox to automatically log communications, track email opens, and use beautiful templates for outreach.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Modules Section */}
      <section className="product-details-section" style={{ background: "#ffffff", borderTop: "none" }}>
        <div className="details-container">
          <div className="section-header">
            <div className="badge" style={{ marginBottom: "16px", background: "rgba(14, 165, 233, 0.1)", color: "#0ea5e9" }}>🏢 COMPREHENSIVE CRM</div>
            <h2>
              One Platform for <br />
              <span className="text-gradient" style={{ background: "linear-gradient(135deg, #0ea5e9, #6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Every Department</span>
            </h2>
            <p>From HR to Sales and Office Management, our integrated CRM solutions adapt to the unique needs of your entire organization.</p>
          </div>

          <div className="bento-grid">
            {/* HR CRM - Large Card */}
            <div className="bento-card bento-hr">
              <div className="bento-content">
                <div className="bento-icon" style={{ color: "#ec4899", background: "rgba(236, 72, 153, 0.1)" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3>HR CRM</h3>
                <p>Manage employee records, track recruitment pipelines, handle onboarding, and streamline performance reviews. Build an engaged and productive workforce all within one platform.</p>
                <p>CRM Recruitment refers to the use of Customer Relationship Management software to manage relationships with candidates, clients, and internal teams in the recruitment and HR industry. It centralizes data, automates workflows, and enhances visibility across the talent acquisition lifecycle.</p>
              </div>
            </div>

            {/* Office CRM */}
            <div className="bento-card bento-office">
              <div className="bento-content">
                <div className="bento-icon" style={{ color: "#4f46e5", background: "rgba(79, 70, 229, 0.1)" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                </div>
                <h3>Office Management</h3>
                <p>Automate daily office tasks, internal communications, and facility requests.</p>
              </div>
            </div>

            {/* Management CRM */}
            <div className="bento-card bento-management">
              <div className="bento-content">
                <div className="bento-icon" style={{ color: "#9333ea", background: "rgba(147, 51, 234, 0.1)" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
                </div>
                <h3>Executive CRM</h3>
                <p>Get high-level business intelligence, track KPIs, and generate reports.</p>
              </div>
            </div>

            {/* Sales CRM - Wide Card */}
            <div className="bento-card bento-sales">
              <div className="bento-content">
                <div className="bento-icon" style={{ color: "#16a34a", background: "rgba(22, 163, 74, 0.1)" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                </div>
                <h3>Sales CRM</h3>
                <p>Track leads, manage client communications, forecast revenue, and close deals faster with advanced pipeline tools designed for high-performance sales teams.</p>
              </div>
            </div>

            {/* Support CRM */}
            <div className="bento-card bento-support">
              <div className="bento-content">
                <div className="bento-icon" style={{ color: "#d97706", background: "rgba(217, 119, 6, 0.1)" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                </div>
                <h3>Support & Helpdesk</h3>
                <p>Manage tickets, build a knowledge base, and deliver exceptional support across all channels.</p>
              </div>
            </div>

            {/* Project CRM - Wide Card */}
            <div className="bento-card bento-project">
              <div className="bento-content">
                <div className="bento-icon" style={{ color: "#0d9488", background: "rgba(13, 148, 136, 0.1)" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                </div>
                <h3>Project CRM</h3>
                <p>Assign tasks, track milestones, collaborate, and monitor project health and budgets. Keep your entire team aligned on deliverables.</p>
              </div>
            </div>
          </div>
        </div>
      </section >
      {/* CTA Section */}
      < section className="product-cta" >
        <div className="cta-box crm-cta">
          <h2>Ready to Supercharge Your Sales?</h2>
          <p>Join forward-thinking companies that have optimized their sales process.</p>
          <Link href="/contact" className="btn-primary crm-btn-primary">Book a Demo Today</Link>
        </div>
      </section >

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

        .hero-grid-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(22, 163, 74, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22, 163, 74, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          z-index: 1;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          animation: orb-float 10s infinite ease-in-out alternate;
        }

        @keyframes orb-float {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-30px) scale(1.05); }
        }

        .orb-1 {
          width: 500px;
          height: 500px;
          background: #16a34a;
          top: -50px;
          left: -100px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 600px;
          height: 600px;
          background: #0ea5e9;
          bottom: -150px;
          right: -100px;
          animation-delay: -5s;
        }

        .split-hero {
          padding: 120px 24px 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-content-split {
          position: relative;
          z-index: 10;
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .hero-text-column {
          text-align: left;
        }

        .badge {
          display: inline-block;
          padding: 6px 14px;
          background: rgba(22, 163, 74, 0.1);
          color: #16a34a;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }

        .hero-title {
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 900;
          color: #0f172a;
          line-height: 1.1;
          margin-bottom: 20px;
          letter-spacing: -0.03em;
        }

        .text-gradient {
          background: linear-gradient(135deg, #16a34a, #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 16px;
          color: #475569;
          line-height: 1.5;
          margin-bottom: 20px;
          max-width: 480px;
        }

        .hero-highlight {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f0fdf4;
          color: #15803d;
          padding: 8px 16px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 30px;
          border: 1px solid #bbf7d0;
          box-shadow: 0 4px 12px rgba(21, 128, 61, 0.05);
        }

        .hero-actions {
          display: flex;
          gap: 16px;
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

        .hero-visual-column {
           position: relative;
           height: 400px;
           width: 100%;
        }
        
        .floating-composition {
           position: relative;
           width: 100%;
           height: 100%;
        }

        .float-card {
           position: absolute;
           background: rgba(255, 255, 255, 0.9);
           backdrop-filter: blur(20px);
           border: 1px solid rgba(226, 232, 240, 0.8);
           border-radius: 16px;
           box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
           padding: 20px;
           display: flex;
           align-items: center;
           gap: 16px;
        }
        
        .card-deal {
           top: 10%;
           right: 10%;
           animation: float-slow 6s ease-in-out infinite, scale-in 0.8s ease-out backwards;
           z-index: 3;
        }
        
        .card-user {
           top: 45%;
           left: 0;
           animation: float-slow 7s ease-in-out infinite 1s, scale-in 0.8s ease-out 0.2s backwards;
           z-index: 2;
        }
        
        .card-chart {
           bottom: 10%;
           right: 5%;
           animation: float-slow 8s ease-in-out infinite 2s, scale-in 0.8s ease-out 0.4s backwards;
           z-index: 1;
           flex-direction: column;
           align-items: flex-start;
           width: 250px;
        }

        .card-icon, .avatar {
           width: 48px;
           height: 48px;
           border-radius: 12px;
           display: flex;
           align-items: center;
           justify-content: center;
           font-size: 24px;
           flex-shrink: 0;
        }
        
        .card-icon {
           background: #dcfce7;
        }
        
        .avatar {
           background: #e0f2fe;
           color: #0284c7;
           font-weight: 700;
           font-size: 18px;
        }
        
        .card-info {
           flex: 1;
        }
        
        .card-title {
           font-size: 15px;
           font-weight: 700;
           color: #0f172a;
           margin-bottom: 4px;
        }
        
        .card-desc {
           font-size: 13px;
           color: #64748b;
        }

        .status-dot {
           width: 12px;
           height: 12px;
           background: #22c55e;
           border-radius: 50%;
           box-shadow: 0 0 0 3px #dcfce7;
        }

        .mini-chart {
           display: flex;
           align-items: flex-end;
           gap: 12px;
           height: 80px;
           width: 100%;
           margin-top: 16px;
           justify-content: space-between;
        }
        
        .m-bar {
           width: 20%;
           background: #e2e8f0;
           border-radius: 4px 4px 0 0;
        }
        
        @keyframes float-slow {
           0% { transform: translateY(0); }
           50% { transform: translateY(-15px); }
           100% { transform: translateY(0); }
        }
        
        @keyframes scale-in {
           from { opacity: 0; transform: scale(0.9); }
           to { opacity: 1; transform: scale(1); }
        }

        @keyframes fade-in {
           from { opacity: 0; }
           to { opacity: 1; }
        }

        @keyframes slide-up {
           from { opacity: 0; transform: translateY(30px); }
           to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-fade-in-delay { animation: fade-in 0.8s ease-out 0.4s backwards; }
        .animate-slide-up { animation: slide-up 0.8s ease-out; }
        .animate-slide-up-delay { animation: slide-up 0.8s ease-out 0.2s backwards; }
        .animate-slide-up-delay-2 { animation: slide-up 0.8s ease-out 0.6s backwards; }

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
            radial-gradient(circle at 15% 20%, rgba(220, 252, 231, 0.9) 0%, transparent 50%),
            radial-gradient(circle at 85% 35%, rgba(186, 230, 253, 0.7) 0%, transparent 55%),
            radial-gradient(circle at 50% 90%, rgba(240, 253, 244, 0.95) 0%, transparent 60%);
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
        }

        .sticky-feature-container {
           max-width: 1200px;
           margin: 0 auto;
           display: flex;
           gap: 80px;
           align-items: flex-start;
        }

        .sticky-header-col {
           flex: 1;
           position: sticky;
           top: 120px;
           padding-right: 20px;
        }

        .sticky-header-col h2 {
           font-size: clamp(32px, 4vw, 48px);
           font-weight: 800;
           color: #0f172a;
           margin-bottom: 20px;
        }

        .sticky-header-col p {
           font-size: 17px;
           color: #64748b;
           line-height: 1.6;
        }

        .features-timeline-col {
           flex: 1.2;
        }

        .features-timeline {
           position: relative;
           padding-left: 40px;
           border-left: 2px dashed #cbd5e1;
           padding-top: 20px;
           padding-bottom: 20px;
        }

        .timeline-item {
           position: relative;
           margin-bottom: 60px;
        }

        .timeline-item:last-child {
           margin-bottom: 0;
        }

        .timeline-icon {
           position: absolute;
           left: -73px;
           top: -10px;
           width: 64px;
           height: 64px;
           border-radius: 50%;
           background: #ffffff;
           border: 2px solid #e2e8f0;
           display: flex;
           align-items: center;
           justify-content: center;
           box-shadow: 0 4px 10px rgba(0,0,0,0.05);
           z-index: 2;
           transition: transform 0.3s ease, border-color 0.3s ease;
        }
        
        .timeline-item:hover .timeline-icon {
           transform: scale(1.1);
           border-color: #0ea5e9;
        }

        .timeline-content {
           background: #ffffff;
           padding: 32px;
           border-radius: 20px;
           border: 1px solid #e2e8f0;
           box-shadow: 0 4px 20px rgba(15, 23, 42, 0.03);
           transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .timeline-item:hover .timeline-content {
           transform: translateX(10px);
           box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
           border-color: #cbd5e1;
        }

        .timeline-content h3 {
           font-size: 22px;
           font-weight: 700;
           color: #0f172a;
           margin-bottom: 12px;
        }

        .timeline-content p {
           font-size: 16px;
           color: #475569;
           line-height: 1.6;
        }

        .details-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .bento-grid {
           display: grid;
           grid-template-columns: repeat(4, 1fr);
           grid-auto-rows: minmax(200px, auto);
           gap: 24px;
        }

        .bento-card {
           position: relative;
           background: #ffffff;
           border-radius: 24px;
           padding: 32px;
           border: 1px solid rgba(226, 232, 240, 0.8);
           overflow: hidden;
           transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);
           display: flex;
           flex-direction: column;
           z-index: 1;
        }

        .bento-card:hover {
           transform: translateY(-8px);
           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
           border-color: rgba(226, 232, 240, 1);
        }

        .bento-icon {
           width: 56px;
           height: 56px;
           border-radius: 16px;
           display: flex;
           align-items: center;
           justify-content: center;
           margin-bottom: 24px;
           transition: transform 0.3s ease;
        }
        
        .bento-card:hover .bento-icon {
           transform: scale(1.1) rotate(5deg);
        }

        .bento-content h3 {
           font-size: 24px;
           font-weight: 800;
           color: #0f172a;
           margin-bottom: 12px;
        }

        .bento-content p {
           font-size: 16px;
           color: #475569;
           line-height: 1.6;
        }

        .bento-hr {
           grid-column: span 2;
           grid-row: span 2;
           background: linear-gradient(135deg, #fdf2f8 0%, #ffffff 100%);
           border: 1px solid #fce7f3;
        }
        
        .bento-hr h3 {
           font-size: 32px;
        }
        
        .bento-office {
           background: linear-gradient(135deg, #eef2ff 0%, #ffffff 100%);
           border: 1px solid #e0e7ff;
        }
        
        .bento-management {
           background: linear-gradient(135deg, #f3e8ff 0%, #ffffff 100%);
           border: 1px solid #e9d5ff;
        }
        
        .bento-sales {
           grid-column: span 2;
           background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%);
           border: 1px solid #dcfce7;
        }
        
        .bento-support {
           grid-column: span 2;
           background: linear-gradient(135deg, #fffbeb 0%, #ffffff 100%);
           border: 1px solid #fef3c7;
        }
        
        .bento-project {
           grid-column: span 2;
           background: linear-gradient(135deg, #f0fdfa 0%, #ffffff 100%);
           border: 1px solid #ccfbf1;
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
          background: #f0fdf4;
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
          background: linear-gradient(135deg, #16a34a, #0ea5e9);
          padding: 60px 40px;
          border-radius: 32px;
          text-align: center;
          color: #ffffff;
          box-shadow: 0 25px 50px rgba(22, 163, 74, 0.2);
        }

        .crm-cta {
           background: linear-gradient(135deg, #0f172a, #1e293b);
           box-shadow: 0 25px 50px rgba(15, 23, 42, 0.2);
        }
        
        .crm-btn-primary {
           background: #16a34a;
        }
        
        .crm-btn-primary:hover {
           background: #15803d;
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

        /* Mobile & Tablet Responsiveness */
        @media (max-width: 1024px) {
          .bento-grid {
             grid-template-columns: repeat(2, 1fr);
          }
          .bento-hr { grid-column: span 2; grid-row: span 1; }
          .bento-office { grid-column: span 1; }
          .bento-management { grid-column: span 1; }
          .bento-sales { grid-column: span 2; }
          .bento-support { grid-column: span 2; }
          .bento-project { grid-column: span 2; }
          .sticky-feature-container {
             flex-direction: column;
             gap: 40px;
          }
          .sticky-header-col {
             position: relative;
             top: 0;
             padding-right: 0;
             text-align: center;
          }
          .features-timeline {
             padding-left: 30px;
          }
          .timeline-icon {
             left: -63px;
             width: 50px;
             height: 50px;
          }
          .split-hero {
            padding: 120px 24px 60px;
          }
          .hero-content-split {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-text-column {
            text-align: center;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-visual-column {
            height: 350px;
            max-width: 600px;
            margin: 0 auto;
          }
          .card-deal { top: 0; right: 10%; }
          .card-user { top: 40%; left: 5%; }
          .card-chart { bottom: 0; right: 5%; }
          
          .product-hero {
            padding: 120px 24px 80px;
          }
          .hero-title {
            font-size: clamp(36px, 5vw, 56px);
          }
          .product-details-section, .product-cta {
            padding: 80px 24px;
          }
        }

        @media (max-width: 768px) {
          .bento-grid {
             grid-template-columns: 1fr;
          }
          .bento-card {
             grid-column: span 1 !important;
             grid-row: span 1 !important;
             padding: 24px;
          }
          .bento-hr h3 {
             font-size: 24px;
          }
          .split-hero {
            padding: 100px 16px 40px;
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
            gap: 12px;
            width: 100%;
          }
          .btn-primary, .btn-secondary {
            width: 100%;
            display: block;
            text-align: center;
          }
          
          .hero-visual-column {
            height: 280px;
          }
          .float-card {
            padding: 12px;
            gap: 12px;
          }
          .card-icon, .avatar {
            width: 36px;
            height: 36px;
            font-size: 16px;
          }
          .card-title { font-size: 13px; }
          .card-desc { font-size: 11px; }
          .card-deal { top: 0; right: 0; }
          .card-user { top: 35%; left: 0; }
          .card-chart { bottom: 0; right: 0; width: 200px; }
          .mini-chart { height: 60px; margin-top: 8px; }
          
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
          .features-timeline {
             padding-left: 20px;
             margin-left: 15px;
          }
          .timeline-item {
             margin-bottom: 40px;
          }
          .timeline-icon {
             left: -46px;
             width: 40px;
             height: 40px;
          }
          .timeline-icon svg {
             width: 20px;
             height: 20px;
          }
          .timeline-content {
             padding: 20px;
          }
          .timeline-content h3 {
             font-size: 18px;
             margin-bottom: 8px;
          }
          .timeline-content p {
             font-size: 14px;
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
    </div >
  );
}
