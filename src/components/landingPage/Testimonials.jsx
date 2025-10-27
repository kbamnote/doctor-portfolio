import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { theme } from "../../theme/colors";

const testimonials = [
  {
    name: "Sarah Johnson",
    condition: "Chronic Pain Patient",
    quote: "Dr. Singh's homeopathic treatment completely transformed my health. After years of conventional medicine, I finally found lasting relief.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Michael Chen",
    condition: "Anxiety Recovery",
    quote: "The personalized approach and gentle remedies helped me overcome anxiety without any side effects. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Emma Wilson",
    condition: "Digestive Health",
    quote: "Amazing results for my digestive issues. Dr. Singh's holistic approach addressed the root cause, not just symptoms.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const headerRef = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const headerInView = useInView(headerRef, { once: true, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="py-16 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: theme.background.secondary }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          ref={headerRef}
          className="text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="heading-font text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: theme.text.primary }}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What Our Patients Say
          </motion.h2>
          <motion.p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: theme.text.secondary }}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Real experiences from patients who found healing through homeopathy.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-6 rounded-lg shadow-lg"
              style={{ backgroundColor: theme.background.primary }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="flex items-center mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.2 + 0.6 + i * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      <Star 
                        className="w-5 h-5 fill-current" 
                        style={{ color: theme.accent.primary }} 
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, rotate: -45, scale: 0 }}
                animate={isInView ? { opacity: 0.2, rotate: 0, scale: 1 } : { opacity: 0, rotate: -45, scale: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
              >
                <Quote 
                  className="w-8 h-8 mb-4" 
                  style={{ color: theme.primary[600] }} 
                />
              </motion.div>
              
              <motion.p 
                className="text-base mb-6 leading-relaxed"
                style={{ color: theme.text.secondary }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
              >
                "{testimonial.quote}"
              </motion.p>
              
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.9 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div>
                  <motion.h4 
                    className="font-semibold" 
                    style={{ color: theme.text.primary }}
                    whileHover={{ 
                      scale: 1.05,
                      color: theme.primary[600]
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {testimonial.name}
                  </motion.h4>
                  <motion.p 
                    className="text-sm" 
                    style={{ color: theme.text.secondary }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 1.0 }}
                  >
                    {testimonial.condition}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;