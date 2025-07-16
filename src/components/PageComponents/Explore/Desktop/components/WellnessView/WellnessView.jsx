import React, { useState } from "react";
import {
  getDataByCategory,
  getAllLocations,
} from "../../../../../../constants/exploreData";
import TrainerCard from "../shared/TrainerCard";
import TrainerDetails from "../shared/TrainerDetails";
import { ArrowUpCircle, Check, ArrowLeft } from "lucide-react";

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
    <div className="w-full bg-white">
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
                    flex items-center justify-between py-5 cursor-pointer border-b border-gray-200 bg-white
                    ${isSelected ? "bg-green-50" : "bg-white"}
                    ${index === 0 ? "border-t border-gray-200" : ""}
                  `}
                onClick={() => handleToggle(service.name)}
              >
                <div className="flex items-center gap-4">
                  {service.icon && (
                    <img
                      src={service.icon}
                      alt={service.name}
                      className="w-6 h-6"
                    />
                  )}
                  <span className="text-[#000] text-[24px] font-[600] leading-[20px] font-[kanit] uppercase">
                    {service.name}
                  </span>
                  <ArrowUpCircle
                    className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
                <button
                  className="uppercase text-[20px] font-[400] leading-[20px] font-[kanit] text-[#4AB04A] hover:text-[#000] underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  JOIN NOW
                </button>
              </div>

              {/* Expanded Content */}
              {isOpen && (
                <div className="py-6 px-6 bg-white">
                  {/* Location Filter - Inside Service */}
                  <div className="relative mb-6">
                    <button
                      className="bg-white rounded-lg px-4 py-3 border border-gray-200 flex items-center justify-between min-w-[200px] shadow-sm"
                      onClick={() =>
                        setShowLocationDropdown(!showLocationDropdown)
                      }
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-black font-medium">
                          {selectedLocations.length === 0
                            ? "All Locations"
                            : "Locations"}
                        </span>
                        <span className="text-green-600 font-medium">
                          (
                          {selectedLocations.length === 0
                            ? "ALL"
                            : selectedLocations.length
                                .toString()
                                .padStart(2, "0")}
                          )
                        </span>
                      </div>
                      <ArrowUpCircle
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          showLocationDropdown ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>

                    {/* Location Dropdown */}
                    {showLocationDropdown && (
                      <div className="absolute top-full left-0 mt-2 bg-white rounded-lg border border-gray-200 shadow-lg z-10 min-w-[250px]">
                        {/* All Locations Option */}
                        <div
                          className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 first:rounded-t-lg border-b border-gray-100"
                          onClick={() => setSelectedLocations([])}
                        >
                          <div
                            className={`w-4 h-4 border-2 rounded flex items-center justify-center ${
                              selectedLocations.length === 0
                                ? "bg-green-600 border-green-600"
                                : "border-gray-300"
                            }`}
                          >
                            {selectedLocations.length === 0 && (
                              <Check className="w-3 h-3 text-white" />
                            )}
                          </div>
                          <span className="text-black font-medium">
                            All Locations
                          </span>
                        </div>

                        {/* Individual Location Options */}
                        {allLocations.map((location, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 last:rounded-b-lg"
                            onClick={() => handleLocationToggle(location)}
                          >
                            <div
                              className={`w-4 h-4 border-2 rounded flex items-center justify-center ${
                                selectedLocations.includes(location)
                                  ? "bg-green-600 border-green-600"
                                  : "border-gray-300"
                              }`}
                            >
                              {selectedLocations.includes(location) && (
                                <Check className="w-3 h-3 text-white" />
                              )}
                            </div>
                            <span className="text-black">{location}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Trainer Cards Grid */}
                  {filteredTrainers && filteredTrainers.length > 0 && (
                    <>
                      <div className="flex gap-6 flex-wrap">
                        {filteredTrainers.map((trainer, idx) => (
                          <div
                            key={idx}
                            className="flex-1 min-w-[200px] max-w-[300px]"
                          >
                            <TrainerCard
                              trainer={trainer}
                              selected={selectedIdx === idx}
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedTrainer((prev) => ({
                                  ...prev,
                                  [service.name]: idx,
                                }));
                              }}
                            />
                          </div>
                        ))}
                      </div>
                      <TrainerDetails trainer={filteredTrainers[selectedIdx]} />
                    </>
                  )}
                  {filteredTrainers && filteredTrainers.length === 0 && (
                    <div className="text-center text-gray-500 py-8">
                      <p className="text-lg font-medium mb-2">
                        No trainers available for the selected locations.
                      </p>
                      <p className="text-sm">
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
