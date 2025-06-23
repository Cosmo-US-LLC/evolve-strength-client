import React, { useState, useRef, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import postImg from "/src/assets/images/home/facility/image_1.webp";
import brentwoodImg from "/src/assets/images/home/facility/image_2.webp";
import setonImg from "/src/assets/images/home/facility/image_3.webp";
import royalOakImg from "/src/assets/images/home/facility/image_4.webp";
import sunridgeImg from "/src/assets/images/home/facility/image_5.webp";
import downtownImg from "/src/assets/images/home/facility/image_6.webp";
import northImg from "/src/assets/images/home/facility/image_7.webp";
import southImg from "/src/assets/images/home/facility/image_8.webp";

const locations = [
  { key: "post", label: "Post", image: postImg },
  { key: "brentwood", label: "Brentwood", image: brentwoodImg },
  { key: "seton", label: "Seton", image: setonImg },
  { key: "royaloak", label: "Royal Oak", image: royalOakImg },
  { key: "sunridge", label: "Sunridge", image: sunridgeImg },
  { key: "downtown", label: "Downtown", image: downtownImg },
  { key: "north", label: "North", image: northImg },
  { key: "south", label: "South", image: southImg },
];

const FacilityShowcase = () => {
  const [activeTab, setActiveTab] = useState("post");
  const carouselRef = useRef(null);

  const activeIndex = locations.findIndex((loc) => loc.key === activeTab);

  useEffect(() => {
    if (carouselRef.current?.scrollTo) {
      carouselRef.current.scrollTo(activeIndex);
    }
  }, [activeIndex]);

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col gap-2 mb-6">
        <h2 className="text-[#1C1C1C]">
          TAKE A PEAK INSIDE CANADA’S BEST <br /> FITNESS FACILITY
        </h2>
        <h4 className="text-[#000] leading-[26px]">
          Spacious. Affordable. Unmatched
        </h4>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="w-full max-w-[1220px] mx-auto relative rounded-[5px] border ">
          <TabsList className="flex w-full gap-4 bg-[#fff] px-2 py-7">
            {locations.map((loc) => (
              <TabsTrigger
                key={loc.key}
                value={loc.key}
                className="text-[16px] px-2 py-5 font-[Kanit] font-[500] leading-[16px] rounded-[5px] text-[#000] data-[state=active]:bg-[#4AB04A] data-[state=active]:text-[#FFF]"
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
            onSlideChange={(index) => setActiveTab(locations[index].key)}
            className="w-full"
          >
            <CarouselContent>
              {locations.map((loc) => (
                <CarouselItem key={loc.key} className="w-full">
                  <div className="relative">
                    <img
                      src={loc.image}
                      alt={loc.label}
                      className="w-full h-auto max-h-[600px] object-fill transition-all duration-500 "
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-[100px]" />
            <CarouselNext className="right-[100px]" />
          </Carousel>
        </TabsContent>
      </Tabs>
      <div className="flex justify-center mt-6">
        <button className="btnPrimary">Book a Free Tour</button>
      </div>
    </div>
  );
};

export default FacilityShowcase;
