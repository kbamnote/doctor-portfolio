import React from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { theme } from "../../theme/colors";

const ContactInfo = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {/* Appointment Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <h2 className="heading-font text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-900 mb-6 sm:mb-8">
            Schedule Your Appointment
          </h2>

          <form className="space-y-4 sm:space-y-5">
            <div>
              <label className="block text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2"
                style={{ '--tw-ring-color': theme.primary[400] }}
                onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px ${theme.primary[400]}`}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 text-sm sm:text-base"
                  style={{ '--tw-ring-color': theme.primary[400] }}
                  onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px ${theme.primary[400]}`}
                  onBlur={(e) => e.target.style.boxShadow = 'none'}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 text-sm sm:text-base"
                  style={{ '--tw-ring-color': theme.primary[400] }}
                  onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px ${theme.primary[400]}`}
                  onBlur={(e) => e.target.style.boxShadow = 'none'}
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Health Condition *
              </label>
              <select 
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2"
                style={{ '--tw-ring-color': theme.primary[400] }}
                onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px ${theme.primary[400]}`}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
              >
                <option>Select a condition</option>
                <option>Allergies</option>
                <option>Digestive Issues</option>
                <option>Stress & Anxiety</option>
                <option>Skin Conditions</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Tell Us About Your Symptoms
              </label>
              <textarea
                rows="4"
                placeholder="Please describe your symptoms and health concerns..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2"
                style={{ '--tw-ring-color': theme.primary[400] }}
                onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px ${theme.primary[400]}`}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
              />
            </div>

            <button
              type="submit"
              className="w-full text-white font-medium py-2 sm:py-3 rounded-lg flex items-center justify-center gap-2 transition-all text-sm sm:text-base"
              style={{ backgroundColor: theme.primary[500] }}
              onMouseEnter={(e) => e.target.style.backgroundColor = theme.primary[600]}
              onMouseLeave={(e) => e.target.style.backgroundColor = theme.primary[500]}
            >
              <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span className="hidden sm:inline">Submit Appointment Request</span>
              <span className="sm:hidden">Submit Request</span>
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div 
          className="rounded-2xl shadow-lg p-6 sm:p-8 text-white bg-[#35AB72]"
          // style={{ 
          //   background: `linear-gradient(to bottom, ${theme.primary[400]}, ${theme.primary[300]})` 
          // }}
        >
          <h2 className="heading-font text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <p className="mb-10" style={{ color: theme.primary[50] }}>
            Have questions? We’re here to help. Reach out to us through any of
            the following channels.
          </p>

          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <MapPin />
              </div>
              <div>
                <h4 className="font-semibold">Visit Us</h4>
                <p>123 Wellness Avenue</p>
                <p>Green Valley, CA 94000</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <Phone />
              </div>
              <div>
                <h4 className="font-semibold">Call Us</h4>
                <p>+1 (555) 123-4567</p>
                <p>+1 (555) 987-6543</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <Mail />
              </div>
              <div>
                <h4 className="font-semibold">Email Us</h4>
                <p>info@homeoheal.com</p>
                <p>appointments@homeoheal.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <Clock />
              </div>
              <div>
                <h4 className="font-semibold">Working Hours</h4>
                <p>Mon-Fri: 9:00 AM - 7:00 PM</p>
                <p>Sat: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
