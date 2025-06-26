import React, { useRef, useEffect } from "react";
import image1 from "../../../../assets/images/home/wellness-hub/Businesses.webp";
import image2 from "../../../../assets/images/home/wellness-hub/Practitioners.webp";
import image3 from "../../../../assets/images/home/wellness-hub/Trainers.webp";

const cardItems = [
  {
    count: "136+",
    title: "BUSINESSES",
    description: "working with us across our locations",
    image: image1,
  },
  {
    count: "195+",
    title: "PRACTITIONERS",
    description: "offering a wide range of health and wellness services",
    image: image2,
  },
  {
    count: "205+",
    title: "TRAINERS",
    description: "helping members reach their fitness goals every day",
    image: image3,
  },
];

function WellnessHub() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll(".card-stack-item"));

    const handleScroll = () => {
      const containerTop = container.getBoundingClientRect().top;

      let topCardIndex = -1;
       
      for (let i = cards.length - 1; i >= 0; i--) {
        const card = cards[i];
        const cardTopCss = 40 + i * 40;
        if (card.getBoundingClientRect().top <= containerTop + cardTopCss + 1) {
          topCardIndex = i;
          break;
        }
      }

      cards.forEach((card, index) => {
        const distance = index - topCardIndex;
        if (distance >= 0) {
          card.style.transform = `scale(${1 - distance * 0})`;
          card.style.opacity = "1";
          card.style.pointerEvents = "auto";
        } else {
          card.style.transform = "scale(0.9)";
          card.style.opacity = "0";
          card.style.pointerEvents = "none";
        }
      });
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="wellnessHub" className="bg-[#fff]">
      <div className="w-[100%] max-w-[1280px] px-8 pt-[100px] mx-auto flex justify-between">
        <div className="w-[50%] max-w-[600px] flex flex-col gap-4">
          <h2 className="uppercase text-[#000] leading-[39px]">
            CANADA'S BEST FITNESS <br /> AND WELLNESS HUB
          </h2>
          <h4 className="text-[#000] leading-[26px]">
            With state-of-the-art locations in Edmonton, Calgary, Burnaby, and
            Vancouver, Evolve brings together top-tier fitness and wellness
            under one roof.
          </h4>
        </div>

        <div className="w-[50%] flex items-center justify-end pl-10">
          <div
            ref={containerRef}
            className="w-full max-w-[460px] h-[390px] overflow-y-auto scroll-smooth hide-scrollbar"
          >
            <div className="relative h-[1500px] ">
              {cardItems.map((item, index) => (
                <div
                  key={index}
                  className="card-stack-item sticky mb-6 transition-transform duration-300 ease-in-out"
                  style={{
                    top: `${0 + index * 0}px`,
                    zIndex: index,
                  }}
                >
                  <div className="bg-white w-full px-6 py-6 rounded-[10px] border border-[#DDDADA]">
                    <h2 className="text-[#4AB04A] !text-[34px] !font-[700] uppercase">
                      {item.count}
                    </h2>
                    <h2 className="text-[#000] !text-[34px] !font-[700] uppercase">
                      {item.title}
                    </h2>
                    <h4 className="mb-2 text-[#000] -mt-[2px]  leading-normal">
                      {item.description}
                    </h4>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto rounded-[5px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WellnessHub;
