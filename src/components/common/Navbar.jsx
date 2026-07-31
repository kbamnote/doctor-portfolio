import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import logo from '../../assets/logo.png';
import logoLandingPage from '../../assets/logoLandingPage.png';
import { theme } from '../../theme/colors';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Helper function to check if navigation item is active
  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  // Determine if we're on the landing page
  const isLandingPage = location.pathname === '/';

  if (isLandingPage) {
    // Landing page navbar (original design)
    return (
      <>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 left-0 w-full flex justify-between items-center p-4 sm:p-6 text-white z-10 bg-black/20"
          style={{ fontFamily: "'Neue Montreal', sans-serif" }}
        >
          {/* Left Logo */}
           <div 
             className="cursor-pointer flex-shrink-0"
             onClick={() => handleNavigation('/')}
           >
             <img src={logoLandingPage} alt="Logo" className="h-10 sm:h-12 w-auto" />
           </div>

          {/* Center Links - Desktop */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8 text-sm uppercase font-medium">
            <button 
              className={`hover:opacity-80 transition cursor-pointer relative ${
                isActiveRoute('/about') ? 'opacity-100' : ''
              }`}
              onClick={() => handleNavigation('/about')}
            >
              About
              {isActiveRoute('/about') && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
            <button 
              className={`hover:opacity-80 transition cursor-pointer relative ${
                isActiveRoute('/cured-cases') ? 'opacity-100' : ''
              }`}
              onClick={() => handleNavigation('/cured-cases')}
            >
              Cured Cases
              {isActiveRoute('/cured-cases') && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
            <button 
              className={`hover:opacity-80 transition cursor-pointer relative ${
                isActiveRoute('/blogs') ? 'opacity-100' : ''
              }`}
              onClick={() => handleNavigation('/blogs')}
            >
              Blogs
              {isActiveRoute('/blogs') && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          </div>

          {/* Right Contact - Desktop Only */}
          <div className="flex items-center gap-4">
            <button 
              className="hidden lg:block text-xs sm:text-sm font-semibold uppercase hover:opacity-80 transition cursor-pointer"
              onClick={() => handleNavigation('/contact')}
            >
              Contact Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <motion.span
              className="w-6 h-0.5 bg-white block"
              animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white block"
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white block"
              animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </motion.nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-full h-screen bg-black/95 z-50 lg:hidden"
              style={{ fontFamily: "'Neue Montreal', sans-serif" }}
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="absolute top-6 right-6 text-white hover:opacity-80 transition-opacity"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </motion.button>

              <div className="flex flex-col items-center justify-center h-full space-y-8 text-white">
                <button 
                  className={`text-2xl uppercase font-medium hover:opacity-80 transition relative ${
                    isActiveRoute('/about') ? 'opacity-100' : ''
                  }`}
                  onClick={() => handleNavigation('/about')}
                >
                  About
                  {isActiveRoute('/about') && (
                    <motion.div
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
                <button 
                  className={`text-2xl uppercase font-medium hover:opacity-80 transition relative ${
                    isActiveRoute('/cured-cases') ? 'opacity-100' : ''
                  }`}
                  onClick={() => handleNavigation('/cured-cases')}
                >
                  Cured Cases
                  {isActiveRoute('/cured-cases') && (
                    <motion.div
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
                <button 
                  className={`text-2xl uppercase font-medium hover:opacity-80 transition relative ${
                    isActiveRoute('/blogs') ? 'opacity-100' : ''
                  }`}
                  onClick={() => handleNavigation('/blogs')}
                >
                  Blogs
                  {isActiveRoute('/blogs') && (
                    <motion.div
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
                <button 
                  className={`text-2xl uppercase font-medium hover:opacity-80 transition relative ${
                    isActiveRoute('/contact') ? 'opacity-100' : ''
                  }`}
                  onClick={() => handleNavigation('/contact')}
                >
                  Contact Now
                  {isActiveRoute('/contact') && (
                    <motion.div
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Other pages navbar (new design with logo)
  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 bg-white shadow-sm z-50"
      >
        {/* Left Logo */}
         <div 
           className="flex items-center cursor-pointer flex-shrink-0"
           onClick={() => handleNavigation('/')}
         >
           <img src={logo} alt="Logo" className="h-8 sm:h-10 w-auto" />
         </div>

        {/* Center Navigation Links - Desktop */}
        <div className="hidden lg:flex space-x-6 xl:space-x-8 text-sm font-medium text-gray-700">
          <button 
            className={`transition cursor-pointer relative ${
              isActiveRoute('/about') ? 'font-semibold' : ''
            }`}
            style={{ color: isActiveRoute('/about') ? theme.primary[600] : 'rgb(55, 65, 81)' }}
            onMouseEnter={(e) => e.target.style.color = theme.primary[600]}
            onMouseLeave={(e) => e.target.style.color = isActiveRoute('/about') ? theme.primary[600] : 'rgb(55, 65, 81)'}
            onClick={() => handleNavigation('/about')}
          >
            About Us
            {isActiveRoute('/about') && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5"
                style={{ backgroundColor: theme.primary[600] }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
          <button 
            className={`transition cursor-pointer relative ${
              isActiveRoute('/cured-cases') ? 'font-semibold' : ''
            }`}
            style={{ color: isActiveRoute('/cured-cases') ? theme.primary[600] : 'rgb(55, 65, 81)' }}
            onMouseEnter={(e) => e.target.style.color = theme.primary[600]}
            onMouseLeave={(e) => e.target.style.color = isActiveRoute('/cured-cases') ? theme.primary[600] : 'rgb(55, 65, 81)'}
            onClick={() => handleNavigation('/cured-cases')}
          >
            Cured Cases
            {isActiveRoute('/cured-cases') && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5"
                style={{ backgroundColor: theme.primary[600] }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
          <button 
            className={`transition cursor-pointer relative ${
              isActiveRoute('/blogs') ? 'font-semibold' : ''
            }`}
            style={{ color: isActiveRoute('/blogs') ? theme.primary[600] : 'rgb(55, 65, 81)' }}
            onMouseEnter={(e) => e.target.style.color = theme.primary[600]}
            onMouseLeave={(e) => e.target.style.color = isActiveRoute('/blogs') ? theme.primary[600] : 'rgb(55, 65, 81)'}
            onClick={() => handleNavigation('/blogs')}
          >
            Blog
            {isActiveRoute('/blogs') && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5"
                style={{ backgroundColor: theme.primary[600] }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        </div>

        {/* Right Book Appointment Button - Desktop Only */}
        <div className="flex items-center gap-4">
          <button 
            className="hidden lg:block text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition cursor-pointer"
            style={{ backgroundColor: theme.primary[600] }}
            onMouseEnter={(e) => e.target.style.backgroundColor = theme.primary[700]}
            onMouseLeave={(e) => e.target.style.backgroundColor = theme.primary[600]}
            onClick={() => handleNavigation('/contact')}
          >
            <span className="hidden md:inline">Book Appointment</span>
            <span className="md:hidden">Book</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <motion.span
            className="w-6 h-0.5 bg-gray-700 block"
            animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-gray-700 block"
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-gray-700 block"
            animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-white z-50 lg:hidden"
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="absolute top-6 right-6 text-gray-700 hover:opacity-80 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </motion.button>

            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <button 
                className={`text-2xl font-medium transition relative ${
                  isActiveRoute('/about') 
                    ? 'font-semibold' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
                style={{ color: isActiveRoute('/about') ? theme.primary[600] : undefined }}
                onClick={() => handleNavigation('/about')}
              >
                About Us
                {isActiveRoute('/about') && (
                  <motion.div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5"
                    style={{ backgroundColor: theme.primary[600] }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
              <button 
                className={`text-2xl font-medium transition relative ${
                  isActiveRoute('/cured-cases') 
                    ? 'font-semibold' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
                style={{ color: isActiveRoute('/cured-cases') ? theme.primary[600] : undefined }}
                onClick={() => handleNavigation('/cured-cases')}
              >
                Cured Cases
                {isActiveRoute('/cured-cases') && (
                  <motion.div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5"
                    style={{ backgroundColor: theme.primary[600] }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
              <button 
                className={`text-2xl font-medium transition relative ${
                  isActiveRoute('/blogs') 
                    ? 'font-semibold' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
                style={{ color: isActiveRoute('/blogs') ? theme.primary[600] : undefined }}
                onClick={() => handleNavigation('/blogs')}
              >
                Blog
                {isActiveRoute('/blogs') && (
                  <motion.div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5"
                    style={{ backgroundColor: theme.primary[600] }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
              <button 
                className={`text-white px-8 py-3 rounded-full text-lg font-medium transition relative ${
                  isActiveRoute('/contact') ? 'ring-2 ring-offset-2' : ''
                }`}
                style={{ 
                  backgroundColor: theme.primary[600],
                  ringColor: isActiveRoute('/contact') ? theme.primary[300] : undefined
                }}
                onClick={() => handleNavigation('/contact')}
              >
                Book Appointment
                {isActiveRoute('/contact') && (
                  <motion.div
                    className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;