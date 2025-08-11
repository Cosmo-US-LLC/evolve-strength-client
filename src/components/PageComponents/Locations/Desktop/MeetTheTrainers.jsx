import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getTrainersByLocation } from "@/constants/trainerData";
import TrainerDetails from "@/components/PageComponents/Explore/Desktop/components/shared/TrainerDetails";
import downicon from "@/assets/images/Locations/icon_down.svg";

const MeetTheTrainers = ({ location = "" }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    loop: true,
    slidesToScroll: 1,
    align: "start",
  });

  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  // Get trainers for the specified location
  const trainers = getTrainersByLocation(location);

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

  // Transform trainer data to match TrainerDetails component expectations
  const transformTrainerData = (trainer) => {
    return {
      ...trainer,
      about: trainer.bio,
      areasOfFocus: trainer.areas_of_focus
        ? trainer.areas_of_focus.split(", ")
        : [],
    };
  };

  // If no trainers found, show a message
  if (trainers.length === 0) {
    return (
      <section className="md:mb-12.5  mb-20 bg-[#FFFFFF]">
        <div className="max-w-[1280px] mx-auto md:px-8  px-4 flex flex-col items-start ">
          <div className="w-full flex  flex-col text-center mt-6 gap-4 ">
            <h2 className="text-[#000] uppercase  ">
              Meet the trainers at {locationDisplayName.toLowerCase()}
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
    <section className="md:mb-12.5  mb-20 bg-[#FFFFFF]">
      <div className="max-w-[1280px] mx-auto md:px-8  px-4 flex flex-col items-start ">
        <div className="w-full flex  flex-col text-center mt-6 gap-4 ">
          <h2 className="text-[#000] uppercase  ">
            Meet the trainers at {locationDisplayName.toLowerCase()}
          </h2>
          <h4 className="mb-10 ">
            Every great workout starts with a great coach. Meet yours.
          </h4>
        </div>

        <div className="relative w-full">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex md:gap-4">
              {trainers.map((trainer) => (
                <div
                  key={trainer.id}
                  className="md:flex-[0_0_24%] flex-[0_0_100%] gap-3 flex flex-col relative"
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
                    className={`w-full h-[95px] p-4 ${
                      selectedTrainer?.id === trainer.id
                        ? "bg-[#4AB04A] "
                        : "bg-[#F6F6F6]"
                    } rounded-[10px] flex  justify-between`}
                  >
                    {/* Left: Name + Description */}
                    <div className="flex flex-col w-[full]  ">
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
                    </div>

                    {/* Right: Down Button */}
                    <button
                      className={`w-6 h-6 flex justify-center mt-6 mr-1 rounded-full border border-black transition-transform duration-200 ${
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
          <div className="pt-5">
            <div className="absolute  md:top-[30%] left-[37%] md:left-[-60px] -translate-y-1/4 md:translate-y-1/2 ">
              <button
                onClick={scrollPrev}
                className="p-2 rounded-full border border-[#000000] text-[#000000]"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute  md:top-[30%] -translate-y-1/4 md:translate-y-1/2 md:-right-[60px] right-[37%] z-10">
              <button
                onClick={scrollNext}
                className="p-2 rounded-full border border-[#000000] text-[#000000]"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Trainer Details Section */}
        {selectedTrainer && (
          <div className="w-full mt-8 transition-all duration-300 ease-in-out">
            <TrainerDetails trainer={transformTrainerData(selectedTrainer)} />
          </div>
        )}
      </div>
    </section>
  );
};
export default MeetTheTrainers;
