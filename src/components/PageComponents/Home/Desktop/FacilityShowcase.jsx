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
    <div className="w-full bg-white">
      <div className="px-6 md:px-12 py-10 max-w-[1280px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-1">
          TAKE A PEAK INSIDE CANADA’S BEST FITNESS FACILITY
        </h2>
        <p className="text-gray-600 text-sm mb-6">Spacious. Affordable. Unmatched</p>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="relative overflow-x-auto rounded-full border px-4 py-1">
            <TabsList className="flex w-full gap-4">
              {locations.map((loc) => (
                <TabsTrigger
                  key={loc.key}
                  value={loc.key}
                  className="px-4 py-1 text-sm font-medium rounded-full data-[state=active]:bg-green-600 data-[state=active]:text-white"
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
                        className="w-full h-auto object-cover rounded-md transition-all duration-500"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FacilityShowcase;
