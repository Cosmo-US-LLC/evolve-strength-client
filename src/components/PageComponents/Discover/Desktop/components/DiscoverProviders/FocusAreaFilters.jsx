import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getAllAreasOfFocus } from "@/services/trainerApi";

// Mapping focus areas to their corresponding trainer icons
const FOCUS_AREA_ICONS = {
  "Weight Loss": "/assets/images/Discover/trainers_icon (1).svg",
  "Strength Training": "/assets/images/Discover/trainers_icon (2).svg",
  "Hypertrophy": "/assets/images/Discover/trainers_icon (3).svg",
  "Powerlifting": "/assets/images/Discover/trainers_icon (4).svg",
  "Olympic Weightlifting": "/assets/images/Discover/trainers_icon (5).svg",
  "Sports Performance": "/assets/images/Discover/trainers_icon (6).svg",
  "Athletic Conditioning": "/assets/images/Discover/trainers_icon (7).svg",
  "Injury Rehab": "/assets/images/Discover/trainers_icon (8).svg",
  "Pain Management": "/assets/images/Discover/trainers_icon (9).svg",
  "Mobility and Flexibility": "/assets/images/Discover/trainers_icon (10).svg",
  "Posture": "/assets/images/Discover/trainers_icon (11).svg",
  "Technique and Movement": "/assets/images/Discover/trainers_icon (12).svg",
  "Nutrition and Lifestyle": "/assets/images/Discover/trainers_icon (13).svg",
  "Women's Health": "/assets/images/Discover/trainers_icon (14).svg",
  "Prenatal and Postnatal": "/assets/images/Discover/trainers_icon (15).svg",
  "General Fitness": "/assets/images/Discover/trainers_icon (16).svg",
  "Beginners": "/assets/images/Discover/trainers_icon (17).svg",
  "Seniors and Special Populations": "/assets/images/Discover/trainers_icon (18).svg",
  "Functional Fitness": "/assets/images/Discover/trainers_icon (19).svg",
  "HIIT and CrossFit": "/assets/images/Discover/trainers_icon (20).svg",
  "Combat Sports": "/assets/images/Discover/trainers_icon (21).svg",
  "Allied Health": "/assets/images/Discover/trainers_icon (22).svg",
};

const DEFAULT_FOCUS_ICON = "/assets/images/Discover/wellnessC (7).svg";

const FocusAreaFilters = ({
  selectedFocusArea,
  onFocusAreaSelect,
  onSelectAll,
}) => {
  const allAreasOfFocus = getAllAreasOfFocus();
  const sortedAreas = [...allAreasOfFocus].sort((a, b) =>
    a.localeCompare(b)
  );

  return (
    <div className="mb-8">
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="w-full relative"
      >
        <CarouselContent className="-ml-3 md:-ml-4">
          <CarouselItem className="pl-3 md:pl-4 basis-auto">
            <button
              type="button"
              onClick={onSelectAll}
              className={`px-4 py-2 cursor-pointer rounded-[8px] border border-[#000] text-sm whitespace-nowrap transition-colors !font-[Kanit] !text-[20px] !font-[400] flex items-center justify-center gap-2 ${
                selectedFocusArea === "ALL"
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-[#CCCCCC] hover:bg-black hover:text-white"
              }`}
            >
              <img
                src={DEFAULT_FOCUS_ICON}
                className="object-contain"
                alt="All"
              />
              All
            </button>
          </CarouselItem>

          {sortedAreas.map((area) => {
            const isSelected = selectedFocusArea === area;
            const iconSource = FOCUS_AREA_ICONS[area] || DEFAULT_FOCUS_ICON;

            return (
              <CarouselItem key={area} className="pl-3 md:pl-4 basis-auto">
                <button
                  type="button"
                  onClick={() => onFocusAreaSelect(area)}
                  className={`flex items-center gap-2 px-4 py-2 !text-[20px] !font-[Kanit] cursor-pointer !font-[400] rounded-[8px] border transition-colors whitespace-nowrap ${
                    isSelected
                      ? "bg-[#000] text-[#fff] border-[#CCCCCC]"
                      : "bg-white text-black border-[#CCCCCC] hover:bg-black hover:text-white"
                  }`}
                >
                  <img
                    src={iconSource}
                    alt={area}
                    className="object-contain"
                  />
                  {area}
                </button>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default FocusAreaFilters;

