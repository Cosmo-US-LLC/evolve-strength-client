import React, { useRef, useState } from "react";
import herovector from "../../../../assets/images/JoinTheMovement/JoinTheMovementHero/hero_vector (2).png";
import herovector2 from "../../../../assets/images/JoinTheMovement/JoinTheMovementHero/hero_vector (1).png";
import upload_icon from "../../../../assets/images/JoinTheMovement/JoinTheMovementHero/upload_icon.svg";

function JoinTheMovementHero() {
  const fileInputRef = useRef(null);
   const [agreed, setAgreed] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      console.log("Dropped file:", file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="w-full max-md:hidden pb-12 pt-[120px] overflow-hidden">
      <div className="w-full max-w-[1280px] px-8 mx-auto ">
        <div className="flex flex-row gap-10 relative">
          <div className="w-[70%] space-y-[24px]">
            <img src={herovector} alt="hero_vector" />
            <h1 className="max-w-[707px] text-left leading-[56px] uppercase">
              Get Noticed by <br /> Thousands of <br /> Gym Fans for <br />{" "}
              <span className="text-[#4AB04A]">Free</span>
            </h1>
            <h3 className="text-[#000] leading-[24px] font-[400] w-[633px]">
              We feature real Evolve members and creators. If you’ve filmed a
              reel, taken photos, or posted stories at Evolve, send them in.
              We’ll tag you and share it with our growing community.
            </h3>
          </div>
          <div className="max-w-[480px] w-[100%] rounded-[10px] border-[1px] bg-[#FCFCFC] border-[#D4D4D4]">
            <div className="p-[20px] space-y-[20px] ">
              <div className="space-y-[5px]">
                <h5 className="text-[#000]">
                  Instagram or TikTok Profile Link
                </h5>
                <input
                  type="text"
                  className="w-full border-[1px] border-[#D4D4D4] px-[16px] py-[12px] rounded-[10px] bg-[#FFF]"
                  placeholder="Paste link here"
                />
              </div>
              <div className="space-y-[5px]">
                <h5 className="text-[#000]">
                  Link to Reel or Post (if already posted)
                </h5>
                <input
                  type="text"
                  className="w-full border-[1px] border-[#D4D4D4] px-[16px] py-[12px] rounded-[10px] bg-[#FFF]"
                  placeholder="Paste link here"
                />
              </div>
              <div className="space-y-[5px]">
                <h5 className="text-[#000]">Upload Photos or Videos</h5>
                <div
                  className="border-dashed border-[2px] flex flex-col items-center space-y-[15px] border-[#D4D4D4] rounded-lg p-6 text-center cursor-pointer bg-[#fff]"
                  onClick={() => fileInputRef.current.click()}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
                  <div className="h-[43px] w-[43px] rounded-[100%] bg-[#F9F8F8] flex items-center justify-center">
                    <img src={upload_icon} alt="upload icon" className="" />
                  </div>
                  <h5 className="text-center !mb-[5px] !font-[500] text-[#4AB04A]">
                    Add Your Media (JPEG, PNG, MP4 Supported)
                  </h5>
                  <h5 className="text-center !text-[14px] !font-[300]">
                    Choose a file or drag & drop it here
                  </h5>

                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="btnPrimary !text-[14px] !text-[#000] !bg-[#F5F5F5] border !border-[#D4D4D4]"
                  >
                    Choose File
                  </button>
                </div>
              </div>
              <div className="pt-[8px]">
                <label className="flex items-center justify-center space-x-5  cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                    className="form-checkbox h-8 w-8 text-green-600 border-gray-300 rounded focus:ring-0"
                    style={{
                      accentColor: "#4AB04A",
                    }}
                  />
                  <h5 className="!text-[16px] !font-[400] leading-[20px]">
                    I agree to have my content shared on Evolve Strength’s 
                    website and social media platforms.
                  </h5>
                </label>
              </div>
              <div className="flex justify-center pt-[8px]">
                <button className="btnPrimary w-[100%]">Get Featured</button>
              </div>
            </div>
            <img
              src={herovector2}
              className="bottom-[-59px] right-[-6%] absolute"
              alt="hero_vector"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:hidden pb-12 pt-[100px] overflow-hidden">
      <div className="w-full max-w-[1280px] px-[16px] mx-auto ">
        <div className="flex flex-col gap-6 relative">
          <div className="space-y-[15px]">
            <img src={herovector} alt="hero_vector" />
            <h1 className="text-left leading-[56px] uppercase">
              Get Noticed by <br /> Thousands  <br /> of Gym Fans <br />for Free
            </h1>
            <h3 className="text-[#000] leading-[24px] font-[400]">
              We feature real Evolve members and creators. If you’ve filmed a
              reel, taken photos, or posted stories at Evolve, send them in.
              We’ll tag you and share it with our growing community.
            </h3>
          </div>
          <div className="max-w-[480px] w-[100%] rounded-[10px] border-[1px] bg-[#FCFCFC] border-[#D4D4D4]">
            <div className="p-[20px] space-y-[20px] ">
              <div className="space-y-[5px]">
                <h5 className="text-[#000]">
                  Instagram or TikTok Profile Link
                </h5>
                <input
                  type="text"
                  className="w-full border-[1px] border-[#D4D4D4] px-[16px] py-[12px] rounded-[10px] bg-[#FFF]"
                  placeholder="Paste link here"
                />
              </div>
              <div className="space-y-[5px]">
                <h5 className="text-[#000]">
                  Link to Reel or Post (if already posted)
                </h5>
                <input
                  type="text"
                  className="w-full border-[1px] border-[#D4D4D4] px-[16px] py-[12px] rounded-[10px] bg-[#FFF]"
                  placeholder="Paste link here"
                />
              </div>
              <div className="space-y-[5px]">
                <h5 className="text-[#000]">Upload Photos or Videos</h5>
                <div
                  className="border-dashed border-[2px] flex flex-col items-center space-y-[15px] border-[#D4D4D4] rounded-lg p-6 text-center cursor-pointer bg-[#fff]"
                  onClick={() => fileInputRef.current.click()}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
                  <div className="h-[43px] w-[43px] rounded-[100%] bg-[#F9F8F8] flex items-center justify-center">
                    <img src={upload_icon} alt="upload icon" className="" />
                  </div>
                  <h5 className="text-center !mb-[5px] !font-[500] text-[#4AB04A]">
                    Add Your Media (JPEG, PNG, MP4 Supported)
                  </h5>
                  <h5 className="text-center !text-[14px] !font-[300]">
                    Choose a file or drag & drop it here
                  </h5>

                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="btnPrimary !text-[14px] !text-[#000] !bg-[#F5F5F5] border !border-[#D4D4D4]"
                  >
                    Choose File
                  </button>
                </div>
              </div>
              <div className="pt-[8px]">
                <label className="flex items-center justify-center space-x-5  cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                    className="form-checkbox h-8 w-8 text-green-600 border-gray-300 rounded focus:ring-0"
                    style={{
                      accentColor: "#4AB04A",
                    }}
                  />
                  <h5 className="!text-[16px] !font-[400] leading-[20px]">
                    I agree to have my content shared on Evolve Strength’s 
                    website and social media platforms.
                  </h5>
                </label>
              </div>
              <div className="flex justify-center pt-[8px]">
                <button className="btnPrimary w-[100%]">Get Featured</button>
              </div>
            </div>
            <img
              src={herovector2}
              className="bottom-[-59px] right-[-6%] absolute"
              alt="hero_vector"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default JoinTheMovementHero;
