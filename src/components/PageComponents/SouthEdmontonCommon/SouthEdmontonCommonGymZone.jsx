import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

import icon1 from "../../../assets/images/presale/gym_presale_icon_3.svg";
import icon2 from "../../../assets/images/presale/gym_presale_icon_2.svg";
import icon3 from "../../../assets/images/presale/gym_presale_icon_1.svg";

const gymZones = [
  {
    title: "Strength Zone",
    description:
      "Equip yourself with free weights, machines, and all the tools to build muscle and power.",
    bgImage:
      "https://evolve-strength.tor1.digitaloceanspaces.com/media/1770305496673-9d5e6fef-a478-41eb-9abb-8a34058b41b7.webp",
    icon: icon1,
    number: 1,
  },
  {
    title: "Cardio Zone",
    description:
      "Stay active and boost endurance with treadmills, bikes, rowers, and more.",
    bgImage:
      "https://evolve-strength.tor1.digitaloceanspaces.com/media/1770304391753-57bca423-49c1-40a6-9a25-9f3e25df5af8.webp",
    icon: icon2,
    number: 2,
  },
  {
    title: "Turf Area",
    description:
      "Train functionally with open space for agility, HIIT, and dynamic workouts.",
    bgImage:
      "https://evolve-strength.tor1.digitaloceanspaces.com/media/1770304404780-80b9f5db-508e-4f5a-9012-26fac72a4681.webp",
    icon: icon3,
    number: 3,
  },
];

const gymZonesMobile = [
  {
    title: "Strength Zone",
    description:
      "Equip yourself with free weights, machines, and all the tools to build muscle and power.",
    bgImage:
      "https://evolve-strength.tor1.digitaloceanspaces.com/media/1770305496673-9d5e6fef-a478-41eb-9abb-8a34058b41b7.webp",
    icon: icon1,
    number: 1,
  },
  {
    title: "Cardio Zone",
    description:
      "Stay active and boost endurance with treadmills, bikes, rowers, and more.",
    bgImage:
      "https://evolve-strength.tor1.digitaloceanspaces.com/media/1770304391753-57bca423-49c1-40a6-9a25-9f3e25df5af8.webp",
    icon: icon2,
    number: 2,
  },
  {
    title: "Turf Area",
    description:
      "Train functionally with open space for agility, HIIT, and dynamic workouts.",
    bgImage:
      "https://evolve-strength.tor1.digitaloceanspaces.com/media/1770304404780-80b9f5db-508e-4f5a-9012-26fac72a4681.webp",
    icon: icon3,
    number: 3,
  },
];

const defaultBg =
  "https://evolve-strength.tor1.digitaloceanspaces.com/media/1770304376936-6e908d28-3c87-41a7-97d8-c68d247a4e8f.webp";

function SouthEdmontonCommonGymZone() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentBg, setCurrentBg] = useState(defaultBg);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imagesToPreload = [defaultBg, ...gymZones.map((zone) => zone.bgImage)];

    const loadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve();
        img.src = src;
      });
    };

    Promise.all(imagesToPreload.map(loadImage)).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (hoveredIndex !== null) {
      setCurrentBg(gymZones[hoveredIndex].bgImage);
    } else {
      setCurrentBg(defaultBg);
    }
  }, [hoveredIndex]);

  return (
    <section className="relative w-full overflow-hidden min-h-[400px] md:min-h-[800px]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={currentBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out hidden md:block"
          style={{ opacity: imagesLoaded ? 1 : 0 }}
        />
        <div
          key={currentBg}
          className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out hidden md:block"
          style={{
            backgroundImage: `url("${currentBg}")`,
            backgroundSize: "cover",

            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: imagesLoaded ? 1 : 0,
          }}
          aria-hidden
        />
      </div>

      <div className="bg-black/60 hidden md:flex relative z-10 w-full flex-row justify-end items-end min-h-[800px]">
        {gymZones.map((zone, index) => {
          const isActive = hoveredIndex === index;

          return (
            <div
              key={zone.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`flex-1 p-6 md:p-8 flex flex-col justify-end cursor-pointer relative group overflow-hidden transition-all duration-200 min-h-[800px] ${
                zone.number === 2 ? "border-x border-white/20" : ""
              }`}
            >
              <div className="relative z-10 flex max-h-[400px] flex-col justify-between h-full w-full">
                <div className="flex flex-col justify-between gap-4 md:gap-6">
                  <div className="min-h-[220px]">
                    <div
                      className="flex justify-center p-[12px] mx-auto md:justify-center mb-2"
                      style={{
                        width: "55px",
                        height: "55px",
                        borderRadius: "27.5px",
                        background: "rgba(0, 0, 0, 0.45)",
                        backdropFilter: "blur(6.300000190734863px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={zone.icon}
                        alt=""
                        className="w-10 h-10 transition-all duration-200 opacity-80"
                      />
                    </div>
                    <h3 className="text-center md:text-center !text-[20px] md:!text-[24px] font-[kanit] leading-[26px] md:leading-[24px] !font-[600] text-[#fff]">
                      {zone.title}
                    </h3>

                    {isActive && zone.description && (
                      <p className="leading-[24px] font-[kanit] font-[300] md:leading-[26px] text-[14px] md:text-[18px] text-center transition-all duration-200 group-hover:translate-y-[-2px] text-[#fff] mt-2">
                        {zone.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="md:hidden relative z-10 w-full">
        <Accordion type="single" collapsible defaultValue="zone-0" className="w-full ">
          {gymZonesMobile.map((zone, index) => (
            <AccordionItem
              key={zone.title}
              value={`zone-${index}`}
              className="group/zone border-b-0 border-0 overflow-hidden relative mt-4"
            >
              <div
                className="absolute inset-0 z-0 pointer-events-none transition-[filter] duration-300 group-data-[state=open]/zone:blur-[4px]"
                style={{
                  backgroundImage: `url("${zone.bgImage}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transform: "scale(1.08)",
                }}
              />
              <AccordionTrigger className="bg-black/50 relative z-10 min-h-[300px] w-full flex flex-col justify-center items-center gap-3 px-4 py-4 no-underline hover:no-underline focus:outline-none focus:ring-0 rounded-none! [&>svg]:hidden group">
                <div className="flex items-center gap-3 w-full text-left">
                  <div
                    className="shrink-0 flex items-center justify-center w-[55px] h-[55px] rounded-full p-[12px]"
                    style={{
                      background: "rgba(0, 0, 0, 0.45)",
                      backdropFilter: "blur(6.3px)",
                    }}
                  >
                    <img src={zone.icon} alt="" className="w-10 h-10 object-contain opacity-80" />
                  </div>
                  <h3 className="flex-1 text-[#fff] !text-[20px] font-[kanit] leading-[22px] font-[500]">
                    {zone.title}
                  </h3>
                  <div
                    className="shrink-0 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center border border-white/20 relative"
                    aria-hidden
                  >
                    <Plus className="w-4 h-4 text-white absolute inset-0 m-auto group-data-[state=open]:hidden" />
                    <Minus className="w-4 h-4 text-white absolute inset-0 m-auto group-data-[state=closed]:hidden" />
                  </div>
                </div>
                <AccordionContent className="relative z-10 px-2 pb-4 pt-0">
                  <p className="text-[#fff] text-[16px] leading-[24px] font-[kanit] font-[300]">
                    {zone.description}
                  </p>
                </AccordionContent>
              </AccordionTrigger>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default SouthEdmontonCommonGymZone;
