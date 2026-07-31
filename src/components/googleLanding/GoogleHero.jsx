import React, { useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, Calendar, Play } from "lucide-react";
import drimg from "../../assets/imgDr.webp";
import { theme, animationVariants } from "../../theme/colors";

const GoogleHero = React.memo(() => {
  const navigate = useNavigate();

  const highlights = useMemo(
    () => [
      "15+ Years Experience",
      "Thousands of Consultations",
      "Online & In-Person Consultations",
      "Personalized Case Analysis",
    ],
    []
  );

  const goToContact = useCallback(() => navigate("/contact"), [navigate]);
  const goToStories = useCallback(() => navigate("/cured-cases"), [navigate]);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${theme.background.secondary} 0%, ${theme.background.primary} 55%, ${theme.background.primary} 100%)`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-24">
        <motion.div
          variants={animationVariants.staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-center"
        >
          {/* Left column */}
          <div className="order-2 lg:order-1">
            <motion.h1
              variants={animationVariants.fadeInUp}
              transition={{ duration: 0.7, ease: theme.easing.easeOut }}
              className="font-extrabold tracking-tight"
              style={{
                color: theme.text.primary,
                fontSize: "clamp(2.25rem, 4.6vw, 4.25rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
              }}
            >
              Finally Find The Root Cause Of Your Chronic Health Problems — Not
              Just Temporary Relief
            </motion.h1>

            <motion.p
              variants={animationVariants.fadeInUp}
              transition={{ duration: 0.7, delay: 0.1, ease: theme.easing.easeOut }}
              className="mt-6 sm:mt-7 max-w-xl text-base sm:text-lg leading-relaxed"
              style={{ color: theme.text.secondary }}
            >
              Personalized Homeopathic Treatment By Dr. Guneet Singh Gaba
              Helping Patients Find Long-Term Relief From Chronic &amp;
              Difficult-To-Treat Conditions Through Individualized Care.
            </motion.p>

            <motion.ul
              variants={animationVariants.fadeInUp}
              transition={{ duration: 0.7, delay: 0.2, ease: theme.easing.easeOut }}
              className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4"
            >
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    strokeWidth={2}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: theme.primary[500] }}
                    aria-hidden="true"
                  />
                  <span
                    className="text-sm sm:text-base"
                    style={{ color: theme.text.secondary }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={animationVariants.fadeInUp}
              transition={{ duration: 0.7, delay: 0.3, ease: theme.easing.easeOut }}
              className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                type="button"
                onClick={goToContact}
                whileHover={animationVariants.hover}
                whileTap={animationVariants.tap}
                className="flex items-center justify-center gap-3 rounded-xl px-7 py-4 text-base font-semibold text-white cursor-pointer shadow-lg"
                style={{
                  backgroundColor: theme.primary[600],
                  boxShadow: "0 12px 28px -12px rgba(54, 150, 172, 0.65)",
                }}
              >
                <Calendar size={20} strokeWidth={2} aria-hidden="true" />
                Book Your Consultation
              </motion.button>

              <motion.button
                type="button"
                onClick={goToStories}
                whileHover={animationVariants.hover}
                whileTap={animationVariants.tap}
                className="flex items-center justify-center gap-3 rounded-xl border px-7 py-4 text-base font-semibold cursor-pointer bg-white"
                style={{
                  borderColor: theme.neutral[200],
                  color: theme.text.primary,
                }}
              >
                <Play
                  size={20}
                  strokeWidth={2}
                  style={{ color: theme.primary[600] }}
                  aria-hidden="true"
                />
                Watch Patient Success Stories
              </motion.button>
            </motion.div>
          </div>

          {/* Right column - video card */}
          <motion.div
            variants={animationVariants.scaleIn}
            transition={{ duration: 0.8, delay: 0.15, ease: theme.easing.easeOut }}
            className="order-1 lg:order-2"
          >
            <button
              type="button"
              onClick={goToStories}
              aria-label="Watch: How We Help Patients Find Lasting Relief"
              className="group relative block w-full overflow-hidden rounded-2xl cursor-pointer"
              style={{
                boxShadow: "0 30px 60px -25px rgba(17, 24, 39, 0.45)",
              }}
            >
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src={drimg}
                  alt="Dr. Guneet Singh Gaba"
                  loading="eager"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />

                {/* Bottom caption gradient */}
                <div
                  className="absolute inset-x-0 bottom-0 h-1/3"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(17,24,39,0) 0%, rgba(17,24,39,0.75) 100%)",
                  }}
                />

                {/* Play button */}
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

                {/* Caption */}
                <span
                  className="absolute bottom-5 left-5 right-5 text-left text-sm sm:text-base font-semibold"
                  style={{ color: theme.text.white }}
                >
                  Watch: How We Help Patients Find Lasting Relief
                </span>
              </div>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

GoogleHero.displayName = "GoogleHero";

export default GoogleHero;
