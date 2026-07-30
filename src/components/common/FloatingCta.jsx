import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Calendar } from "lucide-react";
import { theme } from "../../theme/colors";

const WHATSAPP_URL =
  "https://wa.me/919354985058?text=Hello!%20I%20want%20homeopathy%20treatment.%E2%80%8E";

const FloatingCta = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Reveal only once the hero has scrolled past.
    const getThreshold = () => {
      const hero = document.getElementById("hero");
      return hero ? hero.offsetHeight * 0.75 : window.innerHeight * 0.7;
    };

    let threshold = getThreshold();

    const onScroll = () => setIsVisible(window.scrollY > threshold);
    const onResize = () => {
      threshold = getThreshold();
      onScroll();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const goToContact = useCallback(() => navigate("/contact"), [navigate]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="floating-cta"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ duration: 0.35, ease: theme.easing.easeOut }}
          className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-[min(19rem,calc(100vw-2.5rem))] rounded-2xl p-4 sm:p-5"
          style={{
            background: theme.background.gradient.primary,
            boxShadow: "0 24px 48px -18px rgba(17, 24, 39, 0.55)",
          }}
        >
          <p
            className="text-sm sm:text-base font-semibold"
            style={{ color: theme.text.white }}
          >
            Ready to start your healing journey?
          </p>

          <motion.button
            type="button"
            onClick={goToContact}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold cursor-pointer"
            style={{ color: theme.primary[600] }}
          >
            <Calendar size={18} strokeWidth={2} aria-hidden="true" />
            Book Consultation
          </motion.button>

          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white"
            style={{ backgroundColor: "#25D366" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c.005-3.625 2.957-6.584 6.608-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.608 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.005-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
            WhatsApp Us
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCta;
