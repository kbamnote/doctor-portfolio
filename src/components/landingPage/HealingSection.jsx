import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Heart, Activity } from "lucide-react";
import { theme } from "../../theme/colors";
import about from '../../assets/aboutDr.png'

const HealingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section 
      ref={ref}
      className=" min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-10 overflow-hidden"
      style={{ backgroundColor: theme.background.secondary }}
    >
      {/* Left Side */}
      <motion.div 
        className="flex-1 max-w-xl"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="heading-font text-4xl md:text-6xl font-extrabold leading-tight"
          style={{ color: theme.text.primary }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          HEALING BEGINS <br />
          <span style={{ color: theme.primary[600] }}>
            WITHIN
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg leading-relaxed"
          style={{ color: theme.text.secondary }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Experience the transformative power of nature. Personalized
          homeopathic care that treats the root cause, not just symptoms.
        </motion.p>

        <motion.div 
          className="flex flex-wrap gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <motion.button 
            className="font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: theme.primary[600], 
              color: theme.text.white 
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Consultation
          </motion.button>
          <motion.button 
            className="font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            style={{ 
              border: `2px solid ${theme.primary[600]}`, 
              color: theme.primary[600],
              backgroundColor: 'transparent'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Success Stories
          </motion.button>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center gap-8 mt-10 text-base"
          style={{ color: theme.text.secondary }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          {[
            { icon: Leaf, text: "Safe & Natural" },
            { icon: Heart, text: "Gentle Treatment" },
            { icon: Activity, text: "Long-Lasting Results" }
          ].map((item, index) => (
            <motion.div 
              key={item.text}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1, ease: "easeOut" }}
            >
              <item.icon style={{ color: theme.primary[600] }} className="w-5 h-5" />
              <span>{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Side */}
      <motion.div 
        className="relative flex-1 mt-10 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <div className="relative">
          <motion.img
            src={about}
            alt="Doctor"
            className="w-full max-w-md lg:max-w-lg mx-auto rounded-3xl shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          />

          {/* Badge */}
          <motion.div
            className="absolute bottom-4 left-4 shadow-xl rounded-2xl px-5 py-3 flex items-center gap-3"
            style={{ backgroundColor: theme.background.primary }}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={isInView ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            >
              <Leaf style={{ color: theme.primary[600] }} className="w-6 h-6" />
            </motion.div>
            <div>
              <motion.p 
                className="font-bold text-lg" 
                style={{ color: theme.primary[600] }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
              >
                15+ Years
              </motion.p>
              <motion.p 
                className="text-sm" 
                style={{ color: theme.text.light }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
              >
                Healing Excellence
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HealingSection;
