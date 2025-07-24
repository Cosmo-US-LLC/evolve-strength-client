import React, { useState } from "react";
import ExploreHero from "@/components/PageComponents/Explore/Desktop/ExploreHero";
import DiscoverEvolve from "@/components/PageComponents/Explore/Desktop/DiscoverEvolve";

function Explore() {
  const [selected, setSelected] = useState("LOCATIONS");

  return (
    <div>
      <ExploreHero />
      <DiscoverEvolve selected={selected} onSelect={setSelected} />
    </div>
  );
}

export default Explore;
