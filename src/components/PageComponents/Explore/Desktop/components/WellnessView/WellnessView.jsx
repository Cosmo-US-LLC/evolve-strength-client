import React, { useState } from "react";
import {
  getDataByCategory,
  getAllLocations,
} from "../../../../../../constants/UnUseExploreDataOld";
import TrainerCard from "../shared/TrainerCard";
import TrainerDetails from "../shared/TrainerDetails";
import {
  ArrowUpCircle,
  Check,
  ArrowLeft,
  ChevronDown,
  CircleChevronDown,
} from "lucide-react";

function WellnessView() {
  const [expanded, setExpanded] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedTrainer, setSelectedTrainer] = useState({}); // { [serviceName]: trainerIdx }
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState([]); // Start with no locations selected to show all trainers

  const wellnessData = getDataByCategory("WELLNESS")?.data || [];
  const allLocations = getAllLocations();

  const handleToggle = (serviceName) => {
    setExpanded(expanded === serviceName ? null : serviceName);
    setSelectedService(serviceName);
  };

  const handleLocationToggle = (location) => {
    setSelectedLocations((prev) => {
      if (prev.includes(location)) {
        return prev.filter((loc) => loc !== location);
      } else {
        return [...prev, location];
      }
    });
  };

  const getFilteredTrainers = (service) => {
    if (!service.trainers) return [];

    if (selectedLocations.length === 0) return service.trainers;

    return service.trainers.filter(
      (trainer) =>
        trainer.location && selectedLocations.includes(trainer.location)
    );
  };

  return (
    <div className="w-full bg-white pt-4 md:pt-6 pb-8 md:pb-16">
      {/* Service List */}
      <div className="space-y-0">
        {wellnessData.map((service, index) => {
          const isOpen = expanded === service.name;
          const isSelected = selectedService === service.name;
          const selectedIdx = selectedTrainer[service.name];
          const filteredTrainers = getFilteredTrainers(service);

          return (
            <div key={service.name}>
              {/* Service Header */}
              <div
                className={`
                  flex items-center justify-between py-4 md:py-5 cursor-pointer border-b border-gray-200 bg-white px-4 md:px-0
                  ${isSelected ? "bg-green-50" : "bg-[#fff]"}
                  ${index === 0 ? "border-t border-[#CCCCCC]" : ""}
                  hover:bg-gray-50 transition-all duration-300 ease-in-out
                  `}
                onClick={() => handleToggle(service.name)}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  {service.icon && (
                    <img
                      src={service.icon}
                      alt={service.name}
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                  )}
                  <span className="text-[#000] text-[18px] md:text-[24px] font-[600] leading-[20px] font-[kanit] uppercase transition-colors duration-300">
                    {service.name}
                  </span>
                  <CircleChevronDown
                    className={`w-5 h-5 md:w-6 md:h-6 text-gray-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
                <button
                  className="uppercase text-[16px] md:text-[20px] font-[400] leading-[20px] font-[kanit] text-[#4AB04A] hover:text-[#000] underline transition-colors duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  JOIN NOW
                </button>
              </div>

              {isOpen && (
                <div className="py-4 md:py-6 bg-white px-4 md:px-0">
                  <div className="relative mb-4 md:mb-6">
                    <button
                      className="bg-[#fff] rounded-[8px] px-3 md:px-4 py-2 md:py-3 border border-[#CCCCCC] flex items-center justify-between min-w-[180px] md:min-w-[200px]"
                      onClick={() =>
                        setShowLocationDropdown(!showLocationDropdown)
                      }
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-black font-medium text-sm md:text-base">
                          {selectedLocations.length === 0
                            ? "All Locations"
                            : "Locations"}
                        </span>
                        <span className="text-green-600 font-medium text-sm md:text-base">
                          (
                          {selectedLocations.length === 0
                            ? "ALL"
                            : selectedLocations.length
                                .toString()
                                .padStart(2, "0")}
                          )
                        </span>
                      </div>
                      <ChevronDown
                        className={`pt-1 text-gray-400 transition-transform duration-200 w-4 h-4 md:w-5 md:h-5 ${
                          showLocationDropdown ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>

                    {showLocationDropdown && (
                      <div className="absolute top-full left-0 mt-2 bg-white rounded-lg border border-gray-200 shadow-lg z-10 min-w-[220px] md:min-w-[250px]">
                        <div
                          className="flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 cursor-pointer hover:bg-gray-50 first:rounded-t-lg border-b border-gray-100"
                          onClick={() => setSelectedLocations([])}
                        >
                          <div
                            className={`w-3 h-3 md:w-4 md:h-4 border-2 rounded flex items-center justify-center ${
                              selectedLocations.length === 0
                                ? "bg-[#4AB04A] border-[#4AB04A]"
                                : "border-[#CCCCCC]"
                            }`}
                          >
                            {selectedLocations.length === 0 && (
                              <Check className="w-2 h-2 md:w-3 md:h-3 text-white" />
                            )}
                          </div>
                          <span className="text-[#000] text-[16px] md:text-[18px] font-[Kanit] font-[300] leading-[20px] capitalize">
                            All Locations
                          </span>
                        </div>

                        {allLocations.map((location, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 cursor-pointer hover:bg-gray-50 last:rounded-b-lg"
                            onClick={() => handleLocationToggle(location)}
                          >
                            <div
                              className={`w-3 h-3 md:w-4 md:h-4 border-2 rounded flex items-center justify-center ${
                                selectedLocations.includes(location)
                                  ? "bg-green-600 border-green-600"
                                  : "border-gray-300"
                              }`}
                            >
                              {selectedLocations.includes(location) && (
                                <Check className="w-2 h-2 md:w-3 md:h-3 text-white" />
                              )}
                            </div>
                            <span className="text-[16px] md:text-[18px] font-[Kanit] font-[300] leading-[20px] capitalize">
                              {location}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {filteredTrainers && filteredTrainers.length > 0 && (
                    <>
                      {/* Mobile: Trainer Carousel */}
                      <div className="md:hidden bg-[#F6F6F6] py-6">
                        <TrainerCard
                          isCarousel={true}
                          trainers={filteredTrainers}
                          selectedTrainer={selectedIdx}
                          onTrainerSelect={(index) => {
                            if (selectedIdx === index) {
                              setSelectedTrainer((prev) => ({
                                ...prev,
                                [service.name]: null,
                              }));
                            } else {
                              setSelectedTrainer((prev) => ({
                                ...prev,
                                [service.name]: index,
                              }));
                            }
                          }}
                        />
                      </div>

                      {/* Desktop: Trainer Grid */}
                      <div className="hidden md:block">
                        {(() => {
                          const columns = 4;
                          const rows = [];
                          for (
                            let i = 0;
                            i < filteredTrainers.length;
                            i += columns
                          ) {
                            rows.push(filteredTrainers.slice(i, i + columns));
                          }

                          return rows.map((row, rowIdx) => {
                            const startIdx = rowIdx * columns;

                            return (
                              <div key={rowIdx}>
                                <div className="flex gap-6 flex-wrap bg-[#F6F6F6] px-12 pt-12">
                                  {row.map((trainer, colIdx) => {
                                    const globalIdx = startIdx + colIdx;

                                    return (
                                      <div
                                        key={globalIdx}
                                        className="mb-3 transition-all duration-300 ease-in-out transform hover:scale-105"
                                      >
                                        <TrainerCard
                                          trainer={trainer}
                                          selected={selectedIdx === globalIdx}
                                          onClick={(e) => {
                                            e.stopPropagation();

                                            if (selectedIdx === globalIdx) {
                                              setSelectedTrainer((prev) => ({
                                                ...prev,
                                                [service.name]: null,
                                              }));
                                            } else {
                                              setSelectedTrainer((prev) => ({
                                                ...prev,
                                                [service.name]: globalIdx,
                                              }));
                                            }
                                          }}
                                        />
                                      </div>
                                    );
                                  })}
                                </div>

                                {selectedIdx !== null &&
                                  selectedIdx !== undefined &&
                                  Math.floor(selectedIdx / columns) ===
                                    rowIdx && (
                                    <div className="w-full bg-[#F6F6F6] px-12 py-6 transition-all duration-300 ease-in-out">
                                      <TrainerDetails
                                        trainer={filteredTrainers[selectedIdx]}
                                      />
                                    </div>
                                  )}
                              </div>
                            );
                          });
                        })()}
                      </div>

                      {/* Trainer Details for Mobile */}
                      {selectedIdx !== null && selectedIdx !== undefined && (
                        <div className="md:hidden w-full bg-[#F6F6F6] px-4 py-6 transition-all duration-300 ease-in-out">
                          <TrainerDetails
                            trainer={filteredTrainers[selectedIdx]}
                          />
                        </div>
                      )}
                    </>
                  )}
                  {filteredTrainers && filteredTrainers.length === 0 && (
                    <div className="text-center text-gray-500 py-6 md:py-8 px-4 md:px-0 transition-all duration-300 ease-in-out">
                      <p className="text-base md:text-lg font-medium mb-2">
                        No trainers available for the selected locations.
                      </p>
                      <p className="text-sm md:text-base">
                        Try selecting different locations or contact us for
                        availability.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WellnessView;
