import React from "react";

function TrainerDetails({ trainer }) {
  // if (!trainer) {
  //   return (
  //     <div>

  //     </div>
  //   );
  // }

  return (
    <div className="flex flex-col gap-6 bg-[#FFF] rounded-[10px] p-6 border-2 border-[#CCCCCC] h-full">
      <div className="max-w-[939px] flex flex-col">
        <h3 className="text-[#000]">About:</h3>
        <p className="text-[#000] description leading-[25px]">
          {trainer.about || "No description available."}
        </p>
      </div>

      <div className="max-w-[939px] flex flex-col gap-0.5">
        <h3 className="text-[#000]">Certification:</h3>
        <p className="text-[#000] description leading-[25px]">
          {trainer.certification || "Certification information not available."}
        </p>
      </div>

      <div className="flex flex-col gap-0.5">
        <h3 className="text-[#000]">Areas of Focus:</h3>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {trainer.areasOfFocus && trainer.areasOfFocus.length > 0 ? (
              trainer.areasOfFocus.map((area, index) => (
                <span
                  key={index}
                  className="px-3 h-[40px] flex items-center justify-center description bg-[#F6F6F6] text-[#000] rounded-[5px]"
                >
                  {area}
                </span>
              ))
            ) : (
              <span className="px-3 h-[40px] flex items-center justify-center description bg-[#F6F6F6] text-[#000] rounded-[5px]">
                No areas specified
              </span>
            )}
          </div>

          <button className="btnPrimary">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default TrainerDetails;
