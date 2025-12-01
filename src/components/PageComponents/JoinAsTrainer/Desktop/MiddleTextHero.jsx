import React, { useRef, useState, useEffect } from "react";
import { Volume2, VolumeOff } from "lucide-react";

const MiddleTextHero = ({ title }) => {
  const videoRefDesktop = useRef(null);
  const videoRefMobile = useRef(null);

  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 700 : true
  );

  const [isMutedDesktop, setIsMutedDesktop] = useState(true);
  const [isMutedMobile, setIsMutedMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 700);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
  if (isDesktop) {
    videoRefDesktop.current?.play().catch(() => {});
    if (videoRefMobile.current) {
      videoRefMobile.current.pause();
      videoRefMobile.current.currentTime = 0;
    }
  } else {
    videoRefMobile.current?.play().catch(() => {});
    if (videoRefDesktop.current) {
      videoRefDesktop.current.pause();
      videoRefDesktop.current.currentTime = 0;
    }
  }
}, [isDesktop]);

  const toggleDesktopMute = () => {
    const newMute = !isMutedDesktop;
    setIsMutedDesktop(newMute);
    if (videoRefDesktop.current) videoRefDesktop.current.muted = newMute;
  };

  const toggleMobileMute = () => {
    const newMute = !isMutedMobile;
    setIsMutedMobile(newMute);
    if (videoRefMobile.current) videoRefMobile.current.muted = newMute;
  };

  return (
    <div>
      <div
        className="relative overflow-hidden w-full h-[70vh] md:h-[100vh] "
        // style={{
        //   backgroundImage: `url("/media/1762435890643-9a2fb639-e969-433c-afcc-8d225c2905bf.webp")`,
        // }}
      >
        {isDesktop && (
          <video
            ref={videoRefDesktop}
            autoPlay
            loop
            muted={isMutedDesktop}
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/assets/videos/jat-desk.mp4" type="video/mp4" />
          </video>
        )}
        {!isDesktop && (
          <video
            ref={videoRefMobile}
            autoPlay
            loop
            muted={isMutedMobile}
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/assets/videos/jat-mob.mp4" type="video/mp4" />
          </video>
        )}

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
        {isDesktop && (
          <button
            onClick={toggleDesktopMute}
            className="absolute bottom-4 right-4 bg-black bg-opacity-50 p-3 rounded-full z-20"
          >
            {isMutedDesktop ? (
              <VolumeOff className="h-7 w-7 text-white" />
            ) : (
              <Volume2 className="h-7 w-7 text-white" />
            )}
          </button>
        )}

        {!isDesktop && (
          <button
            onClick={toggleMobileMute}
            className="absolute bottom-4 right-4 bg-black bg-opacity-50 p-3 rounded-full z-20"
          >
            {isMutedMobile ? (
              <VolumeOff className="h-7 w-7 text-white" />
            ) : (
              <Volume2 className="h-7 w-7 text-white" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default MiddleTextHero;
