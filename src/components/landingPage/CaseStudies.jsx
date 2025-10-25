import React from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { theme, animationVariants } from "../../theme/colors";

const caseStudies = [
  {
    title: "Chronic Eczema",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "Migraine Relief",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "Digestive Healing",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
];
const CaseStudies = () => {
  const ref = React.useRef(null);
  const titleRef = React.useRef(null);
  const cardsRef = React.useRef(null);
  const buttonRef = React.useRef(null);
  
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const titleInView = useInView(titleRef, { once: true, threshold: 0.6 });
  const cardsInView = useInView(cardsRef, { once: true, threshold: 0.2 });
  const buttonInView = useInView(buttonRef, { once: true, threshold: 0.8 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -60, 
      scale: 0.7,
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
        duration: 0.8, 
        ease: theme.easing.easeOut,
        delay: 0.4
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100, 
      rotateX: -20,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      scale: 1,
      transition: { 
        duration: 0.9, 
        ease: theme.easing.easeOut,
        type: "spring",
        stiffness: 90,
        damping: 15
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: theme.easing.easeOut,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="py-20 px-6 md:px-12 lg:px-20 text-center overflow-hidden"
      style={{ backgroundColor: theme.background.primary }}
    >
      {/* Title */}
      <motion.div ref={titleRef}>
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-3"
          style={{ color: theme.secondary[800] }}
          variants={titleVariants}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
        >
          Real Results, Real Hope
        </motion.h2>

        <motion.p
          className="text-lg max-w-2xl mx-auto mb-12"
          style={{ color: theme.text.secondary }}
          variants={subtitleVariants}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
        >
          See the transformative power of personalized homeopathic care.
        </motion.p>
      </motion.div>

      {/* Case Study Cards */}
      <motion.div 
        ref={cardsRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={cardsInView ? "visible" : "hidden"}
      >
        {caseStudies.map((study, index) => (
          <motion.div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg group transition-all duration-500"
            variants={cardVariants}
            whileHover={{ 
              y: -20,
              scale: 1.05,
              rotateY: 8,
              rotateX: 5,
              boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
              transition: { duration: 0.5, ease: theme.easing.easeOut }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={study.image}
              alt={study.title}
              className="w-full h-64 object-cover"
              whileHover={{ 
                scale: 1.2,
                transition: { duration: 0.8, ease: theme.easing.easeOut }
              }}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: theme.easing.easeOut }}
            />
            <motion.div 
              className="absolute inset-0"
              style={{ 
                background: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)`
              }}
              initial={{ opacity: 0.7 }}
              whileHover={{ 
                opacity: 0.9,
                background: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 70%)`
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="absolute bottom-5 left-6 text-left"
              style={{ color: theme.text.white }}
              initial={{ y: 15, opacity: 0.8 }}
              whileHover={{ y: -5, opacity: 1 }}
              transition={{ duration: 0.4, ease: theme.easing.easeOut }}
            >
              <motion.h3 
                className="text-xl font-semibold mb-2"
                initial={{ x: -15, opacity: 0.9 }}
                whileHover={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {study.title}
              </motion.h3>
              <motion.a
                href={study.link}
                className="inline-flex items-center gap-1 font-medium transition-all duration-300"
                style={{ color: theme.primary[400] }}
                whileHover={{ 
                  color: theme.primary[300],
                  x: 8,
                  transition: { duration: 0.3 }
                }}
              >
                View case study 
                <motion.div
                  whileHover={{ x: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.a>
            </motion.div>

            {/* Decorative corner element */}
            <motion.div
              className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-60"
              style={{ backgroundColor: theme.primary[400] }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6],
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
              className="absolute top-6 left-6 w-2 h-2 rounded-full opacity-40"
              style={{ backgroundColor: theme.accent[400] }}
              animate={{
                y: [-2, 2, -2],
                x: [-1, 1, -1],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.6
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Button */}
      <motion.div
        ref={buttonRef}
        className="mt-12"
        variants={buttonVariants}
        initial="hidden"
        animate={buttonInView ? "visible" : "hidden"}
      >
        <motion.button 
          className="font-semibold px-8 py-3 rounded-xl transition-all duration-300"
          style={{ 
            border: `2px solid ${theme.primary[600]}`, 
            color: theme.primary[600],
            backgroundColor: 'transparent'
          }}
          whileHover={{ 
            scale: 1.08,
            backgroundColor: theme.primary[50],
            boxShadow: "0 15px 35px rgba(34, 197, 94, 0.25)",
            y: -5,
            transition: { duration: 0.4, ease: theme.easing.easeOut }
          }}
          whileTap={{ scale: 0.92 }}
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          View All Success Stories
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CaseStudies;
