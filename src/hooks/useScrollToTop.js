import { useCallback } from 'react';

/**
 * Custom hook for scrolling to top that works with Lenis smooth scrolling
 * @param {boolean} immediate - Whether to scroll immediately without animation
 * @returns {Function} scrollToTop function
 */
const useScrollToTop = (immediate = true) => {
  const scrollToTop = useCallback(() => {
    // Multiple fallback strategies to ensure scroll to top works
    const scrollStrategies = [
      // Strategy 1: Use Lenis if available
      () => {
        if (window.lenis && typeof window.lenis.scrollTo === 'function') {
          window.lenis.scrollTo(0, { immediate });
          return true;
        }
        return false;
      },
      
      // Strategy 2: Native window.scrollTo
      () => {
        try {
          window.scrollTo({ 
            top: 0, 
            left: 0, 
            behavior: immediate ? 'auto' : 'smooth' 
          });
          return true;
        } catch (error) {
          return false;
        }
      },
      
      // Strategy 3: Fallback for older browsers
      () => {
        try {
          window.scrollTo(0, 0);
          return true;
        } catch (error) {
          return false;
        }
      },
      
      // Strategy 4: Document element scroll
      () => {
        try {
          if (document.documentElement) {
            document.documentElement.scrollTop = 0;
          }
          if (document.body) {
            document.body.scrollTop = 0;
          }
          return true;
        } catch (error) {
          return false;
        }
      }
    ];

    // Try each strategy until one succeeds
    for (const strategy of scrollStrategies) {
      if (strategy()) {
        break;
      }
    }
  }, [immediate]);

  return scrollToTop;
};

export default useScrollToTop;