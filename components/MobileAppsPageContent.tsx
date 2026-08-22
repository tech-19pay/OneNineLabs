"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function MobileAppsPageContent() {
  // --- State ---
  const [activePlatform, setActivePlatform] = useState("react-native");
  const [hoveredCard, setHoveredCard] = useState<string>('languages');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [phoneTab, setPhoneTab] = useState<'architecture' | 'performance' | 'sync' | 'security' | 'deploy'>('architecture');
  const [enabledModules, setEnabledModules] = useState<Record<string, boolean>>({
    reactNative: true,
    swiftIos: true,
    kotlinAndroid: false,
    offlineDb: true,
    biometrics: false,
  });

  // --- Effects ---
  useEffect(() => {
    const tabs: Array<'architecture' | 'performance' | 'sync' | 'security' | 'deploy'> = [
      'architecture', 'performance', 'sync', 'security', 'deploy'
    ];
    const interval = setInterval(() => {
      setPhoneTab((prev) => {
        const nextIndex = (tabs.indexOf(prev) + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // --- Data ---
  const phoneTabData = {
    architecture: {
      title: "App Engine",
      badge: "⚡",
      headline: "Native Architecture with 120 FPS Fluidity",
      subtitle: "Fabric C++ rendering engine & Swift concurrency pipeline.",
      cta: "Inspect Stacks ↗",
      searchPlaceholder: "Search native modules...",
      filterLabel: "Target SDK",
      filterValue: "iOS 18 & Android 15",
      cards: [
        {
          title: "SwiftUI & Metal GPU",
          desc: "Direct hardware shader acceleration",
          tag: "#60/120 FPS",
          img: "/services/service_mobile_alt.jpg"
        },
        {
          title: "Kotlin Jetpack Compose",
          desc: "Declarative reactive UI runtime",
          tag: "#ART Engine",
          img: "/services/welcome_architecture_3d.jpg"
        }
      ]
    },
    performance: {
      title: "Telemetry",
      badge: "🚀",
      headline: "0.38s Cold Start with Hermes C++ Engine",
      subtitle: "Pre-compiled bytecode execution & zero JIT runtime lag.",
      cta: "Run Benchmark ⚡",
      searchPlaceholder: "Search performance metrics...",
      filterLabel: "Metric Profile",
      filterValue: "Hermes v0.76",
      cards: [
        {
          title: "Memory Profiling",
          desc: "< 42MB base heap allocation",
          tag: "#Zero Leaks",
          img: "/services/saas_sec_continuous_testing.jpg"
        },
        {
          title: "Frame Pacing Engine",
          desc: "Sub-16ms steady frame pacing",
          tag: "#Metal / Vulkan",
          img: "/services/continuous_security_telemetry_3d.jpg"
        }
      ]
    },
    sync: {
      title: "Offline Sync",
      badge: "💾",
      headline: "Offline-First Local SQLite Synchronization",
      subtitle: "Conflict-free background replication and instant delta caching.",
      cta: "Trigger Delta Sync ↻",
      searchPlaceholder: "Search local databases...",
      filterLabel: "Database Engine",
      filterValue: "WatermelonDB",
      cards: [
        {
          title: "Encrypted SQLite DB",
          desc: "Sub-millisecond indexed queries",
          tag: "#SQLCipher",
          img: "/services/blockchain_preview.png"
        },
        {
          title: "CRDT Delta Merge",
          desc: "Zero data conflict resolution",
          tag: "#Background Sync",
          img: "/services/custom_software_preview.png"
        }
      ]
    },
    security: {
      title: "App Shield",
      badge: "🛡️",
      headline: "Hardware KeyStore & Biometric Enclave",
      subtitle: "FaceID biometric auth and AES-256 GCM encrypted storage.",
      cta: "Verify Enclave 🔒",
      searchPlaceholder: "Search security protocols...",
      filterLabel: "Security Layer",
      filterValue: "AES-256 GCM",
      cards: [
        {
          title: "Biometric Authentication",
          desc: "FaceID & TouchID SDK hooks",
          tag: "#Secure Enclave",
          img: "/services/saas_sec_identity_modern.jpg"
        },
        {
          title: "SSL Pinning & Anti-Tamper",
          desc: "Jailbreak and MITM protection",
          tag: "#Zero Trust",
          img: "/services/saas_sec_threat_modern.jpg"
        }
      ]
    },
    deploy: {
      title: "Store Ready",
      badge: "📦",
      headline: "Automated App Store & Play Store CI/CD",
      subtitle: "Fastlane automated signing, TestFlight distribution & compliance.",
      cta: "Deploy Build 🚀",
      searchPlaceholder: "Search deployment pipelines...",
      filterLabel: "CI/CD Pipeline",
      filterValue: "TestFlight #412",
      cards: [
        {
          title: "App Store Compliance",
          desc: "100% Apple Privacy Manifest pass",
          tag: "#Ready to Ship",
          img: "/services/cloud_platform_service.png"
        },
        {
          title: "Fastlane Multi-Target",
          desc: "One-click build signing & rollout",
          tag: "#Auto Release",
          img: "/services/ai_automation_service.png"
        }
      ]
    }
  };

  const currentPhoneData = phoneTabData[phoneTab];

  const toggleModule = (key: string) => {
    setEnabledModules(prev => ({ ...prev, [key]: !prev[key] }));
  };

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
      badge: "Google Impeller Engine",
      tagline: "Pixel-perfect multi-platform applications rendered via Impeller C++ graphics pipeline across iOS, Android, and Web.",
      framework: "Flutter 3.24+ / Dart 3.5",
      renderingEngine: "Impeller Metal/Vulkan Engine",
      runtime: "Native AOT Machine Code",
      codeReuse: "95% Shared Code",
      coldStart: "0.75s",
      icon: "💙",
      color: "#0284c7",
      bestFor: "Custom UI component libraries, identical cross-platform rendering, embedded kiosk apps, and desktop ports.",
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
        child: Text('\${fpsValue.toStringAsFixed(0)} FPS',
          style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold, color: Colors.white)),
      ),
    );
  }
}`
    }
  };

  const currentPlatform = (platforms as Record<string, any>)[activePlatform];

  const industrySolutions = [
    {
      id: "fintech",
      title: "Fintech & Mobile Wallets",
      desc: "Biometric FaceID/TouchID security, PCI-DSS compliant payment rails, real-time balance WebSockets, and encrypted multi-currency wallets.",
      badge: "PCI-DSS & Biometric",
      icon: "💳",
      stats: "< 200ms Transaction Latency",
      bullets: ["Secure Enclave Biometric Auth", "Stripe & Plaid API Integrations", "Offline Transaction Signing Queue"]
    },
    {
      id: "healthcare",
      title: "Healthcare & Telemedicine",
      desc: "HIPAA-compliant WebRTC encrypted video consultations, electronic health record (EHR) sync, and Apple HealthKit / Google Health Connect integration.",
      badge: "HIPAA & BAA Ready",
      icon: "🩺",
      stats: "100% Encrypted Video Stream",
      bullets: ["End-to-End Encrypted Chat & Video", "HealthKit & Wearable Sensor Telemetry", "FHIR / HL7 EHR Interoperability"]
    },
    {
      id: "ondemand",
      title: "On-Demand & Geolocation",
      desc: "Real-time background GPS tracking, dynamic geofencing, route caching, driver dispatch feeds, and live order status delivery streams.",
      badge: "Background GPS Tracking",
      icon: "🚗",
      stats: "Sub-Second Driver Coordinate Sync",
      bullets: ["Background Location Battery Optimization", "Mapbox & Google Maps Vector Rendering", "Live Socket Order Dispatch Engine"]
    },
    {
      id: "ecommerce",
      title: "E-Commerce & Retail",
      desc: "Apple Pay & Google Pay 1-tap checkout, personalized AI product recommendations, AR camera try-on, and cart abandonment push triggers.",
      badge: "1-Tap Express Checkout",
      icon: "🛍️",
      stats: "+42% Checkout Conversion Rate",
      bullets: ["Apple Pay & Google Pay Native Sheet", "ARKit / ARCore Product Preview", "Smart Push Notifications (FCM / APNs)"]
    },
    {
      id: "enterprise",
      title: "Enterprise & Field Operations",
      desc: "Offline-first WatermelonDB database, barcode & RFID hardware scanning, offline PDF signature capture, and role-based access management.",
      badge: "Offline-First SQLite Sync",
      icon: "🏭",
      stats: "Zero Data Loss in Field Work",
      bullets: ["Offline WatermelonDB / Realm Engine", "Native Camera Barcode & QR Scanner", "Encrypted Local Storage Vault"]
    },
    {
      id: "social",
      title: "Social & Media Streaming",
      desc: "Sub-second HLS live video streaming, WebRTC audio spaces, real-time rich chat feeds, stories, and background video transcoding.",
      badge: "60 FPS Media Pipeline",
      icon: "🎬",
      stats: "Sub-Second Stream Latency",
      bullets: ["WebRTC & HLS Adaptive Video Player", "FFmpeg Native GPU Video Compression", "Real-Time WebSocket Reaction Feeds"]
    }
  ];

  const archLayers = [
    {
      num: "01",
      title: "Presentation UI & Gestures",
      tag: "FRONTEND LAYER",
      desc: "SwiftUI, Jetpack Compose, and React Native Fabric components composited with hardware GPU acceleration for silky smooth 60/120 FPS gestures.",
      icon: "📱"
    },
    {
      num: "02",
      title: "Offline Storage & Sync Engine",
      tag: "PERSISTENCE LAYER",
      desc: "Local SQLite, WatermelonDB, or Realm database with background optimistic sync queues and automatic conflict resolution.",
      icon: "💾"
    },
    {
      num: "03",
      title: "Biometric & Vault Security",
      tag: "SECURITY ENCLAVE",
      desc: "Apple Secure Enclave and Android Keystore protection for OAuth tokens, encryption keys, and FaceID/TouchID biometric authentication.",
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
      q: "Do you build native apps or cross-platform apps?",
      a: "We engineer both. For maximum performance and hardware integration, we build pure native apps in Swift/SwiftUI (iOS) and Kotlin/Jetpack Compose (Android). For fast multi-platform time-to-market with 90%+ shared code, we build high-performance React Native (New Architecture with Fabric C++ engine) and Flutter applications."
    },
    {
      q: "How do you handle offline functionality when the user loses internet connection?",
      a: "We implement offline-first architectures using local embedded databases (SQLite, WatermelonDB, or Realm). All user actions are stored locally in an optimistic queue and automatically synchronized with the cloud backend once connectivity is restored, featuring conflict resolution rules."
    },
    {
      q: "Do you guarantee App Store and Google Play approval?",
      a: "Yes. We handle the entire submission process, including metadata configuration, privacy compliance declarations, screenshots, app review guidelines, and direct communication with Apple and Google review teams until your app is live."
    },
    {
      q: "How do you achieve 60/120 FPS performance in React Native or Flutter?",
      a: "We utilize React Native's New Architecture (Fabric C++ renderer and Hermes bytecode engine) and Flutter's Impeller graphics engine. By eliminating JS-to-native bridge bottlenecks and running complex animations on the UI thread, we guarantee sub-second LCP and 60/120 FPS fluid motion."
    },
    {
      q: "Can you integrate biometric authentication (FaceID / TouchID)?",
      a: "Yes. We integrate native hardware security APIs—iOS LocalAuthentication / Secure Enclave and Android BiometricPrompt / Keystore—ensuring sensitive credentials never leave the physical device."
    },
    {
      q: "What is your mobile development lifecycle timeline?",
      a: "A typical MVP mobile app build takes 6 to 8 weeks from initial architecture blueprinting to live App Store and Google Play publishing. We deliver weekly TestFlight (iOS) and Firebase App Distribution (Android) beta builds throughout the process."
    }
  ];

  // --- Render ---
  return (
    <div className="font-sans text-slate-900 bg-white overflow-x-hidden w-full">

      {/* ── 1. HERO SECTION ── */}
      <section
        className="w-full relative overflow-hidden"
        style={{
          backgroundColor: '#f4f5f7',
          paddingTop: '120px',
          paddingBottom: '60px',
          paddingLeft: '16px',
          paddingRight: '16px'
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative">

            {/* ── LEFT CARD: Pure White Panel ── */}
            <div
              className="lg:col-span-6 flex flex-col justify-between relative z-10"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '38px',
                padding: 'clamp(28px, 3.5vw, 44px)',
                border: '1px solid #e5e7eb',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
                minHeight: '520px'
              }}
            >
              <div>
                <h1
                  className="font-sans font-black text-slate-900 tracking-tight"
                  style={{
                    fontSize: 'clamp(32px, 3.8vw, 48px)',
                    lineHeight: '1.16',
                    letterSpacing: '-0.02em',
                    marginBottom: '20px'
                  }}
                >
                  Fast &amp; Native-Grade <br />
                  Mobile Apps
                </h1>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '15px',
                    color: '#64748b',
                    lineHeight: '1.65',
                    maxWidth: '480px',
                    fontWeight: '400',
                    marginBottom: '36px'
                  }}
                >
                  Expertly crafted native applications using iOS Swift and Android Kotlin, alongside powerful cross-platform solutions in React Native and Flutter. We engineer every application to deliver sub-second cold starts, uncompromised 120 FPS fluid animations, and a flawlessly responsive user experience at scale.
                </p>

                <div className="mb-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-black transition-transform hover:scale-105"
                    style={{
                      backgroundColor: '#d7f82e',
                      color: '#090d16',
                      fontSize: '14px',
                      padding: '14px 28px',
                      borderRadius: '9999px',
                      boxShadow: '0 4px 14px rgba(215, 248, 46, 0.4)'
                    }}
                  >
                    <span>Build Your App</span>
                    <span style={{ fontSize: '16px' }}>↗</span>
                  </Link>
                </div>
              </div>

              {/* Store Badges at Bottom Left */}
              <div className="flex items-center gap-3 pt-6 border-t border-slate-100 flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 hover:bg-slate-50 transition-colors"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #cbd5e1',
                    color: '#0f172a',
                    fontSize: '12px',
                    fontWeight: 700,
                    padding: '9px 18px',
                    borderRadius: '9999px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
                  }}
                >
                  <span>App Store</span>
                  <svg style={{ width: '15px', height: '15px', fill: '#0f172a' }} viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.34c.64-.78 1.08-1.85.96-2.94-.93.04-2.06.62-2.73 1.4-.59.68-1.11 1.77-.97 2.83 1.05.08 2.1-.51 2.74-1.29z" />
                  </svg>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 hover:bg-slate-50 transition-colors"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #cbd5e1',
                    color: '#0f172a',
                    fontSize: '12px',
                    fontWeight: 700,
                    padding: '9px 18px',
                    borderRadius: '9999px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
                  }}
                >
                  <span>Google Play</span>
                  <svg style={{ width: '13px', height: '13px', fill: '#0f172a' }} viewBox="0 0 24 24">
                    <path d="M3 20.5v-17c0-.55.45-1 1-1h.22l9.95 9.95L4.22 22.4H4c-.55 0-1-.45-1-.9zm1.41-1.41l8.54-8.54-8.54-8.54v17.08zM15.59 13.59l2.71-2.71c.39-.39.39-1.02 0-1.41l-2.71-2.71-8.54 8.54 8.54 8.54 8.54-8.54z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* ── RIGHT CARD: Vibrant Lime Green Panel ── */}
            <div
              className="lg:col-span-6 relative overflow-hidden flex flex-col justify-between"
              style={{
                backgroundColor: '#d7f82e',
                borderRadius: '38px',
                padding: '36px',
                minHeight: '520px'
              }}
            >
              {/* Floating Cards Container */}
              <div className="flex flex-col gap-4 relative z-20">
                {/* Floating Telemetry Card */}
                <div
                  className="transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.88)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.7)',
                    borderRadius: '22px',
                    padding: '16px 20px',
                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.06)',
                    maxWidth: '240px'
                  }}
                >
                  <div className="flex items-center justify-between" style={{ marginBottom: '3px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 600, color: '#64748b' }}>App Telemetry</div>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '4px' }}>
                    120 FPS <span style={{ fontSize: '13px', fontWeight: 700, color: '#475569' }}>• 0.45s</span>
                  </div>
                  <div className="flex items-center gap-1.5" style={{ fontSize: '11px', fontWeight: 700, color: '#16a34a' }}>
                    <span style={{ color: '#64748b', fontWeight: 500 }}>Hermes C++ →</span>
                    <span style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '2px 6px', borderRadius: '6px', fontSize: '10px', fontWeight: 800 }}>▲ 99.98% SLA</span>
                  </div>
                </div>

                {/* Floating Security Card */}
                <div
                  className="transition-transform duration-300 hover:-translate-y-1 hidden sm:block"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.88)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.7)',
                    borderRadius: '22px',
                    padding: '16px 20px',
                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.06)',
                    maxWidth: '240px'
                  }}
                >
                  <div className="flex items-center justify-between" style={{ marginBottom: '3px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 600, color: '#64748b' }}>Security Enclave</div>
                    <span className="flex h-2 w-2 relative">
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '4px' }}>
                    Biometrics <span style={{ fontSize: '13px', fontWeight: 700, color: '#475569' }}>🔒</span>
                  </div>
                  <div className="flex items-center gap-1.5" style={{ fontSize: '11px', fontWeight: 700, color: '#2563eb' }}>
                    <span style={{ color: '#64748b', fontWeight: 500 }}>AES-256 GCM →</span>
                    <span style={{ backgroundColor: '#dbeafe', color: '#1d4ed8', padding: '2px 6px', borderRadius: '6px', fontSize: '10px', fontWeight: 800 }}>Encrypted</span>
                  </div>
                </div>

                {/* Floating Offline Sync Card */}
                <div
                  className="transition-transform duration-300 hover:-translate-y-1 hidden lg:block"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.88)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.7)',
                    borderRadius: '22px',
                    padding: '16px 20px',
                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.06)',
                    maxWidth: '240px'
                  }}
                >
                  <div className="flex items-center justify-between" style={{ marginBottom: '3px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 600, color: '#64748b' }}>Offline Sync</div>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                    </span>
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '4px' }}>
                    0ms Latency <span style={{ fontSize: '13px', fontWeight: 700, color: '#475569' }}>💾</span>
                  </div>
                  <div className="flex items-center gap-1.5" style={{ fontSize: '11px', fontWeight: 700, color: '#9333ea' }}>
                    <span style={{ color: '#64748b', fontWeight: 500 }}>WatermelonDB →</span>
                    <span style={{ backgroundColor: '#f3e8ff', color: '#7e22ce', padding: '2px 6px', borderRadius: '6px', fontSize: '10px', fontWeight: 800 }}>Delta Merge</span>
                  </div>
                </div>
              </div>

              {/* Smartphone Mockup (Right Side) */}
              <div
                className="relative lg:absolute right-auto lg:right-5 top-auto lg:top-7 mt-8 lg:mt-0 z-10 mx-auto lg:mx-0"
                style={{
                  width: '270px',
                  height: '520px'
                }}
              >
                {/* Physical buttons */}
                <div className="hidden sm:block absolute -left-2 top-28 w-1 h-8 bg-slate-800 rounded-l-md pointer-events-none" />
                <div className="hidden sm:block absolute -left-2 top-40 w-1 h-8 bg-slate-800 rounded-l-md pointer-events-none" />
                <div className="hidden sm:block absolute -right-2 top-32 w-1 h-12 bg-slate-800 rounded-r-md pointer-events-none" />

                <div
                  className="shadow-2xl h-full flex flex-col text-white relative overflow-hidden"
                  style={{
                    backgroundColor: '#0a0e17',
                    border: '6px solid #1e293b',
                    borderRadius: '40px',
                    padding: '10px'
                  }}
                >
                  {/* Status Bar */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0 8px',
                      marginBottom: '4px',
                      fontSize: '10px',
                      color: '#94a3b8',
                      fontWeight: 600
                    }}
                  >
                    <span>9:41</span>
                    <div
                      style={{
                        width: '78px',
                        height: '15px',
                        backgroundColor: '#000000',
                        borderRadius: '9999px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0 8px',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.5)'
                      }}
                    >
                      <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#1e293b' }} />
                      <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#22c55e', boxShadow: '0 0 6px #22c55e' }} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '9px' }}>
                      <span>5G</span>
                      <div style={{ width: '16px', height: '9px', border: '1.2px solid #94a3b8', borderRadius: '3px', padding: '1px', display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '100%', height: '100%', backgroundColor: '#22c55e', borderRadius: '1px' }} />
                      </div>
                    </div>
                  </div>

                  {/* Phone Screen UI */}
                  <div
                    className="flex-1 overflow-hidden relative"
                    style={{
                      backgroundColor: '#070b13',
                      borderRadius: '24px',
                      padding: '12px 12px 8px 12px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      gap: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    {/* Screen Glare */}
                    <div
                      className="pointer-events-none absolute inset-0 z-10"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 35%, transparent 60%)'
                      }}
                    />

                    {/* App Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div className="relative">
                          <div style={{ width: '28px', height: '28px', borderRadius: '50%', overflow: 'hidden', border: '1.5px solid #38bdf8', flexShrink: 0 }}>
                            <img src="/services/security_expert_portrait.jpg" alt="Dev" className="w-full h-full object-cover" />
                          </div>
                          <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e', border: '1.5px solid #070b13' }} />
                        </div>
                        <div>
                          <div style={{ fontSize: '11px', fontWeight: 800, color: '#ffffff', lineHeight: 1.1, display: 'flex', alignItems: 'center', gap: '4px' }}>
                            OneNine Engine
                            <span style={{ fontSize: '7.5px', backgroundColor: 'rgba(56, 189, 248, 0.2)', color: '#38bdf8', padding: '1px 4px', borderRadius: '4px', fontWeight: 700 }}>PRO</span>
                          </div>
                          <div style={{ fontSize: '8px', color: '#94a3b8', fontWeight: 600 }}>v2.4.0 • TestFlight #412</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '5px' }}>
                        <div style={{ width: '22px', height: '22px', borderRadius: '6px', backgroundColor: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', cursor: 'pointer' }} title="Settings">⚙️</div>
                        <div style={{ width: '22px', height: '22px', borderRadius: '6px', backgroundColor: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', cursor: 'pointer' }} title="Build & Deploy">🚀</div>
                      </div>
                    </div>

                    {/* Performance Gauge */}
                    <div
                      style={{
                        backgroundColor: 'rgba(15, 23, 42, 0.9)',
                        border: '1px solid rgba(56, 189, 248, 0.2)',
                        borderRadius: '14px',
                        padding: '8px 10px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
                        <span style={{ fontSize: '9.5px', color: '#94a3b8', fontWeight: 600 }}>Runtime Performance</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                          <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                          <span style={{ fontSize: '8.5px', color: '#22c55e', fontWeight: 700 }}>60/120 FPS</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <div style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.02em' }}>
                          0.38s <span style={{ fontSize: '9.5px', fontWeight: 600, color: '#38bdf8' }}>Cold Start</span>
                        </div>
                        <div style={{ fontSize: '9px', fontWeight: 700, color: '#a855f7', backgroundColor: 'rgba(168, 85, 247, 0.15)', padding: '2px 6px', borderRadius: '6px' }}>
                          Hermes C++
                        </div>
                      </div>
                    </div>

                    {/* Mobile Architecture Capabilities */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                      {/* React Native Fabric */}
                      <div
                        onClick={() => toggleModule('reactNative')}
                        className="transition-all duration-200 hover:border-sky-500/50"
                        style={{
                          backgroundColor: enabledModules.reactNative ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.5)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '6px 9px',
                          borderRadius: '12px',
                          border: enabledModules.reactNative ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid rgba(30, 41, 59, 0.8)',
                          cursor: 'pointer',
                          boxShadow: enabledModules.reactNative ? '0 2px 8px rgba(56, 189, 248, 0.1)' : 'none'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{ width: '22px', height: '22px', borderRadius: '7px', backgroundColor: 'rgba(56, 189, 248, 0.2)', color: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold', flexShrink: 0 }}>⚛️</div>
                          <div>
                            <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#ffffff', lineHeight: 1.1 }}>React Native</div>
                            <div style={{ fontSize: '7.5px', color: '#94a3b8' }}>Fabric C++ Engine • v0.76</div>
                          </div>
                        </div>
                        <div
                          style={{
                            width: '26px',
                            height: '15px',
                            backgroundColor: enabledModules.reactNative ? '#f97316' : '#334155',
                            borderRadius: '9999px',
                            padding: '1.5px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: enabledModules.reactNative ? 'flex-end' : 'flex-start',
                            transition: 'all 0.2s ease',
                            flexShrink: 0
                          }}
                        >
                          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.4)' }} />
                        </div>
                      </div>

                      {/* Swift & SwiftUI */}
                      <div
                        onClick={() => toggleModule('swiftIos')}
                        className="transition-all duration-200 hover:border-slate-400/50"
                        style={{
                          backgroundColor: enabledModules.swiftIos ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.5)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '6px 9px',
                          borderRadius: '12px',
                          border: enabledModules.swiftIos ? '1px solid rgba(255, 255, 255, 0.35)' : '1px solid rgba(30, 41, 59, 0.8)',
                          cursor: 'pointer',
                          boxShadow: enabledModules.swiftIos ? '0 2px 8px rgba(255, 255, 255, 0.08)' : 'none'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{ width: '22px', height: '22px', borderRadius: '7px', backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold', flexShrink: 0 }}>🍏</div>
                          <div>
                            <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#ffffff', lineHeight: 1.1 }}>Swift &amp; SwiftUI</div>
                            <div style={{ fontSize: '7.5px', color: '#94a3b8' }}>Metal GPU • iOS 18 SDK</div>
                          </div>
                        </div>
                        <div
                          style={{
                            width: '26px',
                            height: '15px',
                            backgroundColor: enabledModules.swiftIos ? '#f97316' : '#334155',
                            borderRadius: '9999px',
                            padding: '1.5px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: enabledModules.swiftIos ? 'flex-end' : 'flex-start',
                            transition: 'all 0.2s ease',
                            flexShrink: 0
                          }}
                        >
                          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.4)' }} />
                        </div>
                      </div>

                      {/* Kotlin & Compose */}
                      <div
                        onClick={() => toggleModule('kotlinAndroid')}
                        className="transition-all duration-200 hover:border-emerald-500/50"
                        style={{
                          backgroundColor: enabledModules.kotlinAndroid ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.5)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '6px 9px',
                          borderRadius: '12px',
                          border: enabledModules.kotlinAndroid ? '1px solid rgba(16, 185, 129, 0.35)' : '1px solid rgba(30, 41, 59, 0.8)',
                          cursor: 'pointer',
                          boxShadow: enabledModules.kotlinAndroid ? '0 2px 8px rgba(16, 185, 129, 0.1)' : 'none'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{ width: '22px', height: '22px', borderRadius: '7px', backgroundColor: 'rgba(16, 185, 129, 0.2)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold', flexShrink: 0 }}>🤖</div>
                          <div>
                            <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#ffffff', lineHeight: 1.1 }}>Android Kotlin</div>
                            <div style={{ fontSize: '7.5px', color: '#94a3b8' }}>Jetpack Compose • ART</div>
                          </div>
                        </div>
                        <div
                          style={{
                            width: '26px',
                            height: '15px',
                            backgroundColor: enabledModules.kotlinAndroid ? '#f97316' : '#334155',
                            borderRadius: '9999px',
                            padding: '1.5px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: enabledModules.kotlinAndroid ? 'flex-end' : 'flex-start',
                            transition: 'all 0.2s ease',
                            flexShrink: 0
                          }}
                        >
                          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.4)' }} />
                        </div>
                      </div>

                      {/* Offline SQLite Sync */}
                      <div
                        onClick={() => toggleModule('offlineDb')}
                        className="transition-all duration-200 hover:border-purple-500/50"
                        style={{
                          backgroundColor: enabledModules.offlineDb ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.5)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '6px 9px',
                          borderRadius: '12px',
                          border: enabledModules.offlineDb ? '1px solid rgba(168, 85, 247, 0.35)' : '1px solid rgba(30, 41, 59, 0.8)',
                          cursor: 'pointer',
                          boxShadow: enabledModules.offlineDb ? '0 2px 8px rgba(168, 85, 247, 0.1)' : 'none'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{ width: '22px', height: '22px', borderRadius: '7px', backgroundColor: 'rgba(168, 85, 247, 0.2)', color: '#c084fc', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold', flexShrink: 0 }}>💾</div>
                          <div>
                            <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#ffffff', lineHeight: 1.1 }}>Offline Database</div>
                            <div style={{ fontSize: '7.5px', color: '#94a3b8' }}>WatermelonDB / SQLite</div>
                          </div>
                        </div>
                        <div
                          style={{
                            width: '26px',
                            height: '15px',
                            backgroundColor: enabledModules.offlineDb ? '#f97316' : '#334155',
                            borderRadius: '9999px',
                            padding: '1.5px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: enabledModules.offlineDb ? 'flex-end' : 'flex-start',
                            transition: 'all 0.2s ease',
                            flexShrink: 0
                          }}
                        >
                          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.4)' }} />
                        </div>
                      </div>
                    </div>

                    {/* Ready-to-Deploy Pill */}
                    <div
                      style={{
                        marginTop: 'auto',
                        backgroundColor: 'rgba(22, 101, 52, 0.25)',
                        border: '1px solid rgba(34, 197, 94, 0.3)',
                        borderRadius: '10px',
                        padding: '4px 8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px',
                        fontSize: '8.5px',
                        color: '#4ade80',
                        fontWeight: 700
                      }}
                    >
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#4ade80' }} />
                      <span>App Store &amp; Play Store Ready</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Right White Label */}
              <div
                className="absolute bottom-0 right-0 z-20 text-right shadow-xs select-none"
                style={{
                  backgroundColor: '#ffffff',
                  paddingTop: '14px',
                  paddingLeft: '24px',
                  paddingBottom: '14px',
                  paddingRight: '24px',
                  borderTopLeftRadius: '28px'
                }}
              >
                <div
                  className="absolute -top-5 right-0 w-5 h-5 rounded-br-2xl pointer-events-none"
                  style={{ boxShadow: '4px 4px 0 0 #ffffff' }}
                />
                <div
                  className="absolute bottom-0 -left-5 w-5 h-5 rounded-br-2xl pointer-events-none"
                  style={{ boxShadow: '4px 4px 0 0 #ffffff' }}
                />

                <div
                  className="font-mono text-slate-900 uppercase leading-tight font-extrabold"
                  style={{ fontSize: '9.5px', letterSpacing: '0.06em' }}
                >
                  LAUNCH YOUR APP <br /> WITH ONE NINE
                </div>
              </div>
            </div>

            {/* ── CENTER CIRCULAR "LEARN MORE" BADGE ── */}
            <div
              onClick={() => {
                const el = document.getElementById('platforms');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="absolute left-1/2 -translate-x-1/2 z-30 hidden lg:flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95"
              style={{ bottom: '-24px' }}
              title="Scroll to frameworks"
            >
              <div
                className="rounded-full flex items-center justify-center relative shadow-lg"
                style={{
                  width: '96px',
                  height: '96px',
                  backgroundColor: '#ffffff',
                  border: '4px solid #f4f5f7'
                }}
              >
                <svg className="w-full h-full animate-[spin_12s_linear_infinite] absolute inset-0" viewBox="0 0 100 100">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text style={{ fontSize: '8.5px' }} className="font-mono font-bold fill-slate-800 tracking-widest uppercase">
                    <textPath href="#circlePath" startOffset="0%">
                      • Learn more • Learn more • Learn more
                    </textPath>
                  </text>
                </svg>
                <div style={{ fontSize: '20px', fontWeight: 900, color: '#0f172a' }}>↓</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. MATCHING APP LAYOUT ── */}
      <section
        id="app-features"
        className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-slate-200 flex justify-center items-center overflow-hidden"
        style={{ backgroundColor: '#ffffff', minHeight: '800px' }}
      >
        <div className="max-w-6xl mx-auto w-full">

          {/* Section Heading */}
          <div className="text-center mb-16 lg:mb-20 relative z-30">
            <span
              style={{
                fontSize: '13px',
                fontWeight: '900',
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                color: '#0f172a',
                display: 'block',
                marginBottom: '12px'
              }}
            >
              OUR EXPERTISE
            </span>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: '900',
                color: '#0f172a',
                lineHeight: '1.15',
                letterSpacing: '-1px',
                margin: '0 auto 12px auto',
                maxWidth: '720px',
                textAlign: 'center'
              }}
            >
              High-Performance Mobile Experiences
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: '#475569',
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '1.65',
                margin: '0 auto',
                maxWidth: '620px',
                textAlign: 'center'
              }}
            >
              We engineer scalable, offline-first mobile applications with native 120 FPS fluency and bank-grade security for iOS and Android.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 relative">

            {/* Left Features */}
            <div className="flex flex-col gap-12 w-full lg:w-1/3 order-2 lg:order-1 items-center lg:items-start text-center lg:text-left z-20">
              <div className="flex flex-col items-center lg:items-start max-w-xs">
                <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white mb-4 shadow-lg shadow-pink-500/30">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">High Performance</h3>
                <p className="text-slate-500 text-sm leading-relaxed">120 FPS native fluidity and sub-second cold starts</p>
              </div>

              <div className="flex flex-col items-center lg:items-start max-w-xs">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-500/30">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Cross-Platform</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Unified codebases for rapid iOS and Android deployment</p>
              </div>
            </div>

            {/* Center Phone */}
            <div className="w-full lg:w-1/3 flex justify-center order-1 lg:order-2 relative select-none">
              {/* Decorative circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] rounded-full border-[0.5px] border-slate-200 opacity-60"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] sm:w-[580px] sm:h-[580px] rounded-full border-[0.5px] border-slate-100 opacity-40"></div>

              <div className="relative z-10 w-[280px] h-[480px] bg-slate-900 rounded-[44px] border-[8px] border-slate-800 p-2 shadow-2xl flex flex-col overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 rounded-b-3xl w-1/2 mx-auto z-20"></div>

                {/* Phone Screen Content */}
                <div className="bg-pink-500 flex-1 rounded-[32px] overflow-hidden flex flex-col relative">

                  {/* Photo */}
                  <div className="h-[60%] w-full bg-pink-400 relative">
                    <img src="/services/welcome_architecture_3d.jpg" alt="Woman matching" className="w-full h-full object-cover mix-blend-overlay opacity-90" />
                  </div>

                  {/* Bottom White Area */}
                  <div className="h-[45%] bg-white w-full flex flex-col items-center justify-center p-6 text-center z-10 rounded-t-3xl absolute bottom-0 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
                    <h3 className="text-[22px] font-extrabold text-slate-800 leading-tight mb-3">Build Your Next<br />Mobile App</h3>
                    <p className="text-[11px] text-slate-400 mb-6 leading-relaxed max-w-[200px]">Engineer a high-performance digital product that dominates the market.</p>
                    <button className="bg-pink-500 hover:bg-pink-600 text-white text-[13px] font-bold py-3.5 px-8 rounded-full shadow-lg shadow-pink-500/30 transition-transform active:scale-95 w-4/5">Start Building</button>
                    <div className="mt-5 flex gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                      <div className="w-4 h-1.5 rounded-full bg-pink-500"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute top-[20%] -left-6 sm:-left-12 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center z-20 animate-[bounce_4s_infinite]">
                <span className="text-2xl">🔒</span>
              </div>
              <div className="absolute top-[10%] right-[-10px] sm:-right-4 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center z-20 animate-[bounce_5s_infinite_0.5s]">
                <span className="text-3xl">❤️</span>
              </div>
              <div className="absolute bottom-[35%] -right-8 sm:-right-14 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center z-20 animate-[bounce_4.5s_infinite_1s]">
                <span className="text-2xl">💌</span>
              </div>
            </div>

            {/* Right Features */}
            <div className="flex flex-col gap-12 w-full lg:w-1/3 order-3 items-center lg:items-end text-center lg:text-right z-20">
              <div className="flex flex-col items-center lg:items-end max-w-xs">
                <div className="w-12 h-12 rounded-full bg-teal-400 flex items-center justify-center text-white mb-4 shadow-lg shadow-teal-400/30">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Offline-First</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Robust data synchronization without active connections</p>
              </div>

              <div className="flex flex-col items-center lg:items-end max-w-xs">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white mb-4 shadow-lg shadow-purple-500/30">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Bank-Grade Security</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Biometric auth and encrypted secure enclaves</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ── 3. ENGINEERING STACKS ── */}
      <section id="technology" className="w-full relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-white border-b border-slate-200 mt-8 sm:mt-10 lg:mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Left: Dual Small Mobile Mockups */}
            <div className="w-full lg:w-1/2 relative flex justify-center items-center min-h-[500px]">
              {/* Background Circle */}
              <div className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full bg-gradient-to-tr from-purple-600 via-indigo-500 to-sky-500 opacity-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>

              <div className="relative w-full max-w-[440px] h-[520px]">
                {/* Smartphone Mockup 1 (Back/Left) */}
                <div
                  className="absolute z-10 top-0 left-0 transform -rotate-[4deg] hover:rotate-0 transition-transform duration-500 hover:z-30 hover:-translate-y-2"
                  style={{ width: '220px', height: '460px' }}
                >
                  <div className="absolute -left-1.5 top-24 w-1.5 h-6 bg-slate-300 rounded-l-md pointer-events-none border border-r-0 border-slate-400" />
                  <div className="absolute -left-1.5 top-32 w-1.5 h-6 bg-slate-300 rounded-l-md pointer-events-none border border-r-0 border-slate-400" />
                  <div className="absolute -right-1.5 top-28 w-1.5 h-12 bg-slate-300 rounded-r-md pointer-events-none border border-l-0 border-slate-400" />

                  <div className="shadow-[0_15px_35px_-10px_rgba(79,70,229,0.4)] h-full flex flex-col relative overflow-hidden bg-white border-[6px] border-slate-300 rounded-[32px] p-2">
                    <div className="flex justify-between items-center px-2 mb-3 text-[9px] text-slate-800 font-semibold mt-1">
                      <span>9:41</span>
                      <div className="w-[60px] h-[16px] bg-black rounded-full flex items-center justify-end px-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <div className="flex items-center gap-1">
                        <span>5G</span>
                      </div>
                    </div>

                    <div className="flex-1 overflow-hidden relative bg-[#0f172a] rounded-[24px] flex flex-col">
                      {/* Content Phone 1 */}
                      <div className="p-4 pb-2 flex justify-between items-center">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-slate-700 overflow-hidden border border-slate-600 flex-shrink-0">
                            <img src="/services/security_expert_portrait.jpg" alt="User" className="w-full h-full object-cover" />
                          </div>
                          <div className="text-white font-bold text-[10px] truncate">Hi, Alex 👋</div>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-[11px] flex-shrink-0">🔔</div>
                      </div>

                      <div className="px-4 py-2">
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-4 shadow-lg relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -translate-y-8 translate-x-4"></div>
                          <div className="text-indigo-100 text-[9px] font-medium mb-1.5">Total Balance</div>
                          <div className="text-white font-bold text-2xl mb-3 tracking-tight">$24,500.00</div>
                          <div className="flex justify-between items-end">
                            <div className="text-[8px] bg-white/20 px-2 py-1 rounded text-white font-medium">+ 14.5%</div>
                            <div className="text-[14px]">💳</div>
                          </div>
                        </div>
                      </div>

                      <div className="px-4 flex-1 flex flex-col">
                        <div className="flex justify-between items-center mb-3 mt-1">
                          <div className="text-white text-[10px] font-bold">Recent Activity</div>
                          <div className="text-indigo-400 text-[8px] font-semibold">See all</div>
                        </div>

                        <div className="flex flex-col gap-2.5">
                          <div className="flex items-center justify-between bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/50">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[14px] flex-shrink-0 shadow-sm">🍎</div>
                              <div>
                                <div className="text-white text-[9px] font-semibold mb-0.5">Apple Store</div>
                                <div className="text-slate-400 text-[7px]">Electronics</div>
                              </div>
                            </div>
                            <div className="text-white text-[9px] font-bold">-$1,299</div>
                          </div>

                          <div className="flex items-center justify-between bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/50">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-[14px] flex-shrink-0">☕</div>
                              <div>
                                <div className="text-white text-[9px] font-semibold mb-0.5">Starbucks</div>
                                <div className="text-slate-400 text-[7px]">Food & Drink</div>
                              </div>
                            </div>
                            <div className="text-white text-[9px] font-bold">-$5.50</div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Nav */}
                      <div className="h-12 bg-slate-900 border-t border-slate-800 flex justify-around items-center px-4 mt-auto">
                        <div className="text-indigo-500 text-[12px]">🏠</div>
                        <div className="text-slate-500 text-[12px]">📊</div>
                        <div className="text-slate-500 text-[12px]">💳</div>
                        <div className="text-slate-500 text-[12px]">⚙️</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Smartphone Mockup 2 (Front/Right) */}
                <div
                  className="absolute z-20 bottom-0 right-0 transform rotate-[4deg] hover:rotate-0 transition-transform duration-500 hover:z-30 hover:-translate-y-2"
                  style={{ width: '220px', height: '460px' }}
                >
                  <div className="absolute -left-1.5 top-24 w-1.5 h-6 bg-slate-800 rounded-l-md pointer-events-none border border-r-0 border-slate-700" />
                  <div className="absolute -left-1.5 top-32 w-1.5 h-6 bg-slate-800 rounded-l-md pointer-events-none border border-r-0 border-slate-700" />
                  <div className="absolute -right-1.5 top-28 w-1.5 h-12 bg-slate-800 rounded-r-md pointer-events-none border border-l-0 border-slate-700" />

                  <div className="shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] h-full flex flex-col relative overflow-hidden bg-slate-900 border-[6px] border-slate-800 rounded-[32px] p-2">
                    <div className="flex justify-between items-center px-2 mb-3 text-[9px] text-slate-300 font-semibold mt-1">
                      <span>9:41</span>
                      <div className="w-[60px] h-[16px] bg-black rounded-full flex items-center justify-end px-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <div className="flex items-center gap-1">
                        <span>5G</span>
                      </div>
                    </div>

                    <div className="flex-1 overflow-hidden relative bg-slate-50 rounded-[24px] flex flex-col">
                      {/* Content Phone 2 */}
                      <div className="bg-white p-4 pt-4 border-b border-slate-100 flex justify-between items-center shadow-sm">
                        <div>
                          <div className="text-slate-400 text-[8px] font-bold uppercase tracking-wider mb-1">Today's Activity</div>
                          <div className="text-slate-800 font-extrabold text-[13px]">Health Overview</div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-[14px] text-emerald-500 border border-emerald-100 flex-shrink-0">🏃</div>
                      </div>

                      <div className="p-4 flex-1 flex flex-col">
                        {/* Circular Progress */}
                        <div className="flex justify-center my-3 relative">
                          <div className="w-28 h-28 rounded-full border-4 border-slate-100 flex items-center justify-center relative">
                            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                              <circle cx="50" cy="50" r="46" fill="none" stroke="#10b981" strokeWidth="8" strokeDasharray="289" strokeDashoffset="60" strokeLinecap="round" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                              <div className="text-[16px] font-extrabold text-slate-800 leading-tight">8,432</div>
                              <div className="text-[7px] text-slate-400 font-bold uppercase mt-0.5">Steps</div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="bg-white p-2.5 rounded-xl shadow-sm border border-slate-100 flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 text-[12px] flex-shrink-0">🔥</div>
                            <div>
                              <div className="text-[10px] font-bold text-slate-700 mb-0.5">450</div>
                              <div className="text-[7px] text-slate-400 font-medium">Calories</div>
                            </div>
                          </div>
                          <div className="bg-white p-2.5 rounded-xl shadow-sm border border-slate-100 flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 text-[12px] flex-shrink-0">💧</div>
                            <div>
                              <div className="text-[10px] font-bold text-slate-700 mb-0.5">1.2L</div>
                              <div className="text-[7px] text-slate-400 font-medium">Water</div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-emerald-500 text-white p-3 rounded-xl shadow-md shadow-emerald-500/20 flex justify-between items-center mt-auto cursor-pointer mb-2 transition-transform hover:scale-[1.02]">
                          <div className="flex items-center gap-2.5">
                            <div className="bg-white/20 w-7 h-7 rounded-lg flex items-center justify-center text-[12px] flex-shrink-0">⏱️</div>
                            <div className="text-[10px] font-bold">Start Workout</div>
                          </div>
                          <div className="text-[12px]">▶</div>
                        </div>
                      </div>

                      <div className="h-1 bg-slate-200 w-20 mx-auto rounded-full mb-1.5 flex-shrink-0"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Features Grid */}
            <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 leading-[1.2] mb-5 font-['Plus_Jakarta_Sans'] tracking-tight">
                Multi-Platform &amp; Native<br className="hidden lg:block" /> Engineering Stacks
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-12 font-['Inter'] max-w-lg">
                We select the optimal framework and rendering architecture for your product, balancing rapid cross-platform deployment with uncompromised 120 FPS performance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                {/* Feature 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/30">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-[17px] font-bold text-slate-900 mb-1.5">Native Swift &amp; Kotlin</h3>
                    <p className="text-slate-500 text-[13px] leading-relaxed">
                      Engineered specifically for Apple and Android hardware, utilizing SwiftUI and Compose.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/30">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-[17px] font-bold text-slate-900 mb-1.5">React Native &amp; Flutter</h3>
                    <p className="text-slate-500 text-[13px] leading-relaxed">
                      Unified JavaScript and Dart codebases with up to 90% shared business logic.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/30">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-[17px] font-bold text-slate-900 mb-1.5">High Performance 120 FPS</h3>
                    <p className="text-slate-500 text-[13px] leading-relaxed">
                      Hermes C++ execution directly within the app runtime for uncompromised fluidity.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/30">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-[17px] font-bold text-slate-900 mb-1.5">Offline-First Sync</h3>
                    <p className="text-slate-500 text-[13px] leading-relaxed">
                      Local embedded database engines with background CRDT delta synchronization.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. "YOU'LL FIND EVERYTHING YOU NEED AND MORE" ── */}
      <section
        id="solutions"
        className="relative w-full overflow-hidden py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-slate-200 mt-8 sm:mt-10 lg:mt-12"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Header */}
          <div className="text-center mb-14 lg:mb-18">
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(28px, 4.2vw, 48px)',
                fontWeight: '900',
                color: '#133522',
                lineHeight: '1.15',
                letterSpacing: '-1px',
                margin: '0 auto 16px auto',
                maxWidth: '720px',
                textAlign: 'center'
              }}
            >
              You&apos;ll Find Everything You<br className="hidden sm:inline" /> Need And More
            </h2>
          </div>

          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">

            {/* Card 1: Privacy First */}
            <div
              onMouseEnter={() => setHoveredCard('privacy')}
              className={`group flex flex-col justify-between overflow-hidden relative transition-all duration-300 cursor-pointer ${hoveredCard === 'privacy' ? '-translate-y-2' : 'hover:-translate-y-1'}`}
              style={{
                backgroundColor: hoveredCard === 'privacy' ? '#bbf246' : '#f8fafc',
                borderRadius: '32px',
                padding: '36px 28px 0px 28px',
                minHeight: '350px',
                border: hoveredCard === 'privacy' ? '1px solid rgba(180, 230, 40, 0.9)' : '1px solid #f1f5f9',
                boxShadow: hoveredCard === 'privacy' ? '0 20px 40px -10px rgba(187, 242, 70, 0.4)' : '0 2px 10px rgba(0,0,0,0.02)'
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div style={{ width: '48px', height: '48px', borderRadius: '16px', backgroundColor: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }} className="transition-transform group-hover:scale-110">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#133522" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
                  </div>
                  {hoveredCard === 'privacy' && (
                    <span className="text-[10px] font-bold font-mono px-3 py-1 bg-[#133522] text-[#bbf246] rounded-full animate-fade-in">🔒 Zero-Knowledge</span>
                  )}
                </div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: '800', color: '#133522', letterSpacing: '-0.3px', marginBottom: '10px' }}>Privacy First</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: hoveredCard === 'privacy' ? '#1b3f2a' : '#64748b', lineHeight: '1.5', fontWeight: hoveredCard === 'privacy' ? '500' : '400' }}>
                  We are committed to protecting your data at the core of our approach.
                </p>
              </div>
              <div className="relative w-full flex justify-center items-end select-none" style={{ height: '160px', marginTop: '16px' }}>
                <div className={`absolute bg-slate-900 rounded-t-3xl border-2 border-slate-700 shadow-xl overflow-hidden transition-transform duration-300`} style={{ width: '160px', height: '180px', bottom: '-20px', left: '50%', transform: hoveredCard === 'privacy' ? 'translate(-50%, -10px)' : 'translate(-50%, 10px)' }}>
                  <div className="w-12 h-2.5 bg-black rounded-full mx-auto mt-1.5 mb-2" />
                  <div className="px-4 text-center mt-6">
                    <div className="w-12 h-12 mx-auto bg-slate-800 rounded-full flex items-center justify-center text-[20px] mb-2 border border-emerald-500/30">🛡️</div>
                    <div className="text-white text-[10px] font-bold">Face ID</div>
                    <div className="text-emerald-400 text-[7px] mt-1">Authenticated</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: 60+ Languages */}
            <div
              onMouseEnter={() => setHoveredCard('languages')}
              className={`group relative flex flex-col justify-between overflow-hidden transition-all duration-300 cursor-pointer ${hoveredCard === 'languages' ? '-translate-y-2' : 'hover:-translate-y-1'}`}
              style={{
                backgroundColor: '#bbf246',
                borderRadius: '32px',
                padding: '36px 28px 0px 28px',
                minHeight: '350px',
                border: hoveredCard === 'languages' ? '1px solid rgba(160, 220, 30, 0.9)' : '1px solid rgba(180, 230, 40, 0.6)',
                boxShadow: hoveredCard === 'languages' ? '0 20px 40px -10px rgba(187, 242, 70, 0.45)' : '0 4px 15px rgba(0,0,0,0.03)'
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '22px',
                      fontWeight: '900',
                      color: '#133522',
                      letterSpacing: '-0.3px'
                    }}
                  >
                    60+ Languages
                  </h3>
                  {hoveredCard === 'languages' && (
                    <span className="text-[10px] font-bold font-mono px-3 py-1 bg-[#133522] text-[#bbf246] rounded-full animate-fade-in">
                      🌐 Multi-Region
                    </span>
                  )}
                </div>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '13px',
                    color: '#1b3f2a',
                    lineHeight: '1.5',
                    maxWidth: '300px',
                    fontWeight: '500'
                  }}
                >
                  We support communication in over 60 languages, making it easier for people around
                </p>
              </div>

              {/* Dual Overlapping Mobile Phones */}
              <div
                className="relative w-full flex justify-center items-end select-none"
                style={{ height: '175px', marginTop: '16px' }}
              >
                {/* Left Phone */}
                <div
                  className={`absolute bg-white rounded-t-3xl border-2 border-slate-800 shadow-xl overflow-hidden transition-transform duration-300 ${hoveredCard === 'languages' ? 'translate-y-[-6px] rotate-[-14deg]' : ''}`}
                  style={{
                    width: '150px',
                    height: '195px',
                    left: '12%',
                    bottom: '-24px',
                    transform: hoveredCard === 'languages' ? 'rotate(-14deg) translateY(-6px)' : 'rotate(-12deg)',
                    zIndex: 1
                  }}
                >
                  <div className="w-10 h-2 bg-slate-900 rounded-full mx-auto mt-1.5 mb-2" />
                  <div className="px-3">
                    <div className="flex justify-between items-center text-[8px] font-bold text-slate-700 mb-1">
                      <span>Statistic</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    <div className="h-10 w-full bg-slate-100 rounded-lg p-1.5 flex items-end justify-between">
                      <div className="w-2 h-4 bg-emerald-300 rounded-t-xs" />
                      <div className="w-2 h-6 bg-emerald-400 rounded-t-xs" />
                      <div className="w-2 h-8 bg-emerald-500 rounded-t-xs" />
                      <div className="w-2 h-5 bg-emerald-400 rounded-t-xs" />
                    </div>
                  </div>
                </div>

                {/* Right Phone */}
                <div
                  className={`absolute bg-white rounded-t-3xl border-2 border-slate-900 shadow-2xl overflow-hidden transition-transform duration-300 ${hoveredCard === 'languages' ? 'translate-y-[-10px] rotate-[2deg]' : ''}`}
                  style={{
                    width: '160px',
                    height: '195px',
                    right: '12%',
                    bottom: '-20px',
                    transform: hoveredCard === 'languages' ? 'rotate(2deg) translateY(-10px)' : 'rotate(4deg)',
                    zIndex: 2
                  }}
                >
                  <div className="w-12 h-2.5 bg-slate-900 rounded-full mx-auto mt-1.5 mb-2" />

                  <div className="px-3.5 text-center">
                    <div className="flex justify-between items-center mb-1">
                      <div className="w-3.5 h-3.5 rounded-full bg-slate-200 overflow-hidden text-[6px] flex items-center justify-center">👤</div>
                      <span className="text-[7px]">🔔</span>
                    </div>

                    <div className="text-[7px] text-slate-500 font-medium">Total Balance</div>
                    <div className="text-[11px] font-black text-slate-900 font-mono tracking-tight mb-2">
                      $41,671.59
                    </div>

                    <div className="flex gap-1 justify-center">
                      <div className="bg-slate-100 text-slate-900 text-[6.5px] font-bold px-2 py-0.5 rounded-full">
                        Send
                      </div>
                      <div className="bg-[#bbf246] text-slate-950 text-[6.5px] font-bold px-2 py-0.5 rounded-full">
                        Request
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Management */}
            <div
              onMouseEnter={() => setHoveredCard('management')}
              className={`group flex flex-col justify-between overflow-hidden relative transition-all duration-300 cursor-pointer ${hoveredCard === 'management' ? '-translate-y-2' : 'hover:-translate-y-1'}`}
              style={{
                backgroundColor: hoveredCard === 'management' ? '#bbf246' : '#f8fafc',
                borderRadius: '32px',
                padding: '36px 28px 0px 28px',
                minHeight: '350px',
                border: hoveredCard === 'management' ? '1px solid rgba(180, 230, 40, 0.9)' : '1px solid #f1f5f9',
                boxShadow: hoveredCard === 'management' ? '0 20px 40px -10px rgba(187, 242, 70, 0.4)' : '0 2px 10px rgba(0,0,0,0.02)'
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div style={{ width: '48px', height: '48px', borderRadius: '16px', backgroundColor: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }} className="transition-transform group-hover:scale-110">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#133522" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="2" /><path d="M12 9v1m0 6v1m4-4h-1m-6 0H8" /></svg>
                  </div>
                  {hoveredCard === 'management' && (
                    <span className="text-[10px] font-bold font-mono px-3 py-1 bg-[#133522] text-[#bbf246] rounded-full animate-fade-in">⚡ Sub-ms Sync</span>
                  )}
                </div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: '800', color: '#133522', letterSpacing: '-0.3px', marginBottom: '10px' }}>Management</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: hoveredCard === 'management' ? '#1b3f2a' : '#64748b', lineHeight: '1.5', fontWeight: hoveredCard === 'management' ? '500' : '400' }}>
                  Easily manage all your resources and maintain control with real-time analytics.
                </p>
              </div>
              <div className="relative w-full flex justify-center items-end select-none" style={{ height: '160px', marginTop: '16px' }}>
                <div className={`absolute bg-white rounded-t-3xl border-2 border-slate-200 shadow-xl overflow-hidden transition-transform duration-300`} style={{ width: '160px', height: '180px', bottom: '-20px', left: '50%', transform: hoveredCard === 'management' ? 'translate(-50%, -10px)' : 'translate(-50%, 10px)' }}>
                  <div className="w-12 h-2.5 bg-slate-900 rounded-full mx-auto mt-1.5 mb-2" />
                  <div className="px-3">
                    <div className="bg-slate-50 rounded-xl p-2 mb-2 border border-slate-100 shadow-sm">
                      <div className="w-full h-1.5 bg-indigo-500 rounded-full mb-1" style={{ width: '70%' }}></div>
                      <div className="w-full h-1.5 bg-slate-200 rounded-full"></div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-2 mb-2 border border-slate-100 shadow-sm">
                      <div className="w-full h-1.5 bg-emerald-500 rounded-full mb-1" style={{ width: '45%' }}></div>
                      <div className="w-full h-1.5 bg-slate-200 rounded-full"></div>
                    </div>
                    <div className="flex gap-1.5 mt-2">
                      <div className="flex-1 bg-slate-50 h-10 rounded-xl border border-slate-100 shadow-sm"></div>
                      <div className="flex-1 bg-slate-50 h-10 rounded-xl border border-slate-100 shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Spacer */}
          <div style={{ height: '80px' }}></div>

          {/* Bottom Row: 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">

            {/* Card 4: Accept Payments */}
            <div
              onMouseEnter={() => setHoveredCard('payments')}
              className={`group flex flex-col justify-between overflow-hidden relative transition-all duration-300 cursor-pointer ${hoveredCard === 'payments' ? '-translate-y-2' : 'hover:-translate-y-1'}`}
              style={{
                backgroundColor: hoveredCard === 'payments' ? '#bbf246' : '#f8fafc',
                borderRadius: '32px',
                padding: '36px 28px 0px 28px',
                minHeight: '350px',
                border: hoveredCard === 'payments' ? '1px solid rgba(180, 230, 40, 0.9)' : '1px solid #f1f5f9',
                boxShadow: hoveredCard === 'payments' ? '0 20px 40px -10px rgba(187, 242, 70, 0.4)' : '0 2px 10px rgba(0,0,0,0.02)'
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div style={{ width: '48px', height: '48px', borderRadius: '16px', backgroundColor: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }} className="transition-transform group-hover:scale-110">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#133522" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="3" /><path d="M2 10h20" /><path d="M6 15h4" /></svg>
                  </div>
                  {hoveredCard === 'payments' && (
                    <span className="text-[10px] font-bold font-mono px-3 py-1 bg-[#133522] text-[#bbf246] rounded-full animate-fade-in">💳 1-Tap 0% Friction</span>
                  )}
                </div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: '800', color: '#133522', letterSpacing: '-0.3px', marginBottom: '10px' }}>Accept Payments</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: hoveredCard === 'payments' ? '#1b3f2a' : '#64748b', lineHeight: '1.5', fontWeight: hoveredCard === 'payments' ? '500' : '400' }}>
                  Easily accept secure online and offline payments with flexible options tailored to your business.
                </p>
              </div>
              <div className="relative w-full flex justify-center items-end select-none" style={{ height: '160px', marginTop: '16px' }}>
                <div className={`absolute bg-white rounded-t-3xl border-2 border-slate-200 shadow-xl overflow-hidden transition-transform duration-300`} style={{ width: '160px', height: '180px', bottom: '-20px', left: '50%', transform: hoveredCard === 'payments' ? 'translate(-50%, -10px)' : 'translate(-50%, 10px)' }}>
                  <div className="w-12 h-2.5 bg-slate-900 rounded-full mx-auto mt-1.5 mb-2" />
                  <div className="px-3">
                    <div className="w-full h-16 bg-gradient-to-tr from-sky-500 to-indigo-500 rounded-xl p-2 mb-2 text-white shadow-sm flex flex-col justify-between">
                      <div className="text-[6px] font-bold opacity-80 uppercase tracking-wider">Credit Card</div>
                      <div className="text-[10px] font-mono tracking-widest">**** **** 4242</div>
                    </div>
                    <div className="bg-slate-900 text-white text-[8px] font-bold text-center py-2 rounded-xl mt-2 cursor-pointer shadow-md">Pay $99.00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5: Data Protection */}
            <div
              onMouseEnter={() => setHoveredCard('protection')}
              className={`group flex flex-col justify-between overflow-hidden relative transition-all duration-300 cursor-pointer ${hoveredCard === 'protection' ? '-translate-y-2' : 'hover:-translate-y-1'}`}
              style={{
                backgroundColor: hoveredCard === 'protection' ? '#bbf246' : '#f8fafc',
                borderRadius: '32px',
                padding: '36px 28px 0px 28px',
                minHeight: '350px',
                border: hoveredCard === 'protection' ? '1px solid rgba(180, 230, 40, 0.9)' : '1px solid #f1f5f9',
                boxShadow: hoveredCard === 'protection' ? '0 20px 40px -10px rgba(187, 242, 70, 0.4)' : '0 2px 10px rgba(0,0,0,0.02)'
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div style={{ width: '48px', height: '48px', borderRadius: '16px', backgroundColor: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }} className="transition-transform group-hover:scale-110">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#133522" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /><circle cx="12" cy="10" r="2.5" /></svg>
                  </div>
                  {hoveredCard === 'protection' && (
                    <span className="text-[10px] font-bold font-mono px-3 py-1 bg-[#133522] text-[#bbf246] rounded-full animate-fade-in">🛡️ Biometric Enclave</span>
                  )}
                </div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: '800', color: '#133522', letterSpacing: '-0.3px', marginBottom: '10px' }}>Data Protection</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: hoveredCard === 'protection' ? '#1b3f2a' : '#64748b', lineHeight: '1.5', fontWeight: hoveredCard === 'protection' ? '500' : '400' }}>
                  Data protection ensures that sensitive information is kept secure, private, and used responsibly.
                </p>
              </div>
              <div className="relative w-full flex justify-center items-end select-none" style={{ height: '160px', marginTop: '16px' }}>
                <div className={`absolute bg-[#0f172a] rounded-t-3xl border-2 border-slate-700 shadow-xl overflow-hidden transition-transform duration-300`} style={{ width: '160px', height: '180px', bottom: '-20px', left: '50%', transform: hoveredCard === 'protection' ? 'translate(-50%, -10px)' : 'translate(-50%, 10px)' }}>
                  <div className="w-12 h-2.5 bg-black rounded-full mx-auto mt-1.5 mb-2" />
                  <div className="px-3 flex flex-col gap-2 mt-2">
                    <div className="bg-slate-800/80 rounded-xl p-2.5 flex items-center justify-between border border-slate-700 shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-emerald-500/20 rounded-md flex items-center justify-center text-[11px]">🔒</div>
                        <div className="w-12 h-1.5 bg-slate-600 rounded"></div>
                      </div>
                      <div className="w-4 h-4 rounded-full border border-emerald-500 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-emerald-500"></div></div>
                    </div>
                    <div className="bg-slate-800/80 rounded-xl p-2.5 flex items-center justify-between border border-slate-700 shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-blue-500/20 rounded-md flex items-center justify-center text-[11px]">🔑</div>
                        <div className="w-12 h-1.5 bg-slate-600 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 5. LAYERED MOBILE STACK ARCHITECTURE ── */}
      <section
        className="relative w-full pt-16 pb-24 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 px-4 sm:px-6 lg:px-8 border-b border-slate-200"
        style={{ backgroundColor: '#f8fafc' }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: Floating UI Cards */}
          <div className="relative flex justify-center items-center order-2 lg:order-1 w-full mx-auto lg:max-w-none" style={{ minHeight: '480px', maxWidth: '450px' }}>
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-violet-200 to-pink-100 rounded-full opacity-50 -z-10" style={{ width: '320px', height: '320px', filter: 'blur(50px)' }}></div>

            {/* Floating Diamond Icon */}
            <div className="absolute z-30 bg-gradient-to-br from-violet-500 to-purple-600 rounded-[20px] flex items-center justify-center animate-pulse" style={{ width: '64px', height: '64px', top: '8%', left: '12%', animationDuration: '4s', transform: 'rotate(45deg)', boxShadow: '0 15px 30px -5px rgba(139, 92, 246, 0.4)' }}>
              <div className="rounded-full border-4 border-white border-opacity-30 flex items-center justify-center" style={{ width: '32px', height: '32px', transform: 'rotate(-45deg)' }}>
                <div className="bg-white rounded-full" style={{ width: '10px', height: '10px' }}></div>
              </div>
            </div>

            {/* Main Center Card */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white border border-slate-100 w-full" style={{ padding: '28px', borderRadius: '28px', boxShadow: '0 25px 50px -12px rgba(139,92,246,0.15)', maxWidth: '320px' }}>
              <div className="flex justify-between items-center mb-6">
                <div className="font-bold text-slate-800" style={{ fontSize: '15px' }}>Stack Overview</div>
                <div className="text-violet-600 font-semibold bg-violet-50 px-3 py-1 rounded-full" style={{ fontSize: '11px' }}>+ Sync</div>
              </div>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-emerald-100 text-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ width: '22px', height: '22px', fontSize: '11px' }}>✓</div>
                  <div>
                    <div className="font-bold text-slate-800 mb-1" style={{ fontSize: '13px' }}>Local SQLite Cache</div>
                    <div className="text-slate-400" style={{ fontSize: '11px' }}>Offline-first data persistence</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-emerald-100 text-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ width: '22px', height: '22px', fontSize: '11px' }}>✓</div>
                  <div>
                    <div className="font-bold text-slate-800 mb-1" style={{ fontSize: '13px' }}>Biometric Vault</div>
                    <div className="text-slate-400" style={{ fontSize: '11px' }}>Secure enclave encryption</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full border-2 border-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ width: '22px', height: '22px' }}></div>
                  <div>
                    <div className="font-bold text-slate-800 mb-1" style={{ fontSize: '13px' }}>Edge Orchestration</div>
                    <div className="text-slate-400" style={{ fontSize: '11px' }}>AWS CloudFront deployment</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Left Card */}
            <div className="absolute z-30 bg-white bg-opacity-95 backdrop-blur-md shadow-2xl border border-slate-100 flex items-end transform transition-transform hover:-translate-y-1 origin-bottom-left" style={{ padding: '20px 24px', borderRadius: '24px', boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.08), 0 10px 15px -3px rgba(0, 0, 0, 0.04)', bottom: '5%', left: '5%', gap: '6px' }}>
              <div className="bg-slate-200 rounded-t-sm" style={{ width: '10px', height: '28px' }}></div>
              <div className="bg-slate-300 rounded-t-sm" style={{ width: '10px', height: '42px' }}></div>
              <div className="bg-violet-300 rounded-t-sm" style={{ width: '10px', height: '36px' }}></div>
              <div className="bg-violet-500 rounded-t-sm shadow-md" style={{ width: '10px', height: '56px', boxShadow: '0 4px 10px rgba(139, 92, 246, 0.4)' }}></div>
              <div className="bg-slate-200 rounded-t-sm" style={{ width: '10px', height: '20px' }}></div>
              <div className="bg-slate-200 rounded-t-sm" style={{ width: '10px', height: '32px' }}></div>
            </div>

            {/* Bottom Right Card */}
            <div className="absolute z-30 bg-white shadow-2xl border border-slate-100 flex items-center transform transition-transform hover:-translate-y-1 origin-bottom-right" style={{ padding: '12px 16px', borderRadius: '100px', boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.08), 0 10px 15px -3px rgba(0, 0, 0, 0.04)', bottom: '10%', right: '8%' }}>
              <div className="flex items-center">
                <div className="rounded-full bg-blue-100 border-2 border-white relative z-0" style={{ width: '40px', height: '40px' }}></div>
                <div className="rounded-full bg-rose-100 border-2 border-white relative z-10" style={{ width: '40px', height: '40px', marginLeft: '-14px' }}></div>
                <div className="rounded-full bg-emerald-100 border-2 border-white relative z-20" style={{ width: '40px', height: '40px', marginLeft: '-14px' }}></div>
                <div className="rounded-full bg-violet-100 border-2 border-white text-violet-600 flex items-center justify-center relative z-30" style={{ width: '40px', height: '40px', marginLeft: '-14px', fontSize: '11px', fontWeight: '800' }}>+2</div>
              </div>
            </div>
          </div>

          {/* Right: Layers Grid */}
          <div className="relative z-10 pl-0 lg:pl-10 order-1 lg:order-2">
            <div className="mb-14">
              <h2 className="font-extrabold text-slate-900 leading-[1.2] mb-4" style={{ fontSize: 'clamp(30px, 4vw, 40px)', letterSpacing: '-1px' }}>
                How We Layer <br className="hidden md:block" /> Your Mobile Stack
              </h2>
              <p className="text-slate-500 leading-relaxed max-w-md" style={{ fontSize: '15px' }}>
                A high-performance layered pipeline from GPU-accelerated interface to local SQLite cache and cloud edge orchestration.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
              {archLayers.map((layer, i) => (
                <div key={i} className="flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="font-extrabold text-slate-900" style={{ fontSize: '32px' }}>{layer.num}</div>
                    <div className="font-bold text-slate-400 uppercase bg-slate-50 px-2 py-1 rounded" style={{ fontSize: '9px', letterSpacing: '1px' }}>{layer.tag}</div>
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2" style={{ fontSize: '15px' }}>{layer.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium" style={{ fontSize: '13px' }}>{layer.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PERFORMANCE & DEVICE SLA BENCHMARK ── */}
      <section
        className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-slate-200"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6">
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#7c3aed',
                  backgroundColor: '#f5f3ff',
                  border: '1px solid #ede9fe',
                  padding: '6px 12px',
                  borderRadius: '9999px',
                  marginBottom: '16px'
                }}
              >
                Zero-Latency Guarantee
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-4">
                Engineered for 99.9%<br /> Crash-Free Production SLA
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
                We design mobile applications that pass Apple App Store and Google Play checklists instantly, eliminate cold-start lag, and maintain 120 FPS fluid motion under heavy production loads.
              </p>

              {/* White Gauge Card */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '32px',
                  padding: '32px',
                  border: '1px solid #f1f5f9',
                  boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-violet-100 rounded-full blur-[60px] opacity-60 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="flex justify-between items-center mb-8 relative z-10">
                  <div>
                    <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Live Telemetry</div>
                    <div className="text-slate-800 text-lg font-extrabold">Hermes Engine FPS</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center text-violet-600 animate-pulse shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  </div>
                </div>

                {/* SVG Gauge */}
                <div className="relative flex justify-center mt-6 mb-4 z-10">
                  <svg className="w-full max-w-[240px] h-auto" viewBox="0 0 200 115">
                    <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#f1f5f9" strokeWidth="16" strokeLinecap="round" />
                    <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="url(#violetGradient)" strokeWidth="16" strokeLinecap="round" strokeDasharray="251" strokeDashoffset="25" style={{ filter: 'drop-shadow(0px 0px 8px rgba(139,92,246,0.4))' }} />
                    <defs>
                      <linearGradient id="violetGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#c4b5fd" />
                        <stop offset="100%" stopColor="#7c3aed" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center pb-2">
                    <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter leading-none">118<span className="text-lg text-slate-400 font-bold ml-1">fps</span></div>
                    <div className="text-[10px] text-violet-600 font-bold uppercase tracking-widest mt-2 bg-violet-50 px-3 py-1 rounded-full inline-block border border-violet-100">Optimal</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Metrics */}
            <div className="lg:col-span-6 space-y-5">
              {[
                { label: "UI Rendering Smoothness", value: "60 / 120 FPS", width: "98%", icon: "⚡" },
                { label: "App Cold Start Time", value: "< 0.85s", width: "92%", icon: "⏱️" },
                { label: "Local SQLite Query Latency", value: "12ms", width: "95%", icon: "💾" },
                { label: "Memory Heap Savings", value: "-40%", width: "88%", icon: "🧠" }
              ].map((metric, idx) => (
                <div
                  key={idx}
                  className="group hover:-translate-y-1 transition-transform duration-300"
                  style={{
                    padding: '24px',
                    borderRadius: '24px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #f1f5f9',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px'
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform flex-shrink-0">
                    {metric.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <span className="text-sm font-bold text-slate-800">{metric.label}</span>
                      <span className="text-sm font-black text-slate-900">{metric.value}</span>
                    </div>
                    {/* Progress Bar Track */}
                    <div style={{ width: '100%', height: '6px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                      {/* Violet Gradient Progress */}
                      <div
                        className="bg-gradient-to-r from-violet-400 to-purple-600 relative"
                        style={{ width: metric.width, height: '100%', borderRadius: '4px' }}
                      >
                        <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white opacity-30"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. DELIVERY LIFECYCLE ── */}
      <section
        className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-slate-200"
        style={{ backgroundColor: '#f8fafc' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 lg:mb-18">
            <span
              style={{
                display: 'inline-block',
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#7c3aed',
                backgroundColor: '#f5f3ff',
                border: '1px solid #ede9fe',
                padding: '6px 12px',
                borderRadius: '9999px',
                marginBottom: '16px'
              }}
            >
              Delivery Lifecycle
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-4 max-w-2xl mx-auto">
              4-Stage Mobile App Development Process
            </h2>

            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              From interactive Figma wireframes to TestFlight beta testing and fast-track App Store approvals, our pods deliver production-grade mobile builds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverySteps.map((step, i) => (
              <div
                key={i}
                className="group flex flex-col justify-between transition-all duration-300 hover:-translate-y-2"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '32px',
                  padding: '32px 28px',
                  border: '1px solid #f1f5f9',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
                }}
              >
                <div>
                  <div className="flex justify-between items-center mb-8 relative">
                    <div className="absolute inset-0 bg-violet-100 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm relative z-10 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: '#f5f3ff', color: '#7c3aed', border: '1px solid #ede9fe' }}
                    >
                      {step.icon}
                    </div>
                    <span className="font-mono text-[10px] font-extrabold px-3 py-1 text-slate-500 uppercase tracking-widest relative z-10">{step.tag}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-violet-700 transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ── */}
      <section
        id="faq"
        className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-slate-200"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/* Left Column */}
            <div className="lg:col-span-5">
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#7c3aed',
                  backgroundColor: '#f5f3ff',
                  border: '1px solid #ede9fe',
                  padding: '6px 12px',
                  borderRadius: '9999px',
                  marginBottom: '16px'
                }}
              >
                Got Questions?
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-4">
                Frequently Asked<br />Questions
              </h2>

              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-10 max-w-sm">
                Choose from our flexible plans tailored for businesses of all sizes. Find the right fit and get started today!
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-violet-600 hover:bg-violet-700 text-white font-bold px-7 py-3.5 rounded-full text-sm transition-transform active:scale-95 shadow-md shadow-violet-200"
              >
                <span>Book a Demo</span>
                <span className="w-7 h-7 rounded-full bg-white text-violet-600 flex items-center justify-center text-xs font-bold transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7 space-y-3.5">
              {[
                {
                  q: "What services do you offer?",
                  a: "We offer end-to-end mobile engineering services including native iOS (Swift/SwiftUI), native Android (Kotlin/Jetpack Compose), cross-platform development (React Native & Flutter), offline sync database engines, and biometric security integration."
                },
                {
                  q: "Do you offer support after project completion?",
                  a: "Yes! We provide ongoing post-launch maintenance, OS update compatibility (iOS 18 / Android 15), crash telemetry monitoring, store optimization, and dedicated 24/7 SLA engineering support."
                },
                {
                  q: "How long does a typical project take?",
                  a: "A typical MVP mobile application build takes 6 to 8 weeks from initial architecture blueprinting to live publishing on the Apple App Store and Google Play Store."
                },
                {
                  q: "Can you work with startups and small businesses?",
                  a: "Absolutely. We specialize in working with both ambitious venture-backed startups and established enterprise businesses, customizing flexible engagement models to fit your timeline and budget."
                },
                {
                  q: "How do you price your services?",
                  a: "We offer fixed-scope project milestones for well-defined builds, as well as flexible dedicated team retainers for continuous agile development."
                }
              ].concat(faqs.slice(3).map(f => ({ q: f.q, a: f.a }))).map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className={`p-5 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${isOpen
                      ? 'bg-violet-50/50 border-violet-100 shadow-sm'
                      : 'bg-slate-50 border-transparent hover:bg-slate-100'
                      }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className={`text-[15.5px] font-bold leading-[1.4] transition-colors ${isOpen ? 'text-violet-900' : 'text-slate-800'}`}>
                        {item.q}
                      </h3>

                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-violet-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                        {isOpen ? (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        ) : (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        )}
                      </div>
                    </div>

                    {isOpen && (
                      <div className="mt-4 pt-4 border-t border-violet-100 text-slate-600 text-sm leading-relaxed animate-fade-in">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}