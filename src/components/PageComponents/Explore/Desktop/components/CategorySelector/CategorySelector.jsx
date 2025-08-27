import React, { useEffect, useRef } from "react";
import CategoryCard from "./CategoryCard";
import { EXPLORE_DATA } from "../../../../../../constants/exploreDataWithTrainer";
import LocationsView from "../LocationsView/LocationsView";
import WellnessView from "../WellnessView/WellnessView";
import TrainersView from "../TrainersView/TrainersView";

function CategorySelector({ selected, onSelect }) {
  const mobileCategoryCardsRef = useRef(null);
  const desktopCategoryCardsRef = useRef(null);

  // Scroll to category cards when a category is selected
  useEffect(() => {
    if (selected) {
      // Small delay to ensure the component is fully rendered and content is expanded
      const timer = setTimeout(() => {
        // Determine which ref to use based on screen size
        const isMobile = window.innerWidth <= 768;
        const targetRef = isMobile
          ? mobileCategoryCardsRef
          : desktopCategoryCardsRef;

        if (targetRef.current) {
          // Calculate offset to account for fixed header/navbar
          // Desktop: 84px, Mobile: 70px
          // Adding extra offset to scroll higher above the cards
          const baseOffset = isMobile ? 70 : 84;
          const extraOffset = 120; // Additional space above the cards
          const offset = baseOffset + extraOffset;

          const elementTop = targetRef.current.offsetTop;
          const elementPosition = elementTop - offset;

          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        }
      }, 300); // Increased delay to allow content to expand

      return () => clearTimeout(timer);
    }
  }, [selected]);

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
      <div className="text-left md:text-left">
        <h1 className="leading-[34px] md:leading-[62px] !text-[34px] md:!text-[55px] uppercase w-full text-[#000]  ">
          Discover trainers, wellness services, and amenities that fit your
          goals at Evolve.
        </h1>
      </div>

      {/* Mobile: Accordion Cards with Content Below Each */}
      <div
        className="md:hidden flex flex-col gap-4"
        ref={mobileCategoryCardsRef}
      >
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
        <div
          className="flex justify-center gap-8 px-0"
          ref={desktopCategoryCardsRef}
        >
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
