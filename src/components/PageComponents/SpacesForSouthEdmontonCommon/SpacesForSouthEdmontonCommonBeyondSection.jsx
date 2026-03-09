import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useCounter from "@/hooks/useCounter";
import useSyncedCounter from "@/hooks/useSyncedCounter";

const STAT_CARDS = [
  {
    numericTarget: 2,
    suffix: "×",
    title: "More Profit",
    description:
      "Providers at Evolve earn double the profit compared to similar practices, driven by high client demand and efficient business support.",
  },
  {
    numericTarget: 85,
    suffix: "%",
    title: "Member Usage",
    description:
      "85% of gym members use wellness services every month, creating a consistent stream of health conscious clients ready for your practice.",
  },
  {
    numericTarget: 4000,
    suffix: "+",
    title: "Active Members",
    description:
      "A thriving community of fitness focused members who prioritize recovery, performance, and wellness and are ready to engage with your services.",
  },
  {
    numericTarget: 40,
    suffix: "%",
    title: "Less Overhead",
    description:
      "Streamlined operations including reception and in-house advertising reduce your overhead by 40% compared to traditional setups.",
  },
];

const cardClassName =
  "backdrop-blur-[20px] bg-gradient-to-b from-white/10 to-gray-500/10 border border-white/10 flex flex-col gap-6 md:gap-10 items-start min-w-0 px-5 py-6 rounded-[14px] h-full";

function StatCard({ card, animatedCount }) {
  return (
    <div className={cardClassName} data-name="Background+Border">
      <p className="font-[500] leading-[72px] !font-[Kanit] text-[#4ab04a] text-5xl md:text-[64px] uppercase shrink-0">
        {animatedCount}
        {card.suffix}
      </p>
      <div className="flex flex-col gap-2 w-full shrink-0">
        <h3 className="leading-8 text-2xl text-white w-full">{card.title}</h3>
        <h4 className="leading-[24px] text-lg text-[#f1f1f1]">
          {card.description}
        </h4>
      </div>
    </div>
  );
}

function MobileStatCard({ card, animatedCount }) {
  return (
    <div
      className={
        "backdrop-blur-[20px] bg-gradient-to-b from-white/10 to-gray-500/10 border border-white/10 flex flex-col gap-6 items-start min-w-0 p-4 rounded-[14px] h-full min-h-[280px]"
      }
      data-name="Background+Border"
    >
      <p className="font-medium !font-[Kanit] leading-[72px] text-[#4ab04a] text-[50px] uppercase shrink-0">
        {animatedCount}
        {card.suffix}
      </p>
      <div className="flex flex-col gap-2 w-full shrink-0">
        <h3 className="font-medium leading-9 text-[28px] text-white w-full">
          {card.title}
        </h3>
        <h4 className="font-light leading-[1.25] text-[14px] text-[#f1f1f1]">
          {card.description}
        </h4>
      </div>
    </div>
  );
}

function SpacesForSouthEdmontonCommonBeyondSection() {
  const { elementRef, hasStarted } = useCounter(1, 2000);
  const count1 = useSyncedCounter(
    STAT_CARDS[0].numericTarget,
    1000,
    hasStarted,
  );
  const count2 = useSyncedCounter(
    STAT_CARDS[1].numericTarget,
    2000,
    hasStarted,
  );
  const count3 = useSyncedCounter(
    STAT_CARDS[2].numericTarget,
    3000,
    hasStarted,
  );
  const count4 = useSyncedCounter(
    STAT_CARDS[3].numericTarget,
    1000,
    hasStarted,
  );
  const animatedCounts = [count1, count2, count3, count4];

  return (
    <section
      ref={elementRef}
      className="bg-black flex flex-col gap-5 md:gap-[48px] items-center justify-center px-5 md:px-[100px] py-[60px] md:py-20 w-full"
      data-node-id="14338:611"
    >
      {/* Header: mobile (Figma 32px / 14px) and desktop */}
      <div className="flex flex-col gap-5 items-center text-center max-w-[730px] w-full">
        <h2 className="text-[#f1f1f1] uppercase w-full max-w-[355px] md:max-w-none">
          Beyond Traditional Office Space
        </h2>
        <h4 className="leading-[26px] text-white max-w-[355px] md:max-w-none">
          Our newest South Edmonton Common facility is built specifically for
          wellness professionals who require more than just four walls.
        </h4>
      </div>

      {/* Mobile: shadcn Carousel (Figma node 14475:620) - arrows below cards */}
      <div
        className="w-full max-w-[355px] md:hidden flex flex-col"
        data-node-id="14475:1299"
      >
        <Carousel
          opts={{
            align: "start",
            loop: false,
            containScroll: "trimSnaps",
            dragFree: false,
          }}
          className="w-full flex flex-col"
        >
          <CarouselContent className="-ml-[18px]">
            {STAT_CARDS.map((card, index) => (
              <CarouselItem
                key={index}
                className="pl-[18px] basis-[298px] shrink-0"
              >
                <MobileStatCard
                  card={card}
                  animatedCount={animatedCounts[index]}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center items-center gap-3 mt-4">
            <CarouselPrevious className="!static !translate-y-0 !left-auto !right-auto size-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 disabled:opacity-50" />
            <CarouselNext className="!static !translate-y-0 !left-auto !right-auto size-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 disabled:opacity-50" />
          </div>
        </Carousel>
      </div>

      {/* Desktop: 4-column grid */}
      <div
        className="hidden md:flex flex-row gap-4 h-auto md:h-[340px] items-stretch justify-center w-full max-w-[1280px] mx-auto"
        data-node-id="14338:615"
      >
        {STAT_CARDS.map((card, index) => (
          <div key={index} className="flex-1 min-w-0">
            <StatCard card={card} animatedCount={animatedCounts[index]} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpacesForSouthEdmontonCommonBeyondSection;
