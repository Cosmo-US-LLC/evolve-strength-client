import React from "react";
import LansdowneWaitlistForm from "@/components/Form/LansdowneWaitlistForm";
import { LANSDOWNE_IMAGES } from "@/constants/lansdowneWaitlist";

const perks = ["Founding rates", "First access to presale", "Opening updates"];

function LansdowneJoinWaitlist() {
  return (
    <section
      id="waitlist"
      className="relative py-16 md:py-24 px-4 md:px-8 bg-cover bg-center"
      style={{ backgroundImage: `url('${LANSDOWNE_IMAGES.formBackground}')` }}
    >
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-[#FFFFFF] uppercase mb-3">
            Join the <span className="text-[#4AB04A]">Waitlist</span>
          </h2>
          <h4 className="text-[#E5E5E5] !font-[Kanit] !font-[400] max-w-[520px] mx-auto">
            Be first to know when presale opens, with founding rates held for
            waitlist members.
          </h4>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 list-none p-0 mt-5">
            {perks.map((perk) => (
              <li
                key={perk}
                className="flex items-center gap-2 text-white !font-[Kanit] text-[14px]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" fill="#4AB04A" />
                  <path
                    d="M7 12.5l3.2 3.2L17 9"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
                {perk}
              </li>
            ))}
          </ul>
        </div>

        <LansdowneWaitlistForm />
      </div>
    </section>
  );
}

export default LansdowneJoinWaitlist;
