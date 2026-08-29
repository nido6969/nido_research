import React from 'react';

export default function NidoLogo({ size = 'medium', className = '', style = {} }) {
  const heights = {
    small: '42px',
    medium: '52px',
    large: '72px',
    xlarge: '92px'
  };

  const height = typeof size === 'number' ? `${size}px` : (heights[size] || heights.medium);

  return (
    <div 
      className={`nido-brand-logo ${className}`.trim()}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: 'transparent',
        userSelect: 'none',
        ...style
      }}
    >
      <img 
        src="/images/logo-transparent.png" 
        alt="Nido Research Institute — Understanding Childhood. Nurturing Tomorrow."
        style={{
          height: height,
          width: 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
          display: 'block',
          background: 'transparent',
          border: 'none',
          boxShadow: 'none',
          mixBlendMode: 'multiply'
        }}
      />
    </div>
  );
}
