import React from "react";
import ContactUshero from "@/assets/images/ContactUs/contact_us_hero.webp";

function ContactHero() {
  return (
    <>
      <div className="">
        <div className="relative">
          <img
            src={ContactUshero}
            alt=""
            className="w-full h-[961px] object-cover"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div
            className="absolute"
            style={{
              top: "601px",
              left: "100px",
              bottom: "304px",
              right: "806px",
            }}
          >
            <div className="max-w-[1280px] px-8 pb-[135px] mx-auto w-full h-full relative">
              {/* Overlay box */}
              <div
                style={{
                  width: "491px",
                  height: "255px",
                  background: "#000",
                  filter: "blur(250px)",
                  position: "absolute",
                  top: 0,
                  left:0 ,
                  zIndex: -1,
                }}
              ></div>

              <div className="px-4 py-2 rounded">
                <h1 className="text-3xl font-extrabold text-white">CONTACT US</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactHero;
