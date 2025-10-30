import React from "react";
import { motion } from "framer-motion";
import { theme } from "../../theme/colors";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section
      className="py-24 px-6 text-center relative overflow-hidden"
      style={{ backgroundColor: theme.primary[600] }}
      data-scroll-section
    >
      {/* Subtle floating background shapes */}
      <motion.div
        className="absolute top-10 right-10 w-20 h-20 rounded-full"
        style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-16 left-12 w-16 h-16 rounded-full"
        style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
        animate={{
          x: [0, 20, 0],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="max-w-3xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2
          className="heading-font text-4xl md:text-5xl font-semibold mb-6"
          style={{ color: theme.text.white }}
        >
          Ready to Start Your Treatment?
        </h2>

        <p
          className="text-lg md:text-xl mb-10 leading-relaxed"
          style={{ color: theme.text.white, opacity: 0.9 }}
        >
          Join thousands who have discovered the power of natural healing.
          Let us guide you to wellness.
        </p>
<Link to='/contact'>
        <motion.div
         
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          }}
          whileTap={{ scale: 0.97 }}
          className="inline-block font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          style={{
            backgroundColor: theme.text.white,
            color: theme.primary[600],
          }}
        >
          Book Your Consultation
        </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default CallToAction;
