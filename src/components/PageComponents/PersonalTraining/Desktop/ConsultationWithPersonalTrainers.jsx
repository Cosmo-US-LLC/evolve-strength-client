import React from "react";
import { Link } from "react-router-dom";
import useCounter from "@/hooks/useCounter";
import useSyncedCounter from "@/hooks/useSyncedCounter";

const scrollAnimation = `
@keyframes scroll-up {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}
@keyframes scroll-down {
  0% { transform: translateY(-50%); }
  100% { transform: translateY(0); }
}
`;

const ConsultationWithPersonalTrainers = () => {
  const { elementRef, hasStarted } = useCounter(1, 2000);

  const worldClassTrainers = useSyncedCounter(205, 3000, hasStarted);
  const specialisedOfferings = useSyncedCounter(150, 3000, hasStarted);

  const firstColumn = [
    "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/PersonalTraning/ConsultationWithPersonalTrainers/slide1.webp",
    "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/PersonalTraning/ConsultationWithPersonalTrainers/slide2.webp",
    "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/PersonalTraning/ConsultationWithPersonalTrainers/slide3.webp",
    "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/PersonalTraning/ConsultationWithPersonalTrainers/slide4.webp",
  ];
  const secondColumn = [
    "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/PersonalTraning/ConsultationWithPersonalTrainers/slide5.webp",
    "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/PersonalTraning/ConsultationWithPersonalTrainers/slide6.webp",
    "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/PersonalTraning/ConsultationWithPersonalTrainers/slide7.webp",
    "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/PersonalTraning/ConsultationWithPersonalTrainers/slide8.webp",
  ];

  return (
    <div className="bg-white relative overflow-hidden" ref={elementRef}>
      <div className="w-full max-w-[1280px] pt-[48px] md:pt-0 px-4 md:px-8 mx-auto flex flex-col md:flex-row items-center justify-between">
        <style>{scrollAnimation}</style>

        <div className="w-full md:w-[50%]">
          <h2 className="text-[#1C1C1C] uppercase mb-4 md:mb-6">
            PERSONAL TRAINERS FOR EVERYTHING
          </h2>
          <h4 className="des text-[#000] mb-8 max-w-xl leading-[26px]">
            Wherever you’re starting and whatever your goal, there’s someone at
            Evolve who understands your journey and knows how to get results.
            Whether you’re aiming to lose weight, build strength, recover from
            an injury, reduce stress, improve mobility or train for a specific
            sport or event, Evolve has the right coach to guide you.
          </h4>

          <Link to="https://subscription.evolvestrength.ca">
            <button className="btnPrimary mb-8 md:mb-10">
              Join Now for a Free Assessment
            </button>
          </Link>

          <div className="flex gap-8 md:gap-12 py-2 md:py-0">
            <div>
              <p className="text-[16px] md:text-[18px] leading-[25px] font-[400] font-[Vazirmatn] text-[#000] mb-1 border-b border-[#00000042] pb-2">
                World-Class Trainers
              </p>
              <p className="text-[40px] md:text-[55px] text-kanit font-[500] leading-[50px] text-[#000] my-4">
                {worldClassTrainers}+
              </p>
            </div>
            <div>
              <p className="text-[16px] md:text-[18px] leading-[25px] font-[400] font-[Vazirmatn] text-[#000] mb-1 border-b border-[#00000042] pb-2">
                Specialised Offerings
              </p>
              <p className="text-[40px] md:text-[55px] text-kanit font-[500] leading-[50px] text-[#000] my-4 ">
                {specialisedOfferings}+
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[50%] flex justify-end gap-8 h-[700px] overflow-hidden">
          <div className=" overflow-hidden group relative">
            <div className="flex flex-col gap-6 animate-[scroll-up_30s_linear_infinite] group-hover:[animation-play-state:paused]">
              {[...firstColumn, ...firstColumn].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`trainer-${i}`}
                  className="rounded-xl object-cover w-[236px] h-[354px]"
                />
              ))}
            </div>
          </div>

          <div className=" overflow-hidden group relative">
            <div className="flex flex-col gap-6 animate-[scroll-down_30s_linear_infinite] group-hover:[animation-play-state:paused]">
              {[...secondColumn, ...secondColumn].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`trainer-${i + 4}`}
                  className="rounded-xl object-cover w-[236px] h-[354px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationWithPersonalTrainers;
