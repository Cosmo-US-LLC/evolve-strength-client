import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
// Import images from presale folder
import strengthZoneBg1 from "../../../assets/images/presale/presale_common_desktop_1.webp";
import strengthZoneBg2 from "../../../assets/images/presale/presale_common_desktop_2.webp";
import strengthZoneBg3 from "../../../assets/images/presale/presale_common_desktop_3.webp";
import strengthZoneBg4 from "../../../assets/images/presale/presale_common_desktop_4.webp";
import strengthZoneBg1Mobile from "../../../assets/images/presale/presale_common_mobile_1.webp";
import strengthZoneBg2Mobile from "../../../assets/images/presale/presale_common_mobile_2.webp";
import strengthZoneBg3Mobile from "../../../assets/images/presale/presale_common_mobile_3.webp";
import strengthZoneBg4Mobile from "../../../assets/images/presale/presale_common_mobile_4.webp";
// import strengthZoneBg5 from "../../../assets/images/presale/gym_presale_5.webp";
// Import SVG icons from presale folder
import icon1 from "../../../assets/images/presale/gym_presale_icon (4).svg";
import icon2 from "../../../assets/images/presale/gym_presale_icon (3).svg";
import icon3 from "../../../assets/images/presale/gym_presale_icon (2).svg";
// import icon4 from "../../../assets/images/presale/gym_presale_icon (1).svg";

// Reception
// https://evolve-strength.tor1.digitaloceanspaces.com/media/1770304376936-6e908d28-3c87-41a7-97d8-c68d247a4e8f.webp
// Treadmills
// https://evolve-strength.tor1.digitaloceanspaces.com/media/1770304391753-57bca423-49c1-40a6-9a25-9f3e25df5af8.webp
// Trough
// https://evolve-strength.tor1.digitaloceanspaces.com/media/1770304404780-80b9f5db-508e-4f5a-9012-26fac72a4681.webp

const gymZones = [
  {
    title: "Strength Zone",
    description:
      "Equip yourself with free weights, machines, and all the tools to build muscle and power.",
    bgImage: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1770305496673-9d5e6fef-a478-41eb-9abb-8a34058b41b7.webp",
    icon: icon1,
    number: 1,
  },
  {
    title: "Cardio Zone",
    description: "Stay active and boost endurance with treadmills, bikes, rowers, and more.",
    bgImage: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1770304391753-57bca423-49c1-40a6-9a25-9f3e25df5af8.webp",
    icon: icon2,
    number: 2,
  },
  {
    title: "Turf Area",
    description: "Train functionally with open space for agility, HIIT, and dynamic workouts.",
    bgImage: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1770304404780-80b9f5db-508e-4f5a-9012-26fac72a4681.webp",
    icon: icon3,
    number: 3,
  },
  // {
  //   title: "Olympic Zone",
  //   description: "Master lifts and explosive training with barbells, platforms, and Olympic-grade equipment.",
  //   bgImage: strengthZoneBg5,
  //   icon: icon4,
  //   number: 4,
  // },
];

const gymZonesMobile = [
  {
    title: "Strength Zone",
    description:
      "Equip yourself with free weights, machines, and all the tools to build muscle and power.",
    // bgImage: strengthZoneBg2Mobile,
    bgImage: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1770305496673-9d5e6fef-a478-41eb-9abb-8a34058b41b7.webp",
    icon: icon1,
    number: 1,
  },
  {
    title: "Cardio Zone",
    description: "Stay active and boost endurance with treadmills, bikes, rowers, and more.",
    // bgImage: strengthZoneBg3Mobile,
    bgImage: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1770304391753-57bca423-49c1-40a6-9a25-9f3e25df5af8.webp",
    icon: icon2,
    number: 2,
  },
  {
    title: "Turf Area",
    description: "Train functionally with open space for agility, HIIT, and dynamic workouts.",
    // bgImage: strengthZoneBg4Mobile,
    bgImage: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1770304404780-80b9f5db-508e-4f5a-9012-26fac72a4681.webp",
    icon: icon3,
    number: 3,
  },
];

// Default background image
const defaultBg = "https://evolve-strength.tor1.digitaloceanspaces.com/media/1770304376936-6e908d28-3c87-41a7-97d8-c68d247a4e8f.webp";

