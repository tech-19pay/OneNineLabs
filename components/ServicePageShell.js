import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import ServiceContactForm from "@/components/ServiceContactForm";
import ServicesHero from "@/components/ServicesHero";
import WelcomeSection from "@/components/WelcomeSection";
import ServicesAlternatingSection from "@/components/ServicesAlternatingSection";
import { servicePageStyles } from "@/lib/servicePageStyles";

/**
 * Shared premium service-page layout (Aurora Modern).
 * Modern UI with enhanced animations and visual effects.
 *
 * Pass a config object with: theme, hero, stats, marquee, welcome, services,
 * process, results, pricing, testimonial, faqs, cta, contact.
 * See app/services/web-development/page.js for a full example.
 */
export default function ServicePageShell({ cfg }) {
  const { theme, hero, marquee, welcome, services, usecases, process, results, pricing, testimonial, faqs, cta } = cfg;

  const renderStepCard = (idx) => {
    switch (idx) {
      case 0:
        return (
          <div className="vt-mock-card">
            <div className="vt-card-header">
              <span>📋 Project Backlog & Roadmap</span>
              <span className="vt-status-dot green"></span>
            </div>
            <div className="vt-card-body">
              <div className="vt-backlog-item">
                <span className="vt-task-title">Next.js 15 Edge SSR Setup</span>
                <span className="vt-badge high">High Priority</span>
              </div>
              <div className="vt-backlog-item">
                <span className="vt-task-title">PostgreSQL Schema Isolation</span>
                <span className="vt-badge progress">In Progress</span>
              </div>
              <div className="vt-backlog-item">
                <span className="vt-task-title">Stripe Metered Billing Webhook</span>
                <span className="vt-badge todo">To Do</span>
              </div>
              <div className="vt-progress-row">
                <div className="vt-progress-label">Sprint 1 Target</div>
                <div className="vt-progress-bar-wrap">
                  <div className="vt-progress-bar" style={{ width: "65%" }}></div>
                </div>
                <div className="vt-progress-percent">65%</div>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="vt-mock-card dark">
            <div className="vt-card-header">
              <span>⚙️ Pipeline: build-and-test</span>
              <span className="vt-status-tag green">passing</span>
            </div>
            <div className="vt-card-body console">
              <div className="console-line text-green">$ npm run test:ci</div>
              <div className="console-line">✓ Auth flows (FaceID/TouchID) passed (0.12s)</div>
              <div className="console-line">✓ Row-level security checks passed (0.08s)</div>
              <div className="console-line text-green">$ npm run build:production</div>
              <div className="console-line">✓ Page SSR pre-rendering completed</div>
              <div className="console-line text-cyan">Deploying to Edge Runtime... Success!</div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="vt-mock-card">
            <div className="vt-card-header">
              <span>🛡️ Security & Compliance Audit</span>
              <span className="vt-badge secure">Audited</span>
            </div>
            <div className="vt-card-body grid-2x2">
              <div className="vt-grid-item">
                <div className="vt-grid-lbl">SOC 2 Readiness</div>
                <div className="vt-grid-val text-green">100% Ready</div>
              </div>
              <div className="vt-grid-item">
                <div className="vt-grid-lbl">OWASP Vulnerability</div>
                <div className="vt-grid-val text-green">0 Found</div>
              </div>
              <div className="vt-grid-item">
                <div className="vt-grid-lbl">SSL/TLS Grade</div>
                <div className="vt-grid-val text-blue">A+ Secure</div>
              </div>
              <div className="vt-grid-item">
                <div className="vt-grid-lbl">Penetration Test</div>
                <div className="vt-grid-val text-green">Passed</div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="vt-mock-card live">
            <div className="vt-card-header">
              <span>🚀 Production Deployments</span>
              <span className="vt-live-ping"><span className="ping-dot"></span>Live</span>
            </div>
            <div className="vt-card-body">
              <div className="vt-metric-row">
                <div className="vt-metric-item">
                  <span className="lbl">Active Traffic</span>
                  <span className="val">14,250 req/m</span>
                </div>
                <div className="vt-metric-item">
                  <span className="lbl">CPU Load</span>
                  <span className="val">18.4%</span>
                </div>
              </div>
              <div className="vt-log-row">
                <div className="vt-log-title">Edge Delivery Health</div>
                <div className="vt-endpoints-list">
                  <div className="endpoint-item">
                    <span className="dot green"></span>
                    <span>api.oneninelabs.com/v1</span>
                    <span className="ms">14ms</span>
                  </div>
                  <div className="endpoint-item">
                    <span className="dot green"></span>
                    <span>dashboard.oneninelabs.com</span>
                    <span className="ms">28ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Header variant="light" />
      <style>{servicePageStyles(theme.primary, theme.gradFrom, theme.gradTo, theme.glow)}</style>

      <div className="vd-wrap">
        {/* ─── 1. HERO SECTION (MODERN AI & ENGINEERING HERO UI) ─── */}
        {cfg.customHeroContent ? cfg.customHeroContent : <ServicesHero cfg={cfg} />}

        {/* ─── 1c. TECH MARQUEE ─── */}
        {marquee?.length > 0 && (
          <section className="vd-marquee-section" style={{ animation: 'fadeIn 0.8s ease-out 0.6s both' }}>
            <div className="vd-marquee-track">
              {[...marquee, ...marquee].map((item, i) => (
                <span className="vd-marquee-item" key={i}>
                  <span className="sep">◆</span>{item}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* ─── 2. WELCOME / INTRO (ASYMMETRIC GEOMETRIC PILL GRID UI) ─── */}
        <WelcomeSection welcome={welcome} theme={theme} />

        {/* ─── 2.5. USE CASES / FLEXIBLE WAYS ─── */}
        {cfg.usecases && cfg.usecases.items?.length > 0 && (
          <section className="vd-usecases-section">
            <div className="vd-usecases-header">
              <div className="vd-badge-tag" style={{ animation: 'fadeInUp 0.6s ease-out' }}>{cfg.usecases.badge}</div>
              <h2 className="vd-section-h2" style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}>{cfg.usecases.title}</h2>
              <p className="vd-section-p" style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}>{cfg.usecases.desc}</p>
            </div>

            <div className="vd-usecases-grid">
              {cfg.usecases.items.map((item, i) => (
                <div className="vd-usecase-card" key={i} style={{ animation: `fadeInUp 0.6s ease-out ${0.35 + i * 0.08}s both` }}>
                  <div className="vd-usecase-image-wrap">
                    <img src={item.image} alt={item.title} className="vd-usecase-image" />
                  </div>
                  <div className="vd-usecase-content">
                    <div>
                      <h3 className="vd-usecase-title">{item.title}</h3>
                      <p className="vd-usecase-desc">{item.desc}</p>
                    </div>
                    <Link href={item.href || "#"} className="vd-usecase-link">
                      {item.linkText || "Learn more"} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ─── 3. OUR ENGINEERING SERVICES (ALTERNATING ARCH-CARD PILL ROWS UI) ─── */}
        <ServicesAlternatingSection services={services} theme={theme} />

        {/* ─── 4. PROCESS TIMELINE ─── */}
        <section className="vd-process-section">
          <div className="vd-badge-tag">{process.badge}</div>
          <h2 className="vd-section-h2">{process.title}</h2>
          <p className="vd-section-p">{process.desc}</p>

          <div className="vd-process-timeline-v2">
            <div className="vt-line"></div>

            {process.steps.map((step, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div className={`vt-item ${isEven ? 'vt-right' : 'vt-left'}`} key={step.num}>
                  <div className="vt-dot"></div>

                  <div className="vt-content">
                    <span className="vt-step-badge">Step {step.num}</span>
                    <h3 className="vt-title">{step.title}</h3>
                    <p className="vt-desc">{step.desc}</p>
                  </div>

                  <div className="vt-visual">
                    <div className="vt-image-container">
                      {renderStepCard(idx)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── 5. RESULTS / PROOF ─── */}
        {results && results.items && results.items.length > 0 && (
          <section className="vd-results-section">
            <div className="vd-badge-tag">{results.badge}</div>
            <h2 className="vd-section-h2">{results.title}</h2>
            <p className="vd-section-p">{results.desc}</p>

            <div className="vd-results-grid">
              {results.items.map((r, i) => (
                <div className="vd-result-card" key={i}>
                  <div className="vd-result-num">{r.num}</div>
                  <div className="vd-result-label">{r.label}</div>
                  <div className="vd-result-desc">{r.desc}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ─── 6. PRICING / ENGAGEMENT PLANS ─── */}
        <section className="vd-pricing-section">
          <div className="vd-badge-tag">{pricing.badge}</div>
          <h2 className="vd-section-h2">{pricing.title}</h2>
          <p className="vd-section-p">{pricing.desc}</p>

          <div className="vd-pricing-rows-container">
            {pricing.plans.map((plan, i) => (
              <div className={`vd-pricing-row${plan.featured ? " vd-pricing-row-featured" : ""}`} key={i}>
                <div className="vd-prow-meta">
                  {plan.featured && <span className="vd-prow-badge">Most Popular</span>}
                  <h3 className="vd-prow-name">{plan.name}</h3>
                  <p className="vd-prow-tagline">{plan.tagline}</p>
                  <div className="vd-prow-price">
                    {plan.price} <span className="vd-prow-price-note">{plan.priceNote}</span>
                  </div>
                </div>

                <ul className="vd-prow-features">
                  {plan.features.map((f, fi) => (
                    <li key={fi}>
                      <span className="vd-prow-check">✓</span>
                      <span className="vd-prow-feat-text">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="vd-prow-action">
                  <Link href={plan.cta.href} className="vd-prow-btn">{plan.cta.label}</Link>
                </div>
              </div>
            ))}
          </div>
        </section>



        {/* ─── 8. FAQ ─── */}
        <section className="vd-faq-section">
          <div className="vd-badge-tag" style={{ animation: 'fadeInUp 0.6s ease-out' }}>{faqs.badge}</div>
          <h2 className="vd-section-h2" style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}>{faqs.title}</h2>
          <p className="vd-section-p" style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}>{faqs.desc}</p>

          <div className="vd-faq-grid-2col">
            {faqs.items.map((f, i) => (
              <details className="vd-faq-box" key={i} style={{ animation: `fadeInUp 0.6s ease-out ${0.3 + i * 0.08}s both` }}>
                <summary>{f.q}</summary>
                <div className="vd-faq-ans-text">{f.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* ─── 9. CTA BANNER ─── */}
        <section className="vd-cta-section">
          <div className="vd-cta-inner">
            {cta.badge && <div className="vd-badge-tag">{cta.badge}</div>}
            <div className="vd-cta-title">{cta.titleBefore} <span>{cta.titleHighlight}</span></div>
            <p className="vd-cta-desc">{cta.desc}</p>
            <div className="vd-cta-btns">
              <Link href={cta.primaryCta.href} className="vd-btn-primary">{cta.primaryCta.label}</Link>
              {cta.ghostCta && <Link href={cta.ghostCta.href} className="vd-btn-ghost">{cta.ghostCta.label}</Link>}
            </div>
          </div>
        </section>


      </div>

      <Footer />
    </>
  );
}

