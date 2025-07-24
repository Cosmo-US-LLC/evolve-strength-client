import React from "react";
import {
  CategorySelector,
  LocationsView,
  WellnessView,
  TrainersView,
} from "./components";

function DiscoverEvolve({ selected, onSelect }) {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8">
      <CategorySelector selected={selected} onSelect={onSelect} />
      {selected === "LOCATIONS" && <LocationsView />}
      {selected === "WELLNESS" && <WellnessView />}
      {selected === "TRAINERS" && <TrainersView />}
    </div>
  );
}

export default DiscoverEvolve;
