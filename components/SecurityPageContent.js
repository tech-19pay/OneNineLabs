import React from 'react';

export default function SecurityPageContent() {
  return (
    <div className="mailler-page-root">
      
      {/* ── 0. NAVBAR ── */}
      <nav className="mailler-nav">
        <div className="mailler-nav-container">
          <div className="mailler-logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff3366" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <span>Mailler</span>
          </div>
          <div className="mailler-nav-links">
            <a href="#" className="active">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Pages ▾</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="mailler-nav-actions">
            <button className="mailler-btn-ghost">Log In</button>
            <button className="mailler-btn-solid">Sign Up</button>
          </div>
        </div>
      </nav>

      {/* ── 1. HERO SECTION ── */}
      <section className="mailler-hero">
        <div className="mailler-hero-container">
          <div className="mailler-hero-content">
            <h1>Turn Emails into Revenue</h1>
            <p>Win new customers with the #1 email marketing and automations brand that recommends ways to get more opens, clicks, and sales.</p>
            <button className="mailler-btn-solid mailler-btn-large">Get Started</button>
          </div>
          <div className="mailler-hero-image">
            <img src="/assets/hero_img.jpg" alt="Email Marketing Illustration" />
          </div>
        </div>
        {/* Decorative background blobs */}
        <div className="mailler-blob blob-1"></div>
        <div className="mailler-blob blob-2"></div>
        <div className="mailler-blob blob-3"></div>
      </section>

      {/* ── 2. ABOUT US SECTION ── */}
      <section className="mailler-about">
        <div className="mailler-about-container">
          <div className="mailler-about-image">
            <img src="/assets/about_img.jpg" alt="Dashboard Illustration" />
          </div>
          <div className="mailler-about-content">
            <span className="mailler-tag">About Us</span>
            <h2>Get Started Easily With a Personalized Product Tour</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button className="mailler-btn-solid mailler-btn-large">Read More</button>
          </div>
        </div>
      </section>

      {/* ── 3. OUR SERVICE SECTION (GRID) ── */}
      <section className="mailler-services">
        <div className="mailler-services-container">
          
          <div className="mailler-section-header">
            <span className="mailler-tag">Our Service</span>
            <h2>What We Can Do For You</h2>
            <p>Dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <div className="mailler-grid">
            
            <div className="mailler-card">
              <div className="mailler-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <h4 className="mailler-card-title">Email Newsletters</h4>
              <p className="mailler-card-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam in dui mauris.</p>
              <a href="#" className="mailler-card-link">Read More</a>
            </div>

            <div className="mailler-card">
              <div className="mailler-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
              </div>
              <h4 className="mailler-card-title">Acquisition Emails</h4>
              <p className="mailler-card-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam in dui mauris.</p>
              <a href="#" className="mailler-card-link">Read More</a>
            </div>

            <div className="mailler-card">
              <div className="mailler-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
              </div>
              <h4 className="mailler-card-title">Retention Emails</h4>
              <p className="mailler-card-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam in dui mauris.</p>
              <a href="#" className="mailler-card-link">Read More</a>
            </div>

            <div className="mailler-card">
              <div className="mailler-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
              </div>
              <h4 className="mailler-card-title">Promotional Emails</h4>
              <p className="mailler-card-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam in dui mauris.</p>
              <a href="#" className="mailler-card-link">Read More</a>
            </div>

            {/* Row 2 */}
            <div className="mailler-card">
              <div className="mailler-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              </div>
              <h4 className="mailler-card-title">Cloud Native Architecture</h4>
              <p className="mailler-card-desc">Leveraging Kubernetes and containerization to build highly available platforms with zero-downtime deployments.</p>
              <a href="#" className="mailler-card-link">Read More</a>
            </div>

            <div className="mailler-card">
              <div className="mailler-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
              </div>
              <h4 className="mailler-card-title">API Gateway & Mesh</h4>
              <p className="mailler-card-desc">Implement robust API gateways for rate-limiting, auth routing, and secure inter-service mesh communication.</p>
              <a href="#" className="mailler-card-link">Read More</a>
            </div>

            <div className="mailler-card">
              <div className="mailler-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h4 className="mailler-card-title">Zero Trust Security</h4>
              <p className="mailler-card-desc">Identity-aware access controls ensuring secure communication across every layer of your application.</p>
              <a href="#" className="mailler-card-link">Read More</a>
            </div>

            <div className="mailler-card">
              <div className="mailler-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
              <h4 className="mailler-card-title">Global Multi-Region</h4>
              <p className="mailler-card-desc">Architecting active-active multi-region databases and services for global scale and compliance.</p>
              <a href="#" className="mailler-card-link">Read More</a>
            </div>
            
          </div>
        </div>
      </section>

      {/* ── EMBEDDED SCOPED STYLING ── */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');

        .mailler-page-root {
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: #1e293b;
          background: #ffffff;
          overflow-x: hidden;
          width: 100%;
        }

        /* Variables */
        :root {
          --mailler-pink: #ff3366;
          --mailler-pink-hover: #e62050;
          --mailler-purple: #6a1b9a;
          --mailler-dark: #0f172a;
          --mailler-gray: #64748b;
          --mailler-bg-pink: #fff0f5;
        }

        /* Buttons */
        .mailler-btn-solid {
          background: #ff3366;
          color: #ffffff;
          border: none;
          padding: 10px 24px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 14px rgba(255, 51, 102, 0.3);
        }
        .mailler-btn-solid:hover {
          background: #e62050;
          transform: translateY(-2px);
        }
        .mailler-btn-large {
          padding: 14px 32px;
          font-size: 16px;
        }
        .mailler-btn-ghost {
          background: transparent;
          color: #ff3366;
          border: 1.5px solid #ff3366;
          padding: 8.5px 22.5px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .mailler-btn-ghost:hover {
          background: #fff0f5;
        }

        /* Tag */
        .mailler-tag {
          color: #ff3366;
          font-weight: 700;
          font-size: 15px;
          margin-bottom: 12px;
          display: block;
        }

        /* Navbar */
        .mailler-nav {
          width: 100%;
          padding: 24px 0;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 100;
        }
        .mailler-nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 24px;
        }
        .mailler-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 24px;
          font-weight: 900;
          color: #ff3366;
        }
        .mailler-nav-links {
          display: flex;
          gap: 32px;
        }
        .mailler-nav-links a {
          text-decoration: none;
          color: #0f172a;
          font-weight: 600;
          font-size: 15px;
          transition: color 0.2s;
        }
        .mailler-nav-links a:hover, .mailler-nav-links a.active {
          color: #ff3366;
        }
        .mailler-nav-actions {
          display: flex;
          gap: 16px;
        }

        /* Hero */
        .mailler-hero {
          position: relative;
          padding: 160px 24px 100px;
          overflow: hidden;
        }
        .mailler-hero-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 60px;
          position: relative;
          z-index: 10;
        }
        .mailler-hero-content {
          flex: 1;
        }
        .mailler-hero-content h1 {
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.1;
          margin-bottom: 24px;
        }
        .mailler-hero-content p {
          font-size: 18px;
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 40px;
          max-width: 480px;
        }
        .mailler-hero-image {
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }
        .mailler-hero-image img {
          max-width: 100%;
          height: auto;
          border-radius: 20px;
        }
        
        /* Background Blobs */
        .mailler-blob {
          position: absolute;
          border-radius: 50%;
          z-index: 1;
          opacity: 0.6;
        }
        .blob-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255,240,245,1) 0%, rgba(255,255,255,0) 70%);
          top: -100px;
          right: -100px;
        }
        .blob-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(240,248,255,1) 0%, rgba(255,255,255,0) 70%);
          bottom: -50px;
          left: -50px;
        }

        /* About Us */
        .mailler-about {
          padding: 100px 24px;
        }
        .mailler-about-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 80px;
        }
        .mailler-about-image {
          flex: 1;
        }
        .mailler-about-image img {
          width: 100%;
          height: auto;
          border-radius: 20px;
        }
        .mailler-about-content {
          flex: 1;
        }
        .mailler-about-content h2 {
          font-size: clamp(32px, 4vw, 44px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
          margin-bottom: 24px;
        }
        .mailler-about-content p {
          font-size: 16px;
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 40px;
        }

        /* Services Grid */
        .mailler-services {
          padding: 100px 24px 140px;
          background: #fafcff;
        }
        .mailler-services-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .mailler-section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px;
        }
        .mailler-section-header h2 {
          font-size: clamp(32px, 4vw, 44px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
          margin-bottom: 20px;
        }
        .mailler-section-header p {
          font-size: 16px;
          color: #64748b;
          line-height: 1.7;
        }
        .mailler-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }
        .mailler-card {
          background: #ffffff;
          border: 1px solid #f1f5f9;
          border-radius: 16px;
          padding: 40px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 10px 40px rgba(0,0,0,0.02);
        }
        .mailler-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          border-color: rgba(106, 27, 154, 0.1);
        }
        .mailler-card-icon {
          width: 70px;
          height: 70px;
          border-radius: 16px;
          background: #faf5ff;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 24px;
          color: #6a1b9a;
        }
        .mailler-card-title {
          font-size: 18px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 12px;
          line-height: 1.3;
        }
        .mailler-card-desc {
          font-size: 14px;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 30px;
          flex-grow: 1;
        }
        .mailler-card-link {
          font-size: 14px;
          font-weight: 700;
          color: #ff3366;
          text-decoration: none;
          transition: all 0.2s ease;
          opacity: 0.8;
        }
        .mailler-card:hover .mailler-card-link {
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .mailler-hero-container, .mailler-about-container {
            flex-direction: column;
            text-align: center;
            gap: 40px;
          }
          .mailler-hero-content p {
            margin: 0 auto 40px;
          }
          .mailler-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .mailler-nav-links {
            display: none;
          }
        }
        @media (max-width: 640px) {
          .mailler-grid {
            grid-template-columns: 1fr;
          }
        }
        `
      }} />
    </div>
  );
}
