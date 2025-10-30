import React from "react";
import { motion } from "framer-motion";
import { theme } from "../../theme/colors";

const ContactHero = () => {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 text-center"
      style={{ backgroundColor: theme.primary[50], color: theme.text.primary }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.h1
          className="heading-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ color: theme.text.primary }}
        >
          Let’s Start Your{" "}
          <span style={{ color: theme.primary[600] }}>Healing Journey</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ color: theme.text.secondary }}
        >
          Ready to experience the gentle power of homeopathy? Schedule your
          consultation today and take the first step toward natural healing.
        </motion.p>

        {/* Button */}
        <motion.button
          className="font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-md transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          style={{
            backgroundColor: theme.primary[600],
            color: theme.text.white,
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Book Now
        </motion.button>
      </div>
    </section>
  );
};

export default ContactHero;
