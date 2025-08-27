import React from "react";
import { CategorySelector } from "./components";

function DiscoverEvolve({ selected, onSelect }) {
  const handleCategorySelect = (categoryId) => {
    // Toggle behavior: if clicking the same category, deselect it; if clicking different category, select it
    if (selected === categoryId) {
      onSelect && onSelect(null); // Deselect current category
    } else {
      onSelect && onSelect(categoryId); // Select new category
    }
  };

  return (
    <div className="w-full max-w-[1280px] pt-20 md:pt-20 pb-6 md:pb-6 mx-auto px-4 md:px-8">
      <CategorySelector selected={selected} onSelect={handleCategorySelect} />
    </div>
  );
}

export default DiscoverEvolve;
