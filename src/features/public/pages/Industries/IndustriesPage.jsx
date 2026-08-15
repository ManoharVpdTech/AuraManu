import React from "react";
import { IndustriesHero } from "./components/IndustriesHero";
import { IndustryNetwork } from "./components/IndustryNetwork";
import { IndustryExplorer } from "./components/IndustryExplorer";
import { IndustryGrid } from "./components/IndustryGrid";
import { IndustrySearch } from "./components/IndustrySearch";
import { IndustryCTA } from "./components/IndustryCTA";

export const IndustriesPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <IndustriesHero />
      <IndustryNetwork />
      <IndustryExplorer />
      <IndustryGrid />
      <IndustrySearch />
      <IndustryCTA />
    </div>
  );
};

export default IndustriesPage;
