/**
 * Application Constants and Utilities
 */

/** Animation curves */
export const TRANSITIONS = {
  /** Apple-style spring transition */
  SPRING: {
    type: 'spring',
    stiffness: 300,
    damping: 30,
  },
  /** Smooth ease transition */
  SMOOTH: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  /** Quick ease transition */
  QUICK: 'all 0.2s ease',
};

/** Common border radiuses in rem */
export const BORDER_RADIUS = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '0.75rem',   // 12px
  lg: '1rem',      // 16px
  xl: '1.5rem',    // 24px
  circle: '50%',
};

/** Common spacing values in rem */
export const SPACING = {
  xs: '0.5rem',    // 8px
  sm: '1rem',      // 16px
  md: '1.5rem',    // 24px
  lg: '2rem',      // 32px
  xl: '3rem',      // 48px
};

/** Common z-index values */
export const Z_INDEX = {
  header: 1100,
  modal: 1300,
  tooltip: 1400,
  toast: 1500,
};

/** Common breakpoints in pixels */
export const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

/** Common shadows with alpha values */
export const SHADOWS = {
  light: {
    sm: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.05)',
    md: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)',
    lg: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
    xl: '0 1rem 2rem rgba(0, 0, 0, 0.2)',
  },
  dark: {
    sm: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.2)',
    md: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.3)',
    lg: '0 0.5rem 1rem rgba(0, 0, 0, 0.4)',
    xl: '0 1rem 2rem rgba(0, 0, 0, 0.5)',
  },
};

/** Common backdrop filters */
export const BACKDROP_FILTERS = {
  sm: 'blur(0.25rem)',
  md: 'blur(0.5rem)',
  lg: 'blur(1rem)',
};

/** Common alpha values for colors */
export const ALPHA = {
  light: {
    hover: 0.05,
    selected: 0.1,
    disabled: 0.3,
    divider: 0.12,
  },
  dark: {
    hover: 0.1,
    selected: 0.2,
    disabled: 0.3,
    divider: 0.12,
  },
};

/** Common gradients */
export const GRADIENTS = {
  light: {
    text: 'linear-gradient(to right, #000, rgba(0, 0, 0, 0.7))',
    background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.02))',
  },
  dark: {
    text: 'linear-gradient(to right, #fff, rgba(255, 255, 255, 0.7))',
    background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
  },
};

/** Common font sizes with clamp */
export const FONT_SIZES = {
  h1: 'clamp(2rem, 5vw, 3rem)',
  h2: 'clamp(1.5rem, 4vw, 2.5rem)',
  h3: 'clamp(1.25rem, 3vw, 2rem)',
  h4: 'clamp(1.125rem, 2.5vw, 1.75rem)',
  h5: 'clamp(1rem, 2vw, 1.5rem)',
  h6: 'clamp(0.875rem, 1.5vw, 1.25rem)',
  body1: 'clamp(1rem, 2vw, 1.125rem)',
  body2: 'clamp(0.875rem, 1.5vw, 1rem)',
  caption: 'clamp(0.4rem, .5rem, 0.6rem)',
}; 