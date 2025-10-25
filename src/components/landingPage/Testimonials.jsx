import React from "react";
import { motion, useInView } from "framer-motion";
import { theme, animationVariants } from "../../theme/colors";

const testimonials = [
  {
    name: "Sarah Mitchell",
    condition: "Chronic Anxiety",
    quote: "After years of medication, I found peace through homeopathy. My life has transformed completely.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "David Chen",
    condition: "Skin Allergies",
    quote: "The natural approach worked when nothing else did. I'm finally comfortable in my own skin.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Priya Sharma",
    condition: "Digestive Issues",
    quote: "Gentle yet powerful healing. I wish I had discovered homeopathy sooner in my journey.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
];

const Testimonials = () => {
  const ref = React.useRef(null);
  const titleRef = React.useRef(null);
  const cardsRef = React.useRef(null);
  
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const titleInView = useInView(titleRef, { once: true, threshold: 0.6 });
  const cardsInView = useInView(cardsRef, { once: true, threshold: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4
      }
    }
  };

  const titleContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80, 
      scale: 0.8,
      rotateY: -15
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateY: 0,
      transition: { 
        duration: 0.9, 
        ease: theme.easing.easeOut,
        type: "spring",
        stiffness: 90,
        damping: 15
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -50, 
      scale: 0.8,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 1, 
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
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: theme.easing.easeOut,
        delay: 0.3
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ backgroundColor: theme.neutral[50] }}
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
            style={{ color: theme.secondary[800] }}
            variants={titleVariants}
          >
            Voices of Healing
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl"
            style={{ color: theme.text.secondary }}
            variants={subtitleVariants}
          >
            Stories from those who found their path to wellness.
          </motion.p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl shadow-md p-8 transition-all duration-500"
              style={{ backgroundColor: theme.background.primary }}
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                transition: { duration: 0.4, ease: theme.easing.easeOut }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Profile Section */}
              <motion.div 
                className="flex items-center gap-4 mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.7 }}
              >
                <motion.div className="relative">
                  <motion.img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                    whileHover={{ 
                      scale: 1.15,
                      transition: { duration: 0.4 }
                    }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(34, 197, 94, 0)",
                        "0 0 0 10px rgba(34, 197, 94, 0.1)",
                        "0 0 0 0 rgba(34, 197, 94, 0)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.7
                    }}
                  />
                  {/* Floating ring around profile */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 opacity-30"
                    style={{ borderColor: theme.primary[400] }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.5
                    }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.15, duration: 0.6 }}
                >
                  <motion.h3 
                    className="text-lg font-semibold"
                    style={{ color: theme.text.primary }}
                    whileHover={{ 
                      color: theme.primary[600],
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {testimonial.name}
                  </motion.h3>
                  <motion.p 
                    className="text-sm font-medium"
                    style={{ color: theme.primary[600] }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}
                  >
                    {testimonial.condition}
                  </motion.p>
                </motion.div>
              </motion.div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.15, duration: 0.8 }}
              >
                <motion.span
                  className="text-5xl font-bold opacity-20 block leading-none"
                  style={{ color: theme.primary[300] }}
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.7 + index * 0.15, duration: 0.5, type: "spring" }}
                >
                  "
                </motion.span>
                <motion.p 
                  className="leading-relaxed text-base -mt-2"
                  style={{ color: theme.text.secondary }}
                  whileHover={{ 
                    color: theme.text.primary,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  {testimonial.quote}
                </motion.p>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-40"
                style={{ backgroundColor: theme.primary[400] }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.4
                }}
              />

              {/* Additional floating element */}
              <motion.div
                className="absolute bottom-4 left-4 w-2 h-2 rounded-full opacity-30"
                style={{ backgroundColor: theme.accent[400] }}
                animate={{
                  y: [-3, 3, -3],
                  x: [-2, 2, -2],
                  scale: [0.8, 1.3, 0.8],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.6
                }}
              />

              {/* Gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${theme.primary[50]} 0%, transparent 50%)`
                }}
                whileHover={{
                  opacity: 0.1,
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;