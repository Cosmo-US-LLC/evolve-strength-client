import React from "react";

function ContentCard({
  title = "",
  description = "",
  buttonTitle = "",
  buttonLink = "#",
  backgroundImage = "",
  height = 800,
  mobileHeight = 623,
  imagePosition = "left", // <<< NEW
}) {
  const hasButton = Boolean(buttonTitle?.trim());

  const isImageRight = imagePosition === "right";

  const leftGradient = "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 40%)";
  const rightGradient = "linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 40%)";

  const sideGradient = imagePosition === "left" ? rightGradient : leftGradient;

  return (
    <>
      {/* Desktop */}
      <div
        className="relative w-full bg-black overflow-hidden hidden md:flex"
        style={{ height: `${height}px` }}
      >
        {/* image block */}
        <div
          className={`absolute top-0 h-full w-[1203px] ${isImageRight ? "right-[-165px]" : "left-[-165px]"
            }`}
        >
          <img src={backgroundImage} alt="" className="absolute inset-0 w-full h-full bg-cover" />

          <div
            className="absolute inset-0 z-10"
            style={{
              backgroundImage: `
            
              ${sideGradient}
            `,
            }}

          />
        </div>

        {/* content block */}
        <div className="max-w-[1280px] md:px-8 px-4 mx-auto w-full h-full flex items-center">
          <div
            className={`relative z-10 flex flex-col gap-[24px] text-white w-[522px] ${isImageRight ? "items-start" : "items-end ml-auto"
              }`}
          >
            <div className={`flex flex-col gap-[16px]`}>
              <h2
                className="uppercase !text-[40px] leading-[39px] text-white"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              {description && (
                <p className="!text-[18px] leading-[26px] text-white opacity-95">{description}</p>
              )}
            </div>

            {hasButton && (
              <a href={buttonLink}>
                <button className="btnPrimary bg-[#4ab04a] hover:brightness-110 text-white px-[24px] py-[16px] rounded-[5px] uppercase">
                  {buttonTitle}
                </button>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Mobile stays same always text top + image bottom */}
      <div className="relative w-full bg-black overflow-hidden md:hidden" style={{ height: `${mobileHeight}px` }}>
        <div className="absolute bottom-0 right-0 w-full h-[370px]">
          <div className="absolute inset-0 overflow-hidden">
            <img src={backgroundImage} alt="" className="absolute h-full w-full top-[-3.13%]" />
          </div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(-0.963253deg, rgba(0,0,0,0) 73.399%, rgba(0,0,0,1) 93.127%)",
            }}
          />
        </div>

        <div className="absolute left-[16px] max-md:right-[16px] top-[50px] flex flex-col gap-[16px] items-start text-white">
          <h2
            className="uppercase !text-[32px] leading-[32px]"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {description && <p className="!text-[16px] leading-[24px]">{description}</p>}

          {hasButton && (
            <a href={buttonLink}>
              <button className="btnPrimary bg-[#4ab04a] hover:brightness-110 text-white px-[13px] py-[17px] rounded-[5px] uppercase">
                {buttonTitle}
              </button>
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default ContentCard;
