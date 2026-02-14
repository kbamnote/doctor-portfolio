import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookOpen } from "lucide-react";
import { theme } from "../../theme/colors";

gsap.registerPlugin(ScrollTrigger);

import aboutDr from '../../assets/aboutDr.png';

const OurStory = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    const title = titleRef.current;
    const paragraphs = paragraphsRef.current?.children;

    if (!section || !image || !content || !title || !paragraphs) return;

    // Image slide-in from left with parallax effect
    gsap.fromTo(image, 
      { opacity: 0, x: -50, scale: 0.9 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Title fade-in and slide-up
    gsap.fromTo(title, 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: content,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Paragraphs staggered animation
    gsap.fromTo(paragraphs, 
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: paragraphsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Subtle parallax effect for image
    gsap.to(image, {
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
    <section ref={sectionRef} className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              ref={imageRef}
              src={aboutDr}
              alt="Dr. Guneet Singh"
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl shadow-lg"
              style={{ willChange: 'transform' }}
            />
          </div>

          {/* Content */}
          <div ref={contentRef} className="w-full md:w-1/2">
            <h2 
              ref={titleRef}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6"
              style={{ willChange: 'transform' }}
            >
              Our Story
            </h2>
            <div ref={paragraphsRef} className="space-y-3 sm:space-y-4 text-gray-600">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed" style={{ willChange: 'transform' }}>
                Millions struggle with chronic disease conditions that drain the body's energy, reduce productivity, disturb daily life, and affect emotional regulation. At our clinic, we focus on healing rather than managing symptoms, as temporary relief does not mean your disease has been cured. Holistic treatment became more meaningful when it comes to chronic diseases. where our treatment don't suppress symptom. its boost your healing mechanism.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed" style={{ willChange: 'transform' }}>
                That is why we follow a holistic treatment approach designed to nurture your mind, body, and internal healing system as one powerful unit.
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#35AB9A]">
                <h3 className="font-semibold text-lg mb-2">Our Philosophy</h3>
                <p className="text-sm sm:text-base leading-relaxed italic">
                  Every person is unique, so every treatment must be personalized according to our individual needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
