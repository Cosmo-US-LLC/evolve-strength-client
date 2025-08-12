import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { facilityLocations, getLocationData } from "@/constants/facilityImages";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Use centralized location data from facilityImages.js
const locations = facilityLocations;

const LocationSeeITYourself = () => {
  // Get location from URL path and set default tab
  const currentPath = window.location.pathname;
  let defaultTab = "post"; // default

  // Map URL locations to tab keys
  if (currentPath.includes("vancouver-post")) {
    defaultTab = "post";
  } else if (currentPath.includes("burnaby-brentwood")) {
    defaultTab = "brentwood";
  } else if (currentPath.includes("calgary-seton")) {
    defaultTab = "seton";
  } else if (currentPath.includes("calgary-royal-oak")) {
    defaultTab = "royaloak";
  } else if (currentPath.includes("calgary-sunridge")) {
    defaultTab = "sunridge";
  } else if (currentPath.includes("edmonton-downtown")) {
    defaultTab = "downtown";
  } else if (currentPath.includes("edmonton-north")) {
    defaultTab = "north";
  } else if (currentPath.includes("edmonton-south")) {
    defaultTab = "south";
  }

  const [activeTab, setActiveTab] = useState(defaultTab);
  const tabBarRef = useRef(null);
  const carouselRef = useRef(null);

  const scrollTabsLeft = () => {
    if (tabBarRef.current) {
      tabBarRef.current.scrollBy({ left: -120, behavior: "smooth" });
    }
  };
  const scrollTabsRight = () => {
    if (tabBarRef.current) {
      tabBarRef.current.scrollBy({ left: 120, behavior: "smooth" });
    }
  };

  const activeLocation = getLocationData(activeTab);

  useEffect(() => {
    if (carouselRef.current?.scrollTo) {
      carouselRef.current.scrollTo(0);
    }
  }, [activeTab]);

  // Update active tab when URL changes (user navigates to different location)
  useEffect(() => {
    const currentPath = window.location.pathname;
    let newDefaultTab = "post";

    if (currentPath.includes("vancouver-post")) {
      newDefaultTab = "post";
    } else if (currentPath.includes("burnaby-brentwood")) {
      newDefaultTab = "brentwood";
    } else if (currentPath.includes("calgary-seton")) {
      newDefaultTab = "seton";
    } else if (currentPath.includes("calgary-royal-oak")) {
      newDefaultTab = "royaloak";
    } else if (currentPath.includes("calgary-sunridge")) {
      newDefaultTab = "sunridge";
    } else if (currentPath.includes("edmonton-downtown")) {
      newDefaultTab = "downtown";
    } else if (currentPath.includes("edmonton-north")) {
      newDefaultTab = "north";
    } else if (currentPath.includes("edmonton-south")) {
      newDefaultTab = "south";
    }

    setActiveTab(newDefaultTab);

    // Scroll to the active tab in mobile view
    setTimeout(() => {
      const activeTabElement = tabBarRef.current?.querySelector(
        `[data-tab="${newDefaultTab}"]`
      );
      if (activeTabElement && tabBarRef.current) {
        activeTabElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }, 100);
  }, [currentPath]);

  return (
    <div className="w-full bg-white md:py-12">
      {/* Desktop Version */}
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col gap-2 mb-5 max-md:hidden">
        <h2 className="text-[#1C1C1C] uppercase">
          Access All Evolve Locations with <br /> Your Membership
        </h2>
        <h4 className="text-[#000] leading-[26px]">
          Spacious. Affordable. Unmatched
        </h4>
      </div>
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full max-md:hidden"
      >
        <div className="w-full max-w-[1220px] mx-auto relative rounded-[10px] border">
          <TabsList className="flex w-full  bg-[#fff] h-[48px] p-[6px]">
            {locations.map((loc) => (
              <TabsTrigger
                key={loc.key}
                value={loc.key}
                data-tab={loc.key}
                className="text-[16px] font-[Kanit] font-[500] leading-[16px] rounded-[5px] text-[#000] cursor-pointer data-[state=active]:bg-[#4AB04A] data-[state=active]:text-[#FFF]"
              >
                {loc.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <TabsContent value={activeTab} className="mt-6">
          <Carousel
            opts={{ align: "start" }}
            setApi={(api) => (carouselRef.current = api)}
            className="w-full"
          >
            <CarouselContent>
              {activeLocation.images.desktop.map((img, idx) => (
                <CarouselItem key={idx} className="w-full">
                  <div className="relative w-full aspect-[4/3] md:aspect-[16/9] xl:aspect-[21/9] 2xl:aspect-[24/9] overflow-hidden">
                    <img
                      src={img}
                      alt={`${activeLocation.label} image ${idx + 1}`}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 md:left-[100px] w-12 h-12 md:w-14 md:h-14 bg-transparent text-white border border-white" />
            <CarouselNext className="right-4 md:right-[100px] w-12 h-12 md:w-14 md:h-14 bg-transparent text-white border border-white" />
          </Carousel>
        </TabsContent>
      </Tabs>
      <div className="flex justify-center mt-6 max-md:hidden">
        <Link to="https://join.evolvestrength.ca/tour-form/">
            <button className="btnPrimary">BOOK A FREE TOUR</button>
            </Link>


      </div>

      {/* Mobile Version */}
      <div className="md:hidden w-full px-[0px]  pb-[48px] ">
        <div className=" flex flex-col gap-2 mb-5 px-[16px]">
          <h2 className="text-[#1C1C1C] text-[22px] font-bold uppercase">
            Access All Evolve Locations with Your Membership
          </h2>
          <h4 className="text-[#000] leading-[26px] text-[15px]">
            Spacious. Affordable. Unmatched
          </h4>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="relative w-full flex items-start px-[16px] pt-10">
            {/* Arrow buttons at top right */}
            <div className="absolute -top-4 right-4 flex gap-3 z-10">
              <button
                onClick={scrollTabsLeft}
                className="bg-white border border-[#E8EBEF] w-8 h-8 flex items-center justify-center shadow rounded-full"
              >
                <ArrowLeft className="w-4 h-4 text-[#1C1C1C]" />
              </button>
              <button
                onClick={scrollTabsRight}
                className="bg-white border border-[#E8EBEF] w-8 h-8 flex items-center justify-center shadow rounded-full"
              >
                <ArrowRight className="w-4 h-4 text-[#1C1C1C]" />
              </button>
            </div>
            <div
              ref={tabBarRef}
              className="overflow-x-auto rounded-[6px] border !scrollbar-none w-full py-2 "
              style={{ scrollSnapType: "x mandatory" }}
            >
              <div className="flex flex-row scrollbar-none ">
                {locations.map((loc) => (
                  <button
                    key={loc.key}
                    onClick={() => setActiveTab(loc.key)}
                    className={`min-w-[100px] w-[auto] max-w-[160px] px-2 py-2 rounded-[8px]  text-[14px] font-[500] transition-all duration-200 scroll-snap-align-start ${
                      activeTab === loc.key
                        ? "bg-[#4AB04A] text-[#fff] "
                        : "bg-[#fff] text-[#1C1C1C]"
                    }`}
                    style={{ scrollSnapAlign: "start" }}
                    data-tab={loc.key}
                  >
                    {loc.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <TabsContent value={activeTab} className="w-full mt-4 ">
            <Carousel
              opts={{ align: "start" }}
              setApi={(api) => (carouselRef.current = api)}
              className="w-full"
            >
              <CarouselContent>
                {activeLocation.images.mobile.map((img, idx) => (
                  <CarouselItem key={idx} className="w-full">
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <img
                        src={img}
                        alt={`${activeLocation.label} image ${idx + 1}`}
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 w-10 h-10 bg-white text-[#1C1C1C] border border-[#E8EBEF]" />
              <CarouselNext className="right-2 w-10 h-10 bg-white text-[#1C1C1C] border border-[#E8EBEF]" />
            </Carousel>
          </TabsContent>
        </Tabs>
        <div className="flex justify-center mt-6 px-[16px] py-[17px]">
           <Link to="https://join.evolvestrength.ca/tour-form/">
                      <button className="btnPrimary">BOOK A FREE TOUR</button>
                      </Link>
        </div>
      </div>
    </div>
  );
};

export default LocationSeeITYourself;
