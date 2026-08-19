"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function MobileAppsPageContent() {
  const [activePlatform, setActivePlatform] = useState("react-native");
  const [activeIndustryTab, setActiveIndustryTab] = useState("fintech");

  const platforms = {
    "react-native": {
      name: "React Native",
      badge: "Cross-Platform Leader",
      tagline: "Unified JavaScript & TypeScript codebase with 90%+ shared logic and 60/120 FPS native performance.",
      framework: "React Native 0.76+ (New Architecture)",
      renderingEngine: "Fabric C++ Rendering Engine",
      runtime: "Hermes Bytecode Engine",
      codeReuse: "92% Shared Code",
      coldStart: "0.85s",
      icon: "⚛️",
      color: "#38bdf8",
      bestFor: "High-growth consumer apps, B2B SaaS mobile clients, and multi-platform digital products.",
      code: `// React Native Fabric Component with Optimistic Offline Cache
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDatabase } from '@nozbe/watermelondb/react';

export const SyncDashboard = ({ userId }: { userId: string }) => {
  const database = useDatabase();
  
  useEffect(() => {
    // Background optimistic sync queue
    database.write(async () => {
      await database.get('telemetry').create(record => {
        record.userId = userId;
        record.timestamp = Date.now();
        record.status = 'synced';
      });
    });
  }, [userId]);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>60 FPS Native Renderer</Text>
      <Text style={styles.sub}>Zero Bridge Latency • Hermes Bytecode</Text>
    </View>
  );
};`
    },
    "ios-native": {
      name: "Swift & SwiftUI (iOS)",
      badge: "Pure Apple Native",
      tagline: "Engineered specifically for Apple hardware, utilizing SwiftUI, Combine, Metal GPU acceleration, and CoreML.",
      framework: "Swift 6 / SwiftUI 5",
      renderingEngine: "Metal GPU Acceleration",
      runtime: "Native ARM64 Binary",
      codeReuse: "100% Apple Native",
      coldStart: "0.45s",
      icon: "🍏",
      color: "#0f172a",
      bestFor: "Deep iOS hardware integration, Apple Watch companion apps, ARKit, and maximum GPU throughput.",
      code: `// Native SwiftUI with Combine & Biometric Secure Enclave
import SwiftUI
import LocalAuthentication

struct BiometricAuthView: View {
    @State private var isUnlocked = false
    let context = LAContext()

    var body: some View {
        VStack(spacing: 20) {
            Image(systemName: isUnlocked ? "lock.open.fill" : "faceid")
                .font(.system(size: 50))
                .foregroundColor(.green)
            Text(isUnlocked ? "Secure Enclave Unlocked" : "Authenticate FaceID")
                .font(.headline)
        }
        .onAppear(perform: authenticateUser)
    }

    func authenticateUser() {
        var error: NSError?
        if context.canEvaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, error: &error) {
            context.evaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, localizedReason: "Log into OneNine Vault") { success, _ in
                DispatchQueue.main.async { isUnlocked = success }
            }
        }
    }
}`
    },
    "android-native": {
      name: "Kotlin & Jetpack Compose",
      badge: "Pure Android Native",
      tagline: "State-of-the-art declarative Android development with Kotlin Coroutines, Jetpack Compose, Room DB, and Material 3.",
      framework: "Kotlin 2.0 / Jetpack Compose",
      renderingEngine: "Android Skia / Compose Runtime",
      runtime: "ART Ahead-of-Time Binary",
      codeReuse: "100% Android Native",
      coldStart: "0.55s",
      icon: "🤖",
      color: "#10b981",
      bestFor: "Custom Android hardware peripherals, deep background telemetry, Android Auto, and Google Play Store top tier.",
      code: `// Kotlin Jetpack Compose with Flow & Room Database Cache
package com.oneninelabs.mobile.ui

import androidx.compose.runtime.*
import androidx.compose.material3.*
import kotlinx.coroutines.flow.collectLatest

@Composable
fun RealtimeSyncScreen(viewModel: TelemetryViewModel) {
    val syncState by viewModel.syncFlow.collectAsState(initial = SyncStatus.Idle)

    Surface(modifier = Modifier.fillMaxSize(), color = MaterialTheme.colorScheme.background) {
        Column(modifier = Modifier.padding(24.dp)) {
            Text("Android Native UI", style = MaterialTheme.typography.headlineMedium)
            Text("Room DB Cache: \${syncState.syncedRecords} records", color = Color.Gray)
            LinearProgressIndicator(progress = syncState.progress)
        }
    }
}`
    },
    "flutter": {
      name: "Flutter & Dart",
      badge: "Multi-Platform Canvas",
      tagline: "Pixel-perfect consistency powered by Google's Impeller GPU engine, compiling directly to native ARM machine code.",
      framework: "Flutter 3.24+ / Dart 3.5",
      renderingEngine: "Impeller Next-Gen GPU Engine",
      runtime: "Native AOT Machine Code",
      codeReuse: "95% Shared Code",
      coldStart: "0.75s",
      icon: "💙",
      color: "#0284c7",
      bestFor: "Design-intensive custom UI systems, branded experiences, and simultaneous iOS, Android & Desktop launches.",
      code: `// Flutter Impeller Rendering with Riverpod State Engine
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class ImpellerChartWidget extends ConsumerWidget {
  const ImpellerChartWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final telemetry = ref.watch(telemetryProvider);

    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(24),
        boxShadow: [BoxShadow(color: Colors.black12, blurRadius: 15)],
      ),
      child: Text('60FPS Impeller Render: \${telemetry.fps} FPS'),
    );
  }
}`
    }
  };

  const currentPlatform = platforms[activePlatform];

  const industrySolutions = [
    {
      id: "fintech",
      title: "Fintech & Mobile Wallets",
      category: "Fintech & Banking",
      desc: "Biometric FaceID/TouchID security, PCI-DSS compliant payment rails, real-time balance WebSockets, and encrypted multi-currency wallets.",
      badge: "PCI-DSS Compliant",
      icon: "💳",
      stats: "0.2s Transaction Response",
      bullets: [
        "Hardware-backed Secure Enclave credential storage",
        "Plaid, Stripe & Adyen 1-tap banking integration",
        "Real-time WebSocket balance updates & transaction push alerts"
      ]
    },
    {
      id: "healthcare",
      title: "Healthcare & Telemedicine",
      category: "HealthTech & MedTech",
      desc: "HIPAA-compliant WebRTC encrypted video consultations, electronic health record (EHR) sync, and Apple HealthKit / Google Health Connect integration.",
      badge: "HIPAA Certified",
      icon: "🏥",
      stats: "End-to-End Encrypted",
      bullets: [
        "Encrypted WebRTC 1080p video calls with background reconnect",
        "Apple HealthKit & Google Health Connect wearable sensors",
        "HL7 / FHIR compliant clinical patient data exchange"
      ]
    },
    {
      id: "logistics",
      title: "On-Demand & Geolocation",
      category: "Logistics & Dispatch",
      desc: "Real-time background GPS tracking, dynamic geofencing, route caching, driver dispatch feeds, and live order status delivery streams.",
      badge: "Sub-10m GPS Precision",
      icon: "📍",
      stats: "12ms Location Sync",
      bullets: [
        "Battery-efficient background GPS location tracking",
        "Offline vector map tile rendering & dynamic rerouting",
        "Live driver telemetry & WebSocket dispatch coordination"
      ]
    },
    {
      id: "ecommerce",
      title: "E-Commerce & Retail",
      category: "Mobile Commerce",
      desc: "Apple Pay & Google Pay 1-tap checkout, personalized AI product recommendations, AR camera try-on, and cart abandonment push triggers.",
      badge: "1-Tap Checkout",
      icon: "🛍️",
      stats: "+34% Cart Conversion",
      bullets: [
        "Native Apple Pay & Google Pay frictionless checkout",
        "Instant search with sub-50ms fuzzy product filtering",
        "ARKit / ARCore 3D spatial product preview"
      ]
    },
    {
      id: "enterprise",
      title: "Enterprise & Field Operations",
      category: "Enterprise Mobility",
      desc: "Offline-first WatermelonDB database, barcode & RFID hardware scanning, offline PDF signature capture, and role-based access management.",
      badge: "100% Offline-Ready",
      icon: "📦",
      stats: "Zero Data Loss Guarantee",
      bullets: [
        "Local SQLite / WatermelonDB with automatic queue reconciliation",
        "Hardware camera barcode & QR scanner integration",
        "Enterprise SAML SSO via Okta, Azure AD & Google Workspace"
      ]
    },
    {
      id: "social",
      title: "Social & Media Streaming",
      category: "Social & Streaming",
      desc: "Sub-second HLS live video streaming, WebRTC audio spaces, real-time rich chat feeds, stories, and background video transcoding.",
      badge: "60FPS Media Pipeline",
      icon: "🎬",
      stats: "< 400ms Glass-to-Glass",
      bullets: [
        "Hardware-accelerated video player with adaptive bitrate HLS",
        "Real-time WebSocket chat with typing indicators & reactions",
        "Multi-participant audio spaces with spatial voice audio"
      ]
    }
  ];

  const archLayers = [
    {
      num: "01",
      title: "Presentation UI & Gestures",
      desc: "SwiftUI, Jetpack Compose, and React Native Fabric components composited with hardware GPU acceleration for silky smooth 60/120 FPS gestures.",
      icon: "✨",
      tag: "GPU Composited"
    },
    {
      num: "02",
      title: "Local Embedded Storage",
      desc: "Embedded SQLite, WatermelonDB, and encrypted MMKV storage providing instantaneous sub-millisecond local reads on cold app boot.",
      icon: "💾",
      tag: "Sub-10ms Reads"
    },
    {
      num: "03",
      title: "Resilient Sync & Queue Engine",
      desc: "Optimistic UI rendering combined with conflict-free replicated data types (CRDTs) and automatic exponential-backoff background retry queues.",
      icon: "🔄",
      tag: "Conflict-Free Sync"
    },
    {
      num: "04",
      title: "Background Multi-Threaded Workers",
      desc: "Silent background push notification listeners, location geofencing telemetry, and cryptographic Secure Enclave token operations.",
      icon: "⚙️",
      tag: "Zero UI Blocking"
    },
    {
      num: "05",
      title: "Automated CI/CD & OTA Updates",
      desc: "Fastlane automated build pipelines, TestFlight/Play Store beta tracks, and Expo EAS Over-The-Air updates for instant production hotfixes.",
      icon: "🚀",
      tag: "Instant OTA Releases"
    },
    {
      num: "06",
      title: "Real-Time Telemetry & SLA",
      desc: "Sentry crash logging, Datadog mobile telemetry, ANR (Application Not Responding) zero-tolerance monitoring, and 99.9% crash-free SLA.",
      icon: "📈",
      tag: "99.9% Crash-Free"
    }
  ];

  const deliverySteps = [
    {
      num: "01",
      title: "UX Wireframing & Design System",
      desc: "We construct interactive high-fidelity Figma prototypes, iOS Human Interface & Material Design token libraries, and user gesture flows.",
      tag: "Figma Prototype",
      icon: "🎨"
    },
    {
      num: "02",
      title: "Sprint Engineering & Offline Data Model",
      desc: "Our senior mobile pod develops modular components, implements the local SQLite/WatermelonDB schema, and connects type-safe backend APIs.",
      tag: "Agile Sprints",
      icon: "💻"
    },
    {
      num: "03",
      title: "Automated Device Matrix Testing",
      desc: "We test your app across 50+ real physical iOS and Android devices, verifying cold starts, memory leaks, battery drain, and offline sync resilience.",
      tag: "QA Automation",
      icon: "🧪"
    },
    {
      num: "04",
      title: "Fast-Track Store Approval & OTA Setup",
      desc: "We handle Apple Developer & Google Play Console submissions, privacy labels, store metadata, screenshots, and configure instant OTA release pipelines.",
      tag: "Store Launch",
      icon: "🚀"
    }
  ];

  const faqs = [
    {
      q: "Native, hybrid or cross-platform — which is best for our mobile app?",
      a: "For 85% of mobile products, React Native or Flutter offers 90%+ code reuse across iOS and Android while delivering 60/120 FPS native performance. For apps requiring deep OS-level APIs, custom hardware integration, or complex AR/graphic pipelines, we build pure native Swift (iOS) and Kotlin (Android)."
    },
    {
      q: "Can the mobile app work seamlessly offline without internet?",
      a: "Yes — we architect offline-first mobile apps using local SQLite and WatermelonDB storage paired with optimistic UI updates and background sync queues. Users can perform actions without connectivity, and all data syncs reliably upon reconnect with conflict resolution."
    },
    {
      q: "Do you handle the entire App Store and Play Store launch process?",
      a: "Yes — we manage end-to-end store publishing, including Apple Developer / Google Play Console setup, App Store Optimization (ASO), privacy policy disclosures, screenshots, TestFlight/internal track beta management, and store review approval."
    },
    {
      q: "How do you deliver rapid updates without waiting for app store reviews?",
      a: "We configure Over-The-Air (OTA) update pipelines using Expo EAS Updates and CodePush. This allows you to ship critical bug fixes, UI updates, and feature tweaks instantly to users in production without waiting days for App Store review cycles."
    },
    {
      q: "What security measures do you implement for mobile data?",
      a: "We implement hardware-backed biometric authentication (FaceID, TouchID, Android BiometricPrompt), Secure Enclave / Keystore cryptographic token storage, SSL certificate pinning, obfuscated builds, and tamper detection."
    },
    {
      q: "Who owns the code and intellectual property after handover?",
      a: "You retain 100% full ownership of all source code, design assets (Figma), CI/CD pipelines, documentation, and app store deployment configurations with zero vendor lock-in."
    }
  ];

  return (
    <div className="mobile-page-root">
      {/* ── 1. HERO SECTION WITH DUAL ISOMETRIC 3D SCREENS ── */}
      <section className="mobile-hero-section">
        <div className="mobile-hero-container">
          {/* Left Content */}
          <div className="mobile-hero-left">
            <div className="mobile-badge-pill">
              <span className="mobile-badge-dot" />
              5-STAR RATED NATIVE &amp; CROSS-PLATFORM APPS
            </div>

            <h1 className="mobile-hero-title">
              Engineering High-Performance <span className="mobile-highlight-text">Mobile Apps</span>
            </h1>

            <p className="mobile-hero-subtitle">
              We craft sub-second mobile applications with 60/120 FPS fluid motion, offline-first synchronization architecture, and rapid App Store &amp; Google Play approval.
            </p>

            <div className="mobile-hero-actions">
              <Link href="/contact" className="mobile-btn-primary">
                <span>Start Mobile Project</span>
                <span className="mobile-btn-arrow">→</span>
              </Link>
              <a href="#solutions" className="mobile-btn-ghost">
                Explore Mobile Stack
              </a>
            </div>

            {/* Quick Hero Key Stats */}
            <div className="mobile-hero-stats">
              <div className="mobile-hstat-item">
                <span className="mobile-hstat-num">4.9★</span>
                <span className="mobile-hstat-lbl">Store Rating Avg</span>
              </div>
              <div className="mobile-hstat-div" />
              <div className="mobile-hstat-item">
                <span className="mobile-hstat-num" style={{ color: "#059669" }}>60/120 FPS</span>
                <span className="mobile-hstat-lbl">Fluid Gestures</span>
              </div>
              <div className="mobile-hstat-div" />
              <div className="mobile-hstat-item">
                <span className="mobile-hstat-num" style={{ color: "#10b981" }}>100%</span>
                <span className="mobile-hstat-lbl">Offline Sync</span>
              </div>
              <div className="mobile-hstat-div" />
              <div className="mobile-hstat-item">
                <span className="mobile-hstat-num" style={{ color: "#0f172a" }}>&lt; 1.2s</span>
                <span className="mobile-hstat-lbl">Cold Start Time</span>
              </div>
            </div>
          </div>

          {/* Right Dual 3D Isometric Screen Mockup */}
          <div className="mobile-hero-right">
            <div className="mobile-iso-glow" />

            {/* Top Screen (Active Real-Time Telemetry Dashboard) */}
            <div className="mobile-iso-screen top-screen">
              <div className="mobile-sim-notch" />
              
              <div className="mobile-sim-header-card">
                <span className="mobile-sim-tag">REAL-TIME TELEMETRY</span>
                <div className="mobile-sim-status-row">
                  <span className="mobile-sim-status-text">99.9% Sync Active</span>
                  <span className="mobile-sim-pulse-dot" />
                </div>
                <div className="mobile-sim-bar-bg">
                  <div className="mobile-sim-bar-fill loader-anim" />
                </div>
              </div>

              <div className="mobile-sim-list">
                <div className="mobile-sim-item">
                  <div className="mobile-sim-item-top">
                    <span>Local SQLite Database</span>
                    <span style={{ color: "#34d399" }}>Synchronized</span>
                  </div>
                  <div className="mobile-sim-mini-bar"><div style={{ width: "100%", background: "#10b981", height: "100%" }} /></div>
                </div>

                <div className="mobile-sim-item">
                  <div className="mobile-sim-item-top">
                    <span>Background Sync Queue</span>
                    <span style={{ color: "#10b981" }}>0 Latency</span>
                  </div>
                  <div className="mobile-sim-mini-bar"><div style={{ width: "85%", background: "#10b981", height: "100%" }} /></div>
                </div>

                <div className="mobile-sim-item">
                  <div className="mobile-sim-item-top">
                    <span>UI Frame Render</span>
                    <span style={{ color: "#34d399" }}>60 FPS Solid</span>
                  </div>
                  <div className="mobile-sim-mini-bar"><div style={{ width: "98%", background: "#10b981", height: "100%" }} /></div>
                </div>
              </div>
            </div>

            {/* Bottom Screen (QA Build & Validation Queue) */}
            <div className="mobile-iso-screen bottom-screen">
              <div className="mobile-sim-dot-bar" />
              <div className="mobile-sim-light-card">
                <div className="mobile-sim-item-top">
                  <span>QA TEST RUNNER</span>
                  <span>Just now</span>
                </div>
                <p className="mobile-sim-card-msg">✓ 148 Unit &amp; E2E tests passed cleanly.</p>
              </div>

              <div className="mobile-sim-light-card">
                <div className="mobile-sim-item-top">
                  <span>BUILD PIPELINE</span>
                  <span>2m ago</span>
                </div>
                <p className="mobile-sim-card-msg" style={{ color: "#059669" }}>✓ Compiled Fastlane iOS &amp; Android binary.</p>
              </div>

              <div className="mobile-sim-light-card">
                <div className="mobile-sim-item-top">
                  <span>STORE ASSETS</span>
                  <span>Validated</span>
                </div>
                <p className="mobile-sim-card-msg">App Store checklist 100% compliant.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. INTERACTIVE PLATFORM & ENGINE SHOWCASE ── */}
      <section className="mobile-platform-section" id="platforms">
        <div className="mobile-platform-container">
          <div className="mobile-sec-header">
            <div className="mobile-badge-pill" style={{ background: "#ecfdf5", color: "#059669", borderColor: "#a7f3d0" }}>
              <span className="mobile-badge-dot" style={{ background: "#059669" }} />
              CORE FRAMEWORK STACKS
            </div>
            <h2 className="mobile-sec-title">Multi-Platform &amp; Native Engineering Stacks</h2>
            <p className="mobile-sec-desc">
              We select the optimal framework and rendering architecture for your product, balancing rapid cross-platform deployment with uncompromised 60/120 FPS performance.
            </p>
          </div>

          {/* Platform Switcher Tabs */}
          <div className="mobile-platform-tabs">
            {Object.keys(platforms).map((key) => {
              const p = platforms[key];
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActivePlatform(key)}
                  className={`mobile-platform-tab-btn ${activePlatform === key ? "active" : ""}`}
                >
                  <span className="mobile-ptab-icon">{p.icon}</span>
                  <span>{p.name}</span>
                </button>
              );
            })}
          </div>

          {/* Platform Detail & Code Viewer Card */}
          <div className="mobile-platform-canvas">
            <div className="mobile-platform-left">
              <div className="mobile-ptag-row">
                <span className="mobile-pbadge">{currentPlatform.badge}</span>
                <span className="mobile-pcode-reuse">{currentPlatform.codeReuse}</span>
              </div>

              <h3 className="mobile-pname">{currentPlatform.name}</h3>
              <p className="mobile-ptagline">{currentPlatform.tagline}</p>

              <div className="mobile-pmetrics-grid">
                <div className="mobile-pmetric-box">
                  <span className="mobile-pm-k">Rendering Engine</span>
                  <span className="mobile-pm-v">{currentPlatform.renderingEngine}</span>
                </div>
                <div className="mobile-pmetric-box">
                  <span className="mobile-pm-k">Runtime Target</span>
                  <span className="mobile-pm-v">{currentPlatform.runtime}</span>
                </div>
                <div className="mobile-pmetric-box">
                  <span className="mobile-pm-k">Cold Start Time</span>
                  <span className="mobile-pm-v" style={{ color: "#059669" }}>{currentPlatform.coldStart}</span>
                </div>
                <div className="mobile-pmetric-box">
                  <span className="mobile-pm-k">Framework Version</span>
                  <span className="mobile-pm-v">{currentPlatform.framework}</span>
                </div>
              </div>

              <div className="mobile-pbest-for">
                <span className="mobile-pbest-title">Optimal Use Case:</span>
                <p className="mobile-pbest-desc">{currentPlatform.bestFor}</p>
              </div>

              <div className="mobile-paction-row">
                <Link href="/contact" className="mobile-btn-primary">
                  <span>Build with {currentPlatform.name}</span>
                  <span className="mobile-btn-arrow">→</span>
                </Link>
              </div>
            </div>

            {/* Code Snippet Box */}
            <div className="mobile-platform-right">
              <div className="mobile-pcode-top">
                <div className="mobile-pcode-dots">
                  <span style={{ background: "#ef4444" }} />
                  <span style={{ background: "#f59e0b" }} />
                  <span style={{ background: "#10b981" }} />
                </div>
                <span className="mobile-pcode-title">{currentPlatform.framework} Architecture</span>
              </div>
              <pre className="mobile-pcode-pre">
                <code>{currentPlatform.code}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. INDUSTRY MOBILE SOLUTIONS (6 CARDS) ── */}
      <section className="mobile-solutions-section" id="solutions">
        <div className="mobile-solutions-container">
          <div className="mobile-sec-header">
            <div className="mobile-badge-pill" style={{ background: "#eff6ff", color: "#2563eb", borderColor: "#bfdbfe" }}>
              <span className="mobile-badge-dot" style={{ background: "#2563eb" }} />
              INDUSTRY SOLUTIONS
            </div>
            <h2 className="mobile-sec-title">Tailored Mobile Applications by Industry</h2>
            <p className="mobile-sec-desc">
              Custom mobile applications engineered with domain-specific compliance, biometric security, and sub-second real-time responsiveness.
            </p>
          </div>

          <div className="mobile-solutions-grid">
            {industrySolutions.map((item, i) => (
              <div key={i} className="mobile-sol-card">
                <div className="mobile-sol-top">
                  <div className="mobile-sol-icon-box">{item.icon}</div>
                  <span className="mobile-sol-badge">{item.badge}</span>
                </div>

                <h3 className="mobile-sol-title">{item.title}</h3>
                <p className="mobile-sol-desc">{item.desc}</p>

                <div className="mobile-sol-stat-row">
                  <span className="mobile-sol-stat-badge">⚡ {item.stats}</span>
                </div>

                <div className="mobile-sol-bullets">
                  {item.bullets.map((b, bi) => (
                    <div key={bi} className="mobile-sol-bullet-item">
                      <span className="mobile-sol-check">✓</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. LAYERED MOBILE STACK ARCHITECTURE ── */}
      <section className="mobile-arch-section">
        <div className="mobile-arch-container">
          <div className="mobile-sec-header">
            <div className="mobile-badge-pill">
              <span className="mobile-badge-dot" />
              LAYERED ARCHITECTURE
            </div>
            <h2 className="mobile-sec-title">How We Layer Your Mobile Stack</h2>
            <p className="mobile-sec-desc">
              A high-performance layered pipeline from GPU-accelerated interface to local SQLite cache and cloud edge orchestration.
            </p>
          </div>

          <div className="mobile-arch-grid">
            {archLayers.map((layer, i) => (
              <div key={i} className="mobile-arch-card">
                <div className="mobile-arch-top">
                  <span className="mobile-arch-num">{layer.num}</span>
                  <span className="mobile-arch-icon">{layer.icon}</span>
                </div>
                <span className="mobile-arch-tag">{layer.tag}</span>
                <h3 className="mobile-arch-title">{layer.title}</h3>
                <p className="mobile-arch-desc">{layer.desc}</p>
                <div className="mobile-arch-indicator" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PERFORMANCE & DEVICE SLA BENCHMARK SHOWCASE ── */}
      <section className="mobile-perf-section">
        <div className="mobile-perf-container">
          <div className="mobile-perf-grid">
            {/* Left Column: Heading + Circular Gauge */}
            <div className="mobile-perf-left">
              <div className="mobile-badge-pill" style={{ background: "#ecfdf5", color: "#059669", borderColor: "#a7f3d0" }}>
                <span className="mobile-badge-dot" style={{ background: "#059669" }} />
                PERFORMANCE SLA GUARANTEE
              </div>
              <h2 className="mobile-sec-title" style={{ textAlign: "left", margin: "16px 0" }}>
                Engineered for 99.9% Crash-Free Production SLA
              </h2>
              <p className="mobile-sec-desc" style={{ textAlign: "left", margin: "0 0 32px 0" }}>
                We design mobile applications that pass Apple App Store and Google Play checklists instantly, eliminate cold-start lag, and maintain 60/120 FPS fluid motion under heavy workloads.
              </p>

              <div className="mobile-gauge-card">
                <svg width="84" height="84" viewBox="0 0 36 36" className="mobile-gauge-svg">
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                  <circle
                    className="mobile-gauge-circle"
                    cx="18"
                    cy="18"
                    r="15.915"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeDasharray="99.9 100"
                    strokeDashoffset="100"
                    strokeLinecap="round"
                    style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
                  />
                  <text x="18" y="20.5" fontFamily="monospace" fontSize="6.8" fontWeight="bold" textAnchor="middle" fill="#0f172a">
                    99.9%
                  </text>
                </svg>
                <div>
                  <div className="mobile-gauge-title">Crash-Free Users SLA</div>
                  <div className="mobile-gauge-sub">Production Performance Benchmark</div>
                </div>
              </div>
            </div>

            {/* Right Column: 4 Progress Metrics */}
            <div className="mobile-perf-right">
              <div className="mobile-metric-row">
                <div className="mobile-metric-header">
                  <span className="mobile-metric-name">UI Rendering Smoothness</span>
                  <span className="mobile-metric-val" style={{ color: "#059669" }}>60 / 120 FPS</span>
                </div>
                <div className="mobile-metric-bar-bg">
                  <div className="mobile-metric-bar-fill fill-1" />
                </div>
              </div>

              <div className="mobile-metric-row">
                <div className="mobile-metric-header">
                  <span className="mobile-metric-name">App Cold Start Time</span>
                  <span className="mobile-metric-val" style={{ color: "#0f172a" }}>&lt; 1.2s</span>
                </div>
                <div className="mobile-metric-bar-bg">
                  <div className="mobile-metric-bar-fill fill-2" />
                </div>
              </div>

              <div className="mobile-metric-row">
                <div className="mobile-metric-header">
                  <span className="mobile-metric-name">Local SQLite / WatermelonDB Read Latency</span>
                  <span className="mobile-metric-val" style={{ color: "#0f172a" }}>12ms</span>
                </div>
                <div className="mobile-metric-bar-bg">
                  <div className="mobile-metric-bar-fill fill-3" />
                </div>
              </div>

              <div className="mobile-metric-row">
                <div className="mobile-metric-header">
                  <span className="mobile-metric-name">Memory Heap Overhead Savings</span>
                  <span className="mobile-metric-val" style={{ color: "#059669" }}>-40% Heap Size</span>
                </div>
                <div className="mobile-metric-bar-bg">
                  <div className="mobile-metric-bar-fill fill-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. DELIVERY LIFECYCLE (4 PHASES) ── */}
      <section className="mobile-process-section">
        <div className="mobile-process-container">
          <div className="mobile-sec-header">
            <div className="mobile-badge-pill">
              <span className="mobile-badge-dot" />
              DELIVERY LIFECYCLE
            </div>
            <h2 className="mobile-sec-title">4-Stage Mobile App Development Process</h2>
            <p className="mobile-sec-desc">
              From interactive Figma wireframes to TestFlight beta testing and fast-track App Store approvals, our pods deliver production-grade mobile builds.
            </p>
          </div>

          <div className="mobile-process-grid">
            {deliverySteps.map((step, i) => (
              <div key={i} className="mobile-process-card">
                <div className="mobile-proc-num-row">
                  <span className="mobile-proc-num">{step.num}</span>
                  <span className="mobile-proc-icon">{step.icon}</span>
                </div>
                <span className="mobile-proc-tag">{step.tag}</span>
                <h3 className="mobile-proc-title">{step.title}</h3>
                <p className="mobile-proc-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FAQ SECTION (WITH STICKY SIDEBAR) ── */}
      <section className="mobile-faq-section">
        <div className="mobile-faq-container">
          <div className="mobile-sec-header">
            <div className="mobile-badge-pill">
              <span className="mobile-badge-dot" />
              MOBILE ENGINEERING FAQS
            </div>
            <h2 className="mobile-sec-title">Frequently Asked Questions</h2>
            <p className="mobile-sec-desc">Everything you need to know about our native and cross-platform mobile engineering process.</p>
          </div>

          <div className="mobile-faq-layout">
            {/* Left Sticky CTA Box */}
            <div className="mobile-faq-sidebar">
              <h3>Have a Mobile App in Mind?</h3>
              <p>Speak directly with our principal mobile engineer to receive an architecture roadmap, framework recommendation, and store approval plan.</p>
              <Link href="/contact" className="mobile-faq-contact-btn">
                Talk to a Mobile Architect →
              </Link>
              <div className="mobile-faq-stat-box">
                <div className="mobile-faq-stat-num">4.9★</div>
                <div className="mobile-faq-stat-lbl">Average Store Rating Across Client Apps</div>
              </div>
            </div>

            {/* Right Accordion */}
            <div className="mobile-faq-accordion">
              {faqs.map((f, i) => (
                <details key={i} className="mobile-faq-item">
                  <summary>
                    <span className="mobile-faq-idx">{String(i + 1).padStart(2, "0")}</span>
                    <span className="mobile-faq-q">{f.q}</span>
                    <span className="mobile-faq-toggle">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9l6 6 6-6" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </summary>
                  <div className="mobile-faq-a">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. HIGH-CONVERTING BOTTOM CTA BANNER ── */}
      <section className="mobile-cta-banner-section">
        <div className="mobile-cta-banner-card">
          <div className="mobile-cta-glow-orb" />
          <div className="mobile-cta-inner">
            <div className="mobile-badge-pill" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", borderColor: "rgba(255,255,255,0.25)" }}>
              <span className="mobile-badge-dot" style={{ background: "#34d399" }} />
              READY TO LAUNCH
            </div>
            <h2 className="mobile-cta-title">Ready to Build Your Next 5-Star Mobile App?</h2>
            <p className="mobile-cta-desc">
              Receive a comprehensive mobile architecture plan, offline database model, and fixed App Store roadmap within 48 hours.
            </p>
            <div className="mobile-cta-actions">
              <Link href="/contact" className="mobile-cta-btn-primary">
                Book Free Mobile Audit →
              </Link>
              <Link href="/services" className="mobile-cta-btn-ghost">
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── EMBEDDED SCOPED STYLING ── */}
      <style jsx>{`
        .mobile-page-root {
          font-family: -apple-system, BlinkMacSystemFont, "Plus Jakarta Sans", "Inter", sans-serif;
          color: #0f172a;
          background: #ffffff;
          overflow-x: hidden;
          width: 100%;
        }

        /* Generic Header Elements */
        .mobile-sec-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .mobile-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f0fdf4;
          border: 1.5px solid #a7f3d0;
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 11.5px;
          font-weight: 800;
          color: #059669;
          letter-spacing: 1.2px;
          margin-bottom: 16px;
          box-shadow: 0 4px 12px rgba(5, 150, 105, 0.06);
        }
        .mobile-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #059669;
          box-shadow: 0 0 6px rgba(5, 150, 105, 0.8);
        }
        .mobile-sec-title {
          font-size: clamp(28px, 3.8vw, 44px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.15;
          letter-spacing: -1.2px;
          margin: 0 0 16px;
        }
        .mobile-sec-desc {
          font-size: 15.5px;
          color: #64748b;
          line-height: 1.65;
          margin: 0;
        }

        /* Hero Section */
        .mobile-hero-section {
          background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #ecfdf5 100%);
          padding: 135px 24px 80px 24px;
          border-bottom: 1px solid #e2e8f0;
          position: relative;
          overflow: hidden;
        }
        .mobile-hero-container {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 520px;
          gap: 40px;
          align-items: center;
        }
        .mobile-hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          z-index: 2;
        }
        .mobile-hero-title {
          font-size: clamp(34px, 4.2vw, 54px);
          font-weight: 900;
          color: #0f172a;
          line-height: 1.12;
          letter-spacing: -1.5px;
          margin: 0 0 20px;
        }
        .mobile-highlight-text {
          background: linear-gradient(135deg, #059669, #10b981);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .mobile-hero-subtitle {
          font-size: 16px;
          color: #64748b;
          line-height: 1.65;
          margin: 0 0 32px;
          max-width: 520px;
          font-weight: 400;
        }
        .mobile-hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }
        .mobile-btn-primary {
          background: #0f172a;
          color: #ffffff !important;
          font-weight: 700;
          border-radius: 100px;
          padding: 14px 28px;
          font-size: 15px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.18);
          transition: all 0.2s ease;
        }
        .mobile-btn-primary:hover {
          background: #1e293b;
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(15, 23, 42, 0.25);
        }
        .mobile-btn-arrow {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 1.5px solid rgba(255, 255, 255, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
        }
        .mobile-btn-ghost {
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          color: #0f172a !important;
          font-weight: 700;
          border-radius: 100px;
          padding: 14px 26px;
          font-size: 15px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: all 0.2s ease;
        }
        .mobile-btn-ghost:hover {
          background: #f8fafc;
          border-color: #94a3b8;
          transform: translateY(-2px);
        }

        /* Hero Stats Bar */
        .mobile-hero-stats {
          display: flex;
          gap: 24px;
          padding-top: 24px;
          border-top: 1px solid #e2e8f0;
          flex-wrap: wrap;
        }
        .mobile-hstat-item {
          display: flex;
          flex-direction: column;
        }
        .mobile-hstat-num {
          font-size: 24px;
          font-weight: 900;
          color: #0f172a;
          line-height: 1.1;
        }
        .mobile-hstat-lbl {
          font-size: 11.5px;
          font-weight: 600;
          color: #64748b;
          margin-top: 4px;
        }
        .mobile-hstat-div {
          width: 1px;
          height: 36px;
          background: #e2e8f0;
        }

        /* Isometric 3D Screens */
        .mobile-hero-right {
          position: relative;
          height: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
        }
        .mobile-iso-glow {
          position: absolute;
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 65%);
          border-radius: 50%;
          pointer-events: none;
        }
        .mobile-iso-screen {
          width: 250px;
          height: 380px;
          border-radius: 28px;
          padding: 16px;
          position: absolute;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          text-align: left;
        }
        .top-screen {
          background: #0f172a;
          border: 2px solid rgba(255, 255, 255, 0.12);
          box-shadow: -15px 25px 50px rgba(15, 23, 42, 0.25);
          color: #ffffff;
          z-index: 5;
          transform: rotateY(-18deg) rotateX(16deg) translateZ(30px) translateX(20px);
        }
        .bottom-screen {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          box-shadow: -5px 10px 30px rgba(0, 0, 0, 0.06);
          color: #0f172a;
          z-index: 3;
          transform: rotateY(-18deg) rotateX(16deg) translateZ(-40px) translateX(-90px) translateY(30px);
          opacity: 0.85;
        }
        .mobile-hero-right:hover .top-screen {
          transform: rotateY(-12deg) rotateX(12deg) translateZ(50px) translateX(25px) translateY(-10px);
          box-shadow: -25px 35px 65px rgba(15, 23, 42, 0.35);
        }
        .mobile-hero-right:hover .bottom-screen {
          transform: rotateY(-22deg) rotateX(20deg) translateZ(-60px) translateX(-105px) translateY(45px);
          opacity: 0.95;
        }
        .mobile-sim-notch {
          width: 60px;
          height: 10px;
          background: #1e293b;
          border-radius: 100px;
          margin: 0 auto 16px;
        }
        .mobile-sim-header-card {
          background: linear-gradient(135deg, #059669, #10b981);
          border-radius: 16px;
          padding: 12px 14px;
          margin-bottom: 14px;
        }
        .mobile-sim-tag {
          font-size: 8px;
          font-weight: 900;
          color: #a7f3d0;
          letter-spacing: 0.5px;
        }
        .mobile-sim-status-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 4px 0 8px;
        }
        .mobile-sim-status-text {
          font-size: 15px;
          font-weight: 900;
          color: #ffffff;
        }
        .mobile-sim-pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 8px #34d399;
          animation: pulseSync 1.5s infinite ease-in-out;
        }
        @keyframes pulseSync {
          0%, 100% { opacity: 0.4; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .mobile-sim-bar-bg {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          overflow: hidden;
          position: relative;
        }
        .mobile-sim-bar-fill {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 45%;
          background: #ffffff;
          border-radius: 2px;
        }
        .loader-anim {
          animation: continuousLoad 1.8s infinite linear;
        }
        @keyframes continuousLoad {
          0% { left: -45%; }
          100% { left: 100%; }
        }
        .mobile-sim-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .mobile-sim-item {
          background: #1e293b;
          border-radius: 12px;
          padding: 8px 12px;
        }
        .mobile-sim-item-top {
          display: flex;
          justify-content: space-between;
          font-size: 9.5px;
          color: #cbd5e1;
          margin-bottom: 4px;
          font-weight: 600;
        }
        .mobile-sim-mini-bar {
          width: 100%;
          height: 2px;
          background: #111827;
          border-radius: 1px;
          overflow: hidden;
        }
        .mobile-sim-dot-bar {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #cbd5e1;
          margin: 0 auto 16px;
        }
        .mobile-sim-light-card {
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 10px 12px;
          background: #f8fafc;
          margin-bottom: 10px;
        }
        .mobile-sim-card-msg {
          font-size: 10px;
          font-weight: 800;
          color: #0f172a;
          margin: 4px 0 0;
        }

        /* Platform Section */
        .mobile-platform-section {
          padding: 80px 24px;
          background: #ffffff;
        }
        .mobile-platform-container {
          max-width: 1240px;
          margin: 0 auto;
        }
        .mobile-platform-tabs {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .mobile-platform-tab-btn {
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          padding: 12px 24px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 700;
          color: #475569;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.25s ease;
        }
        .mobile-platform-tab-btn:hover {
          color: #0f172a;
          border-color: #cbd5e1;
          background: #ffffff;
          transform: translateY(-2px);
        }
        .mobile-platform-tab-btn.active {
          background: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.18);
        }
        .mobile-ptab-icon {
          font-size: 16px;
        }
        .mobile-platform-canvas {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 32px;
          padding: 44px;
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.04);
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 40px;
          align-items: center;
        }
        .mobile-platform-left {
          display: flex;
          flex-direction: column;
        }
        .mobile-ptag-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }
        .mobile-pbadge {
          background: #f0fdf4;
          border: 1px solid #a7f3d0;
          color: #059669;
          font-size: 11px;
          font-weight: 800;
          padding: 3px 10px;
          border-radius: 100px;
        }
        .mobile-pcode-reuse {
          font-size: 11px;
          font-weight: 800;
          color: #2563eb;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          padding: 3px 10px;
          border-radius: 100px;
        }
        .mobile-pname {
          font-size: clamp(26px, 3vw, 36px);
          font-weight: 900;
          color: #0f172a;
          line-height: 1.15;
          margin: 0 0 12px;
          letter-spacing: -0.8px;
        }
        .mobile-ptagline {
          font-size: 14.5px;
          color: #64748b;
          line-height: 1.65;
          margin: 0 0 24px;
        }
        .mobile-pmetrics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 24px;
        }
        .mobile-pmetric-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 12px 14px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .mobile-pm-k {
          font-size: 10px;
          color: #94a3b8;
          font-weight: 700;
          text-transform: uppercase;
        }
        .mobile-pm-v {
          font-size: 12.5px;
          font-weight: 800;
          color: #0f172a;
        }
        .mobile-pbest-for {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 14px;
          padding: 14px 16px;
          margin-bottom: 28px;
        }
        .mobile-pbest-title {
          font-size: 11px;
          font-weight: 800;
          color: #059669;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: block;
          margin-bottom: 4px;
        }
        .mobile-pbest-desc {
          font-size: 13px;
          color: #334155;
          line-height: 1.5;
          margin: 0;
          font-weight: 500;
        }
        .mobile-platform-right {
          background: #0f172a;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #1e293b;
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.2);
        }
        .mobile-pcode-top {
          background: #1e293b;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .mobile-pcode-dots {
          display: flex;
          gap: 6px;
        }
        .mobile-pcode-dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .mobile-pcode-title {
          font-size: 11.5px;
          font-weight: 700;
          color: #94a3b8;
          font-family: monospace;
        }
        .mobile-pcode-pre {
          padding: 20px;
          margin: 0;
          overflow-x: auto;
          font-family: "JetBrains Mono", "Fira Code", monospace;
          font-size: 12.5px;
          line-height: 1.65;
          color: #e2e8f0;
          max-height: 380px;
        }

        /* Solutions Grid */
        .mobile-solutions-section {
          padding: 96px 24px;
          background: #f8fafc;
        }
        .mobile-solutions-container {
          max-width: 1240px;
          margin: 0 auto;
        }
        .mobile-solutions-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .mobile-sol-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 24px;
          padding: 32px 28px;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03);
          display: flex;
          flex-direction: column;
          transition: all 0.25s ease;
        }
        .mobile-sol-card:hover {
          transform: translateY(-6px);
          border-color: #cbd5e1;
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
        }
        .mobile-sol-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }
        .mobile-sol-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
        }
        .mobile-sol-badge {
          font-size: 11px;
          font-weight: 800;
          color: #059669;
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          padding: 3px 10px;
          border-radius: 100px;
        }
        .mobile-sol-title {
          font-size: 18px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 10px;
          letter-spacing: -0.4px;
        }
        .mobile-sol-desc {
          font-size: 13.5px;
          color: #64748b;
          line-height: 1.6;
          margin: 0 0 18px;
          flex-grow: 1;
        }
        .mobile-sol-stat-row {
          margin-bottom: 18px;
        }
        .mobile-sol-stat-badge {
          font-size: 11px;
          font-weight: 800;
          color: #0f172a;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          padding: 4px 10px;
          border-radius: 8px;
        }
        .mobile-sol-bullets {
          border-top: 1px dashed #e2e8f0;
          padding-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .mobile-sol-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12px;
          color: #334155;
          font-weight: 600;
          line-height: 1.45;
        }
        .mobile-sol-check {
          color: #059669;
          font-weight: 900;
        }

        /* Architecture Section */
        .mobile-arch-section {
          padding: 96px 24px;
          background: #ffffff;
          border-top: 1px solid #f1f5f9;
        }
        .mobile-arch-container {
          max-width: 1240px;
          margin: 0 auto;
        }
        .mobile-arch-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .mobile-arch-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 30px 24px;
          position: relative;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03);
          transition: all 0.25s ease;
        }
        .mobile-arch-card:hover {
          transform: translateY(-5px);
          border-color: #059669;
          box-shadow: 0 16px 36px rgba(5, 150, 105, 0.09);
        }
        .mobile-arch-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }
        .mobile-arch-num {
          font-size: 26px;
          font-weight: 900;
          color: #059669;
          font-family: monospace;
          line-height: 1;
        }
        .mobile-arch-icon {
          font-size: 22px;
        }
        .mobile-arch-tag {
          font-size: 10.5px;
          font-weight: 800;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          display: block;
          margin-bottom: 6px;
        }
        .mobile-arch-title {
          font-size: 17px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 10px;
        }
        .mobile-arch-desc {
          font-size: 13px;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }
        .mobile-arch-indicator {
          position: absolute;
          bottom: 14px;
          right: 18px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
        }

        /* Performance Section */
        .mobile-perf-section {
          padding: 96px 24px;
          background: #f8fafc;
        }
        .mobile-perf-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .mobile-perf-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .mobile-gauge-card {
          display: flex;
          align-items: center;
          gap: 20px;
          background: #ffffff;
          padding: 22px 24px;
          border-radius: 20px;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.03);
        }
        @keyframes drawGaugeCircle {
          0%, 100% { stroke-dashoffset: 100; }
          70%, 90% { stroke-dashoffset: 0; }
        }
        .mobile-gauge-circle {
          animation: drawGaugeCircle 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .mobile-gauge-title {
          font-size: 16px;
          font-weight: 800;
          color: #0f172a;
        }
        .mobile-gauge-sub {
          font-size: 12.5px;
          color: #64748b;
          margin-top: 2px;
        }
        .mobile-perf-right {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .mobile-metric-row {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 18px 20px;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.02);
        }
        .mobile-metric-header {
          display: flex;
          justify-content: space-between;
          font-size: 13.5px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 10px;
        }
        .mobile-metric-bar-bg {
          width: 100%;
          height: 6px;
          background: #f1f5f9;
          border-radius: 3px;
          overflow: hidden;
        }
        .mobile-metric-bar-fill {
          height: 100%;
          border-radius: 3px;
        }
        .fill-1 {
          width: 100%;
          background: linear-gradient(90deg, #059669, #10b981);
        }
        .fill-2 {
          width: 88%;
          background: linear-gradient(90deg, #0f172a, #334155);
        }
        .fill-3 {
          width: 95%;
          background: linear-gradient(90deg, #2563eb, #38bdf8);
        }
        .fill-4 {
          width: 90%;
          background: linear-gradient(90deg, #059669, #10b981);
        }

        /* Delivery Process */
        .mobile-process-section {
          padding: 96px 24px;
          background: #ffffff;
        }
        .mobile-process-container {
          max-width: 1240px;
          margin: 0 auto;
        }
        .mobile-process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .mobile-process-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 28px 22px;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03);
          transition: all 0.25s ease;
        }
        .mobile-process-card:hover {
          transform: translateY(-5px);
          border-color: #059669;
          box-shadow: 0 16px 36px rgba(5, 150, 105, 0.1);
        }
        .mobile-proc-num-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .mobile-proc-num {
          font-size: 28px;
          font-weight: 900;
          color: #059669;
          font-family: monospace;
          line-height: 1;
        }
        .mobile-proc-icon {
          font-size: 22px;
        }
        .mobile-proc-tag {
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          color: #64748b;
          display: block;
          margin-bottom: 8px;
        }
        .mobile-proc-title {
          font-size: 16px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.3;
          margin: 0 0 12px;
        }
        .mobile-proc-desc {
          font-size: 12.5px;
          color: #64748b;
          line-height: 1.65;
          margin: 0;
        }

        /* FAQ Section */
        .mobile-faq-section {
          padding: 96px 24px;
          background: #f8fafc;
        }
        .mobile-faq-container {
          max-width: 1160px;
          margin: 0 auto;
        }
        .mobile-faq-layout {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 48px;
          align-items: start;
        }
        .mobile-faq-sidebar {
          background: #f0fdf4;
          border: 1.5px solid #a7f3d0;
          border-radius: 24px;
          padding: 36px 28px;
          position: sticky;
          top: 100px;
        }
        .mobile-faq-sidebar h3 {
          font-size: 22px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 12px;
          line-height: 1.25;
        }
        .mobile-faq-sidebar p {
          font-size: 14px;
          color: #475569;
          line-height: 1.65;
          margin: 0 0 24px;
        }
        .mobile-faq-contact-btn {
          display: inline-block;
          background: #0f172a;
          color: #ffffff !important;
          font-weight: 700;
          font-size: 14px;
          padding: 13px 24px;
          border-radius: 100px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.15);
          transition: all 0.2s ease;
        }
        .mobile-faq-contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.25);
        }
        .mobile-faq-stat-box {
          margin-top: 32px;
          border-top: 1px solid #bbf7d0;
          padding-top: 20px;
        }
        .mobile-faq-stat-num {
          font-size: 32px;
          font-weight: 900;
          color: #059669;
          line-height: 1;
        }
        .mobile-faq-stat-lbl {
          font-size: 12px;
          color: #475569;
          margin-top: 4px;
          font-weight: 600;
        }
        .mobile-faq-accordion {
          display: flex;
          flex-direction: column;
        }
        .mobile-faq-item {
          border-bottom: 1px solid #e2e8f0;
        }
        .mobile-faq-item:first-child {
          border-top: 1px solid #e2e8f0;
        }
        .mobile-faq-item summary {
          list-style: none;
          padding: 22px 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 16px;
          user-select: none;
        }
        .mobile-faq-item summary::-webkit-details-marker {
          display: none;
        }
        .mobile-faq-idx {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11.5px;
          font-weight: 800;
          color: #94a3b8;
          flex-shrink: 0;
        }
        .mobile-faq-item[open] .mobile-faq-idx {
          background: #ecfdf5;
          color: #059669;
          border-color: #a7f3d0;
        }
        .mobile-faq-q {
          flex: 1;
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.35;
        }
        .mobile-faq-item[open] .mobile-faq-q {
          color: #059669;
        }
        .mobile-faq-toggle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.25s ease, background 0.25s ease;
        }
        .mobile-faq-item[open] .mobile-faq-toggle {
          background: #059669;
          transform: rotate(180deg);
        }
        .mobile-faq-item[open] .mobile-faq-toggle svg path {
          stroke: #ffffff;
        }
        .mobile-faq-a {
          padding: 0 0 24px 48px;
          font-size: 14.5px;
          color: #475569;
          line-height: 1.7;
        }

        /* Bottom CTA Banner */
        .mobile-cta-banner-section {
          padding: 80px 24px 100px;
          background: #ffffff;
          border-top: 1px solid #f1f5f9;
        }
        .mobile-cta-banner-card {
          max-width: 1100px;
          margin: 0 auto;
          background: linear-gradient(135deg, #052e16 0%, #064e3b 50%, #0f172a 100%);
          border-radius: 36px;
          padding: 64px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 30px 70px rgba(5, 46, 22, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .mobile-cta-glow-orb {
          position: absolute;
          top: -50%;
          left: 50%;
          transform: translateX(-50%);
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, transparent 70%);
          pointer-events: none;
        }
        .mobile-cta-inner {
          position: relative;
          z-index: 1;
          max-width: 760px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .mobile-cta-title {
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 900;
          color: #ffffff;
          line-height: 1.12;
          letter-spacing: -1.2px;
          margin: 16px 0;
        }
        .mobile-cta-desc {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.65;
          margin: 0 0 36px;
        }
        .mobile-cta-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .mobile-cta-btn-primary {
          background: #ffffff;
          color: #0f172a !important;
          padding: 15px 32px;
          border-radius: 100px;
          font-weight: 800;
          font-size: 15px;
          text-decoration: none;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          transition: all 0.2s ease;
        }
        .mobile-cta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.3);
        }
        .mobile-cta-btn-ghost {
          background: rgba(255, 255, 255, 0.1);
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          color: #ffffff !important;
          padding: 15px 30px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .mobile-cta-btn-ghost:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .mobile-hero-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .mobile-hero-right {
            height: 420px;
          }
          .mobile-platform-canvas {
            grid-template-columns: 1fr;
            padding: 32px 24px;
          }
          .mobile-solutions-grid, .mobile-arch-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .mobile-perf-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .mobile-process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .mobile-faq-layout {
            grid-template-columns: 1fr;
          }
          .mobile-faq-sidebar {
            position: static;
          }
        }

        @media (max-width: 640px) {
          .mobile-hero-section {
            padding: 110px 16px 60px;
          }
          .mobile-solutions-grid, .mobile-arch-grid, .mobile-process-grid {
            grid-template-columns: 1fr;
          }
          .mobile-pmetrics-grid {
            grid-template-columns: 1fr;
          }
          .mobile-cta-banner-card {
            padding: 44px 20px;
            border-radius: 24px;
          }
          .top-screen {
            transform: rotateY(0deg) rotateX(0deg) translateZ(0) translateX(20px);
          }
          .bottom-screen {
            transform: rotateY(0deg) rotateX(0deg) translateZ(0) translateX(-60px) translateY(20px);
          }
        }
      `}</style>
    </div>
  );
}
