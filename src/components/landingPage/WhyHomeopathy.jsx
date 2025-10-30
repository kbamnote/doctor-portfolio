import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Heart, TrendingUp } from "lucide-react";
import { theme } from "../../theme/colors";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className="py-16 px-6 md:px-12 lg:px-20 text-center overflow-hidden"
      style={{ background: `linear-gradient(to bottom, ${theme.neutral[50]}, ${theme.background.primary})` }}
      data-scroll-section
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="heading-font text-3xl md:text-4xl font-semibold mb-4"
          style={{ color: theme.text.primary }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Why Homeopathy?
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-lg mb-12"
          style={{ color: theme.text.secondary }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          A holistic approach to health that treats the whole person, not just the
          disease.
        </motion.p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl"
            style={{ backgroundColor: theme.background.primary }}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.8 + index * 0.2, 
              ease: "easeOut" 
            }}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="rounded-full p-4 mb-5 shadow-md"
              style={{ background: theme.background.gradient.primary }}
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.0 + index * 0.2, 
                ease: "easeOut" 
              }}
              whileHover={{ 
                rotate: 360,
                transition: { duration: 0.6 }
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
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.2 + index * 0.2, 
                ease: "easeOut" 
              }}
            >
              {feature.title}
            </motion.h3>
            
            <motion.p 
              className="leading-relaxed"
              style={{ color: theme.text.secondary }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.4 + index * 0.2, 
                ease: "easeOut" 
              }}
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
