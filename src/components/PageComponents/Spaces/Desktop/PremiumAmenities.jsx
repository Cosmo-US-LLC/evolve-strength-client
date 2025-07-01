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
  const [hoverAmenity, setHoverAmenity] = useState(null);
  const [fade, setFade] = useState(false);

  const currentImage = hoverAmenity || activeAmenity;

  const handleImageChange = (item) => {
    if (currentImage.title !== item.title) {
      setFade(true);
      setTimeout(() => {
        setFade(false);
      }, 200);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-extrabold uppercase mb-2">
            Premium Amenities For You & Your Clients
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Our rent includes access to shared amenities that make your space feel
            professional and comfortable for both you and your clients.
          </p>

          <ul className="space-y-0">
            {amenities.map((item) => (
              <li
                key={item.title}
                onClick={() => setActiveAmenity(item)}
                onMouseEnter={() => {
                  setHoverAmenity(item);
                  handleImageChange(item);
                }}
                onMouseLeave={() => setHoverAmenity(null)}
                className={`cursor-pointer py-2 text-sm font-medium transition-colors duration-300 border-b ${
                  activeAmenity.title === item.title
                    ? "font-semibold text-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:w-1/2 flex flex-col items-center justify-center">
          <img
            src={currentImage.image}
            alt={currentImage.title}
            className={`rounded-lg w-full max-h-[300px] object-cover transition-opacity duration-300 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          />
          <div
            className={`flex gap-4 mt-4 text-xs text-gray-700 transition-opacity duration-300 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex items-center gap-1">
              <XCircle className="w-4 h-4 text-gray-600" />
              NO ADDITIONAL CONTRACTS
            </div>
            <div className="flex items-center gap-1">
              <XCircle className="w-4 h-4 text-gray-600" />
              NO EXTRA FEES
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumAmenities;
