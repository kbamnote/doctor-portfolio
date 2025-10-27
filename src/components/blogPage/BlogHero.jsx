import React from "react";
import { Search } from "lucide-react";

const BlogHero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-800 to-blue-700 py-24 text-center text-white">
      <div className="max-w-3xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          Insights on{" "}
          <span className="text-green-300">Healing & Health</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl mb-10 text-white/90 leading-relaxed">
          Expert perspectives, research updates, and practical wellness tips from our homeopathic physicians.
        </p>

        {/* Search Bar */}
        <div className="flex items-center justify-center bg-white rounded-full shadow-md max-w-2xl mx-auto px-4 py-3">
          <Search className="text-gray-500 w-5 h-5 mr-3" />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
