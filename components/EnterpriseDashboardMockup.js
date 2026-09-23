"use client";

import React from "react";

export default function EnterpriseDashboardMockup() {
  const cardStyle = {
    background: "transparent",
    backdropFilter: "none",
    WebkitBackdropFilter: "none",
    border: "none",
    boxShadow: "none",
    padding: "8px",
    display: "flex",
    flexDirection: "column",
  };

  const pillStyle = {
    position: "absolute",
    background: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    border: "none",
    boxShadow: "0 2px 8px rgba(15, 23, 42, 0.06)",
    borderRadius: "8px",
  };

  return (
    <div
      style={{
        background: "transparent",
        borderRadius: "0",
        padding: "0",
        fontFamily: "Inter, sans-serif",
        color: "#0f172a",
        width: "100%",
        maxWidth: "960px",
        margin: "0 auto",
        overflow: "visible",
        border: "none",
        display: "flex",
        flexDirection: "column",
        boxShadow: "none",
      }}
    >
      {/* Top Section: Main Visual & Stats */}
      <div style={{ display: "flex", padding: "12px", gap: "12px" }}>
        
        {/* Left: 3D Visualization Area */}
        <div style={{ flex: "1", position: "relative", borderRadius: "0", overflow: "visible", background: "transparent", border: "none", minHeight: "180px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          
          <img
            src="/services/factory_isometric_transparent.png"
            alt="Smart Factory 3D"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              border: "none",
              borderRadius: "0",
              transform: "scale(1.05)",
            }}
          />

          {/* Floating Data Pill 1 */}
          <div style={{ ...pillStyle, top: "8px", left: "8px", padding: "6px 8px" }}>
            <div style={{ fontSize: "9px", fontWeight: "700", color: "#475569", marginBottom: "2px" }}>Sector A: Storage Tank 01</div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "8px", width: "90px", marginBottom: "2px" }}>
              <span style={{ color: "#64748b" }}>&bull; Capacity</span>
              <span style={{ fontWeight: "700", color: "#0f172a" }}>84.5%</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "8px", width: "90px" }}>
              <span style={{ color: "#64748b" }}>&bull; Pressure</span>
              <span style={{ fontWeight: "700", color: "#0284c7" }}>4.2 bar</span>
            </div>
          </div>

          {/* Floating Data Pill 2 */}
          <div style={{ ...pillStyle, top: "36px", right: "16px", padding: "8px 10px" }}>
            <div style={{ fontSize: "10px", fontWeight: "700", color: "#475569", marginBottom: "4px" }}>Main Foundry / Power Plant</div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "9px", width: "125px", marginBottom: "2px" }}>
              <span style={{ color: "#64748b" }}>&bull; Core Temp</span>
              <span style={{ fontWeight: "700", color: "#ef4444" }}>1,150&deg;C</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "9px", width: "125px" }}>
              <span style={{ color: "#64748b" }}>&bull; Power Load</span>
              <span style={{ fontWeight: "700", color: "#0284c7" }}>4.5 MW</span>
            </div>
          </div>

          {/* Floating Data Pill 3 */}
          <div style={{ ...pillStyle, bottom: "16px", right: "16px", padding: "8px 10px" }}>
            <div style={{ fontSize: "10px", fontWeight: "700", color: "#475569", marginBottom: "4px" }}>Assembly Line 03</div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "9px", width: "115px", marginBottom: "2px" }}>
              <span style={{ color: "#64748b" }}>&bull; OEE Rate</span>
              <span style={{ fontWeight: "700", color: "#10b981" }}>92.4%</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "9px", width: "115px" }}>
              <span style={{ color: "#64748b" }}>&bull; Shift Output</span>
              <span style={{ fontWeight: "700", color: "#0284c7" }}>14.2k units</span>
            </div>
          </div>
        </div>

        {/* Right: Maintenance Analytics */}
        <div style={{ ...cardStyle, flex: "1", justifyContent: "space-between" }}>
          
          {/* Header */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "700", margin: 0, color: "#0f172a" }}>Maintenance Analytics</h3>
              <div style={{ fontSize: "9px", background: "rgba(2, 132, 199, 0.08)", padding: "2px 8px", borderRadius: "6px", color: "#0369a1", fontWeight: "600", display: "flex", alignItems: "center", gap: "4px" }}>
                <span>&#128197;</span> Weekly <span>&#9662;</span>
              </div>
            </div>
            <div style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", marginBottom: "2px", display: "flex", alignItems: "baseline", gap: "6px" }}>
              1,530 hrs <span style={{ fontSize: "10px", color: "#10b981", fontWeight: "700" }}>+8.4% <span style={{ color: "#64748b", fontWeight: "600" }}>vs last week</span></span>
            </div>
            
            {/* Chips */}
            <div style={{ display: "flex", gap: "4px", marginBottom: "12px", marginTop: "8px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "9px", background: "rgba(255, 255, 255, 0.9)", color: "#0f172a", padding: "2px 8px", borderRadius: "12px", fontWeight: "600", boxShadow: "0 1px 3px rgba(2, 132, 199, 0.06)" }}>Mechanical</span>
              <span style={{ fontSize: "9px", color: "#64748b", padding: "2px 6px", fontWeight: "500" }}>Electrical</span>
              <span style={{ fontSize: "9px", color: "#64748b", padding: "2px 6px", fontWeight: "500" }}>Software</span>
            </div>
          </div>

          {/* Bar Chart (CSS) */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", height: "60px", marginBottom: "8px", paddingBottom: "6px", position: "relative" }}>
            <div style={{ flex: 1, height: "40%", background: "rgba(2, 132, 199, 0.1)", borderRadius: "2px" }}></div>
            <div style={{ flex: 1, height: "60%", background: "rgba(2, 132, 199, 0.1)", borderRadius: "2px" }}></div>
            <div style={{ flex: 1, height: "50%", background: "rgba(2, 132, 199, 0.1)", borderRadius: "2px" }}></div>
            {/* Highlighted Bar */}
            <div style={{ flex: 1, height: "90%", background: "linear-gradient(180deg, #10b981 0%, #0284c7 100%)", borderRadius: "2px", position: "relative" }}>
              <div style={{ position: "absolute", top: "-28px", left: "50%", transform: "translateX(-50%)", background: "#0f172a", color: "#ffffff", fontSize: "9px", padding: "4px 6px", borderRadius: "4px", whiteSpace: "nowrap", zIndex: 10, boxShadow: "0 4px 10px rgba(15, 23, 42, 0.2)" }}>
                <div style={{ color: "#94a3b8", fontSize: "7px", marginBottom: "1px" }}>Downtime</div>
                12.5 hrs
              </div>
            </div>
            <div style={{ flex: 1, height: "70%", background: "rgba(2, 132, 199, 0.1)", borderRadius: "2px" }}></div>
            <div style={{ flex: 1, height: "80%", background: "rgba(2, 132, 199, 0.1)", borderRadius: "2px" }}></div>
            <div style={{ flex: 1, height: "40%", background: "rgba(2, 132, 199, 0.1)", borderRadius: "2px" }}></div>
            <div style={{ flex: 1, height: "65%", background: "rgba(2, 132, 199, 0.1)", borderRadius: "2px" }}></div>
            <div style={{ flex: 1, height: "55%", background: "rgba(2, 132, 199, 0.1)", borderRadius: "2px" }}></div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "9px", color: "#64748b", fontWeight: "600", padding: "0 2px" }}>
            <span>Jan</span><span>Feb</span><span>Mar</span><span style={{ color: "#0284c7", fontWeight: "700" }}>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "6px", marginBottom: "8px", marginTop: "12px" }}>
            <div style={{ fontSize: "10px", fontWeight: "700", color: "#0284c7" }}>All Tasks</div>
            <div style={{ fontSize: "10px", fontWeight: "500", color: "#64748b" }}>In Progress</div>
            <div style={{ fontSize: "10px", fontWeight: "500", color: "#64748b" }}>Completed</div>
          </div>
          
          {/* Row 1 */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
            <div style={{ width: "80px" }}>
              <div style={{ fontSize: "11px", fontWeight: "700", color: "#0f172a" }}>MTTR</div>
              <div style={{ fontSize: "8px", color: "#64748b" }}>Within Target</div>
            </div>
            <div style={{ width: "40px", textAlign: "right", fontSize: "11px", fontWeight: "600", color: "#0f172a" }}>15m</div>
            <div style={{ width: "40px", textAlign: "right", fontSize: "10px", fontWeight: "700", color: "#10b981" }}>+8.4%</div>
          </div>

          {/* Row 2 */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ width: "80px" }}>
              <div style={{ fontSize: "11px", fontWeight: "700", color: "#0f172a" }}>Reaction Time</div>
              <div style={{ fontSize: "8px", color: "#64748b" }}>Over Target</div>
            </div>
            <div style={{ width: "40px", textAlign: "right", fontSize: "11px", fontWeight: "600", color: "#0f172a" }}>47m</div>
            <div style={{ width: "40px", textAlign: "right", fontSize: "10px", fontWeight: "700", color: "#ef4444" }}>-3.2%</div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Cards */}
      <div style={{ display: "flex", padding: "0 12px 12px 12px", gap: "12px" }}>
        
        {/* Total Production Out */}
        <div style={{ ...cardStyle, flex: "1.5" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
            <div>
              <div style={{ fontSize: "12px", color: "#475569", fontWeight: "600", marginBottom: "2px" }}>Total Production Out</div>
              <div style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a" }}>10.512 units <span style={{ fontSize: "10px", fontWeight: "700", color: "#10b981" }}>+10%</span></div>
            </div>
            <div style={{ display: "flex", gap: "4px", fontSize: "9px", background: "rgba(2, 132, 199, 0.08)", padding: "3px", borderRadius: "8px" }}>
              <span style={{ padding: "2px 6px", color: "#64748b" }}>1Y</span>
              <span style={{ padding: "2px 6px", color: "#64748b" }}>3M</span>
              <span style={{ padding: "2px 6px", color: "#64748b" }}>6M</span>
              <span style={{ padding: "2px 6px", background: "rgba(255, 255, 255, 0.95)", borderRadius: "6px", color: "#0284c7", fontWeight: "700", boxShadow: "0 1px 3px rgba(2, 132, 199, 0.12)" }}>W</span>
            </div>
          </div>
          
          <div style={{ flex: 1, position: "relative", marginTop: "8px" }}>
            {/* SVG Line Chart */}
            <svg viewBox="0 0 400 100" style={{ width: "100%", height: "70px", overflow: "visible" }}>
              <defs>
                <linearGradient id="lineGradLight" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(16, 185, 129, 0.25)" />
                  <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
                </linearGradient>
              </defs>
              {/* Background Fill */}
              <polygon points="0,100 0,60 50,70 100,50 150,65 200,40 250,55 300,30 350,45 400,20 400,100" fill="url(#lineGradLight)" />
              
              {/* Line */}
              <polyline points="0,60 50,70 100,50 150,65 200,40 250,55 300,30 350,45 400,20" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              
              {/* Data Point Marker */}
              <circle cx="200" cy="40" r="3" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
              <line x1="200" y1="40" x2="200" y2="100" stroke="rgba(2, 132, 199, 0.2)" strokeWidth="1" strokeDasharray="2 2" />
            </svg>
            
            {/* Tooltip */}
            <div style={{ position: "absolute", left: "155px", top: "5px", background: "rgba(255, 255, 255, 0.95)", border: "none", padding: "6px 8px", borderRadius: "6px", boxShadow: "0 4px 14px rgba(2, 132, 199, 0.1)", zIndex: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "6px" }}>
                <span style={{ fontSize: "11px", fontWeight: "800", color: "#0f172a" }}>10.512</span>
                <span style={{ fontSize: "9px", background: "#10b981", color: "#ffffff", padding: "2px 4px", borderRadius: "4px", fontWeight: "700" }}>5,75%</span>
              </div>
            </div>

            {/* X Axis */}
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "9px", color: "#64748b", fontWeight: "600", marginTop: "8px" }}>
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span style={{ color: "#0284c7", fontWeight: "700" }}>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
            </div>
          </div>
        </div>

        {/* Production Tracker Gauge */}
        <div style={{ ...cardStyle, flex: "1" }}>
          <div style={{ fontSize: "13px", fontWeight: "700", color: "#0f172a", marginBottom: "4px" }}>Production Tracker</div>
          <div style={{ fontSize: "10px", color: "#64748b", marginBottom: "12px" }}>Hitting <span style={{ color: "#0284c7", fontWeight: "700" }}>95%</span> of daily goal</div>
          
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
            <div>
              <div style={{ fontSize: "9px", color: "#64748b", display: "flex", alignItems: "center", gap: "4px", marginBottom: "2px" }}><span>&#9632;</span> Produced</div>
              <div style={{ fontSize: "14px", fontWeight: "700", color: "#0f172a" }}>32,000</div>
            </div>
            <div>
              <div style={{ fontSize: "9px", color: "#64748b", display: "flex", alignItems: "center", gap: "4px", marginBottom: "2px" }}><span>&#8645;</span> Downtime</div>
              <div style={{ fontSize: "14px", fontWeight: "700", color: "#0f172a" }}>4.2%</div>
            </div>
            <div>
              <div style={{ fontSize: "9px", color: "#64748b", display: "flex", alignItems: "center", gap: "4px", marginBottom: "2px" }}><span>$</span> Used:</div>
              <div style={{ fontSize: "14px", fontWeight: "700", color: "#0f172a" }}>8.75</div>
            </div>
          </div>

          <div style={{ flex: 1, display: "flex", alignItems: "flex-end", justifyContent: "center", position: "relative", marginTop: "8px" }}>
            {/* Simple Gauge using SVG Arc */}
            <svg viewBox="0 0 200 100" style={{ width: "100%", maxWidth: "150px", overflow: "visible" }}>
              {/* Scale Lines */}
              <path d="M 10 90 A 90 90 0 0 1 190 90" fill="none" stroke="rgba(2, 132, 199, 0.08)" strokeWidth="24" strokeLinecap="butt" strokeDasharray="2 6" />
              
              {/* Background Arc */}
              <path d="M 20 90 A 80 80 0 0 1 180 90" fill="none" stroke="rgba(2, 132, 199, 0.12)" strokeWidth="2" strokeLinecap="round" />
              {/* Value Arc (Blue Gradient) */}
              <defs>
                <linearGradient id="gaugeGradLight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0284c7" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>
              </defs>
              <path d="M 20 90 A 80 80 0 0 1 150 25" fill="none" stroke="url(#gaugeGradLight)" strokeWidth="4" strokeLinecap="round" />
              
              <circle cx="150" cy="25" r="3" fill="#0284c7" />
            </svg>
            
            <div style={{ position: "absolute", bottom: "5px", textAlign: "center" }}>
              <div style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a" }}>32,000<span style={{ fontSize: "10px", color: "#64748b", fontWeight: "600" }}>/day</span></div>
              <div style={{ fontSize: "9px", color: "#10b981", fontWeight: "700" }}>+12% vs last week</div>
            </div>
          </div>
        </div>

        {/* Storage Optimization / Right Panel Bottom */}
        <div style={{ ...cardStyle, flex: "1", justifyContent: "space-between" }}>
          
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "700", margin: 0, color: "#0f172a" }}>Storage Optimization</h3>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
              <div style={{ fontSize: "24px", fontWeight: "800", color: "#0f172a" }}>42%</div>
              <div style={{ fontSize: "10px", color: "#64748b", fontWeight: "600" }}><span style={{ color: "#10b981", fontWeight: "700" }}>+8.4%</span> vs last week</div>
            </div>
            
            {/* Progress Segmented Bar */}
            <div style={{ display: "flex", gap: "3px", height: "18px", marginBottom: "16px" }}>
              {[...Array(24)].map((_, i) => (
                <div key={i} style={{ flex: 1, borderRadius: "2px", background: i < 14 ? (i < 8 ? "#0284c7" : "#10b981") : "rgba(2, 132, 199, 0.1)" }}></div>
              ))}
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "10px", color: "#0f172a", fontWeight: "600" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                Raw Materials 
              </div>
              <div style={{ color: "#64748b", fontSize: "9px" }}>
                24 Tanks Active
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
