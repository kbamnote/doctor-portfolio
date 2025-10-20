import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 2000); // image comes in
    const timer2 = setTimeout(() => setStep(2), 5000); // enlarge to full
    const timer3 = setTimeout(() => setStep(3), 7500); // show text overlay

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section className="relative h-screen w-full bg-white overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Top Text */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: step >= 1 ? -150 : 0,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight absolute"
        style={{ top: "40%", transform: "translateY(-100%)" }}
      >
        SUNNY BONNELL
      </motion.h1>

      {/* Bottom Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: step >= 1 ? 150 : 0,
        }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        className="text-3xl md:text-5xl font-extrabold absolute"
        style={{ top: "50%" }}
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
                    width: "70vw",
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
              src="https://sunnybonnell.com/wp-content/uploads/2025/04/sunny_full_image-scaled-1-1920x0-c-default.webp"
              alt="Sunny Bonnell"
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Final Text Overlay (stays on image) */}
      <AnimatePresence>
        {step === 3 && (
          <motion.div
            key="finalText"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white z-10"
          >
            <div className="text-center px-4">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-8xl font-extrabold uppercase leading-tight"
              >
                Visionary <br /> Thinker and Author
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-4 text-lg uppercase tracking-widest"
              >
                Global Brand Innovator
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
