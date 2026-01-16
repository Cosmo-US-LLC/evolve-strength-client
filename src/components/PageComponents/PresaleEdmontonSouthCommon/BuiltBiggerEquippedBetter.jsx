import React from "react";
import { Link } from "react-router-dom";

function BuiltBiggerEquippedBetter() {
  return (
    <section className="relative w-full h-[600px] md:h-[640px] BuiltBiggerEquippedBetterBG">
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 h-full flex items-end pb-8 md:pb-20">
        <div className="flex flex-col gap-6 md:gap-8 max-w-[565px]">
          {/* Heading and Description */}
          <div className="flex flex-col gap-4 md:gap-6">
            <h2 className="uppercase text-[#fff]">
              Built Bigger. Equipped Better.
            </h2>
            <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-[300] md:font-[400] font-Inter text-white max-w-[542px]">
              From the strength floor to the conditioning turf, move freely,
              train efficiently, and push your limits in a space designed for
              results.
            </p>
          </div>

          {/* CTA Button and Deposit Text */}
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center">
              <Link to="#">
                <button className="btnPrimary flex items-center gap-2 md:gap-[10px] uppercase">
                  {/* Lock Icon */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6667 7.33333H12V5.33333C12 2.94 10.06 1 7.66667 1C5.27333 1 3.33333 2.94 3.33333 5.33333V7.33333H2.66667C1.93333 7.33333 1.33333 7.93333 1.33333 8.66667V13.3333C1.33333 14.0667 1.93333 14.6667 2.66667 14.6667H12.6667C13.4 14.6667 14 14.0667 14 13.3333V8.66667C14 7.93333 13.4 7.33333 12.6667 7.33333ZM7.66667 11.3333C7.11333 11.3333 6.66667 10.8867 6.66667 10.3333C6.66667 9.78 7.11333 9.33333 7.66667 9.33333C8.22 9.33333 8.66667 9.78 8.66667 10.3333C8.66667 10.8867 8.22 11.3333 7.66667 11.3333ZM10 7.33333H5.33333V5.33333C5.33333 3.86 6.52667 2.66667 8 2.66667C9.47333 2.66667 10.6667 3.86 10.6667 5.33333V7.33333H10Z"
                      fill="white"
                    />
                  </svg>
                  Lock My Rate Now
                </button>
              </Link>
              <p className="text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] font-[400] font-[Kanit] text-white max-w-[185px] md:max-w-[165px]">
                CA $149 deposit applies toward your membership
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuiltBiggerEquippedBetter;
