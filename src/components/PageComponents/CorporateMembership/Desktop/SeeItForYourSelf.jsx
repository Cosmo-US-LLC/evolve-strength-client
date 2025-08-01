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
import { ArrowLeft, ArrowRight } from "lucide-react";

const locations = [
  {
    key: "post",
    label: "Post",
    images: [
      postImg1,
      postImg2,
      brentwoodImg1,
      brentwoodImg2,
      setonImg1,
      setonImg2,
      royalOakImg1,
      royalOakImg2,
    ],
  },
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

const SeeItForYourSelf= () => {
  const [activeTab, setActiveTab] = useState(locations[0].key);
  const tabBarRef = useRef(null);
  const carouselRef = useRef(null);

  const scrollTabsLeft = () => {
    if (tabBarRef.current) {
      tabBarRef.current.scrollBy({ left: -120, behavior: 'smooth' });
    }
  };
  const scrollTabsRight = () => {
    if (tabBarRef.current) {
      tabBarRef.current.scrollBy({ left: 120, behavior: 'smooth' });
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
          See It For Yourself
        </h2>
        <h4 className="text-[#000] leading-[26px]">
          Our spaces are bigger, better equipped, and more flexible than most corporate fitness programs.
        </h4>
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-md:hidden">
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
      <div className="md:hidden w-full px-[0px] pt-10  pb-[48px] ">
        <div className=" flex flex-col gap-2 mb-5 px-[16px]">
          <h2 className="text-[#1C1C1C] text-[22px] font-bold">
            See It For Yourself
          </h2>
          <h4 className="text-[#000] leading-[26px] text-[15px]">
            Our spaces are bigger, better equipped, and more flexible than most corporate fitness programs.
          </h4>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="relative w-full flex items-start px-[16px] pt-10">
            {/* Arrow buttons at top right */}
            <div className="absolute -top-4 right-4 flex gap-3 z-10">
              <button onClick={scrollTabsLeft} className="bg-white border border-[#E8EBEF] w-8 h-8 flex items-center justify-center shadow rounded-full">
                <ArrowLeft className="w-4 h-4 text-[#1C1C1C]" />
              </button>
              <button onClick={scrollTabsRight} className="bg-white border border-[#E8EBEF] w-8 h-8 flex items-center justify-center shadow rounded-full">
                <ArrowRight className="w-4 h-4 text-[#1C1C1C]" />
              </button>
            </div>
            <div
              ref={tabBarRef}
              className="overflow-x-auto rounded-[10px] border !scrollbar-none w-full py-2 "
              style={{ scrollSnapType: 'x mandatory' }}
            >
             <div className="flex flex-row !scrollbar-none">
             {locations.map((loc) => (
                <button
                  key={loc.key}
                  onClick={() => setActiveTab(loc.key)}
                  className={`min-w-[100px] w-[auto] max-w-[160px] px-2 py-2 rounded-[10px]  text-[14px] font-[500] transition-all duration-200 scroll-snap-align-start ${
                    activeTab === loc.key
                      ? 'bg-[#4AB04A] text-[#fff] text-[#4AB04A] '
                      : 'bg-[#fff] text-[#1C1C1C]'
                  }`}
                  style={{ scrollSnapAlign: 'start' }}
                >
                  {loc.label}
                </button>
              ))}
             </div>
            </div>
          </div>
          <TabsContent value={activeTab} className="w-full mt-4 px-[8px]">
            <Carousel
              opts={{ align: "start" }}
              setApi={(api) => (carouselRef.current = api)}
              className="w-full"
            >
              <CarouselContent>
                {activeLocation.images.map((img, idx) => (
                  <CarouselItem key={idx} className="w-full">
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[10px]">
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

export default SeeItForYourSelf;
