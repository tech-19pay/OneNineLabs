"use client";

import React, { useState } from "react";
import Link from "next/link";

interface CorePillar {
  id: string;
  title: string;
  desc: string;
  icon: string;
  badge: string;
}

interface PlatformStack {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  framework: string;
  renderingEngine: string;
  runtime: string;
  codeReuse: string;
  coldStart: string;
  file: string;
  bestFor: string;
  code: string;
}

interface IndustrySolution {
  id: string;
  title: string;
  desc: string;
  badge: string;
  icon: string;
  stats: string;
  bullets: string[];
}

interface ArchLayer {
  num: string;
  title: string;
  tag: string;
  desc: string;
  icon: string;
}

interface DeliveryStep {
  num: string;
  title: string;
  tag: string;
  desc: string;
  icon: string;
}

interface FAQItem {
  q: string;
  a: string;
}

const corePillars: CorePillar[] = [
  {
    id: "performance",
    title: "120 FPS Fluidity",
    desc: "Fabric C++ rendering engine, SwiftUI, and Metal GPU shaders delivering silky 120Hz ProMotion response and sub-second cold starts.",
    icon: "⚡",
    badge: "Sub-Second LCP"
  },
  {
    id: "offline",
    title: "Offline-First Sync",
    desc: "Embedded SQLite and WatermelonDB persistence with optimistic UI mutations, background sync queues, and CRDT conflict resolution.",
    icon: "💾",
    badge: "0ms Local Latency"
  },
  {
    id: "security",
    title: "Hardware Enclave Vault",
    desc: "Apple Secure Enclave and Android KeyStore cryptographic protection for FaceID, TouchID, OAuth refresh tokens, and AES-256 GCM storage.",
    icon: "🛡️",
    badge: "Biometric Enclave"
  },
  {
    id: "store",
    title: "Automated Store CI/CD",
    desc: "Fastlane automated signing, TestFlight/Play beta pipelines, 100% Apple Privacy Manifest compliance, and instant OTA CodePush updates.",
    icon: "📦",
    badge: "100% Store Approval"
  }
];

const platformStacks: PlatformStack[] = [
  {
    id: "react-native",
    name: "React Native (Fabric C++)",
    badge: "Cross-Platform Leader",
    tagline: "Unified TypeScript codebase with 90%+ shared business logic, Fabric C++ rendering engine, and 120 FPS native performance.",
    framework: "React Native 0.76+ (New Architecture)",
    renderingEngine: "Fabric C++ Rendering Engine",
    runtime: "Hermes Bytecode Engine",
    codeReuse: "92% Shared Code",
    coldStart: "0.45s",
    file: "SyncDashboard.tsx",
    bestFor: "High-growth consumer apps, B2B SaaS mobile clients, and multi-platform digital products requiring rapid continuous feature releases.",
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
      <Text style={styles.title}>120 FPS Native Renderer</Text>
      <Text style={styles.sub}>Zero Bridge Latency • Hermes Bytecode</Text>
    </View>
  );
};`
  },
  {
    id: "ios-native",
    name: "Swift & SwiftUI (iOS)",
    badge: "Pure Apple Native",
    tagline: "Engineered specifically for Apple hardware, utilizing SwiftUI, Combine, Metal GPU acceleration, and CoreML neural pipelines.",
    framework: "Swift 6 / SwiftUI 5",
    renderingEngine: "Metal GPU Acceleration",
    runtime: "Native ARM64 Binary",
    codeReuse: "100% Apple Native",
    coldStart: "0.28s",
    file: "BiometricAuthView.swift",
    bestFor: "Deep iOS hardware integration, Apple Watch companion apps, ARKit spatial audio, and maximum GPU throughput.",
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
  {
    id: "android-native",
    name: "Kotlin & Jetpack Compose",
    badge: "Pure Android Native",
    tagline: "State-of-the-art declarative Android development with Kotlin Coroutines, Jetpack Compose, Room DB, and Material 3 design.",
    framework: "Kotlin 2.0 / Jetpack Compose",
    renderingEngine: "Android Skia / Compose Runtime",
    runtime: "ART Ahead-of-Time Binary",
    codeReuse: "100% Android Native",
    coldStart: "0.35s",
    file: "RealtimeSyncScreen.kt",
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
            Text("Room DB Cache: Synced Records", color = Color.Gray)
            LinearProgressIndicator(progress = syncState.progress)
        }
    }
}`
  },
  {
    id: "flutter",
    name: "Flutter & Dart",
    badge: "Google Impeller Engine",
    tagline: "Pixel-perfect multi-platform applications rendered via Impeller C++ graphics pipeline across iOS, Android, and Web.",
    framework: "Flutter 3.24+ / Dart 3.5",
    renderingEngine: "Impeller Metal/Vulkan Engine",
    runtime: "Native AOT Machine Code",
    codeReuse: "95% Shared Code",
    coldStart: "0.48s",
    file: "ImpellerGaugePainter.dart",
    bestFor: "Custom branded UI component libraries, identical cross-platform graphics, embedded kiosk apps, and desktop ports.",
    code: `// Flutter Impeller Custom Painter Widget
import 'package:flutter/material.dart';

class HardwareTelemetryGauge extends StatelessWidget {
  final double fpsValue;
  const HardwareTelemetryGauge({super.key, required this.fpsValue});

  @override
  Widget build(BuildContext context) {
    return CustomPaint(
      painter: ImpellerGaugePainter(fps: fpsValue),
      child: Center(
        child: Text('120 FPS',
          style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold, color: Colors.white)),
      ),
    );
  }
}`
  }
];

const industrySolutions: IndustrySolution[] = [
  {
    id: "fintech",
    title: "Fintech & Mobile Wallets",
    desc: "Biometric FaceID/TouchID security, PCI-DSS compliant payment rails, real-time balance WebSockets, and encrypted multi-currency wallets.",
    badge: "PCI-DSS & Biometric",
    icon: "💳",
    stats: "< 200ms Transaction Latency",
    bullets: [
      "Secure Enclave Biometric Auth & Token Vault",
      "Stripe & Plaid Native Payment Sheets",
      "Offline Transaction Signing & Queuing"
    ]
  },
  {
    id: "healthcare",
    title: "Healthcare & Telemedicine",
    desc: "HIPAA-compliant WebRTC encrypted video consultations, electronic health record (EHR) sync, and Apple HealthKit / Google Health Connect integration.",
    badge: "HIPAA & BAA Ready",
    icon: "🩺",
    stats: "100% Encrypted Video Stream",
    bullets: [
      "End-to-End Encrypted WebRTC Video & Chat",
      "HealthKit & Wearable Sensor Telemetry Sync",
      "FHIR / HL7 EHR Database Interoperability"
    ]
  },
  {
    id: "ondemand",
    title: "On-Demand & Geolocation",
    desc: "Real-time background GPS tracking, dynamic geofencing, route caching, driver dispatch feeds, and live order status delivery streams.",
    badge: "Background GPS Tracking",
    icon: "🚗",
    stats: "Sub-Second Driver Coordinate Sync",
    bullets: [
      "Background Location Battery Optimization",
      "Mapbox & Google Maps Vector Tile Caching",
      "Live WebSocket Driver Dispatch Engine"
    ]
  },
  {
    id: "ecommerce",
    title: "E-Commerce & Retail",
    desc: "Apple Pay & Google Pay 1-tap checkout, personalized AI product recommendations, AR camera try-on, and cart abandonment push triggers.",
    badge: "1-Tap Express Checkout",
    icon: "🛍️",
    stats: "+42% Checkout Conversion Rate",
    bullets: [
      "Apple Pay & Google Pay Native Sheet Checkout",
      "ARKit / ARCore Interactive 3D Product View",
      "Intelligent Push Notifications (FCM / APNs)"
    ]
  },
  {
    id: "enterprise",
    title: "Enterprise & Field Operations",
    desc: "Offline-first WatermelonDB database, barcode & RFID hardware scanning, offline PDF signature capture, and role-based access management.",
    badge: "Offline-First SQLite Sync",
    icon: "🏭",
    stats: "Zero Data Loss in Field Work",
    bullets: [
      "Offline WatermelonDB / SQLite Replication",
      "Native Camera Barcode & QR Hardware Scanner",
      "AES-256 Encrypted Local Storage Vault"
    ]
  },
  {
    id: "social",
    title: "Social & Media Streaming",
    desc: "Sub-second HLS live video streaming, WebRTC audio spaces, real-time rich chat feeds, stories, and background video transcoding.",
    badge: "120 FPS Media Pipeline",
    icon: "🎬",
    stats: "Sub-Second Stream Latency",
    bullets: [
      "WebRTC & HLS Adaptive Live Video Player",
      "FFmpeg Native Hardware Video Compression",
      "Real-Time WebSocket Interactive Reaction Feeds"
    ]
  }
];

