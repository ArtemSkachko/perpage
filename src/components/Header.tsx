/**
 * Header Component
 * 
 * Main navigation header with responsive design and theme switching.
 * Features frosted glass effect and smooth animations.
 */

'use client';

import { AppBar, Box, Container, Stack, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ModeSwitch from './ModeSwitch';

/** Styled AppBar with frosted glass effect */
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(0, 0, 0, 0.75)'
    : 'rgba(255, 255, 255, 0.75)',
  backdropFilter: 'blur(0.625rem)',
  borderBottom: `1px solid ${theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.1)'}`,
  boxShadow: 'none',
  color: theme.palette.mode === 'dark'
    ? theme.palette.common.white
    : theme.palette.common.black,
  borderRadius: 0,
}));

/** Styled navigation link */
const NavLink = styled(Link)(({ theme }) => ({
  color: theme.palette.mode === 'dark'
    ? theme.palette.common.white
    : theme.palette.common.black,
  textDecoration: 'none',
  padding: '0.5rem 0.75rem',
  borderRadius: '0.5rem',
  fontSize: '0.875rem',
  fontWeight: 500,
  transition: 'all 0.2s ease',
  position: 'relative',
  opacity: 0.8,
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.75rem',
    right: '0.75rem',
    height: '0.125rem',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '0.125rem',
    opacity: 0,
    transform: 'scaleX(0.8)',
    transition: 'all 0.2s ease',
  },
  '&:hover': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(0, 0, 0, 0.05)',
    '&::after': {
      opacity: 0.5,
      transform: 'scaleX(1)',
    },
  },
  '&[data-active="true"]': {
    opacity: 1,
    '&::after': {
      opacity: 1,
      transform: 'scaleX(1)',
    },
  },
}));

export default function Header() {
  const theme = useTheme();
  const pathname = usePathname();

  return (
    <StyledAppBar position="fixed">
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            minHeight: { xs: '4rem', md: '4.5rem' },
            py: { xs: 1, md: 1.5 },
          }}
        >
          <Link 
            href="/" 
            style={{ 
              textDecoration: 'none', 
              color: 'inherit',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <Box sx={{ 
              width: 40, 
              height: 40, 
              position: 'relative',
              filter: theme.palette.mode === 'dark' 
                ? 'drop-shadow(0 0 8px rgba(255,255,255,0.2))'
                : 'drop-shadow(0 0 8px rgba(0,0,0,0.1))',
            }}>
              <Image
                src="/as_logo.svg"
                alt="Artem Skachko Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                color: 'inherit',
              }}
            >
              Artem Skachko
            </Typography>
          </Link>

          <Stack 
            direction="row" 
            alignItems="center" 
            spacing={{ xs: 1, sm: 2 }}
          >
            <Box sx={{ display: 'flex', gap: { xs: 1, sm: 2 } }}>
              <NavLink 
                href="/resume"
                data-active={pathname === '/resume'}
              >
                Resume
              </NavLink>
              <NavLink 
                href="/contact"
                data-active={pathname === '/contact'}
              >
                Contact
              </NavLink>
            </Box>
            <ModeSwitch />
          </Stack>
        </Stack>
      </Container>
    </StyledAppBar>
  );
} 