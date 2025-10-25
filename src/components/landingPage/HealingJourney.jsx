import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Leaf, Sparkles } from "lucide-react";
import { theme, animationVariants } from "../../theme/colors";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "Deep consultation to understand your unique health journey and root causes.",
    icon: Brain,
  },
  {
    number: "02",
    title: "Diagnose",
    description: "Holistic assessment combining traditional wisdom with modern insights.",
    icon: Leaf,
  },
  {
    number: "03",
    title: "Heal",
    description: "Personalized treatment plans that work with your body's natural healing power.",
    icon: Sparkles,
  },
];

const HealingJourney = () => {
  const ref = useRef(null);
  const titleRef = useRef(null);
  const stepsRef = useRef(null);
  const lineRef = useRef(null);
  
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const titleInView = useInView(titleRef, { once: true, threshold: 0.6 });
  const stepsInView = useInView(stepsRef, { once: true, threshold: 0.3 });
  const lineInView = useInView(lineRef, { once: true, threshold: 0.8 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
        duration: 0.8,
        ease: theme.easing.easeOut
      }
    }
  };

  const titleContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -60, 
      scale: 0.8,
      rotateX: -20
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 1.2, 
        ease: theme.easing.easeOut,
        type: "spring",
        stiffness: 80,
        damping: 20
      }
    }
  };

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.9, 
        ease: theme.easing.easeOut,
        delay: 0.4
      }
    }
  };

  const stepVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.7,
      rotateY: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: theme.easing.easeOut,
        type: "spring",
        stiffness: 90,
        damping: 15
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "backOut",
        type: "spring",
        stiffness: 200
      }
    }
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0, rotateX: -90 },
    visible: {
      opacity: 0.6,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: "backOut",
        type: "spring"
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeOut",
        delay: 0.8
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      className="py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${theme.primary[900]} 0%, ${theme.primary[800]} 50%, ${theme.primary[900]} 100%)`
      }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          ref={titleRef}
          className="text-center mb-16"
          variants={titleContainerVariants}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: theme.text.white }}
            variants={titleVariants}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
          >
            Our Three-Step{" "}
            <motion.span
              style={{ color: theme.accent.primary }}
              animate={{
                textShadow: [
                  "0 0 0px rgba(34, 197, 94, 0)",
                  "0 0 20px rgba(34, 197, 94, 0.5)",
                  "0 0 0px rgba(34, 197, 94, 0)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Healing Journey
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl"
            style={{ color: theme.primary[200] }}
            variants={subtitleVariants}
          >
            A methodical, compassionate approach to your wellness.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <motion.div 
            ref={lineRef}
            className="hidden lg:block absolute top-14 h-0.5 mx-auto" 
            style={{ 
              width: "calc(100% - 400px)", 
              left: "200px",
              backgroundColor: theme.primary[600]
            }}
            variants={lineVariants}
            initial="hidden"
            animate={lineInView ? "visible" : "hidden"}
          />

          <motion.div 
            ref={stepsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={stepsInView ? "visible" : "hidden"}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={index} 
                  className="relative flex flex-col items-center text-center"
                  variants={stepVariants}
                  whileHover={{ 
                    y: -15,
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.4, ease: theme.easing.easeOut }
                  }}
                >
                  {/* Icon Circle */}
                  <motion.div 
                    className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-lg"
                    style={{ backgroundColor: theme.accent.primary }}
                    variants={iconVariants}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 10,
                      boxShadow: `0 15px 40px ${theme.accent.primary}50`,
                      transition: { duration: 0.4, type: "spring", stiffness: 300 }
                    }}
                    animate={{
                      boxShadow: [
                        `0 0 0 0 ${theme.accent.primary}40`,
                        `0 0 0 15px ${theme.accent.primary}20`,
                        `0 0 0 0 ${theme.accent.primary}40`
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.7
                    }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <Icon 
                        className="w-12 h-12"
                        style={{ color: theme.text.white }}
                        strokeWidth={2} 
                      />
                    </motion.div>
                  </motion.div>

                  {/* Step Number */}
                  <motion.div 
                    className="text-6xl md:text-7xl font-bold mb-4"
                    style={{ color: theme.primary[700] }}
                    variants={numberVariants}
                    whileHover={{ 
                      scale: 1.15,
                      color: theme.accent.primary,
                      rotateY: 10,
                      transition: { duration: 0.4, type: "spring" }
                    }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Title */}
                  <motion.h3 
                    className="text-2xl md:text-3xl font-bold mb-4"
                    style={{ color: theme.text.white }}
                    initial={{ opacity: 0, y: 30, rotateX: -15 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ 
                      delay: 0.5 + index * 0.2, 
                      duration: 0.8,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      color: theme.accent.primary,
                      scale: 1.08,
                      rotateY: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {step.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p 
                    className="text-base md:text-lg max-w-sm leading-relaxed"
                    style={{ color: theme.primary[200] }}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      delay: 0.7 + index * 0.2, 
                      duration: 0.8,
                      ease: theme.easing.easeOut
                    }}
                    whileHover={{ 
                      color: theme.text.white,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {step.description}
                  </motion.p>

                  {/* Decorative floating elements */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 rounded-full opacity-60"
                    style={{ backgroundColor: theme.accent.primary }}
                    animate={{
                      y: [-10, 10, -10],
                      opacity: [0.6, 1, 0.6],
                      scale: [1, 1.3, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.8
                    }}
                  />

                  <motion.div
                    className="absolute -bottom-4 -left-3 w-3 h-3 rounded-full opacity-40"
                    style={{ backgroundColor: theme.primary[400] }}
                    animate={{
                      x: [-5, 5, -5],
                      opacity: [0.4, 0.8, 0.4],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.6 + 1
                    }}
                  />

                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${theme.accent.primary}10, ${theme.primary[600]}20)`
                    }}
                    whileHover={{
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HealingJourney;