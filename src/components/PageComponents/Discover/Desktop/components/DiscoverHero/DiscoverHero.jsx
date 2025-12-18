import React from "react";
import ExploreHeroVideo from "@/assets/videos/ExplorePages.webm";

const DiscoverHero = ({ onStart, onTouchStart, onTouchMove, onTouchEnd }) => {
  return (
    <main className="relative min-h-screen  flex items-end justify-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={ExploreHeroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />

      <div className="relative z-10 text-center  px-4">
        <h2 className="!text-[84px] !font-[Kanit] !leading-[89.286%] !font-[600] mb-4 md:mb-7">
          Discover Trainers,
          <br className="hidden md:block" /> Wellness Services
        </h2>
        <p className="mb-8 !text-[24px] !leading-[100%]">
          Swipe to get started.
        </p>
        <button
          type="button"
          onClick={onStart}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="inline-flex cursor-pointer items-center text-black tracking-[0.18em] animate-bounce"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="115"
            height="115"
            viewBox="0 0 115 115"
            fill="none"
          >
            <g filter="url(#filter0_d_10966_10)">
              <rect
                x="18.6001"
                y="91.6"
                width="77"
                height="77"
                rx="38.5"
                transform="rotate(-90 18.6001 91.6)"
                stroke="#4AB04A"
                strokeWidth="3"
                shapeRendering="crispEdges"
              />
              <path
                d="M66.512 36.1841L66.512 43.4441C66.512 43.9676 65.8779 44.2312 65.5073 43.8606L57.1002 35.4535L48.692 43.8617C48.3226 44.2323 47.6885 43.9688 47.6885 43.4453L47.6885 36.1853C47.6885 35.717 47.8744 35.2688 48.2049 34.937L56.2685 26.8735C56.7285 26.4135 57.4732 26.4135 57.932 26.8735L65.9944 34.9359C66.3261 35.2676 66.512 35.7159 66.512 36.1841ZM65.9944 70.2312L57.932 62.1688C57.472 61.7088 56.7273 61.7088 56.2685 62.1688L48.2049 70.2323C47.8744 70.5629 47.6885 71.0112 47.6885 71.4794L47.6885 78.7394C47.6885 79.2629 48.3226 79.5264 48.6932 79.1559L57.1002 70.7488L65.5073 79.1559C65.8779 79.5264 66.512 79.2641 66.512 78.7394L66.512 71.4794C66.512 71.0112 66.3261 70.5617 65.9944 70.2312ZM65.9944 52.5841L57.932 44.5217C57.472 44.0617 56.7273 44.0617 56.2685 44.5217L48.2049 52.5853C47.8744 52.9147 47.6885 53.3641 47.6885 53.8323L47.6885 61.0923C47.6885 61.6159 48.3226 61.8794 48.6932 61.5088L57.1002 53.1006L65.5073 61.5076C65.8779 61.8782 66.512 61.6159 66.512 61.0923L66.512 53.8323C66.512 53.3629 66.3261 52.9147 65.9944 52.5841Z"
                fill="#4AB04A"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_10966_10"
                x="9.72748e-05"
                y="-2.47955e-05"
                width="114.2"
                height="114.2"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="8.55" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.176471 0 0 0 0 0.870588 0 0 0 0 0.156863 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_10966_10"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_10966_10"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
      </div>
    </main>
  );
};

export default DiscoverHero;

