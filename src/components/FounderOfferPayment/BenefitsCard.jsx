import React from "react";
import { Check } from "lucide-react";

const benefits = [
  "Founder rate locked for life",
  "Access to all locations nationwide once we open",
  "$0 enrollment & maintenance fees",
  "Risk-free membership with a full refund within 10 days of opening",
];

function BenefitsCard() {
  return (
    <div className="bg-[#fcfcfc] border border-[#d4d4d4] rounded-[8px] p-4">
      <div className="flex flex-col gap-4">
        <h3 className="font-[Kanit] !font-[700] text-[#2c2240] !text-[18px] text-start md:text-center">
          Founder Benefits
        </h3>
        <div className="flex flex-col gap-4">
          {benefits.map((benefit, index) => (
            <div key={index}>
              <div className="flex gap-2">
                <div className="border border-[#4ab04a] bg-white rounded-full size-[18px] flex items-center justify-center flex-shrink-0">
                  <Check className="size-[10px] text-[#4ab04a] flex-shrink-0" />
                </div>
                <p className="font-['Vazirmatn'] font-normal text-black md:text-[14px]">
                  {benefit}
                </p>
                
              </div>
              {index < benefits.length - 1 && (
                <div className="h-px bg-[#d4d4d4] mt-3" />
              )}
              
            </div>
            
          ))}
        </div>
        <div className="text-[#000] text-[12px] font-['Vazirmatn'] italic font-normal border-t border-[#d4d4d4] pt-2"> 
          If you are under 18, you cannot join online, your membership must be completed in person.
        </div>
      </div>
    </div>
  );
}

export default BenefitsCard;
