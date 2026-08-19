import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlockchainPageContent from "@/components/BlockchainPageContent";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export const metadata = {
  title: "Blockchain & Web3 Engineering — Smart Contracts, CEX & DEX | OneNineLabs",
  description: "Enterprise blockchain engineering: institutional CEX/DEX matching engines (1M+ TPS), gas-optimized Solidity & Rust smart contracts, MPC custody vaults, and formal security audits.",
  keywords: [
    "blockchain development company",
    "smart contract audit",
    "crypto exchange development",
    "DEX development",
    "Solana Anchor developer",
    "ERC-4337 Account Abstraction",
    "MPC custody wallet",
    "Web3 development agency",
    "Foundry smart contract testing",
    "RWA tokenization"
  ],
  alternates: {
    canonical: "/services/blockchain",
    languages: {
      "en-US": "/services/blockchain",
      en: "/services/blockchain",
      "hi-IN": "/services/blockchain",
      "x-default": "/services/blockchain",
    },
  },
  openGraph: {
    title: "Blockchain & Web3 Engineering — Smart Contracts, CEX & DEX | OneNineLabs",
    description: "Enterprise blockchain engineering: institutional matching engines, gas-optimized smart contracts, MPC custody vaults, and formal security audits.",
    url: `${siteUrl}/services/blockchain`,
    type: "website",
    images: [{ url: "/blockchain_preview.png", width: 1200, height: 630, alt: "Blockchain & Web3 Engineering by OneNineLabs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blockchain & Web3 Engineering — Smart Contracts & Crypto Exchanges | OneNineLabs",
    description: "Institutional crypto matching engines (1M+ TPS), audited smart contracts, and MPC custody vaults.",
    images: ["/blockchain_preview.png"],
  },
  robots: { index: true, follow: true },
};

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

export default function BlockchainServicePage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: "Blockchain & Web3 Solutions", item: `${siteUrl}/services/blockchain` },
    ],
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/blockchain#service`,
    name: "Blockchain & Web3 Solutions",
    serviceType: "Blockchain and Smart Contract Development",
    url: `${siteUrl}/services/blockchain`,
    description: "Enterprise blockchain engineering: institutional CEX/DEX matching engines (1M+ TPS), gas-optimized Solidity & Rust smart contracts, MPC custody vaults, and formal security audits.",
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
      
      <main style={{ minHeight: "100vh", background: "#ffffff" }}>
        <BlockchainPageContent />
      </main>

      <Footer />
    </>
  );
}