const GymZones = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentBg, setCurrentBg] = useState(defaultBg);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload all images (5 images total: 1 default + 4 zone images)
  useEffect(() => {
    const imagesToPreload = [
      defaultBg,
      ...gymZones.map((zone) => zone.bgImage),
    ];

    console.log("Preloading images:", imagesToPreload);

    const loadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          console.log("Image loaded successfully:", src);
          resolve();
        };
        img.onerror = (error) => {
          console.error(`Failed to load image: ${src}`, error);
          resolve();
        };
        img.src = src;
      });
    };

     
    Promise.all(imagesToPreload.map(loadImage)).then(() => {
      console.log("All images preloaded");
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

  useEffect(() => {
    console.log("Current background image:", currentBg);
  }, [currentBg]);

  return (
    <div className="relative w-full overflow-hidden min-h-[400px] md:min-h-[700px]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={currentBg}
          alt="Gym zone background"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out hidden md:block"
          style={{ opacity: imagesLoaded ? 1 : 0 }}
          onLoad={() => console.log("Image loaded in img tag:", currentBg)}
          onError={(e) => console.error("Image error in img tag:", currentBg, e)}
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
        />
        {/* <div className="absolute inset-0 bg-black/20 pointer-events-none" /> */}
      </div>

      {/* Desktop Layout */}
      <div className="bg-black/60 hidden md:flex relative z-10 w-full flex-row justify-end items-end min-h-[700px]">
        {gymZones.map((zone, index) => {
          const isActive = hoveredIndex === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`flex-1 p-6 md:p-8 flex flex-col 
                justify-end cursor-pointer relative group overflow-hidden 
                transition-all duration-200   min-h-[700px] 
              ${zone?.number==2 ? "border-x border-white/20" : ""}
              `}
            >
              {/* {!isActive && (
                <div className="absolute inset-0 z-0 bg-black/40 pointer-events-none" />
              )} */}

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
                        alt={`${zone.title} icon`}
                        className="w-10 h-10 transition-all duration-200"
                        style={{ filter: "brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)" }}
                      />
                    </div>
                    <h3
                      className={`text-center md:text-center 
                        !text-[20px] md:!text-[24px] font-[kanit] leading-[26px] 
                        md:leading-[24px] !font-[600] text-[#fff]`}
                    >
                      {zone.title}
                    </h3>

                    {isActive && zone.description && (
                      <p
                        className="leading-[24px] font-[kanit] font-[300] md:leading-[26px] text-[14px]
                         md:text-[18px] text-center transition-all duration-200 
                         group-hover:translate-y-[-2px] text-[#fff] mt-2"
                      >
                        {zone.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex justify-center md:justify-center mt-auto pt-6">
                  <span
                    className={`text-[20px] !font-Kanit md:text-[24px] leading-[108%] font-bold 
                        transition-colors text-[#fff] text-center duration-200`}
                  >
                    {zone.number}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Layout - Shadcn Accordion (Figma 13070-9405) */}
      <div className="md:hidden relative z-10 w-full">
        <Accordion
          type="single"
          collapsible
          defaultValue="zone-0"
          className="w-full "
        >
          {gymZonesMobile.map((zone, index) => (
            <AccordionItem
              key={index}
              value={`zone-${index}`}
              className="group/zone  border-b-0 border-0 overflow-hidden relative mt-4"
            >
              {/* Blur only when accordion is open (group-data-[state=open]) */}
              <div
                className="absolute inset-0 z-0 pointer-events-none transition-[filter] duration-300 group-data-[state=open]/zone:blur-[4px]"
                style={{
                  backgroundImage: `url("${zone.bgImage}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transform: "scale(1.08)",
                }}
              />
              {/* <div className="absolute inset-0 z-0 bg-black/50 pointer-events-none" /> */}
              <AccordionTrigger className="bg-black/50 relative z-10 min-h-[120px] w-full flex items-center gap-3 px-4 py-4 no-underline hover:no-underline focus:outline-none focus:ring-0 rounded-none! [&>svg]:hidden group">
                <div className="flex items-center gap-3 w-full text-left">
                  <div
                    className="shrink-0 flex items-center justify-center w-[55px] h-[55px] rounded-full p-[12px]"
                    style={{
                      background: "rgba(0, 0, 0, 0.45)",
                      backdropFilter: "blur(6.3px)",
                    }}
                  >
                    <img
                      src={zone.icon}
                      alt=""
                      className="w-10 h-10 object-contain"
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)",
                      }}
                    />
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
              </AccordionTrigger>
              <AccordionContent className="bg-black/50 relative z-10 px-6 pb-4 pt-0">
                <p className="text-[#fff] text-[16px] leading-[24px] font-[kanit] font-[300]">
                  {zone.description}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default GymZones;

