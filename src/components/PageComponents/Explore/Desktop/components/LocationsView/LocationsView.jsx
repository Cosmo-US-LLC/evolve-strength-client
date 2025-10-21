import React, { useEffect, useState } from "react";
import { useTrainerData } from "@/contexts/TrainerDataContext";
import {
  LOCATION_CONFIG,
  getTrainersByLocation,
  getTrainersByLocationAndRole,
  transformTrainer,
} from "@/services/trainerApi";
import TrainerCard from "../shared/TrainerCard";
import TrainerDetails from "../shared/TrainerDetails";
import { CircleChevronDown } from "lucide-react";

// Service name to role mapping
const SERVICE_ROLE_MAP = {
  "Personal Trainer": "Personal Trainer",
  Esthetician: "Esthetician",
  Chiropractor: "Chiropractor",
  "Massage Therapist": "Massage Therapist",
  Physiotherapist: "Physiotherapist",
  Acupuncturist: "Acupuncturist",
  Dietitian: "Dietitian",
  Osteopath: "Osteopath",
  "Laser Therapist": "Laser Therapist",
  "Mental Health Professional": "Mental Health Professional",
};

function LocationsView() {
  // const { trainers } = useTrainerData();
  const [trainers, setTrainers] = useState([]);
  const [expandedLocation, setExpandedLocation] = useState(null);
  const [serviceTabs, setServiceTabs] = useState({});
  const [selectedTrainer, setSelectedTrainer] = useState({});
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState({});

  async function getTrainers() {
    try {
      const response = await fetch(
        `https://esuite-api.evolvestrength.ca/v1/trainers/public`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const transformed = data.map(transformTrainer);
      // return transformed;
      console.log(transformed);
      setTrainers(transformed)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getTrainers();
  }, []);

  const handleToggle = (locKey) => {
    setExpandedLocation(expandedLocation === locKey ? null : locKey);
    setSelectedTrainer({});
    setCurrentCarouselIndex({});
  };

  const handleServiceSelect = (locKey, serviceName) => {
    setServiceTabs((prev) => ({ ...prev, [locKey]: serviceName }));
    setSelectedTrainer((prev) => ({
      ...prev,
      [`${locKey}_${serviceName}`]: null,
    }));
    setCurrentCarouselIndex((prev) => ({
      ...prev,
      [`${locKey}_${serviceName}`]: 0,
    }));
  };

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

  // Get available services for a location (services with trainers)
  const getAvailableServices = (location) => {
    const locationTrainers = getTrainersByLocation(trainers, location.name);

    // Check presence of exact roles from trainer_roles (via roles array)
    const hasPersonalTrainer = locationTrainers.some((t) =>
      (t.roles || []).some((r) => r.toLowerCase() === "personal trainer")
    );
    const hasWellnessExpert = locationTrainers.some((t) =>
      (t.roles || []).some((r) => r.toLowerCase() === "wellness expert")
    );

    // Start with All; add special tabs only if present
    const base = ["All"];
    if (hasPersonalTrainer) base.push("Personal Trainer");
    if (hasWellnessExpert) base.push("Wellness Expert");

    // Keep other services from config, excluding special ones
    const otherServices = location.services.filter(
      (s) => s !== "Personal Trainer" && s !== "Wellness Expert"
    );

    return [...base, ...otherServices].filter((serviceName) => {
      if (serviceName === "All") return true;
      if (serviceName === "Personal Trainer") return hasPersonalTrainer;
      if (serviceName === "Wellness Expert") return hasWellnessExpert;

      const role = SERVICE_ROLE_MAP[serviceName];
      if (!role) return false;

      // Only show if at least one trainer at the location has this exact role
      return locationTrainers.some((t) =>
        (t.roles || []).some((r) => r.toLowerCase() === role.toLowerCase())
      );
    });
  };

  // Get trainers for a specific location and service
  const getTrainersForLocationService = (locationName, serviceName) => {
    if (serviceName === "All") {
      return getTrainersByLocation(trainers, locationName);
    }
    const locTrainers = getTrainersByLocation(trainers, locationName);

    if (serviceName === "Personal Trainer") {
      return locTrainers.filter((t) =>
        (t.roles || []).some((r) => r.toLowerCase() === "personal trainer")
      );
    }

    if (serviceName === "Wellness Expert") {
      return locTrainers.filter((t) =>
        (t.roles || []).some((r) => r.toLowerCase() === "wellness expert")
      );
    }

    const role = SERVICE_ROLE_MAP[serviceName];
    if (!role) return [];

    return locTrainers.filter((t) =>
      (t.roles || []).some((r) => r.toLowerCase() === role.toLowerCase())
    );
  };

  return (
    <div className="w-full bg-white pt-4 md:pt-6 pb-8 md:pb-16">
      <div className="space-y-0">
        {LOCATION_CONFIG.map((loc, index) => {
          const locKey = `${loc.city} ${loc.branch}`;
          const isOpen = expandedLocation === locKey;
          const availableServices = getAvailableServices(loc);

          let selectedService = serviceTabs[locKey] || "All";
          if (!availableServices.includes(selectedService)) {
            selectedService = "All";
            if (serviceTabs[locKey] !== "All") {
              setServiceTabs((prev) => ({ ...prev, [locKey]: "All" }));
            }
          }

          const filteredTrainers = getTrainersForLocationService(
            loc.name,
            selectedService
          );
          const transformedTrainers =
            filteredTrainers.map(transformTrainerData);

          const trainerKey = `${locKey}_${selectedService}`;
          const selectedIdx = selectedTrainer[trainerKey];
          const currentCarouselIdx = currentCarouselIndex[trainerKey] || 0;

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
                <a
                  href={`/join-now/membership-type?location=${encodeURIComponent(
                    loc.name
                  )}`}
                  className="uppercase text-[16px] md:text-[20px] font-[400] leading-[20px] font-[kanit] text-[#4AB04A] hover:text-[#000] underline transition-colors duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  JOIN NOW
                </a>
              </div>

              {/* Accordion Content */}
              <div
                className={`
                  bg-[#fff] overflow-hidden transition-all duration-500 ease-in-out
                  ${isOpen ? "max-h-auto opacity-100" : "max-h-0 opacity-0"}
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
                      {availableServices.map((serviceName) => (
                        <button
                          key={serviceName}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleServiceSelect(locKey, serviceName);
                          }}
                          className={`
                            flex items-center justify-center gap-2 flex-shrink-0 px-4 h-[48px] rounded-[6px] text-[16px] font-[400] leading-[20px] font-[kanit] capitalize cursor-pointer transition-all duration-300 ease-in-out transform 
                            ${
                              selectedService === serviceName
                                ? "bg-[#000] text-white shadow-lg"
                                : "bg-[#fff] border border-[#CCCCCC] hover:bg-green-50 hover:border-green-300"
                            }
                          `}
                        >
                          {serviceName}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Desktop: Flex Wrap Services */}
                  <div className="hidden md:block">
                    <div className="flex flex-wrap gap-3 py-10">
                      {availableServices.map((serviceName) => (
                        <button
                          key={serviceName}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleServiceSelect(locKey, serviceName);
                          }}
                          className={`
                            flex items-center justify-center gap-2 w-[294px] h-[52px] rounded-[6px] text-[18px] font-[400] leading-[20px] font-[kanit] capitalize cursor-pointer transition-all duration-300 ease-in-out transform
                            ${
                              selectedService === serviceName
                                ? "bg-[#000] text-white shadow-lg"
                                : "bg-[#fff] border border-[#CCCCCC] hover:bg-green-50 hover:border-green-300"
                            }
                          `}
                        >
                          {serviceName}
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
                          currentIndex={currentCarouselIdx}
                          onCarouselNavigate={(newIndex) => {
                            setCurrentCarouselIndex((prev) => ({
                              ...prev,
                              [trainerKey]: newIndex,
                            }));
                            setSelectedTrainer((prev) => ({
                              ...prev,
                              [trainerKey]: null,
                            }));
                          }}
                          onSwipeDetected={() => {
                            setSelectedTrainer((prev) => ({
                              ...prev,
                              [trainerKey]: null,
                            }));
                          }}
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
                                <div className="flex gap-6 bg-[#F6F6F6] px-12 pt-12 pb-6">
                                  {row.map((trainer, colIdx) => {
                                    const globalIdx = startIdx + colIdx;

                                    return (
                                      <div
                                        key={globalIdx}
                                        className="w-1/4 transition-all duration-300 ease-in-out transform hover:scale-105"
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
                      {selectedIdx !== null &&
                        selectedIdx !== undefined &&
                        transformedTrainers[selectedIdx] && (
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
