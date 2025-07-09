import { useState, useEffect } from "react";
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

function WhyEvolveIsDifferent() {
  const [cardTransforms, setCardTransforms] = useState(
    cardData.map(() => ({ transform: "", opacity: 1 }))
  );

  useEffect(() => {
    const handleScroll = () => {
      const newTransforms = cardData.map((_, index) => {
        const cardElement = document.getElementById(`card-${index}`);
        if (!cardElement) return { transform: "", opacity: 1 };

        if (index === cardData.length - 1) {
          return { transform: "", opacity: 1 };
        }

        const nextCardElement = document.getElementById(`card-${index + 1}`);
        if (nextCardElement) {
          const nextRect = nextCardElement.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const nextCardTop = nextRect.top;
          const nextCardHeight = nextRect.height;

          const nextCardVisibleHeight = Math.max(0, viewportHeight - nextCardTop);
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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [cardData.length]);

  return (
    <div className="w-full py-[54px]">
      <div className="w-full max-w-[1280px] px-8 mx-auto flex flex-col gap-12">
        <div className=" flex justify-center">
          <h2 className="max-w-[707px] text-center text-[#000000] font-[700] leading-[39px] uppercase">
            Why Evolve Is Different
          </h2>
        </div>

        <div className="space-y-[30px] ">
          {cardData.map((card, index) => (
            <div
              key={index}
              id={`card-${index}`}
              className="h-[50vh] sticky top-0 backface-hidden  md:w-full transition-all duration-500 ease-out"
              style={{
                transform: cardTransforms[index].transform,
                opacity: cardTransforms[index].opacity,
                transformStyle: cardTransforms[index].transform ? "preserve-3d" : "flat",
              }}
            >
              <div className="rounded-[10px] flex justify-between p-8 relative h-full border-[#CCCCCC] border bg-[#fff] shadow-md">
                <div className="relative z-[9] max-w-[520px] flex flex-col gap-4 justify-center">
                  <h2 className="text-[#4AB04A] font-[500] font-[kanit] leading-[39px] tracking-[-1.2px]">{card.number}</h2>
                  <h3 className="text-[#000] font-[kanit] font-[500] leading-[24px] tracking-[-0.72px]">
                    {card.title}
                  </h3>
                  <h4 className="text-[#000] font-[kanit] font-[400] leading-[24px]">{card.description}</h4>
                </div>
                <div className=" ">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-bl-[10px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyEvolveIsDifferent;



// import React from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import { MapPin } from "lucide-react";

// import img1 from "@/assets/images/spaces/WhyEvolveIsDifferent/slide1.webp";
// import img2 from "@/assets/images/spaces/WhyEvolveIsDifferent/slide2.webp";
// import img3 from "@/assets/images/spaces/WhyEvolveIsDifferent/slide3.webp";

// const cardItems = [
//   {
//     number: "01",
//     title: "Worry-Free Entrepreneurship",
//     description:
//       "We can grow your business without the usual drain. You don’t need to hire front desk staff or cleaners. We handle operations, you serve customers, and all the facility details. You just show up and work with your clients.",
//     image: img1,
//   },
//   {
//     number: "02",
//     title: "All-Inclusive Rent",
//     description:
//       "No surprise bills: one flat monthly payment covers utilities, gym access, shared amenities, and more. You won’t have to manage multiple service vendors.",
//     image: img2,
//   },
//   {
//     number: "03",
//     title: "Built-In Community",
//     description:
//       "Be part of a trusted network of wellness professionals. That makes it easy to connect, refer clients, and grow together. We don’t charge finder’s fees or take a cut of your earnings.",
//     image: img3,
//   },
// ];

// const WhyEvolveIsDifferent = () => {
//   const [emblaRef] = useEmblaCarousel({
//     axis: "y", // Vertical scroll
//     loop: false,
//     align: "center",
//     containScroll: "trimSnaps",
//   });

//   return (
//     <section className="pt-6 pb-12">
//       <div className="max-w-[1280px] mx-auto px-8 flex flex-col h-full">
//         <h2 className="text-3xl font-extrabold text-center mb-8 uppercase">
//           Why Evolve Is Different
//         </h2>

//         <div className="overflow-hidden h-full" ref={emblaRef}>
//           <div className="flex flex-col h-[400px]">
//             {cardItems.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="flex-shrink-0 h-[80%] bg-white border rounded-lg  p-6 flex flex-col md:flex-row items-center justify-between my-2"
//               >
//                 <div className="w-full max-w-[650px] flex flex-col gap-4">
//                   <h2 className="text-[#4AB04A] font-[500] tracking-[-1.2px]">
//                     {item.number}
//                   </h2>
//                   <h3 className="font-[500] text-[#000] leading-[24px] tracking-[-0.72px]">{item.title}</h3>
//                   <h4 className="text-[#000] !font-[300] leading-[24px] mb-2">
//                     {item.description}
//                   </h4>
//                 </div>
//                 <div className="w-full  max-w-[370px] overflow-hidden rounded-lg">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="rounded-lg w-full object-cover h-48 md:h-auto"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyEvolveIsDifferent;