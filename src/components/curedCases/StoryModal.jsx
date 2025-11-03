import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, Calendar, User, CheckCircle } from "lucide-react";
import { theme } from "../../theme/colors";

const StoryModal = ({ story, isOpen, onClose, lenis }) => {
  const scrollPositionRef = useRef(0);
  
  // ✅ Safari mobile compatible modal scroll control
  useEffect(() => {
    // Only run if modal is supposed to be open and story exists
    if (!isOpen || !story) return;
    
    // Detect Safari mobile
    const isSafariMobile = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    // Store current scroll position for Safari mobile
    if (isSafariMobile && window.lenis) {
      scrollPositionRef.current = window.lenis.scroll;
    } else {
      scrollPositionRef.current = window.pageYOffset || document.documentElement.scrollTop;
    }
    
    // Add CSS class to prevent scrolling
    document.body.classList.add('modal-open');
    
    // For Safari mobile, also set fixed positioning to prevent scroll issues
    if (isSafariMobile) {
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = '100%';
    }

    // Cleanup function - always remove the class and restore styles
    return () => {
      document.body.classList.remove('modal-open');
      if (isSafariMobile) {
        // Remove fixed positioning
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        
        // Restore scroll position with multiple strategies
        setTimeout(() => {
          // Strategy 1: Use Lenis if available
          if (window.lenis) {
            window.lenis.scrollTo(scrollPositionRef.current, { immediate: true });
            // Force a tiny scroll to reactivate Safari touch scrolling
            setTimeout(() => {
              window.lenis.scrollTo(scrollPositionRef.current + 1, { immediate: true });
              window.lenis.scrollTo(scrollPositionRef.current, { immediate: true });
            }, 50);
          } else {
            // Strategy 2: Native scroll restoration
            window.scrollTo(0, scrollPositionRef.current);
            // Force reflow to ensure Safari recognizes the scroll change
            document.body.offsetHeight;
            window.scrollTo(0, scrollPositionRef.current);
          }
        }, 100);
      }
    };
  }, [isOpen, story]);

  // Handle modal close when not open
  useEffect(() => {
    if (!isOpen) {
      // Detect Safari mobile
      const isSafariMobile = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      
      // Remove CSS class to restore scrolling
      document.body.classList.remove('modal-open');
      
      // Safari mobile specific restoration
      if (isSafariMobile) {
        // Remove fixed positioning
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        
        // Restore scroll position with multiple strategies
        setTimeout(() => {
          // Strategy 1: Use Lenis if available
          if (window.lenis) {
            window.lenis.scrollTo(scrollPositionRef.current, { immediate: true });
            // Force a tiny scroll to reactivate Safari touch scrolling
            setTimeout(() => {
              window.lenis.scrollTo(scrollPositionRef.current + 1, { immediate: true });
              window.lenis.scrollTo(scrollPositionRef.current, { immediate: true });
            }, 50);
          } else {
            // Strategy 2: Native scroll restoration
            window.scrollTo(0, scrollPositionRef.current);
            // Force reflow to ensure Safari recognizes the scroll change
            document.body.offsetHeight;
            window.scrollTo(0, scrollPositionRef.current);
          }
        }, 100);
      }
    }
  }, [isOpen]);
  
  if (!isOpen || !story) return null;

  // ✅ Close modal when clicking outside content
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  // ✅ Render modal using React Portal (outside main app)
  return createPortal(
    <div
      className="
        fixed inset-0 z-[9999]
        bg-black/60 backdrop-blur-sm
        flex items-center justify-center
        p-4
        animate-in fade-in duration-300
      "
      onClick={handleOverlayClick}
    >
      {/* Modal Container with Fixed Dimensions */}
      <div
        className="
          relative bg-white rounded-2xl
          w-full max-w-4xl 
          shadow-2xl
          animate-in slide-in-from-bottom-4 duration-300
        "
        style={{ 
          height: '90vh',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* ✅ Fixed Header - Non-scrollable */}
        <div
          className="
            flex-shrink-0 p-6 rounded-t-2xl text-white
            relative
          "
          style={{ 
            backgroundColor: theme.primary,
            minHeight: '120px'
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="
              absolute top-4 right-4 z-10
              bg-black/20 hover:bg-white/30 rounded-full p-2
              text-white hover:text-white transition-all duration-200
            "
          >
            <X size={20} />
          </button>

          <h2 className="text-2xl text-black font-bold mb-4 pr-12">{story.title}</h2>
          <div className="flex items-center gap-6 text-sm opacity-90">
            <div className="flex items-center gap-2 text-gray-800">
              <Calendar size={16} />
              <span>Treatment: {story.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-800">
              <User size={16} />
              <span>Age: {story.age}</span>
            </div>
          </div>
        </div>

        {/* ✅ Scrollable Content Area - This WILL scroll */}
        <div
          className="flex-1 p-6 modal-content"
          style={{
            overflow: 'auto',
            overflowY: 'scroll',
            height: 'calc(90vh - 120px)', // Explicit height calculation
            WebkitOverflowScrolling: 'touch',
            scrollBehavior: 'smooth'
          }}
          onWheel={(e) => {
            // Allow wheel events to work normally within this container
            e.stopPropagation();
          }}
        >
          {/* Story Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Patient Story
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {story.description}
            </p>
          </div>

          {/* Before/After Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-800">
                Before Treatment
              </h4>
              <div className="relative">
                <img
                  src={story.imgBefore}
                  alt="Before treatment"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                  Before
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-800">
                After Treatment
              </h4>
              <div className="relative">
                <img
                  src={story.imgAfter}
                  alt="After treatment"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                  After
                </div>
              </div>
            </div>
          </div>

          {/* Patient Journey */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Patient Journey
            </h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {story.patientJourney}
              </p>
            </div>
          </div>

          {/* Initial Symptoms */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Initial Symptoms
            </h3>
            <div className="flex flex-wrap gap-2">
              {story.initialSymptoms?.map((symptom, index) => (
                <span
                  key={index}
                  className="
                    bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm
                    border border-red-200
                  "
                >
                  {symptom}
                </span>
              ))}
            </div>
          </div>

          {/* Treatment Results */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              After Treatment Results
            </h3>
            <div className="space-y-3">
              {story.afterTreatment?.map((result, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Treatment Category */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Treatment Category
            </h3>
            <span
              className="
                inline-block px-4 py-2 rounded-full text-white font-medium
              "
              style={{ backgroundColor: theme.primary }}
            >
              {story.category}
            </span>
          </div>

       
      
        </div>
      </div>
    </div>,
    document.body
  );
};

export default StoryModal;
