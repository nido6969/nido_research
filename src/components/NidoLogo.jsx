'use client';
import React from 'react';

export default function NidoLogo({ size = 'medium', className = '', style = {} }) {
  const dimensions = {
    small: '42px',
    medium: '56px',
    large: '84px',
    xlarge: '108px'
  };

  const dim = typeof size === 'number' ? `${size}px` : (dimensions[size] || dimensions.medium);

  const numericDims = {
    small: 42,
    medium: 56,
    large: 84,
    xlarge: 108
  };

  const dimNum = typeof size === 'number' ? size : (numericDims[size] || 56);

  return (
    <div 
      className={`nido-brand-logo ${className}`.trim()}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: dim,
        height: dim,
        borderRadius: '50%',
        overflow: 'hidden',
        background: 'transparent',
        userSelect: 'none',
        flexShrink: 0,
        ...style
      }}
    >
      <img 
        src="/images/logo.png" 
        alt="Nido Montessori Logo"
        width={dimNum}
        height={dimNum}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          borderRadius: '50%',
          mixBlendMode: 'multiply'
        }}
      />
    </div>
  );
}
