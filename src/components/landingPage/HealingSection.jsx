import React from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Heart, Activity } from "lucide-react";
import { theme, animationVariants } from "../../theme/colors";
import about from '../../assets/aboutDr.png'

const HealingSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: theme.easing.easeOut }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section 
      ref={ref}
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-10 overflow-hidden"
      style={{ backgroundColor: theme.background.secondary }}
    >
      {/* Left Side */}
      <motion.div
        className="flex-1 max-w-xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight"
          style={{ color: theme.text.primary }}
          variants={itemVariants}
        >
          HEALING BEGINS <br />
          <motion.span 
            style={{ color: theme.primary[600] }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5, ease: theme.easing.bounce }}
          >
            WITHIN
          </motion.span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg leading-relaxed"
          style={{ color: theme.text.secondary }}
          variants={itemVariants}
        >
          Experience the transformative power of nature. Personalized
          homeopathic care that treats the root cause, not just symptoms.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 mt-8"
          variants={itemVariants}
        >
          <motion.button 
            className="font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300"
            style={{ 
              backgroundColor: theme.primary[600], 
              color: theme.text.white 
            }}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: theme.primary[700],
              boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Consultation
          </motion.button>
          <motion.button 
            className="font-semibold px-6 py-3 rounded-lg transition-all duration-300"
            style={{ 
              border: `2px solid ${theme.primary[600]}`, 
              color: theme.primary[600],
              backgroundColor: 'transparent'
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: theme.primary[50],
              boxShadow: "0 5px 15px rgba(34, 197, 94, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Success Stories
          </motion.button>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center gap-8 mt-10 text-base"
          style={{ color: theme.text.secondary }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="flex items-center gap-2"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <Leaf style={{ color: theme.primary[600] }} className="w-5 h-5" />
            <span>Safe & Natural</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-2"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <Heart style={{ color: theme.primary[600] }} className="w-5 h-5" />
            <span>Gentle Treatment</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-2"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <Activity style={{ color: theme.primary[600] }} className="w-5 h-5" />
            <span>Long-Lasting Results</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="relative flex-1 mt-10 lg:mt-0"
        initial={{ opacity: 0, x: 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
        transition={{ duration: 0.8, ease: theme.easing.easeOut, delay: 0.3 }}
      >
        <div className="relative">
          <motion.img
            src={about}
            alt="Doctor"
            className="w-full max-w-md lg:max-w-lg mx-auto rounded-3xl shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.8, ease: theme.easing.easeOut, delay: 0.5 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          />

          {/* Floating Badge */}
          <motion.div
            className="absolute bottom-4 left-4 shadow-xl rounded-2xl px-5 py-3 flex items-center gap-3"
            style={{ backgroundColor: theme.background.primary }}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.8 }}
            transition={{ delay: 0.8, duration: 0.6, ease: theme.easing.bounce }}
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div
              animate={floatingAnimation}
            >
              <Leaf style={{ color: theme.primary[600] }} className="w-6 h-6" />
            </motion.div>
            <div>
              <p className="font-bold text-lg" style={{ color: theme.primary[600] }}>15+ Years</p>
              <p className="text-sm" style={{ color: theme.text.light }}>Healing Excellence</p>
            </div>
          </motion.div>

          {/* Decorative floating elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 rounded-full opacity-20"
            style={{ backgroundColor: theme.primary[400] }}
            animate={{
              y: [-5, 5, -5],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/4 -left-6 w-6 h-6 rounded-full opacity-30"
            style={{ backgroundColor: theme.accent.green }}
            animate={{
              y: [5, -5, 5],
              x: [-2, 2, -2],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HealingSection;
