import React from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Appointment Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-8">
            Schedule Your Appointment
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Health Condition *
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400">
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
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
            >
              <Send size={18} />
              Submit Appointment Request
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-b from-green-400 to-green-300 rounded-2xl shadow-lg p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Get In Touch
          </h2>
          <p className="mb-10 text-green-50">
            Have questions? We’re here to help. Reach out to us through any of
            the following channels.
          </p>

          <div className="space-y-6">
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
