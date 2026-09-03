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
          gap: '2rem'
        }}>
          
          {/* Left: Brand Philosophy & Advisory Context */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flex: '1 1 440px', maxWidth: '580px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#EEF4F0',
              border: '1px solid #D6E4DB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#234338',
              flexShrink: 0,
              marginTop: '0.15rem'
            }}>
              <Sprout size={20} color="#234338" />
            </div>

            <div>
              <div style={{
                fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                fontSize: '1.18rem',
                fontWeight: 700,
                color: '#1A1714',
                lineHeight: 1.22,
                marginBottom: '0.35rem'
              }}>
                Rooted in Montessori.<br />
                <span style={{ color: '#234338', fontWeight: 600 }}>Guided by Evidence. Grounded in the Child.</span>
              </div>
              <p style={{
                fontSize: '0.86rem',
                color: '#554F47',
                lineHeight: 1.5,
                margin: 0
              }}>
                Our work draws from Montessori principles, careful observation and established research in early childhood development. We aim to ask meaningful questions without losing sight of the child behind the data.
              </p>
            </div>
          </div>

          {/* Right: AMI & IMF Official Logos & Credentials */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap'
          }}>
            {/* AMI (Association Montessori Internationale) Official Logo */}
            <a 
              href="https://montessori-ami.org"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                textDecoration: 'none',
                padding: '0.55rem 0.95rem',
                borderRadius: '10px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5DFD2',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                transition: 'all 0.2s ease'
              }}
              className="hover-lift"
              title="Association Montessori Internationale (AMI) — Global Pedagogical Standard"
            >
              <img 
                src="/images/ami-logo.svg" 
                alt="Association Montessori Internationale (AMI) Logo" 
                style={{
                  height: '46px',
                  width: 'auto',
                  display: 'block',
                  objectFit: 'contain'
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.04em', color: '#1A1714' }}>
                  ASSOCIATION
                </span>
                <span style={{ fontSize: '0.62rem', fontWeight: 600, color: '#234338', letterSpacing: '0.03em' }}>
                  MONTESSORI INTERNATIONALE
                </span>
                <span style={{ fontSize: '0.58rem', color: '#888075', letterSpacing: '0.02em' }}>
                  Global Pedagogical Standard
                </span>
              </div>
            </a>

            {/* IMF Flagship School (Indian Montessori Foundation) Official Logo */}
            <a 
              href="https://montessori-india.org"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                textDecoration: 'none',
                padding: '0.55rem 0.95rem',
                borderRadius: '10px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5DFD2',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                transition: 'all 0.2s ease'
              }}
              className="hover-lift"
              title="Indian Montessori Foundation (IMF) Flagship School"
            >
              <img 
                src="/images/imf-logo.png" 
                alt="Indian Montessori Foundation (IMF) Logo" 
                style={{
                  height: '46px',
                  width: 'auto',
                  display: 'block',
                  objectFit: 'contain'
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.04em', color: '#1A1714' }}>
                  IMF FLAGSHIP SCHOOL
                </span>
                <span style={{ fontSize: '0.62rem', fontWeight: 600, color: '#C88528', letterSpacing: '0.03em' }}>
                  INDIAN MONTESSORI FOUNDATION
                </span>
                <span style={{ fontSize: '0.58rem', color: '#888075', letterSpacing: '0.02em' }}>
                  Affiliated AMI Society India
                </span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
