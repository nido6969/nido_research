'use client';
import React, { useState } from 'react';
import { Link } from '../lib/navigation';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { PARENT_INSIGHTS_DATA } from '../data/researchData';
import SpecularButton from '../components/SpecularButton';
import BorderGlow from '../components/BorderGlow';
import SideRays from '../components/SideRays';
import SEO from '../components/SEO';

export default function ParentInsightsPage() {
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const currentTopic = PARENT_INSIGHTS_DATA.topics[activeTopicIndex] || PARENT_INSIGHTS_DATA.topics[0];

  return (
    <div style={{ backgroundColor: '#FAF3E2', minHeight: '100vh', paddingTop: '1.5rem', paddingBottom: '4rem' }}>
      <SEO 
        title={`${currentTopic.title || 'Parent Insights'} | Evidence-Based Parenting Guidance`}
        description={currentTopic.paragraphs ? currentTopic.paragraphs[0].slice(0, 160) : 'Practical parenting insights derived from naturalistic Montessori classroom observations.'}
        keywords="Montessori Parenting, Early Childhood Development at Home, Montessori Toddler Routine, Executive Function at Home, Screen Free Parenting Hyderabad"
      />
      <div className="container-standard">
        
        {/* Breadcrumbs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#7E766D', marginBottom: '1rem' }}>
          <Link to="/" style={{ color: '#554F47', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <span style={{ color: '#234338', fontWeight: 600 }}>Parent Insights</span>
        </div>

        {/* Hero Section with Interactive <SideRays /> */}
        <div className="page-hero-banner" style={{ backgroundColor: '#1E351C' }}>
          {/* SideRays Background */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
            <SideRays
              speed={2.2}
              rayColor1="#C88528"
              rayColor2="#5A713C"
              intensity={2.0}
              spread={2.2}
              origin="top-right"
              tilt={0}
              saturation={1.4}
              blend={0.75}
              falloff={1.5}
              opacity={0.95}
            />
          </div>

          {/* Foreground Hero Content */}
          <div className="page-hero-content">
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              backgroundColor: 'rgba(18, 45, 36, 0.8)',
              backdropFilter: 'blur(8px)',
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              border: '1px solid rgba(221, 187, 123, 0.35)',
              marginBottom: '0.75rem'
            }}>
              <span style={{ color: '#DDBB7B' }}>{PARENT_INSIGHTS_DATA.hero.eyebrow}</span>
            </div>
            
            <h1 style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
              fontWeight: 600,
              color: '#FFFFFF',
              lineHeight: 1.15,
              marginBottom: '0.75rem',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.4)'
            }}>
              {PARENT_INSIGHTS_DATA.hero.heading}
            </h1>
            
            <p style={{
              fontSize: '1rem',
              color: '#F0F7F3',
              maxWidth: '820px',
              lineHeight: 1.55,
              marginBottom: '1rem',
              textShadow: '0 1px 6px rgba(0, 0, 0, 0.4)'
            }}>
              {PARENT_INSIGHTS_DATA.hero.intro}
            </p>

            <div style={{
              fontSize: '0.9rem',
              fontStyle: 'italic',
              color: '#FDF9F0',
              padding: '0.75rem 1.1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(6px)',
              borderLeft: '3px solid #DDBB7B',
              borderRadius: '4px',
              maxWidth: '720px'
            }}>
              {PARENT_INSIGHTS_DATA.hero.coreQuestion}
            </div>
          </div>
        </div>

        {/* Mobile Horizontal Selector (Saves Mobile Scrolling) */}
        <div className="mobile-horizontal-selector">
          {PARENT_INSIGHTS_DATA.topics.map((topic, idx) => {
            const isActive = activeTopicIndex === idx;
            return (
              <button
                key={topic.id}
                onClick={() => setActiveTopicIndex(idx)}
                style={{
                  padding: '0.55rem 0.95rem',
                  borderRadius: '20px',
                  backgroundColor: isActive ? '#234338' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : '#3A3631',
                  border: isActive ? '1px solid #234338' : '1px solid #D6D0C4',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  flexShrink: 0
                }}
              >
                Topic {topic.topicNumber}: {topic.title.split('—')[0].trim()}
              </button>
            );
          })}
        </div>

        {/* Master-Detail Interactive Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.75rem', alignItems: 'start' }} className="insights-interactive-layout">
          
          {/* Desktop Left Column (Hidden on Mobile) */}
          <div className="desktop-vertical-selector" style={{ flexDirection: 'column', gap: '0.65rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#888075', marginBottom: '0.15rem' }}>
              Explore Family Guides (10 Topics)
            </div>
            {PARENT_INSIGHTS_DATA.topics.map((topic, idx) => {
              const isActive = activeTopicIndex === idx;
              return (
                <BorderGlow
                  key={topic.id}
                  borderRadius={8}
                  backgroundColor={isActive ? '#FFFFFF' : '#FAF3E2'}
                  colors={isActive ? ['#234338', '#C99428', '#4D8A74'] : ['#D6D0C4', '#A89E90', '#ECE7DF']}
                  onClick={() => setActiveTopicIndex(idx)}
                  className="hover-lift"
                >
                  <div
                    style={{
                      padding: '0.85rem 1.1rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.68rem', fontWeight: 700, color: isActive ? '#C99428' : '#968E82', textTransform: 'uppercase' }}>
                        TOPIC 0{topic.topicNumber}
                      </div>
                      <div style={{ fontFamily: "'Newsreader', serif", fontSize: '1rem', fontWeight: 600, color: isActive ? '#234338' : '#1A1714', lineHeight: 1.25 }}>
                        {topic.title}
                      </div>
                    </div>
                    <ChevronRight size={16} color={isActive ? '#234338' : '#B8B0A2'} />
                  </div>
                </BorderGlow>
              );
            })}
          </div>

          {/* Right Column: Full Topic Reader with BorderGlow */}
          <BorderGlow
            borderRadius={12}
            backgroundColor="#FFFFFF"
            glowRadius={32}
            colors={['#234338', '#DDBB7B', '#5A9B80']}
          >
            <div className="reader-content-card">
              <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C99428', marginBottom: '0.35rem' }}>
                PARENT INSIGHT • TOPIC 0{currentTopic.topicNumber}
              </div>

              <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 600, color: '#1A1714', lineHeight: 1.25, marginBottom: '0.65rem' }}>
                {currentTopic.title}
              </h2>

              <div style={{
                fontSize: '1.05rem',
                fontStyle: 'italic',
                color: '#284B3D',
                padding: '0.75rem 1.15rem',
                backgroundColor: '#F1F6F3',
                borderRadius: '6px',
                marginBottom: '1.5rem',
                display: 'inline-block'
              }}>
                {currentTopic.quote}
              </div>

              {/* Body Paragraphs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '1.5rem' }}>
                {currentTopic.body.map((p, pIdx) => (
                  <p key={pIdx} style={{ fontSize: '0.98rem', color: '#3A3631', lineHeight: 1.65, margin: 0 }}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Bullets */}
              {currentTopic.bullets && currentTopic.bullets.length > 0 && (
                <div style={{ backgroundColor: '#FAF3E2', border: '1px solid #EBE5DB', borderRadius: '8px', padding: '1.25rem', marginBottom: '1.5rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#1A1714', marginBottom: '0.65rem' }}>
                    {currentTopic.bulletHeader || 'Practical Ways to Support:'}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.55rem' }}>
                    {currentTopic.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.86rem', color: '#443F39' }}>
                        <CheckCircle2 size={15} color="#234338" style={{ flexShrink: 0 }} />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* After Bullets Summary */}
              {currentTopic.afterBullets && (
                <p style={{ fontSize: '0.92rem', color: '#554F47', lineHeight: 1.6, fontStyle: 'italic', borderTop: '1px solid #ECE7DF', paddingTop: '1rem' }}>
                  {currentTopic.afterBullets}
                </p>
              )}

              {/* Navigation Buttons */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid #ECE7DF', flexWrap: 'wrap', gap: '0.75rem' }}>
                <SpecularButton
                  disabled={activeTopicIndex === 0}
                  size="sm"
                  radius={6}
                  tint="#FAF3E2"
                  tintOpacity={1}
                  textColor="#24201C"
                  lineColor="#234338"
                  baseColor="#D6D0C4"
                  intensity={1.2}
                  shineSize={14}
                  onClick={() => setActiveTopicIndex(prev => Math.max(0, prev - 1))}
                >
                  ← Previous Topic
                </SpecularButton>

                <span style={{ fontSize: '0.8rem', color: '#7E766D' }}>
                  Topic {activeTopicIndex + 1} of {PARENT_INSIGHTS_DATA.topics.length}
                </span>

                <SpecularButton
                  disabled={activeTopicIndex === PARENT_INSIGHTS_DATA.topics.length - 1}
                  size="sm"
                  radius={6}
                  tint="#234338"
                  tintOpacity={1}
                  textColor="#FFFFFF"
                  lineColor="#DDBB7B"
                  baseColor="#143229"
                  intensity={1.4}
                  shineSize={14}
                  onClick={() => setActiveTopicIndex(prev => Math.min(PARENT_INSIGHTS_DATA.topics.length - 1, prev + 1))}
                >
                  Next Topic →
                </SpecularButton>
              </div>

            </div>
          </BorderGlow>

        </div>

      </div>
    </div>
  );
}
