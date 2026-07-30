import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { theme, animationVariants } from "../../theme/colors";

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

const StarRow = ({ size = 14 }) => (
  <span className="flex items-center gap-0.5" aria-hidden="true">
    {[0, 1, 2, 3, 4].map((i) => (
      <Star
        key={i}
        size={size}
        strokeWidth={0}
        fill={theme.accent.orange}
        style={{ color: theme.accent.orange }}
      />
    ))}
  </span>
);

const GoogleReviews = React.memo(() => {
  const reviews = useMemo(
    () => [
      {
        quote:
          "After suffering from chronic eczema for 8 years, I finally found relief through Dr. Gaba's treatment. His detailed approach and personalized care made all the difference.",
        name: "Priya Sharma",
        city: "Mumbai",
        when: "2 months ago",
      },
      {
        quote:
          "I was skeptical about homeopathy, but Dr. Gaba's expertise changed my perspective. My thyroid levels have normalized, and I feel better than I have in years.",
        name: "Rajesh Kumar",
        city: "Delhi",
        when: "1 month ago",
      },
      {
        quote:
          "The best decision I made for my PCOS treatment. Dr. Gaba takes time to understand your complete case before prescribing. Highly recommend!",
        name: "Anita Desai",
        city: "Bangalore",
        when: "3 weeks ago",
      },
      {
        quote:
          "My asthma has improved significantly. I'm using my inhaler much less frequently now. The follow-up care is excellent and very supportive.",
        name: "Vikram Singh",
        city: "Pune",
        when: "1 month ago",
      },
      {
        quote:
          "Professional, caring, and highly knowledgeable. Dr. Gaba helped me overcome severe allergies that had troubled me for years. Very grateful!",
        name: "Meera Patel",
        city: "Hyderabad",
        when: "2 weeks ago",
      },
      {
        quote:
          "The online consultation was convenient and thorough. Dr. Gaba's treatment approach is holistic and addresses the root cause, not just symptoms.",
        name: "Amit Verma",
        city: "Chennai",
        when: "3 months ago",
      },
      {
        quote:
          "Excellent results for my chronic digestive issues. The personalized treatment plan worked wonders. Would recommend to anyone seeking long-term relief.",
        name: "Sneha Reddy",
        city: "Kolkata",
        when: "1 month ago",
      },
      {
        quote:
          "Dr. Gaba's approach is patient-centered and detailed. He listens carefully and explains everything clearly. Truly a healing experience.",
        name: "Karan Malhotra",
        city: "Jaipur",
        when: "2 months ago",
      },
    ],
    []
  );

  return (
    <section
      className="w-full py-16 sm:py-20 lg:py-24"
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
          Trusted By Patients Across India &amp; Beyond
        </motion.h2>

        <motion.p
          variants={animationVariants.fadeInUp}
          transition={{ duration: 0.7, delay: 0.08, ease: theme.easing.easeOut }}
          className="mt-3 text-center text-base sm:text-lg"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          Read what our patients have to say about their experience
        </motion.p>

        {/* Rating pill */}
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
              5.0
            </span>
            <span
              className="text-sm"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              &bull; 500+ Google Reviews
            </span>
          </span>
        </motion.div>

        {/* Review cards */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {reviews.map((review) => (
            <motion.figure
              key={review.name}
              variants={animationVariants.fadeInUp}
              transition={{ duration: 0.6, ease: theme.easing.easeOut }}
              className="flex h-full flex-col rounded-2xl p-6"
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            >
              <StarRow />

              <Quote
                size={22}
                strokeWidth={2}
                className="mt-4"
                style={{ color: "rgba(255,255,255,0.35)" }}
                aria-hidden="true"
              />

              <blockquote
                className="mt-3 text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                &ldquo;{review.quote}&rdquo;
              </blockquote>

              <figcaption
                className="mt-auto pt-5"
                style={{ borderTop: "1px solid rgba(255,255,255,0.16)" }}
              >
                <p
                  className="text-sm font-bold"
                  style={{ color: theme.text.white }}
                >
                  {review.name}
                </p>
                <p
                  className="mt-0.5 text-sm"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {review.city}
                </p>
                <p
                  className="mt-1 text-xs"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {review.when}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Google badge */}
        <motion.div
          variants={animationVariants.fadeInUp}
          transition={{ duration: 0.7, delay: 0.1, ease: theme.easing.easeOut }}
          className="mt-12 sm:mt-14 flex justify-center"
        >
          <span className="flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-lg">
            <GoogleLogo size={22} />
            <span className="flex flex-col">
              <span
                className="text-sm font-semibold"
                style={{ color: theme.text.primary }}
              >
                Rated 5.0 on Google
              </span>
              <StarRow size={11} />
            </span>
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
});

GoogleReviews.displayName = "GoogleReviews";

export default GoogleReviews;
