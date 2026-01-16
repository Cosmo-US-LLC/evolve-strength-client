import React from "react";
import { Download, User } from "lucide-react";

function SuccessCertificate({ primaryMember, familyMembers, onBack }) {
  const handleDownloadCertificate = () => {
    // TODO: Implement certificate download when backend is ready
    console.log("Download certificate");
  };

  const handleDownloadMemberPass = (memberId) => {
    // TODO: Implement member pass download when backend is ready
    console.log("Download member pass for:", memberId);
  };

  return (
    <div className="w-full flex items-center justify-center min-h-[80vh]">
      <div className="backdrop-blur-[28.15px] bg-[#fcfcfc] border border-[#d4d4d4] rounded-[16px] p-8 max-w-[904px] w-full">
        <div className="flex flex-col gap-5 items-center">
          {/* Success Message */}
          <div className="flex flex-col gap-4 items-center text-center max-w-[520px]">
            <h2 className="font-['Kanit'] font-bold text-black text-[40px] uppercase leading-[39px]">
              Founder Rate Locked! 🎉
            </h2>
            <p className="font-['Vazirmatn'] font-normal text-black text-[16px] leading-[24px] max-w-[380px]">
              Congratulations! You've secured founder pricing for the next 2 years.
            </p>
          </div>

          {/* Certificate Placeholder */}
          <div className="border border-black border-dashed h-[320px] rounded-[11.79px] w-full max-w-[520px] flex items-center justify-center bg-white">
            <div className="text-center p-8">
              <p className="font-['Kanit'] font-bold text-black text-[24px] mb-4">
                OFFICIAL RATE LOCK CERTIFICATE
              </p>
              <p className="font-['Vazirmatn'] font-normal text-black text-[16px] mb-2">
                This certifies that
              </p>
              <p className="font-['Kanit'] font-bold text-[#4ab04a] text-[20px] mb-4">
                {primaryMember.firstName} {primaryMember.lastName}
              </p>
              <p className="font-['Vazirmatn'] font-normal text-black text-[14px]">
                has secured the exclusive Founder's Rate of{" "}
                <span className="font-bold">$29.99 Bi-Weekly</span> for 24 months,
                protected from future price increases.
              </p>
            </div>
          </div>

          {/* Download Certificate Button */}
          <button onClick={handleDownloadCertificate} className="btnPrimary">
            Download Your Certificate
          </button>

          {/* Individual Member Passes */}
          {familyMembers.length > 0 && (
            <div className="flex flex-col gap-4 items-start w-full max-w-[520px] mt-4">
              {/* Divider with Title */}
              <div className="flex gap-3 items-center w-full">
                <div className="flex-1 h-px bg-[#d4d4d4]" />
                <p className="font-['Kanit'] font-medium text-black text-[16px] leading-[21px] whitespace-nowrap">
                  Individual Member Passes
                </p>
                <div className="flex-1 h-px bg-[#d4d4d4]" />
              </div>

              {/* Member Pass Cards */}
              <div className="flex flex-col gap-4 w-full">
                {familyMembers.map((member, index) => (
                  <div
                    key={member.id}
                    className="bg-[#fcfcfc] border border-[#c4c4c4] rounded-[8px] px-3 py-2.5 flex items-center justify-between"
                  >
                    <div className="flex gap-2 items-center">
                      <div className="bg-[rgba(74,176,74,0.1)] rounded-[9px] p-0.5 size-6 flex items-center justify-center">
                        <User className="size-3 text-[#4ab04a]" />
                      </div>
                      <div className="flex flex-col leading-[20px]">
                        <p className="font-['Kanit'] font-medium text-[#0a0a0a] text-[14px]">
                          {member.firstName} {member.lastName}
                        </p>
                        <p className="font-['Kanit'] font-light text-[#4a5565] text-[12px]">
                          {index === 0 ? "Spouse" : "Child"}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDownloadMemberPass(member.id)}
                      className="size-[18px] flex items-center justify-center hover:opacity-70"
                    >
                      <Download className="size-4 text-black" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

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

