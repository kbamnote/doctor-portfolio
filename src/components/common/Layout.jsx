import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import WhatsAppButton from './WhatsAppButton';
import { LANDING_PATH } from '../googleLanding/routes';

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  // Standalone campaign page: no site header, and its own FloatingCta
  // replaces the plain WhatsApp bubble.
  // Covers the campaign page and its thank-you page.
  const isGoogleLanding = location.pathname.startsWith(LANDING_PATH);
  const showNavbar = !isHomePage && !isGoogleLanding;

  return (
    <div className="min-h-screen">
      {/* Show navbar on all pages except home page (where it's part of the hero animation) */}
      {showNavbar && <Navbar />}

      {/* Add padding top for pages that render the fixed navbar */}
      <div className={showNavbar ? "pt-20" : ""}>
        {children}
      </div>

      {!isGoogleLanding && <WhatsAppButton />}
    </div>
  );
};

export default Layout;
