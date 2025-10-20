import React, { useState, useEffect, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { fetchAllTrainers, getTrainersByLocation } from "@/services/trainerApi";
import TrainerDetails from "@/components/PageComponents/Explore/Desktop/components/shared/TrainerDetails";
import downicon from "@/assets/images/Locations/icon_down.svg";
import { Link } from "react-router-dom";

const MeetTheTrainers = ({ location = "" }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    loop: true,
    slidesToScroll: 1,
    align: "start",
  });

  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch trainers from API
  useEffect(() => {
    const loadTrainers = async () => {
      try {
        setLoading(true);
        const allTrainers = await fetchAllTrainers();

        // Filter by location and role (checks ALL roles)
        const locationTrainers = getTrainersByLocation(allTrainers, location);
        const personalTrainers = locationTrainers.filter((trainer) => {
          const roles = trainer.roles || [trainer.role || ""];
          // Check if ANY role includes "Personal Trainer"
          return roles.some((role) =>
            role.toLowerCase().includes("personal trainer")
          );
        });

        setTrainers(personalTrainers);
      } catch (error) {
        console.error("Error loading trainers:", error);
        setTrainers([]);
      } finally {
        setLoading(false);
      }
    };

    if (location) {
      loadTrainers();
    }
  }, [location]);

  // Close details when carousel navigation changes (swipe, drag, etc.)
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedTrainer(null);
    };

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setSelectedTrainer(null);
    }
  };

  const scrollNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setSelectedTrainer(null);
    }
  };

  // Get location from URL path for tour URL
  const currentPath = window.location.pathname;
  let locationKey = "calgary-seton"; // default

  if (currentPath.includes("vancouver-post")) {
    locationKey = "vancouver-post";
  } else if (currentPath.includes("burnaby-brentwood")) {
    locationKey = "burnaby-brentwood";
  } else if (currentPath.includes("calgary-seton")) {
    locationKey = "calgary-seton";
  } else if (currentPath.includes("calgary-royal-oak")) {
    locationKey = "calgary-royal-oak";
  } else if (currentPath.includes("calgary-sunridge")) {
    locationKey = "calgary-sunridge";
  } else if (currentPath.includes("edmonton-south")) {
    locationKey = "edmonton-south";
  } else if (currentPath.includes("edmonton-downtown")) {
    locationKey = "edmonton-downtown";
  } else if (currentPath.includes("edmonton-north")) {
    locationKey = "edmonton-north";
  }

  // Get location-specific tour URL
  const getTourUrl = (locationKey) => {
    const tourUrls = {
      "vancouver-post": "/book-a-tour/?location=40327",
      "burnaby-brentwood": "/book-a-tour/?location=40248",
      "calgary-seton": "/book-a-tour/?location=40097",
      "calgary-royal-oak": "/book-a-tour/?location=40142",
      "calgary-sunridge": "/book-a-tour/?location=06973",
      "edmonton-south": "/book-a-tour/?location=06962",
      "edmonton-downtown": "/book-a-tour/?location=06967",
      "edmonton-north": "/book-a-tour/?location=06964",
    };

    return tourUrls[locationKey] || "/book-a-tour/";
  };

  const tourUrl = getTourUrl(locationKey);

  // Get location display name (remove underscores and format nicely)
  const getLocationDisplayName = (locationName) => {
    return locationName
      .replace(/_/g, " ")
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const locationDisplayName = getLocationDisplayName(location);

  // Handle trainer details toggle
  const handleTrainerDetails = (trainer) => {
    if (selectedTrainer?.id === trainer.id) {
      setSelectedTrainer(null);
    } else {
      setSelectedTrainer(trainer);
    }
  };

  // Transform trainer data to match TrainerDetails component expectations - memoized for performance
  const transformTrainerData = useMemo(() => {
    return (trainer) => {
      return {
        ...trainer,
        about: trainer.bio,
        areasOfFocus: trainer.areas_of_focus
          ? trainer.areas_of_focus.split(", ")
          : [],
      };
    };
  }, []);

  // Loading state
  if (loading) {
    return (
      <section className="md:mb-12.5 mb-20 bg-[#FFFFFF]">
        <div className="max-w-[1280px] mx-auto md:px-8 px-4 flex flex-col items-center justify-center py-20">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mb-4"></div>
          <p className="text-gray-600">Loading trainers...</p>
        </div>
      </section>
    );
  }

  // If no trainers found, show a message
  if (trainers.length === 0) {
    return (
      <section className="md:mb-12.5 mb-20 bg-[#FFFFFF]">
        <div className="max-w-[1280px] mx-auto md:px-8  px-4 flex flex-col items-start ">
          <div className="w-full flex  flex-col text-center mt-6 gap-4 ">
            <h2 className="text-[#000] uppercase  ">
              Meet the trainers at{" "}
              <span className="!text-[#4AB04A]">
                {locationDisplayName.toLowerCase()}
              </span>
            </h2>
            <h4 className="mb-10 ">
              Every great workout starts with a great coach. Meet yours.
            </h4>
            <p className="text-[#767676] mb-8">
              Our amazing team of trainers will be announced soon!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="md:mb-2 mb-6 bg-[#FFFFFF]">
      <div className="max-w-[1280px] mx-auto md:px-8 px-4 flex flex-col items-start ">
        <div className="flex justify-center items-center w-full mb-4">
          <a href={tourUrl}>
            <button className="btnPrimary">Book a Free Tour</button>
          </a>
        </div>
        <div className="w-full flex  flex-col text-center mt-6 gap-4 ">
          <h2 className="text-[#000] !text-[29px] md:!text-[40px] uppercase w-full">
            Meet the trainers at{" "}
            <span className="!text-[#4AB04A]">
              {locationDisplayName.toLowerCase()}
            </span>
          </h2>
          <h4 className="md:mb-10 mb-6">
            Every great workout starts with a great coach. Meet yours.
          </h4>
        </div>

        <div className="relative w-full">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-0.5 md:-ml-2.5">
              {trainers.map((trainer) => (
                <div
                  key={trainer.id}
                  className="pl-0.5 md:pl-2.5 w-fit md:basis-1/4 flex-shrink-0 gap-3 flex flex-col"
                >
                  <div className="relative">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full md:h-[273px] h-[300px] rounded-2xl object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 bg-opacity-30 rounded-2xl"></div>
                  </div>

                  <div
                    className={`w-full h-auto p-4 ${
                      selectedTrainer?.id === trainer.id
                        ? "bg-[#4AB04A] "
                        : "bg-[#F6F6F6]"
                    } rounded-[10px] flex w-full justify-between`}
                  >
                    {/* Left: Name + Description */}
                    <div className="flex flex-col w-[88%] ">
                      <h3
                        className={`text-[#000] leading-tight ${
                          selectedTrainer?.id === trainer.id
                            ? "text-[#FFFFFF]"
                            : "text-[#000]"
                        }`}
                      >
                        {trainer.name}
                      </h3>
                      <p
                        className={`text-[#767676]  ${
                          selectedTrainer?.id === trainer.id
                            ? "text-[#FFFFFF]"
                            : "text-[#000]"
                        }`}
                      >
                        {trainer.role}
                      </p>
                      <div
                        className={`flex gap-1 items-center text-sm mt-2 font-[500] leading-[16px] text-[16px] ${
                          selectedTrainer?.id === trainer.id
                            ? "text-[#FFFFFF]"
                            : "text-[#4AB04A]"
                        }`}
                      >
                        <MapPin className="" size={16} />
                        {trainer.location}
                      </div>
                    </div>

                    {/* Right: Down Button */}

                    <button
                      className={`w-6 h-6 flex justify-center mr-1 rounded-full border border-black transition-transform duration-200 ${
                        selectedTrainer?.id === trainer.id ? "rotate-180" : ""
                      }`}
                      onClick={() => handleTrainerDetails(trainer)}
                    >
                      <img src={downicon} alt="More" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" ">
            <div className="absolute md:top-[30%] left-[37%] md:left-[-60px] translate-y-1/4 md:translate-y-1/2 ">
              <button
                onClick={scrollPrev}
                className="p-2 rounded-full border border-[#000000] text-[#000000] cursor-pointer hover:bg-[#000000] hover:text-[#fff]"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute md:top-[30%] translate-y-1/4 md:translate-y-1/2 md:-right-[60px] right-[37%] z-10">
              <button
                onClick={scrollNext}
                className="p-2 rounded-full border border-[#000000] text-[#000000] cursor-pointer hover:bg-[#000000] hover:text-[#fff]"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Trainer Details Section */}
        {selectedTrainer && (
          <div className="w-full mt-16 transition-all duration-300 ease-in-out">
            <TrainerDetails trainer={transformTrainerData(selectedTrainer)} />
          </div>
        )}
      </div>
    </section>
  );
};
export default MeetTheTrainers;
