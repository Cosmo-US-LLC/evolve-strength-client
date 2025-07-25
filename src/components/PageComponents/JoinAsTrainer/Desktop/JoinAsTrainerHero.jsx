import React, { useState } from "react";

function JoinAsTrainerHero() {
  const [valueHourly, setValueHourly] = useState(50);
  const [sessions, setSessions] = useState(20);
  const handleChange = (e) => {
    setValueHourly(e.target.value);
  };
  const handleChangeSessions = (e) => {
    setSessions(e.target.value);
  };

  return (
    <div className="w-full pb-12 pt-24 md:pt-[120px]">
      <div className="w-full max-w-[1280px] px-4 sm:px-8 mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-[70%] md:space-y-[24px] space-y-[12px] text-left">
            <h1 className="md:max-w-[707px] text-4xl md:text-5xl leading-[52px]  md:leading-[56px] uppercase">
              Looking to Evolve  Your Career?
            </h1>
            <h3 className="text-[#000] leading-[26px] font-[400] w-full md:w-[585px]">
              Giving up a percentage sounds fair until you do the math. Use the
              calculator to see how much your current gym is costing you. <br />
              <br /> At Evolve, you pay a flat fee and keep the rest. Join us
              and feel the difference.
            </h3>
           <h3 className="!text-[#1C1C1C] md:leading-[39px]  !text-[16px] md:!text-[24px] uppercase !font-[700]">You’re Losing Money at Your Current Gym</h3>
          </div>
          <div className="w-full md:max-w-[352px] rounded-[10px] border-[1px] bg-[#fff] border-[#D4D4D4]">
            <div className="py-[12px] rounded-t-[10px] bg-[#000]">
              <h3 className="text-[#fff] text-center leading-[26px]  !font-[500] uppercase">
                Calculation
              </h3>
            </div>
            <div className="px-[32px] space-y-[16px] pt-[24px] pb-[32px]">
              <div className="space-y-[5px]">
                <h5 className="text-[#000]">Your hourly rate</h5>
                <input
                  min="1"
                  max="200"
                  type="range"
                  className="w-full h-2 bg-transparent appearance-none"
                  value={valueHourly}
                  onChange={handleChange}
                  style={{
                    background: `linear-gradient(to right, #4AB04A 0%, #4AB04A ${
                      ((valueHourly - 1) / 199) * 100
                    }%, #ccc ${((valueHourly - 1) / 199) * 100}%, #ccc 100%)`,
                    borderRadius: "8px",
                  }}
                />
                <div className="flex justify-between">
                  <h5 className="text-[#000] !text-[10px]">{valueHourly}</h5>
                  <h5 className="text-[#000] !text-[10px]">200</h5>
                </div>
              </div>
              <div className="space-y-[5px]">
                <h5 className="text-[#000]">Number of sessions per month</h5>
                <input
                  min="1"
                  max="200"
                  type="range"
                  className="w-full h-2 bg-transparent appearance-none"
                  value={sessions}
                  onChange={handleChangeSessions}
                  style={{
                    background: `linear-gradient(to right, #4AB04A 0%, #4AB04A ${
                      ((sessions - 1) / 199) * 100
                    }%, #ccc ${((sessions - 1) / 199) * 100}%, #ccc 100%)`,
                    borderRadius: "8px",
                  }}
                />
                <div className="flex justify-between">
                  <h5 className="text-[#000] !text-[10px]">{sessions}</h5>
                  <h5 className="text-[#000] !text-[10px]">200</h5>
                </div>
              </div>
              <div className="space-y-[5px]">
                <h5 className="text-[#000]">Your current gym split %</h5>
                <div className="flex justify-between space-x-[12px] items-center">
                  <button className="btnPrimary !text-[14px] !rounded-[10px] !py-[8px] !px-[10px]">
                    30%
                  </button>
                  <button className="!border-[1px] !py-[8px] !px-[10px] !rounded-[10px] !border-[#9D9D9D] !bg-[#F7F5F6] !text-[#9D9D9D] !text-[14px] font-[400] btnPrimary">
                    40%
                  </button>
                  <button className="!border-[1px] !py-[8px] !px-[10px] !rounded-[10px] !border-[#9D9D9D] !bg-[#F7F5F6] !text-[#9D9D9D] !text-[14px] font-[400] btnPrimary">
                    50%
                  </button>
                  <button className="!border-[1px] !py-[8px] !px-[10px] !rounded-[10px] !border-[#9D9D9D] !bg-[#F7F5F6] !text-[#9D9D9D] !text-[14px] font-[400] btnPrimary">
                    60%
                  </button>
                  <button className="!border-[1px] !py-[8px] !px-[10px] !rounded-[10px] !border-[#9D9D9D] !bg-[#F7F5F6] !text-[#9D9D9D] !text-[14px] font-[400] btnPrimary">
                    70%
                  </button>
                </div>
              </div>
               <div className="pt-[8px]">
                <h5 className="!font-[300] text-center !text-[12px] text-[#000] leading-[26px]">
                  You’re losing
                </h5>
                <h3 className="!font-[700] leading-[26px] text-center">$1,060/month</h3>
                <h5 className="!font-[300] !text-[12px] text-[#000] text-center leading-[26px]">
                  by staying at your current gym.
                </h5>
                <h5 className="!font-[300] !text-[12px] text-[#000] text-center leading-[12px]">
                  That’s <span className="!font-[600]">$12,720</span> a year
                  going to your gym’s pocket, not yours.
                </h5>
              </div>
            <div className="flex justify-center pt-[8px]">
             <button className="btnPrimary">Start saving</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinAsTrainerHero;
