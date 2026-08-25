const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../components/SaasPageContent.js');
let content = fs.readFileSync(filePath, 'utf8');

const startMarker = '{/* All 4 Architecture Pillars (Desktop Dashboard Browser Window Frames in Alternating Rows) */}';
const endMarker = '{/* ── 4. SAAS SOLUTIONS BY BUSINESS MODEL (6 CARDS) ── */}';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error("Markers not found!", { startIndex, endIndex });
  process.exit(1);
}

const newBentoJSX = `{/* Mint Green Bento Grid Layout (Matching Provided Reference Design) */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(520px, 1fr))", gap: "28px", marginTop: "10px" }}>
            
            {/* Card 1: PostgreSQL RLS Isolation */}
            <div style={{ background: "#dcfce7", borderRadius: "28px", padding: "32px", position: "relative", boxShadow: "0 10px 30px rgba(6, 78, 59, 0.05)" }}>
              {/* Card Top Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
                <h3 style={{ margin: 0, fontSize: "28px", fontWeight: "800", color: "#064e3b", lineHeight: "1.25", maxWidth: "340px" }}>
                  Launch Multi-Tenant Isolation In Minutes
                </h3>
                <a href="/contact" style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#064e3b", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", textDecoration: "none", transition: "transform 0.2s ease", flexShrink: 0 }}>
                  ↗
                </a>
              </div>

              {/* Inner White Cut-out Canvas */}
              <div style={{ background: "#ffffff", borderRadius: "24px", padding: "24px", minHeight: "360px", position: "relative", overflow: "hidden", boxShadow: "0 8px 24px rgba(6, 78, 59, 0.04)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
                
                {/* Floating Left Mobile Frame */}
                <div style={{ width: "210px", background: "#f8fafc", borderRadius: "20px", border: "1.5px solid #e2e8f0", padding: "14px", boxShadow: "0 10px 25px rgba(0,0,0,0.05)", position: "relative", zIndex: 2 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                    <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#064e3b", color: "#ffffff", fontSize: "11px", fontWeight: "800", display: "flex", alignItems: "center", justifyContent: "center" }}>SH</div>
                    <span style={{ fontSize: "12px", fontWeight: "800", color: "#0f172a" }}>PostgreSQL Hub</span>
                  </div>
                  <div style={{ background: "#dcfce7", borderRadius: "10px", padding: "8px 10px", fontSize: "10px", color: "#064e3b", fontWeight: "700", marginBottom: "8px", border: "1px solid #bbf7d0" }}>
                    🔒 RLS Policy Enforced
                  </div>
                  <div style={{ background: "#ffffff", borderRadius: "8px", padding: "8px", fontSize: "10px", color: "#334155", fontFamily: "monospace", border: "1px solid #e2e8f0", marginBottom: "8px" }}>
                    tenant_id = 'org_99'
                  </div>
                  <div style={{ background: "#ecfdf5", color: "#059669", borderRadius: "6px", padding: "6px 8px", fontSize: "9.5px", fontWeight: "700" }}>
                    ✓ 0 Cross-Tenant Data Leaks
                  </div>
                </div>

                {/* Dashed Connection Line */}
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "160px", height: "120px", border: "2px dashed #a855f7", borderRadius: "20px", pointerEvents: "none", opacity: 0.5, zIndex: 1 }}></div>

                {/* Central Floating Badge */}
                <div style={{ position: "absolute", bottom: "24px", left: "50%", transform: "translateX(-50%)", width: "52px", height: "52px", borderRadius: "50%", background: "#064e3b", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", boxShadow: "0 0 20px rgba(6, 78, 59, 0.3)", zIndex: 3 }}>
                  🛡️
                </div>

                {/* Floating Right Support / Policy Box */}
                <div style={{ width: "220px", background: "#064e3b", borderRadius: "20px", padding: "16px", color: "#ffffff", boxShadow: "0 14px 30px rgba(6, 78, 59, 0.2)", position: "relative", zIndex: 2 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: "8px" }}>
                    <span style={{ fontSize: "14px" }}>💬</span>
                    <span style={{ fontSize: "13px", fontWeight: "800" }}>RLS Inspector</span>
                  </div>
                  <div style={{ fontSize: "11px", lineHeight: "1.4", opacity: 0.9, marginBottom: "8px" }}>
                    <strong style={{ color: "#34d399" }}>Erica Chen:</strong> Query attempt from Org B isolated.
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "8px", padding: "6px 8px", fontSize: "10px" }}>
                    ✨ AI Agent: Auto-applied tenant filter.
                  </div>
                </div>

              </div>
            </div>

            {/* Card 2: Automated Stripe Revenue Pipelines */}
            <div style={{ background: "#dcfce7", borderRadius: "28px", padding: "32px", position: "relative", boxShadow: "0 10px 30px rgba(6, 78, 59, 0.05)" }}>
              {/* Card Top Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
                <h3 style={{ margin: 0, fontSize: "28px", fontWeight: "800", color: "#064e3b", lineHeight: "1.25", maxWidth: "340px" }}>
                  Automate Billing In A Central Workspace
                </h3>
                <a href="/contact" style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#064e3b", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", textDecoration: "none", transition: "transform 0.2s ease", flexShrink: 0 }}>
                  ↗
                </a>
              </div>

              {/* Inner White Cut-out Canvas */}
              <div style={{ background: "#ffffff", borderRadius: "24px", padding: "24px", minHeight: "360px", position: "relative", overflow: "hidden", boxShadow: "0 8px 24px rgba(6, 78, 59, 0.04)" }}>
                
                {/* Floating Intelligence Header Pill */}
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
                  <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "6px 16px", borderRadius: "100px", fontSize: "12px", fontWeight: "700", color: "#0f172a", display: "flex", alignItems: "center", gap: "6px" }}>
                    <span>⚡ Stripe Webhook Intelligence</span>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "16px" }}>
                  {/* Left Conversations / Webhooks List */}
                  <div style={{ background: "#f8fafc", borderRadius: "16px", padding: "14px", border: "1px solid #e2e8f0" }}>
                    <div style={{ fontSize: "11px", fontWeight: "800", color: "#64748b", marginBottom: "10px", textTransform: "uppercase" }}>Live Webhook Stream</div>
                    
                    <div style={{ background: "#ffffff", padding: "8px 10px", borderRadius: "10px", marginBottom: "8px", border: "1px solid #f1f5f9" }}>
                      <div style={{ fontSize: "11px", fontWeight: "700", color: "#0f172a" }}>Erica Chen • Enterprise Tier</div>
                      <div style={{ fontSize: "10px", color: "#16a34a", fontWeight: "600" }}>$1,200/mo Subscription Active</div>
                    </div>

                    <div style={{ background: "#ffffff", padding: "8px 10px", borderRadius: "10px", border: "1px solid #f1f5f9" }}>
                      <div style={{ fontSize: "11px", fontWeight: "700", color: "#0f172a" }}>Adam Doe • API Top-up</div>
                      <div style={{ fontSize: "10px", color: "#0284c7", fontWeight: "600" }}>Metered Usage Synced</div>
                    </div>
                  </div>

                  {/* Right Context & Revenue Card */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "14px", padding: "12px" }}>
                      <div style={{ fontSize: "10px", fontWeight: "800", color: "#2563eb", textTransform: "uppercase" }}>Revenue Summary</div>
                      <div style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", margin: "2px 0" }}>$142,850</div>
                      <div style={{ fontSize: "10px", color: "#16a34a", fontWeight: "700" }}>↑ 22% YoY Growth</div>
                    </div>

                    <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
                      <div style={{ fontSize: "10px", fontWeight: "800", color: "#059669" }}>🛍️ Stripe Store</div>
                      <div style={{ fontSize: "11px", fontWeight: "700", color: "#0f172a", marginTop: "4px" }}>Order #1234</div>
                      <div style={{ fontSize: "10px", color: "#64748b" }}>Paid on 22 Sep 2025</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Card 3: Enterprise SAML SSO & SCIM Directory */}
            <div style={{ background: "#dcfce7", borderRadius: "28px", padding: "32px", position: "relative", boxShadow: "0 10px 30px rgba(6, 78, 59, 0.05)" }}>
              {/* Card Top Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
                <h3 style={{ margin: 0, fontSize: "28px", fontWeight: "800", color: "#064e3b", lineHeight: "1.25", maxWidth: "340px" }}>
                  Connect Okta & SAML SSO Effortlessly
                </h3>
                <a href="/contact" style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#064e3b", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", textDecoration: "none", transition: "transform 0.2s ease", flexShrink: 0 }}>
                  ↗
                </a>
              </div>

              {/* Inner White Cut-out Canvas */}
              <div style={{ background: "#ffffff", borderRadius: "24px", padding: "24px", minHeight: "360px", position: "relative", overflow: "hidden", boxShadow: "0 8px 24px rgba(6, 78, 59, 0.04)" }}>
                
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
                  <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "6px 16px", borderRadius: "100px", fontSize: "12px", fontWeight: "700", color: "#0f172a", display: "flex", alignItems: "center", gap: "6px" }}>
                    <span>🔑 Identity Provider Matrix</span>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", marginBottom: "16px" }}>
                  <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "12px", borderRadius: "12px", textAlign: "center" }}>
                    <div style={{ fontWeight: "800", color: "#0f172a", fontSize: "13px" }}>Okta</div>
                    <div style={{ fontSize: "10px", color: "#16a34a", fontWeight: "700", marginTop: "4px" }}>CONNECTED</div>
                  </div>
                  <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "12px", borderRadius: "12px", textAlign: "center" }}>
                    <div style={{ fontWeight: "800", color: "#0f172a", fontSize: "13px" }}>Azure AD</div>
                    <div style={{ fontSize: "10px", color: "#16a34a", fontWeight: "700", marginTop: "4px" }}>CONNECTED</div>
                  </div>
                  <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "12px", borderRadius: "12px", textAlign: "center" }}>
                    <div style={{ fontWeight: "800", color: "#0f172a", fontSize: "13px" }}>Google</div>
                    <div style={{ fontSize: "10px", color: "#16a34a", fontWeight: "700", marginTop: "4px" }}>CONNECTED</div>
                  </div>
                </div>

                <div style={{ background: "#f8fafc", borderRadius: "14px", padding: "14px", border: "1px solid #e2e8f0" }}>
                  <div style={{ fontSize: "11px", fontWeight: "800", color: "#0f172a", marginBottom: "8px" }}>SCIM Directory Users</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "11px" }}>
                      <span style={{ color: "#334155", fontWeight: "600" }}>alex@enterprise-client.com</span>
                      <span style={{ fontSize: "10px", fontWeight: "700", background: "#e0f2fe", color: "#0284c7", padding: "2px 8px", borderRadius: "100px" }}>ADMIN ROLE</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "11px" }}>
                      <span style={{ color: "#334155", fontWeight: "600" }}>team-lead@enterprise-client.com</span>
                      <span style={{ fontSize: "10px", fontWeight: "700", background: "#f8fafc", color: "#475569", padding: "2px 8px", borderRadius: "100px" }}>MEMBER ROLE</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Card 4: Immutable SOC 2 Audit Vault */}
            <div style={{ background: "#dcfce7", borderRadius: "28px", padding: "32px", position: "relative", boxShadow: "0 10px 30px rgba(6, 78, 59, 0.05)" }}>
              {/* Card Top Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
                <h3 style={{ margin: 0, fontSize: "28px", fontWeight: "800", color: "#064e3b", lineHeight: "1.25", maxWidth: "340px" }}>
                  Verify Compliance With Immutable Audit Logs
                </h3>
                <a href="/contact" style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#064e3b", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", textDecoration: "none", transition: "transform 0.2s ease", flexShrink: 0 }}>
                  ↗
                </a>
              </div>

              {/* Inner White Cut-out Canvas */}
              <div style={{ background: "#ffffff", borderRadius: "24px", padding: "24px", minHeight: "360px", position: "relative", overflow: "hidden", boxShadow: "0 8px 24px rgba(6, 78, 59, 0.04)" }}>
                
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
                  <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "6px 16px", borderRadius: "100px", fontSize: "12px", fontWeight: "700", color: "#0f172a", display: "flex", alignItems: "center", gap: "6px" }}>
                    <span>🛡️ Cryptographic SHA-256 Ledger</span>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
                  <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "12px", borderRadius: "12px", textAlign: "center" }}>
                    <div style={{ fontSize: "10px", fontWeight: "700", color: "#16a34a", textTransform: "uppercase" }}>Audit Hashes</div>
                    <div style={{ fontSize: "22px", fontWeight: "800", color: "#0f172a", margin: "2px 0" }}>1.85M</div>
                    <div style={{ fontSize: "10px", color: "#15803d", fontWeight: "600" }}>SOC 2 Verified</div>
                  </div>
                  <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "12px", borderRadius: "12px", textAlign: "center" }}>
                    <div style={{ fontSize: "10px", fontWeight: "700", color: "#64748b", textTransform: "uppercase" }}>Tamper Check</div>
                    <div style={{ fontSize: "22px", fontWeight: "800", color: "#0f172a", margin: "2px 0" }}>0 Anomalies</div>
                    <div style={{ fontSize: "10px", color: "#16a34a", fontWeight: "600" }}>Passed Security Scan</div>
                  </div>
                </div>

                <div style={{ background: "#f8fafc", borderRadius: "14px", padding: "14px", border: "1px solid #e2e8f0" }}>
                  <div style={{ fontSize: "11px", fontWeight: "800", color: "#0f172a", marginBottom: "8px" }}>Live Cryptographic Trail</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "11px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "#334155" }}>ROLE_CHANGE: Admin Assigned</span>
                      <span style={{ color: "#16a34a", fontWeight: "700" }}>SIGNED</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "#334155" }}>DATA_EXPORT: Customer CSV</span>
                      <span style={{ color: "#16a34a", fontWeight: "700" }}>AUDITED</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>\n\n      `;

const updatedContent = content.substring(0, startIndex) + newBentoJSX + content.substring(endIndex);

fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log("Successfully rebuilt Architecture section into Mint Bento Grid Layout!");
