import React from "react";
import canadaLineImg from "@/assets/images/Lansdowne/lansdowne-location-canada-line.webp";
import canadaLineImgMobile from "@/assets/images/Lansdowne/lansdowne-location-canada-line-mobile.webp";
import parkingImg from "@/assets/images/Lansdowne/lansdowne-location-free-parking.webp";
import parkingImgMobile from "@/assets/images/Lansdowne/lansdowne-location-free-parking-mobile.webp";
import centreImg from "@/assets/images/Lansdowne/lansdowne-location-lansdowne-centre.webp";
import centreImgMobile from "@/assets/images/Lansdowne/lansdowne-location-lansdowne-centre-mobile.webp";
import canadaLineIcon from "@/assets/images/Lansdowne/lansdowne-icon-canada-line.webp";
import parkingIcon from "@/assets/images/Lansdowne/lansdowne-icon-free-parking.webp";
import centreIcon from "@/assets/images/Lansdowne/lansdowne-icon-lansdowne-centre.webp";

const infoCards = [
  {
    title: "Canada Line",
    image: canadaLineImg,
    imageMobile: canadaLineImgMobile,
    detail: "Steps from Lansdowne Station",
    icon: canadaLineIcon,
  },
  {
    title: "Free Parking",
    image: parkingImg,
    imageMobile: parkingImgMobile,
    detail: "On site at Lansdowne Centre",
    icon: parkingIcon,
  },
  {
    title: "Lansdowne Centre",
    image: centreImg,
    imageMobile: centreImgMobile,
    detail: "Richmond, BC",
    icon: centreIcon,
  },
];

function LansdowneLocationShowcase() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white py-16 md:py-[50px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 flex flex-col items-stretch md:items-center gap-8 md:gap-12">
        <div className="flex flex-col items-start md:items-center text-left md:text-center gap-3 md:gap-4 w-full md:w-auto md:max-w-[720px]">
          <p className="!text-[16px] !font-[500] text-[#4AB04A] uppercase !font-[Kanit] leading-[normal] m-0">
            The Location
          </p>
          <h2 className="text-black uppercase m-0 !text-[32px] md:!text-[40px] !leading-[1.1] md:!leading-[44px]">
            Right in Lansdowne Centre
          </h2>
          <p className="!text-[16px] md:!text-[18px] !font-[300] text-black !font-[Kanit] leading-[1.5] md:leading-[27px] m-0">
            Easy to reach, easy to park, and right where Richmond already
            shops.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {infoCards.map((card) => (
            <div key={card.title} className="flex flex-col gap-5">
              <picture>
                <source media="(max-width: 767px)" srcSet={card.imageMobile} />
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[204px] md:h-[360px] object-cover rounded-[14px]"
                />
              </picture>
              <div className="flex items-center gap-5 py-3">
                <img
                  className="shrink-0"
                  src={card.icon}
                  width="38"
                  height="38"
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <p className="!font-[Kanit] !font-[600] uppercase text-black !text-[20px] leading-[22px] m-0">
                    {card.title}
                  </p>
                  <p className="!font-[Kanit] !font-[300] text-black !text-[16px] leading-[22px] m-0">
                    {card.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:block">
        <button
          type="button"
          className="btnPrimary uppercase md:w-[354px]"
          onClick={scrollToWaitlist}
        >
          Join the Waitlist
        </button>
        </div>
      </div>
    </section>
  );
}

export default LansdowneLocationShowcase;
