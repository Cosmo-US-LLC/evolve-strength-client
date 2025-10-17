import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trainingCategories, trainerProfiles } from "../../../constants/gymTrainingData";

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
            No matter where you’re starting or what your goal is, you’ll find a
            trainer at Evolve who understands your journey and knows how to
            deliver results.
          </h4>
        </div>
      </div>
      {isMobile ? (
        <section className="pt-8 max-w-[1440px] min-h-[510px] h-[510px] w-[100%] overflow-hidden mx-auto relative">
          <div className="absolute left-[-19%] top-0 w-[100px] h-full bg-gradient-to-r from-white via-white to-transparent z-20"></div>
          <div className="absolute right-[-19%] top-0 w-[100px] h-full bg-gradient-to-l from-white via-white to-transparent z-20"></div>
          <div className="absolute left-[50%] translate-x-[-50%] flex justify-center gap-2 w-[800px] ">
            {/* Left trainer cards - 1 column with 6 cards */}
            <div className="w-[70px] flex flex-col gap-2 relative">
              <div className="absolute left-0 top-0 w-[50px] h-full bg-gradient-to-r from-white to-transparent z-10"></div>
              {trainerProfiles.slice(0, 6).map((trainer, index) => (
                <div key={`left-${index}`} className="w-[70px] h-[70px] group relative flex flex-col items-center justify-center rounded-[8px] shadow-[0_0_0_0.894px_rgba(74,176,74,0.12),0_2.682px_2.682px_-1.341px_rgba(74,176,74,0.04),0_5.364px_5.364px_-2.682px_rgba(74,176,74,0.04),0_0.894px_0.894px_-0.447px_rgba(74,176,74,0.04),0_10.728px_10.728px_-5.364px_rgba(74,176,74,0.04)] hover:shadow-[0_0_0_1px_rgba(74,176,74,0.2),0_4px_4px_-2px_rgba(74,176,74,0.12),0_8px_8px_-4px_rgba(74,176,74,0.12),0_1px_1px_-0.5px_rgba(74,176,74,0.12),0_16px_16px_-8px_rgba(74,176,74,0.12)] transition-all duration-300">
                  <div className="w-[70px] h-[70px] rounded-[8px] flex items-center flex-col justify-center overflow-hidden border-2 border-white">
                    <img src={trainer.image} alt={trainer.name} className="h-[20px] w-[20px]" />
                    <h4 className="mt-1 !text-[10px] leading-[100%] text-center text-black font-medium">{trainer.name}</h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Center content */}
            <div className="relative w-[346px] flex flex-col justify-between">
              {/* Top trainer cards */}
              <div className="w-[100%] flex gap-2 justify-between">
                {trainerProfiles.slice(18, 22).map((trainer, index) => (
                  <div key={`top-${index}`} className="group relative flex flex-col items-center justify-center rounded-[8px] shadow-[0_0_0_0.894px_rgba(74,176,74,0.12),0_2.682px_2.682px_-1.341px_rgba(74,176,74,0.04),0_5.364px_5.364px_-2.682px_rgba(74,176,74,0.04),0_0.894px_0.894px_-0.447px_rgba(74,176,74,0.04),0_10.728px_10.728px_-5.364px_rgba(74,176,74,0.04)] hover:shadow-[0_0_0_1px_rgba(74,176,74,0.2),0_4px_4px_-2px_rgba(74,176,74,0.12),0_8px_8px_-4px_rgba(74,176,74,0.12),0_1px_1px_-0.5px_rgba(74,176,74,0.12),0_16px_16px_-8px_rgba(74,176,74,0.12)] transition-all duration-300">
                    <div className="w-[70px] h-[70px] rounded-[8px] flex items-center flex-col justify-center overflow-hidden border-2 border-white">
                      <img src={trainer.image} alt={trainer.name} className="h-[20px] w-[20px]" />
                      <h4 className="mt-1 !text-[10px] leading-[100%] text-center text-black font-medium">{trainer.name}</h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* Training Categories Grid */}
              <div className="relative z-10 my-2">
                <div className="grid grid-cols-2 gap-2">
                  {trainingCategories.map((category) => (
                    <Link to={category.link} key={category.id}>
                      <div className="relative overflow-hidden">
                        <div className="w-[168.909px] h-[155px] relative">
                          <img
                            src={category.image}
                            alt={category.title}
                            className="w-full h-full rounded-[8px] object-cover"
                          />
                          <div className="absolute bottom-0 w-full p-2">
                            <h3 className="text-white !text-[12px] font-semibold">
                              {category.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bottom trainer cards */}
              <div className="w-[100%] flex gap-2 justify-between">
                {trainerProfiles.slice(22, 26).map((trainer, index) => (
                  <div key={`bottom-${index}`} className="group relative flex flex-col items-center justify-center rounded-[8px] shadow-[0_0_0_0.894px_rgba(74,176,74,0.12),0_2.682px_2.682px_-1.341px_rgba(74,176,74,0.04),0_5.364px_5.364px_-2.682px_rgba(74,176,74,0.04),0_0.894px_0.894px_-0.447px_rgba(74,176,74,0.04),0_10.728px_10.728px_-5.364px_rgba(74,176,74,0.04)] hover:shadow-[0_0_0_1px_rgba(74,176,74,0.2),0_4px_4px_-2px_rgba(74,176,74,0.12),0_8px_8px_-4px_rgba(74,176,74,0.12),0_1px_1px_-0.5px_rgba(74,176,74,0.12),0_16px_16px_-8px_rgba(74,176,74,0.12)] transition-all duration-300 ">
                    <div className="w-[70px] h-[70px] rounded-[8px] flex items-center flex-col justify-center overflow-hidden border-2 border-white">
                      <img src={trainer.image} alt={trainer.name} className="h-[20px] w-[20px]" />
                      <h4 className="mt-1 !text-[10px] leading-[100%] text-center text-black font-medium">{trainer.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right trainer cards - 1 column with 6 cards */}
            <div className="w-[70px] flex flex-col gap-2 relative">
              <div className="absolute right-0 top-0 w-[50px] h-full bg-gradient-to-l from-white to-transparent z-10"></div>
              {trainerProfiles.slice(26, 32).map((trainer, index) => (
                <div key={`right-${index}`} className="w-[70px] h-[70px] group relative flex flex-col items-center justify-center rounded-[8px] shadow-[0_0_0_0.894px_rgba(74,176,74,0.12),0_2.682px_2.682px_-1.341px_rgba(74,176,74,0.04),0_5.364px_5.364px_-2.682px_rgba(74,176,74,0.04),0_0.894px_0.894px_-0.447px_rgba(74,176,74,0.04),0_10.728px_10.728px_-5.364px_rgba(74,176,74,0.04)] hover:shadow-[0_0_0_1px_rgba(74,176,74,0.2),0_4px_4px_-2px_rgba(74,176,74,0.12),0_8px_8px_-4px_rgba(74,176,74,0.12),0_1px_1px_-0.5px_rgba(74,176,74,0.12),0_16px_16px_-8px_rgba(74,176,74,0.12)] transition-all duration-300">
                  <div className="w-[70px] h-[70px] rounded-[8px] flex items-center flex-col justify-center overflow-hidden border-2 border-white">
                    <img src={trainer.image} alt={trainer.name} className="h-[20px] w-[20px]" />
                    <h4 className="mt-1 !text-[10px] leading-[100%] text-center text-black font-medium">{trainer.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section
          className="py-16 max-w-[1440px] w-[100%] overflow-hidden  mx-auto flex items-center justify-center"
         
        >
        <div className="relative flex gap-2 w-full ">
          {/* Left trainer cards - 3 columns with 6 cards each */}
          <div className="w-[30%] flex gap-2 relative">
            <div className="absolute left-0 top-0 w-[100px] h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            {[0, 1, 2].map((colIndex) => (
              <div key={`left-col-${colIndex}`} className="flex flex-col gap-4">
                {trainerProfiles.slice(colIndex * 6, (colIndex + 1) * 6).map((trainer, index) => (
                  <div key={`left-${colIndex}-${index}`} className="group relative flex flex-col items-center justify-center rounded-[8px] shadow-[0_0_0_0.894px_rgba(74,176,74,0.12),0_2.682px_2.682px_-1.341px_rgba(74,176,74,0.04),0_5.364px_5.364px_-2.682px_rgba(74,176,74,0.04),0_0.894px_0.894px_-0.447px_rgba(74,176,74,0.04),0_10.728px_10.728px_-5.364px_rgba(74,176,74,0.04)] hover:shadow-[0_0_0_1px_rgba(74,176,74,0.2),0_4px_4px_-2px_rgba(74,176,74,0.12),0_8px_8px_-4px_rgba(74,176,74,0.12),0_1px_1px_-0.5px_rgba(74,176,74,0.12),0_16px_16px_-8px_rgba(74,176,74,0.12)] transition-all duration-300">
                    <div className="w-[138px] h-[126px] rounded-[8px] flex items-center flex-col justify-center overflow-hidden border-2 border-white ">
                      <img src={trainer.image} alt={trainer.name} className="h-[48px] w-[48px]" />
                    <h4 className="mt-2 text-sm leading-[100%] text-center text-black font-medium">{trainer.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="relative w-[100%] max-w-[611px] flex flex-col justify-between">
            {/* Top trainer cards */}
            <div className="w-[100%] flex gap-2">
              {trainerProfiles.slice(18, 22).map((trainer, index) => (
                <div key={`top-${index}`} className="group relative flex flex-col items-center justify-center rounded-[8px] shadow-[0_0_0_0.894px_rgba(74,176,74,0.12),0_2.682px_2.682px_-1.341px_rgba(74,176,74,0.04),0_5.364px_5.364px_-2.682px_rgba(74,176,74,0.04),0_0.894px_0.894px_-0.447px_rgba(74,176,74,0.04),0_10.728px_10.728px_-5.364px_rgba(74,176,74,0.04)] hover:shadow-[0_0_0_1px_rgba(74,176,74,0.2),0_4px_4px_-2px_rgba(74,176,74,0.12),0_8px_8px_-4px_rgba(74,176,74,0.12),0_1px_1px_-0.5px_rgba(74,176,74,0.12),0_16px_16px_-8px_rgba(74,176,74,0.12)] transition-all duration-300 ">
                  <div className="w-[138px] h-[126px] rounded-[8px] flex items-center flex-col justify-center overflow-hidden border-2 border-white ">
                    <img src={trainer.image} alt={trainer.name} className="h-[48px] w-[48px]" />
                  <h4 className="mt-2 text-sm leading-[100%] text-center text-black font-medium">{trainer.name}</h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Training Categories Grid */}
            <div className="relative z-10 max-w-[611px] mx-auto">
              <div className="grid grid-cols-2 gap-[13px]">
                {trainingCategories.map((category) => (
                  <Link to={category.link} key={category.id}>
                    <div className="relative  overflow-hidden  ">
                      <div className="w-full h-[269px] relative">
                        <img
                          src={category.image}
                          alt={category.title}
                          className="w-full h-full rounded-[8px] object-cover "
                        />
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"/> */}
                        <div className="absolute bottom-0 w-full p-6">
                          <h3 className="text-white text-[28px] font-semibold">
                            {category.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom trainer cards */}
            <div className="flex gap-2">
              {trainerProfiles.slice(22, 26).map((trainer, index) => (
                <div key={`bottom-${index}`} className="group rounded-[8px] relative flex flex-col items-center justify-center shadow-[0_0_0_0.894px_rgba(74,176,74,0.12),0_2.682px_2.682px_-1.341px_rgba(74,176,74,0.04),0_5.364px_5.364px_-2.682px_rgba(74,176,74,0.04),0_0.894px_0.894px_-0.447px_rgba(74,176,74,0.04),0_10.728px_10.728px_-5.364px_rgba(74,176,74,0.04)] hover:shadow-[0_0_0_1px_rgba(74,176,74,0.2),0_4px_4px_-2px_rgba(74,176,74,0.12),0_8px_8px_-4px_rgba(74,176,74,0.12),0_1px_1px_-0.5px_rgba(74,176,74,0.12),0_16px_16px_-8px_rgba(74,176,74,0.12)] transition-all duration-300">
               <div className="w-[138px] h-[126px]  flex items-center flex-col justify-center overflow-hidden border-2 border-white ">
                    <img src={trainer.image} alt={trainer.name} className="h-[48px] w-[48px]" />
                  <h4 className="mt-2 text-sm leading-[100%] text-center text-black font-medium">{trainer.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right trainer cards - 3 columns with 6 cards each */}
          <div className="w-[30%] flex gap-2 relative">
            <div className="absolute right-0 top-0 w-[100px] h-full bg-gradient-to-l from-white to-transparent z-10"></div>
            {[0, 1, 2].map((colIndex) => (
              <div key={`right-col-${colIndex}`} className="flex flex-col gap-4">
                {trainerProfiles.slice(26 + (colIndex * 6), 26 + ((colIndex + 1) * 6)).map((trainer, index) => (
                  <div key={`right-${colIndex}-${index}`} className="group relative flex flex-col items-center justify-center rounded-[8px] shadow-[0_0_0_0.894px_rgba(74,176,74,0.12),0_2.682px_2.682px_-1.341px_rgba(74,176,74,0.04),0_5.364px_5.364px_-2.682px_rgba(74,176,74,0.04),0_0.894px_0.894px_-0.447px_rgba(74,176,74,0.04),0_10.728px_10.728px_-5.364px_rgba(74,176,74,0.04)] hover:shadow-[0_0_0_1px_rgba(74,176,74,0.2),0_4px_4px_-2px_rgba(74,176,74,0.12),0_8px_8px_-4px_rgba(74,176,74,0.12),0_1px_1px_-0.5px_rgba(74,176,74,0.12),0_16px_16px_-8px_rgba(74,176,74,0.12)] transition-all duration-300">
                  <div className="w-[138px] h-[126px] rounded-[8px] flex items-center flex-col justify-center overflow-hidden border-2 border-white ">
                      <img src={trainer.image} alt={trainer.name} className="h-[48px] w-[48px]" />
                    <h4 className="mt-2 text-sm leading-[100%] text-center text-black font-medium">{trainer.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        </section>
      )}
    </div>
  );
};

export default GymTrainingCategories;
