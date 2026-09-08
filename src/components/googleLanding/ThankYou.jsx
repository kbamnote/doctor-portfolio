import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Phone, CalendarCheck, MessageCircle } from "lucide-react";
import { theme, animationVariants } from "../../theme/colors";
import { WHATSAPP_URL } from "./whatsapp";
import SEO from "../common/SEO";

// Conversion tracking for this page is handled in Google Tag Manager,
// via a History Change / Page View trigger on the /thank-you URL.
const ThankYou = () => {

  const steps = useMemo(
    () => [
      {
        Icon: Phone,
        title: "We call you back",
        description:
          "Our team reaches out on the number you shared to understand your case and answer any questions.",
      },
      {
        Icon: CalendarCheck,
        title: "We confirm your slot",
        description:
          "Together we pick a time that works for you — online by video, or in person at the clinic in Delhi.",
      },
      {
        Icon: CheckCircle2,
        title: "Your detailed consultation",
        description:
          "Dr. Guneet takes your full case history to identify the root cause before anything is prescribed.",
      },
    ],
    []
  );

  return (
    <>
      {/* Conversion pages should never be indexed by search engines. */}
      <SEO
        title="Thank You | Dr. Guneet Singh Gaba"
        description="Your consultation request has been received. Our team will contact you shortly."
        noindex
      />

      <section
        className="flex w-full items-center justify-center px-5 py-20 sm:px-8 sm:py-24"
        style={{
          minHeight: "100vh",
          background: `linear-gradient(180deg, ${theme.background.secondary} 0%, ${theme.background.primary} 60%)`,
        }}
      >
        <motion.div
          variants={animationVariants.staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto w-full max-w-2xl text-center"
        >
          <motion.span
            variants={animationVariants.scaleIn}
            transition={{ duration: 0.6, ease: theme.easing.easeOut }}
            className="inline-flex h-20 w-20 items-center justify-center rounded-full"
            style={{ backgroundColor: theme.primary[100] }}
          >
            <CheckCircle2
              size={44}
              strokeWidth={2}
              style={{ color: theme.primary[600] }}
              aria-hidden="true"
            />
          </motion.span>

          <motion.h1
            variants={animationVariants.fadeInUp}
            transition={{ duration: 0.7, delay: 0.05, ease: theme.easing.easeOut }}
            className="mt-8 font-extrabold tracking-tight"
            style={{
              color: theme.text.primary,
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Thank You!
          </motion.h1>

          <motion.p
            variants={animationVariants.fadeInUp}
            transition={{ duration: 0.7, delay: 0.1, ease: theme.easing.easeOut }}
            className="mx-auto mt-5 max-w-xl text-lg leading-relaxed"
            style={{ color: theme.text.secondary }}
          >
            Your consultation request has been received. Our team will contact
            you shortly to confirm your appointment.
          </motion.p>

          {/* What happens next */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {steps.map(({ Icon, title, description }) => (
              <motion.div
                key={title}
                variants={animationVariants.fadeInUp}
                transition={{ duration: 0.6, ease: theme.easing.easeOut }}
                className="rounded-2xl bg-white p-6 text-left"
                style={{
                  border: `1px solid ${theme.neutral[100]}`,
                  boxShadow: "0 14px 36px -22px rgba(17, 24, 39, 0.4)",
                }}
              >
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: theme.primary[100] }}
                >
                  <Icon
                    size={22}
                    strokeWidth={2}
                    style={{ color: theme.primary[600] }}
                    aria-hidden="true"
                  />
                </span>
                <h2
                  className="mt-4 text-base font-bold leading-snug"
                  style={{ color: theme.text.primary }}
                >
                  {title}
                </h2>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: theme.text.secondary }}
                >
                  {description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={animationVariants.fadeInUp}
            transition={{ duration: 0.7, delay: 0.15, ease: theme.easing.easeOut }}
            className="mt-12"
          >
            <p className="text-base" style={{ color: theme.text.secondary }}>
              Need to reach us sooner?
            </p>

            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={animationVariants.hover}
              whileTap={animationVariants.tap}
              className="mt-5 inline-flex items-center justify-center gap-3 rounded-xl px-8 py-4 text-base font-semibold text-white"
              style={{
                backgroundColor: "#25D366",
                boxShadow: "0 14px 30px -16px rgba(0, 0, 0, 0.4)",
              }}
            >
              <MessageCircle size={20} strokeWidth={2} aria-hidden="true" />
              Message Us On WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default ThankYou;
