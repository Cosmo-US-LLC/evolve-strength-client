import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import {
  LOCATION_PRICING,
  DEFAULT_PRICING,
} from "@/constants/locations_data/LocationPricingData";

function LocationPricing() {
  const [pricingType, setPricingType] = useState("monthly");

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

  const getPlanTitle = () => {
    return pricingType === "monthly" ? "Month To Month" : "1 Year Contract";
  };

  const getPlanBilling = () => {
    return "Bi-Weekly";
  };

  const getPlanPrice = () => {
    const plan = pricingData.plans.find((p) =>
      pricingType === "monthly"
        ? p.title === "Month To Month"
        : p.title === "1 Year Contract"
    );
    return plan ? plan.price : "$32.99";
  };

  const getFeatures = () => {
    const plan = pricingData.plans.find((p) =>
      pricingType === "monthly"
        ? p.title === "Month To Month"
        : p.title === "1 Year Contract"
    );
    return plan
      ? plan.features
      : [
          "$0 Enrolment Fee",
          "$0 Maintenance Fee",
          "Personalized Assessment",
          "Access to All Locations",
          "On-Site Health Services",
          "Modern, Clean Facilities",
          "24/7 Online Member Portal",
        ];
  };

  return (
    <div className="w-full py-12 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center flex flex-col gap-2 mb-6">
          <h2 className="text-[#000] uppercase">
            SIMPLE PRICING, NO SURPRISES
          </h2>
          <h4 className="text-[#000] mx-auto">
            Flexible plans designed to fit your goals and your lifestyle
          </h4>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-8">
          <ToggleGroup
            type="single"
            value={pricingType}
            onValueChange={(value) => value && setPricingType(value)}
            className="bg-[#2E2E2E] border border-[#2E2E2E] rounded-[5px] p-1 shadow-sm"
          >
            <ToggleGroupItem
              value="monthly"
              className={`px-8 py-3 rounded-[5px] transition-all duration-200 ${
                pricingType === "monthly"
                  ? "bg-[#FFFFFF] text-[#4AB04A] shadow-md"
                  : "bg-[#2E2E2E] text-[#FFFFFF] hover:bg-[#2E2E2E] hover:cursor-pointer hover:text-[#FFFFFF]"
              }`}
            >
              Monthly
            </ToggleGroupItem>
            <ToggleGroupItem
              value="yearly"
              className={`px-8 py-3 rounded-[5px] transition-all duration-200 ${
                pricingType === "yearly"
                  ? "bg-[#FFFFFF] text-[#4AB04A] shadow-md"
                  : "bg-[#2E2E2E] text-[#FFFFFF] hover:bg-[#2E2E2E] hover:cursor-pointer hover:text-[#FFFFFF]"
              }`}
            >
              Yearly
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {/* Pricing Card */}

        <div className="flex justify-center">
          <Card className="w-full max-w-2xl bg-[#FFFFFF] border-2 border-[#CCCCCC] ">
            <CardContent className="p-8 text-center">
              <h2 className="text-[#000]">{getPlanTitle()}</h2>
              <p className="text-gray-600 mb-4">{getPlanBilling()}</p>
              <div className="mb-6">
                <h2 className=" text-[#4AB04A]">{getPlanPrice()}</h2>
              </div>

              <Link to={pricingData.subscriptionUrl} className="block">
                <button className="btnPrimary w-full">JOIN NOW</button>
              </Link>

              <div className="text-center my-6">
                <h3 className="text-xl font-semibold text-black mb-8">
                  Your membership offers:
                </h3>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {getFeatures().map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center max:md:justify-center md:justify-start space-x-3"
                    >
                      <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-800 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default LocationPricing;
