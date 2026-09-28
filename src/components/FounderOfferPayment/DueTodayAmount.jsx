import React from "react";

// Presentation only: renders the already-formatted amount string (e.g.
// "$0.00") with the cents as a smaller superscript. Whatever string the
// parent passes in is shown as-is - if it doesn't look like "$12.34" the
// whole value is rendered unchanged.
function DueTodayAmount({ value = "$0.00", className = "", centsClassName = "" }) {
  const match = String(value).match(/^(.*?)(\.\d+)$/);
  const main = match ? match[1] : value;
  const cents = match ? match[2] : "";

  return (
    <span
      className={`inline-flex items-start font-['Kanit'] font-semibold leading-none ${className}`}
    >
      <span>{main}</span>
      {cents && (
        <span
          className={`mt-[0.15em] text-[0.42em] font-medium leading-none ${centsClassName}`}
        >
          {cents}
        </span>
      )}
    </span>
  );
}

export default DueTodayAmount;
