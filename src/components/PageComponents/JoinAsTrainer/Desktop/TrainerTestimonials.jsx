import React, { useEffect, useState } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Spencer Snashall",
    role: "Personal Trainer",
    avatar:
      "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762935143395-41d3fb7f-7e0c-4edd-8031-4beedb7b8cc8.png",
    rating: 5,
    text: "Operating Form Fitness out of Evolve Strength @ The Post has been a great experience. The space is modern, spacious, and fully equipped, making it easy to deliver high-quality sessions. I value being able to run my business independently while sharing the gym with a community of passionate trainers and business owners who are equally committed to their craft.",
  },
  {
    name: "Linda Lewis",
    role: "Personal Trainer",
    avatar:
      "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762427331398-cef60fb0-7c19-4ab3-86fb-cd86fa569eb1.png",
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Linda Lewis",
    role: "Personal Trainer",
    avatar:
      "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762427341507-b5511ecf-2d21-402f-a29d-10be486bcf12.png",
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Linda Lewis",
    role: "Personal Trainer",
    avatar:
      "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762427331398-cef60fb0-7c19-4ab3-86fb-cd86fa569eb1.png",
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

function TrainerTestimonials() {
  const [api, setApi] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect();
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="bg-black w-full">
      <div className="max-w-[1280px] md:px-8 px-4 mx-auto w-full py-[64px] md:py-[100px]">
        <h2 className="text-white uppercase md:text-center !text-[28px] md:!text-[40px] leading-[32px] md:leading-[39px] mb-12">
          What Trainers Are Saying
        </h2>

        {/* Desktop Carousel (3 per view) */}
        <div className="">
          <Carousel
            opts={{ align: "start", containScroll: "trimSnaps", loop: true }}
            plugins={[
              Autoplay({
                delay: 3000, 
                stopOnInteraction: false,
              }),
            ]}
            setApi={setApi}

            // <-- connect api here
          >
            <CarouselContent className="gap-4">
              {testimonials.map((t, idx) => (
                <CarouselItem
                  key={idx}
                  className="md:max-w-[418px] max-w-[340px] "
                >
                  <div className="bg-[rgba(33,32,32,0.5)] rounded-[16px] p-[24px] h-full flex flex-col gap-[24px]">
                    <div className="flex items-center gap-[16px]">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-[80px] h-[80px] rounded-full object-cover"
                      />
                      <div className="flex flex-col">
                        <span className="text-white !text-[18px] leading-[28px]">
                          {t.name}
                        </span>
                        <span className="text-[#9CA3AF] !text-[14px] leading-[20px]">
                          {t.role}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-[#2DBF50] fill-[#2DBF50]"
                        />
                      ))}
                    </div>
                    <p className="text-white !text-[18px] leading-[28px] opacity-95">
                      {t.text}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* mobile arrows only */}
            <div className="md:hidden flex items-center justify-center gap-6 mt-5">
              <button
                onClick={() => api?.scrollPrev()}
                className="w-[42px] h-[42px] rounded-[21px] border border-white/90 flex items-center justify-center"
              >
                <ArrowLeft className="w-[17px] h-[17px] text-white" />
              </button>

              <button
                onClick={() => api?.scrollNext()}
                className="w-[42px] h-[42px] rounded-[21px] border border-white/90 flex items-center justify-center"
              >
                <ArrowRight className="w-[17px] h-[17px] text-white" />
              </button>
            </div>
          </Carousel>
        </div>

        {/* Mobile Carousel (1 per view) */}
      </div>
    </div>
  );
}

export default TrainerTestimonials;
