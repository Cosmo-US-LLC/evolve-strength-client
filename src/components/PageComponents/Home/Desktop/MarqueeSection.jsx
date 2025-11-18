import React, { useState, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
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

import card_icon1 from "@/assets/images/gym/World-Class/world_card_icons (7).svg";
import card_icon2 from "@/assets/images/gym/World-Class/world_card_icons (1).svg";
import card_icon3 from "@/assets/images/gym/World-Class/world_card_icons (6).svg";
import card_icon4 from "@/assets/images/gym/World-Class/world_card_icons (8).svg";
import card_icon5 from "@/assets/images/gym/World-Class/world_card_icons (5).svg";
import card_icon6 from "@/assets/images/gym/World-Class/world_card_icons (13).svg";
import card_icon7 from "@/assets/images/gym/World-Class/world_card_icons (12).svg";
import card_icon8 from "@/assets/images/gym/World-Class/world_card_icons (4).svg";
import card_icon9 from "@/assets/images/gym/World-Class/world_card_icons (11).svg";
import card_icon10 from "@/assets/images/gym/World-Class/world_card_icons (3).svg";
import card_icon11 from "@/assets/images/gym/World-Class/world_card_icons (10).svg";
import card_icon12 from "@/assets/images/gym/World-Class/world_card_icons (2).svg";
import card_icon13 from "@/assets/images/gym/World-Class/world_card_icons (9).svg";

import card_mob1 from "@/assets/images/gym/World-Class/card_mob (11).png";
import card_mob2 from "@/assets/images/gym/World-Class/card_mob (14).png";
import card_mob3 from "@/assets/images/gym/World-Class/card_mob (10).png";
import card_mob4 from "@/assets/images/gym/World-Class/card_mob (9).png";
import card_mob5 from "@/assets/images/gym/World-Class/card_mob (8).png";
import card_mob6 from "@/assets/images/gym/World-Class/card_mob (7).png";
import card_mob7 from "@/assets/images/gym/World-Class/card_mob (6).png";
import card_mob8 from "@/assets/images/gym/World-Class/card_mob (5).png";
import card_mob9 from "@/assets/images/gym/World-Class/card_mob (4).png";
import card_mob10 from "@/assets/images/gym/World-Class/card_mob (3).png";
import card_mob11 from "@/assets/images/gym/World-Class/card_mob (2).png";
import card_mob12 from "@/assets/images/gym/World-Class/card_mob (1).png";
import card_mob13 from "@/assets/images/gym/World-Class/card_mob (13).png";

// Equipment cards data - images from Figma
const equipmentCards = [
  {
    image: img1,
    label: "Eleiko Olympic Barbel",
    mob_label: "Cycle Machines",
    icon: card_icon1,
    mobimg: card_mob1,
  },
  {
    image: img2,
    label: "Eleiko Pulley Station",
    mob_label: "Power Rack",
    icon: card_icon2,
    mobimg: card_mob2,
  },
  {
    image: img3,
    label: "Medicine Ball Rack",
    mob_label: "Medicine Ball Rack",
    icon: card_icon3,
    mobimg: card_mob3,
  },
  {
    image: img4,
    label: "Sprint/Sled Track",
    mob_label: "Sprint/Sled Track",
    icon: card_icon4,
    mobimg: card_mob4,
  },
  {
    image: img5,
    label: "Olympic Plates",
    mob_label: "Crossover Machine",
    icon: card_icon5,
    mobimg: card_mob5,
  },
  {
    image: img6,
    label: "Power Rack",
    mob_label: "Eleiko Pulley Station",
    icon: card_icon6,
    mobimg: card_mob6,
  },
  {
    image: img7,
    label: " SkiErgs & RowErgs",
    icon: card_icon7,
    mobimg: card_mob7,
    mob_label: "Eleiko Dumbbell Rack",
  },
  {
    image: img8,
    label: "Cycle Machines",
    mob_label: "AirBike",
    icon: card_icon8,
    mobimg: card_mob8,
  },
  {
    image: img9,
    label: "Leg Press Machine",
    mob_label: "Hip Thrust Machine",
    icon: card_icon9,
    mobimg: card_mob9,
  },
  {
    image: img10,
    label: "Elliptical Trainer",
    mob_label: "Dual Cable Crossover",
    icon: card_icon10,
    mobimg: card_mob10,
  },
  {
    image: img11,
    label: "AirBike",
    mob_label: "SkiErgs & RowErgs",
    icon: card_icon11,
    mobimg: card_mob11,
  },
  {
    image: img13,
    label: "Hip Thrust Machine",
    icon: card_icon12,
    mobimg: card_mob12,
    mob_label: "Olympic Plates",
  },
  {
    image: img14,
    label: "Olympic Plates",
    icon: card_icon13,
    mobimg: card_mob13,
    mob_label: "Dual Cable Pulldown",
  },
];
const MarqueeSection = () => {
const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

const [emblaRef, emblaApi] = useEmblaCarousel(
  {
    align: "start",
    loop: true,
    draggable: true,
    slidesToScroll: 1,
  },
  [autoplay.current]
);

const scrollPrevBtn = () => {
  if (!emblaApi) return;

  emblaApi.scrollPrev();

  // Restart autoplay
  autoplay.current.reset();
};

const scrollNextBtn = () => {
  if (!emblaApi) return;

  emblaApi.scrollNext();

  // Restart autoplay
  autoplay.current.reset();
};



  const MobileEquipmentCard = ({ card, className = "" }) => {
    return (
      <div className={`flex-shrink-0 w-[80%] sm:w-[70%] p-1 ${className}`}>
        <div
          className="bg-white rounded-[7px] overflow-hidden p-2  border-[1px] border-transparent h-full flex flex-col"
          style={{
            boxShadow:
              "0 0 0 0.894px rgba(74, 176, 74, 0.12), 0 2.682px 2.682px -1.341px rgba(74, 176, 74, 0.04), 0 5.364px 5.364px -2.682px rgba(74, 176, 74, 0.04), 0 0.894px 0.894px -0.447px rgba(74, 176, 74, 0.04), 0 10.728px 10.728px -5.364px rgba(74, 176, 74, 0.04)",
          }}
        >
          <div className="w-full relative rounded-[6px] overflow-hidden flex-shrink-0">
            <img
              alt={card.label}
              src={card.mobimg}
              className="w-full h-full object-cover object-center rounded-[6px] block"
              loading="lazy"
            />
          </div>
          <div className="p-3 bg-white flex-shrink-0">
            <p className="text-[#1C1C1C] font-[Kanit] font-[400] text-[16px]  leading-[120%] text-center">
              {card.label}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const EquipmentCard = ({ card, className = "" }) => {
    const [isHovered, setIsHovered] = useState(false);
    const baseClasses =
      "bg-white overflow-hidden rounded-[7px] relative transition-all duration-300 border-[1px]";
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
        style={{ cursor: "pointer" }}
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
                zIndex: 10,
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
                zIndex: 20,
              }}
            >
              {card.icon && card.icon.trim() !== "" ? (
                <img
                  src={card.icon}
                  alt={`${card.label} icon`}
                  className="w-12 h-12 object-contain"
                />
              ) : null}
              <p className="text-[#1C1C1C] font-[Kanit] font-[400] text-[16px] leading-[120%] text-center px-4">
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
        
            <div>
              {equipmentCards[5] && (
                <EquipmentCard card={equipmentCards[5]} className="w-[100%]" />
              )}
            </div>
            
            <div className="gap-1 flex justify-between">
              {equipmentCards[6] && (
                <EquipmentCard card={equipmentCards[6]} className="w-full" />
              )}
              {equipmentCards[8] && (
                <EquipmentCard card={equipmentCards[8]} className="w-full" />
              )}
            </div>
          </div>
          
          <div className="gap-1 flex flex-col w-[18%]">
            {equipmentCards[9] && <EquipmentCard card={equipmentCards[9]} />}
            {equipmentCards[10] && <EquipmentCard card={equipmentCards[10]} />}
          </div>
         
          <div className="gap-1 flex flex-col w-[18%]">
            {equipmentCards[11] && <EquipmentCard card={equipmentCards[11]} />}
            {equipmentCards[12] && <EquipmentCard card={equipmentCards[12]} />}
            {equipmentCards[13] && <EquipmentCard card={equipmentCards[13]} />}
          </div>
        </div>

        <div className="w-full lg:hidden mb-14 relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-2">
              {equipmentCards.map((card, idx) => (
                <MobileEquipmentCard key={idx} card={card} />
              ))}
            </div>
          </div>

        <div className="flex justify-center absolute -bottom-20 left-[36%] items-center space-x-3 mt-8">
            <div className=" -translate-y-1/2  z-10 md:hidden">
            <button
                onClick={scrollPrevBtn}
              className="bg-black/80 h-[40px] w-[40px] flex justify-center items-center rounded-full  text-white"
            >
              <svg width="18" height="16" viewBox="0 0 19 17" fill="none">
                <path
                  d="M8.7 1L1.5 8.5L8.7 16"
                  stroke="white"
                  strokeWidth="1.2"
                />
                <path d="M18 8.5H1.8" stroke="white" strokeWidth="1.2" />
              </svg>
            </button>
          </div>

          <div className=" -translate-y-1/2  z-10 md:hidden">
            <button
              onClick={scrollNextBtn}
              className="bg-black/80 h-[40px] w-[40px] flex justify-center items-center rounded-full  text-white"
            >
              <svg width="18" height="16" viewBox="0 0 19 17" fill="none">
                <path
                  d="M10.4 1L17.6 8.5L10.4 16"
                  stroke="white"
                  strokeWidth="1.2"
                />
                <path d="M0.9 8.5H17.2" stroke="white" strokeWidth="1.2" />
              </svg>
            </button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};
export default MarqueeSection;
