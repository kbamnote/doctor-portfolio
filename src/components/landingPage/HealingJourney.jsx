import React from "react";
import { ArrowRight, Clock, Users, Award } from "lucide-react";
import { theme } from "../../theme/colors";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "Deep consultation to understand your unique health journey and root causes.",
    icon: Clock,
  },
  {
    number: "02",
    title: "Diagnose",
    description: "Holistic assessment combining traditional wisdom with modern insights.",
    icon: Users,
  },
  {
    number: "03",
    title: "Heal",
    description: "Personalized treatment plans that work with your body's natural healing power.",
    icon: Award,
  },
];

const HealingJourney = () => {
  return (
    <section 
      className="py-16 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: theme.background.primary }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="heading-font text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: theme.text.primary }}
          >
            Your Healing Journey
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: theme.text.secondary }}
          >
            Experience personalized homeopathic care designed for your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Journey steps without animations */}
          <div className="text-center p-6 rounded-lg transition-all duration-300 hover:shadow-lg">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: theme.primary[100] }}
            >
              <Clock className="w-8 h-8" style={{ color: theme.primary[600] }} />
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: theme.text.primary }}>
              Consultation
            </h3>
            <p style={{ color: theme.text.secondary }}>
              Detailed assessment of your health concerns and medical history.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg transition-all duration-300 hover:shadow-lg">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: theme.primary[100] }}
            >
              <Users className="w-8 h-8" style={{ color: theme.primary[600] }} />
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: theme.text.primary }}>
              Treatment Plan
            </h3>
            <p style={{ color: theme.text.secondary }}>
              Customized homeopathic remedies tailored to your specific needs.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg transition-all duration-300 hover:shadow-lg">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: theme.primary[100] }}
            >
              <Award className="w-8 h-8" style={{ color: theme.primary[600] }} />
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: theme.text.primary }}>
              Recovery
            </h3>
            <p style={{ color: theme.text.secondary }}>
              Ongoing support and monitoring for optimal healing results.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: theme.primary[600], 
              color: theme.text.white 
            }}
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HealingJourney;