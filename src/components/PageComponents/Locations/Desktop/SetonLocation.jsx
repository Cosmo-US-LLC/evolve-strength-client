import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LOCATIONS_DATA,
  FACILITY_TIMINGS,
} from "@/constants/locations_data/LocationsData";

function SetonLocation() {
  const currentPath = window.location.pathname;
  let locationKey = "calgary-seton";

  if (currentPath.includes("calgary-seton")) {
    locationKey = "calgary-seton";
  } else if (currentPath.includes("calgary-royal-oak")) {
    locationKey = "calgary-royal-oak";
  } else if (currentPath.includes("calgary-sunridge")) {
    locationKey = "calgary-sunridge";
  } else if (currentPath.includes("edmonton-south")) {
    locationKey = "edmonton-south";
  } else if (currentPath.includes("edmonton-north")) {
    locationKey = "edmonton-north";
  } else if (currentPath.includes("edmonton-downtown")) {
    locationKey = "edmonton-downtown";
  } else if (currentPath.includes("burnaby-brentwood")) {
    locationKey = "burnaby-brentwood";
  } else if (currentPath.includes("vancouver-post")) {
    locationKey = "vancouver-post";
  }

  const locationData =
    LOCATIONS_DATA[locationKey] || LOCATIONS_DATA["calgary-seton"];

  // Location-specific tour URLs
  const getTourUrl = (locationKey) => {
    const tourUrls = {
      "vancouver-post":
        "/book-a-tour/?location=40327",
      "burnaby-brentwood":
        "/book-a-tour/?location=40248",
      "calgary-seton":
        "/book-a-tour/?location=40097",
      "calgary-royal-oak":
        "/book-a-tour/?location=40142",
      "calgary-sunridge":
        "/book-a-tour/?location=06973",
      "edmonton-south":
        "/book-a-tour/?location=06962",
      "edmonton-downtown":
        "/book-a-tour/?location=06967",
      "edmonton-north":
        "/book-a-tour/?location=06964",
    };

    return tourUrls[locationKey] || "/book-a-tour/";
  };

  const tourUrl = getTourUrl(locationKey);

  const [isTimingsExpanded, setIsTimingsExpanded] = useState(false);

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 py-12 flex flex-col gap-4 ">
      <h1 className="!text-[29px] md:!text-[40px] mb-2 !font-bold text-center leading-[29px] md:leading-[40px]">
        ABOUT OUR{" "}
        <span className="!text-[#4AB04A]">
          {locationData.city} {locationData.branch}
        </span>{" "}
        LOCATION
      </h1>

      <div className="flex flex-col md:flex-row gap-4">
        <img
          src={locationData.buildingImage}
          alt={`Evolve Strength ${locationData.name}`}
          className="w-full md:w-[500px] h-auto md:h-[410px] object-cover rounded-md"
        />

        <div className="w-full md:w-[695px]  md:h-[410px] flex flex-col">
          <iframe
            src={locationData.mapUrl}
            title={`Evolve Strength ${locationData.name} Location`}
            className="w-full object-cover rounded-t-md h-[310px] border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="md:h-[100px]  bg-[#F9F9F9] p-4 border shadow rounded-b-md flex flex-col md:flex-row md:items-center md:justify-between ">
            <div>
              <h3 className="">{locationData.name}</h3>
              <p className="text-[16px] font-[kanit] font-[300] text-[#000]">
                {locationData.address}
              </p>
            </div>
            <div className="flex flex-start pt-5 md:pt-0">
              <a href={tourUrl}>
                <button className="btnPrimary">BOOK A FREE TOUR</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="  ">
        <button
          onClick={() => setIsTimingsExpanded(!isTimingsExpanded)}
          className="w-full md:w-[1210px] flex items-center justify-between px-4 py-3 bg-[#F9F9F9] !font-[600] text-black border border-gray-200 rounded hover:bg-[#F0F0F0] transition-colors"
        >
          FACILITY TIMINGS
          <img
            src="/assets/images/Locations/Seton/icon.svg"
            alt=""
            className={`transition-transform duration-300 ${
              isTimingsExpanded ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Expandable timings content */}
        {isTimingsExpanded && (
          <div className="w-full md:w-[1210px] bg-white border border-gray-200 rounded-b-md mt-1 p-6 shadow-sm">
            <div className="grid grid-cols-1  gap-4">
              {(locationData.timings || FACILITY_TIMINGS).map(
                (timing, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                  >
                    <span className="font-medium text-[#000]">
                      {timing.day}
                    </span>
                    <span className="text-gray-600">{timing.hours}</span>
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SetonLocation;
