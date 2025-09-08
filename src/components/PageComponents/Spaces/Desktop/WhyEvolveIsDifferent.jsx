import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
const cardData = [
  {
    number: "01",
    title: "Worry-Free Entrepreneurship",
    description:
      "Start or grow your business without the usual stress. You don’t need to hire front desk staff or cleaners. We handle shared areas, gym maintenance, and all the facility details. You just show up and work with your clients.",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/spaces/WhyEvolveIsDifferent/Worry-Free.webp",
  },
  {
    number: "02",
    title: "All-Inclusive Rent",
    description:
      "No surprise bills: one flat monthly payment covers utilities, gym access, shared amenities, and more. You won't have to manage multiple service vendors.",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/spaces/WhyEvolveIsDifferent/All-Inclusive.webp",
  },
  {
    number: "03",
    title: "Built-In Community",
    description:
      "Be part of a trusted network of wellness professionals. That makes it easy to connect, refer clients, and grow together. We don't charge finder's fees or take a cut of your earnings.",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/spaces/WhyEvolveIsDifferent/slide3.webp",
  },
];

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

function WhyEvolveIsDifferent() {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState(null);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect(); // Sync on init

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (api) {
      api.scrollTo(activeIndex);
    }
  }, [activeIndex]);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollTop = window.scrollY + rect.top;
        setScrollY(window.scrollY - scrollTop);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const vh = window.innerHeight;
  const totalHeight = cardData.length * vh;
  const peekPercent = 0.1; // 10% of viewport height
  const peekOffset = vh * peekPercent; // e.g., 10vh

  // Define custom top offsets for each card
  const topOffsets = ["6rem", "8rem", "18rem"];

  return (
    <div>
      <div
        ref={containerRef}
        className="w-full md:py-[54px] relative max-md:pt-0 max-md:pb-[48px] max-md:hidden"
      >
        
        <div className="w-full max-w-[1280px] md:px-8 md:pt-4 max-md:px-[16px] mx-auto">
          <div
            style={{ position: "" }}
            className="w-full space-y-[20px] "
          >
             <div className="flex justify-center mb-[32px]">
                      <h2 className="max-w-[707px] text-center text-[#000000] font-[700] leading-[39px] uppercase">
                        Why Evolve Is Different
                      </h2>
         </div>
            {cardData.map((card, i) => {
              // Use the custom offset for each card, fallback to last value if more cards
              const topOffset =
                topOffsets[i] || topOffsets[topOffsets.length - 1];
              return (
                <div
                  key={i}
                  style={{
                    position: "sticky",
                    top: topOffset,
                    height: `400px`,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    zIndex: 10 + i,
                    pointerEvents: "auto",
                  }}
                >
                  <div className="rounded-[10px] flex justify-between w-full p-8 relative h-full border-[#CCCCCC] border bg-[#fff] shadow-md">
                    <div className="relative z-[9] max-w-[520px] flex flex-col gap-4 justify-center">
                      <h2 className="text-[#4AB04A] !font-[500] !font-[kanit] leading-[39px] tracking-[-1.2px]">
                        {card.number}
                      </h2>
                      <h3 className="text-[#000] !font-[kanit] !font-[500] leading-[24px] tracking-[-0.72px]">
                        {card.title}
                      </h3>
                      <h4 className="text-[#000] font-[kanit] font-[400] leading-[24px]">
                        {card.description}
                      </h4>
                    </div>
                    <div>
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover rounded-bl-[10px]"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="relative block md:hidden  max-md:pb-[48px]">
        <h2 className="text-left text-[#000] font-bold uppercase  px-4 mb-6">
          Why Evolve Is Differentt
        </h2>

        <div className="relative min-h-[540px] flex items-end pb-[24px] z-10">
          <div className="absolute inset-0 bg-black/10 z-1"></div>
          <div
            className="absolute inset-0 bg-cover bg-center duration-500"
            style={{
              backgroundImage: `url(${cardData[activeIndex].image})`,

              zIndex: 0,
            }}
          />
          <Carousel setApi={setApi} className="w-full relative z-10">
            <CarouselContent className="px-5 gap-2  ">
              {cardData.map((card, index) => (
                <CarouselItem
                  key={index}
                  className="flex-shrink-0 w-[85%] max-w-[320px] mx-auto "
                >
                  <div className="bg-white rounded-[10px] overflow-hidden h-full">
                    <div className="p-4 space-y-2">
                      <h3 className="text-[#4AB04A] font-medium text-[16px]">
                        {card.number}
                      </h3>
                      <h3 className="text-black font-bold text-[18px]">
                        {card.title}
                      </h3>
                      <h4 className="text-black text-[14px] leading-[20px]">
                        {card.description}
                      </h4>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious /> */}
            {/* <CarouselNext /> */}
          </Carousel>

          {/* Dots */}
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {cardData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-[#4AB04A]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyEvolveIsDifferent;
