import React from "react";
import { motion } from "framer-motion";
import { theme } from "../../theme/colors";
import { Link } from "react-router-dom";

const StoryCta = () => {
  return (
    <section
      className="py-24 text-center relative overflow-hidden"
      style={{ backgroundColor: theme.primary[600], color: theme.text.white }}
      data-scroll-section
    >
      {/* Animated background shapes for depth */}
      <motion.div
        className="absolute top-12 right-16 w-24 h-24 rounded-full"
        style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-16 left-12 w-16 h-16 rounded-full"
        style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
        animate={{
          x: [0, 15, 0],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="max-w-3xl mx-auto px-4 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2
          className="heading-font text-4xl md:text-5xl font-semibold mb-6"
          style={{ color: theme.text.white }}
        >
          Your Story Could Be Next
        </h2>

        <p
          className="text-lg md:text-xl mb-10 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          Join the thousands who have transformed their health naturally.
          Start your healing journey today.
        </p>

<Link to='/contact'>
        <motion.div
          
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          }}
          whileTap={{ scale: 0.97 }}
          className="inline-block font-medium text-lg px-8 py-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
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

export default StoryCta;
