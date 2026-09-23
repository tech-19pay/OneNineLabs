"use client";

import { useState } from "react";
import Link from "next/link";
import StudentGrowthMockup from "@/components/StudentGrowthMockup";

export default function StudentPageClient() {
  // Toast notifications
  const [toasts, setToasts] = useState([]);
  const addToast = (message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  // Pricing Plans Data
  const studentPlans = [
    {
      id: "platinum",
      name: "PLATINUM",
      price: "₹399",
      period: "/month",
      tagline: "“Start Your Voice.”",
      target: "For students & campus creators who are just starting their social media presence.",
      color: "#0284c7",
      bgLight: "#f0f9ff",
      borderCol: "#bae6fd",
      popular: false,
      badgeText: "Starter Tier",
      postCount: "10 Posts",
      storyCount: "8 Stories",
      reelCount: "2 Reels",
      platforms: "1 Platform",
      features: [
        "10 social media posts",
        "8 stories",
        "2 reels",
        "Captions & copywriting",
        "Basic hashtags",
        "Creative designs",
        "Awareness/festival content",
        "1 social media platform",
      ],
    },
    {
      id: "diamond",
      name: "DIAMOND",
      price: "₹599",
      period: "/month",
      tagline: "“Build Your Identity.”",
      target: "For students scaling their reach across campus, clubs, and professional circles.",
      color: "#0284c7",
      bgLight: "#e0f2fe",
      borderCol: "#0284c7",
      popular: true,
      badgeText: "Most Popular",
      postCount: "14 Posts",
      storyCount: "12 Stories",
      reelCount: "4 Reels",
      platforms: "1 Platform",
      features: [
        "14 posts",
        "12 stories",
        "4 reels",
        "Profile optimization",
        "Monthly content calendar",
        "Advanced hashtag strategy",
        "2 awareness/festival creatives",
        "1 social media platform",
      ],
    },
    {
      id: "crown",
      name: "CROWN",
      price: "₹799",
      period: "/month",
      tagline: "“Own Your Campus Presence.”",
      target: "For student leaders, club presidents, and active student ambassadors.",
      color: "#0369a1",
      bgLight: "#f0f9ff",
      borderCol: "#bae6fd",
      popular: false,
      badgeText: "Growth Pro",
      postCount: "18 Posts",
      storyCount: "20 Stories",
      reelCount: "6 Reels",
      platforms: "2 Platforms",
      features: [
        "18 posts",
        "20 stories",
        "6 reels",
        "2 social media platforms",
        "Personal branding strategy",
        "Engagement strategy",
        "Priority support",
      ],
    },
    {
      id: "ace",
      name: "ACE",
      price: "₹999",
      period: "/month",
      tagline: "“Turn Your Voice Into Influence.”",
      target: "Complete high-impact personal branding & viral content distribution for top student creators.",
      color: "#0f172a",
      bgLight: "#f8fafc",
      borderCol: "#cbd5e1",
      popular: false,
      badgeText: "Ultimate Influence",
      postCount: "20 Posts",
      storyCount: "30 Stories",
      reelCount: "8 Reels",
      platforms: "2 Platforms",
      features: [
        "20 posts",
        "30 stories",
        "8 reels",
        "2 social media platforms",
        "Advanced personal branding",
        "Advanced engagement strategy",
        "Priority content requests",
      ],
    },
  ];

  // Hero Quick Preview Selected Plan
  const [heroActivePlan, setHeroActivePlan] = useState(studentPlans[1]); // Default Diamond

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(studentPlans[1]); // Default Diamond
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    socialHandle: "",
    platform: "Instagram",
    planName: "DIAMOND (₹599/mo)",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openBookingModal = (plan) => {
    setSelectedPlan(plan);
    setFormData((prev) => ({
      ...prev,
      planName: `${plan.name} (${plan.price}${plan.period})`,
    }));
    setIsSubmitted(false);
    setIsModalOpen(true);
  };

  const scrollToPricing = () => {
    const el = document.getElementById("pricing");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      addToast("Please fill in Name, Email, and Phone number.", "error");
      return;
    }

    setIsSubmitting(true);

    // Target WhatsApp Number: +91 85888 07039
    const targetWhatsAppNumber = "918588807039";
    const waText = 
`🎓 *NEW STUDENT PLAN REGISTRATION*
━━━━━━━━━━━━━━━━━━━━━━━━
📌 *Selected Plan:* ${formData.planName || "DIAMOND (₹599/mo)"}
👤 *Full Name:* ${formData.name.trim()}
📧 *Email:* ${formData.email.trim()}
📱 *WhatsApp / Phone:* ${formData.phone.trim()}
🏛️ *College / University:* ${formData.college ? formData.college.trim() : "Not Specified"}
🌐 *Primary Platform:* ${formData.platform}
🔗 *Social Profile / Handle:* ${formData.socialHandle ? formData.socialHandle.trim() : "Not Specified"}
📝 *Content Goals / Notes:* ${formData.notes ? formData.notes.trim() : "None"}
━━━━━━━━━━━━━━━━━━━━━━━━
🚀 *Source:* OneNineLabs Student Portal`;

    const generatedWaUrl = `https://api.whatsapp.com/send?phone=${targetWhatsAppNumber}&text=${encodeURIComponent(waText)}`;
    setWhatsappUrl(generatedWaUrl);

    // Save to database in background
    try {
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          company: `${formData.college ? formData.college.trim() : "Student"} - Plan: ${formData.planName}`,
          message: `Selected Plan: ${formData.planName} | Platform: ${formData.platform} | Handle: ${formData.socialHandle || "N/A"} | Notes: ${formData.notes || "N/A"}`,
          sourcePage: "student_social_media_services",
        }),
      }).catch((err) => {
        console.error("Student form DB error:", err);
      });
    } catch (err) {
      console.error("Fetch error:", err);
    }

    // Attempt to open WhatsApp directly
    try {
      window.open(generatedWaUrl, "_blank");
    } catch (err) {
      console.error("Could not open WhatsApp window:", err);
    }

    setIsSubmitted(true);
    addToast("Order submitted! Opening WhatsApp (+91 85888 07039)...", "success");
    setIsSubmitting(false);
  };

  const platforms = [
    { name: "Instagram", icon: "📸", desc: "Reels, carousels, aesthetic stories & aesthetic feed layout" },
    { name: "LinkedIn", icon: "💼", desc: "Professional authority posts, internship hook copy & carousels" },
    { name: "X (Twitter)", icon: "🐦", desc: "Viral tech threads, opinion hooks & engagement loops" },
    { name: "YouTube Shorts", icon: "▶️", desc: "Short-form video edits, captions & algorithmic hooks" },
  ];

  const faqs = [
    {
      q: "How does the social media content creation process work?",
      a: "Once you subscribe, our creative team connects with you on WhatsApp/Telegram. We analyze your niche, goals, and campus vibe, build a monthly content calendar, and deliver high-quality posts, reels, and stories for your approval before publishing.",
    },
    {
      q: "Who designs the creatives and edits the reels?",
      a: "Our in-house design and video editing team crafts custom Canva/Photoshop templates, animated graphics, and Premiere Pro/CapCut reel edits with trendy audio, subtitles, and high-retention hooks.",
    },
    {
      q: "Can I choose which social media platforms my posts go to?",
      a: "Yes! For Platinum and Diamond plans, you can pick 1 primary platform (e.g. Instagram or LinkedIn). For Crown and Ace plans, we manage and optimize across 2 platforms simultaneously.",
    },
    {
      q: "What if I need custom festival or college event creatives?",
      a: "All our plans include awareness and festival content. Crown and Ace members can submit priority content requests for campus elections, club events, or personal milestones.",
    },
    {
      q: "Are there any hidden charges or long-term contracts?",
      a: "No contracts! All plans are billed month-to-month. You can pause, upgrade, or cancel your student plan anytime with zero penalties.",
    },
  ];

  return (
    <>
      <style>{`
        .std-wrapper {
          width: 100%;
          min-height: 100vh;
          padding-top: calc(var(--header-height, 80px) + 20px);
          padding-bottom: 90px;
          color: #0f172a;
          font-family: var(--font-sans), 'Plus Jakarta Sans', system-ui, sans-serif;
        }

        .std-inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Hero Section Container */
        .std-hero-v2 {
          padding: 24px 0 60px 0;
          position: relative;
        }

        .std-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          margin-bottom: 48px;
        }

        @media (max-width: 960px) {
          .std-hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }

        .std-hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        @media (max-width: 960px) {
          .std-hero-left {
            align-items: center;
          }
        }

        .std-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #e0f2fe;
          border: 1px solid #bae6fd;
          padding: 6px 18px;
          border-radius: 9999px;
          margin-bottom: 18px;
          box-shadow: 0 2px 10px rgba(2, 132, 199, 0.08);
        }

        .std-badge span {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #0284c7;
        }

        .std-title {
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 900;
          line-height: 1.12;
          letter-spacing: -1.6px;
          text-transform: uppercase;
          color: #0f172a;
          margin: 0 0 16px 0;
        }

        .std-gradient-text {
          background: linear-gradient(135deg, #0284c7 0%, #38bdf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .std-subtitle {
          font-size: clamp(15.5px, 1.6vw, 17.5px);
          line-height: 1.62;
          color: #475569;
          margin: 0 0 28px 0;
          font-weight: 450;
        }

        /* Hero Quick Tabs */
        .std-hero-plan-tabs {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .std-hero-tab-btn {
          border: none;
          background: #ffffff;
          color: #475569;
          padding: 8px 16px;
          border-radius: 9999px;
          font-size: 13px;
          font-weight: 750;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);
        }

        .std-hero-tab-btn.active {
          background: #0f172a;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);
        }

        .std-hero-tab-btn.active .tab-price {
          color: #38bdf8;
        }

        .std-hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        @media (max-width: 960px) {
          .std-hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .std-hero-actions .std-btn-primary, .std-hero-actions .std-btn-secondary {
            width: 100%;
            justify-content: center;
          }
        }

        .std-btn-primary {
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          color: #ffffff !important;
          padding: 13px 28px;
          border-radius: 9999px;
          font-size: 14.5px;
          font-weight: 800;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: none;
          cursor: pointer;
          box-shadow: 0 10px 24px rgba(2, 132, 199, 0.28);
          transition: all 0.25s ease;
        }

        .std-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(2, 132, 199, 0.38);
        }

        .std-btn-secondary {
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          color: #0f172a !important;
          padding: 13px 24px;
          border-radius: 9999px;
          font-size: 14.5px;
          font-weight: 750;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .std-btn-secondary:hover {
          background: #f8fafc;
          border-color: #94a3b8;
          transform: translateY(-1px);
        }

        /* Interactive Hero Card Preview (Right Side) */
        .std-hero-card-preview {
          background: transparent;
          border: none;
          border-radius: 28px;
          padding: 10px 12px;
          box-shadow: none;
          position: relative;
          text-align: left;
          font-family: var(--font-sans), 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif !important;
        }

        .std-hero-card-preview *,
        .std-hero-card-preview div,
        .std-hero-card-preview span,
        .std-hero-card-preview button {
          font-family: var(--font-sans), 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif !important;
        }

        .std-preview-badge-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }

        .std-preview-live-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #f0fdf4;
          border: none;
          color: #16a34a;
          font-size: 11.5px;
          font-weight: 800;
          padding: 4px 12px;
          border-radius: 9999px;
        }

        .std-preview-live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #16a34a;
          animation: pulse 1.8s infinite;
        }

        @keyframes pulse {
          0% { opacity: 0.4; }
          50% { opacity: 1; }
          100% { opacity: 0.4; }
        }

        .std-preview-plan-title {
          font-size: 24px;
          font-weight: 900;
          color: #0f172a;
          margin: 0 0 4px 0;
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        .std-preview-plan-title span.price {
          color: #0284c7;
          font-size: 28px;
        }

        .std-preview-plan-tagline {
          font-size: 13.5px;
          font-weight: 700;
          color: #0284c7;
          margin-bottom: 16px;
        }

        /* 3-Pill Deliverables Counter */
        .std-preview-counter-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          background: rgba(224, 242, 254, 0.45);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(186, 230, 253, 0.35);
          border-radius: 14px;
          padding: 12px 10px;
          margin-bottom: 18px;
          text-align: center;
        }

        .std-counter-item-val {
          font-size: 15px;
          font-weight: 900;
          color: #0f172a;
        }

        .std-counter-item-lbl {
          font-size: 11px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
        }

        .std-preview-feature-list {
          display: flex;
          flex-direction: column;
          gap: 9px;
          margin-bottom: 20px;
        }

        .std-preview-feat {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #334155;
          font-weight: 600;
        }

        .std-preview-feat-check {
          color: #0284c7;
          font-weight: 900;
          font-size: 12px;
        }

        /* Hero Quick Stats Strip */
        .std-hero-stats-strip {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 14px;
          margin-top: 10px;
        }

        .std-stat-box {
          background: #ffffff;
          border: none;
          border-radius: 18px;
          padding: 18px 16px;
          text-align: center;
          box-shadow: 0 8px 24px -4px rgba(15, 23, 42, 0.05);
        }

        .std-stat-num {
          font-size: 26px;
          font-weight: 900;
          color: #0284c7;
          margin-bottom: 2px;
        }

        .std-stat-txt {
          font-size: 12.5px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Section Headings */
        .std-header-block {
          text-align: center;
          margin-bottom: 48px;
        }

        .std-tag-label {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 16px;
          background: rgba(2, 132, 199, 0.08);
          border: 1px solid rgba(2, 132, 199, 0.22);
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 800;
          color: #0284c7;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .std-main-heading {
          font-size: clamp(30px, 4vw, 44px);
          font-weight: 900;
          color: #0f172a;
          letter-spacing: -1px;
          margin: 0 0 16px 0;
          line-height: 1.2;
        }

        .std-main-heading .gradient-txt {
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .std-sub-desc {
          font-size: 16px;
          color: #64748b;
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Pricing Cards Grid */
        .std-pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 22px;
          align-items: stretch;
          margin-bottom: 64px;
        }

        .std-plan-card {
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 24px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          position: relative;
          box-shadow: 0 10px 30px -4px rgba(15, 23, 42, 0.05);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .std-plan-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 45px -6px rgba(15, 23, 42, 0.1);
        }

        .std-plan-card.is-popular {
          border: 2px solid #0284c7;
          box-shadow: 0 20px 45px -6px rgba(2, 132, 199, 0.2);
          transform: translateY(-6px);
        }

        .std-popular-ribbon {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          color: #ffffff;
          font-size: 11.5px;
          font-weight: 850;
          text-align: center;
          padding: 6px 0;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          border-top-left-radius: 22px;
          border-top-right-radius: 22px;
        }

        .std-card-head {
          margin-bottom: 22px;
        }

        .std-plan-badge-pill {
          display: inline-block;
          font-size: 11px;
          font-weight: 800;
          color: #0284c7;
          background: #e0f2fe;
          border: 1px solid #bae6fd;
          padding: 3px 10px;
          border-radius: 9999px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
        }

        .std-plan-name {
          font-size: 20px;
          font-weight: 900;
          color: #0f172a;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }

        .std-price-row {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin-bottom: 10px;
        }

        .std-price-num {
          font-size: 38px;
          font-weight: 900;
          color: #0f172a;
          letter-spacing: -1.2px;
          line-height: 1;
        }

        .std-price-period {
          font-size: 14px;
          color: #64748b;
          font-weight: 600;
        }

        .std-plan-tagline {
          font-size: 14px;
          font-weight: 750;
          color: #0284c7;
          margin-bottom: 6px;
        }

        .std-plan-target {
          font-size: 12.5px;
          line-height: 1.5;
          color: #64748b;
          min-height: 38px;
        }

        .std-features-box {
          flex: 1;
          border-top: 1px solid #f1f5f9;
          padding-top: 20px;
          margin-bottom: 24px;
        }

        .std-features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .std-feat-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13.5px;
          color: #334155;
          font-weight: 550;
          line-height: 1.4;
        }

        .std-feat-check {
          color: #0284c7;
          font-size: 13px;
          font-weight: 900;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .std-select-plan-btn {
          width: 100%;
          padding: 13px 0;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .std-select-plan-btn.popular-btn {
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          color: #ffffff;
          box-shadow: 0 6px 18px rgba(2, 132, 199, 0.3);
        }

        .std-select-plan-btn.popular-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(2, 132, 199, 0.4);
        }

        .std-select-plan-btn.default-btn {
          background: #f1f5f9;
          color: #0f172a;
        }

        .std-select-plan-btn.default-btn:hover {
          background: #e2e8f0;
          color: #0284c7;
        }

        /* Platforms Section */
        .std-platforms-section {
          padding: 20px 0 60px 0;
        }

        .std-platforms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
        }

        .std-platform-card {
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 20px;
          padding: 24px;
          text-align: left;
          box-shadow: 0 6px 20px -3px rgba(15, 23, 42, 0.04);
        }

        .std-plat-icon {
          font-size: 32px;
          margin-bottom: 12px;
          display: inline-block;
        }

        .std-plat-title {
          font-size: 18px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 6px;
        }

        .std-plat-desc {
          font-size: 13.5px;
          line-height: 1.55;
          color: #64748b;
          margin: 0;
        }

        /* High-Impact CTA Banner */
        .std-cta-banner {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          border-radius: 28px;
          padding: 52px 36px;
          text-align: center;
          color: #ffffff;
          margin: 40px 0 60px 0;
          box-shadow: 0 20px 50px -10px rgba(15, 23, 42, 0.25);
        }

        .std-cta-banner h2 {
          font-size: clamp(26px, 3.8vw, 40px);
          font-weight: 900;
          letter-spacing: -1px;
          margin: 0 0 14px 0;
        }

        .std-cta-banner p {
          font-size: 16px;
          line-height: 1.6;
          color: #94a3b8;
          max-width: 640px;
          margin: 0 auto 28px auto;
        }

        /* FAQ Section */
        .std-faq-section {
          padding: 20px 0;
        }

        .std-faq-list {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .std-faq-item {
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 16px;
          padding: 22px 24px;
          box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.03);
          text-align: left;
        }

        .std-faq-question {
          font-size: 16.5px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .std-faq-answer {
          font-size: 14px;
          line-height: 1.6;
          color: #64748b;
          margin: 0;
        }

        /* Modal Styles */
        .std-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: std-fade-in 0.25s ease forwards;
        }

        @keyframes std-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .std-modal-content {
          background: #ffffff;
          border-radius: 24px;
          max-width: 520px;
          width: 100%;
          padding: 34px 28px;
          box-shadow: 0 25px 60px -10px rgba(15, 23, 42, 0.3);
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }

        .std-modal-close {
          position: absolute;
          top: 18px;
          right: 18px;
          background: #f1f5f9;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-weight: 800;
          color: #64748b;
        }

        .std-modal-close:hover {
          background: #e2e8f0;
          color: #0f172a;
        }

        .std-form-row {
          margin-bottom: 14px;
          text-align: left;
        }

        .std-form-label {
          display: block;
          font-size: 12.5px;
          font-weight: 750;
          color: #1e293b;
          margin-bottom: 5px;
        }

        .std-form-input, .std-form-select, .std-form-textarea {
          width: 100%;
          padding: 10px 14px;
          border-radius: 12px;
          border: 1.5px solid #cbd5e1;
          font-size: 13.5px;
          color: #0f172a;
          background: #ffffff;
          font-family: inherit;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .std-form-input:focus, .std-form-select:focus, .std-form-textarea:focus {
          outline: none;
          border-color: #0284c7;
          box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
        }

        /* Toasts */
        .std-toasts-box {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 10000;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .std-toast-pill {
          background: #0f172a;
          color: #ffffff;
          padding: 12px 20px;
          border-radius: 12px;
          font-size: 13.5px;
          font-weight: 600;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .std-toast-pill.success {
          border-left: 4px solid #10b981;
        }

        .std-toast-pill.error {
          border-left: 4px solid #ef4444;
        }

        .std-toast-pill.info {
          border-left: 4px solid #38bdf8;
        }

        /* Mobile & Tablet Responsiveness */
        @media (max-width: 768px) {
          .std-hero-section {
            padding: 20px 16px 40px !important;
          }
          .std-hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .std-btn-primary, .std-btn-secondary {
            width: 100%;
            justify-content: center;
          }
          .std-hero-plan-tabs {
            justify-content: center;
          }
          .std-hero-stats-strip {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .std-pricing-grid {
            grid-template-columns: 1fr !important;
          }
          .std-form-2col {
            grid-template-columns: 1fr !important;
          }
          .std-modal-content {
            padding: 24px 18px !important;
            margin: 12px !important;
          }
          .std-cta-banner {
            padding: 36px 20px !important;
            border-radius: 20px !important;
          }
        }
        @media (max-width: 480px) {
          .std-hero-stats-strip {
            grid-template-columns: 1fr !important;
          }
          .std-counter-item-val {
            font-size: 13px !important;
          }
          .std-counter-item-lbl {
            font-size: 9.5px !important;
          }
        }
      `}</style>

      {/* Toast Notification Container */}
      <div className="std-toasts-box" aria-live="polite">
        {toasts.map((t) => (
          <div key={t.id} className={`std-toast-pill ${t.type}`}>
            <span>{t.type === "success" ? "✓" : t.type === "error" ? "✕" : "ℹ"}</span>
            <span>{t.message}</span>
          </div>
        ))}
      </div>

      <div className="std-wrapper">
        <div className="std-inner">
          
          {/* Re-Created Hero Section tailored specifically for Student Social Media & Branding Services */}
          <section className="std-hero-v2">
            <div className="std-hero-grid">
              
              {/* Left Column: Hero Text & Actions */}
              <div className="std-hero-left">
                <div className="std-badge">
                  <span>🎓 STUDENT SOCIAL MEDIA &amp; BRANDING</span>
                </div>

                <h1 className="std-title">
                  GROW YOUR CAMPUS INFLUENCE. <br />
                  <span className="std-gradient-text">STARTING AT ₹399/MO.</span>
                </h1>

                <p className="std-subtitle">
                  High-retention reels, custom graphic posts, engaging captions, and viral hashtag strategies designed specifically for students, campus leaders, and creators.
                </p>

                {/* Hero Feature Highlights */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14.5px", color: "#334155", fontWeight: "600" }}>
                    <span style={{ width: "22px", height: "22px", borderRadius: "50%", background: "#e0f2fe", color: "#0284c7", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "800" }}>✓</span>
                    <span>10 to 20 Custom Social Posts &amp; 8 Viral Reels / Month</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14.5px", color: "#334155", fontWeight: "600" }}>
                    <span style={{ width: "22px", height: "22px", borderRadius: "50%", background: "#e0f2fe", color: "#0284c7", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "800" }}>✓</span>
                    <span>Profile Optimization &amp; Monthly Content Calendar</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14.5px", color: "#334155", fontWeight: "600" }}>
                    <span style={{ width: "22px", height: "22px", borderRadius: "50%", background: "#e0f2fe", color: "#0284c7", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "800" }}>✓</span>
                    <span>48h Creative Turnaround &amp; Zero Contract Lock-in</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="std-hero-actions">
                  <button
                    className="std-btn-primary"
                    onClick={() => openBookingModal(studentPlans[1])}
                    id="hero-book-active-plan-btn"
                  >
                    <span>Get Started with Diamond (₹599)</span>
                    <span>&rarr;</span>
                  </button>

                  <button
                    className="std-btn-secondary"
                    onClick={scrollToPricing}
                    id="hero-view-all-plans-btn"
                  >
                    <span>Compare All 4 Plans</span>
                    <span>↓</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Student Growth Studio Interactive Mockup */}
              <div className="std-hero-mockup-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <StudentGrowthMockup onSelectPlan={openBookingModal} />
              </div>

            </div>

            {/* Quick Stats Strip */}
            <div className="std-hero-stats-strip">
              <div className="std-stat-box">
                <div className="std-stat-num">₹399</div>
                <div className="std-stat-txt">Starting Price / Mo</div>
              </div>
              <div className="std-stat-box">
                <div className="std-stat-num">10–20</div>
                <div className="std-stat-txt">Custom Monthly Posts</div>
              </div>
              <div className="std-stat-box">
                <div className="std-stat-num">Up to 8</div>
                <div className="std-stat-txt">High-Retention Reels</div>
              </div>
              <div className="std-stat-box">
                <div className="std-stat-num">48h</div>
                <div className="std-stat-txt">Creative Onboarding</div>
              </div>
            </div>
          </section>

          {/* Pricing Plans Section */}
          <section id="pricing" style={{ padding: "30px 0" }}>
            <div className="std-header-block">
              <div className="std-tag-label">
                <span>✦</span>
                <span>TRANSPARENT STUDENT PRICING</span>
              </div>
              <h2 className="std-main-heading">
                Choose Your <span className="gradient-txt">Growth Plan</span>
              </h2>
              <p className="std-sub-desc">
                From starting your voice to turning campus reach into lasting authority — select the package crafted specifically for student creators and leaders.
              </p>
            </div>

            {/* 4 Cards Grid */}
            <div className="std-pricing-grid">
              {studentPlans.map((plan) => {
                const isPop = plan.popular;
                return (
                  <div
                    key={plan.id}
                    className={`std-plan-card ${isPop ? "is-popular" : ""}`}
                  >
                    {isPop && (
                      <div className="std-popular-ribbon">
                        Most Popular Choice
                      </div>
                    )}

                    <div className="std-card-head" style={{ marginTop: isPop ? "14px" : "0" }}>
                      <span className="std-plan-badge-pill">{plan.badgeText}</span>
                      <div className="std-plan-name">{plan.name}</div>
                      
                      <div className="std-price-row">
                        <span className="std-price-num">{plan.price}</span>
                        <span className="std-price-period">{plan.period}</span>
                      </div>

                      <div className="std-plan-tagline">{plan.tagline}</div>
                      <div className="std-plan-target">{plan.target}</div>
                    </div>

                    <div className="std-features-box">
                      <ul className="std-features-list">
                        {plan.features.map((feat, idx) => (
                          <li key={idx} className="std-feat-item">
                            <span className="std-feat-check">✓</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      className={`std-select-plan-btn ${isPop ? "popular-btn" : "default-btn"}`}
                      onClick={() => openBookingModal(plan)}
                    >
                      <span>Choose {plan.name}</span>
                      <span>&rarr;</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Supported Platforms Section */}
          <section className="std-platforms-section">
            <div className="std-header-block">
              <div className="std-tag-label">
                <span>✦</span>
                <span>OMNICHANNEL REACH</span>
              </div>
              <h2 className="std-main-heading">
                Platforms We <span className="gradient-txt">Optimize For You</span>
              </h2>
              <p className="std-sub-desc">
                We tailor your content strategy specifically for the algorithms and audiences of each major network.
              </p>
            </div>

            <div className="std-platforms-grid">
              {platforms.map((p, idx) => (
                <div key={idx} className="std-platform-card">
                  <div className="std-plat-icon">{p.icon}</div>
                  <div className="std-plat-title">{p.name}</div>
                  <p className="std-plat-desc">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* High-Impact CTA Banner */}
          <div className="std-cta-banner">
            <span style={{ display: "inline-block", background: "rgba(2, 132, 199, 0.2)", border: "1px solid #0284c7", color: "#38bdf8", padding: "4px 14px", borderRadius: "9999px", fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>
              INSTANT ONBOARDING
            </span>
            <h2>Ready to Build Your Personal Brand?</h2>
            <p>
              Join 500+ student leaders and creators growing their influence. Get your monthly calendar and first batch of custom creatives in 48 hours.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <button
                className="std-select-plan-btn popular-btn"
                style={{ width: "auto", padding: "14px 34px", borderRadius: "9999px" }}
                onClick={() => openBookingModal(studentPlans[1])}
              >
                <span>Get Started with Diamond (₹599)</span>
                <span>&rarr;</span>
              </button>
              <a
                href="mailto:19@oneninelabs.com"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#ffffff",
                  padding: "14px 26px",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  textDecoration: "none",
                  fontSize: "14px",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                Email Support Team
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="std-faq-section">
            <div className="std-header-block">
              <div className="std-tag-label">
                <span>✦</span>
                <span>HAVE QUESTIONS?</span>
              </div>
              <h2 className="std-main-heading">
                Frequently Asked <span className="gradient-txt">Questions</span>
              </h2>
              <p className="std-sub-desc">
                Everything you need to know about our student social media packages.
              </p>
            </div>

            <div className="std-faq-list">
              {faqs.map((f, idx) => (
                <div key={idx} className="std-faq-item">
                  <div className="std-faq-question">{f.q}</div>
                  <div className="std-faq-answer">{f.a}</div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* Plan Booking Modal */}
      {isModalOpen && (
        <div className="std-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="std-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="std-modal-close" onClick={() => setIsModalOpen(false)}>
              ✕
            </button>

            {isSubmitted ? (
              <div style={{ textAlign: "center", padding: "16px 0" }}>
                <div style={{ fontSize: "44px", marginBottom: "12px" }}>🎉</div>
                <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a", marginBottom: "8px" }}>
                  Registration Received!
                </h3>
                <p style={{ color: "#64748b", fontSize: "14px", lineHeight: 1.6, marginBottom: "20px" }}>
                  Your form data has been sent to WhatsApp at <strong>+91 85888 07039</strong>.
                </p>

                {/* Direct WhatsApp Action Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    width: "100%",
                    padding: "14px 20px",
                    backgroundColor: "#25D366",
                    color: "#ffffff",
                    borderRadius: "14px",
                    fontWeight: "800",
                    fontSize: "15px",
                    textDecoration: "none",
                    boxShadow: "0 10px 25px rgba(37, 211, 102, 0.35)",
                    marginBottom: "16px",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.36 7.34 9.09 7.4 8.87 7.65C8.64 7.89 8 8.49 8 9.72C8 10.95 8.89 12.13 9.01 12.3C9.14 12.46 10.77 14.97 13.25 16.05C13.84 16.31 14.3 16.46 14.66 16.57C15.26 16.77 15.8 16.74 16.23 16.67C16.72 16.6 17.72 16.07 17.93 15.48C18.14 14.89 18.14 14.38 18.08 14.28C18.01 14.17 17.84 14.11 17.59 13.98C17.33 13.86 16.09 13.25 15.86 13.16C15.63 13.08 15.47 13.04 15.3 13.28C15.14 13.53 14.66 14.11 14.51 14.28C14.37 14.45 14.22 14.47 13.97 14.35C13.71 14.22 12.89 13.95 11.91 13.08C11.15 12.4 10.63 11.56 10.48 11.31C10.34 11.06 10.46 10.92 10.59 10.79C10.7 10.68 10.84 10.5 10.97 10.35C11.1 10.2 11.14 10.09 11.23 9.92C11.31 9.76 11.27 9.61 11.21 9.49C11.14 9.36 10.67 8.21 10.47 7.73C10.28 7.27 10.08 7.33 9.93 7.32C9.79 7.32 9.63 7.34 9.53 7.34Z"/>
                  </svg>
                  <span>Open in WhatsApp (+91 85888 07039)</span>
                </a>

                {/* Details Summary Card */}
                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "14px",
                    padding: "14px",
                    textAlign: "left",
                    fontSize: "13px",
                    marginBottom: "16px",
                  }}
                >
                  <div style={{ fontWeight: 800, color: "#0f172a", marginBottom: "8px", borderBottom: "1px solid #e2e8f0", paddingBottom: "6px" }}>
                    📋 Submitted Summary
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: "6px", color: "#475569" }}>
                    <span style={{ fontWeight: 600 }}>Plan:</span>
                    <span style={{ fontWeight: 700, color: "#0284c7" }}>{formData.planName}</span>
                    <span style={{ fontWeight: 600 }}>Name:</span>
                    <span style={{ color: "#0f172a" }}>{formData.name}</span>
                    <span style={{ fontWeight: 600 }}>Phone:</span>
                    <span style={{ color: "#0f172a" }}>{formData.phone}</span>
                    <span style={{ fontWeight: 600 }}>Platform:</span>
                    <span style={{ color: "#0f172a" }}>{formData.platform}</span>
                    {formData.college && (
                      <>
                        <span style={{ fontWeight: 600 }}>College:</span>
                        <span style={{ color: "#0f172a" }}>{formData.college}</span>
                      </>
                    )}
                  </div>
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      setIsSubmitted(false);
                    }}
                    style={{
                      flex: 1,
                      padding: "10px",
                      borderRadius: "10px",
                      border: "1px solid #cbd5e1",
                      background: "#ffffff",
                      cursor: "pointer",
                      fontWeight: 700,
                      fontSize: "13.5px",
                      color: "#475569",
                    }}
                  >
                    Close Window
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        college: "",
                        socialHandle: "",
                        platform: "Instagram",
                        planName: "DIAMOND (₹599/mo)",
                        notes: "",
                      });
                    }}
                    style={{
                      flex: 1,
                      padding: "10px",
                      borderRadius: "10px",
                      border: "none",
                      background: "#f1f5f9",
                      cursor: "pointer",
                      fontWeight: 700,
                      fontSize: "13.5px",
                      color: "#0f172a",
                    }}
                  >
                    Submit Another
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: "18px", textAlign: "left" }}>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "#0284c7", background: "#e0f2fe", border: "1px solid #bae6fd", padding: "3px 10px", borderRadius: "9999px", textTransform: "uppercase" }}>
                    Selected: {formData.planName}
                  </span>
                  <h3 style={{ fontSize: "21px", fontWeight: 900, color: "#0f172a", margin: "8px 0 4px 0" }}>
                    Start Your Student Plan
                  </h3>
                  <p style={{ fontSize: "13px", color: "#64748b", margin: 0 }}>
                    Enter your contact details. We will reach out to collect your design preferences and start your posts.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit}>
                  <div className="std-form-row">
                    <label className="std-form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="std-form-input"
                    />
                  </div>

                  <div className="std-form-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <div className="std-form-row">
                      <label className="std-form-label">Student Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="e.g. rahul@gmail.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="std-form-input"
                      />
                    </div>

                    <div className="std-form-row">
                      <label className="std-form-label">WhatsApp / Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="std-form-input"
                      />
                    </div>
                  </div>

                  <div className="std-form-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <div className="std-form-row">
                      <label className="std-form-label">College / University</label>
                      <input
                        type="text"
                        name="college"
                        placeholder="e.g. Delhi University"
                        value={formData.college}
                        onChange={handleInputChange}
                        className="std-form-input"
                      />
                    </div>

                    <div className="std-form-row">
                      <label className="std-form-label">Primary Platform</label>
                      <select
                        name="platform"
                        value={formData.platform}
                        onChange={handleInputChange}
                        className="std-form-select"
                      >
                        <option value="Instagram">Instagram</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="X (Twitter)">X (Twitter)</option>
                        <option value="YouTube Shorts">YouTube Shorts</option>
                        <option value="Multiple Platforms">Multiple Platforms</option>
                      </select>
                    </div>
                  </div>

                  <div className="std-form-row">
                    <label className="std-form-label">Social Profile Link or @Handle (Optional)</label>
                    <input
                      type="text"
                      name="socialHandle"
                      placeholder="e.g. @rahul_tech or linkedin.com/in/rahul"
                      value={formData.socialHandle}
                      onChange={handleInputChange}
                      className="std-form-input"
                    />
                  </div>

                  <div className="std-form-row">
                    <label className="std-form-label">Selected Plan</label>
                    <select
                      name="planName"
                      value={formData.planName}
                      onChange={handleInputChange}
                      className="std-form-select"
                    >
                      <option value="PLATINUM (₹399/mo)">PLATINUM — ₹399/month (10 posts, 8 stories, 2 reels)</option>
                      <option value="DIAMOND (₹599/mo)">DIAMOND — ₹599/month (14 posts, 12 stories, 4 reels)</option>
                      <option value="CROWN (₹799/mo)">CROWN — ₹799/month (18 posts, 20 stories, 6 reels)</option>
                      <option value="ACE (₹999/mo)">ACE — ₹999/month (20 posts, 30 stories, 8 reels)</option>
                    </select>
                  </div>

                  <div className="std-form-row">
                    <label className="std-form-label">Specific Content Goals / Notes</label>
                    <textarea
                      name="notes"
                      rows={2}
                      placeholder="Tell us what type of content you want to create (tech, college club, personal branding, memes, etc.)..."
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="std-form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    className="std-select-plan-btn popular-btn"
                    style={{ marginTop: "12px", width: "100%" }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting Order..." : "Confirm & Start Order →"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
