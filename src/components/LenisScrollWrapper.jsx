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
    // Initialize Lenis
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
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
    <div className="h-full overflow-hidden">
      {children}
    </div>
  );
};

export default LenisScrollWrapper;