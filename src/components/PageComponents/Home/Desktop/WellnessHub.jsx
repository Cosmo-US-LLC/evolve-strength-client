import React from "react";
import { Link } from "react-router-dom";
import useSyncedCounter from "@/hooks/useSyncedCounter";
import useCounter from "@/hooks/useCounter";
const cardItems = [
  {
    count: "136+",
    title: "BUSINESSES",
    description: "Working with us across our locations",
    background: "white",
    textColor: "black",
    hasIcon: false,
    height: "180px",
  },
  {
    count: "195+",
    title: "PRACTITIONERS",
    description: "Offering a wide range of health and wellness services",
    background: "white",
    textColor: "black",
    height: "180px",
  },
  {
    count: "205+",
    title: "TRAINERS",
    description: "Helping members reach their fitness goals every day",
    background: "white",
    textColor: "black",
    hasIcon: false,
    height: "180px",
  },
];

function WellnessHub() {
const { elementRef, hasStarted } = useCounter(1, 2000);
   
  return (
    <div id="wellnessHub" className="bg-white py-16"
    ref={elementRef}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-left mb-6">
          <h2 className="font-[700] w-full max-w-[540px] !text-[30px] md:!text-[40px] text-[#000] mb-4 uppercase leading-[39px]">
            CANADA'S BEST FITNESS AND WELLNESS HUB
          </h2>
          <h4 className="max-w-[640px] leading-[26px]">
            With state-of-the-art locations in Edmonton, Calgary, Burnaby, and
            Vancouver, Evolve brings together top-tier fitness and wellness
            under one roof.
          </h4>

          {/* <button className="btnPrimary mt-auto w-fit">Book Now</button> */}
        </div>
        {/* <div className="flex justify-start md:justify-center mb-10">
          <Link to="https://tour.evolvestrength.ca/tour-form ">
            <button className="btnPrimary mt-auto w-fit">Book Now</button>
          </Link>
        </div> */}

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 items-end">
             {cardItems.map((item, index) => {
          const targetNumber = parseInt(item.count.replace(/\D/g, ""), 10);
          const animatedValue = useSyncedCounter(
            targetNumber,
            3000,
            hasStarted
          );

          return (
            <div
              key={index}
              className={`relative rounded-lg p-5 flex flex-col ${
                item.background === "black" ? "bg-black" : "bg-white"
              } border border-gray-200`}
              style={{
                height: window.innerWidth >= 768 ? item.height : "",
              }}
            >
              <div className="text-left flex flex-col flex-1">
                {item.count && (
                  <h2 className="font-bold text-green-600 mb-2">
                    {animatedValue}+
                  </h2>
                )}
                <h3
                  className={`font-bold mb-2 uppercase ${
                    item.textColor === "white" ? "text-white" : "text-black"
                  }`}
                >
                  {item.title}
                </h3>
                <h4
                  className={`mb-8 leading-[24px] md:leading-[26px] flex-1 ${
                    item.textColor === "white" ? "text-white" : "text-black"
                  }`}
                >
                  {item.description}
                </h4>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default WellnessHub;
