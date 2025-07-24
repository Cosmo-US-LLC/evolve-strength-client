import React from "react";
import CategoryCard from "./CategoryCard";
import { EXPLORE_DATA } from "../../../../../../constants/UnUseExploreDataOld";
import LocationsView from "../LocationsView/LocationsView";
import WellnessView from "../WellnessView/WellnessView";
import TrainersView from "../TrainersView/TrainersView";

function CategorySelector({ selected, onSelect }) {
  const renderViewContent = (categoryId) => {
    switch (categoryId) {
      case "LOCATIONS":
        return <LocationsView />;
      case "WELLNESS":
        return <WellnessView />;
      case "TRAINERS":
        return <TrainersView />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full py-8 md:py-12 flex flex-col gap-8 md:gap-12">
      {/* Main Heading */}
      <div className="text-left md:text-center">
        <h3 className="leading-[20px] md:leading-[24px] !text-[19px] md:!text-[24px] w-full font-[400] text-[#000]  ">
          Discover trainers, wellness services, and amenities that fit your
          goals at Evolve.
        </h3>
      </div>

      {/* Mobile: Accordion Cards with Content Below Each */}
      <div className="md:hidden flex flex-col gap-4  ">
        {EXPLORE_DATA.map((card) => (
          <div key={card.id} className="flex flex-col">
            <CategoryCard
              card={card}
              selected={selected === card.id}
              onClick={() => onSelect && onSelect(card.id)}
            />
            {/* Mobile Accordion Content - appears below each card */}
            {selected === card.id && (
              <div className="mt-4 w-full">{renderViewContent(card.id)}</div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop: Cards Horizontal + Full Width Content Below */}
      <div className="hidden md:block">
        {/* Desktop Category Cards */}
        <div className="flex justify-center gap-8 px-0">
          {EXPLORE_DATA.map((card) => (
            <CategoryCard
              key={card.id}
              card={card}
              selected={selected === card.id}
              onClick={() => onSelect && onSelect(card.id)}
            />
          ))}
        </div>

        {/* Desktop Accordion Content - Full Width Below Cards */}
        {selected && (
          <div className="w-full mt-12">{renderViewContent(selected)}</div>
        )}
      </div>
    </div>
  );
}

export default CategorySelector;
