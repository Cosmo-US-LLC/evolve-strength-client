import React, { useState } from "react";
import { Download } from "lucide-react";

import icon1 from "@/assets/images/PresaleEdmontonSouthCommon/priceTab/icon_1.svg";
import icon2 from "@/assets/images/PresaleEdmontonSouthCommon/priceTab/icon_2.svg";
import icon3 from "@/assets/images/PresaleEdmontonSouthCommon/priceTab/icon_3.svg";
import icon4 from "@/assets/images/PresaleEdmontonSouthCommon/priceTab/icon_5.svg";

function SuccessCertificate({ primaryMember, onBack }) {
  const [isDownloading, setIsDownloading] = useState(false);

  const loadScript = (src) =>
    new Promise((resolve, reject) => {
      if (typeof document === "undefined") return reject(new Error("No DOM"));
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) {
        if (existing.dataset.loaded === "true") return resolve();
        existing.addEventListener("load", () => resolve(), { once: true });
        existing.addEventListener(
          "error",
          () => reject(new Error("Load failed")),
          {
            once: true,
          },
        );
        return;
      }

      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.dataset.loaded = "false";
      script.onload = () => {
        script.dataset.loaded = "true";
        resolve();
      };
      script.onerror = () => reject(new Error("Load failed"));
      document.body.appendChild(script);
    });

  const handleDownloadCertificate = async () => {
    if (isDownloading) return;
    const certificateElement = document.getElementById("certificate");
    if (!certificateElement) return;

    setIsDownloading(true);
    try {
      const html2CanvasUrl =
        "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js";
      const jsPdfUrl =
        "https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js";

      await Promise.all([loadScript(html2CanvasUrl), loadScript(jsPdfUrl)]);

      if (document.fonts?.ready) {
        await document.fonts.ready;
      }

      const scale = Math.max(2, window.devicePixelRatio || 2);
      const canvas = await window.html2canvas(certificateElement, {
        scale,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
      });

      const imageData = canvas.toDataURL("image/png", 1.0);
      const pdfModule = window.jspdf || window;
      const jsPDF = pdfModule.jsPDF;

      if (!jsPDF) {
        throw new Error("PDF library not available");
      }

      const orientation =
        canvas.width > canvas.height ? "landscape" : "portrait";
      const pdf = new jsPDF({
        orientation,
        unit: "px",
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(imageData, "PNG", 0, 0, canvas.width, canvas.height);

      const safeName = memberName
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/gi, "")
        .toLowerCase();
      const filename = safeName
        ? `founder-certificate-${safeName}.pdf`
        : "founder-certificate.pdf";

      pdf.save(filename);
    } catch (error) {
      console.error("Failed to download certificate:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  // Get current date formatted as "07TH JANUARY 2026"
  const getCurrentDate = () => {
    const date = new Date();
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

  const memberName =
    `${primaryMember?.firstName || "[First Name]"} ${primaryMember?.lastName || "[Last Name]"}`.trim();

  return (
    <div className="w-full flex items-center justify-center min-h-[80vh]">
      <div className="border-[8px] border-[#5B5B5B] bg-[#5B5B5B] rounded-[16px] max-w-[904px] w-full">
        <div className="flex flex-col gap-5 items-center bg-[#fcfcfc] md:p-8 p-4 rounded-[14px]">
          <div className="w-full flex justify-end">
            <button onClick={onBack} className="cursor-pointer">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 7L7 21M21 21L7 7"
                  stroke="black"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div>
            <img
              src="https://evolve-strength.tor1.digitaloceanspaces.com/media/1770285600359-c4718eeb-3b12-4e95-bf3f-d4db2faf105e.png"
              alt="Certificate"
              crossOrigin="anonymous"
              className="w-[162px] h-[162px] aspect-square"
            />
          </div>

          {/* Success Message */}
          <div className="flex flex-col gap-4 items-center text-center max-w-[520px]">
            <h2 className="font-['Kanit'] font-bold text-[#000000] md:text-[40px] uppercase leading-[39px]">
              Founder Rate Locked!
            </h2>
            <p className="font-['Vazirmatn'] font-normal text-[#000000] text-[16px] leading-[24px] max-w-[380px]">
              Congratulations! You've secured founder pricing for the next 2
              years.
            </p>
          </div>

          {/* Certificate (rendered offscreen for PDF capture) */}
          <div
            className="fixed -left-[10000px] top-0 z-[-1] w-[700px] pointer-events-none"
            aria-hidden="true"
          >
            <div
              id="certificate"
              className="w-[700px] h-[442px] relative overflow-hidden bg-[#000000] flex-shrink-0 p-8 flex gap-3 flex-col"
            >
              <div className="">
                <svg
                  width="147"
                  height="28"
                  viewBox="0 0 147 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.457031 0.961182L0.745699 1.98262L4.65382 8.57757V5.18017H22.6178L35.5413 27.0301L37.8506 22.6335L25.2158 0.961182H0.457031Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M37.3793 14.9505C37.1573 15.8165 39.3112 18.3701 39.5554 19.4137L50.3916 0.961182H45.3732L37.3793 14.9505Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M27.1281 22.8395H12.8945L15.0928 27.0363H31.7468L27.1281 19.4199V22.8395Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M22.9027 11.8044H6.64844C6.9149 13.4032 8.33603 14.6689 8.84675 16.2233H25.101C24.7679 14.6689 23.4356 13.3366 22.9027 11.8044Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M35.8314 6.98488C40.0282 6.42975 39.251 -0.209609 34.8988 0.412137C30.6576 1.03388 31.6568 7.54001 35.8314 6.98488Z"
                    fill="#4AB04A"
                  />
                  <path
                    d="M55.3281 17.6629V2.29688H66.897V5.29458H58.6589V8.40331H65.8978V11.401H58.6589V14.6208H67.0081V17.6185H55.3281V17.6629Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M77.9117 17.7739H74.9362L68.7188 2.29688H72.4492L76.4684 13.1108L80.4875 2.29688H84.1292L77.9117 17.7739Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M101.538 13.0733C101.138 14.0282 100.561 14.872 99.8279 15.6047C99.0951 16.3375 98.2513 16.8926 97.2299 17.3145C96.2085 17.7364 95.1426 17.9363 93.9435 17.9363C92.7444 17.9363 91.6786 17.7364 90.6794 17.3145C89.6801 16.8926 88.8141 16.3375 88.1035 15.6269C87.393 14.9164 86.8156 14.0726 86.4159 13.1178C86.0163 12.1629 85.8164 11.1193 85.8164 10.0312V9.98682C85.8164 8.89877 86.0163 7.85512 86.4382 6.9003C86.8379 5.94547 87.4152 5.10167 88.148 4.3689C88.8807 3.63613 89.7467 3.081 90.746 2.6591C91.7452 2.2372 92.8333 2.03735 94.0323 2.03735C95.2314 2.03735 96.2973 2.2372 97.2965 2.6591C98.2957 3.081 99.1617 3.63613 99.8723 4.3467C100.583 5.05726 101.16 5.90106 101.56 6.85589C101.96 7.81071 102.159 8.83215 102.159 9.94241V9.98682C102.159 11.0749 101.96 12.1185 101.538 13.0733ZM98.6288 9.98682C98.6288 9.32066 98.5178 8.69892 98.2957 8.12158C98.0737 7.54425 97.7406 7.03353 97.3187 6.58942C96.8968 6.14532 96.4083 5.81224 95.831 5.54578C95.2536 5.27932 94.6319 5.16829 93.9657 5.16829C93.2996 5.16829 92.6556 5.30152 92.0783 5.54578C91.5232 5.79004 91.0346 6.14532 90.6349 6.56722C90.2352 7.01132 89.9244 7.52204 89.6801 8.09938C89.4581 8.67671 89.347 9.29846 89.347 9.96462V10.009C89.347 10.6752 89.4581 11.2969 89.6801 11.8743C89.9022 12.4516 90.2352 12.9623 90.6571 13.4064C91.079 13.8505 91.5676 14.1836 92.1227 14.4501C92.6778 14.7165 93.3218 14.8276 94.0101 14.8276C94.6985 14.8276 95.298 14.6943 95.8754 14.4501C96.4527 14.2058 96.9412 13.8505 97.3409 13.4286C97.7406 13.0067 98.0515 12.4738 98.2957 11.8965C98.5178 11.3191 98.6288 10.6974 98.6288 10.0312V9.98682Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M105.16 17.6629V2.29688H108.535V14.6208H116.196V17.6629H105.16Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M126.627 17.7739H123.651L117.434 2.29688H121.164L125.183 13.1108L129.202 2.29688H132.844L126.627 17.7739Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M135.223 17.6629V2.29688H146.792V5.29458H138.553V8.40331H145.792V11.401H138.553V14.6208H146.903V17.6185H135.223V17.6629Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M59.9628 26.0829C59.8518 26.305 59.7186 26.4826 59.5409 26.6381C59.3633 26.7935 59.1412 26.9045 58.8748 26.9711C58.6305 27.06 58.3418 27.0822 58.031 27.0822C57.5869 27.0822 57.165 27.0155 56.7653 26.8601C56.3434 26.7047 55.9659 26.4826 55.6328 26.1717L56.3656 25.2835C56.632 25.5056 56.8985 25.661 57.165 25.7943C57.4314 25.9275 57.7423 25.9719 58.0532 25.9719C58.3196 25.9719 58.5195 25.9275 58.6527 25.8387C58.786 25.7498 58.8748 25.6166 58.8748 25.439C58.8748 25.439 58.8748 25.2613 58.8304 25.2169C58.8082 25.1503 58.7415 25.1059 58.6527 25.0393C58.5639 24.9727 58.4529 24.9283 58.2974 24.8838C58.142 24.8394 57.9644 24.7728 57.7201 24.7062C57.4314 24.6396 57.165 24.5508 56.9429 24.4619C56.7209 24.3731 56.521 24.2621 56.3434 24.1511C56.1879 24.0178 56.0547 23.8624 55.9659 23.6848C55.8771 23.5071 55.8327 23.2629 55.8327 22.9742C55.8327 22.7077 55.8771 22.4635 55.9881 22.2636C56.0769 22.0638 56.2101 21.8639 56.3878 21.7307C56.5654 21.5753 56.7653 21.4642 57.0095 21.3754C57.2538 21.2866 57.5203 21.2422 57.8089 21.2422C58.2308 21.2422 58.6083 21.3088 58.9636 21.4198C59.3189 21.5531 59.6298 21.7307 59.9184 21.9528L59.2745 22.8854C59.0302 22.7077 58.7637 22.5745 58.5195 22.4857C58.2752 22.3747 58.031 22.3302 57.7867 22.3302C57.5425 22.3302 57.3648 22.3747 57.2316 22.4635C57.1206 22.5523 57.0539 22.6855 57.0539 22.8188C57.0539 22.8188 57.0539 22.9964 57.0984 23.0852C57.1428 23.1518 57.1872 23.2185 57.2982 23.2629C57.4092 23.3073 57.5203 23.3739 57.6757 23.4183C57.8311 23.4627 58.031 23.5293 58.2752 23.5959C58.5639 23.6626 58.8304 23.7514 59.0524 23.8624C59.2745 23.9512 59.4743 24.0622 59.6297 24.1955C59.7852 24.3287 59.8962 24.4841 59.985 24.6618C60.0739 24.8394 60.0961 25.0615 60.0961 25.3057C60.0961 25.5944 60.0517 25.8609 59.9406 26.0829H59.9628Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M70.2919 22.4847V27.0146H69.0484V22.4847H67.3164V21.3301H72.0239V22.4847H70.2919Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M82.9457 27.0146L81.7244 25.1938H80.7474V27.0146H79.5039V21.3301H82.1019C82.7903 21.3301 83.301 21.4855 83.6785 21.8186C84.056 22.1517 84.2336 22.618 84.2336 23.1953C84.2336 23.6616 84.1226 24.0391 83.9005 24.3278C83.6785 24.6164 83.3898 24.8385 83.0123 24.9717L84.4113 27.0146H82.9457ZM82.9679 23.2841C82.9679 23.0177 82.8791 22.8178 82.7015 22.6846C82.5238 22.5514 82.2796 22.4847 81.9687 22.4847H80.7252V24.1279H81.9909C82.3018 24.1279 82.546 24.0613 82.7015 23.9059C82.8569 23.7504 82.9457 23.5728 82.9457 23.3285L82.9679 23.2841Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M91.8711 27.0146V21.3301H96.1567V22.4403H93.1146V23.595H95.8014V24.7053H93.1146V25.9044H96.2011V27.0146H91.8711Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M107.813 27.0146L105.06 23.3952V27.0146H103.816V21.3301H104.971L107.636 24.8385V21.3301H108.879V27.0146H107.813Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M120.871 26.8601C120.471 27.0377 120.005 27.1266 119.494 27.1266C119.05 27.1266 118.65 27.06 118.273 26.9045C117.895 26.7491 117.584 26.5492 117.34 26.305C117.073 26.0385 116.874 25.7276 116.718 25.3724C116.563 25.0171 116.496 24.6174 116.496 24.1955C116.496 23.7736 116.563 23.3961 116.718 23.0408C116.874 22.6855 117.073 22.3747 117.34 22.1082C117.606 21.8417 117.917 21.6197 118.273 21.4642C118.628 21.3088 119.027 21.2422 119.472 21.2422C119.716 21.2422 119.96 21.2422 120.16 21.2866C120.36 21.331 120.56 21.3754 120.737 21.442C120.915 21.5087 121.093 21.5975 121.248 21.6863C121.403 21.7751 121.559 21.8861 121.714 22.0194L120.937 22.9742C120.937 22.9742 120.715 22.7966 120.604 22.7299C120.493 22.6633 120.382 22.5967 120.271 22.5523C120.16 22.5079 120.027 22.4635 119.893 22.4413C119.76 22.4191 119.605 22.3969 119.449 22.3969C119.227 22.3969 119.005 22.4413 118.805 22.5301C118.606 22.6189 118.428 22.7521 118.295 22.9076C118.139 23.063 118.028 23.2629 117.939 23.4627C117.851 23.6848 117.806 23.9068 117.806 24.1511C117.806 24.4175 117.851 24.6618 117.939 24.8838C118.028 25.1059 118.139 25.3057 118.295 25.4612C118.45 25.6166 118.628 25.7498 118.85 25.8387C119.05 25.9275 119.294 25.9719 119.538 25.9719C120.005 25.9719 120.404 25.8609 120.715 25.6388V24.8172H119.449V23.7292H121.914V26.1939C121.625 26.4382 121.27 26.6603 120.871 26.8379V26.8601Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M132.198 22.4847V27.0146H130.955V22.4847H129.223V21.3301H133.93V22.4847H132.198Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M144.963 27.0146V24.7275H142.654V27.0146H141.41V21.3301H142.654V23.5728H144.963V21.3301H146.206V27.0146H144.963Z"
                    fill="#F1F1F1"
                  />
                </svg>
              </div>

              <div className="">
                <h2 className="!font-[900] !leading-[90%] !text-[57px] uppercase text-[#ffffff]">
                  OFFICIAL RATE
                  <br />
                  LOCK CERTIFICATE
                </h2>
              </div>

              <div className="flex flex-col mt-4">
                <p className="text-[22px] mb-2 font-[700] font-[Kanit] text-[#4ab04a] uppercase">
                  {memberName}
                </p>
                <p className="text-[14px] w-[380px] leading-[18px] font-[300] font-[Kanit] text-[#ffffff]">
                  This certifies that{" "}
                  <span className="font-[700]">{memberName}</span> has secured the
                  exclusive founder rate for the duration of their active
                  membership, protecting them from future price increases.
                </p>
              </div>

              <div className="max-w-[400px] flex flex-col gap-4 mt-6">
                <div className="flex flex-row gap-12 w-full justify-start items-start">
                  <div className="flex items-center flex-wrap gap-2 w-[120px]">
                    <img
                      src={icon1}
                      alt="Icon"
                      className="w-5 h-5 shrink-0 object-contain"
                    />
                    <p className="text-[12px] pb-[16px] font-[300] font-[Kanit] text-[#ffffff]">
                      $0 Enrollment
                    </p>
                  </div>
                  <div className="flex items-center flex-wrap gap-2 w-[120px]">
                    <img
                      src={icon3}
                      alt="Icon"
                      className="w-5 h-5 shrink-0 object-contain"
                    />
                    <p className="text-[12px] pb-[16px] font-[300] font-[Kanit] text-[#ffffff]">
                      Lifetime Lock
                    </p>
                  </div>
                </div>

                <div className="flex flex-row gap-12 justify-start items-start">
                  <div className="flex items-center flex-wrap gap-2 w-[120px]">
                    <img
                      src={icon2}
                      alt="Icon"
                      className="w-5 h-5 shrink-0 object-contain"
                    />
                    <p className="text-[12px] pb-[16px] font-[300] font-[Kanit] text-[#ffffff]">
                      No Initiation Fee
                    </p>
                  </div>
                  <div className="flex items-center flex-wrap gap-2 w-[120px]">
                    <img
                      src={icon4}
                      alt="Icon"
                      className="w-5 h-5 shrink-0 object-contain"
                    />
                    <p className="text-[12px] pb-[16px] font-[300] font-[Kanit] text-[#ffffff]">
                      All Access
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[50px] right-6">
                <div className="w-[189px] absolute right-5 bottom-6 h-auto">
                  <svg
                    width="189"
                    height="auto"
                    viewBox="0 0 157 129"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 16.2969L0.903618 19.4943L13.1372 40.1385V29.5036H69.37L109.824 97.9005L117.053 84.1377L77.5026 16.2969H0Z"
                      fill="white"
                    />
                    <path
                      d="M115.581 60.0876C114.886 62.7984 121.629 70.792 122.393 74.0589L156.314 16.2969H140.605L115.581 60.0876Z"
                      fill="white"
                    />
                    <path
                      d="M83.4928 84.7806H38.9375L45.8189 97.9178H97.9507L83.4928 74.0762V84.7806Z"
                      fill="white"
                    />
                    <path
                      d="M70.2674 50.2363H19.3867C20.2208 55.241 24.6694 59.203 26.2681 64.0686H77.1487C76.1061 59.203 71.9356 55.0325 70.2674 50.2363Z"
                      fill="white"
                    />
                    <path
                      d="M110.737 35.1524C123.874 33.4147 121.442 12.6314 107.818 14.5777C94.5415 16.524 97.6694 36.8901 110.737 35.1524Z"
                      fill="#2DDE28"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Download Certificate Button */}
          <button
            type="button"
            onClick={handleDownloadCertificate}
            disabled={isDownloading}
            className="btnPrimary mb-12 h-[53px] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span className="inline-flex items-center gap-2">
              <Download className="size-4" />
              {isDownloading ? "Preparing PDF..." : "Download Your Certificate"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessCertificate;
