"use client";

import React, { useState } from "react";

export default function BlockchainMockup({ onAction }) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div
      className="blockchain-isometric-hero-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveCard(null);
      }}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "680px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background Soft Purple/Indigo Aura Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "400px",
          background: "radial-gradient(ellipse at center, rgba(147, 51, 234, 0.22) 0%, rgba(59, 130, 246, 0.16) 45%, transparent 70%)",
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
          src="/services/nextgen_web_isometric_3d_transparent.png"
          alt="Secure Web3 & Blockchain Engineering 3D Architecture"
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

        {/* Floating Glass Badge 1: EVM Smart Contracts (Top Left) */}
        <div
          onMouseEnter={() => setActiveCard("evm")}
          onMouseLeave={() => setActiveCard(null)}
          style={{
            position: "absolute",
            top: "14px",
            left: "14px",
            background: "rgba(255, 255, 255, 0.90)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "none",
            borderRadius: "12px",
            padding: "6px 12px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            boxShadow: "0 4px 16px rgba(15, 23, 42, 0.08)",
            cursor: "pointer",
            transition: "all 0.25s ease",
            transform: activeCard === "evm" ? "translateY(-2px) scale(1.05)" : "translateY(0) scale(1)",
            zIndex: 3,
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#10b981",
              boxShadow: "0 0 8px #10b981",
              display: "inline-block",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "10px", fontWeight: "800", color: "#0f172a", letterSpacing: "0.2px" }}>
              EVM SMART CONTRACTS
            </span>
            <span style={{ fontSize: "8px", fontWeight: "700", color: "#9333ea" }}>
              Foundry &amp; Slither Audited
            </span>
          </div>
        </div>

        {/* Floating Glass Badge 2: Layer-2 Protocols (Top Right) */}
        <div
          onMouseEnter={() => setActiveCard("l2")}
          onMouseLeave={() => setActiveCard(null)}
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            background: "rgba(255, 255, 255, 0.90)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "none",
            borderRadius: "12px",
            padding: "6px 12px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            boxShadow: "0 4px 16px rgba(15, 23, 42, 0.08)",
            cursor: "pointer",
            transition: "all 0.25s ease",
            transform: activeCard === "l2" ? "translateY(-2px) scale(1.05)" : "translateY(0) scale(1)",
            zIndex: 3,
          }}
        >
          <span style={{ fontSize: "11px" }}>⚡</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "10px", fontWeight: "800", color: "#0f172a", letterSpacing: "0.2px" }}>
              DEFI PROTOCOL &amp; dAPPS
            </span>
            <span style={{ fontSize: "8px", fontWeight: "700", color: "#2563eb" }}>
              Sub-second State Finality
            </span>
          </div>
        </div>

        {/* Floating Glass Badge 3: Gas Optimization (Bottom Left) */}
        <div
          onMouseEnter={() => setActiveCard("gas")}
          onMouseLeave={() => setActiveCard(null)}
          style={{
            position: "absolute",
            bottom: "14px",
            left: "14px",
            background: "rgba(255, 255, 255, 0.92)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "none",
            borderRadius: "12px",
            padding: "6px 12px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            boxShadow: "0 4px 16px rgba(15, 23, 42, 0.08)",
            cursor: "pointer",
            transition: "all 0.25s ease",
            transform: activeCard === "gas" ? "translateY(-2px) scale(1.05)" : "translateY(0) scale(1)",
            zIndex: 3,
          }}
        >
          <span style={{ fontSize: "11px" }}>🛡️</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "10px", fontWeight: "800", color: "#0f172a", letterSpacing: "0.2px" }}>
              ZERO VULNERABILITIES
            </span>
            <span style={{ fontSize: "8px", fontWeight: "700", color: "#ca8a04" }}>
              10,000 Invariant Tests
            </span>
          </div>
        </div>

        {/* Floating Glass Badge 4: SLA & Security Status (Bottom Right) */}
        <div
          style={{
            position: "absolute",
            bottom: "14px",
            right: "14px",
            background: "rgba(15, 23, 42, 0.90)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "none",
            borderRadius: "12px",
            padding: "6px 12px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            boxShadow: "0 8px 24px -4px rgba(15, 23, 42, 0.35)",
            zIndex: 3,
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#10b981",
              boxShadow: "0 0 8px #10b981",
            }}
          />
          <span style={{ fontSize: "9.5px", fontWeight: "800", color: "#ffffff", letterSpacing: "0.3px" }}>
            EVM Mainnet Verified
          </span>
        </div>
      </div>
    </div>
  );
}
