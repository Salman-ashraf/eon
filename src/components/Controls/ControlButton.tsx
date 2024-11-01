/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import { ButtonBase } from '@mui/material';

interface ControlButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  'aria-label': string;
}

const ControlButton: React.FC<ControlButtonProps> = ({ onClick, children, 'aria-label': ariaLabel }) => {
  return (
    <ButtonBase
      onClick={onClick}
      aria-label={ariaLabel}
      sx={{
        display: 'flex',
        minHeight: '32px',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4px',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
        },
        '&:focus': {
          outline: 'none',
          boxShadow: '0 0 0 2px rgba(64, 200, 224, 0.5)',
        },
      }}
    >
      {children}
    </ButtonBase>
  );
};

export default ControlButton;