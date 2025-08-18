import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import LeftArrowIcon from "@/assets/images/JoinAsTrainer/WhatTrainersAre/left-arrow.svg";
import RightArrowIcon from "@/assets/images/JoinAsTrainer/WhatTrainersAre/right-arrow.svg";
import Client from "@/assets/images/JoinAsTrainer/WhatTrainersAre/client.webp";

function OurFranchiseesSay() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      // Reset autoplay after manual interaction
      const autoplay = emblaApi.plugins().autoplay;
      if (autoplay) {
        autoplay.stop();
        autoplay.play();
      }
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      // Reset autoplay after manual interaction
      const autoplay = emblaApi.plugins().autoplay;
      if (autoplay) {
        autoplay.stop();
        autoplay.play();
      }
    }
  }, [emblaApi]);

  const testimonialData = [
    {
      name: "Jason M.",
      role: "Personal Trainer",
      image: Client,
      testimonial:
        "I used to work at a gym that took a cut from every session. Sometimes it was almost half. At Evolve, I just pay a flat fee each month. That's it. No surprises, no percentages. And I actually get to keep what I earn. It's made a big difference. I can plan better and take on more clients without worrying about losing a chunk of my income. And the best part is I run things my way. I set my own hours, my own prices, and no one's telling me how to train.",
    },
    {
      name: "Sarah K.",
      role: "Nutrition Coach",
      image: Client,
      testimonial:
        "The community at Evolve is incredible. I've been able to build a thriving nutrition coaching business while being surrounded by other wellness professionals. The facility is top-notch, and the support from the Evolve team has been amazing. I love that I can focus on my clients without worrying about facility management or unexpected costs.",
    },
    {
      name: "Mike R.",
      role: "Fitness Trainer",
      image: Client,
      testimonial:
        "Switching to Evolve was the best decision I made for my business. The all-inclusive pricing means I know exactly what I'm paying each month, and the amenities are fantastic. My clients love the space, and I love that I can grow my business without the usual overhead headaches. The built-in community has also helped me expand my client base through referrals.",
    },
    {
      name: "Lisa T.",
      role: "Wellness Coach",
      image: Client,
      testimonial:
        "What sets Evolve apart is the genuine support for entrepreneurs. They understand that we're building businesses, not just renting space. The worry-free approach to facility management allows me to focus entirely on my clients and growing my practice. The community aspect has been invaluable for networking and professional development.",
    },
  ];

  return (
    <div className="w-full pb-[70px] pt-[82px]">
      <div className="w-full max-w-[1280px] px-4 sm:px-8 mx-auto flex flex-col gap-12">
        <div className="text-left">
          <h2 className="!text-[#1C1C1C] uppercase text-3xl md:text-4xl leading-tight md:leading-[39px] font-[700]">
            What Our Franchisees Say
          </h2>
        </div>
        <div className="relative w-full">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonialData.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <div className="px-4 md:px-[50px] relative flex flex-col md:flex-row justify-between py-0 pt-4 md:py-[35px] bg-[#EEE] rounded-[10px] h-auto md:h-[350px]">
                    <div className="w-full md:max-w-[642px] flex flex-col justify-center h-full">
                      <div className="pb-4 md:pb-[22px]">
                        <h3 className="font-[700] text-[#000] text-xl md:text-2xl leading-[20px]">
                          {testimonial.name}
                        </h3>
                        <h5 className="!text-[#4AB04A] !text-lg !font-vazirmatn leading-[20px]">
                          {testimonial.role}
                        </h5>
                      </div>
                      <p className="h4 !font-[300] text-base md:text-lg leading-[26px] text-[#000] overflow-y-auto max-h-auto md:max-h-[180px] pr-2">
                        {testimonial.testimonial}
                      </p>
                    </div>
                    <div className="mt-0 flex justify-center">
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name} - ${testimonial.role}`}
                        className="w-full h-auto max-w-[300px] md:max-w-[470px] md:h-[277px] object-cover rounded-lg md:absolute md:right-[-1%] md:bottom-0"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center md:justify-start gap-4 mt-6 md:absolute md:left-[85%] md:-top-[28%] md:-translate-y-1/2">
            <button
              onClick={scrollPrev}
              className="h-12 w-12 bg-white rounded-full border border-[#00000060] flex items-center justify-center shadow hover:bg-gray-100 cursor-pointer transition-colors duration-200"
            >
              <img
                src={LeftArrowIcon}
                alt="Previous"
                className="h-5 w-5 text-[#00000060] cursor-pointer"
              />
            </button>
            <button
              onClick={scrollNext}
              className="h-12 w-12 bg-white rounded-full border border-[#00000060] flex items-center justify-center shadow hover:bg-gray-100 cursor-pointer transition-colors duration-200"
            >
              <img
                src={RightArrowIcon}
                alt="Next"
                className="h-5 w-5 text-[#00000060] cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurFranchiseesSay;
