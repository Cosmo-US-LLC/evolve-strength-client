import React from "react";

function TrainerDetails({ trainer }) {
  if (!trainer) {
    return <div>Our amazing team of trainers will be announced soon!</div>;
  }

  return (
    <div className="flex flex-col gap-4 md:gap-6 bg-[#FFF] rounded-[10px] p-4 md:p-6 border-2 border-[#CCCCCC] h-full">
      <div className="max-w-full flex flex-col">
        <h3 className="text-[#000] text-base md:text-lg font-semibold mb-2 md:mb-0">
          About:
        </h3>
        <p className="text-[#000] description leading-[20px] md:leading-[25px] text-sm md:text-base">
          {trainer.about || "No description available."}
        </p>
      </div>

      <div className="max-w-[939px] flex flex-col gap-0.5">
        <h3 className="text-[#000] text-base md:text-lg font-semibold mb-2 md:mb-0">
          Certification:
        </h3>
        <p className="text-[#000] description leading-[20px] md:leading-[25px] text-sm md:text-base">
          {trainer.certification || "Certification information not available."}
        </p>
      </div>

      <div className="flex flex-col gap-2 md:gap-0.5">
        <h3 className="text-[#000] text-base md:text-lg font-semibold mb-2 md:mb-0">
          Areas of Focus:
        </h3>
        <div className="flex flex-col w-full gap-2 md:flex-row md:items-center md:justify-between  ">
          <div className="flex flex-wrap gap-2  w-[80%]">
            {trainer.areasOfFocus && trainer.areasOfFocus.length > 0 ? (
              trainer.areasOfFocus.map((area, index) => (
                <span
                  key={index}
                  className="px-2 md:px-3 py-3 flex items-center justify-center description bg-[#F6F6F6] text-[#000] rounded-[5px] text-xs md:text-sm"
                >
                  {area}
                </span>
              ))
            ) : (
              <span className="px-2 md:px-3 h-[32px] md:h-[40px] flex items-center justify-center description bg-[#F6F6F6] text-[#000] rounded-[5px] text-xs md:text-sm">
                No areas specified
              </span>
            )}
          </div>

          <div className="w-[50%] md:w-[20%] flex justify-end">
            <button className="btnPrimary w-full md:w-auto text-sm md:text-base py-2 md:py-3">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerDetails;
