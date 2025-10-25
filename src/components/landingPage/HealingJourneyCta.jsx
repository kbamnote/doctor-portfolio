import React from "react";

const HealingJourneyCTA = () => {
  return (
    <section className="bg-gradient-to-br from-green-400 to-green-500 py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Let's Begin Your Healing Journey
        </h2>

        {/* Subheading */}
        <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed mb-10 max-w-3xl mx-auto">
          Take the first step towards natural, lasting wellness. Your body knows how to heal—we help it remember.
        </p>

        {/* CTA Button */}
        <button className="bg-white text-green-600 font-semibold text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
          Book an Appointment
        </button>
      </div>
    </section>
  );
};

export default HealingJourneyCTA;