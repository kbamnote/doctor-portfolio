// Centralized Color Theme Configuration
// Easy to modify for future theme changes

export const theme = {
  // Primary Colors
  primary: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  
  // Secondary Colors (Blue)
  secondary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  
  // Accent Colors
  accent: {
    green: '#10b981',
    blue: '#0ea5e9',
    purple: '#8b5cf6',
    orange: '#f59e0b',
    red: '#ef4444',
  },
  
  // Neutral Colors
  neutral: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  
  // Background Colors
  background: {
    primary: '#ffffff',
    secondary: '#f8fdf9',
    dark: '#0f172a',
    gradient: {
      primary: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
      secondary: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
      accent: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    }
  },
  
  // Text Colors
  text: {
    primary: '#111827',
    secondary: '#4b5563',
    light: '#9ca3af',
    white: '#ffffff',
    accent: '#16a34a',
  },
  
  // Animation Durations
  animation: {
    fast: '0.2s',
    normal: '0.3s',
    slow: '0.5s',
    slower: '0.8s',
    slowest: '1.2s',
  },
  
  // Animation Easings
  easing: {
    easeOut: [0.25, 0.46, 0.45, 0.94],
    easeIn: [0.55, 0.055, 0.675, 0.19],
    easeInOut: [0.645, 0.045, 0.355, 1],
    bounce: "backOut",
  }
};

// Helper function to get theme colors
export const getThemeColor = (colorPath) => {
  const keys = colorPath.split('.');
  let result = theme;
  
  for (const key of keys) {
    result = result[key];
    if (!result) return null;
  }
  
  return result;
};

// Common animation variants for framer-motion
export const animationVariants = {
  // Fade animations
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  },
  
  fadeInDown: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 }
  },
  
  fadeInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  },
  
  fadeInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  },
  
  // Scale animations
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  
  // Stagger animations
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  
  // Hover animations
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  
  tap: {
    scale: 0.95
  }
};