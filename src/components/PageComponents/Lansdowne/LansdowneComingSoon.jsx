import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bgSlides = [
 {
    desktop: "/assets/images/home/facility/north6.webp",
    mobile: "/assets/images/home/facility/north6Mob.webp",
    alt: "Evolve Strength North training area",
  },
  {
    desktop: "/assets/images/franchise/Evolvelooklike/image_3.webp",
    mobile: "/assets/images/franchise/Evolvelooklike/image_3.webp",
    alt: "Evolve Strength turf and running track",
  },
  {
    desktop: "/assets/images/franchise/Evolvelooklike/image_5.webp",
    mobile: "/assets/images/franchise/Evolvelooklike/image_5.webp",
    alt: "Evolve Strength wellness clinic hallway",
  },
   {
    desktop: "/assets/images/home/facility/north4.webp",
    mobile: "/assets/images/home/facility/north4Mob.webp",
    alt: "Evolve Strength North equipment floor and turf",
  },
   {
    desktop: "/assets/images/home/facility/post7.webp",
    mobile: "/assets/images/home/facility/post7Mob.webp",
    alt: "Evolve Strength Post equipment floor and turf",
  },
  {
    desktop: "/assets/images/franchise/Evolvelooklike/image_6.webp",
    mobile: "/assets/images/franchise/Evolvelooklike/image_6.webp",
    alt: "Evolve Strength turf training area",
  },
 
   
   
  {
    desktop: "/assets/images/corporateMembership/OneMembershipFullAccess/slide8.webp",
    mobile: "/assets/images/corporateMembership/OneMembershipFullAccess/mobSlide8.webp",
    alt: "Evolve Strength lifting platforms",
  },
 
  {
    desktop: "/assets/images/franchise/Evolvelooklike/image_1.webp",
    mobile: "/assets/images/franchise/Evolvelooklike/image_1.webp",
    alt: "Evolve Strength dumbbell and rack floor",
  },
  {
    desktop: "/assets/images/franchise/Evolvelooklike/image_2.webp",
    mobile: "/assets/images/franchise/Evolvelooklike/image_2.webp",
    alt: "Evolve Strength Olympic lifting platforms",
  },
 
 
  
  {
    desktop: "/assets/images/home/facility/post9.webp",
    mobile: "/assets/images/home/facility/post9Mob.webp",
    alt: "Evolve Strength Post cardio and rowing equipment",
  },
  
  {
    desktop: "/assets/images/home/facility/brentwood7.webp",
    mobile: "/assets/images/home/facility/brentwood7Mob.webp",
    alt: "Evolve Strength Brentwood kettlebell rack",
  },
  {
    desktop: "/assets/images/home/facility/brentwood10.webp",
    mobile: "/assets/images/home/facility/brentwood10Mob.webp",
    alt: "Evolve Strength Brentwood equipment floor",
  },
  {
    desktop: "/assets/images/home/facility/royal_oak_6.webp",
    mobile: "/assets/images/home/facility/royal_oak_6Mob.webp",
    alt: "Evolve Strength Royal Oak equipment floor",
  },
  {
    desktop: "/assets/images/home/facility/downtown_7.webp",
    mobile: "/assets/images/home/facility/downtown_7Mob.webp",
    alt: "Evolve Strength Downtown group training area",
  },
  {
    desktop: "/assets/images/home/facility/downtown_3.webp",
    mobile: "/assets/images/home/facility/downtown_3Mob.webp",
    alt: "Evolve Strength Downtown cardio floor",
  },
  {
    desktop: "/assets/images/PersonalTraning/PersonalGymExperience/yoga.webp",
    mobile: "/assets/images/PersonalTraning/PersonalGymExperience/yogaMob.webp",
    alt: "Evolve Strength mobility and yoga area",
  },
 
  {
    desktop: "/assets/images/home/facility/seton6.webp",
    mobile: "/assets/images/home/facility/seton6Mob.webp",
    alt: "Evolve Strength Seton equipment floor",
  },
     {
    desktop: "/assets/images/franchise/GotYourBack/franchise_business_process.webp",
    mobile: "/assets/images/franchise/GotYourBack/gotYourBackBusinessMob.webp",
    alt: "Evolve Strength athlete training with a barbell",
  },
];

const SLIDE_DURATION = 4000;

