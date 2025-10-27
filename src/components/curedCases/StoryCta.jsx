import React from "react";

const StoryCta = () => {
  return (
    <section className="bg-gradient-to-b from-green-500 to-green-300 py-24 text-center text-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Your Story Could Be Next
        </h2>
        <p className="text-lg md:text-xl mb-10 text-white/90 leading-relaxed">
          Join the thousands who have transformed their health naturally. Start your healing journey today.
        </p>
        <a
          href="#consultation"
          className="inline-block bg-white text-green-600 font-medium text-lg px-8 py-4 rounded-2xl shadow-md hover:bg-green-50 transition"
        >
          Book Your Consultation
        </a>
      </div>
    </section>
  );
};

export default StoryCta;
