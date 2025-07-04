import { cardsData } from "@/constants/AboutUsMission";

export default function AboutUs() {
  return (
    // <div className="flex flex-col md:flex-row gap-6 flex-wrap max-w-[1280px] px-8 pb-[140px] mx-auto">
    <div className="grid grid-cols-3 grid-rows-2 gap-6 max-w-[1240px] pb-[140px] mx-auto py-[51px]">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className={"flex flex-col gap-4 justify-center " + (index == 0 ? "row-span-2" : "col-span-2")}
          style={{
            backgroundColor: card.backgroundColor,
            borderRadius: card.borderRadius,
            padding: card.padding,
            // width: card.width
          }}
        >
          <div className="text-green-600 text-3xl mb-2">{card.icon}</div>

          <h2
            style={{
              color: card.titleColor,
              fontFamily: "Kanit",
              fontSize: "40px",
              fontWeight: 700,
              lineHeight: "39px",
              textTransform: "uppercase"
            }}
          >
            {card.title}
          </h2>

          <p
            className={
              card.backgroundColor === "#1C1C1C"
                ? "text-white font-[kanit] text-[18px] font-[300] leading-[26px] "
                : "text-black font-[kanit] text-[18px] font-[300] leading-[26px]"
            }
          >
            {card.content}
          </p>
        </div>
      ))}
    </div>
  );
}
