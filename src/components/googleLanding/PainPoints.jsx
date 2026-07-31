import React, { useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { theme, animationVariants } from "../../theme/colors";

const PainPoints = React.memo(() => {
  const navigate = useNavigate();

  const painPoints = useMemo(
    () => [
      "Symptoms keep returning",
      "Temporary relief but no lasting improvement",
      "Multiple medications with limited results",
      "Feeling frustrated and unheard",
      "Losing hope after trying everything",
    ],
    []
  );

  const goToContact = useCallback(() => navigate("/contact"), [navigate]);

  return (
    <section
      className="w-full py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: theme.background.secondary }}
    >
      <motion.div
        variants={animationVariants.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto w-full max-w-6xl px-5 sm:px-8"
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
          Are You Tired Of Treatments That Only Manage Symptoms?
        </motion.h2>

        <ul className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {painPoints.map((point) => (
            <motion.li
              key={point}
              variants={animationVariants.fadeInUp}
              transition={{ duration: 0.6, ease: theme.easing.easeOut }}
              className="flex items-start gap-4 rounded-2xl bg-white px-6 py-7"
              style={{ boxShadow: "0 10px 30px -18px rgba(17, 24, 39, 0.35)" }}
            >
              <X
                size={22}
                strokeWidth={2.5}
                className="mt-0.5 flex-shrink-0"
                style={{ color: theme.accent.red }}
                aria-hidden="true"
              />
              <span
                className="text-base sm:text-lg leading-snug"
                style={{ color: theme.text.secondary }}
              >
                {point}
              </span>
            </motion.li>
          ))}
        </ul>

        <motion.div
          variants={animationVariants.fadeInUp}
          transition={{ duration: 0.7, delay: 0.1, ease: theme.easing.easeOut }}
          className="mt-12 sm:mt-16 rounded-2xl px-6 py-10 sm:px-10 sm:py-12 text-center"
          style={{
            background: theme.background.gradient.primary,
            boxShadow: "0 24px 50px -25px rgba(54, 150, 172, 0.7)",
          }}
        >
          <p
            className="text-lg sm:text-xl font-semibold"
            style={{ color: theme.text.white }}
          >
            Discover If Your Condition Can Be Helped
          </p>

          <motion.button
            type="button"
            onClick={goToContact}
            whileHover={animationVariants.hover}
            whileTap={animationVariants.tap}
            className="mt-6 rounded-xl bg-white px-8 py-4 text-base font-semibold cursor-pointer"
            style={{ color: theme.primary[600] }}
          >
            Speak With Our Team
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
});

PainPoints.displayName = "PainPoints";

export default PainPoints;
