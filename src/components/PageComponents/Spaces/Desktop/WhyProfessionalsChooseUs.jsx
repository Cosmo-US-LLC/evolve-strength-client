import React from "react";

function WhyProfessionalsChooseUs() {
  const handleScroll = () => {
    const element = document.querySelector("#available-offices");
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 0;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="relative w-full spacesWhyChooseUs">
      <div className="w-full max-w-[1280px] md:px-8 px-4   mx-auto z-10 h-full items-center flex flex-row relative">
        <div className="bg-[#ffffff] rounded-[10px] mt-70 shadow-lg p-6 max-w-[440px]">
          <h3 className="text-[#000] uppercase leading-[26px] !font-[700]">
            Why Professionals Choose Us?
          </h3>
          <h4 className="text-[#000] md:mt-4 md:mb-4 mt-2 mb-3 md:leading-[24px]">
            Many practitioners join Evolve to launch their first business with
            minimal risk, while others expand seamlessly to new locations
            because our model makes it simple to replicate their success. <br />
            <br />
            With Evolve, the setup is effortless. Move in, personalize your
            space, and start seeing clients right away.
          </h4>

          <button className="btnPrimary mt-2" onClick={handleScroll}>
            See Available Spaces
          </button>
        </div>
      </div>
      {/* <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div> */}
    </div>
  );
}

export default WhyProfessionalsChooseUs;
