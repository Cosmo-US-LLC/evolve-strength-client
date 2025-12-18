import React from "react";
import {
  Mail,
  Instagram,
  Youtube,
  Linkedin,
  Phone,
  Globe,
  Facebook,
  Twitter,
  MapPin,
} from "lucide-react";

const getContactHref = (type, value) => {
  switch (type) {
    case "EMAIL":
      return `mailto:${value}`;
    case "PHONE":
      return `tel:${value}`;
    default:
      return value;
  }
};

const getContactLabel = (type, value) => {
  if (type === "EMAIL" || type === "PHONE") return value;
  return getSocialHandle(value);
};

const getSocialPlatform = (url) => {
  const lowerUrl = url.toLowerCase();
  if (lowerUrl.includes("instagram.com")) return "instagram";
  if (lowerUrl.includes("youtube.com") || lowerUrl.includes("youtu.be"))
    return "youtube";
  if (lowerUrl.includes("linkedin.com")) return "linkedin";
  if (lowerUrl.includes("facebook.com")) return "facebook";
  if (lowerUrl.includes("twitter.com") || lowerUrl.includes("x.com"))
    return "twitter";
  return "website";
};

const getSocialHandle = (url) => {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const hostname = urlObj.hostname.replace("www.", "");
    if (hostname.includes("instagram.com"))
      return pathname.replace(/\//g, "") || "Instagram";
    if (hostname.includes("facebook.com"))
      return pathname.replace(/\//g, "") || "Facebook";
    return hostname;
  } catch {
    return "Link";
  }
};

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
    default:
      return <Globe className="text-[#4AB04A]" size={20} />;
  }
};

const renderContactIcon = (type) => {
  switch (type) {
    case "EMAIL":
      return <Mail className="text-[#4AB04A]" size={20} />;
    case "PHONE":
      return <Phone className="text-[#4AB04A]" size={20} />;
    case "SOCIAL_IG":
      return <Instagram className="text-[#4AB04A]" size={20} />;
    case "SOCIAL_FB":
      return <Facebook className="text-[#4AB04A]" size={20} />;
    default:
      return <Globe className="text-[#4AB04A]" size={20} />;
  }
};

