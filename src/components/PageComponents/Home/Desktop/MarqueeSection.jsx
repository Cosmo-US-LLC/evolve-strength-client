import React from "react";
import EquipmentCardsMarquee from "./EquipmentCardsMarquee";
// import locationImg from "";
// Equipment cards data - images from Figma
const equipmentCards = [
  {
    image: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332157739-0fd6a943-b72e-4bf3-a653-b1242798f96c.png",
    label: "Cycle Machines",
  },
  {
    image: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332241562-b3a04a59-83d8-41f7-a9f4-b8c54432607e.png",
    label: "Power Rack",
  },
  {
    image: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332274042-685a10c5-e431-4564-a3af-45c54484bdba.png",
    label: "Medicine Ball Rack",
  },
  {
    image: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332295250-944c5869-09f9-49ba-bb2a-8db5571fddce.png",
    label: "Sprint/Sled Track",
  },
  {
    image: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332345190-94b3cf74-02cb-456e-ac49-e8f1446ee774.png",
    label: "Crossover Machine",
  },
  {
    image: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332363471-948f816b-ffb3-4e59-b2ec-d455422de2e0.png",
    label: "Eleiko Pulley Station",
  },
  {
    image: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332388294-b80f36b4-8b93-4c29-baaa-50c9e68d314b.png",
    label: "Eleiko Dumbbell Rack",
  },
  {
    image: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332410287-d6f5d264-323a-4007-ada0-7bdefc41f77d.png",
    label: "AirBike",
  },
  {
    image: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332759521-24059b74-cdd2-4f25-82a3-10cf52fd48f8.png",
    label: "Preacher Curl Bench",
  },
  {
    image: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332772440-a6c2f80b-7cbe-4530-9930-3fc642deed41.png",
    label: "Hip Thrust Machine",
  },
  {
    image: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332786087-0e1e4236-7549-4a7d-8a9f-55e73ece4df6.png",
    label: "Dual Cable Crossover",
  },
  {
    image: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332797888-bb09622b-ccc0-47c5-83b9-4bdefc3b0a6e.png",
    label: "SkiErgs & RowErgs",
  },
  {
    image: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332812433-ca61b115-4f91-4d23-aba5-8b2cba515a0a.png",
    label: "Olympic Plates",
  },
  {
    image: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332839026-6df6f5de-2a2c-4fe1-9d7f-08c01b2ebfd4.png",
    label: "Dual Cable Pulldown",
  },
  {
    image: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332861742-d12c9b5f-b78f-4473-9d70-1a56e103a855.png",
    label: "Power Rack",
  },
  {
    image: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762332920124-3f490ee4-c32b-479d-9550-69b322cd6129.png",
    label: "Medicine Ball Rack",
  },
];

const MarqueeSection = () => {
  return (
    <section className="bg-white w-full py-12 md:py-20">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col  items-center">
        {/* Header Section */}
        <div className="flex flex-col gap-4 md:items-center md:text-center max-w-[800px] mb-12">
          <h2 className="text-[#1c1c1c] uppercase text-[40px]">
            205+ World-<br className="md:hidden" />Class Personal Trainers
          </h2>
          <h4 className="text-black max-w-[611px] leading-[26px]">
            No matter where you're starting or what your goal is, you'll find a
            trainer at Evolve who understands your journey and knows how to
            deliver results.
          </h4>
        </div>

        {/* Two reusable marquees with opposite directions */}
        <EquipmentCardsMarquee items={equipmentCards.slice(0, 8)} direction="left" speed={40} />
        <EquipmentCardsMarquee items={equipmentCards.slice(8)} direction="right" speed={40} />
      </div>
    </section>
  );
};

export default MarqueeSection;
