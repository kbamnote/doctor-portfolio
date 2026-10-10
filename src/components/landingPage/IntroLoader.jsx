import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { theme } from "../../theme/colors";

// Opening animation, matching the Sundown reference: each line fades in and
// out on its own in the same centre spot, one after another. Once the last
// line has gone, the whole panel slides up to reveal the hero.
const LINES = ["WE CURE DISEASE", "NOT SYMPTOMS", "DR GUNEET SINGH GABA"];

const FIRST_DELAY = 0.5; // reference waits 1s; trimmed so it opens sooner
const WORD_DURATION = 1; // each line is on screen for one second
const EXIT_DURATION = 1;

const EXIT_AT = FIRST_DELAY + LINES.length * WORD_DURATION;

const IntroLoader = ({ onDone }) => {
  const [isLeaving, setIsLeaving] = useState(false);
  // The panel is fixed, so it spans the scrollbar gutter too, while the page
  // beneath it does not. Without this the lines sit half a scrollbar right of
  // the page's centre, and everything appears to nudge left as it slides away.
  const [gutter, setGutter] = useState(0);
  const hasFinished = useRef(false);

  useEffect(() => {
    setGutter(window.innerWidth - document.documentElement.clientWidth);
  }, []);

  // Called from the exit animation, and from a hard fallback timer. Whichever
  // lands first wins — the panel covers the whole screen, so it must never be
  // able to get stuck if an animation callback does not arrive.
  const finish = useCallback(() => {
    if (hasFinished.current) return;
    hasFinished.current = true;
    onDone();
  }, [onDone]);

  useEffect(() => {
    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;

    if (reduceMotion) {
      finish();
      return;
    }

    const leaveTimer = setTimeout(() => setIsLeaving(true), EXIT_AT * 1000);
    const safetyTimer = setTimeout(
      finish,
      (EXIT_AT + EXIT_DURATION + 0.4) * 1000
    );

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(safetyTimer);
    };
  }, [finish]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(160deg, ${theme.primary[800]} 0%, ${theme.primary[900]} 100%)`,
        paddingRight: gutter,
      }}
      initial={{ y: 0 }}
      animate={{ y: isLeaving ? "-100%" : 0 }}
      transition={{ duration: EXIT_DURATION, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        if (isLeaving) finish();
      }}
      aria-hidden="true"
    >
      {LINES.map((line, index) => (
        <motion.h1
          key={line}
          // Every line sits in the same place, so only one reads at a time.
          className="absolute w-full px-6 text-center font-extrabold uppercase leading-none"
          style={{
            color: theme.text.white,
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: "clamp(1.5rem, 5.5vw, 4.5rem)",
            letterSpacing: "-0.03em",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: WORD_DURATION,
            times: [0, 0.1, 0.9, 1],
            delay: FIRST_DELAY + index * WORD_DURATION,
            ease: "linear",
          }}
        >
          {line}
        </motion.h1>
      ))}
    </motion.div>
  );
};

export default IntroLoader;
