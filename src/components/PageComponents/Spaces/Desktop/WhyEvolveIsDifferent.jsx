import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MapPin } from "lucide-react";

import img1 from "@/assets/images/spaces/WhyEvolveIsDifferent/slide1.webp";
import img2 from "@/assets/images/spaces/WhyEvolveIsDifferent/slide2.webp";
import img3 from "@/assets/images/spaces/WhyEvolveIsDifferent/slide3.webp";

const cardItems = [
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

const WhyEvolveIsDifferent = () => {
  const [emblaRef] = useEmblaCarousel({
    axis: "y", // Vertical scroll
    loop: false,
    align: "center",
    containScroll: "trimSnaps",
  });

  return (
    <section className="pt-6 pb-12">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col h-full">
        <h2 className="text-3xl font-extrabold text-center mb-8 uppercase">
          Why Evolve Is Different
        </h2>

        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex flex-col h-[400px]">
            {cardItems.map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 h-[80%] bg-white border rounded-lg  p-6 flex flex-col md:flex-row items-center justify-between my-2"
              >
                <div className="w-full max-w-[650px] flex flex-col gap-4">
                  <h2 className="text-[#4AB04A] font-[500] tracking-[-1.2px]">
                    {item.number}
                  </h2>
                  <h3 className="font-[500] text-[#000] leading-[24px] tracking-[-0.72px]">{item.title}</h3>
                  <h4 className="text-[#000] !font-[300] leading-[24px] mb-2">
                    {item.description}
                  </h4>
                </div>
                <div className="w-full  max-w-[370px] overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-lg w-full object-cover h-48 md:h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEvolveIsDifferent;

// import React, { useEffect, useState, useCallback } from "react";
// import useEmblaCarousel from "embla-carousel-react";

// import img1 from "@/assets/images/spaces/WhyEvolveIsDifferent/slide1.webp";
// import img2 from "@/assets/images/spaces/WhyEvolveIsDifferent/slide2.webp";
// import img3 from "@/assets/images/spaces/WhyEvolveIsDifferent/slide3.webp";

// const cardItems = [
//   {
//     number: "01",
//     title: "No Finder’s Fees",
//     description: "We don’t charge finder’s fees or take a cut of your earnings.",
//     image: img1,
//   },
//   {
//     number: "02",
//     title: "Simple Terms",
//     description: "No hidden fees, no complicated contracts.",
//     image: img2,
//   },
//   {
//     number: "03",
//     title: "Built-In Community",
//     description:
//       "Be part of a trusted network of wellness professionals. That makes it easy to connect, refer clients, and grow together.",
//     image: img3,
//   },
// ];

// const WhyEvolveIsDifferent = () => {
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     loop: false,
//     axis: "y",
//     containScroll: "trimSnaps",
//   });

//   const [rotateValues, setRotateValues] = useState(
//     Array(cardItems.length).fill(90) // start fully flipped
//   );

//   const onScroll = useCallback(() => {
//     if (!emblaApi) return;

//     const scrollProgress = emblaApi.scrollProgress();

//     const newRotateValues = emblaApi.slideNodes().map((slideNode, index) => {
//       const slideProgress = emblaApi.scrollSnapList()[index];
//       const diff = scrollProgress - slideProgress;

//       // Adjust the multiplier for more/less dramatic flip
//       const rotation = Math.max(0, 90 - Math.abs(diff) * 300);
//       return rotation;
//     });

//     setRotateValues(newRotateValues);
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     emblaApi.on("scroll", onScroll);
//     onScroll(); // run once on init
//   }, [emblaApi, onScroll]);

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-16 h-[600px]">
//       <h2 className="text-3xl font-extrabold text-center mb-8 uppercase">
//         Why Evolve Is Different
//       </h2>

//       <div className="overflow-hidden h-full" ref={emblaRef}>
//         <div className="flex flex-col h-full">
//           {cardItems.map((item, idx) => (
//             <div
//               key={idx}
//               className="flex-shrink-0 h-[80%] bg-white border rounded-lg shadow-lg p-4 flex flex-col items-center justify-between my-2 transition-transform duration-300"
//               style={{
//                 transform: `rotateX(${rotateValues[idx]}deg)`,
//                 transformOrigin: "top center",
//               }}
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="rounded-lg w-full object-cover mb-4"
//               />
//               <div className="text-center">
//                 <h3 className="text-green-600 text-2xl font-bold mb-1">
//                   {item.number}
//                 </h3>
//                 <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
//                 <p className="text-sm text-gray-700">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyEvolveIsDifferent;
