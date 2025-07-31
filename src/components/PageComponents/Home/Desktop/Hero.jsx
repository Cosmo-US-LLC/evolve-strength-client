// import React from "react";

// function Hero() {
//   return (
//     <div>
//       <div className="relative overflow-hidden w-full h-[100vh]">
  
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//           style={{
//             width: "100vw",
//             height: "100vh",
//             objectFit: "cover",
//             objectPosition: "bottom",
//           }}
//         >
//           <source src="/videos/HomePage.webm" type="video/webm" />
//           Your browser does not support the video tag.
//         </video>

      
//         <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-1" />

//         <div className="max-w-[1280px] md:px-8 px-4 md:pb-[135px] max-md:pb-[24px] mx-auto w-full h-full relative z-2">
//           <div className="relative z-2 flex flex-col items-start justify-end h-full">
//             <h1 className="text-[#FFFFFF] uppercase leading-[79px]">Evolve</h1>
//             <h3 className="text-[#FFFFFF] !font-[400] leading-[24px] md:mb-7 max-md:mb-[16px]">
//               More Space. More Possibilities.
//             </h3>
//             <button className="btnPrimary">Book a Free Tour</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

import React from "react";

function Hero() {
  return (
    <div>
    <div className="relative heroSection md:h-[700px] max-md:h-[404px]">
      {/* <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" /> */}
      <div className="max-w-[1280px] md:px-8 px-4 md:pb-[135px] max-md:pb-[24px] mx-auto w-full h-full">
        <div className="relative z-2 flex  flex-col items-start justify-end h-full">
          <h1 className="text-[#FFFFFF] uppercase leading-[79px]">Evolve</h1>
          <h3 className="text-[#FFFFFF] !font-[400] leading-[24px] md:mb-7 max-md:mb-[16px]">
            More Space. More Possibilities.
          </h3>
          <button className="btnPrimary">Book a Free Tour</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Hero;
