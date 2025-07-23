import React from 'react'
import check from "@/assets/images/Locations/check_icon.svg"
const pricingContent = {
  sectionTitle: "Simple Pricing, No Surprises",
  sectionSubtitle: "Flexible plans designed to fit your goals and your lifestyle",
  plans: [
    {
      title: "1 Year Contract",
      billing: "Bi-Weekly",
      price: "$32.99",
      featuresTitle: "Feature you’ll like:",
      features: [
        "$0 Enrolment Fee",
        "$0 Maintenance Fee",
        "Personalized Assessment",
        "Access to All Locations",
        "On-Site Health Services",
        "Modern, Clean Facilities",
        "24/7 Online Member Portal"
      ],
      buttonText: "JOIN NOW"
    },
    {
      title: "Month To Month",
      billing: "Bi-Weekly",
      price: "$32.99",
      featuresTitle: "Feature you’ll like:",
      features: [
        "$0 Enrolment Fee",
        "$0 Maintenance Fee",
        "Personalized Assessment",
        "Access to All Locations",
        "On-Site Health Services",
        "Modern, Clean Facilities",
        "24/7 Online Member Portal"
      ],
      buttonText: "JOIN NOW"
    }
  ]
};

function LocationPricing() {
  return (
  <div className='w-full max-w-[1280px] px-8 mx-auto flex flex-col gap-12'>
    <div className='flex  py-[60px] w-full '>
      {/* Left Text Section */}
      <div className="flex flex-col w-full justify-center">
        <h1 className="!text-[40px] max-w-[300px] leading-[39px] uppercase">
          {pricingContent.sectionTitle}
        </h1>
        <p className="mt-4 !font-[kanit] !font-[300] description max-w-[300px]">
          {pricingContent.sectionSubtitle}
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-[24px]">
        {pricingContent.plans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col w-full md:w-[320px] p-[32px] shadow-lg border border-gray-200 rounded-[8px] bg-white"
          >
            <h3 className=" ">{plan.title}</h3>
            <p className="!description">{plan.billing}</p>
            <h2 className="text-[#4AB04A] mt-2">{plan.price}</h2>
            <hr className="my-4" />
            <p className="description !font-[kanit] mb-4 ">{plan.featuresTitle}</p>
            <ul className="space-y-6 !description !font-[kanit]  text-sm mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex ">
                  <span className="text-black mr-2 "><img src={check} alt="" /></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="btnPrimary">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default LocationPricing