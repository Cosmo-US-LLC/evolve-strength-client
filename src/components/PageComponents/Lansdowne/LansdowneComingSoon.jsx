import React from "react";

const gymBgImage =
  "/assets/images/franchise/GotYourBack/franchise_business_process.webp";

const infoItems = [
  {
    label: "Location",
    value: "Inside Lansdowne Centre, Richmond BC",
    icon: (
      <path
        d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
        stroke="#4AB04A"
        strokeWidth="1.6"
      />
    ),
    hasCircle: true,
  },
  {
    label: "Address",
    value: "Unit 314, 5300 No 3 Rd, Richmond, BC, V6X 2X9",
    icon: (
      <path
        d="M4 21V8l8-5 8 5v13M9 21v-6h6v6"
        stroke="#4AB04A"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Opening",
    value: "2027",
    icon: (
      <>
        <rect x="3.5" y="5" width="17" height="16" rx="2" stroke="#4AB04A" strokeWidth="1.6" />
        <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" stroke="#4AB04A" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
];

function LansdowneComingSoon() {
  return (
    <div className="relative w-full min-h-screen lg:h-screen overflow-y-auto lg:overflow-hidden bg-[#08090A]">
      {/* Full-bleed background photo */}
      <img
        src={gymBgImage}
        alt="Evolve Strength athlete training with a barbell"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

      <div className="relative z-10 min-h-screen lg:h-full max-w-[1280px] mx-auto px-4 md:px-8 py-16 lg:py-0 flex items-center">
        <div className="max-w-[620px]">
          <div className="inline-flex items-center gap-2 bg-[#4AB04A]/10 border border-[#4AB04A]/40 px-4 py-1.5 rounded-full mb-5 md:mb-6">
            <span className="w-[7px] h-[7px] rounded-full bg-[#4AB04A] animate-pulse" />
            <span className="text-[#4AB04A] !font-[Kanit] text-[12px] md:text-[13px] font-[600] uppercase tracking-[1.5px]">
              Next Location · Opening 2027
            </span>
          </div>

          <h1 className="!font-[Kanit] uppercase text-[#FFFFFF] text-[36px] leading-[40px] md:text-[68px] md:leading-[68px] font-[600] mb-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
            Evolve Strength
            <br />
            <span className="text-[#4AB04A]">Lansdowne</span>
          </h1>

          <p className="text-[#D8DAD8] !font-[Kanit] !text-[15px] md:!text-[17px] !leading-[24px] max-w-[480px] mt-5 mb-8">
            Vancouver's fastest-growing strength club is coming to Lansdowne
            Centre. Be one of the first to know when doors open and lock a
            founding member rate before it ever goes public.
          </p>

          <div className="flex flex-col gap-4 max-w-[440px]">
            {infoItems.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-[10px] bg-white/[0.06] backdrop-blur-sm border border-white/15 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    {item.icon}
                    {item.hasCircle && (
                      <circle cx="12" cy="9" r="2.4" stroke="#4AB04A" strokeWidth="1.6" />
                    )}
                  </svg>
                </div>
                <div>
                  <p className="text-[#9BA09C] !font-[Kanit] !text-[12px] uppercase tracking-[1.5px] mb-1">
                    {item.label}
                  </p>
                  <p className="text-[#F2F3F2] !font-[Kanit] !text-[15px] !font-[400] !leading-[22px]">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LansdowneComingSoon;
