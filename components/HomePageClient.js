"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  // --- Toast Notification System ---
  const [toasts, setToasts] = useState([]);
  const addToast = (message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  // --- Modal State ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalEmail, setModalEmail] = useState("");
  const [modalCompany, setModalCompany] = useState("");
  const [modalSubmitted, setModalSubmitted] = useState(false);

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    if (!modalEmail || !modalCompany) {
      addToast("Please fill in all fields", "error");
      return;
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: modalEmail,
          company: modalCompany,
          sourcePage: "homepage_beta_modal",
        }),
      });
      const resText = await res.text();
      let data = {};
      try {
        data = resText ? JSON.parse(resText) : {};
      } catch (e) {
        console.error("HomePage JSON parse error:", e);
      }
      if (res.ok && data.success) {
        setModalSubmitted(true);
        addToast("Successfully requested consultation!");
        setTimeout(() => {
          setIsModalOpen(false);
          setModalSubmitted(false);
          setModalEmail("");
          setModalCompany("");
        }, 2500);
      } else {
        addToast(data.error || "Failed to submit request", "error");
      }
    } catch (err) {
      console.error("Modal contact submission error:", err);
      addToast("Network error. Please try again.", "error");
    }
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- Stack Card 1 (Web Development) State ---
  const [isPublishing, setIsPublishing] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [isEditingTheme, setIsEditingTheme] = useState(false);

  const handlePublishSite = () => {
    setIsPublishing(true);
    addToast("Initializing project build container & caching dependencies...", "info");
    setTimeout(() => {
      setIsPublishing(false);
      setIsPublished(true);
      addToast("Web platform build successfully deployed to edge CDN network!");
    }, 2000);
  };

  // --- Stack Card 2 (AI & Automation) State ---
  const [seoHealth, setSeoHealth] = useState(98);
  const [isAuditing, setIsAuditing] = useState(false);
  const [keywordsOptimized, setKeywordsOptimized] = useState(false);

  const handleRunAudit = () => {
    setIsAuditing(true);
    addToast("Scanning Kubernetes configurations & API end-points...", "info");
    setTimeout(() => {
      setIsAuditing(false);
      setSeoHealth(100);
      addToast("Infrastructure audit complete! Security rating optimized to 100/100!");
    }, 1500);
  };

  const handleOptimizeKeywords = () => {
    setKeywordsOptimized(true);
    addToast("Optimizing LLM pipeline agents & prompt vector layers...", "success");
  };

  // --- Stack Card 3 (Mobile Apps) State ---
  const [campaignLaunched, setCampaignLaunched] = useState(false);

  const handleLaunchCampaign = () => {
    setCampaignLaunched(true);
    addToast("Compiling Android & iOS packages for production...", "info");
    setTimeout(() => {
      addToast("Mobile apps successfully released to App Store and Google Play!");
    }, 1500);
  };

  // --- Working Languages & Interactive Compiler State ---
  const [langFilter, setLangFilter] = useState("all");
  const [selectedLangId, setSelectedLangId] = useState("ts");

  const languagesList = [
    {
      id: "ts",
      name: "TypeScript",
      badge: "Full Stack",
      badgeClass: "badge-ts",
      color: "#0284c7",
      category: "frontend",
      desc: "Next.js, Node.js, and React components for modern web platforms.",
      icon: (
        <svg viewBox="0 0 24 24" className="lang-icon" fill="currentColor">
          <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 6H9v8h2v-3h2v3h2V8h-2zm0 3h-2V9h2v2z" />
        </svg>
      ),
      terminal: [
        "$ npx tsc --version",
        "Version 5.4.2",
        "$ npm list --depth=0",
        "├── next@16.3.0",
        "├── react@19.0.0",
        "└── typescript@5.4.2",
        "Status: COMPILER ENVIRONMENT READY"
      ]
    },
    {
      id: "py",
      name: "Python",
      badge: "Data & AI",
      badgeClass: "badge-py",
      color: "#a16207",
      category: "data",
      desc: "FastAPI, TensorFlow, and custom LLM inference pipelines.",
      icon: (
        <svg viewBox="0 0 24 24" className="lang-icon" fill="currentColor">
          <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9V9h2v8zm4 0h-2V9h2v8z" />
        </svg>
      ),
      terminal: [
        "$ python --version",
        "Python 3.11.8",
        "$ pip list | grep -E '(numpy|torch|fastapi)'",
        "fastapi           0.110.0",
        "numpy             1.26.4",
        "torch             2.2.1",
        "Status: AI PIPELINE PIPENV LOADED"
      ]
    },
    {
      id: "go",
      name: "Go Language",
      badge: "Systems",
      badgeClass: "badge-go",
      color: "#0891b2",
      category: "backend",
      desc: "High-throughput gRPC backends and containerized microservices.",
      icon: (
        <svg viewBox="0 0 24 24" className="lang-icon" fill="currentColor">
          <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm3.5 11c0 1.93-1.57 3.5-3.5 3.5S8.5 14.93 8.5 13s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5z" />
        </svg>
      ),
      terminal: [
        "$ go version",
        "go version go1.22.1 windows/amd64",
        "$ cat go.mod | grep -E '(grpc|protobuf)'",
        "require google.golang.org/grpc v1.62.0",
        "require google.golang.org/protobuf v1.32.0",
        "Status: MICROSERVICES ENGINE READY"
      ]
    },
    {
      id: "rs",
      name: "Rust",
      badge: "Safety",
      badgeClass: "badge-rs",
      color: "#e11d48",
      category: "backend",
      desc: "Vulnerability-free system libraries and low-latency logic engines.",
      icon: (
        <svg viewBox="0 0 24 24" className="lang-icon" fill="currentColor">
          <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
        </svg>
      ),
      terminal: [
        "$ rustc --version",
        "rustc 1.76.0 (07dca9924 2024-02-04)",
        "$ cargo tree --depth 1 | grep tokio",
        "└── tokio v1.37.0",
        "Status: MEMORY-SAFE BINARY COMPILED"
      ]
    },
    {
      id: "sol",
      name: "Solidity",
      badge: "Web3",
      badgeClass: "badge-sol",
      color: "#4f46e5",
      category: "data",
      desc: "Ethereum smart contracts, decentralized ledgers, and dApp interfaces.",
      icon: (
        <svg viewBox="0 0 24 24" className="lang-icon" fill="currentColor">
          <path d="M12 2L2 12l10 10 10-10L12 2zm0 15.5L4.5 12 12 6.5l7.5 5.5-7.5 5.5z" />
        </svg>
      ),
      terminal: [
        "$ npx hardhat --version",
        "2.20.1",
        "$ solc --version",
        "Version: 0.8.24+commit.e11b9ed9",
        "Status: EVM CONTRACT COMPILED & VERIFIED"
      ]
    },
    {
      id: "mbl",
      name: "Swift / Kotlin",
      badge: "Mobile",
      badgeClass: "badge-mbl",
      color: "#059669",
      category: "frontend",
      desc: "Native and cross-platform Android & iOS mobile applications.",
      icon: (
        <svg viewBox="0 0 24 24" className="lang-icon" fill="currentColor">
          <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-5 20c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5-4H7V4h10v13z" />
        </svg>
      ),
      terminal: [
        "$ flutter --version",
        "Flutter 3.19.3 • channel stable",
        "$ xcodebuild -version",
        "Xcode 15.2 · Build 15C500b",
        "Status: MOBILE PACKAGES LIVE BUILD READY"
      ]
    },
    {
      id: "rn",
      name: "React Native",
      badge: "Mobile UI",
      badgeClass: "badge-rn",
      color: "#0891b2",
      category: "frontend",
      desc: "Cross-platform native applications for iOS & Android with shared codebase.",
      icon: (
        <svg viewBox="0 0 24 24" className="lang-icon" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      ),
      terminal: [
        "$ npx react-native --version",
        "React Native CLI v0.73.4",
        "$ npx pod-install",
        "Scanning project directories... Done!",
        "Status: COCOAPODS SYNCED FOR IOS BUILD"
      ]
    },
    {
      id: "node",
      name: "Node.js / Express",
      badge: "Runtime",
      badgeClass: "badge-node",
      color: "#16a34a",
      category: "backend",
      desc: "Event-driven asynchronous backend servers and headless REST/GraphQL APIs.",
      icon: (
        <svg viewBox="0 0 24 24" className="lang-icon" fill="currentColor">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm-1 14.5v-5l-4-2.5v5l4 2.5zm6-3.5v-5l-4-2.5v5l4 2.5z" />
        </svg>
      ),
      terminal: [
        "$ node --version",
        "v20.11.1",
        "$ npm --version",
        "10.2.4",
        "Status: ASYNCHRONOUS NODE RUNTIME ONLINE"
      ]
    },
    {
      id: "docker",
      name: "Docker / K8s",
      badge: "DevOps",
      badgeClass: "badge-docker",
      color: "#2563eb",
      category: "backend",
      desc: "Containerized microservice execution and automated failover orchestration.",
      icon: (
        <svg viewBox="0 0 24 24" className="lang-icon" fill="currentColor">
          <path d="M13.983 8.877h3.09v3.037h-3.09V8.877zm-3.565 0h3.09v3.037h-3.09V8.877zm-3.565 0h3.09v3.037h-3.09V8.877zm-3.566 0h3.09v3.037H3.287V8.877zm0 3.653h3.09v3.038H3.287v-3.038zm3.566 0h3.09v3.038h-3.09v-3.038zm3.565 0h3.09v3.038h-3.09v-3.038zm3.565 0h3.09v3.038h-3.09v-3.038zm-10.696-7.3h3.09v3.038H3.287V5.23zm3.566 0h3.09v3.038h-3.09V5.23zm3.565 0h3.09v3.038h-3.09V5.23zm3.565 0h3.09v3.038h-3.09V5.23zm4.72 5.097c.073-.41.073-.82 0-1.23a4.7 4.7 0 00-1.155-2.4c.36-.575.91-.775 1.55-.775s1.24.2 1.6.775a4.7 4.7 0 00-1.155 2.4c-.073.41-.073.82 0 1.23a4.7 4.7 0 001.155 2.4c-.36.575-.91.775-1.55.775s-1.24-.2-1.6-.775a4.7 4.7 0 001.155-2.4zm-14.773 8.245c1.173.82 2.766 1.23 4.728 1.23 6.07 0 10.995-4.168 11.23-9.35a8.7 8.7 0 012.35-1.23s.23-.1.23-.2c0-.46.04-.92.1-1.38 0-.1-.1-.1-.2-.1a9.23 9.23 0 00-3.32.74c-.074.03-.074.07-.1.1A8.93 8.93 0 011.07 14.8c0 .1.1.2.2.2a9.63 9.63 0 001.815.1.07.07 0 01.07.07z" />
        </svg>
      ),
      terminal: [
        "$ docker --version",
        "Docker version 24.0.7, build afdd53b",
        "$ kubectl version --client",
        "Client Version: v1.28.2",
        "Status: KUBERNETES POD TELEMETRY SYNCED"
      ]
    },
    {
      id: "pt",
      name: "PyTorch & TensorFlow",
      badge: "AI Core",
      badgeClass: "badge-pt",
      color: "#dc2626",
      category: "data",
      desc: "Deep neural network training, model optimization, and embeddings processing.",
      icon: (
        <svg viewBox="0 0 24 24" className="lang-icon" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
      ),
      terminal: [
        "$ python -c \"import torch; print(torch.__version__)\"",
        "2.2.1+cu121 (CUDA Active)",
        "$ python -c \"import tensorflow as tf; print(tf.__version__)\"",
        "2.15.0",
        "Status: NVIDIA CUDA CORE GPU RUNTIME READY"
      ]
    },
    {
      id: "db",
      name: "GraphQL & PostgreSQL",
      badge: "Database",
      badgeClass: "badge-db",
      color: "#4f46e5",
      category: "data",
      desc: "Relational database modeling, query cache tuning, and real-time WebSockets subscription endpoints.",
      icon: (
        <svg viewBox="0 0 24 24" className="lang-icon" fill="currentColor">
          <path d="M12 2L2 22h20L12 2zm1 14H11v-2h2v2zm0-4H11V7h2v5z" />
        </svg>
      ),
      terminal: [
        "$ psql --version",
        "psql (PostgreSQL) 16.2 (Ubuntu 16.2-1.pgdg22.04+1)",
        "$ npx graphdoc --version",
        "2.4.0",
        "Status: DATABASE CONNECTION POOL ACTIVE"
      ]
    },
    {
      id: "tw",
      name: "Tailwind CSS & CSS3",
      badge: "Design System",
      badgeClass: "badge-tw",
      color: "#0284c7",
      category: "frontend",
      desc: "Premium glassmorphic styling, utility frameworks, and smooth fluid animations.",
      icon: (
        <svg viewBox="0 0 24 24" className="lang-icon" fill="currentColor">
          <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      terminal: [
        "$ npx tailwindcss --help",
        "Tailwind CSS CLI v3.4.1",
        "$ grep -ri 'glassmorphic' ./styles",
        "Found 12 matching animation keyframes",
        "Status: DESIGN SYSTEM ENGINE READY"
      ]
    }
  ];

  const heroContent = {
    website: {
      title: <>High-performance<br />web applications</>,
      subtitle: "We craft blazing-fast Next.js portals, headless commerce architectures, and responsive SaaS products optimized for performance, security, and global edge delivery."
    },
    ai_automation: {
      title: <>Autonomous<br />AI agents &amp; ML</>,
      subtitle: "We train deep neural networks, build intelligent multi-agent workflows, deploy semantic vector search, and automate repetitive backend processes to maximize leverage."
    },
    mobile: {
      title: <>Native &amp; hybrid<br />mobile apps</>,
      subtitle: "We engineer beautiful, high-performance native iOS & Android mobile applications using Swift, Kotlin, React Native, and Flutter, with full app store launch support."
    },
    blockchain: {
      title: <>Decentralized<br />Web3 &amp; ledgers</>,
      subtitle: "We design secure EVM smart contracts, optimize gas fees, build cross-chain bridge integrations, and deploy custom Layer-2 rollups for high-throughput trust networks."
    },
    custom_software: {
      title: <>Enterprise<br />custom software</>,
      subtitle: "We architect, audit, and deploy microservices pipelines, Kubernetes clusters, zero-trust SSO authorization policies, and high-performance relational databases."
    },
    marketing: {
      title: <>Growth &amp;<br />SEO marketing</>,
      subtitle: "We run data-driven paid advertising (PPC) campaigns, perform search engine optimization (SEO), design conversion pipelines, and scale organic brand reach."
    }
  };

  // --- Wall of Love Engagement States ---
  const [xLikes, setXLikes] = useState(2);
  const [xLiked, setXLiked] = useState(false);
  const [xRetweets, setXRetweets] = useState(0);
  const [xRetweeted, setXRetweeted] = useState(false);

  const [liLikes, setLiLikes] = useState(245);
  const [liLiked, setLiLiked] = useState(false);
  const [liComments, setLiComments] = useState(42);

  // --- Growth & Marketing Live Stats States ---
  const [mktRoas, setMktRoas] = useState(4.82);
  const [mktTraffic, setMktTraffic] = useState(340);
  const [mktConversions, setMktConversions] = useState(3.24);
  const [mktClicks, setMktClicks] = useState(1284);

  useEffect(() => {
    const interval = setInterval(() => {
      // Oscillate ROAS between 4.70 and 4.95
      setMktRoas(prev => {
        const delta = (Math.random() - 0.5) * 0.1;
        const val = prev + delta;
        return parseFloat(Math.max(4.70, Math.min(4.95, val)).toFixed(2));
      });

      // Oscillate traffic between 338 and 345
      setMktTraffic(prev => {
        const delta = Math.floor(Math.random() * 3) - 1; // -1, 0, 1
        const val = prev + delta;
        return Math.max(338, Math.min(345, val));
      });

      // Oscillate conversions between 3.15 and 3.30
      setMktConversions(prev => {
        const delta = (Math.random() - 0.5) * 0.05;
        const val = prev + delta;
        return parseFloat(Math.max(3.15, Math.min(3.30, val)).toFixed(2));
      });

      // Increment clicks periodically
      setMktClicks(prev => prev + Math.floor(Math.random() * 2) + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // --- Autonomous Website Builder Animation State ---
  const [wbGenerating, setWbGenerating] = useState(false);
  const [wbText, setWbText] = useState("");

  const handleCreateSite = () => {
    if (wbGenerating) return;
    setWbGenerating(true);
    setWbText("");
    addToast("AI generating website layout & assets...", "info");

    const textToType = "Generating wellness-supplement-shop/index.html... Success!\nCustom Stripe checkout config... Done!\nDeploying to edge CDN...";
    let index = 0;
    const interval = setInterval(() => {
      if (index < textToType.length) {
        setWbText(prev => prev + textToType.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setWbGenerating(false);
        addToast("Wellness supplement website is live!");
      }
    }, 30);
  };

  // --- 1. Scroll-induced Navbar Glassmorphism ---
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- 2. Interactive Card Stack State ---
  const heroTabs = ["website", "ai_automation", "mobile", "blockchain", "custom_software", "marketing"];
  const [activeTab, setActiveTab] = useState("website");
  const [isHoveringStack, setIsHoveringStack] = useState(false);

  // Pick a random starting card on mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * heroTabs.length);
    setActiveTab(heroTabs[randomIndex]);
  }, []);

  // Auto-rotate cards every 4 seconds
  useEffect(() => {
    if (isHoveringStack) return;
    const interval = setInterval(() => {
      setActiveTab((current) => {
        const nextIndex = (heroTabs.indexOf(current) + 1) % heroTabs.length;
        return heroTabs[nextIndex];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [isHoveringStack]);

  const getStackClass = (cardKey) => {
    const tabs = ["website", "ai_automation", "mobile", "blockchain", "custom_software", "marketing"];
    const cardIndex = tabs.indexOf(cardKey);
    const activeIndex = tabs.indexOf(activeTab);
    if (cardIndex === -1 || activeIndex === -1) return "";

    const diff = (cardIndex - activeIndex + tabs.length) % tabs.length;

    if (diff === 0) return "active-stack";
    if (diff === 1) return "middle-stack";
    if (diff === 2) return "back-stack";
    return "hidden-stack";
  };

  // --- 3. 3D Tilt Effect using Ref ---
  const stackRef = useRef(null);


  const handleMouseMove = (e) => {
    const container = stackRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = -(y / rect.height) * 15;
    const rotateY = (x / rect.width) * 15;

    container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    container.style.transition = "transform 0.1s ease";
  };

  const handleMouseLeave = () => {
    const container = stackRef.current;
    if (!container) return;
    container.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    container.style.transition = "transform 0.5s ease-out";
  };

  return (
    <>
      {/* Header Navigation Component */}
      <Header />

      {/* Hero Section */}
      <main className={`hero hero-bg-${activeTab}`}>
        <div className="hero-container">

          {/* Left Column: Typography — dynamic with slide, SEO + reduced size */}
          <div className="hero-left">
            <h1 key={activeTab} className="hero-title" style={{ fontSize: "clamp(30px, 4.2vw, 48px)", lineHeight: 1.08, letterSpacing: "-1.2px" }}>
              {heroContent[activeTab]?.title || <>Custom software,<br />AI agents,<br />&amp; Web3 apps</>}
            </h1>
            <p key={`${activeTab}-sub`} className="hero-subtitle" style={{ fontSize: "16px", lineHeight: 1.55, fontWeight: 500, color: "rgba(255,255,255,0.92)" }}>
              {heroContent[activeTab]?.subtitle || "We build scalable custom applications, AI automation, SaaS platforms, blockchain dApps and growth systems — engineered for speed, security & scale."}
            </p>

            <Link
              href={activeTab === "website" ? "/services/web-development" : activeTab === "ai_automation" ? "/services/ai-automation" : activeTab === "mobile" ? "/services/saas" : activeTab === "blockchain" ? "/services/blockchain" : activeTab === "custom_software" ? "/services/security" : "/services/marketing"}
              className="hero-view-more-btn"
              onClick={() => {
                const readableTab = activeTab === "website" ? "Web Development" : activeTab === "ai_automation" ? "AI & Automation" : activeTab === "mobile" ? "Mobile Apps" : activeTab === "blockchain" ? "Blockchain Solutions" : activeTab === "custom_software" ? "Custom Software" : "Growth & Marketing";
                addToast(`Opening ${readableTab} — OneNineLabs`, "success");
              }}
              style={{
                marginTop: "8px",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#ffffff",
                padding: "10px 22px",
                borderRadius: "30px",
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                fontWeight: "700",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                width: "fit-content",
                backdropFilter: "blur(8px)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#ffffff";
                e.currentTarget.style.color = "#0f172a";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              View More &rarr;
            </Link>
          </div>

          {/* Right Column: Stack of Cards */}
          <div className="hero-right">
            <div
              className="stable-stack-wrapper"
              onMouseEnter={() => setIsHoveringStack(true)}
              onMouseLeave={() => setIsHoveringStack(false)}
              style={{ position: "relative" }}
            >
              <div
                className="cards-stack-container"
                ref={stackRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >

                {/* Card 1: Web Development */}
                <div
                  className={`dashboard-card card-website ${getStackClass("website")}`}
                  onClick={() => activeTab !== "website" && setActiveTab("website")}
                >


                  <div className="card-inner">
                    <div className="dashboard-content">
                      <div className="mockup-scroll-container">
                        <img src="/services/web_dev_preview.png" alt="Custom Web Development — Next.js 15 & React 19 — OneNineLabs" className="mockup-scroll-image" />
                      </div>
                      <div className="mockup-floating-actions">
                        <button className="action-btn-secondary" onClick={() => addToast("Custom glassmorphism theme designer opened!", "info")}>Edit design</button>
                        <button
                          className="action-btn-primary"
                          onClick={handlePublishSite}
                          disabled={isPublishing}
                        >
                          {isPublishing ? "Publishing..." : isPublished ? "Site Live! ✓" : "Publish site"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2: AI & Automation */}
                <div
                  className={`dashboard-card card-ai_automation ${getStackClass("ai_automation")}`}
                  onClick={() => activeTab !== "ai_automation" && setActiveTab("ai_automation")}
                >


                  <div className="card-inner">
                    <div className="dashboard-content">
                      <div className="mockup-scroll-container">
                        <img src="/services/ai_automation_preview.png" alt="AI & Intelligent Automation — LLM Agents & RAG Vector Search — OneNineLabs" className="mockup-scroll-image" />
                      </div>
                      <div className="mockup-floating-actions">
                        <button
                          className="action-btn-secondary"
                          onClick={handleOptimizeKeywords}
                        >
                          Optimize ML
                        </button>
                        <button
                          className="action-btn-primary"
                          onClick={handleRunAudit}
                          disabled={isAuditing}
                        >
                          {isAuditing ? "Auditing..." : "Run AI Audit"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3: Mobile Apps */}
                <div
                  className={`dashboard-card card-mobile ${getStackClass("mobile")}`}
                  onClick={() => activeTab !== "mobile" && setActiveTab("mobile")}
                >


                  <div className="card-inner">
                    <div className="dashboard-content">
                      <div className="mockup-scroll-container">
                        <img src="/services/mobile_app_preview.png" alt="Mobile App Development — React Native & Flutter — OneNineLabs" className="mockup-scroll-image" />
                      </div>
                      <div className="mockup-floating-actions">
                        <button className="action-btn-secondary" onClick={() => addToast("Configuring iOS/Android push certificates...", "info")}>Config Push</button>
                        <button
                          className="action-btn-primary"
                          onClick={handleLaunchCampaign}
                        >
                          {campaignLaunched ? "App Active ✓" : "Launch App"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 4: Blockchain Solutions */}
                <div
                  className={`dashboard-card card-blockchain ${getStackClass("blockchain")}`}
                  onClick={() => activeTab !== "blockchain" && setActiveTab("blockchain")}
                >


                  <div className="card-inner">
                    <div className="dashboard-content">
                      <div className="mockup-scroll-container">
                        <img src="/services/blockchain_preview.png" alt="Blockchain & Web3 Solutions — Solidity Smart Contracts — OneNineLabs" className="mockup-scroll-image" />
                      </div>
                      <div className="mockup-floating-actions">
                        <button
                          className="action-btn-secondary"
                          onClick={() => addToast("Opening Solidity compiler...", "info")}
                        >
                          View Contract
                        </button>
                        <button
                          className="action-btn-primary"
                          onClick={() => addToast("Smart contract deployed to mainnet!", "success")}
                        >
                          Deploy Contract
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 5: Custom Software */}
                <div
                  className={`dashboard-card card-custom_software ${getStackClass("custom_software")}`}
                  onClick={() => activeTab !== "custom_software" && setActiveTab("custom_software")}
                >


                  <div className="card-inner">
                    <div className="dashboard-content">
                      <div className="mockup-scroll-container">
                        <img src="/services/custom_software_service.png" alt="Enterprise Custom Software & Microservices — OneNineLabs" className="mockup-scroll-image" />
                      </div>
                      <div className="mockup-floating-actions">
                        <button className="action-btn-secondary" onClick={() => addToast("Opening Kubernetes deployment logs...", "info")}>View Logs</button>
                        <button
                          className="action-btn-primary"
                          onClick={() => addToast("CI/CD pipeline triggered for microservices!", "success")}
                        >
                          Build System
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 6: Growth & Marketing */}
                <div
                  className={`dashboard-card card-marketing ${getStackClass("marketing")}`}
                  onClick={() => activeTab !== "marketing" && setActiveTab("marketing")}
                >


                  <div className="card-inner">
                    <div className="dashboard-content">
                      <div className="mockup-scroll-container">
                        <img src="/dashboard_seo_preview.png" alt="Growth Marketing — SEO, PPC & CRO — OneNineLabs" className="mockup-scroll-image" />
                      </div>
                      <div className="mockup-floating-actions">
                        <button className="action-btn-secondary" onClick={() => addToast("Analyzing target demographic & keyword gaps...", "info")}>Optimize SEO</button>
                        <button
                          className="action-btn-primary"
                          onClick={() => addToast("Launching paid campaign audit pipeline...", "success")}
                        >
                          Run PPC Audit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Partners Banner -> Replaced with Marketing Services Banner */}
      <section className="partners-banner">
        <div className="partners-container" style={{ justifyContent: "space-around" }}>
          <div className="partners-label">
            <span style={{
              display: "inline-block",
              padding: "10px 24px",
              fontSize: "16px",
              fontWeight: "900",
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: "2px",
              background: "linear-gradient(135deg, #a855f7, #7c3aed)",
              borderRadius: "999px",
              boxShadow: "0 0 20px rgba(168, 85, 247, 0.45), 0 4px 12px rgba(0,0,0,0.2)",
              border: "1px solid rgba(168, 85, 247, 0.4)",
              cursor: "pointer"
            }}>
              🚀 Marketing
            </span>
          </div>

          <div className="marketing-banner-item">
            <span className="marketing-banner-num" style={{ color: "#10b981" }}>{mktRoas}x Avg ROAS</span>
            <span className="marketing-banner-label">Paid Ads (PPC)</span>
          </div>

          <div className="marketing-banner-item">
            <span className="marketing-banner-num" style={{ color: "#0ea5e9" }}>+{mktTraffic}% Traffic</span>
            <span className="marketing-banner-label">SEO Optimization</span>
          </div>

          <div className="marketing-banner-item">
            <span className="marketing-banner-num" style={{ color: "#facc15" }}>{mktConversions}x Conversions</span>
            <span className="marketing-banner-label">Lead Generation</span>
          </div>

          <div className="marketing-banner-item">
            <span className="marketing-banner-num" style={{ color: "#a855f7" }}>{mktClicks.toLocaleString()} Clicks</span>
            <span className="marketing-banner-label">Real-time Leads</span>
          </div>
        </div>
      </section>

      {/* ── Marketing Section ── */}
      <section id="marketing-section" className="gmo-section">
        <div className="gmo-container">
          {/* 2-Column Split Header: Left Integration Graph, Right Description */}
          <div className="gmo-split-header">
            {/* Left Column: Visual Integration Graph */}
            <div className="gmo-graph-col">
              <div className="gmo-map-container">
                <svg className="gmo-map-lines" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Left side connections to center */}
                  <path d="M 130 75 L 200 75 C 240 75, 250 150, 270 150 L 300 150" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M 130 225 L 200 225 C 240 225, 250 150, 270 150 L 300 150" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />

                  {/* Right side connections to center */}
                  <path d="M 470 75 L 400 75 C 360 75, 350 150, 330 150 L 300 150" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M 470 225 L 400 225 C 360 225, 350 150, 330 150 L 300 150" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                </svg>

                <div className="gmo-nodes">
                  {/* Left integration nodes */}
                  <div className="gmo-node-card gmo-node-google" onClick={() => addToast("Connecting Google Ads APIs...", "info")}>
                    <span className="gmo-node-color-dot" style={{ backgroundColor: "#4285f4" }}></span>
                    <span>Google Ads</span>
                  </div>
                  <div className="gmo-node-card gmo-node-meta" onClick={() => addToast("Connecting Meta Ads pixel & conversion APIs...", "info")}>
                    <span className="gmo-node-color-dot" style={{ backgroundColor: "#0668e1" }}></span>
                    <span>Meta Ads</span>
                  </div>

                  {/* Central platform hub */}
                  <div className="gmo-center-pill">
                    <span className="gmo-hub-logo">✦</span>
                    <span>oneninelabs</span>
                  </div>

                  {/* Right integration nodes */}
                  <div className="gmo-node-card gmo-node-linkedin" onClick={() => addToast("Connecting LinkedIn Campaign Manager...", "info")}>
                    <span className="gmo-node-color-dot" style={{ backgroundColor: "#0077b5" }}></span>
                    <span>LinkedIn Ads</span>
                  </div>
                  <div className="gmo-node-card gmo-node-gsc" onClick={() => addToast("Syncing Google Search Console index...", "info")}>
                    <span className="gmo-node-color-dot" style={{ backgroundColor: "#f4b400" }}></span>
                    <span>Search Console</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Title & Description Header */}
            <div className="gmo-content-col">
              <div className="gmo-badge">✦ Multi-Channel Scaling</div>
              <h2 className="gmo-h2">
                Growth <span style={{ color: "#10b981" }}>Marketing</span> Services — SEO, PPC &amp; Funnels
              </h2>
              <p className="gmo-sub">
                Full-funnel campaigns built on real data — from paid ads to organic growth, we scale your brand across every channel.
              </p>

              <div className="gmo-highlights">
                <div className="gmo-highlight-item">
                  <span className="gmo-check-icon">✓</span>
                  <span>Google, Meta &amp; LinkedIn Ads campaign management</span>
                </div>
                <div className="gmo-highlight-item">
                  <span className="gmo-check-icon">✓</span>
                  <span>Technical SEO &amp; Google Search Console indexing</span>
                </div>
                <div className="gmo-highlight-item">
                  <span className="gmo-check-icon">✓</span>
                  <span>Full-funnel conversion rate optimization &amp; analytics</span>
                </div>
              </div>

              <div className="gmo-action-row">
                <Link href="/services/marketing" className="gmo-primary-btn">
                  Explore Marketing Services &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Grid of 3 custom mock dashboard cards */}
          <div className="gmo-cards-grid">
            {/* Card 1 */}
            <div className="gmo-card">
              <div>
                <div className="gmo-card-header">
                  <span className="gmo-card-icon" style={{ backgroundColor: "#ffedd5", color: "#ea580c" }}>👤</span>
                  <h3>Client-facing portal</h3>
                </div>
                <p className="gmo-card-desc">Integrate with the paid and organic channels you love, manage the internal acquisition stats behind.</p>
              </div>

              <div className="gmo-mock-ui">
                <div className="gmo-mock-user">Hello Alexander M. Whitfield!</div>

                {/* Floating layers container */}
                <div style={{ position: "relative", height: "130px", marginTop: "16px" }}>
                  <div className="gmo-float-card" style={{ zIndex: 3, top: "0", left: "0", width: "160px" }}>
                    <div className="gmo-label">Organic reach</div>
                    <div className="gmo-big-val">180<span style={{ fontSize: "12px", color: "#64748b" }}>k/mo</span></div>
                    <div className="gmo-alert-pill">● 10 days left to target</div>
                  </div>

                  <div className="gmo-float-card" style={{ zIndex: 2, top: "24px", right: "0", width: "150px" }}>
                    <div className="gmo-label">Available keywords</div>
                    <div className="gmo-big-val">136</div>
                    <div className="gmo-alert-pill" style={{ color: "#64748b" }}>10 days left to use them</div>
                  </div>
                </div>

                <div className="gmo-mock-table">
                  <div className="gmo-table-row" style={{ opacity: 0.5, fontSize: "9px" }}>
                    <span>LATEST KEYWORDS</span>
                    <span>DIFFICULTY</span>
                    <span>DATE</span>
                  </div>
                  <div className="gmo-table-row">
                    <span>B2B Software</span>
                    <span className="gmo-badge-green">● Easy</span>
                    <span>08/12</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="gmo-card">
              <div>
                <div className="gmo-card-header">
                  <span className="gmo-card-icon" style={{ backgroundColor: "#dbeafe", color: "#2563eb" }}>✓</span>
                  <h3>Campaign collaboration</h3>
                </div>
                <p className="gmo-card-desc">Coordinate active paid channels and keyword strategy from one single, clear visual command center.</p>
              </div>

              <div className="gmo-mock-ui">
                <div className="gmo-mock-title">Active campaigns</div>
                <div className="gmo-mock-tasks" style={{ marginTop: "16px" }}>
                  <div className="gmo-task-row">
                    <div className="gmo-task-meta">
                      <span>Google Search</span>
                      <span>8</span>
                    </div>
                    <div className="gmo-progress-track">
                      <div className="gmo-progress-bar" style={{ width: "80%", backgroundColor: "#10b981" }}></div>
                    </div>
                  </div>

                  <div className="gmo-task-row">
                    <div className="gmo-task-meta">
                      <span>Meta Retargeting</span>
                      <span>12</span>
                    </div>
                    <div className="gmo-progress-track">
                      <div className="gmo-progress-bar" style={{ width: "55%", backgroundColor: "#3b82f6" }}></div>
                    </div>
                  </div>

                  <div className="gmo-task-row">
                    <div className="gmo-task-meta">
                      <span>LinkedIn ABM</span>
                      <span>10</span>
                    </div>
                    <div className="gmo-progress-track">
                      <div className="gmo-progress-bar" style={{ width: "68%", backgroundColor: "#f472b6" }}></div>
                    </div>
                  </div>

                  <div className="gmo-task-row">
                    <div className="gmo-task-meta">
                      <span>SEO Programmatic</span>
                      <span>5</span>
                    </div>
                    <div className="gmo-progress-track">
                      <div className="gmo-progress-bar" style={{ width: "90%", backgroundColor: "#facc15" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="gmo-card">
              <div>
                <div className="gmo-card-header">
                  <span className="gmo-card-icon" style={{ backgroundColor: "#f3e8ff", color: "#7c3aed" }}>📈</span>
                  <h3>Retainer usage transparency</h3>
                </div>
                <p className="gmo-card-desc">Track dynamic performance metrics, attribution models, and conversion boosts in real-time.</p>
              </div>

              <div className="gmo-mock-ui" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ position: "relative", height: "100px" }}>
                  <div className="gmo-float-card" style={{ width: "100%", top: "0", left: "0" }}>
                    <div className="gmo-label">Blended ROAS</div>
                    <div className="gmo-big-val">4.8<span style={{ fontSize: "16px", color: "#64748b" }}>x</span></div>
                    <div className="gmo-alert-pill" style={{ backgroundColor: "#f0fdf4", color: "#166534" }}>● 10 days left to use them</div>
                  </div>
                </div>

                <div className="gmo-metrics-matrix">
                  <div className="gmo-matrix-cell">
                    <div className="num">8k</div>
                    <div className="lbl">Leads</div>
                  </div>
                  <div className="gmo-matrix-cell">
                    <div className="num">15x</div>
                    <div className="lbl">LTV/CAC</div>
                  </div>
                  <div className="gmo-matrix-cell">
                    <div className="num">23%</div>
                    <div className="lbl">Conv. Lift</div>
                  </div>
                  <div className="gmo-matrix-cell">
                    <div className="num">12</div>
                    <div className="lbl">Channels</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .gmo-section {
            background-color: #f5f5f7;
            padding: 90px 24px;
            color: #0f172a;
            overflow: hidden;
            position: relative;
          }
          .gmo-container {
            max-width: 1200px;
            margin: 0 auto;
          }
          .gmo-split-header {
            display: flex;
            align-items: center;
            gap: 48px;
            margin-bottom: 50px;
          }
          .gmo-graph-col {
            flex: 1.15;
            min-width: 0;
          }
          .gmo-content-col {
            flex: 0.85;
            min-width: 0;
            text-align: left;
          }
          .gmo-badge {
            display: inline-block;
            padding: 6px 14px;
            background: rgba(16, 185, 129, 0.1);
            color: #059669;
            border: 1px solid rgba(16, 185, 129, 0.2);
            border-radius: 99px;
            font-size: 12px;
            font-weight: 700;
            margin-bottom: 16px;
            letter-spacing: 0.5px;
          }
          .gmo-h2 {
            font-size: clamp(26px, 3.2vw, 38px);
            font-weight: 900;
            color: #111318;
            margin: 0 0 16px;
            line-height: 1.25;
            letter-spacing: -0.5px;
          }
          .gmo-sub {
            font-size: 15px;
            color: #4b5563;
            margin: 0 0 24px;
            line-height: 1.7;
          }
          .gmo-highlights {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 28px;
          }
          .gmo-highlight-item {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 14px;
            font-weight: 600;
            color: #334155;
          }
          .gmo-check-icon {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #d1fae5;
            color: #059669;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
            font-weight: 800;
            flex-shrink: 0;
          }
          .gmo-action-row {
            display: flex;
            align-items: center;
            gap: 16px;
          }
          .gmo-primary-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 24px;
            background: #0f172a;
            color: #ffffff;
            font-weight: 700;
            font-size: 14px;
            border-radius: 12px;
            text-decoration: none;
            transition: all 0.2s ease;
            box-shadow: 0 4px 14px rgba(15, 23, 42, 0.15);
          }
          .gmo-primary-btn:hover {
            background: #1e293b;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(15, 23, 42, 0.25);
            color: #ffffff;
          }
          .gmo-map-container {
            position: relative;
            width: 100%;
            height: 320px;
            background: #ffffff;
            border: 1px solid rgba(15, 23, 42, 0.08);
            border-radius: 24px;
            box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.04);
            padding: 10px;
          }
          .gmo-map-lines {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
          }
          .gmo-nodes {
            position: relative;
            width: 100%;
            height: 100%;
          }
          .gmo-node-card {
            position: absolute;
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 10px 16px;
            font-size: 13px;
            font-weight: 700;
            color: #0f172a;
            display: flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02), 0 10px 15px -3px rgba(0,0,0,0.04);
            white-space: nowrap;
            transition: transform 0.2s, box-shadow 0.2s;
            cursor: pointer;
          }
          .gmo-node-card:hover {
            transform: translate(-50%, -50%) scale(1.05) !important;
            box-shadow: 0 12px 24px rgba(0,0,0,0.08);
            border-color: #cbd5e1;
          }
          .gmo-node-color-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            flex-shrink: 0;
          }
          .gmo-node-google { left: 20%; top: 25%; transform: translate(-50%, -50%); }
          .gmo-node-meta { left: 20%; top: 75%; transform: translate(-50%, -50%); }
          .gmo-node-linkedin { left: 80%; top: 25%; transform: translate(-50%, -50%); }
          .gmo-node-gsc { left: 80%; top: 75%; transform: translate(-50%, -50%); }

          .gmo-center-pill {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: #1e293b;
            border: 1px solid rgba(255,255,255,0.15);
            border-radius: 99px;
            padding: 14px 28px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.25);
            color: #ffffff;
            font-weight: 900;
            font-size: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
            z-index: 2;
          }
          .gmo-center-pill::after {
            content: '';
            position: absolute;
            inset: -8px;
            border: 1px solid rgba(0,0,0,0.05);
            border-radius: 999px;
            transform: rotate(-5deg);
            pointer-events: none;
          }
          .gmo-hub-logo {
            font-size: 16px;
            color: #e2e8f0;
          }

          .gmo-cards-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-top: 40px;
          }
          .gmo-card {
            background: #ffffff;
            border: 1px solid rgba(15,23,42,0.06);
            border-radius: 24px;
            padding: 28px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.01), 0 20px 40px -5px rgba(0,0,0,0.04);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 480px;
            transition: transform 0.2s, box-shadow 0.2s;
          }
          .gmo-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 24px 48px -10px rgba(0,0,0,0.08);
          }
          .gmo-card-header {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 12px;
          }
          .gmo-card-header h3 {
            font-size: 17px;
            font-weight: 800;
            color: #0f172a;
            margin: 0;
          }
          .gmo-card-icon {
            width: 28px;
            height: 28px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            flex-shrink: 0;
          }
          .gmo-card-desc {
            font-size: 13.5px;
            color: #64748b;
            line-height: 1.6;
            margin: 0 0 20px;
          }

          .gmo-mock-ui {
            background: #f8fafc;
            border: 1px solid #f1f5f9;
            border-radius: 16px;
            padding: 16px;
            font-family: inherit;
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.01);
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .gmo-mock-user {
            font-size: 10.5px;
            font-weight: 800;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .gmo-float-card {
            position: absolute;
            background: #ffffff;
            border: 1px solid rgba(0,0,0,0.05);
            border-radius: 12px;
            padding: 10px 12px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.04);
          }
          .gmo-label {
            font-size: 10px;
            color: #64748b;
            font-weight: 600;
          }
          .gmo-big-val {
            font-size: 24px;
            font-weight: 800;
            color: #0f172a;
            line-height: 1.1;
            margin: 2px 0 6px;
          }
          .gmo-alert-pill {
            font-size: 8.5px;
            font-weight: 800;
            color: #ea580c;
            background: #fff7ed;
            padding: 2px 6px;
            border-radius: 99px;
            display: inline-block;
          }
          .gmo-mock-table {
            border-top: 1px solid #e2e8f0;
            padding-top: 8px;
            margin-top: 10px;
          }
          .gmo-table-row {
            display: flex;
            justify-content: space-between;
            font-size: 10px;
            font-weight: 700;
            color: #334155;
            padding: 4px 0;
          }
          .gmo-badge-green {
            color: #16a34a;
            font-size: 9px;
          }

          .gmo-mock-title {
            font-size: 11px;
            font-weight: 800;
            color: #0f172a;
          }
          .gmo-task-row {
            margin-bottom: 10px;
          }
          .gmo-task-meta {
            display: flex;
            justify-content: space-between;
            font-size: 10px;
            font-weight: 700;
            color: #475569;
            margin-bottom: 3px;
          }
          .gmo-progress-track {
            height: 4px;
            background: #e2e8f0;
            border-radius: 99px;
            overflow: hidden;
          }
          .gmo-progress-bar {
            height: 100%;
            border-radius: 99px;
          }

          .gmo-metrics-matrix {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
            border-top: 1px solid #e2e8f0;
            padding-top: 14px;
            margin-top: 10px;
          }
          .gmo-matrix-cell {
            text-align: center;
            padding: 4px;
          }
          .gmo-matrix-cell .num {
            font-size: 16px;
            font-weight: 800;
            color: #0f172a;
          }
          .gmo-matrix-cell .lbl {
            font-size: 9px;
            color: #64748b;
            font-weight: 600;
            margin-top: 2px;
          }

          @media (max-width: 900px) {
            .gmo-section {
              padding: 60px 16px;
            }
            .gmo-split-header {
              flex-direction: column;
              gap: 30px;
            }
            .gmo-content-col {
              text-align: center;
            }
            .gmo-sub {
              margin-left: auto;
              margin-right: auto;
            }
            .gmo-highlights {
              align-items: flex-start;
              display: inline-flex;
              text-align: left;
            }
            .gmo-action-row {
              justify-content: center;
            }
            .gmo-map-container {
              height: 280px;
            }
            .gmo-map-lines {
              display: block;
            }
            .gmo-cards-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            .gmo-card {
              min-height: 440px;
            }
          }
        `}</style>
      </section>

      {/* Platforms & ChatGPT Ads Integration Section */}
      <section className="features-section" id="features-section">
        <div className="features-container">

          {/* Left Column: Platforms Integration */}
          <div className="feature-column left-column">
            <h2 className="feature-heading">Multi-Cloud Engineering & Technology Stack</h2>

            <div className="platforms-grid">
              {/* Row 1 */}
              <div className="platform-card" title="Google Cloud Platform">
                <svg viewBox="0 0 24 24" className="platform-icon">
                  <path d="M17.15 3.39L2.83 17.7a1 1 0 000 1.41l2.83 2.83a1 1 0 001.41 0L21.39 7.63a1 1 0 000-1.41l-2.83-2.83a1 1 0 00-1.41 0z" fill="#F4B400" />
                  <path d="M3.54 18.41l2.83 2.83a1 1 0 001.41 0L21.39 7.63a1 1 0 000-1.41l-2.83-2.83a1 1 0 00-1.41 0L3.54 18.41z" fill="#4285F4" />
                  <path d="M12.9 14.9L4.95 21.24a1 1 0 00.63 1.76h5.66a1 1 0 00.71-.29l5.66-5.66-4.71-2.15z" fill="#0F9D58" />
                </svg>
                <span className="platform-name">GCP</span>
              </div>
              <div className="platform-card" title="Amazon Web Services">
                <svg viewBox="0 0 24 24" className="platform-icon">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm-1.5-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1z" fill="#FF9900" />
                </svg>
                <span className="platform-name">AWS</span>
              </div>
              <div className="platform-card" title="Kubernetes Engine">
                <svg viewBox="0 0 24 24" className="platform-icon">
                  <path d="M12 2L2 7.8v8.4L12 22l10-5.8V7.8L12 2zm0 3.2c.4 0 .7.1 1 .3l6 3.5c.6.3.8 1 .5 1.6l-6 10.3c-.3.6-1 .8-1.6.5l-6-3.5c-.6-.3-.8-1-.5-1.6l6-10.3c.3-.5.7-.5 1.1-.3z" fill="#326CE5" />
                </svg>
                <span className="platform-name">Kubernetes</span>
              </div>
              <div className="platform-card" title="GitHub Actions CI/CD">
                <svg viewBox="0 0 24 24" className="platform-icon">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="#24292e" />
                </svg>
                <span className="platform-name">GitHub</span>
              </div>
              <div className="platform-card" title="Docker Containers">
                <svg viewBox="0 0 24 24" className="platform-icon">
                  <path d="M13.983 8.877h3.09v3.037h-3.09V8.877zm-3.565 0h3.09v3.037h-3.09V8.877zm-3.565 0h3.09v3.037h-3.09V8.877zm-3.566 0h3.09v3.037H3.287V8.877zm0 3.653h3.09v3.038H3.287v-3.038zm3.566 0h3.09v3.038h-3.09v-3.038zm3.565 0h3.09v3.038h-3.09v-3.038zm3.565 0h3.09v3.038h-3.09v-3.038zm-10.696-7.3h3.09v3.038H3.287V5.23zm3.566 0h3.09v3.038h-3.09V5.23zm3.565 0h3.09v3.038h-3.09V5.23zm3.565 0h3.09v3.038h-3.09V5.23zm4.72 5.097c.073-.41.073-.82 0-1.23a4.7 4.7 0 00-1.155-2.4c.36-.575.91-.775 1.55-.775s1.24.2 1.6.775a4.7 4.7 0 00-1.155 2.4c-.073.41-.073.82 0 1.23a4.7 4.7 0 001.155 2.4c-.36.575-.91.775-1.55.775s-1.24-.2-1.6-.775a4.7 4.7 0 001.155-2.4zm-14.773 8.245c1.173.82 2.766 1.23 4.728 1.23 6.07 0 10.995-4.168 11.23-9.35a8.7 8.7 0 012.35-1.23s.23-.1.23-.2c0-.46.04-.92.1-1.38 0-.1-.1-.1-.2-.1a9.23 9.23 0 00-3.32.74c-.074.03-.074.07-.1.1A8.93 8.93 0 011.07 14.8c0 .1.1.2.2.2a9.63 9.63 0 001.815.1.07.07 0 01.07.07z" fill="#2496ED" />
                </svg>
                <span className="platform-name">Docker</span>
              </div>

              {/* Row 2 */}
              <div className="platform-card" title="React Native & Flutter">
                <svg viewBox="0 0 24 24" className="platform-icon">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="#61DAFB" />
                </svg>
                <span className="platform-name">React</span>
              </div>
              <div className="platform-card" title="FastAPI / Node.js">
                <svg viewBox="0 0 24 24" className="platform-icon">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#009688" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="platform-name">FastAPI</span>
              </div>
              <div className="platform-card" title="AI LLM API">
                <svg viewBox="0 0 24 24" className="platform-icon">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" fill="#10a37f" />
                </svg>
                <span className="platform-name">AI LLM</span>
              </div>
              <div className="platform-card" title="Vercel Serverless">
                <svg viewBox="0 0 24 24" className="platform-icon">
                  <path d="M12 2L2 19.77h20L12 2z" fill="#000000" />
                </svg>
                <span className="platform-name">Vercel</span>
              </div>
              <div className="platform-card" title="Solidity Blockchain Smart Contracts">
                <svg viewBox="0 0 24 24" className="platform-icon">
                  <path d="M12 1.6L4.2 14.5 12 19.1l7.8-4.6L12 1.6zm0 17.5l-7.8-4.6 7.8 11.2 7.8-11.2-7.8 4.6z" fill="#3C3C3D" />
                </svg>
                <span className="platform-name">Solidity</span>
              </div>
            </div>
          </div>


          {/* Right Column: Working Languages */}
          <div className="feature-column right-column">
            <h2 className="feature-heading">Our Core Working Languages & Environments</h2>


            <div className="lang-filters-container">
              <button
                type="button"
                className={`lang-filter-btn ${langFilter === "all" ? "active" : ""}`}
                onClick={() => { setLangFilter("all"); addToast("Filtering by: All languages", "info"); }}
                onTouchStart={() => { setLangFilter("all"); addToast("Filtering by: All languages", "info"); }}
              >
                All
              </button>
              <button
                type="button"
                className={`lang-filter-btn ${langFilter === "frontend" ? "active" : ""}`}
                onClick={() => { setLangFilter("frontend"); addToast("Filtering by: Frontend & Mobile", "info"); }}
                onTouchStart={() => { setLangFilter("frontend"); addToast("Filtering by: Frontend & Mobile", "info"); }}
              >
                Frontend &amp; Mobile
              </button>
              <button
                type="button"
                className={`lang-filter-btn ${langFilter === "backend" ? "active" : ""}`}
                onClick={() => { setLangFilter("backend"); addToast("Filtering by: Backend & Systems", "info"); }}
                onTouchStart={() => { setLangFilter("backend"); addToast("Filtering by: Backend & Systems", "info"); }}
              >
                Backend &amp; Systems
              </button>
              <button
                type="button"
                className={`lang-filter-btn ${langFilter === "data" ? "active" : ""}`}
                onClick={() => { setLangFilter("data"); addToast("Filtering by: Web3 & AI", "info"); }}
                onTouchStart={() => { setLangFilter("data"); addToast("Filtering by: Web3 & AI", "info"); }}
              >
                Web3 &amp; AI
              </button>
            </div>

            <div className="languages-grid">
              {(langFilter === "all" ? languagesList.slice(0, 6) : languagesList.filter(l => l.category === langFilter))
                .map((l) => (
                  <div
                    key={l.id}
                    className={`language-card ${selectedLangId === l.id ? "selected" : ""}`}
                    style={{ "--card-accent-color": l.color }}
                    onClick={() => {
                      setSelectedLangId(l.id);
                      addToast(`Selected ${l.name} environment logs`, "info");
                    }}
                  >
                    <div className="lang-icon-wrap" style={{ color: l.color }}>
                      {l.icon}
                    </div>
                    <div className="lang-details">
                      <div className="lang-header-row">
                        <span className="lang-name">{l.name}</span>
                        <span className={`lang-badge ${l.badgeClass}`}>{l.badge}</span>
                      </div>
                      <p className="lang-desc">{l.desc}</p>
                    </div>
                  </div>
                ))}
            </div>


            {selectedLangId && (() => {
              const currentLang = languagesList.find(l => l.id === selectedLangId);
              if (!currentLang) return null;
              return (
                <div className="lang-terminal-wrap" style={{ borderLeft: `3px solid ${currentLang.color}` }}>
                  <div className="lang-terminal-header">
                    <div className="terminal-dots">
                      <span className="dot dot-red"></span>
                      <span className="dot dot-yellow"></span>
                      <span className="dot dot-green"></span>
                    </div>
                    <span className="terminal-title">{currentLang.name} Dev Environment</span>
                    <button className="terminal-close" onClick={() => setSelectedLangId(null)}>×</button>
                  </div>
                  <div className="lang-terminal-body">
                    {currentLang.terminal.map((line, index) => (
                      <div key={index} className={`terminal-line ${line.startsWith("$") ? "terminal-cmd" : "terminal-out"}`}>
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>

        </div>
      </section>

      {/* Our Engineering Services — Radial Hub Section */}
      <section className="es-section" id="services">
        <div className="es-head">
          <p className="es-eyebrow">WHAT WE BUILD</p>
          <h2 className="es-title">Our Engineering Services</h2>
          <p className="es-sub">
            Explore our core engineering capabilities — from web apps to AI, blockchain, and beyond.
          </p>
        </div>

        <div className="es-radial">


          {/* Card 1: Web Development */}
          <Link href="/services/web-development" className="es-card es-pos-0">
            <div className="es-win">
              <div className="es-win-top"><i className="d d1"></i><i className="d d2"></i><i className="d d3"></i><span className="es-addr" style={{ background: "#eef2ff", color: "#4f46e5" }}>oneninelabs.com</span></div>
              <div className="es-win-body">
                <div className="es-bar" style={{ width: "84%", background: "#3b82f6" }}></div>
                <div className="es-bar" style={{ width: "62%", background: "#93c5fd" }}></div>
                <div className="es-bar" style={{ width: "74%", background: "#bfdbfe" }}></div>
                <svg className="es-chart" viewBox="0 0 160 40"><path d="M0 34 L30 22 L60 27 L90 12 L120 20 L160 6" fill="none" stroke="#3b82f6" strokeWidth="2.5" /><path d="M0 34 L30 22 L60 27 L90 12 L120 20 L160 6 L160 40 L0 40 Z" fill="rgba(59,130,246,0.12)" /></svg>
              </div>
            </div>
            <div className="es-card-title">Web Development</div>
            <div className="es-card-sub">React, Next.js &amp; Node.js</div>
            <div className="es-card-link">Start tour</div>
          </Link>

          {/* Card 2: Mobile App Development */}
          <Link href="/services/mobile-apps" className="es-card es-pos-1">
            <div className="es-win">
              <div className="es-win-top"><i className="d d1"></i><i className="d d2"></i><i className="d d3"></i><span className="es-addr" style={{ background: "#ecfdf5", color: "#059669" }}>Mobile App</span></div>
              <div className="es-win-body">
                <div className="es-phone">
                  <div className="es-phone-notch"></div>
                  <div className="es-bar" style={{ background: "#10b981" }}></div>
                  <div className="es-bar" style={{ background: "#a7f3d0" }}></div>
                  <div className="es-btn" style={{ background: "#059669" }}>GET STARTED</div>
                </div>
              </div>
            </div>
            <div className="es-card-title">Mobile App Development</div>
            <div className="es-card-sub">React Native, Flutter &amp; Native iOS/Android</div>
            <div className="es-card-link">Start tour</div>
          </Link>

          {/* Card 3: AI & Intelligent Automation */}
          <Link href="/services/ai-automation" className="es-card es-pos-2">
            <div className="es-win">
              <div className="es-win-top"><i className="d d1"></i><i className="d d2"></i><i className="d d3"></i><span className="es-addr" style={{ background: "#f3e8ff", color: "#7c3aed" }}>AI Agent</span></div>
              <div className="es-win-body">
                <div className="es-msg right" style={{ background: "#ede9fe" }}></div>
                <div className="es-msg left" style={{ background: "#f3e8ff" }}></div>
                <div className="es-msg left" style={{ background: "#ddd6fe" }}></div>
                <div className="es-type"><span></span><span></span><span></span></div>
              </div>
            </div>
            <div className="es-card-title">AI &amp; Intelligent Automation</div>
            <div className="es-card-sub">LangChain Agents &amp; RAG Pipelines</div>
            <div className="es-card-link">Start tour</div>
          </Link>

          {/* Card 4: Custom SaaS */}
          <Link href="/services/saas" className="es-card es-pos-3">
            <div className="es-win">
              <div className="es-win-top"><i className="d d1"></i><i className="d d2"></i><i className="d d3"></i><span className="es-addr" style={{ background: "#eef2ff", color: "#4f46e5" }}>SaaS Dashboard</span></div>
              <div className="es-win-body">
                <div className="es-tiles">
                  <div className="es-tile"><b style={{ color: "#4f46e5" }}>$12k</b><span>MRR</span></div>
                  <div className="es-tile"><b style={{ color: "#4f46e5" }}>98%</b><span>Uptime</span></div>
                </div>
                <div className="es-bars">
                  <i style={{ height: "30%", background: "#6366f1" }}></i><i style={{ height: "55%", background: "#818cf8" }}></i><i style={{ height: "40%", background: "#a5b4fc" }}></i><i style={{ height: "75%", background: "#6366f1" }}></i><i style={{ height: "60%", background: "#818cf8" }}></i>
                </div>
              </div>
            </div>
            <div className="es-card-title">Custom SaaS</div>
            <div className="es-card-sub">Multi-tenant SaaS Platforms</div>
            <div className="es-card-link">Start tour</div>
          </Link>

          {/* Card 5: Blockchain Solutions */}
          <Link href="/services/blockchain" className="es-card es-pos-4">
            <div className="es-win">
              <div className="es-win-top"><i className="d d1"></i><i className="d d2"></i><i className="d d3"></i><span className="es-addr" style={{ background: "#ccfbf1", color: "#0d9488" }}>Web3 Ledger</span></div>
              <div className="es-win-body es-chain">
                <div className="es-block"><span>0x9F2</span></div>
                <div className="es-link"></div>
                <div className="es-block"><span>0x7A1</span></div>
                <div className="es-link"></div>
                <div className="es-block"><span>0x3C8</span></div>
              </div>
            </div>
            <div className="es-card-title">Blockchain Solutions</div>
            <div className="es-card-sub">Smart Contracts &amp; Web3 Infrastructure</div>
            <div className="es-card-link">Start tour</div>
          </Link>

          {/* Card 6: Security Solutions */}
          <Link href="/services/security" className="es-card es-pos-5">
            <div className="es-win">
              <div className="es-win-top"><i className="d d1"></i><i className="d d2"></i><i className="d d3"></i><span className="es-addr" style={{ background: "#fee2e2", color: "#dc2626" }}>SecOps</span></div>
              <div className="es-win-body">
                <div className="es-shield">🛡️</div>
                <div className="es-check-row"><span className="ok">✓</span>Zero-Trust IAM</div>
                <div className="es-check-row"><span className="ok">✓</span>SOC 2 Type II</div>
              </div>
            </div>
            <div className="es-card-title">Security Solutions</div>
            <div className="es-card-sub">Cybersecurity &amp; Pentesting</div>
            <div className="es-card-link">Start tour</div>
          </Link>

          {/* Card 7: Marketing Services */}
          <Link href="/services/marketing" className="es-card es-pos-6">
            <div className="es-win">
              <div className="es-win-top"><i className="d d1"></i><i className="d d2"></i><i className="d d3"></i><span className="es-addr" style={{ background: "#fce7f3", color: "#db2777" }}>Growth</span></div>
              <div className="es-win-body">
                <div className="es-kpis"><b style={{ color: "#db2777" }}>4.8x</b><b style={{ color: "#db2777" }}>+340%</b></div>
                <svg className="es-chart" viewBox="0 0 160 40"><path d="M0 32 L25 26 L50 28 L80 18 L110 22 L135 10 L160 4" fill="none" stroke="#ec4899" strokeWidth="2.5" /><path d="M0 32 L25 26 L50 28 L80 18 L110 22 L135 10 L160 4 L160 40 L0 40 Z" fill="rgba(236,72,153,0.12)" /></svg>
              </div>
            </div>
            <div className="es-card-title">Marketing Services</div>
            <div className="es-card-sub">SEO, PPC &amp; Growth Marketing</div>
            <div className="es-card-link">Start tour</div>
          </Link>

          {/* Card 8: Crypto Currency Solutions */}
          <Link href="/services/blockchain" className="es-card es-pos-7">
            <div className="es-win">
              <div className="es-win-top"><i className="d d1"></i><i className="d d2"></i><i className="d d3"></i><span className="es-addr" style={{ background: "#fffbeb", color: "#d97706" }}>DeFi</span></div>
              <div className="es-win-body">
                <div className="es-coin">₿</div>
                <div className="es-bars">
                  <i style={{ height: "35%", background: "#f59e0b" }}></i><i style={{ height: "55%", background: "#fbbf24" }}></i><i style={{ height: "45%", background: "#fcd34d" }}></i><i style={{ height: "80%", background: "#f59e0b" }}></i><i style={{ height: "65%", background: "#fbbf24" }}></i>
                </div>
              </div>
            </div>
            <div className="es-card-title">Crypto Currency Solutions</div>
            <div className="es-card-sub">Tokenomics &amp; DeFi Platforms</div>
            <div className="es-card-link">Start tour</div>
          </Link>
        </div>

        <style>{`
          .es-section {
            background: #f8fafc;
            padding: 40px 24px 80px;
            overflow: hidden;
            position: relative;
          }
          .es-head { text-align: center; margin-bottom: 32px; }
          .es-eyebrow {
            font-size: 12px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase;
            color: #64748b; margin: 0 0 12px;
          }
          .es-title {
            font-size: clamp(30px, 4.2vw, 44px); font-weight: 900; color: #0f172a;
            letter-spacing: -1px; margin: 0 0 14px; line-height: 1.15;
          }
          .es-sub { color: #64748b; font-size: 16px; max-width: 560px; margin: 0 auto; line-height: 1.65; }

          .es-radial {
            position: relative;
            max-width: 1150px;
            margin: 0 auto;
            height: auto;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }

          .es-card {
            position: static;
            width: 100%;
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 18px;
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
            transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
            text-decoration: none;
            z-index: 2;
            display: flex;
            flex-direction: column;
            overflow: hidden;
          }
          .es-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 22px 48px rgba(15, 23, 42, 0.12);
            border-color: #c4b5fd;
          }

          /* Title-first card layout: title → graphic → description → Start tour */
          .es-card-title {
            order: -1;
            font-size: 15px; font-weight: 800; color: #172554;
            padding: 15px 16px 0; margin: 0; line-height: 1.25;
          }
          .es-card .es-win {
            order: 0;
            margin: 11px 12px 0;
            background: #f1f5f9;
            border: 1px solid #e6edf5;
          }
          .es-card-sub {
            order: 0;
            font-size: 11.5px; color: #64748b; font-weight: 600; line-height: 1.45;
            padding: 11px 16px 0; margin: 0;
          }
          .es-card-link {
            order: 0;
            margin-top: auto;
            font-size: 12px; font-weight: 800; color: #1e3a8a;
            display: inline-flex; align-items: center; gap: 5px;
            padding: 10px 16px 15px;
          }
          .es-card-link::after { content: '→'; transition: transform 0.2s ease; }
          .es-card:hover .es-card-link::after { transform: translateX(3px); }

          /* Mini mockup windows */
          .es-win { background: #f8fafc; border: 1px solid #eef2f7; border-radius: 10px; overflow: hidden; }
          .es-win-top { display: flex; align-items: center; gap: 4px; padding: 7px 9px; background: #ffffff; border-bottom: 1px solid #f1f5f9; }
          .d { width: 6px; height: 6px; border-radius: 50%; display: inline-block; }
          .d1 { background: #f87171; } .d2 { background: #fbbf24; } .d3 { background: #34d399; }
          .es-addr { flex: 1; margin-left: 6px; font-size: 7px; font-weight: 800; padding: 2px 7px; border-radius: 99px; letter-spacing: 0.3px; text-align: center; }
          .es-win-body { padding: 12px 10px; display: flex; flex-direction: column; gap: 7px; min-height: 92px; justify-content: center; }
          .es-bar { height: 6px; border-radius: 99px; }
          .es-chart { width: 100%; height: 36px; }
          .es-phone {
            width: 56px; height: 94px; border: 3px solid #0f172a; border-radius: 12px; margin: 0 auto;
            display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 9px 6px 8px; background: #ffffff;
          }
          .es-phone-notch { width: 18px; height: 4px; border-radius: 99px; background: #0f172a; margin-bottom: 6px; }
          .es-phone .es-bar { width: 70%; }
          .es-btn { width: 100%; border-radius: 6px; color: #fff; font-size: 5.5px; font-weight: 800; text-align: center; padding: 4px 0; margin-top: auto; letter-spacing: 0.5px; }
          .es-msg { height: 10px; border-radius: 8px; }
          .es-msg.right { width: 55%; align-self: flex-end; }
          .es-msg.left { width: 70%; align-self: flex-start; }
          .es-type { display: flex; gap: 3px; }
          .es-type span { width: 5px; height: 5px; border-radius: 50%; background: #c4b5fd; }
          .es-tiles { display: flex; gap: 6px; }
          .es-tile { flex: 1; background: #ffffff; border: 1px solid #eef2f7; border-radius: 8px; padding: 6px; text-align: center; }
          .es-tile b { font-size: 10px; display: block; }
          .es-tile span { font-size: 6.5px; color: #94a3b8; font-weight: 700; }
          .es-bars { display: flex; align-items: flex-end; gap: 5px; height: 30px; }
          .es-bars i { flex: 1; border-radius: 3px 3px 0 0; }
          .es-chain { flex-direction: row; align-items: center; justify-content: center; gap: 4px; }
          .es-block { width: 44px; height: 34px; background: #ffffff; border: 1.5px solid #99f6e4; border-radius: 7px; display: flex; align-items: center; justify-content: center; }
          .es-block span { font-size: 6.5px; font-weight: 800; color: #0d9488; }
          .es-link { width: 14px; height: 0; border-top: 1.5px solid #14b8a6; }
          .es-shield { font-size: 22px; text-align: center; }
          .es-check-row { display: flex; align-items: center; gap: 6px; font-size: 8px; font-weight: 800; color: #334155; background: #ffffff; border: 1px solid #fee2e2; border-radius: 6px; padding: 4px 7px; }
          .ok { width: 10px; height: 10px; border-radius: 50%; background: #10b981; color: #fff; font-size: 7px; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; }
          .es-kpis { display: flex; justify-content: space-around; }
          .es-kpis b { font-size: 11px; }
          .es-coin {
            width: 34px; height: 34px; border-radius: 50%; margin: 0 auto 2px;
            background: linear-gradient(135deg, #f59e0b, #d97706); color: #fff;
            display: flex; align-items: center; justify-content: center;
            font-weight: 900; font-size: 15px; box-shadow: 0 6px 14px rgba(245, 158, 11, 0.35);
          }

          @media (max-width: 1050px) {
            .es-radial { height: auto; display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
            .es-svg, .es-hub { display: none; }
            .es-card { position: static; width: auto; }
          }
          @media (max-width: 640px) {
            .es-section { padding: 80px 20px 90px; }
            .es-radial { grid-template-columns: 1fr; }
          }
        `}</style>
      </section>


      {/* How OneNineLabs Powers Your Operation — Telemetry, Automation & Scale */}
      <section className="ryze-inside-section" id="ryze-inside-section">
        <h2 className="ryze-inside-title">How Custom Software Powers Your Operation</h2>

        <div className="ryze-inside-grid">
          {/* Card 1: Telemetry Analysis */}
          <div className="ryze-card ryze-card-creative-analysis">
            <div className="ryze-card-inner">
              <div className="ca-phone-frame">
                <div className="ca-video-preview" style={{ background: "linear-gradient(135deg, #0f172a, #1e293b)" }}>
                  <div className="ca-overlay-badges">
                    <div className="ca-badge ca-badge-top" style={{ border: "1.5px solid #10b981" }}>
                      <span className="ca-badge-label" style={{ color: "#10b981" }}>Latency</span>
                      <span className="ca-badge-value">24ms</span>
                    </div>
                    <div className="ca-badge ca-badge-left" style={{ border: "1.5px solid #0ea5e9" }}>
                      <span className="ca-badge-label" style={{ color: "#0ea5e9" }}>Uptime</span>
                      <span className="ca-badge-value">99.9%</span>
                    </div>
                    <div className="ca-badge ca-badge-right" style={{ border: "1.5px solid #f59e0b" }}>
                      <span className="ca-badge-label" style={{ color: "#f59e0b" }}>CPU</span>
                      <span className="ca-badge-value">34%</span>
                    </div>
                  </div>
                  <div className="ca-thumbnail-text" style={{ fontFamily: "monospace", fontSize: "12px", color: "#10b981" }}>
                    gateway.api.production
                  </div>
                </div>
              </div>
            </div>
            <div className="ryze-card-label">TELEMETRY LOGGING</div>
          </div>

          {/* Card 2: DevOps Pipeline */}
          <div className="ryze-card ryze-card-creative-gen">
            <div className="ryze-card-inner">
              <div className="cg-content" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", padding: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#64748b" }}>pipeline_id: f28a9b1</span>
                    <span style={{ fontSize: "10px", padding: "2px 6px", borderRadius: "10px", background: "rgba(16,185,129,0.1)", color: "#10b981", fontWeight: "700" }}>✓ SUCCESS</span>
                  </div>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "10px" }}>
                    <span style={{ fontSize: "11px", padding: "2px 6px", borderRadius: "4px", background: "rgba(15,23,42,0.06)", border: "1px solid rgba(15,23,42,0.12)", color: "#334155", fontWeight: "600" }}>Linting ✓</span>
                    <span style={{ fontSize: "11px", padding: "2px 6px", borderRadius: "4px", background: "rgba(15,23,42,0.06)", border: "1px solid rgba(15,23,42,0.12)", color: "#334155", fontWeight: "600" }}>SecAudit ✓</span>
                    <span style={{ fontSize: "11px", padding: "2px 6px", borderRadius: "4px", background: "rgba(15,23,42,0.06)", border: "1px solid rgba(15,23,42,0.12)", color: "#334155", fontWeight: "600" }}>Build ✓</span>
                    <span style={{ fontSize: "11px", padding: "2px 6px", borderRadius: "4px", background: "rgba(15,23,42,0.06)", border: "1px solid rgba(15,23,42,0.12)", color: "#334155", fontWeight: "600" }}>Deploy ✓</span>
                  </div>
                </div>
                <div className="cg-bubble" style={{ background: "rgba(15,23,42,0.03)", border: "1px solid rgba(15,23,42,0.08)", borderRadius: "8px", padding: "10px", marginTop: "15px", width: "100%" }}>
                  <span className="cg-bubble-text" style={{ fontSize: "12px", fontFamily: "monospace", color: "#1e293b" }}>
                    Deploying container to EKS production cluster...
                  </span>
                </div>
                <div className="cg-ai-icons" style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
                  <span className="cg-ai-icon cg-icon-gpt" title="Next.js" style={{ background: "#000", color: "#fff" }}>N</span>
                  <span className="cg-ai-icon cg-icon-gemini" title="Docker" style={{ background: "#2496ed", color: "#fff" }}>D</span>
                  <span className="cg-ai-icon cg-icon-claude" title="Kubernetes" style={{ background: "#326ce5", color: "#fff" }}>K</span>
                </div>
              </div>
            </div>
            <div className="ryze-card-label">CI/CD AUTOMATION</div>
          </div>

          {/* Card 3: Security Compliance Audit */}
          <div className="ryze-card ryze-card-audit">
            <div className="ryze-card-inner">
              <div className="audit-content">
                <div className="audit-row">
                  <div className="audit-metric">
                    <span className="audit-metric-label">SSL Security</span>
                    <span className="audit-metric-value audit-great">100%</span>
                  </div>
                  <ul className="audit-bullets">
                    <li>TLS 1.3 protocol enforced globally for low latency handshake.</li>
                    <li>Automated certificate renewals validated via Let's Encrypt.</li>
                  </ul>
                </div>
                <div className="audit-row">
                  <div className="audit-metric">
                    <span className="audit-metric-label">Access Control</span>
                    <span className="audit-metric-value audit-great">96%</span>
                  </div>
                  <ul className="audit-bullets">
                    <li>Strict zero-trust authentication policies active on all servers.</li>
                    <li>Multi-factor authentication (MFA) required for admin accounts.</li>
                  </ul>
                </div>
                <div className="audit-row">
                  <div className="audit-metric">
                    <span className="audit-metric-label">Encryption</span>
                    <span className="audit-metric-value audit-great">100%</span>
                  </div>
                  <ul className="audit-bullets">
                    <li>Database backup snapshots fully encrypted using AES-256 keys.</li>
                    <li>Secret variables securely managed using AWS Secrets Manager.</li>
                  </ul>
                </div>
                <div className="audit-row">
                  <div className="audit-metric">
                    <span className="audit-metric-label">Vulnerability</span>
                    <span className="audit-metric-value audit-good">95%</span>
                  </div>
                  <ul className="audit-bullets">
                    <li>Nightly package vulnerability scanning active in build system.</li>
                    <li>Automatic security patch alerts integrated directly to devops.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="ryze-card-label">INFRASTRUCTURE AUDIT</div>
          </div>

          {/* Card 4: DevOps Slack Incident Alerting */}
          <div className="ryze-card ryze-card-slack">
            <div className="ryze-card-inner">
              <div className="slack-content">
                <div className="slack-thread-header">
                  <span className="slack-back">←</span>
                  <span className="slack-title">DevOps Channel</span>
                  <span className="slack-icons">⌂ ☰</span>
                </div>
                <div className="slack-msg">
                  <div className="slack-msg-text">
                    <strong>Uptime:</strong> 99.98%<br />
                    <strong>Active Connections:</strong> 18,432 req/min<br />
                    <strong>Database Lag:</strong> 8ms (Normal)<br />
                    <strong>Memory Usage:</strong> 64% (Stable)
                  </div>
                  <div className="slack-msg-text" style={{ marginTop: '8px' }}>
                    <strong>By Service:</strong><br />
                    • User Auth API: 12ms latency · 0% errors<br />
                    • Stripe Gateway: Webhook handshake verified
                  </div>
                  <div className="slack-msg-text" style={{ marginTop: '8px' }}>
                    <strong>Resolutions:</strong><br />
                    1. Auto-scaled cluster nodes +3 instances<br />
                    2. Redis cache garbage collection completed<br />
                    3. Cloudflare Web Application Firewall updated
                  </div>
                </div>
                <div className="slack-actions">
                  <button className="slack-btn slack-btn-primary" onClick={() => addToast("Alert sent to DevOps team!", "success")}>✉ Alert DevOps Team</button>
                  <button className="slack-btn slack-btn-secondary" onClick={() => addToast("System logs downloaded successfully!", "info")}>⬇ Download logs</button>
                </div>
              </div>
            </div>
            <div className="ryze-card-label">INCIDENT MONITORING</div>
          </div>

          {/* Card 5: API Rate Gateway Routing */}
          <div className="ryze-card ryze-card-keywords">
            <div className="ryze-card-inner">
              <div className="kw-content">
                <div className="kw-row">
                  <span className="kw-name">/api/v1/auth/login</span>
                  <span className="kw-clicks">24k</span>
                  <span className="kw-cost">22ms</span>
                  <span className="kw-badge kw-keyword">ACTIVE</span>
                </div>
                <div className="kw-row">
                  <span className="kw-name">/api/v1/users/prof...</span>
                  <span className="kw-clicks">89k</span>
                  <span className="kw-cost">15ms</span>
                  <span className="kw-badge kw-negative" style={{ background: "rgba(14,165,233,0.1)", color: "#0ea5e9", border: "1px solid rgba(14,165,233,0.2)" }}>CACHED</span>
                </div>
                <div className="kw-row">
                  <span className="kw-name">/api/v1/billing/ch...</span>
                  <span className="kw-clicks">1k</span>
                  <span className="kw-cost">88ms</span>
                  <span className="kw-badge kw-keyword">ACTIVE</span>
                </div>
                <div className="kw-row">
                  <span className="kw-name">/api/v1/project/sync</span>
                  <span className="kw-clicks">14k</span>
                  <span className="kw-cost">32ms</span>
                  <span className="kw-badge kw-keyword">ACTIVE</span>
                </div>
                <div className="kw-row">
                  <span className="kw-name">/api/v1/media/upload</span>
                  <span className="kw-clicks">8k</span>
                  <span className="kw-cost">120ms</span>
                  <span className="kw-badge kw-keyword">ACTIVE</span>
                </div>
                <div className="kw-row">
                  <span className="kw-name">/api/v1/notifications</span>
                  <span className="kw-clicks">92k</span>
                  <span className="kw-cost">8ms</span>
                  <span className="kw-badge kw-negative" style={{ background: "rgba(14,165,233,0.1)", color: "#0ea5e9", border: "1px solid rgba(14,165,233,0.2)" }}>CACHED</span>
                </div>
                <div className="kw-row">
                  <span className="kw-name">/api/v1/settings/up...</span>
                  <span className="kw-clicks">3k</span>
                  <span className="kw-cost">28ms</span>
                  <span className="kw-badge kw-keyword">ACTIVE</span>
                </div>
                <div className="kw-row">
                  <span className="kw-name">/api/v1/dashboard/s...</span>
                  <span className="kw-clicks">29k</span>
                  <span className="kw-cost">44ms</span>
                  <span className="kw-badge kw-negative" style={{ background: "rgba(14,165,233,0.1)", color: "#0ea5e9", border: "1px solid rgba(14,165,233,0.2)" }}>CACHED</span>
                </div>
                <div className="kw-row">
                  <span className="kw-name">/api/v1/auth/logout</span>
                  <span className="kw-clicks">2k</span>
                  <span className="kw-cost">11ms</span>
                  <span className="kw-badge kw-keyword">ACTIVE</span>
                </div>
                <div className="kw-row">
                  <span className="kw-name kw-highlight">/api/v1/data/stream</span>
                  <span className="kw-clicks">-</span>
                  <span className="kw-cost">Scanning</span>
                  <span className="kw-badge kw-scanning">⟳ Syncing</span>
                </div>
              </div>
            </div>
            <div className="ryze-card-label">API RATE LIMITING</div>
          </div>
        </div>
      </section>

      {/* Autonomous Features Section */}
      <section className="autonomous-section" id="autonomous-section">
        <div className="autonomous-grid">
          {/* Card 1: DevOps Pipelines */}
          <div className="auto-card">
            <div className="auto-card-header">
              <h3 className="auto-card-title">Autonomous<br />DevOps pipelines</h3>
              <ul className="auto-card-bullets">
                <li>24/7 cluster health monitors</li>
                <li>AI incident tracing alerts</li>
              </ul>
            </div>
            <div className="auto-card-body">
              <div className="ppc-mockup">
                <div className="ppc-image-card">
                  <div className="ppc-image-gradient" style={{ background: "linear-gradient(135deg, #1e293b, #0f172a)" }}></div>
                  <div className="ppc-image-overlay-text">Deploying service containers... Success! (Edge CDN live)</div>
                </div>
                <div className="ppc-stats-bar">
                  <span className="ppc-stat">Ping ▶</span>
                  <span className="ppc-stat">Latency <strong>12ms</strong></span>
                  <span className="ppc-stat">Uptime <strong>99.99%</strong></span>
                  <span className="ppc-stat">Logs ▶</span>
                </div>
              </div>
              <div className="auto-platform-icons">
                <span className="platform-icon-sm pi-google" title="GCP">G</span>
                <span className="platform-icon-sm pi-meta" title="AWS">A</span>
                <span className="platform-icon-sm pi-microsoft" title="Azure">Z</span>
                <span className="platform-icon-sm pi-tiktok" title="GitHub">G</span>
                <span className="platform-icon-sm pi-linkedin" title="Docker">D</span>
              </div>
            </div>
          </div>

          {/* Card 2: Code Review Agent */}
          <div className="auto-card">
            <div className="auto-card-header">
              <h3 className="auto-card-title">Autonomous<br />code review agent</h3>
              <ul className="auto-card-bullets">
                <li>AI-powered vulnerability detection</li>
                <li>Automated security hotfix patches</li>
              </ul>
            </div>
            <div className="auto-card-body">
              <div className="seo-table">
                <div className="seo-row">
                  <span className="seo-task">Fix 12 dependency security vulns...</span>
                  <span className="seo-metric seo-positive">Patched</span>
                  <span className="seo-status seo-applied">Applied</span>
                </div>
                <div className="seo-row">
                  <span className="seo-task">Optimize Postgres indexing queries...</span>
                  <span className="seo-metric seo-positive">+40% speed</span>
                  <span className="seo-status seo-applied">Applied</span>
                </div>
                <div className="seo-row">
                  <span className="seo-task">Setup HTTPS SSL TLS certificates...</span>
                  <span className="seo-metric seo-positive">Secure</span>
                  <span className="seo-status seo-applied">Applied</span>
                </div>
                <div className="seo-row">
                  <span className="seo-task">Refactor dynamic imports bundle size...</span>
                  <span className="seo-metric seo-positive">-1.2MB load</span>
                  <span className="seo-status seo-applied">Applied</span>
                </div>
                <div className="seo-row">
                  <span className="seo-task">Add CORS whitelist origins header...</span>
                  <span className="seo-metric seo-positive">Filtered</span>
                  <span className="seo-status seo-applied">Applied</span>
                </div>
                <div className="seo-row">
                  <span className="seo-task">Deploy Docker container failover strategy...</span>
                  <span className="seo-metric seo-positive">Redundant</span>
                  <span className="seo-status seo-applied">Applied</span>
                </div>
              </div>
              <div className="auto-platform-icons">
                <span className="platform-icon-sm pi-gsc" title="SonarQube">S</span>
                <span className="platform-icon-sm pi-ahrefs" title="GitHub Actions">G</span>
                <span className="platform-icon-sm pi-semrush" title="Vercel">V</span>
              </div>
            </div>
          </div>

          {/* Card 3: SaaS Builder */}
          <div className="auto-card">
            <div className="auto-card-header">
              <h3 className="auto-card-title">Autonomous<br />SaaS builder</h3>
              <ul className="auto-card-bullets">
                <li>AI scaffolds code templates instantly</li>
                <li>Automated multi-tenant DB structure</li>
              </ul>
            </div>
            <div className="auto-card-body">
              <div className="wb-mockup">
                <div className="wb-prompt-card">
                  <p className="wb-prompt-text">Build a secure SaaS subscription app with Stripe checkout support.</p>
                  <button className="wb-create-btn">Create SaaS</button>
                </div>
                <div className="wb-preview-bar">
                  <span className="wb-preview-cursor">▶</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why OneNineLabs Outperforms — Cloud-Native, AI & DevOps */}
      <section className="why-ryze-section" id="why-ryze-section">
        <h2 className="why-ryze-title">Why OneNineLabs Outperforms</h2>

        <div className="why-ryze-grid">
          <div className="why-card">
            <div className="why-card-top">
              <span className="why-number">01</span>
              <div className="why-card-text">
                <h3 className="why-card-title">Built on modern cloud-native architectures</h3>
                <ul className="why-card-bullets">
                  <li>We work with ex-AWS and GCP cloud engineers</li>
                  <li>Our software is optimized for latency and server cost</li>
                </ul>
              </div>
            </div>
            <div className="why-card-icons">
              <span className="why-icon why-icon-google">▲</span>
              <span className="why-icon why-icon-meta">∞</span>
            </div>
          </div>

          <div className="why-card">
            <div className="why-card-top">
              <span className="why-number">02</span>
              <div className="why-card-text">
                <h3 className="why-card-title">Custom-built AI workflow engines</h3>
                <ul className="why-card-bullets">
                  <li>Fine-tuned language models optimized for software execution</li>
                  <li>Blazing-fast microservices pipeline integrations</li>
                </ul>
              </div>
            </div>
            <div className="why-card-icons">
              <span className="why-icon why-icon-ai">✦</span>
            </div>
          </div>

          <div className="why-card">
            <div className="why-card-top">
              <span className="why-number">03</span>
              <div className="why-card-text">
                <h3 className="why-card-title">Real-time health audits</h3>
                <ul className="why-card-bullets">
                  <li>Monitors service endpoints 24/7, auto-healing failed tasks</li>
                  <li>99.9% application uptime SLAs</li>
                </ul>
              </div>
            </div>
            <div className="why-card-icons">
              <span className="why-icon why-icon-clock">⟳</span>
            </div>
          </div>

          <div className="why-card">
            <div className="why-card-top">
              <span className="why-number">04</span>
              <div className="why-card-text">
                <h3 className="why-card-title">Works across every cloud provider</h3>
                <ul className="why-card-bullets">
                  <li>AWS, GCP, Azure, and private cloud architectures — one source code</li>
                  <li>Containerized architectures that deploy anywhere seamlessly</li>
                </ul>
              </div>
            </div>
            <div className="why-card-icons">
              <span className="why-icon why-icon-google-sm" title="Google Cloud">▲</span>
              <span className="why-icon why-icon-meta-sm" title="AWS">∞</span>
              <span className="why-icon why-icon-tiktok-sm" title="Kubernetes">k</span>
              <span className="why-icon why-icon-linkedin-sm" title="Docker">d</span>
            </div>
          </div>
        </div>
      </section>

      {/* Everything You Need Section */}
      <section className="everything-section" id="everything-section">
        <div className="everything-container">
          <h2 className="everything-title">
            <em>Everything You Need to Build,<br />Secure & Scale Custom Software.</em>
          </h2>

          <div className="everything-grid">
            {/* Optimize Column -> Deploy */}
            <div className="everything-column">
              <h4 className="everything-col-title">Deploy</h4>
              <div className="everything-list">
                <div className="everything-item">
                  <span className="ei-icon ei-green">✓</span>
                  <span className="ei-text">Kubernetes orchestration</span>
                </div>
                <div className="everything-item">
                  <span className="ei-icon ei-green">✓</span>
                  <span className="ei-text">CI/CD automated pipelines</span>
                </div>
                <div className="everything-item">
                  <span className="ei-icon ei-green">✓</span>
                  <span className="ei-text">Docker container clustering</span>
                </div>
                <div className="everything-item">
                  <span className="ei-icon ei-green">✓</span>
                  <span className="ei-text">Serverless edge hosting</span>
                </div>
                <div className="everything-item">
                  <span className="ei-icon ei-green">✓</span>
                  <span className="ei-text">Automatic cache CDNs</span>
                </div>
                <div className="everything-item">
                  <span className="ei-icon ei-green">✓</span>
                  <span className="ei-text">Load balancing configuration</span>
                </div>
              </div>
            </div>

            {/* Create Column -> Build */}
            <div className="everything-column">
              <h4 className="everything-col-title">Build</h4>
              <div className="everything-list">
                <div className="everything-item">
                  <span className="ei-icon ei-purple">✦</span>
                  <span className="ei-text">Custom React web platforms</span>
                </div>
                <div className="everything-item">
                  <span className="ei-icon ei-purple">✦</span>
                  <span className="ei-text">Flutter mobile applications</span>
                </div>
                <div className="everything-item">
                  <span className="ei-icon ei-purple">✦</span>
                  <span className="ei-text">Solidity blockchain contracts</span>
                </div>
                <div className="everything-item">
                  <span className="ei-icon ei-purple">✦</span>
                  <span className="ei-text">Multi-tenant SaaS backends</span>
                </div>
                <div className="everything-item">
                  <span className="ei-icon ei-purple">✦</span>
                  <span className="ei-text">Python AI model workflows</span>
                </div>
                <div className="everything-item">
                  <span className="ei-icon ei-purple">✦</span>
                  <span className="ei-text">GraphQL &amp; REST API layers</span>
                </div>
              </div>
            </div>

            {/* Audit Column -> Secure */}
            <div className="everything-column">
              <h4 className="everything-col-title">Secure</h4>
              <div className="everything-list">
                <div className="everything-item">
                  <span className="ei-icon ei-amber">⚡</span>
                  <span className="ei-text">Vulnerability pen testing</span>
                </div>
                <div className="everything-item">
                  <span className="ei-icon ei-amber">⚡</span>
                  <span className="ei-text">Zero-trust user gateways</span>
                </div>
                <div className="everything-item">
                  <span className="ei-icon ei-amber">⚡</span>
                  <span className="ei-text">Database isolation rules</span>
                </div>
                <div className="everything-item">
                  <span className="ei-icon ei-amber">⚡</span>
                  <span className="ei-text">SSL/TLS HTTPS configurations</span>
                </div>
                <div className="everything-item">
                  <span className="ei-icon ei-amber">⚡</span>
                  <span className="ei-text">Strict CORS whitelist policies</span>
                </div>
                <div className="everything-item">
                  <span className="ei-icon ei-amber">⚡</span>
                  <span className="ei-text">SOC2 compliance auditing</span>
                </div>
              </div>
            </div>

            {/* Report Column -> Monitor */}
            <div className="everything-column">
              <h4 className="everything-col-title">Monitor</h4>
              <div className="everything-list">
                <div className="everything-item">
                  <span className="ei-icon ei-cyan">◎</span>
                  <span className="ei-text">Real-time cloud logs tracing</span>
                </div>
                <div className="everything-item">
                  <span className="ei-icon ei-cyan">◎</span>
                  <span className="ei-text">Slack system incident alerts</span>
                </div>
                <div className="everything-item">
                  <span className="ei-icon ei-cyan">◎</span>
                  <span className="ei-text">Grafana metrics dashboards</span>
                </div>
                <div className="everything-item">
                  <span className="ei-icon ei-cyan">◎</span>
                  <span className="ei-text">Database load analytics</span>
                </div>
                <div className="everything-item">
                  <span className="ei-icon ei-cyan">◎</span>
                  <span className="ei-text">Response latency profiling</span>
                </div>
                <div className="everything-item">
                  <span className="ei-icon ei-cyan">◎</span>
                  <span className="ei-text">API rate-limit statistics</span>
                  <span className="ei-text">Competitor benchmarking</span>
                </div>
                <div className="everything-item">
                  <span className="ei-icon ei-cyan">◎</span>
                  <span className="ei-text">Weekly AI summaries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Agencies Section */}
      <section className="agencies-section">
        <div className="agencies-container">
          <div className="agencies-left">
            <span className="agencies-badge">FOR ENTERPRISES</span>
            <h2 className="agencies-title">Manage Complex Multi-Cloud Clusters at Scale — OneNineLabs DevOps</h2>
            <ul className="agencies-bullets">
              <li>Zero-touch container failover and auto-scaling</li>
              <li>Integrated application tracing and serverless deployment</li>
              <li>Enterprise ready — 99.9% uptime SLA guarantee</li>
            </ul>
            <div className="agencies-icons">
              <span className="ag-icon">G</span>
              <span className="ag-icon">A</span>
              <span className="ag-icon">K</span>
              <span className="ag-icon">D</span>
              <span className="ag-icon">S</span>
            </div>
          </div>
          <div className="agencies-right">
            <div className="agencies-dashboard">
              <div className="dash-header">
                <span className="dash-back">← Infrastructure Overview</span>
              </div>
              <div className="dash-metrics">
                <div className="dash-metric-card">
                  <span className="dash-metric-label">Total API Hits</span>
                  <span className="dash-metric-value">1.24B</span>
                </div>
                <div className="dash-metric-card">
                  <span className="dash-metric-label">Avg Latency</span>
                  <span className="dash-metric-value">18ms</span>
                </div>
                <div className="dash-metric-card">
                  <span className="dash-metric-label">Active Instances</span>
                  <span className="dash-metric-value">860</span>
                </div>
                <div className="dash-metric-card">
                  <span className="dash-metric-label">Active Clusters</span>
                  <span className="dash-metric-value">42</span>
                </div>
              </div>
              <div className="dash-activity">
                <span className="dash-activity-label">Server CPU Load</span>
                <div className="dash-bars">
                  <div className="dash-bar" style={{ width: '95%' }}></div>
                  <div className="dash-bar" style={{ width: '78%' }}></div>
                  <div className="dash-bar" style={{ width: '88%' }}></div>
                  <div className="dash-bar" style={{ width: '60%' }}></div>
                  <div className="dash-bar" style={{ width: '92%' }}></div>
                  <div className="dash-bar" style={{ width: '70%' }}></div>
                  <div className="dash-bar" style={{ width: '85%' }}></div>
                  <div className="dash-bar" style={{ width: '55%' }}></div>
                  <div className="dash-bar" style={{ width: '90%' }}></div>
                  <div className="dash-bar" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Running Text Marquee */}
      <section className="marquee-section">
        <div className="marquee-track">
          <div className="marquee-content">
            <span>Web Development</span>
            <span className="marquee-dot">✦</span>
            <span>Mobile Apps</span>
            <span className="marquee-dot">✦</span>
            <span>AI &amp; Automation</span>
            <span className="marquee-dot">✦</span>
            <span>Blockchain Solutions</span>
            <span className="marquee-dot">✦</span>
            <span>Crypto Platforms</span>
            <span className="marquee-dot">✦</span>
            <span>Custom SaaS</span>
            <span className="marquee-dot">✦</span>
            <span>Security Audits</span>
            <span className="marquee-dot">✦</span>
            <span>System Monitoring</span>
            <span className="marquee-dot">✦</span>
            <span>Web Development</span>
            <span className="marquee-dot">✦</span>
            <span>Mobile Apps</span>
            <span className="marquee-dot">✦</span>
            <span>AI &amp; Automation</span>
            <span className="marquee-dot">✦</span>
            <span>Blockchain Solutions</span>
            <span className="marquee-dot">✦</span>
            <span>Crypto Platforms</span>
            <span className="marquee-dot">✦</span>
            <span>Custom SaaS</span>
            <span className="marquee-dot">✦</span>
            <span>Security Audits</span>
            <span className="marquee-dot">✦</span>
            <span>System Monitoring</span>
            <span className="marquee-dot">✦</span>
          </div>
        </div>
      </section>

      {/* FAQ Section — OneNineLabs (SEO-optimized, site-aligned) */}
      <section className="faq-section" id="faq">
        <h2 className="faq-title">Frequently asked questions</h2>
        <p style={{ textAlign: "center", maxWidth: "720px", margin: "-28px auto 36px", color: "#64748b", fontSize: "14px", lineHeight: 1.6, padding: "0 24px" }}>
          Everything you need to know about working with <strong style={{ color: "#0f172a" }}>OneNineLabs</strong> — our 6 core services, tech stack, timelines, security and growth support. Can&apos;t find an answer? <Link href="/contact" style={{ color: "#0f172a", fontWeight: 800, textDecoration: "underline", textUnderlineOffset: "3px" }}>Talk to an architect</Link>.
        </p>

        {/* FAQ JSON-LD for SEO (Organization: OneNineLabs) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What custom software services does OneNineLabs provide?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "OneNineLabs delivers 6 core enterprise services: (1) Custom Web Development & Applications (Next.js, React, Node.js, Python, headless CMS), (2) AI & Intelligent Automation (autonomous LLM agents with LangChain/LlamaIndex, RAG vector search with Pinecone/Qdrant), (3) Multi-Tenant SaaS Platforms (Stripe billing, SSO/RBAC, tenant isolation), (4) Blockchain & Web3 (Solidity/Rust smart contracts, dApps, L2), (5) Growth Marketing SEO & PPC (technical SEO, Core Web Vitals, paid ads, CRO), and (6) Cybersecurity & DevOps (Zero-Trust, Kubernetes, SOC 2).",
                  },
                },
                {
                  "@type": "Question",
                  name: "What tech stack does OneNineLabs use for web and SaaS development?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Frontend: Next.js 15 (App Router, SSR/SSG/ISR), React 19, TypeScript, Tailwind CSS. Backend: Node.js (Nest/Express) and Python (FastAPI), tRPC/GraphQL. Data: PostgreSQL (RLS), Redis, Prisma. Infra: Vercel, AWS, GCP, Cloudflare, Docker, Kubernetes, Terraform, GitHub Actions. Headless CMS: Sanity/Contentful/Strapi. Programmatic SEO and server-side tagging baked in.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does it take to ship an MVP or modernize our existing app?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Discovery 1–2 weeks, architecture & design 2–3 weeks, build & iterate 6–12 weeks, hardening & launch 1–2 weeks. MVPs ship in 6–8 weeks with weekly demos. For migrations, we use the strangler pattern, parallel preview deploys, and blue-green releases to modernize to Next.js/microservices and headless CMS without downtime — preserving SEO equity, redirects, and analytics.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can OneNineLabs build AI agents and RAG over our private data?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. We build autonomous LLM agents that plan, use tools, and verify — calling your APIs/ERPs/DBs with RBAC, retries, and audit trails. Our RAG stack uses chunking, embeddings, hybrid search (Pinecone/Qdrant/pgvector), and reranking for source-grounded, cited answers. Covers evals, tracing, prompt registry, cost routing (40–70% savings), and human-in-the-loop approvals. Works best paired with our Web Development and Security services.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you handle blockchain, smart contracts, and Web3 wallets?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes — Solidity & Rust (Anchor) smart contracts for Ethereum, L2s (Arbitrum, Optimism, Base, Polygon), Solana, and EVM-compatible chains. Token standards ERC-20/721/1155/4337, vaults/AMMs, gas-optimized patterns, proxy/diamond upgrades, plus Wagmi/Viem/WalletConnect/MetaMask, ERC-4337 bundler/paymaster, and SIWE. Auditing via Slither + Foundry fuzz/invariant tests, with third-party audit readiness.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you build and scale multi-tenant SaaS platforms?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely — schema-per-tenant or RLS isolation with tenant-aware middleware and per-tenant keys, Stripe Billing (seats, usage metering, trials/coupons, dunning), SAML/OIDC SSO (Okta/AzureAD/Google), SCIM, RBAC/ABAC, audit logs, and SOC 2-ready controls. Serverless autoscaling keeps COGS linear at 1,000+ tenants.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do you handle security, DevOps, and SOC 2 compliance?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Zero-Trust by default: mTLS/WAF/CSP/HSTS, least-privilege IAM, secrets in AWS/GCP managers with rotation, image signing & SBOM, runtime scanning, SAST/DAST, pen-tests. IaC with Terraform, Kubernetes (Helm/Argo), GitHub Actions OIDC, and progressive delivery. Continuous SOC 2 evidence collection (60+ controls), access reviews, and 24/7 monitoring with Grafana/Datadog/PagerDuty and <15 min MTTR. 99.9% uptime SLA.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide growth marketing (SEO & PPC) and conversion optimization?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes — technical SEO (schema, Core Web Vitals, crawl architecture, programmatic SEO), internal href graph, authority links, plus Google/LinkedIn/Meta PPC with structured accounts, creative testing, bid automation, and landing-page CRO (heatmaps, replays, A/B). Full-funnel attribution via GA4/server-side tagging to CRM revenue, averaging +340% organic growth and 4.8x ROAS for retainer clients.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can we hire a dedicated engineering pod from OneNineLabs?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes — flexible dedicated pods and staff augmentation that embed in your product workflow. Choose Discovery Sprint (2 weeks), Build & Launch (6–12 weeks), or Scale & Operate retainer (24/7 monitoring, feature velocity, quarterly architecture reviews). Weekly demos, velocity tracking, and no lock-in.",
                  },
                },
              ],
            }),
          }}
        />

        <div className="faq-list">
          <details className="faq-item" open>
            <summary className="faq-question">What custom software services does OneNineLabs provide?</summary>
            <div className="faq-answer">
              <strong>OneNineLabs</strong> delivers <strong>6 core enterprise services</strong> engineered for speed, security &amp; scale:{" "}
              <Link href="/services/web-development" style={{ fontWeight: 800, color: "#0f172a", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                Custom Web Development
              </Link>{" "}
              (Next.js 15 / React 19 / Node.js / Python, headless CMS, sub-second edge delivery),{" "}
              <Link href="/services/ai-automation" style={{ fontWeight: 800, color: "#0f172a", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                AI &amp; Automation
              </Link>{" "}
              (autonomous LLM agents — LangChain/LlamaIndex, RAG with Pinecone/Qdrant),{" "}
              <Link href="/services/saas" style={{ fontWeight: 800, color: "#0f172a", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                Multi-Tenant SaaS
              </Link>{" "}
              (Stripe billing, SSO/RBAC, RLS isolation),{" "}
              <Link href="/services/blockchain" style={{ fontWeight: 800, color: "#0f172a", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                Blockchain &amp; Web3
              </Link>{" "}
              (Solidity/Rust, dApps, L2),{" "}
              <Link href="/services/marketing" style={{ fontWeight: 800, color: "#0f172a", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                Growth Marketing
              </Link>{" "}
              (technical SEO • PPC • CRO) and{" "}
              <Link href="/services/security" style={{ fontWeight: 800, color: "#0f172a", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                Cloud &amp; Cyber Security
              </Link>{" "}
              (Zero-Trust, Kubernetes, SOC 2). Every build is typed, tested, and audit-ready.
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-question">What tech stack does OneNineLabs use for web and SaaS?</summary>
            <div className="faq-answer">
              <strong>Frontend:</strong> Next.js 15 (App Router, SSR/SSG/ISR, RSC), React 19, TypeScript, Tailwind CSS. <strong>Backend:</strong> Node.js
              (Nest/Express) &amp; Python (FastAPI), tRPC/GraphQL. <strong>Data:</strong> PostgreSQL (RLS for tenant isolation), Redis, Prisma.{" "}
              <strong>Infra:</strong> Vercel / AWS / GCP / Cloudflare, Docker, Kubernetes, Terraform, GitHub Actions OIDC. Headless CMS (Sanity,
              Contentful, Strapi), real-time (WebSockets), and programmatic SEO + server-side tagging baked in for Core Web Vitals &amp; crawl
              efficiency.
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-question">How long to ship an MVP or modernize our existing app?</summary>
            <div className="faq-answer">
              <strong>Discovery 1–2 wks</strong> (workshops, KPI tree, audit) → <strong>Architecture &amp; design 2–3 wks</strong> →{" "}
              <strong>Build 6–12 wks</strong> (agile sprints, CI/CD, evals) → <strong>Hardening &amp; launch 1–2 wks</strong>. <strong>MVPs in 6–8 weeks</strong> with weekly demos. For modernization we use the
              strangler pattern, parallel preview deploys, and blue-green releases to move to Next.js / microservices / headless CMS{" "}
              <strong>without downtime</strong> — preserving SEO equity (canonicals, redirects, <code>href</code> hygiene), sitemaps, and analytics.
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-question">Can you build AI agents and RAG over our private data?</summary>
            <div className="faq-answer">
              Yes. We ship <strong>autonomous LLM agents</strong> that plan, call tools (APIs/ERPs/DBs), and verify — with RBAC, retries, audit trails,
              evals/tracing, and human-in-the-loop. Our <strong>RAG</strong> (chunking → embeddings → hybrid search on{" "}
              <code>Pinecone / Qdrant / pgvector</code> → reranking) gives source-grounded, cited answers and stays current without retraining. Cost routing
              cuts spend <strong>40–70%</strong>. Best paired with our{" "}
              <Link href="/services/ai-automation" style={{ fontWeight: 700, color: "#0f172a", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                AI Automation
              </Link>
              ,{" "}
              <Link href="/services/web-development" style={{ fontWeight: 700, color: "#0f172a", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                Web Development
              </Link>{" "}
              &amp;{" "}
              <Link href="/services/security" style={{ fontWeight: 700, color: "#0f172a", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                Cloud &amp; Cyber Security
              </Link>{" "}
              services.
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-question">Do you handle blockchain, smart contracts, and Web3 wallets?</summary>
            <div className="faq-answer">
              Yes — <strong>Solidity &amp; Rust (Anchor)</strong> for Ethereum, L2s (Arbitrum, Optimism, Base, Polygon), Solana &amp; EVM chains.
              ERC-20/721/1155/4337, vaults/AMMs, proxy/diamond upgrades, gas-optimized. Frontend with{" "}
              <code>Wagmi / Viem / WalletConnect / MetaMask</code>, ERC-4337 bundler/paymaster &amp; SIWE. Security via{" "}
              <strong>Slither + Foundry fuzz/invariant</strong>, threat modeling, and third-party audit readiness. See{" "}
              <Link href="/services/blockchain" style={{ fontWeight: 700, color: "#0f172a", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                Blockchain &amp; Web3
              </Link>
              .
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-question">Can you build and scale multi-tenant SaaS platforms?</summary>
            <div className="faq-answer">
              Absolutely — <strong>RLS or schema-per-tenant isolation</strong> with tenant-aware middleware &amp; per-tenant keys,{" "}
              <strong>Stripe Billing</strong> (seats, metered usage, trials/coupons, prorations, dunning), <strong>SAML/OIDC SSO</strong> (Okta/AzureAD/Google),
              SCIM, RBAC/ABAC, immutable audit logs, and SOC 2 control mapping. Serverless autoscaling keeps COGS linear at 1k+ tenants. Learn more on{" "}
              <Link href="/services/saas" style={{ fontWeight: 700, color: "#0f172a", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                SaaS Platforms
              </Link>
              .
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-question">How do you handle security, DevOps, and SOC 2 compliance?</summary>
            <div className="faq-answer">
              <strong>Zero-Trust by default:</strong> mTLS/WAF/CSP/HSTS, least-privilege IAM, secrets in AWS/GCP managers with rotation, image signing &amp;
              SBOM, runtime scanning, SAST/DAST, pen-tests. <strong>IaC</strong> with Terraform, Kubernetes (Helm/Argo), GitHub Actions OIDC &amp; progressive
              delivery with instant rollback. Continuous <strong>SOC 2 evidence</strong> (60+ controls), access reviews, and 24/7 observability
              (Grafana/Datadog/PagerDuty, &lt;15 min MTTR, 99.9% SLA). Details on{" "}
              <Link href="/services/security" style={{ fontWeight: 700, color: "#0f172a", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                Cloud &amp; Cyber Security
              </Link>
              .
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-question">Do you provide growth marketing (SEO & PPC) and ongoing support?</summary>
            <div className="faq-answer">
              Yes — <strong>Technical SEO</strong> (schema, Core Web Vitals, crawl architecture, programmatic SEO, internal{" "}
              <code>href</code> graph), <strong>PPC</strong> (Google/LinkedIn/Meta, PMax, creative &amp; bid automation),{" "}
              <strong>CRO</strong> (heatmaps/replays → A/B tests) and <strong>full-funnel attribution</strong> (GA4 + server-side tagging → CRM revenue).
              Average <strong>+340% organic</strong> and <strong>4.8× ROAS</strong> for retainers — plus 99.9% uptime, monthly patching, and quarterly
              architecture reviews. Explore{" "}
              <Link href="/services/marketing" style={{ fontWeight: 700, color: "#0f172a", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                Growth Marketing
              </Link>
              .
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-question">Can we hire a dedicated engineering pod from OneNineLabs?</summary>
            <div className="faq-answer">
              Yes — <strong>flexible dedicated pods</strong> that embed in your workflow. Choose <strong>Discovery Sprint (2 wks)</strong> for audit &amp;
              roadmap, <strong>Build &amp; Launch (6–12 wks)</strong> for MVPs, or <strong>Scale &amp; Operate retainer</strong> (24/7 monitoring, feature
              velocity, CRO). Weekly demos, velocity tracking, and no lock-in.{" "}
              <Link href="/contact" style={{ fontWeight: 800, color: "#0f172a", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                Schedule a call
              </Link>{" "}
              and we&apos;ll propose the right pod in 24h.
            </div>
          </details>
        </div>
      </section>

      {/* Footer Component — single Get in Touch via Footer (duplicate removed) */}
      <Footer />
    </>
  );
}
