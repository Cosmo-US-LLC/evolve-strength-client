import React from "react";

const facilityStats = [
  { value: "30K", label: "Sq. Ft. Facility" },
  { value: "24", label: "Offices to Lease" },
  { value: "2026", label: "Opening" },
];

function ParkRoyalFacilityShowcase() {
  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-[1220px] mx-auto bg-[#F1F1F1] rounded-[24px] px-6 md:px-16 py-10 md:py-12 flex flex-col items-center gap-8 md:gap-12">
        <h2 className="text-[#000] uppercase text-center max-w-[800px]">
          Thirty thousand square feet of new standard strength, built from the
          ground up for the North Shore.
        </h2>

        <div className="w-full flex flex-col md:flex-row items-stretch gap-6">
          <div className="flex-1 rounded-2xl overflow-hidden">
            <img
              src="https://evolve-strength.tor1.digitaloceanspaces.com/media/1784033659635-0c72acdb-78eb-41f6-a246-ca65a943cb5d.webp"
              alt="Evolve Strength Park Royal Facility"
              className="w-full h-full min-h-[240px] md:min-h-[373px] object-cover rounded-2xl"
            />
          </div>

          <div className="flex flex-row md:flex-col gap-3 md:gap-2 w-full md:w-[300px]">
            {facilityStats.map((stat) => (
              <div
                key={stat.label}
                className="flex-1 bg-white rounded-[12px] p-4 md:p-6 flex flex-col items-center justify-center gap-2 md:gap-3 text-center"
              >
                <p className="!text-[28px] md:!text-[40px] leading-[39px] font-[600] text-[#4AB04A] uppercase !font-[Kanit] m-0">
                  {stat.value}
                </p>
                <p className="!text-[14px] md:!text-[18px] !font-[300] text-black !font-[Kanit] m-0">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ParkRoyalFacilityShowcase;
