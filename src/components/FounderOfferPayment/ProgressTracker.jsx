import React from "react";
import { Check, User, CreditCard } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Founder Membership",
    description: "Join as Founder",
    icon: Check,
  },
  {
    id: 2,
    title: "Add Primary Details",
    description: "Enter your basic information.",
    icon: User,
  },
  {
    id: 3,
    title: "Add Payment Information",
    description: "Provide billing details.",
    icon: CreditCard,
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
                      r="45"
                      fill="none"
                      stroke="#4ab04a"
                      strokeWidth="7"
                      strokeDasharray="282.7 282.7"
                      strokeLinecap="round"
                    />
                  )}
                  {status === "active" && (
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#4ab04a"
                      strokeWidth="7"
                      strokeDasharray="141.35 282.7"
                      strokeLinecap="round"
                      className="transition-all duration-500"
                    />
                  )}
                </svg>
                {/* Text in center */}
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <p className="font-['Vazirmatn'] font-[400] text-[10px] text-[#000] leading-none">
                    Step {step.id}/4
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
