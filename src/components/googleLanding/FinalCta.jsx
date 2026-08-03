import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Clock, Calendar, MessageCircle, CheckCircle2 } from "lucide-react";
import { theme, animationVariants } from "../../theme/colors";
import { WHATSAPP_URL } from "./whatsapp";
import { useBooking } from "./bookingContext";

// Subtle plus-sign lattice layered over the gradient
const PLUS_PATTERN = `url("data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><path d="M20 13.5v13M13.5 20h13" stroke="rgba(255,255,255,0.09)" stroke-width="1.4" stroke-linecap="round"/></svg>'
)}")`;

const FinalCta = React.memo(() => {
  const { openBooking } = useBooking();
  const assurances = useMemo(
    () => [
      "Same-day appointments available",
      "Free initial consultation",
      "100% confidential",
    ],
    []
  );

  return (
    <section
      className="relative w-full overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{
        backgroundColor: theme.primary[900],
        backgroundImage: `${PLUS_PATTERN}, linear-gradient(160deg, ${theme.primary[800]} 0%, ${theme.primary[900]} 100%)`,
      }}
    >
      <motion.div
        variants={animationVariants.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto w-full max-w-3xl px-5 sm:px-8 text-center"
      >
        <motion.span
          variants={animationVariants.scaleIn}
          transition={{ duration: 0.6, ease: theme.easing.easeOut }}
          className="inline-flex"
        >
          <Clock
            size={56}
            strokeWidth={2.5}
            style={{ color: theme.accent.orange }}
            aria-hidden="true"
          />
        </motion.span>

        <motion.h2
          variants={animationVariants.fadeInUp}
          transition={{ duration: 0.7, delay: 0.05, ease: theme.easing.easeOut }}
          className="mt-7 font-extrabold tracking-tight"
          style={{
            color: theme.text.white,
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Your Health Won&apos;t Improve By Waiting
        </motion.h2>

        <motion.p
          variants={animationVariants.fadeInUp}
          transition={{ duration: 0.7, delay: 0.1, ease: theme.easing.easeOut }}
          className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          Every month of delay often means continued symptoms, frustration, and
          uncertainty.
        </motion.p>

        <motion.p
          variants={animationVariants.fadeInUp}
          transition={{ duration: 0.7, delay: 0.15, ease: theme.easing.easeOut }}
          className="mx-auto mt-6 max-w-2xl leading-relaxed"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          Take the first step toward understanding your case. Get a detailed
          evaluation and discover if personalized homeopathic treatment can help
          you find lasting relief.
        </motion.p>

        <motion.div
          variants={animationVariants.fadeInUp}
          transition={{ duration: 0.7, delay: 0.2, ease: theme.easing.easeOut }}
          className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4"
        >
          <motion.button
            type="button"
            onClick={openBooking}
            whileHover={animationVariants.hover}
            whileTap={animationVariants.tap}
            className="flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 text-base font-semibold cursor-pointer"
            style={{
              color: theme.primary[700],
              boxShadow: "0 14px 30px -16px rgba(0, 0, 0, 0.6)",
            }}
          >
            <Calendar size={20} strokeWidth={2} aria-hidden="true" />
            Book Your Consultation Today
          </motion.button>

          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={animationVariants.hover}
            whileTap={animationVariants.tap}
            className="flex items-center justify-center gap-3 rounded-xl px-7 py-4 text-base font-semibold text-white"
            style={{
              backgroundColor: "#25D366",
              boxShadow: "0 14px 30px -16px rgba(0, 0, 0, 0.6)",
            }}
          >
            <MessageCircle size={20} strokeWidth={2} aria-hidden="true" />
            Talk To Our Team On WhatsApp
          </motion.a>
        </motion.div>

        <motion.ul
          variants={animationVariants.fadeInUp}
          transition={{ duration: 0.7, delay: 0.25, ease: theme.easing.easeOut }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          {assurances.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <CheckCircle2
                size={18}
                strokeWidth={2.5}
                style={{ color: theme.primary[300] }}
                aria-hidden="true"
              />
              <span
                className="text-sm"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                {item}
              </span>
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
});

FinalCta.displayName = "FinalCta";

export default FinalCta;
