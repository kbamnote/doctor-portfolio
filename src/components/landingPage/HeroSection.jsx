import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import drimg from "../../assets/imgDr.png";
import Navbar from "../common/Navbar";

export default function HeroSection() {
  const [step, setStep] = useState(0);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    // Check if this is coming from navigation (not a fresh page load/refresh)
    const navigationEntries = performance.getEntriesByType('navigation');
    const isFromNavigation = navigationEntries.length > 0 && 
      navigationEntries[0].type === 'navigate' && 
      document.referrer && 
      document.referrer.includes(window.location.origin);
    
    if (isFromNavigation) {
      // If user navigated from another page on the same site, show final state immediately
      setIsFirstVisit(false);
      setStep(3);
    } else {
      // Fresh load/refresh - show step-by-step animation
      setIsFirstVisit(true);
      
      const timer1 = setTimeout(() => setStep(1), 2000);
      const timer2 = setTimeout(() => setStep(2), 5000);
      const timer3 = setTimeout(() => setStep(3), 7500);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, []);

  return (
    <section className="relative h-screen w-full bg-white overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Top Text */}
      <motion.div
        initial={isFirstVisit ? { opacity: 0 } : { opacity: 1, y: -150 }}
        animate={{
          opacity: 1,
          y: step >= 1 ? -150 : 0,
        }}
        transition={isFirstVisit ? { duration: 1, ease: "easeInOut" } : { duration: 0 }}
        className="absolute flex flex-col items-start text-left"
        style={{
          top: "25%",
          transform: "translateY(-100%)",
          fontFamily: "'Neue Montreal', sans-serif",
        }}
      >
        <motion.p
          initial={isFirstVisit ? { opacity: 0 } : { opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={isFirstVisit ? { duration: 0.8 } : { duration: 0 }}
          className="text-2xl md:text-4xl font-normal leading-none"
          style={{ marginBottom: "0.25rem" }}
        >
          Dr.
        </motion.p>
        <motion.h1
          initial={isFirstVisit ? { opacity: 0 } : { opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={isFirstVisit ? { duration: 1, delay: 0.2 } : { duration: 0 }}
          className="text-5xl md:text-7xl font-light leading-tight tracking-tight"
          style={{ lineHeight: "1" }}
        >
          GUNEET
        </motion.h1>
        <motion.h1
          initial={isFirstVisit ? { opacity: 0 } : { opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={isFirstVisit ? { duration: 1, delay: 0.4 } : { duration: 0 }}
          className="text-5xl md:text-7xl font-black leading-tight tracking-tight"
          style={{ lineHeight: "1" }}
        >
          SINGH
        </motion.h1>
      </motion.div>

      {/* Bottom Text */}
      <motion.p
        initial={isFirstVisit ? { opacity: 0 } : { opacity: 1, y: 150 }}
        animate={{
          opacity: 1,
          y: step >= 1 ? 150 : 0,
        }}
        transition={isFirstVisit ? { duration: 1, ease: "easeInOut", delay: 0.2 } : { duration: 0 }}
        className="text-2xl md:text-4xl font-extrabold absolute"
        style={{
          top: "55%",
          fontFamily: "'Neue Montreal', sans-serif",
        }}
      >
        ©2025
      </motion.p>

      {/* Center Image Animation */}
      <AnimatePresence>
        {(step === 1 || step === 2 || step === 3) && (
          <motion.div
            key="centerImage"
            initial={
              isFirstVisit 
                ? { opacity: 0, scale: 0.5 }
                : {
                    opacity: 1,
                    scale: 1,
                    width: "100vw",
                    height: "100vh",
                    borderRadius: 0,
                  }
            }
            animate={
              step >= 2
                ? {
                    opacity: 1,
                    scale: 1,
                    width: "100vw",
                    height: "100vh",
                    borderRadius: 0,
                  }
                : {
                    opacity: 1,
                    scale: 1,
                    width: "40vw",
                    height: "40vh",
                    borderRadius: "1rem",
                  }
            }
            transition={
              isFirstVisit 
                ? {
                    duration: 2,
                    ease: "easeInOut",
                  }
                : { duration: 0 }
            }
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden z-0"
          >
            <motion.img
              src={drimg}
              alt="Dr. Guneet Singh"
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Final Overlay Navbar */}
      <AnimatePresence>
        {step === 3 && (
          <Navbar key="navbar" />
        )}
      </AnimatePresence>
    </section>
  );
}
