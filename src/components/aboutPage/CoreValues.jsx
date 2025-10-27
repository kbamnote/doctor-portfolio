import React from "react";
import { motion } from "framer-motion";
import { Heart, Target, Shield } from "lucide-react";

const CoreValues = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Empathy",
      description:
        "We listen deeply and understand your unique health story with compassion.",
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Personalized Care",
      description:
        "Every treatment plan is tailored specifically to your individual needs.",
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Holistic Healing",
      description:
        "Treating the whole person—mind, body, and spirit—not just symptoms.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-blue-900"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Core Values
        </motion.h2>

        <motion.p
          className="text-gray-600 mt-3 text-lg"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          The principles that guide every aspect of our practice.
        </motion.p>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-left hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-br from-green-400 to-green-600 w-14 h-14 flex items-center justify-center rounded-full shadow-md">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {value.title}
                </h3>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
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
