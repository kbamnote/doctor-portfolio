import React from "react";
import { motion } from "framer-motion";
import { theme, animationVariants } from "../../theme/colors";
import ReviewsMarquee, { StarRow } from "../common/ReviewsMarquee";
import { RATING, REVIEW_COUNT, PROFILE_URL } from "../../data/googleReviews";

const GoogleLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
    <path
      fill="#EA4335"
      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
    />
    <path
      fill="#4285F4"
      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
    />
    <path
      fill="#FBBC05"
      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
    />
    <path
      fill="#34A853"
      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
    />
  </svg>
);

const GoogleReviews = React.memo(() => {
  return (
    <section
      className="w-full overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{
        background: `linear-gradient(160deg, ${theme.primary[800]} 0%, ${theme.primary[900]} 100%)`,
      }}
    >
      <motion.div
        variants={animationVariants.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto w-full max-w-6xl px-5 sm:px-8"
      >
        <motion.h2
          variants={animationVariants.fadeInUp}
          transition={{ duration: 0.7, ease: theme.easing.easeOut }}
          className="text-center font-extrabold tracking-tight"
          style={{
            color: theme.text.white,
            fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          What Our Patients Say
        </motion.h2>

        <motion.p
          variants={animationVariants.fadeInUp}
          transition={{ duration: 0.7, delay: 0.08, ease: theme.easing.easeOut }}
          className="mt-3 text-center text-base sm:text-lg"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          Read what our patients have to say about their experience
        </motion.p>

        <motion.div
          variants={animationVariants.fadeInUp}
          transition={{ duration: 0.7, delay: 0.14, ease: theme.easing.easeOut }}
          className="mt-7 flex justify-center"
        >
          <span
            className="flex items-center gap-3 rounded-full px-6 py-3"
            style={{
              backgroundColor: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            <StarRow size={18} />
            <span
              className="text-lg font-bold"
              style={{ color: theme.text.white }}
            >
              {RATING}
            </span>
            <span
              className="text-sm"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              &bull; {REVIEW_COUNT} Google Reviews
            </span>
          </span>
        </motion.div>
      </motion.div>

      {/* Marquee runs full-bleed, outside the padded container */}
      <div className="mt-12 sm:mt-14">
        <ReviewsMarquee tone="dark" />
      </div>

      <div className="mt-12 flex justify-center px-5 sm:mt-14">
        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-lg"
        >
          <GoogleLogo size={22} />
          <span className="flex flex-col">
            <span
              className="text-sm font-semibold"
              style={{ color: theme.text.primary }}
            >
              Rated {RATING} on Google
            </span>
            <StarRow size={11} />
          </span>
        </a>
      </div>
    </section>
  );
});

GoogleReviews.displayName = "GoogleReviews";

export default GoogleReviews;
