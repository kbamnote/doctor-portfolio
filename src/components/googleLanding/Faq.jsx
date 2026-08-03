import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { theme, animationVariants } from "../../theme/colors";
import { useBooking } from "./bookingContext";

const Faq = React.memo(() => {
  const { openBooking } = useBooking();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = useMemo(
    () => [
      {
        question: "Can homeopathy help my condition?",
        answer:
          "Homeopathy has shown excellent results for a wide range of chronic conditions including skin disorders, thyroid issues, PCOS, asthma, allergies, digestive problems, and autoimmune conditions. During your initial consultation, Dr. Gaba will evaluate your specific case and provide an honest assessment of how homeopathy can help you.",
      },
      {
        question: "How long does treatment take?",
        answer:
          "It depends on the condition, how long you have had it, and how your body responds. Long-standing chronic complaints are usually treated over several months rather than weeks, with the plan reviewed at every follow-up. You will be given a realistic expectation for your own case after the first consultation — not a fixed promise before it.",
      },
      {
        question: "Do you offer online consultations?",
        answer:
          "Yes. Consultations are available online by video as well as in person at the clinic in Delhi, and patients outside India are welcome. The case-taking is just as detailed either way, and prescriptions and follow-ups are handled remotely for online patients.",
      },
      {
        question: "What if I have tried many treatments before?",
        answer:
          "Most patients who come here have already tried several approaches without lasting relief. Previous treatments are not a barrier — your full history, including what was tried and how you responded, is an important part of understanding your case and is reviewed carefully before anything is prescribed.",
      },
      {
        question: "Is treatment personalized?",
        answer:
          "Every prescription is matched to you, not to a diagnosis alone. Your constitution, symptoms, medical history, lifestyle, and emotional patterns are studied together, which is why two patients with the same condition can receive entirely different remedies.",
      },
      {
        question: "When can I expect improvement?",
        answer:
          "This varies from person to person and cannot be guaranteed. Some patients notice changes within the first few weeks, while deep-seated chronic conditions take longer. Progress is tracked at each follow-up so that changes in your symptoms and overall well-being are measured rather than guessed at.",
      },
    ],
    []
  );

  const toggle = useCallback(
    (index) => setOpenIndex((current) => (current === index ? -1 : index)),
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
          Frequently Asked Questions
        </motion.h2>

        <motion.p
          variants={animationVariants.fadeInUp}
          transition={{ duration: 0.7, delay: 0.08, ease: theme.easing.easeOut }}
          className="mt-3 text-center text-base sm:text-lg"
          style={{ color: theme.text.secondary }}
        >
          Get answers to common questions about our treatment approach
        </motion.p>

        <div className="mt-10 sm:mt-12 space-y-4">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={question}
                variants={animationVariants.fadeInUp}
                transition={{ duration: 0.5, ease: theme.easing.easeOut }}
                className="overflow-hidden rounded-xl bg-white"
                style={{
                  border: `1px solid ${theme.neutral[200]}`,
                  boxShadow: "0 8px 22px -18px rgba(17, 24, 39, 0.5)",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-trigger-${index}`}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  style={{
                    backgroundColor: isOpen
                      ? theme.neutral[50]
                      : theme.background.primary,
                  }}
                >
                  <span
                    className="text-base font-bold leading-snug"
                    style={{ color: theme.text.primary }}
                  >
                    {question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: theme.easing.easeInOut }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      size={20}
                      strokeWidth={2}
                      style={{ color: theme.primary[600] }}
                      aria-hidden="true"
                    />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="panel"
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: theme.easing.easeInOut }}
                      className="overflow-hidden"
                    >
                      <p
                        className="px-6 pb-6 pt-1 leading-relaxed"
                        style={{ color: theme.text.secondary }}
                      >
                        {answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still have questions */}
        <motion.div
          variants={animationVariants.fadeInUp}
          transition={{ duration: 0.7, delay: 0.1, ease: theme.easing.easeOut }}
          className="mt-12 sm:mt-14 rounded-2xl px-6 py-10 text-center"
          style={{ backgroundColor: theme.primary[50] }}
        >
          <p
            className="text-lg sm:text-xl"
            style={{ color: theme.text.primary }}
          >
            Still have questions?
          </p>

          <p
            className="mx-auto mt-3 max-w-xl leading-relaxed"
            style={{ color: theme.text.secondary }}
          >
            We&apos;re here to help. Speak with our team to learn more about how
            we can help your specific condition.
          </p>

          <motion.button
            type="button"
            onClick={openBooking}
            whileHover={animationVariants.hover}
            whileTap={animationVariants.tap}
            className="mt-6 rounded-xl px-8 py-3.5 text-base font-semibold text-white cursor-pointer"
            style={{
              backgroundColor: theme.primary[600],
              boxShadow: "0 12px 28px -12px rgba(54, 150, 172, 0.65)",
            }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
});

Faq.displayName = "Faq";

export default Faq;
