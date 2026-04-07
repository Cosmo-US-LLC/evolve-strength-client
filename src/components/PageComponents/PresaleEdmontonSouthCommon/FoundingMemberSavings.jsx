import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import icon1 from "@/assets/images/PresaleEdmontonSouthCommon/priceTab/icon_1.svg";
import icon2 from "@/assets/images/PresaleEdmontonSouthCommon/priceTab/icon_2.svg";
import icon3 from "@/assets/images/PresaleEdmontonSouthCommon/priceTab/icon_3.svg";
import icon4 from "@/assets/images/PresaleEdmontonSouthCommon/priceTab/icon_4.svg";
import icon5 from "@/assets/images/PresaleEdmontonSouthCommon/priceTab/icon_5.svg";

const LOCK_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden
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
);

function MembershipCardContent({
  contractTerm,
  price,
  priceSuffix,
  priceBiWeeklyCopy,
  disclaimers1,
  disclaimers2,
  disclaimers3,
  disclaimers4,
  disclaimers5,
  rateLockLabel,
  rateLockValue,
  rateLockNote,
  disclaimers1Icon,
  disclaimers2Icon,
  disclaimers3Icon,
  disclaimers4Icon,
  disclaimers5Icon,
  link
}) {
  return (
    <>
      {/* Limited ribbon - diagonal green, top-right (Figma) */}
      <div className="absolute top-[-5%] right-[-4%] z-10 overflow-hidden w-28 h-28 max-md:hidden ">
        <div
          className="absolute bg-[#4ab04a] text-white font-[500] font-[Kanit] text-[12px] md:text-[24px] capitalize tracking-wide flex items-center justify-center w-[150%] h-8 left-[-15%] top-[25%] rotate-45 shadow-md"
          aria-hidden
        >
          Limited
        </div>
      </div>

      <div className="absolute top-[-53%] right-[-7%] z-10 overflow-hidden w-18 h-18 md:hidden">
        <div
          className="absolute bg-[#4ab04a] text-white font-[400] font-[Kanit] text-[12px] capitalize tracking-wide flex items-center justify-center w-[150%] h-6 left-[-15%] top-[25%] rotate-45 shadow-md"
          aria-hidden
        >
          Limited
        </div>
      </div>

      <p className="text-white text-[16px] md:text-[18px] text-center md:text-start font-[400] font-[Kanit] leading-[10px]">
        {contractTerm}
      </p>
      <p className="text-[40px] md:text-[60px] leading-[32px] md:leading-[48px] text-center md:text-start font-[500] font-[Kanit]">
        <span className="text-[#4ab04a]">{price}</span>

        <span className="text-[14px] md:text-[16px] leading-[6px] font-[500] font-[Kanit] text-[#4ab04a] ml-1">
          {priceSuffix}
        </span>
        <span className="text-[#ffffff] text-[14px] md:text-[16px] leading-[17px] font-[400] font-[Kanit] ml-1">
          {priceBiWeeklyCopy}
        </span>
      </p>
      <div className="flex flex-col gap-3 md:gap-3 px-1 md:px-0  w-full">
        <div className="flex items-center gap-2 w-full">
          <img
            src={disclaimers1Icon}
            alt=""
            className="w-5 h-5 md:w-5 md:h-5 shrink-0 object-contain"
            aria-hidden
          />
          <p className="text-[16px] md:text-[16px] leading-[20px] font-[400] font-[Kanit] text-white/90">
            {disclaimers1}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={disclaimers2Icon}
            alt=""
            className="w-5 h-5 md:w-5 md:h-5 shrink-0 object-contain"
            aria-hidden
          />
          <p className="text-[16px] md:text-[16px] leading-[20px] font-[400] font-[Kanit] text-white/90">
            {disclaimers2}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={disclaimers3Icon}
            alt=""
            className="w-5 h-5 md:w-5 md:h-5 shrink-0 object-contain"
            aria-hidden
          />
          <p className="text-[16px] md:text-[16px] leading-[20px] font-[400] font-[Kanit] text-white/90">
            {disclaimers3}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={disclaimers4Icon}
            alt=""
            className="w-5 h-5 md:w-5 md:h-5 shrink-0 object-contain"
            aria-hidden
          />
          <p className="text-[16px] md:text-[16px] leading-[20px] font-[400] font-[Kanit] text-white/90">
            {disclaimers4}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={disclaimers5Icon}
            alt=""
            className="w-5 h-5 md:w-5 md:h-5 shrink-0 object-contain"
            aria-hidden
          />
          <p className="text-[16px] md:text-[16px] leading-[20px] font-[400] font-[Kanit] text-white/90">
            {disclaimers5}
          </p>
        </div>
      </div>
      <div className="h-px w-full bg-white/30 my-3" aria-hidden />
      {/* Line 1: "Rate Locked For" - medium, normal weight */}
      <p className="text-[16px] md:text-[18px] text-center md:text-start leading-[22px] font-[400] font-[Kanit] text-white ">
        {rateLockLabel}
      </p>
      {/* Line 2: "Lifetime" / "24 Months" - large, bold; "(T&C Apply)" - small, same line to the right */}
      <p className="flex items-baseline gap-1.5 flex-wrap justify-center md:justify-start">
        <span className="text-[32px] md:text-[40px] leading-[12px] md:leading-[17px] font-[500] md:font-[500] font-[Kanit] text-white">
          {rateLockValue}
        </span>
        <span className="text-[14px] md:text-[14px] text-white/80 font-[400] font-[Kanit]">
          {rateLockNote}
        </span>
      </p>
      <Link
        to={link}
        className="inline-flex pt-3 justify-center md:justify-start"
      >
        <button
          type="button"
          className="btnPrimary flex items-center gap-2 md:gap-[10px] !py-[14px] !px-[20px] uppercase text-[14px] md:text-[16px] font-semibold"
        >
          {LOCK_ICON}
          Lock My Rate Now
        </button>
      </Link>
      <p className="flex justify-center md:justify-start text-[14px] md:text-[16px] leading-[20px] font-[400] font-[Kanit] text-white/90">
      Spots filling up quickly
      </p>
    </>
  );
}

