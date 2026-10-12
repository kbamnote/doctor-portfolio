import React, { useState, useEffect, useCallback } from "react";
import drimg from "../../assets/imgDr.webp";
import Navbar from "../common/Navbar";
import IntroLoader from "./IntroLoader";

// Plays once per browser session, so navigating back to the home page
// does not replay it.
const SESSION_KEY = "introPlayed";

const HeroSection = React.memo(() => {
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      return sessionStorage.getItem(SESSION_KEY) !== "1";
    } catch {
      return true;
    }
  });

  const handleIntroDone = useCallback(() => {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // Private mode / blocked storage — the intro simply plays again.
    }
    setShowIntro(false);
  }, []);

  // Hold the page still while the intro is on screen.
  useEffect(() => {
    if (!showIntro) return;

    // Locking hides the scrollbar, which widens the viewport. Replace its
    // width with padding so the page keeps its exact layout and does not
    // jump sideways when the lock is released.
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const previousPadding = document.body.style.paddingRight;

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.classList.add("modal-open");
    if (window.lenis) window.lenis.stop();

    return () => {
      document.body.classList.remove("modal-open");
      document.body.style.paddingRight = previousPadding;
      if (window.lenis) window.lenis.start();
    };
  }, [showIntro]);

  return (
    <>
      {showIntro && <IntroLoader onDone={handleIntroDone} />}

      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={drimg}
          alt="Dr. Guneet Singh Gaba"
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div
          className="absolute z-10 top-[68%] lg:top-[45%] w-full"
          style={{
            left: 0,
            transform: "translateY(-50%)",
            paddingLeft: "4vw",
            paddingRight: "4vw",
            pointerEvents: "none",
            fontFamily: "'Neue Montreal', sans-serif",
          }}
        >
          <h1
            className="font-extrabold uppercase"
            style={{
              margin: 0,
              maxWidth: "92vw",
              fontSize: "clamp(1.75rem, 6.6vw, 6.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              fontWeight: 850,
              color: "#fff",
              textAlign: "left",
              textShadow: "0 10px 20px rgba(0,0,0,0.45)",
              pointerEvents: "auto",
            }}
          >
            <span style={{ display: "block" }}>MEET THE BEST</span>
            <span style={{ display: "block" }}>HOMEOPATHIC</span>
            <span style={{ display: "block" }}>DOCTOR IN DELHI</span>
          </h1>

          <p
            style={{
              margin: 0,
              marginTop: "clamp(0.9rem, 2vw, 1.75rem)",
              maxWidth: "min(24ch, 92vw)",
              fontSize: "clamp(1.5rem, 3.6vw, 3.25rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
              color: "#fff",
              textAlign: "left",
              textShadow: "0 6px 16px rgba(0,0,0,0.55)",
              pointerEvents: "auto",
            }}
          >
            Find the root cause of your chronic and incurable disease.
          </p>
        </div>

        <Navbar />
      </section>
    </>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
