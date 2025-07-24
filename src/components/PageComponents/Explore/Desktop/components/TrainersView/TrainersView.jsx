import React, { useState, useEffect } from "react";
import {
  getAllTrainers,
  getAllLocations,
  getToday,
} from "../../../../../../constants/UnUseExploreDataOld";
import TrainerCard from "../shared/TrainerCard";
import TrainerDetails from "../shared/TrainerDetails";
import { ArrowUpCircle, Check, ChevronDown } from "lucide-react";

function TrainersView() {
  const [selectedTab, setSelectedTab] = useState("All");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedTrainerIdx, setSelectedTrainerIdx] = useState(null);

  const allTrainers = getAllTrainers();
  const allLocations = getAllLocations();

  useEffect(() => {
    setSelectedTrainerIdx(null);
  }, [selectedTab, selectedLocation]);

  let filteredTrainers = allTrainers;
  if (selectedTab === "Alphabetical") {
    filteredTrainers = [...allTrainers].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  } else if (selectedTab === "Locations" && selectedLocation) {
    filteredTrainers = allTrainers.filter(
      (trainer) => trainer.location === selectedLocation
    );
  } else if (selectedTab === "New Trainers") {
    filteredTrainers = allTrainers.filter(
      (trainer) => trainer.joined === getToday()
    );
  }

  // 4 columns per row
  const columns = 4;
  const rows = [];
  for (let i = 0; i < filteredTrainers.length; i += columns) {
    rows.push(filteredTrainers.slice(i, i + columns));
  }

  return (
    <div className="pt-4 md:pt-6 px-4 md:px-0">
      {/* Filter Tabs */}
      {/* Mobile: Horizontal Scrollable Filters */}
      <div className="md:hidden mb-6">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4 py-2">
          <button
            className={`border border-[#CCCCCC] font-[Kanit] rounded-[8px] px-4 py-2 font-[300] leading-[20px] capitalize text-[16px] cursor-pointer outline-none transition-all duration-200 flex-shrink-0 ${
              selectedTab === "All"
                ? "bg-[#000] text-[#FFF]"
                : "bg-[#fff] text-[#000] hover:bg-gray-50"
            }`}
            onClick={() => {
              setSelectedTab("All");
              setSelectedLocation("");
            }}
          >
            All
          </button>
          <button
            className={`border border-[#CCCCCC] font-[Kanit] rounded-[8px] px-4 py-2 font-[300] leading-[20px] capitalize text-[16px] cursor-pointer outline-none transition-all duration-200 flex-shrink-0 ${
              selectedTab === "Alphabetical"
                ? "bg-[#000] text-[#FFF]"
                : "bg-[#fff] text-[#000] hover:bg-gray-50"
            }`}
            onClick={() => {
              setSelectedTab("Alphabetical");
              setSelectedLocation("");
            }}
          >
            Alphabetical (A-Z)
          </button>
          <div className="relative flex-shrink-0">
            <button
              className={`border border-[#CCCCCC] font-[Kanit] rounded-[8px] px-4 py-2 font-[300] leading-[20px] capitalize text-[16px] cursor-pointer outline-none transition-all duration-200 ${
                selectedTab === "Locations"
                  ? "bg-[#000] text-[#FFF]"
                  : "bg-[#fff] text-[#000] hover:bg-gray-50"
              }`}
              onClick={() => {
                setSelectedTab("Locations");
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
            {selectedTab === "Locations" && showLocationDropdown && (
              <div className="absolute top-12 left-0 bg-white rounded-lg border border-gray-200 shadow-lg z-10 min-w-[220px]">
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
                      setSelectedLocation(location);
                      setShowLocationDropdown(false);
                    }}
                  >
                    <div
                      className={`w-3 h-3 border-2 rounded flex items-center justify-center ${
                        selectedLocation === location
                          ? "bg-[#4AB04A] border-[#4AB04A]"
                          : "border-[#CCCCCC]"
                      }`}
                    >
                      {selectedLocation === location && (
                        <Check className="w-2 h-2 text-white" />
                      )}
                    </div>
                    <span className="text-[16px] font-[Kanit] font-[300] leading-[20px] capitalize">
                      {location}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <button
            className={`border border-[#CCCCCC] font-[Kanit] rounded-[8px] px-4 py-2 font-[300] leading-[20px] capitalize text-[16px] cursor-pointer outline-none transition-all duration-200 flex-shrink-0 ${
              selectedTab === "New Trainers"
                ? "bg-[#000] text-[#FFF]"
                : "bg-[#fff] text-[#000] hover:bg-gray-50"
            }`}
            onClick={() => {
              setSelectedTab("New Trainers");
              setSelectedLocation("");
            }}
          >
            New Trainers
          </button>
        </div>
      </div>

      {/* Desktop: Flex Wrap Filters */}
      <div className="hidden md:flex items-center mb-10">
        <button
          className={`border border-[#CCCCCC] font-[Kanit] rounded-[8px] px-7 py-3 font-[300] leading-[20px] capitalize text-[18px] cursor-pointer mr-3 outline-none transition-all duration-200 ${
            selectedTab === "All"
              ? "bg-[#000] text-[#FFF]"
              : "bg-[#fff] text-[#000] hover:bg-gray-50"
          }`}
          onClick={() => {
            setSelectedTab("All");
            setSelectedLocation("");
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
            setSelectedLocation("");
          }}
        >
          Alphabetical (A-Z)
        </button>
        <div className="relative">
          <button
            className={`border border-[#CCCCCC] font-[Kanit] rounded-[8px] px-7 py-3 font-[300] leading-[20px] capitalize text-[18px] cursor-pointer mr-3 outline-none transition-all duration-200  ${
              selectedTab === "Locations"
                ? "bg-[#000] text-[#FFF]"
                : "bg-[#fff] text-[#000] hover:bg-gray-50"
            }`}
            onClick={() => {
              setSelectedTab("Locations");
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
          {selectedTab === "Locations" && showLocationDropdown && (
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
                    setSelectedLocation(location);
                    setShowLocationDropdown(false);
                  }}
                >
                  <div
                    className={`w-4 h-4 border-2 rounded flex items-center justify-center ${
                      selectedLocation === location
                        ? "bg-[#4AB04A] border-[#4AB04A]"
                        : "border-[#CCCCCC]"
                    }`}
                  >
                    {selectedLocation === location && (
                      <Check className="w-3 h-3 text-white" />
                    )}
                  </div>
                  <span className="text-[18px] font-[Kanit] font-[300] leading-[20px] capitalize">
                    {location}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          className={`border border-[#CCCCCC] font-[Kanit] rounded-[8px] px-7 py-3 font-[300] leading-[20px] capitalize text-[18px] cursor-pointer mr-3 outline-none transition-all duration-200 ${
            selectedTab === "New Trainers"
              ? "bg-[#000] text-[#FFF]"
              : "bg-[#fff] text-[#000] hover:bg-gray-50"
          }`}
          onClick={() => {
            setSelectedTab("New Trainers");
            setSelectedLocation("");
          }}
        >
          New Trainers
        </button>
      </div>

      {/* Trainer Display */}
      <div className="w-full mb-8 md:mb-12">
        {filteredTrainers && filteredTrainers.length > 0 && (
          <>
            {/* Mobile: Trainer Carousel */}
            <div className="md:hidden bg-[#F6F6F6] py-6">
              <TrainerCard
                isCarousel={true}
                trainers={filteredTrainers}
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
                            trainer={filteredTrainers[selectedTrainerIdx]}
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
                    trainer={filteredTrainers[selectedTrainerIdx]}
                  />
                </div>
              )}
          </>
        )}

        {/* No Trainers Found */}
        {filteredTrainers && filteredTrainers.length === 0 && (
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
