import React from "react";
import trainer1 from "@/assets/images/PersonalTraning/ConsultationWithPersonalTrainers/slide1.webp";
import trainer2 from "@/assets/images/PersonalTraning/ConsultationWithPersonalTrainers/slide2.webp";
import trainer3 from "@/assets/images/PersonalTraning/ConsultationWithPersonalTrainers/slide3.webp";
import trainer4 from "@/assets/images/PersonalTraning/ConsultationWithPersonalTrainers/slide4.webp";
import trainer5 from "@/assets/images/PersonalTraning/ConsultationWithPersonalTrainers/slide5.webp";
import trainer6 from "@/assets/images/PersonalTraning/ConsultationWithPersonalTrainers/slide6.webp";
import trainer7 from "@/assets/images/PersonalTraning/ConsultationWithPersonalTrainers/slide7.webp";
import trainer8 from "@/assets/images/PersonalTraning/ConsultationWithPersonalTrainers/slide8.webp";
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

  const { elementRef, hasStarted } = useCounter(1, 2000); // dummy count for trigger

  // Use useSyncedCounter for all counters, triggered by hasStarted
  const worldClassTrainers = useSyncedCounter(205, 3000, hasStarted);
  const specialisedOfferings = useSyncedCounter(150, 3000, hasStarted);
  // const facilitiesCount = useSyncedCounter(8, 3000, hasStarted);

  const firstColumn = [trainer1, trainer2, trainer3, trainer4];
  const secondColumn = [trainer5, trainer6, trainer7, trainer8];

  return (
    <div className="bg-white relative overflow-hidden" ref={elementRef}>
      <div className="w-full max-w-[1280px] px-8 mx-auto flex flex-row items-center justify-between">
        <style>{scrollAnimation}</style>

        <div className="w-[50%]">
          <h2 className="text-[#1C1C1C] uppercase mb-6">
            PERSONAL TRAINERS FOR <br /> EVERYTHING
          </h2>
          <h4 className="des text-[#000] mb-8 max-w-xl leading-[26px]">
            Wherever you’re starting and whatever your goal, there’s someone at
            Evolve who understands your journey and knows how to get results.
            Whether you’re aiming to lose weight, build strength, recover from
            an injury, reduce stress, improve mobility or train for a specific
            sport or event, Evolve has the right coach to guide you.
          </h4>

          <button className="btnPrimary mb-10">
            BEGIN FREE TRAINING CONSULTATION
          </button>

          <div className="flex gap-12">
            <div>
              <p className="leading-[25px] description text-[#000] mb-1 border-b border-[#00000042] pb-2">
                World-Class Trainers
              </p>
              <h4 className="text-[55px] text-kanit font-[600] leading-[50px] text-[#000] mt-4">
                {worldClassTrainers}+
              </h4>
            </div>
            <div>
              <p className="leading-[25px] description text-[#000] mb-1 border-b border-[#00000042] pb-2">
                Specialised Offerings
              </p>
              <h4 className="text-[55px] text-kanit font-[600] leading-[50px] text-[#000] mt-4">
                {specialisedOfferings}+
              </h4>
            </div>
          </div>
        </div>

        <div className="w-[50%] flex justify-end gap-8 h-[700px] overflow-hidden">
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
