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

function ProgressTracker({ currentStep }) {
  const getStepStatus = (stepId) => {
    // Step 1 (Founder Membership) is always completed
    if (stepId === 1) return "completed";
    // Map currentStep (1-3) to progress steps (2-4)
    // currentStep 1 = Primary Details (step 2 in tracker)
    // currentStep 2 = Payment (step 3 in tracker)
    // currentStep 3 = Success (all steps completed)
    const progressStep = currentStep + 1;
    if (stepId < progressStep) return "completed";
    if (stepId === progressStep) return "active";
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

      {/* Mobile: Horizontal Layout (One Row) */}
      <div className="lg:hidden w-full">
        <div className="flex items-center justify-between relative">
          {/* Progress Line Background - Full width with padding */}
          <div className="absolute top-[20px] left-[60px] right-[60px] h-[1.5px] bg-[#e5e5e5] -z-0" />
          
          {/* Progress Line Fill - Calculated based on step progress */}
          <div 
            className="absolute top-[20px] left-[40px] h-[1.5px] bg-[#4ab04a] -z-0 transition-all duration-500 ease-out"
            style={{ 
              // Calculate width: for 3 steps, we have 2 segments
              // Step 1 completed = 0% (no line filled yet)
              // Step 2 active (currentStep=1) = 50% (first segment filled)
              // Step 3 active (currentStep=2) = 100% (both segments filled)
              width: currentStep === 1 
                ? 'calc((100% - 60px) * 0.5)' 
                : currentStep >= 2 
                ? 'calc(100% - 80px)' 
                : '0px'
            }}
          />

          {steps.map((step) => {
            const config = getStepConfig(step.id);
            const Icon = step.icon;
            const status = getStepStatus(step.id);

            return (
              <div key={step.id} className="flex flex-col items-center flex-1 relative z-10">
                {/* Step Circle */}
                <div
                  className={`flex items-center justify-center rounded-full size-[40px] border-2 ${config.borderColor} flex-shrink-0 mb-2 ${config.bgColor === 'bg-transparent' ? 'bg-white' : config.bgColor} shadow-sm transition-all duration-300`}
                >
                  {status === "completed" ? (
                    <Check className={`size-5 ${config.iconColor}`} />
                  ) : (
                    <Icon className={`size-5 ${config.iconColor}`} />
                  )}
                </div>

                {/* Step Title and Description (Mobile) */}
                <div className="flex gap-1 flex-col items-center text-center px-1 w-full">
                  <p
                    className={`font-['Vazirmatn'] font-bold leading-[16px] text-[14px] ${config.textColor} max-md:h-[30px] mb-0.5`}
                  >
                    {step.title}
                  </p>
                  <p
                    className={`font-['Vazirmatn'] max-md:h-[30px] font-normal leading-[14px] text-[12px] ${config.descriptionColor}`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProgressTracker;
