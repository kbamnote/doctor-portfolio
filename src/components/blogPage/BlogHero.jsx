import React from "react";
import { Search } from "lucide-react";
import { theme } from "../../theme/colors";
import { motion } from "framer-motion";

const BlogHero = () => {
  return (
    <section
      className="py-24 text-center"
      style={{ backgroundColor: theme.primary[50] }}
      data-scroll-section
    >
      <motion.div
        className="max-w-3xl mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Heading */}
        <h1
          className="heading-font text-4xl md:text-5xl font-bold mb-6"
          style={{ color: theme.text.primary }}
        >
          Insights on{" "}
          <span style={{ color: theme.primary[600] }}>
            Healing & Health
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="text-lg md:text-xl mb-10 leading-relaxed"
          style={{ color: theme.text.secondary }}
        >
          Expert perspectives, research updates, and practical wellness tips
          from our homeopathic physicians.
        </p>

        {/* Search Bar */}
        <div
          className="flex items-center justify-center rounded-full shadow-md max-w-2xl mx-auto px-4 py-3 transition-all duration-300"
          style={{
            backgroundColor: theme.background.primary,
          }}
        >
          <Search className="w-5 h-5 mr-3" style={{ color: theme.text.secondary }} />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full outline-none text-base bg-transparent"
            style={{
              color: theme.text.primary,
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default BlogHero;
