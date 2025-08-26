import React, { useState, useEffect, useRef } from "react";
import {
  getAllTrainers,
  getAllLocations,
  getAllAreasOfFocus,
} from "../../../../../../constants/exploreDataWithTrainer";
import TrainerCard from "../shared/TrainerCard";
import TrainerDetails from "../shared/TrainerDetails";
import { ArrowUpCircle, Check, ChevronDown, X } from "lucide-react";

function TrainersView() {
  const [selectedTab, setSelectedTab] = useState("All");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showAreasDropdown, setShowAreasDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedAreasOfFocus, setSelectedAreasOfFocus] = useState([]);
  const [selectedTrainerIdx, setSelectedTrainerIdx] = useState(null);

  // Refs for dropdown containers
  const locationDropdownRef = useRef(null);
  const areasDropdownRef = useRef(null);

  const allTrainers = getAllTrainers();
  const allLocations = getAllLocations();
  const allAreasOfFocus = getAllAreasOfFocus();

  useEffect(() => {
    setSelectedTrainerIdx(null);
  }, [selectedTab, selectedLocation, selectedAreasOfFocus]);

  // Handle click outside dropdowns
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

  let filteredTrainers = allTrainers;

  // Apply multiple filters simultaneously
  if (selectedLocation) {
    filteredTrainers = filteredTrainers.filter(
      (trainer) => trainer.location === selectedLocation
    );
  }

  if (selectedAreasOfFocus.length > 0) {
    filteredTrainers = filteredTrainers.filter(
      (trainer) =>
        trainer.areas_of_focus &&
        selectedAreasOfFocus.some((selectedArea) =>
          trainer.areas_of_focus
            .toLowerCase()
            .includes(selectedArea.toLowerCase())
        )
    );
  }

  // Apply sorting if needed
  if (selectedTab === "Alphabetical") {
    filteredTrainers = [...filteredTrainers].sort((a, b) =>
      (a.trainerName || a.name).localeCompare(b.trainerName || b.name)
    );
  }

  // Transform trainer data for display
  const transformedTrainers = filteredTrainers.map(transformTrainerData);

  // 4 columns per row
  const columns = 4;
  const rows = [];
  for (let i = 0; i < transformedTrainers.length; i += columns) {
    rows.push(transformedTrainers.slice(i, i + columns));
  }

  return (
    <div className="pt-4 md:pt-2">
      {/* Filter Tabs */}
      {/* Mobile: Horizontal Scrollable Filters */}
      <div className="md:hidden mb-6">
        <div className="flex gap-1 overflow-x-auto scrollbar-hide py-2 relative">
          <button
            className={`border border-[#CCCCCC] font-[Kanit] rounded-[8px] px-3 py-2 font-[300] leading-[20px] capitalize text-[16px] cursor-pointer outline-none transition-all duration-200 flex-shrink-0 ${
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
          <button
            className={`border border-[#CCCCCC] font-[Kanit] rounded-[8px] px-2 py-2 font-[300] leading-[20px] capitalize text-[16px] cursor-pointer outline-none transition-all duration-200 flex-shrink-0 ${
              selectedTab === "Alphabetical"
                ? "bg-[#000] text-[#FFF]"
                : "bg-[#fff] text-[#000] hover:bg-gray-50"
            }`}
            onClick={() => {
              setSelectedTab("Alphabetical");
            }}
          >
            Alphabetical (A-Z)
          </button>
          <div className="relative flex-shrink-0" ref={locationDropdownRef}>
            <button
              className={`border border-[#CCCCCC] font-[Kanit] rounded-[8px] px-2 py-2 font-[300] leading-[20px] capitalize text-[16px] cursor-pointer outline-none transition-all duration-200 ${
                selectedLocation
                  ? "bg-[#000] text-[#FFF]"
                  : "bg-[#fff] text-[#000] hover:bg-gray-50"
              }`}
              onClick={() => {
                setShowLocationDropdown((v) => !v);
              }}
            >
              <div className="flex items-center gap-2">
                <span>Locations</span>
                <ChevronDown
                  className={`pt-1 text-gray-400 transition-transform duration-200 w-4 h-4 ${
                    showLocationDropdown ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </button>
            {showLocationDropdown && (
              <div className="absolute top-12 left-0 bg-white rounded-lg border border-gray-200 shadow-lg z-50 min-w-[220px] max-h-[300px] overflow-y-auto">
                <div
                  className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-gray-50 first:rounded-t-lg border-b border-gray-100"
                  onClick={() => {
                    setSelectedLocation("");
                    setShowLocationDropdown(false);
                  }}
                >
                  <div
                    className={`w-3 h-3 border-2 rounded flex items-center justify-center ${
                      !selectedLocation
                        ? "bg-[#4AB04A] border-[#4AB04A]"
                        : "border-[#CCCCCC]"
                    }`}
                  >
                    {!selectedLocation && (
                      <Check className="w-2 h-2 text-white" />
                    )}
                  </div>
                  <span className="text-black font-medium text-sm">
                    All Locations
                  </span>
                </div>

                {/* Individual Location Options */}
                {allLocations.map((location, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-gray-50 last:rounded-b-lg"
                    onClick={() => {
                      setSelectedLocation(location.name);
                      setShowLocationDropdown(false);
                    }}
                  >
                    <div
                      className={`w-3 h-3 border-2 rounded flex items-center justify-center ${
                        selectedLocation === location.name
                          ? "bg-[#4AB04A] border-[#4AB04A]"
                          : "border-[#CCCCCC]"
                      }`}
                    >
                      {selectedLocation === location.name && (
                        <Check className="w-2 h-2 text-white" />
                      )}
                    </div>
                    <span className="text-[16px] font-[Kanit] font-[300] leading-[20px] capitalize">
                      {location.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative flex-shrink-0" ref={areasDropdownRef}>
            <button
              className={`border border-[#CCCCCC] font-[Kanit] rounded-[8px] px-2 py-2 font-[300] leading-[20px] capitalize text-[16px] cursor-pointer outline-none transition-all duration-200 ${
                selectedAreasOfFocus.length > 0
                  ? "bg-[#000] text-[#FFF]"
                  : "bg-[#fff] text-[#000] hover:bg-gray-50"
              }`}
              onClick={() => {
                setShowAreasDropdown((v) => !v);
                setShowLocationDropdown(false);
              }}
            >
              <div className="flex items-center gap-2">
                <span>Areas of Focus</span>
                <ChevronDown
                  className={`pt-1 text-gray-400 transition-transform duration-200 w-4 h-4 ${
                    showAreasDropdown ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </button>
            {showAreasDropdown && (
              <div className="absolute top-12 left-0 bg-white rounded-lg border border-gray-200 shadow-lg z-100 min-w-[220px] h-[300px] overflow-y-auto">
                <div
                  className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-gray-50 first:rounded-t-lg border-b border-gray-100"
                  onClick={() => {
                    setSelectedAreasOfFocus([]);
                    setShowAreasDropdown(false);
                  }}
                >
                  <div
                    className={`w-3 h-3 border-2 rounded flex items-center justify-center ${
                      selectedAreasOfFocus.length === 0
                        ? "bg-[#4AB04A] border-[#4AB04A]"
                        : "border-[#CCCCCC]"
                    }`}
                  >
                    {selectedAreasOfFocus.length === 0 && (
                      <Check className="w-2 h-2 text-white" />
                    )}
                  </div>
                  <span className="text-black font-medium text-sm">
                    All Areas
                  </span>
                </div>

                {/* Individual Areas of Focus Options */}
                {allAreasOfFocus.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-gray-50 last:rounded-b-lg"
                    onClick={() => {
                      if (selectedAreasOfFocus.includes(area.name)) {
                        setSelectedAreasOfFocus(
                          selectedAreasOfFocus.filter((a) => a !== area.name)
                        );
                      } else {
                        setSelectedAreasOfFocus([
                          ...selectedAreasOfFocus,
                          area.name,
                        ]);
                      }
                    }}
                  >
                    <div
                      className={`w-3 h-3 border-2 rounded flex items-center justify-center ${
                        selectedAreasOfFocus.includes(area.name)
                          ? "bg-[#4AB04A] border-[#4AB04A]"
                          : "border-[#CCCCCC]"
                      }`}
                    >
                      {selectedAreasOfFocus.includes(area.name) && (
                        <Check className="w-2 h-2 text-white" />
                      )}
                    </div>
                    <span className="text-[16px] font-[Kanit] font-[300] leading-[20px] capitalize">
                      {area.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Selected Filters Display - Mobile */}
      <div className="md:hidden mb-4">
        <div className="flex flex-wrap gap-2">
          {selectedLocation && (
            <div className="flex items-center gap-2 bg-[#4AB04A] text-white px-3 py-1 rounded-full text-sm">
              <span className="font-[kanit]">{selectedLocation}</span>
              <button
                onClick={() => setSelectedLocation("")}
                className="cursor-pointer rounded-full p-1"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
          {selectedAreasOfFocus.map((area, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-[#4AB04A] text-white px-3 py-1 rounded-full text-sm"
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
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Flex Wrap Filters */}
      <div className="hidden md:flex items-center mb-10">
        <button
          className={`border border-[#CCCCCC] font-[Kanit] rounded-[8px] px-7 py-3 font-[300] leading-[20px] capitalize text-[18px] cursor-pointer mr-3 outline-none transition-all duration-200 ${
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
        <button
          className={`border border-[#CCCCCC] font-[Kanit] rounded-[8px] px-7 py-3 font-[300] leading-[20px] capitalize text-[18px] cursor-pointer mr-3 outline-none transition-all duration-200  ${
            selectedTab === "Alphabetical"
              ? "bg-[#000] text-[#FFF]"
              : "bg-[#fff] text-[#000] hover:bg-gray-50"
          }`}
          onClick={() => {
            setSelectedTab("Alphabetical");
          }}
        >
          Alphabetical (A-Z)
        </button>
        <div className="relative" ref={locationDropdownRef}>
          <button
            className={`border border-[#CCCCCC] font-[Kanit] rounded-[8px] px-7 py-3 font-[300] leading-[20px] capitalize text-[18px] cursor-pointer mr-3 outline-none transition-all duration-200  ${
              selectedLocation
                ? "bg-[#000] text-[#FFF]"
                : "bg-[#fff] text-[#000] hover:bg-gray-50"
            }`}
            onClick={() => {
              setShowLocationDropdown((v) => !v);
            }}
          >
            <div className="flex items-center gap-2">
              <span>Locations</span>
              <ChevronDown
                className={`pt-1 text-gray-400 transition-transform duration-200 w-5 h-5 ${
                  showLocationDropdown ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
          </button>
          {showLocationDropdown && (
            <div className="absolute top-12 left-0 bg-white rounded-lg border border-gray-200 shadow-lg z-10 min-w-[250px]">
              <div
                className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 first:rounded-t-lg border-b border-gray-100"
                onClick={() => {
                  setSelectedLocation("");
                  setShowLocationDropdown(false);
                }}
              >
                <div
                  className={`w-4 h-4 border-2 rounded flex items-center justify-center ${
                    !selectedLocation
                      ? "bg-[#4AB04A] border-[#4AB04A]"
                      : "border-[#CCCCCC]"
                  }`}
                >
                  {!selectedLocation && (
                    <Check className="w-3 h-3 text-white" />
                  )}
                </div>
                <span className="text-black font-medium text-base">
                  All Locations
                </span>
              </div>

              {/* Individual Location Options */}
              {allLocations.map((location, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 last:rounded-b-lg"
                  onClick={() => {
                    setSelectedLocation(location.name);
                    setShowLocationDropdown(false);
                  }}
                >
                  <div
                    className={`w-4 h-4 border-2 rounded flex items-center justify-center ${
                      selectedLocation === location.name
                        ? "bg-[#4AB04A] border-[#4AB04A]"
                        : "border-[#CCCCCC]"
                    }`}
                  >
                    {selectedLocation === location.name && (
                      <Check className="w-3 h-3 text-white" />
                    )}
                  </div>
                  <span className="text-[18px] font-[Kanit] font-[300] leading-[20px] capitalize">
                    {location.name}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="relative" ref={areasDropdownRef}>
          <button
            className={`border border-[#CCCCCC] font-[Kanit] rounded-[8px] px-7 py-3 font-[300] leading-[20px] capitalize text-[18px] cursor-pointer mr-3 outline-none transition-all duration-200 ${
              selectedAreasOfFocus.length > 0
                ? "bg-[#000] text-[#FFF]"
                : "bg-[#fff] text-[#000] hover:bg-gray-50"
            }`}
            onClick={() => {
              setShowAreasDropdown((v) => !v);
              setShowLocationDropdown(false);
            }}
          >
            <div className="flex items-center gap-2">
              <span>Areas of Focus</span>
              <ChevronDown
                className={`pt-1 text-gray-400 transition-transform duration-200 w-5 h-5 ${
                  showAreasDropdown ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
          </button>
          {showAreasDropdown && (
            <div className="absolute top-12 left-0 bg-white rounded-lg border border-gray-200 shadow-lg z-10 min-w-[250px] h-[300px] overflow-y-auto">
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

              {/* Individual Areas of Focus Options */}
              {allAreasOfFocus.map((area, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 last:rounded-b-lg"
                  onClick={() => {
                    if (selectedAreasOfFocus.includes(area.name)) {
                      setSelectedAreasOfFocus(
                        selectedAreasOfFocus.filter((a) => a !== area.name)
                      );
                    } else {
                      setSelectedAreasOfFocus([
                        ...selectedAreasOfFocus,
                        area.name,
                      ]);
                    }
                  }}
                >
                  <div
                    className={`w-4 h-4 border-2 rounded flex items-center justify-center ${
                      selectedAreasOfFocus.includes(area.name)
                        ? "bg-[#4AB04A] border-[#4AB04A]"
                        : "border-[#CCCCCC]"
                    }`}
                  >
                    {selectedAreasOfFocus.includes(area.name) && (
                      <Check className="w-3 h-3 text-white" />
                    )}
                  </div>
                  <span className="text-[18px] font-[Kanit] font-[300] leading-[20px] capitalize">
                    {area.name}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Selected Filters Display - Desktop */}
      <div className="hidden md:block mb-6">
        <div className="flex flex-wrap gap-3">
          {selectedLocation && (
            <div className="flex items-center gap-2 bg-[#4AB04A] text-white px-4 py-2 rounded-full text-base">
              <span>{selectedLocation}</span>
              <button
                onClick={() => setSelectedLocation("")}
                className="cursor-pointer rounded-full p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
          {selectedAreasOfFocus.map((area, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-[#4AB04A] text-white px-4 py-2 rounded-full text-base"
            >
              <span>{area}</span>
              <button
                onClick={() =>
                  setSelectedAreasOfFocus(
                    selectedAreasOfFocus.filter((_, i) => i !== index)
                  )
                }
                className="cursor-pointer rounded-full p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Trainer Display */}
      <div className="w-full mb-8 md:mb-12">
        {transformedTrainers && transformedTrainers.length > 0 && (
          <>
            {/* Mobile: Trainer Carousel */}
            <div className="md:hidden bg-[#F6F6F6] px-4 py-6 rounded-t-[5px]">
              <TrainerCard
                isCarousel={true}
                trainers={transformedTrainers}
                selectedTrainer={selectedTrainerIdx}
                onTrainerSelect={(index) => {
                  if (selectedTrainerIdx === index) {
                    setSelectedTrainerIdx(null);
                  } else {
                    setSelectedTrainerIdx(index);
                  }
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
        )}

        {/* No Trainers Found */}
        {transformedTrainers && transformedTrainers.length === 0 && (
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
