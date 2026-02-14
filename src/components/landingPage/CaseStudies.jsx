import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { theme } from "../../theme/colors";
import { Link } from "react-router-dom";

// Importing Images
import acneAfter from '../../assets/acne-after.jpg';
import pcodAfter from '../../assets/Pcod-after.jpg';
import sebAfter from '../../assets/Seborrheic dermatitis after.jpg';

const caseStudies = [
  {
    title: "Severe Acne Treatment",
    image: acneAfter,
    link: "/cured-cases",
  },
  {
    title: "PCOD & Hormonal Balance",
    image: pcodAfter,
    link: "/cured-cases",
  },
  {
    title: "Seborrheic Dermatitis",
    image: sebAfter,
    link: "/cured-cases",
  },
];

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className="py-16 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ backgroundColor: theme.background.secondary }}
      data-scroll-section
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="heading-font text-3xl md:text-4xl font-semibold text-center mb-4"
          style={{ color: theme.text.primary }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Success Stories
        </motion.h2>

        <motion.p
          className="text-center max-w-2xl mx-auto text-lg mb-12"
          style={{ color: theme.text.secondary }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Real transformations from our patients who found lasting relief through
          homeopathy.
        </motion.p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        {caseStudies.map((study, index) => (
          <motion.div
            key={index}
            className="rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            style={{ backgroundColor: theme.background.primary }}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.8 + index * 0.2, 
              ease: "easeOut" 
            }}
            whileHover={{ 
              y: -10,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="relative w-full h-60 overflow-hidden"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={study.image}
                alt={study.title}
                className="object-cover w-full h-full"
              />
            </motion.div>
            <motion.div 
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.0 + index * 0.2, 
                ease: "easeOut" 
              }}
            >
              <motion.h3
                className="text-xl font-semibold mb-2"
                style={{ color: theme.text.primary }}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.2 + index * 0.2, 
                  ease: "easeOut" 
                }}
              >
                {study.title}
              </motion.h3>
              <Link to='/cured-cases'>
              <motion.div
                
                className="inline-flex items-center gap-2 font-medium transition-colors duration-300 hover:underline"
                style={{ color: theme.primary[600] }}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.4 + index * 0.2, 
                  ease: "easeOut" 
                }}
                whileHover={{ x: 5 }}
              >
                Read More
                <ArrowRight className="w-4 h-4" />
              </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
      >
        <Link to="/cured-cases">
        <motion.button
          className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-lg transition-all duration-300"
          style={{
            backgroundColor: theme.primary[600],
            color: theme.text.white,
          }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          View All Case Studies
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default CaseStudies;
