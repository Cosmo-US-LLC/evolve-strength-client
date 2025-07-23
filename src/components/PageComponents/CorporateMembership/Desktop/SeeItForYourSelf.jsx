import React, { useState, useRef, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import postImg1 from "/src/assets/images/home/facility/image_1.webp";
import postImg2 from "/src/assets/images/home/facility/image_2.webp";
import brentwoodImg1 from "/src/assets/images/home/facility/image_3.webp";
import brentwoodImg2 from "/src/assets/images/home/facility/image_4.webp";
import setonImg1 from "/src/assets/images/home/facility/image_5.webp";
import setonImg2 from "/src/assets/images/home/facility/image_6.webp";
import royalOakImg1 from "/src/assets/images/home/facility/image_7.webp";
import royalOakImg2 from "/src/assets/images/home/facility/image_8.webp";
import sunridgeImg from "/src/assets/images/home/facility/image_5.webp";
import downtownImg from "/src/assets/images/home/facility/image_6.webp";

const locations = [
  { key: "post", label: "Post", images: [postImg1, postImg2,brentwoodImg1, brentwoodImg2,setonImg1, setonImg2,royalOakImg1, royalOakImg2] },
  {
    key: "brentwood",
    label: "Brentwood",
    images: [brentwoodImg1, brentwoodImg2],
  },
  { key: "seton", label: "Seton", images: [setonImg1, setonImg2] },
  { key: "royaloak", label: "Royal Oak", images: [royalOakImg1, royalOakImg2] },
  { key: "sunridge", label: "Sunridge", images: [sunridgeImg] },
  { key: "downtown", label: "Downtown", images: [downtownImg] },
  { key: "north", label: "North", images: [sunridgeImg] },
  { key: "south", label: "South", images: [sunridgeImg] },
];

const SeeItForYourSelf = () => {
  const [activeTab, setActiveTab] = useState("post");
  const carouselRef = useRef(null);

  const activeLocation = locations.find((loc) => loc.key === activeTab);

  useEffect(() => {
    if (carouselRef.current?.scrollTo) {
      carouselRef.current.scrollTo(0);
    }
  }, [activeTab]);

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col gap-2 mb-5">
        <h2 className="text-[#1C1C1C]">
         See It For Yourself
        </h2>
        <h4 className="text-[#000] leading-[26px] max-w-[540px]">
          Our spaces are bigger, better equipped, and more flexible than most corporate fitness programs.
        </h4>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
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
                  <div className="relative aspect-[4/3] md:aspect-[16/9] xl:aspect-[21/9] 2xl:aspect-[24/9] overflow-hidden">
                    <img
                      src={img}
                      alt={activeLocation.label + " image " + (idx + 1)}
                      className="w-full object-fill transition-all duration-500 "
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-[100px] w-14 h-14 bg-transparent text-[#FFFFFF] border border-[#FFFFFF]" />
            <CarouselNext className="right-[100px] w-14 h-14 bg-transparent text-[#FFFFFF] border border-[#FFFFFF]" />
          </Carousel>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SeeItForYourSelf;
