import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { theme } from "../../theme/colors";

gsap.registerPlugin(ScrollTrigger);

const ContactHero = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtextRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtext = subtextRef.current;
    const button = buttonRef.current;

    if (!section) return;

    // Title animation
    if (title) {
      gsap.fromTo(title, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Subtext animation
    if (subtext) {
      gsap.fromTo(subtext, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtext,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Button animation
    if (button) {
      gsap.fromTo(button, 
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: 0.4,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: button,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Button hover effects
      const handleMouseEnter = () => {
        gsap.to(button, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      };

      const handleMouseLeave = () => {
        gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });
      };

      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 text-center"
      style={{ backgroundColor: theme.primary[50], color: theme.text.primary }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h1
          ref={titleRef}
          className="heading-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
          style={{ 
            color: theme.text.primary,
            willChange: 'transform'
          }}
        >
          Let's Start Your{" "}
          <span style={{ color: theme.primary[600] }}>Healing Journey</span>
        </h1>

        {/* Subtext */}
        <p
          ref={subtextRef}
          className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto"
          style={{ 
            color: theme.text.secondary,
            willChange: 'transform'
          }}
        >
          Ready to experience the gentle power of homeopathy? Schedule your
          consultation today and take the first step toward natural healing.
        </p>

        {/* Button */}
        <button
          ref={buttonRef}
          className="font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-md transition-all duration-300 text-sm sm:text-base cursor-pointer"
          style={{
            backgroundColor: theme.primary[600],
            color: theme.text.white,
            willChange: 'transform'
          }}
        >
          Book Now
        </button>
      </div>
    </section>
  );
};

export default ContactHero;
