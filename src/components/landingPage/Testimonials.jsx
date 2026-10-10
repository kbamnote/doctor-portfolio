import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { theme } from "../../theme/colors";
import ReviewsMarquee, { StarRow } from "../common/ReviewsMarquee";
import { RATING, REVIEW_COUNT, PROFILE_URL } from "../../data/googleReviews";

const Testimonials = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, threshold: 0.3 });

  return (
    <section
      className="py-16 overflow-hidden"
      style={{ backgroundColor: theme.background.secondary }}
      data-scroll-section
    >
      <motion.div
        ref={headerRef}
        className="mx-auto max-w-6xl px-6 text-center md:px-12 lg:px-20"
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2
          className="heading-font mb-4 text-3xl font-semibold md:text-4xl"
          style={{ color: theme.text.primary }}
        >
          What Our Patients Say
        </h2>

        <p
          className="mx-auto max-w-2xl text-lg"
          style={{ color: theme.text.secondary }}
        >
          Real experiences from patients who found healing through homeopathy.
        </p>

        {/* Rating straight from the Google Business Profile */}
        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-3 rounded-full px-5 py-2.5"
          style={{
            backgroundColor: theme.background.primary,
            border: `1px solid ${theme.neutral[200]}`,
          }}
        >
          <StarRow size={16} />
          <span
            className="text-base font-bold"
            style={{ color: theme.text.primary }}
          >
            {RATING}
          </span>
          <span className="text-sm" style={{ color: theme.text.secondary }}>
            &bull; {REVIEW_COUNT} Google Reviews
          </span>
        </a>
      </motion.div>

      <div className="mt-12">
        <ReviewsMarquee tone="light" />
      </div>
    </section>
  );
};

export default Testimonials;
