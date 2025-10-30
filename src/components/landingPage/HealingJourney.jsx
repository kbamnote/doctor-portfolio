import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { theme } from "../../theme/colors";

const steps = [
  {
    number: "01",
    title: "Personalized Diagnosis",
    description:
      "Every healing journey starts with understanding your unique body and root causes.",
    image:
      "https://media.istockphoto.com/id/2184218200/photo/male-doctor-reads-patients-wristband.jpg?s=612x612&w=0&k=20&c=oRXw8EuRYMeC46w_ihcA-y6DheKpQRnVt8qa_tYxdj4=",
  },
  {
    number: "02",
    title: "Customized Remedies",
    description:
      "Get tailor-made homeopathic solutions that match your symptoms and energy.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "03",
    title: "Holistic Lifestyle Guidance",
    description:
      "We guide you with natural routines, diet, and practices for sustained wellness.",
    image:
      "https://media.istockphoto.com/id/127545508/photo/doctor-and-nurse-with-hospital-patient.jpg?s=612x612&w=0&k=20&c=j1xeARnRVf0rRqhMf2aWwwFI0GsPxeO_S2dL7ca6HnI=",
  },
  {
    number: "04",
    title: "Progress Monitoring",
    description:
      "Regular check-ins ensure your healing stays on track and adapts with you.",
    image:
      "https://media.istockphoto.com/id/492441569/photo/blood-presure-check.jpg?s=612x612&w=0&k=20&c=mUvR5yrFz8Rf2RLnALpL9_IOgUimZ4_bnjeREJRlaFA=",
  },
  {
    number: "05",
    title: "Empowered Wellness",
    description:
      "By the end, you'll not just heal but learn how to maintain balance for life.",
    image:
      "https://media.istockphoto.com/id/954707968/photo/nurse-taking-notes-while-hospitalized-patient-and-doctor-talk.jpg?s=612x612&w=0&k=20&c=ZbIwJbzSfJi-uPT59EZ_HpGiqDTJH64fspcisHv8AG0=",
  },
];

const HealingJourney = () => {
  const ref = useRef(null);
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100px", "end 100px"],
  });

  const headerInView = useInView(headerRef, { once: true, threshold: 0.3 });

  // Animate line fill
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
      className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ backgroundColor: theme.background.primary }}
      data-scroll-section
    >
      {/* Heading */}
      <motion.div 
        ref={headerRef}
        className="text-center mb-20"
        variants={headerVariants}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
      >
        <motion.h2
          className="heading-font text-4xl md:text-5xl font-bold mb-6"
          style={{ color: theme.text.primary }}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Your Healing Journey
        </motion.h2>
        <motion.p
          className="text-lg max-w-2xl mx-auto"
          style={{ color: theme.text.secondary }}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          A step-by-step process designed to bring balance, relief, and lasting
          transformation.
        </motion.p>
      </motion.div>

      {/* Vertical Line (animated) */}
      <div className="absolute left-3 md:left-1/2 md:transform md:-translate-x-1/2 top-52 bottom-20 w-1 bg-gray-300 rounded-full z-0">
        <motion.div
          style={{
            backgroundColor: theme.accent.primary,
            height: lineHeight,
          }}
          className="absolute left-0 top-0 w-full rounded-full origin-top"
        />

        {/* Animated Ball at the end of progress line */}
        <motion.div
          style={{
            backgroundColor: theme.accent.primary,
            top: lineHeight,
            boxShadow: `0 0 0 4px ${theme.background.secondary}, 0 0 20px ${theme.accent.primary}`,
          }}
          className="absolute left-1/2 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full z-10"
        />
      </div>

      {/* Timeline Items */}
      <div className="relative flex flex-col gap-24 max-w-6xl mx-auto">
        {steps.map((step, index) => {
          const stepRef = useRef(null);
          const stepInView = useInView(stepRef, { once: true, threshold: 0.3 });
          
          return (
            <motion.div
              key={index}
              ref={stepRef}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 pl-16 md:pl-0 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 60 }}
              animate={stepInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
            >
              {/* Step Number Badge */}
              <motion.div
                className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 rounded-2xl border-4 z-10 flex items-center justify-center font-bold text-xl"
                style={{
                  backgroundColor: theme.background.secondary,
                  borderColor: theme.primary[500],
                  color: theme.primary[500],
                }}
                initial={{ scale: 0, rotate: -180 }}
                animate={stepInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2 + 0.3,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: `0 0 20px ${theme.primary[500]}40`
                }}
              >
                {step.number}
              </motion.div>

              {/* Text */}
              <motion.div 
                className="flex-1 text-left"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={stepInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.2 + 0.4,
                  ease: "easeOut"
                }}
              >
                <motion.h3
                  className="text-2xl md:text-3xl font-bold mb-3"
                  style={{ color: theme.text.primary }}
                  whileHover={{ 
                    scale: 1.02,
                    color: theme.primary[600]
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: theme.text.secondary }}
                  initial={{ opacity: 0 }}
                  animate={stepInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.6
                  }}
                >
                  {step.description}
                </motion.p>
              </motion.div>

              {/* Image */}
              <motion.div 
                className="flex-1 w-full md:w-1/2"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.9 }}
                animate={stepInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.9 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2 + 0.5,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <motion.img
                    src={step.image}
                    alt={step.title}
                    className="object-cover w-full h-64 md:h-72"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default HealingJourney;
