import React from "react";
import { motion } from "framer-motion";
import { theme } from "../../theme/colors";

const ContactHero = () => {
  return (
    <section className="bg-[#3570AB] py-16 sm:py-20 lg:py-24 text-center text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.h1
          className="heading-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let's Start Your{" "}
          <span style={{ color: theme.primary[300] }}>Healing Journey</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 text-white/90 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ready to experience the gentle power of homeopathy? Schedule your
          consultation today and take the first step toward natural healing.
        </motion.p>

        <motion.button
          className="font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          style={{
            backgroundColor: theme.accent.primary,
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
