import React from "react";
import { Shield, Heart, TrendingUp } from "lucide-react";
import { theme } from "../../theme/colors";

const features = [
  {
    icon: <Shield className="w-7 h-7 text-white" />,
    title: "Safe",
    description:
      "Non-toxic, natural remedies with no side effects. Safe for all ages, from infants to elderly.",
  },
  {
    icon: <Heart className="w-7 h-7 text-white" />,
    title: "Gentle",
    description:
      "Works with your body's natural healing mechanisms. Gentle yet profoundly effective.",
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-white" />,
    title: "Long-Lasting",
    description:
      "Addresses root causes for permanent relief. Sustainable health, not temporary fixes.",
  },
];

const WhyHomeopathy = () => {
  return (
    <section 
      className="py-16 px-6 md:px-12 lg:px-20 text-center overflow-hidden"
      style={{ background: `linear-gradient(to bottom, ${theme.neutral[50]}, ${theme.background.primary})` }}
    >
      <div>
        <h2
          className="heading-font text-3xl md:text-4xl font-semibold mb-4"
          style={{ color: theme.secondary[800] }}
        >
          Why Homeopathy?
        </h2>

        <p
          className="max-w-2xl mx-auto text-lg mb-12"
          style={{ color: theme.text.secondary }}
        >
          A holistic approach to health that treats the whole person, not just the
          disease.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl"
            style={{ backgroundColor: theme.background.primary }}
          >
            <div 
              className="rounded-full p-4 mb-5 shadow-md"
              style={{ background: theme.background.gradient.primary }}
            >
              {React.cloneElement(feature.icon, { 
                style: { color: theme.text.white },
                className: "w-7 h-7"
              })}
            </div>
            
            <h3 
              className="text-lg font-semibold mb-3"
              style={{ color: theme.text.primary }}
            >
              {feature.title}
            </h3>
            
            <p 
              className="leading-relaxed"
              style={{ color: theme.text.secondary }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyHomeopathy;
