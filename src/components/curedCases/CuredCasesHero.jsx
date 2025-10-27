import React from "react";
import { motion } from "framer-motion";
import { theme } from "../../theme/colors";

const CuredCasesHero = () => {
  return (
    <section className="bg-[#173E8F] text-center py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="heading-font text-white text-4xl md:text-5xl font-semibold mb-6">
          Success Stories That{" "}
          <span style={{ color: theme.primary[300] }}>Inspire Hope</span>
        </h2>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Real transformations, real people. Discover how homeopathy has changed lives.
        </p>
      </motion.div>
    </section>
  );
};

export default CuredCasesHero;
