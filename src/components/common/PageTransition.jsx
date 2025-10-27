import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageTransition = ({ children, isTransitioning, onTransitionComplete }) => {
  const [showLoader, setShowLoader] = useState(false);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    if (isTransitioning) {
      setShowContent(false);
      setShowLoader(true);

      const timer = setTimeout(() => {
        setShowLoader(false);
        setShowContent(true);
        onTransitionComplete?.();
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [isTransitioning, onTransitionComplete]);

  const loaderVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.4, ease: "easeIn" }
    }
  };

  const loaderTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.3 }
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Page Content */}
      <AnimatePresence mode="wait">
        {showContent && (
          <motion.div
            key="content"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="min-h-screen"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Transition Loader */}
      <AnimatePresence>
        {showLoader && (
          <motion.div
            key="loader"
            variants={loaderVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-[#1a1a1a] flex items-center justify-center"
          >
            {/* Loader Content */}
            <motion.div
              variants={loaderTextVariants}
              initial="hidden"
              animate="visible"
              className="text-center text-white font-extrabold"
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                letterSpacing: "-1px",
                lineHeight: "1.1",
              }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl mb-2 tracking-tight">
                DR GUNEET
              </h1>
              <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
                SINGH
              </h1>
              <p className="text-5xl font-extrabold tracking-tight">©2025</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;
