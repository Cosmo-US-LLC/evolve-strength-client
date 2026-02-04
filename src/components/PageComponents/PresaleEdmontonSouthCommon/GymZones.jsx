import React, { useState, useEffect } from "react";
// Import images from presale folder
import strengthZoneBg1 from "../../../assets/images/presale/gym_presale_1.webp";
import strengthZoneBg2 from "../../../assets/images/presale/gym_presale_2.webp";
import strengthZoneBg3 from "../../../assets/images/presale/gym_presale_3.webp";
import strengthZoneBg4 from "../../../assets/images/presale/gym_presale_4.webp";
import strengthZoneBg5 from "../../../assets/images/presale/gym_presale_5.webp";
// Import SVG icons from presale folder
import icon1 from "../../../assets/images/presale/gym_presale_icon (1).svg";
import icon2 from "../../../assets/images/presale/gym_presale_icon (2).svg";
import icon3 from "../../../assets/images/presale/gym_presale_icon (3).svg";
import icon4 from "../../../assets/images/presale/gym_presale_icon (4).svg";


const gymZones = [
  {
    title: "Strength Zone",
    description:
      "Equip yourself with free weights, machines, and all the tools to build muscle and power.",
    bgImage: strengthZoneBg2,
    icon: icon1,
    number: 1,
  },
  {
    title: "Cardio Zone",
    description: "Stay active and boost endurance with treadmills, bikes, rowers, and more.",
    bgImage: strengthZoneBg3,
    icon: icon2,
    number: 2,
  },
  {
    title: "Turf Area",
    description: "Train functionally with open space for agility, HIIT, and dynamic workouts.",
    bgImage: strengthZoneBg4,
    icon: icon3,
    number: 3,
  },
  {
    title: "Olympic Zone",
    description: "Master lifts and explosive training with barbells, platforms, and Olympic-grade equipment.",
    bgImage: strengthZoneBg5,
    icon: icon4,
    number: 4,
  },
];

// Default background image
const defaultBg = strengthZoneBg1;

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

    // Preload all images
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
      <div className="hidden md:flex relative z-10 w-full flex-row justify-end items-end min-h-[700px]">
        {gymZones.map((zone, index) => {
          const isActive = hoveredIndex === index;
          const isLast = index === gymZones.length - 1;

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`flex-1 p-6 md:p-8 flex flex-col 
                justify-end cursor-pointer relative group overflow-hidden 
                transition-all duration-200   min-h-[700px] 
                
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

      {/* Mobile Layout - Vertical Stack */}
      <div className="md:hidden relative z-10 w-full flex flex-col">
        {gymZones.map((zone, index) => {
          const isActive = hoveredIndex === index || (hoveredIndex === null && index === 0);

          return (
            <div
              key={index}
              onClick={() => setHoveredIndex(isActive ? null : index)}
              className="relative w-full min-h-[200px] flex flex-col justify-center items-center p-6 cursor-pointer"
              style={{
                backgroundImage: `url("${zone.bgImage}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-black/50" /> */}
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center gap-3 w-full">
                <div 
                  className="flex justify-center p-[12px]"
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
                    className="w-10 h-10"
                    style={{ filter: "brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)" }}
                  />
                </div>
                
                <h3
                  className="text-center !text-[18px] font-[kanit] leading-[22px] !font-[600] text-[#fff]"
                >
                  {zone.title}
                </h3>

                {isActive && zone.description && (
                  <p
                    className="leading-[20px] font-[kanit] font-[300] text-[16px] text-center text-[#fff] mt-1 px-4"
                  >
                    {zone.description}
                  </p>
                )}

                <span
                  className="!text-[18px] font-[kanit] leading-[108%] font-bold text-[#fff] mt-2"
                >
                  {zone.number}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GymZones;

