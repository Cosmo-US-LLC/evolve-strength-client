import React from "react";
import MetaTags from "@/components/Metatags/Meta";
import LansdowneComingSoon from "@/components/PageComponents/Lansdowne/LansdowneComingSoon";

function LansdownePage() {
  return (
    <>
      <MetaTags
        title="Evolve Strength Lansdowne | Coming Soon"
        description="Evolve Strength is coming to Lansdowne Centre in Richmond, BC. Join the waitlist to be first in line for founding membership access."
      />
      <LansdowneComingSoon />
    </>
  );
}

export default LansdownePage;
