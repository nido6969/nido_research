'use client';
import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import SpecularButton from './SpecularButton';
import BorderGlow from './BorderGlow';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 5000);
    }
  };

  return (
    <section style={{
      padding: '2rem 0 4.5rem 0',
      backgroundColor: '#FAF3E2'
    }}>
      <div className="container-standard">
        
        <BorderGlow
          borderRadius={12}
          backgroundColor="#234338"
          glowColor="42 80 80"
          glowRadius={36}
          colors={['#DDBB7B', '#2E6351', '#FFE39B']}
          fillOpacity={0.3}
        >
          <div style={{
            padding: '2.75rem 3.25rem',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1.5fr auto',
              gap: '2.5rem',
              alignItems: 'center'
            }} className="newsletter-grid">
              
              {/* Left Column: Heading & Subtitle */}
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: '#DDBB7B', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  STAY CURIOUS WITH US
                </div>
                <h2 style={{
                  fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                  fontSize: '2.1rem',
                  fontWeight: 500,
                  color: '#FFFFFF',
                  lineHeight: 1.2,
                  marginBottom: '0.55rem'
                }}>
                  Stay Informed
                </h2>
                <p style={{
                  fontSize: '0.92rem',
                  color: '#C6D9CE',
                  lineHeight: 1.5,
                  marginBottom: 0
                }}>
                  Subscribe for new studies, classroom observations, educator reflections and research updates from Nido Montessori.
                </p>
              </div>

              {/* Middle Column: Email Input & Subscribe Button */}
              <div>
                {isSubmitted ? (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    padding: '0.85rem 1.25rem',
                    borderRadius: '6px',
                    color: '#FFFFFF',
                    fontSize: '0.9rem'
                  }}>
                    <CheckCircle2 size={18} color="#DDBB7B" />
                    <span>Thank you for subscribing to Nido Montessori Research Updates!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div style={{
                      display: 'flex',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '6px',
                      padding: '0.28rem 0.28rem 0.28rem 0.95rem',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      alignItems: 'center'
                    }}>
                      <input 
                        type="email"
                        required
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                          flex: 1,
                          border: 'none',
                          outline: 'none',
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: '0.9rem',
                          color: '#24201C',
                          backgroundColor: 'transparent'
                        }}
                      />
                      
                      <SpecularButton
                        type="submit"
                        size="sm"
                        radius={4}
                        tint="#C99428"
                        tintOpacity={1}
                        textColor="#FFFFFF"
                        lineColor="#FFE8A3"
                        baseColor="#A57723"
                        intensity={1.6}
                        shineSize={16}
                      >
                        Subscribe
                      </SpecularButton>
                    </div>
                    <div style={{
                      fontSize: '0.74rem',
                      color: '#A5C4B4',
                      marginTop: '0.55rem'
                    }}>
                      We respect your privacy. Unsubscribe anytime.
                    </div>
                  </form>
                )}
              </div>

              {/* Right Column: Botanical Envelope Gold Line Illustration */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '85px', height: '70px', opacity: 0.9 }}>
                  <svg viewBox="0 0 100 80" fill="none" stroke="#DDBB7B" strokeWidth="1.65">
                    {/* Envelope Base */}
                    <rect x="5" y="20" width="90" height="56" rx="4" stroke="#DDBB7B" strokeWidth="1.65" />
                    {/* Envelope Flap Lines */}
                    <path d="M5 20 L50 50 L95 20" stroke="#DDBB7B" strokeWidth="1.65" />
                    <path d="M5 76 L36 46" stroke="#DDBB7B" strokeWidth="1.3" strokeOpacity="0.55" />
                    <path d="M95 76 L64 46" stroke="#DDBB7B" strokeWidth="1.3" strokeOpacity="0.55" />
                    {/* Botanical Sprout Emerging from Envelope */}
                    <path d="M50 40 C50 14, 66 6, 80 5" stroke="#DDBB7B" strokeWidth="1.65" strokeLinecap="round" />
                    <path d="M64 12 C74 10, 81 15, 80 5 C70 5, 59 8, 64 12 Z" fill="#DDBB7B" fillOpacity="0.35" />
                    <path d="M50 28 C44 18, 33 14, 24 16 C28 23, 40 23, 50 28 Z" fill="#DDBB7B" fillOpacity="0.35" stroke="#DDBB7B" strokeWidth="1.1" />
                  </svg>
                </div>
              </div>

            </div>
          </div>
        </BorderGlow>

      </div>
    </section>
  );
}
