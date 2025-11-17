// import React from "react";
// import EquipmentCardsMarquee from "./EquipmentCardsMarquee";
// // import locationImg from "";
// // Equipment cards data - images from Figma
// const equipmentCards = [
//   {
//     image:
//       "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332157739-0fd6a943-b72e-4bf3-a653-b1242798f96c.png",
//     label: "Cycle Machines",
//   },
//   {
//     image:
//       "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332241562-b3a04a59-83d8-41f7-a9f4-b8c54432607e.png",
//     label: "Power Rack",
//   },
//   {
//     image:
//       "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332274042-685a10c5-e431-4564-a3af-45c54484bdba.png",
//     label: "Medicine Ball Rack",
//   },
//   {
//     image:
//       "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332295250-944c5869-09f9-49ba-bb2a-8db5571fddce.png",
//     label: "Sprint/Sled Track",
//   },
//   {
//     image:
//       "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332345190-94b3cf74-02cb-456e-ac49-e8f1446ee774.png",
//     label: "Crossover Machine",
//   },
//   {
//     image:
//       "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332363471-948f816b-ffb3-4e59-b2ec-d455422de2e0.png",
//     label: "Eleiko Pulley Station",
//   },
//   {
//     image:
//       "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332388294-b80f36b4-8b93-4c29-baaa-50c9e68d314b.png",
//     label: "Eleiko Dumbbell Rack",
//   },
//   {
//     image:
//       "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332410287-d6f5d264-323a-4007-ada0-7bdefc41f77d.png",
//     label: "AirBike",
//   },
//   {
//     image:
//       "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332759521-24059b74-cdd2-4f25-82a3-10cf52fd48f8.png",
//     label: "Preacher Curl Bench",
//   },
//   {
//     image:
//       "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332772440-a6c2f80b-7cbe-4530-9930-3fc642deed41.png",
//     label: "Hip Thrust Machine",
//   },
//   {
//     image:
//       "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332786087-0e1e4236-7549-4a7d-8a9f-55e73ece4df6.png",
//     label: "Dual Cable Crossover",
//   },
//   {
//     image:
//       "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332797888-bb09622b-ccc0-47c5-83b9-4bdefc3b0a6e.png",
//     label: "SkiErgs & RowErgs",
//   },
//   {
//     image:
//       "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332812433-ca61b115-4f91-4d23-aba5-8b2cba515a0a.png",
//     label: "Olympic Plates",
//   },
//   {
//     image:
//       "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332839026-6df6f5de-2a2c-4fe1-9d7f-08c01b2ebfd4.png",
//     label: "Dual Cable Pulldown",
//   },
//   {
//     image:
//       "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332861742-d12c9b5f-b78f-4473-9d70-1a56e103a855.png",
//     label: "Power Rack",
//   },
//   {
//     image:
//       "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332920124-3f490ee4-c32b-479d-9550-69b322cd6129.png",
//     label: "Medicine Ball Rack",
//   },
// ];

// const MarqueeSection = () => {
//   return (
//     <section className="bg-white w-full py-12 md:py-20">
//       <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col  items-center">
//         {/* Header Section */}
//         <div className="flex flex-col gap-4 md:items-center md:text-center max-w-[800px] mb-12">
//           <h2 className="text-[#1c1c1c] uppercase text-[40px]">
//             205+ World-Class Personal Trainers
//             {/* Elite Machines. Infinite Possibilities. */}
//           </h2>
//           <h4 className="text-black max-w-[621px] leading-[26px]">
//             {/* From free weights to cutting-edge equipment, Evolve provides
//             everything you need to stay active. Whether you are lifting,
//             sprinting, or stretching, our world-class machines and supportive
//             atmosphere keep you moving at your best. */}
//             No matter where you’re starting or what your goal is, you’ll find a
//             trainer at Evolve who understands your journey and knows how to
//             deliver results.
//           </h4>
//         </div>

//         {/* Two reusable marquees with opposite directions */}
//         {/* <div className="max-lg:hidden grid grid-cols-8 grid-rows-3 gap-1.5">
//             <div className="border flex items-end justify-center px-2 py-1.5 rounded-[7px] relative">
//               <div></div>
//             </div>
//         </div> */}

//         {/* <div className="lg:hidden"> */}
//           <EquipmentCardsMarquee
//             items={equipmentCards.slice(0, 8)}
//             direction="left"
//             speed={40}
//           />
//           <EquipmentCardsMarquee
//             items={equipmentCards.slice(8)}
//             direction="right"
//             speed={40}
//           />
//         {/* </div> */}
//       </div>
//     </section>
//   );
// };

