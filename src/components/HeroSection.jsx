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
              <span>EVIDENCE. OBSERVATION. NATURE.</span>
            </div>

            {/* Huge Serif Headline - Green */}
            <h1 style={{
              fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)',
              fontWeight: 600,
              color: '#234338',
              lineHeight: 1.14,
              marginBottom: '1.25rem',
              letterSpacing: '-0.025em'
            }}>
              Research for<br />
              Real Classrooms.<br />
              Real Children.
            </h1>

            {/* Full Body Copy */}
            <div style={{
              fontSize: '0.94rem',
              color: '#443F39',
              lineHeight: 1.65,
              maxWidth: '540px',
              marginBottom: '1.75rem'
            }}>
              <p style={{ fontWeight: 600, color: '#1A1714', marginBottom: '0.65rem' }}>
                At Nido Montessori, research begins with a simple act: <span style={{ color: '#C88528' }}>paying attention.</span>
              </p>
              <p style={{ color: '#554F47', marginBottom: '0.85rem' }}>
                Through our research, we hope to observe small but meaningful changes in children over time and understand what the Montessori environment contributes to this journey. We observe children as they move, choose, concentrate, communicate, collaborate and become increasingly independent. We turn these everyday observations into questions worth exploring—and share what we learn with educators, parents and the wider Montessori community. The goal is simple “ To look closely at the child, document what we observe, and learn from the process rather than assume what development should look like. In doing so, we hope to contribute to a more thoughtful understanding of independence in early childhood and to the ongoing practice of Montessori education at Nido.”
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: '#C88528'
              }}>
                <div>• Research rooted in real classrooms.</div>
                <div>• Curiosity guided by evidence.</div>
                <div>• Always with the child at the centre.</div>
              </div>
            </div>

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
                height: '380px',
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
                src="/images/hero-classroom.jpeg" 
                alt="Nido Montessori prepared classroom environment in Bachupally, Hyderabad" 
                width={800}
                height={600}
                fetchPriority="high"
                decoding="async"
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

                  {/* 3 Animated Counter Metrics */}
                  <div 
                    className="hero-metrics-grid"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '0.75rem',
                      textAlign: 'left'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'baseline', fontSize: '1.25rem', fontWeight: 700, color: '#1A1714', lineHeight: 1.1 }}>
                        <Counter value={2} fontSize={20} fontWeight={700} textColor="#1A1714" />
                        <span>+</span>
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#7E766D', lineHeight: 1.25, marginTop: '0.2rem' }}>Studies Published</div>
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'baseline', fontSize: '1.25rem', fontWeight: 700, color: '#1A1714', lineHeight: 1.1 }}>
                        <Counter value={7} fontSize={20} fontWeight={700} textColor="#1A1714" />
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#7E766D', lineHeight: 1.25, marginTop: '0.2rem' }}>Ongoing Research Projects</div>
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'baseline', fontSize: '1.25rem', fontWeight: 700, color: '#1A1714', lineHeight: 1.1 }}>
                        <Counter value={5} fontSize={20} fontWeight={700} textColor="#1A1714" />
                        <span>+</span>
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#7E766D', lineHeight: 1.25, marginTop: '0.2rem' }}>Educators & Contributors</div>
                    </div>
                  </div>

                  {/* Community Growth Statement */}
                  <div style={{
                    marginTop: '0.85rem',
                    paddingTop: '0.65rem',
                    borderTop: '1px solid #F2EFE8',
                    fontSize: '0.75rem',
                    fontStyle: 'italic',
                    color: '#C88528',
                    lineHeight: 1.45
                  }}>
                    Our research grows alongside our community… Stay tuned for our growing contributions towards the far-reaching goals of nurturing independent generations.
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
