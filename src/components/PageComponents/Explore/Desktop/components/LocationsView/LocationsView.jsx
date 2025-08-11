import React, { useState } from "react";
import {
  getDataByCategory,
  getTrainersForLocation,
  getTrainersForLocationService,
} from "../../../../../../constants/exploreDataWithTrainer";
import TrainerCard from "../shared/TrainerCard";
import TrainerDetails from "../shared/TrainerDetails";
import { ArrowUpCircle, ChevronDown, CircleChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function LocationsView() {
  const [expandedLocation, setExpandedLocation] = useState(null); // Only one location can be expanded
  const [serviceTabs, setServiceTabs] = useState({}); // { [locKey]: selectedServiceName }
  const [selectedTrainer, setSelectedTrainer] = useState({}); // { [locKey_service]: trainerIdx }

  const locationsData = getDataByCategory("LOCATIONS")?.data || [];

  const handleToggle = (locKey) => {
    // Accordion behavior: if clicking the same location, close it; if clicking different location, close previous and open new one
    setExpandedLocation(expandedLocation === locKey ? null : locKey);

    // Reset trainer selection when changing locations
    setSelectedTrainer({});
  };

  const handleServiceSelect = (locKey, serviceName) => {
    setServiceTabs((prev) => ({ ...prev, [locKey]: serviceName }));
    setSelectedTrainer((prev) => ({
      ...prev,
      [`${locKey}_${serviceName}`]: null,
    })); // reset trainer selection on tab change
  };

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

  return (
    <div className="w-full bg-white pt-4 md:pt-6 pb-8 md:pb-16">
      {/* Location List */}
      <div className="space-y-0">
        {locationsData.map((loc, index) => {
          const locKey = `${loc.city} ${loc.branch}`;
          const isOpen = expandedLocation === locKey;
          const selectedService = serviceTabs[locKey] || "All";
          // Get trainers for this location and service
          const serviceId =
            loc.services.find((s) => s.name === selectedService)?.id || "";

          const filteredTrainers =
            selectedService === "All"
              ? getTrainersForLocation(loc.id)
              : getTrainersForLocationService(loc.id, serviceId);

          // Transform trainer data for display
          const transformedTrainers =
            filteredTrainers.map(transformTrainerData);

          const trainerKey = `${locKey}_${selectedService}`;
          const selectedIdx = selectedTrainer[trainerKey];

          return (
            <div key={locKey} className="overflow-hidden">
              {/* Location Header */}
              <div
                className={`
                  flex items-center justify-between py-4 md:py-5 cursor-pointer border-b border-gray-200 bg-white  
                  ${isOpen ? "bg-green-50" : "bg-[#fff]"}
                  ${index === 0 ? "border-t border-[#CCCCCC]" : ""}
                  hover:bg-gray-50 transition-all duration-300 ease-in-out
                `}
                onClick={() => handleToggle(locKey)}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-[#000] text-[18px] md:text-[24px] font-[600] leading-[20px] font-[kanit] uppercase transition-colors duration-300">
                    {locKey}
                  </span>
                  <CircleChevronDown
                    className={`w-5 h-5 md:w-6 md:h-6 text-gray-400 transition-all duration-300 ease-in-out transform ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
                <Link
                  to="/locations"
                  className="uppercase text-[16px] md:text-[20px] font-[400] leading-[20px] font-[kanit] text-[#4AB04A] hover:text-[#000] underline transition-colors duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  JOIN NOW
                </Link>
              </div>

              {/* Accordion Content with Smooth Animation */}
              <div
                className={`
                  bg-[#fff] overflow-hidden transition-all duration-500 ease-in-out
                  ${isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}
                `}
              >
                <div
                  className={`
                  transform transition-all duration-500 ease-in-out
                  ${isOpen ? "translate-y-0" : "-translate-y-4"}
                `}
                >
                  {/* Mobile: Horizontal Scrollable Services */}
                  <div className="md:hidden py-6">
                    <div className="flex gap-3 overflow-x-auto scrollbar-hide py-2">
                      {loc.services &&
                        loc.services.map((service) => (
                          <button
                            key={service.name}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleServiceSelect(locKey, service.name);
                            }}
                            className={`
                              flex items-center justify-center gap-2 flex-shrink-0  px-4 h-[48px] rounded-[6px] text-[16px] font-[400] leading-[20px] font-[kanit] capitalize cursor-pointer transition-all duration-300 ease-in-out transform 
                              ${
                                selectedService === service.name
                                  ? "bg-[#000] text-white shadow-lg"
                                  : "bg-[#fff] border border-[#CCCCCC] hover:bg-green-50 hover:border-green-300"
                              }
                            `}
                          >
                            <img
                              src={service.icon}
                              alt={service.name}
                              className="w-5 h-5 transition-transform duration-300"
                            />
                            {service.name}
                          </button>
                        ))}
                    </div>
                  </div>

                  {/* Desktop: Flex Wrap Services */}
                  <div className="hidden md:block">
                    <div className="flex flex-wrap justify-center gap-3 py-10">
                      {loc.services &&
                        loc.services.map((service) => (
                          <button
                            key={service.name}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleServiceSelect(locKey, service.name);
                            }}
                            className={`
                              flex items-center justify-center gap-2 w-[294px] h-[52px] rounded-[6px] text-[18px] font-[400] leading-[20px] font-[kanit] capitalize cursor-pointer transition-all duration-300 ease-in-out transform
                              ${
                                selectedService === service.name
                                  ? "bg-[#000] text-white shadow-lg"
                                  : "bg-[#fff] border border-[#CCCCCC] hover:bg-green-50 hover:border-green-300"
                              }
                            `}
                          >
                            <img
                              src={service.icon}
                              alt={service.name}
                              className="w-6 h-6 transition-transform duration-300"
                            />
                            {service.name}
                          </button>
                        ))}
                    </div>
                  </div>

                  {transformedTrainers && transformedTrainers.length > 0 && (
                    <>
                      {/* Mobile: Trainer Carousel */}
                      <div className="md:hidden bg-[#F6F6F6] px-4 py-6 rounded-t-[5px]">
                        <TrainerCard
                          isCarousel={true}
                          trainers={transformedTrainers}
                          selectedTrainer={selectedIdx}
                          onTrainerSelect={(index) => {
                            if (selectedIdx === index) {
                              setSelectedTrainer((prev) => ({
                                ...prev,
                                [trainerKey]: null,
                              }));
                            } else {
                              setSelectedTrainer((prev) => ({
                                ...prev,
                                [trainerKey]: index,
                              }));
                            }
                          }}
                        />
                      </div>

                      {/* Desktop: Trainer Grid */}
                      <div className="hidden md:block">
                        {/* Organize trainers into rows of 4 */}
                        {(() => {
                          const columns = 4;
                          const rows = [];
                          for (
                            let i = 0;
                            i < transformedTrainers.length;
                            i += columns
                          ) {
                            rows.push(
                              transformedTrainers.slice(i, i + columns)
                            );
                          }

                          return rows.map((row, rowIdx) => {
                            const startIdx = rowIdx * columns;

                            return (
                              <div key={rowIdx} className="overflow-hidden">
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
                                                [trainerKey]: null,
                                              }));
                                            } else {
                                              setSelectedTrainer((prev) => ({
                                                ...prev,
                                                [trainerKey]: globalIdx,
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
                                        trainer={
                                          transformedTrainers[selectedIdx]
                                        }
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
                            trainer={transformedTrainers[selectedIdx]}
                          />
                        </div>
                      )}
                    </>
                  )}
                  {transformedTrainers && transformedTrainers.length === 0 && (
                    <div className="text-center text-gray-500 py-6 md:py-8 px-4 md:px-0 transition-all duration-300 ease-in-out">
                      <p className="text-base md:text-lg font-medium mb-2">
                        No trainers available for this service.
                      </p>
                      <p className="text-sm md:text-base">
                        Try selecting a different service or contact us for
                        availability.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LocationsView;
