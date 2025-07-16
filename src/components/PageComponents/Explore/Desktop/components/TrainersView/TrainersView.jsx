import React, { useState, useEffect } from "react";
import {
  getAllTrainers,
  getAllLocations,
  getToday,
} from "../../../../../../constants/UnUseExploreDataOld";
import TrainerCard from "../shared/TrainerCard";
import TrainerDetails from "../shared/TrainerDetails";
import { ArrowUpCircle, Check } from "lucide-react";

function TrainersView() {
  const [selectedTab, setSelectedTab] = useState("All");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedTrainerIdx, setSelectedTrainerIdx] = useState(null);

  const allTrainers = getAllTrainers();
  const allLocations = getAllLocations();

  useEffect(() => {
    setSelectedTrainerIdx(null); // Reset selected trainer when filter changes
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
    <div>
      <div className="flex items-center mb-8">
        <button
          className={`border border-gray-300 rounded-lg px-7 py-3 font-medium text-base cursor-pointer mr-3 outline-none transition-all duration-200 ${
            selectedTab === "All"
              ? "bg-black text-white shadow-md"
              : "bg-white text-gray-800 hover:bg-gray-50"
          }`}
          onClick={() => {
            setSelectedTab("All");
            setSelectedLocation("");
          }}
        >
          All
        </button>
        <button
          className={`border border-gray-300 rounded-lg px-7 py-3 font-medium text-base cursor-pointer mr-3 outline-none transition-all duration-200 ${
            selectedTab === "Alphabetical"
              ? "bg-black text-white shadow-md"
              : "bg-white text-gray-800 hover:bg-gray-50"
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
            className={`border border-gray-300 rounded-lg px-7 py-3 font-medium text-base cursor-pointer mr-3 outline-none transition-all duration-200 ${
              selectedTab === "Locations"
                ? "bg-black text-white shadow-md"
                : "bg-white text-gray-800 hover:bg-gray-50"
            }`}
            onClick={() => {
              setSelectedTab("Locations");
              setShowLocationDropdown((v) => !v);
            }}
          >
            <div className="flex items-center gap-2">
              <span>Locations</span>
              <ArrowUpCircle
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                  showLocationDropdown ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
          </button>
          {selectedTab === "Locations" && showLocationDropdown && (
            <div className="absolute top-12 left-0 bg-white rounded-lg border border-gray-200 shadow-lg z-10 min-w-[250px]">
              {/* All Locations Option */}
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
                      ? "bg-green-600 border-green-600"
                      : "border-gray-300"
                  }`}
                >
                  {!selectedLocation && (
                    <Check className="w-3 h-3 text-white" />
                  )}
                </div>
                <span className="text-black font-medium">All Locations</span>
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
                        ? "bg-green-600 border-green-600"
                        : "border-gray-300"
                    }`}
                  >
                    {selectedLocation === location && (
                      <Check className="w-3 h-3 text-white" />
                    )}
                  </div>
                  <span className="text-black">{location}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          className={`border border-gray-300 rounded-lg px-7 py-3 font-medium text-base cursor-pointer mr-3 outline-none transition-all duration-200 ${
            selectedTab === "New Trainers"
              ? "bg-black text-white shadow-md"
              : "bg-white text-gray-800 hover:bg-gray-50"
          }`}
          onClick={() => {
            setSelectedTab("New Trainers");
            setSelectedLocation("");
          }}
        >
          New Trainers
        </button>
      </div>

      {/* Trainers grid with details panel below selected card */}
      <div className="w-full">
        {rows.map((row, rowIdx) => {
          const startIdx = rowIdx * columns;

          return (
            <div key={rowIdx}>
              {/* Trainer Cards Row */}
              <div
                className="flex gap-6 mb-8 flex-wrap"
                style={{
                  marginTop: rowIdx === 0 ? "0.5rem" : "2rem",
                }}
              >
                {row.map((trainer, idx) => {
                  const globalIdx = startIdx + idx;

                  return (
                    <div
                      key={globalIdx}
                      className="relative flex-1 min-w-[200px] max-w-[300px]"
                    >
                      <TrainerCard
                        trainer={trainer}
                        selected={selectedTrainerIdx === globalIdx}
                        onClick={() => {
                          // Toggle: if same card is clicked, hide it; otherwise show new card
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

              {/* Details panel below the entire row */}
              {selectedTrainerIdx !== null &&
                Math.floor(selectedTrainerIdx / columns) === rowIdx && (
                  <div className="w-full mb-8">
                    <TrainerDetails
                      trainer={filteredTrainers[selectedTrainerIdx]}
                    />
                  </div>
                )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TrainersView;
