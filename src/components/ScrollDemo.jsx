import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollDemo = () => {
  const containerRef = useRef(null);
  const parallaxRef = useRef(null);
  const fadeElementsRef = useRef([]);
  const scaleElementRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const parallaxElement = parallaxRef.current;
    const fadeElements = fadeElementsRef.current;
    const scaleElement = scaleElementRef.current;

    if (!container) return;

    // Parallax effect for background image
    if (parallaxElement) {
      gsap.fromTo(parallaxElement, 
        { yPercent: -50 },
        {
          yPercent: 50,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );
    }

    // Fade in elements on scroll
    fadeElements.forEach((element, index) => {
      if (element) {
        gsap.fromTo(element,
          { 
            opacity: 0,
            y: 100
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    // Scale effect for central element
    if (scaleElement) {
      gsap.fromTo(scaleElement,
        { scale: 0.8 },
        {
          scale: 1.2,
          ease: "none",
          scrollTrigger: {
            trigger: scaleElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToFadeRefs = (el) => {
    if (el && !fadeElementsRef.current.includes(el)) {
      fadeElementsRef.current.push(el);
    }
  };

  return (
    <div className="relative">
      {/* Hero Section with Parallax */}
      <section 
        ref={containerRef}
        className="relative h-screen overflow-hidden flex items-center justify-center"
        data-scroll-section
      >
        {/* Parallax Background */}
        <div 
          ref={parallaxRef}
          className="absolute inset-0 w-full h-[120%] bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600"
          style={{ willChange: 'transform' }}
        />
        
        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <h1 
            ref={addToFadeRefs}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            Lenis Demo
          </h1>
          <p 
            ref={addToFadeRefs}
            className="text-xl md:text-2xl max-w-2xl mx-auto"
          >
            Smooth scrolling with GSAP ScrollTrigger integration
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-white" data-scroll-section>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div ref={addToFadeRefs}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Buttery Smooth Scrolling
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Experience the difference with Lenis - a lightweight, modern smooth scrolling library 
                that provides the perfect balance between performance and visual appeal.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Lightweight and performant</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">GSAP ScrollTrigger integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Mobile and desktop optimized</span>
                </div>
              </div>
            </div>
            
            <div 
              ref={scaleElementRef}
              className="relative"
            >
              <div className="w-full h-80 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-xl font-semibold">Scaling on Scroll</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery with Stagger Animation */}
      <section className="py-20 bg-gray-50" data-scroll-section>
        <div className="max-w-6xl mx-auto px-4">
          <h2 
            ref={addToFadeRefs}
            className="text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Parallax Gallery
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <div 
                key={item}
                ref={addToFadeRefs}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <div className="w-full h-64 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">🎨</div>
                      <p className="text-lg font-semibold">Image {item}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="py-20 bg-gray-900 text-white" data-scroll-section>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 
            ref={addToFadeRefs}
            className="text-4xl font-bold mb-6"
          >
            Ready to Experience Smooth Scrolling?
          </h2>
          <p 
            ref={addToFadeRefs}
            className="text-xl text-gray-300 mb-8"
          >
            Lenis provides the perfect foundation for modern web experiences with 
            seamless GSAP integration and optimal performance.
          </p>
          <button 
            ref={addToFadeRefs}
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300"
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default ScrollDemo;