const archLayers: ArchLayer[] = [
  {
    num: "01",
    title: "Presentation UI & Gestures",
    tag: "FRONTEND LAYER",
    desc: "SwiftUI, Jetpack Compose, and React Native Fabric components composited with hardware GPU acceleration for silky smooth 120 FPS gestures.",
    icon: "📱"
  },
  {
    num: "02",
    title: "Offline Storage & Sync Engine",
    tag: "PERSISTENCE LAYER",
    desc: "Local SQLite, WatermelonDB, or Realm database with background optimistic sync queues and automatic CRDT conflict resolution.",
    icon: "💾"
  },
  {
    num: "03",
    title: "Biometric & Vault Security",
    tag: "SECURITY ENCLAVE",
    desc: "Apple Secure Enclave and Android Keystore protection for OAuth tokens, cryptographic keys, and FaceID/TouchID biometric authentication.",
    icon: "🔐"
  },
  {
    num: "04",
    title: "Cloud API & Edge Orchestration",
    tag: "GATEWAY LAYER",
    desc: "RESTful, GraphQL, and gRPC Edge APIs backed by AWS CloudFront CDN, WebSockets, and real-time push notification delivery.",
    icon: "⚡"
  }
];

const deliverySteps: DeliveryStep[] = [
  {
    num: "01",
    title: "Mobile Architecture & UX Blueprint",
    tag: "WEEK 1–2",
    desc: "We define offline sync rules, database schemas, framework selection, and high-fidelity Figma mobile UI design prototypes.",
    icon: "🎯"
  },
  {
    num: "02",
    title: "Native Codebase & Offline Engine",
    tag: "WEEK 3–5",
    desc: "Our engineers build the core mobile app codebase, local SQLite persistence layer, custom UI components, and API integrations.",
    icon: "⚙️"
  },
  {
    num: "03",
    title: "QA Automation & Device Testing",
    tag: "WEEK 6–7",
    desc: "Rigorous E2E testing on real iOS and Android physical hardware devices using Appium, XCTest, and Detox automation suites.",
    icon: "🧪"
  },
  {
    num: "04",
    title: "App Store & Google Play Launch",
    tag: "WEEK 8",
    desc: "Full submission, review management, fast-track approval handling, CI/CD Fastlane deployment, and production crash monitoring setup.",
    icon: "🚀"
  }
];

