import React, { useState } from "react";
import ExploreHero from "@/components/PageComponents/Explore/Desktop/ExploreHero";
import DiscoverEvolve from "@/components/PageComponents/Explore/Desktop/DiscoverEvolve";

function Explore() {
  const [selected, setSelected] = useState(null);

  const handleCategorySelect = (categoryId) => {
    // Handle both selection and deselection
    setSelected(categoryId);
  };

  return (
    <>
      
      <div>
        <ExploreHero />
        <DiscoverEvolve selected={selected} onSelect={handleCategorySelect} />
      </div>
    </>
  );
}

export default Explore;
