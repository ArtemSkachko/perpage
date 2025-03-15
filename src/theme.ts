/**
 * Theme configuration for the application
 * Uses CSS variables and relative units for better responsiveness
 */

'use client';

import { createTheme, ThemeOptions } from '@mui/material/styles';
import {
  TRANSITIONS,
  BORDER_RADIUS,
  SPACING,
  SHADOWS,
  BACKDROP_FILTERS,
  ALPHA,
  GRADIENTS,
  FONT_SIZES,
} from '@/lib/constants';

/**
 * Base theme configuration shared between light and dark themes
 */
const baseTheme: ThemeOptions = {
  typography: {
    fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: FONT_SIZES.h1,
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: FONT_SIZES.h2,
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: FONT_SIZES.h3,
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: FONT_SIZES.h4,
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: FONT_SIZES.h5,
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: FONT_SIZES.h6,
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: FONT_SIZES.body1,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: FONT_SIZES.body2,
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: parseInt(BORDER_RADIUS.md),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          '--space-xs': SPACING.xs,
          '--space-sm': SPACING.sm,
          '--space-md': SPACING.md,
          '--space-lg': SPACING.lg,
          '--space-xl': SPACING.xl,
        },
        '*': {
          transition: TRANSITIONS.SMOOTH,
        },
        body: {
          transition: 'background-color 0.3s ease',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: 'none',
          borderRadius: BORDER_RADIUS.md,
          padding: `${SPACING.xs} ${SPACING.sm}`,
          fontWeight: 600,
          fontSize: FONT_SIZES.body2,
          transition: TRANSITIONS.SMOOTH,
          '&:hover': {
            transform: 'translateY(-0.125rem)',
          },
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          transition: TRANSITIONS.SMOOTH,
          borderRadius: BORDER_RADIUS.xl,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: TRANSITIONS.SMOOTH,
          borderRadius: BORDER_RADIUS.xl,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          transition: TRANSITIONS.SMOOTH,
          borderRadius: BORDER_RADIUS.xl,
        },
      },
    },
  },
};

/**
 * Light theme configuration
 */
export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#007AFF',
      light: '#47A1FF',
      dark: '#0055CB',
    },
    secondary: {
      main: '#5856D6',
      light: '#8280E0',
      dark: '#3634A8',
    },
    background: {
      default: '#F2F2F7',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: `rgba(0, 0, 0, ${ALPHA.light.disabled})`,
    },
    divider: `rgba(0, 0, 0, ${ALPHA.light.divider})`,
  },
});

/**
 * Dark theme configuration
 */
export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#0A84FF',
      light: '#47A1FF',
      dark: '#0055CB',
    },
    secondary: {
      main: '#5E5CE6',
      light: '#8280E0',
      dark: '#3634A8',
    },
    background: {
      default: '#000000',
      paper: '#1C1C1E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: `rgba(255, 255, 255, ${ALPHA.dark.disabled})`,
    },
    divider: `rgba(255, 255, 255, ${ALPHA.dark.divider})`,
  },
});