const infoItems = [
  {
    label: "Location",
    value: "Inside Lansdowne Centre, Richmond BC",
    icon: (
      <path
        d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
        stroke="#4AB04A"
        strokeWidth="1.6"
      />
    ),
    hasCircle: true,
  },
  {
    label: "Address",
    value: "Unit 314, 5300 No 3 Rd, Richmond, BC, V6X 2X9",
    icon: (
      <path
        d="M4 21V8l8-5 8 5v13M9 21v-6h6v6"
        stroke="#4AB04A"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Opening",
    value: "2027",
    icon: (
      <>
        <rect x="3.5" y="5" width="17" height="16" rx="2" stroke="#4AB04A" strokeWidth="1.6" />
        <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" stroke="#4AB04A" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
];

function LansdowneComingSoon() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [imagesReady, setImagesReady] = useState(false);

  // Preload every slide (both desktop and mobile crops) up front so the
  // crossfade never has to decode a large image mid-transition — that
  // decode stall is what caused the freeze/flicker when a slide came in.
  useEffect(() => {
    let cancelled = false;
    const sources = bgSlides.flatMap((slide) => [slide.desktop, slide.mobile]);
    Promise.all(
      sources.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve;
            img.src = src;
          })
      )
    ).then(() => {
      if (!cancelled) setImagesReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!imagesReady) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % bgSlides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [imagesReady]);

  return (
    <div className="relative w-full min-h-screen lg:h-screen overflow-y-auto lg:overflow-hidden bg-[#08090A]">
      {/* Full-bleed background photo slideshow */}
      <div className="hidden md:block absolute inset-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.img
            key={bgSlides[activeSlide].desktop}
            src={bgSlides[activeSlide].desktop}
            alt={bgSlides[activeSlide].alt}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: SLIDE_DURATION / 1000 + 1.2, ease: "easeOut" },
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>
      <div className="md:hidden absolute inset-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.img
            key={bgSlides[activeSlide].mobile}
            src={bgSlides[activeSlide].mobile}
            alt={bgSlides[activeSlide].alt}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: SLIDE_DURATION / 1000 + 1.2, ease: "easeOut" },
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Dark overlay for text legibility: solid black on the left, fading out by 50% */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/60 to-transparent" />

      <div className="relative z-20 min-h-screen lg:h-full max-w-[1280px] mx-auto px-4 md:px-8 py-16 lg:py-0 flex items-center">
        <div className="max-w-[620px]">
          <div className="inline-flex items-center gap-2 bg-[#4AB04A]/10 border border-[#4AB04A]/40 px-4 py-1.5 rounded-full mb-5 md:mb-6">
            <span className="w-[7px] h-[7px] rounded-full bg-[#4AB04A] animate-pulse" />
            <span className="text-[#4AB04A] !font-[Kanit] text-[12px] md:text-[13px] font-[600] uppercase tracking-[1.5px]">
              Next Location · Opening 2027
            </span>
          </div>

          <h1 className="!font-[Kanit] uppercase text-[#FFFFFF] text-[36px] leading-[40px] md:text-[68px] md:leading-[68px] font-[600] mb-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
            Evolve Strength
            <br />
            <span className="text-[#4AB04A]">Lansdowne</span>
          </h1>

          <p className="text-[#D8DAD8] !font-[Kanit] !text-[15px] md:!text-[17px] !leading-[24px] max-w-[480px] mt-5 mb-8">
            Vancouver's fastest-growing strength club is coming to Lansdowne
            Centre. Be one of the first to know when doors open and lock a
            founding member rate before it ever goes public.
          </p>

          <div className="flex flex-col gap-4 max-w-[440px]">
            {infoItems.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-[10px] bg-white/[0.06] backdrop-blur-sm border border-white/15 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    {item.icon}
                    {item.hasCircle && (
                      <circle cx="12" cy="9" r="2.4" stroke="#4AB04A" strokeWidth="1.6" />
                    )}
                  </svg>
                </div>
                <div>
                  <p className="text-[#9BA09C] !font-[Kanit] !text-[12px] uppercase tracking-[1.5px] mb-1">
                    {item.label}
                  </p>
                  <p className="text-[#F2F3F2] !font-[Kanit] !text-[15px] !font-[400] !leading-[22px]">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LansdowneComingSoon;
