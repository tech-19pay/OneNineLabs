"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlockchainHeroNew from "@/components/BlockchainHeroNew";
import BlockchainSaveSwap from "@/components/BlockchainSaveSwap";
import BlockchainTrustedPlatform from "@/components/BlockchainTrustedPlatform";
import BlockchainInvestingTrading from "@/components/BlockchainInvestingTrading";
import BlockchainWalletBenefits from "@/components/BlockchainWalletBenefits";
import BlockchainFAQ from "@/components/BlockchainFAQ";
import "./BlockchainPage.css";

export default function BlockchainPage() {
  return (
    <div className="new-bc-page">
      <Header variant="light" />
      <main>
        <BlockchainHeroNew />
        <BlockchainTrustedPlatform />
        <BlockchainSaveSwap />
        <BlockchainInvestingTrading />
        <BlockchainWalletBenefits />
        <BlockchainFAQ />
      </main>
      <Footer />
    </div>
  );
}
