import { useRef, useEffect, useState } from "react";
import img1 from "@/assets/images/spaces/WhyEvolveIsDifferent/slide1.webp";
import img2 from "@/assets/images/spaces/WhyEvolveIsDifferent/slide2.webp";
import img3 from "@/assets/images/spaces/WhyEvolveIsDifferent/slide3.webp";

const cardData = [
  {
    number: "01",
    title: "Worry-Free Entrepreneurship",
    description:
      "We can grow your business without the usual drain. You don’t need to hire front desk staff or cleaners. We handle operations, you serve customers, and all the facility details. You just show up and work with your clients.",
    image: img1,
  },
  {
    number: "02",
    title: "All-Inclusive Rent",
    description:
      "No surprise bills: one flat monthly payment covers utilities, gym access, shared amenities, and more. You won’t have to manage multiple service vendors.",
    image: img2,
  },
  {
    number: "03",
    title: "Built-In Community",
    description:
      "Be part of a trusted network of wellness professionals. That makes it easy to connect, refer clients, and grow together. We don’t charge finder’s fees or take a cut of your earnings.",
    image: img3,
  },
];

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

function WhyEvolveIsDifferent() {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

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
  const topOffsets = ["6rem", "8rem", "10rem"];

  return (
    <div ref={containerRef} className="w-full py-[54px]" >
      <div className="w-full max-w-[1280px] px-8 mx-auto">
        <div className=" flex justify-center mb-[32px]">
          <h2 className="max-w-[707px] text-center text-[#000000] font-[700] leading-[39px] uppercase">
            Why Evolve Is Different
          </h2>
        </div>
        <div style={{ position: "relative" }} 
        className="w-full space-y-[20px]"
        >
          {cardData.map((card, i) => {
            // Use the custom offset for each card, fallback to last value if more cards
            const topOffset = topOffsets[i] || topOffsets[topOffsets.length - 1];
            return (
              <div
                key={i}
                style={{
                  position: "sticky",
                  top: topOffset,
                  height: `400px`,
                  width:"100%",
                  display: "flex",
                  justifyContent: "center",
                  zIndex: 10 + i,
                  pointerEvents: "auto",
                }}
              >
                <div className="rounded-[10px] flex justify-between w-full p-8 relative h-full border-[#CCCCCC] border bg-[#fff] shadow-md">
                  <div className="relative z-[9] max-w-[520px] flex flex-col gap-4 justify-center">
                    <h2 className="text-[#4AB04A] !font-[500] !font-[kanit] leading-[39px] tracking-[-1.2px]">{card.number}</h2>
                    <h3 className="text-[#000] !font-[kanit] !font-[500] leading-[24px] tracking-[-0.72px]">
                      {card.title}
                    </h3>
                    <h4 className="text-[#000] font-[kanit] font-[400] leading-[24px]">{card.description}</h4>
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
  );
}

export default WhyEvolveIsDifferent;
