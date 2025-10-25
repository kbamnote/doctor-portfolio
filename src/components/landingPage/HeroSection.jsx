import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import drimg from "../../assets/imgDr.png";

export default function HeroSection() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 2000);
    const timer2 = setTimeout(() => setStep(2), 5000);
    const timer3 = setTimeout(() => setStep(3), 7500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section className="relative h-screen w-full bg-white overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Top Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: step >= 1 ? -150 : 0,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute flex flex-col items-start text-left"
        style={{
          top: "25%",
          transform: "translateY(-100%)",
          fontFamily: "'Neue Montreal', sans-serif",
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-normal leading-none"
          style={{ marginBottom: "0.25rem" }}
        >
          Dr.
        </motion.p>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-light leading-tight tracking-tight"
          style={{ lineHeight: "1" }}
        >
          GUNEET
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl font-black leading-tight tracking-tight"
          style={{ lineHeight: "1" }}
        >
          SINGH
        </motion.h1>
      </motion.div>

      {/* Bottom Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: step >= 1 ? 150 : 0,
        }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
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
            initial={{ opacity: 0, scale: 0.5 }}
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
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
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
          <motion.nav
            key="navbar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-0 left-0 w-full flex justify-between items-center p-6 text-white z-10 bg-black/20"
            style={{ fontFamily: "'Neue Montreal', sans-serif" }}
          >
            {/* Left Logo Text */}
            <div className="text-left cursor-pointer">
              <p className="text-sm font-medium leading-none">Dr.</p>
              <h1 className="text-lg font-bold leading-tight">
                GUNEET <br /> SINGH GABA
              </h1>
            </div>

            {/* Center Links */}
            <div className="hidden md:flex space-x-8 text-sm uppercase font-medium">
              <button className="hover:opacity-80 transition cursor-pointer">
                Treatment
              </button>
              <button className="hover:opacity-80 transition cursor-pointer">
                About
              </button>
              <button className="hover:opacity-80 transition cursor-pointer">
                Blogs
              </button>
            </div>

            {/* Right Contact */}
            <button className="text-sm font-semibold uppercase hover:opacity-80 transition cursor-pointer">
              Contact Now
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </section>
  );
}
