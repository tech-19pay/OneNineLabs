"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import BlockchainHero from "@/components/BlockchainHero";

export default function BlockchainPageContent() {
  const [activeModel, setActiveModel] = useState("cex");
  const [activePair, setActivePair] = useState("BTC/USDT");
  const [activeCodeTab, setActiveCodeTab] = useState("account-abstraction");
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeChainFilter, setActiveChainFilter] = useState("all");

  const exchangeModels = {
    cex: {
      tag: "CENTRALIZED ARCHITECTURE",
      title: "Spot & Margin Centralized Exchange (CEX)",
      desc: "Institutional-grade centralized crypto exchange powered by an in-memory matching engine capable of executing over 1,000,000 orders per second with sub-millisecond execution latency.",
      highlights: [
        "In-Memory Order Matching Engine (<0.8ms execution latency)",
        "MPC Multi-Sig Cold & Warm Wallet Custody Architecture",
        "Automated KYC/AML Onboarding & Travel Rule Compliance",
        "Fiat On/Off Ramp Integrations (Credit Card, SEPA, SWIFT)",
        "TradingView Pro Charts with 100+ Technical Indicators",
        "High-Frequency REST, WebSocket & FIX Protocol APIs"
      ],
      badge: "1M+ Orders / Sec",
      latency: "<0.8ms",
      security: "MPC Multi-Sig Custody",
      tps: "1,200,000 TPS"
    },
    dex: {
      tag: "DECENTRALIZED PROTOCOL",
      title: "Automated Market Maker (AMM) & Orderbook DEX",
      desc: "Non-custodial decentralized exchange infrastructure supporting concentrated liquidity pools (v3/v4 models), hybrid on-chain order books, and multi-chain atomic swaps with zero custody risk.",
      highlights: [
        "Concentrated Liquidity & Dynamic Fee Tiers (Uniswap v3/v4 style)",
        "Hybrid Central Limit Order Book (CLOB) on L2 Rollups & SVM",
        "Multi-Chain Bridge & Atomic Swaps (LayerZero v2 & Chainlink CCIP)",
        "Gasless Meta-Transactions & Account Abstraction (ERC-4337)",
        "Flash-Loan Protected Liquidity Vaults & Yield Staking",
        "Custom Token Launchpad & Initial DEX Offering (IDO) Modules"
      ],
      badge: "Non-Custodial",
      latency: "<400ms (L2)",
      security: "Audited Smart Contracts",
      tps: "65,000+ TPS (L2/SVM)"
    },
    perps: {
      tag: "DERIVATIVES & FUTURES",
      title: "Perpetual Futures & Derivatives Exchange",
      desc: "High-leverage crypto perpetuals platform featuring cross & isolated margin systems, real-time index oracle price feeds, and automated liquidation engines with zero balance protection.",
      highlights: [
        "Up to 100x Leverage on Cross & Isolated Margin Accounts",
        "Sub-Second Dynamic Funding Rate & Mark Price Calculations",
        "Automated Liquidation Engine & Insurance Fund Protection",
        "Decentralized Oracle Aggregation (Pyth Network & Chainlink)",
        "Advanced Order Types: Stop-Loss, Take-Profit, Trailing & OCO",
        "Multi-Asset Collateralization (USDC, USDT, BTC, ETH, SOL)"
      ],
      badge: "100x Leverage",
      latency: "<1.2ms",
      security: "Insurance Fund & Risk Engine",
      tps: "850,000 TPS"
    },
    p2p: {
      tag: "ESCROW MARKETPLACE",
      title: "P2P Crypto Exchange & Escrow Platform",
      desc: "Global peer-to-peer cryptocurrency marketplace equipped with automated smart contract escrows, 300+ local payment method integrations, and an automated multi-sign arbitration dispute resolution portal.",
      highlights: [
        "Time-Locked Smart Contract Escrow System with Auto-Release",
        "300+ Global & Local Fiat Payment Methods Supported",
        "End-to-End Encrypted Real-Time Chat with Proof-of-Payment Uploads",
        "Trader Reputation Scoring, KYC Verification & VIP Badges",
        "Automated Dispute Resolution & Admin Multi-Sign Arbitration",
        "Custom Fee Schedules for Makers & Takers"
      ],
      badge: "Zero-Risk Escrow",
      latency: "Instant Escrow Lock",
      security: "Smart Contract Locked",
      tps: "Global Coverage"
    }
  };

  const currentModel = exchangeModels[activeModel];

  const orderbookData = {
    "BTC/USDT": {
      price: "96,480.50",
      change: "+3.42%",
      high: "97,820.00",
      low: "94,150.00",
      volume: "$482.6M",
      asks: [
        { price: "96,492.00", amount: "1.428", total: "137.8k" },
        { price: "96,488.50", amount: "0.850", total: "82.0k" },
        { price: "96,485.00", amount: "2.120", total: "204.5k" },
        { price: "96,482.00", amount: "0.450", total: "43.4k" }
      ],
      bids: [
        { price: "96,478.00", amount: "1.890", total: "182.3k" },
        { price: "96,475.50", amount: "3.240", total: "312.5k" },
        { price: "96,472.00", amount: "0.950", total: "91.6k" },
        { price: "96,469.00", amount: "2.410", total: "232.5k" }
      ]
    },
    "ETH/USDT": {
      price: "2,784.20",
      change: "+4.18%",
      high: "2,840.00",
      low: "2,690.00",
      volume: "$264.1M",
      asks: [
        { price: "2,786.50", amount: "14.20", total: "39.5k" },
        { price: "2,785.80", amount: "8.50", total: "23.6k" },
        { price: "2,785.00", amount: "22.40", total: "62.3k" },
        { price: "2,784.50", amount: "11.10", total: "30.9k" }
      ],
      bids: [
        { price: "2,783.90", amount: "18.30", total: "50.9k" },
        { price: "2,783.00", amount: "35.20", total: "97.9k" },
        { price: "2,782.20", amount: "12.60", total: "35.0k" },
        { price: "2,781.50", amount: "40.00", total: "111.2k" }
      ]
    },
    "SOL/USDT": {
      price: "188.45",
      change: "+7.85%",
      high: "194.20",
      low: "176.50",
      volume: "$195.8M",
      asks: [
        { price: "188.70", amount: "145.0", total: "27.3k" },
        { price: "188.60", amount: "88.2", total: "16.6k" },
        { price: "188.55", amount: "210.5", total: "39.6k" },
        { price: "188.50", amount: "95.0", total: "17.9k" }
      ],
      bids: [
        { price: "188.40", amount: "180.0", total: "33.9k" },
        { price: "188.30", amount: "340.5", total: "64.1k" },
        { price: "188.20", amount: "120.0", total: "22.5k" },
        { price: "188.10", amount: "450.0", total: "84.6k" }
      ]
    }
  };

  const currentBook = orderbookData[activePair] || orderbookData["BTC/USDT"];

  const web3Capabilities = [
    {
      title: "Ultra-Fast CEX & Hybrid DEX Matching",
      desc: "Built with Rust and C++ utilizing lock-free ring buffers (LMAX architecture) handling 1,000,000+ orders per second with sub-millisecond execution.",
      badge: "1M+ Orders / Sec",
      icon: "⚡",
      bgGradient: "linear-gradient(135deg, #0d9488 0%, #06b6d4 100%)",
      lightBg: "#f0fdfa",
      borderCol: "#99f6e4",
      highlights: ["Sub-millisecond LMAX ring buffer", "Fix 4.4 & WebSocket low-latency feeds", "Self-trade prevention & market maker bots"]
    },
    {
      title: "Foundry-Audited Smart Contracts & DeFi",
      desc: "Mathematical formal verification and property-based fuzzing in Foundry. AMM v3/v4 concentrated liquidity, flash-loan protection, and ERC-4626 vaults.",
      badge: "Zero Exploits",
      icon: "🛡️",
      bgGradient: "linear-gradient(135deg, #2563eb 0%, #38bdf8 100%)",
      lightBg: "#eff6ff",
      borderCol: "#bfdbfe",
      highlights: ["Invariant fuzz testing suites", "ERC-4626 standardized yield vaults", "Slither & Echidna automated CI audit gates"]
    },
    {
      title: "Institutional MPC Multi-Sig & Smart Wallets",
      desc: "Enterprise threshold cryptography (TSS) cold/warm custody architecture. Native ERC-4337 Account Abstraction with gasless sponsored transactions and social recovery.",
      badge: "MPC Custody",
      icon: "🔒",
      bgGradient: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
      lightBg: "#faf5ff",
      borderCol: "#e9d5ff",
      highlights: ["Turnkey & Fireblocks MPC integration", "Passkey / WebAuthn biometric wallets", "Automated whitelisting & velocity limits"]
    },
    {
      title: "Real-World Asset (RWA) & Tokenization",
      desc: "Institutional tokenization frameworks supporting ERC-3643 and ERC-1400 permissioned tokens, automated cap tables, on-chain compliance, and yield tranches.",
      badge: "RWA Compliance",
      icon: "🏛️",
      bgGradient: "linear-gradient(135deg, #d97706 0%, #fbbf24 100%)",
      lightBg: "#fffbeb",
      borderCol: "#fde68a",
      highlights: ["ERC-3643 identity verification (ONCHAINID)", "Automated dividend & coupon distributions", "Multi-jurisdiction investor accreditation"]
    },
    {
      title: "Cross-Chain Bridges & Oracle Architecture",
      desc: "Decentralized liquidity bridges powered by Chainlink CCIP and LayerZero v2. Sub-second price feeds with Pyth Network and automated rebalancing.",
      badge: "CCIP & LayerZero",
      icon: "🌐",
      bgGradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
      lightBg: "#ecfdf5",
      borderCol: "#a7f3d0",
      highlights: ["LayerZero v2 omnichain token standard", "Pyth sub-second low-latency price feeds", "Atomic slippage-free cross-chain swaps"]
    },
    {
      title: "Formal Verification & Smart Contract Audits",
      desc: "End-to-end security audits applying mathematical formal verification, symbolic execution, and human manual review adhering to CertiK & OpenZeppelin benchmarks.",
      badge: "CertiK Standard",
      icon: "🔍",
      bgGradient: "linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)",
      lightBg: "#fff1f2",
      borderCol: "#fecdd3",
      highlights: ["Symbolic execution & AST static checks", "Economic attack & flash-loan simulation", "Comprehensive executive remediation reports"]
    }
  ];

  const codeSnippets = {
    "account-abstraction": {
      title: "AccountAbstractionPaymaster.sol",
      lang: "Solidity 0.8.24",
      network: "Ethereum / Arbitrum / Base",
      badge: "ERC-4337 Verified",
      gas: "21,450 Gas",
      code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@account-abstraction/contracts/core/BasePaymaster.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

/**
 * @title OneNineLabs Enterprise Gasless Paymaster
 * @notice Sponsors gas fees for verified enterprise dApp transactions
 */
contract OneNineGaslessPaymaster is BasePaymaster {
    using ECDSA for bytes32;

    address public immutable validatingSigner;
    mapping(address => uint256) public userSponsoredQuota;

    event GasSponsored(address indexed sender, uint256 actualGasCost);

    constructor(IEntryPoint _entryPoint, address _signer) 
        BasePaymaster(_entryPoint) {
        validatingSigner = _signer;
    }

    function _validatePaymasterUserOp(
        PackedUserOperation calldata userOp,
        bytes32 userOpHash,
        uint256 maxCost
    ) internal override returns (bytes memory context, uint256 validationData) {
        // Enforce cryptographic signature from OneNine validator
        bytes32 hash = userOpHash.toEthSignedMessageHash();
        require(hash.recover(userOp.paymasterAndData[20:85]) == validatingSigner, "Invalid Paymaster Sig");
        return (abi.encode(userOp.sender, maxCost), 0);
    }
}`
    },
    "yield-vault": {
      title: "AutomatedYieldVault.sol",
      lang: "Solidity 0.8.24",
      network: "EVM Standard ERC-4626",
      badge: "Audited & Fuzzed",
      gas: "48,200 Gas",
      code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC4626.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

/**
 * @title OneNineLabs Auto-Compounding DeFi Vault
 * @notice Standardized ERC-4626 vault with automated flash-loan defense
 */
contract OneNineYieldVault is ERC4626, ReentrancyGuard {
    uint256 public constant MAX_SLIPPAGE = 50; // 0.5% max slippage
    address public immutable strategyAdapter;

    constructor(IERC20 _asset, address _strategy) 
        ERC20("OneNine Vault Share", "onVAULT") 
        ERC4626(_asset) {
        strategyAdapter = _strategy;
    }

    function totalAssets() public view override returns (uint256) {
        return IERC20(asset()).balanceOf(address(this)) + IStrategy(strategyAdapter).stakedBalance();
    }

    function harvestAndCompound() external nonReentrant returns (uint256 yieldHarvested) {
        yieldHarvested = IStrategy(strategyAdapter).harvest();
        emit Compounded(yieldHarvested, block.timestamp);
    }
}`
    },
    "solana-program": {
      title: "lib.rs (Solana Anchor SVM)",
      lang: "Rust 1.78 / Anchor 0.30",
      network: "Solana Mainnet-Beta",
      badge: "Zero-Copy SVM",
      gas: "< 0.00005 SOL",
      code: `use anchor_lang::prelude::*;
use anchor_spl::token::{self, Mint, Token, TokenAccount, Transfer};

declare_id!("OneNineLabsEscrowProgram11111111111111111111");

#[program]
pub mod onenine_dex_vault {
    use super::*;

    pub fn initialize_vault(ctx: Context<InitializeVault>, target_amount: u64) -> Result<()> {
        let vault = &mut ctx.accounts.vault;
        vault.initializer = *ctx.accounts.initializer.key;
        vault.target_amount = target_amount;
        vault.bump = ctx.bumps.vault;
        Ok(())
    }

    pub fn deposit_liquidity(ctx: Context<DepositLiquidity>, amount: u64) -> Result<()> {
        let cpi_accounts = Transfer {
            from: ctx.accounts.user_token.to_account_info(),
            to: ctx.accounts.vault_token.to_account_info(),
            authority: ctx.accounts.user.to_account_info(),
        };
        token::transfer(
            CpiContext::new(ctx.accounts.token_program.to_account_info(), cpi_accounts),
            amount,
        )?;
        Ok(())
    }
}`
    },
    "foundry-invariant": {
      title: "InvariantProtocolTest.t.sol",
      lang: "Foundry Fuzzing Suite",
      network: "Property-Based Fuzzing",
      badge: "1,000,000+ Runs Passed",
      gas: "Local Foundry VM",
      code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../src/ExchangeEngine.sol";

/**
 * @title Formal Invariant Test Suite
 * @notice Asserts that contract solvency and user balances are invariant under all permutations
 */
contract InvariantExchangeTest is Test {
    ExchangeEngine internal engine;

    function setUp() public {
        engine = new ExchangeEngine();
        targetContract(address(engine));
    }

    /// @notice Invariant: Total token liabilities must always equal contract physical reserve
    function invariant_solvencyMustHoldAlways() public view {
        uint256 totalUserBalances = engine.totalCustomerLiabilities();
        uint256 actualVaultReserve = address(engine).balance;
        assertGe(actualVaultReserve, totalUserBalances, "CRITICAL: Solvency broken!");
    }
}`
    }
  };

  const activeSnippet = codeSnippets[activeCodeTab];

  const handleCopyCode = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(activeSnippet.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const chainMatrix = [
    {
      name: "Ethereum",
      category: "EVM",
      badge: "L1 Security Base",
      tps: "15 - 100k (with L2s)",
      latency: "12.0s",
      avgGas: "$1.20 - $8.50",
      tvl: "$48.2B",
      tooling: "Solidity, Foundry, Hardhat, Viem",
      icon: "💎",
      color: "#627eea"
    },
    {
      name: "Solana",
      category: "SVM",
      badge: "Parallel High-Speed",
      tps: "65,000+ TPS",
      latency: "0.4s",
      avgGas: "< $0.0008",
      tvl: "$8.4B",
      tooling: "Rust, Anchor, SeaLevel, Solana CLI",
      icon: "⚡",
      color: "#14f195"
    },
    {
      name: "Arbitrum One",
      category: "Layer 2",
      badge: "Nitro Rollup",
      tps: "40,000+ TPS",
      latency: "0.25s",
      avgGas: "$0.02",
      tvl: "$3.9B",
      tooling: "Nitro WASM, Stylus (Rust), EVM Equivalent",
      icon: "🔵",
      color: "#28a0f0"
    },
    {
      name: "Base",
      category: "Layer 2",
      badge: "OP Stack",
      tps: "35,000+ TPS",
      latency: "2.0s",
      avgGas: "$0.01",
      tvl: "$2.5B",
      tooling: "Optimism Superchain, Account Abstraction",
      icon: "🛡️",
      color: "#0052ff"
    },
    {
      name: "Polygon CDK",
      category: "ZK Rollup",
      badge: "Validium & ZK-EVM",
      tps: "7,000+ TPS",
      latency: "2.1s",
      avgGas: "< $0.01",
      tvl: "$2.1B",
      tooling: "Polygon CDK, Plonky2, AggLayer",
      icon: "🟣",
      color: "#8247e5"
    },
    {
      name: "Avalanche",
      category: "Multi-Chain",
      badge: "Custom Subnets",
      tps: "4,500+ TPS",
      latency: "1.0s",
      avgGas: "$0.05",
      tvl: "$1.8B",
      tooling: "Avalanche CLI, Teleporter, Warp Messaging",
      icon: "🔺",
      color: "#e84142"
    }
  ];

  const filteredChains = activeChainFilter === "all"
    ? chainMatrix
    : chainMatrix.filter(c => c.category.toLowerCase().includes(activeChainFilter.toLowerCase()));

  const deliverySteps = [
    {
      num: "01",
      title: "Protocol Architecture & Tokenomics",
      desc: "We formulate mathematical incentive models, gas-efficient state machines, multi-sig governance structures, and formal threat vector specifications before writing a single line of code.",
      tag: "Design & Modeling",
      icon: "📐"
    },
    {
      num: "02",
      title: "Smart Contract & Protocol Engineering",
      desc: "Our senior blockchain engineers build modular, gas-optimized Solidity and Rust contracts utilizing assembly (Yul), lock-free data structures, and ERC-4337 standards.",
      tag: "Assembly & Rust",
      icon: "⚙️"
    },
    {
      num: "03",
      title: "Mathematical Invariant Fuzzing & Audits",
      desc: "We subject contracts to 1,000,000+ automated Foundry fuzz runs, Slither static analysis, symbolic execution, and CertiK/OpenZeppelin standard manual code reviews.",
      tag: "Zero-Exploit Verification",
      icon: "🛡️"
    },
    {
      num: "04",
      title: "Mainnet Launch, Liquidity & 24/7 Monitoring",
      desc: "We orchestrate multi-sig deployment scripts, automated liquidity seeding, decentralized oracle feeds, and 24/7 real-time mempool & front-running monitoring.",
      tag: "Production Scale",
      icon: "🚀"
    }
  ];

  const faqs = [
    {
      q: "What types of crypto exchanges and DeFi platforms do you build?",
      a: "We engineer Centralized Exchanges (CEX) with ultra-fast in-memory matching engines (1M+ orders/sec), Automated Market Maker (AMM v3/v4) DEXs, Central Limit Order Book (CLOB) DEXs on L2s/SVM, Perpetual Futures Platforms with up to 100x leverage, and P2P escrow marketplaces with 300+ fiat payment rails."
    },
    {
      q: "How do you ensure smart contracts are 100% immune to hacks and exploits?",
      a: "We apply rigorous multi-tier security verification: property-based invariant fuzz testing in Foundry, symbolic execution, Slither AST static checks, formal verification, reentrancy guards, and exhaustive manual penetration testing mimicking flash-loan and oracle manipulation attack vectors."
    },
    {
      q: "Which blockchain networks do you specialize in?",
      a: "We develop natively across EVM networks (Ethereum, Arbitrum, Base, Optimism, Polygon, Avalanche, BNB Chain), Solana SVM (Rust & Anchor), and Bitcoin layer protocols (Ordinals, Runes, and BRC-20). We also build custom App-Chains and Subnets using Polygon CDK and Avalanche Subnets."
    },
    {
      q: "Can you implement gasless transactions and social login wallets?",
      a: "Yes — we integrate ERC-4337 Account Abstraction paymasters, bundlers, and Passkey / WebAuthn biometric infrastructure. Users can sign in using FaceID, Google, or Apple ID, and enjoy sponsored zero-gas transactions without needing to manage complex seed phrases."
    },
    {
      q: "How do you handle fiat on/off ramps and regulatory compliance?",
      a: "We integrate enterprise fiat gateway providers (MoonPay, Banxa, Stripe, direct SEPA/SWIFT wire clearing) combined with automated KYC/AML identity verification (Sumsub, Onfido) and real-time transaction screening compliant with the FATF Travel Rule."
    },
    {
      q: "What is your project handover and code ownership model?",
      a: "You receive 100% exclusive ownership of all codebases, smart contracts, deployment keys, documentation, unit & invariant test suites, Figma design systems, and GitHub repositories upon milestone completion with zero vendor lock-in."
    }
  ];

  return (
    <div className="bc-page-root">
      {/* ── 1. HERO SECTION ── */}
      <BlockchainHero />

      {/* ── 1b. PROTOCOL TELEMETRY BAR ── */}
      <section className="bc-telemetry-bar-wrap">
        <div className="bc-telemetry-container">
          <div className="bc-telemetry-item">
            <span className="bc-telemetry-num">$500M+</span>
            <span className="bc-telemetry-lbl">TVL Protected Under Management</span>
          </div>
          <div className="bc-telemetry-divider" />
          <div className="bc-telemetry-item">
            <span className="bc-telemetry-num" style={{ color: "#0d9488" }}>0 Exploits</span>
            <span className="bc-telemetry-lbl">Flawless Security Track Record</span>
          </div>
          <div className="bc-telemetry-divider" />
          <div className="bc-telemetry-item">
            <span className="bc-telemetry-num">1.2M TPS</span>
            <span className="bc-telemetry-lbl">Peak Matching Engine Throughput</span>
          </div>
          <div className="bc-telemetry-divider" />
          <div className="bc-telemetry-item">
            <span className="bc-telemetry-num" style={{ color: "#2563eb" }}>&lt; 0.8ms</span>
            <span className="bc-telemetry-lbl">Sub-Millisecond Order Execution</span>
          </div>
        </div>
      </section>

      {/* ── 2. EXCHANGE & TRADING PLATFORM SHOWCASE ── */}
      <section className="bc-exchange-section" id="exchange-engine">
        <div className="bc-exchange-container">
          <div className="bc-sec-header">
            <div className="bc-sec-pill">
              <span className="bc-sec-dot" />
              INSTITUTIONAL TRADING ENGINES
            </div>
            <h2 className="bc-sec-title">Crypto Exchange &amp; High-Frequency Infrastructure</h2>
            <p className="bc-sec-desc">
              From institutional Centralized Exchanges (CEX) handling 1,000,000+ orders per second to non-custodial AMM &amp; Orderbook DEXs, we engineer resilient, bank-grade digital asset trading systems.
            </p>
          </div>

          {/* Model Selection Tabs */}
          <div className="bc-model-tabs-row">
            <button
              type="button"
              onClick={() => setActiveModel("cex")}
              className={`bc-model-tab ${activeModel === "cex" ? "active" : ""}`}
            >
              <span className="bc-tab-icon">⚡</span>Spot &amp; Margin CEX
            </button>
            <button
              type="button"
              onClick={() => setActiveModel("dex")}
              className={`bc-model-tab ${activeModel === "dex" ? "active" : ""}`}
            >
              <span className="bc-tab-icon">🔄</span>DEX &amp; AMM Protocols
            </button>
            <button
              type="button"
              onClick={() => setActiveModel("perps")}
              className={`bc-model-tab ${activeModel === "perps" ? "active" : ""}`}
            >
              <span className="bc-tab-icon">📈</span>Perpetuals &amp; Futures
            </button>
            <button
              type="button"
              onClick={() => setActiveModel("p2p")}
              className={`bc-model-tab ${activeModel === "p2p" ? "active" : ""}`}
            >
              <span className="bc-tab-icon">🤝</span>P2P Escrow Exchange
            </button>
          </div>

          {/* Interactive Interactive Showcase Canvas */}
          <div className="bc-showcase-canvas">
            {/* Left Model Details */}
            <div className="bc-showcase-left">
              <div className="bc-showcase-tag-row">
                <span className="bc-showcase-tag">{currentModel.tag}</span>
                <span className="bc-showcase-badge">{currentModel.badge}</span>
              </div>
              <h3 className="bc-showcase-title">{currentModel.title}</h3>
              <p className="bc-showcase-desc">{currentModel.desc}</p>

              <div className="bc-highlights-list">
                {currentModel.highlights.map((h, i) => (
                  <div key={i} className="bc-highlight-item">
                    <span className="bc-check-icon">✓</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="bc-showcase-cta-row">
                <Link href="/contact" className="bc-showcase-primary-btn">
                  <span>Deploy Your Exchange</span>
                  <span className="bc-arrow">→</span>
                </Link>
                <Link href="/contact" className="bc-showcase-ghost-btn">
                  <span>Schedule Architecture Demo</span>
                </Link>
              </div>
            </div>

            {/* Right Live Orderbook & Matching Terminal */}
            <div className="bc-terminal-card">
              <div className="bc-terminal-top-bar">
                <div className="bc-pair-selector">
                  {["BTC/USDT", "ETH/USDT", "SOL/USDT"].map((pair) => (
                    <button
                      key={pair}
                      type="button"
                      onClick={() => setActivePair(pair)}
                      className={`bc-pair-pill ${activePair === pair ? "active" : ""}`}
                    >
                      {pair}
                    </button>
                  ))}
                </div>
                <div className="bc-terminal-status">
                  <span className="bc-terminal-live-dot" />
                  <span>Matching Engine: Online</span>
                </div>
              </div>

              <div className="bc-price-header">
                <div className="bc-price-left">
                  <div className="bc-big-price">${currentBook.price}</div>
                  <div className="bc-price-change">{currentBook.change}</div>
                </div>
                <div className="bc-price-stats">
                  <div className="bc-price-stat-item">
                    <span className="bc-stat-k">24h Vol</span>
                    <span className="bc-stat-v">{currentBook.volume}</span>
                  </div>
                  <div className="bc-price-stat-item">
                    <span className="bc-stat-k">Latency</span>
                    <span className="bc-stat-v" style={{ color: "#10b981" }}>{currentModel.latency}</span>
                  </div>
                </div>
              </div>

              <div className="bc-orderbook-box">
                <div className="bc-orderbook-head">
                  <span>Price (USDT)</span>
                  <span>Size</span>
                  <span>Total</span>
                </div>
                <div className="bc-asks-list">
                  {currentBook.asks.map((ask, i) => (
                    <div key={i} className="bc-order-row bc-ask-row">
                      <span className="bc-order-price bc-ask-price">{ask.price}</span>
                      <span className="bc-order-amount">{ask.amount}</span>
                      <span className="bc-order-total">{ask.total}</span>
                      <div className="bc-depth-bar bc-ask-bar" style={{ width: `${(i + 1) * 22}%` }} />
                    </div>
                  ))}
                </div>
                <div className="bc-spread-bar">
                  <span>Spread: 0.01 USDT</span>
                  <span style={{ color: "#10b981", fontWeight: "700" }}>SLA 99.999%</span>
                </div>
                <div className="bc-bids-list">
                  {currentBook.bids.map((bid, i) => (
                    <div key={i} className="bc-order-row bc-bid-row">
                      <span className="bc-order-price bc-bid-price">{bid.price}</span>
                      <span className="bc-order-amount">{bid.amount}</span>
                      <span className="bc-order-total">{bid.total}</span>
                      <div className="bc-depth-bar bc-bid-bar" style={{ width: `${(4 - i) * 20}%` }} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bc-terminal-actions">
                <button type="button" className="bc-term-buy-btn">
                  <span>Buy {activePair.split("/")[0]} (Instant)</span>
                </button>
                <button type="button" className="bc-term-sell-btn">
                  <span>Sell {activePair.split("/")[0]}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. INTERACTIVE CODE INSPECTOR & SECURITY PROOF ── */}
      <section className="bc-code-section">
        <div className="bc-code-container">
          <div className="bc-sec-header">
            <div className="bc-sec-pill" style={{ background: "#e0f2fe", color: "#0284c7", borderColor: "#bae6fd" }}>
              <span className="bc-sec-dot" style={{ background: "#0284c7" }} />
              MATHEMATICAL FORMAL VERIFICATION
            </div>
            <h2 className="bc-sec-title">Gas-Optimized &amp; Audited Smart Contracts</h2>
            <p className="bc-sec-desc">
              Every smart contract is subjected to invariant property fuzzing in Foundry, assembly-level gas profiling, and static analysis to guarantee zero vulnerabilities.
            </p>
          </div>

          {/* Interactive Code Window */}
          <div className="bc-code-window-card">
            {/* Window Top Bar */}
            <div className="bc-code-top-bar">
              <div className="bc-code-tabs">
                <button
                  type="button"
                  onClick={() => setActiveCodeTab("account-abstraction")}
                  className={`bc-code-tab-btn ${activeCodeTab === "account-abstraction" ? "active" : ""}`}
                >
                  <span className="bc-file-icon">📄</span>
                  <span>ERC-4337 Paymaster</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCodeTab("yield-vault")}
                  className={`bc-code-tab-btn ${activeCodeTab === "yield-vault" ? "active" : ""}`}
                >
                  <span className="bc-file-icon">🏦</span>
                  <span>ERC-4626 Vault</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCodeTab("solana-program")}
                  className={`bc-code-tab-btn ${activeCodeTab === "solana-program" ? "active" : ""}`}
                >
                  <span className="bc-file-icon">🦀</span>
                  <span>Solana Anchor SVM</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCodeTab("foundry-invariant")}
                  className={`bc-code-tab-btn ${activeCodeTab === "foundry-invariant" ? "active" : ""}`}
                >
                  <span className="bc-file-icon">🧪</span>
                  <span>Foundry Invariant Test</span>
                </button>
              </div>

              <div className="bc-code-actions">
                <span className="bc-code-gas-badge">⚡ {activeSnippet.gas}</span>
                <span className="bc-code-verified-badge">✓ {activeSnippet.badge}</span>
                <button type="button" onClick={handleCopyCode} className="bc-copy-code-btn">
                  {copiedCode ? "✓ Copied" : "📋 Copy Code"}
                </button>
              </div>
            </div>

            {/* Code Body */}
            <div className="bc-code-body">
              <div className="bc-code-meta-row">
                <span className="bc-code-file-name">{activeSnippet.title}</span>
                <span className="bc-code-network">{activeSnippet.network}</span>
              </div>
              <pre className="bc-code-pre">
                <code>{activeSnippet.code}</code>
              </pre>
            </div>

            {/* Code Footer SLA Banner */}
            <div className="bc-code-footer">
              <div className="bc-code-feat-item">
                <span className="bc-feat-check">✓</span>
                <span>Foundry Invariant Tested (1M+ permutations)</span>
              </div>
              <div className="bc-code-feat-item">
                <span className="bc-feat-check">✓</span>
                <span>Assembly Yul Gas-Optimized (-40% Gas)</span>
              </div>
              <div className="bc-code-feat-item">
                <span className="bc-feat-check">✓</span>
                <span>CertiK &amp; OpenZeppelin Audit Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WEB3 CAPABILITIES BENTO GRID ── */}
      <section className="bc-capabilities-section">
        <div className="bc-caps-container">
          <div className="bc-sec-header">
            <div className="bc-sec-pill" style={{ background: "#f0fdf4", color: "#16a34a", borderColor: "#bbf7d0" }}>
              <span className="bc-sec-dot" style={{ background: "#16a34a" }} />
              COMPREHENSIVE CAPABILITIES
            </div>
            <h2 className="bc-sec-title">Enterprise Web3 &amp; Blockchain Pillars</h2>
            <p className="bc-sec-desc">
              We design, build, and audit full-stack blockchain platforms tailored for scale, regulatory compliance, and maximum liquidity throughput.
            </p>
          </div>

          <div className="bc-caps-grid">
            {web3Capabilities.map((cap, i) => (
              <div key={i} className="bc-cap-card" style={{ borderColor: cap.borderCol }}>
                <div className="bc-cap-card-header">
                  <div className="bc-cap-icon-box" style={{ background: cap.bgGradient }}>
                    <span>{cap.icon}</span>
                  </div>
                  <span className="bc-cap-badge" style={{ background: cap.lightBg, color: "#0f172a", borderColor: cap.borderCol }}>
                    {cap.badge}
                  </span>
                </div>

                <h3 className="bc-cap-title">{cap.title}</h3>
                <p className="bc-cap-desc">{cap.desc}</p>

                <div className="bc-cap-bullets">
                  {cap.highlights.map((h, hi) => (
                    <div key={hi} className="bc-cap-bullet-item">
                      <span className="bc-cap-dot" style={{ background: "#0d9488" }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. MULTI-CHAIN & LAYER-2 ECOSYSTEM MATRIX ── */}
      <section className="bc-ecosystem-section">
        <div className="bc-ecosystem-container">
          <div className="bc-sec-header">
            <div className="bc-sec-pill" style={{ background: "#faf5ff", color: "#7c3aed", borderColor: "#e9d5ff" }}>
              <span className="bc-sec-dot" style={{ background: "#7c3aed" }} />
              CROSS-CHAIN ECOSYSTEM
            </div>
            <h2 className="bc-sec-title">Multi-Chain &amp; Layer-2 Protocol Matrix</h2>
            <p className="bc-sec-desc">
              We engineer specialized decentralized protocols optimized for the consensus rules and VM characteristics of each major blockchain network.
            </p>
          </div>

          {/* Chain Filter Tabs */}
          <div className="bc-chain-filter-row">
            {["all", "EVM", "SVM", "Layer 2"].map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActiveChainFilter(f)}
                className={`bc-chain-filter-btn ${activeChainFilter === f ? "active" : ""}`}
              >
                {f === "all" ? "All Ecosystems" : f}
              </button>
            ))}
          </div>

          {/* Grid of Chains */}
          <div className="bc-chains-grid">
            {filteredChains.map((chain, i) => (
              <div key={i} className="bc-chain-card">
                <div className="bc-chain-top">
                  <div className="bc-chain-icon" style={{ borderColor: chain.color }}>
                    <span>{chain.icon}</span>
                  </div>
                  <div>
                    <h4 className="bc-chain-name">{chain.name}</h4>
                    <span className="bc-chain-badge" style={{ color: chain.color }}>{chain.badge}</span>
                  </div>
                </div>

                <div className="bc-chain-metrics">
                  <div className="bc-chain-m-row">
                    <span className="bc-chain-k">Throughput:</span>
                    <span className="bc-chain-v" style={{ color: "#0f172a" }}>{chain.tps}</span>
                  </div>
                  <div className="bc-chain-m-row">
                    <span className="bc-chain-k">Finality Latency:</span>
                    <span className="bc-chain-v" style={{ color: "#0d9488" }}>{chain.latency}</span>
                  </div>
                  <div className="bc-chain-m-row">
                    <span className="bc-chain-k">Avg Gas Cost:</span>
                    <span className="bc-chain-v">{chain.avgGas}</span>
                  </div>
                  <div className="bc-chain-m-row">
                    <span className="bc-chain-k">Network TVL:</span>
                    <span className="bc-chain-v">{chain.tvl}</span>
                  </div>
                </div>

                <div className="bc-chain-tooling">
                  <span className="bc-tool-label">Engineering Tooling:</span>
                  <span className="bc-tool-val">{chain.tooling}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. WEB3 DELIVERY LIFECYCLE ── */}
      <section className="bc-process-section">
        <div className="bc-process-container">
          <div className="bc-sec-header">
            <div className="bc-sec-pill">
              <span className="bc-sec-dot" />
              ENGINEERING LIFECYCLE
            </div>
            <h2 className="bc-sec-title">4-Stage Protocol Delivery Pipeline</h2>
            <p className="bc-sec-desc">
              From cryptographic architecture diagramming to mainnet liquidity seeding, every project passes through our battle-tested engineering gates.
            </p>
          </div>

          <div className="bc-process-grid">
            {deliverySteps.map((step, i) => (
              <div key={i} className="bc-process-card">
                <div className="bc-proc-num-row">
                  <span className="bc-proc-num">{step.num}</span>
                  <span className="bc-proc-icon">{step.icon}</span>
                </div>
                <span className="bc-proc-tag">{step.tag}</span>
                <h3 className="bc-proc-title">{step.title}</h3>
                <p className="bc-proc-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FAQ SECTION (WITH STICKY SIDEBAR) ── */}
      <section className="bc-faq-section">
        <div className="bc-faq-container">
          <div className="bc-faq-header">
            <div className="bc-sec-pill">
              <span className="bc-sec-dot" />
              WEB3 ENGINEERING FAQS
            </div>
            <h2 className="bc-sec-title">Frequently Asked Questions</h2>
            <p className="bc-sec-desc">Everything you need to know about our smart contract development, security audits, and exchange deployments.</p>
          </div>

          <div className="bc-faq-layout">
            {/* Left Sticky CTA Box */}
            <div className="bc-faq-sidebar">
              <h3>Have a Custom Web3 Architecture?</h3>
              <p>Speak directly with our principal blockchain architect to evaluate tokenomics, consensus models, and security requirements.</p>
              <Link href="/contact" className="bc-faq-contact-btn">
                Talk to a Web3 Architect →
              </Link>
              <div className="bc-faq-stat-box">
                <div className="bc-faq-stat-num">$500M+</div>
                <div className="bc-faq-stat-lbl">Total Value Locked &amp; Audited</div>
              </div>
            </div>

            {/* Right Accordion */}
            <div className="bc-faq-accordion">
              {faqs.map((f, i) => (
                <details key={i} className="bc-faq-item">
                  <summary>
                    <span className="bc-faq-idx">{String(i + 1).padStart(2, "0")}</span>
                    <span className="bc-faq-q">{f.q}</span>
                    <span className="bc-faq-toggle">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9l6 6 6-6" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </summary>
                  <div className="bc-faq-a">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. HIGH-CONVERTING BOTTOM CTA BANNER ── */}
      <section className="bc-cta-banner-section">
        <div className="bc-cta-banner-card">
          <div className="bc-cta-glow-orb" />
          <div className="bc-cta-inner">
            <div className="bc-sec-pill" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", borderColor: "rgba(255,255,255,0.25)" }}>
              <span className="bc-sec-dot" style={{ background: "#38bdf8" }} />
              READY TO ARCHITECT
            </div>
            <h2 className="bc-cta-title">Build Your Decentralized Protocol With OneNineLabs</h2>
            <p className="bc-cta-desc">
              Receive a comprehensive technical architecture proposal, gas profiling estimate, and security roadmap from our principal blockchain pod within 48 hours.
            </p>
            <div className="bc-cta-actions">
              <Link href="/contact" className="bc-cta-btn-primary">
                Book Free Protocol Review →
              </Link>
              <Link href="/services" className="bc-cta-btn-ghost">
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── EMBEDDED SCOPED STYLING ── */}
      <style jsx>{`
        .bc-page-root {
          font-family: -apple-system, BlinkMacSystemFont, "Plus Jakarta Sans", "Inter", sans-serif;
          color: #0f172a;
          background: #ffffff;
          overflow-x: hidden;
          width: 100%;
        }

        /* Telemetry Bar */
        .bc-telemetry-bar-wrap {
          background: #0f172a;
          border-top: 1px solid #1e293b;
          border-bottom: 1px solid #1e293b;
          padding: 24px 20px;
        }
        .bc-telemetry-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .bc-telemetry-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1;
          min-width: 180px;
        }
        .bc-telemetry-num {
          font-size: 26px;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -0.5px;
          line-height: 1.1;
        }
        .bc-telemetry-lbl {
          font-size: 11px;
          color: #94a3b8;
          font-weight: 600;
          margin-top: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .bc-telemetry-divider {
          width: 1px;
          height: 36px;
          background: rgba(255, 255, 255, 0.1);
        }

        /* Section Generic */
        .bc-sec-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .bc-sec-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f0fdfa;
          border: 1.5px solid #99f6e4;
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 11.5px;
          font-weight: 800;
          color: #0d9488;
          letter-spacing: 1.2px;
          margin-bottom: 16px;
          box-shadow: 0 4px 12px rgba(13, 148, 136, 0.06);
        }
        .bc-sec-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #0d9488;
          box-shadow: 0 0 6px rgba(13, 148, 136, 0.8);
        }
        .bc-sec-title {
          font-size: clamp(28px, 3.8vw, 44px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.15;
          letter-spacing: -1.2px;
          margin: 0 0 16px;
        }
        .bc-sec-desc {
          font-size: 15.5px;
          color: #64748b;
          line-height: 1.65;
          margin: 0;
        }

        /* Exchange Section */
        .bc-exchange-section {
          padding: 80px 24px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
        }
        .bc-exchange-container {
          max-width: 1240px;
          margin: 0 auto;
        }
        .bc-model-tabs-row {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .bc-model-tab {
          background: #ffffff;
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
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.03);
        }
        .bc-model-tab:hover {
          background: #ffffff;
          transform: translateY(-2px);
          color: #0f172a;
          border-color: #cbd5e1;
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);
        }
        .bc-model-tab.active {
          background: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.2);
        }
        .bc-showcase-canvas {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 32px;
          padding: 48px;
          box-shadow: 0 25px 50px rgba(15, 23, 42, 0.05);
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .bc-showcase-left {
          display: flex;
          flex-direction: column;
        }
        .bc-showcase-tag-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }
        .bc-showcase-tag {
          font-size: 11px;
          font-weight: 800;
          color: #0d9488;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .bc-showcase-badge {
          background: #f0fdfa;
          border: 1px solid #99f6e4;
          color: #0d9488;
          font-size: 11px;
          font-weight: 800;
          padding: 3px 10px;
          border-radius: 100px;
        }
        .bc-showcase-title {
          font-size: clamp(24px, 2.6vw, 32px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
          letter-spacing: -0.8px;
          margin: 0 0 16px;
        }
        .bc-showcase-desc {
          font-size: 14.5px;
          color: #475569;
          line-height: 1.65;
          margin: 0 0 24px;
        }
        .bc-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 32px;
        }
        .bc-highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13.5px;
          color: #334155;
          line-height: 1.5;
          font-weight: 500;
        }
        .bc-check-icon {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          color: #16a34a;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 900;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .bc-showcase-cta-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .bc-showcase-primary-btn {
          background: #0f172a;
          color: #ffffff !important;
          padding: 13px 26px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.18);
          transition: all 0.25s ease;
        }
        .bc-showcase-primary-btn:hover {
          background: #1e293b;
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(15, 23, 42, 0.28);
        }
        .bc-showcase-ghost-btn {
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          color: #0f172a !important;
          padding: 13px 22px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: all 0.25s ease;
        }
        .bc-showcase-ghost-btn:hover {
          background: #f8fafc;
          border-color: #94a3b8;
          transform: translateY(-2px);
        }

        /* Orderbook Terminal Card */
        .bc-terminal-card {
          background: #0f172a;
          border-radius: 24px;
          padding: 24px;
          color: #ffffff;
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.25);
          display: flex;
          flex-direction: column;
          gap: 16px;
          border: 1px solid #1e293b;
        }
        .bc-terminal-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .bc-pair-selector {
          display: flex;
          gap: 6px;
        }
        .bc-pair-pill {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #94a3b8;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .bc-pair-pill:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.12);
        }
        .bc-pair-pill.active {
          background: #38bdf8;
          color: #0f172a;
          border-color: #38bdf8;
          font-weight: 800;
        }
        .bc-terminal-status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10.5px;
          font-weight: 600;
          color: #94a3b8;
        }
        .bc-terminal-live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 6px #10b981;
          animation: pulseDot 2s infinite;
        }
        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.6; }
        }
        .bc-price-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 14px;
          padding: 12px 16px;
        }
        .bc-big-price {
          font-size: 22px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
        }
        .bc-price-change {
          font-size: 11px;
          font-weight: 700;
          color: #10b981;
          margin-top: 4px;
        }
        .bc-price-stats {
          display: flex;
          gap: 16px;
        }
        .bc-price-stat-item {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .bc-stat-k {
          font-size: 9.5px;
          color: #64748b;
          font-weight: 600;
          text-transform: uppercase;
        }
        .bc-stat-v {
          font-family: monospace;
          font-size: 11.5px;
          font-weight: 700;
          color: #e2e8f0;
        }
        .bc-orderbook-box {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-family: monospace;
          font-size: 11px;
        }
        .bc-orderbook-head {
          display: flex;
          justify-content: space-between;
          color: #64748b;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 0 4px 6px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .bc-order-row {
          position: relative;
          display: flex;
          justify-content: space-between;
          padding: 4px;
          border-radius: 4px;
          z-index: 1;
        }
        .bc-depth-bar {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          border-radius: 4px;
          z-index: -1;
          opacity: 0.15;
        }
        .bc-ask-price { color: #f43f5e; font-weight: 700; }
        .bc-ask-bar { background: #f43f5e; }
        .bc-bid-price { color: #10b981; font-weight: 700; }
        .bc-bid-bar { background: #10b981; }
        .bc-order-amount { color: #cbd5e1; }
        .bc-order-total { color: #64748b; }
        .bc-spread-bar {
          display: flex;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.03);
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 9.5px;
          color: #94a3b8;
          margin: 4px 0;
        }
        .bc-terminal-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 4px;
        }
        .bc-term-buy-btn {
          background: #10b981;
          color: #ffffff;
          border: none;
          padding: 10px;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .bc-term-buy-btn:hover {
          background: #059669;
          transform: translateY(-1px);
        }
        .bc-term-sell-btn {
          background: #f43f5e;
          color: #ffffff;
          border: none;
          padding: 10px;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .bc-term-sell-btn:hover {
          background: #e11d48;
          transform: translateY(-1px);
        }

        /* Code Inspector Section */
        .bc-code-section {
          padding: 80px 24px;
          background: #ffffff;
          border-top: 1px solid #f1f5f9;
        }
        .bc-code-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .bc-code-window-card {
          background: #0a0e1a;
          border: 1.5px solid #1e293b;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(15, 23, 42, 0.15);
        }
        .bc-code-top-bar {
          background: #0f172a;
          padding: 14px 20px;
          border-bottom: 1px solid #1e293b;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .bc-code-tabs {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .bc-code-tab-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #94a3b8;
          padding: 7px 14px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .bc-code-tab-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
        }
        .bc-code-tab-btn.active {
          background: #2563eb;
          color: #ffffff;
          border-color: #2563eb;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }
        .bc-code-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .bc-code-gas-badge {
          background: rgba(234, 179, 8, 0.12);
          border: 1px solid rgba(234, 179, 8, 0.3);
          color: #facc15;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
        }
        .bc-code-verified-badge {
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #34d399;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
        }
        .bc-copy-code-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          font-size: 11.5px;
          font-weight: 700;
          padding: 5px 12px;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .bc-copy-code-btn:hover {
          background: rgba(255, 255, 255, 0.15);
        }
        .bc-code-body {
          padding: 24px 28px;
        }
        .bc-code-meta-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .bc-code-file-name {
          font-family: monospace;
          font-size: 13px;
          font-weight: 700;
          color: #38bdf8;
        }
        .bc-code-network {
          font-size: 11.5px;
          color: #94a3b8;
          font-weight: 600;
        }
        .bc-code-pre {
          margin: 0;
          overflow-x: auto;
          font-family: "JetBrains Mono", "Fira Code", monospace;
          font-size: 13px;
          line-height: 1.7;
          color: #e2e8f0;
          max-height: 420px;
        }
        .bc-code-footer {
          background: #080c16;
          border-top: 1px solid #1e293b;
          padding: 14px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .bc-code-feat-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #94a3b8;
          font-weight: 600;
        }
        .bc-feat-check {
          color: #10b981;
          font-weight: 900;
        }

        /* Capabilities Bento Grid */
        .bc-capabilities-section {
          padding: 96px 24px;
          background: #f8fafc;
        }
        .bc-caps-container {
          max-width: 1240px;
          margin: 0 auto;
        }
        .bc-caps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .bc-cap-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 24px;
          padding: 32px 28px;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.03);
          display: flex;
          flex-direction: column;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .bc-cap-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
          border-color: #cbd5e1;
        }
        .bc-cap-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .bc-cap-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: #ffffff;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
        .bc-cap-badge {
          font-size: 11px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 100px;
          border: 1px solid;
          letter-spacing: 0.3px;
        }
        .bc-cap-title {
          font-size: 18px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.25;
          margin: 0 0 12px;
          letter-spacing: -0.4px;
        }
        .bc-cap-desc {
          font-size: 13.5px;
          color: #64748b;
          line-height: 1.65;
          margin: 0 0 24px;
          flex-grow: 1;
        }
        .bc-cap-bullets {
          border-top: 1px dashed #e2e8f0;
          padding-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .bc-cap-bullet-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          color: #334155;
          font-weight: 600;
        }
        .bc-cap-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* Ecosystem Matrix */
        .bc-ecosystem-section {
          padding: 96px 24px;
          background: #ffffff;
          border-top: 1px solid #f1f5f9;
        }
        .bc-ecosystem-container {
          max-width: 1240px;
          margin: 0 auto;
        }
        .bc-chain-filter-row {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .bc-chain-filter-btn {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 8px 18px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 700;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .bc-chain-filter-btn:hover {
          color: #0f172a;
          background: #f1f5f9;
        }
        .bc-chain-filter-btn.active {
          background: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
        }
        .bc-chains-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .bc-chain-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 28px 24px;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03);
          transition: all 0.25s ease;
        }
        .bc-chain-card:hover {
          transform: translateY(-4px);
          border-color: #cbd5e1;
          box-shadow: 0 14px 30px rgba(15, 23, 42, 0.07);
        }
        .bc-chain-top {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid #f1f5f9;
        }
        .bc-chain-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          background: #f8fafc;
          border: 1.5px solid;
        }
        .bc-chain-name {
          font-size: 17px;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
        }
        .bc-chain-badge {
          font-size: 11.5px;
          font-weight: 700;
        }
        .bc-chain-metrics {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 18px;
        }
        .bc-chain-m-row {
          display: flex;
          justify-content: space-between;
          font-size: 12.5px;
        }
        .bc-chain-k {
          color: #64748b;
          font-weight: 600;
        }
        .bc-chain-v {
          font-weight: 700;
          font-family: monospace;
        }
        .bc-chain-tooling {
          background: #f8fafc;
          border-radius: 10px;
          padding: 10px 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .bc-tool-label {
          font-size: 10px;
          color: #94a3b8;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .bc-tool-val {
          font-size: 11.5px;
          color: #334155;
          font-weight: 700;
        }

        /* Delivery Process */
        .bc-process-section {
          padding: 96px 24px;
          background: #f8fafc;
        }
        .bc-process-container {
          max-width: 1240px;
          margin: 0 auto;
        }
        .bc-process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .bc-process-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 28px 22px;
          position: relative;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03);
          transition: all 0.25s ease;
        }
        .bc-process-card:hover {
          transform: translateY(-5px);
          border-color: #0d9488;
          box-shadow: 0 16px 36px rgba(13, 148, 136, 0.1);
        }
        .bc-proc-num-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .bc-proc-num {
          font-size: 28px;
          font-weight: 900;
          color: #0d9488;
          font-family: monospace;
          line-height: 1;
        }
        .bc-proc-icon {
          font-size: 22px;
        }
        .bc-proc-tag {
          display: inline-block;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          color: #64748b;
          margin-bottom: 8px;
        }
        .bc-proc-title {
          font-size: 16px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.3;
          margin: 0 0 12px;
        }
        .bc-proc-desc {
          font-size: 12.5px;
          color: #64748b;
          line-height: 1.65;
          margin: 0;
        }

        /* FAQ Section */
        .bc-faq-section {
          padding: 96px 24px;
          background: #ffffff;
        }
        .bc-faq-container {
          max-width: 1160px;
          margin: 0 auto;
        }
        .bc-faq-layout {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 48px;
          align-items: start;
        }
        .bc-faq-sidebar {
          background: #f0fdfa;
          border: 1.5px solid #99f6e4;
          border-radius: 24px;
          padding: 36px 28px;
          position: sticky;
          top: 100px;
        }
        .bc-faq-sidebar h3 {
          font-size: 22px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 12px;
          line-height: 1.25;
        }
        .bc-faq-sidebar p {
          font-size: 14px;
          color: #475569;
          line-height: 1.65;
          margin: 0 0 24px;
        }
        .bc-faq-contact-btn {
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
        .bc-faq-contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.25);
        }
        .bc-faq-stat-box {
          margin-top: 32px;
          border-top: 1px solid #ccfbf1;
          padding-top: 20px;
        }
        .bc-faq-stat-num {
          font-size: 32px;
          font-weight: 900;
          color: #0d9488;
          line-height: 1;
        }
        .bc-faq-stat-lbl {
          font-size: 12px;
          color: #475569;
          margin-top: 4px;
          font-weight: 600;
        }
        .bc-faq-accordion {
          display: flex;
          flex-direction: column;
        }
        .bc-faq-item {
          border-bottom: 1px solid #e2e8f0;
        }
        .bc-faq-item:first-child {
          border-top: 1px solid #e2e8f0;
        }
        .bc-faq-item summary {
          list-style: none;
          padding: 22px 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 16px;
          user-select: none;
        }
        .bc-faq-item summary::-webkit-details-marker {
          display: none;
        }
        .bc-faq-idx {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11.5px;
          font-weight: 800;
          color: #94a3b8;
          flex-shrink: 0;
        }
        .bc-faq-item[open] .bc-faq-idx {
          background: #ccfbf1;
          color: #0d9488;
        }
        .bc-faq-q {
          flex: 1;
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.35;
        }
        .bc-faq-item[open] .bc-faq-q {
          color: #0d9488;
        }
        .bc-faq-toggle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.25s ease, background 0.25s ease;
        }
        .bc-faq-item[open] .bc-faq-toggle {
          background: #0d9488;
          transform: rotate(180deg);
        }
        .bc-faq-item[open] .bc-faq-toggle svg path {
          stroke: #ffffff;
        }
        .bc-faq-a {
          padding: 0 0 24px 48px;
          font-size: 14.5px;
          color: #475569;
          line-height: 1.7;
        }

        /* Bottom CTA Banner */
        .bc-cta-banner-section {
          padding: 80px 24px 100px;
          background: #f8fafc;
        }
        .bc-cta-banner-card {
          max-width: 1100px;
          margin: 0 auto;
          background: linear-gradient(135deg, #07151e 0%, #0a2530 50%, #0f172a 100%);
          border-radius: 36px;
          padding: 64px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 30px 70px rgba(15, 23, 42, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .bc-cta-glow-orb {
          position: absolute;
          top: -50%;
          left: 50%;
          transform: translateX(-50%);
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(13, 148, 136, 0.35) 0%, transparent 70%);
          pointer-events: none;
        }
        .bc-cta-inner {
          position: relative;
          z-index: 1;
          max-width: 760px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .bc-cta-title {
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 900;
          color: #ffffff;
          line-height: 1.12;
          letter-spacing: -1.2px;
          margin: 16px 0;
        }
        .bc-cta-desc {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.65;
          margin: 0 0 36px;
        }
        .bc-cta-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .bc-cta-btn-primary {
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
        .bc-cta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.3);
        }
        .bc-cta-btn-ghost {
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
        .bc-cta-btn-ghost:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .bc-showcase-canvas {
            grid-template-columns: 1fr;
            padding: 32px 24px;
          }
          .bc-caps-grid, .bc-chains-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .bc-process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .bc-faq-layout {
            grid-template-columns: 1fr;
          }
          .bc-faq-sidebar {
            position: static;
          }
        }

        @media (max-width: 640px) {
          .bc-caps-grid, .bc-chains-grid, .bc-process-grid {
            grid-template-columns: 1fr;
          }
          .bc-code-top-bar {
            flex-direction: column;
            align-items: flex-start;
          }
          .bc-cta-banner-card {
            padding: 44px 20px;
            border-radius: 24px;
          }
        }
      `}</style>
    </div>
  );
}
