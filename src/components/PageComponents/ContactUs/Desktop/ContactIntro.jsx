import React from "react";
import phoneicon from "@/assets/images/ContactUs/carbon_phone-filled (1).svg";
import buildingicon from "@/assets/images/ContactUs/fluent_building-16-filled.svg";

function ContactIntro() {
  return (
    <>
      <div className="text-center py-12">
        <h2 className="!text-[#1C1C1C] mb-4">CONTACT US TODAY</h2>
        <h4 className="description">
          Interested in finding out more about personal training programs, cost, or anything else?
        </h4>
        <p className="description mb-3">Contact us through this form!</p>

        <div className="flex justify-center items-center gap-4 description">
          <div className="flex items-center gap-1">
            <span>
              <img src={phoneicon} alt="Phone" />
            </span>
            <a href="tel:+17805897852" className="hover:underline text-[#1C1C1C]">
              +1 (780) 589-7852
            </a>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <img src={buildingicon} alt="Email" />
            </span>
            <a href="mailto:info@evolvestrength.com" className="hover:underline text-[#1C1C1C]">
              info@evolvestrength.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactIntro;
