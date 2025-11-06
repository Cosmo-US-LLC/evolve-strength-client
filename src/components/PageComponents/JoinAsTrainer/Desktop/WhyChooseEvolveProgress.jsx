import React, { useEffect, useRef, useState } from "react";

const DEFAULT_STEPS = [
  {
    title: "Keep 100% of What You Earn",
    description:
      "Set your own prices and keep every dollar. We charge a simple flat fee for space. No cuts, no percentages.",
    image: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762433209383-7ec3d881-bf94-44b0-95a0-cabbb0f5cca7.webp",
    durationMs: 3500,
  },
  {
    title: "You Keep Full Ownership of Your Clients",
    description:
      "Your clients stay fully yours. We never interfere, share, or manage them on your behalf.",
    image: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762433458101-71922c48-efe5-4316-8819-cd9ab672915f.webp",
    durationMs: 3500,
  },
  {
    title: "Work On Your Own Terms",
    description:
      "Choose your hours, training style, and schedule. Build a business that fits your lifestyle.",
    image: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762433190127-7fe3d82a-da37-42f3-816c-ced00e592b31.webp",
    durationMs: 3500,
  },
  {
    title: "Get real support from business professionals.",
    description:
      "Our leadership team started as trainers and business professionals.",
    image: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762433202849-cb0e4734-b682-4416-9a40-28385a4ee53f.webp",
    durationMs: 3500,
  },
];

function WhyChooseEvolveProgress({ steps = DEFAULT_STEPS, autoPlay = true, loop = true }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);

  const safeSteps = steps && steps.length >= 4 ? steps.slice(0, 4) : DEFAULT_STEPS;
  const activeStep = safeSteps[activeIndex];

  useEffect(() => {
    if (!autoPlay) return;
    const duration = activeStep.durationMs || 3500;
    const start = performance.now();

    const tick = (t) => {
      const elapsed = t - start;
      const p = Math.min(1, elapsed / duration);
      setProgress(p);
      if (p < 1) {
        timerRef.current = requestAnimationFrame(tick);
      } else {
        setProgress(0);
        setActiveIndex((idx) => {
          const next = idx + 1;
          if (next < safeSteps.length) return next;
          return loop ? 0 : idx;
        });
      }
    };

    timerRef.current = requestAnimationFrame(tick);
    return () => {
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
    };
  }, [activeIndex, autoPlay, loop, activeStep, safeSteps.length]);

  const renderBar = (index) => {
    const state = index < activeIndex ? 1 : index === activeIndex ? progress : 0;
    return (
      <div key={index} className="w-full">
        <div className="bg-[rgba(255,255,255,0.2)] h-[8px] rounded-[100px] w-full overflow-hidden">
          <div
            className={`h-full rounded-[100px] ${index === activeIndex ? "bg-[#4ab04a]" : "bg-white"}`}
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
          <img src={activeStep.image} alt="feature" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-[24px] md:gap-[48px] items-start">
          {safeSteps.map((step, i) => (
            <div key={i} className={`flex flex-col gap-[16px] ${i !== activeIndex ? "opacity-50" : ""}`}>
              
              {/* ONLY MOBILE IMAGE TOGGLE */}
              <div
                className={[
                  "md:hidden overflow-hidden transition-all duration-500 ease-out",
                  i === activeIndex ? "max-h-[220px] opacity-100 mb-3" : "max-h-0 opacity-0 mb-0"
                ].join(" ")}
              >
                <div className="relative rounded-[10px] overflow-hidden h-[220px]">
                  <img
                    src={step.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>

              {renderBar(i)}

              <div className="text-white">
                <h3 className="!text-[20px] leading-[24px] font-semibold">{step.title}</h3>
                <p className="!text-[16px] leading-[26px] opacity-90">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseEvolveProgress;
