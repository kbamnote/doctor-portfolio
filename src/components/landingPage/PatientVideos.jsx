import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { theme, animationVariants } from "../../theme/colors";

// Placeholder entries — replace with real patient videos (thumbnail + video URL)
// once footage and consent are in hand. `thumbnail: null` renders a branded tile.
const patientVideos = [
  {
    name: "Priya Sharma",
    condition: "Chronic Eczema",
    duration: "6 months treatment",
    thumbnail: null,
  },
  {
    name: "Rajesh Kumar",
    condition: "Thyroid Disorder",
    duration: "8 months treatment",
    thumbnail: null,
  },
  {
    name: "Anita Desai",
    condition: "PCOS",
    duration: "10 months treatment",
    thumbnail: null,
  },
  {
    name: "Meera Iyer",
    condition: "Severe Acne",
    duration: "5 months treatment",
    thumbnail: null,
  },
  {
    name: "Arun Verma",
    condition: "Seborrheic Dermatitis",
    duration: "7 months treatment",
    thumbnail: null,
  },
  {
    name: "Kavita Nair",
    condition: "Non-Healing Wound",
    duration: "9 months treatment",
    thumbnail: null,
  },
];

const PatientVideos = React.memo(() => {
  const navigate = useNavigate();
  const [perPage, setPerPage] = useState(3);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const compute = () => {
      const width = window.innerWidth;
      setPerPage(width < 640 ? 1 : width < 1024 ? 2 : 3);
    };

    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const pages = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < patientVideos.length; i += perPage) {
      chunks.push(patientVideos.slice(i, i + perPage));
    }
    return chunks;
  }, [perPage]);

  // Keep the active page valid when the breakpoint changes
  useEffect(() => {
    setPage((current) => Math.min(current, pages.length - 1));
  }, [pages.length]);

  const goPrev = useCallback(
    () => setPage((p) => (p === 0 ? pages.length - 1 : p - 1)),
    [pages.length]
  );
  const goNext = useCallback(
    () => setPage((p) => (p === pages.length - 1 ? 0 : p + 1)),
    [pages.length]
  );
  const goToContact = useCallback(() => navigate("/contact"), [navigate]);

  // Swap for a real player once video sources exist.
  const handlePlay = useCallback(() => navigate("/cured-cases"), [navigate]);

  return (
    <section
      className="w-full py-16 sm:py-20 lg:py-24"
      style={{
        background: `linear-gradient(180deg, ${theme.background.secondary} 0%, ${theme.background.primary} 100%)`,
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
          Hear Directly From Our Patients
        </motion.h2>

        <motion.p
          variants={animationVariants.fadeInUp}
          transition={{ duration: 0.7, delay: 0.1, ease: theme.easing.easeOut }}
          className="mt-4 text-center text-base sm:text-lg"
          style={{ color: theme.text.secondary }}
        >
          Real stories of transformation and healing
        </motion.p>

        {/* Carousel */}
        <motion.div
          variants={animationVariants.fadeInUp}
          transition={{ duration: 0.7, delay: 0.15, ease: theme.easing.easeOut }}
          className="relative mt-12 sm:mt-14"
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${page * 100}%` }}
              transition={{ duration: 0.5, ease: theme.easing.easeInOut }}
            >
              {pages.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className="w-full flex-shrink-0 grid gap-6"
                  style={{
                    gridTemplateColumns: `repeat(${perPage}, minmax(0, 1fr))`,
                  }}
                >
                  {group.map((patient) => (
                    <article
                      key={patient.name}
                      className="overflow-hidden rounded-2xl bg-white"
                      style={{
                        boxShadow: "0 14px 36px -20px rgba(17, 24, 39, 0.4)",
                      }}
                    >
                      <button
                        type="button"
                        onClick={handlePlay}
                        aria-label={`Play ${patient.name}'s story`}
                        className="group relative block w-full cursor-pointer"
                      >
                        <div className="relative w-full aspect-[3/2]">
                          {patient.thumbnail ? (
                            <img
                              src={patient.thumbnail}
                              alt={`${patient.name} — ${patient.condition}`}
                              loading="lazy"
                              className="absolute inset-0 h-full w-full object-cover"
                            />
                          ) : (
                            <div
                              className="absolute inset-0"
                              style={{
                                background: theme.background.gradient.primary,
                              }}
                            />
                          )}

                          <span className="absolute inset-0 flex items-center justify-center">
                            <span
                              className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:scale-110"
                              style={{
                                boxShadow: "0 10px 30px -8px rgba(17,24,39,0.5)",
                              }}
                            >
                              <Play
                                size={24}
                                strokeWidth={0}
                                fill={theme.primary[600]}
                                className="ml-1"
                                aria-hidden="true"
                              />
                            </span>
                          </span>
                        </div>
                      </button>

                      <div className="px-6 py-6">
                        <h3
                          className="text-lg font-bold"
                          style={{ color: theme.text.primary }}
                        >
                          {patient.name}
                        </h3>
                        <p
                          className="mt-1.5 font-medium"
                          style={{ color: theme.text.accent }}
                        >
                          {patient.condition}
                        </p>
                        <p
                          className="mt-1.5 text-sm"
                          style={{ color: theme.text.secondary }}
                        >
                          {patient.duration}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          {pages.length > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous patient stories"
                className="absolute top-1/2 left-0 lg:-left-5 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white cursor-pointer transition-transform hover:scale-110"
                style={{ boxShadow: "0 10px 26px -10px rgba(17,24,39,0.45)" }}
              >
                <ChevronLeft
                  size={22}
                  strokeWidth={2}
                  style={{ color: theme.text.secondary }}
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next patient stories"
                className="absolute top-1/2 right-0 lg:-right-5 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white cursor-pointer transition-transform hover:scale-110"
                style={{ boxShadow: "0 10px 26px -10px rgba(17,24,39,0.45)" }}
              >
                <ChevronRight
                  size={22}
                  strokeWidth={2}
                  style={{ color: theme.text.secondary }}
                  aria-hidden="true"
                />
              </button>
            </>
          )}
        </motion.div>

        {/* Dots */}
        {pages.length > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2.5">
            {pages.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setPage(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={page === index}
                className="h-2.5 w-2.5 rounded-full cursor-pointer transition-colors"
                style={{
                  backgroundColor:
                    page === index ? theme.primary[600] : theme.neutral[300],
                }}
              />
            ))}
          </div>
        )}

        <motion.div
          variants={animationVariants.fadeInUp}
          transition={{ duration: 0.7, delay: 0.2, ease: theme.easing.easeOut }}
          className="mt-12 sm:mt-14 flex flex-col items-center"
        >
          <p
            className="text-lg sm:text-xl"
            style={{ color: theme.text.secondary }}
          >
            Speak With Our Team Today
          </p>

          <motion.button
            type="button"
            onClick={goToContact}
            whileHover={animationVariants.hover}
            whileTap={animationVariants.tap}
            className="mt-6 rounded-xl px-8 py-4 text-base font-semibold text-white cursor-pointer"
            style={{
              backgroundColor: theme.primary[600],
              boxShadow: "0 12px 28px -12px rgba(54, 150, 172, 0.65)",
            }}
          >
            Schedule Consultation
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
});

PatientVideos.displayName = "PatientVideos";

export default PatientVideos;
