import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const LocationsMap = () => {
  const [hoveredProvince, setHoveredProvince] = useState(null);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <ComposableMap projection="geoMercator" width={800} height={500}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => setHoveredProvince(geo.properties.name)}
                onMouseLeave={() => setHoveredProvince(null)}
                style={{
                  default: { fill: "#D6D6DA", outline: "none" },
                  hover: { fill: "#F53", outline: "none" },
                  pressed: { fill: "#E42", outline: "none" }
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>

      {hoveredProvince && (
        <div className="absolute top-4 left-4 bg-white rounded shadow p-4 w-64">
          <h3 className="font-bold text-lg">{hoveredProvince}</h3>
        </div>
      )}
    </div>
  );
};

export default LocationsMap;
