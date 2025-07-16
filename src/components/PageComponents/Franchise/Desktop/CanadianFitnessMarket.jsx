import React from "react";

const points = [
  {
    number: 1,
    text: (
      <>
        Total revenue is expected to grow at an annual rate of 8.95% from 2022
        to 2029.
      </>
    ),
  },
  {
    number: 2,
    text: <>70% of Canadians seek preventative health and fitness solutions.</>,
  },
  {
    number: 3,
    text: (
      <>
        Facilities adding comprehensive recovery zones report average revenue
        increases of 15–20% .
      </>
    ),
  },
];

const CanadianFitnessMarket = () => {
  return (
    <div className="pt-[80px] pb-12">
      <div className="w-full h-full flex flex-col gap-4 items-center  ">
        <div className="w-full flex flex-row px-8 gap-12 overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-8 flex flex-col gap-12 relative">
            <div className="flex flex-col gap-4">
              <h2 className="text-[#000] uppercase font-[700] max-w-[500px] leading-[39px]">
                A $5.8B Canadian Fitness Market is Growing
              </h2>
              <h4 className="text-[#000] font-[400] max-w-[480px] leading-[26px]">
                The Canadian fitness market is booming, driven by consumers who
                want more than just treadmills and dumbbells. Evolve’s
                integrated fitness facility model combines state-of-the-art
                training zones with ancillary wellness amenities under one roof.
              </h4>
            </div>

            <div className="flex flex-col gap-6">
              {points.map((point) => (
                <div
                  className="flex flex-col justify-start items-start border-l-4 border-[#4AB04A] pl-6 py-2 "
                  key={point.number}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-[28px] h-[28px] rounded-full bg-[#4AB04A] text-white flex items-center justify-center text-[16px] font-[900] font-[kanit] leading-[26px]">
                      {point.number}
                    </div>
                  </div>
                  <h4 className="text-[#000] leading-[26px] !font-[500] max-w-[230px]">
                    {point.text}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          <div className=" w-[50%] flex relative ">
            <div className="w-[1030px] h-[1010px] absolute -bottom-[400px] -right-[270px] rounded-full border-2 border-[#4AB04A] bg-[#FDFDFD] flex items-center justify-center"></div>
            <div className="w-[840px] h-[800px] absolute -bottom-[320px] -right-[220px] rounded-full bg-[#EDEDED] flex items-center justify-center"></div>
            <div className="w-[400px] h-[400px] absolute -bottom-[100px] right-[6px] rounded-full bg-[#4AB04A] flex items-center justify-center"></div>

            <div className="flex flex-col gap-1 z-10 absolute top-[130px] right-[230px]">
              <div className="flex gap-2 pt-10">
                <div className="w-[24px] h-[24px] rounded-full bg-[#4AB04A] text-white flex items-center justify-center text-[16px] font-[900] font-[kanit]">
                  1
                </div>
                <h3 className="  leading-[26px] !font-[600] text-[#000]">
                  $5.8B
                </h3>
              </div>
              <h4 className="leading-[26px] text-[#000] font-[400]">
                Canada’s Fitness Industry
              </h4>
            </div>

            <div className="flex flex-col gap-1 z-10 absolute top-[280px] right-[100px]">
              <div className="flex gap-2 pt-10 ">
                <div className="w-[24px] h-[24px] rounded-full bg-[#4AB04A] text-white flex items-center justify-center text-[16px] font-[900] font-[kanit]">
                  2
                </div>
                <h3 className=" leading-[26px] !font-[600] text-[#000]">
                  8.95% CAGR
                </h3>
              </div>
              <h4 className="leading-[26px] text-[#000] font-[400] max-w-[260px]">
                Per year expenditure of Canada’s fitness industry
              </h4>
            </div>

            <div className="flex flex-col gap-1 z-10 absolute bottom-[90px] right-[50px]">
              <div className="flex gap-2 ">
                <div className="w-[24px] h-[24px] rounded-full bg-[#fff] text-[#4AB04A] flex items-center justify-center text-[16px] font-[900] font-[kanit]">
                  3
                </div>
                <h3 className=" leading-[26px] !font-[600] text-[#fff]">70%</h3>
              </div>
              <h4 className="leading-[26px] text-[#fff] font-[400] max-w-[260px]">
                of Canadians seek preventive health and fitness solutions
              </h4>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="btnPrimary">APPLY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default CanadianFitnessMarket;
