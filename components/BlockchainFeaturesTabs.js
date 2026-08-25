"use client";

import React from "react";

const tabData = [
  {
    id: "smart-contracts",
    title: "Smart Contracts",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
    ),
    heading: "Decentralized launchpad for Web3 Projects.",
    subheading: "Highly performant and gas optimized structure.",
    paragraphs: [
      "We develop protocol foundations for decentralized finance, real-world asset tokenization, and NFTs, ensuring safety through exhaustive foundry testing and static analysis.",
      "Personalized to your exact requirements, our enterprise architectures prevent exploits and scale natively across Layer-2 ecosystems."
    ],
    svgPattern: "M100 40L160 70V130L100 160L40 130V70L100 40Z"
  },
  {
    id: "web3-frontends",
    title: "Web3 Frontends",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
    ),
    heading: "Seamless Decentralized Application Interfaces.",
    subheading: "Instant multi-wallet connections and zero latency.",
    paragraphs: [
      "We build incredibly fast and responsive Next.js frontends integrated with viem and wagmi for seamless wallet connectivity (MetaMask, WalletConnect, Coinbase).",
      "Our UI architectures ensure instant data hydration from the blockchain, providing a web2-like experience for your web3 users without RPC rate limit bottlenecks."
    ],
    svgPattern: "M40 100 A60 60 0 1 1 160 100 A60 60 0 1 1 40 100 M70 100 A30 30 0 1 1 130 100 A30 30 0 1 1 70 100"
  },
  {
    id: "auditing",
    title: "Auditing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
    ),
    heading: "Exhaustive Protocol Security & Audits.",
    subheading: "Mathematical formal verification and invariant fuzzing.",
    paragraphs: [
      "Security is paramount. We subject all smart contracts to rigorous static analysis using Slither, combined with property-based fuzz testing in Foundry and Echidna.",
      "By defining strict invariants, we ensure your protocol logic is immune to reentrancy, oracle manipulation, and complex flash-loan attack vectors."
    ],
    svgPattern: "M100 20 L160 50 V110 C160 150 100 180 100 180 C100 180 40 150 40 110 V50 Z"
  },
  {
    id: "yield-vaults",
    title: "Yield Vaults",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
    ),
    heading: "Automated DeFi Yield Infrastructure.",
    subheading: "Standardized ERC-4626 vault deployments.",
    paragraphs: [
      "We engineer automated yield-bearing vaults that route liquidity to optimal DeFi strategies while minimizing gas overhead for end-users.",
      "Fully compliant with the ERC-4626 standard, our vaults allow seamless integration across the wider DeFi ecosystem for maximum composability."
    ],
    svgPattern: "M60 140 H140 V160 H60 Z M60 100 H140 V120 H60 Z M60 60 H140 V80 H60 Z M100 20 L160 60 H40 Z"
  }
];

export default function BlockchainFeaturesTabs() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "100px", marginTop: "60px" }}>
      {tabData.map((item, index) => {
        // Alternate layout: Image left/right
        const isEven = index % 2 === 0;
        return (
          <div key={item.id} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center", textAlign: "left" }}>
            
            {/* Conditional ordering based on even/odd */}
            <div style={{ order: isEven ? 1 : 2, padding: "40px", background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)", borderRadius: "30px" }}>
              <div className="float-anim glow-anim" style={{ 
                width: "100%", 
                height: "260px", 
                background: `url('data:image/svg+xml;utf8,<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="${item.svgPattern}" fill="%23eff6ff" stroke="%233b82f6" stroke-width="3"/><circle cx="100" cy="100" r="30" fill="%238b5cf6" opacity="0.2"/></svg>') no-repeat center center`, 
                backgroundSize: "contain" 
              }}></div>
            </div>

            <div style={{ order: isEven ? 2 : 1 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "8px 16px", background: "#eff6ff", borderRadius: "100px", color: "#3b82f6", marginBottom: "20px" }}>
                <div style={{ width: "20px", height: "20px", stroke: "currentColor" }}>
                  {item.icon}
                </div>
                <span style={{ fontSize: "14px", fontWeight: "700" }}>{item.title}</span>
              </div>
              <h3 style={{ fontSize: "28px", fontWeight: "800", color: "#0f172a", marginBottom: "16px", lineHeight: "1.3" }}>
                {item.heading}
              </h3>
              <p style={{ color: "#3b82f6", fontSize: "15px", fontWeight: "700", marginBottom: "24px", letterSpacing: "0.5px" }}>
                {item.subheading}
              </p>
              {item.paragraphs.map((p, i) => (
                <p key={i} style={{ color: "#475569", fontSize: "15px", lineHeight: "1.7", marginBottom: i === item.paragraphs.length - 1 ? 0 : "20px" }}>
                  {p}
                </p>
              ))}
            </div>

          </div>
        );
      })}
    </div>
  );
}
