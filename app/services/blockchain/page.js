import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlockchainPageClean from "@/components/BlockchainPageClean";
import { servicePageStyles } from "@/lib/servicePageStyles";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

const PRIMARY = "#2563eb";
const GRAD_FROM = "#1e3a8a";
const GRAD_TO = "#2563eb";
const GLOW = "rgba(37,99,235,0.15)";

export const metadata = {
  title: "Blockchain Development Services — Smart Contracts, dApps, DeFi, Wallets & Exchanges",
  description:
    "End-to-end blockchain development: audited smart contracts, dApps, DeFi protocols, DEX/CEX exchanges, wallets, NFT marketplaces, tokenization and L1/L2 engineering on Ethereum, Solana, Polygon and more.",
  keywords: [
    "blockchain development company",
    "smart contract development",
    "smart contract audit",
    "dApp development",
    "DeFi development",
    "DEX development",
    "crypto exchange development",
    "wallet development",
    "NFT marketplace development",
    "token development",
    "RWA tokenization",
    "Web3 development services",
  ],
  alternates: {
    canonical: "/services/blockchain",
    languages: { "en-US": "/services/blockchain", en: "/services/blockchain", "hi-IN": "/services/blockchain", "x-default": "/services/blockchain" },
  },
  openGraph: {
    title: "Blockchain Development Services | OneNineLabs",
    description:
      "Audited smart contracts, dApps, DeFi, exchanges, wallets and tokenization — built by one senior Web3 team.",
    url: "https://oneninelabs.com/services/blockchain",
    type: "website",
    images: [{ url: "/services/blockchain_preview.png", width: 1200, height: 630, alt: "Blockchain Development by OneNineLabs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blockchain Development Services | OneNineLabs",
    description: "Audited smart contracts, dApps, DeFi, exchanges, wallets and tokenization — built by one senior Web3 team.",
    images: ["/services/blockchain_preview.png"],
  },
  robots: { index: true, follow: true },
};

const faqs = [
  { q: "What blockchain development services do you offer?", a: "We cover the full lifecycle: smart contract development and audits, dApp and Web3 integration, DeFi protocols, DEX and CEX exchange platforms, custodial and non-custodial wallets, NFT marketplaces, token creation and tokenomics, RWA tokenization, DAO tooling, Layer 1/Layer 2 protocol engineering and enterprise blockchain networks." },
  { q: "Which blockchains and frameworks do you build on?", a: "We develop on Ethereum, Solana, Polygon, BNB Chain, Avalanche, Arbitrum, Optimism, Base and Hyperledger Fabric, using Solidity, Rust, Hardhat, Foundry, Ethers.js/Viem, The Graph, Chainlink and IPFS. We help you pick the chain that fits your cost, speed and compliance needs." },
  { q: "How long does it take to build a dApp or exchange?", a: "A focused MVP — such as a staking dApp, token or single-marketplace — typically ships in 6–8 weeks. Full DeFi protocols, DEXs or exchange platforms with matching engines usually take 3–6 months depending on scope, integrations and audit depth." },
  { q: "Are your smart contracts audited?", a: "Yes. Every contract goes through internal review, automated static analysis and gas optimization, followed by an independent third-party audit before mainnet. We fix all findings, re-verify and deliver the full audit report." },
  { q: "How much does blockchain development cost?", a: "Pricing depends on scope: standalone smart contracts and token launches start in the low four figures, while full platforms like exchanges or DeFi protocols are quoted per milestone. After a free discovery call we provide a fixed, itemized proposal — no hourly surprises." },
  { q: "Do you provide support after launch?", a: "Yes. We offer monitoring, incident response, contract upgrades via proxy patterns, dependency updates and feature iterations under an SLA — so your product stays secure as the ecosystem evolves." },
];

export default function BlockchainServicePage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: "Blockchain Development", item: `${siteUrl}/services/blockchain` },
    ],
  };
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/blockchain#service`,
    name: "Blockchain & Web3 Development",
    serviceType: "Blockchain Development",
    url: `${siteUrl}/services/blockchain`,
    description:
      "End-to-end blockchain development: audited smart contracts, dApps, DeFi protocols, DEX/CEX exchanges, wallets, NFT marketplaces, tokenization and L1/L2 engineering.",
    provider: { "@type": "Organization", name: "OneNineLabs", url: siteUrl },
    areaServed: { "@type": "Country", name: "Worldwide" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Blockchain Development Services",
      itemListElement: [
        "Smart Contract Development",
        "Smart Contract Audits",
        "Token Creation & Contract Deployment",
        "dApp Development",
        "DeFi Protocol Development",
        "DEX & Exchange Development",
        "Web3 Wallet Development",
        "Web3 Wallet Extension Development",
        "NFT Marketplace Development",
        "Token Development & Tokenomics",
        "Layer 1 / Layer 2 & Protocol Engineering",
        "Cross-Chain Bridges",
        "RWA Tokenization",
        "Enterprise & DAO Tooling",
      ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
    },
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

      <main style={{ minHeight: "100vh", background: "#ffffff" }}>
        <BlockchainPageClean />
      </main>

      <Footer />
    </>
  );
}
