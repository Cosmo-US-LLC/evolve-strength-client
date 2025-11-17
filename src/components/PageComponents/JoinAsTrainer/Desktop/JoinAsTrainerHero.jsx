import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function JoinAsTrainerHero(onSelectOption) {
  const [valueHourly, setValueHourly] = useState(50);
  const [sessions, setSessions] = useState(20);
  const [gymSplit, setGymSplit] = useState(30);

  const [monthlyLoss, setMonthlyLoss] = useState(0);
  const [yearlyLoss, setYearlyLoss] = useState(0);

  const handleChange = (e) => {
    setValueHourly(Number(e.target.value));
  };

  const handleChangeSessions = (e) => {
    setSessions(Number(e.target.value));
  };

  useEffect(() => {
    const monthly = valueHourly * sessions * (gymSplit / 100);
    const yearly = monthly * 12;
    setMonthlyLoss(monthly);
    setYearlyLoss(yearly);
  }, [valueHourly, sessions, gymSplit]);

  const gymSplitOptions = [30, 40, 50, 60, 70];

  return (
    <div className="w-full pb-12 pt-24 md:pt-[120px] bg-black">
      <div className="w-full max-w-[1280px] px-4 sm:px-8 mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-10">
          <div className="w-full md:w-[60%] md:space-y-[24px] space-y-[12px] text-left relative">
            <h2 className="md:max-w-[707px] !text-[40px] md:!text-[70px] leading-[56px] md:!leading-[56px] uppercase text-[#fff]">
              Evolve Your Career, Keep Your Earnings.
            </h2>
            <h3 className="text-white leading-[24px] !font-[300] w-full md:max-w-[520px]">
              You’ve worked too hard to give up a piece of every session Use our
              calculator to find out how much more you could be making with
              Evolve.
            </h3>
            <h3 className="text-white !font-[300] leading-[24px] w-full md:w-[585px]">
              Flat rates. No cuts. Total freedom.
            </h3>
            <div className="flex md:flex-row flex-col w-full items-start md:justify-between">
              <h3 className="text-white md:leading-[39px] !text-[16px] md:!text-[22px] uppercase !font-[700]">
                You’re Losing Money at Your Current Gym
              </h3>
              <img
                src="https://evolve-strength.tor1.digitaloceanspaces.com/media/1762430579613-b68b0393-698b-46a0-9e7d-225cd5dbf940.svg"
                alt="Animated graphic"
                className="md:hidden w-[31px]  ml-[48px] mt-[14px]"
              />
              <img
                src="https://evolve-strength.tor1.digitaloceanspaces.com/media/1762430416767-8aad447b-4802-4e62-ace8-1760aab6a6f6.png"
                alt="Animated graphic"
                className="max-md:hidden   transform scale-y-[-1] md:scale-y-[1.2] origin-center"
              />
            </div>
          </div>
          <div className="w-full md:w-[40%]   rounded-[10px] border-[1px] bg-[#1a1a1a] border-[#2e2e2e]">
            <div className="py-[18px] rounded-t-[10px] bg-[#2e2e2e]">
              <h2 className="text-white text-center leading-[26px]  !font-[500] uppercase">
                Calculation
              </h2>
            </div>
            <div className="px-[32px] space-y-[16px] pt-[24px] pb-[32px]">
              <div className="space-y-[5px]">
                <h3 className="text-[#fff]">Your hourly rate</h3>
                <input
                  min="1"
                  max="200"
                  type="range"
                  className="w-full h-2 bg-transparent appearance-none range-evolve"
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
                  <h3 className="text-[#fff]">{valueHourly}</h3>
                  <h3 className="text-[#fff]">200</h3>
                </div>
              </div>
              <div className="space-y-[5px] ">
                <h3 className="text-[#fff]">Number of sessions per month</h3>
                <input
                  min="1"
                  max="200"
                  type="range"
                  className="w-full h-2 bg-transparent appearance-none range-evolve"
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
                  <h3 className="text-[#fff]">{sessions}</h3>
                  <h3 className="text-[#fff]">200</h3>
                </div>
              </div>
              <div className="space-y-[5px]">
                <h3 className="text-[#fff]">Your current gym split %</h3>
                <div className="flex justify-between space-x-[1px] items-center">
                  {gymSplitOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setGymSplit(option)}
                      className={`md:!py-[14px] !py-[8px] md:!px-[16px] !px-[10px] !rounded-[10px] md:text-[20px] text-[16px] font-[500] ${
                        gymSplit === option
                          ? "!bg-[#4AB04A] !text-white"
                          : "!border-[1px] !border-[#9D9D9D] !bg-[#1a1a1a] !text-[#9D9D9D]"
                      }`}
                    >
                      {option}%
                    </button>
                  ))}
                </div>
              </div>
              <div className="pt-[8px]">
                <h5 className="!font-[300] text-center !text-[16px] text-white leading-[26px]">
                  You’re losing
                </h5>
                <h3 className="!font-[700] leading-[26px] text-center text-white">
                  $
                  {monthlyLoss.toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                  /month
                </h3>
                <h5 className="!font-[300] !text-[14px] text-white text-center leading-[26px]">
                  by staying at your current gym.
                </h5>
                <h5 className="!font-[300] !text-[14px] text-white text-center leading-[12px]">
                  That’s{" "}
                  <span className="text-white text-[16px] font-[500] font-[kanit]">
                    $
                    {yearlyLoss.toLocaleString(undefined, {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </span>{" "}
                  a year going to your gym’s pocket, not yours.
                </h5>
              </div>
              <div className="flex justify-center pt-[8px]">
                <Link to="/trainer-form">
                  <button
                    className="btnPrimary bg-[#4AB04A] hover:brightness-110 text-white"
                    onClick={() => onSelectOption("apply")}
                  >
                    Start Saving
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinAsTrainerHero;
