import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
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
import {
  FRANCHISE_ID_BY_NAME,
  LOCATION_CONFIG,
  WELLNESS_SERVICES,
  TRAINER_ROLE_IDS,
  fetchAllTrainers,
} from "@/services/trainerApi";
import ExploreHeroVideo from "@/assets/videos/ExplorePages.webm";

const STEP = {
  HERO: "HERO",
  SERVICES: "SERVICES",
  PROVIDERS: "PROVIDERS",
  PROFILE: "PROFILE",
};

const CATEGORY = {
  WELLNESS: "WELLNESS",
  TRAINERS: "TRAINERS",
};

const getLocationNameFromSearch = (search) => {
  if (!search) return null;

  const params = new URLSearchParams(search);
  const byKey =
    params.get("locationName") ||
    params.get("location") ||
    params.get("loc") ||
    null;

  if (byKey) {
    return decodeURIComponent(byKey).toUpperCase();
  }
  if (search.startsWith("?") && search.length > 1) {
    return decodeURIComponent(search.slice(1)).toUpperCase();
  }

  return null;
};

const getLocationConfig = (locationName) => {
  if (!locationName) return null;
  return (
    LOCATION_CONFIG.find(
      (loc) => loc.name.toUpperCase() === locationName.toUpperCase()
    ) || null
  );
};

