import React, { useState, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";


import card_icon1 from "@/assets/images/gym/World-Class/world_card_icons (7).svg";
import card_icon2 from "@/assets/images/gym/World-Class/world_card_icons (1).svg";
import card_icon3 from "../../../../assets/images/gym/World-Class/world_card_icons (6).svg";
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


// Equipment cards data - images from Figma
const equipmentCards = [
  {
    image: "/media/1763475792736-71352cf3-5d99-4274-b56d-0fb7df4b52df.png",
    label: "Eleiko Olympic Barbel",
    mob_label: "Cycle Machines",
    icon: card_icon1,
    mobimg: "/media/1763543624870-7a9c8c0d-b3a6-4920-9af4-60171be27492.png",
  },
  {
    image: "/media/1763475686412-1dd5f72b-5055-40f1-9372-1e7682aae443.png",
    label: "Eleiko Pulley Station",
    mob_label: "Power Rack",
    icon: card_icon2,
    mobimg: "/media/1763476462532-fcb8f65c-a3e8-44dd-a3be-8ebabc15ea08.png",
  },
  {
    image: "/media/1763475746742-8ad065dd-6d3e-4cb4-82dc-279394f9445c.png",
    label: "Medicine Ball Rack",
    mob_label: "Medicine Ball Rack",
    icon: card_icon3,
    mobimg: "/media/1763476365592-8c1b7305-d598-422a-88b1-d55a8c092a5b.png",
  },
  {
    image: "/media/1763475810851-b8bd92fb-73f1-48fa-9d47-119b7ad3f1ce.png",
    label: "Sprint/Sled Track",
    mob_label: "Sprint/Sled Track",
    icon: card_icon4,
    mobimg: "/media/1763476352770-29b366ac-efed-4b8e-969a-6ce2e6602452.png",
  },
  {
    image: "/media/1763475728885-257c4967-a1b8-46c7-b31a-108b9c19cc02.png",
    label: "Olympic Plates",
    mob_label: "Crossover Machine",
    icon: card_icon5,
    mobimg: "/media/1763476335551-f808a7b3-338b-41cb-a134-938e9f92ec3d.png",
  },
  {
    image: "/media/1763475667086-14bfcfdd-3100-40f6-ba00-ceb58e2c359e.png",
    label: "Power Rack",
    mob_label: "Eleiko Pulley Station",
    icon: card_icon6,
    mobimg: "/media/1763476327207-8ed1c6d3-78f3-41b1-b3d6-5a5fbb372540.png",
  },
  {
    image: "/media/1763475652507-cf0d78dd-b8c5-419d-8efc-589bebbcb59a.png",
    label: " SkiErgs & RowErgs",
    icon: card_icon7,
    mobimg: "/media/1763476316702-3c0537b1-c643-4d60-bf59-fca96d10f48a.png",
    mob_label: "Eleiko Dumbbell Rack",
  },
  {
    image: "/media/1763475766737-a58111e6-5b2c-4117-be28-045503ce8df0.png",
    label: "Cycle Machines",
    mob_label: "AirBike",
    icon: card_icon8,
    mobimg: "/media/1763476307381-54d223ae-404d-4208-8ad2-580053bc6e73.png",
  },
  {
    image: "/media/1763475635232-bf01088e-4f25-4d44-bae1-78070793cf60.png",
    label: "Leg Press Machine",
    mob_label: "Hip Thrust Machine",
    icon: card_icon9,
    mobimg: "/media/1763476298346-90c38ef1-118a-461a-819c-bd2437425b02.png",
  },
  {
    image: "/media/1763475713646-1c3c1dba-5130-49b1-89a1-6f8c8ebe4337.png",
    label: "Elliptical Trainer",
    mob_label: "Dual Cable Crossover",
    icon: card_icon10,
    mobimg: "/media/1763476289200-c7e6b2cd-461f-48fd-a54e-85487fd195d5.png",
  },
  {
    image: "/media/1763475619099-02a8e609-fb03-45ec-b038-467fce5558d1.png",
    label: "AirBike",
    mob_label: "SkiErgs & RowErgs",
    icon: card_icon11,
    mobimg: "/media/1763476278432-706fac5e-c363-444c-8a8a-d7206faa2e81.png",
  },
  {
    image: "/media/1763475700749-6b8a4803-155a-474a-995a-8daff781769a.png",
    label: "Hip Thrust Machine",
    icon: card_icon12,
    mobimg: "/media/1763476265380-24cf2276-2933-4c21-b050-0be5bbf8a34d.png",
    mob_label: "Olympic Plates",
  },
  {
    image: "/media/1763475595156-4b97875e-7188-461f-a76b-d74d6d49ff7d.png",
    label: "Seal Row Bench",
    icon: card_icon13,
    mobimg: "/media/1763476433252-72d5649e-2f1e-4d4d-ae1b-461c46d8d417.png",
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

    autoplay.current.reset();
  };

  const scrollNextBtn = () => {
    if (!emblaApi) return;

    emblaApi.scrollNext();

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
              {card.mob_label}
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
            Elite Machines. Infinite Possibilities.
          </h2>
          <h4 className="text-black max-w-[621px] leading-[26px]">
            From free weights to cutting-edge equipment, Evolve provides everything you need to stay active. Whether you are lifting, sprinting, or stretching, our world-class machines and supportive atmosphere keep you moving at your best.
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

        <div className="w-full lg:hidden mb-0 relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-2">
              {equipmentCards.map((card, idx) => (
                <MobileEquipmentCard key={idx} card={card} />
              ))}
            </div>
          </div>

          <div
            className={`flex items-center justify-center gap-4 md:gap-6 mt-6 md:mt-8}`}
          >
            <button
              onClick={scrollPrevBtn}
              className="w-10 h-10 max-md:w-[40px] max-md:h-[40px] cursor-pointer md:w-12 md:h-12 flex items-center justify-center bg-white hover:bg-[#000] text-black hover:text-white rounded-full border-[1px] border-[#000] transition-colors duration-200"
            >
              <ArrowLeft size={18} className="stroke-current" />
            </button>

            <button
              onClick={scrollNextBtn}
              className="w-10 h-10 max-md:w-[40px] max-md:h-[40px] cursor-pointer md:w-12 md:h-12 flex items-center justify-center bg-white hover:bg-[#000] text-black hover:text-white rounded-full border-[1px] border-[#000] transition-colors duration-200"
            >
              <ArrowRight size={18} className="stroke-current" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MarqueeSection;
