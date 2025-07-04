// import React, { useState } from "react";

// function WhyChooseEvolve() {
//  const cardData = [
//   {
//     title: "Keep 100% of What You Earn",
//     description:
//       "Set your own prices and keep every dollar. We charge a simple flat fee for space. No cuts, no percentages.",
//     bgClass: "Whatyouearn",
//   },
//   {
//     title: "You Keep Full Ownership of Your Clients",
//     description:
//       "Your clients stay fully yours. We never interfere, share, or manage them on your behalf.",
//     bgClass: "Youkeepfull",
//   },
//   {
//     title: "Work On Your Own Terms",
//     description:
//       "Choose your hours, training style, and schedule. Build a business that fits your lifestyle.",
//     bgClass: "Workonyour",
//   },
//    {
//     title: "Get real support from business professionals.",
//     description:
//       "Our leadership team started as trainers and business professionals.",
//     bgClass: "Getrealsupport",
//   },
//    {
//     title: "Build Your Own Team and Scale Your Business",
//     description:
//       "At Evolve, you can hire staff, bring on junior trainers, and grow your brand without limits.",
//     bgClass: "BuildYourOwn",
//   },
// ];

//   return (
//     <div className="w-full pb-12 pt-[120px] bg-[#F9F9F9]">
//       <div className="w-full max-w-[1280px] px-8 mx-auto flex flex-col gap-12">
//          <div className="space-y-[24px]">
//             <h2 className="max-w-[707px] text-left leading-[56px] uppercase">
//               Why Choose Evolve
//             </h2>
//           </div>
//            <div className="space-y-[35px]">
//             {cardData.map((card, index) => (
//         <div
//           key={index}
//           className={`px-[70px] rounded-[10px] py-[60px] flex items-end relative min-h-[504px] max-h-[504px] bg-cover bg-center ${card.bgClass}`}
//         >
//           <div className="relative z-[9] space-y-[14px]">
//             <h3 className="text-white !font-[700] leading-[20px] !font-Vazirmatn">
//               {card.title}
//             </h3>
//             <p className="text-white !font-[300] !font-Vazirmatn max-w-[413px] leading-[26px]">
//               {card.description}
//             </p>
//           </div>
//           <div
//             className="min-h-[550px] w-full left-0 rounded-b-[10px] absolute bottom-0"
//             style={{
//               background:
//                 "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 51.51%, #000 100%)",
//             }}
//           ></div>
//         </div>
//       ))}
//            </div>
//       </div>
//     </div>
//   );
// }

// export default WhyChooseEvolve;

import { useState, useEffect } from "react"

function WhyChooseEvolve() {
  const cardData = [
    {
      title: "Keep 100% of What You Earn",
      description:
        "Set your own prices and keep every dollar. We charge a simple flat fee for space. No cuts, no percentages.",
      bgClass: "Whatyouearn",
    },
    {
      title: "You Keep Full Ownership of Your Clients",
      description: "Your clients stay fully yours. We never interfere, share, or manage them on your behalf.",
      bgClass: "Youkeepfull",
    },
    {
      title: "Work On Your Own Terms",
      description: "Choose your hours, training style, and schedule. Build a business that fits your lifestyle.",
      bgClass: "Workonyour",
    },
    {
      title: "Get real support from business professionals.",
      description: "Our leadership team started as trainers and business professionals.",
      bgClass: "Getrealsupport",
    },
    {
      title: "Build Your Own Team and Scale Your Business",
      description: "At Evolve, you can hire staff, bring on junior trainers, and grow your brand without limits.",
      bgClass: "BuildYourOwn",
    },
  ]

  const [cardTransforms, setCardTransforms] = useState(cardData.map(() => ({ transform: "", opacity: 1 })))

  useEffect(() => {
    const handleScroll = () => {
      const newTransforms = cardData.map((_, index) => {
        const cardElement = document.getElementById(`card-${index}`)
        if (!cardElement) return { transform: "", opacity: 1 }

        // LAST CARD - NO ANIMATION
        if (index === cardData.length - 1) {
          return { transform: "", opacity: 1 }
        }

        const nextCardElement = document.getElementById(`card-${index + 1}`)
        if (nextCardElement) {
          const nextRect = nextCardElement.getBoundingClientRect()
          const viewportHeight = window.innerHeight
          const nextCardTop = nextRect.top
          const nextCardHeight = nextRect.height

          const nextCardVisibleHeight = Math.max(0, viewportHeight - nextCardTop)
          const nextCardVisibilityPercent = (nextCardVisibleHeight / nextCardHeight) * 100

          if (nextCardVisibilityPercent > 0) {
            const progressValue = Math.min(1, nextCardVisibilityPercent / 100)

            const translateY = -progressValue * 24.1352 
            const scale = 1 - progressValue * 0.0483 
            const opacity = Math.max(0, 1 - progressValue) 

            return {
              transform: `
                translate3d(0px, ${translateY}px, 0px) 
                scale(${scale}, ${scale})
              `,
              opacity,
            }
          }
        }
        return { transform: "", opacity: 1 }
      })

      setCardTransforms(newTransforms)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [cardData.length])

  return (
    <div className="w-full py-[54px] bg-[#F9F9F9]">
      <div className="w-full max-w-[1280px] px-8 mx-auto flex flex-col gap-12">
        <div className="space-y-[24px]">
          <h2 className="max-w-[707px] text-left leading-[56px] uppercase">Why Choose Evolve</h2>
        </div>

        <div className="space-y-[35px]">
          {cardData.map((card, index) => (
            <div
              key={index}
              id={`card-${index}`}
              className="h-[100vh] sticky top-0 backface-hidden md:w-full transition-all duration-500 ease-out"
              style={{
                transform: cardTransforms[index].transform,
                opacity: cardTransforms[index].opacity,
                transformStyle: cardTransforms[index].transform ? "preserve-3d" : "flat",
              }}
            >
              <div
                className={`px-[70px] rounded-[10px] py-[60px] flex items-end relative h-full bg-cover bg-center ${card.bgClass}`}
              >
                <div className="relative z-[9] space-y-[14px]">
                  <h3 className="text-white !font-[700] leading-[20px] !font-Vazirmatn">{card.title}</h3>
                  <p className="text-white !font-[300] !font-Vazirmatn max-w-[413px] leading-[26px]">
                    {card.description}
                  </p>
                </div>
                <div
                  className="min-h-[550px] w-full left-0 rounded-b-[10px] absolute bottom-0"
                  style={{
                    background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 51.51%, #000 100%)",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyChooseEvolve
