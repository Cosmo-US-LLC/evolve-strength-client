import React from "react";
import { Link } from "react-router-dom";
import { Mail, Instagram, Youtube, Linkedin, Phone } from "lucide-react";

function TrainerDetails({ trainer }) {
  if (!trainer) {
    return <div>Our amazing team of trainers will be announced soon!</div>;
  }

  // Location-specific subscription URLs
  const getSubscriptionUrl = (location) => {
    const locationUrls = {
      "VANCOUVER POST":
        "https://subscription.evolvestrength.ca/membership-plans?location=40327",
      "BURNABY BRENTWOOD":
        "https://subscription.evolvestrength.ca/membership-plans?location=40248",
      "CALGARY SETON":
        "https://subscription.evolvestrength.ca/membership-plans?location=40097",
      "CALGARY ROYAL OAK":
        "https://subscription.evolvestrength.ca/membership-plans?location=40142",
      "CALGARY SUNRIDGE":
        "https://subscription.evolvestrength.ca/membership-plans?location=06973",
      "EDMONTON SOUTH":
        "https://subscription.evolvestrength.ca/membership-plans?location=06962",
      "EDMONTON DOWNTOWN":
        "https://subscription.evolvestrength.ca/membership-plans?location=06967",
      "EDMONTON NORTH":
        "https://subscription.evolvestrength.ca/membership-plans?location=06964",
    };

    return locationUrls[location] || "https://subscription.evolvestrength.ca";
  };

  const subscriptionUrl = getSubscriptionUrl(trainer.location);

  // Helper function to get social media platform from URL
  const getSocialPlatform = (url) => {
    if (url.includes("instagram.com")) return "instagram";
    if (url.includes("youtube.com") || url.includes("youtu.be"))
      return "youtube";
    if (url.includes("linkedin.com")) return "linkedin";
    return "website";
  };

  // Helper function to get social media handle from URL
  const getSocialHandle = (url) => {
    try {
      const urlObj = new URL(url);
      const pathname = urlObj.pathname;

      if (url.includes("instagram.com")) {
        return pathname.replace("/", "") || "Instagram";
      }
      if (url.includes("youtube.com") || url.includes("youtu.be")) {
        return pathname.includes("/channel/") ? "Channel" : "YouTube";
      }
      if (url.includes("linkedin.com")) {
        return pathname.replace("/", "") || "LinkedIn";
      }
      return urlObj.hostname.replace("www.", "");
    } catch {
      return "Social Media";
    }
  };

  // Helper function to render social media icon
  const renderSocialIcon = (platform) => {
    switch (platform) {
      case "instagram":
        return <Instagram className="text-[#4AB04A]" size={20} />;
      case "youtube":
        return <Youtube className="text-[#4AB04A]" size={20} />;
      case "linkedin":
        return <Linkedin className="text-[#4AB04A]" size={20} />;
      default:
        return <Mail className="text-[#4AB04A]" size={20} />;
    }
  };

  return (
    <div className="flex flex-col gap-4 md:gap-6 bg-[#FFF] rounded-[10px] p-4 md:p-6 border-2 border-[#CCCCCC] h-full">
      <div className="max-w-full flex flex-col">
        <h3 className="text-[#000] text-base md:text-lg font-semibold mb-2 md:mb-0">
          About:
        </h3>
        <p className="text-[#000] description leading-[20px] md:leading-[25px] text-sm md:text-base">
          {trainer.about || "No description available."}
        </p>
      </div>

      <div className="max-w-[939px] flex flex-col gap-0.5">
        <h3 className="text-[#000] text-base md:text-lg font-semibold mb-2 md:mb-0">
          Certification:
        </h3>
        <p className="text-[#000] description leading-[20px] md:leading-[25px] text-sm md:text-base">
          {trainer.certification || "Certification information not available."}
        </p>
      </div>

      <div className="flex flex-col gap-2 md:gap-0.5">
        <h3 className="text-[#000] text-base md:text-lg font-semibold mb-2 md:mb-0">
          Areas of Focus:
        </h3>
        <div className="flex flex-col w-full gap-2 md:flex-row md:items-center md:justify-between  ">
          <div className="flex flex-wrap gap-2  w-[100%]">
            {trainer.areasOfFocus && trainer.areasOfFocus.length > 0 ? (
              trainer.areasOfFocus.map((area, index) => (
                <span
                  key={index}
                  className="px-2 md:px-3 py-3 flex items-center justify-center description bg-[#F6F6F6] text-[#000] rounded-[5px] text-xs md:text-sm"
                >
                  {area}
                </span>
              ))
            ) : (
              <span className="px-2 md:px-3 h-[32px] md:h-[40px] flex items-center justify-center description bg-[#F6F6F6] text-[#000] rounded-[5px] text-xs md:text-sm">
                No areas specified
              </span>
            )}
          </div>

          {/* <div className="w-[50%] md:w-[20%] flex justify-end">
            <Link to={subscriptionUrl}>
              <button className="btnPrimary w-full md:w-auto text-sm md:text-base py-2 md:py-3">
                Join Now
              </button>
            </Link>
          </div> */}
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col gap-2 md:gap-0.5">
        <h3 className="text-[#000] text-base md:text-lg font-semibold mb-2 md:mb-0">
          Contact:
        </h3>
        <div className="flex flex-wrap gap-2">
          {/* Email */}
          {trainer.email && (
            <a
              href={`mailto:${trainer.email}`}
              className="px-2 md:px-3 py-3  description flex items-center gap-2 bg-[#F6F6F6] rounded-[5px] hover:bg-[#E6E6E6] transition-colors"
            >
              <Mail className="text-[#4AB04A]" size={20} />
              {trainer.email}
            </a>
          )}

          {/* Phone */}
          {trainer.phone && (
            <a
              href={`tel:${trainer.phone}`}
              className="px-2 md:px-3 py-3 text-[14px] md:text-[16px] font-[Vazirmatn] flex items-center gap-2 bg-[#F6F6F6] text-[#000] rounded-[5px] hover:bg-[#E6E6E6] transition-colors"
            >
              <Phone className="text-[#4AB04A]" size={20} />
              {trainer.phone}
            </a>
          )}

          {/* Social Links */}
          {trainer.social_links &&
            trainer.social_links.length > 0 &&
            trainer.social_links.map((link, index) => {
              const platform = getSocialPlatform(link);
              const handle = getSocialHandle(link);

              return (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 md:px-3 py-3 flex font-[Vazirmatn] items-center gap-2 bg-[#F6F6F6] text-[#000] rounded-[5px] text-xs md:text-[16px] hover:bg-[#E6E6E6] transition-colors"
                >
                  {renderSocialIcon(platform)}
                  {handle}
                </a>
              );
            })}

          {/* Fallback if no contact info */}
          {!trainer.email &&
            !trainer.phone &&
            (!trainer.social_links || trainer.social_links.length === 0) && (
              <span className="px-2 md:px-3 py-3 flex text-[16px] font-[Vazirmatn] items-center gap-2 bg-[#F6F6F6] text-[#000] rounded-[5px] text-xs md:text-sm">
                <Mail className="text-[#4AB04A]" size={20} />
                Contact information not available
              </span>
            )}
        </div>
      </div>
    </div>
  );
}

export default TrainerDetails;
