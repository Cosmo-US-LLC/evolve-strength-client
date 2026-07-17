import React from "react";
import { Link } from "react-router-dom";
import useCounter from "@/hooks/useCounter";

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
  "https://evolve-strength.tor1.digitaloceanspaces.com/media/1784200929617-4cf97ea3-1602-40e5-82f6-2fbcecd47c79.webp",
  "https://evolve-strength.tor1.digitaloceanspaces.com/media/1784200949027-3c15788e-5342-4a29-b66d-083a6bc4e5a1.webp",
  "https://evolve-strength.tor1.digitaloceanspaces.com/media/1784200968046-2d7af29b-40fd-43b2-98c2-fcb8d877ab01.webp",
  "https://evolve-strength.tor1.digitaloceanspaces.com/media/1784200992507-3f9035b4-cce0-42da-a128-70be24edc566.webp",
];
const secondColumn = [
  "https://evolve-strength.tor1.digitaloceanspaces.com/media/1784201015590-c26736fa-1953-4c79-91b0-c14f0d1d6e50.webp",
  "https://evolve-strength.tor1.digitaloceanspaces.com/media/1784201040401-1088f067-7ce6-45aa-a250-5b50b3b6d488.webp",
  "https://evolve-strength.tor1.digitaloceanspaces.com/media/1784201065145-5946e514-d2e4-48ad-995f-7b83427e4243.webp",
  "https://evolve-strength.tor1.digitaloceanspaces.com/media/1784201087034-916e649d-d6ac-47dc-ae02-295af2419e07.webp",
];

function ParkRoyalOfficeSpaceShowcase() {
  const { count: worldClassOffices, elementRef } = useCounter(24, 2000);

  return (
    <div
      className="bg-[#F9F9F9] relative overflow-hidden pt-10 md:pt-0"
      ref={elementRef}
    >
      <style>{scrollAnimation}</style>
      <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-[50%]">
          <h2 className="text-[#1C1C1C] uppercase mb-4 md:mb-6">
            Office space, built for practitioners
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
              {worldClassOffices}
            </p>
          </div>
        </div>

        <div className="w-full md:w-[50%] flex justify-end gap-8 h-[500px] md:h-[600px] overflow-hidden">
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
