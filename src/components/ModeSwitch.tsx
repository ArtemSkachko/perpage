/**
 * ModeSwitch Component
 * 
 * A theme toggle button that switches between light and dark modes.
 * Features smooth transitions and hover effects.
 */

'use client';

import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import { useTheme } from './theme-provider';

/** Styled IconButton with enhanced visual feedback */
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: '0.5rem',
  borderRadius: '0.75rem',
  color: theme.palette.mode === 'dark' ? '#fff' : '#000',
  backgroundColor: theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(0, 0, 0, 0.05)',
  backdropFilter: 'blur(0.625rem)',
  border: `1px solid ${theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.1)'}`,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '& svg': {
    fontSize: '1.25rem',
    transition: 'transform 0.3s ease',
  },
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(0, 0, 0, 0.1)',
    transform: 'translateY(-0.125rem)',
    '& svg': {
      transform: 'rotate(15deg)',
    },
  },
  '&:active': {
    transform: 'translateY(0)',
  },
}));

export default function ModeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <StyledIconButton
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
    </StyledIconButton>
  );
}
