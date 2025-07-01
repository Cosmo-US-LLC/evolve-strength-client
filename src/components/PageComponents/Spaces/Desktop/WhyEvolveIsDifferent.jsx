import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    number: "01",
    title: "No Finder's Fees",
    description:
      "Keep 100% of your earnings. We don’t charge any finder’s fees or take a cut from your hard work.",
    image: "/path/to/image1.webp",
  },
  {
    number: "02",
    title: "Flexible Leasing",
    description:
      "Enjoy short-term, flexible leasing options designed for wellness professionals who value freedom.",
    image: "/path/to/image2.webp",
  },
  {
    number: "03",
    title: "Built-In Community",
    description:
      "You’ll be part of a trusted network of wellness professionals. That makes it easy to connect, refer clients, and grow together.",
    image: "/path/to/image3.webp",
  },
];

const WhyEvolveIsDifferent = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-center text-2xl md:text-3xl font-extrabold uppercase mb-10">
        Why Evolve is Different
      </h2>

      <div className="relative">
        {cards.map((card, idx) => (
          <motion.div
            key={card.number}
            className={`bg-white rounded-lg shadow-lg overflow-hidden p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 ${
              idx !== 0 ? "-mt-10 relative z-0" : "relative z-10"
            }`}
            style={{ perspective: "1000px" }}
            initial={{ opacity: 0, rotateX: -90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex-1">
              <div className="text-green-600 text-xl font-bold mb-1">
                {card.number}
              </div>
              <div className="text-lg font-semibold mb-2">{card.title}</div>
              <p className="text-sm text-gray-700">{card.description}</p>
            </div>
            <div className="md:w-1/3">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-40 md:h-52 object-cover rounded"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyEvolveIsDifferent;
