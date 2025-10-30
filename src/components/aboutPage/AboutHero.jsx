import React from "react";
import { motion } from "framer-motion";
import { Star, Users, HeartPulse, Briefcase } from "lucide-react";
import { theme } from "../../theme/colors";

const stats = [
  { icon: <Briefcase size={28} />, value: "15+", label: "Years Experience" },
  { icon: <Users size={28} />, value: "5000+", label: "Patients Healed" },
  { icon: <Star size={28} />, value: "95%", label: "Success Rate" },
  { icon: <HeartPulse size={28} />, value: "50+", label: "Conditions Treated" },
];

const AboutHero = () => {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden text-center"
      style={{ backgroundColor: theme.primary[50], color: theme.text.primary }}
      data-scroll-section
    >
      {/* Title Section */}
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2
          className="heading-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6"
          style={{ color: theme.text.primary }}
        >
          Our Mission: Healing Through{" "}
          <span style={{ color: theme.primary[600] }}>Trust and Nature</span>
        </h2>
        <p
          className="text-sm sm:text-base md:text-lg leading-relaxed"
          style={{ color: theme.text.secondary }}
        >
          Founded on the principle that true healing comes from within, we
          combine centuries-old homeopathic wisdom with modern understanding to
          provide compassionate, personalized care.
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="mb-2"
              style={{ color: theme.primary[600] }}
            >
              {item.icon}
            </div>
            <h3
              className="text-2xl sm:text-3xl font-semibold"
              style={{ color: theme.primary[600] }}
            >
              {item.value}
            </h3>
            <p
              className="text-xs sm:text-sm md:text-base mt-1"
              style={{ color: theme.text.secondary }}
            >
              {item.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/squared-metal.png')] opacity-5 pointer-events-none"></div>
    </section>
  );
};

export default AboutHero;
