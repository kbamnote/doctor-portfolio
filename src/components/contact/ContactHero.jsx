import React from "react";

const ContactHero = () => {
  return (
    <section className="bg-[#1E3A8A] text-white text-center py-20 px-6">
      <h2 className="text-4xl md:text-5xl font-semibold mb-6">
        Book Your{" "}
        <span className="text-green-300 font-semibold">Consultation</span>
      </h2>

      <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10">
        Take the first step towards natural healing. We’re here to guide you on
        your wellness journey.
      </p>

      <button className="bg-green-400 hover:bg-green-500 text-white font-medium px-8 py-3 rounded-full transition duration-300">
        Book Now
      </button>
    </section>
  );
};

export default ContactHero;
