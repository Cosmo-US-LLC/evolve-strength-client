import React from "react";

const perks = [
  { title: <p>Flexible <br /> Hours</p> },
  { title: <p>Professional <br/> Growth</p> },
  { title: <p>Premium <br/> Equipment</p> },
  { title: <p>Supportive <br/> Community</p> },
  { title: <p>Mental Health <br/> Support</p> },
  { title: <p>Impact-Driven <br/> Projects</p> },
];

function PerksAndBenefits() {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className="relative">
        <img
          src="https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/careers/careersHero/perks_and_benefits.webp"
          alt="Gym member training with premium equipment"
          className="w-full h-[420px] md:h-[700px] object-cover"
          draggable="false"
        />

        {/* Left Overlay Panel */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-[56%] md:w-[46%] lg:w-[42%] xl:w-[38%] p-5 sm:p-8 md:p-10 flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-[1280px] px-4 md:px-8 text-white h-full flex flex-col justify-end gap-6 sm:gap-8">
            <h2 className="text-left ">PERKS & BENEFITS</h2>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {perks.map((p) => (
                <div
                  key={p.title}
                  className="border border-white/80 bg-black/25 backdrop-blur-[10px] rounded-[6px] w-[140px] h-[100px]"
                >
                  {/* <div className="text-2xl leading-none mb-2 select-none">🤍</div> */}
                  <div className="font-semibold text-sm sm:text-base flex justify-center items-center text-center h-full">
                    {p.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PerksAndBenefits;
