'use client';

import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  top: theme.spacing(2),
  right: theme.spacing(2),
  zIndex: 1000,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

interface ThemeToggleProps {
  mode: 'light' | 'dark';
  setMode: (mode: 'light' | 'dark') => void;
}

export default function ThemeToggle({ mode, setMode }: ThemeToggleProps) {
  return (
    <StyledIconButton
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      color="inherit"
    >
      {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </StyledIconButton>
  );
} 