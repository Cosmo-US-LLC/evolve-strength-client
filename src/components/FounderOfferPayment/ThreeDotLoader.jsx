import React from "react";

/**
 * Three bouncing dots, used inside buttons across the Founder Offer
 * Payment flow (Select Package / Your Details / Payment steps) while a
 * "Next" or submit action is in progress.
 */
function ThreeDotLoader({ className = "" }) {
  return (
    <span
      className={`inline-flex items-center justify-center gap-1 ${className}`}
      role="status"
      aria-label="Loading"
    >
      <span
        className="size-2 animate-bounce rounded-full bg-current"
        style={{ animationDelay: "0ms" }}
      />
      <span
        className="size-2 animate-bounce rounded-full bg-current"
        style={{ animationDelay: "150ms" }}
      />
      <span
        className="size-2 animate-bounce rounded-full bg-current"
        style={{ animationDelay: "300ms" }}
      />
    </span>
  );
}

export default ThreeDotLoader;
