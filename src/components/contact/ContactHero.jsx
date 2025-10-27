import React from "react";
import { theme } from "../../theme/colors";

const ContactHero = () => {
  return (
    <section className="bg-[#173E8F] text-white text-center py-20 px-6">
      <h2 className="heading-font text-4xl md:text-5xl font-semibold mb-6">
        Book Your{" "}
        <span className="font-semibold" style={{ color: theme.primary[300] }}>Consultation</span>
      </h2>

      <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10">
        Take the first step towards natural healing. We’re here to guide you on
        your wellness journey.
      </p>

      <button 
        className="text-white font-medium px-8 py-3 rounded-full transition duration-300"
        style={{ backgroundColor: theme.primary[400] }}
        onMouseEnter={(e) => e.target.style.backgroundColor = theme.primary[500]}
        onMouseLeave={(e) => e.target.style.backgroundColor = theme.primary[400]}
      >
        Book Now
      </button>
    </section>
  );
};

export default ContactHero;
