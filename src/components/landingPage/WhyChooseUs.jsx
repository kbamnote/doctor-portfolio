import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Target,
  User,
  FileText,
  HeartPulse,
  Globe,
  TrendingUp,
} from "lucide-react";
import { theme, animationVariants } from "../../theme/colors";

const WhyChooseUs = React.memo(() => {
  const reasons = useMemo(
    () => [
      {
        Icon: Target,
        title: "Root Cause Focus",
        description:
          "Treat the individual, not just symptoms. We identify and address the underlying cause of your health issues.",
      },
      {
        Icon: User,
        title: "Personalized Treatment Plans",
        description:
          "Every prescription is tailored to your unique constitution, symptoms, and health history.",
      },
      {
        Icon: FileText,
        title: "Detailed Case Taking",
        description:
          "Deep understanding through comprehensive consultation before treatment begins.",
      },
      {
        Icon: HeartPulse,
        title: "Continuous Follow-Up",
        description:
          "Ongoing monitoring and support throughout your treatment journey with regular check-ins.",
      },
      {
        Icon: Globe,
        title: "Online Consultations Worldwide",
        description:
          "Convenient access from anywhere in the world with secure video consultations.",
      },
      {
        Icon: TrendingUp,
        title: "Long-Term Health Improvement",
        description:
          "Focus on sustainable wellness and lasting results, not temporary symptom relief.",
      },
    ],
    []
  );

  return (
    <section
      className="w-full py-16 sm:py-20 lg:py-24"
      style={{
        background: `linear-gradient(180deg, ${theme.neutral[50]} 0%, ${theme.background.secondary} 100%)`,
      }}
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
          className="text-center font-extrabold tracking-tight"
          style={{
            color: theme.text.primary,
            fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          Why Patients Choose Us
        </motion.h2>

        <motion.p
          variants={animationVariants.fadeInUp}
          transition={{ duration: 0.7, delay: 0.1, ease: theme.easing.easeOut }}
          className="mt-4 text-center text-base sm:text-lg"
          style={{ color: theme.text.secondary }}
        >
          Experience homeopathic care that goes beyond conventional treatment
        </motion.p>

        <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {reasons.map(({ Icon, title, description }) => (
            <motion.article
              key={title}
              variants={animationVariants.fadeInUp}
              transition={{ duration: 0.6, ease: theme.easing.easeOut }}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-white p-7 sm:p-8"
              style={{ boxShadow: "0 14px 36px -20px rgba(17, 24, 39, 0.4)" }}
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: theme.primary[100] }}
              >
                <Icon
                  size={24}
                  strokeWidth={2}
                  style={{ color: theme.primary[600] }}
                  aria-hidden="true"
                />
              </span>

              <h3
                className="mt-6 text-lg font-bold leading-snug"
                style={{ color: theme.text.primary }}
              >
                {title}
              </h3>

              <p
                className="mt-3 leading-relaxed"
                style={{ color: theme.text.secondary }}
              >
                {description}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
});

WhyChooseUs.displayName = "WhyChooseUs";

export default WhyChooseUs;