// export default MarqueeSection;
import React, {useState, useEffect, useRef  } from "react";
import useEmblaCarousel from "embla-carousel-react";
import img1 from "@/assets/images/gym/World-Class/world_class (12).png";
import img2 from "@/assets/images/gym/World-Class/world_class (6).png";
import img3 from "@/assets/images/gym/World-Class/world_class (11).png";
import img4 from "@/assets/images/gym/World-Class/world_class (14).png";
import img5 from "@/assets/images/gym/World-Class/world_class (10).png";
import img6 from "@/assets/images/gym/World-Class/world_class (5).png";
import img7 from "@/assets/images/gym/World-Class/world_class (4).png";
import img8 from "@/assets/images/gym/World-Class/world_class (9).png";
import img9 from "@/assets/images/gym/World-Class/world_class (3).png";
import img10 from "@/assets/images/gym/World-Class/world_class (8).png";
import img11 from "@/assets/images/gym/World-Class/world_class (2).png";
import img12 from "@/assets/images/gym/World-Class/world_class (13).png";
import img13 from "@/assets/images/gym/World-Class/world_class (7).png";
import img14 from "@/assets/images/gym/World-Class/world_class (1).png";


import card_icon1 from "@/assets/images/gym/World-Class/world_card_icons (13).svg";
import card_icon2 from "@/assets/images/gym/World-Class/world_card_icons (12).svg";
import card_icon3 from "@/assets/images/gym/World-Class/world_card_icons (11).svg";
import card_icon4 from "@/assets/images/gym/World-Class/world_card_icons (10).svg";
import card_icon5 from "@/assets/images/gym/World-Class/world_card_icons (9).svg";
import card_icon6 from "@/assets/images/gym/World-Class/world_card_icons (8).svg";
import card_icon7 from "@/assets/images/gym/World-Class/world_card_icons (7).svg";
import card_icon8 from "@/assets/images/gym/World-Class/world_card_icons (6).svg";
import card_icon9 from "@/assets/images/gym/World-Class/world_card_icons (5).svg";
import card_icon10 from "@/assets/images/gym/World-Class/world_card_icons (4).svg";
import card_icon11 from "@/assets/images/gym/World-Class/world_card_icons (3).svg";
import card_icon12 from "@/assets/images/gym/World-Class/world_card_icons (2).svg";
import card_icon13 from "@/assets/images/gym/World-Class/world_card_icons (1).svg";

import card_mob1 from "@/assets/images/gym/World-Class/card_mob (13).png";
import card_mob2 from "@/assets/images/gym/World-Class/card_mob (12).png";
import card_mob3 from "@/assets/images/gym/World-Class/card_mob (11).png";
import card_mob4 from "@/assets/images/gym/World-Class/card_mob (10).png";
import card_mob5 from "@/assets/images/gym/World-Class/card_mob (9).png";
import card_mob6 from "@/assets/images/gym/World-Class/card_mob (8).png";
import card_mob7 from "@/assets/images/gym/World-Class/card_mob (7).png";
import card_mob8 from "@/assets/images/gym/World-Class/card_mob (6).png";
import card_mob9 from "@/assets/images/gym/World-Class/card_mob (5).png";
import card_mob10 from "@/assets/images/gym/World-Class/card_mob (4).png";
import card_mob11 from "@/assets/images/gym/World-Class/card_mob (3).png";
import card_mob12 from "@/assets/images/gym/World-Class/card_mob (2).png";
import card_mob13 from "@/assets/images/gym/World-Class/card_mob (1).png";

