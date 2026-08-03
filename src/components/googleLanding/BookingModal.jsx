import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { theme } from "../../theme/colors";
import { WHATSAPP_URL } from "./whatsapp";

// Campaign leads are kept separate from the main site's contact form: they use
// their own EmailJS template and recipient when configured, and always carry a
// `source` field so they are identifiable in the inbox.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE_ID ||
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const LEAD_EMAIL =
  import.meta.env.VITE_BOOKING_LEAD_EMAIL || "homeopathyindia@gmail.com";

const LEAD_SOURCE = "Google Landing Page";

const CONDITIONS = [
  "Skin Conditions",
  "PCOD / Hormonal",
  "Thyroid",
  "Allergies",
  "Digestive Issues",
  "Stress & Anxiety",
  "Other",
];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  condition: "",
  message: "",
};

const BookingModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const isSending = status.state === "sending";
  const isSent = status.state === "success";

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleClose = useCallback(() => {
    onClose();
    // Reset a little after the exit animation so the user doesn't see it wipe.
    setTimeout(() => {
      setForm(initialForm);
      setStatus({ state: "idle", message: "" });
    }, 300);
  }, [onClose]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        setStatus({
          state: "error",
          message:
            "Email service is not configured yet. Please reach us on WhatsApp instead.",
        });
        return;
      }

      setStatus({ state: "sending", message: "" });

      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            from_email: form.email || "Not provided",
            phone: form.phone,
            condition: form.condition || "Not specified",
            symptoms: form.message || "Not provided",
            message: form.message || "Not provided",
            source: LEAD_SOURCE,
            to_email: LEAD_EMAIL,
          },
          { publicKey: EMAILJS_PUBLIC_KEY }
        );

        setStatus({
          state: "success",
          message: "Thank you! We will contact you shortly to confirm.",
        });
      } catch (err) {
        console.error("EmailJS error:", err);
        setStatus({
          state: "error",
          message:
            "Something went wrong. Please try again or reach us on WhatsApp.",
        });
      }
    },
    [form]
  );

  // Close on Escape, and lock background scrolling while open.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("modal-open");
    if (window.lenis) window.lenis.stop();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("modal-open");
      if (window.lenis) window.lenis.start();
    };
  }, [isOpen, handleClose]);

  const fieldStyle = {
    borderColor: theme.neutral[200],
    color: theme.text.primary,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="booking-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={handleClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          style={{ backgroundColor: "rgba(17, 24, 39, 0.6)" }}
        >
          <motion.div
            key="booking-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.28, ease: theme.easing.easeOut }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white"
            style={{ boxShadow: "0 40px 80px -30px rgba(17, 24, 39, 0.7)" }}
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close booking form"
              className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full cursor-pointer transition-colors"
              style={{ backgroundColor: theme.neutral[100] }}
            >
              <X size={18} strokeWidth={2} style={{ color: theme.text.secondary }} />
            </button>

            {/* Header */}
            <div
              className="px-6 py-6 sm:px-8"
              style={{ background: theme.background.gradient.primary }}
            >
              <h2
                id="booking-title"
                className="text-xl sm:text-2xl font-bold pr-10"
                style={{ color: theme.text.white }}
              >
                Book Your Consultation
              </h2>
              <p
                className="mt-2 text-sm"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                Share a few details and our team will get back to you to confirm
                your appointment.
              </p>
            </div>

            {isSent ? (
              <div className="px-6 py-12 sm:px-8 text-center">
                <CheckCircle2
                  size={52}
                  strokeWidth={2}
                  className="mx-auto"
                  style={{ color: theme.primary[500] }}
                  aria-hidden="true"
                />
                <p
                  className="mt-5 text-lg font-semibold"
                  style={{ color: theme.text.primary }}
                >
                  Request sent
                </p>
                <p className="mt-2" style={{ color: theme.text.secondary }}>
                  {status.message}
                </p>

                <button
                  type="button"
                  onClick={handleClose}
                  className="mt-7 rounded-xl px-7 py-3 text-base font-semibold text-white cursor-pointer"
                  style={{ backgroundColor: theme.primary[600] }}
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-6 py-6 sm:px-8">
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: theme.text.primary }}
                    >
                      Full Name <span style={{ color: theme.accent.red }}>*</span>
                    </label>
                    <input
                      id="booking-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
                      style={fieldStyle}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: theme.text.primary }}
                    >
                      Phone Number{" "}
                      <span style={{ color: theme.accent.red }}>*</span>
                    </label>
                    <input
                      id="booking-phone"
                      name="phone"
                      type="tel"
                      required
                      inputMode="tel"
                      pattern="[0-9+\-\s()]{7,20}"
                      title="Enter a valid phone number"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="e.g. 98765 43210"
                      className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
                      style={fieldStyle}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="booking-email"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: theme.text.primary }}
                    >
                      Email <span style={{ color: theme.text.light }}>(optional)</span>
                    </label>
                    <input
                      id="booking-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
                      style={fieldStyle}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="booking-condition"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: theme.text.primary }}
                    >
                      Condition
                    </label>
                    <select
                      id="booking-condition"
                      name="condition"
                      value={form.condition}
                      onChange={handleChange}
                      className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 bg-white"
                      style={fieldStyle}
                    >
                      <option value="">Select a condition</option>
                      {CONDITIONS.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="booking-message"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: theme.text.primary }}
                    >
                      Tell us briefly about your case
                    </label>
                    <textarea
                      id="booking-message"
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How long have you had it, and what have you tried?"
                      className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 resize-none"
                      style={fieldStyle}
                    />
                  </div>
                </div>

                {status.state === "error" && (
                  <p
                    className="mt-4 text-sm"
                    style={{ color: theme.accent.red }}
                    role="alert"
                  >
                    {status.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSending}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-semibold text-white cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ backgroundColor: theme.primary[600] }}
                >
                  <Send size={18} strokeWidth={2} aria-hidden="true" />
                  {isSending ? "Sending..." : "Request Appointment"}
                </button>

                <p
                  className="mt-4 text-center text-sm"
                  style={{ color: theme.text.secondary }}
                >
                  Prefer to chat?{" "}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline"
                    style={{ color: theme.primary[600] }}
                  >
                    Message us on WhatsApp
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
