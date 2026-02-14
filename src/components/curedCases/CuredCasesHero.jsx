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
          Before & After Success Stories of{' '}
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
      </div>
    </section>
  );
};

export default CuredCasesHero;
