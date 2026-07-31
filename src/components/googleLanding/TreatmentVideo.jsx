import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";
import videoPoster from "../../assets/aboutDr.png";
import { theme, animationVariants } from "../../theme/colors";

const TreatmentVideo = React.memo(() => {
  const navigate = useNavigate();

  // Swap this for a real video / YouTube embed once the footage is ready.
  const handlePlay = useCallback(() => navigate("/cured-cases"), [navigate]);
  const goToContact = useCallback(() => navigate("/contact"), [navigate]);

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
          <button
            type="button"
            onClick={handlePlay}
            aria-label="Play video: how our treatment approach has helped patients"
            className="group relative block w-full overflow-hidden rounded-2xl cursor-pointer"
            style={{ boxShadow: "0 30px 60px -25px rgba(17, 24, 39, 0.45)" }}
          >
            <div className="relative w-full aspect-[16/9]">
              <img
                src={videoPoster}
                alt="Dr. Guneet Singh Gaba's homeopathic treatment approach"
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
            </div>
          </button>
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
            onClick={goToContact}
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
