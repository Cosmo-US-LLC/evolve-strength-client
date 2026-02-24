import React from "react";
import { Check } from "lucide-react";

const PlanIcon = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.6211 10.7012V13.1427C11.5501 12.9146 11.9266 12.354 11.9266 11.9219C11.9266 11.4898 11.5489 10.9291 10.6211 10.7012Z"
      fill="currentColor"
    />
    <path
      d="M19.2942 11.4545L18.5637 10.3317C18.4323 10.1302 18.4323 9.86974 18.5637 9.66787L19.2946 8.54463C19.9601 7.52015 19.5098 6.14782 18.3741 5.71388L17.1234 5.23493C16.8986 5.14868 16.7452 4.93744 16.7329 4.69732L16.664 3.35995C16.6016 2.14254 15.4318 1.29375 14.2553 1.60988L12.9616 1.9575C12.7296 2.01957 12.4814 1.93922 12.3305 1.75223L11.4882 0.710595C10.7211 -0.23764 9.27632 -0.236233 8.51082 0.711025L7.66852 1.75223C7.51766 1.93922 7.26903 2.01996 7.03743 1.9575L5.74424 1.60988C4.56921 1.29336 3.3975 2.14168 3.33508 3.35995L3.26617 4.69783C3.25387 4.93794 3.10086 5.14872 2.87602 5.23501L1.62532 5.71352C0.488379 6.14887 0.0394764 7.52179 0.705252 8.54553L1.43536 9.66748C1.56669 9.86935 1.56669 10.1303 1.43579 10.3317L0.705252 11.4545C0.039789 12.4759 0.487637 13.8514 1.62536 14.2862L2.87606 14.7651C3.10086 14.8513 3.25387 15.0622 3.26621 15.3023L3.33504 16.6401C3.39738 17.8561 4.56557 18.7062 5.7442 18.3901L7.03739 18.0421C7.2686 17.9796 7.5168 18.0599 7.66891 18.2478L8.51082 19.289C9.27585 20.2357 10.7202 20.2382 11.4886 19.2894L12.3306 18.2478C12.4823 18.0604 12.73 17.9801 12.9616 18.0421L14.2561 18.3906C15.4312 18.7046 16.6015 17.8592 16.664 16.6401L16.7329 15.3027C16.7452 15.0622 16.8986 14.8514 17.1234 14.7651L18.3741 14.2866C19.5107 13.8513 19.9601 12.4782 19.2942 11.4545ZM13.2345 11.922C13.2345 13.0797 12.2588 14.2161 10.6234 14.4788V15.1858C10.6234 15.5461 10.331 15.8385 9.97061 15.8385C9.61022 15.8385 9.31784 15.5461 9.31784 15.1858V14.4788C7.70684 14.22 6.70677 13.1009 6.70677 11.922C6.70677 11.5616 6.99915 11.2692 7.35954 11.2692C7.71992 11.2692 8.0123 11.5616 8.0123 11.922C8.0123 12.354 8.39 12.9148 9.31784 13.1427V10.5622C7.70684 10.3034 6.70677 9.18439 6.70677 8.00542C6.70677 6.81121 7.72473 5.70446 9.31784 5.44857V4.74162C9.31784 4.38123 9.61022 4.08885 9.97061 4.08885C10.331 4.08885 10.6234 4.38123 10.6234 4.74162V5.4486C12.2344 5.70739 13.2345 6.82644 13.2345 8.00542C13.2345 8.36581 12.9421 8.65819 12.5817 8.65819C12.2213 8.65819 11.9289 8.36581 11.9289 8.00542C11.9289 7.57335 11.5512 7.01262 10.6234 6.78465V9.3651C12.2344 9.62388 13.2345 10.7429 13.2345 11.922Z"
      fill="currentColor"
    />
    <path
      d="M8.01172 8.00544C8.01172 8.43755 8.38941 8.99824 9.31726 9.22621V6.78467C8.3882 7.01271 8.01172 7.57333 8.01172 8.00544Z"
      fill="currentColor"
    />
  </svg>
);
const UserIcon = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 4.99246H10C10.3438 4.99246 10.625 4.71121 10.625 4.36746V3.11621C10.625 2.77246 10.3438 2.4909 10 2.4909H9.03125C8.67594 0.836523 6.32406 0.836211 5.96875 2.4909H5C4.65625 2.4909 4.375 2.77215 4.375 3.1159V4.36684C4.375 4.71059 4.65625 4.99215 5 4.99215V4.99246ZM7.5 9.7859C9.01719 9.73746 9.01375 7.54152 7.5 7.49402C5.98594 7.54152 5.98312 9.73777 7.5 9.7859ZM5.9375 13.4346H9.0625C9.23438 13.4346 9.375 13.294 9.375 13.1221V12.2871C9.2875 9.80434 5.71187 9.80465 5.625 12.2871V13.1221C5.625 13.294 5.76562 13.4346 5.9375 13.4346Z"
      fill="currentColor"
    />
    <path
      d="M11.5625 3.42941H11.25V4.36753C11.2501 4.53174 11.2178 4.69435 11.155 4.84608C11.0922 4.99781 11.0002 5.13568 10.8841 5.25182C10.768 5.36796 10.6302 5.46009 10.4785 5.52295C10.3268 5.5858 10.1642 5.61816 10 5.61816H5C4.8358 5.61816 4.6732 5.5858 4.5215 5.52295C4.3698 5.46009 4.23198 5.36796 4.1159 5.25182C3.99981 5.13568 3.90775 4.99781 3.84497 4.84608C3.78219 4.69435 3.74992 4.53174 3.75 4.36753V3.42941C2.60312 3.31128 1.56344 4.12003 1.5625 5.30566V16.8744C1.56267 17.3718 1.76022 17.8487 2.11178 18.2005C2.46334 18.5523 2.94016 18.7502 3.4375 18.7507H11.5625C12.5969 18.7507 13.4375 17.9097 13.4375 16.8747V5.30566C13.4373 4.80831 13.2398 4.33136 12.8882 3.97957C12.5367 3.62778 12.0598 3.4299 11.5625 3.42941ZM5 12.2875C5.00047 11.8176 5.13357 11.3573 5.384 10.9596C5.63442 10.5619 5.992 10.2429 6.41563 10.0394C6.20245 9.87395 6.02975 9.66212 5.91063 9.41998C5.79151 9.17784 5.7291 8.91176 5.72813 8.64191C5.81125 6.29691 9.18813 6.29503 9.27187 8.64191C9.27187 9.20753 9 9.71441 8.58437 10.0394C9.008 10.2429 9.36558 10.5619 9.616 10.9596C9.86643 11.3573 9.99953 11.8176 10 12.2875V13.1225C9.99934 13.371 9.90038 13.6092 9.72472 13.7849C9.54907 13.9607 9.311 14.0598 9.0625 14.0607H5.9375C5.42188 14.0607 5 13.6385 5 13.1225V12.2875ZM10.625 16.8747H4.375C4.20312 16.8747 4.0625 16.7341 4.0625 16.5622C4.0625 16.3903 4.20312 16.2494 4.375 16.2494H10.625C11.0334 16.2566 11.0372 16.8666 10.625 16.8744V16.8747ZM10.625 15.6238H4.375C4.20312 15.6238 4.0625 15.4832 4.0625 15.3113C4.0625 15.1394 4.20312 14.9988 4.375 14.9988H10.625C11.0334 15.0057 11.0372 15.616 10.625 15.6238ZM14.6438 17.5188C14.8188 17.9469 15.075 18.3316 15.4031 18.66C15.4656 18.7194 15.5437 18.7507 15.625 18.7507C15.7063 18.7507 15.7844 18.7194 15.8469 18.66C16.4264 18.0751 16.7844 17.3069 16.8594 16.4869H14.3875C14.4219 16.84 14.5063 17.1841 14.6438 17.5188ZM17.5 6.55628H16.875C16.8584 5.98534 16.9975 5.16128 16.5094 4.73347C15.7531 3.94909 14.3531 4.52347 14.375 5.61847V7.18159H17.5C17.6719 7.18159 17.8125 7.32222 17.8125 7.49409V10.621C17.8125 10.7928 17.9531 10.9338 18.125 10.9338C18.2969 10.9338 18.4375 10.7932 18.4375 10.6213V7.49441C18.4368 7.24591 18.3379 7.00777 18.1622 6.832C17.9866 6.65623 17.7485 6.55711 17.5 6.55628Z"
      fill="currentColor"
    />
    <path
      d="M14.375 7.80664H16.875V15.861H14.375V7.80664Z"
      fill="currentColor"
    />
  </svg>
);
const PaymentIcon = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.6361 16.3637H15.4543C13.4493 16.3637 11.818 14.7324 11.818 12.7274C11.818 10.7223 13.4493 9.09108 15.4543 9.09108H18.6361C18.6958 9.09112 18.7549 9.07939 18.8101 9.05656C18.8652 9.03373 18.9154 9.00025 18.9576 8.95804C18.9998 8.91582 19.0333 8.86569 19.0561 8.81053C19.0789 8.75536 19.0907 8.69623 19.0906 8.63653V7.27292C19.0906 6.31975 18.3513 5.54458 17.4172 5.46941L14.8067 0.909826C14.5648 0.488128 14.1742 0.186727 13.7067 0.0615729C13.2415 -0.062729 12.7551 0.00255401 12.3387 0.244894L3.38986 5.45475H1.81817C0.815441 5.45475 0 6.27015 0 7.27292V18.1818C0 19.1846 0.815398 20 1.81817 20H17.2725C18.2752 20 19.0906 19.1846 19.0906 18.1818V16.8182C19.0907 16.7585 19.0789 16.6994 19.0561 16.6442C19.0333 16.5891 18.9998 16.5389 18.9576 16.4967C18.9154 16.4545 18.8652 16.421 18.8101 16.3982C18.7549 16.3754 18.6958 16.3636 18.6361 16.3637ZM15.3704 3.72484L16.3609 5.45475H12.3991L15.3704 3.72484ZM5.19665 5.45475L12.7963 1.03055C13.0018 0.910252 13.242 0.878292 13.4715 0.93957C13.7036 1.0017 13.8972 1.15174 14.0175 1.36169L14.0184 1.36336L6.99112 5.45475H5.19665Z"
      fill="currentColor"
    />
    <path
      d="M18.6356 10H15.4538C13.9499 10 12.7266 11.2233 12.7266 12.7272C12.7266 14.2311 13.9499 15.4545 15.4538 15.4545H18.6356C19.3875 15.4545 19.9992 14.8428 19.9992 14.0908V11.3636C19.9992 10.6117 19.3875 10 18.6356 10ZM15.4538 13.6363C14.9527 13.6363 14.5447 13.2284 14.5447 12.7272C14.5447 12.2261 14.9527 11.8182 15.4538 11.8182C15.9549 11.8182 16.3629 12.2261 16.3629 12.7272C16.3629 13.2284 15.955 13.6363 15.4538 13.6363Z"
      fill="currentColor"
    />
  </svg>
);

