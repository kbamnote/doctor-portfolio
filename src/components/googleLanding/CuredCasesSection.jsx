import React from "react";
import { motion } from "framer-motion";
import SuccessStories from "../curedCases/SuccessStories";
import { theme, animationVariants } from "../../theme/colors";

// Wraps the site's real cured-cases grid with a heading for the campaign page.
// SuccessStories is fully self-contained — its "Read full story" opens an
// on-page modal, so nothing here links out to the main website.
const CuredCasesSection = React.memo(() => {
  return (
    <>
      <section className="w-full bg-gray-50 pt-16 sm:pt-20 lg:pt-24">
        <motion.div
          variants={animationVariants.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto w-full max-w-4xl px-5 sm:px-8"
        >
          <motion.h2
            variants={animationVariants.fadeInUp}
            transition={{ duration: 0.7, ease: theme.easing.easeOut }}
            className="text-center font-extrabold tracking-tight"
            style={{
              color: theme.text.primary,
              fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Why Thousands Of Patients Always Trust Dr. Guneet
          </motion.h2>

          <motion.p
            variants={animationVariants.fadeInUp}
            transition={{ duration: 0.7, delay: 0.1, ease: theme.easing.easeOut }}
            className="mt-4 text-center text-base sm:text-lg"
            style={{ color: theme.text.secondary }}
          >
            Real transformations from our patients who found lasting relief
            through homeopathy.
          </motion.p>
        </motion.div>
      </section>

      <SuccessStories />
    </>
  );
});

CuredCasesSection.displayName = "CuredCasesSection";

export default CuredCasesSection;
