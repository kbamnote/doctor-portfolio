import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  ClipboardList,
  FileText,
  RefreshCw,
  TrendingUp,
  ArrowDown,
} from "lucide-react";
import { theme, animationVariants } from "../../theme/colors";
import { openWhatsApp } from "./whatsapp";

const HowItWorks = React.memo(() => {

  const steps = useMemo(
    () => [
      {
        Icon: Calendar,
        title: "Book Your Consultation",
        description:
          "Schedule your appointment online or via phone at your convenience. Choose between in-person or video consultation.",
      },
      {
        Icon: ClipboardList,
        title: "Detailed Case Evaluation",
        description:
          "Comprehensive consultation covering your medical history, current symptoms, lifestyle, and overall health patterns.",
      },
      {
        Icon: FileText,
        title: "Personalized Treatment Plan",
        description:
          "Receive a customized homeopathic prescription based on your unique case analysis and constitutional assessment.",
      },
      {
        Icon: RefreshCw,
        title: "Regular Follow-Ups",
        description:
          "Scheduled check-ins to monitor progress, adjust treatment as needed, and ensure optimal results.",
      },
      {
        Icon: TrendingUp,
        title: "Track Progress & Improvements",
        description:
          "Document your healing journey with measurable improvements in symptoms and overall well-being.",
      },
    ],
    []
  );


  return (
    <section
      className="w-full py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: theme.background.primary }}
    >
      <motion.div
        variants={animationVariants.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto w-full max-w-3xl px-5 sm:px-8"
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
          How It Works
        </motion.h2>

        <motion.p
          variants={animationVariants.fadeInUp}
          transition={{ duration: 0.7, delay: 0.1, ease: theme.easing.easeOut }}
          className="mt-3 text-center text-base sm:text-lg"
          style={{ color: theme.text.secondary }}
        >
          Your journey to better health in 5 simple steps
        </motion.p>

        <ol className="mt-12 sm:mt-14">
          {steps.map(({ Icon, title, description }, index) => (
            <li key={title}>
              <motion.div
                variants={animationVariants.fadeInUp}
                transition={{ duration: 0.6, ease: theme.easing.easeOut }}
                className="flex items-center gap-4 sm:gap-6"
              >
                <span
                  className="flex h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-full text-lg font-bold"
                  style={{
                    backgroundColor: theme.primary[600],
                    color: theme.text.white,
                    boxShadow: "0 10px 24px -12px rgba(54, 150, 172, 0.9)",
                  }}
                  aria-hidden="true"
                >
                  {index + 1}
                </span>

                <div
                  className="flex flex-1 items-start gap-4 rounded-xl p-5"
                  style={{
                    backgroundColor: theme.neutral[50],
                    borderLeft: `3px solid ${theme.primary[600]}`,
                  }}
                >
                  <span
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: theme.primary[100] }}
                  >
                    <Icon
                      size={18}
                      strokeWidth={2}
                      style={{ color: theme.primary[600] }}
                      aria-hidden="true"
                    />
                  </span>

                  <div>
                    <h3
                      className="text-base font-bold leading-snug"
                      style={{ color: theme.text.primary }}
                    >
                      {title}
                    </h3>
                    <p
                      className="mt-1.5 text-sm leading-relaxed"
                      style={{ color: theme.text.secondary }}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              </motion.div>

              {index < steps.length - 1 && (
                <motion.div
                  variants={animationVariants.fadeIn}
                  transition={{ duration: 0.5, ease: theme.easing.easeOut }}
                  className="flex justify-center py-3"
                  aria-hidden="true"
                >
                  <ArrowDown
                    size={20}
                    strokeWidth={2}
                    style={{ color: theme.primary[600] }}
                  />
                </motion.div>
              )}
            </li>
          ))}
        </ol>

        <motion.div
          variants={animationVariants.fadeInUp}
          transition={{ duration: 0.7, delay: 0.1, ease: theme.easing.easeOut }}
          className="mt-12 sm:mt-14 rounded-2xl px-6 py-10 text-center"
          style={{
            background: theme.background.gradient.primary,
            boxShadow: "0 24px 50px -25px rgba(54, 150, 172, 0.7)",
          }}
        >
          <p
            className="text-lg sm:text-xl font-semibold"
            style={{ color: theme.text.white }}
          >
            Start Your Journey Today
          </p>

          <motion.button
            type="button"
            onClick={openWhatsApp}
            whileHover={animationVariants.hover}
            whileTap={animationVariants.tap}
            className="mt-6 rounded-xl bg-white px-7 py-3.5 text-base font-semibold cursor-pointer"
            style={{ color: theme.primary[600] }}
          >
            Book Your Consultation
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
});

HowItWorks.displayName = "HowItWorks";

export default HowItWorks;
