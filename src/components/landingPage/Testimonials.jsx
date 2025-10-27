import React from "react";
import { Star, Quote } from "lucide-react";
import { theme } from "../../theme/colors";

const testimonials = [
  {
    name: "Sarah Mitchell",
    condition: "Chronic Anxiety",
    quote: "After years of medication, I found peace through homeopathy. My life has transformed completely.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "David Chen",
    condition: "Skin Allergies",
    quote: "The natural approach worked when nothing else did. I'm finally comfortable in my own skin.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Priya Sharma",
    condition: "Digestive Issues",
    quote: "Gentle yet powerful healing. I wish I had discovered homeopathy sooner in my journey.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
];

const Testimonials = () => {
  return (
    <section 
      className="py-16 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: theme.background.secondary }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: theme.text.primary }}
          >
            What Our Patients Say
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: theme.text.secondary }}
          >
            Real experiences from patients who found healing through homeopathy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial cards without animations */}
          <div 
            className="p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            style={{ backgroundColor: theme.background.primary }}
          >
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-current" 
                    style={{ color: theme.accent.primary }} 
                  />
                ))}
              </div>
            </div>
            <Quote 
              className="w-8 h-8 mb-4 opacity-20" 
              style={{ color: theme.primary[600] }} 
            />
            <p 
              className="text-base mb-6 leading-relaxed"
              style={{ color: theme.text.secondary }}
            >
              "Dr. Singh's homeopathic treatment completely transformed my health. 
              After years of conventional medicine, I finally found lasting relief."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <h4 className="font-semibold" style={{ color: theme.text.primary }}>
                  Sarah Johnson
                </h4>
                <p className="text-sm" style={{ color: theme.text.secondary }}>
                  Chronic Pain Patient
                </p>
              </div>
            </div>
          </div>

          {/* Additional testimonial cards... */}
          <div 
            className="p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            style={{ backgroundColor: theme.background.primary }}
          >
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-current" 
                    style={{ color: theme.accent.primary }} 
                  />
                ))}
              </div>
            </div>
            <Quote 
              className="w-8 h-8 mb-4 opacity-20" 
              style={{ color: theme.primary[600] }} 
            />
            <p 
              className="text-base mb-6 leading-relaxed"
              style={{ color: theme.text.secondary }}
            >
              "The personalized approach and gentle remedies helped me overcome 
              anxiety without any side effects. Highly recommended!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <h4 className="font-semibold" style={{ color: theme.text.primary }}>
                  Michael Chen
                </h4>
                <p className="text-sm" style={{ color: theme.text.secondary }}>
                  Anxiety Recovery
                </p>
              </div>
            </div>
          </div>

          <div 
            className="p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            style={{ backgroundColor: theme.background.primary }}
          >
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-current" 
                    style={{ color: theme.accent.primary }} 
                  />
                ))}
              </div>
            </div>
            <Quote 
              className="w-8 h-8 mb-4 opacity-20" 
              style={{ color: theme.primary[600] }} 
            />
            <p 
              className="text-base mb-6 leading-relaxed"
              style={{ color: theme.text.secondary }}
            >
              "Amazing results for my digestive issues. Dr. Singh's holistic 
              approach addressed the root cause, not just symptoms."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <h4 className="font-semibold" style={{ color: theme.text.primary }}>
                  Emma Wilson
                </h4>
                <p className="text-sm" style={{ color: theme.text.secondary }}>
                  Digestive Health
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;