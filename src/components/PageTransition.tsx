/**
 * PageTransition Component
 * 
 * A wrapper component that adds smooth page transition animations.
 * Uses Framer Motion for fluid animations with spring physics.
 */

'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Box } from '@mui/material';

/** Animation variants for page transitions */
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
  },
};

/** Spring transition configuration */
const pageTransition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
};

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <Box 
      component={motion.div}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      sx={{
        width: '100%',
        minHeight: '100vh',
        position: 'relative',
        transformOrigin: 'center center',
        pt: { xs: '64px', md: '72px' }, // Отступ равен высоте хедера
        pb: 4,
      }}
    >
      {children}
    </Box>
  );
} 