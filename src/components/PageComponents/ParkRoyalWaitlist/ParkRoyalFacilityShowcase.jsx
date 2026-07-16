import React from "react";

const facilityStats = [
  { value: "30K", label: "Sq. Ft. Facility" },
  { value: "24", label: "Offices to Lease" },
  { value: "2026", label: "Opening" },
];

function ParkRoyalFacilityShowcase() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full py-12 md:py-16  bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-6 md:gap-8">
        {/* Left tall image */}
        <div className="w-full lg:w-[400px] shrink-0">
          <img
            src="https://evolve-strength.tor1.digitaloceanspaces.com/media/1784188141013-f269da9b-8f20-4d5b-83c3-cf95f3b90545.webp"
            alt="Evolve Strength Park Royal reception"
            className="w-full h-[320px] md:h-[500px] object-cover rounded-lg"
          />
        </div>

        {/* Right content */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 min-w-0">
          <div className="flex flex-col gap-3">
            <h2 className="text-black uppercase m-0 !text-[24px] md:!text-[32px] !leading-[28px] md:!leading-[32px]">
              Thirty thousand square feet of new-standard strength.
            </h2>
            <p className="!text-[16px] md:!text-[18px] !font-[300] !font-[Kanit] text-black leading-[24px] md:leading-[27px] m-0">
              Built from the ground up for the North Shore.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch flex-1">
            {/* Middle image */}
            <div className="w-full md:flex-1 min-w-0">
              <img
                src="https://evolve-strength.tor1.digitaloceanspaces.com/media/1784188164900-43763fe3-9495-4ddc-a5ac-b3e6800cc231.webp"
                alt="Evolve Strength Park Royal gym floor"
                className="w-full h-[280px] md:h-full md:min-h-[400px] object-cover rounded-lg"
              />
            </div>

            {/* Stats + CTA */}
            <div className="w-full md:w-[354px] shrink-0 flex flex-col gap-2">
              {facilityStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex-1 bg-[#F9F9F9] rounded-[12px] p-4 md:p-6 flex flex-col items-center justify-center gap-2 md:gap-3 text-center"
                >
                  <p className="!text-[28px] md:!text-[40px] leading-[39px] font-[600] text-black uppercase !font-[Kanit] m-0">
                    {stat.value}
                  </p>
                  <p className="!text-[14px] md:!text-[18px] !font-[300] text-black !font-[Kanit] leading-[20px] m-0">
                    {stat.label}
                  </p>
                </div>
              ))}

              <button
                type="button"
                className="btnPrimary uppercase w-full mt-1"
                onClick={scrollToWaitlist}
              >
                Join the Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ParkRoyalFacilityShowcase;
