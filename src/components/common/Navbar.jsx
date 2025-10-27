import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import logoLandingPage from '../../assets/logoLandingPage.png';
import { theme } from '../../theme/colors';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  // Determine if we're on the landing page
  const isLandingPage = location.pathname === '/';

  if (isLandingPage) {
    // Landing page navbar (original design)
    return (
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full flex justify-between items-center p-6 text-white z-10 bg-black/20"
        style={{ fontFamily: "'Neue Montreal', sans-serif" }}
      >
        {/* Left Logo */}
         <div 
           className="cursor-pointer"
           onClick={() => handleNavigation('/')}
         >
           <img src={logoLandingPage} alt="Logo" className="h-12 w-auto" />
         </div>

        {/* Center Links */}
        <div className="hidden md:flex space-x-8 text-sm uppercase font-medium">
          <button 
            className="hover:opacity-80 transition cursor-pointer"
            onClick={() => handleNavigation('/about')}
          >
            About
          </button>
          <button 
            className="hover:opacity-80 transition cursor-pointer"
            onClick={() => handleNavigation('/cured-cases')}
          >
            Cured Cases
          </button>
          <button 
            className="hover:opacity-80 transition cursor-pointer"
            onClick={() => handleNavigation('/blogs')}
          >
            Blogs
          </button>
        </div>

        {/* Right Contact */}
        <button 
          className="text-sm font-semibold uppercase hover:opacity-80 transition cursor-pointer"
          onClick={() => handleNavigation('/contact')}
        >
          Contact Now
        </button>
      </motion.nav>
    );
  }

  // Other pages navbar (new design with logo)
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-white shadow-sm z-50"
    >
      {/* Left Logo */}
       <div 
         className="flex items-center cursor-pointer"
         onClick={() => handleNavigation('/')}
       >
         <img src={logo} alt="Logo" className="h-10 w-auto" />
       </div>

      {/* Center Navigation Links */}
      <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
        {/* <button 
          className="hover:text-green-600 transition cursor-pointer"
          onClick={() => handleNavigation('/')}
        >
          Home
        </button> */}
        <button 
          className="transition cursor-pointer"
          style={{ color: 'rgb(55, 65, 81)' }}
          onMouseEnter={(e) => e.target.style.color = theme.primary[600]}
          onMouseLeave={(e) => e.target.style.color = 'rgb(55, 65, 81)'}
          onClick={() => handleNavigation('/about')}
        >
          About Us
        </button>
        <button 
          className="transition cursor-pointer"
          style={{ color: 'rgb(55, 65, 81)' }}
          onMouseEnter={(e) => e.target.style.color = theme.primary[600]}
          onMouseLeave={(e) => e.target.style.color = 'rgb(55, 65, 81)'}
          onClick={() => handleNavigation('/cured-cases')}
        >
          Cured Cases
        </button>
        <button 
          className="transition cursor-pointer"
          style={{ color: 'rgb(55, 65, 81)' }}
          onMouseEnter={(e) => e.target.style.color = theme.primary[600]}
          onMouseLeave={(e) => e.target.style.color = 'rgb(55, 65, 81)'}
          onClick={() => handleNavigation('/blogs')}
        >
          Blog
        </button>
      </div>

      {/* Right Book Appointment Button */}
      <button 
        className="text-white px-6 py-2 rounded-full text-sm font-medium transition cursor-pointer"
        style={{ backgroundColor: theme.primary[600] }}
        onMouseEnter={(e) => e.target.style.backgroundColor = theme.primary[700]}
        onMouseLeave={(e) => e.target.style.backgroundColor = theme.primary[600]}
        onClick={() => handleNavigation('/contact')}
      >
        Book Appointment
      </button>
    </motion.nav>
  );
};

export default Navbar;