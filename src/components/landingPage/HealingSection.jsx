import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leaf, Heart, Activity } from "lucide-react";
import { theme } from "../../theme/colors";
import about from '../../assets/aboutDr.png'
import { Link } from "react-router-dom";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HealingSection = () => {
  const sectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const featuresRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in and slide up animation for left content
      gsap.fromTo(leftContentRef.current, 
        { 
          opacity: 0, 
          x: -60,
          y: 30
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Staggered animation for title
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          y: 40
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Description fade in
      gsap.fromTo(descriptionRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Buttons scale and fade in
      gsap.fromTo(buttonsRef.current.children,
        {
          opacity: 0,
          y: 20,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: buttonsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Features stagger animation
      gsap.fromTo(featuresRef.current.children,
        {
          opacity: 0,
          x: -20,
          y: 10
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Right side image with parallax effect
      gsap.fromTo(rightContentRef.current,
        {
          opacity: 0,
          x: 60,
          y: 30
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rightContentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Image subtle parallax
      gsap.fromTo(imageRef.current,
        {
          y: 20,
          scale: 0.95
        },
        {
          y: -10,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1
          }
        }
      );

      // Badge animation with bounce effect
      gsap.fromTo(badgeRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.8,
          rotation: -5
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 1,
          delay: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: badgeRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-10 overflow-hidden"
      style={{ backgroundColor: theme.background.secondary }}
    >
      {/* Left Side */}
      <div 
        ref={leftContentRef}
        className="flex-1 max-w-xl"
        style={{ willChange: 'transform' }}
      >
        <h1
          ref={titleRef}
          className="heading-font text-4xl md:text-6xl font-extrabold leading-tight"
          style={{ color: theme.text.primary, willChange: 'transform' }}
        >
          HEALING BEGINS <br />
          <span style={{ color: theme.primary[600] }}>
            WITHIN
          </span>
        </h1>

        <p
          ref={descriptionRef}
          className="mt-6 text-lg leading-relaxed"
          style={{ color: theme.text.secondary, willChange: 'transform' }}
        >
          Advance German Homeopathy Methods. Experience the transformative power of nature. Personalized homeopathic care that treats the root cause, not just symptoms.
          <br/><br/>
          With 15 years of experience and case taking expertise, Dr. Guneet follows the German Method of Homeopathy, a scientific structured process that focuses on identifying the root cause of diseases instead of only treating symptoms.
        </p>

        <div 
          ref={buttonsRef}
          className="flex flex-wrap gap-4 mt-8"
          style={{ willChange: 'transform' }}
        >
          <Link to='/contact'>
          <button 
            className="font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: theme.primary[600], 
              color: theme.text.white,
              willChange: 'transform'
            }}
          >
            Book Your Consultation
          </button>
          </Link>
          <Link to='/cured-cases'>
          <button 
            className="font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            style={{ 
              border: `2px solid ${theme.primary[600]}`, 
              color: theme.primary[600],
              backgroundColor: 'transparent',
              willChange: 'transform'
            }}
          >
            View Success Stories
          </button>
          </Link>
        </div>

        <div
          ref={featuresRef}
          className="flex flex-wrap items-center gap-8 mt-10 text-base"
          style={{ color: theme.text.secondary, willChange: 'transform' }}
        >
          {[
            { icon: Leaf, text: "Safe & Natural" },
            { icon: Heart, text: "Gentle Treatment" },
            { icon: Activity, text: "Long-Lasting Results" }
          ].map((item, index) => (
            <div 
              key={item.text}
              className="flex items-center gap-2"
              style={{ willChange: 'transform' }}
            >
              <item.icon style={{ color: theme.primary[600] }} className="w-5 h-5" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div 
        ref={rightContentRef}
        className="relative flex-1 mt-10 lg:mt-0 flex justify-center lg:justify-end"
        style={{ willChange: 'transform' }}
      >
        <div className="relative inline-block">
          <img
            ref={imageRef}
            src={about}
            alt="Doctor"
            className="w-full max-w-md lg:max-w-lg rounded-3xl shadow-xl"
            style={{ willChange: 'transform', display: 'block' }}
          />

          {/* Badge */}
   <div
  ref={badgeRef}
  className="
    absolute shadow-xl rounded-2xl flex items-center gap-3
    px-5 py-3 bottom-[-2rem] left-[-5rem]
    sm:px-4 sm:py-2 sm:bottom-[-1.5rem] sm:left-[-2rem]
    max-[480px]:px-3 max-[480px]:py-1.5 max-[480px]:left-[-1rem] max-[480px]:bottom-[-0.5rem]
    max-[480px]:scale-90
  "
  style={{
    backgroundColor: theme.background.primary,
    willChange: "transform",
  }}
>
  <div>
    <Leaf
      style={{ color: theme.primary[600] }}
      className="w-6 h-6 sm:w-5 sm:h-5 max-[480px]:w-4 max-[480px]:h-4"
    />
  </div>

  <div>
    <p
      className="font-bold text-lg sm:text-base max-[480px]:text-sm"
      style={{ color: theme.primary[600] }}
    >
      15+ Years
    </p>
    <p
      className="text-sm sm:text-xs max-[480px]:text-[10px]"
      style={{ color: theme.text.light }}
    >
      Healing Excellence
    </p>
  </div>
</div>


        </div>
      </div>
    </section>
  );
};

export default HealingSection;