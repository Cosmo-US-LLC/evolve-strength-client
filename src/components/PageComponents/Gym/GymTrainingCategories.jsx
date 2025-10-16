import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trainingCategories } from "../../../constants/gymTrainingData";

import bgimg from "../../../assets/images/gym/GymTrainingCategories/mask_group.webp";
import bgimgmob from "../../../assets/images/gym/GymTrainingCategories/section.webp";

const GymTrainingCategories = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
     const checkMobile = () => {
       setIsMobile(window.innerWidth < 768);
     };
 
     checkMobile();
     window.addEventListener("resize", checkMobile);
     return () => window.removeEventListener("resize", checkMobile);
   }, []);

  return (
    <div className="pt-[80px] pb-[40px]">
        <div className=" w-full max-w-[1280px] mx-auto md:px-8 px-4 md:flex md:items-center md:justify-center items-center justify-center ">
          <div className="md:flex-1  flex flex-col gap-3">
            <h2 className="text-[#000] text-center uppercase ">
             205+ World-Class Personal Trainers
            </h2>
            <h4 className="text-[#000] max-w-[611px] mx-auto text-center font-normal ">
            No matter where you’re starting or what your goal is, you’ll find a trainer at Evolve who understands your journey and knows how to deliver results. 
            </h4>
          </div>
        
        </div>
      {isMobile ? (
        <section
          className=" max-w-[1440px] mt-[-50px] mx-auto flex items-center justify-center"
          style={{
            backgroundImage: `url(${bgimgmob})`,
            minHeight: "620px",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" relative z-10">
            <div className="relative max-w-[600px] mx-auto">
              <div className="grid  grid-cols-2 pt-[3rem] md:grid-cols-2 gap-2">
                {trainingCategories.map((category) => (
                  // <Link to={category.link} key={category.id}>
                  <div className="relative max-w-[168.25px] max-h-[155.88px] group overflow-hidden rounded-lg shadow-xl">
                    <div className="w-full relative z-[2]  h-full">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 scale-110"
                      />
                    </div>
                    <div className="absolute z-[9] bottom-0 justify-start pb-3 pl-3">
                      <h3 className="text-white text-[#fff] !text-[12px] !text-start ">
                        {category.title}
                      </h3>
                    </div>
                    {/* <div className="absolute " /> */}
                  </div>
                  // </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section
          className="py-16 max-w-[1440px] mx-auto flex items-center justify-center"
          style={{
            backgroundImage: `url(${bgimg})`,
            minHeight: "963px",
            width: "100%",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" relative z-10">
            <div className="relative max-w-[600px] mx-auto">
              <div className="grid  grid-cols-1 md:grid-cols-2 gap-2">
                {trainingCategories.map((category) => (
                  // <Link to={category.link} key={category.id}>
                  <div className="relative max-w-[290.25px] max-h-[267.88px] group overflow-hidden rounded-lg shadow-xl">
                    <div className="w-full relative z-[2]  h-full">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 scale-110"
                      />
                    </div>
                    <div className="absolute z-[9] bottom-0 justify-start pb-3 pl-3">
                      <h3 className="text-white text-[#fff] !text-[24px] !text-start ">
                        {category.title}
                      </h3>
                    </div>
                    {/* <div className="absolute " /> */}
                  </div>
                  // </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default GymTrainingCategories;
