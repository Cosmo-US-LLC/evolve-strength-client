import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  getDataByCategory,
  getAllLocations,
  getTrainersForWellnessService,
} from "../../../../../../constants/exploreDataWithTrainer";
import TrainerCard from "../shared/TrainerCard";
import TrainerDetails from "../shared/TrainerDetails";
import { ChevronDown, X, Check, ArrowUpRight } from "lucide-react";

function WellnessView() {
  const [selectedTrainerIdx, setSelectedTrainerIdx] = useState(null);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(""); // Start with no location selected to show all trainers
  const [selectedServiceIds, setSelectedServiceIds] = useState([]); // Multi-select services
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0); // For mobile carousel navigation

  const dropdownRef = useRef(null);
  const serviceDropdownRef = useRef(null);

  const wellnessData = getDataByCategory("WELLNESS")?.data || [];
  const allLocations = getAllLocations();

  // Handle click outside dropdowns to close them
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLocationDropdown(false);
      }
      if (
        serviceDropdownRef.current &&
        !serviceDropdownRef.current.contains(event.target)
      ) {
        setShowServiceDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSelectedTrainerIdx(null);
  }, [selectedServiceIds, selectedLocation]);

  // Close details when carousel navigation changes
  useEffect(() => {
    setSelectedTrainerIdx(null);
  }, [currentCarouselIndex]);

  // Helper function to transform trainer data for display
  const transformTrainerData = (trainer) => {
    return {
      ...trainer,
      name: trainer.trainerName || trainer.name,
      title: trainer.role,
      about: trainer.bio,
      areasOfFocus: trainer.areas_of_focus
        ? trainer.areas_of_focus.split(", ")
        : [],
    };
  };

  const computeFilteredTrainers = () => {
    const activeServiceIds =
      selectedServiceIds.length > 0
        ? selectedServiceIds
        : wellnessData.map((s) => s.id);

    let list = activeServiceIds.flatMap(
      (sid) => getTrainersForWellnessService(sid) || []
    );
    if (selectedLocation) {
      list = list.filter((t) => t.location && t.location === selectedLocation);
    }

    return list.map(transformTrainerData);
  };

  const transformedTrainers = computeFilteredTrainers();
  const columns = 4;
  const rows = [];
  for (let i = 0; i < transformedTrainers.length; i += columns) {
    rows.push(transformedTrainers.slice(i, i + columns));
  }

  return (
    <div className="w-full bg-white pt-4 md:pt-6 pb-8 md:pb-16">
      {/* Match Me With Wellness Expert Link */}
      <div className="flex justify-center mb-6 md:mb-8">
        <Link
          to="/match-me-with-a-wellness-expert"
          className="inline-flex items-center gap-2 text-black font-bold text-base md:text-lg uppercase tracking-wide hover:text-gray-700 transition-colors duration-200 underline decoration-1 underline-offset-2"
        >
          MATCH ME WITH A WELLNESS EXPERT
          <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
        </Link>
      </div>

      {/* Services + Location Filters */}
      <div className="mb-6 md:mb-8 ">
        <div className="flex pb-6 items-left gap-1 md:gap-4">
          {/* All Tab */}
          <button
            className={`border border-[#CCCCCC] font-[Kanit] rounded-[8px] px-3 md:px-7 py-2 md:py-3 font-[300] leading-[20px] capitalize text-[16px] md:text-[18px] cursor-pointer outline-none transition-all duration-200 flex-shrink-0 ${
              !selectedLocation && selectedServiceIds.length === 0
                ? "bg-[#000] text-[#FFF]"
                : "bg-[#fff] text-[#000] hover:bg-gray-50"
            }`}
            onClick={() => {
              setSelectedLocation("");
              setSelectedServiceIds([]);
            }}
          >
            All
          </button>

          {/* Location Filter */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="bg-[#fff] rounded-[8px] px-3 md:px-4 py-2 md:py-3 border border-[#CCCCCC] flex items-center justify-between"
              onClick={() => setShowLocationDropdown(!showLocationDropdown)}
            >
              <div className="flex items-center gap-2">
                <span className="text-black font-medium text-sm md:text-base">
                  Locations
                </span>
                <span className="text-green-600 font-medium text-sm md:text-base">
                  ({selectedLocation === "" ? "ALL" : "1"})
                </span>
              </div>
              <ChevronDown
                className={`pt-1 text-gray-400 transition-transform duration-200 w-4 h-4 md:w-5 md:h-5 ${
                  showLocationDropdown ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {showLocationDropdown && (
              <div className="absolute top-14 left-0 bg-white rounded-lg border border-gray-200 shadow-lg z-50 min-w-[220px] md:min-w-[250px] max-h-[300px] overflow-y-auto">
                <div
                  className={`px-3 md:px-4 py-2 md:py-3 cursor-pointer first:rounded-t-lg border-b border-gray-100 ${
                    selectedLocation === ""
                      ? "bg-[#4AB04A] text-white"
                      : "hover:bg-gray-50 text-black"
                  }`}
                  onClick={() => {
                    setSelectedLocation("");
                    setShowLocationDropdown(false);
                  }}
                >
                  <span className="text-[#000] text-[16px] md:text-[18px] font-[Kanit] font-[300] leading-[20px] capitalize">
                    All Locations
                  </span>
                </div>

                {allLocations.map((location, idx) => (
                  <div
                    key={idx}
                    className={`px-3 md:px-4 py-2 md:py-3 cursor-pointer last:rounded-b-lg ${
                      selectedLocation === location.name
                        ? "bg-[#4AB04A] text-white"
                        : "hover:bg-gray-50 text-black"
                    }`}
                    onClick={() => {
                      setSelectedLocation(location.name);
                      setShowLocationDropdown(false);
                    }}
                  >
                    <span className="text-[16px] md:text-[18px] font-[Kanit] font-[300] leading-[20px] capitalize">
                      {location.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="relative" ref={serviceDropdownRef}>
            <button
              className={`bg-[#fff] rounded-[8px] px-3 md:px-4 py-2 md:py-3 border border-[#CCCCCC] flex items-center justify-between ${
                selectedServiceIds.length > 0 ? "bg-[#000] text-[#FFF]" : ""
              }`}
              onClick={() => setShowServiceDropdown(!showServiceDropdown)}
            >
              <div className="flex items-center gap-2">
                <span className="text-black font-medium text-sm md:text-base">
                  Services
                </span>
                <span
                  className={`font-medium text-sm md:text-base ${
                    selectedServiceIds.length === 0
                      ? "text-green-600"
                      : "text-green-600"
                  }`}
                >
                  (
                  {selectedServiceIds.length === 0
                    ? "ALL"
                    : selectedServiceIds.length}
                  )
                </span>
              </div>
              <ChevronDown
                className={`pt-1 text-gray-400 transition-transform duration-200 w-4 h-4 md:w-5 md:h-5 ${
                  showServiceDropdown ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {showServiceDropdown && (
              <div className="absolute top-14 md:left-0 -left-18 bg-white rounded-lg border border-gray-200 shadow-lg z-50 min-w-[220px] md:min-w-[260px] max-h-[300px] overflow-y-auto">
                <div
                  className="flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 cursor-pointer hover:bg-gray-50 first:rounded-t-lg border-b border-gray-100"
                  onClick={() => {
                    setSelectedServiceIds([]);
                    setShowServiceDropdown(false);
                  }}
                >
                  <div
                    className={`w-4 h-4 border-2 rounded flex items-center justify-center ${
                      selectedServiceIds.length === 0
                        ? "bg-[#4AB04A] border-[#4AB04A]"
                        : "border-[#CCCCCC]"
                    }`}
                  >
                    {selectedServiceIds.length === 0 && (
                      <Check className="w-3 h-3 text-white" />
                    )}
                  </div>
                  <span className="text-black font-medium text-base">
                    All Services
                  </span>
                </div>

                {wellnessData.map((service) => {
                  const checked = selectedServiceIds.includes(service.id);
                  return (
                    <div
                      key={service.id}
                      className="flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 cursor-pointer hover:bg-gray-50 last:rounded-b-lg"
                      onClick={() => {
                        setSelectedServiceIds((prev) =>
                          checked
                            ? prev.filter((id) => id !== service.id)
                            : [...prev, service.id]
                        );
                      }}
                    >
                      <div
                        className={`w-4 h-4 border-2 rounded flex items-center justify-center ${
                          checked
                            ? "bg-[#4AB04A] border-[#4AB04A]"
                            : "border-[#CCCCCC]"
                        }`}
                      >
                        {checked && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span className="text-[16px] md:text-[18px] font-[Kanit] font-[300] leading-[20px] capitalize">
                        {service.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Selected Filters Display */}
        </div>

        {(selectedLocation || selectedServiceIds.length > 0) && (
          <div className="mt-2 mb-8">
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
              {selectedServiceIds.map((sid) => {
                const s = wellnessData.find((w) => w.id === sid);
                if (!s) return null;
                return (
                  <div
                    key={sid}
                    className="flex items-center gap-2 bg-[#fff] text-[#000] border-2 border-[#000] px-3 md:px-4 py-1 md:py-2 rounded-full text-sm md:text-base"
                  >
                    <span>{s.name}</span>
                    <button
                      onClick={() =>
                        setSelectedServiceIds((prev) =>
                          prev.filter((id) => id !== sid)
                        )
                      }
                      className="cursor-pointer rounded-full p-1"
                    >
                      <X className="w-3 h-3 md:w-4 md:h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Trainer Display */}
        <div className="w-full">
          {transformedTrainers && transformedTrainers.length > 0 && (
            <>
              {/* Mobile: Carousel */}
              <div className="md:hidden bg-[#F6F6F6] px-4 py-6 rounded-t-[5px]">
                <TrainerCard
                  isCarousel={true}
                  trainers={transformedTrainers}
                  selectedTrainer={selectedTrainerIdx}
                  currentIndex={currentCarouselIndex}
                  onCarouselNavigate={setCurrentCarouselIndex}
                  onTrainerSelect={(index) => {
                    if (selectedTrainerIdx === index) {
                      setSelectedTrainerIdx(null);
                    } else {
                      setSelectedTrainerIdx(index);
                    }
                  }}
                />
              </div>

              {/* Desktop: Grid */}
              <div className="hidden md:block">
                {rows.map((row, rowIdx) => {
                  const startIdx = rowIdx * columns;

                  return (
                    <div key={rowIdx}>
                      <div className="flex gap-6 flex-wrap bg-[#F6F6F6] px-12 pt-12">
                        {row.map((trainer, idx) => {
                          const globalIdx = startIdx + idx;

                          return (
                            <div
                              key={globalIdx}
                              className="mb-3 transition-all duration-300 ease-in-out transform hover:scale-105"
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

              {/* Mobile details */}
              {selectedTrainerIdx !== null &&
                transformedTrainers[selectedTrainerIdx] && (
                  <div className="md:hidden w-full bg-[#F6F6F6] px-4 py-6 transition-all duration-300 ease-in-out">
                    <TrainerDetails
                      trainer={transformedTrainers[selectedTrainerIdx]}
                    />
                  </div>
                )}
            </>
          )}

          {transformedTrainers && transformedTrainers.length === 0 && (
            <div className="text-center text-gray-500 py-6 md:py-8 px-4 md:px-0 transition-all duration-300 ease-in-out">
              <p className="text-base md:text-lg font-medium mb-2">
                No trainers available for the selected filters.
              </p>
              <p className="text-sm md:text-base">
                Try selecting different filters or contact us for availability.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WellnessView;
