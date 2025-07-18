import React from "react";

function JoinUs() {
  return (
    <div className="w-full Trainherebg pb-[76px] relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20  z-0"></div>
      <div className="w-full max-w-[1280px] mx-auto flex h-full min-h-[666px] items-end px-8">
        <div className="space-y-[24px] relative z-[9]">
          <h2 className="!text-[#fff] leading-[45px] uppercase">
            Ready to Evolve{" "}
          </h2>
          <h4 className="!text-[#fff] ">
            Experience premium features at affordable prices with no hidden fees{" "}
            <br /> Canada’s largest gym offers more space, better amenities and
            a <br />
            supportive community so you can focus on your fitness, not the
            queue.
          </h4>
          <div className="flex gap-6">
            <button className="btnPrimary">JOIN NOW</button>
            <button className="btnSecondary">BOOK A FREE TOUR</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
