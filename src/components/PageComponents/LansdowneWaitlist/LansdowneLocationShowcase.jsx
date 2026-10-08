import React from "react";

const stroke = { stroke: "#4AB04A", strokeWidth: 1.6, fill: "none" };

const infoCards = [
  {
    title: "Lansdowne Centre",
    detail: "Richmond, BC",
    icon: (
      <>
        <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" {...stroke} />
        <circle cx="12" cy="9" r="2.4" {...stroke} />
      </>
    ),
  },
  {
    title: "Canada Line",
    detail: "Steps from Lansdowne Station",
    icon: (
      <>
        <rect x="6" y="3" width="12" height="14" rx="2.5" {...stroke} />
        <path d="M6 11h12M9 21l1.5-4M15 21l-1.5-4" {...stroke} strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Free Parking",
    detail: "On site at Lansdowne Centre",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="3" {...stroke} />
        <path d="M10 16V8h3a2.5 2.5 0 0 1 0 5h-3" {...stroke} strokeLinecap="round" />
      </>
    ),
  },
];

function LansdowneLocationShowcase() {
  return (
    <section className="w-full bg-white py-12 md:py-[88px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col items-start gap-2 md:gap-4">
          <p className="!text-[16px] !font-[500] text-[#4AB04A] uppercase !font-[Kanit] leading-[24px] m-0">
            The Location
          </p>
          <h2 className="text-black uppercase m-0 !text-[32px] md:!text-[40px] !leading-[34px] md:!leading-[39px]">
            Right in Lansdowne Centre
          </h2>
          <p className="!text-[16px] md:!text-[18px] !font-[300] text-black !font-[Kanit] leading-[24px] md:leading-[27px] m-0">
            Easy to reach, easy to park, and right where Richmond already
            shops.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="bg-[#F9F9F9] rounded-[12px] p-5 md:p-7 flex items-center gap-4"
            >
              <div className="shrink-0 w-[52px] h-[52px] rounded-[10px] bg-[#4AB04A]/15 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  {card.icon}
                </svg>
              </div>
              <div>
                <p className="!font-[Kanit] !font-[600] uppercase text-black !text-[18px] leading-[24px] m-0">
                  {card.title}
                </p>
                <p className="!font-[Kanit] !font-[300] text-black !text-[14px] leading-[22px] m-0">
                  {card.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LansdowneLocationShowcase;
