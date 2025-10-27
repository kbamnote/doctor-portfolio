import React from "react";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-green-500 to-green-300 py-24 px-6 text-center">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="heading-font text-white text-4xl md:text-5xl font-semibold mb-6">
          Ready to Start Your Treatment?
        </h2>
        <p className="text-white text-lg md:text-xl mb-10 leading-relaxed">
          Join thousands who have discovered the power of natural healing. Let
          us guide you to wellness.
        </p>

        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-white text-green-600 font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Book Your Consultation
        </motion.a>
      </motion.div>
    </section>
  );
};

export default CallToAction;
