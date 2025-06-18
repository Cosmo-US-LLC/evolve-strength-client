import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { carouselItemsData } from "../../../../constants/wellnessHubData";

function WellnessHub() {
  return (
    <div id="wellnessHub" className="bg-[#fff]">
      <div className="w-[100%] max-w-[1280px] px-8 pt-[100px] mx-auto flex justify-between">
        <div className="w-[50%] max-w-[600px] flex flex-col gap-4">
          <h2 className="text-4xl font-bold uppercase text-black font-kanit leading-tight">
            CANADA’S BEST FITNESS <br /> AND WELLNESS HUB
          </h2>
          <h4 className="text-[#000]  ">
            With state-of-the-art locations in Edmonton, Calgary, Burnaby, and
            Vancouver, Evolve brings together top-tier fitness and wellness
            under one roof.
          </h4>
        </div>

        <div className="w-[50%] flex items-center justify-end pl-10">

        <div className="min-w-[300px] max-w-[460px] h-[360px] overflow-y-hidden hover:overflow-y-scroll scrollbar-hide">
          <Carousel
            opts={{ align: "start" }}
            orientation="vertical"
            className="h-full"
          >
            <CarouselContent className="h-full snap-y snap-mandatory">
              {carouselItemsData.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="snap-start h-[300px] flex items-center justify-center"
                >
                  <div className="bg-white w-full p-4 rounded-xl border border-gray-200 shadow-sm">
                    <p className="text-[#4AB04A] font-[kanit] text-[40px] font-[500] leading-[39px] uppercase">
                      {item.count}
                    </p>
                    <h3 className="!font-[700]">{item.title}</h3>
                    <h4 className="mb-2">{item.description}</h4>
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
