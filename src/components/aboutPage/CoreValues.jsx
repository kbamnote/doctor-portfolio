import React from "react";
import { motion } from "framer-motion";
import { Heart, Target, Shield } from "lucide-react";
import { theme } from "../../theme/colors";

const CoreValues = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Holistic Treatment",
      description:
        "Our patients often experience better energy in the body, improvement in sleep, balance in emotions, and relief from long-standing chronic disease discomfort because the healing happens from the inside out.",
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Personalized Treatment",
      description:
        "A fully customized healing plan. This includes proper case taking, medical history, emotional history, and psychological practices that help in finding the root cause of your chronic disease.",
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Treat the Person, Not the Symptoms",
      description:
        "By understanding all these layers, we form a complete picture of your health, enabling a long-term and natural healing experience.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Our Core Values
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These principles guide everything we do and shape the care we provide to each patient.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
  {values.map((value, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
    >
      {/* Icon Circle */}
      <div
        className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full flex items-center justify-center"
        style={{ backgroundColor: theme.accent.primary }}
      >
        <div className="text-white text-2xl sm:text-3xl flex items-center justify-center">
          {value.icon}
        </div>
      </div>

      {/* Text Content */}
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
        {value.title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
        {value.description}
      </p>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
};

export default CoreValues;
