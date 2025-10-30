import React from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { theme } from "../../theme/colors";

const ContactInfo = () => {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6"
      style={{ backgroundColor: theme.background.secondary }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {/* ----------------- Appointment Form ----------------- */}
        <div
          className="rounded-2xl shadow-lg p-6 sm:p-8"
          style={{ backgroundColor: theme.background.primary }}
        >
          <h2
            className="heading-font text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8"
            style={{ color: theme.text.primary }}
          >
            Schedule Your Appointment
          </h2>

          <form className="space-y-4 sm:space-y-5">
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
                  placeholder="+1 (555) 123-4567"
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
                <option>Select a condition</option>
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
              className="w-full font-medium py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2 transition-all text-sm sm:text-base"
              style={{
                backgroundColor: theme.primary[600],
                color: theme.text.white,
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = theme.primary[700])
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = theme.primary[600])
              }
            >
              <Send size={18} />
              <span>Submit Appointment Request</span>
            </button>
          </form>
        </div>

        {/* ----------------- Contact Info ----------------- */}
        <div
          className="rounded-2xl shadow-lg p-6 sm:p-8"
          style={{
            background: `linear-gradient(to bottom right, ${theme.primary[500]}, ${theme.primary[400]})`,
            color: theme.text.white,
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
                lines: ["123 Wellness Avenue", "Green Valley, CA 94000"],
              },
              {
                icon: <Phone />,
                title: "Call Us",
                lines: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
              },
              {
                icon: <Mail />,
                title: "Email Us",
                lines: ["info@homeoheal.com", "appointments@homeoheal.com"],
              },
              {
                icon: <Clock />,
                title: "Working Hours",
                lines: ["Mon-Fri: 9:00 AM - 7:00 PM", "Sat: 10:00 AM - 4:00 PM"],
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
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
                  {item.lines.map((line, i) => (
                    <p key={i} style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                      {line}
                    </p>
                  ))}
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
