"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ServicesHero({ cfg }) {
  // Form State
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Phone Chat State
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hi, Welcome to OneNine AI. How can I help?" },
    { sender: "user", text: "Hi, I need help with custom software engineering for our product." },
    { sender: "ai", text: "Sure! I'd be happy to assist. Could you tell me a bit more about your requirements?" },
  ]);
  const [chatInput, setChatInput] = useState("");

  // AI Suggestion Box State
  const suggestions = [
    "It's a new cloud architecture optimized for 10x throughput. Built with Next.js 15 & Rust.",
    "PostgreSQL RLS setup with automated tenant data isolation and SOC 2 logs.",
    "Autonomous AI agent pipelines built with LangChain & Pinecone vector search.",
    "Sub-second API latency with Redis caching & edge CDN delivery."
  ];
  const [suggIdx, setSuggIdx] = useState(0);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 3500);
    }
  };

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userText = chatInput.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setChatInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Got it! Our principal engineer will prepare a tailored architecture proposal. Let's schedule a review!",
        },
      ]);
    }, 900);
  };

  const handleNextSuggestion = () => {
    setSuggIdx((prev) => (prev + 1) % suggestions.length);
  };

  // Custom text fallback or from cfg
  const titleBefore = cfg?.hero?.titleBefore || "We Are Providing";
  const titleHighlight = cfg?.hero?.titleHighlight || "Professional Engineering";
  const desc = cfg?.hero?.desc || "Boost sales, enhance customer experience, and streamline operations with our cutting-edge AI & software engineering technology.";

  return (
    <section className="sh-section">
      <div className="sh-container">
        {/* ── TOP HERO BOX ── */}
        <div className="sh-hero-box">
          {/* Background Micro Grid Effect */}
          <div className="sh-grid-bg" />

          {/* Left Column: Typography & Action Form */}
          <div className="sh-hero-left">
            <h1 className="sh-title">
              {titleBefore} <br />
              {titleHighlight}{" "}
              <span className="sh-ai-badge" title="AI & Software Powered">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" />
                </svg>
              </span>
              <span className="sh-title-powered">Powered</span>
            </h1>

            <p className="sh-desc">{desc}</p>

            <div className="sh-action-btns">
              <Link href="/#contact" className="sh-btn-contact">
                Contact Us →
              </Link>
            </div>

          </div>

          {/* Right Column: Phone Mockup & Floating Overlay Cards */}
          <div className="sh-hero-right">
            <div className="sh-phone-wrapper">
              {/* Soft blue backdrop glow behind phone */}
              <div className="sh-phone-backdrop" />

              {/* Phone Frame */}
              <div className="sh-phone-frame">
                {/* Dynamic Island Notch */}
                <div className="sh-phone-island" />
                <div className="sh-phone-statusbar">
                  <span>9:41</span>
                  <div className="sh-status-icons">
                    <span>📶</span>
                    <span>🔋</span>
                  </div>
                </div>

                {/* Phone Screen App Header */}
                <div className="sh-phone-screen">
                  <div className="sh-phone-header">
                    <div className="sh-header-avatar">
                      <span role="img" aria-label="bot">🤖</span>
                    </div>
                    <div>
                      <div className="sh-header-name">Comer AI</div>
                      <div className="sh-header-date">Sep 18, 2026</div>
                    </div>
                  </div>

                  {/* Phone Screen Chat List */}
                  <div className="sh-phone-chat">
                    {messages.map((m, idx) => (
                      <div key={idx} className={`sh-chat-msg ${m.sender}`}>
                        {m.text}
                      </div>
                    ))}
                  </div>

                  {/* Chat Reactions / Tools Bar */}
                  <div className="sh-chat-tools">
                    <button type="button" title="Like">👍</button>
                    <button type="button" title="Dislike">👎</button>
                    <button type="button" title="Share">🔗</button>
                  </div>

                  {/* Interactive Phone Input */}
                  <form onSubmit={handleSendChat} className="sh-phone-input-bar">
                    <input
                      type="text"
                      placeholder="Ask Comer AI..."
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                    />
                    <button type="submit" aria-label="Send">
                      ➔
                    </button>
                  </form>
                </div>
              </div>

              {/* ── FLOATING OVERLAY CARDS ── */}

              {/* Floating Card 2: Middle Dark Stopwatch Graph */}
              <div className="sh-float-card sh-float-card-2">
                <div className="sh-dark-card-header">
                  <span className="sh-stopwatch-icon">⏱️</span>
                  <span>Time Increase</span>
                </div>
                <div className="sh-chart-wrap">
                  <svg viewBox="0 0 100 40" className="sh-chart-svg">
                    <path
                      d="M 5 30 Q 30 35, 50 15 T 95 10"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="50" cy="15" r="4" fill="#38bdf8" className="sh-chart-dot" />
                  </svg>
                </div>
                <div className="sh-dark-card-val">
                  <span className="sh-val-num">5</span>
                  <span className="sh-val-unit">second</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── BOTTOM GRID ROW (3 CARDS) ── */}
        <div className="sh-grid-row">
          {/* Card 1: Dark Navy Stat Card */}
          <div className="sh-card-dark">
            <div className="sh-stat-num-row">
              <span className="sh-big-num">24K+</span>
            </div>
            <div className="sh-dark-footer">
              <span className="sh-stat-pill">+4%</span>
              <span className="sh-dark-prompt">Start a chat with Comer AI</span>
            </div>
          </div>

          {/* Card 2: Vibrant Blue Radial Tag Cloud Card */}
          <div className="sh-card-blue">
            <div className="sh-blue-bg-glow" />
            <div className="sh-tag-cloud">
              <span className="sh-cloud-pill">🪶 Campaign</span>
              <span className="sh-cloud-pill icon-only">🤖</span>
              <span className="sh-cloud-pill">✔️ Checklist task</span>
              <span className="sh-cloud-pill">🚀 Strategy</span>
              <span className="sh-cloud-pill">💡 Generate ideas</span>
              <span className="sh-cloud-pill">✍️ Write a blog post</span>
            </div>
          </div>

          {/* Card 3: Light Blue Container with Split Components */}
          <div className="sh-card-light">
            {/* Left Inner Block: White AI Suggestion Card */}
            <div className="sh-sugg-box">
              <div className="sh-sugg-header">
                <span className="sh-sugg-icon">🤖</span>
                <span>Comer AI Suggestion</span>
              </div>
              <p className="sh-sugg-text">{suggestions[suggIdx]}</p>
              <button type="button" onClick={handleNextSuggestion} className="sh-update-btn">
                + Update
              </button>
            </div>

            {/* Right Inner Block: 2x2 Feature Pills */}
            <div className="sh-feat-grid">
              <div className="sh-feat-pill">
                <span className="sh-feat-icon">💲</span>
                <span>Cost savings</span>
              </div>
              <div className="sh-feat-pill">
                <span className="sh-feat-icon">✦</span>
                <span>User experience</span>
              </div>
              <div className="sh-feat-pill">
                <span className="sh-feat-icon">📞</span>
                <span>24/7 support</span>
              </div>
              <div className="sh-feat-pill">
                <span className="sh-feat-icon">🛡️</span>
                <span>Safety guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
