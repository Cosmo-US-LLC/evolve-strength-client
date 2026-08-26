import React from "react";
import { QRCodeSVG } from "qrcode.react";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("5300 No 3 Rd, Richmond, BC, V6X 2X9");

const infoItems = [
  {
    label: "Location",
    value: "Inside Lansdowne Centre, Richmond BC",
    icon: (
      <path
        d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
        stroke="#4AB04A"
        strokeWidth="1.6"
      />
    ),
    hasCircle: true,
  },
  {
    label: "Address",
    value: "Unit 314, 5300 No 3 Rd, Richmond, BC, V6X 2X9",
    icon: (
      <path
        d="M4 21V8l8-5 8 5v13M9 21v-6h6v6"
        stroke="#4AB04A"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Opening",
    value: "2027",
    icon: (
      <>
        <rect x="3.5" y="5" width="17" height="16" rx="2" stroke="#4AB04A" strokeWidth="1.6" />
        <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" stroke="#4AB04A" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
];

function LansdowneComingSoon() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#08090A]">
      {/* Ambient glow background */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full bg-[#4AB04A]/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[480px] h-[480px] rounded-full bg-[#4AB04A]/10 blur-[160px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 h-full max-w-[1280px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-8 items-center">
        {/* Left: Story */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[#4AB04A]/10 border border-[#4AB04A]/40 px-4 py-1.5 rounded-full mb-5 md:mb-6">
            <span className="w-[7px] h-[7px] rounded-full bg-[#4AB04A] animate-pulse" />
            <span className="text-[#4AB04A] !font-[Kanit] text-[12px] md:text-[13px] font-[600] uppercase tracking-[1.5px]">
              Next Location · Opening 2027
            </span>
          </div>

          <h1 className="!font-[Kanit] uppercase text-[#FFFFFF] text-[36px] leading-[40px] md:text-[68px] md:leading-[68px] font-[600] mb-2">
            Evolve
            <br />
            <span className="text-[#4AB04A]">Lansdowne</span>
          </h1>

          <p className="text-[#B5BAB6] !font-[Kanit] !text-[15px] md:!text-[17px] !leading-[24px] max-w-[480px] mt-5 mb-8">
            Vancouver's fastest-growing strength club is coming to Lansdowne
            Centre. Scan the code to save your spot and lock a founding
            member rate before it ever goes public.
          </p>

          <div className="flex flex-col gap-4 max-w-[440px]">
            {infoItems.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-[10px] bg-white/[0.04] border border-white/10 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    {item.icon}
                    {item.hasCircle && (
                      <circle cx="12" cy="9" r="2.4" stroke="#4AB04A" strokeWidth="1.6" />
                    )}
                  </svg>
                </div>
                <div>
                  <p className="text-[#7C817D] !font-[Kanit] !text-[12px] uppercase tracking-[1.5px] mb-1">
                    {item.label}
                  </p>
                  <p className="text-[#EDEFED] !font-[Kanit] !text-[15px] !font-[400] !leading-[22px]">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: QR code card */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative rounded-[24px] bg-white/[0.03] border border-white/10 backdrop-blur-xl p-6 md:p-10 overflow-hidden max-w-[420px] w-full">
            <div className="pointer-events-none absolute -top-24 -right-24 w-[220px] h-[220px] rounded-full bg-[#4AB04A]/20 blur-[80px]" />
            <div className="relative flex flex-col items-center text-center">
              <div className="bg-white p-5 rounded-[16px]">
                <QRCodeSVG
                  value={mapsUrl}
                  size={260}
                  level="H"
                  fgColor="#08090A"
                  bgColor="#FFFFFF"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LansdowneComingSoon;
