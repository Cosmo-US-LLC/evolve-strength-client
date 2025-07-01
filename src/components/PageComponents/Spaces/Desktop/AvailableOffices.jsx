import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const tabs = [
  { id: "All", label: "All (08)" },
  { id: "Edmonton North", label: "Edmonton North" },
  { id: "Edmonton South", label: "Edmonton South" },
  { id: "Edmonton Downtown", label: "Edmonton Downtown" },
  { id: "Calgary Sunridge", label: "Calgary Sunridge" },
  { id: "Brentwood", label: "Brentwood" },
];

const allOffices = [
  {
    title: "Executive Office",
    location: "Edmonton North",
    image: "/path/edmonton-north-1.webp",
  },
  {
    title: "Executive Office",
    location: "Edmonton South",
    image: "/path/edmonton-south-1.webp",
  },
  {
    title: "Executive Office",
    location: "Edmonton Downtown",
    image: "/path/edmonton-downtown-1.webp",
  },
  {
    title: "Executive Office",
    location: "Calgary Sunridge",
    image: "/path/calgary-sunridge-1.webp",
  },
  {
    title: "Executive Office",
    location: "Brentwood",
    image: "/path/brentwood-1.webp",
  },
  {
    title: "Executive Office",
    location: "Brentwood",
    image: "/path/brentwood-2.webp",
  },
  // Add more as needed
];

const AvailableOffices = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
    align: "start",
    loop: false,
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const filteredOffices =
    activeTab === "All"
      ? allOffices
      : allOffices.filter((o) => o.location === activeTab);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 rounded border p-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              activeTab === tab.id
                ? "bg-green-500 text-white"
                : "bg-white text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4 uppercase">Available Offices</h2>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {filteredOffices.map((office, idx) => (
              <div
                key={idx}
                className="flex-[0_0_48%] relative rounded-lg overflow-hidden bg-white"
              >
                <img
                  src={office.image}
                  alt={office.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{office.title}</h3>
                  <p className="text-sm text-gray-500">Starting at 112 sq/ft</p>
                  <p className="text-xs text-gray-400 mb-2">
                    <span className="inline-block mr-1">📍</span>
                    {office.location}
                  </p>
                  <button className="bg-green-500 hover:bg-green-600 text-white text-xs font-semibold rounded px-4 py-2">
                    APPLY NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {filteredOffices.length > 2 && (
          <>
            <div className="absolute top-1/2 -translate-y-1/2 left-2 z-10">
              <button
                onClick={scrollPrev}
                className="p-2 bg-black bg-opacity-50 rounded-full text-white"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-2 z-10">
              <button
                onClick={scrollNext}
                className="p-2 bg-black bg-opacity-50 rounded-full text-white"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default AvailableOffices;
