import React, { useEffect, useRef, useCallback } from "react";
import CategoryCard from "./CategoryCard";
import { EXPLORE_DATA } from "../../../../../../constants/exploreDataWithTrainer";
import LocationsView from "../LocationsView/LocationsView";
import WellnessView from "../WellnessView/WellnessView";
import TrainersView from "../TrainersView/TrainersView";

function CategorySelector({ selected, onSelect }) {
  const mobileCategoryCardsRef = useRef(null);
  const desktopCategoryCardsRef = useRef(null);

  // Helper function to scroll to category cards
  const scrollToCategoryCards = useCallback(() => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      // On mobile, scroll to the specific selected card
      const selectedCardElement = document.querySelector(
        `[data-card-id="${selected}"]`
      );
      if (selectedCardElement) {
        const rect = selectedCardElement.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;

        // Calculate offset for mobile header
        const headerHeight = 70;
        const extraPadding = 20;
        const targetPosition = elementTop - headerHeight - extraPadding;
        const finalPosition = Math.max(0, targetPosition);

        window.scrollTo({
          top: finalPosition,
          behavior: "smooth",
        });
      }
    } else {
      // On desktop, scroll to the category cards section
      const targetRef = desktopCategoryCardsRef;
      if (targetRef.current) {
        const rect = targetRef.current.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;

        const headerHeight = 84;
        const extraPadding = 20;
        const targetPosition = elementTop - headerHeight - extraPadding;
        const finalPosition = Math.max(0, targetPosition);

        window.scrollTo({
          top: finalPosition,
          behavior: "smooth",
        });
      }
    }
  }, [selected]);

  // Scroll to category cards when a category is selected
  useEffect(() => {
    if (selected) {
      // Small delay to ensure the component is fully rendered and content is expanded
      const timer = setTimeout(() => {
        scrollToCategoryCards();
      }, 200); // Slightly longer delay to allow content to expand, especially on mobile

      return () => clearTimeout(timer);
    }
  }, [selected, scrollToCategoryCards]);

  // Handle window resize to recalculate scroll position if needed
  useEffect(() => {
    const handleResize = () => {
      if (selected) {
        // Re-scroll after resize to maintain proper positioning
        setTimeout(() => {
          scrollToCategoryCards();
        }, 100);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [selected, scrollToCategoryCards]);

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
      <div className="flex justify-center w-full">
        <h1 className="leading-[34px] md:leading-[52px] max-w-[1000px] text-center !text-[34px] md:!text-[55px] uppercase w-full text-[#000]  ">
          Explore Trainers & Wellness Services That Fit You
        </h1>
      </div>

      {/* Mobile: Accordion Cards with Content Below Each */}
      <div
        className="md:hidden flex flex-col gap-4"
        ref={mobileCategoryCardsRef}
      >
        {EXPLORE_DATA.map((card) => (
          <div key={card.id} className="flex flex-col" data-card-id={card.id}>
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
