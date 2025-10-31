import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { theme } from "../../theme/colors";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const StoryCta = () => {
  const sectionRef = useRef(null);
  const shape1Ref = useRef(null);
  const shape2Ref = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const shape1 = shape1Ref.current;
    const shape2 = shape2Ref.current;
    const content = contentRef.current;
    const title = titleRef.current;
    const text = textRef.current;
    const button = buttonRef.current;

    if (!section || !content) return;

    // Floating shapes animations
    if (shape1) {
      gsap.to(shape1, {
        y: -20,
        opacity: 0.4,
        scale: 1.1,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }

    if (shape2) {
      gsap.to(shape2, {
        x: 15,
        rotation: 360,
        opacity: 0.3,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }

    // Content animations
    gsap.fromTo(content, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: content,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Title animation
    if (title) {
      gsap.fromTo(title, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Text animation
    if (text) {
      gsap.fromTo(text, 
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: text,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Button animation
    if (button) {
      gsap.fromTo(button, 
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.6,
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
      className="py-24 text-center relative overflow-hidden"
      style={{ backgroundColor: theme.primary[600], color: theme.text.white }}
      data-scroll-section
    >
      {/* Animated background shapes for depth */}
      <div
        ref={shape1Ref}
        className="absolute top-12 right-16 w-24 h-24 rounded-full"
        style={{ 
          backgroundColor: "rgba(255,255,255,0.1)",
          willChange: 'transform'
        }}
      />

      <div
        ref={shape2Ref}
        className="absolute bottom-16 left-12 w-16 h-16 rounded-full"
        style={{ 
          backgroundColor: "rgba(255,255,255,0.05)",
          willChange: 'transform'
        }}
      />

      <div
        ref={contentRef}
        className="max-w-3xl mx-auto px-4 relative z-10"
        style={{ willChange: 'transform' }}
      >
        <h2
          ref={titleRef}
          className="heading-font text-4xl md:text-5xl font-semibold mb-6"
          style={{ 
            color: theme.text.white,
            willChange: 'transform'
          }}
        >
          Your Story Could Be Next
        </h2>

        <p
          ref={textRef}
          className="text-lg md:text-xl mb-10 leading-relaxed"
          style={{ 
            color: "rgba(255,255,255,0.9)",
            willChange: 'transform'
          }}
        >
          Join the thousands who have transformed their health naturally.
          Start your healing journey today.
        </p>

        <Link to='/contact'>
          <div
            ref={buttonRef}
            className="inline-block font-medium text-lg px-8 py-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            style={{
              backgroundColor: theme.text.white,
              color: theme.primary[600],
              willChange: 'transform'
            }}
          >
            Book Your Consultation
          </div>
        </Link>
      </div>
    </section>
  );
};

export default StoryCta;
