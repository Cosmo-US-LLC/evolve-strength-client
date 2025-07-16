import React, { useState } from "react";
import { getDataByCategory } from "../../../../../../constants/UnUseExploreDataOld";
import TrainerCard from "../shared/TrainerCard";
import TrainerDetails from "../shared/TrainerDetails";
import { ArrowUpCircle } from "lucide-react";
import { Link } from "react-router-dom";

function LocationsView() {
  const [expanded, setExpanded] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [serviceTabs, setServiceTabs] = useState({}); // { [locKey]: selectedServiceName }
  const [selectedTrainer, setSelectedTrainer] = useState({}); // { [locKey_service]: trainerIdx }

  const locationsData = getDataByCategory("LOCATIONS")?.data || [];

  const handleToggle = (loc) => {
    setExpanded(expanded === loc ? null : loc);
    setSelectedLocation(loc);
  };

  const handleServiceSelect = (locKey, serviceName) => {
    setServiceTabs((prev) => ({ ...prev, [locKey]: serviceName }));
    setSelectedTrainer((prev) => ({
      ...prev,
      [`${locKey}_${serviceName}`]: null,
    })); // reset trainer selection on tab change
  };

  return (
    <div className="w-full bg-white pt-6 pb-16">
      {/* Location List */}
      <div className="space-y-0">
        {locationsData.map((loc, index) => {
          const locKey = `${loc.city} ${loc.branch}`;
          const isOpen = expanded === locKey;
          const isSelected = selectedLocation === locKey;
          const selectedService = serviceTabs[locKey] || "All";
          // Filter trainers by selected service
          const filteredTrainers =
            selectedService === "All"
              ? loc.trainers
              : loc.trainers.filter(
                  (trainer) =>
                    trainer.services &&
                    trainer.services.includes(selectedService)
                );
          const trainerKey = `${locKey}_${selectedService}`;
          const selectedIdx = selectedTrainer[trainerKey];

          return (
            <div key={locKey} className="">
              {/* Location Header */}
              <div
                className={`
                  flex items-center justify-between py-5 cursor-pointer border-b border-gray-200 bg-white
                  ${isSelected ? "bg-green-50" : "bg-white"}
                  ${index === 0 ? "border-t border-gray-200" : ""}
                `}
                onClick={() => handleToggle(locKey)}
              >
                <div className="flex items-center gap-4">
                  <span className="text-[#000] text-[24px] font-[600] leading-[20px] font-[kanit] uppercase">
                    {loc.city}
                  </span>
                  <span className="text-[#000] text-[24px] font-[300] leading-[20px] font-[kanit] uppercase">
                    {loc.branch}
                  </span>
                  <ArrowUpCircle
                    className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
                <Link
                  to=""
                  className="uppercase text-[20px] font-[400] leading-[20px] font-[kanit] text-[#4AB04A] hover:text-[#000] underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  JOIN NOW
                </Link>
              </div>

              {/* Expanded Content */}
              {isOpen && (
                <div className="py-4 bg-white">
                  {/* Service Tabs */}
                  <div className="flex flex-wrap justify-center gap-3 mb-8 py-8">
                    {loc.services &&
                      loc.services.map((service) => (
                        <button
                          key={service.name}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleServiceSelect(locKey, service.name);
                          }}
                          className={`
                            flex items-center justify-center gap-2 w-[294px] h-[52px] rounded-[6px] text-[18px] font-[400] leading-[20px] font-[kanit] capitalize cursor-pointer transition-all duration-200
                            ${
                              selectedService === service.name
                                ? "bg-[#000] text-white"
                                : "bg-[#fff]  border border-[#CCCCCC] hover:bg-green-50"
                            }
                          `}
                        >
                          <img src={service.icon} alt={service.name} />
                          {service.name}
                        </button>
                      ))}
                  </div>

                  {/* Trainer Cards Grid */}
                  {filteredTrainers && filteredTrainers.length > 0 && (
                    <>
                      {/* Organize trainers into rows of 4 */}
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
                              {/* Trainer Cards Row */}
                              <div className="flex gap-6 flex-wrap bg-[#F6F6F6] p-12">
                                {row.map((trainer, colIdx) => {
                                  const globalIdx = startIdx + colIdx;

                                  return (
                                    <div key={globalIdx} className="">
                                      <TrainerCard
                                        trainer={trainer}
                                        selected={selectedIdx === globalIdx}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          // Toggle: if same trainer is clicked, hide it; otherwise show new trainer
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

                              {/* Details panel below the entire row */}
                              {selectedIdx !== null &&
                                selectedIdx !== undefined &&
                                Math.floor(selectedIdx / columns) ===
                                  rowIdx && (
                                  <div className="w-full mt-6">
                                    <TrainerDetails
                                      trainer={filteredTrainers[selectedIdx]}
                                    />
                                  </div>
                                )}
                            </div>
                          );
                        });
                      })()}
                    </>
                  )}
                  {filteredTrainers && filteredTrainers.length === 0 && (
                    <div className="text-center text-gray-500 py-8">
                      No trainers available for this service.
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

export default LocationsView;
