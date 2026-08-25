"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlockchainHeroNew from "@/components/BlockchainHeroNew";
import BlockchainStats from "@/components/BlockchainStats";
import BlockchainServicesGrid from "@/components/BlockchainServicesGrid";
import BlockchainTrustedPlatform from "@/components/BlockchainTrustedPlatform";
import BlockchainSaveSwap from "@/components/BlockchainSaveSwap";
import BlockchainInvestingTrading from "@/components/BlockchainInvestingTrading";
import BlockchainWalletBenefits from "@/components/BlockchainWalletBenefits";
import BlockchainTechStack from "@/components/BlockchainTechStack";
import BlockchainProcess from "@/components/BlockchainProcess";
import BlockchainIndustries from "@/components/BlockchainIndustries";
import BlockchainFAQ from "@/components/BlockchainFAQ";
import BlockchainCTA from "@/components/BlockchainCTA";

export default function BlockchainPageContent() {
  return (
    <div className="new-bc-page">
      <Header variant="light" />
      <main>
        <BlockchainHeroNew />
        <BlockchainStats />
        <BlockchainServicesGrid />
        <BlockchainTrustedPlatform />
        <BlockchainSaveSwap />
        <BlockchainInvestingTrading />
        <BlockchainWalletBenefits />
        <BlockchainTechStack />
        <BlockchainProcess />
        <BlockchainIndustries />
        <BlockchainFAQ />
        <BlockchainCTA />
      </main>
      <Footer />
    </div>
  );
}
