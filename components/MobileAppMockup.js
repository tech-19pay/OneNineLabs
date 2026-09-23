"use client";

import React, { useState } from "react";

export default function MobileAppMockup({ onAction }) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div
      className="mobile-app-isometric-hero-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveCard(null);
      }}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "360px",
        margin: "-20px auto 0 auto", // Pull up slightly more and center
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background Soft Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle at center, rgba(16, 185, 129, 0.15) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(32px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Main 3D Isometric Illustration Wrapper */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          borderRadius: "0",
          overflow: "visible",
          background: "transparent",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          transform: isHovered ? "scale(1.02) translateY(-4px)" : "scale(1) translateY(0)",
        }}
      >
        {/* Crisp 3D Isometric Illustration */}
        <img
          src="/services/mobile_app_mockup_new_transparent_noshadow.png"
          alt="Award-Winning Mobile Experiences 3D Architecture"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "contain",
            borderRadius: "0",
            border: "none",
            boxShadow: "none",
          }}
        />

        {/* Floating Glass Badge 1: iOS & Android (Top Left) */}
        <div
          onMouseEnter={() => setActiveCard("platform")}
          onMouseLeave={() => setActiveCard(null)}
          style={{
            position: "absolute",
            top: "5%",
            left: "2%",
            background: "rgba(255, 255, 255, 0.90)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "none",
            borderRadius: "12px",
            padding: "8px 14px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "0 4px 16px rgba(15, 23, 42, 0.08)",
            cursor: "pointer",
            transition: "all 0.25s ease",
            transform: activeCard === "platform" ? "translateY(-4px) scale(1.05)" : "translateY(0) scale(1)",
            zIndex: 3,
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#10b981",
              boxShadow: "0 0 10px rgba(16, 185, 129, 0.5)",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "11px", fontWeight: "700", color: "#0f172a", letterSpacing: "-0.2px" }}>
              Native Performance
            </span>
            <span style={{ fontSize: "10px", fontWeight: "500", color: "#64748b" }}>
              iOS 18 & Android 15
            </span>
          </div>
        </div>

        {/* Floating Glass Badge 2: App Store (Bottom Right) */}
        <div
          onMouseEnter={() => setActiveCard("store")}
          onMouseLeave={() => setActiveCard(null)}
          style={{
            position: "absolute",
            bottom: "8%",
            right: "2%",
            background: "rgba(255, 255, 255, 0.90)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "none",
            borderRadius: "12px",
            padding: "8px 14px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "0 4px 16px rgba(15, 23, 42, 0.08)",
            cursor: "pointer",
            transition: "all 0.25s ease",
            transform: activeCard === "store" ? "translateY(-4px) scale(1.05)" : "translateY(0) scale(1)",
            zIndex: 3,
          }}
        >
          <div
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "6px",
              background: "rgba(59, 130, 246, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#3b82f6",
              fontSize: "14px",
            }}
          >
            ✓
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "11px", fontWeight: "700", color: "#0f172a", letterSpacing: "-0.2px" }}>
              Store Deployment
            </span>
            <span style={{ fontSize: "10px", fontWeight: "500", color: "#64748b" }}>
              100% Approval Rate
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
