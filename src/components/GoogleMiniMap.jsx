'use client';
import React from 'react';
import { ExternalLink, MapPin } from 'lucide-react';

export default function GoogleMiniMap({ 
  height = 180, 
  borderRadius = 10,
  showDirectLink = true,
  style = {},
  className = ''
}) {
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.8240409867994!2d78.38128!3d17.553145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f4939dc7b35%3A0x6f34635c722ee1f6!2sNido%20montessori!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin";
  const mapsUrl = "https://maps.app.goo.gl/naRP5GC3BFH92j5v6";

  return (
    <div 
      className={`google-mini-map-wrapper ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: typeof height === 'number' ? `${height}px` : height,
        borderRadius: `${borderRadius}px`,
        overflow: 'hidden',
        border: '1px solid #E5DFD5',
        backgroundColor: '#EDE8DE',
        boxShadow: '0 3px 12px rgba(24, 21, 18, 0.06)',
        ...style
      }}
    >
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{
          border: 0,
          display: 'block',
          width: '100%',
          height: '100%',
          filter: 'contrast(1.02) saturate(1.05)'
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Nido Montessori Campus Map — Bachupally, Hyderabad"
      />

      {showDirectLink && (
        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          style={{
            position: 'absolute',
            bottom: '8px',
            right: '8px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.35rem 0.65rem',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(4px)',
            color: '#234338',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.02em',
            textDecoration: 'none',
            borderRadius: '6px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
            border: '1px solid rgba(0,0,0,0.06)',
            transition: 'all 0.2s ease',
            zIndex: 2
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#234338';
            e.currentTarget.style.color = '#FFFFFF';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            e.currentTarget.style.color = '#234338';
          }}
        >
          <MapPin size={11} />
          <span>View on Google Maps</span>
          <ExternalLink size={10} />
        </a>
      )}
    </div>
  );
}
