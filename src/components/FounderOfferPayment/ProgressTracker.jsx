import React from "react";
import { Check, User, CreditCard } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Founder Membership",
    description: "Selected",
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
    <div className="flex flex-col gap-12 items-start">
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
  );
}

export default ProgressTracker;
