import React from "react";

function LocationsHoverCard({ show, mousePosition, data }) {
  console.log("LocationsHoverCard render:", { show, mousePosition, data });

  if (!show || !data) {
    console.log("LocationsHoverCard: Not showing - show:", show, "data:", data);
    return null;
  }

  // Single card design for all devices
  const cardContent = (
    <div
      className="bg-[#F6F6F6] rounded-[10px] shadow-[0_4px_24px_rgba(0,0,0,0.16)] max-w-[280px] md:max-w-[300px]"
      style={{
        border: `2px solid ${data.available ? "#4AB04A" : "#CCCCCC"}`,
      }}
    >
      <div className="flex flex-col justify-center items-center px-3 py-3 md:px-8 md:py-3">
        <p className="font-[kanit] text-[14px] md:text-[18px] font-[600] leading-normal capitalize text-center">
          {data.name}
        </p>

        <h4 className="font-[kanit] font-[300] text-[12px] md:text-[14px] capitalize text-center">
          {data.available ? "Available" : "Unavailable"}
        </h4>
      </div>
    </div>
  );

  // Mobile-specific positioning
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    // Mobile: Center the card at the bottom of the screen
    return (
      <div
        className="fixed z-50 pointer-events-auto top-[54%] left-1/2 transform -translate-x-1/2"
        style={{
          touchAction: "none",
        }}
      >
        {cardContent}
      </div>
    );
  }

  // Desktop: Use mouse position
  return (
    <div
      className="fixed z-50 pointer-events-auto"
      style={{
        left: mousePosition.x + 20,
        top: mousePosition.y - 20,
        transform: "translateY(-50%)",
        touchAction: "none",
      }}
    >
      {cardContent}
    </div>
  );
}

export default LocationsHoverCard;
