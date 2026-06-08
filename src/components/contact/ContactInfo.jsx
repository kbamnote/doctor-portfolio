import React, { useRef, useEffect, useState } from "react";
import { MapPin, Phone, MessageCircle, Clock, Send } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import { theme } from "../../theme/colors";

gsap.registerPlugin(ScrollTrigger);

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const initialForm = {
  name: "",
  email: "",
  phone: "",
  condition: "",
  symptoms: "",
};

const ContactInfo = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const contactCardRef = useRef(null);

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const isSending = status.state === "sending";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus({
        state: "error",
        message:
          "Email service is not configured yet. Please try again later or contact us on WhatsApp.",
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
          from_email: form.email,
          phone: form.phone,
          condition: form.condition,
          symptoms: form.symptoms,
          to_email: "homeopathyindia@gmail.com",
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus({
        state: "success",
        message: "Thank you! Your appointment request has been sent.",
      });
      setForm(initialForm);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({
        state: "error",
        message: "Something went wrong. Please try again or reach us on WhatsApp.",
      });
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;
    const contactCard = contactCardRef.current;

    if (!section) return;

    // Form animation
    if (form) {
      gsap.fromTo(form, 
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: form,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Form fields animation
      const formFields = form.querySelectorAll('input, select, textarea, button');
      gsap.fromTo(formFields, 
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: form,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Contact card animation
    if (contactCard) {
      gsap.fromTo(contactCard, 
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contactCard,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Contact items animation
      const contactItems = contactCard.querySelectorAll('.contact-item');
      gsap.fromTo(contactItems, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contactCard,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6"
      style={{ backgroundColor: theme.background.secondary }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {/* ----------------- Appointment Form ----------------- */}
        <div
          ref={formRef}
          className="rounded-2xl shadow-lg p-6 sm:p-8"
          style={{ 
            backgroundColor: theme.background.primary,
            willChange: 'transform'
          }}
        >
          <h2
            className="heading-font text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8"
            style={{ color: theme.text.primary }}
          >
            Schedule Your Appointment
          </h2>

          <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label
                className="block mb-2"
                style={{ color: theme.text.secondary }}
              >
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2"
                style={{
                  borderColor: theme.neutral[300],
                  "--tw-ring-color": theme.primary[400],
                }}
                onFocus={(e) =>
                  (e.target.style.boxShadow = `0 0 0 2px ${theme.primary[400]}`)
                }
                onBlur={(e) => (e.target.style.boxShadow = "none")}
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label
                  className="block mb-2"
                  style={{ color: theme.text.secondary }}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2"
                  style={{
                    borderColor: theme.neutral[300],
                    "--tw-ring-color": theme.primary[400],
                  }}
                  onFocus={(e) =>
                    (e.target.style.boxShadow = `0 0 0 2px ${theme.primary[400]}`)
                  }
                  onBlur={(e) => (e.target.style.boxShadow = "none")}
                />
              </div>

              <div>
                <label
                  className="block mb-2"
                  style={{ color: theme.text.secondary }}
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2"
                  style={{
                    borderColor: theme.neutral[300],
                    "--tw-ring-color": theme.primary[400],
                  }}
                  onFocus={(e) =>
                    (e.target.style.boxShadow = `0 0 0 2px ${theme.primary[400]}`)
                  }
                  onBlur={(e) => (e.target.style.boxShadow = "none")}
                />
              </div>
            </div>

            {/* Condition Dropdown */}
            <div>
              <label
                className="block mb-2"
                style={{ color: theme.text.secondary }}
              >
                Health Condition *
              </label>
              <select
                name="condition"
                value={form.condition}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2"
                style={{
                  borderColor: theme.neutral[300],
                  "--tw-ring-color": theme.primary[400],
                }}
                onFocus={(e) =>
                  (e.target.style.boxShadow = `0 0 0 2px ${theme.primary[400]}`)
                }
                onBlur={(e) => (e.target.style.boxShadow = "none")}
              >
                <option value="">Select a condition</option>
                <option>Allergies</option>
                <option>Digestive Issues</option>
                <option>Stress & Anxiety</option>
                <option>Skin Conditions</option>
                <option>Other</option>
              </select>
            </div>

            {/* Symptoms Textarea */}
            <div>
              <label
                className="block mb-2"
                style={{ color: theme.text.secondary }}
              >
                Tell Us About Your Symptoms
              </label>
              <textarea
                rows="4"
                name="symptoms"
                value={form.symptoms}
                onChange={handleChange}
                placeholder="Please describe your symptoms and health concerns..."
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2"
                style={{
                  borderColor: theme.neutral[300],
                  "--tw-ring-color": theme.primary[400],
                }}
                onFocus={(e) =>
                  (e.target.style.boxShadow = `0 0 0 2px ${theme.primary[400]}`)
                }
                onBlur={(e) => (e.target.style.boxShadow = "none")}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSending}
              className="w-full font-medium py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2 transition-all text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed"
              style={{
                backgroundColor: theme.primary[600],
                color: theme.text.white,
              }}
              onMouseEnter={(e) =>
                !isSending &&
                (e.currentTarget.style.backgroundColor = theme.primary[700])
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = theme.primary[600])
              }
            >
              <Send size={18} />
              <span>
                {isSending ? "Sending..." : "Submit Appointment Request"}
              </span>
            </button>

            {status.message && (
              <p
                role="status"
                className="text-sm text-center mt-1"
                style={{
                  color:
                    status.state === "success"
                      ? theme.primary[700]
                      : "#dc2626",
                }}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>

        {/* ----------------- Contact Info ----------------- */}
        <div
          ref={contactCardRef}
          className="rounded-2xl shadow-lg p-6 sm:p-8"
          style={{
            background: `linear-gradient(to bottom right, ${theme.primary[500]}, ${theme.primary[400]})`,
            color: theme.text.white,
            willChange: 'transform'
          }}
        >
          <h2 className="heading-font text-2xl lg:text-3xl font-semibold mb-6">
            Get In Touch
          </h2>
          <p className="mb-10" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Have questions? We're here to help. Reach out through any of the
            following channels.
          </p>

          <div className="space-y-6">
            {[
              {
                icon: <MapPin />,
                title: "Visit Us",
                lines: [
                  "Safdarjung Enclave, near green park, B-7/Extension,",
                  "Block B 7, Arjun Nagar, Safdarjung Enclave,",
                  "New Delhi, Delhi 110029",
                ],
              },
              {
                icon: <Phone />,
                title: "Call Us",
                lines: [{ text: "9354985058", href: "tel:9354985058" }],
              },
              {
                icon: <MessageCircle />,
                title: "WhatsApp",
                lines: [
                  {
                    text: "Message on WhatsApp",
                    href: "https://wa.me/919354985058?text=Hello!%20I%20want%20homeopathy%20treatment.%E2%80%8E",
                  },
                ],
              },
              {
                icon: <Clock />,
                title: "Working Hours",
                lines: ["Mon-Fri: 9:00 AM - 7:00 PM", "Sat: 10:00 AM - 4:00 PM"],
              },
            ].map((item, idx) => (
              <div key={idx} className="contact-item flex items-start gap-4" style={{ willChange: 'transform' }}>
                <div
                  className="p-3 rounded-lg"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.2)",
                    color: theme.text.white,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  {item.lines.map((line, i) =>
                    typeof line === "string" ? (
                      <p key={i} style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        {line}
                      </p>
                    ) : (
                      <p key={i}>
                        <a
                          href={line.href}
                          target={line.href.startsWith("http") ? "_blank" : undefined}
                          rel={line.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="transition-colors duration-200 hover:underline"
                          style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                        >
                          {line.text}
                        </a>
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
