import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { theme } from "../../theme/colors";

gsap.registerPlugin(ScrollTrigger);

const CuredCasesHero = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;

    if (!section || !title || !description) return;

    // Title animation with split text effect
    gsap.fromTo(title, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Description animation
    gsap.fromTo(description, 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Subtle parallax effect
    gsap.to(section, {
      y: -20,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 text-center"
      style={{ backgroundColor: theme.primary[50], willChange: 'transform' }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 
          ref={titleRef}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6"
          style={{ willChange: 'transform' }}
        >
          Before &amp; After Success Stories of{' '}
          <span style={{ color: theme.primary[600] }}>
            Homeopathy Treatment
          </span>
        </h1>
        <p 
          ref={descriptionRef}
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          style={{ willChange: 'transform' }}
        >
          At our homeopathic clinic, we believe that real results speak louder than promises. This page showcases genuine before and after transformations from patients who trusted our homeopathy treatment for long-standing, chronic, and lifestyle diseases.
        </p>

        {/* Informational block */}
        <div className="mt-10 sm:mt-14 text-left max-w-3xl mx-auto">
          {/* Intro */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8 text-center italic border-l-4 pl-4 sm:pl-6" style={{ borderColor: theme.primary[400] }}>
            Many patients come to us feeling <span className="font-semibold text-gray-800">confused, anxious, and unsure</span> — because they have tried multiple treatments without lasting relief. Showing real cured cases helps you understand:
          </p>

          {/* Bullet points */}
          <ul className="space-y-4 mb-8">
            {[
              { icon: "💡", text: "How homeopathy treatment works" },
              { icon: "🌿", text: "What type of diseases improve naturally" },
              { icon: "⏳", text: "How long chronic conditions take to show visible improvement" },
              { icon: "🏥", text: "Our clinic's expertise in complex cases" },
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 sm:gap-4 bg-white rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-sm border"
                style={{ borderColor: theme.primary[100] }}
              >
                <span className="text-xl sm:text-2xl mt-0.5 flex-shrink-0">{item.icon}</span>
                <span className="text-sm sm:text-base text-gray-700 font-medium leading-snug">{item.text}</span>
              </li>
            ))}
          </ul>

          {/* Closing statement */}
          <p
            className="text-sm sm:text-base md:text-lg font-semibold text-center py-4 px-6 rounded-2xl"
            style={{ backgroundColor: theme.primary[600], color: '#fff' }}
          >
            These transformations are proof that accurate homeopathy can lead to{' '}
            <span className="underline underline-offset-2">meaningful change</span> — inside and out.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CuredCasesHero;
