'use client';

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

const StyledBox = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
  opacity: theme.palette.mode === 'dark' ? 0.05 : 0.1,
  transition: 'opacity 0.3s ease-in-out',
  pointerEvents: 'none',
}));

export default function BackgroundLogo() {
  return (
    <StyledBox>
      <Image
        src="/as_logo.svg"
        alt="Background Logo"
        fill
        style={{
          objectFit: 'contain',
          objectPosition: 'center',
        }}
        priority
      />
    </StyledBox>
  );
} 