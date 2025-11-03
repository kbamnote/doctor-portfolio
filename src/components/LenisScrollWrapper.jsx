import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const LenisScrollWrapper = ({ children }) => {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    // Detect if device is mobile/tablet
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     window.innerWidth <= 768;

    // Initialize Lenis with device-specific settings
    lenisRef.current = new Lenis({
      duration: isMobile ? 1.2 : 2.5, // Reduced duration for mobile
      easing: isMobile ? (t) => t : (t) => 1 - Math.pow(1 - t, 4), // Simpler easing for mobile
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.8, // For desktop mouse wheel
      smoothTouch: isMobile ? false : true, // Disable smooth touch on mobile to reduce lag
      touchMultiplier: isMobile ? 0.8 : 1.5, // Reduced touch sensitivity for mobile
      infinite: false,
      syncTouch: isMobile ? false : true, // Disable sync touch on mobile
      touchInertiaMultiplier: isMobile ? 15 : 35, // Reduced inertia for mobile
    });

    // Connect Lenis scroll events to GSAP ScrollTrigger
    lenisRef.current.on('scroll', (e) => {
      ScrollTrigger.update();
    });

    // Animation loop
    const raf = (time) => {
      lenisRef.current?.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    // Update ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }

      window.removeEventListener('resize', handleResize);
      ScrollTrigger.killAll();
    };
  }, []);

  // Expose Lenis instance for external use
  useEffect(() => {
    if (lenisRef.current) {
      window.lenis = lenisRef.current;
    }

    return () => {
      if (window.lenis) {
        delete window.lenis;
      }
    };
  }, []);

  return (
    <div className="h-full">
      {children}
    </div>
  );
};

export default LenisScrollWrapper;