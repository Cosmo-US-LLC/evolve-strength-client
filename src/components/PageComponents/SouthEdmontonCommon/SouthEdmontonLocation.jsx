import React from "react";
import { Link } from "react-router-dom";

import { southEdmontonCommonBookTourHref } from "@/constants/southEdmontonCommonTour";
import buildingImage from "@/assets/images/spaces/AvailableOffices/south_edmonton_common_location.webp";

const LOCATION_TITLE = "South Edmonton Common";
const ADDRESS = "1910 102 Street NW, Edmonton, AB T6N 1N3";
const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=1910+102+Street+NW,+Edmonton,+AB+T6N+1N3&hl=en&z=15&output=embed";

function SouthEdmontonLocation() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-8 px-4 md:gap-[30px] md:px-8">
        <h2 className="max-w-[740px] text-center uppercase !font-[700] text-[#1c1c1c] text-[28px] leading-[32px] md:text-[40px] md:leading-[39px]">
          About Our South Edmonton Common Location
        </h2>

        <div className="flex w-full flex-col gap-4 md:flex-row md:items-stretch md:gap-4">
          <img
            src={buildingImage}
            alt="Evolve Strength South Edmonton Common building exterior"
            className="h-[240px] w-full shrink-0 rounded-[10px] object-cover md:h-[381px] md:w-[500px]"
            loading="lazy"
          />

          <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-[10px] border border-[#ccc] bg-[#eee]">
            <iframe
              title="South Edmonton Common on Google Maps"
              src={MAP_EMBED_SRC}
              className="h-[280px] w-full shrink-0 border-0 md:h-[310px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="flex w-full flex-col gap-4 border-t border-[#ccc] bg-[#f9f9f9] px-4 py-3 md:flex-row md:items-center md:justify-between md:px-[26px] md:py-[10px]">
              <div className="min-w-0 text-black">
                <p className="!font-[Kanit] text-[20px] font-semibold leading-[25px] md:text-[24px]">
                  {LOCATION_TITLE}
                </p>
                <p className="!font-[Kanit] text-[15px] font-light leading-[25px] md:text-[16px]">
                  {ADDRESS}
                </p>
              </div>
              <Link to={southEdmontonCommonBookTourHref()} className="shrink-0">
                <button type="button" className="btnPrimary h-[50px] uppercase">
                  Book a Free Tour
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SouthEdmontonLocation;
