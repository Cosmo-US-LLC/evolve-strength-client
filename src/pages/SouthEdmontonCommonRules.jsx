import React from "react";

import MetaTags from "@/components/Metatags/Meta";
import SouthEdmontonCommonRulesContent from "@/components/PageComponents/SouthEdmontonCommon/SouthEdmontonCommonRulesContent";

function SouthEdmontonCommonRules() {
  return (
    <>
      <MetaTags
        title="South Edmonton Common Contest Rules | Evolve Strength"
        description="Official rules for the Evolve Strength South Edmonton Common lifetime membership contest, including eligibility, how to enter, prize, and governing law."
      />
      <div className="bg-white">
        <SouthEdmontonCommonRulesContent />
      </div>
    </>
  );
}

export default SouthEdmontonCommonRules;
