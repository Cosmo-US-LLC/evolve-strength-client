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
              Our newest location is opening soon in one of the city’s busiest
              hubs. Join the waitlist today and be first to know when
              memberships go live.
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
                  Announcing Soon
                </span>
              </div>
            </div>
          </div>

          {/* Call-to-Action Button */}
          <a
            href="/locations/edmonton-south-common-waitlist"
            target="_blank"
            rel="noopener noreferrer"
            className="btnPrimary"
          >
            JOIN THE WAITLIST
          </a>
        </div>
      </div>
    </div>
  );
}

export default SomeThinkNew;
