import React, { useState, useRef, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import post1 from "/src/assets/images/home/facility/post1.webp";
import post2 from "/src/assets/images/home/facility/post2.webp";
import post3 from "/src/assets/images/home/facility/post3.webp";
import post4 from "/src/assets/images/home/facility/post4.webp";
import post5 from "/src/assets/images/home/facility/post5.webp";
import post6 from "/src/assets/images/home/facility/post6.webp";
import post7 from "/src/assets/images/home/facility/post7.webp";
import post8 from "/src/assets/images/home/facility/post8.webp";

import seton1 from "/src/assets/images/home/facility/seton1.webp";
import seton2 from "/src/assets/images/home/facility/seton2.webp";
import seton3 from "/src/assets/images/home/facility/seton3.webp";
import seton4 from "/src/assets/images/home/facility/seton4.webp";
import seton5 from "/src/assets/images/home/facility/seton5.webp";
import seton6 from "/src/assets/images/home/facility/seton6.webp";
import seton7 from "/src/assets/images/home/facility/seton7.webp";
import seton8 from "/src/assets/images/home/facility/seton8.webp";

import north1 from "/src/assets/images/home/facility/north1.webp";
import north2 from "/src/assets/images/home/facility/north2.webp";
import north3 from "/src/assets/images/home/facility/north3.webp";
import north4 from "/src/assets/images/home/facility/north4.webp";
import north5 from "/src/assets/images/home/facility/north5.webp";

import downtown1 from "/src/assets/images/home/facility/downtown_1.webp";
import downtown2 from "/src/assets/images/home/facility/downtown_2.webp";
import downtown3 from "/src/assets/images/home/facility/downtown_3.webp";
import downtown4 from "/src/assets/images/home/facility/downtown_4.webp";
import downtown5 from "/src/assets/images/home/facility/downtown_5.webp";
import downtown6 from "/src/assets/images/home/facility/downtown_6.webp";
import downtown7 from "/src/assets/images/home/facility/downtown_7.webp";
import downtown8 from "/src/assets/images/home/facility/downtown_8.webp";

import royalOak1 from "/src/assets/images/home/facility/royal_oak_1.webp";
import royalOak2 from "/src/assets/images/home/facility/royal_oak_2.webp";
import royalOak3 from "/src/assets/images/home/facility/royal_oak_3.webp";
import royalOak4 from "/src/assets/images/home/facility/royal_oak_4.webp";
import royalOak5 from "/src/assets/images/home/facility/royal_oak_5.webp";
import royalOak6 from "/src/assets/images/home/facility/royal_oak_6.webp";
import royalOak7 from "/src/assets/images/home/facility/royal_oak_7.webp";
import royalOak8 from "/src/assets/images/home/facility/royal_oak_8.webp";

import south1 from "/src/assets/images/home/facility/south_1.webp";
import south2 from "/src/assets/images/home/facility/south_2.webp";
import south3 from "/src/assets/images/home/facility/south_3.webp";
import south4 from "/src/assets/images/home/facility/south_4.webp";
import south5 from "/src/assets/images/home/facility/south_5.webp";
import south6 from "/src/assets/images/home/facility/south_6.webp";
import south7 from "/src/assets/images/home/facility/south_7.webp";
import south8 from "/src/assets/images/home/facility/south_8.webp";

import sunridge1 from "/src/assets/images/home/facility/sunridge1.webp";
import sunridge2 from "/src/assets/images/home/facility/sunridge2.webp";
import sunridge3 from "/src/assets/images/home/facility/sunridge3.webp";
import sunridge4 from "/src/assets/images/home/facility/sunridge4.webp";
import sunridge5 from "/src/assets/images/home/facility/sunridge5.webp";
import sunridge6 from "/src/assets/images/home/facility/sunridge6.webp";
import sunridge7 from "/src/assets/images/home/facility/sunridge7.webp";

import brentwood1 from "/src/assets/images/home/facility/brentwood1.webp";
import brentwood2 from "/src/assets/images/home/facility/brentwood2.webp";
import brentwood3 from "/src/assets/images/home/facility/brentwood3.webp";
import brentwood4 from "/src/assets/images/home/facility/brentwood4.webp";
import brentwood5 from "/src/assets/images/home/facility/brentwood5.webp";
import brentwood6 from "/src/assets/images/home/facility/brentwood6.webp";
import brentwood7 from "/src/assets/images/home/facility/brentwood7.webp";
import brentwood8 from "/src/assets/images/home/facility/brentwood8.webp";
import { ArrowLeft, ArrowRight } from "lucide-react";

const locations = [
  {
    key: "post",
    label: "Post",
    images: [post1,post2,post3,post4,post5,post6,post7,post8],
  },
  {
    key: "brentwood",
    label: "Brentwood",
    images: [brentwood1, brentwood2, brentwood3, brentwood4, brentwood5, brentwood6, brentwood7, brentwood8],
  },
  { key: "seton", label: "Seton", images: [seton1, seton2, seton3, seton4, seton5, seton6, seton7, seton8] },
  { key: "royaloak", label: "Royal Oak", images: [royalOak1, royalOak2, royalOak3, royalOak4, royalOak5, royalOak6, royalOak7, royalOak8] },
  { key: "sunridge", label: "Sunridge", images: [sunridge1, sunridge2, sunridge3, sunridge4, sunridge5, sunridge6, sunridge7] },
  { key: "downtown", label: "Downtown", images: [downtown1, downtown2, downtown3, downtown4, downtown5, downtown6, downtown7, downtown8] },
  { key: "north", label: "North", images: [north1, north2, north3, north4, north5] },
  { key: "south", label: "South", images: [south1, south2, south3, south4, south5, south6, south7, south8] },
];

const FacilityShowcase = () => {
  const [activeTab, setActiveTab] = useState(locations[0].key);
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

  const activeLocation = locations.find((loc) => loc.key === activeTab);

  useEffect(() => {
    if (carouselRef.current?.scrollTo) {
      carouselRef.current.scrollTo(0);
    }
  }, [activeTab]);

  return (
    <div className="w-full bg-white md:py-12">
      {/* Desktop Version */}
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col gap-2 mb-5 max-md:hidden">
        <h2 className="text-[#1C1C1C]">
          TAKE A PEAK INSIDE CANADA'S BEST <br /> FITNESS FACILITY
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
              {activeLocation.images.map((img, idx) => (
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
        <button className="btnPrimary">Book a Free Tour</button>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden w-full px-[0px]  pb-[48px] ">
        <div className=" flex flex-col gap-2 mb-5 px-[16px]">
          <h2 className="text-[#1C1C1C] text-[22px] font-bold">
            TAKE A PEAK INSIDE CANADA'S BEST FITNESS FACILITY
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
              <div className="flex flex-row !scrollbar-none">
                {locations.map((loc) => (
                  <button
                    key={loc.key}
                    onClick={() => setActiveTab(loc.key)}
                    className={`min-w-[100px] w-[auto] max-w-[160px] px-2 py-2 rounded-[6px]  text-[14px] font-[500] transition-all duration-200 scroll-snap-align-start ${
                      activeTab === loc.key
                        ? "bg-[#4AB04A] text-[#fff] "
                        : "bg-[#fff] text-[#1C1C1C]"
                    }`}
                    style={{ scrollSnapAlign: "start" }}
                  >
                    {loc.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <TabsContent value={activeTab} className="w-full mt-4">
            <Carousel
              opts={{ align: "start" }}
              setApi={(api) => (carouselRef.current = api)}
              className="w-full"
            >
              <CarouselContent>
                {activeLocation.images.map((img, idx) => (
                  <CarouselItem key={idx} className="w-full">
                    <div className="relative w-full aspect-[4/3] overflow-hidden  ">
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
          <button className="btnPrimary !py-[17px]">Book a Free Tour</button>
        </div>
      </div>
    </div>
  );
};

export default FacilityShowcase;
