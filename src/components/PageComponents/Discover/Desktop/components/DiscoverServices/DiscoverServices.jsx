import React from "react";
import { CATEGORY } from "../constants";

const DiscoverServices = ({ onCategorySelect }) => {
  return (
    <main className="">
      <section className=" w-full mx-auto px-4 md:px-8 pt-20 md:pt-24">
        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {/* Wellness card */}
          <button
            type="button"
            onClick={() => onCategorySelect(CATEGORY.WELLNESS)}
            className="group relative overflow-hidden rounded-2xl bg-black text-left shadow-lg hover:shadow-xl transition-all duration-300 Servicecardbg_2"
          >
            <div className="relative p-6 md:p-8 flex flex-col justify-end h-full w-full cursor-pointer min-h-[560px]">
              <div className="mt-5 flex flex-col pb-8 items-center justify-between">
                <h3 className="!text-[64px] !font-[Kanit] !font-semibold uppercase  text-white mb-2">
                  Wellness
                </h3>
                <span className="h-10 w-10 rounded-full  border-[1px] border-[#fff] flex items-center justify-center  group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.2249 4.55876C11.1079 4.67595 11.0421 4.8348 11.0421 5.00043C11.0421 5.16605 11.1079 5.32491 11.2249 5.44209L15.1582 9.37543H3.33323C3.16747 9.37543 3.0085 9.44127 2.89129 9.55849C2.77408 9.6757 2.70823 9.83467 2.70823 10.0004C2.70823 10.1662 2.77408 10.3252 2.89129 10.4424C3.0085 10.5596 3.16747 10.6254 3.33323 10.6254H15.1582L11.2249 14.5588C11.1635 14.616 11.1142 14.685 11.0801 14.7616C11.0459 14.8383 11.0276 14.9211 11.0261 15.005C11.0246 15.0889 11.04 15.1723 11.0715 15.2501C11.1029 15.3279 11.1497 15.3986 11.209 15.458C11.2684 15.5173 11.3391 15.5641 11.4169 15.5955C11.4947 15.627 11.5781 15.6424 11.662 15.6409C11.7459 15.6394 11.8287 15.6211 11.9053 15.5869C11.982 15.5528 12.051 15.5035 12.1082 15.4421L17.1082 10.4421C17.2253 10.3249 17.291 10.1661 17.291 10.0004C17.291 9.8348 17.2253 9.67595 17.1082 9.55876L12.1082 4.55876C11.991 4.44172 11.8322 4.37598 11.6666 4.37598C11.5009 4.37598 11.3421 4.44172 11.2249 4.55876Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </button>

          {/* Trainers card */}
          <button
            type="button"
            onClick={() => onCategorySelect(CATEGORY.TRAINERS)}
            className="group relative overflow-hidden rounded-2xl bg-[#101010] text-left shadow-lg hover:shadow-xl transition-all duration-300 Servicecardbg_1"
          >
            <div className="relative p-6 md:p-8 flex flex-col justify-end h-full cursor-pointer min-h-[456px]">
              <div className="mt-5 flex flex-col pb-8 items-center justify-between">
                <h3 className="!text-[64px] !font-[Kanit] !font-semibold uppercase  text-white mb-2">
                  Training
                </h3>
                <span className="h-10 w-10 rounded-full  border-[1px] border-[#fff] flex items-center justify-center  group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.2249 4.55876C11.1079 4.67595 11.0421 4.8348 11.0421 5.00043C11.0421 5.16605 11.1079 5.32491 11.2249 5.44209L15.1582 9.37543H3.33323C3.16747 9.37543 3.0085 9.44127 2.89129 9.55849C2.77408 9.6757 2.70823 9.83467 2.70823 10.0004C2.70823 10.1662 2.77408 10.3252 2.89129 10.4424C3.0085 10.5596 3.16747 10.6254 3.33323 10.6254H15.1582L11.2249 14.5588C11.1635 14.616 11.1142 14.685 11.0801 14.7616C11.0459 14.8383 11.0276 14.9211 11.0261 15.005C11.0246 15.0889 11.04 15.1723 11.0715 15.2501C11.1029 15.3279 11.1497 15.3986 11.209 15.458C11.2684 15.5173 11.3391 15.5641 11.4169 15.5955C11.4947 15.627 11.5781 15.6424 11.662 15.6409C11.7459 15.6394 11.8287 15.6211 11.9053 15.5869C11.982 15.5528 12.051 15.5035 12.1082 15.4421L17.1082 10.4421C17.2253 10.3249 17.291 10.1661 17.291 10.0004C17.291 9.8348 17.2253 9.67595 17.1082 9.55876L12.1082 4.55876C11.991 4.44172 11.8322 4.37598 11.6666 4.37598C11.5009 4.37598 11.3421 4.44172 11.2249 4.55876Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </button>
        </div>
      </section>
    </main>
  );
};

export default DiscoverServices;

