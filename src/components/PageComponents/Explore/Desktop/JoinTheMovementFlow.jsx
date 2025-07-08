// JoinTheMovementFlow.jsx
import React, { useState } from "react";
import TrainerCard from "./TrainerCard";

const data = {
  categories: [
    {
      name: "LOCATIONS",
      image: "https://via.placeholder.com/300x200?text=Locations",
      description:
        "Evolve locations offer a variety of unique services. Find out what your location has to offer.",
      locations: [
        {
          name: "EDMONTON SOUTH",
          services: [
            "All",
            "Chiropractic Care",
            "Massage Therapy",
            "Pilates",
            "Acupuncture",
            "Dietitian Services",
            "Esthetician",
            "Laser Therapy",
            "Osteopathy",
            "Mental Health Support",
          ],
          trainers: [
            {
              name: "Jordan Browne",
              title: "Olympic Weightlifting and Strength Coach",
              image: "https://via.placeholder.com/200x200?text=Jordan",
            },
            {
              name: "Sharina Palaypay",
              title: "Personal Trainer",
              image: "https://via.placeholder.com/200x200?text=Sharina",
            },
            {
              name: "Maryam Neamah",
              title: "Medical Esthetician",
              image: "https://via.placeholder.com/200x200?text=Maryam",
            },
            {
              name: "Robert Tenhove",
              title: "Chiropractor",
              image: "https://via.placeholder.com/200x200?text=Robert",
            },
            {
              name: "Leah Cheung",
              title: "Dietitian",
              image: "https://via.placeholder.com/200x200?text=Leah",
            },
          ],
        },
        {
          name: "CALGARY ROYAL OAK",
          trainers: [
            {
              name: "Denisse Peters",
              title:
                "Registered Massage Therapist, Traditional Chinese Medicine",
              image: "https://via.placeholder.com/200x200?text=Denisse",
            },
          ],
          services: [
            "All",
            "Massage Therapy",
            "Acupuncture",
            "Dietitian Services",
            "Esthetician",
          ],
        },
        {
          name: "EDMONTON NORTH",
          trainers: [
            {
              name: "Maryam Neamah",
              title: "Medical Esthetician",
              image: "https://via.placeholder.com/200x200?text=Maryam",
            },
            {
              name: "Robert Tenhove",
              title: "Chiropractor",
              image: "https://via.placeholder.com/200x200?text=Robert",
            },
            {
              name: "Leah Cheung",
              title: "Dietitian",
              image: "https://via.placeholder.com/200x200?text=Leah",
            },
          ],
          services: [
            "All",
            "Chiropractic Care",
            "Massage Therapy",
            "Mental Health Support",
          ],
        },
        {
          name: "EDMONTON DOWNTOWN",
          trainers: [
            {
              name: "Maryam Neamah",
              title: "Medical Esthetician",
              image: "https://via.placeholder.com/200x200?text=Maryam",
            },
            {
              name: "Robert Tenhove",
              title: "Chiropractor",
              image: "https://via.placeholder.com/200x200?text=Robert",
            },
            {
              name: "Leah Cheung",
              title: "Dietitian",
              image: "https://via.placeholder.com/200x200?text=Leah",
            },
          ],
          services: ["All", "Massage Therapy", "Pilates", "Laser Therapy"],
        },
        {
          name: "CALGARY SUNRIDGE",
          trainers: [
            {
              name: "Michelle Moen",
              title: "Personal Trainer",
              image: "https://via.placeholder.com/200x200?text=Michelle",
            },
          ],
          services: ["All", "Massage Therapy", "Esthetician", "Osteopathy"],
        },
        {
          name: "BURNABY SOUTH",
          trainers: [
            {
              name: "Maryam Neamah",
              title: "Medical Esthetician",
              image: "https://via.placeholder.com/200x200?text=Maryam",
            },
            {
              name: "Robert Tenhove",
              title: "Chiropractor",
              image: "https://via.placeholder.com/200x200?text=Robert",
            },
            {
              name: "Leah Cheung",
              title: "Dietitian",
              image: "https://via.placeholder.com/200x200?text=Leah",
            },
          ],
          services: ["All", "Massage Therapy", "Acupuncture", "Osteopathy"],
        },
        {
          name: "VANCOUVER THE POST",
          trainers: [
            {
              name: "Kieryn Marcellus",
              title: "Personal Trainer",
              image: "https://via.placeholder.com/200x200?text=Kieryn",
            },
          ],
          services: [
            "All",
            "Dietitian Services",
            "Esthetician",
            "Mental Health Support",
          ],
        },
      ],
    },
    {
      name: "WELLNESS",
      image: "https://via.placeholder.com/300x200?text=Wellness",
      description:
        "Explore a range of wellness service providers tailored to your needs.",
      services: [],
    },
    {
      name: "TRAINERS",
      image: "https://via.placeholder.com/300x200?text=Trainers",
      description:
        "Explore certified personal trainers dedicated to helping you reach your fitness goals.",
      sortOptions: ["Alphabetical (A-Z)", "Locations", "New Trainers"],
      trainers: [],
    },
  ],
};

