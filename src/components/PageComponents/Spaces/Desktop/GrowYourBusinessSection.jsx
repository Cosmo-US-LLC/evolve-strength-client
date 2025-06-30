import React from "react";
import GrowYourBusinessSectionImage from "@/assets/images/spaces/GrowYourBusinessSection/GrowYourBusinessSectionImage.webp";

function GrowYourBusinessSection() {
  return (
    <div className="w-full pb-12 pt-[120px]">
      <div className="w-full max-w-[1280px] px-8 mx-auto flex flex-col gap-12">
        <div className="flex flex-row gap-10">
          <div className="w-[50%] flex">
            <h1 className="max-w-[655px] text-left leading-[56px] uppercase">
              Grow Your <br /> Business at <br /> Evolve
            </h1>
          </div>
          <div className="flex flex-col w-[50%] text-left justify-center items-start gap-5">
            <h3 className="text-[#000] leading-[26px] font-[400] w-[585px]">
              All-inclusive office spaces for wellness professionals inside
              Canada’s top fitness facilities.
            </h3>
            <button className="btnPrimary">Book a Tour</button>
            <h4 className="text-[#000] leading-[26px]">
              Limited spots available.{" "}
              <a
                href="#"
                className="underline"
                style={{
                  color: "#000",
                  fontFamily: "Kanit",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                  textDecorationLine: "underline",
                  textDecorationStyle: "solid",
                  textDecorationSkipInk: "auto",
                  textDecorationThickness: "auto",
                  textUnderlineOffset: "auto",
                  textUnderlinePosition: "from-font",
                }}
              >
                {" "}
                Join the waitlist today.{" "}
              </a>
            </h4>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={GrowYourBusinessSectionImage} alt="Description" />
          <h4 className="mt-4 text-[#000] leading-[26px]">
            Health-focused environments designed to{" "}
            <span className="text-[#4AB04A] font-[700] leading-[26px]">
              {" "}
              boost your business{" "}
            </span>{" "}
            from day one.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default GrowYourBusinessSection;