const Discover = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [step, setStep] = useState(STEP.HERO);
  const [category, setCategory] = useState(CATEGORY.WELLNESS);
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedServiceId, setSelectedServiceId] = useState("ALL");
  const [selectedProvider, setSelectedProvider] = useState(null);

  const locationName = useMemo(
    () => getLocationNameFromSearch(location.search),
    [location.search]
  );

  const locationConfig = useMemo(
    () => getLocationConfig(locationName),
    [locationName]
  );

  const activeWellnessRole = useMemo(() => {
    if (!selectedServiceId || selectedServiceId === "ALL") return null;
    const svc = WELLNESS_SERVICES.find((s) => s.id === selectedServiceId);
    return svc?.role || null;
  }, [selectedServiceId]);

  const franchiseId = useMemo(
    () => (locationName ? FRANCHISE_ID_BY_NAME[locationName] : undefined),
    [locationName]
  );

  // Keep URL in sync if location is missing
  useEffect(() => {
    if (!locationName) return;

    if (!location.search.includes("=")) {
      return;
    }
    const params = new URLSearchParams(location.search);
    if (!params.get("locationName")) {
      params.set("locationName", locationName);
      navigate(`/discover?${params.toString()}`, { replace: true });
    }
  }, [locationName, location.search, navigate]);

  useEffect(() => {
    if (!franchiseId) return;

    let mounted = true;
    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const params = {
          franchise: franchiseId,
          trainerRole:
            category === CATEGORY.TRAINERS
              ? TRAINER_ROLE_IDS.PERSONAL_TRAINER
              : TRAINER_ROLE_IDS.WELLNESS_EXPERT,
        };

        if (category === CATEGORY.WELLNESS && activeWellnessRole) {
          params.service = [activeWellnessRole];
        }

        const data = await fetchAllTrainers(params);
        if (!mounted) return;

        // Extra safety: keep only this location's trainers
        const filteredByLocation = data.filter(
          (t) =>
            t.location &&
            t.location.toUpperCase() === locationName.toUpperCase()
        );
        setTrainers(filteredByLocation);
      } catch (err) {
        if (!mounted) return;
        console.error("Error loading discover trainers:", err);
        setError(
          err?.message ||
            "Unable to load providers for this location right now."
        );
      } finally {
        if (mounted) setLoading(false);
      }
    };

    load();
    return () => {
      mounted = false;
    };
  }, [franchiseId, locationName, category, activeWellnessRole]);

  const visibleProviders = useMemo(
    () =>
      Array.isArray(trainers)
        ? trainers.map((t) => ({
            ...t,
            displayName: t.trainerName || t.name,
          }))
        : [],
    [trainers]
  );

  const handleStart = () => {
    setStep(STEP.SERVICES);
  };

  const handleCategorySelect = (nextCategory) => {
    setCategory(nextCategory);
    setSelectedServiceId("ALL");
    setSelectedProvider(null);
    setStep(STEP.PROVIDERS);
  };

  const handleServiceFilterSelect = (serviceId) => {
    setSelectedServiceId(serviceId);
  };

  const handleProviderClick = (provider) => {
    setSelectedProvider(provider);
    setStep(STEP.PROFILE);
  };

  const sortedServices = [...WELLNESS_SERVICES].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const handleBackFromProfile = () => {
    setStep(STEP.PROVIDERS);
    setSelectedProvider(null);
  };

  const handleBack = () => {
    if (step === STEP.SERVICES) {
      setStep(STEP.HERO);
    } else if (step === STEP.PROVIDERS) {
      setStep(STEP.SERVICES);
    } else if (step === STEP.PROFILE) {
      setStep(STEP.PROVIDERS);
      setSelectedProvider(null);
    }
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

  // Basic empty/invalid state
  if (!locationName || !locationConfig || !franchiseId) {
    return (
      <div className="min-h-screen bg-[#111111] flex items-center justify-center px-4 py-16">
        <div className="bg-white rounded-xl shadow-xl max-w-xl w-full p-8 md:p-10 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">
            Location not found
          </h1>
          <p className="text-gray-600 mb-6">
            We couldn&apos;t determine which Evolve location to show. Make sure
            your link includes a valid location name, for example:
          </p>
          <code className="block bg-gray-100 rounded-md px-4 py-3 text-sm md:text-base text-left overflow-x-auto">
            /discovr?EDMONTON SOUTH
          </code>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  text-white">
      {step !== STEP.HERO && (
        <header className="w-full flex items-center justify-between px-6 md:px-12 py-4 md:py-6 bg-[#fff] b border-b-[1px] border-black/10">
          <div className="flex items-center justify-between gap-3 md:gap-4 w-full">
            <button
              type="button"
              onClick={handleBack}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.10)",
                borderRadius: "8px",
              }}
              className="inline-flex items-center justify-center cursor-pointer px-4 py-1.5 text-[16px] text-black  transition-colors duration-200"
            >
              <div className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5298 5.47032C10.6703 5.61094 10.7492 5.80157 10.7492 6.00032C10.7492 6.19907 10.6703 6.38969 10.5298 6.53032L5.80983 11.2503H19.9998C20.1987 11.2503 20.3895 11.3293 20.5302 11.47C20.6708 11.6106 20.7498 11.8014 20.7498 12.0003C20.7498 12.1992 20.6708 12.39 20.5302 12.5306C20.3895 12.6713 20.1987 12.7503 19.9998 12.7503H5.80983L10.5298 17.4703C10.6035 17.539 10.6626 17.6218 10.7036 17.7138C10.7446 17.8058 10.7666 17.9051 10.7684 18.0058C10.7702 18.1065 10.7517 18.2065 10.714 18.2999C10.6762 18.3933 10.6201 18.4781 10.5489 18.5494C10.4776 18.6206 10.3928 18.6767 10.2994 18.7144C10.206 18.7522 10.106 18.7707 10.0053 18.7689C9.9046 18.7671 9.80529 18.7451 9.71329 18.7041C9.62129 18.6631 9.53849 18.604 9.46983 18.5303L3.46983 12.5303C3.32938 12.3897 3.25049 12.1991 3.25049 12.0003C3.25049 11.8016 3.32938 11.6109 3.46983 11.4703L9.46983 5.47032C9.61045 5.32987 9.80108 5.25098 9.99983 5.25098C10.1986 5.25098 10.3892 5.32987 10.5298 5.47032Z"
                    fill="black"
                  />
                </svg>
              </div>{" "}
              Back
            </button>
            <div className="flex justify-center items-center">
              <span className="border-r-[1px] border-[#000] pr-2 mr-2">
                <img
                  className="min-h-[50px]"
                  src="/images/logo.svg"
                  alt="Discover at"
                />
              </span>
              <span className="text-[18.333px] text-white bg-[#4AB04A] px-2  font-bold">
                {locationConfig.city} {locationConfig.branch}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setStep(STEP.HERO)}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.10)",
                borderRadius: "8px",
              }}
              className="hidden md:inline-flex items-center justify-center cursor-pointer px-3 py-1.5 text-black text-[16px] transition-colors duration-200"
            >
              <div className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15 21V13C15 12.7348 14.8946 12.4804 14.7071 12.2929C14.5196 12.1054 14.2652 12 14 12H10C9.73478 12 9.48043 12.1054 9.29289 12.2929C9.10536 12.4804 9 12.7348 9 13V21"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 9.99948C2.99993 9.70855 3.06333 9.4211 3.18579 9.1572C3.30824 8.89329 3.4868 8.65928 3.709 8.47148L10.709 2.47248C11.07 2.16739 11.5274 2 12 2C12.4726 2 12.93 2.16739 13.291 2.47248L20.291 8.47148C20.5132 8.65928 20.6918 8.89329 20.8142 9.1572C20.9367 9.4211 21.0001 9.70855 21 9.99948V18.9995C21 19.5299 20.7893 20.0386 20.4142 20.4137C20.0391 20.7888 19.5304 20.9995 19 20.9995H5C4.46957 20.9995 3.96086 20.7888 3.58579 20.4137C3.21071 20.0386 3 19.5299 3 18.9995V9.99948Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              Home
            </button>
          </div>
        </header>
      )}

      {/* HERO STEP */}
      {step === STEP.HERO && (
        <main className="relative min-h-screen  flex items-end justify-center overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={ExploreHeroVideo}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />

          <div className="relative z-10 text-center  px-4">
            <h2 className="!text-[64px] !leading-[110%] mb-4 md:mb-7">
              Discover Trainers,
              <br className="hidden md:block" /> Wellness Services
            </h2>
            <p className="text-[18px] mb-8">Swipe to get started.</p>
            <button
              type="button"
              onClick={handleStart}
              className="inline-flex cursor-pointer items-center text-black tracking-[0.18em] animate-bounce"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="103"
                height="103"
                viewBox="0 0 103 103"
                fill="none"
              >
                <g filter="url(#filter0_d_10856_4523)">
                  <rect
                    x="18.6001"
                    y="79.5996"
                    width="65"
                    height="65"
                    rx="32.5"
                    transform="rotate(-90 18.6001 79.5996)"
                    stroke="#4AB04A"
                    stroke-width="3"
                    shape-rendering="crispEdges"
                  />
                  <path
                    d="M59.1001 32.7211L59.1001 38.8921C59.1001 39.3371 58.5611 39.5611 58.2461 39.2461L51.1001 32.1001L43.9531 39.2471C43.6391 39.5621 43.1001 39.3381 43.1001 38.8931L43.1001 32.7221C43.1001 32.3241 43.2581 31.9431 43.5391 31.6611L50.3931 24.8071C50.7841 24.4161 51.4171 24.4161 51.8071 24.8071L58.6601 31.6601C58.9421 31.9421 59.1001 32.3231 59.1001 32.7211ZM58.6601 61.6611L51.8071 54.8081C51.4161 54.4171 50.7831 54.4171 50.3931 54.8081L43.5391 61.6621C43.2581 61.9431 43.1001 62.3241 43.1001 62.7221L43.1001 68.8931C43.1001 69.3381 43.6391 69.5621 43.9541 69.2471L51.1001 62.1011L58.2461 69.2471C58.5611 69.5621 59.1001 69.3391 59.1001 68.8931L59.1001 62.7221C59.1001 62.3241 58.9421 61.9421 58.6601 61.6611ZM58.6601 46.6611L51.8071 39.8081C51.4161 39.4171 50.7831 39.4171 50.3931 39.8081L43.5391 46.6621C43.2581 46.9421 43.1001 47.3241 43.1001 47.7221L43.1001 53.8931C43.1001 54.3381 43.6391 54.5621 43.9541 54.2471L51.1001 47.1001L58.2461 54.2461C58.5611 54.5611 59.1001 54.3381 59.1001 53.8931L59.1001 47.7221C59.1001 47.3231 58.9421 46.9421 58.6601 46.6611Z"
                    fill="#4AB04A"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_10856_4523"
                    x="9.72748e-05"
                    y="-0.000391006"
                    width="102.2"
                    height="102.2"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="8.55" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.176471 0 0 0 0 0.870588 0 0 0 0 0.156863 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_10856_4523"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_10856_4523"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </button>
          </div>
        </main>
      )}

      {/* SERVICES STEP */}
      {step === STEP.SERVICES && (
        <main className="min-h-screen  text-black flex flex-col">
          <section className=" w-full mx-auto px-4 md:px-8 py-10 md:py-16">
            <header className="text-center mb-10 md:mb-14">
              <h2 className="!text-[40px] !font-[Kanit] !font-semibold mb-3">
                Choose Services
              </h2>
            </header>

            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
              {/* Wellness card */}
              <button
                type="button"
                onClick={() => handleCategorySelect(CATEGORY.WELLNESS)}
                className="group relative overflow-hidden rounded-2xl bg-black text-left shadow-lg hover:shadow-xl transition-all duration-300 Servicecardbg_2"
              >
                <div className="relative p-6 md:p-8 flex flex-col justify-end h-full w-full cursor-pointer min-h-[480px]">
                  <div className="mt-5 flex flex-col pb-8 items-center justify-between">
                    <h3 className="!text-[64px] !font-[Kanit] !font-semibold uppercase  text-white mb-2">
                      Wellness
                    </h3>
                    <span className="h-10 w-10 rounded-full  border-[1px] border-[#fff] flex items-center justify-center  group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.2249 4.55876C11.1079 4.67595 11.0421 4.8348 11.0421 5.00043C11.0421 5.16605 11.1079 5.32491 11.2249 5.44209L15.1582 9.37543H3.33323C3.16747 9.37543 3.0085 9.44127 2.89129 9.55849C2.77408 9.6757 2.70823 9.83467 2.70823 10.0004C2.70823 10.1662 2.77408 10.3252 2.89129 10.4424C3.0085 10.5596 3.16747 10.6254 3.33323 10.6254H15.1582L11.2249 14.5588C11.1635 14.616 11.1142 14.685 11.0801 14.7616C11.0459 14.8383 11.0276 14.9211 11.0261 15.005C11.0246 15.0889 11.04 15.1723 11.0715 15.2501C11.1029 15.3279 11.1497 15.3986 11.209 15.458C11.2684 15.5173 11.3391 15.5641 11.4169 15.5955C11.4947 15.627 11.5781 15.6424 11.662 15.6409C11.7459 15.6394 11.8287 15.6211 11.9053 15.5869C11.982 15.5528 12.051 15.5035 12.1082 15.4421L17.1082 10.4421C17.2253 10.3249 17.291 10.1661 17.291 10.0004C17.291 9.8348 17.2253 9.67595 17.1082 9.55876L12.1082 4.55876C11.991 4.44172 11.8322 4.37598 11.6666 4.37598C11.5009 4.37598 11.3421 4.44172 11.2249 4.55876Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </button>

              {/* Trainers card */}
              <button
                type="button"
                onClick={() => handleCategorySelect(CATEGORY.TRAINERS)}
                className="group relative overflow-hidden rounded-2xl bg-[#101010] text-left shadow-lg hover:shadow-xl transition-all duration-300 Servicecardbg_1"
              >
                <div className="relative p-6 md:p-8 flex flex-col justify-end h-full cursor-pointer min-h-[480px]">
                  <div className="mt-5 flex flex-col pb-8 items-center justify-between">
                    <h3 className="!text-[64px] !font-[Kanit] !font-semibold uppercase  text-white mb-2">
                      Training
                    </h3>
                    <span className="h-10 w-10 rounded-full  border-[1px] border-[#fff] flex items-center justify-center  group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.2249 4.55876C11.1079 4.67595 11.0421 4.8348 11.0421 5.00043C11.0421 5.16605 11.1079 5.32491 11.2249 5.44209L15.1582 9.37543H3.33323C3.16747 9.37543 3.0085 9.44127 2.89129 9.55849C2.77408 9.6757 2.70823 9.83467 2.70823 10.0004C2.70823 10.1662 2.77408 10.3252 2.89129 10.4424C3.0085 10.5596 3.16747 10.6254 3.33323 10.6254H15.1582L11.2249 14.5588C11.1635 14.616 11.1142 14.685 11.0801 14.7616C11.0459 14.8383 11.0276 14.9211 11.0261 15.005C11.0246 15.0889 11.04 15.1723 11.0715 15.2501C11.1029 15.3279 11.1497 15.3986 11.209 15.458C11.2684 15.5173 11.3391 15.5641 11.4169 15.5955C11.4947 15.627 11.5781 15.6424 11.662 15.6409C11.7459 15.6394 11.8287 15.6211 11.9053 15.5869C11.982 15.5528 12.051 15.5035 12.1082 15.4421L17.1082 10.4421C17.2253 10.3249 17.291 10.1661 17.291 10.0004C17.291 9.8348 17.2253 9.67595 17.1082 9.55876L12.1082 4.55876C11.991 4.44172 11.8322 4.37598 11.6666 4.37598C11.5009 4.37598 11.3421 4.44172 11.2249 4.55876Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </section>
        </main>
      )}

      {/* PROVIDERS STEP */}
      {step === STEP.PROVIDERS && (
        <main className="min-h-screen  text-black flex flex-col">
          <section className="w-full mx-auto px-4 md:px-8 py-8 md:py-12 flex-1 flex flex-col">
            <header className="mb-6 md:mb-8">
              <h2 className="!text-[40px] !font-[Kanit] !font-semibold mb-3 text-center uppercase">
                {category === CATEGORY.WELLNESS ? "Providers" : "Trainers"}
              </h2>
            </header>
            <div className="mb-8">
              <Carousel
                opts={{
                  align: "start",
                  dragFree: true,
                }}
                className="w-full relative"
              >
                <CarouselContent className="-ml-3 md:-ml-4">
                  <CarouselItem className="pl-3 md:pl-4 basis-auto">
                    <button
                      type="button"
                      onClick={() => handleServiceFilterSelect("ALL")}
                      className={`px-4 py-2 cursor-pointer rounded-[8px] border border-[#000] text-sm whitespace-nowrap transition-colors !text-[20px] !font-[400] ${
                        selectedServiceId === "ALL"
                          ? "bg-black text-white border-black"
                          : "bg-white text-black border-[#CCCCCC] hover:bg-black hover:text-white"
                      }`}
                    >
                      All
                    </button>
                  </CarouselItem>

                  {/* Filter Buttons Mapping */}
                  {sortedServices.map((svc) => (
                    <CarouselItem
                      key={svc.id}
                      className="pl-3 md:pl-4 basis-auto"
                    >
                      <button
                        type="button"
                        onClick={() => handleServiceFilterSelect(svc.id)}
                        className={`px-4 py-2 !text-[20px] cursor-pointer !font-[400] rounded-[8px] border border-[#000] text-sm whitespace-nowrap transition-colors ${
                          selectedServiceId === svc.id
                            ? "bg-[#4AB04A] text-black border-[#4AB04A]"
                            : "bg-white text-black border-[#CCCCCC] hover:bg-black hover:text-white"
                        }`}
                      >
                        {svc.name}
                      </button>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            {/* Providers grid */}
            <div className="flex-1">
              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900 mb-4" />
                    <p className="text-gray-600 text-sm md:text-base">
                      Loading providers for {locationConfig.name}...
                    </p>
                  </div>
                </div>
              ) : error ? (
                <div className="text-center text-red-600 py-10 max-w-md mx-auto">
                  <p className="text-base md:text-lg font-semibold mb-2">
                    Unable to load providers.
                  </p>
                  <p className="text-sm md:text-base mb-4">{error}</p>
                  <button
                    type="button"
                    onClick={() => window.location.reload()}
                    className="inline-flex items-center justify-center rounded-full border border-[#CCCCCC] px-4 py-1.5 text-sm hover:bg-black hover:text-white transition-colors duration-200"
                  >
                    Try again
                  </button>
                </div>
              ) : visibleProviders.length === 0 ? (
                <div className="text-center text-gray-600 py-10 max-w-md mx-auto">
                  <p className="text-base md:text-lg font-medium mb-2">
                    No providers found for the selected criteria.
                  </p>
                  <p className="text-sm md:text-base">
                    Try adjusting your filters or check back soon as providers
                    are added.
                  </p>
                </div>
              ) : (
                <div className="grid gap-4 md:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {visibleProviders.map((provider) => (
                    <button
                      key={provider.id}
                      type="button"
                      onClick={() => handleProviderClick(provider)}
                      className="group text-left bg-[#F6F6F6] cursor-pointer rounded-[8px] overflow-hidden hover:shadow-sm transition-all duration-200"
                    >
                      <div className="aspect-[4/3] w-full bg-[#222222] overflow-hidden">
                        {provider.image ? (
                          <img
                            src={provider.image}
                            alt={provider.displayName}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-xs text-white/60">
                            Image coming soon
                          </div>
                        )}
                      </div>
                      <div className="p-4 md:p-5 flex items-center justify-between">
                        <div className="w-[80%]">
                          <h3 className="text-base md:!text-[24px] !font-[500] mb-1">
                            {provider.displayName}
                          </h3>
                          {provider.specialty && (
                            <p className="!text-[16px] text-[#767676] mb-1">
                              {provider.specialty}
                            </p>
                          )}
                        </div>

                        <div className="rounded-full border-[1px] border-[#000] w-[30px] h-[30px] flex items-center justify-center ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M6 4L10 8L6 12"
                              stroke="black"
                              stroke-width="1.33333"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </section>
        </main>
      )}

      {/* PROFILE STEP */}
      {step === STEP.PROFILE && selectedProvider && (
        <main className="min-h-screen bg-white text-black flex flex-col">
          <section className="w-full mx-auto px-4 md:px-8 py-8 md:py-12 flex-1">
            <article className="  overflow-hidden">
              <div className="w-full  ">
                <div className="flex justify-center items-start  space-x-3  p-10 space-x-10 rounded-[12px]">
                  <div className="min-w-[400px]  ">
                    <div className="bg-[#F7F7F7] p-4 !rounded-[8px] ">
                      <div className="w-full  overflow-hidden !rounded-[12px]">
                        {selectedProvider.image ? (
                          <img
                            src={selectedProvider.image}
                            alt={selectedProvider.displayName}
                            className="w-full h-full object-cover "
                          />
                        ) : (
                          <div className="w-full h-full min-h-[260px] flex items-center justify-center text-xs text-white/60">
                            Image coming soon
                          </div>
                        )}
                      </div>
                      <div className="mt-6">
                        <h1 className="!text-[24px] font-semibold !leading-[120%]">
                          {selectedProvider.displayName}
                        </h1>
                        {selectedProvider.role && (
                          <p className="text-sm md:text-base text-[#555555] mb-1">
                            {selectedProvider.role}
                          </p>
                        )}
                        {selectedProvider.location && (
                          <div className="flex items-center gap-1.5 mt-2 text-[#555555]">
                            <MapPin className="text-[#4AB04A] " size={18} />
                            <span className="text-sm md:text-base !capitalize font-medium">
                              {selectedProvider.location}
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
                          <g clip-path="url(#clip0_10948_66)">
                            <path
                              d="M12.5 30C9.84783 30 7.3043 31.0536 5.42893 32.9289C3.55357 34.8043 2.5 37.3478 2.5 40V50C2.5 52.6522 3.55357 55.1957 5.42893 57.0711C7.3043 58.9464 9.84783 60 12.5 60H15C15.663 60 16.2989 59.7366 16.7678 59.2678C17.2366 58.7989 17.5 58.163 17.5 57.5V32.5C17.5 31.837 17.2366 31.2011 16.7678 30.7322C16.2989 30.2634 15.663 30 15 30H12.5ZM12.5 30C12.5 22.7065 15.3973 15.7118 20.5546 10.5546C25.7118 5.39731 32.7065 2.5 40 2.5C47.2935 2.5 54.2882 5.39731 59.4454 10.5546C64.6027 15.7118 67.5 22.7065 67.5 30M67.5 60H65C64.337 60 63.7011 59.7366 63.2322 59.2678C62.7634 58.7989 62.5 58.163 62.5 57.5V32.5C62.5 31.837 62.7634 31.2011 63.2322 30.7322C63.7011 30.2634 64.337 30 65 30H67.5M67.5 60C70.1522 60 72.6957 58.9464 74.5711 57.0711C76.4464 55.1957 77.5 52.6522 77.5 50V40C77.5 37.3478 76.4464 34.8043 74.5711 32.9289C72.6957 31.0536 70.1522 30 67.5 30M67.5 60V62.5C67.5 65.1522 66.4464 67.6957 64.5711 69.5711C62.6957 71.4464 60.1522 72.5 57.5 72.5H50"
                              stroke="#4AB04A"
                              stroke-width="4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M30 27.4998C30 25.2 30.7928 22.9704 32.2448 21.1868C33.6967 19.4032 35.7191 18.1746 37.9711 17.708C40.2232 17.2414 42.5672 17.5653 44.6083 18.6251C46.6494 19.685 48.2628 21.416 49.1767 23.5265C49.9033 25.2098 50.1567 27.0598 49.9033 28.8765C49.6515 30.6921 48.9054 32.4035 47.7468 33.8238C46.5881 35.244 45.0613 36.3185 43.3333 36.9298C42.3581 37.2746 41.5138 37.9134 40.9168 38.7582C40.3198 39.603 39.9995 40.6121 40 41.6465V42.4998M45 77.4998H40C38.6739 77.4998 37.4021 76.9731 36.4645 76.0354C35.5268 75.0977 35 73.8259 35 72.4998C35 71.1738 35.5268 69.902 36.4645 68.9643C37.4021 68.0266 38.6739 67.4998 40 67.4998H45C46.3261 67.4998 47.5979 68.0266 48.5355 68.9643C49.4732 69.902 50 71.1738 50 72.4998C50 73.8259 49.4732 75.0977 48.5355 76.0354C47.5979 76.9731 46.3261 77.4998 45 77.4998Z"
                              stroke="#4AB04A"
                              stroke-width="4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M40 55C39.6685 55 39.3505 54.8683 39.1161 54.6339C38.8817 54.3995 38.75 54.0815 38.75 53.75C38.75 53.4185 38.8817 53.1005 39.1161 52.8661C39.3505 52.6317 39.6685 52.5 40 52.5M40 55C40.3315 55 40.6495 54.8683 40.8839 54.6339C41.1183 54.3995 41.25 54.0815 41.25 53.75C41.25 53.4185 41.1183 53.1005 40.8839 52.8661C40.6495 52.6317 40.3315 52.5 40 52.5"
                              stroke="#4AB04A"
                              stroke-width="4"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_10948_66">
                              <rect width="80" height="80" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <h3 className="!text-[32px] !text-[#fff] mt-5  !font-[500]">
                        Need assistance?
                      </h3>
                      <p className="!text-[#fff] !text-[20px]">
                        Reach out to our receptionist for help!
                      </p>
                    </div>
                  </div>
                  <div className="border-[1px] border-[#DDDDDD] rounded-[12px] p-6">
                    <div className="flex-1 ">
                      {selectedProvider.bio && (
                        <section className="mb-6">
                          <h2 className="text-sm md:!text-[24px] font-semibold mb-2">
                            About
                          </h2>
                          <p className="text-sm md:!text-[16px] text-[#444444] leading-relaxed whitespace-pre-line">
                            {selectedProvider.bio}
                          </p>
                        </section>
                      )}

                      {selectedProvider.certification && (
                        <section className="mb-6">
                          <h2 className="text-sm md:!text-[24px] font-semibold mb-2">
                            Certification
                          </h2>
                          <p className="text-sm md:!text-[16px] text-[#444444] leading-relaxed whitespace-pre-line">
                            {selectedProvider.certification}
                          </p>
                        </section>
                      )}

                      {selectedProvider.areas_of_focus && (
                        <section className="mb-6">
                          <h2 className="text-sm md:!text-[24px] font-semibold mb-2">
                            Areas of Focus
                          </h2>
                          <div className="flex flex-wrap gap-2">
                            {selectedProvider.areas_of_focus
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
                      {(selectedProvider.email ||
                        selectedProvider.phone ||
                        (Array.isArray(selectedProvider.contacts) &&
                          selectedProvider.contacts.length > 0) ||
                        (Array.isArray(selectedProvider.social_links) &&
                          selectedProvider.social_links.length > 0)) && (
                        <section className="flex flex-col gap-2 md:gap-0.5 mt-6">
                          <h2 className="text-sm md:!text-[24px] font-semibold mb-2 text-[#000]">
                            Contact & Socials
                          </h2>
                          <div className="flex flex-wrap gap-2">
                            {Array.isArray(selectedProvider.contacts) &&
                            selectedProvider.contacts.length > 0 ? (
                              selectedProvider.contacts.map((contact) => {
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
                                    className="px-3 py-3 flex items-center gap-2 !bg-[#F7F7F7] text-[#000] rounded-[5px] text-xs md:text-sm hover:!bg-[#E6E6E6] border border-[#DDDDDD] transition-colors "
                                  >
                                    {renderContactIcon(contact.type)}
                                    <span className="description">{label}</span>
                                  </a>
                                );
                              })
                            ) : (
                              <>
                                {selectedProvider.email && (
                                  <a
                                    href={`mailto:${selectedProvider.email}`}
                                    className="px-3 py-3 flex items-center gap-2 !bg-[#F7F7F7] text-[#000] rounded-[5px] text-xs md:text-sm hover:!bg-[#E6E6E6] border border-[#DDDDDD] transition-colors"
                                  >
                                    <Mail
                                      className="text-[#4AB04A]"
                                      size={20}
                                    />
                                    <span className="description">
                                      {selectedProvider.email}
                                    </span>
                                  </a>
                                )}

                                {/* Phone Fallback */}
                                {selectedProvider.phone && (
                                  <a
                                    href={`tel:${selectedProvider.phone}`}
                                    className="px-3 py-3 flex items-center gap-2 !bg-[#F7F7F7] text-[#000] rounded-[5px] text-xs md:text-sm hover:!bg-[#E6E6E6] border border-[#DDDDDD] transition-colors"
                                  >
                                    <Phone
                                      className="text-[#4AB04A]"
                                      size={20}
                                    />
                                    <span className="description">
                                      {selectedProvider.phone}
                                    </span>
                                  </a>
                                )}

                                {Array.isArray(selectedProvider.social_links) &&
                                  selectedProvider.social_links.map(
                                    (link, index) => {
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
                                          <span className="description">
                                            {handle}
                                          </span>
                                        </a>
                                      );
                                    }
                                  )}
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
      )}
    </div>
  );
};

export default Discover;
