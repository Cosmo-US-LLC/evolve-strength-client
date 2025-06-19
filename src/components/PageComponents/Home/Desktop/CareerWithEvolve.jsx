import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import personalTrainerImg from "/src/assets/images/home/CareerWithEvolve/career_1.webp";
import wellnessExpertImg from "/src/assets/images/home/CareerWithEvolve/career_2.webp";

const tabData = {
  trainer: {
    title: "PERSONAL TRAINER",
    image: personalTrainerImg,
    points: [
      "Keep 100 Percent of What You Earn",
      "Work On Your Own Terms",
      "Keep Full Ownership of Your Clients",
      "Get Real Support From Real Trainers",
    ],
  },
  expert: {
    title: "WELLNESS EXPERT",
    image: wellnessExpertImg,
    points: [
      "Grow your client base in our network",
      "Leverage high-end facilities and branding",
      "Customise your schedule",
      "Receive platform and marketing support",
    ],
  },
};

const CareerWithEvolve = () => {
  return (
    <div className="w-full px-6 md:px-12 py-16 bg-white">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">
          BUILD YOUR CAREER WITH EVOLVE
        </h2>
        <p className="text-sm md:text-base text-gray-600 mt-4 max-w-2xl mx-auto">
          Join our modern wellness hubs, designed with spacious, fully-equipped
          spaces to help you expand your business and deliver exceptional client
          care.
        </p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="trainer" className="max-w-[1280px] mx-auto">
        <TabsList className="flex justify-center mb-6 gap-4">
          <TabsTrigger value="trainer">Personal Trainer</TabsTrigger>
          <TabsTrigger value="expert">Wellness Expert</TabsTrigger>
        </TabsList>

        {Object.entries(tabData).map(([key, tab]) => (
          <TabsContent
            key={key}
            value={key}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <div
              className="relative bg-cover bg-center min-h-[400px]"
              style={{ backgroundImage: `url(${tab.image})` }}
            >
              <div className="absolute inset-0 bg-black/40 z-0" />
              <div className="relative z-10 p-6 md:p-10 text-white max-w-[500px]">
                <h3 className="text-xl font-bold mb-4">{tab.title}</h3>
                <div className="space-y-4 mb-6 text-sm">
  {tab.points.map((point, idx) => (
    <p
      key={idx}
      className="pb-2 border-b border-white/40 text-white"
    >
      {point}
    </p>
  ))}
</div>
                <button className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-md text-sm font-semibold transition">
                  LEARN MORE
                </button>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default CareerWithEvolve;
