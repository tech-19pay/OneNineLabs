"use client";

import { useState } from "react";

export default function ServiceContactForm({ placeholder = "Tell us about your project...", sourcePage = "service_page" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // "submitting" | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !company) {
      setStatus("error");
      setErrorMsg("Please fill in your email and company.");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message, sourcePage }),
      });
      const resText = await res.text();
      let data = {};
      try {
        data = resText ? JSON.parse(resText) : {};
      } catch (e) {
        console.error("JSON parse error:", e);
      }
      if (res.ok && data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setCompany("");
        setMessage("");
        setTimeout(() => setStatus(null), 4000);
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Failed to submit. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <form className="vd-contact-form-wrap" onSubmit={handleSubmit}>
      <div className="vd-form-group">
        <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="vd-form-group">
        <input type="email" placeholder="Your Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="vd-form-group">
        <input type="text" placeholder="Your Company" required value={company} onChange={(e) => setCompany(e.target.value)} />
      </div>
      <div className="vd-form-group">
        <textarea rows="4" placeholder={placeholder} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      </div>
      <button
        className="vd-btn-primary"
        style={{ width: "100%", justifyContent: "center" }}
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Send Message →"}
      </button>
      {status === "success" && (
        <div style={{ marginTop: "14px", padding: "12px 16px", borderRadius: "12px", background: "#ecfdf5", border: "1px solid #a7f3d0", color: "#047857", fontSize: "13.5px", fontWeight: "700", textAlign: "center" }}>
          ✓ Thanks! We&apos;ll get back to you within 24 hours.
        </div>
      )}
      {status === "error" && (
        <div style={{ marginTop: "14px", padding: "12px 16px", borderRadius: "12px", background: "#fef2f2", border: "1px solid #fecaca", color: "#b91c1c", fontSize: "13.5px", fontWeight: "700", textAlign: "center" }}>
          {errorMsg}
        </div>
      )}
    </form>
  );
}