function FoundingMemberSavings() {
  const baseUrl = import.meta.env.VITE_APP_API_URL || "";
  const locationPostal = "32176";

  const [plansData, setPlansData] = React.useState(null);

  const fetchClubPlans = async (baseUrl, locationPostal) => {
    try {
      const response = await fetch(
        `${baseUrl}/getClubInfo?location=${parseInt(locationPostal, 10)}`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch club plans");
      }
      const { plans: data = [] } = await response.json();

      const yearlyPlan = data.find((v) => v.planName?.includes("12"));
      if (!yearlyPlan) throw new Error("12-month plan not found");

      const monthlyPlan = data.find((v) => !v.planName?.includes("12"));
      if (!monthlyPlan) throw new Error("No-contract plan not found");

      return {
        yearlyPlanId: yearlyPlan.planId,
        monthlyPlanId: monthlyPlan.planId,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  const fetchClubPlansDetails = async (baseUrl, id, locationPostal) => {
    try {
      const response = await fetch(
        `${baseUrl}/getPlanDetails?location=${parseInt(locationPostal, 10)}&planId=${id}`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch club plan details");
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    const loadPlans = async () => {
      const planIds = await fetchClubPlans(baseUrl, locationPostal);
      const [yearlyPlanDetails, monthlyPlanDetails] = await Promise.all([
        fetchClubPlansDetails(baseUrl, planIds.yearlyPlanId, locationPostal),
        fetchClubPlansDetails(baseUrl, planIds.monthlyPlanId, locationPostal),
      ]);
      setPlansData({
        yearlyPlan: yearlyPlanDetails,
        monthlyPlan: monthlyPlanDetails,
      });
      // console.log(yearlyPlanDetails?.schedules, monthlyPlanDetails?.schedules);
    };

    loadPlans();
  }, [baseUrl]);

  return (
    <section className="bg-black py-10 md:py-20">
      <div className="max-w-[1340px] mx-auto px-4 md:px-8 flex flex-col gap-8 md:gap-10 items-center">
        {/* Header - optional; Figma focuses on tabs + card */}
        {/* <div className="flex flex-col gap-2 items-center text-center">
          <h2 className="!font-[600] text-[24px] md:text-[36px] lg:text-[40px] uppercase text-white leading-tight">
            Founding Member Savings
          </h2>
          <p className="!text-[14px] md:!text-[18px] leading-[20px] font-[400] font-[Kanit] text-white/90 uppercase">
            Lock in your founder rate today.
          </p>
        </div> */}

        <Tabs
          defaultValue="yearly"
          className="w-full flex flex-col items-center gap-6"
        >
          {/* Tab navigation - Yearly (green when active) / Monthly (dark grey when inactive), pill style (Figma) */}
          <TabsList className="inline-flex h-12  rounded-full bg-[rgba(255,255,255,0.12)] p-1 gap-0 border-0">
            <TabsTrigger
              value="yearly"
              className="rounded-full hover:cursor-pointer px-6 md:px-8 py-2.5 text-[14px] md:text-[16px] font-[500] font-[Kanit] text-white data-[state=active]:bg-[#4ab04a] data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-white/90 transition-colors"
            >
              Yearly
            </TabsTrigger>
            <TabsTrigger
              value="monthly"
              className="rounded-full px-6 hover:cursor-pointer md:px-8 py-2.5 text-[14px] md:text-[16px] font-[500] font-[Kanit] text-white data-[state=active]:bg-[#4ab04a] data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-white/90 transition-colors"
            >
              Monthly
            </TabsTrigger>
          </TabsList>

          <TabsContent value="yearly" className="w-full mt-0 outline-none">
            <div className="bg-[rgba(255,255,255,0.12)] backdrop-blur-[15px] rounded-[12px] w-full overflow-hidden flex flex-col md:flex-row p-4 md:p-6">
              <div className="w-full md:max-w-[57%] md:flex-1 rounded-l-[12px] overflow-hidden shrink-0">
                <img
                  src="/assets/images/presaleCommonSouth/FoundingMemberSavingsImage.webp"
                  alt="Gym members at Evolve Strength"
                  className="w-full h-full min-h-[240px] md:min-h-[300px]"
                />
              </div>
              <div className="w-full md:flex-1 md:max-w-[43%] flex flex-col gap-4 md:gap-4 px-0 py-6 md:py-4 md:px-8 relative">
                <MembershipCardContent
                  contractTerm="1 Year Contract"
                  // price="$24.39"
                  price={`${plansData?.yearlyPlan?.schedules ? `${plansData?.yearlyPlan?.schedules[0]?.schedulePreTaxAmount}` : "--.--"}`}
                  priceSuffix="+GST"
                  priceBiWeeklyCopy="/biweekly"
                  disclaimers1="No Maintenance Fee"
                  disclaimers1Icon={icon1}
                  disclaimers2="No Initiation Fee"
                  disclaimers2Icon={icon2}
                  disclaimers3="Train Risk-Free for 10 Days"
                  disclaimers3Icon={icon3}
                  disclaimers4="Zero Payments Until Opening Day"
                  disclaimers4Icon={icon4}
                  disclaimers5="Early access before we officially open"
                  disclaimers5Icon={icon5}
                  rateLockLabel="Rate Locked For"
                  rateLockValue="Lifetime"
                  rateLockNote="(T&C Apply)"
                  link="/founder-offer-payment?plan=0"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="monthly" className="w-full mt-0 outline-none">
            <div className="bg-[rgba(255,255,255,0.12)] backdrop-blur-[15px] rounded-[12px] w-full overflow-hidden flex flex-col md:flex-row p-4 md:p-6">
              <div className="w-full md:max-w-[57%] md:flex-1 rounded-l-[12px] overflow-hidden shrink-0">
                <img
                  src="/assets/images/presaleCommonSouth/FoundingMemberSavingsImage.webp"
                  alt="Gym members at Evolve Strength"
                  className="w-full h-full min-h-[240px] md:min-h-[300px]"
                />
              </div>
              <div className="w-full md:flex-1 md:max-w-[43%] flex flex-col gap-4 md:gap-4 px-0 py-6 md:px-8 md:py-4 relative">
                <MembershipCardContent
                  contractTerm="Month-to-Month"
                  // price="$28.79"
                  price={`${plansData?.monthlyPlan?.schedules ? `${plansData?.monthlyPlan?.schedules[0]?.schedulePreTaxAmount}` : "--.--"}`}
                  priceSuffix="+GST"
                  priceBiWeeklyCopy="/biweekly"
                  disclaimers1="No Maintenance Fee"
                  disclaimers1Icon={icon1}
                  disclaimers2="No Initiation Fee"
                  disclaimers2Icon={icon2}
                  disclaimers3="Train Risk-Free for 10 Days"
                  disclaimers3Icon={icon3}
                  disclaimers4="Zero Payments Until Opening Day"
                  disclaimers4Icon={icon4}
                  disclaimers5="Early access before we officially open"
                  disclaimers5Icon={icon5}
                  rateLockLabel="Rate Locked For"
                  rateLockValue="Lifetime"
                  rateLockNote="(T&C Apply)"
                  link="/founder-offer-payment?plan=1"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default FoundingMemberSavings;
