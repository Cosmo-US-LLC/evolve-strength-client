import React from "react";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import someThinkNew from "@/assets/images/home/someThinkNew/someThinkNewBg.webp";

function SomeThinkNew() {
  return (
    <section className="py-12 px-4 md:px-8 bg-white w-full max-w-[1280px] mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className=" text-[#000] mb-4 uppercase">New Evolve is Coming</h2>
          <h4 className="text-xl md:text-2xl text-black">
            We're expanding to bring Evolve Strength closer to you.
          </h4>
        </div>

        {/* Bottom Section - Location Details */}
        <div className="py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-4">
              <h3 className="!font-[700] text-[#000]">
                Evolve Edmonton South Common
              </h3>

              <div className="flex gap-6">
                <div className="flex items-center gap-1">
                  <MapPin className="w-5 h-5 text-[#000]" />
                  <span className="text-[14px] font-[kanit] text-[#000]">
                    Announcing Soon
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-5 h-5 text-[#000]" />
                  <span className="text-[14px] font-[kanit] text-[#000]">
                    Opening March 2025
                  </span>
                </div>
              </div>

              <h4 className="text-[#000] leading-[24px] font-[kanit]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </h4>

              <div className="flex w-full">
                <a
                  href="https://join.evolvestrength.ca/edmonton-south-common-waitlist/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btnPrimary transition-colors duration-200 flex items-center gap-2 group"
                >
                  JOIN THE WAITLIST
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 rounded-[16px] overflow-hidden">
                <img src={someThinkNew} alt="some think new" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SomeThinkNew;
