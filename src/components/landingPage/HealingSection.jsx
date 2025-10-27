import React from "react";
import { Leaf, Heart, Activity } from "lucide-react";
import { theme } from "../../theme/colors";
import about from '../../assets/aboutDr.png'

const HealingSection = () => {
  return (
    <section 
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-10 overflow-hidden"
      style={{ backgroundColor: theme.background.secondary }}
    >
      {/* Left Side */}
      <div className="flex-1 max-w-xl">
        <h1
          className="heading-font text-4xl md:text-6xl font-extrabold leading-tight"
          style={{ color: theme.text.primary }}
        >
          HEALING BEGINS <br />
          <span style={{ color: theme.primary[600] }}>
            WITHIN
          </span>
        </h1>

        <p
          className="mt-6 text-lg leading-relaxed"
          style={{ color: theme.text.secondary }}
        >
          Experience the transformative power of nature. Personalized
          homeopathic care that treats the root cause, not just symptoms.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <button 
            className="font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: theme.primary[600], 
              color: theme.text.white 
            }}
          >
            Book Your Consultation
          </button>
          <button 
            className="font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            style={{ 
              border: `2px solid ${theme.primary[600]}`, 
              color: theme.primary[600],
              backgroundColor: 'transparent'
            }}
          >
            View Success Stories
          </button>
        </div>

        <div
          className="flex flex-wrap items-center gap-8 mt-10 text-base"
          style={{ color: theme.text.secondary }}
        >
          <div className="flex items-center gap-2">
            <Leaf style={{ color: theme.primary[600] }} className="w-5 h-5" />
            <span>Safe & Natural</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart style={{ color: theme.primary[600] }} className="w-5 h-5" />
            <span>Gentle Treatment</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity style={{ color: theme.primary[600] }} className="w-5 h-5" />
            <span>Long-Lasting Results</span>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative flex-1 mt-10 lg:mt-0">
        <div className="relative">
          <img
            src={about}
            alt="Doctor"
            className="w-full max-w-md lg:max-w-lg mx-auto rounded-3xl shadow-xl"
          />

          {/* Badge */}
          <div
            className="absolute bottom-4 left-4 shadow-xl rounded-2xl px-5 py-3 flex items-center gap-3"
            style={{ backgroundColor: theme.background.primary }}
          >
            <div>
              <Leaf style={{ color: theme.primary[600] }} className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-lg" style={{ color: theme.primary[600] }}>15+ Years</p>
              <p className="text-sm" style={{ color: theme.text.light }}>Healing Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealingSection;
