import React from "react";
import { Link } from "react-router-dom";
import heroVideo from "../../../../public/assets/videos/ES_waitlist_desktop.webm";

function PresaleEdmontonSouthCommonHero() {
  return (
    <div>
      <div className="relative overflow-hidden w-full h-[96vh] md:h-[100vh]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectFit: "cover", objectPosition: "bottom" }}
        >
          <source src={heroVideo} type="video/webm" />
          Your browser does not support the video tag.
        </video>

        <div className="max-w-[1280px] md:px-8 px-4 md:pb-0 max-md:pb-[24px] mx-auto w-full h-full relative z-2">
          <div className="relative z-2 flex flex-col items-start justify-center h-full">
            <div className="text-[#FFFFFF] text-[16px] font-[600] backdrop-blur-[15px] uppercase leading-[24px] mb-6 bg-[#20202066] md:!font-[70px] border border-[#ADADAD] px-4 py-2 rounded-[8px]">
              Evolve Strength South Edmonton Common
            </div>
            <h1 className="text-[#FFFFFF] uppercase max-w-[707px] leading-[50px] md:leading-[66px] mb-6 font-[600]">
              Lock Your <br /> Founder Rate for <br />{" "}
              <span className="text-[#4ab04a]">2 Years at $29.99</span>
            </h1>{" "}
            <h3 className="text-[#FFFFFF] !text-[16px] !font-[400] !leading-[24px] !md:leading-[24px] mb-8 max-w-[350px] md:max-w-[606px]">
              Limited to 500 Members Only | Fully Refundable Deposit
            </h3>
            <div className="flex gap-3 flex-col md:flex-row md:items-center items-start">
              <Link to="/founder-offer-payment">
                {" "}
                <button className="btnPrimary flex items-center !py-[14px] !px-[20px] gap-2 md:gap-[10px] uppercase">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M6.83398 9.83309C6.83409 9.62432 6.8902 9.41942 6.99648 9.23973C7.10275 9.06005 7.2553 8.91217 7.43819 8.81153C7.62109 8.71088 7.82764 8.66116 8.03631 8.66754C8.24497 8.67392 8.4481 8.73617 8.6245 8.8478C8.80091 8.95943 8.94413 9.11635 9.03923 9.30219C9.13433 9.48803 9.17782 9.69598 9.16517 9.90436C9.15252 10.1127 9.08419 10.3139 8.96731 10.4869C8.85042 10.6598 8.68927 10.7983 8.50065 10.8878V11.3331C8.50065 11.4657 8.44797 11.5929 8.3542 11.6866C8.26044 11.7804 8.13326 11.8331 8.00065 11.8331C7.86804 11.8331 7.74087 11.7804 7.6471 11.6866C7.55333 11.5929 7.50065 11.4657 7.50065 11.3331V10.8878C7.30109 10.7931 7.1325 10.6437 7.01448 10.457C6.89647 10.2703 6.83388 10.054 6.83398 9.83309Z"
                      fill="white"
                    />
                    <path
                      d="M4.83398 4.66667C4.83398 3.82681 5.16761 3.02136 5.76148 2.4275C6.35535 1.83363 7.1608 1.5 8.00065 1.5C8.8405 1.5 9.64596 1.83363 10.2398 2.4275C10.8337 3.02136 11.1673 3.82681 11.1673 4.66667V6.23733C11.394 6.276 11.6033 6.33733 11.8027 6.43933C12.2728 6.67897 12.655 7.06121 12.8947 7.53133C13.046 7.828 13.1087 8.148 13.1387 8.512C13.1673 8.866 13.1673 9.30333 13.1673 9.84533V10.8213C13.1673 11.3633 13.1673 11.8007 13.1387 12.1547C13.1087 12.5187 13.0453 12.8387 12.8947 13.1347C12.6551 13.6054 12.2726 13.9881 11.802 14.228C11.506 14.3787 11.186 14.4413 10.822 14.4713C10.468 14.5 10.0307 14.5 9.48865 14.5H6.51265C5.97065 14.5 5.53332 14.5 5.17932 14.4713C4.81532 14.4413 4.49532 14.378 4.19932 14.2273C3.7286 13.9878 3.34585 13.6052 3.10598 13.1347C2.95532 12.8387 2.89265 12.5187 2.86265 12.1547C2.83398 11.8007 2.83398 11.3633 2.83398 10.8213V9.84533C2.83398 9.30333 2.83398 8.866 2.86265 8.512C2.89265 8.148 2.95598 7.828 3.10665 7.532C3.34623 7.06128 3.72874 6.67854 4.19932 6.43867C4.39943 6.33975 4.61344 6.27186 4.83398 6.23733V4.66667ZM10.1673 4.66667C10.1673 4.09203 9.93904 3.54093 9.53272 3.1346C9.12639 2.72827 8.57529 2.5 8.00065 2.5C7.42602 2.5 6.87492 2.72827 6.46859 3.1346C6.06226 3.54093 5.83398 4.09203 5.83398 4.66667V6.16933C6.03976 6.16711 6.26598 6.16622 6.51265 6.16667H9.48865C9.73576 6.16622 9.96199 6.16711 10.1673 6.16933V4.66667ZM5.26065 7.192C4.95865 7.21667 4.78465 7.26333 4.65332 7.33C4.37083 7.47385 4.14117 7.70351 3.99732 7.986C3.93065 8.11733 3.88398 8.29133 3.85932 8.594C3.83465 8.902 3.83398 9.298 3.83398 9.86667V10.8C3.83398 11.368 3.83398 11.7647 3.85932 12.0733C3.88398 12.3753 3.93065 12.5493 3.99732 12.6813C4.14132 12.9633 4.37065 13.1927 4.65332 13.3367C4.78465 13.4033 4.95865 13.45 5.26132 13.4747C5.56932 13.4993 5.96598 13.5 6.53398 13.5H9.46732C10.036 13.5 10.432 13.5 10.7407 13.4747C11.0427 13.4493 11.2167 13.4033 11.3487 13.3367C11.6307 13.1927 11.86 12.9633 12.004 12.6813C12.0707 12.5493 12.1173 12.3753 12.142 12.0727C12.1667 11.7647 12.1673 11.368 12.1673 10.8V9.86667C12.1673 9.298 12.1673 8.902 12.142 8.59333C12.1167 8.29133 12.0707 8.11733 12.004 7.98533C11.8602 7.70319 11.6308 7.47379 11.3487 7.33C11.2167 7.26333 11.0427 7.21667 10.74 7.192C10.432 7.16733 10.0353 7.16667 9.46732 7.16667H6.53398C5.96598 7.16667 5.56932 7.16667 5.26065 7.192Z"
                      fill="white"
                    />
                  </svg>
                  Lock My Rate Now
                </button>
              </Link>
              <p className="text-[#FFFFFF] !text-[14px] !font-[400] font-[Kanit] leading-[24px] md:leading-[24px]  max-w-[250px] md:max-w-[190px]">
                CA $149 deposit applies toward your membership
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PresaleEdmontonSouthCommonHero;

// import React from "react";
// import { Link } from "react-router-dom";

// function PresaleEdmontonSouthCommonHero() {
//   return (
//     <div className="relative personalTrainingHeroSection">
//       <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/50" />
//       <div className="max-w-[1280px] px-4 md:px-8 pb-[60px] md:pb-[80px] mx-auto w-full h-full">
//         <div className="relative z-2 flex flex-col items-start justify-end h-full pt-16 md:pt-0">
//           <h1 className="text-[#FFFFFF] uppercase max-w-[707px] leading-[50px] md:leading-[56px] mb-5 font-bold">
//             Evolve Strength Edmonton South Common
//           </h1>
//           <h3 className="text-[#FFFFFF] !font-[400] leading-[24px] md:leading-[24px] mb-6 max-w-[350px] md:max-w-[606px]">
//             Join the presale and lock in the lowest rate ever. Limited spots
//             available.
//           </h3>
//           <div className="flex gap-3 mb-5">
//             <Link to="/presale-edmonton-south-common#lock-my-rate">
//               <button className="btnPrimary">Lock My Rate Now</button>
//             </Link>
//             <Link to="/locations/edmonton-south-common-waitlist">
//               <button className="btnSecondary">Join Waitlist</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PresaleEdmontonSouthCommonHero;
