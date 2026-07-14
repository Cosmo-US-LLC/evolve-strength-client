import React from "react";
import { Link } from "react-router-dom";

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

// TODO: swap with the real Park Royal office/facility photos once links are shared
const firstColumn = [
  "/assets/images/PersonalTraning/ConsultationWithPersonalTrainers/slide1.webp",
  "/assets/images/PersonalTraning/ConsultationWithPersonalTrainers/slide2.webp",
  "/assets/images/PersonalTraning/ConsultationWithPersonalTrainers/slide3.webp",
  "/assets/images/PersonalTraning/ConsultationWithPersonalTrainers/slide4.webp",
];
const secondColumn = [
  "/assets/images/PersonalTraning/ConsultationWithPersonalTrainers/slide5.webp",
  "/assets/images/PersonalTraning/ConsultationWithPersonalTrainers/slide6.webp",
  "/assets/images/PersonalTraning/ConsultationWithPersonalTrainers/slide7.webp",
  "/assets/images/PersonalTraning/ConsultationWithPersonalTrainers/slide8.webp",
];

function ParkRoyalOfficeSpaceShowcase() {
  return (
    <div className="bg-[#F9F9F9] relative overflow-hidden">
      <style>{scrollAnimation}</style>
      <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-[50%]">
          <p className="!text-[16px] !font-[500] text-[#4AB04A] uppercase !font-[Kanit] leading-[24px] mb-2">
            The Location
          </p>
          <h2 className="text-[#1C1C1C] uppercase mb-4 md:mb-6">
            Office space, built for practitioners.
          </h2>
          <h4 className="des text-[#000] mb-8 max-w-xl leading-[26px]">
            Twenty four standard offices inside the facility, sized for
            individual practitioners and small teams. No large anchor offices,
            just space to build your practice alongside an active member base.
          </h4>

          <div className="flex gap-2 md:gap-4 mb-8 md:mb-8">
            <Link to="/join-the-wait-list?location=Park%20Royal">
              <button className="btnPrimary">Inquire About Leasing</button>
            </Link>
          </div>

          <div>
            <p className="text-[16px] md:text-[18px] leading-[25px] font-[400] font-[Vazirmatn] text-[#000] mb-1 border-b border-[#00000042] pb-2 max-w-[161px]">
              World-Class Offices
            </p>
            <p className="text-[40px] md:text-[56px] text-kanit font-[500] leading-[50px] text-[#000] my-4">
              24
            </p>
          </div>
        </div>

        <div className="w-full md:w-[50%] flex justify-end gap-8 h-[500px] md:h-[700px] overflow-hidden">
          <div className="overflow-hidden group relative">
            <div className="flex flex-col gap-6 animate-[scroll-up_30s_linear_infinite] group-hover:[animation-play-state:paused]">
              {[...firstColumn, ...firstColumn].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`park-royal-office-${i}`}
                  className="rounded-xl object-cover w-[236px] h-[354px]"
                />
              ))}
            </div>
          </div>

          <div className="overflow-hidden group relative">
            <div className="flex flex-col gap-6 animate-[scroll-down_30s_linear_infinite] group-hover:[animation-play-state:paused]">
              {[...secondColumn, ...secondColumn].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`park-royal-office-${i + 4}`}
                  className="rounded-xl object-cover w-[236px] h-[354px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParkRoyalOfficeSpaceShowcase;
