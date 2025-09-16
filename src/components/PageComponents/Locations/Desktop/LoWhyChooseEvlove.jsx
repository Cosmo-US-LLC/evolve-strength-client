import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const professionals = [
  {
    title: "Top Personal Trainers",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/WhyChooseEvolve/personal_trainer.webp",
    dec: "Train with certified personal trainers ranked in the top 1% locally. Programs are tailored to your goals, pace, and ability.",
  },
  {
    title: "Top of the Line Equipment",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/WhyChooseEvolve/Equipments.webp",
    dec: "Each gym is fully stocked with high-end machines, free weights, and tools built for strength, cardio, and recovery.",
  },
  {
    title: "Health and Wellness",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/WhyChooseEvolve/Health.webp",
    dec: "Access licensed physiotherapists, massage therapists, nutritionists, and other wellness professionals all in one place.",
  },
  {
    title: "Top Personal Trainers",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/WhyChooseEvolve/personal_trainer.webp",
    dec: "Train with certified personal trainers ranked in the top 1% locally. Programs are tailored to your goals, pace, and ability.",
  },
  {
    title: "Top of the Line Equipment",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/WhyChooseEvolve/Equipments.webp",
    dec: "Each gym is fully stocked with high-end machines, free weights, and tools built for strength, cardio, and recovery.",
  },
  {
    title: "Health and Wellness",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/WhyChooseEvolve/Health.webp",
    dec: "Access licensed physiotherapists, massage therapists, nutritionists, and other wellness professionals all in one place.",
  },
];

const LoWhyChooseEvolve = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
      align: "start",
      skipSnaps: false,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  // Get location from URL path
  const currentPath = window.location.pathname;
  let locationKey = "calgary-seton"; // default

  if (currentPath.includes("vancouver-post")) {
    locationKey = "vancouver-post";
  } else if (currentPath.includes("burnaby-brentwood")) {
    locationKey = "burnaby-brentwood";
  } else if (currentPath.includes("calgary-seton")) {
    locationKey = "calgary-seton";
  } else if (currentPath.includes("calgary-royal-oak")) {
    locationKey = "calgary-royal-oak";
  } else if (currentPath.includes("calgary-sunridge")) {
    locationKey = "calgary-sunridge";
  } else if (currentPath.includes("edmonton-south")) {
    locationKey = "edmonton-south";
  } else if (currentPath.includes("edmonton-downtown")) {
    locationKey = "edmonton-downtown";
  } else if (currentPath.includes("edmonton-north")) {
    locationKey = "edmonton-north";
  }

  // Location-specific subscription URLs
  const getSubscriptionUrl = (locationKey) => {
    const subscriptionUrls = {
      "vancouver-post":
        "/join-now/membership-type?location=Vancouver,%20The%20Post",
      "burnaby-brentwood":
        "/join-now/membership-type?location=Burnaby%20Brentwood",
      "calgary-seton":
        "/join-now/membership-type?location=Calgary%20Seton",
      "calgary-royal-oak":
        "/join-now/membership-type?location=Calgary%20Royal%20Oak",
      "calgary-sunridge":
        "/join-now/membership-type?location=Calgary%20Sunridge",
      "edmonton-south":
        "/join-now/membership-type?location=Edmonton%20South",
      "edmonton-downtown":
        "/join-now/membership-type?location=Edmonton%20Downtown",
      "edmonton-north":
        "/join-now/membership-type?location=Edmonton%20North",
    };

    return (
      subscriptionUrls[locationKey] || "/join-now"
    );
  };

  const subscriptionUrl = getSubscriptionUrl(locationKey);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  return (
    <section className="py-12 bg-[#FFFFFF]">
      <div className="max-w-[1280px] mx-auto md:px-8 px-4 flex flex-col items-start gap-8">
        <div className="flex items-start flex-col gap-4">
          <h2 className="text-[#000] uppercase ">Why Choose Evolve?</h2>
          <h4 className="mb-6 !max-w-[800px]">
            At Evolve, we help people across Canada reach their full potential
            through fitness, health, and wellness. We offer expert coaching,
            integrated health services, and top-tier facilities at a price you
            can afford.
          </h4>
          <a href={subscriptionUrl}>
            <button className="btnPrimary">Join Now</button>
          </a>
        </div>

        <div className="relative w-full">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 pl-0 md:pl-4">
              {professionals.map((pro, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-6px)] relative"
                >
                  <img
                    src={pro.image}
                    alt={pro.title}
                    className="w-full h-[400px] object-cover rounded-[10px]"
                  />
                  <h3 className="flex items-center mt-6 text-[#000] leading-[24px] font-[500]">
                    {pro.title}
                  </h3>

                  <h4 className="mt-4">{pro.dec}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -top-1/12 md:-top-1/12 -translate-y-1/2 left-[74%] md:left-[91.5%] z-10">
            <button
              onClick={scrollPrev}
              className="p-2 rounded-full border border-[#000000] text-[#000000] cursor-pointer hover:bg-[#000000] hover:text-[#fff]"
            >
              <ArrowLeft className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          </div>
          <div className="absolute -top-1/12 md:-top-1/12 -translate-y-1/2 right-[4%] md:right-[1%] z-10">
            <button
              onClick={scrollNext}
              className="p-2 rounded-full border border-[#000000] text-[#000000] cursor-pointer hover:bg-[#000000] hover:text-[#fff]"
            >
              <ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* <button className="btnPrimary">APPLY NOW</button> */}
      </div>
    </section>
  );
};

export default LoWhyChooseEvolve;