export default function JoinTheMovementFlow() {
  const [activeCategory, setActiveCategory] = useState("LOCATIONS");
  const [activeLocation, setActiveLocation] = useState("EDMONTON SOUTH");
  const [activeService, setActiveService] = useState("All");
  const [expandedProfile, setExpandedProfile] = useState(null);
  const [showFilters, setShowFilters] = useState(true);
  const [expandedLocations, setExpandedLocations] = useState([]);

  const categoryData = data.categories.find(
    (cat) => cat.name === activeCategory
  );
  const locationData =
    activeCategory === "LOCATIONS"
      ? categoryData.locations.find((l) => l.name === activeLocation)
      : null;

  const trainers =
    activeCategory === "TRAINERS"
      ? categoryData.trainers || []
      : locationData?.trainers || [];

  const filteredTrainers =
    activeService === "All"
      ? trainers
      : trainers.filter((t) =>
          t.title.toLowerCase().includes(activeService.toLowerCase())
        );

  const toggleLocation = (locName) => {
    setExpandedLocations((prev) =>
      prev.includes(locName)
        ? prev.filter((name) => name !== locName)
        : [...prev, locName]
    );
  };

  return (
    <div className="p-6 bg-white text-black min-h-screen space-y-6">
      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => {
              setActiveCategory(cat.name);
              setActiveLocation("EDMONTON SOUTH");
              setActiveService("All");
              setExpandedProfile(null);
              setShowFilters(true);
            }}
            className={`relative cursor-pointer rounded-lg overflow-hidden transition-all border-2 ${
              activeCategory === cat.name
                ? "border-green-500"
                : "border-transparent"
            }`}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-4">
              <p className="text-white text-sm leading-snug max-w-[90%]">
                {cat.description}
              </p>
              <div className="flex justify-between items-end">
                <h2 className="text-white font-bold text-lg">{cat.name}</h2>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center border ${
                    activeCategory === cat.name
                      ? "bg-white text-green-600"
                      : "border-white text-white"
                  }`}
                >
                  ↓
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Location Filter Buttons - Collapsible */}
      {activeCategory === "LOCATIONS" && activeLocation && (
        <div className="mt-6 space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="font-bold text-sm">
              {activeLocation.split(" ")[0]}{" "}
              <span className="font-normal">
                {activeLocation.split(" ").slice(1).join(" ")}
              </span>
            </h3>
            <div className="flex gap-4 items-center">
              <button
                className="text-sm text-gray-500 underline"
                onClick={() => setShowFilters((prev) => !prev)}
              >
                {showFilters ? "Hide Services" : "Show Services"}
              </button>
              <button className="text-green-600 text-sm font-semibold">
                JOIN NOW
              </button>
            </div>
          </div>
          {showFilters && (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {(locationData?.services || []).map((service) => (
                <button
                  key={service}
                  onClick={() => setActiveService(service)}
                  className={`flex items-center gap-2 border px-3 py-2 text-sm rounded ${
                    activeService === service
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Trainer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {filteredTrainers.map((person, idx) => (
          <TrainerCard
            key={idx}
            index={idx}
            person={person}
            expandedProfile={expandedProfile}
            setExpandedProfile={setExpandedProfile}
          />
        ))}
      </div>

      {/* Expanded Locations */}
      {categoryData.locations.map((loc) => (
        <div key={loc.name}>
          <div onClick={() => toggleLocation(loc.name)}>
            {/* Location row UI */}
          </div>
          {expandedLocations.includes(loc.name) && (
            <div>
              {/* Show trainers for this location */}
              {loc.trainers?.map((trainer, idx) => (
                <TrainerCard key={idx} person={trainer} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
