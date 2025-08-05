import React, { useState, useEffect } from "react";

const cardItems = [
  {
    count: "136+",
    title: "BUSINESSES",
    description: "Working with us across our locations",
    background: "white",
    textColor: "black",
    hasIcon: false,
    height: "350px",
  },
  {
    count: "195+",
    title: "PRACTITIONERS",
    description: "Offering a wide range of health and wellness services",
    background: "black",
    textColor: "white",
    height: "430px",
  },
  {
    count: "205+",
    title: "TRAINERS",
    description: "Helping members reach their fitness goals every day",
    background: "white",
    textColor: "black",
    hasIcon: false,
    height: "500px",
  },
];

function WellnessHub() {
  const [cardTransforms, setCardTransforms] = useState(
    cardItems.map(() => ({ transform: "", opacity: 1 }))
  );

  useEffect(() => {
    const handleScroll = () => {
      // Only apply animations on mobile (screen width < 768px)
      if (window.innerWidth >= 768) {
        setCardTransforms(cardItems.map(() => ({ transform: "", opacity: 1 })));
        return;
      }

      const newTransforms = cardItems.map((_, index) => {
        const cardElement = document.getElementById(`wellness-card-${index}`);
        if (!cardElement) return { transform: "", opacity: 1 };

        // LAST CARD - NO ANIMATION
        if (index === cardItems.length - 1) {
          return { transform: "", opacity: 1 };
        }

        const nextCardElement = document.getElementById(
          `wellness-card-${index + 1}`
        );
        if (nextCardElement) {
          const nextRect = nextCardElement.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const nextCardTop = nextRect.top;
          const nextCardHeight = nextRect.height;

          const nextCardVisibleHeight = Math.max(
            0,
            viewportHeight - nextCardTop
          );
          const nextCardVisibilityPercent =
            (nextCardVisibleHeight / nextCardHeight) * 100;

          if (nextCardVisibilityPercent > 0) {
            const progressValue = Math.min(1, nextCardVisibilityPercent / 100);

            const translateY = -progressValue * 24.1352;
            const scale = 1 - progressValue * 0.0483;
            const opacity = Math.max(0, 1 - progressValue);

            return {
              transform: `
                translate3d(0px, ${translateY}px, 0px) 
                scale(${scale}, ${scale})
              `,
              opacity,
            };
          }
        }
        return { transform: "", opacity: 1 };
      });

      setCardTransforms(newTransforms);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [cardItems.length]);

  return (
    <div id="wellnessHub" className="bg-white py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-left md:text-center mb-12">
          <h2 className="font-[700] w-full !text-[30px] md:!text-[40px] text-[#000] mb-4 uppercase leading-[39px]">
            CANADA'S BEST FITNESS AND WELLNESS HUB
          </h2>
          <h4 className="max-w-[940px] mx-auto leading-[26px]">
            With state-of-the-art locations in Edmonton, Calgary, Burnaby, and
            Vancouver, Evolve brings together top-tier fitness and wellness
            under one roof.
          </h4>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 items-end">
          {cardItems.map((item, index) => (
            <div
              key={index}
              id={`wellness-card-${index}`}
              className={`relative rounded-lg p-5 flex flex-col ${
                item.background === "black" ? "bg-black" : "bg-white"
              } border border-gray-200 md:transition-none transition-all duration-500 ease-out ${
                window.innerWidth < 768 ? "sticky top-0 h-[60vh]" : ""
              }`}
              style={{
                height: window.innerWidth >= 768 ? item.height : undefined,
                transform:
                  window.innerWidth < 768
                    ? cardTransforms[index].transform
                    : "",
                opacity:
                  window.innerWidth < 768 ? cardTransforms[index].opacity : 1,
                transformStyle:
                  window.innerWidth < 768 && cardTransforms[index].transform
                    ? "preserve-3d"
                    : "flat",
              }}
            >
              {/* Card Content */}
              <div className="text-left flex flex-col flex-1">
                {item.count && (
                  <h2 className="font-bold text-green-600 mb-2">
                    {item.count}
                  </h2>
                )}
                <h3
                  className={`font-bold mb-2 uppercase ${
                    item.textColor === "white" ? "text-white" : "text-black"
                  }`}
                >
                  {item.title}
                </h3>
                <h4
                  className={`mb-8 leading-[24px] md:leading-[26px] flex-1 ${
                    item.textColor === "white" ? "text-white" : "text-black"
                  }`}
                >
                  {item.description}
                </h4>

                {/* BOOK NOW Button */}
                <button className="btnPrimary mt-auto w-fit">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WellnessHub;
