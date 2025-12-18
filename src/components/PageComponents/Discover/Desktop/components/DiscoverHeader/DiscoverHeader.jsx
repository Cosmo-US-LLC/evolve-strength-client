import React from "react";

const DiscoverHeader = ({ step, STEP, handleBack, locationConfig, onHomeClick }) => {
  if (step === STEP.HERO) return null;

  return (
    <header className="w-full flex items-center justify-between px-6 md:px-12 py-2 bg-[#fff] b border-b-[1px] border-black/10">
      <div className="flex items-center justify-between gap-3 md:gap-4 w-full">
        <button
          type="button"
          onClick={handleBack}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.10)",
            borderRadius: "8px",
          }}
          className="inline-flex items-center justify-center cursor-pointer px-4 py-1.5 text-[16px] text-black  transition-colors duration-200"
        >
          <div className="mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5298 5.47032C10.6703 5.61094 10.7492 5.80157 10.7492 6.00032C10.7492 6.19907 10.6703 6.38969 10.5298 6.53032L5.80983 11.2503H19.9998C20.1987 11.2503 20.3895 11.3293 20.5302 11.47C20.6708 11.6106 20.7498 11.8014 20.7498 12.0003C20.7498 12.1992 20.6708 12.39 20.5302 12.5306C20.3895 12.6713 20.1987 12.7503 19.9998 12.7503H5.80983L10.5298 17.4703C10.6035 17.539 10.6626 17.6218 10.7036 17.7138C10.7446 17.8058 10.7666 17.9051 10.7684 18.0058C10.7702 18.1065 10.7517 18.2065 10.714 18.2999C10.6762 18.3933 10.6201 18.4781 10.5489 18.5494C10.4776 18.6206 10.3928 18.6767 10.2994 18.7144C10.206 18.7522 10.106 18.7707 10.0053 18.7689C9.9046 18.7671 9.80529 18.7451 9.71329 18.7041C9.62129 18.6631 9.53849 18.604 9.46983 18.5303L3.46983 12.5303C3.32938 12.3897 3.25049 12.1991 3.25049 12.0003C3.25049 11.8016 3.32938 11.6109 3.46983 11.4703L9.46983 5.47032C9.61045 5.32987 9.80108 5.25098 9.99983 5.25098C10.1986 5.25098 10.3892 5.32987 10.5298 5.47032Z"
                fill="black"
              />
            </svg>
          </div>{" "}
          Back
        </button>
        <div className="flex justify-center items-center">
          <span className="">
            <img
              className="min-h-[50px]"
              src="/images/logo.svg"
              alt="Discover at"
            />
          </span>
        </div>
        <button
          type="button"
          onClick={onHomeClick}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.10)",
            borderRadius: "8px",
          }}
          className="hidden md:inline-flex items-center justify-center cursor-pointer px-3 py-1.5 text-black text-[16px] transition-colors duration-200"
        >
          <div className="mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 21V13C15 12.7348 14.8946 12.4804 14.7071 12.2929C14.5196 12.1054 14.2652 12 14 12H10C9.73478 12 9.48043 12.1054 9.29289 12.2929C9.10536 12.4804 9 12.7348 9 13V21"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 9.99948C2.99993 9.70855 3.06333 9.4211 3.18579 9.1572C3.30824 8.89329 3.4868 8.65928 3.709 8.47148L10.709 2.47248C11.07 2.16739 11.5274 2 12 2C12.4726 2 12.93 2.16739 13.291 2.47248L20.291 8.47148C20.5132 8.65928 20.6918 8.89329 20.8142 9.1572C20.9367 9.4211 21.0001 9.70855 21 9.99948V18.9995C21 19.5299 20.7893 20.0386 20.4142 20.4137C20.0391 20.7888 19.5304 20.9995 19 20.9995H5C4.46957 20.9995 3.96086 20.7888 3.58579 20.4137C3.21071 20.0386 3 19.5299 3 18.9995V9.99948Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          Home
        </button>
      </div>
    </header>
  );
};

export default DiscoverHeader;

