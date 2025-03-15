/**
 * Footer Component
 * 
 * Displays copyright information with a modern design.
 */

'use client';

import { Box, Container, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledFooter = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '1.5rem 0',
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(0, 0, 0, 0.75)'
    : 'rgba(255, 255, 255, 0.75)',
  backdropFilter: 'blur(0.625rem)',
  borderTop: `1px solid ${theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.1)'}`,
}));

export default function Footer() {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          align="center"
          sx={{
            color: theme.palette.mode === 'dark'
              ? 'rgba(255, 255, 255, 0.7)'
              : 'rgba(0, 0, 0, 0.7)',
            fontWeight: 500,
            letterSpacing: '0.02em',
            '& strong': {
              fontWeight: 600,
              color: theme.palette.mode === 'dark'
                ? theme.palette.common.white
                : theme.palette.common.black,
            }
          }}
        >
          © {currentYear} <strong>Artem Skachko</strong>. All rights reserved.
        </Typography>
      </Container>
    </StyledFooter>
  );
} 