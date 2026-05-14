import React, { useState } from "react";

import {
  southEdmontonCommonRulesSections,
  SOUTH_EDMONTON_COMMON_RULES_LAST_UPDATED,
} from "@/constants/southEdmontonCommonRulesData";

/** Body copy — Figma Kanit Light 18px */
const bodyClass =
  "leading-normal text-black !font-[kanit] font-light text-[18px]";

function SouthEdmontonCommonRulesContent() {
  const [activeId, setActiveId] = useState("sponsor");

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
    }
  };

  const renderBlock = (block, index) => {
    if (typeof block === "string") {
      return (
        <p key={index} className={`${bodyClass} whitespace-pre-wrap`}>
          {block}
        </p>
      );
    }
    if ("brIntro" in block) {
      return (
        <div key={index}>
          <p className={`${bodyClass} mb-0`}>{block.brIntro}</p>
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </div>
      );
    }
    if ("list" in block) {
      return (
        <ul
          key={index}
          className={`${bodyClass} list-disc mb-0 pl-0 [padding-inline-start:1.25rem]`}
        >
          {block.list.map((item, j) => (
            <li key={j} className="leading-normal ms-[27px] [&+li]:mt-0">
              {item}
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <div className="mx-auto w-full max-w-[1440px] px-4 pb-[140px] md:px-[100px] md:pb-20 md:pt-20 pt-12 mt-32 flex gap-[24px] overflow-visible">
      {/* Sidebar — Figma: w-[300px], py-[10px], nav ExtraLight 16px; active #4AB04A 18px + bar */}
      <div className="flex flex-col w-[300px] shrink-0 py-[10px] gap-[10px] sticky top-[150px] self-start h-fit max-md:hidden">
        <ul className="px-4 scroll-smooth !font-[kanit] space-y-2">
          {southEdmontonCommonRulesSections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => handleScroll(section.id)}
                  className={`block w-full text-left cursor-pointer border-l-[3px] pl-2 ${
                    isActive
                      ? "text-[#4AB04A] border-[#4AB04A] text-[18px]"
                      : "text-black font-extralight text-[16px] border-transparent"
                  }`}
                >
                  {section.h1}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Main — Figma: flex-col gap-[24px] */}
      <div className="flex flex-col gap-[24px] flex-1 min-w-0 p-0 md:py-0">
        <h1
          id="rules"
          className="!text-[40px] !font-[700] !font-[kanit] leading-[39px] text-black w-full"
        >
          Rules
        </h1>
        <p className={`${bodyClass} w-full`}>
          Last updated: {SOUTH_EDMONTON_COMMON_RULES_LAST_UPDATED}
        </p>

        {southEdmontonCommonRulesSections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className="flex flex-col gap-[16px] items-start w-full"
          >
            <h2 className="!text-[20px] !font-[kanit] font-medium leading-normal text-black w-full">
              {section.h1}
            </h2>
            <div className="flex flex-col gap-0 w-full [&>ul+p]:mt-4">
              {section.content.map((block, idx) => renderBlock(block, idx))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SouthEdmontonCommonRulesContent;
