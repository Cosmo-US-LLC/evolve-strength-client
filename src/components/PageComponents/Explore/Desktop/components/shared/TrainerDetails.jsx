import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Instagram,
  Youtube,
  Linkedin,
  Phone,
  Globe,
  Facebook,
  Twitter,
} from "lucide-react";

function TrainerDetails({ trainer }) {
  if (!trainer) {
    return <div>Our amazing team of trainers will be announced soon!</div>;
  }

  // Location-specific subscription URLs
  // const getSubscriptionUrl = (location) => {
  //   const locationUrls = {
  //     "VANCOUVER POST":
  //       "/join-now/membership-type?location=Vancouver,%20The%20Post",
  //     "BURNABY BRENTWOOD":
  //       "/join-now/membership-type?location=Burnaby%20Brentwood",
  //     "CALGARY SETON":
  //       "/join-now/membership-type?location=Calgary%20Seton",
  //     "CALGARY ROYAL OAK":
  //       "/join-now/membership-type?location=Calgary%20Royal%20Oak",
  //     "CALGARY SUNRIDGE":
  //       "/join-now/membership-type?location=Calgary%20Sunridge",
  //     "EDMONTON SOUTH":
  //       "/join-now/membership-type?location=Edmonton%20South",
  //     "EDMONTON DOWNTOWN":
  //       "/join-now/membership-type?location=Edmonton%20Downtown",
  //     "EDMONTON NORTH":
  //       "/join-now/membership-type?location=Edmonton%20North",
  //   };

  //   return locationUrls[location] || "https://subscription.evolvestrength.ca";
  // };

  // const subscriptionUrl = getSubscriptionUrl(trainer.location);

  // Helper function to get social media platform from URL
  const getSocialPlatform = (url) => {
    const lowerUrl = url.toLowerCase();
    if (lowerUrl.includes("instagram.com")) return "instagram";
    if (lowerUrl.includes("youtube.com") || lowerUrl.includes("youtu.be"))
      return "youtube";
    if (lowerUrl.includes("linkedin.com")) return "linkedin";
    if (lowerUrl.includes("facebook.com")) return "facebook";
    if (lowerUrl.includes("twitter.com") || lowerUrl.includes("x.com"))
      return "twitter";
    if (lowerUrl.includes("tiktok.com")) return "tiktok";
    return "website";
  };

  // Helper function to get social media handle from URL
  const getSocialHandle = (url) => {
    try {
      const urlObj = new URL(url);
      const pathname = urlObj.pathname;
      const lowerUrl = url.toLowerCase();

      if (lowerUrl.includes("instagram.com")) {
        return pathname.replace("/", "") || "Instagram";
      }
      if (lowerUrl.includes("youtube.com") || lowerUrl.includes("youtu.be")) {
        return pathname.includes("/channel/") ? "Channel" : "YouTube";
      }
      if (lowerUrl.includes("linkedin.com")) {
        return pathname.replace("/", "") || "LinkedIn";
      }
      if (lowerUrl.includes("facebook.com")) {
        return pathname.replace("/", "") || "Facebook";
      }
      if (lowerUrl.includes("twitter.com") || lowerUrl.includes("x.com")) {
        return pathname.replace("/", "") || "Twitter";
      }
      if (lowerUrl.includes("tiktok.com")) {
        return pathname.replace("/", "") || "TikTok";
      }
      // For website URLs, return the domain name
      return urlObj.hostname.replace("www.", "");
    } catch {
      return url; // Return original value if URL parsing fails
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
      case "facebook":
        return <Facebook className="text-[#4AB04A]" size={20} />;
      case "twitter":
        return <Twitter className="text-[#4AB04A]" size={20} />;
      case "website":
        return <Globe className="text-[#4AB04A]" size={20} />;
      default:
        return <Mail className="text-[#4AB04A]" size={20} />;
    }
  };

  // Helper function to render icon based on contact type from API
  const renderContactIcon = (type) => {
    switch (type) {
      case "EMAIL":
        return <Mail className="text-[#4AB04A]" size={20} />;
      case "PHONE":
        return <Phone className="text-[#4AB04A]" size={20} />;
      case "WEBSITE":
        return <Globe className="text-[#4AB04A]" size={20} />;
      case "SOCIAL_IG":
        return <Instagram className="text-[#4AB04A]" size={20} />;
      case "SOCIAL_FB":
        return <Facebook className="text-[#4AB04A]" size={20} />;
      case "SOCIAL_YOUTUBE":
        return <Youtube className="text-[#4AB04A]" size={20} />;
      case "SOCIAL_LINKEDIN":
        return <Linkedin className="text-[#4AB04A]" size={20} />;
      case "SOCIAL_TWITTER":
      case "SOCIAL_X":
        return <Twitter className="text-[#4AB04A]" size={20} />;
      case "SOCIAL_OTHER":
        return <Globe className="text-[#4AB04A]" size={20} />;
      default:
        return <Globe className="text-[#4AB04A]" size={20} />;
    }
  };

  // Helper function to get display label for contact
  const getContactLabel = (type, value) => {
    switch (type) {
      case "EMAIL":
      case "PHONE":
        return value;
      case "WEBSITE":
        try {
          const url = new URL(value);
          return url.hostname.replace("www.", "");
        } catch {
          return value;
        }
      case "SOCIAL_IG":
        try {
          const url = new URL(value);
          return url.pathname.replace("/", "") || "Instagram";
        } catch {
          return value;
        }
      case "SOCIAL_FB":
        try {
          const url = new URL(value);
          return url.pathname.replace("/", "") || "Facebook";
        } catch {
          return value;
        }
      case "SOCIAL_OTHER":
        return value;
      default:
        return value;
    }
  };

  // Helper function to get href for contact
  const getContactHref = (type, value) => {
    switch (type) {
      case "EMAIL":
        return `mailto:${value}`;
      case "PHONE":
        return `tel:${value}`;
      case "WEBSITE":
      case "SOCIAL_IG":
      case "SOCIAL_FB":
      case "SOCIAL_YOUTUBE":
      case "SOCIAL_LINKEDIN":
      case "SOCIAL_TWITTER":
      case "SOCIAL_X":
      case "SOCIAL_OTHER":
        return value; // Use URL directly from API
      default:
        return value;
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
          {/* If contacts array exists, render from it with type-based icons */}
          {trainer.contacts && trainer.contacts.length > 0 ? (
            trainer.contacts.map((contact) => {
              const isExternal =
                contact.type !== "EMAIL" && contact.type !== "PHONE";
              const href = getContactHref(contact.type, contact.value);
              const label = getContactLabel(contact.type, contact.value);

              return (
                <a
                  key={contact.id}
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="px-2 md:px-3 py-3 flex items-center gap-2 description bg-[#F6F6F6] text-[#000] rounded-[5px] text-xs md:text-sm hover:bg-[#E6E6E6] transition-colors"
                >
                  {renderContactIcon(contact.type)}
                  {label}
                </a>
              );
            })
          ) : (
            // Fallback to old format if contacts array doesn't exist
            <>
              {/* Email */}
              {trainer.email && (
                <a
                  href={`mailto:${trainer.email}`}
                  className="px-2 md:px-3 py-3 flex items-center gap-2 description bg-[#F6F6F6] text-[#000] rounded-[5px] text-xs md:text-sm hover:bg-[#E6E6E6] transition-colors"
                >
                  <Mail className="text-[#4AB04A]" size={20} />
                  {trainer.email}
                </a>
              )}

              {/* Phone */}
              {trainer.phone && (
                <a
                  href={`tel:${trainer.phone}`}
                  className="px-2 md:px-3 py-3 description text-[14px] md:text-[16px] flex items-center gap-2 bg-[#F6F6F6] text-[#000] rounded-[5px] hover:bg-[#E6E6E6] transition-colors"
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
                      className="px-2 md:px-3 py-3 flex font-[Vazirmatn] items-center gap-2 bg-[#F6F6F6] text-[#000] rounded-[5px] text-[14px] md:text-[16px] hover:bg-[#E6E6E6] transition-colors"
                    >
                      {renderSocialIcon(platform)}
                      {handle}
                    </a>
                  );
                })}

              {/* Fallback if no contact info */}
              {!trainer.email &&
                !trainer.phone &&
                (!trainer.social_links ||
                  trainer.social_links.length === 0) && (
                  <span className="px-2 md:px-3 py-3 flex items-center gap-2 description bg-[#F6F6F6] text-[#000] rounded-[5px] text-[14px] md:text-[16px]">
                    <Mail className="text-[#4AB04A]" size={20} />
                    Contact information not available
                  </span>
                )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TrainerDetails;