// Equipment cards data - images from Figma
const equipmentCards = [
  {
    image: img1,
    label: "Cycle Machines",
    icon: card_icon1,
    mobimg: card_mob1,
  },
  {
    image: img2,
    label: "Power Rack",
    icon: card_icon2,
    mobimg: card_mob2,
  },
  {
    image: img3,
    label: "Medicine Ball Rack",
    icon: card_icon3,
    mobimg: card_mob3,
  },
  {
    image: img4,
    label: "Sprint/Sled Track",
    icon: card_icon4,
    mobimg: card_mob4,
  },
  {
    image: img5,
    label: "Crossover Machine",
    icon: card_icon5,
    mobimg: card_mob5,
  },
  {
    image: img6,
    label: "Eleiko Pulley Station",
    icon: card_icon6,
    mobimg: card_mob6,
  },
  {
    image: img7,
    label: "Eleiko Dumbbell Rack",
    icon: card_icon7,
    mobimg: card_mob7,
  },
  {
    image: img8,
    label: "AirBike",
    icon: card_icon8,
    mobimg: card_mob8,
  },
  {
    image: img9,
    label: "Preacher Curl Bench",
    icon: card_icon9,
    mobimg: card_mob9,
  },
  {
    image: img10,
    label: "Hip Thrust Machine",
    icon: card_icon10,
    mobimg: card_mob10,
  },
  {
    image: img11,
    label: "Dual Cable Crossover",
    icon: card_icon11,
    mobimg: card_mob11,
  },
  {
    image: img13,
    label: "Olympic Plates",
    icon: card_icon12,
    mobimg: card_mob12,
  },
  {
    image: img14,
    label: "Dual Cable Pulldown",
    icon: card_icon13,
    mobimg: card_mob13,
  },
  // {
  //   image:
  //     "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332861742-d12c9b5f-b78f-4473-9d70-1a56e103a855.png",
  //   label: "Power Rack",
  // },
  // {
  //   image:
  //     "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332920124-3f490ee4-c32b-479d-9550-69b322cd6129.png",
  //   label: "Medicine Ball Rack",
  // },
];
const MarqueeSection = () => {
// Mobile carousel state
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    draggable: false, // Disable drag/swipe - auto-play only
  });
  const [progress, setProgress] = useState(0);
  const progressIntervalRef = useRef(null);
  // Auto-play progress bar: fills 0-100% in 3 seconds, then slides to next card (mobile only)
  useEffect(() => {
    // Only run on mobile screens (below lg breakpoint)
    const isMobile = window.innerWidth < 1024;
    if (!emblaApi || !isMobile) return;
    const duration = 5000; // 5 seconds
    const interval = 16; // Update every 16ms for smooth animation
    const increment = (100 / duration) * interval; // Progress increment per interval
    // Initialize progress at 0
    setProgress(0);
    let currentProgress = 0;
    const startProgressCycle = () => {
      // Reset to 0
      currentProgress = 0;
      setProgress(0);
      // Clear any existing interval
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
      // Start new progress cycle
      progressIntervalRef.current = setInterval(() => {
        currentProgress = Math.min(100, currentProgress + increment);
        setProgress(currentProgress);
        if (currentProgress >= 100) {
          // Progress complete - automatically advance to next slide
          emblaApi.scrollNext();
          // Reset and start new cycle
          startProgressCycle();
        }
      }, interval);
    };
    // Start the progress cycle automatically
    startProgressCycle();
    // Reset when slide changes
    const handleSlideChange = () => {
      startProgressCycle();
    };
    emblaApi.on("select", handleSlideChange);
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
      if (emblaApi) {
        emblaApi.off("select", handleSlideChange);
      }
    };
  }, [emblaApi]);


  const MobileEquipmentCard = ({ card, className = "" }) => {
    return (
      <div className={`flex-shrink-0 w-[80%] sm:w-[70%] p-2 ${className}`}>
        <div className="bg-white rounded-[7px] overflow-hidden p-2  border-[1px] border-transparent h-full flex flex-col"
        style={{ boxShadow:"0 0 0 0.894px rgba(74, 176, 74, 0.12), 0 2.682px 2.682px -1.341px rgba(74, 176, 74, 0.04), 0 5.364px 5.364px -2.682px rgba(74, 176, 74, 0.04), 0 0.894px 0.894px -0.447px rgba(74, 176, 74, 0.04), 0 10.728px 10.728px -5.364px rgba(74, 176, 74, 0.04)"}}
        >
          <div className="w-full relative rounded-[6px] overflow-hidden flex-shrink-0">
            <img
              alt={card.label}
              src={card.mobimg}
              className="w-full object-cover object-center rounded-[6px] block"
              loading="lazy"
            />
          </div>
          {/* Label below image for mobile */}
          <div className="p-3 bg-white flex-shrink-0">
            <p className="text-[#1C1C1C] font-Kanit font-[400] text-[14px] leading-[20px] text-center">
              {card.label}
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Equipment Card Component
const EquipmentCard = ({ card, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const baseClasses = "bg-white overflow-hidden rounded-[7px] relative transition-all duration-300 border-[1px]";
  const borderClass = isHovered ? "border-[#4AB04A]" : "border-transparent";
  return (
    <div
      className={`${baseClasses} ${borderClass} ${className}`}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      style={{ cursor: 'pointer' }}
    >
      <div className="w-full relative rounded-[6px] overflow-hidden">
        {/* Image Container */}
        <div className="relative w-full">
          <img
            alt={card.label}
            src={card.image}
            className="w-full h-auto object-cover object-center rounded-[6px] block"
            loading="eager"
          />
          {/* Default Label - Bottom Left (always visible) */}
          <div
            className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent rounded-b-[6px] pointer-events-none transition-opacity duration-300 ease-in-out"
            style={{
              opacity: isHovered ? 0 : 1,
              zIndex: 10
            }}
          >
            <p className="text-white font-Kanit font-[400] text-[14px] leading-[20px]">
              {card.label}
            </p>
          </div>
          {/* Hover Overlay with White Background, Icon and Label */}
          <div
            className="absolute top-0 left-0 right-0 bottom-0 bg-white transition-opacity duration-300 ease-in-out flex flex-col items-center justify-center gap-3 rounded-[6px] pointer-events-none"
            style={{
              opacity: isHovered ? 1 : 0,
              zIndex: 20
            }}
          >
            {card.icon && card.icon.trim() !== "" ? (
              <img src={card.icon} alt={`${card.label} icon`} className="w-8 h-8 object-contain" />
            ) : null}
            <p className="text-[#1C1C1C] font-Kanit font-[400] text-[16px] leading-[24px] text-center px-4">
              {card.label}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


  return (
    <section className="bg-white w-full py-12 md:py-20">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col items-center">
        {/* Header Section */}
        <div className="flex flex-col gap-4 md:items-center md:text-center max-w-[800px] mb-10">
          <h2 className="text-[#1C1C1C] uppercase text-[40px]">
            205+ World-Class Personal Trainers
          </h2>
          <h4 className="text-black max-w-[621px] leading-[26px]">
            No matter where you're starting or what your goal is, you'll find a
            trainer at Evolve who understands your journey and knows how to
            deliver results.
          </h4>
        </div>
        {/* Custom Masonry Layout - Desktop */}
        <div className="w-full hidden lg:flex justify-between gap-1">
          <div className="gap-1 flex flex-col w-[18%]">
            {equipmentCards[0] && <EquipmentCard card={equipmentCards[0]} />}
            {equipmentCards[1] && <EquipmentCard card={equipmentCards[1]} />}
          </div>
          <div className="gap-1 flex flex-col w-[18%]">
            {equipmentCards[2] && <EquipmentCard card={equipmentCards[2]} />}
            {equipmentCards[3] && <EquipmentCard card={equipmentCards[3]} />}
          </div>
          <div className="flex flex-col items-center gap-y-1 w-full max-w-[317.5px]">
            <div className="gap-1 w-[100%] flex justify-between">
              {equipmentCards[4] && (
                <EquipmentCard card={equipmentCards[4]} className="w-full" />
              )}
              {equipmentCards[7] && (
                <EquipmentCard card={equipmentCards[7]} className="w-full" />
              )}
            </div>
            {/* Center: wide image spanning full width (6th image - Eleiko Pulley Station) */}
            <div>
              {equipmentCards[5] && (
                <EquipmentCard card={equipmentCards[5]} className="w-[100%]" />
              )}
            </div>
            {/* Bottom row: two images side by side */}
            <div className="gap-1 flex justify-between">
              {equipmentCards[6] && (
                <EquipmentCard card={equipmentCards[6]} className="w-full" />
              )}
              {equipmentCards[8] && (
                <EquipmentCard card={equipmentCards[8]} className="w-full" />
              )}
            </div>
          </div>
          {/* Column 4 - 18% width */}
          <div className="gap-1 flex flex-col w-[18%]">
            {equipmentCards[9] && <EquipmentCard card={equipmentCards[9]} />}
            {equipmentCards[10] && <EquipmentCard card={equipmentCards[10]} />}
          </div>
          {/* Column 5 - 18% width */}
          <div className="gap-1 flex flex-col w-[18%]">
            {equipmentCards[11] && <EquipmentCard card={equipmentCards[11]} />}
            {equipmentCards[12] && <EquipmentCard card={equipmentCards[12]} />}
            {equipmentCards[13] && <EquipmentCard card={equipmentCards[13]} />}
          </div>
        </div>
    
        <div className="w-full lg:hidden mb-2">
          <div className="overflow-hidden" ref={emblaRef} style={{ touchAction: 'none', userSelect: 'none' }}>
            <div className="flex gap-2">
              {equipmentCards.map((card, idx) => (
                <MobileEquipmentCard
                  key={idx}
                  card={card}
                />
              ))}
            </div>
          </div>
          {/* Progress Bar - Auto-play: 0-100% in 3 seconds */}
          <div className="mt-4 px-4 pointer-events-none">
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#4AB04A]"
                style={{
                  width: `${Math.max(0, Math.min(100, progress))}%`,
                  transition: "width 0.1s linear",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MarqueeSection;

