import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const LocomotiveScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);
  const locomotiveScrollRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (scrollRef.current) {
      // Initialize Locomotive Scroll with improved configuration
      locomotiveScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        class: 'is-revealed',
        scrollbarContainer: false,
        lerp: 0.08,
        reloadOnContextChange: true,
        touchMultiplier: 2,
        smoothMobile: true,
        smartphone: {
          smooth: true,
          breakpoint: 767,
        },
        tablet: {
          smooth: true,
          breakpoint: 1024,
        },
      });

      // Update scroll on window resize with debounce
      let resizeTimeout;
      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          if (locomotiveScrollRef.current) {
            locomotiveScrollRef.current.update();
          }
        }, 150);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(resizeTimeout);
        if (locomotiveScrollRef.current) {
          locomotiveScrollRef.current.destroy();
          locomotiveScrollRef.current = null;
        }
      };
    }
  }, []);

  // Update scroll on route change
  useEffect(() => {
    if (locomotiveScrollRef.current) {
      setTimeout(() => {
        locomotiveScrollRef.current.update();
      }, 100);
    }
  }, [location.pathname]);

  // Scroll to top on route change
  useEffect(() => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.scrollTo(0, {
        duration: 0,
        disableLerp: true,
      });
    }
  }, [location.pathname]);

  return (
    <div 
      ref={scrollRef} 
      data-scroll-container
      className="locomotive-scroll-container"
      style={{
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
};

export default LocomotiveScrollWrapper;