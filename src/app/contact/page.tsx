'use client';

import { Box, Container, Typography, Button, Stack, useTheme } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { styled } from '@mui/material/styles';
import { motion, HTMLMotionProps } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import { Theme } from '@mui/material/styles';
import { ReactElement } from 'react';

interface ContactButtonProps {
  href: string;
  target?: string;
  rel?: string;
}

const ContactButton = styled(Button)<ContactButtonProps>(({ theme }) => ({
  width: '100%',
  justifyContent: 'flex-start',
  padding: theme.spacing(3),
  borderRadius: '24px',
  backgroundColor: theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.1)'}`,
  boxShadow: theme.palette.mode === 'dark'
    ? '0 10px 20px rgba(0, 0, 0, 0.3)'
    : '0 10px 20px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 15px 30px rgba(0, 0, 0, 0.4)'
      : '0 15px 30px rgba(0, 0, 0, 0.15)',
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.08)'
      : 'rgba(255, 255, 255, 0.9)',
  },
}));

const MotionStack = motion(Stack);

interface Contact {
  icon: ReactElement;
  label: string;
  href: string;
  color: string | ((theme: Theme) => string);
  description: string;
}

const contacts: Contact[] = [
  {
    icon: <TelegramIcon />,
    label: 'Telegram',
    href: 'https://t.me/ArtemSkachko',
    color: '#0088cc',
    description: 'Quick responses, available 24/7'
  },
  {
    icon: <WhatsAppIcon />,
    label: 'WhatsApp',
    href: 'https://wa.me/+380991153048',
    color: '#25D366',
    description: 'Business inquiries welcome'
  },
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/art-skachko',
    color: '#0A66C2',
    description: 'Professional network & updates'
  },
  {
    icon: <FacebookIcon />,
    label: 'Facebook',
    href: 'https://facebook.com/art.skachko',
    color: '#1877F2',
    description: 'Connect on social media'
  },
  {
    icon: <PhoneIphoneIcon />,
    label: '+380-99-115-30-48',
    href: 'tel:+380991153048',
    color: (theme: Theme) => theme.palette.primary.main,
    description: 'Direct phone calls'
  },
  {
    icon: <AlternateEmailIcon />,
    label: 'as.skachko@gmail.com',
    href: 'mailto:as.skachko@gmail.com',
    color: (theme: Theme) => theme.palette.primary.main,
    description: 'Email correspondence'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
    }
  },
};

export default function ContactPage() {
  const theme = useTheme();

  return (
    <PageTransition>
      <Container maxWidth="md">
        <Box sx={{ 
          py: { xs: 4, md: 8 },
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography 
                variant="h3" 
                component="h1" 
                gutterBottom
                sx={{
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(to right, #fff, rgba(255, 255, 255, 0.7))'
                    : 'linear-gradient(to right, #000, rgba(0, 0, 0, 0.7))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                }}
              >
                Get in Touch
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary"
                sx={{
                  maxWidth: '600px',
                  mx: 'auto',
                  px: 2,
                  opacity: 0.8
                }}
              >
                Choose your preferred way to connect. I'm always open to discussing new projects, 
                creative ideas, or opportunities to be part of your visions.
              </Typography>
            </Box>
          </motion.div>

          <MotionStack
            spacing={2}
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {contacts.map((contact, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ContactButton
                  href={contact.href}
                  {...(contact.href.startsWith('http') ? {
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  } : {})}
                >
                  <Box sx={{ 
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      gap: 2
                    }}>
                      <Box 
                        sx={{ 
                          color: typeof contact.color === 'function' 
                            ? contact.color(theme)
                            : contact.color,
                          display: 'flex',
                          alignItems: 'center',
                          '& svg': {
                            fontSize: '1.5rem',
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                          }
                        }}
                      >
                        {contact.icon}
                      </Box>
                      <Box>
                        <Typography 
                          variant="subtitle1"
                          sx={{ 
                            fontWeight: 600,
                            color: theme.palette.mode === 'dark' 
                              ? theme.palette.common.white
                              : theme.palette.common.black,
                          }}
                        >
                          {contact.label}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: theme.palette.text.secondary,
                            opacity: 0.8
                          }}
                        >
                          {contact.description}
                        </Typography>
                      </Box>
                    </Box>
                    <Box 
                      sx={{ 
                        opacity: 0,
                        transform: 'translateX(-10px)',
                        transition: 'all 0.3s ease',
                        '.MuiButton-root:hover &': {
                          opacity: 1,
                          transform: 'translateX(0)',
                        }
                      }}
                    >
                      <Typography 
                        variant="body2"
                        sx={{
                          color: typeof contact.color === 'function'
                            ? contact.color(theme)
                            : contact.color,
                          fontWeight: 600
                        }}
                      >
                        Open →
                      </Typography>
                    </Box>
                  </Box>
                </ContactButton>
              </motion.div>
            ))}
          </MotionStack>
        </Box>
      </Container>
    </PageTransition>
  );
} 