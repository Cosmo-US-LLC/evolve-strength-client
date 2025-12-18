import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { WELLNESS_SERVICES_DISCOVER } from "@/services/trainerApi";

const SERVICE_ICONS = {
  "wellness-acupuncture": "/assets/images/Discover/wellnessC (11).svg",
  "wellness-chiropractic-care": "/assets/images/Discover/wellnessC (8).svg",
  "wellness-dietitian-services": "/assets/images/Discover/wellnessC (6).svg",
  "wellness-esthetician": "/assets/images/Discover/wellnessC (5).svg",
  "wellness-laser-therapy": "/assets/images/Discover/wellnessC (4).svg",
  "wellness-massage-therapy": "/assets/images/Discover/wellnessC (3).svg",
  "wellness-mental-health": "/assets/images/Discover/wellnessC (2).svg",
  "wellness-osteopathy": "/assets/images/Discover/wellnessC (10).svg",
  "wellness-physiotherapy": "/assets/images/Discover/wellnessC (1).svg",
  "wellness-pilates": "/assets/images/Discover/wellnessC (9).svg",
  "default": "/assets/images/Discover/wellnessC (2).svg",
};

const ServiceFilters = ({ selectedServiceId, onServiceFilterSelect }) => {
  const sortedServices = [...WELLNESS_SERVICES_DISCOVER].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="mb-8">
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="w-full relative"
      >
        <CarouselContent className="-ml-3 md:-ml-4">
          <CarouselItem className="pl-3 md:pl-4 basis-auto">
            <button
              type="button"
              onClick={() => onServiceFilterSelect("ALL")}
              className={`px-4 py-2 cursor-pointer rounded-[8px] border border-[#000] text-sm whitespace-nowrap transition-colors !font-[Kanit] !text-[20px] !font-[400] flex items-center justify-center gap-2 ${
                selectedServiceId === "ALL"
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-[#CCCCCC] hover:bg-black hover:text-white"
              }`}
            >
              <img
                src={"/assets/images/Discover/wellnessC (7).svg"}
                className=" object-contain"
              />
              All
            </button>
          </CarouselItem>

          {sortedServices.map((svc) => {
            const IconSource = SERVICE_ICONS[svc.id] || SERVICE_ICONS.default;

            return (
              <CarouselItem key={svc.id} className="pl-3 md:pl-4 basis-auto">
                <button
                  type="button"
                  onClick={() => onServiceFilterSelect(svc.id)}
                  className={`flex items-center gap-2 px-4 py-2 !text-[20px] !font-[Kanit] cursor-pointer !font-[400] rounded-[8px] border transition-colors whitespace-nowrap ${
                    selectedServiceId === svc.id
                      ? "bg-[#000] text-[#fff] border-[#CCCCCC]"
                      : "bg-white text-black border-[#CCCCCC] hover:bg-black hover:text-white"
                  }`}
                >
                  <img
                    src={IconSource}
                    alt={svc.name}
                    className="object-contain"
                  />
                  {svc.name}
                </button>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ServiceFilters;

