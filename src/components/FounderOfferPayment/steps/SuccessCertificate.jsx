import React from "react";
import { Download } from "lucide-react";

function SuccessCertificate({ primaryMember, onBack }) {
  const handleDownloadCertificate = () => {
    // TODO: Implement certificate download when backend is ready
    console.log("Download certificate");
  };

  // Get current date formatted as "07TH JANUARY 2026"
  const getCurrentDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0").toUpperCase();
    const month = date.toLocaleString("en-US", { month: "long" }).toUpperCase();
    const year = date.getFullYear();
    
    // Convert day to ordinal (07TH, 1ST, 2ND, etc.)
    const dayNum = date.getDate();
    let ordinal = "TH";
    if (dayNum % 10 === 1 && dayNum !== 11) ordinal = "ST";
    else if (dayNum % 10 === 2 && dayNum !== 12) ordinal = "ND";
    else if (dayNum % 10 === 3 && dayNum !== 13) ordinal = "RD";
    
    return `${String(dayNum).padStart(2, "0")}${ordinal} ${month} ${year}`;
  };

  const memberName = `${primaryMember?.firstName || "[First Name]"} ${primaryMember?.lastName || "[Last Name]"}`.trim();

  return (
    <div className="w-full flex items-center justify-center min-h-[80vh]">
      <div className="backdrop-blur-[28.15px] bg-[#fcfcfc] border border-[#d4d4d4] rounded-[16px] p-8 max-w-[904px] w-full">
        <div className="flex flex-col gap-5 items-center">
          {/* Success Message */}
          <div className="flex flex-col gap-4 items-center text-center max-w-[520px]">
            <h2 className="font-['Kanit'] font-bold text-black text-[40px] uppercase leading-[39px]">
              Founder Rate Locked! 🏋🏻
            </h2>
            <p className="font-['Vazirmatn'] font-normal text-black text-[16px] leading-[24px] max-w-[380px]">
              Congratulations! You've secured founder pricing for the next 2
              years.
            </p>
          </div>

          {/* Certificate Placeholder */}
          <div className="border border-black border-dashed min-h-[320px] rounded-[11.79px] w-full max-w-[520px] flex items-center justify-center bg-white">
            <div className="w-full relative rounded-[12px] overflow-hidden bg-[#fff] flex-shrink-0 p-6 md:p-8 flex gap-2 flex-col">
              <div className="">
                <img
                  src="/assets/images/presaleCommonSouth/Evolve-Strength-Logo-Presale.svg"
                  alt="Logo"
                />
              </div>

              {/* Main Title - Centered Upper Half */}
              <div className="">
                <h2 className="!font-[900] md:!leading-[77%] !leading-[90%] max-md:!text-[20px] uppercase text-[#000]">
                  OFFICIAL RATE
                  <br />
                  LOCK CERTIFICATE
                </h2>
              </div>

              {/* Certificate Text */}
              <div className="md:flex block justify-between items-center gap-3">
                <div className="flex flex-col md:mt-1">
                  <p className="text-[16px] md:text-[16px] mb-1 font-[700] font-[Kanit] text-[#4ab04a] uppercase">
                    {memberName}
                  </p>
                  <p className="text-[14px] md:text-[12px] max-w-[440px] leading-[22px] md:leading-[18px] font-[400] font-[Kanit] text-black">
                    This certifies that{" "}
                    <span className="font-[700]">{memberName}</span> has
                    secured the exclusive Founder&apos;s Rate of{" "}
                    <span className="font-[700]">$29.99 Bi-Weekly</span> for 24
                    months, protected from future price increases.
                  </p>
                </div>
                <div className="">
                  {/* Large watermark logo placeholder - will be replaced with actual logo */}
                  <div className="w-[100px] md:w-[100px] h-auto">
                    {/* Watermark logo image will go here */}
                    <img
                      src="/assets/images/presaleCommonSouth/evolve-dark-logo.svg"
                      alt="Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Section - Date and Signature */}
              <div className="mt-auto max-w-[400px] flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-4">
                {/* Date Section - Bottom Left */}
                <div className="flex flex-col">
                  <p className="text-[14px] md:text-[14px] font-[700] font-[Kanit] !text-[#737373] uppercase">
                    {getCurrentDate()}
                  </p>
                  <p className="text-[12px] md:text-[14px] font-[600] font-[Kanit] text-black mt-1 uppercase">
                    CURRENT DATE
                  </p>
                </div>

                {/* Signature Section - Bottom Right */}
                {/* <div className="flex flex-col items-end">
                <img
                  src="/assets/images/presaleCommonSouth/Evolve-Strength-Logo-Presale.svg"
                  alt="Logo"
                />
                <p className="text-[12px] md:text-[14px] font-[400] font-[Kanit] text-black uppercase">
                  CEO
                </p>
              </div> */}
              </div>

              {/* Watermark Logo - Bottom Right (Faded) */}
            </div>
          </div>

          {/* Download Certificate Button */}
          <button onClick={handleDownloadCertificate} className="btnPrimary">
            Download Your Certificate
          </button>

          {/* Back to Home Button */}
          <button
            onClick={onBack}
            className="mt-6 font-['Kanit'] font-light text-black text-[16px] uppercase hover:underline"
          >
            Back to Presale Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessCertificate;
