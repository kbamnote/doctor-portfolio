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
    // Initialize Lenis with enhanced smoothness
    lenisRef.current = new Lenis({
      duration: 2.5,
      easing: (t) => 1 - Math.pow(1 - t, 4), // Smoother easing curve
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.8, // Reduced for smoother mouse wheel
      smoothTouch: true, // Enable smooth touch for mobile
      touchMultiplier: 1.5, // Reduced for smoother touch
      infinite: false,
      syncTouch: true, // Better touch synchronization
      touchInertiaMultiplier: 35, // Increased inertia for smoother deceleration
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