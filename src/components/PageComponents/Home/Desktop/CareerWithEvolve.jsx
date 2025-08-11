import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

// Desktop images
import personalTrainerImg from "/src/assets/images/home/CareerWithEvolve/career_1.webp";
import wellnessExpertImg from "/src/assets/images/home/CareerWithEvolve/career_2.webp";

// Mobile images
import personalTrainerImgMobile from "/src/assets/images/home/CareerWithEvolve/career_mob_1.webp";
import wellnessExpertImgMobile from "/src/assets/images/home/CareerWithEvolve/career_mob_2.webp";

const tabData = {
  trainer: {
    title: "PERSONAL TRAINER",
    image: {
      desktop: personalTrainerImg,
      mobile: personalTrainerImgMobile,
    },
    description:
      "Build your own personal training business inside Canada's most advanced fitness facility.",
    points: [
      "Keep 100 Percent of What You Earn",
      "Work On Your Own Terms",
      "Keep Full Ownership of Your Clients",
      "Get Real Support From Real Trainers",
    ],
  },
  expert: {
    title: "WELLNESS EXPERT",
    image: {
      desktop: wellnessExpertImg,
      mobile: wellnessExpertImgMobile,
    },
    description:
      "Flexible office spaces for wellness professionals inside Canada's largest fitness facilities.",
    points: [
      "Build Your Business in a Prime Location",
      "Premium Amenities for You & Your Clients",
      "All-Inclusive Office Setup",
      "Connect with a Like-Minded Community",
    ],
  },
};

const CareerWithEvolve = () => {
  return (
    <div className="w-full md:py-12 max-md:pb-[48px] max-md:pt-0">
      <div className="w-full max-w-[1280px] md:px-8 max-md:px-[16px] mx-auto flex flex-col items-start gap-6">
        <div className="flex flex-col items-start gap-3">
          <h2 className="uppercase">BUILD YOUR CAREER WITH EVOLVE</h2>
          <h4 className="max-w-[680px] leading-[26px]">
            Join our modern wellness hubs, designed with spacious,
            fully-equipped spaces to help you expand your business and deliver
            exceptional client care.
          </h4>
        </div>

        <Tabs defaultValue="trainer" className="w-full flex items-center">
          <TabsList className="flex gap-0 bg-[#2E2E2E] h-[50px] rounded-[5px] p-1 mb-4">
            <TabsTrigger
              value="trainer"
              className="data-[state=active]:bg-white data-[state=active]:text-[#4AB04A] text-[#ffffff] font-[kanit] text-[18px] font-[300] leading-[26px] px-6 py-2 rounded-[5px] transition-all duration-700 ease-in-out"
            >
              Personal Trainer
            </TabsTrigger>

            <TabsTrigger
              value="expert"
              className="data-[state=active]:bg-white data-[state=active]:text-[#4AB04A] text-[#ffffff] font-[kanit] text-[18px] font-[300] leading-[26px] px-6 py-2 rounded-[5px] transition-all duration-700 ease-in-out"
            >
              Wellness Expert
            </TabsTrigger>
          </TabsList>

          {Object.entries(tabData).map(([key, tab]) => (
            <TabsContent
              key={key}
              value={key}
              className="rounded-[10px] overflow-hidden shadow-lg w-full"
            >
              <div className="relative w-full min-h-[600px] flex flex-col justify-center">
                {/* Desktop background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
                  style={{ backgroundImage: `url(${tab.image.desktop})` }}
                />

                {/* Mobile background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
                  style={{ backgroundImage: `url(${tab.image.mobile})` }}
                />

                <div className="absolute inset-y-0 left-0 w-[50%] z-0 md:bg-gradient-to-r  from-black/90 via-black/40 to-transparent " />
                <div className="relative z-10 md:p-10 max-md:px-[16px] max-md:py-[48px] max-w-[500px]">
                  <h2 className=" mb-4 text-[#fff]">{tab.title}</h2>
                  <h4 className="mb-4 text-[#fff] leading-[26px]">
                    {tab.description}
                  </h4>
                  <div className="space-y-6 mb-6 font-[kanit] text-[18px] leading-[26px] font-[500]">
                    {tab.points.map((point, idx) => (
                      <p
                        key={idx}
                        className={`flex pb-6 text-white ${
                          idx !== tab.points.length - 1
                            ? "border-b border-[#FFFFFF]"
                            : ""
                        }`}
                      >
                        {point}
                      </p>
                    ))}
                  </div>
                   <Link to ="/spaces">
            <button className="btnPrimary">learn more</button>
            </Link>                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default CareerWithEvolve;
