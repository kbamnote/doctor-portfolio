import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { theme } from "../../theme/colors";

const OurStory = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <motion.div
          className="md:w-1/2 w-full"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1532009877282-3340270e0529?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            alt="Our Story"
            className="rounded-3xl shadow-xl w-full object-cover"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="md:w-1/2 w-full space-y-6"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6" style={{ color: theme.primary[600] }} />
            <h2 className="heading-font text-3xl md:text-4xl font-semibold text-gray-800">
              Our Story
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed text-lg">
            HomeoHeal was born from a simple yet powerful belief: that the
            human body possesses an innate ability to heal itself when given the
            right support. Founded in 2010 by Dr. Anjali Mehta, our clinic has
            grown from a small practice into a trusted haven for those seeking
            natural, holistic healthcare.
          </p>

          <p className="text-gray-600 leading-relaxed text-lg">
            Over the past 15 years, we’ve witnessed countless transformations —
            people who had lost hope finding relief, chronic conditions
            resolving naturally, and families discovering a gentler path to
            wellness. Each success story reinforces our commitment to this
            profound healing art.
          </p>

          <p className="text-gray-600 leading-relaxed text-lg">
            Today, we continue to blend classical homeopathic principles with
            contemporary understanding, ensuring every patient receives care
            that is both time-honored and forward-thinking.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
