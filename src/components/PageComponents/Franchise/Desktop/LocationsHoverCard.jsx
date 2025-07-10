import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

function LocationsHoverCard({ show, mousePosition, data }) {
  if (!show || !data) return null;
  return (
    <div
      className="fixed z-50 bg-[#fff] rounded-[10px] shadow-[0_4px_24px_rgba(0,0,0,0.16)] max-w-[370px] pointer-events-none border border-[#E5E7EB]"
      style={{
        left: mousePosition.x + 20,
        top: mousePosition.y - 20,
        transform: "translateY(-50%)",
      }}
    >
      <div className="w-full h-[220px] rounded-t-[16px] overflow-hidden relative">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col gap-4">
        <p className="text-[16px] font-kanit font-[600] leading-normal capitalize">
          {data.name}
        </p>
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 mt-0.5 text-[#4AB04A] flex-shrink-0" />
          <p className="text-[14px] font-kanit font-[400] leading-normal capitalize">
            {data.address}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-[#4AB04A] flex-shrink-0" />
          <p className="text-[14px] font-kanit font-[400] leading-normal capitalize">
            {data.phone}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-[#4AB04A] flex-shrink-0" />
          <p className="text-[14px] font-kanit font-[400] leading-normal capitalize">
            {data.email}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LocationsHoverCard;
