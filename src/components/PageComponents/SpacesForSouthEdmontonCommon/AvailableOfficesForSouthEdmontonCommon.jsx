import React from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const OFFICES = [
  {
    title: "Premium Office Suite",
    location: "South Edmonton Common",
    image: "/assets/images/spaces/AvailableOffices/south_edmonton_common.webp",
    size: "120-140 sq/ft",
    roomStatus: "Unfurnished | without a sink",
  },
];

const handleScrollToForm = () => {
  const el = document.getElementById("join-south-common-form");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

function OfficeCard({ office }) {
  return (
    <div
      className="bg-[#eee] flex flex-col gap-6 rounded-[10px] overflow-hidden w-full md:max-w-[590px] max-w-full"
      data-name="Office"
      data-node-id="14338:743"
    >
      <div
        className="h-[240px] w-[340px] relative shrink-0"
        data-node-id="14338:744"
      >
        <img
          alt={office.title}
          src={office.image}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div
        className="flex flex-col gap-5 items-center pb-6 px-6"
        data-node-id="14338:745"
      >
        <div
          className="flex flex-col gap-4 items-center"
          data-node-id="14338:746"
        >
          <h3
            className=" text-black !text-[24px] text-center leading-6"
            data-node-id="14338:747"
          >
            {office.title}
          </h3>
          <div
            className="flex flex-col gap-2 items-center"
            data-node-id="14338:748"
          >
            <p
              className="font-[300] !font-[Kanit] !text-[14px] text-[#000] leading-[18px]"
              data-node-id="14338:749"
            >
              {office.size}
            </p>
            <div
              className="flex flex-col gap-3.5 items-center"
              data-node-id="14338:750"
            >
              <p
                className="font-medium !font-[Kanit] md:!text-[16px] !text-[14px] text-[#000] leading-5"
                data-node-id="14338:751"
              >
                {office.roomStatus}
              </p>
              <div className="flex gap-2 items-center" data-node-id="14338:752">
                <MapPin
                  className="size-4 shrink-0 text-[#515151]"
                  aria-hidden
                />
                <p
                  className="font-light !text-[14px] !font-[Kanit] text-[#515151] leading-[18px]"
                  data-node-id="14338:757"
                >
                  {office.location}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col gap-2 items-center justify-center"
          data-name="CTA with text"
          data-node-id="14471:1527"
        >
          <button
            onClick={handleScrollToForm}
            className="flex btnPrimary w-fit text-center"
            data-name="CTA"
            data-node-id="14471:1528"
          >
            Apply now
          </button>
          <p
            className="font-normal md:!text-[16px] !text-[14px] !font-[Kanit] text-black leading-6"
            data-node-id="14471:1530"
          >
            Limited suites are available
          </p>
        </div>
      </div>
    </div>
  );
}

function AvailableOfficesForSouthEdmontonCommon() {
  return (
    <section
      className="bg-white flex flex-col  gap-10 items-center justify-center px-4 md:px-8 py-12 md:py-18 w-full"
      data-node-id="14338:740"
    >
      <div
        className="flex flex-col items-center w-full"
        data-node-id="14338:741"
      >
        <h2
          className="text-black text-center uppercase w-full"
          data-node-id="14338:742"
        >
          Available Offices
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {OFFICES.map((office, index) => (
          <OfficeCard key={index} office={office} />
        ))}
      </div>
    </section>
  );
}

export default AvailableOfficesForSouthEdmontonCommon;
