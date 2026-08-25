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
  image: string;
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
    ],
    image: "/fintech_mockup_1787414064376.jpg"
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
    ],
    image: "/healthcare_mockup_1787414078229.jpg"
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
    ],
    image: "/ondemand_mockup_1787414092810.jpg"
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
    ],
    image: "/ecommerce_mockup_1787414107806.jpg"
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
    ],
    image: "/enterprise_mockup_1787414120314.jpg"
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
    ],
    image: "/social_mockup_1787414135953.jpg"
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
      {/* ── 1. HERO SECTION ── */}
      <section className="hero-section-wrapper" style={{
        background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
        position: "relative",
        overflow: "hidden",
        padding: "100px 20px 40px",
        fontFamily: "Inter, sans-serif"
      }}>

        {/* Abstract Graphics */}
        <div style={{ position: "absolute", top: "-10%", left: "-10%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "20%", right: "-15%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)", borderRadius: "50%", pointerEvents: "none" }} />

        <div className="hero-split-layout" style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", flexWrap: "nowrap", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 10 }}>

          {/* Text Content (1 Hisse / Left) */}
          <div style={{ flex: "1 1 50%", textAlign: "left", paddingRight: "140px", paddingBottom: "40px", marginTop: "60px", minWidth: 0 }}>
            <h1 className="hero-heading" style={{ fontWeight: "800", color: "#111827", lineHeight: "1.1", marginBottom: "30px", letterSpacing: "-1.5px", whiteSpace: "nowrap" }}>
              Mobile Apps<br />for iOS & Android
            </h1>
            <p style={{ fontSize: "16px", color: "#4b5563", lineHeight: "1.6", marginBottom: "40px" }}>
              Deliver seamless, native-like mobile experiences to your users with our expert custom app development services. From intuitive UI/UX design to robust backend integration, we build scalable iOS and Android applications that drive engagement and accelerate your business growth.
            </p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "16px", flexWrap: "wrap" }}>
              <a href="/contact" style={{ background: "#111827", color: "#fff", textDecoration: "none", border: "none", padding: "16px 32px", borderRadius: "99px", fontSize: "16px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "8px", cursor: "pointer", boxShadow: "0 10px 25px rgba(17,24,39,0.2)", transition: "all 0.2s ease" }}>
                Contact Us
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

          </div>

          {/* Phones Layout (3 Hisse / Right) */}
          <div className="mobile-apps-phones-wrapper" style={{ flex: "1 1 50%", display: "flex", justifyContent: "center", alignItems: "flex-end", height: "550px", marginTop: "-50px", marginLeft: "-120px", position: "relative", zIndex: 10, minWidth: 0 }}>

            {/* LEFT PHONE */}
            <div className="ma-left-phone" style={{ width: "260px", height: "400px", background: "#f8fafc", borderRadius: "32px", border: "10px solid #111827", position: "relative", transform: "translateX(40px)", zIndex: 5, overflow: "visible", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
              <div style={{ width: "90px", height: "20px", background: "#111827", borderRadius: "0 0 10px 10px", margin: "0 auto", position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)" }} />

              <div className="ma-float-left-1" style={{ position: "absolute", left: "-80px", top: "60px", width: "220px", background: "#fff", borderRadius: "16px", padding: "12px", boxShadow: "0 10px 25px rgba(0,0,0,0.08)", zIndex: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#fdf4ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>🔬</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "11px", fontWeight: "700", color: "#1e293b" }}>Annual Science Fair</div>
                    <div style={{ fontSize: "9px", color: "#64748b" }}>July 18 • 10:00 AM</div>
                  </div>
                  <div style={{ fontSize: "9px", color: "#94a3b8", fontWeight: "600", textAlign: "right" }}>⏱️<br />2 hour</div>
                </div>
              </div>

              <div className="ma-float-left-2" style={{ position: "absolute", left: "-80px", top: "125px", width: "220px", background: "#fff", borderRadius: "16px", padding: "12px", boxShadow: "0 10px 25px rgba(0,0,0,0.08)", zIndex: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#ecfeff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>👨‍🏫</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "11px", fontWeight: "700", color: "#1e293b" }}>Parent-Teacher Meeting</div>
                    <div style={{ fontSize: "9px", color: "#64748b" }}>July 22 • 09:30 AM</div>
                  </div>
                  <div style={{ fontSize: "9px", color: "#94a3b8", fontWeight: "600", textAlign: "right" }}>⏱️<br />30 min</div>
                </div>
              </div>

              <div style={{ padding: "40px 16px 16px", height: "100%", background: "linear-gradient(180deg, #e0e7ff 0%, #f8fafc 100%)", borderRadius: "20px" }}>
                <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                  <span style={{ fontSize: "10px", fontWeight: "700", background: "#fff", padding: "4px 8px", borderRadius: "99px", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>All Events</span>
                  <span style={{ fontSize: "10px", fontWeight: "600", color: "#64748b" }}>Exam</span>
                  <span style={{ fontSize: "10px", fontWeight: "600", color: "#64748b" }}>Holidays</span>
                </div>
                <div style={{ background: "#fff", borderRadius: "16px", padding: "16px", height: "200px" }}>
                  <div style={{ textAlign: "center", fontSize: "12px", fontWeight: "700", marginBottom: "12px", color: "#1e293b" }}>July 2025</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "4px", textAlign: "center", fontSize: "9px", color: "#94a3b8", marginBottom: "8px", fontWeight: "600" }}>
                    <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "4px", textAlign: "center", fontSize: "10px", fontWeight: "600", color: "#334155" }}>
                    {Array.from({ length: 14 }).map((_, i) => <span key={i} style={{ padding: "4px 0" }}>{i + 1}</span>)}
                  </div>
                </div>
              </div>
            </div>

            {/* CENTER PHONE */}
            <div className="ma-center-phone" style={{ width: "300px", height: "500px", background: "#faf5ff", borderRadius: "40px", border: "10px solid #111827", position: "relative", zIndex: 10, boxShadow: "0 30px 60px rgba(0,0,0,0.15)", display: "flex", flexDirection: "column" }}>
              <div style={{ width: "100px", height: "24px", background: "#111827", borderRadius: "0 0 12px 12px", margin: "0 auto", position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)" }} />

              <div style={{ padding: "40px 16px 16px", flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#ddd6fe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>👩🏻‍🎓</div>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: "800", color: "#111827" }}>Hello, Annette</div>
                      <div style={{ fontSize: "10px", color: "#6b7280", fontWeight: "500" }}>Grade 10 - Section A</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", boxShadow: "0 2px 5px rgba(0,0,0,0.05)" }}>🔍</div>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", boxShadow: "0 2px 5px rgba(0,0,0,0.05)" }}>🔔</div>
                  </div>
                </div>

                <div style={{ background: "linear-gradient(135deg, #fdf4ff 0%, #ede9fe 100%)", borderRadius: "20px", padding: "16px", marginBottom: "24px", position: "relative", overflow: "hidden" }}>
                  <div style={{ fontSize: "15px", fontWeight: "800", color: "#1e293b", marginBottom: "4px" }}>Ready to Learn? ⭐</div>
                  <div style={{ fontSize: "10px", color: "#64748b", marginBottom: "16px", maxWidth: "60%", lineHeight: "1.4" }}>Assignments, and upcoming events with your personalized dashboard.</div>
                  <button style={{ background: "#8b5cf6", color: "#fff", border: "none", padding: "8px 16px", borderRadius: "99px", fontSize: "10px", fontWeight: "700" }}>View Schedule</button>
                  <div style={{ position: "absolute", right: "-5px", bottom: "-5px", fontSize: "60px", opacity: 0.9 }}>📚</div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <div style={{ fontSize: "13px", fontWeight: "800", color: "#1e293b" }}>Quick Access</div>
                  <div style={{ fontSize: "10px", color: "#8b5cf6", fontWeight: "700" }}>See all</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", marginBottom: "24px" }}>
                  {[{ i: "📓", l: "Homework" }, { i: "📅", l: "Timetable" }, { i: "✅", l: "Attendance" }, { i: "📊", l: "Result" }].map((a, idx) => (
                    <div key={idx} style={{ background: "#fff", borderRadius: "12px", padding: "10px 4px", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", boxShadow: "0 2px 5px rgba(0,0,0,0.02)" }}>
                      <div style={{ fontSize: "18px" }}>{a.i}</div>
                      <div style={{ fontSize: "9px", fontWeight: "700", color: "#475569" }}>{a.l}</div>
                    </div>
                  ))}
                </div>


              </div>
            </div>

            {/* RIGHT PHONE */}
            <div className="ma-right-phone" style={{ width: "260px", height: "400px", background: "#f8fafc", borderRadius: "32px", border: "10px solid #111827", position: "relative", transform: "translateX(-40px)", zIndex: 5, overflow: "visible", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
              <div style={{ width: "90px", height: "20px", background: "#111827", borderRadius: "0 0 10px 10px", margin: "0 auto", position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)" }} />

              <div className="ma-float-right-1" style={{ position: "absolute", right: "-70px", top: "70px", width: "220px", background: "#fff", borderRadius: "16px", padding: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.08)", zIndex: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <div style={{ fontSize: "11px", fontWeight: "800", color: "#1e293b" }}>Academic Overview</div>
                  <div style={{ fontSize: "9px", background: "#f8fafc", padding: "2px 6px", borderRadius: "99px", fontWeight: "600", color: "#64748b" }}>Month ⌄</div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "9px", fontWeight: "700", color: "#1e293b", marginBottom: "6px" }}>
                  <span>Attendance</span>
                  <span>75/100%</span>
                </div>
                <div style={{ width: "100%", height: "12px", background: "#f1f5f9", borderRadius: "99px", marginBottom: "16px" }}>
                  <div style={{ width: "75%", height: "100%", background: "#a78bfa", borderRadius: "99px" }}></div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "9px", fontWeight: "700", color: "#1e293b", marginBottom: "6px" }}>
                  <span>Pending Assignments</span>
                  <span>45/100%</span>
                </div>
                <div style={{ width: "100%", height: "12px", background: "#f1f5f9", borderRadius: "99px" }}>
                  <div style={{ width: "45%", height: "100%", background: "#fbcfe8", borderRadius: "99px" }}></div>
                </div>
              </div>

              <div style={{ padding: "40px 16px 16px", height: "100%", background: "linear-gradient(180deg, #ede9fe 0%, #f8fafc 100%)", borderRadius: "20px" }}>
                <div style={{ fontSize: "13px", fontWeight: "800", color: "#1e293b", marginBottom: "4px" }}>Academic</div>
                <div style={{ fontSize: "10px", color: "#64748b", marginBottom: "16px" }}>Track your learning progress</div>

                <div style={{ background: "linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)", borderRadius: "16px", padding: "16px", color: "#fff", marginBottom: "20px" }}>
                  <div style={{ fontSize: "11px", fontWeight: "700", marginBottom: "4px", lineHeight: "1.3" }}>Celebrate Every Milestone, Grow Every Day</div>
                  <div style={{ fontSize: "28px", marginTop: "10px" }}>⛰️</div>
                </div>

                <div style={{ background: "#fff", borderRadius: "16px", padding: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <div style={{ fontSize: "11px", fontWeight: "700", color: "#1e293b" }}>Overall Progress 🚀</div>
                    <div style={{ fontSize: "13px", fontWeight: "800", color: "#8b5cf6" }}>82%</div>
                  </div>
                  <div style={{ width: "100%", height: "6px", background: "#f1f5f9", borderRadius: "99px", marginBottom: "16px" }}>
                    <div style={{ width: "82%", height: "100%", background: "#8b5cf6", borderRadius: "99px" }}></div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", textAlign: "center" }}>
                    <div><div style={{ fontSize: "12px", fontWeight: "800", color: "#1e293b" }}>385</div><div style={{ fontSize: "8px", color: "#64748b", fontWeight: "600" }}>pts</div></div>
                    <div><div style={{ fontSize: "12px", fontWeight: "800", color: "#1e293b" }}>75%</div><div style={{ fontSize: "8px", color: "#64748b", fontWeight: "600" }}>attendance</div></div>
                    <div><div style={{ fontSize: "12px", fontWeight: "800", color: "#1e293b" }}>45</div><div style={{ fontSize: "8px", color: "#64748b", fontWeight: "600" }}>assignments</div></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. CORE PILLARS SECTION ── */}
      <section className="core-pillars-section" style={{ background: "#ffffff", padding: "40px 24px 80px", fontFamily: "Inter, sans-serif" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 64px" }}>

            <h2 className="core-pillars-heading" style={{ fontSize: "clamp(24px, 3.5vw, 48px)", fontWeight: "900", letterSpacing: "-0.02em", color: "#0f172a", margin: "0 0 20px 0", lineHeight: "1.14" }}>
              Core Pillars of Mobile Engineering
            </h2>
            <p style={{ fontSize: "16px", color: "#64748b", lineHeight: "1.65", margin: 0 }}>
              We architect scalable, offline-first mobile applications with native 120 FPS fluency and bank-grade security for iOS and Android.
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "center", justifyContent: "center" }}>
            {/* Left Graphic Side */}
            <div style={{ flex: "1 1 100%", maxWidth: "500px", position: "relative", minHeight: "450px", overflow: "hidden" }}>
              {/* Background shape */}
              <div style={{
                position: "absolute",
                top: "20px",
                left: "10%",
                width: "80%",
                height: "400px",
                background: "linear-gradient(180deg, #fdf4f8 0%, #faf5ff 100%)",
                borderRadius: "40px",
                zIndex: 0
              }}></div>

              {/* Diamond Icon */}
              <div style={{
                position: "absolute",
                top: "120px",
                left: "5%",
                width: "72px",
                height: "72px",
                background: "linear-gradient(135deg, #a084f5, #7b5ef0)",
                borderRadius: "20px",
                transform: "rotate(45deg)",
                boxShadow: "0 15px 30px rgba(123, 94, 240, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10
              }}>
                <span style={{ transform: "rotate(-45deg)", color: "#fff", fontSize: "28px" }}>💎</span>
              </div>

              {/* Main Card (Client #12) */}
              <div style={{
                position: "absolute",
                top: "40px",
                right: "5%",
                background: "#ffffff",
                borderRadius: "24px",
                padding: "24px",
                width: "70%",
                maxWidth: "320px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
                zIndex: 5
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                  <span style={{ fontSize: "16px", fontWeight: "700", color: "#1a1a2e" }}>Client #12</span>
                  <span style={{ fontSize: "13px", color: "#9ca3af", fontWeight: "600" }}>+ Add new</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {[1, 2, 3].map(i => (
                    <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                      <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: i === 1 ? "#10b981" : "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                        {i === 1 && <span style={{ color: "#fff", fontSize: "12px" }}>✓</span>}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ width: "100%", maxWidth: "180px", height: "8px", background: "#f3f4f6", borderRadius: "4px", marginBottom: "8px" }}></div>
                        <div style={{ width: "70%", maxWidth: "120px", height: "8px", background: "#f3f4f6", borderRadius: "4px" }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bar Chart Box */}
              <div style={{
                position: "absolute",
                bottom: "60px",
                left: "10%",
                background: "#ffffff",
                borderRadius: "16px",
                padding: "16px",
                boxShadow: "0 15px 30px rgba(0,0,0,0.05)",
                zIndex: 10,
                display: "flex",
                alignItems: "flex-end",
                gap: "8px",
                height: "90px"
              }}>
                {[40, 60, 30, 80, 50, 90, 40, 60].map((h, i) => (
                  <div key={i} style={{ width: "8px", height: `${h}%`, background: i === 5 ? "#7b5ef0" : "#f3f4f6", borderRadius: "4px" }}></div>
                ))}
              </div>

              {/* Avatars Box */}
              <div style={{
                position: "absolute",
                bottom: "60px",
                right: "5%",
                background: "#ffffff",
                borderRadius: "99px",
                padding: "8px 16px",
                boxShadow: "0 15px 30px rgba(0,0,0,0.05)",
                zIndex: 10,
                display: "flex",
                alignItems: "center"
              }}>
                {[1, 2, 3].map(i => (
                  <div key={i} style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#f3f4f6", border: "2px solid #fff", marginLeft: i !== 1 ? "-12px" : "0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>👤</div>
                ))}
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#7b5ef0", border: "2px solid #fff", marginLeft: "-12px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "14px", fontWeight: "700" }}>+</div>
              </div>
            </div>

            {/* Right Content Side */}
            <div style={{ flex: "1 1 100%", maxWidth: "500px", display: "flex", flexWrap: "wrap", gap: "40px" }}>

              {/* Left Column (Stats from pillars 0, 1) */}
              <div style={{ display: "flex", flexDirection: "column", gap: "40px", flex: "1 1 200px" }}>
                {corePillars.slice(0, 2).map((pillar) => (
                  <div key={pillar.id}>
                    <div style={{ fontSize: "32px", fontWeight: "800", color: "#1a1a2e", marginBottom: "12px", letterSpacing: "-1px", lineHeight: "1.2" }}>
                      {pillar.title}
                    </div>
                    <div style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.6", fontWeight: "500" }}>
                      {pillar.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column (Features from pillars 2, 3) */}
              <div style={{ display: "flex", flexDirection: "column", gap: "40px", flex: "1 1 200px" }}>
                {corePillars.slice(2, 4).map((pillar) => (
                  <div key={pillar.id}>
                    <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#1a1a2e", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ fontSize: "24px", lineHeight: 1 }}>{pillar.icon}</span> {pillar.title}
                    </h4>
                    <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.7", fontWeight: "400", margin: 0 }}>
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 3. MULTI-PLATFORM & NATIVE ENGINEERING STACKS ── */}
      <section id="stacks" style={{ background: "#ffffff", padding: "80px 24px", fontFamily: "Inter, sans-serif" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "80px" }}>

          {/* Top Section */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "center" }}>
            {/* Left: Title and 2 Stacks (Cross-Platform) */}
            <div style={{ flex: "1 1 500px" }}>

              <h2 style={{ fontSize: "clamp(30px, 3vw, 42px)", fontWeight: "800", color: "#1a1a2e", marginBottom: "16px", lineHeight: "1.2", letterSpacing: "-1px" }}>
                Multi-Platform &amp; Native Engineering Stacks
              </h2>
              <p style={{ fontSize: "15px", color: "#6b7280", lineHeight: "1.7", marginBottom: "40px", maxWidth: "480px" }}>
                We select the optimal framework and rendering architecture for your product, balancing rapid cross-platform deployment with uncompromised 120 FPS performance.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                {/* Render React Native and Flutter here (indices 0 and 3) */}
                {[platformStacks[0], platformStacks[3]].map((p, i) => (
                  <div key={p.id} style={{ display: "flex", gap: "20px" }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "16px", background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>
                      {i === 0 ? "⚛️" : "🦋"}
                    </div>
                    <div>
                      <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#1a1a2e", marginBottom: "8px" }}>{p.name}</h4>
                      <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.6", margin: 0 }}>{p.tagline}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Graphic / Phone Mockup */}
            <div style={{ flex: "1 1 500px", position: "relative", minHeight: "500px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{
                background: "#f8fafc",
                width: "280px",
                height: "540px",
                borderRadius: "40px",
                padding: "16px",
                boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                border: "10px solid #e2e8f0",
                position: "relative",
                overflow: "hidden"
              }}>
                {/* Notch */}
                <div style={{ width: "100px", height: "24px", background: "#e2e8f0", borderRadius: "0 0 16px 16px", position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", zIndex: 20 }}></div>

                {/* App Header Inside Phone */}
                <div style={{ marginTop: "40px", marginBottom: "24px", textAlign: "center" }}>
                  <div style={{ fontSize: "15px", fontWeight: "800", color: "#1a1a2e", letterSpacing: "-0.5px" }}>Frameworks</div>
                  <div style={{ fontSize: "11px", color: "#64748b", fontWeight: "500" }}>Live Performance Stats</div>
                </div>

                <div style={{ position: "relative", zIndex: 10, width: "100%", display: "flex", flexDirection: "column", gap: "16px" }}>
                  {/* Bubble 1: React Native */}
                  <div style={{ background: "#ffffff", borderRadius: "16px", padding: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                      <span style={{ fontSize: "13px", fontWeight: "700", color: "#1a1a2e" }}>{platformStacks[0].name}</span>
                      <span style={{ fontSize: "10px", color: "#0ea5e9", background: "#f0f9ff", padding: "2px 8px", borderRadius: "8px", fontWeight: "700" }}>{platformStacks[0].coldStart} start</span>
                    </div>
                    <p style={{ fontSize: "11px", color: "#6b7280", margin: 0, lineHeight: "1.4" }}>{platformStacks[0].renderingEngine}</p>
                  </div>

                  {/* Bubble 2: Flutter */}
                  <div style={{ background: "#ffffff", borderRadius: "16px", padding: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                      <span style={{ fontSize: "13px", fontWeight: "700", color: "#1a1a2e" }}>{platformStacks[3].name}</span>
                      <span style={{ fontSize: "10px", color: "#0ea5e9", background: "#f0f9ff", padding: "2px 8px", borderRadius: "8px", fontWeight: "700" }}>{platformStacks[3].coldStart} start</span>
                    </div>
                    <p style={{ fontSize: "11px", color: "#6b7280", margin: 0, lineHeight: "1.4" }}>{platformStacks[3].renderingEngine}</p>
                  </div>

                  {/* Bubble 3: 120 FPS */}
                  <div style={{ background: "linear-gradient(135deg, #a084f5, #7b5ef0)", borderRadius: "16px", padding: "16px", boxShadow: "0 8px 16px rgba(123, 94, 240, 0.2)", color: "#fff", marginTop: "8px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>⚡</div>
                      <div>
                        <span style={{ fontSize: "13px", fontWeight: "800", display: "block", marginBottom: "2px" }}>120 FPS Native Performance</span>
                        <span style={{ fontSize: "10px", opacity: 0.9, fontWeight: "500" }}>Across all frameworks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Banner (Purple) for Native Stacks (iOS/Android) */}
          <style>{`
            @media (max-width: 768px) {
              .native-banner-mockup {
                margin: 0 auto 20px auto !important;
                transform: rotate(0deg) !important;
              }
              .native-banner-text {
                text-align: center !important;
                display: flex;
                flex-direction: column;
                align-items: center;
              }
            }
          `}</style>
          <div style={{ position: "relative", borderRadius: "32px", boxShadow: "0 20px 40px rgba(123, 94, 240, 0.2)", marginTop: "40px" }}>

            {/* Background Layer with Overflow Hidden (for the rings) */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(135deg, #a084f5, #7b5ef0)", borderRadius: "32px", overflow: "hidden", zIndex: 0 }}>
              <div style={{ position: "absolute", right: "-5%", top: "-20%", width: "400px", height: "400px", borderRadius: "50%", border: "40px solid rgba(255,255,255,0.05)", zIndex: 0 }}></div>
              <div style={{ position: "absolute", right: "15%", bottom: "-30%", width: "200px", height: "200px", borderRadius: "50%", border: "20px solid rgba(255,255,255,0.05)", zIndex: 0 }}></div>
            </div>

            {/* Content Layer (allows phone to pop out) */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px", padding: "40px", position: "relative", zIndex: 10 }}>

              {/* Phone Mockup on the left */}
              <div className="native-banner-mockup" style={{ flex: "1 1 260px", maxWidth: "260px", height: "380px", position: "relative", margin: "-80px 0 -80px 20px", transform: "rotate(-5deg)" }}>
                <div style={{ background: "#ffffff", width: "100%", height: "100%", borderRadius: "36px", padding: "16px", boxShadow: "0 25px 50px rgba(0,0,0,0.3)", display: "flex", flexDirection: "column", border: "8px solid #f3f4f6" }}>
                  <div style={{ width: "60px", height: "20px", background: "#e5e7eb", borderRadius: "10px", margin: "0 auto 20px" }}></div>

                  {/* Mobile Header */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, #a084f5, #7b5ef0)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "14px" }}>👤</div>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: "800", color: "#1a1a2e" }}>Native Engineering</div>
                      <div style={{ fontSize: "10px", color: "#6b7280" }}>{platformStacks[1].badge}</div>
                    </div>
                  </div>

                  {/* Mobile Card */}
                  <div style={{ background: "#f8fafc", borderRadius: "16px", padding: "16px", marginBottom: "16px", border: "1px solid #e5e7eb" }}>
                    <div style={{ fontSize: "10px", color: "#6b7280", marginBottom: "6px", textTransform: "uppercase", fontWeight: "700", letterSpacing: "0.5px" }}>{platformStacks[1].name}</div>
                    <div style={{ fontSize: "13px", fontWeight: "700", color: "#1a1a2e", marginBottom: "12px" }}>{platformStacks[1].renderingEngine}</div>
                    <div style={{ width: "100%", height: "6px", background: "#e5e7eb", borderRadius: "3px" }}>
                      <div style={{ width: "85%", height: "100%", background: "#a084f5", borderRadius: "3px" }}></div>
                    </div>
                  </div>

                  {/* Mobile List */}
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ display: "flex", gap: "12px", alignItems: "center", background: "#ffffff", padding: "12px", borderRadius: "16px", border: "1px solid #e5e7eb", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
                      <div style={{ width: "32px", height: "32px", borderRadius: "10px", background: "#e0f2fe", display: "flex", alignItems: "center", justifyContent: "center", color: "#0284c7", fontSize: "14px" }}>🤖</div>
                      <div>
                        <div style={{ fontSize: "12px", fontWeight: "700", color: "#1a1a2e" }}>{platformStacks[2].name}</div>
                        <div style={{ fontSize: "10px", color: "#6b7280", marginTop: "2px" }}>{platformStacks[2].coldStart} cold start</div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Bottom Button */}
                  <div style={{ width: "100%", padding: "14px 0", background: "linear-gradient(to right, #a084f5, #7b5ef0)", borderRadius: "16px", textAlign: "center", color: "#fff", fontSize: "13px", fontWeight: "800", boxShadow: "0 8px 16px rgba(123, 94, 240, 0.3)" }}>
                    Deploy Now
                  </div>
                </div>
              </div>

              {/* Banner Text on the right */}
              <div className="native-banner-text" style={{ flex: "1 1 300px", position: "relative", zIndex: 10, color: "#ffffff" }}>
                <h3 style={{ fontSize: "32px", fontWeight: "800", marginBottom: "16px", lineHeight: "1.2", letterSpacing: "-0.5px" }}>
                  Ready? Let's Build with {platformStacks[1].badge} & {platformStacks[2].badge}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: "1.7", opacity: 0.9, marginBottom: "32px", maxWidth: "500px" }}>
                  {platformStacks[1].tagline} {platformStacks[2].tagline}
                </p>
                <button style={{ background: "linear-gradient(to right, #f472b6, #d946ef)", color: "#fff", border: "none", padding: "14px 28px", borderRadius: "99px", fontSize: "15px", fontWeight: "700", cursor: "pointer", boxShadow: "0 8px 20px rgba(217, 70, 239, 0.4)" }}>
                  Explore Native Stacks →
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 4. INDUSTRY SOLUTIONS (6 BENTO CARDS) ── */}
      <section className="business-vertical-section" style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 56px" }}>

            <h2 style={{ fontSize: "clamp(30px, 3.8vw, 48px)", fontWeight: "900", letterSpacing: "-0.02em", color: "#0f172a", margin: "0 0 20px 0", lineHeight: "1.14" }}>
              Tailored Mobile Applications by Business Vertical
            </h2>
            <p style={{ fontSize: "16px", color: "#64748b", lineHeight: "1.65", margin: 0 }}>
              From biometric fintech wallets to HIPAA-compliant telemedicine and real-time geospatial dispatch systems, we engineer mission-critical mobile platforms.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "100px", marginTop: "40px" }}>
            {industrySolutions.map((sol, index) => (
              <div key={sol.id} style={{
                display: "flex",
                flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                gap: "80px",
                alignItems: "center",
                flexWrap: "wrap"
              }}>
                {/* Left Side: Graphic with floating elements */}
                <div style={{ flex: "1 1 400px", position: "relative", minHeight: "450px", display: "flex", justifyContent: "center", alignItems: "center" }}>

                  {/* Big background shape */}
                  <div style={{
                    position: "absolute",
                    width: "320px",
                    height: "380px",
                    background: index % 2 === 0 ? "linear-gradient(135deg, #f472b6, #d946ef)" : "linear-gradient(135deg, #60a5fa, #3b82f6)",
                    borderRadius: "40px",
                    zIndex: 0,
                    left: index % 2 === 0 ? "10%" : "auto",
                    right: index % 2 !== 0 ? "10%" : "auto",
                    top: "5%"
                  }}></div>

                  {/* The actual image */}
                  <img src={sol.image} alt={sol.title} style={{
                    position: "relative",
                    zIndex: 10,
                    width: "300px",
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "32px",
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                  }} />

                  {/* Top Floating Card (Badge) */}
                  <div style={{
                    position: "absolute",
                    top: "20px",
                    right: index % 2 === 0 ? "10%" : "auto",
                    left: index % 2 !== 0 ? "10%" : "auto",
                    background: "#ffffff",
                    padding: "14px 24px",
                    borderRadius: "99px",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                    zIndex: 20,
                    display: "flex",
                    alignItems: "center",
                    gap: "10px"
                  }}>
                    <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#ecfdf5", display: "flex", alignItems: "center", justifyContent: "center", color: "#10b981", fontSize: "14px" }}>★</div>
                    <span style={{ fontSize: "14px", fontWeight: "800", color: "#1a1a2e" }}>{sol.badge}</span>
                  </div>

                  {/* Bottom Floating Card (Stats) */}
                  <div style={{
                    position: "absolute",
                    bottom: "20px",
                    left: index % 2 === 0 ? "5%" : "auto",
                    right: index % 2 !== 0 ? "5%" : "auto",
                    background: "linear-gradient(135deg, #a084f5, #7b5ef0)",
                    padding: "24px",
                    borderRadius: "24px",
                    boxShadow: "0 20px 40px rgba(123,94,240,0.3)",
                    zIndex: 20,
                    width: "240px"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                      <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>{sol.icon}</div>
                      <span style={{ fontSize: "13px", fontWeight: "800", color: "#ffffff", lineHeight: "1.3" }}>{sol.stats}</span>
                    </div>
                    {/* Abstract list lines */}
                    <div style={{ width: "100%", height: "6px", background: "rgba(255,255,255,0.2)", borderRadius: "3px", marginBottom: "10px" }}></div>
                    <div style={{ width: "80%", height: "6px", background: "rgba(255,255,255,0.2)", borderRadius: "3px", marginBottom: "10px" }}></div>
                    <div style={{ width: "60%", height: "6px", background: "rgba(255,255,255,0.2)", borderRadius: "3px" }}></div>

                    {/* Avatars */}
                    <div style={{ display: "flex", marginTop: "20px" }}>
                      {[1, 2, 3].map(i => (
                        <div key={i} style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#e2e8f0", border: "2px solid #7b5ef0", marginLeft: i !== 1 ? "-10px" : "0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px" }}>👤</div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: Content */}
                <div style={{ flex: "1 1 400px", padding: "20px" }}>
                  {/* Decorative Quote Icon */}
                  <div style={{ fontSize: "72px", color: "#a084f5", lineHeight: "1", opacity: 0.5, marginBottom: "10px", fontFamily: "serif" }}>"</div>

                  <h3 style={{ fontSize: "clamp(28px, 3.5vw, 36px)", fontWeight: "800", color: "#1a1a2e", margin: "0 0 24px 0", lineHeight: "1.25", letterSpacing: "-0.5px" }}>
                    {sol.title}
                  </h3>

                  <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#475569", margin: "0 0 32px 0" }}>
                    {sol.desc}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "16px", borderTop: "2px solid #f1f5f9", paddingTop: "32px" }}>
                    {sol.bullets.map((b, bi) => (
                      <div key={bi} style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "15px", fontWeight: "700", color: "#1a1a2e" }}>
                        <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "#ecfdf5", display: "flex", alignItems: "center", justifyContent: "center", color: "#10b981", fontSize: "12px", marginTop: "2px", flexShrink: 0 }}>✓</div>
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. LAYERED MOBILE STACK ARCHITECTURE ── */}
      <section className="layered-stack-section" style={{ background: "#ffffff", padding: "80px 24px", fontFamily: "Inter, sans-serif" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 64px" }}>

            <h2 className="core-pillars-heading" style={{ fontSize: "clamp(26px, 3.5vw, 54px)", fontWeight: "900", letterSpacing: "-0.03em", color: "#0f172a", margin: "0 0 24px 0", lineHeight: "1.1", whiteSpace: "nowrap" }}>
              How We Layer Your Mobile Stack
            </h2>
            <p style={{ fontSize: "17px", color: "#64748b", lineHeight: "1.7", margin: "0", maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
              A high-performance layered pipeline from GPU-accelerated interface to local SQLite persistence and cloud edge orchestration.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: "32px" }}>
            {archLayers.map((layer, i) => (
              <div key={i} style={{
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "32px",
                padding: "32px",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "24px",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.03)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                position: "relative",
                overflow: "hidden"
              }}>
                {/* Left Side: Content */}
                <div style={{ flex: "1 1 240px", display: "flex", flexDirection: "column", zIndex: 10 }}>
                  <div style={{ width: "64px", height: "64px", borderRadius: "20px", background: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", flexShrink: 0, border: "1px solid #e2e8f0", boxShadow: "inset 0 2px 4px rgba(255,255,255,1)", marginBottom: "20px" }}>
                    {layer.icon}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                    <span style={{ fontSize: "10.5px", fontWeight: "800", color: "#0369a1", background: "#f0f9ff", border: "1px solid #e0f2fe", padding: "4px 10px", borderRadius: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                      {layer.tag}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#0f172a", margin: "0 0 12px 0", letterSpacing: "-0.5px" }}>{layer.title}</h3>
                  <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#475569", margin: 0, paddingRight: "10px" }}>{layer.desc}</p>
                </div>

                {/* Right Side: Mini Phone Mockup */}
                <div style={{ width: "140px", flexShrink: 0, position: "relative", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: "120px", height: "240px", background: "#ffffff", borderRadius: "20px", border: "6px solid #e2e8f0", boxShadow: "0 10px 25px rgba(0,0,0,0.1)", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>

                    {/* Dynamic Mockup Contents Based on Layer */}
                    {layer.num === "01" && (
                      <div style={{ padding: "8px", display: "flex", flexDirection: "column", gap: "8px", height: "100%", background: "#f8fafc" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                          <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#a084f5" }}></div>
                          <div style={{ flex: 1, height: "6px", borderRadius: "3px", background: "#cbd5e1" }}></div>
                        </div>
                        <div style={{ flex: 1, borderRadius: "8px", background: "linear-gradient(135deg, #a084f5, #7b5ef0)" }}></div>
                        <div style={{ flex: 1, borderRadius: "8px", background: "#ffffff", border: "1px solid #e2e8f0" }}></div>
                        <div style={{ height: "20px", borderRadius: "4px", background: "#e2e8f0", marginTop: "auto" }}></div>
                      </div>
                    )}

                    {layer.num === "02" && (
                      <div style={{ padding: "8px", display: "flex", flexDirection: "column", gap: "6px", height: "100%", background: "#f0fdf4" }}>
                        <div style={{ textAlign: "center", fontSize: "10px", color: "#16a34a", fontWeight: "800", marginBottom: "4px" }}>SYNCED ✓</div>
                        {[1, 2, 3, 4, 5].map(j => (
                          <div key={j} style={{ background: "#ffffff", borderRadius: "6px", padding: "6px", border: "1px solid #bbf7d0", display: "flex", alignItems: "center", gap: "6px" }}>
                            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e" }}></div>
                            <div style={{ flex: 1, height: "4px", borderRadius: "2px", background: "#cbd5e1" }}></div>
                          </div>
                        ))}
                      </div>
                    )}

                    {layer.num === "03" && (
                      <div style={{ padding: "8px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", background: "#1e293b", color: "#ffffff" }}>
                        <div style={{ fontSize: "28px", marginBottom: "16px", color: "#a084f5" }}>🔒</div>
                        <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(160, 132, 245, 0.2)", border: "2px solid #a084f5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", marginBottom: "16px" }}>👤</div>
                        <div style={{ fontSize: "8px", fontWeight: "700", letterSpacing: "1px", color: "#10b981", background: "rgba(16,185,129,0.2)", padding: "4px 8px", borderRadius: "8px" }}>SECURE ENCLAVE</div>
                      </div>
                    )}

                    {layer.num === "04" && (
                      <div style={{ padding: "8px", display: "flex", flexDirection: "column", gap: "8px", height: "100%", background: "#f8fafc" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div style={{ fontSize: "12px" }}>☁️</div>
                          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#3b82f6", boxShadow: "0 0 8px #3b82f6" }}></div>
                        </div>
                        <div style={{ height: "40px", borderRadius: "8px", background: "#e0f2fe", border: "1px dashed #7dd3fc" }}></div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                          <div style={{ fontSize: "6px", color: "#64748b" }}>GET /api/v1/sync</div>
                          <div style={{ width: "100%", height: "2px", background: "#cbd5e1" }}><div style={{ width: "100%", height: "100%", background: "#3b82f6" }}></div></div>
                          <div style={{ fontSize: "6px", color: "#64748b" }}>WSS connection live</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Huge faint number */}
                <span style={{ fontSize: "160px", fontWeight: "900", color: "#f1f5f9", lineHeight: "1", position: "absolute", bottom: "-40px", left: "-20px", zIndex: 0, letterSpacing: "-8px", opacity: 0.6 }}>
                  {layer.num}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 6. PERFORMANCE & DEVICE SLA BENCHMARK ── */}
      <section className="sla-benchmark-section" style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "60px", alignItems: "center" }}>
            {/* Left Column */}
            <div>

              <h2 style={{ fontSize: "clamp(30px, 3.8vw, 48px)", fontWeight: "900", color: "#0f172a", margin: "0 0 20px 0", letterSpacing: "-0.02em", lineHeight: "1.14" }}>
                Engineered for 99.9% Crash-Free Production SLA
              </h2>
              <p style={{ fontSize: "16px", color: "#64748b", lineHeight: "1.65", margin: "0 0 40px 0" }}>
                Our architecture guarantees sub-millisecond local query routing, sub-second cold starts, and uncompromised 120 FPS fluid motion under heavy production loads.
              </p>

              <div style={{ background: "#f4f5f7", border: "1px solid #e5e7eb", borderRadius: "24px", padding: "24px 28px", display: "flex", alignItems: "center", gap: "24px" }}>
                <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "#0ea5e9", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontWeight: "900", fontSize: "16px", flexShrink: 0, boxShadow: "0 10px 20px rgba(14, 165, 233, 0.3)" }}>
                  120fps
                </div>
                <div>
                  <div style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a" }}>Fluidity &amp; Crash-Free SLA</div>
                  <div style={{ fontSize: "14px", color: "#64748b", marginTop: "4px" }}>Production Device Benchmark</div>
                </div>
              </div>
            </div>

            {/* Right Column Progress Rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { name: "UI Rendering Smoothness (Metal/Fabric)", val: "60 / 120 FPS", fill: "98%", grad: "linear-gradient(90deg, #0ea5e9, #38bdf8)" },
                { name: "App Cold Start Time (Hermes Bytecode)", val: "< 0.38s", fill: "94%", grad: "linear-gradient(90deg, #0f172a, #334155)" },
                { name: "Local SQLite Query Latency", val: "< 4ms", fill: "96%", grad: "linear-gradient(90deg, #10b981, #34d399)" },
                { name: "Base Memory Heap Footprint", val: "< 42MB", fill: "90%", grad: "linear-gradient(90deg, #7c3aed, #a855f7)" },
              ].map((m, idx) => (
                <div key={idx} style={{ background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: "20px", padding: "24px 28px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <span style={{ fontSize: "14px", fontWeight: "700", color: "#0f172a" }}>{m.name}</span>
                    <strong style={{ fontSize: "14px", color: "#0f172a" }}>{m.val}</strong>
                  </div>
                  <div style={{ width: "100%", height: "8px", background: "#f1f5f9", borderRadius: "99px", overflow: "hidden" }}>
                    <div style={{ width: m.fill, height: "100%", background: m.grad, borderRadius: "99px" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. 4-STAGE DELIVERY PROCESS ── */}
      <section style={{ background: "#f8fafc", padding: "80px 24px", fontFamily: "Inter, sans-serif" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 80px" }}>
            <h2 className="core-pillars-heading" style={{ fontSize: "clamp(26px, 3.2vw, 54px)", fontWeight: "900", letterSpacing: "-0.03em", color: "#0f172a", margin: "0 0 24px 0", lineHeight: "1.1", whiteSpace: "nowrap" }}>
              4-Stage Mobile App Development Process
            </h2>
            <p style={{ fontSize: "17px", color: "#64748b", lineHeight: "1.7", margin: "0 auto", maxWidth: "600px" }}>
              From interactive Figma wireframes to TestFlight beta testing and fast-track App Store approvals, our pods deliver production-grade mobile builds.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: "32px" }}>
            {deliverySteps.map((step, i) => {
              const colors = [
                { hex: "#d946ef", grad: "linear-gradient(135deg, #f472b6, #d946ef)", shadow: "rgba(217,70,239,0.3)", bg: "rgba(217,70,239,0.08)" },
                { hex: "#3b82f6", grad: "linear-gradient(135deg, #38bdf8, #3b82f6)", shadow: "rgba(59,130,246,0.3)", bg: "rgba(59,130,246,0.08)" },
                { hex: "#10b981", grad: "linear-gradient(135deg, #34d399, #10b981)", shadow: "rgba(16,185,129,0.3)", bg: "rgba(16,185,129,0.08)" },
                { hex: "#7b5ef0", grad: "linear-gradient(135deg, #a084f5, #7b5ef0)", shadow: "rgba(123,94,240,0.3)", bg: "rgba(123,94,240,0.08)" }
              ];
              const c = colors[i];

              return (
                <div key={i} style={{
                  background: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "32px",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "24px",
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.03)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  borderTop: `6px solid ${c.hex}`
                }}>
                  {/* Left Side: Content */}
                  <div style={{ flex: "1 1 240px", display: "flex", flexDirection: "column", zIndex: 10 }}>
                    <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: c.grad, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", flexShrink: 0, boxShadow: `0 8px 16px ${c.shadow}`, marginBottom: "20px", color: "#fff" }}>
                      {step.num}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                      <span style={{ fontSize: "10.5px", fontWeight: "800", color: c.hex, background: c.bg, border: `1px solid ${c.hex}30`, padding: "4px 10px", borderRadius: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                        {step.tag}
                      </span>
                    </div>
                    <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#0f172a", margin: "0 0 12px 0", letterSpacing: "-0.5px" }}>{step.title}</h3>
                    <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#475569", margin: 0, paddingRight: "10px" }}>{step.desc}</p>
                  </div>

                  {/* Right Side: Mini Mockup */}
                  <div style={{ width: "140px", flexShrink: 0, position: "relative", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "120px", height: "160px", background: "#f8fafc", borderRadius: "20px", border: "4px solid #e2e8f0", boxShadow: "0 10px 25px rgba(0,0,0,0.05)", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>

                      {step.num === "01" && (
                        <div style={{ padding: "8px", display: "flex", flexDirection: "column", gap: "6px", height: "100%" }}>
                          <div style={{ width: "100%", height: "40px", background: "#e2e8f0", borderRadius: "8px" }}></div>
                          <div style={{ display: "flex", gap: "6px" }}>
                            <div style={{ width: "30%", height: "30px", background: "#e2e8f0", borderRadius: "6px" }}></div>
                            <div style={{ width: "70%", height: "30px", background: "#e2e8f0", borderRadius: "6px" }}></div>
                          </div>
                          <div style={{ flex: 1, background: c.bg, borderRadius: "8px", border: `1px dashed ${c.hex}` }}></div>
                        </div>
                      )}

                      {step.num === "02" && (
                        <div style={{ padding: "8px", display: "flex", flexDirection: "column", gap: "4px", height: "100%", background: "#1e293b" }}>
                          <div style={{ width: "60%", height: "4px", background: "#38bdf8", borderRadius: "2px", marginBottom: "4px" }}></div>
                          <div style={{ width: "80%", height: "4px", background: "#a084f5", borderRadius: "2px" }}></div>
                          <div style={{ width: "40%", height: "4px", background: "#f472b6", borderRadius: "2px" }}></div>
                          <div style={{ width: "90%", height: "4px", background: "#34d399", borderRadius: "2px" }}></div>
                          <div style={{ width: "70%", height: "4px", background: "#f472b6", borderRadius: "2px", marginTop: "8px" }}></div>
                          <div style={{ width: "50%", height: "4px", background: "#38bdf8", borderRadius: "2px" }}></div>
                        </div>
                      )}

                      {step.num === "03" && (
                        <div style={{ padding: "8px", display: "flex", flexDirection: "column", gap: "6px", height: "100%", alignItems: "center", justifyContent: "center" }}>
                          <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#ecfdf5", border: "2px solid #10b981", display: "flex", alignItems: "center", justifyContent: "center", color: "#10b981", fontSize: "20px" }}>✓</div>
                          <div style={{ width: "80%", height: "6px", background: "#e2e8f0", borderRadius: "3px", marginTop: "8px" }}><div style={{ width: "100%", height: "100%", background: "#10b981", borderRadius: "3px" }}></div></div>
                          <div style={{ fontSize: "8px", color: "#64748b", fontWeight: "700" }}>TESTS PASSED</div>
                        </div>
                      )}

                      {step.num === "04" && (
                        <div style={{ padding: "8px", display: "flex", flexDirection: "column", gap: "8px", height: "100%", background: "#f8fafc", alignItems: "center" }}>
                          <div style={{ fontSize: "32px", marginTop: "10px" }}>🚀</div>
                          <div style={{ width: "80%", height: "20px", background: "#0ea5e9", borderRadius: "10px", marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "8px", fontWeight: "800" }}>DEPLOY</div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Huge faded background icon */}
                  <div style={{ position: "absolute", bottom: "-20px", right: "-20px", fontSize: "160px", opacity: 0.03, zIndex: 0, transform: "rotate(-15deg)" }}>
                    {step.icon}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 8. MOBILE ENGINEERING FAQS ── */}
      <section className="faq-section" style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 56px" }}>

            <h2 style={{ fontSize: "clamp(30px, 3.8vw, 48px)", fontWeight: "900", letterSpacing: "-0.02em", color: "#0f172a", margin: "0 0 20px 0", lineHeight: "1.14" }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: "16px", color: "#64748b", lineHeight: "1.65", margin: 0 }}>
              Everything you need to know about our native iOS/Android development, cross-platform stacks, offline sync, and App Store approval guarantees.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "start" }}>
            {/* Sidebar */}
            <div style={{ background: "#f4f5f7", border: "1px solid #e5e7eb", borderRadius: "32px", padding: "40px 32px", display: "flex", flexDirection: "column", gap: "20px", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)" }}>
              <h3 style={{ fontSize: "24px", fontWeight: "900", color: "#0f172a", margin: 0, letterSpacing: "-0.02em" }}>Have a Custom Mobile App in Mind?</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.65", color: "#64748b", margin: 0 }}>
                Speak directly with our principal mobile architect to evaluate offline sync architectures, framework selection, and store approval timelines.
              </p>
              <Link href="/contact" style={{
                background: "#0f172a",
                color: "#ffffff",
                padding: "16px 24px",
                borderRadius: "9999px",
                fontSize: "15px",
                fontWeight: "800",
                textDecoration: "none",
                textAlign: "center",
                marginTop: "10px"
              }}>
                Talk to a Mobile Architect →
              </Link>
              <div style={{ background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: "20px", padding: "24px", textAlign: "center", marginTop: "12px", boxShadow: "0 4px 16px rgba(0,0,0,0.02)" }}>
                <div style={{ fontSize: "32px", fontWeight: "900", color: "#0ea5e9" }}>6–8 Wks</div>
                <div style={{ fontSize: "11px", color: "#64748b", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginTop: "4px" }}>Average MVP Delivery</div>
              </div>
            </div>

            {/* Accordion */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {faqs.map((f, i) => (
                <details key={i} style={{ background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: "24px", padding: "24px 28px", cursor: "pointer", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.02)" }}>
                  <summary style={{ fontWeight: "800", color: "#0f172a", fontSize: "16px", listStyle: "none" }}>{f.q}</summary>
                  <p style={{ color: "#64748b", marginTop: "16px", lineHeight: "1.7", fontSize: "15px", marginBottom: 0 }}>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ── RESPONSIVE STYLING ── */}
      <style jsx>{`
        .hero-heading {
          font-size: clamp(32px, 4.5vw, 56px);
        }
        .mobile-apps-phones-wrapper {
          transform: scale(0.85);
          transform-origin: right center;
        }
        .core-pillars-heading {
          white-space: nowrap;
        }
        @media (max-width: 1200px) {
          .mobile-apps-phones-wrapper {
            transform: scale(0.75);
            transform-origin: right center;
          }
        }
        @media (max-width: 1024px) {
          .hero-heading {
            font-size: 26px !important;
            letter-spacing: -0.5px !important;
          }
          .hero-split-layout {
            flex-direction: column !important;
            text-align: center !important;
          }
          .hero-split-layout > div:first-child {
            padding-right: 0 !important;
            text-align: center !important;
          }
          .hero-split-layout > div:first-child div {
            justify-content: center !important;
          }
          .mobile-apps-phones-wrapper {
            transform: scale(0.6);
            transform-origin: top center;
            margin-top: 0px !important;
            margin-left: 0 !important;
            margin-bottom: 0px !important;
            height: 280px !important;
            width: 100%;
            justify-content: center !important;
          }
          .hero-section-wrapper {
            padding-bottom: 0px !important;
            margin-bottom: 0px !important;
          }
          .core-pillars-section {
            padding-top: 0px !important;
            margin-top: -140px !important;
            position: relative;
            z-index: 20;
          }
          .layered-stack-section {
            padding-top: 0px !important;
            margin-top: -100px !important;
          }
          .sla-benchmark-section {
            padding-top: 0px !important;
            margin-top: -40px !important;
          }
          .business-vertical-section {
            padding-top: 0px !important;
            margin-top: -120px !important;
          }
          .faq-section {
            padding-top: 0px !important;
            margin-top: -80px !important;
          }
          .core-pillars-heading {
            white-space: normal !important;
          }
        }
        @media (max-width: 600px) {
          .mobile-apps-phones-wrapper {
            transform: scale(0.45);
            height: 200px !important;
          }
        }
        @media (max-width: 400px) {
          .mobile-apps-phones-wrapper {
            transform: scale(0.38);
            height: 170px !important;
          }
        }
      `}</style>
    </div>
  );
}
