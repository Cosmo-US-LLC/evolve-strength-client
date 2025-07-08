import React, { useState } from "react";
import ExploreHero from "@/components/PageComponents/Explore/Desktop/ExploreHero";
import DiscoverEvolve from "@/components/PageComponents/Explore/Desktop/DiscoverEvolve";

function Explore() {
  const [selected, setSelected] = useState("LOCATIONS");

  return (
    <div>
      <div className="max-md:hidden">
        <ExploreHero />
        <DiscoverEvolve selected={selected} onSelect={setSelected} />
      </div>
      <div className="md:hidden">Home Mobile</div>
    </div>
  );
}

export default Explore;
