import React from "react";
import { Link } from "react-router-dom";

function TrainerDetails({ trainer }) {
  if (!trainer) {
    return <div>Our amazing team of trainers will be announced soon!</div>;
  }

  // Debug logging to see what's being passed
  console.log("TrainerDetails - trainer object:", trainer);
  console.log("TrainerDetails - trainer.location:", trainer.location);

  // Location-specific subscription URLs
  const getSubscriptionUrl = (location) => {
    const locationUrls = {
      "VANCOUVER POST":
        "https://subscription.evolvestrength.ca/membership-plans?location=40327",
      "BURNABY BRENTWOOD":
        "https://subscription.evolvestrength.ca/membership-plans?location=40248",
      "CALGARY SETON":
        "https://subscription.evolvestrength.ca/membership-plans?location=40097",
      "CALGARY ROYAL OAK":
        "https://subscription.evolvestrength.ca/membership-plans?location=40142",
      "CALGARY SUNRIDGE":
        "https://subscription.evolvestrength.ca/membership-plans?location=06973",
      "EDMONTON SOUTH":
        "https://subscription.evolvestrength.ca/membership-plans?location=06962",
      "EDMONTON DOWNTOWN":
        "https://subscription.evolvestrength.ca/membership-plans?location=06967",
      "EDMONTON NORTH":
        "https://subscription.evolvestrength.ca/membership-plans?location=06964",
    };

    console.log("getSubscriptionUrl - input location:", location);
    console.log(
      "getSubscriptionUrl - available locations:",
      Object.keys(locationUrls)
    );
    console.log("getSubscriptionUrl - matched URL:", locationUrls[location]);

    return locationUrls[location] || "https://subscription.evolvestrength.ca";
  };

  const subscriptionUrl = getSubscriptionUrl(trainer.location);

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
            <Link to={subscriptionUrl}>
              <button className="btnPrimary w-full md:w-auto text-sm md:text-base py-2 md:py-3">
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerDetails;
