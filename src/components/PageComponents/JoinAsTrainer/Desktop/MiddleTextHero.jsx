import React, { useRef, useState } from "react";
import { Volume2, VolumeOff } from "lucide-react";

const MiddleTextHero = ({ title }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRefDesktop = useRef(null);
  const videoRefMobile = useRef(null);
  const toggleMute = () => {
    setIsMuted((prev) => {
      const newMute = !prev;
      if (videoRefDesktop.current) videoRefDesktop.current.muted = newMute;
      if (videoRefMobile.current) videoRefMobile.current.muted = newMute;
      return newMute;
    });
  };
  return (
    <div>
      {/* <div className="relative overflow-hidden w-full h-[70vh] md:h-[100vh]"  */}
      <div
        className="relative overflow-hidden w-full h-[70vh] md:h-[100vh] "
        // style={{
        //   backgroundImage: `url("https://evolve-strength.tor1.digitaloceanspaces.com/media/1762435890643-9a2fb639-e969-433c-afcc-8d225c2905bf.webp")`,
        // }}
      >
        <video
          ref={videoRefDesktop}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute hidden md:block inset-0 w-full h-full object-cover"
          style={{ objectFit: "", objectPosition: "" }}
        >
          <source
            // src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/videos/gym-vid-desktop.mp4"
            src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/videos/jat-desk.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          ref={videoRefMobile}
          loop
          playsInline
          muted={isMuted}
          className="absolute block md:hidden inset-0 w-full h-full object-cover"
          style={{ objectFit: "", objectPosition: "" }}
        >
          <source
            // src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/videos/gym-vid-mobile.mp4"
            src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/videos/jat-mob.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="max-w-[1280px] md:px-8 px-4 mx-auto w-full h-full relative z-2">
          <div className="relative z-2 flex justify-center items-center text-center h-full">
            <h1
              className="text-[#FFFFFF] !text-[36px] md:!text-[70px] leading-[32px] md:leading-[59px] max-w-[740px] uppercase "
              dangerouslySetInnerHTML={{ __html: title }}
            />

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
        <button
          onClick={toggleMute}
          className="absolute cursor-pointer bottom-4 right-4 bg-black bg-opacity-50 p-3 rounded-full z-20 flex items-center justify-center"
        >
          {isMuted ? (
            <VolumeOff className="h-7 w-7 text-[#fff]" />
          ) : (
            <Volume2 className="h-7 w-7 text-[#fff]" />
          )}
        </button>
      </div>
    </div>
  );
};

export default MiddleTextHero;
