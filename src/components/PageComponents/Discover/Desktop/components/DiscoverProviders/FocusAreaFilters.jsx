import React, { useState, useEffect, useRef } from "react";
import { getAllAreasOfFocus } from "@/services/trainerApi";
import { X } from "lucide-react";

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
  selectedFocusAreas,
  onFocusAreaSelect,
  onResetFilters,
  showSidebar = true,
  showChips = false,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [tempSelectedAreas, setTempSelectedAreas] = useState([]);
  const modalRef = useRef(null);

  const allAreasOfFocus = getAllAreasOfFocus();
  const sortedAreas = [...allAreasOfFocus].sort((a, b) => a.localeCompare(b));

  useEffect(() => {
    setTempSelectedAreas(selectedFocusAreas || []);
  }, [selectedFocusAreas]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  const handleToggleArea = (area) => {
    setTempSelectedAreas((prev) => {
      if (prev.includes(area)) {
        return prev.filter((a) => a !== area);
      } else {
        return [...prev, area];
      }
    });
  };

  const handleApplyFilters = () => {
    onFocusAreaSelect(tempSelectedAreas);
    setShowModal(false);
  };

  const handleResetFilters = () => {
    setTempSelectedAreas([]);
    onFocusAreaSelect([]);
    setShowModal(false);
  };

  const handleRemoveFilter = (area) => {
    const newAreas = selectedFocusAreas.filter((a) => a !== area);
    onFocusAreaSelect(newAreas);
  };

  const handleSidebarFilterClick = (area) => {
    if (selectedFocusAreas.includes(area)) {
      handleRemoveFilter(area);
    } else {
      onFocusAreaSelect([...selectedFocusAreas, area]);
    }
  };

  // Render only chips if showChips is true
  if (showChips) {
    const visibleFilters = selectedFocusAreas.slice(0, 3);
    const remainingCount = selectedFocusAreas.length - 3;
    const hasFilters = selectedFocusAreas.length > 0;

    return (
      <>
        <div className="mb-6 flex flex-wrap items-center gap-2">
          {hasFilters && (
            <>
              {visibleFilters.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#CCCCCC] rounded-[8px]"
                >
                  <span className="text-[14px] md:text-[20px] cursor-pointer font-[Kanit] font-[300] text-black capitalize">
                    {area}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveFilter(area)}
                    className="text-black hover:text-gray-600 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {remainingCount > 0 && (
                <div className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#CCCCCC] rounded-[8px]">
                  <span className="text-[14px] md:text-[20px] font-[Kanit] font-[300] text-black">
                    +{remainingCount} more
                  </span>
                </div>
              )}
            </>
          )}
          <button
            type="button"
            onClick={() => {
              onFocusAreaSelect([]);
              if (onResetFilters) onResetFilters();
            }}
            disabled={!hasFilters}
            className={`ml-auto px-4 py-2 rounded-[8px] text-[14px] md:text-[20px] font-[Kanit] font-[300] transition-colors uppercase ${
              hasFilters
                ? "!bg-[#000] cursor-pointer text-white hover:bg-gray-800"
                : "bg-[#e5e5e5] cursor-not-allowed text-black"
            }`}
          >
            RESET FILTER
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Sidebar */}
      {showSidebar && (
        <div className="sticky top-22 bg-white rounded-[8px] border border-[#CCCCCC] p-4 flex flex-col h-[calc(100vh-90px)]">
          <h3 className="text-[16px] md:text-[18px] font-[Kanit] font-[500] text-black mb-4 uppercase flex-shrink-0">
            FILTER BY GOAL
          </h3>
          
          <div className="space-y-2 mb-4 flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {sortedAreas.map((area) => {
              const iconSource = FOCUS_AREA_ICONS[area] || DEFAULT_FOCUS_ICON;
              const isSelected = selectedFocusAreas.includes(area);

              return (
                <button
                  key={area}
                  type="button"
                  onClick={() => handleSidebarFilterClick(area)}
                  className={`w-full flex items-center cursor-pointer gap-3 px-3 py-2.5 rounded-[8px] border transition-all ${
                    isSelected
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-[#CCCCCC] hover:border-[#4AB04A]"
                  }`}
                >
                  <img
                    src={iconSource}
                    alt={area}
                    className={`object-contain flex-shrink-0 ${
                      isSelected ? "" : ""
                    }`}
                  />
                  <span className="text-[14px] md:text-[20px] font-[Kanit] font-[300] text-left capitalize flex-1">
                    {area}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="w-full px-4 py-3 cursor-pointer bg-[#4AB04A] text-white rounded-[8px] font-[Kanit] font-[400] text-[14px] md:text-[20px] hover:bg-[#3a8f3a] transition-colors flex-shrink-0"
          >
            BROWSE ALL FILTERS
          </button>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 bg-opacity-10 z-50 flex items-center justify-center p-4">
          <div
            ref={modalRef}
            className="bg-white rounded-lg w-full max-h-[90vh] py-8 px-6 max-w-[1840px] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className=" bg-white px-6 py-4 flex items-center justify-between z-10">
              <div className="relative w-full">
                <h2 className="text-center text-2xl md:text-[40px] font-[600] !font-[Kanit] text-black mb-2">
                  CHOOSE YOUR TRAINER
                </h2>
                <p className="text-sm text-center md:text-[24px] font-[Kanit] font-[300] max-w-[690px] mx-auto text-gray-600">
                  Easily filter through a diverse range of expert trainers by
                  category to find the perfect match for your fitness journey.
                </p>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="text-black absolute top-4 right-4 hover:text-gray-600 transition-colors ml-4"
              >
                <X className="w-6 h-6" />
              </button>
              </div>
            </div>

            {/* Filter Grid */}
            <div className="p-6">
              <div className="flex flex-wrap gap-3 md:gap-4">
                {sortedAreas.map((area) => {
                  const iconSource = FOCUS_AREA_ICONS[area] || DEFAULT_FOCUS_ICON;
                  const isSelected = tempSelectedAreas.includes(area);

                  return (
                    <button
                      key={area}
                      type="button"
                      onClick={() => handleToggleArea(area)}
                      className={`flex items-center cursor-pointer justify-center  gap-2 p-4 rounded-[8px] border transition-all  ${
                        isSelected
                          ? "bg-black text-white border-black border-2"
                          : "bg-white text-[#4AB04A] border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <img
                        src={iconSource}
                        alt={area}
                        className={`w-8 h-8 md:w-10 md:h-10 object-contain ${
                          isSelected ? "" : ""
                        }`}
                      />
                      <span className={`text-[12px] md:text-[20px] font-[Kanit] !whitespace-nowrap font-[400] text-center capitalize ${
                        isSelected ? "text-white" : "text-[#000]"
                      }`}>
                        {area}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Modal Footer */}
            <div className=" bg-white  px-6 py-4 flex items-center justify-start gap-4">
              <button
                type="button"
                onClick={handleApplyFilters}
                className="px-6 py-3 bg-[#4AB04A] border border-[#4AB04A] cursor-pointer text-white rounded-[8px] text-[14px] md:text-[16px] font-[Kanit] font-[400] hover:bg-[#3a8f3a] transition-colors"
              >
                APPLY FILTERS
                {tempSelectedAreas.length > 0 && ` (${tempSelectedAreas.length} selected)`}
              </button>
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-6 py-3 bg-white border-2 border-black cursor-pointer rounded-[8px] text-[14px] md:text-[16px] font-[Kanit] font-[400] text-black hover:bg-gray-50 transition-colors"
              >
                RESET FILTERS
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FocusAreaFilters;
