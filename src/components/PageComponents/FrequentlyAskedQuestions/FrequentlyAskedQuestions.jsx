import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FrequentlyAskedQuestions = ({ heading, subtext, faqs }) => {
  return (
    <section className="py-22">
      <div className="max-w-[1280px] md:px-8 px-4 mx-auto w-full h-full  flex flex-col justify-center items-center text-center">
        <h2 className="text-[#000] uppercase mb-4">
          {heading}
        </h2>
        <h4 className="text-[#000] max-w-2xl leading-[26px] mb-10">
          {subtext}
        </h4>

        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4 max-w-[1000px]"
        >
          {faqs.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl bg-[#f2f2f2] overflow-hidden"
            >
              <AccordionTrigger className="flex justify-between items-center w-full text-left px-6 py-5 no-underline hover:no-underline focus:outline-none focus:ring-0 focus:ring-offset-0">
                <span className="no-underline font-kanit font-[500] text-[20px] leading-normal text-[#000]">{item.question}</span>
              </AccordionTrigger>

              <AccordionContent className="px-6 pb-5 text-left">
                <h4 className="text-[#000] font-kanit leading-normal">{item.answer}</h4>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
