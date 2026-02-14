import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Heart, TrendingUp } from "lucide-react";
import { theme } from "../../theme/colors";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <Shield className="w-7 h-7 text-white" />,
    title: "Root Cause Analysis",
    description:
      "Most treatments work on symptoms. But Dr. Guneet always aim to discover why the disease started, how it progressed, and what is worse in your body.",
  },
  {
    icon: <Heart className="w-7 h-7 text-white" />,
    title: "Safe & Side-Effect Free",
    description:
      "Homeopathy is always known for being safe and gentle but only when the medicines are chosen correctly.",
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-white" />,
    title: "Chronic & Incurable Diseases",
    description:
      "Whether you are struggling with a new disease or a incurable condition that has lasted for years, personalized homeopathy helps you to regain your health.",
  },
];

const WhyHomeopathy = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;
    const cards = cardsRef.current?.children;

    if (!section || !title || !description || !cards) return;

    // Title fade-in and slide-up animation
    gsap.fromTo(title, 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Description fade-in and slide-up animation
    gsap.fromTo(description, 
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Cards staggered animation
    gsap.fromTo(cards, 
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Icon rotation animation for each card
    Array.from(cards).forEach((card, index) => {
      const icon = card.querySelector('.icon-container');
      if (icon) {
        gsap.fromTo(icon,
          { scale: 0, rotation: -180 },
          {
            scale: 1,
            rotation: 0,
            duration: 0.6,
            delay: 0.6 + index * 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
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
      className="py-16 px-6 md:px-12 lg:px-20 text-center overflow-hidden"
      style={{ background: `linear-gradient(to bottom, ${theme.neutral[50]}, ${theme.background.primary})` }}
      data-scroll-section
    >
      <div>
        <h2
          ref={titleRef}
          className="heading-font text-3xl md:text-4xl font-semibold mb-4"
          style={{ color: theme.text.primary, willChange: 'transform' }}
        >
          Why Homeopathy?
        </h2>

        <p
          ref={descriptionRef}
          className="max-w-2xl mx-auto text-lg mb-12"
          style={{ color: theme.text.secondary, willChange: 'transform' }}
        >
          A holistic approach to health that treats the whole person, not just the
          disease.
        </p>
      </div>

      <div 
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-translate-y-2"
            style={{ backgroundColor: theme.background.primary, willChange: 'transform' }}
          >
            <div 
              className="icon-container rounded-full p-4 mb-5 shadow-md"
              style={{ background: theme.background.gradient.primary, willChange: 'transform' }}
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
