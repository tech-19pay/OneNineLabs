import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { servicePageStyles } from "@/lib/servicePageStyles";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export const metadata = {
  title: "Custom Mobile App Development — iOS, Android & React Native | OneNineLabs",
  description: "High-performance native and cross-platform mobile apps engineered for 60/120 FPS fluid motion, offline-first SQLite sync, and rapid App Store & Google Play launch.",
  keywords: [
    "mobile app development company",
    "React Native development",
    "iOS Swift development",
    "Android Kotlin developer",
    "Flutter app development",
    "offline first mobile app",
    "mobile app design agency",
    "App Store Optimization ASO",
    "cross-platform mobile apps"
  ],
  alternates: {
    canonical: "/services/mobile-apps",
    languages: {
      "en-US": "/services/mobile-apps",
      en: "/services/mobile-apps",
      "hi-IN": "/services/mobile-apps",
      "x-default": "/services/mobile-apps",
    },
  },
  openGraph: {
    title: "Custom Mobile App Development — iOS, Android & React Native | OneNineLabs",
    description: "High-performance native & cross-platform mobile apps engineered for 60/120 FPS speed, offline sync & rapid store launch.",
    url: `${siteUrl}/services/mobile-apps`,
    type: "website",
    images: [{ url: "/mobile_app_preview.png", width: 1200, height: 630, alt: "Mobile App Development by OneNineLabs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Mobile App Development — iOS, Android & React Native | OneNineLabs",
    description: "High-performance native & cross-platform mobile apps engineered for 60/120 FPS speed and offline sync.",
    images: ["/mobile_app_preview.png"],
  },
  robots: { index: true, follow: true },
};

const PRIMARY = "#0284c7";
const GRAD_FROM = "#0369a1";
const GRAD_TO = "#38bdf8";
const GLOW = "rgba(2,132,199,0.15)";

const corePillars = [
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

const platformStacks = [
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

const industrySolutions = [
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

const archLayers = [
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

const deliverySteps = [
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

const faqs = [
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

export default function MobileAppsServicePage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: "Mobile App Development", item: `${siteUrl}/services/mobile-apps` },
    ],
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/mobile-apps#service`,
    name: "Mobile App Development",
    serviceType: "Mobile App Development",
    url: `${siteUrl}/services/mobile-apps`,
    description: "Native iOS (Swift / SwiftUI), Android (Kotlin), and React Native cross-platform mobile app engineering with sub-second API sync and App Store launch support.",
    provider: { "@type": "Organization", name: "OneNineLabs", url: siteUrl },
    areaServed: { "@type": "Country", name: "Worldwide" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Header variant="light" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <style>{servicePageStyles(PRIMARY, GRAD_FROM, GRAD_TO, GLOW)}</style>

      <div className="vd-wrap">
        {/* ── 1. HERO SECTION (Dual Card Layout) ── */}
        <section style={{
          backgroundColor: "#f4f5f7",
          paddingTop: "120px",
          paddingBottom: "60px",
          paddingLeft: "20px",
          paddingRight: "20px",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "28px",
              alignItems: "stretch"
            }}>

              {/* Left White Card */}
              <div style={{
                backgroundColor: "#ffffff",
                borderRadius: "36px",
                padding: "clamp(28px, 3.8vw, 48px)",
                border: "1px solid #e5e7eb",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "520px"
              }}>
                <div>
                  <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#f1f5f9",
                    border: "1.5px solid #e2e8f0",
                    color: "#475569",
                    fontSize: "11px",
                    fontWeight: "800",
                    letterSpacing: "1.2px",
                    padding: "6px 14px",
                    borderRadius: "9999px",
                    textTransform: "uppercase",
                    marginBottom: "16px"
                  }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0ea5e9" }} />
                    FAST &amp; NATIVE-GRADE APPS
                  </div>

                  <h1 style={{
                    fontSize: "clamp(30px, 3.8vw, 48px)",
                    fontWeight: "900",
                    lineHeight: "1.14",
                    letterSpacing: "-0.02em",
                    color: "#0f172a",
                    margin: "0 0 20px 0"
                  }}>
                    High-Performance iOS, Android &amp; React Native Apps
                  </h1>

                  <p style={{
                    fontSize: "15px",
                    color: "#64748b",
                    lineHeight: "1.65",
                    maxWidth: "520px",
                    fontWeight: "400",
                    margin: "0 0 32px 0"
                  }}>
                    Expertly crafted native applications using iOS Swift and Android Kotlin, alongside powerful cross-platform solutions in React Native and Flutter. We engineer every application to deliver sub-second cold starts, uncompromised 120 FPS fluid animations, and offline-first data sync at scale.
                  </p>

                  <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "24px" }}>
                    <Link href="/contact" style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontWeight: "900",
                      fontSize: "14px",
                      padding: "14px 28px",
                      borderRadius: "9999px",
                      backgroundColor: "#d7f82e",
                      color: "#090d16",
                      boxShadow: "0 4px 14px rgba(215, 248, 46, 0.45)",
                      textDecoration: "none"
                    }}>
                      <span>Build Your App</span>
                      <span style={{ fontSize: "16px" }}>↗</span>
                    </Link>
                    <a href="#stacks" style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontWeight: "700",
                      fontSize: "14px",
                      padding: "13px 24px",
                      borderRadius: "9999px",
                      backgroundColor: "#ffffff",
                      color: "#0f172a",
                      border: "1px solid #cbd5e1",
                      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.03)",
                      textDecoration: "none"
                    }}>
                      <span>Explore Stacks</span>
                      <span>↓</span>
                    </a>
                  </div>
                </div>

                {/* Store Badges */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  paddingTop: "24px",
                  borderTop: "1px solid #f1f5f9",
                  flexWrap: "wrap"
                }}>
                  <Link href="/contact" style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "#ffffff",
                    border: "1px solid #cbd5e1",
                    color: "#0f172a",
                    fontSize: "12px",
                    fontWeight: "700",
                    padding: "8px 16px",
                    borderRadius: "9999px",
                    textDecoration: "none",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.03)"
                  }}>
                    <svg style={{ width: "14px", height: "14px" }} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.34c.64-.78 1.08-1.85.96-2.94-.93.04-2.06.62-2.73 1.4-.59.68-1.11 1.77-.97 2.83 1.05.08 2.1-.51 2.74-1.29z" />
                    </svg>
                    <span>App Store Ready</span>
                    <span style={{ fontSize: "10.5px", background: "#f1f5f9", color: "#0284c7", padding: "2px 6px", borderRadius: "6px", fontWeight: "800" }}>★ 4.9</span>
                  </Link>

                  <Link href="/contact" style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "#ffffff",
                    border: "1px solid #cbd5e1",
                    color: "#0f172a",
                    fontSize: "12px",
                    fontWeight: "700",
                    padding: "8px 16px",
                    borderRadius: "9999px",
                    textDecoration: "none",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.03)"
                  }}>
                    <svg style={{ width: "14px", height: "14px" }} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 20.5v-17c0-.55.45-1 1-1h.22l9.95 9.95L4.22 22.4H4c-.55 0-1-.45-1-.9zm1.41-1.41l8.54-8.54-8.54-8.54v17.08zM15.59 13.59l2.71-2.71c.39-.39.39-1.02 0-1.41l-2.71-2.71-8.54 8.54 8.54 8.54 8.54-8.54z" />
                    </svg>
                    <span>Google Play Certified</span>
                    <span style={{ fontSize: "10.5px", background: "#f1f5f9", color: "#0284c7", padding: "2px 6px", borderRadius: "6px", fontWeight: "800" }}>★ 4.8</span>
                  </Link>
                </div>
              </div>

              {/* Right Lime Accent Card */}
              <div style={{
                backgroundColor: "#d7f82e",
                borderRadius: "36px",
                padding: "clamp(24px, 3.5vw, 36px)",
                minHeight: "520px",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap"
              }}>
                {/* Floating Telemetry Chips */}
                <div style={{ display: "flex", flexDirection: "column", gap: "14px", zIndex: 15, flex: "1 1 200px" }}>
                  <div style={{
                    backgroundColor: "rgba(255, 255, 255, 0.92)",
                    backdropFilter: "blur(16px)",
                    borderRadius: "20px",
                    padding: "14px 18px",
                    boxShadow: "0 10px 24px rgba(0, 0, 0, 0.06)"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2px" }}>
                      <span style={{ fontSize: "10.5px", fontWeight: "700", color: "#64748b" }}>App Telemetry</span>
                      <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981" }} />
                    </div>
                    <div style={{ fontSize: "18px", fontWeight: "900", color: "#0f172a", marginBottom: "3px" }}>
                      120 FPS <span style={{ fontSize: "12px", color: "#64748b", fontWeight: "700" }}>• 0.38s</span>
                    </div>
                    <div style={{ fontSize: "10.5px", fontWeight: "700", color: "#15803d" }}>
                      Hermes C++ → <span style={{ background: "#dcfce7", color: "#15803d", padding: "2px 6px", borderRadius: "6px", fontSize: "9.5px", fontWeight: "800" }}>▲ 99.98% SLA</span>
                    </div>
                  </div>

                  <div style={{
                    backgroundColor: "rgba(255, 255, 255, 0.92)",
                    backdropFilter: "blur(16px)",
                    borderRadius: "20px",
                    padding: "14px 18px",
                    boxShadow: "0 10px 24px rgba(0, 0, 0, 0.06)"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2px" }}>
                      <span style={{ fontSize: "10.5px", fontWeight: "700", color: "#64748b" }}>Security Enclave</span>
                      <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#0ea5e9" }} />
                    </div>
                    <div style={{ fontSize: "18px", fontWeight: "900", color: "#0f172a", marginBottom: "3px" }}>
                      Biometrics <span style={{ fontSize: "12px", color: "#64748b" }}>🔒</span>
                    </div>
                    <div style={{ fontSize: "10.5px", fontWeight: "700", color: "#0284c7" }}>
                      AES-256 GCM → <span style={{ background: "#e0f2fe", color: "#0284c7", padding: "2px 6px", borderRadius: "6px", fontSize: "9.5px", fontWeight: "800" }}>Encrypted</span>
                    </div>
                  </div>

                  <div style={{
                    backgroundColor: "rgba(255, 255, 255, 0.92)",
                    backdropFilter: "blur(16px)",
                    borderRadius: "20px",
                    padding: "14px 18px",
                    boxShadow: "0 10px 24px rgba(0, 0, 0, 0.06)"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2px" }}>
                      <span style={{ fontSize: "10.5px", fontWeight: "700", color: "#64748b" }}>Offline Sync</span>
                      <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#a855f7" }} />
                    </div>
                    <div style={{ fontSize: "18px", fontWeight: "900", color: "#0f172a", marginBottom: "3px" }}>
                      0ms Latency <span style={{ fontSize: "12px", color: "#64748b" }}>💾</span>
                    </div>
                    <div style={{ fontSize: "10.5px", fontWeight: "700", color: "#7e22ce" }}>
                      WatermelonDB → <span style={{ background: "#f3e8ff", color: "#7e22ce", padding: "2px 6px", borderRadius: "6px", fontSize: "9.5px", fontWeight: "800" }}>Delta Merge</span>
                    </div>
                  </div>
                </div>

                {/* Smartphone Device Simulator */}
                <div style={{
                  width: "270px",
                  height: "460px",
                  background: "#0a0e17",
                  border: "6px solid #1e293b",
                  borderRadius: "36px",
                  padding: "8px",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
                  position: "relative",
                  margin: "0 auto"
                }}>
                  {/* Status Bar */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 8px", marginBottom: "6px", fontSize: "10px", color: "#94a3b8", fontWeight: "600" }}>
                    <span>9:41</span>
                    <div style={{ width: "64px", height: "14px", background: "#000000", borderRadius: "9999px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 6px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#1e293b" }} />
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 4px #22c55e" }} />
                    </div>
                    <span>5G</span>
                  </div>

                  {/* Phone Screen UI */}
                  <div style={{
                    flex: 1,
                    background: "#070b13",
                    borderRadius: "22px",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    border: "1px solid rgba(255, 255, 255, 0.06)"
                  }}>
                    {/* Header */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#0f172a", border: "1.5px solid #38bdf8", display: "flex", alignItems: "center", justifyContent: "center", color: "#38bdf8", fontSize: "8.5px", fontWeight: "900" }}>19</div>
                        <div>
                          <div style={{ fontSize: "9.5px", fontWeight: "800", color: "#ffffff" }}>OneNine Engine <span style={{ fontSize: "7px", background: "rgba(56, 189, 248, 0.2)", color: "#38bdf8", padding: "1px 3px", borderRadius: "3px" }}>PRO</span></div>
                          <div style={{ fontSize: "7px", color: "#94a3b8" }}>v2.4.0 • TestFlight #412</div>
                        </div>
                      </div>
                      <span style={{ fontSize: "10px" }}>🚀</span>
                    </div>

                    {/* Telemetry Box */}
                    <div style={{ background: "rgba(15, 23, 42, 0.9)", border: "1px solid rgba(56, 189, 248, 0.2)", borderRadius: "10px", padding: "6px 8px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "8px", color: "#94a3b8", fontWeight: "600" }}>
                        <span>Runtime Performance</span>
                        <span style={{ color: "#22c55e", fontWeight: "700" }}>● 120 FPS</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: "2px" }}>
                        <div style={{ fontSize: "14px", fontWeight: "900", color: "#ffffff" }}>0.38s <span style={{ fontSize: "8px", color: "#38bdf8" }}>Cold Start</span></div>
                        <span style={{ fontSize: "7.5px", color: "#a855f7", background: "rgba(168, 85, 247, 0.15)", padding: "1px 4px", borderRadius: "4px" }}>Hermes C++</span>
                      </div>
                    </div>

                    {/* Architecture Modules */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      {[
                        { icon: "⚛️", title: "React Native", sub: "Fabric C++ Engine • v0.76" },
                        { icon: "🍏", title: "Swift & SwiftUI", sub: "Metal GPU • iOS 18 SDK" },
                        { icon: "🤖", title: "Android Kotlin", sub: "Jetpack Compose • ART" },
                        { icon: "💾", title: "Offline Database", sub: "WatermelonDB / SQLite" },
                      ].map((mod, idx) => (
                        <div key={idx} style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "5px 8px",
                          borderRadius: "8px",
                          background: "rgba(15, 23, 42, 0.9)",
                          border: "1px solid rgba(56, 189, 248, 0.25)"
                        }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <span style={{ fontSize: "9px" }}>{mod.icon}</span>
                            <div>
                              <div style={{ fontSize: "9px", fontWeight: "700", color: "#ffffff" }}>{mod.title}</div>
                              <div style={{ fontSize: "6.5px", color: "#94a3b8" }}>{mod.sub}</div>
                            </div>
                          </div>
                          <span style={{ width: "16px", height: "9px", background: "#0ea5e9", borderRadius: "99px", display: "inline-block" }} />
                        </div>
                      ))}
                    </div>

                    {/* Store Status */}
                    <div style={{
                      marginTop: "auto",
                      background: "rgba(22, 101, 52, 0.25)",
                      border: "1px solid rgba(34, 197, 94, 0.3)",
                      borderRadius: "8px",
                      padding: "3px 6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "4px",
                      fontSize: "7.5px",
                      color: "#4ade80",
                      fontWeight: "700"
                    }}>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#4ade80" }} />
                      <span>App Store &amp; Play Store Certified</span>
                    </div>
                  </div>
                </div>

                {/* Signature Corner */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  backgroundColor: "#ffffff",
                  padding: "8px 16px",
                  borderTopLeftRadius: "20px",
                  fontFamily: "monospace",
                  fontSize: "8.5px",
                  fontWeight: "900",
                  color: "#0f172a",
                  textAlign: "right"
                }}>
                  LAUNCH YOUR APP <br /> WITH ONE NINE
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 2. 4 CORE PILLARS SECTION ── */}
        <section style={{ background: "#ffffff", padding: "80px 24px", borderBottom: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 48px" }}>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#f0fdf4",
                border: "1.5px solid #a7f3d0",
                color: "#059669",
                fontSize: "11px",
                fontWeight: "800",
                letterSpacing: "1.2px",
                padding: "6px 14px",
                borderRadius: "9999px",
                textTransform: "uppercase",
                marginBottom: "16px"
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#059669" }} />
                ENGINEERING EXCELLENCE
              </div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: "900", letterSpacing: "-1px", color: "#0f172a", margin: "0 0 16px 0" }}>
                Core Pillars of Mobile Engineering
              </h2>
              <p style={{ fontSize: "15px", color: "#64748b", lineHeight: "1.65", margin: 0 }}>
                We architect scalable, offline-first mobile applications with native 120 FPS fluency and bank-grade security for iOS and Android.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
              {corePillars.map((pillar) => (
                <div key={pillar.id} style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "24px",
                  padding: "30px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  boxShadow: "0 4px 16px rgba(15,23,42,0.02)"
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "24px" }}>{pillar.icon}</span>
                    <span style={{ fontSize: "9.5px", fontWeight: "800", color: "#0284c7", background: "#e0f2fe", padding: "3px 8px", borderRadius: "6px", textTransform: "uppercase" }}>
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a", margin: 0 }}>{pillar.title}</h3>
                  <p style={{ fontSize: "13.5px", lineHeight: "1.6", color: "#64748b", margin: 0 }}>{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. MULTI-PLATFORM & NATIVE ENGINEERING STACKS ── */}
        <section id="stacks" style={{ background: "#f8fafc", padding: "90px 24px", borderBottom: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 48px" }}>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#e0f2fe",
                border: "1.5px solid #bae6fd",
                color: "#0284c7",
                fontSize: "11px",
                fontWeight: "800",
                letterSpacing: "1.2px",
                padding: "6px 14px",
                borderRadius: "9999px",
                textTransform: "uppercase",
                marginBottom: "16px"
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0284c7" }} />
                FRAMEWORK ARCHITECTURE
              </div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: "900", letterSpacing: "-1px", color: "#0f172a", margin: "0 0 16px 0" }}>
                Multi-Platform &amp; Native Engineering Stacks
              </h2>
              <p style={{ fontSize: "15px", color: "#64748b", lineHeight: "1.65", margin: 0 }}>
                We select the optimal framework and rendering architecture for your product, balancing rapid cross-platform deployment with uncompromised 120 FPS performance.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {platformStacks.map((p) => (
                <div key={p.id} style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "24px",
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 10px 30px rgba(15,23,42,0.03)"
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <span style={{ fontSize: "10px", fontWeight: "800", color: "#0284c7", background: "#e0f2fe", padding: "3px 8px", borderRadius: "6px", textTransform: "uppercase" }}>
                      {p.badge}
                    </span>
                    <span style={{ fontFamily: "monospace", fontSize: "11px", color: "#64748b", fontWeight: "600" }}>
                      {p.coldStart} Cold Start
                    </span>
                  </div>

                  <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", margin: "0 0 8px 0" }}>{p.name}</h3>
                  <p style={{ fontSize: "13px", color: "#64748b", lineHeight: "1.6", margin: "0 0 16px 0" }}>{p.tagline}</p>

                  <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "12px", marginBottom: "16px", fontSize: "11.5px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                      <span style={{ color: "#64748b" }}>Rendering Engine:</span>
                      <strong style={{ color: "#0f172a" }}>{p.renderingEngine}</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "#64748b" }}>Code Reuse:</span>
                      <strong style={{ color: "#0284c7" }}>{p.codeReuse}</strong>
                    </div>
                  </div>

                  {/* Code Box */}
                  <div style={{ background: "#090d16", borderRadius: "12px", padding: "14px", overflow: "hidden", marginTop: "auto" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "6px", marginBottom: "8px" }}>
                      <span style={{ fontFamily: "monospace", fontSize: "10px", color: "#94a3b8" }}>{p.file}</span>
                      <span style={{ fontSize: "9px", color: "#22c55e", fontWeight: "700" }}>✓ Verified</span>
                    </div>
                    <pre style={{ margin: 0, fontFamily: "monospace", fontSize: "10.5px", lineHeight: "1.5", color: "#38bdf8", overflowX: "auto" }}>
                      <code>{p.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. INDUSTRY SOLUTIONS (6 BENTO CARDS) ── */}
        <section style={{ background: "#ffffff", padding: "90px 24px", borderBottom: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 48px" }}>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#fdf4ff",
                border: "1.5px solid #f5d0fe",
                color: "#c026d3",
                fontSize: "11px",
                fontWeight: "800",
                letterSpacing: "1.2px",
                padding: "6px 14px",
                borderRadius: "9999px",
                textTransform: "uppercase",
                marginBottom: "16px"
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#c026d3" }} />
                ENTERPRISE VERTICALS
              </div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: "900", letterSpacing: "-1px", color: "#0f172a", margin: "0 0 16px 0" }}>
                Tailored Mobile Applications by Business Vertical
              </h2>
              <p style={{ fontSize: "15px", color: "#64748b", lineHeight: "1.65", margin: 0 }}>
                From biometric fintech wallets to HIPAA-compliant telemedicine and real-time geospatial dispatch systems, we engineer mission-critical mobile platforms.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
              {industrySolutions.map((sol) => (
                <div key={sol.id} style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "24px",
                  padding: "32px 26px",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 4px 16px rgba(15,23,42,0.02)"
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                    <span style={{ fontSize: "26px" }}>{sol.icon}</span>
                    <span style={{ fontSize: "9.5px", fontWeight: "800", color: "#0284c7", background: "#e0f2fe", padding: "3px 8px", borderRadius: "6px", textTransform: "uppercase" }}>
                      {sol.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a", margin: "0 0 8px 0" }}>{sol.title}</h3>
                  <p style={{ fontSize: "13px", lineHeight: "1.6", color: "#64748b", margin: "0 0 16px 0" }}>{sol.desc}</p>

                  <div style={{ fontSize: "11.5px", fontWeight: "700", color: "#0f172a", background: "#f8fafc", border: "1px solid #e2e8f0", padding: "6px 10px", borderRadius: "8px", marginBottom: "16px" }}>
                    <span style={{ color: "#0284c7" }}>⚡ Benchmark:</span> {sol.stats}
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "auto", paddingTop: "14px", borderTop: "1px dashed #e2e8f0" }}>
                    {sol.bullets.map((b, bi) => (
                      <div key={bi} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "12px", fontWeight: "600", color: "#334155", lineHeight: "1.4" }}>
                        <span style={{ color: "#10b981", fontWeight: "800" }}>✓</span>
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
        <section style={{ background: "#f8fafc", padding: "90px 24px", borderBottom: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 48px" }}>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#f1f5f9",
                border: "1.5px solid #e2e8f0",
                color: "#475569",
                fontSize: "11px",
                fontWeight: "800",
                letterSpacing: "1.2px",
                padding: "6px 14px",
                borderRadius: "9999px",
                textTransform: "uppercase",
                marginBottom: "16px"
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0ea5e9" }} />
                LAYERED PIPELINE
              </div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: "900", letterSpacing: "-1px", color: "#0f172a", margin: "0 0 16px 0" }}>
                How We Layer Your Mobile Stack
              </h2>
              <p style={{ fontSize: "15px", color: "#64748b", lineHeight: "1.65", margin: 0 }}>
                A high-performance layered pipeline from GPU-accelerated interface to local SQLite persistence and cloud edge orchestration.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
              {archLayers.map((layer, i) => (
                <div key={i} style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "20px",
                  padding: "28px 22px",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 4px 16px rgba(15,23,42,0.02)"
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <span style={{ fontSize: "26px", fontWeight: "900", color: "#0f172a" }}>{layer.num}</span>
                    <span style={{ fontSize: "20px" }}>{layer.icon}</span>
                  </div>
                  <span style={{ fontSize: "9.5px", fontWeight: "800", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>
                    {layer.tag}
                  </span>
                  <h3 style={{ fontSize: "16px", fontWeight: "800", color: "#0f172a", margin: "0 0 8px 0" }}>{layer.title}</h3>
                  <p style={{ fontSize: "12.5px", lineHeight: "1.55", color: "#64748b", margin: 0 }}>{layer.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. PERFORMANCE & DEVICE SLA BENCHMARK ── */}
        <section style={{ background: "#ffffff", padding: "90px 24px", borderBottom: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "48px", alignItems: "center" }}>
              {/* Left Column */}
              <div>
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#f5f3ff",
                  border: "1.5px solid #ede9fe",
                  color: "#7c3aed",
                  fontSize: "11px",
                  fontWeight: "800",
                  letterSpacing: "1.2px",
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  textTransform: "uppercase",
                  marginBottom: "16px"
                }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#7c3aed" }} />
                  ZERO-LATENCY GUARANTEE
                </div>
                <h2 style={{ fontSize: "clamp(26px, 3.8vw, 38px)", fontWeight: "900", color: "#0f172a", margin: "0 0 16px 0", letterSpacing: "-1px" }}>
                  Engineered for 99.9% Crash-Free Production SLA
                </h2>
                <p style={{ fontSize: "15px", color: "#64748b", lineHeight: "1.65", margin: "0 0 32px 0" }}>
                  Our architecture guarantees sub-millisecond local query routing, sub-second cold starts, and uncompromised 120 FPS fluid motion under heavy production loads.
                </p>

                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "20px", padding: "20px 24px", display: "flex", alignItems: "center", gap: "20px" }}>
                  <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#0ea5e9", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontWeight: "900", fontSize: "14px", flexShrink: 0 }}>
                    120fps
                  </div>
                  <div>
                    <div style={{ fontSize: "16px", fontWeight: "800", color: "#0f172a" }}>Fluidity &amp; Crash-Free SLA</div>
                    <div style={{ fontSize: "12px", color: "#64748b", marginTop: "2px" }}>Production Device Benchmark</div>
                  </div>
                </div>
              </div>

              {/* Right Column Progress Rows */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { name: "UI Rendering Smoothness (Metal/Fabric)", val: "60 / 120 FPS", fill: "98%", grad: "linear-gradient(90deg, #0ea5e9, #38bdf8)" },
                  { name: "App Cold Start Time (Hermes Bytecode)", val: "< 0.38s", fill: "94%", grad: "linear-gradient(90deg, #0f172a, #334155)" },
                  { name: "Local SQLite Query Latency", val: "< 4ms", fill: "96%", grad: "linear-gradient(90deg, #10b981, #34d399)" },
                  { name: "Base Memory Heap Footprint", val: "< 42MB", fill: "90%", grad: "linear-gradient(90deg, #7c3aed, #a855f7)" },
                ].map((m, idx) => (
                  <div key={idx} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "18px 20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                      <span style={{ fontSize: "13px", fontWeight: "700", color: "#0f172a" }}>{m.name}</span>
                      <strong style={{ fontSize: "13px", color: "#0f172a" }}>{m.val}</strong>
                    </div>
                    <div style={{ width: "100%", height: "6px", background: "#e2e8f0", borderRadius: "99px", overflow: "hidden" }}>
                      <div style={{ width: m.fill, height: "100%", background: m.grad, borderRadius: "99px" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. 4-STAGE DELIVERY PROCESS ── */}
        <section style={{ background: "#f8fafc", padding: "90px 24px", borderBottom: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 48px" }}>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#f1f5f9",
                border: "1.5px solid #e2e8f0",
                color: "#475569",
                fontSize: "11px",
                fontWeight: "800",
                letterSpacing: "1.2px",
                padding: "6px 14px",
                borderRadius: "9999px",
                textTransform: "uppercase",
                marginBottom: "16px"
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0ea5e9" }} />
                AGILE POD LIFECYCLE
              </div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: "900", letterSpacing: "-1px", color: "#0f172a", margin: "0 0 16px 0" }}>
                4-Stage Mobile App Development Process
              </h2>
              <p style={{ fontSize: "15px", color: "#64748b", lineHeight: "1.65", margin: 0 }}>
                From interactive Figma wireframes to TestFlight beta testing and fast-track App Store approvals, our pods deliver production-grade mobile builds.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
              {deliverySteps.map((step, i) => (
                <div key={i} style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "24px",
                  padding: "30px 22px",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 4px 16px rgba(15,23,42,0.02)"
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <span style={{ fontSize: "28px", fontWeight: "900", color: "#0f172a" }}>{step.num}</span>
                    <span style={{ fontSize: "24px" }}>{step.icon}</span>
                  </div>
                  <span style={{ fontFamily: "monospace", fontSize: "10px", fontWeight: "800", color: "#0284c7", background: "#e0f2fe", padding: "3px 8px", borderRadius: "6px", width: "fit-content", marginBottom: "10px" }}>
                    {step.tag}
                  </span>
                  <h3 style={{ fontSize: "16px", fontWeight: "800", color: "#0f172a", margin: "0 0 8px 0" }}>{step.title}</h3>
                  <p style={{ fontSize: "13px", lineHeight: "1.6", color: "#64748b", margin: 0 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. MOBILE ENGINEERING FAQS ── */}
        <section style={{ background: "#ffffff", padding: "90px 24px", borderBottom: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 48px" }}>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#f1f5f9",
                border: "1.5px solid #e2e8f0",
                color: "#475569",
                fontSize: "11px",
                fontWeight: "800",
                letterSpacing: "1.2px",
                padding: "6px 14px",
                borderRadius: "9999px",
                textTransform: "uppercase",
                marginBottom: "16px"
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0ea5e9" }} />
                MOBILE ENGINEERING FAQS
              </div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: "900", letterSpacing: "-1px", color: "#0f172a", margin: "0 0 16px 0" }}>
                Frequently Asked Questions
              </h2>
              <p style={{ fontSize: "15px", color: "#64748b", lineHeight: "1.65", margin: 0 }}>
                Everything you need to know about our native iOS/Android development, cross-platform stacks, offline sync, and App Store approval guarantees.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "start" }}>
              {/* Sidebar */}
              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "24px", padding: "36px 28px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <h3 style={{ fontSize: "22px", fontWeight: "900", color: "#0f172a", margin: 0 }}>Have a Custom Mobile App in Mind?</h3>
                <p style={{ fontSize: "13.5px", lineHeight: "1.6", color: "#64748b", margin: 0 }}>
                  Speak directly with our principal mobile architect to evaluate offline sync architectures, framework selection, and store approval timelines.
                </p>
                <Link href="/contact" style={{
                  background: "#0f172a",
                  color: "#ffffff",
                  padding: "12px 20px",
                  borderRadius: "12px",
                  fontSize: "13px",
                  fontWeight: "800",
                  textDecoration: "none",
                  textAlign: "center"
                }}>
                  Talk to a Mobile Architect →
                </Link>
                <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "16px", textAlign: "center", marginTop: "8px" }}>
                  <div style={{ fontSize: "26px", fontWeight: "900", color: "#0ea5e9" }}>6–8 Wks</div>
                  <div style={{ fontSize: "10.5px", color: "#64748b", fontWeight: "600", textTransform: "uppercase" }}>Average Mobile MVP Delivery Time</div>
                </div>
              </div>

              {/* Accordion */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {faqs.map((f, i) => (
                  <details key={i} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "18px 22px", cursor: "pointer" }}>
                    <summary style={{ fontWeight: "800", color: "#0f172a", fontSize: "15px", listStyle: "none" }}>{f.q}</summary>
                    <p style={{ color: "#475569", marginTop: "12px", lineHeight: "1.65", fontSize: "13.5px" }}>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. BOTTOM CTA BANNER ── */}
        <section style={{ background: "#ffffff", padding: "80px 24px 100px" }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            background: "linear-gradient(135deg, #090d16 0%, #0f172a 60%, #1e293b 100%)",
            borderRadius: "36px",
            padding: "clamp(40px, 6vw, 70px) clamp(24px, 5vw, 60px)",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 30px 70px rgba(15, 23, 42, 0.2)",
            textAlign: "center",
            color: "#ffffff"
          }}>
            <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#ffffff",
                fontSize: "11px",
                fontWeight: "800",
                letterSpacing: "1.2px",
                padding: "6px 14px",
                borderRadius: "9999px",
                textTransform: "uppercase",
                marginBottom: "18px"
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#d7f82e" }} />
                READY TO SHIP ON APP STORE &amp; PLAY STORE
              </div>

              <h2 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: "900", color: "#ffffff", letterSpacing: "-1.2px", lineHeight: "1.18", margin: "0 0 18px 0" }}>
                Build &amp; Launch Your High-Performance Mobile App With OneNineLabs
              </h2>

              <p style={{ fontSize: "15px", lineHeight: "1.65", color: "rgba(255, 255, 255, 0.75)", margin: "0 0 36px 0", maxWidth: "680px" }}>
                Receive a comprehensive mobile architecture proposal, framework recommendation, and 6–8 week MVP roadmap from our principal engineers within 48 hours.
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
                <Link href="/contact" style={{
                  backgroundColor: "#d7f82e",
                  color: "#090d16",
                  padding: "15px 32px",
                  borderRadius: "9999px",
                  fontSize: "14px",
                  fontWeight: "900",
                  textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(215, 248, 46, 0.4)"
                }}>
                  Book Free Architecture Review →
                </Link>
                <Link href="/services" style={{
                  color: "rgba(255, 255, 255, 0.85)",
                  fontSize: "14px",
                  fontWeight: "700",
                  textDecoration: "none",
                  padding: "14px 24px",
                  borderRadius: "9999px",
                  border: "1px solid rgba(255, 255, 255, 0.2)"
                }}>
                  Explore All Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
