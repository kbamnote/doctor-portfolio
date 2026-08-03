import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Star, Users, Award, Calendar } from "lucide-react";
import doctorImg from "../../assets/dr.guneet 1.png";
import { theme, animationVariants } from "../../theme/colors";
import { useBooking } from "./bookingContext";

const MeetDoctor = React.memo(() => {
  const { openBooking } = useBooking();

  const qualifications = useMemo(
    () => [
      "BHMS (Bachelor of Homeopathic Medicine and Surgery)",
      "Registered with Central Council of Homeopathy",
      "Advanced training in Classical Homeopathy",
      "Specialized in chronic disease management",
    ],
    []
  );

  const stats = useMemo(
    () => [
      { Icon: Users, value: "5000+", label: "Patients Treated" },
      { Icon: Award, value: "15+", label: "Years Experience" },
      { Icon: Calendar, value: "10000+", label: "Consultations" },
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
          Meet Dr. Guneet Singh Gaba
        </motion.h2>

        <div className="mt-12 sm:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          {/* Portrait */}
          <motion.div
            variants={animationVariants.scaleIn}
            transition={{ duration: 0.8, ease: theme.easing.easeOut }}
            className="relative mx-auto w-full max-w-md"
          >
            <div
              className="overflow-hidden rounded-2xl"
              style={{ boxShadow: "0 26px 54px -26px rgba(17, 24, 39, 0.5)" }}
            >
              <img
                src={doctorImg}
                alt="Dr. Guneet Singh Gaba"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>

            <span
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold"
              style={{
                backgroundColor: theme.accent.orange,
                color: theme.text.white,
                boxShadow: "0 12px 26px -12px rgba(245, 158, 11, 0.8)",
              }}
            >
              <Star size={16} strokeWidth={0} fill="currentColor" aria-hidden="true" />
              Registered Homeopath
            </span>
          </motion.div>

          {/* Details */}
          <div>
            <motion.h3
              variants={animationVariants.fadeInUp}
              transition={{ duration: 0.7, ease: theme.easing.easeOut }}
              className="text-xl sm:text-2xl font-bold"
              style={{ color: theme.primary[600] }}
            >
              Expert in Chronic &amp; Difficult-To-Treat Conditions
            </motion.h3>

            <motion.p
              variants={animationVariants.fadeInUp}
              transition={{ duration: 0.7, delay: 0.05, ease: theme.easing.easeOut }}
              className="mt-5 leading-relaxed"
              style={{ color: theme.text.secondary }}
            >
              Dr. Guneet Singh Gaba is a highly experienced homeopathic
              physician with over 15 years of dedicated practice in treating
              chronic and complex health conditions. His approach goes beyond
              symptom management to identify and address the root cause of
              illness.
            </motion.p>

            <motion.p
              variants={animationVariants.fadeInUp}
              transition={{ duration: 0.7, delay: 0.1, ease: theme.easing.easeOut }}
              className="mt-4 leading-relaxed"
              style={{ color: theme.text.secondary }}
            >
              With advanced training in classical homeopathy and extensive
              clinical experience, Dr. Gaba specializes in personalized
              treatment plans tailored to each patient&apos;s unique
              constitution and health history.
            </motion.p>

            {/* Qualifications */}
            <motion.div
              variants={animationVariants.fadeInUp}
              transition={{ duration: 0.7, delay: 0.15, ease: theme.easing.easeOut }}
              className="mt-8 rounded-2xl p-6"
              style={{ backgroundColor: theme.neutral[50] }}
            >
              <h4
                className="text-base font-bold"
                style={{ color: theme.text.primary }}
              >
                Qualifications &amp; Training
              </h4>

              <ul className="mt-4 space-y-2.5">
                {qualifications.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: theme.primary[500] }}
                      aria-hidden="true"
                    />
                    <span
                      className="text-sm sm:text-base leading-snug"
                      style={{ color: theme.text.secondary }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Philosophy */}
            <motion.blockquote
              variants={animationVariants.fadeInUp}
              transition={{ duration: 0.7, delay: 0.2, ease: theme.easing.easeOut }}
              className="mt-6 rounded-2xl p-6"
              style={{
                backgroundColor: theme.primary[50],
                borderLeft: `4px solid ${theme.primary[600]}`,
              }}
            >
              <h4
                className="text-base font-bold"
                style={{ color: theme.text.primary }}
              >
                Treatment Philosophy
              </h4>
              <p
                className="mt-3 italic leading-relaxed text-sm sm:text-base"
                style={{ color: theme.text.secondary }}
              >
                &ldquo;Every patient is unique, and so should be their
                treatment. I believe in detailed case-taking, understanding the
                individual as a whole, and creating personalized treatment plans
                that address not just the symptoms, but the underlying imbalance
                causing them.&rdquo;
              </p>
            </motion.blockquote>

            {/* Stats */}
            <motion.div
              variants={animationVariants.fadeInUp}
              transition={{ duration: 0.7, delay: 0.25, ease: theme.easing.easeOut }}
              className="mt-6 grid grid-cols-3 gap-4"
            >
              {stats.map(({ Icon, value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl bg-white px-3 py-5 text-center"
                  style={{
                    border: `1px solid ${theme.neutral[200]}`,
                    boxShadow: "0 10px 26px -20px rgba(17, 24, 39, 0.5)",
                  }}
                >
                  <Icon
                    size={22}
                    strokeWidth={2}
                    className="mx-auto"
                    style={{ color: theme.primary[600] }}
                    aria-hidden="true"
                  />
                  <p
                    className="mt-3 text-xl font-bold"
                    style={{ color: theme.text.primary }}
                  >
                    {value}
                  </p>
                  <p
                    className="mt-1 text-xs"
                    style={{ color: theme.text.secondary }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={animationVariants.fadeInUp}
          transition={{ duration: 0.7, delay: 0.1, ease: theme.easing.easeOut }}
          className="mt-14 sm:mt-16 flex flex-col items-center"
        >
          <p
            className="text-base sm:text-lg"
            style={{ color: theme.text.secondary }}
          >
            Get Expert Guidance
          </p>

          <motion.button
            type="button"
            onClick={openBooking}
            whileHover={animationVariants.hover}
            whileTap={animationVariants.tap}
            className="mt-5 rounded-xl px-8 py-4 text-base font-semibold text-white cursor-pointer"
            style={{
              backgroundColor: theme.primary[600],
              boxShadow: "0 12px 28px -12px rgba(54, 150, 172, 0.65)",
            }}
          >
            Book Consultation
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
});

MeetDoctor.displayName = "MeetDoctor";

export default MeetDoctor;
