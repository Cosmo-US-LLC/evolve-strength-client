import React from "react";
import CategoryCard from "./CategoryCard";
import { EXPLORE_DATA } from "../../../../../../constants/UnUseExploreDataOld";

function CategorySelector({ selected, onSelect }) {
  return (
    <div className="w-full py-12 flex flex-col gap-12">
      {/* Main Heading */}
      <div className="text-center">
        <h3 className="leading-[24px] font-[400] text-[#000]">
          Discover trainers, wellness services, and amenities that fit your
          goals at Evolve.
        </h3>
      </div>

      {/* Category Cards */}
      <div className="flex justify-center gap-8 ">
        {EXPLORE_DATA.map((card) => (
          <CategoryCard
            key={card.id}
            card={card}
            selected={selected === card.id}
            onClick={() => onSelect && onSelect(card.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default CategorySelector;
