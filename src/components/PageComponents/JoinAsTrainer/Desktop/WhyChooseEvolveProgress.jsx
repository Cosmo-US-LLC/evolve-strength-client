import React, { useEffect, useRef, useState } from "react";
const DEFAULT_STEPS = [
  {
    key: "earn",
    title: "Keep 100% of What You Earn",
    description:
      "Set your own prices and keep every dollar. We charge a simple flat fee for space. No cuts, no percentages.",
    image:
      "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762433209383-7ec3d881-bf94-44b0-95a0-cabbb0f5cca7.webp",
      image_mob:"https://evolve-strength.tor1.digitaloceanspaces.com/media/1762433209383-7ec3d881-bf94-44b0-95a0-cabbb0f5cca7.webp",
    durationMs: 3500,
  },
  {
    key: "ownership",
    title: "You Keep Full Ownership of Your Clients",
    description:
      "Your clients stay fully yours. We never interfere, share, or manage them on your behalf.",
    image:
      "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762433458101-71922c48-efe5-4316-8819-cd9ab672915f.webp",
      image_mob:"https://evolve-strength.tor1.digitaloceanspaces.com/media/1763452791053-81ef6470-60be-493c-9866-60f47bcab389.webp",
    durationMs: 3500,
  },
  {
    key: "terms",
    title: "Work On Your Own Terms",
    description:
      "Choose your hours, training style, and schedule. Build a business that fits your lifestyle.",
    image:
      "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762433190127-7fe3d82a-da37-42f3-816c-ced00e592b31.webp",
       image_mob:"https://evolve-strength.tor1.digitaloceanspaces.com/media/1762433190127-7fe3d82a-da37-42f3-816c-ced00e592b31.webp",
    durationMs: 3500,
  },
  {
    key: "support",
    title: "Get real support from business professionals.",
    description:
      "Our leadership team started as trainers and business professionals.",
    image:
      "https://evolve-strength.tor1.digitaloceanspaces.com/media/1763109275796-6d568ae9-f44c-4e21-8c35-23aa41b58318.webp",
       image_mob:"https://evolve-strength.tor1.digitaloceanspaces.com/media/1763109275796-6d568ae9-f44c-4e21-8c35-23aa41b58318.webp",
    durationMs: 3500,
  },
];
function WhyChooseEvolveProgress({
  steps = DEFAULT_STEPS,
  autoPlay = true,
  loop = true,
}) {
  const safeSteps =
    steps && steps.length >= 4 ? steps.slice(0, 4) : DEFAULT_STEPS;
  // Desktop state (using index)
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const desktopTimerRef = useRef(null);
  const activeStep = safeSteps[activeIndex];
  // Mobile state (using key)
  const [activeKey, setActiveKey] = useState(safeSteps[0]?.key || "earn");
  const mobileTimerRef = useRef(null);
  const [animationProgress, setAnimationProgress] = useState(0);
  const mobileActiveIndex = safeSteps.findIndex((item) => item.key === activeKey);
  // Preload images
  useEffect(() => {
    safeSteps.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);
  // Desktop auto-play (existing logic)
  useEffect(() => {
    if (!autoPlay) return;
    const duration = activeStep.durationMs || 3500;
    const start = performance.now();
    const tick = (t) => {
      const elapsed = t - start;
      const p = Math.min(1, elapsed / duration);
      setProgress(p);
      if (p < 1) {
        desktopTimerRef.current = requestAnimationFrame(tick);
      } else {
        setProgress(0);
        setActiveIndex((idx) => {
          const next = idx + 1;
          if (next < safeSteps.length) return next;
          return loop ? 0 : idx;
        });
      }
    };
    desktopTimerRef.current = requestAnimationFrame(tick);
    return () => {
      if (desktopTimerRef.current) cancelAnimationFrame(desktopTimerRef.current);
    };
  }, [activeIndex, autoPlay, loop, activeStep, safeSteps.length]);
  // Mobile auto-advance - EXACTLY THE SAME as MembershipBenefits
  useEffect(() => {
    mobileTimerRef.current = setTimeout(() => {
      const nextIndex = (mobileActiveIndex + 1) % safeSteps.length;
      setActiveKey(safeSteps[nextIndex].key);
    }, 6000);
    return () => clearTimeout(mobileTimerRef.current);
  }, [activeKey]);
  // Mobile progress bar animation
  useEffect(() => {
    setAnimationProgress(0);
    let start;
    function animateBorder(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / 6000, 1);
      setAnimationProgress(progress);
      if (progress < 1) {
        requestAnimationFrame(animateBorder);
      }
    }
    const raf = requestAnimationFrame(animateBorder);
    return () => cancelAnimationFrame(raf);
  }, [activeKey]);
  const handleCardClick = (index) => {
    // Cancel any existing animation
    if (desktopTimerRef.current) {
      cancelAnimationFrame(desktopTimerRef.current);
    }
    // Reset progress and set new active index
    setProgress(0);
    setActiveIndex(index);
  };
  const renderBar = (index) => {
    const state =
      index < activeIndex ? 1 : index === activeIndex ? progress : 0;
    return (
      <div key={index} className="w-full">
        <div className="bg-[rgba(255,255,255,0.2)] h-[8px] rounded-[100px] w-full overflow-hidden">
          <div
            className={`h-full rounded-[100px] ${
              index === activeIndex ? "bg-[#4AB04A]" : "bg-white"
            }`}
            style={{ width: `${state * 100}%` }}
          />
        </div>
      </div>
    );
  };
  return (
    <div className="bg-black w-full">
      <div className="max-w-[1280px] md:px-8 px-4 mx-auto w-full py-[64px] md:py-[100px]">
        <h2 className="text-white uppercase text-center !text-[28px] md:!text-[40px] leading-[32px] md:leading-[39px] mb-6">
          Why Choose Evolve
        </h2>
        {/* DESKTOP IMAGE */}
        <div className="relative rounded-[16px] overflow-hidden h-[300px] md:h-[600px] mb-6 hidden md:block">
          <img
            src={activeStep.image}
            alt="feature"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* DESKTOP: Grid layout with horizontal progress bars */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-[24px] md:gap-[48px] items-start">
          {safeSteps.map((step, i) => (
            <div
              key={i}
              onClick={() => handleCardClick(i)}
              className={`flex flex-col gap-[16px] ${
                i !== activeIndex ? "opacity-50" : ""
              } cursor-pointer hover:opacity-75 transition-opacity duration-200`}
            >
              {renderBar(i)}
              <div className="text-white">
                <h3 className="!text-[20px] leading-[24px] font-semibold">
                  {step.title}
                </h3>
                <p className="!text-[16px] leading-[26px] opacity-90">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* MOBILE: Vertical list layout with vertical progress bars (like MembershipBenefits) */}
        <div className="md:hidden pt-3">
          <div className="flex flex-col gap-4 px-[16px] justify-center h-auto">
            {safeSteps.map((step) => {
              const isActive = step.key === activeKey;
              return (
                <div
                  key={step.key}
                  className="relative cursor-pointer group"
                  onClick={() => {
                    if (mobileTimerRef.current) {
                      clearTimeout(mobileTimerRef.current);
                    }
                    setActiveKey(step.key);
                  }}
                >
                  <div className="flex flex-row items-center">
                    <div className="flex-1">
                      <div className="relative min-h-[40px] h-full flex items-center">
                        <div style={{ height: "100%" }}>
                          <div className="absolute left-0 top-0 h-full w-[2px] bg-[rgba(255,255,255,0.2)] rounded-l-[10px]" />
                          <div
                            className="absolute left-0 top-0 h-full w-[2px] bg-[#4AB04A] rounded-l-[10px]"
                            style={{
                              height: "100%",
                              transform: isActive
                                ? `scaleY(${animationProgress})`
                                : "scaleY(0)",
                              transformOrigin: "top",
                              transition: isActive ? "none" : "transform 0.2s",
                              zIndex: 1,
                            }}
                          />
                        </div>
                        <div className="transition-all pl-4 duration-500 ease-in-out">
                          <h3
                            className={`flex items-center leading-normal gap-2 transition-colors duration-300 text-lg font-semibold ${
                              isActive ? "text-[#4AB04A]" : "text-white"
                            }`}
                          >
                            {step.title}
                          </h3>
                          <div
                            className={`transition-all duration-500 ease-in-out text-[15px] ${
                              isActive
                                ? "opacity-100 h-auto mt-2 mb-2"
                                : "opacity-0 h-0 overflow-hidden"
                            }`}
                          >
                            <h4 className="leading-[130%] text-white opacity-90">
                              {step.description}
                            </h4>
                          </div>
                        </div>
                      </div>
                      {isActive && (
                        <div className="w-full flex justify-center mt-4 h-[400px]">
                          <img
                            key={step.image}
                            src={step.image}
                            alt={step.title}
                            className="rounded-[10px] max-md:hidden object-cover w-full max-w-[340px] shadow"
                          />
                            <img
                            key={step.image}
                            src={step.image_mob}
                            alt={step.title}
                            className="rounded-[10px] md:hidden object-cover w-full max-w-[340px] shadow"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhyChooseEvolveProgress;