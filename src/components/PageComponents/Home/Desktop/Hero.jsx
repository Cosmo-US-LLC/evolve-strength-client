// import React from "react";

// function Hero() {
//   return (
// <section className="relative w-full h-[100vh] ">
 
//   <video
//     autoPlay
//     muted
//     loop
//     playsInline
//     className="absolute top-0 left-0 w-full h-full object-cover z-0"
//     poster="/public/videos/evolve-hero-image.webp
//     "
//   >
//     <source src="/videos/hero-video.mp4" type="video/mp4" />
//     <source src="/public/videos/evlove-hero-video.webm" type="video/webm" />
//     Your browser does not support the video tag.
//   </video>
// </section>
//   );
// }

// export default Hero;





import React from "react";

function Hero() {
  return (
    <div>
    <div className="relative heroSection md:h-[700px] max-md:h-[404px]">
      {/* <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" /> */}
      <div className="max-w-[1280px] px-8 md:pb-[135px] max-md:pb-[24px] mx-auto w-full h-full">
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
