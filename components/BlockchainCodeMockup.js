"use client";

import React, { useState, useEffect } from "react";

const mockups = [
  {
    id: "ethereum",
    title: "Vault.sol",
    network: "Ethereum",
    verified: "Contract Verified",
    hash: "0x8f...4b2A",
    code: (
      <>
        <span style={{ color: "#c678dd" }}>contract</span> <span style={{ color: "#e5c07b" }}>Vault</span> {'{\n'}
        {'  '}mapping(address =<span style={{ color: "#56b6c2" }}>&gt;</span> uint256) <span style={{ color: "#c678dd" }}>public</span> balances;\n\n
        {'  '}<span style={{ color: "#c678dd" }}>function</span> <span style={{ color: "#61afef" }}>deposit</span>() <span style={{ color: "#c678dd" }}>external payable</span> {'{\n'}
        {'    '}<span style={{ color: "#56b6c2" }}>require</span>(msg.value <span style={{ color: "#56b6c2" }}>&gt;</span> <span style={{ color: "#d19a66" }}>0</span>, <span style={{ color: "#98c379" }}>"Zero deposit"</span>);\n
        {'    '}balances[msg.sender] += msg.value;\n
        {'  '}{'}\n'}
        {'}'}
      </>
    )
  },
  {
    id: "solana",
    title: "lib.rs",
    network: "Solana",
    verified: "Program Deployed",
    hash: "TokenkegQfeZ...",
    code: (
      <>
        <span style={{ color: "#c678dd" }}>use</span> anchor_lang::prelude::*;\n\n
        <span style={{ color: "#61afef" }}>#[program]</span>\n
        <span style={{ color: "#c678dd" }}>pub mod</span> <span style={{ color: "#e5c07b" }}>vault_program</span> {'{\n'}
        {'  '}<span style={{ color: "#c678dd" }}>use super</span>::*;\n
        {'  '}<span style={{ color: "#c678dd" }}>pub fn</span> <span style={{ color: "#61afef" }}>initialize</span>(ctx: Context&lt;Initialize&gt;) -&gt; <span style={{ color: "#e5c07b" }}>Result</span>&lt;()&gt; {'{\n'}
        {'    '}<span style={{ color: "#c678dd" }}>Ok</span>(())\n
        {'  '}{'}\n'}
        {'}'}
      </>
    )
  },
  {
    id: "tron",
    title: "TRC20.sol",
    network: "Tron",
    verified: "Contract Verified",
    hash: "T9yD14Nj9j7...",
    code: (
      <>
        <span style={{ color: "#c678dd" }}>pragma</span> <span style={{ color: "#56b6c2" }}>solidity</span> ^0.8.0;\n\n
        <span style={{ color: "#c678dd" }}>contract</span> <span style={{ color: "#e5c07b" }}>TronToken</span> {'{\n'}
        {'  '}<span style={{ color: "#c678dd" }}>string public</span> name = <span style={{ color: "#98c379" }}>"Tronix"</span>;\n
        {'  '}<span style={{ color: "#c678dd" }}>function</span> <span style={{ color: "#61afef" }}>transfer</span>(address to, uint256 amount) <span style={{ color: "#c678dd" }}>public returns</span> (<span style={{ color: "#e5c07b" }}>bool</span>) {'{\n'}
        {'    '}<span style={{ color: "#7f848e" }}>// TVM implementation</span>\n
        {'    '}<span style={{ color: "#c678dd" }}>return true</span>;\n
        {'  '}{'}\n'}
        {'}'}
      </>
    )
  }
];

export default function BlockchainCodeMockup() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % mockups.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const active = mockups[index];

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "420px", display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* Background Decoration */}
      <div style={{ position: "absolute", top: "50%", left: "50%", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)", transform: "translate(-50%, -50%)", zIndex: 1, transition: "background 0.5s ease" }}></div>

      {/* Code Window */}
      <div style={{ background: "#0f172a", borderRadius: "16px", padding: "20px", boxShadow: "0 25px 50px -12px rgba(15,23,42,0.25)", border: "1px solid #1e293b", position: "relative", zIndex: 2, minHeight: "260px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ef4444" }}></div>
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#f59e0b" }}></div>
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#10b981" }}></div>
            <span style={{ marginLeft: "12px", fontSize: "11px", color: "#64748b", fontFamily: "monospace" }}>{active.title}</span>
          </div>
          <div style={{ fontSize: "11px", color: "#3b82f6", fontWeight: "700", background: "rgba(59,130,246,0.1)", padding: "4px 8px", borderRadius: "4px" }}>
            {active.network}
          </div>
        </div>
        
        <pre key={active.id} style={{ margin: 0, fontFamily: "'Fira Code', monospace", fontSize: "13px", lineHeight: "1.7", color: "#e2e8f0", overflowX: "auto", animation: "fadeInCode 0.5s ease" }}>
          {active.code}
        </pre>
        <style>{`@keyframes fadeInCode { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }`}</style>
      </div>
      
      {/* Floating Tx Card (Overlay) */}
      <div className="float-anim" style={{ position: "absolute", bottom: "-20px", right: "-20px", background: "#ffffff", borderRadius: "12px", padding: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", border: "1px solid #f1f5f9", display: "flex", alignItems: "center", gap: "14px", zIndex: 3 }}>
        <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#ecfdf5", display: "flex", alignItems: "center", justifyContent: "center", color: "#10b981" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
        <div key={active.id + "-card"} style={{ animation: "fadeInCode 0.5s ease" }}>
          <div style={{ fontSize: "13px", fontWeight: "800", color: "#0f172a", marginBottom: "2px" }}>{active.verified}</div>
          <div style={{ fontSize: "11px", color: "#64748b", fontFamily: "monospace" }}>{active.hash}</div>
        </div>
      </div>
      
      {/* Slider dots */}
      <div style={{ position: "absolute", bottom: "-50px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "10px", zIndex: 4 }}>
        {mockups.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setIndex(i)}
            style={{ 
              width: "10px", 
              height: "10px", 
              borderRadius: "50%", 
              background: i === index ? "#3b82f6" : "#cbd5e1",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "background 0.3s ease"
            }} 
            aria-label={`Slide ${i+1}`}
          />
        ))}
      </div>
    </div>
  );
}
