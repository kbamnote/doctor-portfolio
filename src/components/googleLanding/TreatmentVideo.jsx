import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { theme, animationVariants } from "../../theme/colors";
import { openWhatsApp } from "./whatsapp";

const YOUTUBE_ID = "ZKw4YcAVBZk";
const POSTER_URL = `https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`;
const POSTER_FALLBACK = `https://img.youtube.com/vi/${YOUTUBE_ID}/hqdefault.jpg`;

const TreatmentVideo = React.memo(() => {
  const [isPlaying, setIsPlaying] = useState(false);

  const play = useCallback(() => setIsPlaying(true), []);

  // Not every upload has a maxres thumbnail; fall back to the one that always exists.
  const handlePosterError = useCallback((event) => {
    if (event.currentTarget.src !== POSTER_FALLBACK) {
      event.currentTarget.src = POSTER_FALLBACK;
    }
  }, []);

  return (
    <section
      className="w-full py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: theme.background.primary }}
    >
      <motion.div
        variants={animationVariants.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto w-full max-w-5xl px-5 sm:px-8"
      >
        <motion.h2
          variants={animationVariants.fadeInUp}
          transition={{ duration: 0.7, ease: theme.easing.easeOut }}
          className="mx-auto max-w-3xl text-center font-extrabold tracking-tight"
          style={{
            color: theme.text.primary,
            fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          Watch How Our Treatment Approach Has Helped Patients Regain Their
          Health
        </motion.h2>

        <motion.div
          variants={animationVariants.scaleIn}
          transition={{ duration: 0.8, delay: 0.1, ease: theme.easing.easeOut }}
          className="mt-10 sm:mt-12"
        >
          {/* Click-to-play facade: YouTube is only loaded once the visitor
              actually presses play, so the page stays fast and sets no
              third-party cookies before then. */}
          <div
            className="relative block w-full overflow-hidden rounded-2xl bg-black"
            style={{ boxShadow: "0 30px 60px -25px rgba(17, 24, 39, 0.45)" }}
          >
            <div className="relative w-full aspect-[16/9]">
              {isPlaying ? (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`}
                  title="How our treatment approach has helped patients regain their health"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={play}
                  aria-label="Play video: how our treatment approach has helped patients regain their health"
                  className="group absolute inset-0 h-full w-full cursor-pointer"
                >
                  <img
                    src={POSTER_URL}
                    onError={handlePosterError}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  {/* Subtle dim so the play control stays legible on any poster */}
                  <div
                    className="absolute inset-0"
                    style={{ backgroundColor: "rgba(17, 24, 39, 0.18)" }}
                  />

                  <span className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:scale-110"
                      style={{ boxShadow: "0 10px 30px -8px rgba(17,24,39,0.5)" }}
                    >
                      <Play
                        size={28}
                        strokeWidth={0}
                        fill={theme.primary[600]}
                        className="ml-1"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                </button>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={animationVariants.fadeInUp}
          transition={{ duration: 0.7, delay: 0.2, ease: theme.easing.easeOut }}
          className="mt-10 sm:mt-12 flex flex-col items-center"
        >
          <p className="text-base sm:text-lg" style={{ color: theme.text.secondary }}>
            Ready To Discuss Your Case?
          </p>

          <motion.button
            type="button"
            onClick={openWhatsApp}
            whileHover={animationVariants.hover}
            whileTap={animationVariants.tap}
            className="mt-5 rounded-xl px-8 py-4 text-base font-semibold text-white cursor-pointer"
            style={{
              backgroundColor: theme.primary[600],
              boxShadow: "0 12px 28px -12px rgba(54, 150, 172, 0.65)",
            }}
          >
            Schedule A Consultation
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
});

TreatmentVideo.displayName = "TreatmentVideo";

export default TreatmentVideo;
