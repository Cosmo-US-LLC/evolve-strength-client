import React, { useState } from "react";
import { XCircle } from "lucide-react";
import onSite_parking from "@/assets/images/spaces/PremiumAmenities/onSite_parking.webp";
import locker_rooms from "@/assets/images/spaces/PremiumAmenities/locker_rooms.webp";
import showers_room from "@/assets/images/spaces/PremiumAmenities/showers_room.webp";
import steam_area from "@/assets/images/spaces/PremiumAmenities/steam_area.webp";
import waiting_area from "@/assets/images/spaces/PremiumAmenities/waiting_area.webp";
import gym_area from "@/assets/images/spaces/PremiumAmenities/gym_area.webp";

const amenities = [
  { title: "On-Site Parking", image: onSite_parking },
  { title: "Locker Rooms", image: locker_rooms },
  { title: "Showers", image: showers_room },
  { title: "Steam Rooms and Saunas", image: steam_area },
  { title: "Premium Waiting Area", image: waiting_area },
  { title: "Full Commercial Gym Access", image: gym_area },
];

const PremiumAmenities = () => {
  const [activeAmenity, setActiveAmenity] = useState(amenities[0]);
  const [fade, setFade] = useState(false);

  const handleImageChange = (item) => {
    if (activeAmenity.title !== item.title) {
      setFade(true);
      setTimeout(() => {
        setActiveAmenity(item);
        setFade(false);
      }, 200);
    }
  };

  return (
    <div>
      <div className="py-12 bg-[#EEEEEE] max-md:hidden">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 max-md:px-[16px] flex ">
          <div className="flex md:flex-row max-md:flex-col gap-8 justify-between w-full">
            <div className="md:w-[50%] md:max-w-[562px] max-md:w-[100%] flex flex-col gap-6">
              <h2 className="font-[700] text-[#000] uppercase">
                Premium Amenities For You & Your Clients
              </h2>
              <h4 className="text-[#000] !font-[400] leading-[26px]">
                Our rent includes access to shared amenities that make your
                space feel professional and comfortable for both you and your
                clients.
              </h4>

              <ul className="space-y-4">
                {amenities.map((item) => (
                  <li
                    key={item.title}
                    onClick={() => handleImageChange(item)}
                    className={`cursor-pointer pb-4 text-[24px] font-[500] font-[kanit] leading-normal border-[#000] hover:text-[#000] transition-colors duration-300 border-b ${
                      activeAmenity.title === item.title
                        ? " text-[#000] "
                        : "opacity-50  "
                    }`}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:w-[50%] md:max-w-[462px] max-md:w-[100%] flex flex-col items-center justify-center">
              <img
                src={activeAmenity.image}
                alt={activeAmenity.title}
                className={`rounded-lg w-full  object-cover transition-opacity duration-500 ${
                  fade ? "opacity-0" : "opacity-100"
                }`}
              />
              <div
                className={`flex gap-4 mt-4 text-xs text-gray-700 transition-opacity duration-300 ${
                  fade ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="flex items-center gap-1 text-[#000] text-[16px] font-[kanit] font-[500] uppercase leading-normal">
                  <XCircle className="w-5 h-5 text-[#000] " />
                  NO ADDITIONAL CONTRACTS
                </div>
                <div className="flex items-center gap-1 text-[#000] text-[16px] font-[kanit] font-[500] uppercase leading-normal">
                  <XCircle className="w-5 h-5 text-[#000]" />
                  NO EXTRA FEES
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 bg-[#EEEEEE] md:hidden">
        <div className="max-w-[1280px] mx-auto md:px-8 max-md:px-[16px] flex ">
          <div className="flex md:flex-row max-md:flex-col gap-8 justify-between w-full">
            <div className="md:w-[50%] md:max-w-[562px] max-md:w-[100%] flex flex-col gap-6">
              <h2 className="font-[700] text-[#000] uppercase">
                Premium Amenities For You & Your Clients
              </h2>
              <h4 className="text-[#000] !font-[400] leading-[26px]">
                Our rent includes access to shared amenities that make your
                space feel professional and comfortable for both you and your
                clients.
              </h4>
            </div>

            <ul className="">
              {amenities.map((item) => {
                const isActive = activeAmenity.title === item.title;
                return (
                  <li
                    key={item.title}
                    className="py-4 space-y-6 border-[#000] border-b"
                  >
                    {isActive && (
                      <div
                        className={`flex gap-4 mt-4 mb-6 text-xs text-gray-700 transition-opacity duration-300 ${
                          fade ? "opacity-0" : "opacity-100"
                        }`}
                      >
                        <div className="flex items-center gap-1 text-[#000] text-[14px] font-[kanit] font-[500] uppercase leading-normal">
                          <XCircle className="w-5 h-5 text-[#000] " />
                          NO ADDITIONAL CONTRACTS
                        </div>
                        <div className="flex items-center gap-1 text-[#000] text-[14px] font-[kanit] font-[500] uppercase leading-normal">
                          <XCircle className="w-5 h-5 text-[#000]" />
                          NO EXTRA FEES
                        </div>
                      </div>
                    )}

                    <div
                      onClick={() => handleImageChange(item)}
                      className={`cursor-pointer  text-[24px] font-[500] font-[kanit] leading-normal  transition-colors duration-300 ${
                        isActive
                          ? "text-[#000]"
                          : "text-[#000] opacity-50 hover:opacity-100"
                      }`}
                    >
                      {item.title}
                    </div>

                    {isActive && (
                      <div className="w-full flex justify-center mt-4">
                        <img
                          key={item.image}
                          src={item.image}
                          alt={item.title}
                          className="rounded-[10px] object-cover w-full  h-auto shadow"
                        />
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumAmenities;
