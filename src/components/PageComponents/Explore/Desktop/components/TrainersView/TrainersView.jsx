import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { useTrainerData } from "@/contexts/TrainerDataContext";
import {
  getAllAreasOfFocus,
  FRANCHISE_OPTIONS,
  FRANCHISE_ID_BY_NAME,
  TRAINER_ROLE_IDS,
} from "@/services/trainerApi";
import TrainerCard from "../shared/TrainerCard";
import TrainerDetails from "../shared/TrainerDetails";
import { Check, ChevronDown, X, ArrowUpRight } from "lucide-react";

function TrainersView() {
  const { trainers, loading, error, fetchTrainers } = useTrainerData();
  const [selectedTab, setSelectedTab] = useState("All");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showAreasDropdown, setShowAreasDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedAreasOfFocus, setSelectedAreasOfFocus] = useState([]);
  const [selectedTrainerIdx, setSelectedTrainerIdx] = useState(null);
  const [carouselCurrentIndex, setCarouselCurrentIndex] = useState(0);
  const navigationTimeoutRef = useRef(null);

  const locationDropdownRef = useRef(null);
  const areasDropdownRef = useRef(null);

  const allLocations = useMemo(
    () => FRANCHISE_OPTIONS.map((option) => option.name),
    []
  );
  const allAreasOfFocus = getAllAreasOfFocus(); // ✅ Now uses predefined list

  useEffect(() => {
    setSelectedTrainerIdx(null);
    setCarouselCurrentIndex(0);
  }, [selectedTab, selectedLocation, selectedAreasOfFocus]);

  useEffect(() => {
    const franchiseId = selectedLocation
      ? FRANCHISE_ID_BY_NAME[selectedLocation]
      : undefined;

    const areas = selectedAreasOfFocus.filter(Boolean);

    fetchTrainers({
      trainerRole: TRAINER_ROLE_IDS.PERSONAL_TRAINER,
      ...(franchiseId ? { franchise: franchiseId } : {}),
      ...(areas.length > 0 ? { areaOfFocus: areas } : {}),
    });
  }, [selectedLocation, selectedAreasOfFocus, fetchTrainers]);

  useEffect(() => {
    return () => {
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        locationDropdownRef.current &&
        !locationDropdownRef.current.contains(event.target)
      ) {
        setShowLocationDropdown(false);
      }
      if (
        areasDropdownRef.current &&
        !areasDropdownRef.current.contains(event.target)
      ) {
        setShowAreasDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSelectedTrainerIdx(null);
    setCarouselCurrentIndex(0);
  }, [trainers]);

  const transformTrainerData = (trainer) => {
    return {
      ...trainer,
      name: trainer.trainerName || trainer.name,
      title: trainer.specialty || trainer.role,
      about: trainer.bio,
      areasOfFocus: trainer.areas_of_focus
        ? trainer.areas_of_focus.split(", ")
        : [],
    };
  };

  const uniqueTrainers = useMemo(() => {
    const map = new Map();
    trainers.forEach((trainer) => {
      if (!map.has(trainer.id)) {
        map.set(trainer.id, trainer);
      }
    });
    return Array.from(map.values());
  }, [trainers]);

  let transformedTrainers = uniqueTrainers.map(transformTrainerData);

  if (selectedTab === "Alphabetical") {
    transformedTrainers = [...transformedTrainers].sort((a, b) =>
      (a.trainerName || a.name).localeCompare(b.trainerName || b.name)
    );
  }

  // 4 columns per row
  const columns = 4;
  const rows = [];
  for (let i = 0; i < transformedTrainers.length; i += columns) {
    rows.push(transformedTrainers.slice(i, i + columns));
  }

  return (
    <div className="pt-4 md:pt-2">
      {/* Match Me With Trainer Link */}
      <div className="flex justify-center mb-6 md:mb-8">
        <Link
          to="/match-me-with-a-trainer"
          className="inline-flex items-center gap-2 text-black font-bold text-base md:text-lg uppercase tracking-wide hover:text-gray-700 transition-colors duration-200 underline decoration-1 underline-offset-2"
        >
          MATCH ME WITH A TRAINER
          <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
        </Link>
      </div>

      {/* Responsive Filter Tabs */}
      <div className="mb-6">
        <div className="flex flex-row gap-1 md:gap-3 py-2 overflow-y-visible">
          {/* All Button */}
          <button
            className={`border border-[#CCCCCC] font-[Kanit] rounded-[8px] px-3 md:px-7 py-2 md:py-3 font-[300] leading-[20px] capitalize text-[14px] md:text-[18px] cursor-pointer outline-none transition-all duration-200 ${
              selectedTab === "All" &&
              !selectedLocation &&
              selectedAreasOfFocus.length === 0
                ? "bg-[#000] text-[#FFF]"
                : "bg-[#fff] text-[#000] hover:bg-gray-50"
            }`}
            onClick={() => {
              setSelectedTab("All");
              setSelectedLocation("");
              setSelectedAreasOfFocus([]);
            }}
          >
            All
          </button>

          {/* Location Dropdown */}
          <div className="relative" ref={locationDropdownRef}>
            <button
              className={`w-full border border-[#CCCCCC] font-[Kanit] rounded-[8px] px-3 md:px-7 py-2 md:py-3 font-[300] leading-[20px] capitalize text-[14px] md:text-[18px] cursor-pointer outline-none transition-all duration-200 ${
                selectedLocation
                  ? "bg-[#000] text-[#FFF]"
                  : "bg-[#fff] text-[#000] hover:bg-gray-50"
              }`}
              onClick={() => setShowLocationDropdown((v) => !v)}
            >
              <div className="flex items-center gap-1 md:gap-2">
                <span>Locations</span>
                <ChevronDown
                  className={`pt-1 text-gray-400 transition-transform duration-200 w-5 h-5 md:w-5 md:h-5 ${
                    showLocationDropdown ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </button>
            {showLocationDropdown && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-lg border border-gray-200 shadow-lg z-50 min-w-[250px] w-max">
                <div
                  className={`px-4 py-3 cursor-pointer first:rounded-t-lg border-b border-gray-100 ${
                    !selectedLocation
                      ? "bg-[#4AB04A] text-white"
                      : "hover:bg-gray-50 text-black"
                  }`}
                  onClick={() => {
                    setSelectedLocation("");
                    setShowLocationDropdown(false);
                  }}
                >
                  <span className="text-base font-medium">All Locations</span>
                </div>

                {allLocations.map((location, idx) => (
                  <div
                    key={idx}
                    className={`px-4 py-3 cursor-pointer last:rounded-b-lg ${
                      selectedLocation === location
                        ? "bg-[#4AB04A] text-white"
                        : "hover:bg-gray-50 text-black"
                    }`}
                    onClick={() => {
                      setSelectedLocation(location);
                      setShowLocationDropdown(false);
                    }}
                  >
                    <span className="text-[18px] font-[Kanit] font-[300] leading-[20px] capitalize">
                      {location?.toLowerCase()}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Areas of Focus Dropdown */}
          <div className="relative" ref={areasDropdownRef}>
            <button
              className={`w-full border border-[#CCCCCC] font-[Kanit] rounded-[8px] px-2 md:px-7 py-2 md:py-3 font-[300] leading-[20px] capitalize text-[14px] md:text-[18px] cursor-pointer outline-none transition-all duration-200 ${
                selectedAreasOfFocus.length > 0
                  ? "bg-[#000] text-[#FFF]"
                  : "bg-[#fff] text-[#000] hover:bg-gray-50"
              }`}
              onClick={() => setShowAreasDropdown((v) => !v)}
            >
              <div className="flex items-center gap-1 md:gap-2">
                <span>Areas of Focus</span>
                <ChevronDown
                  className={`pt-1 text-gray-400 transition-transform duration-200 w-5 h-5 md:w-5 md:h-5 ${
                    showAreasDropdown ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </button>
            {showAreasDropdown && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-lg border border-gray-200 shadow-lg z-50 max-w-[230px] md:max-w-[320px] w-max h-[300px] overflow-y-scroll scrollbar-hide">
                <div
                  className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 first:rounded-t-lg border-b border-gray-100"
                  onClick={() => {
                    setSelectedAreasOfFocus([]);
                    setShowAreasDropdown(false);
                  }}
                >
                  <div
                    className={`w-4 h-4 border-2 rounded flex items-center justify-center ${
                      selectedAreasOfFocus.length === 0
                        ? "bg-[#4AB04A] border-[#4AB04A]"
                        : "border-[#CCCCCC]"
                    }`}
                  >
                    {selectedAreasOfFocus.length === 0 && (
                      <Check className="w-3 h-3 text-white" />
                    )}
                  </div>
                  <span className="text-black font-medium text-base">
                    All Areas
                  </span>
                </div>

                {allAreasOfFocus.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 last:rounded-b-lg"
                    onClick={() => {
                      if (selectedAreasOfFocus.includes(area)) {
                        setSelectedAreasOfFocus(
                          selectedAreasOfFocus.filter((a) => a !== area)
                        );
                      } else {
                        setSelectedAreasOfFocus([
                          ...selectedAreasOfFocus,
                          area,
                        ]);
                      }
                    }}
                  >
                    <div
                      className={`w-4 h-4 border-2 rounded flex items-center justify-center ${
                        selectedAreasOfFocus.includes(area)
                          ? "bg-[#4AB04A] border-[#4AB04A]"
                          : "border-[#CCCCCC]"
                      }`}
                    >
                      {selectedAreasOfFocus.includes(area) && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <span className="text-[18px] font-[Kanit] font-[300] leading-[20px] capitalize">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Selected Filters Display */}
      <div className="mb-4 md:mb-6">
        <div className="flex flex-wrap gap-2 md:gap-3">
          {selectedLocation && (
            <div className="flex items-center gap-2 bg-[#4AB04A] text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-sm md:text-base">
              <span className="font-[kanit]">{selectedLocation}</span>
              <button
                onClick={() => setSelectedLocation("")}
                className="cursor-pointer rounded-full p-1"
              >
                <X className="w-3 h-3 md:w-4 md:h-4" />
              </button>
            </div>
          )}
          {selectedAreasOfFocus.map((area, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-[#fff] md:bg-[#fff] text-[#000] md:text-[#000] border-2 md:border-2 border-[#000] px-3 md:px-4 py-1 md:py-2 rounded-full text-sm md:text-base"
            >
              <span className="font-[kanit]">{area}</span>
              <button
                onClick={() =>
                  setSelectedAreasOfFocus(
                    selectedAreasOfFocus.filter((_, i) => i !== index)
                  )
                }
                className="cursor-pointer rounded-full p-1"
              >
                <X className="w-3 h-3 md:w-4 md:h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Trainer Display */}
      <div className="w-full mb-8 md:mb-12">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mb-4"></div>
              <p className="text-gray-600 text-base md:text-lg">Loading personal trainers...</p>
            </div>
          </div>
        ) : error ? (
          <div className="text-center text-red-600 py-6 md:py-8 px-4 md:px-0">
            <p className="text-base md:text-lg font-semibold mb-2">Failed to load trainers.</p>
            <p className="text-sm md:text-base">{error}</p>
          </div>
        ) : transformedTrainers && transformedTrainers.length > 0 ? (
          <>
            {/* Mobile: Trainer Carousel */}
            <div className="md:hidden bg-[#F6F6F6] px-4 py-6 rounded-t-[5px]">
              <TrainerCard
                isCarousel={true}
                trainers={transformedTrainers}
                selectedTrainer={selectedTrainerIdx}
                currentIndex={carouselCurrentIndex}
                onTrainerSelect={(index) => {
                  if (selectedTrainerIdx === index) {
                    setSelectedTrainerIdx(null);
                  } else {
                    setSelectedTrainerIdx(index);
                  }
                }}
                onCarouselNavigate={(newIndex) => {
                  if (navigationTimeoutRef.current) {
                    clearTimeout(navigationTimeoutRef.current);
                  }

                  navigationTimeoutRef.current = setTimeout(() => {
                    setCarouselCurrentIndex(newIndex);
                    setSelectedTrainerIdx(null);
                  }, 100);
                }}
                onSwipeDetected={() => {
                  setSelectedTrainerIdx(null);
                }}
              />
            </div>

            {/* Desktop: Trainer Grid */}
            <div className="hidden md:block">
              {rows.map((row, rowIdx) => {
                const startIdx = rowIdx * columns;

                return (
                  <div key={rowIdx} className="">
                    <div className="flex gap-6 flex-wrap bg-[#F6F6F6] px-12 pt-12">
                      {row.map((trainer, idx) => {
                        const globalIdx = startIdx + idx;

                        return (
                          <div
                            key={globalIdx}
                            className="relative mb-3 transition-all duration-300 ease-in-out transform hover:scale-105"
                          >
                            <TrainerCard
                              trainer={trainer}
                              selected={selectedTrainerIdx === globalIdx}
                              onClick={() => {
                                if (selectedTrainerIdx === globalIdx) {
                                  setSelectedTrainerIdx(null);
                                } else {
                                  setSelectedTrainerIdx(globalIdx);
                                }
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>

                    {selectedTrainerIdx !== null &&
                      Math.floor(selectedTrainerIdx / columns) === rowIdx && (
                        <div className="w-full bg-[#F6F6F6] px-12 py-6 transition-all duration-300 ease-in-out">
                          <TrainerDetails
                            trainer={transformedTrainers[selectedTrainerIdx]}
                          />
                        </div>
                      )}
                  </div>
                );
              })}
            </div>

            {/* Trainer Details for Mobile */}
            {selectedTrainerIdx !== null &&
              selectedTrainerIdx !== undefined && (
                <div className="md:hidden w-full bg-[#F6F6F6] px-4 py-6 transition-all duration-300 ease-in-out">
                  <TrainerDetails
                    trainer={transformedTrainers[selectedTrainerIdx]}
                  />
                </div>
              )}
          </>
        ) : (
          <div className="text-center text-gray-500 py-6 md:py-8 px-4 md:px-0 transition-all duration-300 ease-in-out">
            <p className="text-base md:text-lg font-medium mb-2">
              No trainers found for the selected criteria.
            </p>
            <p className="text-sm md:text-base">
              Try selecting different filters or contact us for availability.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TrainersView;
