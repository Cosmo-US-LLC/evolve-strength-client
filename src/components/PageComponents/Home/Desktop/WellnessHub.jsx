import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import image1 from "../../../../assets/images/home/wellness-hub/Businesses.webp"
import image2 from "../../../../assets/images/home/wellness-hub/Practitioners.webp"
import image3 from "../../../../assets/images/home/wellness-hub/Trainers.webp"

const carouselItemsData = [
  {
    count: "136+",
    title: "BUSINESSES",
    description: "working with us across our locations",
    image: image1,
  },
  {
    count: "195+",
    title: "PRACTITIONERS",
    description: "offering a wide range of health and wellness services",
    image: image2,
  },
  {
    count: "205+",
    title: "TRAINERS",
    description: "helping members reach their fitness goals every day",
    image: image3,
  },
];

function WellnessHub() {
  return (
    <div id="wellnessHub" className="bg-[#fff]">
      <div className="w-[100%] max-w-[1280px] px-8 pt-[100px] mx-auto flex justify-between">
        <div className="w-[50%] max-w-[600px] flex flex-col gap-4">
          <h2 className="uppercase text-[#1C1C1C] leading-[39px]">
            CANADA’S BEST FITNESS <br /> AND WELLNESS HUB
          </h2>
          <h4 className="text-[#000] leading-[26px]">
            With state-of-the-art locations in Edmonton, Calgary, Burnaby, and
            Vancouver, Evolve brings together top-tier fitness and wellness
            under one roof.
          </h4>
        </div>

        <div className="w-[50%] flex items-center justify-end pl-10">

        <div className="min-w-[300px] max-w-[460px] h-[355px] overflow-y-hidden hover:overflow-y-scroll scrollbar-hide">
          <Carousel
            opts={{ align: "start" }}
            orientation="vertical"
            className="h-full"
          >
            <CarouselContent className="h-full snap-y snap-mandatory mb-12">
              {carouselItemsData.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="snap-start h-[300px] flex items-center justify-center"
                >
                  <div className="bg-[#ffffff] w-full p-4 rounded-[10px] border border-[#DDDADA] shadow-sm">
                    <h2 className="text-[#4AB04A] !font-[500] uppercase">
                      {item.count}
                    </h2>
                    <h3 className="!font-[700] leading-[20px] mt-1">{item.title}</h3>
                    <h4 className="mt-1 mb-2">{item.description}</h4>
                    <img src={item.image} alt={item.title} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        </div>
      </div>
    </div>
  );
}

export default WellnessHub;