const steps = [
  {
    id: 1,
    title: "Select Package",
    description: "Choose your plan",
    icon: PlanIcon,
  },
  {
    id: 2,
    title: "Founder Membership",
    description: "Join as Founder",
    icon: UserIcon,
  },
  {
    id: 3,
    title: "Add Payment Information",
    description: "Provide billing details",
    icon: PaymentIcon,
  },
];

function ProgressTracker({ currentStep = 0 }) {
  const getStepStatus = (stepId) => {
    // stepId is 1-based (1, 2, 3)
    // currentStep is 0-based (0, 1, 2)
    // currentStep 0 = Step 1 is active
    // currentStep 1 = Step 1 completed, Step 2 is active
    // currentStep 2 = Step 1-2 completed, Step 3 is active
    if (stepId <= currentStep) return "completed";
    if (stepId === currentStep + 1) return "active";
    return "pending";
  };

  const getStepConfig = (stepId) => {
    const status = getStepStatus(stepId);

    if (status === "completed") {
      return {
        bgColor: "bg-[#4ab04a]",
        borderColor: "border-[#4ab04a]",
        iconColor: "text-white",
        textColor: "text-black",
        descriptionColor: "text-[#393939]",
      };
    } else if (status === "active") {
      return {
        bgColor: "bg-black",
        borderColor: "border-black",
        iconColor: "text-white",
        textColor: "text-black",
        descriptionColor: "text-[#393939]",
      };
    } else {
      return {
        bgColor: "bg-transparent",
        borderColor: "border-[#969698]",
        iconColor: "text-[#969698]",
        textColor: "text-[#969698]",
        descriptionColor: "text-[#969698]",
      };
    }
  };

  return (
    <>
      {/* Desktop: Vertical Layout */}
      <div className="hidden lg:flex flex-col gap-12 items-start">
        {steps.map((step, index) => {
          const config = getStepConfig(step.id);
          const Icon = step.icon;
          const status = getStepStatus(step.id);

          return (
            <div
              key={step.id}
              className="relative flex gap-3 items-center w-full"
            >
              {/* Step Circle */}
              <div
                className={`flex items-center justify-center p-[10px] rounded-full size-[40px] border-2 ${config.bgColor} ${config.borderColor} flex-shrink-0`}
              >
                {status === "completed" ? (
                  <Check className={`size-5 ${config.iconColor}`} />
                ) : (
                  <Icon className={`size-5 ${config.iconColor}`} />
                )}
              </div>

              {/* Step Content */}
              <div className="flex flex-col flex-1 min-w-0">
                <p
                  className={`font-['Vazirmatn'] font-bold leading-[28px] text-[16px] ${config.textColor}`}
                >
                  {step.title}
                </p>
                <p
                  className={`font-['Vazirmatn'] font-normal leading-[20px] text-[14px] ${config.descriptionColor}`}
                >
                  {step.description}
                </p>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[20px] top-[48px] h-[48px] w-0 border-l border-[#d4d4d4]" />
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile: Card Layout - Show only current step */}
      <div className="lg:hidden w-full bg-[#F4F4F4] px-4 py-4">
        {steps.map((step) => {
          const config = getStepConfig(step.id);
          const status = getStepStatus(step.id);

          // Only show the active step
          if (status !== "active") return null;

          const totalSteps = steps.length;
          const displayStepNumber = step.id;
          const radius = 45;
          const circumference = 2 * Math.PI * radius;
          const progress = displayStepNumber / totalSteps;

          return (
            <div key={step.id} className="flex items-center gap-4">
              {/* Progress Circle Badge */}
              <div className="relative flex-shrink-0">
                {/* Background Circle */}
                <svg
                  className="w-15 h-15"
                  viewBox="0 0 100 100"
                  style={{ transform: "rotate(-90deg)" }}
                >
                  {/* Background Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="#F4F4F4"
                    stroke="#e5e5e5"
                    strokeWidth="7"
                  />
                  {/* Progress Arc */}
                  {status === "completed" && (
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      fill="none"
                      stroke="#4ab04a"
                      strokeWidth="7"
                      strokeDasharray={`${circumference} ${circumference}`}
                      strokeLinecap="round"
                    />
                  )}
                  {status === "active" && (
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      fill="none"
                      stroke="#4ab04a"
                      strokeWidth="7"
                      strokeDasharray={`${circumference * progress} ${circumference}`}
                      strokeLinecap="round"
                      className="transition-all duration-500"
                    />
                  )}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <p className="font-['Vazirmatn'] font-[400] text-[10px] text-[#000] leading-none">
                    Step {displayStepNumber}/{totalSteps}
                  </p>
                </div>
              </div>

              {/* Step Content */}
              <div className="flex flex-col flex-1 min-w-0">
                <p
                  className={`font-['Vazirmatn'] !text-[16px] !font-bold leading-tight  ${config.textColor}`}
                >
                  {step.title}
                </p>
                <p
                  className={`font-['Vazirmatn'] font-normal leading-tight text-[12px] text-[#6F6D66] mt-1 ${config.descriptionColor}`}
                >
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProgressTracker;
