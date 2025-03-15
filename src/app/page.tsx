'use client';

import { Box, Container, Paper, Typography, useTheme } from '@mui/material';
import PortraitSlider from '@/components/PortraitSlider';
import PageTransition from '@/components/PageTransition';
import { facts } from '@/components/FunFact';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const MotionPaper = motion(Paper);

const Counter = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();
  const theme = useTheme();

  // Преобразуем строку в число, удаляя все нецифровые символы кроме точки
  const numericValue = parseFloat(value.replace(/[^\d.]/g, ''));

  useEffect(() => {
    if (isInView) {
      controls.start({
        scale: [0.8, 1.1, 1],
        opacity: [0, 1],
        transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }
      });
    }
  }, [isInView, controls]);

  return (
    <Box ref={ref}>
      <motion.div
        animate={controls}
        style={{
          marginBottom: '8px',
          fontWeight: '600',
          fontSize: '2.5rem',
          lineHeight: 1.2,
          color: '#fff',
          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? {
            opacity: 1,
          } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {isInView ? (
            <motion.span
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              {value}
            </motion.span>
          ) : "0"}
        </motion.span>
      </motion.div>
    </Box>
  );
};

export default function Home() {
  const theme = useTheme();
  
  return (
    <PageTransition>
      <Container maxWidth="lg">
        <Box
          component="main"
          sx={{
            minHeight: '100vh',
            pt: { xs: 4, sm: 6 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <PortraitSlider />
          
          <Box 
            sx={{ 
              width: '100%', 
              mt: 6, 
              mb: 4,
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(5, 1fr)'
              },
              gap: 3
            }}
          >
            {facts.map((fact, index) => (
              <MotionPaper
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.2,
                  duration: 0.7,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                elevation={0}
                sx={{
                  p: 3,
                  minHeight: '300px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: '24px',
                  position: 'relative',
                  background: (() => {
                    // Apple-style gradients for each card
                    const gradients = [
                      'linear-gradient(135deg, #0061ff, #60efff)',
                      'linear-gradient(135deg, #ff0f7b, #f89b29)',
                      'linear-gradient(135deg, #00f2fe, #4facfe)',
                      'linear-gradient(135deg, #0ba360, #3cba92)',
                      'linear-gradient(135deg, #5f72bd, #9b23ea)',
                    ];
                    return gradients[index % gradients.length];
                  })(),
                  backdropFilter: 'blur(10px)',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 8px 32px rgba(0,0,0,0.3)'
                    : '0 8px 32px rgba(0,0,0,0.1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 12px 40px rgba(0,0,0,0.4)'
                      : '0 12px 40px rgba(0,0,0,0.15)',
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  },
                }}
              >
                <Box 
                  sx={{ 
                    mb: 2,
                    '& .MuiSvgIcon-root': {
                      fontSize: '2.5rem',
                      color: '#fff',
                      filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
                    }
                  }}
                >
                  {fact.icon}
                </Box>
                <Counter value={fact.count} />
                <Typography 
                  variant="h6" 
                  component="div" 
                  sx={{ 
                    mb: 1,
                    fontWeight: 600,
                    color: '#fff',
                    minHeight: '64px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    lineHeight: 1.3,
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  }}
                >
                  {fact.funFact}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'rgba(255,255,255,0.9)',
                    minHeight: '96px',
                    display: '-webkit-box',
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    lineHeight: 1.3,
                    mt: 'auto',
                    px: .5,
                    fontSize: '0.85rem',
                  }}
                >
                  {fact.funDescription}
                </Typography>
              </MotionPaper>
            ))}
          </Box>
        </Box>
      </Container>
    </PageTransition>
  );
}
