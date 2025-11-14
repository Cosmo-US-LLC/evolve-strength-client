import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import starIcon from "../../../../assets/images/JoinAsTrainer/WhatTrainersAre/star.webp";
import michelleImage from "../../../../assets/images/JoinAsTrainer/WhatTrainersAre/what_trainer_img1.webp";
import spencerImage from "../../../../assets/images/JoinAsTrainer/WhatTrainersAre/what_trainer_img2.webp";
import baileyImage from "../../../../assets/images/JoinAsTrainer/WhatTrainersAre/what_trainer_img3.webp";

function WhatTrainersAre() {
  const testimonialData = [
    {
      name: "Michelle Moen",
      role: "Personal Trainer",
      image: michelleImage,
      testimonial:
        "Working at Evolve Strength has been the best decision for my business. They support you running your business however you see fit, from programming styles to work hours. They have all the gym equipment I need for my client's success, ranging from hypertrophy to powerlifting. The support and collaboration I've also experienced from the other trainers has been immensely helpful. I couldn't imagine running my business anywhere else!",
    },
    {
      name: "Spencer Snashall",
      role: "Personal Trainer",
      image: spencerImage,
      testimonial:
        "Operating Form Fitness out of Evolve Strength @ The Post has been a great experience. The space is modern, spacious, and fully equipped, making it easy to deliver high-quality sessions. I value being able to run my business independently while sharing the gym with a community of passionate trainers and business owners who are equally committed to their craft.",
    },
    {
      name: "Bailey Lau",
      role: "Personal Trainer",
      image: baileyImage,
      testimonial:
        "Evolve has allowed me to build my business the way I see fit, in a welcoming environment surrounded by like-minded trainers and coaches. Evolve has provided a space for me and my clients that has everything we need. I would recommend working at Evolve to any trainer who wants to grow and truly control their own business.",
    },
    // {
    //   name: "Jason M.",
    //   role: "Personal Trainer",
    //   image: michelleImage,
    //   testimonial:
    //     "I used to work at a gym that took a cut from every session. Sometimes it was almost half. At Evolve, I just pay a flat fee each month. That's it. No surprises, no percentages. And I actually get to keep what I earn. It's made a big difference. I can plan better and take on more clients without worrying about losing a chunk of my income.",
    // },
    // {
    //   name: "Sarah K.",
    //   role: "Nutrition Coach",
    //   image: spencerImage,
    //   testimonial:
    //     "The community at Evolve is incredible. I've been able to build a thriving nutrition coaching business while being surrounded by other wellness professionals. The facility is top-notch, and the support from the Evolve team has been amazing. I love that I can focus on my clients without worrying about facility management or unexpected costs.",
    // },
    // {
    //   name: "Mike R.",
    //   role: "Fitness Trainer",
    //   image: baileyImage,
    //   testimonial:
    //     "Switching to Evolve was the best decision I made for my business. The all-inclusive pricing means I know exactly what I'm paying each month, and the amenities are fantastic. My clients love the space, and I love that I can grow my business without the usual overhead headaches.",
    // },
  ];

  const StarRating = () => (
    <div className="flex items-start">
      {[...Array(5)].map((_, i) => (
        <img key={i} src={starIcon} alt="star" className="w-8 h-8" />
      ))}
    </div>
  );

  return (
    <div className="bg-black w-full py-12 md:py-10">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8 md:gap-[48px] items-center px-4 md:px-8">
        {/* Title */}
        <div className="flex flex-col gap-4 items-center justify-center w-full max-w-[576px]">
          <h2 className="md:hidden text-[#fff] uppercase text-center">
            What Trainers <br /> Are Saying
          </h2>
          <h2 className="max-md:hidden text-[#fff] uppercase text-center">
            What Trainers Are Saying
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="w-full">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonialData.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full md:basis-1/3"
                >
                  <div className="bg-[rgba(33,32,32,0.5)] flex flex-col items-start overflow-hidden rounded-[16px] w-full relative">
                    {/* Image Section */}
                    <div className="h-[280px] relative w-full overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name} - ${testimonial.role}`}
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col gap-6 items-start p-6 w-full">
                      {/* Stars and Testimonial */}
                      <div className="flex flex-col gap-3 items-start w-full">
                        <StarRating />
                        <h4 className="text-white text-base leading-[24px] h-[260px] font-light">
                          {testimonial.testimonial}
                        </h4>
                      </div>

                      {/* Name and Role */}
                      <div className="flex flex-col items-start w-full">
                        <h4 className="text-[#fff]">{testimonial.name}</h4>
                        <p className="text-[#808080] text-[16px] leading-normal font-normal">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default WhatTrainersAre;
