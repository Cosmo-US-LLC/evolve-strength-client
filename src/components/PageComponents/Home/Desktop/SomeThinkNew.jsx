import React from "react";
import { MapPin, Calendar } from "lucide-react";

function SomeThinkNew() {
  return (
    <div className="relative w-full someThinkNewBg">
      <div className="absolute inset-0 flex px-4 md:px-8 py-10 max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center justify-between h-full mx-auto">
          <div className="flex flex-col max-w-[706px] text-center items-center justify-center gap-4">
            <h2 className="text-[#fff] uppercase">
              EVOLVE STRENGTH IS COMING TO SOUTH EDMONTON COMMON!
            </h2>

            <h4 className="text-[#fff] leading-relaxed">
            Presale is live! Join now to lock your founder rate 
            for free before we officially open.
            </h4>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-8 text-[#fff]">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="test-[14px] font-[kanit] leading-[22px]">
            South Edmonton Common
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="test-[14px] font-[kanit] leading-[22px]">
                Spring 2026
                </span>
              </div>
            </div>
          </div>

          {/* Call-to-Action Button */}
          <a
            href="/presale-edmonton-south-common"
            // target="_blank"
            target="_self"
            rel="noopener noreferrer"
            className="btnPrimary"
          >
            JOIN THE PRESALE
          </a>
        </div>
      </div>
    </div>
  );
}

export default SomeThinkNew;