const faqs: FAQItem[] = [
  {
    q: "Native, hybrid or cross-platform — which is best for our mobile app?",
    a: "For 85% of mobile products, React Native or Flutter offers 90%+ code reuse across iOS and Android while delivering 120 FPS native performance. For apps requiring deep OS-level APIs, custom hardware integration, or complex AR/graphic pipelines, we build pure native Swift (iOS) and Kotlin (Android)."
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

export default function MobileAppsPageContent() {
  const [activePlatform, setActivePlatform] = useState<string>("react-native");
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [enabledModules, setEnabledModules] = useState<Record<string, boolean>>({
    reactNative: true,
    swiftIos: true,
    kotlinAndroid: false,
    offlineDb: true,
    biometrics: true,
  });

  const toggleModule = (key: string) => {
    setEnabledModules((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCopyCode = () => {
    const activeObj = platformStacks.find((p) => p.id === activePlatform);
    const code = activeObj?.code || "";
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const currentPlatform = platformStacks.find((p) => p.id === activePlatform) || platformStacks[0];

  return (
    <div className="mobile-page-content-root">
      {/* ── 1. HERO SECTION (Dual Card Layout) ── */}
      <section className="mobile-hero-section">
        <div className="mobile-hero-container">
          <div className="mobile-hero-grid">

            {/* Left White Card */}
            <div className="mobile-hero-left-card">
              <div>
                <div className="mobile-badge-pill">
                  <span className="mobile-badge-dot" />
                  FAST &amp; NATIVE-GRADE APPS
                </div>

                <h1 className="mobile-hero-title">
                  High-Performance iOS, Android &amp; React Native Apps
                </h1>

                <p className="mobile-hero-desc">
                  Expertly crafted native applications using iOS Swift and Android Kotlin, alongside powerful cross-platform solutions in React Native and Flutter. We engineer every application to deliver sub-second cold starts, uncompromised 120 FPS fluid animations, and offline-first data sync at scale.
                </p>

                <div className="mobile-hero-actions">
                  <Link href="/contact" className="mobile-hero-btn-primary">
                    <span>Build Your App</span>
                    <span className="mobile-btn-arrow">↗</span>
                  </Link>
                  <a href="#stacks" className="mobile-hero-btn-secondary">
                    <span>Explore Stacks</span>
                    <span className="mobile-btn-arrow">↓</span>
                  </a>
                </div>
              </div>

              {/* Store Badges */}
              <div className="mobile-store-badges">
                <Link href="/contact" className="mobile-store-pill">
                  <svg className="mobile-store-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.34c.64-.78 1.08-1.85.96-2.94-.93.04-2.06.62-2.73 1.4-.59.68-1.11 1.77-.97 2.83 1.05.08 2.1-.51 2.74-1.29z" />
                  </svg>
                  <span>App Store Ready</span>
                  <span className="mobile-store-rating">★ 4.9</span>
                </Link>

                <Link href="/contact" className="mobile-store-pill">
                  <svg className="mobile-store-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 20.5v-17c0-.55.45-1 1-1h.22l9.95 9.95L4.22 22.4H4c-.55 0-1-.45-1-.9zm1.41-1.41l8.54-8.54-8.54-8.54v17.08zM15.59 13.59l2.71-2.71c.39-.39.39-1.02 0-1.41l-2.71-2.71-8.54 8.54 8.54 8.54 8.54-8.54z" />
                  </svg>
                  <span>Google Play Certified</span>
                  <span className="mobile-store-rating">★ 4.8</span>
                </Link>
              </div>
            </div>

            {/* Right Lime Accent Card */}
            <div className="mobile-hero-right-card">
              {/* Floating Telemetry Chips */}
              <div className="mobile-floating-chips">
                <div className="mobile-fchip">
                  <div className="mobile-fchip-header">
                    <span className="mobile-fchip-lbl">App Telemetry</span>
                    <span className="mobile-fchip-pulse" />
                  </div>
                  <div className="mobile-fchip-val">
                    120 FPS <span className="mobile-fchip-subval">• 0.38s</span>
                  </div>
                  <div className="mobile-fchip-tag green">
                    <span>Hermes C++ →</span>
                    <span className="mobile-fchip-pill">▲ 99.98% SLA</span>
                  </div>
                </div>

                <div className="mobile-fchip">
                  <div className="mobile-fchip-header">
                    <span className="mobile-fchip-lbl">Security Enclave</span>
                    <span className="mobile-fchip-dot blue" />
                  </div>
                  <div className="mobile-fchip-val">
                    Biometrics <span className="mobile-fchip-subval">🔒</span>
                  </div>
                  <div className="mobile-fchip-tag blue">
                    <span>AES-256 GCM →</span>
                    <span className="mobile-fchip-pill blue">Encrypted</span>
                  </div>
                </div>

                <div className="mobile-fchip">
                  <div className="mobile-fchip-header">
                    <span className="mobile-fchip-lbl">Offline Sync</span>
                    <span className="mobile-fchip-dot purple" />
                  </div>
                  <div className="mobile-fchip-val">
                    0ms Latency <span className="mobile-fchip-subval">💾</span>
                  </div>
                  <div className="mobile-fchip-tag purple">
                    <span>WatermelonDB →</span>
                    <span className="mobile-fchip-pill purple">Delta Merge</span>
                  </div>
                </div>
              </div>

              {/* Smartphone Device Simulator */}
              <div className="mobile-phone-mockup">
                <div className="mobile-phone-btn-l1" />
                <div className="mobile-phone-btn-l2" />
                <div className="mobile-phone-btn-r" />

                <div className="mobile-phone-chassis">
                  {/* Status Bar */}
                  <div className="mobile-status-bar">
                    <span>9:41</span>
                    <div className="mobile-dynamic-island">
                      <span className="mobile-island-cam" />
                      <span className="mobile-island-sensor" />
                    </div>
                    <span>5G</span>
                  </div>

                  {/* Phone Screen UI */}
                  <div className="mobile-phone-screen">
                    <div className="mobile-app-header">
                      <div className="mobile-app-brand">
                        <div className="mobile-app-avatar">19</div>
                        <div>
                          <div className="mobile-app-title">
                            OneNine Engine <span className="mobile-pro-badge">PRO</span>
                          </div>
                          <div className="mobile-app-meta">v2.4.0 • TestFlight #412</div>
                        </div>
                      </div>
                      <span className="mobile-app-deploy-icon">🚀</span>
                    </div>

                    {/* Telemetry Box */}
                    <div className="mobile-gauge-box">
                      <div className="mobile-gauge-top">
                        <span>Runtime Performance</span>
                        <span className="mobile-fps-green">● 120 FPS</span>
                      </div>
                      <div className="mobile-gauge-metrics">
                        <div className="mobile-stat-cold">0.38s <span>Cold Start</span></div>
                        <span className="mobile-hermes-badge">Hermes C++</span>
                      </div>
                    </div>

                    {/* Architecture Modules */}
                    <div className="mobile-module-list">
                      {[
                        { key: "reactNative", icon: "⚛️", title: "React Native", sub: "Fabric C++ Engine • v0.76" },
                        { key: "swiftIos", icon: "🍏", title: "Swift & SwiftUI", sub: "Metal GPU • iOS 18 SDK" },
                        { key: "kotlinAndroid", icon: "🤖", title: "Android Kotlin", sub: "Jetpack Compose • ART" },
                        { key: "offlineDb", icon: "💾", title: "Offline Database", sub: "WatermelonDB / SQLite" },
                      ].map((mod) => (
                        <div
                          key={mod.key}
                          onClick={() => toggleModule(mod.key)}
                          className={`mobile-module-item ${enabledModules[mod.key] ? "active" : ""}`}
                        >
                          <div className="mobile-mod-left">
                            <span className="mobile-mod-icon">{mod.icon}</span>
                            <div>
                              <div className="mobile-mod-name">{mod.title}</div>
                              <div className="mobile-mod-sub">{mod.sub}</div>
                            </div>
                          </div>
                          <span className={`mobile-toggle-switch ${enabledModules[mod.key] ? "on" : ""}`}>
                            <span className="mobile-toggle-thumb" />
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Store Status */}
                    <div className="mobile-ready-pill">
                      <span className="mobile-ready-dot" />
                      <span>App Store &amp; Play Store Certified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Signature Corner */}
              <div className="mobile-hero-signature">
                LAUNCH YOUR APP <br /> WITH ONE NINE
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. 4 CORE PILLARS SECTION ── */}
      <section className="mobile-pillars-section">
        <div className="mobile-pillars-container">
          <div className="mobile-sec-header">
            <div className="mobile-badge-pill" style={{ background: "#f0fdf4", borderColor: "#a7f3d0", color: "#059669" }}>
              <span className="mobile-badge-dot" style={{ background: "#059669" }} />
              ENGINEERING EXCELLENCE
            </div>
            <h2 className="mobile-sec-title">Core Pillars of Mobile Engineering</h2>
            <p className="mobile-sec-desc">
              We architect scalable, offline-first mobile applications with native 120 FPS fluency and bank-grade security for iOS and Android.
            </p>
          </div>

          <div className="mobile-pillars-grid">
            {corePillars.map((pillar) => (
              <div key={pillar.id} className="mobile-pillar-card">
                <div className="mobile-pillar-top">
                  <span className="mobile-pillar-icon">{pillar.icon}</span>
                  <span className="mobile-pillar-badge">{pillar.badge}</span>
                </div>
                <h3 className="mobile-pillar-title">{pillar.title}</h3>
                <p className="mobile-pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. MULTI-PLATFORM & NATIVE ENGINEERING STACKS ── */}
      <section id="stacks" className="mobile-stacks-section">
        <div className="mobile-stacks-container">
          <div className="mobile-sec-header">
            <div className="mobile-badge-pill" style={{ background: "#e0f2fe", borderColor: "#bae6fd", color: "#0284c7" }}>
              <span className="mobile-badge-dot" style={{ background: "#0284c7" }} />
              FRAMEWORK ARCHITECTURE
            </div>
            <h2 className="mobile-sec-title">Multi-Platform &amp; Native Engineering Stacks</h2>
            <p className="mobile-sec-desc">
              We select the optimal framework and rendering architecture for your product, balancing rapid cross-platform deployment with uncompromised 120 FPS performance.
            </p>
          </div>

          {/* Framework Switcher Tabs */}
          <div className="mobile-framework-tabs">
            {platformStacks.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActivePlatform(p.id)}
                className={`mobile-tab-btn ${activePlatform === p.id ? "active" : ""}`}
              >
                <span>{p.name}</span>
              </button>
            ))}
          </div>

          {/* Architecture Showcase Canvas */}
          <div className="mobile-stack-canvas">
            <div className="mobile-stack-left">
              <div className="mobile-stag-row">
                <span className="mobile-sbadge">{currentPlatform.badge}</span>
                <span className="mobile-sframework">{currentPlatform.framework}</span>
              </div>

              <h3 className="mobile-stitle">{currentPlatform.name}</h3>
              <p className="mobile-sdesc">{currentPlatform.tagline}</p>

              {/* Spec Grid */}
              <div className="mobile-spec-grid">
                <div className="mobile-spec-item">
                  <span className="mobile-spec-lbl">Rendering Engine</span>
                  <span className="mobile-spec-val">{currentPlatform.renderingEngine}</span>
                </div>
                <div className="mobile-spec-item">
                  <span className="mobile-spec-lbl">Runtime Execution</span>
                  <span className="mobile-spec-val">{currentPlatform.runtime}</span>
                </div>
                <div className="mobile-spec-item">
                  <span className="mobile-spec-lbl">Code Reuse %</span>
                  <span className="mobile-spec-val">{currentPlatform.codeReuse}</span>
                </div>
                <div className="mobile-spec-item">
                  <span className="mobile-spec-lbl">Cold Start Latency</span>
                  <span className="mobile-spec-val">{currentPlatform.coldStart}</span>
                </div>
              </div>

              <div className="mobile-bestfor-box">
                <strong>Best For:</strong> {currentPlatform.bestFor}
              </div>

              <div className="mobile-saction-row">
                <Link href="/contact" className="mobile-btn-primary">
                  <span>Build with {currentPlatform.name.split(" ")[0]}</span>
                  <span className="mobile-btn-arrow">→</span>
                </Link>
                <Link href="/contact" className="mobile-btn-ghost">
                  Request Architecture Call
                </Link>
              </div>
            </div>

            {/* Code Window Box */}
            <div className="mobile-stack-right">
              <div className="mobile-scode-top">
                <div className="mobile-scode-dots">
                  <span style={{ background: "#ef4444" }} />
                  <span style={{ background: "#f59e0b" }} />
                  <span style={{ background: "#10b981" }} />
                </div>
                <span className="mobile-scode-file">{currentPlatform.file}</span>
                <button type="button" onClick={handleCopyCode} className="mobile-scopy-btn">
                  {copiedCode ? "✓ Copied" : "📋 Copy Code"}
                </button>
              </div>
              <pre className="mobile-scode-pre">
                <code>{currentPlatform.code}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. INDUSTRY SOLUTIONS (6 BENTO CARDS) ── */}
      <section className="mobile-solutions-section">
        <div className="mobile-solutions-container">
          <div className="mobile-sec-header">
            <div className="mobile-badge-pill" style={{ background: "#fdf4ff", borderColor: "#f5d0fe", color: "#c026d3" }}>
              <span className="mobile-badge-dot" style={{ background: "#c026d3" }} />
              ENTERPRISE VERTICALS
            </div>
            <h2 className="mobile-sec-title">Tailored Mobile Applications by Business Vertical</h2>
            <p className="mobile-sec-desc">
              From biometric fintech wallets to HIPAA-compliant telemedicine and real-time geospatial dispatch systems, we engineer mission-critical mobile platforms.
            </p>
          </div>

          <div className="mobile-solutions-grid">
            {industrySolutions.map((sol) => (
              <div key={sol.id} className="mobile-sol-card">
                <div className="mobile-sol-top">
                  <span className="mobile-sol-icon">{sol.icon}</span>
                  <span className="mobile-sol-badge">{sol.badge}</span>
                </div>

                <h3 className="mobile-sol-title">{sol.title}</h3>
                <p className="mobile-sol-desc">{sol.desc}</p>

                <div className="mobile-sol-stat">
                  <span>⚡ Benchmark:</span> {sol.stats}
                </div>

                <div className="mobile-sol-bullets">
                  {sol.bullets.map((b, bi) => (
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

      {/* ── 5. LAYERED MOBILE STACK ARCHITECTURE ── */}
      <section className="mobile-layer-section">
        <div className="mobile-layer-container">
          <div className="mobile-sec-header">
            <div className="mobile-badge-pill">
              <span className="mobile-badge-dot" />
              LAYERED PIPELINE
            </div>
            <h2 className="mobile-sec-title">How We Layer Your Mobile Stack</h2>
            <p className="mobile-sec-desc">
              A high-performance layered pipeline from GPU-accelerated interface to local SQLite persistence and cloud edge orchestration.
            </p>
          </div>

          <div className="mobile-layer-grid">
            {archLayers.map((layer, i) => (
              <div key={i} className="mobile-layer-card">
                <div className="mobile-layer-top">
                  <span className="mobile-layer-num">{layer.num}</span>
                  <span className="mobile-layer-icon">{layer.icon}</span>
                </div>
                <span className="mobile-layer-tag">{layer.tag}</span>
                <h3 className="mobile-layer-title">{layer.title}</h3>
                <p className="mobile-layer-desc">{layer.desc}</p>
                <div className="mobile-layer-indicator" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. PERFORMANCE & DEVICE SLA BENCHMARK ── */}
      <section className="mobile-perf-section">
        <div className="mobile-perf-container">
          <div className="mobile-perf-grid">
            {/* Left: Heading + Gauge */}
            <div className="mobile-perf-left">
              <div className="mobile-badge-pill" style={{ background: "#f5f3ff", borderColor: "#ede9fe", color: "#7c3aed" }}>
                <span className="mobile-badge-dot" style={{ background: "#7c3aed" }} />
                ZERO-LATENCY GUARANTEE
              </div>
              <h2 className="mobile-sec-title" style={{ textAlign: "left", margin: "16px 0" }}>
                Engineered for 99.9% Crash-Free Production SLA
              </h2>
              <p className="mobile-sec-desc" style={{ textAlign: "left", margin: "0 0 32px 0" }}>
                Our architecture guarantees sub-millisecond local query routing, sub-second cold starts, and uncompromised 120 FPS fluid motion under heavy production loads.
              </p>

              <div className="mobile-gauge-card">
                <svg width="88" height="88" viewBox="0 0 36 36" className="mobile-gauge-svg">
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                  <circle
                    className="mobile-gauge-circle"
                    cx="18"
                    cy="18"
                    r="15.915"
                    fill="none"
                    stroke="#0ea5e9"
                    strokeWidth="3"
                    strokeDasharray="99.98 100"
                    strokeDashoffset="100"
                    strokeLinecap="round"
                    style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
                  />
                  <text x="18" y="20.5" fontFamily="monospace" fontSize="6.5" fontWeight="bold" textAnchor="middle" fill="#0f172a">
                    120fps
                  </text>
                </svg>
                <div>
                  <div className="mobile-gauge-title">Fluidity &amp; Crash-Free SLA</div>
                  <div className="mobile-gauge-sub">Production Device Benchmark</div>
                </div>
              </div>
            </div>

            {/* Right: Metric Progress Rows */}
            <div className="mobile-perf-right">
              {[
                { name: "UI Rendering Smoothness (Metal/Fabric)", val: "60 / 120 FPS", fill: "98%", grad: "linear-gradient(90deg, #0ea5e9, #38bdf8)" },
                { name: "App Cold Start Time (Hermes Bytecode)", val: "< 0.38s", fill: "94%", grad: "linear-gradient(90deg, #0f172a, #334155)" },
                { name: "Local SQLite Query Latency", val: "< 4ms", fill: "96%", grad: "linear-gradient(90deg, #10b981, #34d399)" },
                { name: "Base Memory Heap Footprint", val: "< 42MB", fill: "90%", grad: "linear-gradient(90deg, #7c3aed, #a855f7)" },
              ].map((m, idx) => (
                <div key={idx} className="mobile-metric-row">
                  <div className="mobile-metric-header">
                    <span className="mobile-metric-name">{m.name}</span>
                    <strong className="mobile-metric-val">{m.val}</strong>
                  </div>
                  <div className="mobile-metric-bar-bg">
                    <div className="mobile-metric-bar-fill" style={{ width: m.fill, background: m.grad }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. 4-STAGE AGILE DELIVERY PROCESS ── */}
      <section className="mobile-process-section">
        <div className="mobile-process-container">
          <div className="mobile-sec-header">
            <div className="mobile-badge-pill">
              <span className="mobile-badge-dot" />
              AGILE POD LIFECYCLE
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

      {/* ── 8. MOBILE ENGINEERING FAQS ── */}
      <section className="mobile-faq-section">
        <div className="mobile-faq-container">
          <div className="mobile-sec-header">
            <div className="mobile-badge-pill">
              <span className="mobile-badge-dot" />
              MOBILE ENGINEERING FAQS
            </div>
            <h2 className="mobile-sec-title">Frequently Asked Questions</h2>
            <p className="mobile-sec-desc">Everything you need to know about our native iOS/Android development, cross-platform stacks, offline sync, and App Store approval guarantees.</p>
          </div>

          <div className="mobile-faq-layout">
            {/* Left Sticky Sidebar */}
            <div className="mobile-faq-sidebar">
              <h3>Have a Custom Mobile App in Mind?</h3>
              <p>Speak directly with our principal mobile architect to evaluate offline sync architectures, framework selection, and store approval timelines.</p>
              <Link href="/contact" className="mobile-faq-contact-btn">
                Talk to a Mobile Architect →
              </Link>
              <div className="mobile-faq-stat-box">
                <div className="mobile-faq-stat-num">6–8 Wks</div>
                <div className="mobile-faq-stat-lbl">Average Mobile MVP Delivery Time</div>
              </div>
            </div>

            {/* Right Accordion */}
            <div className="mobile-faq-accordion">
              {faqs.map((f, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <div
                    key={i}
                    onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                    className={`mobile-faq-item ${isOpen ? "open" : ""}`}
                  >
                    <div className="mobile-faq-summary">
                      <span className="mobile-faq-idx">{String(i + 1).padStart(2, "0")}</span>
                      <span className="mobile-faq-q">{f.q}</span>
                      <span className="mobile-faq-toggle">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path
                            d={isOpen ? "M5 12h14" : "M12 5v14M5 12h14"}
                            stroke="#64748b"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                    {isOpen && (
                      <div className="mobile-faq-a">
                        {f.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. HIGH-CONVERTING BOTTOM CTA BANNER ── */}
      <section className="mobile-cta-banner-section">
        <div className="mobile-cta-banner-card">
          <div className="mobile-cta-glow-orb" />
          <div className="mobile-cta-inner">
            <div className="mobile-badge-pill" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", borderColor: "rgba(255,255,255,0.25)" }}>
              <span className="mobile-badge-dot" style={{ background: "#d7f82e" }} />
              READY TO SHIP ON APP STORE &amp; PLAY STORE
            </div>
            <h2 className="mobile-cta-title">Build &amp; Launch Your High-Performance Mobile App With OneNineLabs</h2>
            <p className="mobile-cta-desc">
              Receive a comprehensive mobile architecture proposal, framework recommendation, and 6–8 week MVP roadmap from our principal engineers within 48 hours.
            </p>
            <div className="mobile-cta-actions">
              <Link href="/contact" className="mobile-cta-btn-primary">
                Book Free Architecture Review →
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
        .mobile-page-content-root {
          font-family: -apple-system, BlinkMacSystemFont, "Plus Jakarta Sans", "Inter", sans-serif;
          color: #0f172a;
          background: #ffffff;
          overflow-x: hidden;
          width: 100%;
        }

        /* Generic Header */
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
          background: #f1f5f9;
          border: 1.5px solid #e2e8f0;
          color: #475569;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.2px;
          padding: 6px 14px;
          border-radius: 9999px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .mobile-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #0ea5e9;
        }
        .mobile-sec-title {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 900;
          letter-spacing: -1.2px;
          color: #0f172a;
          line-height: 1.15;
          margin: 0 0 16px 0;
        }
        .mobile-sec-desc {
          font-size: 15px;
          line-height: 1.65;
          color: #64748b;
          font-weight: 500;
          margin: 0;
        }

        /* ── 1. HERO SECTION ── */
        .mobile-hero-section {
          background-color: #f4f5f7;
          padding-top: 120px;
          padding-bottom: 60px;
          padding-left: 20px;
          padding-right: 20px;
          position: relative;
          overflow: hidden;
        }
        .mobile-hero-container {
          max-width: 1280px;
          margin: 0 auto;
        }
        .mobile-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 28px;
          align-items: stretch;
          position: relative;
        }

        /* Left Hero Card */
        .mobile-hero-left-card {
          background-color: #ffffff;
          border-radius: 38px;
          padding: clamp(28px, 3.8vw, 48px);
          border: 1px solid #e5e7eb;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 520px;
        }
        .mobile-hero-title {
          font-size: clamp(30px, 3.8vw, 48px);
          font-weight: 900;
          line-height: 1.14;
          letter-spacing: -0.02em;
          color: #0f172a;
          margin: 0 0 20px 0;
        }
        .mobile-hero-desc {
          font-size: 15px;
          color: #64748b;
          line-height: 1.65;
          max-width: 520px;
          font-weight: 400;
          margin: 0 0 32px 0;
        }
        .mobile-hero-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .mobile-hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 900;
          font-size: 14px;
          padding: 14px 28px;
          border-radius: 9999px;
          background-color: #d7f82e;
          color: #090d16;
          box-shadow: 0 4px 14px rgba(215, 248, 46, 0.45);
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .mobile-hero-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(215, 248, 46, 0.6);
        }
        .mobile-hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          font-size: 14px;
          padding: 13px 24px;
          border-radius: 9999px;
          background-color: #ffffff;
          color: #0f172a;
          border: 1px solid #cbd5e1;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
          text-decoration: none;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }
        .mobile-hero-btn-secondary:hover {
          background-color: #f8fafc;
          transform: translateY(-1px);
        }
        .mobile-btn-arrow {
          font-size: 16px;
        }

        .mobile-store-badges {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 24px;
          border-top: 1px solid #f1f5f9;
          flex-wrap: wrap;
        }
        .mobile-store-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #ffffff;
          border: 1px solid #cbd5e1;
          color: #0f172a;
          font-size: 12px;
          font-weight: 700;
          padding: 8px 16px;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 2px 6px rgba(0,0,0,0.03);
          transition: background-color 0.2s ease, border-color 0.2s ease;
        }
        .mobile-store-pill:hover {
          background-color: #f8fafc;
          border-color: #94a3b8;
        }
        .mobile-store-icon {
          width: 14px;
          height: 14px;
        }
        .mobile-store-rating {
          font-size: 10.5px;
          background: #f1f5f9;
          color: #0284c7;
          padding: 2px 6px;
          border-radius: 6px;
          font-weight: 800;
        }

        /* Right Hero Card */
        .mobile-hero-right-card {
          background-color: #d7f82e;
          border-radius: 38px;
          padding: clamp(24px, 3.5vw, 36px);
          min-height: 520px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .mobile-floating-chips {
          display: flex;
          flex-direction: column;
          gap: 14px;
          z-index: 15;
          flex-shrink: 0;
          max-width: 220px;
        }
        .mobile-fchip {
          background-color: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 20px;
          padding: 14px 18px;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
          transition: transform 0.25s ease;
        }
        .mobile-fchip:hover {
          transform: translateY(-2px);
        }
        .mobile-fchip-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2px;
        }
        .mobile-fchip-lbl {
          font-size: 10.5px;
          font-weight: 700;
          color: #64748b;
        }
        .mobile-fchip-pulse {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
        }
        .mobile-fchip-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
        }
        .mobile-fchip-dot.blue { background: #0ea5e9; }
        .mobile-fchip-dot.purple { background: #a855f7; }

        .mobile-fchip-val {
          font-size: 18px;
          font-weight: 900;
          color: #0f172a;
          letter-spacing: -0.02em;
          margin-bottom: 3px;
        }
        .mobile-fchip-subval {
          font-size: 12px;
          font-weight: 700;
          color: #64748b;
        }
        .mobile-fchip-tag {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10.5px;
          font-weight: 700;
          color: #64748b;
        }
        .mobile-fchip-tag.green span:first-child { color: #15803d; }
        .mobile-fchip-tag.blue span:first-child { color: #0284c7; }
        .mobile-fchip-tag.purple span:first-child { color: #7e22ce; }

        .mobile-fchip-pill {
          background-color: #dcfce7;
          color: #15803d;
          padding: 2px 6px;
          border-radius: 6px;
          font-size: 9.5px;
          font-weight: 800;
        }
        .mobile-fchip-pill.blue {
          background-color: #e0f2fe;
          color: #0284c7;
        }
        .mobile-fchip-pill.purple {
          background-color: #f3e8ff;
          color: #7e22ce;
        }

        /* Smartphone Mockup */
        .mobile-phone-mockup {
          position: relative;
          width: 270px;
          height: 480px;
          flex-shrink: 0;
          z-index: 10;
        }
        .mobile-phone-btn-l1 {
          position: absolute;
          left: -3px;
          top: 100px;
          width: 3px;
          height: 26px;
          background: #1e293b;
          border-radius: 3px 0 0 3px;
        }
        .mobile-phone-btn-l2 {
          position: absolute;
          left: -3px;
          top: 136px;
          width: 3px;
          height: 26px;
          background: #1e293b;
          border-radius: 3px 0 0 3px;
        }
        .mobile-phone-btn-r {
          position: absolute;
          right: -3px;
          top: 115px;
          width: 3px;
          height: 38px;
          background: #1e293b;
          border-radius: 0 3px 3px 0;
        }
        .mobile-phone-chassis {
          width: 100%;
          height: 100%;
          background: #0a0e17;
          border: 6px solid #1e293b;
          border-radius: 38px;
          padding: 8px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
          overflow: hidden;
        }
        .mobile-status-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 8px;
          margin-bottom: 6px;
          font-size: 10px;
          color: #94a3b8;
          font-weight: 600;
        }
        .mobile-dynamic-island {
          width: 70px;
          height: 14px;
          background-color: #000000;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 6px;
        }
        .mobile-island-cam {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #1e293b;
        }
        .mobile-island-sensor {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: #22c55e;
          box-shadow: 0 0 4px #22c55e;
        }

        .mobile-phone-screen {
          flex: 1;
          background: #070b13;
          border-radius: 24px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          overflow: hidden;
        }
        .mobile-app-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .mobile-app-brand {
          display: flex;
          align-items: center;
          gap: 7px;
        }
        .mobile-app-avatar {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #0f172a;
          border: 1.5px solid #38bdf8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          font-weight: 900;
          color: #38bdf8;
        }
        .mobile-app-title {
          font-size: 10px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .mobile-pro-badge {
          font-size: 7px;
          background: rgba(56, 189, 248, 0.2);
          color: #38bdf8;
          padding: 1px 3px;
          border-radius: 3px;
          font-weight: 800;
        }
        .mobile-app-meta {
          font-size: 7.5px;
          color: #94a3b8;
          font-weight: 600;
        }
        .mobile-app-deploy-icon {
          font-size: 12px;
        }

        .mobile-gauge-box {
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid rgba(56, 189, 248, 0.2);
          border-radius: 12px;
          padding: 7px 9px;
        }
        .mobile-gauge-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2px;
          font-size: 8.5px;
          color: #94a3b8;
          font-weight: 600;
        }
        .mobile-fps-green {
          color: #22c55e;
          font-weight: 700;
        }
        .mobile-gauge-metrics {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }
        .mobile-stat-cold {
          font-size: 15px;
          font-weight: 900;
          color: #ffffff;
        }
        .mobile-stat-cold span {
          font-size: 8.5px;
          font-weight: 600;
          color: #38bdf8;
        }
        .mobile-hermes-badge {
          font-size: 8px;
          font-weight: 700;
          color: #a855f7;
          background: rgba(168, 85, 247, 0.15);
          padding: 1.5px 5px;
          border-radius: 5px;
        }

        .mobile-module-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .mobile-module-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 5px 8px;
          border-radius: 10px;
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid rgba(30, 41, 59, 0.8);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .mobile-module-item.active {
          background: rgba(15, 23, 42, 0.95);
          border-color: rgba(56, 189, 248, 0.35);
          box-shadow: 0 2px 6px rgba(56, 189, 248, 0.1);
        }
        .mobile-mod-left {
          display: flex;
          align-items: center;
          gap: 7px;
        }
        .mobile-mod-icon {
          font-size: 10px;
        }
        .mobile-mod-name {
          font-size: 9.5px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.1;
        }
        .mobile-mod-sub {
          font-size: 7px;
          color: #94a3b8;
        }
        .mobile-toggle-switch {
          width: 22px;
          height: 13px;
          background: #334155;
          border-radius: 9999px;
          padding: 1px;
          display: flex;
          align-items: center;
          transition: background-color 0.2s ease;
        }
        .mobile-toggle-switch.on {
          background: #0ea5e9;
          justify-content: flex-end;
        }
        .mobile-toggle-thumb {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 1px 3px rgba(0,0,0,0.4);
        }

        .mobile-ready-pill {
          margin-top: auto;
          background: rgba(22, 101, 52, 0.25);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 8px;
          padding: 3.5px 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          font-size: 7.5px;
          color: #4ade80;
          font-weight: 700;
        }
        .mobile-ready-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #4ade80;
        }

        .mobile-hero-signature {
          position: absolute;
          bottom: 0;
          right: 0;
          background-color: #ffffff;
          padding: 10px 20px;
          border-top-left-radius: 24px;
          font-family: monospace;
          font-size: 9px;
          font-weight: 900;
          color: #0f172a;
          letter-spacing: 0.05em;
          text-align: right;
          box-shadow: 0 -2px 10px rgba(0,0,0,0.04);
        }

        /* ── 2. PILLARS SECTION ── */
        .mobile-pillars-section {
          background-color: #ffffff;
          padding: 80px 20px;
          border-bottom: 1px solid #e2e8f0;
        }
        .mobile-pillars-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .mobile-pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .mobile-pillar-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 30px 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .mobile-pillar-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(15, 23, 42, 0.06);
          border-color: #cbd5e1;
        }
        .mobile-pillar-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;
        }
        .mobile-pillar-icon {
          font-size: 24px;
        }
        .mobile-pillar-badge {
          font-size: 9.5px;
          font-weight: 800;
          color: #0284c7;
          background: #e0f2fe;
          padding: 3px 8px;
          border-radius: 6px;
          text-transform: uppercase;
        }
        .mobile-pillar-title {
          font-size: 18px;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
        }
        .mobile-pillar-desc {
          font-size: 13.5px;
          line-height: 1.6;
          color: #64748b;
          margin: 0;
        }

        /* ── 3. FRAMEWORK INSPECTOR SECTION ── */
        .mobile-stacks-section {
          background-color: #f8fafc;
          padding: 90px 20px;
          border-bottom: 1px solid #e2e8f0;
        }
        .mobile-stacks-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .mobile-framework-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }
        .mobile-tab-btn {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          color: #475569;
          font-size: 13.5px;
          font-weight: 700;
          padding: 10px 20px;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .mobile-tab-btn:hover {
          border-color: #cbd5e1;
          color: #0f172a;
        }
        .mobile-tab-btn.active {
          background: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);
        }

        .mobile-stack-canvas {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 32px;
          padding: 40px;
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 40px;
          box-shadow: 0 20px 48px rgba(15, 23, 42, 0.04);
        }
        .mobile-stack-left {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .mobile-stag-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }
        .mobile-sbadge {
          background: #e0f2fe;
          color: #0284c7;
          font-size: 10px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 6px;
          text-transform: uppercase;
        }
        .mobile-sframework {
          font-family: monospace;
          font-size: 11px;
          color: #64748b;
          font-weight: 600;
        }
        .mobile-stitle {
          font-size: 28px;
          font-weight: 900;
          color: #0f172a;
          margin: 0 0 10px 0;
        }
        .mobile-sdesc {
          font-size: 14px;
          color: #64748b;
          line-height: 1.6;
          margin: 0 0 24px 0;
        }
        .mobile-spec-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 20px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 16px;
        }
        .mobile-spec-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .mobile-spec-lbl {
          font-size: 10px;
          color: #94a3b8;
          font-weight: 700;
          text-transform: uppercase;
        }
        .mobile-spec-val {
          font-size: 12.5px;
          color: #0f172a;
          font-weight: 800;
        }
        .mobile-bestfor-box {
          font-size: 12.5px;
          line-height: 1.5;
          color: #334155;
          background: #f1f5f9;
          border-left: 3px solid #0ea5e9;
          padding: 10px 14px;
          border-radius: 0 10px 10px 0;
          margin-bottom: 28px;
        }
        .mobile-saction-row {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }
        .mobile-btn-primary {
          background: #0f172a;
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 9999px;
          font-size: 13.5px;
          font-weight: 800;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }
        .mobile-btn-primary:hover {
          background: #1e293b;
          transform: translateY(-1px);
        }
        .mobile-btn-ghost {
          color: #475569;
          font-size: 13.5px;
          font-weight: 700;
          text-decoration: none;
        }
        .mobile-btn-ghost:hover {
          color: #0f172a;
        }

        .mobile-stack-right {
          background: #090d16;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35);
        }
        .mobile-scode-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 18px;
          background: rgba(255, 255, 255, 0.04);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .mobile-scode-dots {
          display: flex;
          gap: 6px;
        }
        .mobile-scode-dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .mobile-scode-file {
          font-family: monospace;
          font-size: 11px;
          color: #94a3b8;
          font-weight: 600;
        }
        .mobile-scopy-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #f1f5f9;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        .mobile-scopy-btn:hover {
          background: rgba(255, 255, 255, 0.16);
        }
        .mobile-scode-pre {
          padding: 20px;
          margin: 0;
          font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
          font-size: 12px;
          line-height: 1.65;
          color: #38bdf8;
          overflow-x: auto;
          flex: 1;
        }

        /* ── 4. INDUSTRY SOLUTIONS SECTION ── */
        .mobile-solutions-section {
          background-color: #ffffff;
          padding: 90px 20px;
          border-bottom: 1px solid #e2e8f0;
        }
        .mobile-solutions-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .mobile-solutions-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .mobile-sol-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 32px 26px;
          display: flex;
          flex-direction: column;
          transition: all 0.25s ease;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.02);
        }
        .mobile-sol-card:hover {
          transform: translateY(-4px);
          border-color: #0ea5e9;
          box-shadow: 0 16px 36px rgba(15, 23, 42, 0.07);
        }
        .mobile-sol-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .mobile-sol-icon {
          font-size: 26px;
        }
        .mobile-sol-badge {
          font-size: 9.5px;
          font-weight: 800;
          color: #0284c7;
          background: #e0f2fe;
          padding: 3px 8px;
          border-radius: 6px;
          text-transform: uppercase;
        }
        .mobile-sol-title {
          font-size: 18px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 8px 0;
        }
        .mobile-sol-desc {
          font-size: 13px;
          line-height: 1.6;
          color: #64748b;
          margin: 0 0 16px 0;
        }
        .mobile-sol-stat {
          font-size: 11.5px;
          font-weight: 700;
          color: #0f172a;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 6px 10px;
          border-radius: 8px;
          margin-bottom: 16px;
        }
        .mobile-sol-stat span {
          color: #0284c7;
        }
        .mobile-sol-bullets {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px dashed #e2e8f0;
        }
        .mobile-sol-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          color: #334155;
          line-height: 1.4;
        }
        .mobile-sol-check {
          color: #10b981;
          font-weight: 800;
        }

        /* ── 5. LAYERED ARCHITECTURE SECTION ── */
        .mobile-layer-section {
          background-color: #f8fafc;
          padding: 90px 20px;
          border-bottom: 1px solid #e2e8f0;
        }
        .mobile-layer-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .mobile-layer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .mobile-layer-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 28px 22px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .mobile-layer-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 30px rgba(15, 23, 42, 0.05);
        }
        .mobile-layer-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .mobile-layer-num {
          font-size: 26px;
          font-weight: 900;
          color: #0f172a;
        }
        .mobile-layer-icon {
          font-size: 20px;
        }
        .mobile-layer-tag {
          font-size: 9.5px;
          font-weight: 800;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 6px;
        }
        .mobile-layer-title {
          font-size: 16px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 8px 0;
        }
        .mobile-layer-desc {
          font-size: 12.5px;
          line-height: 1.55;
          color: #64748b;
          margin: 0;
        }
        .mobile-layer-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #0ea5e9, #38bdf8);
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .mobile-layer-card:hover .mobile-layer-indicator {
          opacity: 1;
        }

        /* ── 6. PERFORMANCE SLA BENCHMARK ── */
        .mobile-perf-section {
          background-color: #ffffff;
          padding: 90px 20px;
          border-bottom: 1px solid #e2e8f0;
        }
        .mobile-perf-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .mobile-perf-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .mobile-perf-left {
          display: flex;
          flex-direction: column;
        }
        .mobile-gauge-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .mobile-gauge-title {
          font-size: 16px;
          font-weight: 800;
          color: #0f172a;
        }
        .mobile-gauge-sub {
          font-size: 12px;
          color: #64748b;
          margin-top: 2px;
        }
        .mobile-gauge-svg {
          flex-shrink: 0;
        }

        .mobile-perf-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .mobile-metric-row {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .mobile-metric-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .mobile-metric-name {
          font-size: 13.5px;
          font-weight: 700;
          color: #0f172a;
        }
        .mobile-metric-val {
          font-size: 13.5px;
          font-weight: 900;
        }
        .mobile-metric-bar-bg {
          width: 100%;
          height: 6px;
          background: #e2e8f0;
          border-radius: 9999px;
          overflow: hidden;
        }
        .mobile-metric-bar-fill {
          height: 100%;
          border-radius: 9999px;
        }

        /* ── 7. PROCESS LIFECYCLE ── */
        .mobile-process-section {
          background-color: #f8fafc;
          padding: 90px 20px;
          border-bottom: 1px solid #e2e8f0;
        }
        .mobile-process-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .mobile-process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .mobile-process-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 30px 22px;
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .mobile-process-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(15, 23, 42, 0.05);
        }
        .mobile-proc-num-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .mobile-proc-num {
          font-size: 28px;
          font-weight: 900;
          color: #0f172a;
        }
        .mobile-proc-icon {
          font-size: 24px;
        }
        .mobile-proc-tag {
          font-family: monospace;
          font-size: 10px;
          font-weight: 800;
          color: #0284c7;
          background: #e0f2fe;
          padding: 3px 8px;
          border-radius: 6px;
          width: fit-content;
          margin-bottom: 10px;
        }
        .mobile-proc-title {
          font-size: 16px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 8px 0;
        }
        .mobile-proc-desc {
          font-size: 13px;
          line-height: 1.6;
          color: #64748b;
          margin: 0;
        }

        /* ── 8. FAQ SECTION ── */
        .mobile-faq-section {
          background-color: #ffffff;
          padding: 90px 20px;
          border-bottom: 1px solid #e2e8f0;
        }
        .mobile-faq-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .mobile-faq-layout {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 40px;
          align-items: start;
        }
        .mobile-faq-sidebar {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 36px 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: sticky;
          top: 100px;
        }
        .mobile-faq-sidebar h3 {
          font-size: 22px;
          font-weight: 900;
          color: #0f172a;
          margin: 0;
        }
        .mobile-faq-sidebar p {
          font-size: 13.5px;
          line-height: 1.6;
          color: #64748b;
          margin: 0;
        }
        .mobile-faq-contact-btn {
          background: #0f172a;
          color: #ffffff;
          padding: 12px 20px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
          text-align: center;
          transition: background-color 0.2s ease;
        }
        .mobile-faq-contact-btn:hover {
          background: #1e293b;
        }
        .mobile-faq-stat-box {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 16px;
          text-align: center;
          margin-top: 8px;
        }
        .mobile-faq-stat-num {
          font-size: 26px;
          font-weight: 900;
          color: #0ea5e9;
        }
        .mobile-faq-stat-lbl {
          font-size: 10.5px;
          color: #64748b;
          font-weight: 600;
          text-transform: uppercase;
        }

        .mobile-faq-accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .mobile-faq-item {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 20px 24px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .mobile-faq-item:hover {
          background: #f1f5f9;
          border-color: #cbd5e1;
        }
        .mobile-faq-item.open {
          background: #ffffff;
          border-color: #0ea5e9;
          box-shadow: 0 6px 20px rgba(14, 165, 233, 0.06);
        }
        .mobile-faq-summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .mobile-faq-idx {
          font-family: monospace;
          font-size: 12px;
          font-weight: 800;
          color: #0ea5e9;
        }
        .mobile-faq-q {
          font-size: 15px;
          font-weight: 800;
          color: #0f172a;
          flex: 1;
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
        }
        .mobile-faq-a {
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px solid #f1f5f9;
          font-size: 13.5px;
          line-height: 1.65;
          color: #475569;
        }

        /* ── 9. BOTTOM CTA BANNER ── */
        .mobile-cta-banner-section {
          background-color: #ffffff;
          padding: 80px 20px 100px;
        }
        .mobile-cta-banner-card {
          max-width: 1200px;
          margin: 0 auto;
          background: linear-gradient(135deg, #090d16 0%, #0f172a 60%, #1e293b 100%);
          border-radius: 36px;
          padding: clamp(40px, 6vw, 70px) clamp(24px, 5vw, 60px);
          position: relative;
          overflow: hidden;
          box-shadow: 0 30px 70px rgba(15, 23, 42, 0.2);
        }
        .mobile-cta-glow-orb {
          position: absolute;
          top: -80px;
          right: -80px;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(215, 248, 46, 0.25) 0%, rgba(14, 165, 233, 0.15) 50%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .mobile-cta-inner {
          position: relative;
          z-index: 10;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .mobile-cta-title {
          font-size: clamp(26px, 4vw, 42px);
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -1.2px;
          line-height: 1.18;
          margin: 0 0 18px 0;
        }
        .mobile-cta-desc {
          font-size: 15px;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.75);
          margin: 0 0 36px 0;
          max-width: 680px;
        }
        .mobile-cta-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .mobile-cta-btn-primary {
          background-color: #d7f82e;
          color: #090d16;
          padding: 15px 32px;
          border-radius: 9999px;
          font-size: 14px;
          font-weight: 900;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(215, 248, 46, 0.4);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .mobile-cta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(215, 248, 46, 0.55);
        }
        .mobile-cta-btn-ghost {
          color: rgba(255, 255, 255, 0.85);
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          padding: 14px 24px;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: background-color 0.2s ease;
        }
        .mobile-cta-btn-ghost:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        /* ── RESPONSIVE MEDIA QUERIES ── */
        @media (max-width: 1100px) {
          .mobile-hero-grid {
            grid-template-columns: 1fr;
          }
          .mobile-hero-right-card {
            flex-direction: column;
            align-items: center;
            padding-bottom: 50px;
          }
          .mobile-floating-chips {
            max-width: 100%;
            width: 100%;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
          }
          .mobile-fchip {
            flex: 1;
            min-width: 180px;
          }
          .mobile-pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .mobile-stack-canvas {
            grid-template-columns: 1fr;
          }
          .mobile-solutions-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .mobile-layer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .mobile-perf-grid {
            grid-template-columns: 1fr;
            gap: 32px;
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
            padding-top: 100px;
            padding-left: 14px;
            padding-right: 14px;
          }
          .mobile-hero-left-card,
          .mobile-hero-right-card {
            border-radius: 28px;
            padding: 24px 18px;
          }
          .mobile-pillars-grid,
          .mobile-solutions-grid,
          .mobile-layer-grid,
          .mobile-process-grid {
            grid-template-columns: 1fr;
          }
          .mobile-phone-mockup {
            width: 100%;
            max-width: 270px;
          }
          .mobile-stack-canvas {
            padding: 24px 18px;
            border-radius: 24px;
          }
          .mobile-cta-banner-card {
            border-radius: 28px;
            padding: 40px 20px;
          }
        }
      `}</style>
    </div>
  );
}
