import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import PageTransition from './PageTransition';
import Layout from './Layout';
import LenisScrollWrapper from '../LenisScrollWrapper';
import LandingPage from '../landingPage/LandingPage';
import ScrollDemo from '../ScrollDemo';

// Lazy load non-critical components
const AboutPage = lazy(() => import('../aboutPage/AboutPage'));
const BlogPage = lazy(() => import('../blogPage/BlogPage'));
const ContactPage = lazy(() => import('../contact/ContactPage'));
const CuredCases = lazy(() => import('../curedCases/CuredCases'));

// Loading component for lazy-loaded routes
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
  </div>
);

// Create a wrapper component to handle transitions
const TransitionWrapper = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentContent, setCurrentContent] = useState(children);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Skip transition on first load
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }
    
    // Start transition when location changes (but not on first load)
    setIsTransitioning(true);
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleTransitionComplete = () => {
    setIsTransitioning(false);
    setCurrentContent(children);
  };

  return (
    <PageTransition 
      isTransitioning={isTransitioning} 
      onTransitionComplete={handleTransitionComplete}
    >
      {isTransitioning ? currentContent : children}
    </PageTransition>
  );
};


// Treatment Page Component
const TreatmentPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="heading-font text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Treatment Approach
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Personalized homeopathic solutions for your health journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Chronic Conditions",
                description: "Long-term health issues treated with gentle, effective remedies",
                icon: "🌿"
              },
              {
                title: "Acute Care",
                description: "Immediate relief for sudden onset symptoms and conditions",
                icon: "⚡"
              },
              {
                title: "Preventive Care",
                description: "Strengthen your immune system and prevent future illness",
                icon: "🛡️"
              }
            ].map((treatment, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 text-center">
                <div className="text-4xl mb-4">{treatment.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{treatment.title}</h3>
                <p className="text-gray-600">{treatment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};



const AppRouter = () => {
  return (
    <BrowserRouter>
      <LenisScrollWrapper>
        <Layout>
          <Routes>
            <Route path="/" element={
              <TransitionWrapper>
                <LandingPage />
              </TransitionWrapper>
            } />
            <Route path="/about" element={
              <TransitionWrapper>
                <Suspense fallback={<PageLoader />}>
                  <AboutPage/>
                </Suspense>
              </TransitionWrapper>
            } />
            <Route path="/treatment" element={
              <TransitionWrapper>
                <TreatmentPage />
              </TransitionWrapper>
            } />
            <Route path="/cured-cases" element={
              <TransitionWrapper>
                <Suspense fallback={<PageLoader />}>
                  <CuredCases/>
                </Suspense>
              </TransitionWrapper>
            } />
            <Route path="/blogs" element={
              <TransitionWrapper>
                <Suspense fallback={<PageLoader />}>
                  <BlogPage />
                </Suspense>
              </TransitionWrapper>
            } />
            <Route path="/contact" element={
              <TransitionWrapper>
                <Suspense fallback={<PageLoader />}>
                  <ContactPage />
                </Suspense>
              </TransitionWrapper>
            } />
            <Route path="/scroll-demo" element={
              <TransitionWrapper>
                <ScrollDemo />
              </TransitionWrapper>
            } />
          </Routes>
        </Layout>
      </LenisScrollWrapper>
    </BrowserRouter>
  );
};

export default AppRouter;