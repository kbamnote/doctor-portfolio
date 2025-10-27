import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { theme } from "../../theme/colors";

const OurStory = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-8 sm:gap-12"
        >
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Dr. Sarah Johnson"
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Our Story
            </h2>
            <div className="space-y-3 sm:space-y-4 text-gray-600">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Dr. Sarah Johnson's journey into homeopathy began over 15 years ago when she witnessed the profound healing power of natural medicine in her own family.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                After completing her medical degree and specializing in homeopathic medicine, she founded this practice with a simple mission: to provide personalized, natural healthcare that treats the whole person, not just the symptoms.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Today, our clinic has helped over 2,000 patients achieve lasting health and wellness through individualized treatment plans and compassionate care.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
