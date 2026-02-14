import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Users, HeartPulse, Briefcase } from "lucide-react";
import { theme } from "../../theme/colors";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: <Briefcase size={28} />, value: "15+", label: "Years Experience" },
  { icon: <Users size={28} />, value: "5000+", label: "Patients Healed" },
  { icon: <Star size={28} />, value: "95%", label: "Success Rate" },
  { icon: <HeartPulse size={28} />, value: "50+", label: "Conditions Treated" },
];

const AboutHero = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;
    const stats = statsRef.current?.children;

    if (!section || !title || !description || !stats) return;

    // Title fade-in and slide-up animation
    gsap.fromTo(title, 
      { opacity: 0, y: 40 },
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

    // Description fade-in and slide-up animation with stagger
    gsap.fromTo(description, 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Stats staggered animation
    gsap.fromTo(stats, 
      { opacity: 0, y: 40, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden text-center"
      style={{ backgroundColor: theme.primary[50], color: theme.text.primary }}
      data-scroll-section
    >
      {/* Title Section */}
      <div className="max-w-4xl mx-auto">
        <h2
          ref={titleRef}
          className="heading-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6"
          style={{ color: theme.text.primary, willChange: 'transform' }}
        >
          A Holistic Treatment Healing System for All Your <br/>
          <span style={{ color: theme.primary[600] }}>Chronic Diseases</span>
        </h2>
        <p
          ref={descriptionRef}
          className="text-sm sm:text-base md:text-lg leading-relaxed"
          style={{ color: theme.text.secondary, willChange: 'transform' }}
        >
          Founded on the principle that true healing comes from within, we combine centuries-old homeopathic wisdom with modern understanding to provide compassionate, personalized care.
          <br/><br/>
          We follow German methods of holistic treatment approaches to heal the body, mind, and emotions, and our treatment stimulates the internal healing system as one powerful unit, to cure your all chronic diseases.
        </p>
      </div>

      {/* Stats Section */}
      <div
        ref={statsRef}
        className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto text-center"
      >
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center" style={{ willChange: 'transform' }}>
            <div
              className="mb-2"
              style={{ color: theme.primary[600] }}
            >
              {item.icon}
            </div>
            <h3
              className="text-2xl sm:text-3xl font-semibold"
              style={{ color: theme.primary[600] }}
            >
              {item.value}
            </h3>
            <p
              className="text-xs sm:text-sm md:text-base mt-1"
              style={{ color: theme.text.secondary }}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/squared-metal.png')] opacity-5 pointer-events-none"></div>
    </section>
  );
};

export default AboutHero;
