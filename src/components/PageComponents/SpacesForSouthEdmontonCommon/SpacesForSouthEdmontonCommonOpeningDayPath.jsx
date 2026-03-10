import React from "react";
import { Link } from "react-router-dom";

function Step({ number, title, description, className = "" }) {
  return (
    <div
      className={`relative flex flex-col items-center gap-7 p-7 ${className}`}
    >
      <div className="border-2 border-white rounded-full size-[85px] flex items-center justify-center">
        <span className="text-white font-bold text-[36px] leading-none">
          {number}
        </span>
      </div>

      <h3 className="text-white text-[24px] !font-[Kanit] leading-[24px] tracking-[-0.72px] font-medium text-center">
        {title}
      </h3>

      <p className="text-white !font-[Kanit] text-[18px] leading-[24px] font-light text-center max-w-[260px]">
        {description}
      </p>
    </div>
  );
}

function MobileArrow1Svg({ className = "" }) {
  return (
    <svg
      preserveAspectRatio="none"
      width="124.694"
      height="26"
      viewBox="0 0 124.694 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g clipPath="url(#clip0_0_5)">
        <path
          d="M0.353516 22.8407C0.353516 24.4036 1.62052 25.6706 3.18345 25.6706C4.74638 25.6706 6.01336 24.4036 6.01336 22.8407C6.01336 21.2777 4.74638 20.0107 3.18345 20.0107C1.62052 20.0107 0.353516 21.2777 0.353516 22.8407ZM124.694 22.8407L122.072 17.3027L118.587 22.3417L124.694 22.8407ZM3.55666 23.2178C20.0174 6.93014 66.0106 -15.8177 120.471 20.5648L121.06 19.6823C66.0939 -17.038 19.5498 5.8999 2.81024 22.4634L3.55666 23.2178Z"
          fill="#4AB04A"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_5">
          <rect width="124.694" height="26" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function MobileVectorArrowSvg({ className = "" }) {
  return (
    <svg
      preserveAspectRatio="none"
      width="124.113"
      height="70.381"
      viewBox="0 0 124.113 70.381"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M1.96002 20.8679C3.37028 20.49 4.81982 21.3269 5.19772 22.7372C5.57562 24.1474 4.73868 25.597 3.32844 25.9749C1.91818 26.3528 0.468609 25.5159 0.0907346 24.1056C-0.287145 22.6954 0.549765 21.2458 1.96002 20.8679ZM123.372 70.381L118.827 66.9019L124.113 64.7055L123.372 70.381ZM2.35206 23.021C22.3176 8.45273 38.0426 1.79637 49.8206 0.322422C61.6166 -1.15377 69.5017 2.57076 73.6252 8.79965C77.7298 15.0002 78.0218 23.5581 74.9134 31.5981C71.8016 39.6481 65.2657 47.2328 55.622 51.5267L55.2185 50.6206C64.6149 46.4376 70.9684 39.0551 73.989 31.2406C77.0136 23.4161 76.681 15.2123 72.7984 9.34687C68.9342 3.50967 61.4684 -0.136112 49.9436 1.30609C38.4015 2.75052 22.8365 9.30127 2.9364 23.8218L2.35206 23.021ZM55.622 51.5267C54.0993 52.2042 52.8705 52.5899 51.9203 52.7113C50.9944 52.8298 50.1968 52.7128 49.7131 52.1943C49.2174 51.663 49.2233 50.9016 49.438 50.1626C49.658 49.4053 50.1339 48.5259 50.807 47.5839C53.4975 43.8174 59.6631 38.6015 67.5542 35.3169C75.4572 32.0271 85.1505 30.6509 94.8666 34.6665C104.583 38.6823 114.229 48.0525 122.116 66.0671L121.208 66.4647C113.387 48.6005 103.894 39.4702 94.488 35.5826C85.0816 31.6949 75.6703 33.0122 67.9349 36.2321C60.1876 39.4569 54.1805 44.5664 51.6135 48.1601C50.9721 49.0581 50.5661 49.8335 50.3897 50.4392C50.2082 51.0637 50.3039 51.3745 50.4382 51.5182C50.584 51.6744 50.9562 51.8355 51.7944 51.7279C52.6078 51.6238 53.7359 51.2808 55.2185 50.6206L55.622 51.5267Z"
        fill="#4AB04A"
      />
    </svg>
  );
}

function MobileStep({ number, title, description, children, className = "" }) {
  return (
    <div
      className={`relative flex flex-col gap-5 items-center p-[28.8px] w-full ${className}`}
      data-name="Container"
    >
      <div className="border-2 border-white rounded-full w-[63px] py-3 flex items-center justify-center">
        <span className="text-white font-bold text-[36.2px] leading-[36.2px]">
          {number}
        </span>
      </div>

      <h3 className="text-white !text-[24px] leading-[24px] tracking-[-0.72px] font-medium text-center">
        {title}
      </h3>

      <p className="text-white text-[14px] leading-[1.25] font-light text-center w-full">
        {description}
      </p>

      {children}
    </div>
  );
}

function ArrowCurve1() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="hidden lg:block absolute right-[-120px] top-[30px] w-[230px] h-[42px]"
      width="202"
      height="42"
      viewBox="0 0 202 42"
      fill="none"
    >
      <g clipPath="url(#clip0_14338_780)">
        <path
          d="M0.570312 36.8937C0.570312 39.4184 2.61701 41.4651 5.14174 41.4651C7.66647 41.4651 9.71314 39.4184 9.71314 36.8937C9.71314 34.369 7.66647 32.3222 5.14174 32.3222C2.61701 32.3222 0.570312 34.369 0.570312 36.8937ZM201.427 36.8937L197.193 27.9478L191.563 36.0878L201.427 36.8937ZM5.74462 37.503C32.335 11.1921 106.632 -25.5544 194.605 33.2174L195.558 31.7918C106.766 -27.5256 31.5796 9.5279 4.53886 36.2844L5.74462 37.503Z"
          fill="#4AB04A"
        />
      </g>
      <defs>
        <clipPath id="clip0_14338_780">
          <rect width="201.429" height="42" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ArrowCurve2() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="hidden lg:block absolute right-[-120px] top-[70px] w-[230px] h-[42px]"
      width="198"
      height="42"
      viewBox="0 0 198 42"
      fill="none"
    >
      <g clipPath="url(#clip0_14338_792)">
        <path
          d="M0.558594 5.0757C0.558594 2.60147 2.56436 0.595703 5.03859 0.595703C7.51283 0.595703 9.51857 2.60147 9.51857 5.0757C9.51857 7.54994 7.51283 9.55569 5.03859 9.55569C2.56436 9.55569 0.558594 7.54994 0.558594 5.0757ZM197.399 5.0757L193.249 13.8427L187.731 5.86551L197.399 5.0757ZM5.62942 4.4786C31.688 30.2633 104.499 66.2748 190.713 8.67856L191.646 10.0755C104.631 68.2067 30.9477 31.8942 4.44777 5.6728L5.62942 4.4786Z"
          fill="#4AB04A"
        />
      </g>
      <defs>
        <clipPath id="clip0_14338_792">
          <rect width="197.4" height="42" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ArrowCurve3() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="240"
      height="137"
      viewBox="0 0 240 137"
      className="hidden lg:block absolute right-[-150px] top-[40px] w-[240px] h-[150px]"
      fill="none"
    >
      <g clipPath="url(#clip0_14338_804)">
        <path
          d="M4.6527 40.2479C7.36237 39.5219 10.1475 41.1299 10.8736 43.8396C11.5997 46.5492 9.99163 49.3345 7.28198 50.0606C4.57231 50.7866 1.7871 49.1786 1.06106 46.4688C0.334998 43.7592 1.94304 40.974 4.6527 40.2479ZM237.934 135.382L229.202 128.698L239.357 124.478L237.934 135.382ZM5.40597 44.3848C43.7678 16.3934 73.9817 3.6039 96.6121 0.771845C119.277 -2.0645 134.427 5.09181 142.35 17.06C150.237 28.9738 150.798 45.4169 144.825 60.8649C138.846 76.3323 126.288 90.9054 107.759 99.1557L106.984 97.4148C125.038 89.3775 137.245 75.1928 143.049 60.1781C148.861 45.1441 148.222 29.3812 140.762 18.1114C133.337 6.89583 118.992 -0.109183 96.8483 2.66187C74.6714 5.4372 44.7649 18.0238 6.52871 45.9236L5.40597 44.3848ZM107.759 99.1557C104.833 100.458 102.472 101.199 100.646 101.432C98.8673 101.66 97.335 101.435 96.4054 100.439C95.4531 99.4176 95.4645 97.9548 95.8769 96.5348C96.2997 95.0798 97.214 93.3901 98.5073 91.58C103.677 84.3431 115.524 74.3212 130.685 68.0102C145.87 61.6893 164.495 59.0449 183.164 66.7606C201.832 74.4765 220.366 92.4804 235.521 127.094L233.776 127.858C218.748 93.5333 200.508 75.9905 182.436 68.5209C164.363 61.0509 146.28 63.5821 131.417 69.7687C116.531 75.9649 104.989 85.7823 100.057 92.6872C98.8245 94.4126 98.0445 95.9024 97.7054 97.0662C97.3569 98.2662 97.5407 98.8633 97.7988 99.1395C98.0788 99.4395 98.794 99.749 100.404 99.5424C101.967 99.3424 104.135 98.6833 106.984 97.4148L107.759 99.1557Z"
          fill="#4AB04A"
        />
      </g>
      <defs>
        <clipPath id="clip0_14338_804">
          <rect width="240" height="136.19" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function SpacesForSouthEdmontonCommonOpeningDayPath() {
  const handleScrollToForm = () => {
    const el = document.getElementById("join-south-common-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section
      className="w-full flex flex-col items-start justify-center pb-20"
      data-name="Section"
      data-node-id="14338:760"
    >
      <div
        className="w-full max-w-[1420px] mx-auto px-4 md:px-8"
        data-name="Container"
        data-node-id="14338:761"
      >
        <div
          className="bg-black w-full md:rounded-[32px] rounded-[16px] px-6 py-14 md:py-12 flex flex-col items-center gap-8 md:gap-12"
          data-name="Background"
          data-node-id="14338:762"
        >
          <div className="flex flex-col gap-5 items-center text-center max-w-[560px] w-full">
            {/* Desktop/tablet title */}
            <h2
              className="hidden md:block text-[#f1f1f1] uppercase"
              data-node-id="14338:764"
            >
              The Path to Opening Day
            </h2>
            {/* Mobile title (2 lines like Figma) */}
            <h2
              className="md:hidden text-[#f1f1f1] uppercase text-[32px] leading-[39px] font-bold max-w-[355px]"
              data-node-id="14483:3451"
            >
              <span className="block">The Path to</span>
              <span className="block">Opening Day</span>
            </h2>
            <p
              className="text-white !font-[Kanit] font-light text-[14px] md:text-[18px] leading-[1.25] md:leading-[26px]"
              data-node-id="14338:765"
            >
              We follow a strict vetting and onboarding process to ensure the
              best mix of wellness services for our members.
            </p>
          </div>

          <div
            className="relative w-full"
            data-name="Container"
            data-node-id="14338:766"
          >
            <div className="hidden lg:grid grid-cols-[1fr_1fr_1fr_auto] gap-0 items-start">
              <div className="relative">
                <Step
                  number="1"
                  title="Apply"
                  description="Submit your inquiry for a qualification review to ensure a synergistic mix of services in the facility."
                />
                <ArrowCurve1 />
              </div>

              <div className="relative">
                <Step
                  number="2"
                  title="Design"
                  description="Finalize your rental agreement and customize your suite layout to fit your specific needs."
                />
                <ArrowCurve2 />
              </div>

              <div className="relative">
                <Step
                  number="3"
                  title="Launch"
                  description="Open in May 2026 and immediately engage with an established member base."
                />
                <ArrowCurve3 />
              </div>

              <div className="flex flex-col items-center justify-end h-full pb-8 px-4">
                <div
                  className="flex flex-col gap-2 items-center justify-center"
                  data-name="CTA with text"
                  data-node-id="14471:1536"
                >
                  <button
                    onClick={handleScrollToForm}
                    className="btnPrimary w-fit text-center"
                    data-name="CTA"
                    data-node-id="14471:1537"
                  >
                    Inquire About Suites
                  </button>
                  <p
                    className="text-[#fff] !font-[Kanit] text-[16px] leading-[24px] font-normal text-center"
                    data-node-id="14471:1539"
                  >
                    Limited suites are available
                  </p>
                </div>
              </div>
            </div>

            {/* Tablet (md->lg): keep simple 3-up without arrows */}
            <div className="hidden md:grid lg:hidden grid-cols-3 gap-4 items-start">
              <Step
                number="1"
                title="Apply"
                description="Submit your inquiry for a qualification review to ensure a synergistic mix of services in the facility."
              />
              <Step
                number="2"
                title="Design"
                description="Finalize your rental agreement and customize your suite layout to fit your specific needs."
              />
              <Step
                number="3"
                title="Launch"
                description="Open in May 2026 and immediately engage with an established member base."
              />

              <div className="col-span-3 flex flex-col items-center justify-center pt-2">
                <button
                  onClick={handleScrollToForm}
                  className="btnPrimary w-fit text-center"
                >
                  Inquire About Suites
                </button>
                <p className="text-white mt-2 text-[16px] leading-[24px] font-normal text-center">
                  Limited suites are available
                </p>
              </div>
            </div>

            {/* Mobile (Figma node 14483:3449): use Figma arrow SVGs */}
            <div
              className="md:hidden w-full max-w-[355px] mx-auto relative"
              data-node-id="14483:3611"
            >
              <div className="flex flex-col items-center gap-[114px] w-full relative">
                <div className="flex flex-col gap-[30px] items-start w-full">
                  <MobileStep
                    number="1"
                    title="Apply"
                    description="Submit your inquiry for a qualification review to ensure a synergistic mix of services in the facility."
                    data-node-id="14483:3612"
                  >
                    <div
                      className="absolute -translate-x-1/2 flex h-[142.381px] items-center justify-center w-[26px]"
                      style={{ left: "calc(50% + 94.5px)", top: "208px" }}
                      aria-hidden="true"
                    >
                      <div style={{ transform: "rotate(90deg)" }}>
                        <MobileArrow1Svg className="block" />
                      </div>
                    </div>
                  </MobileStep>

                  <MobileStep
                    number="2"
                    title="Design"
                    description="Finalize your rental agreement and customize your suite layout to fit your specific needs."
                    data-node-id="14483:3624"
                  >
                    <div
                      className="absolute -translate-x-1/2 flex h-[142.381px] items-center justify-center w-[26px]"
                      style={{ left: "calc(50% - 84.5px)", top: "218px" }}
                      aria-hidden="true"
                    >
                      <div style={{ transform: "rotate(90deg) scaleY(-1)" }}>
                        <MobileArrow1Svg className="block" />
                      </div>
                    </div>
                  </MobileStep>

                  <MobileStep
                    number="3"
                    title="Launch"
                    description="Open in May 2026 and immediately engage with an established member base."
                    data-node-id="14483:3636"
                  />
                </div>

                <div className="flex flex-col gap-2 items-start relative">
                  <button
                    onClick={handleScrollToForm}
                    className="bg-[#4ab04a] px-5 py-3 rounded-[6px] text-white uppercase font-medium text-[14px] leading-[16px] text-center hover:opacity-90 transition-opacity"
                    data-node-id="14483:3657"
                  >
                    Inquire About Suites
                  </button>
                  <p className="text-white text-[16px] leading-[24px] font-normal text-center">
                    Limited suites are available
                  </p>
                </div>

                {/* Figma vector arrow near CTA */}
                <div
                  className="absolute"
                  style={{
                    left: "214px",
                    top: "732px",
                    width: "113.378px",
                    height: "141.765px",
                    transform: "rotate(66.94deg)",
                    transformOrigin: "top left",
                  }}
                  aria-hidden="true"
                >
                  <MobileVectorArrowSvg className="block w-[124.113px] h-[70.381px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpacesForSouthEdmontonCommonOpeningDayPath;
