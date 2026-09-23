"use client";

import React from "react";

export default function StudentGrowthMockup({ onSelectPlan }) {
  const deliverables = [
    { label: "Feed Posts", count: "14", desc: "Custom graphics & copy", icon: "🎨" },
    { label: "Viral Reels", count: "4", desc: "High-retention 9:16 edits", icon: "🎥" },
    { label: "Stories", count: "12", desc: "Interactive campus polls", icon: "📱" },
    { label: "On-Time", count: "100%", desc: "Auto-scheduled calendar", icon: "⚡" },
  ];

  const planFeatures = [
    "14 Custom social media posts & graphics",
    "12 Interactive stories & campus awareness content",
    "4 High-retention reels with trending hooks",
    "Profile bio & link-in-bio optimization",
    "Monthly content calendar & hashtag matrix",
    "1 Primary platform management (Instagram / LinkedIn)",
  ];

  return (
    <div
      className="student-growth-mockup-wrapper"
      style={{
        width: "100%",
        maxWidth: "500px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Main Clean Card */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: "22px",
          padding: "24px",
          boxShadow:
            "0 14px 36px -8px rgba(15, 23, 42, 0.07), 0 1px 3px rgba(0, 0, 0, 0.02)",
        }}
      >
        {/* Profile & Active Plan Status */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "18px",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontWeight: "700",
                fontSize: "14.5px",
                boxShadow: "0 3px 10px rgba(2, 132, 199, 0.25)",
              }}
            >
              AS
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "#0f172a",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Aarav Sharma
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 20 20"
                  fill="none"
                  style={{ display: "inline-block" }}
                >
                  <circle cx="10" cy="10" r="10" fill="#0284c7" />
                  <path
                    d="M6 10.2L8.6 12.8L14 7.5"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div style={{ fontSize: "11.5px", color: "#64748b", marginTop: "1px" }}>
                @aarav.tech • Campus Ambassador
              </div>
            </div>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 11px",
              background: "#e0f2fe",
              border: "1px solid #bae6fd",
              borderRadius: "9999px",
              fontSize: "11px",
              fontWeight: "700",
              color: "#0284c7",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#0284c7",
                display: "inline-block",
              }}
            />
            Diamond Plan • ₹599/mo
          </div>
        </div>

        {/* Deliverables Strip (Matching Hero Text) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "6px",
            background: "#f8fafc",
            border: "1px solid #f1f5f9",
            borderRadius: "14px",
            padding: "12px 6px",
            marginBottom: "18px",
            textAlign: "center",
          }}
        >
          {deliverables.map((item, idx) => (
            <div
              key={idx}
              style={{
                borderLeft: idx > 0 ? "1px solid #e2e8f0" : "none",
              }}
            >
              <div
                style={{
                  fontSize: "17px",
                  fontWeight: "800",
                  color: item.label === "Viral Reels" ? "#0284c7" : item.label === "On-Time" ? "#16a34a" : "#0f172a",
                  lineHeight: "1.2",
                }}
              >
                {item.count}
              </div>
              <div
                style={{
                  fontSize: "10px",
                  color: item.label === "Viral Reels" ? "#0284c7" : item.label === "On-Time" ? "#16a34a" : "#64748b",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.4px",
                  marginTop: "2px",
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Deliverables Package Breakdown Card (Clean Light Surface) */}
        <div
          style={{
            background: "#f8fafc",
            border: "1px solid #e2e8f0",
            borderRadius: "14px",
            padding: "16px 18px",
            marginBottom: "18px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                fontSize: "11.5px",
                fontWeight: "700",
                color: "#0f172a",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Monthly Deliverables Included
            </span>
            <span
              style={{
                fontSize: "10.5px",
                fontWeight: "700",
                color: "#16a34a",
                background: "#f0fdf4",
                border: "1px solid #dcfce7",
                padding: "2px 8px",
                borderRadius: "9999px",
              }}
            >
              ✓ Active Pipeline
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {planFeatures.map((feat, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "12.5px",
                  color: "#334155",
                  lineHeight: "1.4",
                }}
              >
                <span
                  style={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: "#e0f2fe",
                    color: "#0284c7",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    fontWeight: "800",
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Checkpoints matching page text */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px 0 14px 0",
            borderBottom: "1px solid #f1f5f9",
            flexWrap: "wrap",
            gap: "8px",
            fontSize: "11.5px",
            color: "#475569",
            fontWeight: "600",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <span style={{ color: "#16a34a", fontWeight: "800" }}>✓</span> Profile Optimization
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <span style={{ color: "#16a34a", fontWeight: "800" }}>✓</span> 48h Turnaround
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <span style={{ color: "#16a34a", fontWeight: "800" }}>✓</span> Zero Lock-In
          </span>
        </div>

        {/* Action Bottom Link */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "14px",
          }}
        >
          <span style={{ fontSize: "12px", color: "#64748b" }}>
            Plans starting from <strong style={{ color: "#0f172a" }}>₹399/mo</strong>
          </span>

          <button
            type="button"
            onClick={() =>
              onSelectPlan &&
              onSelectPlan({ name: "DIAMOND", price: "₹599", period: "/month" })
            }
            style={{
              background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
              color: "#ffffff",
              border: "none",
              borderRadius: "8px",
              padding: "7px 16px",
              fontSize: "12px",
              fontWeight: "700",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              boxShadow: "0 3px 10px rgba(2, 132, 199, 0.25)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            <span>Get Started</span>
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}