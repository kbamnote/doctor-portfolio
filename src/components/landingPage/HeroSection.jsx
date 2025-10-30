import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import drimg from "../../assets/imgDr.png";
import Navbar from "../common/Navbar";

const HeroSection = React.memo(() => {
  const [step, setStep] = useState(0);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    const navigationEntries = performance.getEntriesByType("navigation");
    const isFromNavigation =
      navigationEntries.length > 0 &&
      navigationEntries[0].type === "navigate" &&
      document.referrer &&
      document.referrer.includes(window.location.origin);

    if (isFromNavigation) {
      setIsFirstVisit(false);
      setStep(3);
    } else {
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

  // Prevent scrolling during intro animation
  useEffect(() => {
    if (isFirstVisit && step < 3) {
      const preventScroll = (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };
      const preventArrowKeys = (e) => {
        if ([32, 33, 34, 35, 36, 37, 38, 39, 40].includes(e.keyCode)) {
          e.preventDefault();
        }
      };
      document.addEventListener("wheel", preventScroll, { passive: false });
      document.addEventListener("touchmove", preventScroll, { passive: false });
      document.addEventListener("keydown", preventArrowKeys);

      return () => {
        document.removeEventListener("wheel", preventScroll);
        document.removeEventListener("touchmove", preventScroll);
        document.removeEventListener("keydown", preventArrowKeys);
      };
    }
  }, [step, isFirstVisit]);

  // Memoized headings and animation calculations
  const headings = useMemo(() => [
    "UNIQUE METHODS FOR GERMAN HOMEOPATHY",
    "CURE DISEASES NOT SYMPTOMS",
    "PERSONALIZED HOMEOPATHY TREATMENT",
  ], []);

  // Memoized typing timings
  const animationConfig = useMemo(() => ({
    charDelay: 0.04, // seconds per character
    lineGap: 0.35, // extra gap between lines after line finishes
  }), []);

  // Memoized line start delays calculation
  const lineStartDelays = useMemo(() => {
    return headings.map((_, idx) => {
      if (idx === 0) return 0;
      let acc = 0;
      for (let i = 0; i < idx; i++) {
        acc += headings[i].length * animationConfig.charDelay + animationConfig.lineGap;
      }
      return acc;
    });
  }, [headings, animationConfig]);

  // Memoized animation variants
  const letterVariant = useMemo(() => ({
    hidden: { opacity: 0, y: "0.25em" },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.18,
        ease: "easeOut",
      },
    }),
  }), []);

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
          className="text-4xl md:text-4xl font-semibold leading-none mb-1"
        >
          Dr.
        </motion.p>

        <motion.h1
          initial={isFirstVisit ? { opacity: 0 } : { opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={isFirstVisit ? { duration: 1, delay: 0.2 } : { duration: 0 }}
          className="heading-font text-5xl md:text-7xl font-extrabold leading-tight tracking-tight"
          style={{ lineHeight: "1" }}
        >
          GUNEET
        </motion.h1>

        <motion.h1
          initial={isFirstVisit ? { opacity: 0 } : { opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={isFirstVisit ? { duration: 1, delay: 0.4 } : { duration: 0 }}
          className="heading-font text-5xl md:text-7xl font-black leading-tight tracking-tight text-center self-center"
          style={{ lineHeight: "1", width: "100%" }}
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
        className="text-2xl md:text-8xl font-extrabold absolute"
        style={{
          top: "55%",
          fontFamily: "'Neue Montreal', sans-serif",
        }}
      >
        ©2025
      </motion.p>

      {/* Center Image */}
      <AnimatePresence>
        {(step === 1 || step === 2 || step === 3) && (
          <motion.div
            key="centerImage"
            initial={isFirstVisit ? { opacity: 0, scale: 0.5 } : { opacity: 1 }}
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
                    width: "30vw",
                    height: "40vh",
                    borderRadius: 0,
                  }
            }
            transition={isFirstVisit ? { duration: 1, ease: "easeInOut" } : { duration: 0 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden z-0"
          >
            <motion.img src={drimg} alt="Dr. Guneet Singh" className="w-full h-full object-cover" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step 3: Typing (character-by-character) */}
  {/* Step 3: Typing (character-by-character, fixed word wrapping) */}
<AnimatePresence>
  {step === 3 && (
    <motion.div
      key="heroHeadings"
      className="absolute bottom-28 left-6 md:left-12 lg:left-16 flex flex-col gap-6 z-10 max-w-6xl"
    >
      {headings.map((line, lineIndex) => {
        const startDelay = lineStartDelays[lineIndex];
        const words = line.split(" ");

        return (
          <motion.div
            key={lineIndex}
            className="flex flex-wrap text-left overflow-hidden"
            style={{
              fontFamily: "'Neue Montreal', sans-serif",
              lineHeight: 1.1,
            }}
          >
            {words.map((word, wordIndex) => {
              const wordStartDelay =
                startDelay +
                words
                  .slice(0, wordIndex)
                  .join(" ")
                  .length *
                  animationConfig.charDelay;

              return (
                <motion.span
                  key={wordIndex}
                  className="flex whitespace-nowrap mr-4"
                >
                  {Array.from(word).map((char, charIndex) => {
                    const delay = wordStartDelay + charIndex * animationConfig.charDelay;
                    return (
                      <motion.span
                        key={charIndex}
                        custom={delay}
                        variants={letterVariant}
                        initial="hidden"
                        animate="visible"
                        className="inline-block text-white text-2xl md:text-5xl lg:text-6xl font-extrabold"
                        style={{
                          whiteSpace: "pre",
                        }}
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </motion.span>
              );
            })}
          </motion.div>
        );
      })}
    </motion.div>
  )}
</AnimatePresence>


      {/* Navbar shows after step 3 */}
      <AnimatePresence>{step === 3 && <Navbar key="navbar" />}</AnimatePresence>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
