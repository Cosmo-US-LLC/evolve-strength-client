import React from "react";
import { Link } from "react-router-dom";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const features = [
  {
    title: "Territory Mapping",
    desc: "We help you choose high-demand areas using population, income, and market data.",
    icon: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/franchise/weHelpYouRightSpace/icon1.svg",
  },
  {
    title: "Site Visits and Lease Negotiation",
    desc: "We visit sites with you and negotiate leases that match your needs.",
    icon: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/franchise/weHelpYouRightSpace/icon2.svg",
  },
  {
    title: "Architectural Planning",
    desc: "We design layouts based on Evolve's model and guide you through the build-out.",
    icon: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/franchise/weHelpYouRightSpace/icon3.svg",
  },
  {
    title: "Construction Support",
    desc: "You get access to reliable contractors and equipment vendors we trust.",
    icon: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/franchise/weHelpYouRightSpace/icon4.svg",
  },
  {
    title: "Space Design",
    desc: "We plan for smooth traffic flow and easy subleasing to trainers and health pros.",
    icon: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/franchise/weHelpYouRightSpace/icon5.svg",
  },
  {
    title: "Ongoing Support",
    desc: "We stay involved through each stage to make sure your setup works long term.",
    icon: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/franchise/weHelpYouRightSpace/icon6.svg",
  },
];

function WeHelpYouRightSpace() {
  const [api, setApi] = React.useState();

  const scrollPrev = () => {
    api?.scrollPrev();
  };

  const scrollNext = () => {
    api?.scrollNext();
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto py-6 md:py-14 px-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div className="flex flex-col gap-2 pb-4 md:pb-0">
          <h2 className="text-[#000] w-full md:max-w-[566px] font-[700] uppercase leading-[39px]">
            WE HELP YOU FIND AND BUILD THE RIGHT SPACE
          </h2>
          <h4 className="leading-[26px] w-full md:max-w-[566px] text-[#000]">
            Location is everything and we help you get it right. Our real estate{" "}
            team supports franchisees with:
          </h4>
        </div>
        <Link to="/your-fitness-future">
          <button className="btnPrimary">Apply Now</button>
        </Link>
      </div>

      {/* Mobile Carousel */}
      <div className="block md:hidden">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent>
            {features.map((f, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-[#F5F5F5] rounded-[10px] p-6 flex flex-col justify-between min-h-[200px] shadow-sm">
                  <div className="flex items-start justify-between">
                    <h3 className="text-[#000]">{f.title}</h3>
                    <img src={f.icon} alt="" />
                  </div>
                  <p className="text-[#000] description max-w-[265px]">
                    {f.desc}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Custom Navigation Arrows */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={scrollNext}
            className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-[#F5F5F5] rounded-[10px] p-6 flex flex-col justify-between min-h-[200px] shadow-sm"
          >
            <div className="flex items-start justify-between">
              <h3 className=" text-[#000]">{f.title}</h3>

              <img src={f.icon} alt="" />
            </div>
            <p className="text-[#000] description max-w-[265px]">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeHelpYouRightSpace;
