import React from "react";
import { Link } from "react-router-dom";
import heroVideo from "../../../../public/assets/videos/ES_waitlist_desktop.webm";
import { Lock } from "lucide-react";

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

        <div className="max-w-[1280px] md:px-8 px-4 md:pb-[55px] max-md:pb-[24px] mx-auto w-full h-full relative z-2">
          <div className="relative z-2 flex flex-col items-start justify-end h-full">
            <div className="text-[#FFFFFF] text-[16px] font-[600] backdrop-blur-[15px] uppercase leading-[24px] mb-6 bg-[#20202066] border border-[#ADADAD] px-4 py-2 rounded-[8px]">
              Evolve Strength South Edmonton Common
            </div>
            <h1 className="text-[#FFFFFF] uppercase max-w-[707px] leading-[50px] md:leading-[66px] mb-6 font-[600]">
              Lock Your <br /> Founder Rate for <br />{" "}
              <span className="text-[#4ab04a]">2 Years at $29.99</span>
            </h1>{" "}
            <h3 className="text-[#FFFFFF] !font-[400] !leading-[24px] !md:leading-[24px] mb-8 max-w-[350px] md:max-w-[606px]">
              Limited to 500 Members Only | Fully Refundable Deposit
            </h3>
            <div className="flex gap-3 flex-col md:flex-row md:items-center items-start">
              <Link to="/founder-offer-payment">
                {" "}
                <button className="btnPrimary flex items-center gap-2 md:gap-[10px] uppercase">
                  <Lock className="w-4 h-4 text-white" />
                  Lock My Rate Now
                </button>
              </Link>
              <p className="text-[#FFFFFF] !text-[16px] !font-[400] font-[Kanit] leading-[24px] md:leading-[24px]  max-w-[250px] md:max-w-[206px]">
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