const DiscoverProfile = ({ provider }) => {
  return (
    <main className="bg-white text-black flex flex-col">
      <section className="w-full max-w-[1280px] mx-auto px-4 md:px-8 flex-1">
        <article className="overflow-hidden">
          <div className="w-full">
            <div className="flex justify-center items-start space-x-3 p-12 space-x-10 rounded-[12px]">
              <div className="min-w-[400px]">
                <div className="bg-[#F7F7F7] p-4 !rounded-[8px]">
                  <div className="w-full overflow-hidden !rounded-[12px]">
                    {provider.image ? (
                      <img
                        src={provider.image}
                        alt={provider.displayName}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full min-h-[260px] flex items-center justify-center text-xs text-white/60">
                        Image coming soon
                      </div>
                    )}
                  </div>
                  <div className="mt-6">
                    <h1 className="!text-[24px] !font-[Kanit] !font-[500] !leading-[120%]">
                      {provider.displayName}
                    </h1>
                    {provider.role && (
                      <p className="!text-[20px] !font-[Kanit] !font-[400] text-[#555555] mb-1">
                        {provider.role}
                      </p>
                    )}
                    {provider.location && (
                      <div className="flex items-center gap-1.5 mt-2 text-[#555555]">
                        <MapPin className="text-[#4AB04A]" size={18} />
                        <span className="!text-[20px] !font-[Kanit] !font-[400] !capitalize font-medium">
                          {provider.location}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="bg-[#1A1A1A] flex justify-center items-center flex-col rounded-[8px] px-3 py-12 mt-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_10948_66)">
                        <path
                          d="M12.5 30C9.84783 30 7.3043 31.0536 5.42893 32.9289C3.55357 34.8043 2.5 37.3478 2.5 40V50C2.5 52.6522 3.55357 55.1957 5.42893 57.0711C7.3043 58.9464 9.84783 60 12.5 60H15C15.663 60 16.2989 59.7366 16.7678 59.2678C17.2366 58.7989 17.5 58.163 17.5 57.5V32.5C17.5 31.837 17.2366 31.2011 16.7678 30.7322C16.2989 30.2634 15.663 30 15 30H12.5ZM12.5 30C12.5 22.7065 15.3973 15.7118 20.5546 10.5546C25.7118 5.39731 32.7065 2.5 40 2.5C47.2935 2.5 54.2882 5.39731 59.4454 10.5546C64.6027 15.7118 67.5 22.7065 67.5 30M67.5 60H65C64.337 60 63.7011 59.7366 63.2322 59.2678C62.7634 58.7989 62.5 58.163 62.5 57.5V32.5C62.5 31.837 62.7634 31.2011 63.2322 30.7322C63.7011 30.2634 64.337 30 65 30H67.5M67.5 60C70.1522 60 72.6957 58.9464 74.5711 57.0711C76.4464 55.1957 77.5 52.6522 77.5 50V40C77.5 37.3478 76.4464 34.8043 74.5711 32.9289C72.6957 31.0536 70.1522 30 67.5 30M67.5 60V62.5C67.5 65.1522 66.4464 67.6957 64.5711 69.5711C62.6957 71.4464 60.1522 72.5 57.5 72.5H50"
                          stroke="#4AB04A"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M30 27.4998C30 25.2 30.7928 22.9704 32.2448 21.1868C33.6967 19.4032 35.7191 18.1746 37.9711 17.708C40.2232 17.2414 42.5672 17.5653 44.6083 18.6251C46.6494 19.685 48.2628 21.416 49.1767 23.5265C49.9033 25.2098 50.1567 27.0598 49.9033 28.8765C49.6515 30.6921 48.9054 32.4035 47.7468 33.8238C46.5881 35.244 45.0613 36.3185 43.3333 36.9298C42.3581 37.2746 41.5138 37.9134 40.9168 38.7582C40.3198 39.603 39.9995 40.6121 40 41.6465V42.4998M45 77.4998H40C38.6739 77.4998 37.4021 76.9731 36.4645 76.0354C35.5268 75.0977 35 73.8259 35 72.4998C35 71.1738 35.5268 69.902 36.4645 68.9643C37.4021 68.0266 38.6739 67.4998 40 67.4998H45C46.3261 67.4998 47.5979 68.0266 48.5355 68.9643C49.4732 69.902 50 71.1738 50 72.4998C50 73.8259 49.4732 75.0977 48.5355 76.0354C47.5979 76.9731 46.3261 77.4998 45 77.4998Z"
                          stroke="#4AB04A"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M40 55C39.6685 55 39.3505 54.8683 39.1161 54.6339C38.8817 54.3995 38.75 54.0815 38.75 53.75C38.75 53.4185 38.8817 53.1005 39.1161 52.8661C39.3505 52.6317 39.6685 52.5 40 52.5M40 55C40.3315 55 40.6495 54.8683 40.8839 54.6339C41.1183 54.3995 41.25 54.0815 41.25 53.75C41.25 53.4185 41.1183 53.1005 40.8839 52.8661C40.6495 52.6317 40.3315 52.5 40 52.5"
                          stroke="#4AB04A"
                          strokeWidth="4"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_10948_66">
                          <rect width="80" height="80" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="!text-[32px] !text-[#fff] mt-5 !font-[500]">
                    Need assistance?
                  </h3>
                  <p className="!text-[#fff] !text-[20px]">
                    Reach out to our receptionist for help!
                  </p>
                </div>
              </div>
              <div className="border-[1px] border-[#DDDDDD] rounded-[12px] p-6">
                <div className="flex-1">
                  {provider.bio && (
                    <section className="mb-6">
                      <h2 className="!text-[32px] !font-[Kanit] !font-[500] mb-2">
                        About
                      </h2>
                      <p className="!text-[20px] text-[#000] leading-relaxed font-[400] !font-[Vazirmatn]">
                        {provider.bio}
                      </p>
                    </section>
                  )}

                  {provider.certification && (
                    <section className="mb-6">
                      <h2 className="!text-[32px] !font-[Kanit] !font-[500] mb-2">
                        Certification
                      </h2>
                      <p className="text-sm md:!text-[16px] text-[#444444] leading-relaxed whitespace-pre-line">
                        {provider.certification}
                      </p>
                    </section>
                  )}

                  {provider.areas_of_focus && (
                    <section className="mb-6">
                      <h2 className="!text-[32px] !font-[Kanit] !font-[500] mb-2">
                        Areas of Focus
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        {provider.areas_of_focus
                          .split(",")
                          .map((area) => area.trim())
                          .filter(Boolean)
                          .map((area) => (
                            <span
                              key={area}
                              className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-[#DDDDDD] text-xs md:text-sm text-[#333333]"
                            >
                              {area}
                            </span>
                          ))}
                      </div>
                    </section>
                  )}

                  {/* Contact Section */}
                  {(provider.email ||
                    provider.phone ||
                    (Array.isArray(provider.contacts) &&
                      provider.contacts.length > 0) ||
                    (Array.isArray(provider.social_links) &&
                      provider.social_links.length > 0)) && (
                    <section className="flex flex-col gap-2 md:gap-0.5 mt-6">
                      <h2 className="!text-[32px] !font-[Kanit] !font-[500] mb-2 text-[#000]">
                        Contact & Socials
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        {Array.isArray(provider.contacts) &&
                        provider.contacts.length > 0 ? (
                          provider.contacts.map((contact) => {
                            const isExternal =
                              contact.type !== "EMAIL" &&
                              contact.type !== "PHONE";
                            const href = getContactHref(
                              contact.type,
                              contact.value
                            );
                            const label = getContactLabel(
                              contact.type,
                              contact.value
                            );

                            return (
                              <a
                                key={contact.id || contact.value}
                                href={href}
                                target={isExternal ? "_blank" : undefined}
                                rel={
                                  isExternal
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                className="px-3 py-3 flex items-center gap-2 !bg-[#F7F7F7] text-[#000] rounded-[5px] text-xs md:text-sm hover:!bg-[#E6E6E6] border border-[#DDDDDD] transition-colors"
                              >
                                {renderContactIcon(contact.type)}
                                <span className="description">{label}</span>
                              </a>
                            );
                          })
                        ) : (
                          <>
                            {provider.email && (
                              <a
                                href={`mailto:${provider.email}`}
                                className="px-3 py-3 flex items-center gap-2 !bg-[#F7F7F7] text-[#000] rounded-[5px] text-xs md:text-sm hover:!bg-[#E6E6E6] border border-[#DDDDDD] transition-colors"
                              >
                                <Mail className="text-[#4AB04A]" size={20} />
                                <span className="description">
                                  {provider.email}
                                </span>
                              </a>
                            )}

                            {provider.phone && (
                              <a
                                href={`tel:${provider.phone}`}
                                className="px-3 py-3 flex items-center gap-2 !bg-[#F7F7F7] text-[#000] rounded-[5px] text-xs md:text-sm hover:!bg-[#E6E6E6] border border-[#DDDDDD] transition-colors"
                              >
                                <Phone className="text-[#4AB04A]" size={20} />
                                <span className="description">
                                  {provider.phone}
                                </span>
                              </a>
                            )}

                            {Array.isArray(provider.social_links) &&
                              provider.social_links.map((link, index) => {
                                const platform = getSocialPlatform(link);
                                const handle = getSocialHandle(link);

                                return (
                                  <a
                                    key={index}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-3 flex items-center gap-2 !bg-[#F7F7F7] text-[#000] rounded-[5px] text-xs md:text-sm hover:!bg-[#E6E6E6] border border-[#DDDDDD] transition-colors"
                                  >
                                    {renderSocialIcon(platform)}
                                    <span className="description">{handle}</span>
                                  </a>
                                );
                              })}
                          </>
                        )}
                      </div>
                    </section>
                  )}
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default DiscoverProfile;

