import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen">
      {/* Show navbar on all pages except home page (where it's part of the hero animation) */}
      {!isHomePage && <Navbar />}
      
      {/* Add padding top for non-home pages to account for fixed navbar */}
      <div className={!isHomePage ? "pt-20" : ""}>
        {children}
      </div>
    </div>
  );
};

export default Layout;