 import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FrequentlyAskedQuestions = ({ heading, subtext, faqs }) => {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C1C1C] mb-4">
        {heading}
      </h2>
      <p className="text-[#1C1C1C] max-w-2xl mx-auto mb-10 text-[16px]">
        {subtext}
      </p>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-[16px] font-bold text-[#1C1C1C] bg-[#f2f2f2] px-6 py-5 rounded-xl">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="bg-[#f2f2f2] px-6 pb-5 text-left rounded-b-xl text-[15px] text-[#1C1C1C]">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FrequentlyAskedQuestions;
