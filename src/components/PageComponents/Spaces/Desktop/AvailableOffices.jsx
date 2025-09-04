import React, { useState, useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NoOfficeAvilable from "./NoOfficeAvailable";

const tabs = [
  { id: "All", label: "All (07)" },
  { id: "Calgary Royal Oak", label: "Calgary Royal Oak" },
  { id: "Edmonton Downtown", label: "Edmonton Downtown" },
  { id: "Edmonton North", label: "Edmonton North" },
  { id: "Post", label: "Post" },
  { id: "Brentwood", label: "Brentwood" },
  { id: "Calgary Seton", label: "Calgary Seton" },
  // { id: "Calgary Sunridge", label: "Calgary Sunridge" },
  { id: "Edmonton South", label: "Edmonton South" },
];

const allOffices = [
  {
    title: "Executive Office",
    location: "Calgary Royal Oak",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/spaces/AvailableOffices/royal_E.webp",
    size: "Starting at 130 sq/ft",
    roomStatus: "Unfurnished | With or Without a Sink",
  },
  {
    title: "Premium Office Suite",
    location: "Calgary Royal Oak",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/spaces/AvailableOffices/royal_P.webp",
    size: "Starting at 170 sq/ft",
    roomStatus: "Unfurnished | With a Sink",
  },
  // {
  //   title: "Anchor",
  //   location: "Calgary Royal Oak",
  //   image: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/spaces/AvailableOffices/royal_A.webp",
  //   size: "Starting at 1170 sq/ft",
  //   roomStatus:"Unfurnished | With or Without a Sink"

  // },
  {
    title: "Executive Office",
    location: "Edmonton North",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/spaces/AvailableOffices/royal_E.webp",
    size: "Starting at 112 sq/ft",
    roomStatus: "Unfurnished | Without a Sink",
  },
  {
    title: "Executive Office",
    location: "Edmonton North",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/spaces/AvailableOffices/royal_P.webp",
    size: "Starting at 114 sq/ft",
    roomStatus: "Unfurnished | Without a Sink",
  },
  {
    title: "Executive Office",
    location: "Edmonton Downtown",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/spaces/AvailableOffices/royal_E.webp",
    size: "Starting at 120 sq/ft",
    roomStatus: "Unfurnished | Without a Sink",
  },
  // {
  //   title: "Premium Office Suite",
  //   location: "Edmonton Downtown",
  //   image: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/spaces/AvailableOffices/royal_P.webp",
  //   size: "Starting at 170 sq/ft",
  //   roomStatus:"Unfurnished | With or Without a Sink"
  // },
  {
    title: "Executive Office",
    location: "Calgary Sunridge",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/spaces/AvailableOffices/CSSlides_1.webp",
    size: "Starting at 121 sq/ft",
    roomStatus: "Unfurnished | Without a Sink",
  },
  {
    title: "Executive Office",
    location: "Calgary Sunridge",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/spaces/AvailableOffices/CSSlides_1.webp",
    size: "Starting at 121 sq/ft",
    roomStatus: "Unfurnished | Without a Sink",
  },
];

const AvailableOffices = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [activeTabmobile, setActiveTabmobile] = useState(tabs[0].id);
  const carouselRef = useRef(null);

  // Desktop carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
    align: "start",
    loop: false,
  });

  // Mobile carousel
  const [emblaRefMobile, emblaApiMobile] = useEmblaCarousel({
    containScroll: "trimSnaps",
    align: "start",
    loop: false,
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const scrollPrevMobile = () => emblaApiMobile && emblaApiMobile.scrollPrev();
  const scrollNextMobile = () => emblaApiMobile && emblaApiMobile.scrollNext();

  // Define unavailable locations
  const unavailableLocations = [
    "Edmonton South",
    "Calgary Seton",
    "Brentwood",
    "Post",
  ];

  const filteredOffices =
    activeTab === "All"
      ? allOffices.filter(
          (office) => !unavailableLocations.includes(office.location)
        )
      : allOffices.filter((o) => o.location === activeTab);

  const mobileFilteredOffices =
    activeTabmobile === "All"
      ? allOffices.filter(
          (office) => !unavailableLocations.includes(office.location)
        )
      : allOffices.filter((o) => o.location === activeTabmobile);

  // Re-initialize carousel when filtered content changes
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi, filteredOffices.length]);

  useEffect(() => {
    if (emblaApiMobile) {
      emblaApiMobile.reInit();
    }
  }, [emblaApiMobile, mobileFilteredOffices.length]);

  return (
    <div id="available-offices">
      <div className="py-12 max-md:hidden">
        <div className="w-[100%] max-w-[1280px] px-8 mx-auto flex flex-col gap-10">
          <div className="flex flex-wrap justify-around gap-2 rounded-[6px] border p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1 rounded-[5px] text-sm font-medium cursor-pointer ${
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
            {unavailableLocations.includes(activeTab) ? (
              <NoOfficeAvilable />
            ) : (
              <>
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
                            {office.size}
                          </p>
                          <p className="description !font-[kanit] font-[400] text-[#000] leading-[20px] mt-1">
                            {office.roomStatus}
                          </p>
                          <p className="description !font-[kanit] !text-[14px] text-[#515151] mb-1 flex items-center">
                            <MapPin className="w-4 h-4 text-[#515151] inline-block mr-1" />
                            {office.location}
                          </p>
                          <Link to="/join-the-wait-list">
                            <button className="btnPrimary">APPLY NOW</button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {filteredOffices.length > 2 && (
                  <>
                    <div className="absolute -top-1/12 -translate-y-1/2 left-[91%] z-10">
                      <button
                        onClick={scrollPrev}
                        className="h-[45px] w-[45px] rounded-full flex items-center justify-center text-[#000000] border border-[#000000] bg-white cursor-pointer hover:bg-[#000000] hover:text-[#fff]"
                      >
                        <ArrowLeft className="w-6 h-6" />
                      </button>
                    </div>
                    <div className="absolute -top-1/12 -translate-y-1/2 right-[0.5%] z-10">
                      <button
                        onClick={scrollNext}
                        className="h-[45px] w-[45px] rounded-full flex items-center justify-center text-[#000000] border border-[#000000] bg-white cursor-pointer hover:bg-[#000000] hover:text-[#fff]"
                      >
                        <ArrowRight className="w-6 h-6" />
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="py-12 md:hidden">
        <div className="w-[100%] max-w-[1280px]  mx-auto flex flex-col gap-10">
          <h2 className="uppercase px-[16px] !font-[700]">
            Available <br /> Offices
          </h2>

          <div className="px-[16px]">
            <Carousel
              opts={{ align: "start" }}
              setApi={(api) => (carouselRef.current = api)}
              className="w-full relative px-[8px] border-[1px]  rounded-[10px]"
            >
              <CarouselContent className="p-2">
                {tabs.map((tab) => (
                  <CarouselItem key={tab.id} className="basis-auto px-0 mx-2">
                    <button
                      onClick={() => setActiveTabmobile(tab.id)}
                      className={`px-2 py-1 rounded-[5px] text-sm font-medium whitespace-nowrap ${
                        activeTabmobile === tab.id
                          ? "bg-[#4AB04A] text-[#fff]"
                          : "bg-white text-[#000000]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div>
                <CarouselPrevious className="absolute left-[75%] -top-16 w-9 h-9 bg-white text-[#1C1C1C] border border-[#E8EBEF] cursor-pointer hover:bg-[#000000] hover:text-[#fff]" />
                <CarouselNext className="absolute right-2 -top-16 w-9 h-9 bg-white text-[#1C1C1C] border border-[#E8EBEF] cursor-pointer hover:bg-[#000000] hover:text-[#fff]" />
              </div>
            </Carousel>
          </div>

          <div className="relative">
            {unavailableLocations.includes(activeTabmobile) ? (
              <div className="px-[16px]">
                <NoOfficeAvilable />
              </div>
            ) : (
              <>
                <div className="overflow-hidden" ref={emblaRefMobile}>
                  <div className="flex gap-4 relative">
                    {mobileFilteredOffices.map((office, idx) => (
                      <div
                        key={idx}
                        className="flex-[0_0_100%] relative rounded-[6px] h-[530px] overflow-hidden bg-[#EEEEEE] "
                      >
                        <img
                          src={office.image}
                          alt={office.title}
                          className="w-full h-[340px] object-cover"
                        />
                        <div className="flex flex-col items-center justify-center pt-4 gap-2">
                          <h2 className="!font-[500] text-[#000] !text-[24px] leading-[20px]">
                            {office.title}
                          </h2>
                          <p className="description !font-[kanit] font-[400] text-[#000] leading-[20px] mt-1">
                            {office.size}
                          </p>
                          <p className="description !font-[kanit] font-[400] text-[#000] leading-[20px] mt-1">
                            {office.roomStatus}
                          </p>

                          <Link to="/join-the-wait-list">
                            <button className="btnPrimary">APPLY NOW</button>
                          </Link>
                        </div>
                      </div>
                    ))}
                    ``
                  </div>
                  {mobileFilteredOffices.length > 2 && (
                    <>
                      <div className="absolute top-[50%] -translate-y-1/2 left-[4%] z-10">
                        <button
                          onClick={scrollPrevMobile}
                          className="h-[45px] w-[45px] rounded-full flex items-center justify-center text-[#000000] border border-[#000000] bg-white"
                        >
                          <ArrowLeft className="w-6 h-6" />
                        </button>
                      </div>
                      <div className="absolute top-[50%] -translate-y-1/2 right-[4%] z-10">
                        <button
                          onClick={scrollNextMobile}
                          className="h-[45px] w-[45px] rounded-full flex items-center justify-center text-[#000000] border border-[#000000] bg-white"
                        >
                          <ArrowRight className="w-6 h-6" />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableOffices;
