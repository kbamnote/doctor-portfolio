import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { theme } from "../../theme/colors";
import { Link } from "react-router-dom";
const HealingJourneyCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 200,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden"
      style={{ backgroundColor: theme.primary[600] }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      data-scroll-section
    >
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-10 right-10 w-20 h-20 rounded-full"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-10 w-16 h-16 rounded-full"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
        animate={{
          x: [0, 15, 0],
          rotate: [0, 180, 360],
          opacity: [0.05, 0.2, 0.05],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Heading */}
        <motion.h2
          className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          style={{ color: theme.text.white }}
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            textShadow: "0 0 20px rgba(255,255,255,0.3)",
          }}
          transition={{ duration: 0.3 }}
        >
          Let's Begin Your Healing Journey
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-10 max-w-3xl mx-auto"
          style={{ color: theme.text.white }}
          variants={itemVariants}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Take the first step towards natural, lasting wellness. Your body knows how to heal — we help it remember.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="font-semibold text-lg px-10 py-4 rounded-xl shadow-lg relative overflow-hidden"
          style={{
            backgroundColor: theme.background.primary,
            color: theme.primary[600],
          }}
          variants={buttonVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            y: -2,
          }}
          whileTap={{ scale: 0.98, y: 0 }}
          transition={{ duration: 0.3 }}
        ><Link to="/contact">
          <motion.span
            className="relative z-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Book an Appointment
          </motion.span>
</Link>
          {/* Button shimmer animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default HealingJourneyCTA;
