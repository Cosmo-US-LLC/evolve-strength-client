import React from "react";
import { Link } from "react-router-dom";

function WhyProfessionalsChooseUs() {
  return (
    <div className="relative w-full spacesWhyChooseUs">
      <div className="w-full max-w-[1280px] md:px-8 px-4   mx-auto z-10 h-full items-center flex flex-row relative">
        <div className="bg-[#ffffff] rounded-[10px] mt-70 shadow-lg p-6 max-w-[500px]">
          <h3 className="text-[#000] uppercase leading-[26px] !font-[700]">
            Why Professionals Choose Us?
          </h3>
          <p className="text-[#000] description md:mt-4 md:mb-6 mt-2 mb-3 leading-[26px]">
            Many practitioners join Evolve to launch their first business with
            minimal risk, while others expand seamlessly to new locations
            because our model makes it simple to replicate their success. <br />
            <br />
            With Evolve, the setup is effortless. Move in, personalize your
            space, and start seeing clients right away.
          </p>
          <Link to="/join-the-wait-list">
            <button className="btnPrimary">Join the Waitlist</button>
          </Link>
        </div>
      </div>
      {/* <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div> */}
    </div>
  );
}

export default WhyProfessionalsChooseUs;
