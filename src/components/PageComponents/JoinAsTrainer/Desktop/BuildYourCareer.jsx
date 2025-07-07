import React, { useState } from "react";

import build_img1 from "../../../../assets/images/JoinAsTrainer/BuildYour/build_your (2).webp";
import build_img2 from "../../../../assets/images/JoinAsTrainer/BuildYour/build_your (1).webp";
import build_img3 from "../../../../assets/images/JoinAsTrainer/BuildYour/build_your (3).webp";
import build_img4 from "../../../../assets/images/JoinAsTrainer/BuildYour/build_your (4).webp";
import build_img5 from "../../../../assets/images/JoinAsTrainer/BuildYour/build_your (5).webp";
import build_img6 from "../../../../assets/images/JoinAsTrainer/BuildYour/build_your (6).webp";
import build_img7 from "../../../../assets/images/JoinAsTrainer/BuildYour/build_your (7).webp";
import build_img8 from "../../../../assets/images/JoinAsTrainer/BuildYour/build_your (8).webp";
import build_img9 from "../../../../assets/images/JoinAsTrainer/BuildYour/build_your (9).webp";
import build_img10 from "../../../../assets/images/JoinAsTrainer/BuildYour/build_your (10).webp";
import build_img11 from "../../../../assets/images/JoinAsTrainer/BuildYour/build_your (11).webp";
import build_img12 from "../../../../assets/images/JoinAsTrainer/BuildYour/build_your (12).webp";
import build_img13 from "../../../../assets/images/JoinAsTrainer/BuildYour/build_your (13).webp";

function BuildYourCareer() {
  return (
    <div className="w-full pb-12 pt-[40px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="">
          <section className="relative w-full py-[60px]">
            <div className="relative w-full max-w-7xl mx-auto">
              <div className="grid grid-cols-9 gap-[12px] items-start">
                <div className="flex flex-col gap-[12px] mt-[60px]">
                  <img
                    src={build_img1}
                    alt="Bearded man"
                    className="w-[149.212px] h-[177px] rounded-lg object-cover shadow-md 
                             transform transition-all duration-500 ease-in-out 
                             hover:scale-110 hover:shadow-2xl hover:rotate-2 hover:z-10 
                             hover:brightness-110 cursor-pointer"
                  />
                  <img
                    src={build_img2}
                    alt="Woman with trophy"
                    className="w-[149.212px] h-[177px] rounded-lg object-cover shadow-md 
                             transform transition-all duration-500 ease-in-out 
                             hover:scale-110 hover:shadow-2xl hover:rotate-2 hover:z-10 
                             hover:brightness-110 cursor-pointer"
                  />
                </div>
                <div className="flex flex-col justify-center gap-[12px] ">
                  <img
                    src={build_img3}
                    alt="Woman in green polka dot"
                    className="w-[149.212px] h-[177px] rounded-lg object-cover shadow-md 
                             transform transition-all duration-500 ease-in-out 
                             hover:scale-110 hover:shadow-2xl hover:rotate-2 hover:z-10 
                             hover:brightness-110 cursor-pointer"
                  />
                  <img
                     src={build_img4}
                    alt="Gym scene"
                    className="w-[149.212px] h-[177px] rounded-lg object-cover shadow-md 
                             transform transition-all duration-500 ease-in-out 
                             hover:scale-110 hover:shadow-2xl hover:rotate-2 hover:z-10 
                             hover:brightness-110 cursor-pointer"
                  />
                </div>
                <div className="mt-[100px]">
                  <img
                     src={build_img5}
                    alt="Gym equipment"
                    className="w-[149.212px] h-[177px] rounded-lg object-cover shadow-md 
                             transform transition-all duration-500 ease-in-out 
                             hover:scale-110 hover:shadow-2xl hover:rotate-2 hover:z-10 
                             hover:brightness-110 cursor-pointer"
                  />
                </div>
                <div>
                  <img
                     src={build_img6}
                    alt="Blonde woman"
                    className="w-[149.212px] h-[177px] rounded-lg object-cover shadow-md 
                             transform transition-all duration-500 ease-in-out 
                             hover:scale-110 hover:shadow-2xl hover:rotate-2 hover:z-10 
                             hover:brightness-110 cursor-pointer"
                  />
                </div>
                <div className="mt-[60px]">
                  <img
                     src={build_img7}
                    alt="Man with equipment"
                    className="w-[149.212px] h-[177px] rounded-lg object-cover shadow-md 
                             transform transition-all duration-500 ease-in-out 
                             hover:scale-110 hover:shadow-2xl hover:rotate-2 hover:z-10 
                             hover:brightness-110 cursor-pointer"
                  />
                </div>
                <div>
                  <img
                     src={build_img8}
                    alt="Woman in green workout"
                    className="w-[149.212px] h-[177px] rounded-lg object-cover shadow-md 
                             transform transition-all duration-500 ease-in-out 
                             hover:scale-110 hover:shadow-2xl hover:rotate-2 hover:z-10 
                             hover:brightness-110 cursor-pointer"
                  />
                </div>
                <div className="mt-[90px]">
                  <img
                     src={build_img9}
                    alt="Man working out"
                    className="w-[149.212px] h-[177px] rounded-lg object-cover shadow-md 
                             transform transition-all duration-500 ease-in-out 
                             hover:scale-110 hover:shadow-2xl hover:rotate-2 hover:z-10 
                             hover:brightness-110 cursor-pointer"
                  />
                </div>

                <div className="flex flex-col gap-[12px]">
                  <img
                     src={build_img10}
                    alt="Woman in workout clothes"
                    className="w-[149.212px] h-[177px] rounded-lg object-cover shadow-md 
                             transform transition-all duration-500 ease-in-out 
                             hover:scale-110 hover:shadow-2xl hover:rotate-2 hover:z-10 
                             hover:brightness-110 cursor-pointer"
                  />
                  <img
                     src={build_img11}
                    alt="Brunette woman"
                    className="w-[149.212px] h-[177px] rounded-lg object-cover shadow-md 
                             transform transition-all duration-500 ease-in-out 
                             hover:scale-110 hover:shadow-2xl hover:rotate-2 hover:z-10 
                             hover:brightness-110 cursor-pointer"
                  />
                </div>
                <div className="flex flex-col gap-[12px] mt-[60px]">
                  <img
                   src={build_img12}
                    alt="Man exercising"
                    className="w-[149.212px] h-[177px] rounded-lg object-cover shadow-md 
                             transform transition-all duration-500 ease-in-out 
                             hover:scale-110 hover:shadow-2xl hover:rotate-2 hover:z-10 
                             hover:brightness-110 cursor-pointer"
                  />
                  <img
                      src={build_img13}
                    alt="Woman close-up"
                    className="w-[149.212px] h-[177px] rounded-lg object-cover shadow-md 
                             transform transition-all duration-500 ease-in-out 
                             hover:scale-110 hover:shadow-2xl hover:rotate-2 hover:z-10 
                             hover:brightness-110 cursor-pointer"
                  />
                </div>
              </div>
              <div className="absolute top-[80%] inset-0 flex items-center justify-center">
                <div className="   text-center">
                  <h2 className="uppercase">
                    BUILD YOUR CAREER WITH EVOLVE
                  </h2>
                  <h4 className="h4 !font-[300] pt-[34px]">
                    Start and grow your personal training business in Canada's
                    top fitness facility
                  </h4>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default BuildYourCareer;
