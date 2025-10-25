import React from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Heart, TrendingUp } from "lucide-react";
import { theme, animationVariants } from "../../theme/colors";

const features = [
  {
    icon: <Shield className="w-7 h-7 text-white" />,
    title: "Safe",
    description:
      "Non-toxic, natural remedies with no side effects. Safe for all ages, from infants to elderly.",
  },
  {
    icon: <Heart className="w-7 h-7 text-white" />,
    title: "Gentle",
    description:
      "Works with your body's natural healing mechanisms. Gentle yet profoundly effective.",
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-white" />,
    title: "Long-Lasting",
    description:
      "Addresses root causes for permanent relief. Sustainable health, not temporary fixes.",
  },
];

const WhyHomeopathy = () => {
  const ref = React.useRef(null);
  const titleRef = React.useRef(null);
  const cardsRef = React.useRef(null);
  
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const titleInView = useInView(titleRef, { once: true, threshold: 0.5 });
  const cardsInView = useInView(cardsRef, { once: true, threshold: 0.2 });

  const containerVariants = {
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

  const textVariants = {
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80, 
      scale: 0.7,
      rotateY: -15
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateY: 0,
      transition: { 
        duration: 0.8, 
        ease: theme.easing.easeOut,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="py-16 px-6 md:px-12 lg:px-20 text-center overflow-hidden"
      style={{ background: `linear-gradient(to bottom, ${theme.neutral[50]}, ${theme.background.primary})` }}
    >
      <motion.div ref={titleRef}>
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-4"
          style={{ color: theme.secondary[800] }}
          variants={titleVariants}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
        >
          Why Homeopathy?
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-lg mb-12"
          style={{ color: theme.text.secondary }}
          variants={textVariants}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
        >
          A holistic approach to health that treats the whole person, not just the
          disease.
        </motion.p>
      </motion.div>

      <motion.div 
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={cardsInView ? "visible" : "hidden"}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-500"
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
            <motion.div 
              className="rounded-full p-4 mb-5 shadow-md"
              style={{ background: theme.background.gradient.primary }}
              whileHover={{ 
                scale: 1.15,
                rotate: 10,
                transition: { duration: 0.3 }
              }}
              animate={{
                y: [-3, 3, -3],
                rotate: [-2, 2, -2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.7
              }}
            >
              {React.cloneElement(feature.icon, { 
                style: { color: theme.text.white },
                className: "w-7 h-7"
              })}
            </motion.div>
            
            <motion.h3 
              className="text-lg font-semibold mb-3"
              style={{ color: theme.text.primary }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            >
              {feature.title}
            </motion.h3>
            
            <motion.p 
              className="leading-relaxed"
              style={{ color: theme.text.secondary }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyHomeopathy;
