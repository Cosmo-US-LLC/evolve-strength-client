import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import locations from "../lib/locations";
import MembershipBenefits from "../components/MembershipBenefits";
import { fetchClubPlans } from "../lib/apis";
import { AnimatedCircularProgressBar } from "@/features/joinNow/components/ui/animated-circular-progress-bar";
import { Button } from "@/features/joinNow/components/ui/button";
import EditMembershipBox from "@/features/joinNow/components/EditMembershipBox";
import { LoaderCircle } from "lucide-react";
import { Skeleton } from "@/features/joinNow/components/ui/skeleton";

const MembershipType = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const location = params.get("location") || "";
  const plan = params.get("plan") || "";
  const services = params.get("services") || "";
  const locationPostal =
    locations.find((loc) => loc.name.toLowerCase() === location.toLowerCase())
      ?.postalCode || "";
  const [selectedServices, setSelectedServices] = useState(
    services ? services.split(",") : []
  );

  const [plansIds, setPlansIds] = useState([]);
  const [plansDetails, setPlansDetails] = useState([]);
  const [currentPlan, setCurrentPlan] = useState(plan ? parseInt(plan) : 1);
  const [planAddons, setPlanAddons] = useState([]);
  const [loading, setLoading] = useState(true);

  // console.log([...plansDetails[currentPlan]?.schedules]?.find(sch => sch.addon == true)?.totalAmount)
  // const services = [
  //   { id: "towel1", name: "Towel", price: 2.63, selected: true },
  //   // { id: "towel2", name: "Towel", price: 2.63, selected: false },
  //   // { id: "towel3", name: "Towel", price: 2.63, selected: false },
  //   // { id: "towel4", name: "Towel", price: 2.63, selected: false },
  // ];

  useEffect(() => {
    fetchClubPlans(locationPostal, setPlansIds, setPlansDetails);
  }, []);
  useEffect(() => {
    if (plansDetails.length > 0) {
      setLoading(false);
      const addons = plansDetails[currentPlan]?.schedules
        .map((plan) => (plan?.addon === true ? plan : null))
        .filter((addon) => addon !== null);
      setPlanAddons(addons);
      // console.log(planAddons);
    }
  }, [plansDetails, currentPlan]);

  const handleServiceToggle = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleNext = () => {
    navigate(
      `/join-now/your-details?location=${location}&plan=${currentPlan}${
        selectedServices.length > 0
          ? `&services=${selectedServices.join(",")}`
          : ""
      }`
    );
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
          {/* Left Sidebar - Progress Indicator */}
          <div className="lg:hidden bg-[#F4F4F4] p-4 flex items-center gap-[14px]">
            <AnimatedCircularProgressBar
              value={33}
              gaugePrimaryColor="#4ab04a"
              gaugeSecondaryColor="#dddddd"
              step="1"
              className={"w-[50px] h-[50px]"}
            />

            <div>
              <h1 className="text-base font-bold leading-5">Membership Type</h1>
              <p className="text-xs leading-4 text-[#6F6D66]">
                Pick the membership that fits you best
              </p>
            </div>
          </div>
          {/* Dashboard Progress Bar */}
          <div className="max-lg:hidden lg:col-span-1">
            <div className="space-y-2 max-lg:flex max-lg:items-center max-lg:gap-2">
              {/* Membership Type - Active */}

              <div className="flex items-start lg:space-x-4 w-fit">
                <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_6107_1044)">
                      <path
                        d="M19.6524 6.14372L17.9986 4.48989L19.2418 3.24712C19.2963 3.19275 19.3395 3.12818 19.369 3.05711C19.3984 2.98603 19.4136 2.90984 19.4136 2.83289C19.4136 2.75594 19.3985 2.67975 19.369 2.60867C19.3395 2.53759 19.2963 2.47302 19.2419 2.41864L17.5774 0.754111C17.3576 0.534385 16.9685 0.534385 16.7488 0.754111L15.506 1.99735L13.852 0.343213C13.3943 -0.114404 12.6524 -0.114404 12.1947 0.343213C11.737 0.80083 11.737 1.54282 12.1947 2.00048L17.9951 7.80099C18.4528 8.2586 19.1948 8.2586 19.6524 7.80099C20.11 7.34337 20.11 6.60138 19.6524 6.14372ZM7.80876 17.9995L2.00833 12.199C1.55063 11.7413 0.808721 11.7413 0.351025 12.199C-0.106592 12.6567 -0.106592 13.3986 0.351025 13.8563L2.00513 15.5104L0.764307 16.7507C0.654424 16.8606 0.592627 17.0093 0.592627 17.1649C0.592627 17.3206 0.654424 17.4693 0.764307 17.5792L2.42884 19.2432C2.54325 19.3577 2.69317 19.4149 2.8431 19.4149C2.99302 19.4149 3.14294 19.3577 3.25735 19.2432L4.49767 18.0029L6.15149 19.6568C6.60911 20.1144 7.3511 20.1144 7.80876 19.6568C8.26646 19.1991 8.26646 18.4571 7.80876 17.9995ZM10.5374 6.97235L6.98013 10.5417L9.46606 13.0277L13.0233 9.45821L10.5374 6.97235ZM17.9952 9.45825L10.5374 2.00048C10.0798 1.54286 9.33774 1.54286 8.88013 2.00048C8.42243 2.45817 8.42243 3.20009 8.88013 3.65778L16.3379 11.1156C16.7955 11.5732 17.5375 11.5732 17.9952 11.1156C18.4529 10.6579 18.4529 9.91595 17.9952 9.45825ZM11.1234 16.3422L3.66556 8.88438C3.20794 8.42677 2.46595 8.42677 2.00833 8.88438C1.55063 9.34208 1.55063 10.0841 2.00833 10.5417L9.4661 17.9995C9.92372 18.4571 10.6657 18.4571 11.1234 17.9995C11.5811 17.5418 11.5811 16.7999 11.1234 16.3422Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6107_1044">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="max-lg:hidden">
                  <h3 className="font-bold text-[16px] text-black">
                    Membership Type
                  </h3>
                  <p className="text-[#393939] text-[14px]">
                    Pick the membership that fits you best
                  </p>
                </div>
              </div>

              <div className="border-1 border-gray-300 max-lg:grow lg:w-px h-px lg:h-16 lg:ml-5"></div>

              {/* Your Details - Inactive */}
              <div className="flex items-start lg:space-x-4 w-fit">
                <div className=" rounded-full w-10 h-10 flex border-[1px] border-[#969698] items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5 4.99246H10C10.3438 4.99246 10.625 4.71121 10.625 4.36746V3.11621C10.625 2.77246 10.3438 2.4909 10 2.4909H9.03125C8.67594 0.836523 6.32406 0.836211 5.96875 2.4909H5C4.65625 2.4909 4.375 2.77215 4.375 3.1159V4.36684C4.375 4.71059 4.65625 4.99215 5 4.99215V4.99246ZM7.5 9.7859C9.01719 9.73746 9.01375 7.54152 7.5 7.49402C5.98594 7.54152 5.98312 9.73777 7.5 9.7859ZM5.9375 13.4346H9.0625C9.23438 13.4346 9.375 13.294 9.375 13.1221V12.2871C9.2875 9.80434 5.71187 9.80465 5.625 12.2871V13.1221C5.625 13.294 5.76562 13.4346 5.9375 13.4346Z"
                      fill="#969698"
                    />
                    <path
                      d="M11.5625 3.42941H11.25V4.36753C11.2501 4.53174 11.2178 4.69435 11.155 4.84608C11.0922 4.99781 11.0002 5.13568 10.8841 5.25182C10.768 5.36796 10.6302 5.46009 10.4785 5.52295C10.3268 5.5858 10.1642 5.61816 10 5.61816H5C4.8358 5.61816 4.6732 5.5858 4.5215 5.52295C4.3698 5.46009 4.23198 5.36796 4.1159 5.25182C3.99981 5.13568 3.90775 4.99781 3.84497 4.84608C3.78219 4.69435 3.74992 4.53174 3.75 4.36753V3.42941C2.60312 3.31128 1.56344 4.12003 1.5625 5.30566V16.8744C1.56267 17.3718 1.76022 17.8487 2.11178 18.2005C2.46334 18.5523 2.94016 18.7502 3.4375 18.7507H11.5625C12.5969 18.7507 13.4375 17.9097 13.4375 16.8747V5.30566C13.4373 4.80831 13.2398 4.33136 12.8882 3.97957C12.5367 3.62778 12.0598 3.4299 11.5625 3.42941ZM5 12.2875C5.00047 11.8176 5.13357 11.3573 5.384 10.9596C5.63442 10.5619 5.992 10.2429 6.41563 10.0394C6.20245 9.87395 6.02975 9.66212 5.91063 9.41998C5.79151 9.17784 5.7291 8.91176 5.72813 8.64191C5.81125 6.29691 9.18813 6.29503 9.27187 8.64191C9.27187 9.20753 9 9.71441 8.58437 10.0394C9.008 10.2429 9.36558 10.5619 9.616 10.9596C9.86643 11.3573 9.99953 11.8176 10 12.2875V13.1225C9.99934 13.371 9.90038 13.6092 9.72472 13.7849C9.54907 13.9607 9.311 14.0598 9.0625 14.0607H5.9375C5.42188 14.0607 5 13.6385 5 13.1225V12.2875ZM10.625 16.8747H4.375C4.20312 16.8747 4.0625 16.7341 4.0625 16.5622C4.0625 16.3903 4.20312 16.2494 4.375 16.2494H10.625C11.0334 16.2566 11.0372 16.8666 10.625 16.8744V16.8747ZM10.625 15.6238H4.375C4.20312 15.6238 4.0625 15.4832 4.0625 15.3113C4.0625 15.1394 4.20312 14.9988 4.375 14.9988H10.625C11.0334 15.0057 11.0372 15.616 10.625 15.6238ZM14.6438 17.5188C14.8188 17.9469 15.075 18.3316 15.4031 18.66C15.4656 18.7194 15.5437 18.7507 15.625 18.7507C15.7063 18.7507 15.7844 18.7194 15.8469 18.66C16.4264 18.0751 16.7844 17.3069 16.8594 16.4869H14.3875C14.4219 16.84 14.5063 17.1841 14.6438 17.5188ZM17.5 6.55628H16.875C16.8584 5.98534 16.9975 5.16128 16.5094 4.73347C15.7531 3.94909 14.3531 4.52347 14.375 5.61847V7.18159H17.5C17.6719 7.18159 17.8125 7.32222 17.8125 7.49409V10.621C17.8125 10.7928 17.9531 10.9338 18.125 10.9338C18.2969 10.9338 18.4375 10.7932 18.4375 10.6213V7.49441C18.4368 7.24591 18.3379 7.00777 18.1622 6.832C17.9866 6.65623 17.7485 6.55711 17.5 6.55628Z"
                      fill="#969698"
                    />
                    <path
                      d="M14.375 7.80664H16.875V15.861H14.375V7.80664Z"
                      fill="#969698"
                    />
                  </svg>
                </div>
                <div className="max-lg:hidden">
                  <h3 className="font-bold text-[#969698] text-[16px]">
                    Your Details
                  </h3>
                  <p className="text-[#969698] text-sm text-[14px]">
                    Tell us a bit about yourself
                  </p>
                </div>
              </div>

              <div className="border-1 border-gray-300 max-lg:grow lg:w-px h-px lg:h-16 lg:ml-5"></div>

              {/* Payment Info - Inactive */}
              <div className="flex items-start lg:space-x-4 w-fit">
                <div className="border-[1px] border-[#969698] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_6107_1062)">
                      <path
                        d="M18.6363 16.3637H15.4545C13.4495 16.3637 11.8183 14.7324 11.8183 12.7274C11.8183 10.7223 13.4495 9.09108 15.4545 9.09108H18.6363C18.696 9.09112 18.7552 9.07939 18.8103 9.05656C18.8655 9.03373 18.9156 9.00025 18.9578 8.95804C19 8.91582 19.0335 8.86569 19.0564 8.81053C19.0792 8.75536 19.0909 8.69623 19.0909 8.63653V7.27292C19.0909 6.31975 18.3515 5.54458 17.4174 5.46941L14.807 0.909826C14.565 0.488128 14.1744 0.186727 13.707 0.0615729C13.2418 -0.062729 12.7553 0.00255401 12.3389 0.244894L3.3901 5.45475H1.81841C0.815685 5.45475 0.000244141 6.27015 0.000244141 7.27292V18.1818C0.000244141 19.1846 0.815643 20 1.81841 20H17.2727C18.2754 20 19.0909 19.1846 19.0909 18.1818V16.8182C19.0909 16.7585 19.0792 16.6994 19.0564 16.6442C19.0335 16.5891 19 16.5389 18.9578 16.4967C18.9156 16.4545 18.8655 16.421 18.8103 16.3982C18.7552 16.3754 18.696 16.3636 18.6363 16.3637ZM15.3707 3.72484L16.3611 5.45475H12.3993L15.3707 3.72484ZM5.19689 5.45475L12.7966 1.03055C13.0021 0.910252 13.2422 0.878292 13.4717 0.93957C13.7039 1.0017 13.8974 1.15174 14.0177 1.36169L14.0187 1.36336L6.99136 5.45475H5.19689Z"
                        fill="#969698"
                      />
                      <path
                        d="M18.6358 10H15.454C13.9501 10 12.7268 11.2233 12.7268 12.7272C12.7268 14.2311 13.9501 15.4545 15.454 15.4545H18.6358C19.3878 15.4545 19.9994 14.8428 19.9994 14.0908V11.3636C19.9994 10.6117 19.3878 10 18.6358 10ZM15.454 13.6363C14.9529 13.6363 14.545 13.2284 14.545 12.7272C14.545 12.2261 14.9529 11.8182 15.454 11.8182C15.9552 11.8182 16.3631 12.2261 16.3631 12.7272C16.3631 13.2284 15.9552 13.6363 15.454 13.6363Z"
                        fill="#969698"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6107_1062">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="max-lg:hidden">
                  <h3 className="font-bold text-[#969698] text-[16px]">
                    Payment Info
                  </h3>
                  <p className="text-[#969698] text-sm text-[14px]">
                    Securely enter your payment details
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="lg:hidden">
                <h3 className="font-bold text-[16px] text-black">
                  Membership Type
                </h3>
                <p className="text-[#393939] text-[14px]">
                  Pick the membership that fits you best
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-lg:px-4 lg:col-span-2">
            <EditMembershipBox className="lg:hidden" />

            <h2 className="text-xl lg:text-2xl font-[kanit] font-medium text-black mb-2 lg:mb-6">
              Choose Your Pricing Plan
            </h2>

            {/* Pricing Toggle and Pricing Display */}
            <div className="flex lg:items-center justify-between max-lg:gap-4 mb-4 lg:mb-8 lg:bg-[#FCFCFC] lg:border lg:rounded-lg lg:border-gray-300 lg:p-4">
              {/* Pricing Toggle */}
              <div className="grid grid-cols-2 w-full max-w-[340px] bg-white-100 border border-gray-300 rounded-lg p-2">
                <button
                  onClick={() => setCurrentPlan(0)}
                  className={`py-3 md:px-6 max-md:px-2 max-md:text-[10px] text-xs rounded-md font-medium cursor-pointer transition-colors tracking-tight ${
                    currentPlan === 0 ? "bg-gray-800 text-white" : "text-black"
                  }`}
                >
                  MONTH TO MONTH
                </button>
                <button
                  onClick={() => setCurrentPlan(1)}
                  className={`py-3 max-md:px-2 max-md:text-[10px] text-xs md:px-6 rounded-md font-medium cursor-pointer transition-colors tracking-tight ${
                    currentPlan === 1 ? "bg-gray-800 text-white" : "text-black"
                  }`}
                >
                  1 YEAR CONTRACT
                </button>
              </div>

              {/* Pricing Display */}
              <div className="text-right">
                <div className="text-black text-base font-[kanit] font-semibold whitespace-nowrap">
                  BI-WEEKLY
                </div>
                <div className="flex items-end space-x-1 justify-end">
                  <div className="text-brand-green text-2xl lg:text-4xl font-bold whitespace-nowrap">
                    {/* {plansDetails[currentPlan]?.scheduleTotalAmount} */}
                    {!loading ?
                      plansDetails[currentPlan]?.schedules[0]
                        ?.schedulePreTaxAmount
                    : (<>
                      {/* <Skeleton className={"mt-0.5 h-[38px] w-[113px]"} /> */}
                      $--.--
                    </>)}
                  </div>
                  <div className="text-black/70 max-md:hidden text-sm">
                    + tax
                    {/* (Tax included) */}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            {/* {(locationPostal == 40248 || locationPostal == 40327) && ( */}
            {planAddons?.length > 0 &&
              (locationPostal == 40248 || locationPostal == 40327) && (
                <div>
                  <div className="flex justify-between items-center mb-2 lg:mb-4">
                    <h3 className="font-[kanit] text-[20px] font-[500] text-black">
                      Choose Additional Services
                    </h3>
                    <button className="hidden text-black text-sm items-center space-x-1">
                      <span>See More</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 max-md:grid-cols-1 gap-2">
                    {planAddons.map((service, index) => (
                      <div
                        key={index}
                        onClick={() =>
                          handleServiceToggle(service?.profitCenter)
                        }
                        className="border border-[#E8E8E8] bg-[#FBFBFB] rounded-lg p-3 lg:p-4 cursor-pointer hover:border-brand-green transition-colors"
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-bold text-black">
                              {service?.profitCenter}
                            </h4>
                            <p className="text-black text-sm">
                              {/* Recurring {service?.scheduleAmount} Bi-Weekly */}
                              Recurring {service?.schedulePreTaxAmount}{" "}
                              Bi-Weekly
                            </p>
                          </div>
                          <div className=" flex items-center justify-center">
                            {selectedServices.includes(
                              service?.profitCenter
                            ) ? (
                              <div className="w-[24px] h-[24px] bg-brand-green flex items-center justify-center rounded-full">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="15"
                                  viewBox="0 0 14 15"
                                  fill="none"
                                >
                                  <path
                                    d="M11.6666 4L5.24992 10.4167L2.33325 7.5"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            ) : (
                              <div className="w-[24px] h-[24px] border border-[#000] flex items-center justify-center rounded-full">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="15"
                                  viewBox="0 0 14 15"
                                  fill="none"
                                >
                                  <path
                                    d="M7 3.41699V11.5837"
                                    stroke="#101010"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M2.91675 7.5H11.0834"
                                    stroke="#101010"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            {/* Navigation Buttons */}
            <div className="md:flex max-md:hidden justify-end items-center mt-14">
              <button
                onClick={handleNext}
                disabled={loading}
                className="bg-brand-green disabled:bg-neutral-500 cursor-pointer text-white font-bold py-[12px] px-16 rounded-lg hover:bg-brand-green/90 transition-colors"
              >
                {loading ? <LoaderCircle className="animate-spin" /> : "NEXT"}
              </button>
            </div>
          </div>

          {/* Right Sidebar - Benefits */}
          <div className="lg:col-span-1 max-lg:px-4">
            <EditMembershipBox className="max-lg:hidden" />
            <MembershipBenefits />
          </div>

          <div className="md:hidden max-md:flex justify-between items-center mt-2 px-4 pb-5">
            <button
              onClick={handleNext}
              className="bg-brand-green cursor-pointer w-[100%] text-white font-bold py-[12px] px-16 rounded-[5px] lg:rounded-lg hover:bg-brand-green/90 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipType;
