/**
 * PortraitSlider Component
 * 
 * A responsive image slider component that displays portrait images with smooth transitions
 * and interactive controls. Features auto-play, touch/drag gestures, and responsive sizing.
 */

'use client';

import { Box, Container, Typography, Stack, Button, Link, useTheme, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

/** Portrait image paths */
const portraits = [
  '/portraits/face-0.jpg',
  '/portraits/face-1.jpg',
  '/portraits/face-2.jpg',
  '/portraits/face-3.jpg',
  '/portraits/face-4.jpg',
  '/portraits/face-5.jpg',
];

/** Styled wrapper for the slider container */
const SliderWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: 'clamp(18rem, 50vw, 31.25rem)', // 288px -> 500px
  aspectRatio: '1 / 1',
  margin: '0 auto',
}));

/** Styled container for portrait images */
const PortraitContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  overflow: 'hidden',
  boxShadow: theme.palette.mode === 'dark' 
    ? '0 0 1.875rem rgba(255, 255, 255, 0.15)'
    : '0 0 1.875rem rgba(0, 0, 0, 0.15)',
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: theme.palette.mode === 'dark'
      ? '0 0 2.5rem rgba(255, 255, 255, 0.25)'
      : '0 0 2.5rem rgba(0, 0, 0, 0.25)',
  },
}));

/** Animation variants for image transitions */
const imageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
  }),
};

/** Constants for swipe interaction */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

/** Handler for downloading resume */
const handleDownloadResume = async (setIsDownloading: (value: boolean) => void) => {
  try {
    setIsDownloading(true);
    const link = document.createElement('a');
    link.href = '/Artem_Skachko_IT_Project_Manager_2023.pdf';
    link.download = 'Artem_Skachko_IT_Project_Manager_2023.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading resume:', error);
  } finally {
    setTimeout(() => setIsDownloading(false), 1000);
  }
};

/** Main component */
export default function PortraitSlider() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);
  const theme = useTheme();

  const imageIndex = Math.abs(page % portraits.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [page, isAutoPlaying]);

  return (
    <Stack alignItems="center" spacing={3}>
      <Box
        sx={{
          position: 'relative',
          width: 'clamp(17.5rem, 45vw, 22.5rem)', // 280px -> 360px
          aspectRatio: '1 / 1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          borderRadius: '50%',
          boxShadow: theme.palette.mode === 'dark'
            ? '0 1.25rem 2.5rem rgba(0,0,0,0.4)'
            : '0 1.25rem 2.5rem rgba(0,0,0,0.15)',
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            borderRadius: '50%',
            border: `1px solid ${theme.palette.mode === 'dark'
              ? 'rgba(255, 255, 255, 0.1)'
              : 'rgba(0, 0, 0, 0.1)'}`,
          },
        }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 30 },
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          >
            <Image
              src={portraits[imageIndex]}
              alt={`Portrait ${imageIndex + 1}`}
              fill
              style={{
                objectFit: 'cover',
                borderRadius: '50%',
              }}
              sizes="(max-width: 600px) 280px, (max-width: 900px) 320px, 360px"
              priority={imageIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation dots */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '-2rem',
            display: 'flex',
            gap: '0.5rem',
            zIndex: 2,
          }}
        >
          {portraits.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: '0.375rem',
                height: '0.375rem',
                borderRadius: '50%',
                backgroundColor: index === imageIndex
                  ? theme.palette.primary.main
                  : theme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.3)'
                    : 'rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
                transform: index === imageIndex ? 'scale(1.5)' : 'scale(1)',
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Content section */}
      <Stack 
        spacing={3} 
        sx={{ 
          textAlign: 'center',
          alignItems: 'center',
          p: { xs: 2, sm: 3 },
          maxWidth: '45rem',
        }}
      >
        <Typography 
          variant="h3" 
          component="h1"
          sx={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 700,
          }}
        >
          <strong>Artem</strong> Skachko
        </Typography>
        
        <Stack spacing={2}>
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              lineHeight: 1.6,
            }}
          >
            Experienced Project Manager with over 8 years of successful digital project delivery.
            My approach is driven by the principle <strong>"There is always room for improvement"</strong>, 
            which enables me to consistently identify opportunities for process optimization and achieve 
            superior results.
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              lineHeight: 1.6,
            }}
          >
            With extensive knowledge in web development, design, and team leadership, I excel at 
            facilitating communication between all project stakeholders and making informed technical decisions. 
            My expertise lies in launching complex projects, streamlining business processes, and nurturing 
            high-performing teams.
          </Typography>
        </Stack>

        <Stack 
          direction="row" 
          spacing={2} 
          sx={{ 
            mt: 2,
            '& .MuiButton-root': {
              minWidth: '10rem',
              fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
            }
          }}
        >
          <Button
            variant="contained"
            onClick={() => handleDownloadResume(setIsDownloading)}
            disabled={isDownloading}
            startIcon={isDownloading ? <CircularProgress size={20} color="inherit" /> : null}
          >
            {isDownloading ? 'Downloading...' : 'Download CV'}
          </Button>
          <Button variant="outlined" href="/contact">
            Get in Touch
          </Button>
        </Stack>

        <Typography 
          variant="body2" 
          sx={{ 
            mt: 2,
            opacity: 0.7,
            fontSize: 'clamp(0.75rem, 1.25vw, 0.875rem)',
            transition: 'opacity 0.2s ease',
            '&:hover': {
              opacity: 1
            }
          }}
        >
          <Link href="/resume" style={{ textDecoration: 'none', color: 'inherit' }}>
            View detailed resume →
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
} 