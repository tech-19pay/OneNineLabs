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
  const { theme, hero, stats, marquee, welcome, services, usecases, process, results, pricing, testimonial, faqs, cta, contact } = cfg;

  return (
    <>
      <Header variant="light" />
      <style>{servicePageStyles(theme.primary, theme.gradFrom, theme.gradTo, theme.glow)}</style>

      <div className="vd-wrap">
        {/* ─── 1. HERO SECTION (MODERN AI & ENGINEERING HERO UI) ─── */}
        <ServicesHero cfg={cfg} />

        {/* ─── 1b. GLASS STATS BAR ─── */}
        {stats && stats.length > 0 && (
          <div className="vd-hero-stats-bar">
            {stats.map((s, i) => (
              <div className="vd-stat-item" key={i} style={{ animation: `scaleIn 0.6s cubic-bezier(0.16,1,0.3,1) ${0.2 + i * 0.1}s both` }}>
                <div className="num">{s.num}</div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </div>
        )}

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

          <div className="vd-process-timeline">
            {process.steps.map((step) => (
              <div className="vd-step-node" key={step.num}>
                <div className="vd-step-circle">{step.num}</div>
                <div className="vd-step-title">{step.title}</div>
                <div className="vd-step-desc">{step.desc}</div>
              </div>
            ))}
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

          <div className="vd-pricing-grid">
            {pricing.plans.map((plan, i) => (
              <div className={`vd-pricing-card${plan.featured ? " vd-pricing-card-featured" : ""}`} key={i}>
                {plan.featured && <div className="vd-plan-tag">Most Popular</div>}
                <div className="vd-plan-banner-blue">
                  <div className="p-name">{plan.name}</div>
                  <div className="vd-plan-tagline">{plan.tagline}</div>
                </div>
                <div className="vd-plan-price-row">
                  <div className="vd-plan-price">{plan.price}<span>{plan.priceNote}</span></div>
                </div>
                <ul className="vd-pricing-features">
                  {plan.features.map((f, fi) => <li key={fi}>{f}</li>)}
                </ul>
                <div className="vd-pricing-card-footer">
                  <Link href={plan.cta.href} className="vd-btn-primary" style={{ width: "100%", justifyContent: "center" }}>{plan.cta.label}</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 7. TESTIMONIAL ─── */}
        <section className="vd-testimonial-section">
          <div className="vd-testimonial-grid">
            <div>
              <div className="vd-badge-tag">{testimonial.badge}</div>
              <h2 className="vd-section-h2" style={{ marginBottom: "18px" }}>{testimonial.title}</h2>
              <p style={{ color: "#4b5563", lineHeight: 1.7, fontSize: "15.5px" }}>{testimonial.desc}</p>
            </div>

            <div className="vd-testimonial-card">
              <div className="vd-avatar-top-floating">
                {testimonial.avatarImg ? <img src={testimonial.avatarImg} alt="Client Avatar" /> : testimonial.avatar}
              </div>
              <div className="vd-stars">{testimonial.stars || "★★★★★"}</div>
              <div className="vd-testimonial-quote">“{testimonial.quote}”</div>
              <div className="vd-testimonial-author">{testimonial.author}</div>
              <div className="vd-testimonial-role">{testimonial.role}</div>
            </div>
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

        {/* ─── 10. CONTACT ─── */}
        <section className="vd-contact-section">
          <div className="vd-badge-tag">{contact.badge}</div>
          <h2 className="vd-section-h2">{contact.title}</h2>
          {contact.desc && <p className="vd-section-p">{contact.desc}</p>}

          <div className="vd-contact-grid">
            <div className="vd-2x2-info-chips">
              <div className="vd-info-chip">
                <div className="ic-icon">📍</div>
                <div className="ic-title">Office Location</div>
                <div className="ic-sub">{contact.location}</div>
              </div>
              <div className="vd-info-chip blue">
                <div className="ic-icon">✉️</div>
                <div className="ic-title">Email Us</div>
                <div className="ic-sub">{contact.email}</div>
              </div>
              <div className="vd-info-chip blue">
                <div className="ic-icon">📞</div>
                <div className="ic-title">Direct Line</div>
                <div className="ic-sub">{contact.phone}</div>
              </div>
              <div className="vd-info-chip">
                <div className="ic-icon">🕒</div>
                <div className="ic-title">Working Hours</div>
                <div className="ic-sub">{contact.hours}</div>
              </div>
            </div>

            <ServiceContactForm placeholder={contact.formPlaceholder} sourcePage={contact.sourcePage} />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
