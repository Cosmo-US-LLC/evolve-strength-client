import React from "react";
import heroVideo from "../../../../assets/videos/ExplorePages.webm";

function Hero({ title }) {
  return (
    <div>
      <div className="relative overflow-hidden w-full h-[70vh] md:h-[100vh] bg-[#000000]">
         <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectFit: "cover", objectPosition: "bottom" }}
        >
          {/* <source
            src={heroVideo}
            type="video/webm"
          /> */}
          <source
            src={"/assets/videos/ES_waitlist_desktop.webm"}
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" />
        <div className="max-w-[1280px] md:px-8 px-4 md:pb-[135px] max-md:pb-[24px] mx-auto w-full h-full relative z-2 ">
          <div className="relative z-2 flex flex-col items-start justify-end h-full">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 pb-[20px]">
              <div className="flex items-center gap-2 text-white text-[12px] md:text-[14px] uppercase leading-[24px] bg-[#4ab04a] px-4 py-1 rounded-full font-[Kanit]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-95"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                </span>
                New Location
              </div>
              {/* <div className="text-white text-[12px] md:text-[14px] font-[400] uppercase leading-[24px] bg-[#20202066] backdrop-blur-[14px] border border-[#ADADAD] px-4 py-1 rounded-full font-[Kanit]">
                OPENING MAY 25TH
              </div> */}

            </div>
            <h1
              className="text-[#FFFFFF] !text-[36px] md:!text-[70px] leading-[32px] md:leading-[59px] max-w-[740px] uppercase mb-4 md:mb-6"
            >
              South Edmonton,{" "}
              <span className="text-[#4ab04a]">meet your new gym.</span>
            </h1>
              {/* // dangerouslySetInnerHTML={{ __html: title }} */}

            <h3 className="text-[#FFFFFF] !text-[16px] !font-[300] !leading-[20px] !md:leading-[24px] mb-8 max-w-[350px] md:max-w-[606px] !font-[Kanit]">
              Book a free tour before July 1st for a chance to win a lifetime membership.
            </h3>
            <div className="flex gap-2 md:gap-4 flex-col md:flex-row items-start">
              <a href="https://evolvestrength.ca/tour-south-edmonton-common" target="_blank" rel="noopener noreferrer">
                <button className="btnPrimary uppercase">
                  Book A Free Tour
                </button>
              </a>
            </div>
            {/* <div className="flex gap-4">
              <a href="/book-a-tour">
                <button className="btnPrimary">BOOK A FREE TOUR</button>
              </a>
              <a href="/join-now/">
                <button className="btnSecondary">JOIN NOW</button>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;


// import React from "react";

// function Hero() {
//   return (
//     <div>
//     <div className="relative heroSection md:h-[700px] max-md:h-[404px]">
//       {/* <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" /> */}
//       <div className="max-w-[1280px] md:px-8 px-4 md:pb-[135px] max-md:pb-[24px] mx-auto w-full h-full">
//         <div className="relative z-2 flex  flex-col items-start justify-end h-full">
//           <h1 className="text-[#FFFFFF] uppercase leading-[79px]">Evolve</h1>
//           <h3 className="text-[#FFFFFF] !font-[400] leading-[24px] md:mb-7 max-md:mb-[16px]">
//             More Space. More Possibilities.
//           </h3>
//           <button className="btnPrimary">Book a Free Tour</button>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Hero;
