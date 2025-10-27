import React from "react";
import { ArrowRight, Star } from "lucide-react";
import { theme } from "../../theme/colors";

const caseStudies = [
  {
    title: "Chronic Eczema",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "Migraine Relief",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "Digestive Healing",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
];
const CaseStudies = () => {
  return (
    <section 
      className="py-16 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ backgroundColor: theme.background.secondary }}
    >
      <div>
        <h2
          className="heading-font text-3xl md:text-4xl font-semibold text-center mb-4"
          style={{ color: theme.text.primary }}
        >
          Success Stories
        </h2>

        <p
          className="text-center max-w-2xl mx-auto text-lg mb-12"
          style={{ color: theme.text.secondary }}
        >
          Real transformations from our patients who found lasting relief through
          homeopathy.
        </p>
      </div>

      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12"
      >
        {/* Replace all motion.div with regular div elements and remove all animation props */}
        {/* Keep the existing content structure but remove motion components */}
        
        {/* Case Study Cards */}
        <div
          className="rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
          style={{ backgroundColor: theme.background.primary }}
        >
          {/* Keep existing card content but remove motion wrappers */}
        </div>
        
        {/* Additional case study cards... */}
      </div>

      <div className="text-center">
        <button
          className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
          style={{ 
            backgroundColor: theme.primary[600], 
            color: theme.text.white 
          }}
        >
          View All Case Studies
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default CaseStudies;
