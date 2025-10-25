import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { theme, animationVariants } from "../../theme/colors";

const Footer = () => {
  const ref = useRef(null);
  const contentRef = useRef(null);
  const bottomRef = useRef(null);
  const socialRef = useRef(null);
  
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const contentInView = useInView(contentRef, { once: true, threshold: 0.3 });
  const bottomInView = useInView(bottomRef, { once: true, threshold: 0.8 });
  const socialInView = useInView(socialRef, { once: true, threshold: 0.6 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 0.8,
        ease: theme.easing.easeOut
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: theme.easing.easeOut,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const socialIconVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "backOut",
        type: "spring",
        stiffness: 200
      }
    }
  };

  const linkVariants = {
    hidden: { 
      opacity: 0, 
      x: -20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: theme.easing.easeOut
      }
    }
  };

  const bottomVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: theme.easing.easeOut,
        delay: 0.3
      }
    }
  };

  return (
    <motion.footer 
      ref={ref}
      className="text-white overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${theme.primary[900]} 0%, ${theme.primary[800]} 50%, ${theme.primary[900]} 100%)`
      }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <motion.div 
          ref={contentRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-2xl font-bold mb-4"
              style={{ color: theme.text.white }}
              whileHover={{ 
                color: theme.accent.primary,
                scale: 1.08,
                rotateY: 5,
                transition: { duration: 0.3, type: "spring" }
              }}
            >
              HomeoHeal
            </motion.h3>
            <motion.p 
              className="leading-relaxed mb-6"
              style={{ color: theme.primary[200] }}
              whileHover={{ 
                color: theme.text.white,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              Natural healing through the power of homeopathy. Your journey to wellness begins here.
            </motion.p>
            <motion.div 
              ref={socialRef}
              className="flex gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={socialInView ? "visible" : "hidden"}
            >
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" }
              ].map(({ icon: Icon, label }, index) => (
                <motion.a
                  key={label}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ backgroundColor: theme.primary[700] }}
                  variants={socialIconVariants}
                  whileHover={{ 
                    backgroundColor: theme.accent.primary,
                    scale: 1.3,
                    rotate: 10,
                    y: -5,
                    boxShadow: `0 8px 25px ${theme.accent.primary}50`,
                    transition: { duration: 0.4, type: "spring", stiffness: 300 }
                  }}
                  whileTap={{ scale: 0.85 }}
                  aria-label={label}
                  animate={{
                    y: [0, -3, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: theme.text.white }} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.h4 
              className="text-xl font-semibold mb-6"
              style={{ color: theme.text.white }}
              whileHover={{ 
                color: theme.accent.primary,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              Quick Links
            </motion.h4>
            <motion.ul 
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              animate={contentInView ? "visible" : "hidden"}
            >
              {["Home", "About Us", "Cured Cases", "Blog"].map((link, index) => (
                <motion.li
                  key={link}
                  variants={linkVariants}
                  whileHover={{ 
                    x: 8,
                    scale: 1.05,
                    transition: { duration: 0.3, type: "spring" }
                  }}
                >
                  <motion.a 
                    href="#" 
                    className="transition-colors duration-200 relative"
                    style={{ color: theme.primary[200] }}
                    whileHover={{ 
                      color: theme.text.white,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {link}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-current"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Our Services */}
          <motion.div variants={itemVariants}>
            <motion.h4 
              className="text-xl font-semibold mb-6"
              style={{ color: theme.text.white }}
              whileHover={{ 
                color: theme.accent.primary,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              Our Services
            </motion.h4>
            <motion.ul 
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              animate={contentInView ? "visible" : "hidden"}
            >
              {[
                "Chronic Disease Treatment",
                "Skin & Hair Care", 
                "Allergy Management",
                "Mental Health Support",
                "Pediatric Care"
              ].map((service, index) => (
                <motion.li
                  key={service}
                  variants={linkVariants}
                  whileHover={{ 
                    x: 8,
                    scale: 1.05,
                    transition: { duration: 0.3, type: "spring" }
                  }}
                >
                  <motion.a 
                    href="#" 
                    className="transition-colors duration-200 relative"
                    style={{ color: theme.primary[200] }}
                    whileHover={{ 
                      color: theme.text.white,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {service}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-current"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h4 
              className="text-xl font-semibold mb-6"
              style={{ color: theme.text.white }}
              whileHover={{ 
                color: theme.accent.primary,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              Contact Info
            </motion.h4>
            <motion.ul 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate={contentInView ? "visible" : "hidden"}
            >
              <motion.li 
                className="flex items-start gap-3"
                variants={linkVariants}
                whileHover={{ 
                  x: 8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -4, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <MapPin 
                    className="w-5 h-5 flex-shrink-0 mt-1" 
                    style={{ color: theme.accent.primary }}
                  />
                </motion.div>
                <motion.span 
                  style={{ color: theme.primary[200] }}
                  whileHover={{ 
                    color: theme.text.white,
                    transition: { duration: 0.3 }
                  }}
                >
                  123 Wellness Avenue<br />
                  Green Valley, CA 94000
                </motion.span>
              </motion.li>
              <motion.li 
                className="flex items-center gap-3"
                variants={linkVariants}
                whileHover={{ 
                  x: 8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Phone 
                    className="w-5 h-5 flex-shrink-0" 
                    style={{ color: theme.accent.primary }}
                  />
                </motion.div>
                <motion.a 
                  href="tel:+15551234567" 
                  className="transition-colors duration-200"
                  style={{ color: theme.primary[200] }}
                  whileHover={{ 
                    color: theme.text.white,
                    transition: { duration: 0.2 }
                  }}
                >
                  +1 (555) 123-4567
                </motion.a>
              </motion.li>
              <motion.li 
                className="flex items-center gap-3"
                variants={linkVariants}
                whileHover={{ 
                  x: 8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Mail 
                    className="w-5 h-5 flex-shrink-0" 
                    style={{ color: theme.accent.primary }}
                  />
                </motion.div>
                <motion.a 
                  href="mailto:info@homeoheal.com" 
                  className="transition-colors duration-200"
                  style={{ color: theme.primary[200] }}
                  whileHover={{ 
                    color: theme.text.white,
                    transition: { duration: 0.2 }
                  }}
                >
                  info@homeoheal.com
                </motion.a>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div 
        ref={bottomRef}
        className="border-t"
        style={{ borderColor: theme.primary[700] }}
        variants={bottomVariants}
        initial="hidden"
        animate={bottomInView ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={bottomInView ? "visible" : "hidden"}
          >
            <motion.p 
              className="text-sm"
              style={{ color: theme.primary[300] }}
              variants={itemVariants}
              whileHover={{ 
                color: theme.text.white,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              © 2025 HomeoHeal. All rights reserved.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-6 text-sm"
              variants={containerVariants}
            >
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((policy, index) => (
                <motion.a 
                  key={policy}
                  href="#" 
                  className="transition-colors duration-200 relative"
                  style={{ color: theme.primary[300] }}
                  variants={itemVariants}
                  whileHover={{ 
                    color: theme.text.white,
                    y: -3,
                    scale: 1.05,
                    transition: { duration: 0.3, type: "spring" }
                  }}
                >
                  {policy}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-current"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative floating elements */}
      <motion.div
        className="absolute top-10 right-10 w-6 h-6 rounded-full opacity-30"
        style={{ backgroundColor: theme.accent.primary }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-20 left-10 w-4 h-4 rounded-full opacity-20"
        style={{ backgroundColor: theme.primary[400] }}
        animate={{
          x: [0, 15, 0],
          opacity: [0.2, 0.6, 0.2],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </motion.footer>
  );
};

export default Footer;