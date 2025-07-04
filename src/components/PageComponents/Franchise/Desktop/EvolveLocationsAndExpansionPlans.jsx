import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// Minimal static GeoJSON for demonstration (replace with detailed data for production)
const canadaGeoData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "British Columbia" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-139.06, 60.0],
            [-123.51, 60.0],
            [-123.51, 49.0],
            [-139.06, 49.0],
            [-139.06, 60.0],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { name: "Alberta" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-120.0, 60.0],
            [-110.0, 60.0],
            [-110.0, 49.0],
            [-120.0, 49.0],
            [-120.0, 60.0],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { name: "Saskatchewan" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-110.0, 60.0],
            [-102.0, 60.0],
            [-102.0, 49.0],
            [-110.0, 49.0],
            [-110.0, 60.0],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { name: "Ontario" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-95.16, 56.85],
            [-74.34, 56.85],
            [-74.34, 41.68],
            [-95.16, 41.68],
            [-95.16, 56.85],
          ],
        ],
      },
    },
  ],
};

const highlightedProvinces = [
  "British Columbia",
  "Alberta",
  "Saskatchewan",
  "Ontario",
];

function EvolveLocationsAndExpansionPlans() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 0" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: 700,
          marginBottom: 8,
        }}
      >
        EVOLVE LOCATIONS & EXPANSION PLANS
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 48,
        }}
      >
        {/* Map Section */}
        <div style={{ width: 500, height: 350 }}>
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 400, center: [-100, 60] }}
          >
            <Geographies geography={canadaGeoData}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={
                      highlightedProvinces.includes(geo.properties.name)
                        ? "#38B449"
                        : "#E5E5E5"
                    }
                    stroke="#fff"
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
          </ComposableMap>
        </div>
        {/* Stats Card */}
        <div
          style={{
            background: "#F7F7F7",
            borderRadius: 16,
            padding: "40px 48px",
            minWidth: 340,
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          }}
        >
          <div style={{ fontSize: "1.3rem", marginBottom: 12 }}>
            Total Gym Locations
          </div>
          <div
            style={{ fontWeight: 700, fontSize: "2.5rem", marginBottom: 24 }}
          >
            12+
          </div>
          <div style={{ fontSize: "1.3rem", marginBottom: 12 }}>
            Amenities & Services
          </div>
          <div
            style={{ fontWeight: 700, fontSize: "2.5rem", marginBottom: 24 }}
          >
            50+
          </div>
          <div style={{ fontSize: "1.3rem", marginBottom: 12 }}>
            Active Members
          </div>
          <div
            style={{ fontWeight: 700, fontSize: "2.5rem", marginBottom: 24 }}
          >
            12,000+
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginTop: 24,
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: "#38B449",
                  display: "inline-block",
                }}
              ></span>
              Available
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: "#E5E5E5",
                  display: "inline-block",
                  border: "1px solid #ccc",
                }}
              ></span>
              Unavailable
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EvolveLocationsAndExpansionPlans;
