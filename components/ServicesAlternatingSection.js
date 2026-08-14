"use client";

import React from "react";
import Link from "next/link";

const serviceImagesMap = {
  "web-development": "/services/service_web_dev_alt.jpg",
  "mobile-apps": "/services/service_mobile_alt.jpg",
  "ai-automation": "/services/service_ai_alt.jpg",
  "saas": "/services/service_saas_alt.jpg",
  "blockchain": "/services/service_blockchain_alt.jpg",
  "marketing": "/services/service_marketing_alt.jpg",
  "security": "/services/service_security_alt.jpg",
};

export default function ServicesAlternatingSection({ services, theme }) {
  if (!services || !services.items) return null;

  const getServiceGraphic = (id, title, itemImage) => {
    const imgSrc = itemImage || serviceImagesMap[id] || "/services/custom_software_preview.png";
    return (
      <div className="sas-circle-frame">
        <img
          src={imgSrc}
          alt={title}
          className="sas-circle-img"
        />
        <div className="sas-circle-overlay" />
      </div>
    );
  };

  return (
    <section className="sas-section">
      <div className="sas-container">
        {/* Header */}
        <div className="sas-header">
          {services.badge && <div className="vd-badge-tag">{services.badge}</div>}
          <h2 className="vd-section-h2">{services.title}</h2>
          <p className="vd-section-p">{services.desc}</p>
        </div>

        {/* Alternating Service Cards Stack */}
        <div className="sas-stack">
          {services.items.map((s, i) => {
            const isEven = i % 2 === 0;

            const visualCol = (
              <div className="sas-col-visual" key="visual">
                {getServiceGraphic(s.id, s.title, s.image)}
              </div>
            );

            const contentCol = (
              <div className="sas-col-content" key="content">
                <div className="sas-content-header">
                  {s.category && <span className="sas-category-pill">{s.category}</span>}
                  <h3 className="sas-card-title">{s.title}</h3>
                  <p className="sas-card-role">{s.role}</p>
                </div>

                {s.bullets?.length > 0 && (
                  <ul className="sas-bullets-grid">
                    {s.bullets.map((bullet, bi) => (
                      <li key={bi}>
                        <span className="sas-check">✓</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="sas-card-footer">
                  {s.widget ? (
                    <div className="sas-widget-badge">
                      <span>{s.widget}</span>
                    </div>
                  ) : <div />}

                  <Link href={s.href} className="sas-btn-learn">
                    Learn More →
                  </Link>
                </div>
              </div>
            );

            return (
              <div
                key={s.id || i}
                className={`sas-card-row ${isEven ? "image-left" : "image-right"}`}
              >
                {isEven ? [visualCol, contentCol] : [contentCol, visualCol]}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
