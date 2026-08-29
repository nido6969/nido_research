'use client';
import React from 'react';
import { Sprout } from 'lucide-react';

export default function TrustBar() {
  return (
    <section style={{
      backgroundColor: '#FAF3E2',
      borderTop: '1px solid #ECE7DF',
      borderBottom: '1px solid #ECE7DF',
      padding: '1.4rem 0'
    }}>
      <div className="container-standard">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          
          {/* Left: Brand Value Statement */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: '#EEF4F0',
              border: '1px solid #D6E4DB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#234338',
              flexShrink: 0,
              transition: 'transform 0.2s ease'
            }}>
              <Sprout size={20} color="#234338" />
            </div>

            <div>
              <div style={{
                fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#1A1714',
                lineHeight: 1.15
              }}>
                Rooted in Montessori.<br />
                <span style={{ fontWeight: 600 }}>Driven by Research.</span>
              </div>
            </div>
          </div>

          {/* Center: Advisory & Standards Message */}
          <div style={{
            fontSize: '0.85rem',
            color: '#5C564E',
            maxWidth: '440px',
            lineHeight: 1.45
          }}>
            Our research is guided by Montessori principles and global standards from <strong>AMI</strong> and <strong>IMF</strong>.
          </div>

          {/* Right: AMI & IMF Logos / Emblems */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.75rem'
          }}>
            {/* AMI (Association Montessori Internationale) Emblem */}
            <div 
              style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', cursor: 'default', transition: 'transform 0.2s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
            >
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                border: '2px solid #234338',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: '0.85rem',
                color: '#234338'
              }}>
                AMI
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.04em', color: '#1A1714' }}>
                  ASSOCIATION
                </span>
                <span style={{ fontSize: '0.58rem', color: '#888075', letterSpacing: '0.02em' }}>
                  MONTESSORI INTERNATIONALE
                </span>
              </div>
            </div>

            <div style={{ width: '1px', height: '26px', backgroundColor: '#DDD6CA' }} />

            {/* IMF (International Montessori Federation) Emblem */}
            <div 
              style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', cursor: 'default', transition: 'transform 0.2s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
            >
              <div style={{
                fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: '1.3rem',
                color: '#1A1714',
                fontStyle: 'italic',
                letterSpacing: '-0.02em',
                lineHeight: 1
              }}>
                imf
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.04em', color: '#1A1714' }}>
                  INTERNATIONAL
                </span>
                <span style={{ fontSize: '0.58rem', color: '#888075', letterSpacing: '0.02em' }}>
                  MONTESSORI FEDERATION
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
