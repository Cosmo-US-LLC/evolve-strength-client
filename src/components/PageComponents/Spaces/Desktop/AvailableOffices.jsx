import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

import CSSlides_1 from "@/assets/images/spaces/AvailableOffices/CSSlides_1.webp";
import BSlides_1 from "@/assets/images/spaces/AvailableOffices/BSlides_1.webp";

const tabs = [
  { id: "All", label: "All (08)" },
  { id: "Edmonton North", label: "Edmonton North" },
  { id: "Edmonton South", label: "Edmonton South" },
  { id: "Edmonton Downtown", label: "Edmonton Downtown" },
  { id: "Calgary Royal Oak", label: "Calgary Royal Oak" },
  { id: "Calgary Sunridge", label: "Calgary Sunridge" },
  { id: "Calgary Seton", label: "Calgary Seton" },
  { id: "Brentwood", label: "Brentwood" },
  { id: "Post", label: "Post" },
];

const allOffices = [
  {
    title: "Executive Office",
    location: "Edmonton North",
    image: CSSlides_1,
  },
  {
    title: "Executive Office",
    location: "Edmonton North",
    image: BSlides_1,
  },
  {
    title: "Executive Office",
    location: "Edmonton North",
    image: CSSlides_1,
  },
  {
    title: "Executive Office",
    location: "Edmonton South",
    image: BSlides_1,
  },
  {
    title: "Executive Office",
    location: "Edmonton South",
    image: CSSlides_1,
  },
  {
    title: "Executive Office",
    location: "Edmonton South",
    image: BSlides_1,
  },
  {
    title: "Executive Office",
    location: "Edmonton Downtown",
    image: CSSlides_1,
  },
  {
    title: "Executive Office",
    location: "Edmonton Downtown",
    image: BSlides_1,
  },
  {
    title: "Executive Office",
    location: "Edmonton Downtown",
    image: CSSlides_1,
  },
  {
    title: "Executive Office",
    location: "Calgary Royal Oak",
    image: CSSlides_1,
  },
  {
    title: "Executive Office",
    location: "Calgary Royal Oak",
    image: BSlides_1,
  },
  {
    title: "Executive Office",
    location: "Calgary Royal Oak",
    image: CSSlides_1,
  },
  {
    title: "Executive Office",
    location: "Calgary Sunridge",
    image: CSSlides_1,
  },
  {
    title: "Executive Office",
    location: "Calgary Sunridge",
    image: BSlides_1,
  },
  {
    title: "Executive Office",
    location: "Calgary Sunridge",
    image: CSSlides_1,
  },
  {
    title: "Executive Office",
    location: "Calgary Seton",
    image: CSSlides_1,
  },
  {
    title: "Executive Office",
    location: "Calgary Seton",
    image: BSlides_1,
  },
  {
    title: "Executive Office",
    location: "Calgary Seton",
    image: CSSlides_1,
  },
  {
    title: "Executive Office",
    location: "Brentwood",
    image: CSSlides_1,
  },
  {
    title: "Executive Office",
    location: "Brentwood",
    image: BSlides_1,
  },
  {
    title: "Executive Office",
    location: "Brentwood",
    image: CSSlides_1,
  },
  {
    title: "Executive Office",
    location: "Post",
    image: CSSlides_1,
  },
  {
    title: "Executive Office",
    location: "Post",
    image: BSlides_1,
  },
  {
    title: "Executive Office",
    location: "Post",
    image: CSSlides_1,
  },
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
    <div className="py-12">
      <div className="w-[100%] max-w-[1280px] px-8 mx-auto flex flex-col gap-10">
        <div className="flex flex-wrap justify-around gap-2 rounded-[6px] border p-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 rounded-[5px] text-sm font-medium ${
                activeTab === tab.id
                  ? "bg-[#4AB04A] text-[#fff]"
                  : "bg-white text-[#000000]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <h2 className="uppercase !font-[700]">Available Offices</h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {filteredOffices.map((office, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_49%] relative rounded-[6px] h-[590px] overflow-hidden bg-[#EEEEEE] "
                >
                  <img
                    src={office.image}
                    alt={office.title}
                    className="w-full h-[340px] object-cover"
                  />
                  <div className="flex flex-col items-center justify-center h-[250px] gap-2">
                    <h2 className="font-[500] text-[#000] leading-[20px]">
                      {office.title}
                    </h2>
                    <p className="description !font-[kanit] font-[400] text-[#000] leading-[20px] mt-1">
                      Starting at 112 sq/ft
                    </p>
                    <p className="description !font-[kanit] !text-[14px] text-[#515151] mb-1 flex items-center">
                      <MapPin className="w-4 h-4 text-[#515151] inline-block mr-1" />
                      {office.location}
                    </p>
                    <button className="btnPrimary">APPLY NOW</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {filteredOffices.length > 2 && (
            <>
              <div className="absolute -top-1/10 -translate-y-1/2 left-[87%] z-10">
                <button
                  onClick={scrollPrev}
                  className="h-[45px] w-[45px] rounded-full flex items-center justify-center text-[#000000] border border-[#000000] bg-white"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              </div>
              <div className="absolute -top-1/10 -translate-y-1/2 right-[4%] z-10">
                <button
                  onClick={scrollNext}
                  className="h-[45px] w-[45px] rounded-full flex items-center justify-center text-[#000000] border border-[#000000] bg-white"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AvailableOffices;
