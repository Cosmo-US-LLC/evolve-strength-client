import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import locations from "../lib/locations";

const LocationSelection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({
    name: "Select Location",
    address: "Select a GYM Location to continue",
  });

  const navigate = useNavigate();

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setIsDropdownOpen(false);
  };

  const handleContinue = (name) => {
    if (name === "Select Location") {
      // alert("Please select a location to continue.");
      return;
    }
    navigate(`/join-now/membership-type?location=${name}`);
  };

  return (
    <div className="h-screen bg-white flex flex-col items-center justify-center">
      <div className="md:max-w-3xl mx-auto max-md:w-[100%] px-4">
        <h1 className="md:text-3xl max-md:text-[32px] font-[kanit] font-bold text-black text-center mb-8">
          SELECT LOCATION
        </h1>

        <div className="relative md:w-[600px] max-md:w-[100%]" >
          <div
            className="border-2 border-brand-green rounded-lg p-4 cursor-pointer bg-[#FCFCFC]"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="flex justify-between items-center px-2 lg:px-4">
              <div>
                <div className="font-[700] text-[#000] leading-[111.111%] md-max:text-[18px] md:text-[24px]">
                  {selectedLocation.name}
                </div>
                <div className="text-[#6F6D66] md-max:text-[16px] md:text-[20px] font-[400] leading-[125%] line-clamp-1 mt-1">
                  {selectedLocation.address}
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                 className={`w-3 h-3 lg:w-5 lg:h-5 text-black transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
              >
                <path
                  d="M7.37962 8.2569L13.4925 1.1252C13.7705 0.800865 13.5401 0.299806 13.1129 0.299806L0.887106 0.299805C0.459928 0.299805 0.229474 0.800864 0.507476 1.1252L6.62037 8.2569C6.81991 8.48971 7.18007 8.48971 7.37962 8.2569Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>

          {/* Dropdown Options */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 bg-[#FCFCFC] border-2 border-brand-green rounded-lg mt-1 z-10 max-h-60 overflow-y-auto px-4">
              {locations.map((location, index) => (
                <div key={index}>
                  <div
                    className="max-lg:px-2 p-4 cursor-pointer hover:bg-gray-50"
                    onClick={() => handleLocationSelect(location)}
                  >
                    <div className="font-[700] text-black md:text-lg max-md:text-[16px]">
                      {location.name}
                    </div>
                    <div className="text-[#6F6D66] font-[400] md:text-sm max-md:text-[14px] mt-1">
                      {location.address}
                    </div>
                  </div>
                  {index < locations.length - 1 && (
                    <div className="border-t border-gray-200 px-4 mx-4" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Continue Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => handleContinue(selectedLocation.name)}
            disabled={selectedLocation.name === "Select Location"}
            className="bg-brand-green disabled:bg-brand-green/80 cursor-pointer text-white font-[500] max-md:text-[16px] py-4 px-6 rounded-lg hover:bg-brand-green/90 transition-colors"
            style={{ width: "200px" }}
          >
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationSelection;
