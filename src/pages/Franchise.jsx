import React from "react";
import FranchiseHero from "@/components/PageComponents/Franchise/Desktop/FranchiseHero";

function Franchise() {
  return (
    <div>
      <div className="max-md:hidden">
        <FranchiseHero  />
      </div>
      <div className="md:hidden">Home Mobile</div>
    </div>
  );
}

export default Franchise;
