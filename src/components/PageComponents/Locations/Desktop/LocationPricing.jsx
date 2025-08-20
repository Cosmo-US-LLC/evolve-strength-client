import React from "react";
import { Link } from "react-router-dom";
import {
  LOCATION_PRICING,
  DEFAULT_PRICING,
} from "@/constants/locations_data/LocationPricingData";

function LocationPricing() {
  const currentPath = window.location.pathname;
  let locationKey = "calgary-seton";

  if (currentPath.includes("calgary-seton")) {
    locationKey = "calgary-seton";
  } else if (currentPath.includes("calgary-royal-oak")) {
    locationKey = "calgary-royal-oak";
  } else if (currentPath.includes("calgary-sunridge")) {
    locationKey = "calgary-sunridge";
  } else if (currentPath.includes("edmonton-south")) {
    locationKey = "edmonton-south";
  } else if (currentPath.includes("edmonton-north")) {
    locationKey = "edmonton-north";
  } else if (currentPath.includes("edmonton-downtown")) {
    locationKey = "edmonton-downtown";
  } else if (currentPath.includes("burnaby-brentwood")) {
    locationKey = "burnaby-brentwood";
  } else if (currentPath.includes("vancouver-post")) {
    locationKey = "vancouver-post";
  }

  const pricingData = LOCATION_PRICING[locationKey] || DEFAULT_PRICING;

  return (
    <div className="w-full py-12 max-w-[1280px] md:px-8 px-4 mx-auto flex flex-col gap-12">
      <div className="flex flex-col md:flex-row w-full  ">
        <div className="flex flex-col w-full justify-center">
          <h1 className="!text-[40px] md:max-w-[300px] leading-[39px] uppercase">
            {pricingData.sectionTitle}
          </h1>
          <p className="mt-4 mb-4  !font-[kanit] !font-[300] description md:max-w-[300px]">
            {pricingData.sectionSubtitle}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full">
          {pricingData.plans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col md:w-[340px] p-6 w-full  shadow-lg border border-gray-200 rounded-[8px] bg-white"
            >
              <h3 className="">{plan.title}</h3>
              <p className="!description">{plan.billing}</p>
              <h2 className="text-[#4AB04A] mt-2">{plan.price}</h2>
              <hr className="my-4" />
              <p className="description !font-[kanit] mb-4 ">
                {plan.featuresTitle}
              </p>
              <ul className="space-y-[18px] !description !font-[kanit]  text-sm mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex ">
                    <span className="text-black mr-2 ">
                      <img
                        src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/check_icon.svg"
                        alt=""
                      />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="https://subscription.evolvestrength.ca/">
                <button className="w-full btnPrimary">{plan.buttonText}</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LocationPricing;
