import React from "react";
import { motion } from "framer-motion";
import { theme } from "../../theme/colors";

const CuredCasesHero = () => {
  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 text-center"
      style={{ backgroundColor: theme.primary[50] }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
          Real Stories of{' '}
          <span style={{ color: theme.primary[600] }}>
            Transformation
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover how our patients have overcome their health challenges and transformed their lives through our personalized treatment approaches.
        </p>
      </motion.div>
    </section>
  );
};

export default CuredCasesHero;
