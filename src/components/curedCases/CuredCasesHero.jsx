import React from "react";
import { motion } from "framer-motion";

const CuredCasesHero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-800 to-blue-700 text-center py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-white text-4xl md:text-5xl font-semibold mb-6">
          Success Stories That{" "}
          <span className="text-green-300">Inspire Hope</span>
        </h2>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Real transformations, real people. Discover how homeopathy has changed lives.
        </p>
      </motion.div>
    </section>
  );
};

export default CuredCasesHero;
