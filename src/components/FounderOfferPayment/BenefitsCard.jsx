import React from "react";
import { Check } from "lucide-react";

const benefits = [
  "Founder rate locked for 24 months",
  "Access to all locations nationwide",
  "$0 enrollment & maintenance fees",
  "Fully refundable deposit within 30 days",
];

function BenefitsCard() {
  return (
    <div className="bg-[#fcfcfc] border border-[#d4d4d4] rounded-[8px] p-6">
      <div className="flex flex-col gap-6">
        <h3 className="font-['Kanit'] font-bold text-[#2c2240] text-[18px] text-center">
          Founder Benefits
        </h3>
        <div className="flex flex-col gap-4">
          {benefits.map((benefit, index) => (
            <div key={index}>
              <div className="flex gap-2 items-center">
                <div className="bg-[#4ab04a] rounded-full size-[20px] flex items-center justify-center flex-shrink-0">
                  <Check className="size-[14px] text-white flex-shrink-0" />
                </div>
                <p className="font-['Vazirmatn'] font-normal text-black text-[14px] leading-[22px]">
                  {benefit}
                </p>
              </div>
              {index < benefits.length - 1 && (
                <div className="h-px bg-[#d4d4d4] mt-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BenefitsCard;
