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
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center'
            }} className="newsletter-grid">
              
              {/* Left Column: Heading & Full Subtitle */}
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: '#DDBB7B', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  STAY CURIOUS WITH US
                </div>
                <h2 className="newsletter-heading" style={{
                  fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1.85rem, 2.7vw, 2.35rem)',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  lineHeight: 1.2,
                  marginBottom: '0.65rem'
                }}>
                  Stay Informed
                </h2>
                <div style={{
                  fontSize: '0.98rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  lineHeight: 1.45,
                  marginBottom: '0.55rem'
                }}>
                  Research should be shared, not kept behind closed doors.
                </div>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#D4E5DC',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Subscribe for new studies, classroom observations, educator reflections and research updates from Nido Montessori. If you are a research enthusiast, you don’t have to keep coming back to check what’s the new research we have come up with rather you subscribe and we notify you every time there’s a EUREKA moment with us!
                </p>
              </div>

              {/* Right Column: Integrated Subscription Card with Envelope Emblem */}
              <div>
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(221, 187, 123, 0.28)',
                  borderRadius: '12px',
                  padding: '1.75rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
                }}>
                  {/* Integrated Header: Botanical Envelope + Message */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(221, 187, 123, 0.14)',
                      border: '1px solid rgba(221, 187, 123, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <svg width="26" height="22" viewBox="0 0 100 80" fill="none" stroke="#DDBB7B" strokeWidth="2">
                        <rect x="5" y="20" width="90" height="56" rx="4" stroke="#DDBB7B" strokeWidth="2" />
                        <path d="M5 20 L50 50 L95 20" stroke="#DDBB7B" strokeWidth="2" />
                        <path d="M5 76 L36 46" stroke="#DDBB7B" strokeWidth="1.5" strokeOpacity="0.6" />
                        <path d="M95 76 L64 46" stroke="#DDBB7B" strokeWidth="1.5" strokeOpacity="0.6" />
                        <path d="M50 40 C50 14, 66 6, 80 5" stroke="#DDBB7B" strokeWidth="2" strokeLinecap="round" />
                        <path d="M64 12 C74 10, 81 15, 80 5 C70 5, 59 8, 64 12 Z" fill="#DDBB7B" fillOpacity="0.4" />
                        <path d="M50 28 C44 18, 33 14, 24 16 C28 23, 40 23, 50 28 Z" fill="#DDBB7B" fillOpacity="0.4" stroke="#DDBB7B" strokeWidth="1.2" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.94rem', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.3 }}>
                        Nido Research Updates
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#D4E5DC', lineHeight: 1.35 }}>
                        Get notified when new studies & observations publish.
                      </div>
                    </div>
                  </div>

                  {/* Form or Thank You State */}
                  {isSubmitted ? (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.12)',
                      padding: '0.85rem 1.25rem',
                      borderRadius: '8px',
                      color: '#FFFFFF',
                      fontSize: '0.9rem'
                    }}>
                      <CheckCircle2 size={18} color="#DDBB7B" />
                      <span>Thank you for subscribing to Nido Montessori Research Updates!</span>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      <div style={{
                        display: 'flex',
                        backgroundColor: '#FFFFFF',
                        borderRadius: '8px',
                        padding: '0.28rem 0.28rem 0.28rem 0.95rem',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
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
                            color: '#1A1714',
                            backgroundColor: 'transparent'
                          }}
                        />
                        <SpecularButton
                          type="submit"
                          size="sm"
                          radius={6}
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
                        fontSize: '0.76rem',
                        fontStyle: 'italic',
                        color: '#E8A33E'
                      }}>
                        We respect your privacy. Unsubscribe anytime.
                      </div>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </BorderGlow>

      </div>
    </section>
  );
}
