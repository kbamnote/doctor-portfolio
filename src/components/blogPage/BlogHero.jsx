import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search } from "lucide-react";
import { theme } from "../../theme/colors";

gsap.registerPlugin(ScrollTrigger);

const BlogHero = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtextRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtext = subtextRef.current;
    const search = searchRef.current;

    if (!section || !title || !subtext || !search) return;

    // Title fade-in and slide-up animation
    gsap.fromTo(title, 
      { opacity: 0, y: 40 },
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

    // Subtext fade-in and slide-up animation
    gsap.fromTo(subtext, 
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

    // Search bar fade-in and scale animation
    gsap.fromTo(search, 
      { opacity: 0, scale: 0.9, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Subtle parallax effect for the entire section
    gsap.to(section, {
      y: -30,
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
      className="py-24 text-center"
      style={{ backgroundColor: theme.primary[50], willChange: 'transform' }}
      data-scroll-section
    >
      <div className="max-w-3xl mx-auto px-4">
        {/* Heading */}
        <h1
          ref={titleRef}
          className="heading-font text-4xl md:text-5xl font-bold mb-6"
          style={{ color: theme.text.primary, willChange: 'transform' }}
        >
          Insights on{" "}
          <span style={{ color: theme.primary[600] }}>
            Healing & Health
          </span>
        </h1>

        {/* Subtext */}
        <p
          ref={subtextRef}
          className="text-lg md:text-xl mb-10 leading-relaxed"
          style={{ color: theme.text.secondary, willChange: 'transform' }}
        >
          Expert perspectives, research updates, and practical wellness tips
          from our homeopathic physicians.
        </p>

        {/* Search Bar */}
        <div
          ref={searchRef}
          className="flex items-center justify-center rounded-full shadow-md max-w-2xl mx-auto px-4 py-3 transition-all duration-300 hover:shadow-lg"
          style={{
            backgroundColor: theme.background.primary,
            willChange: 'transform'
          }}
        >
          <Search className="w-5 h-5 mr-3" style={{ color: theme.text.secondary }} />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full outline-none text-base bg-transparent"
            style={{
              color: theme.text.primary,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
