'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import SpecularButton from './SpecularButton';
import BorderGlow from './BorderGlow';
import Counter from './Counter';
import CursorGrid from './CursorGrid';

export default function HeroSection({ onExploreClick, onAboutClick }) {
  return (
    <section style={{
      position: 'relative',
      backgroundColor: 'var(--bg-parchment, #FAF3E2)',
      paddingTop: '3rem',
      paddingBottom: '4rem',
      overflow: 'hidden'
    }}>
      {/* Interactive CursorGrid Ambient Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'auto'
      }}>
        <CursorGrid
          cellSize={64}
          color="#C99428"
          radius={130}
          falloff="smooth"
          holdTime={350}
          fadeDuration={700}
          lineWidth={1.2}
          maxOpacity={0.65}
          fillOpacity={0.08}
          gridOpacity={0.035}
          cellRadius={4}
          clickPulse={true}
          pulseSpeed={550}
        />
      </div>

      <div className="container-standard" style={{ position: 'relative', zIndex: 2, pointerEvents: 'auto' }}>
        <div className="hero-grid-layout">
          
          {/* Left Column: Editorial Presentation */}
          <div>
            {/* All-Caps Tracked Kicker with Gold Accent */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#5A713C',
              marginBottom: '1rem'
            }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#C88528', display: 'inline-block' }}></span>
              <span>EVIDENCE. OBSERVE. NURTURE.</span>
            </div>

            {/* Huge Serif Headline */}
            <h1 style={{
              fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)',
              fontWeight: 600,
              color: '#1A1714',
              lineHeight: 1.14,
              marginBottom: '1.25rem',
              letterSpacing: '-0.025em'
            }}>
              Research for<br />
              Real Classrooms.<br />
              Real Children.
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: '1rem',
              color: '#554F47',
              lineHeight: 1.6,
              maxWidth: '510px',
              marginBottom: '2rem'
            }}>
              Nido Montessori Research Updates shares evidence-based insights from our classrooms to contribute to the global Montessori community and inspire better learning outcomes.
            </p>

            {/* Action Buttons using SpecularButton */}
            <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <SpecularButton
                size="md"
                radius={6}
                tint="#234338"
                tintOpacity={1}
                textColor="#FFFFFF"
                lineColor="#DDBB7B"
                baseColor="#143229"
                intensity={1.5}
                shineSize={18}
                onClick={onExploreClick}
              >
                <span>Explore Latest Research</span>
                <ArrowRight size={15} />
              </SpecularButton>

              <SpecularButton
                size="md"
                radius={6}
                tint="#FAF3E2"
                tintOpacity={1}
                textColor="#24201C"
                lineColor="#234338"
                baseColor="#D6D0C4"
                intensity={1.2}
                shineSize={15}
                onClick={onAboutClick}
              >
                <span>About Our Approach</span>
              </SpecularButton>
            </div>
          </div>

          {/* Right Column: Arched Photo + Stats Card with BorderGlow */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '440px', margin: '0 auto' }}>
            
            {/* Arched Photo Frame (100% Unobstructed Photo) */}
            <div 
              className="hero-arch-frame"
              style={{
                width: '100%',
                height: '400px',
                borderRadius: '200px 200px 16px 16px',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: '#EDE8DE',
                boxShadow: '0 14px 36px rgba(24, 21, 18, 0.09)',
                border: '1px solid #EBE5DB',
                transition: 'transform 0.35s ease, box-shadow 0.35s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 45px rgba(24, 21, 18, 0.13)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 14px 36px rgba(24, 21, 18, 0.09)';
              }}
            >
              <img 
                src="/images/hero-arch.jpg" 
                alt="Child engaged in Montessori counting beads materials" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>

            {/* Stats Card Positioned Directly BELOW the Photo with BorderGlow & Animated Counter */}
            <div style={{ width: '100%', marginTop: '1.2rem' }}>
              <BorderGlow
                borderRadius={12}
                backgroundColor="#FFFFFF"
                edgeSensitivity={30}
                glowRadius={32}
                colors={['#234338', '#C99428', '#4B8872']}
                className="hero-stat-card-below hover-lift"
              >
                <div style={{ padding: '1.15rem 1.35rem' }}>
                  {/* Header row with Title + Trendline Graphic */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.85rem',
                    paddingBottom: '0.55rem',
                    borderBottom: '1px solid #F0ECE4'
                  }}>
                    <div style={{
                      fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: '#1A1714'
                    }}>
                      Our Research in Numbers
                    </div>

                    {/* Trendline Sparkline Graph */}
                    <div style={{ width: '90px', height: '26px' }}>
                      <svg width="90" height="26" viewBox="0 0 100 28" fill="none">
                        <path d="M5 22 L 28 15 L 50 18 L 72 8 L 95 4" stroke="#D49B28" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 25 L 28 20 L 50 14 L 72 12 L 95 7" stroke="#234338" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="95" cy="4" r="3.5" fill="#234338" stroke="#D49B28" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>

                  {/* 4 Animated Counter Metrics */}
                  <div 
                    className="hero-metrics-grid"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(4, 1fr)',
                      gap: '0.75rem',
                      textAlign: 'left'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'baseline', fontSize: '1.2rem', fontWeight: 700, color: '#1A1714', lineHeight: 1.1 }}>
                        <Counter value={12} fontSize={19} fontWeight={700} textColor="#1A1714" />
                        <span>+</span>
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#7E766D', lineHeight: 1.25, marginTop: '0.15rem' }}>Studies Published</div>
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'baseline', fontSize: '1.2rem', fontWeight: 700, color: '#1A1714', lineHeight: 1.1 }}>
                        <Counter value={7} fontSize={19} fontWeight={700} textColor="#1A1714" />
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#7E766D', lineHeight: 1.25, marginTop: '0.15rem' }}>Ongoing Projects</div>
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'baseline', fontSize: '1.2rem', fontWeight: 700, color: '#1A1714', lineHeight: 1.1 }}>
                        <Counter value={850} fontSize={19} fontWeight={700} textColor="#1A1714" />
                        <span>+</span>
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#7E766D', lineHeight: 1.25, marginTop: '0.15rem' }}>Children Observed</div>
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'baseline', fontSize: '1.2rem', fontWeight: 700, color: '#1A1714', lineHeight: 1.1 }}>
                        <Counter value={25} fontSize={19} fontWeight={700} textColor="#1A1714" />
                        <span>+</span>
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#7E766D', lineHeight: 1.25, marginTop: '0.15rem' }}>Educators</div>
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
