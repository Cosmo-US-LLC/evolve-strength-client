import React from "react";
import { Link } from "react-router-dom";
import GrowYourBusinessSectionImage from "@/assets/images/spaces/GrowYourBusinessSection/GrowYourBusinessSectionImage.webp";
import GrowYourBusinessSectionImageMobile from "@/assets/images/spaces/GrowYourBusinessSection/GrowYourBusinessSectionImage.webp";

function GrowYourBusinessSection() {
  return (
   <div>
     <div className="w-full pb-12 pt-[120px]">
      <div className="w-full max-w-[1280px] md:px-8 max-md:px-[16px] mx-auto flex flex-col md:gap-12 max-md:gap-5">
        <div className="flex flex-row max-md:flex-col md:gap-10 max-md:gap-4">
          <div className="w-[50%] max-md:w-[100%] flex">
            <h1 className="max-w-[655px] text-left leading-[56px] uppercase">
              Grow Your <br /> Business at <br /> Evolve
            </h1>
          </div>
          <div className="flex flex-col w-[50%] max-md:w-[100%] text-left justify-center items-start gap-5">
            <h3 className="text-[#000] leading-[26px] font-[400] md:w-[585px]">
              All-inclusive office spaces for wellness professionals inside
              Canada’s top fitness facilities.
            </h3>
            <Link to="/join-the-wait-list">
              <button className="btnPrimary">Apply Now</button>
            </Link>
            <h4 className="text-[#000] leading-[26px] max-md:hidden">
              Limited spots available.{" "}
              <a
                href="/join-the-wait-list"
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
              >Join the waitlist today.
              </a>
            </h4>
            <h4 className="text-[#000] leading-[26px] md:hidden">
              Limited spots available. <br />
              <a
                href="/join-the-wait-list"
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
              >Join the waitlist today.
              </a>
            </h4>
          </div>
        </div>
        <div className="flex flex-col md:items-center  md:justify-center SpacesHeroBG">
          {/* <img src={GrowYourBusinessSectionImage} alt="Description" /> */}
         
        </div>
         <h4 className=" text-[#000] md:flex md:items-center md:justify-center md:leading-[26px]">
            Health-focused environments designed to
            <span className="text-[#4AB04A] font-[700] px-1 md:leading-[26px]">
             
              boost your business
            </span>
            from day one.
          </h4>
      </div>
    </div>
    <div className="md:hidden">

    </div>
   </div>
  );
}

export default GrowYourBusinessSection;
