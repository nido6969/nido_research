'use client';
import React, { useState } from 'react';
import { Link } from '../lib/navigation';
import { ChevronRight, CheckCircle2, Send } from 'lucide-react';
import { RESOURCES_DATA } from '../data/researchData';
import SpecularButton from '../components/SpecularButton';
import BorderGlow from '../components/BorderGlow';
import GradientWaves from '../components/GradientWaves';
import SEO from '../components/SEO';

export default function ResourcesPage() {
  const [activeArticleIndex, setActiveArticleIndex] = useState(0);
  const [suggestionTopic, setSuggestionTopic] = useState('');
  const [isSuggested, setIsSuggested] = useState(false);

  const currentArticle = RESOURCES_DATA.articles[activeArticleIndex] || RESOURCES_DATA.articles[0];

  const handleSuggestionSubmit = (e) => {
    e.preventDefault();
    if (suggestionTopic.trim()) {
      setIsSuggested(true);
      setTimeout(() => {
        setIsSuggested(false);
        setSuggestionTopic('');
      }, 5000);
    }
  };

  return (
    <div style={{ backgroundColor: '#FAF3E2', minHeight: '100vh', paddingTop: '1.5rem', paddingBottom: '4rem' }}>
      <SEO 
        title={`${currentArticle.title || 'Montessori Resources'} | Pedagogical Articles & Guides`}
        description={currentArticle.preview || 'Comprehensive pedagogical articles, guides, and practical resources for Montessori parents and educators.'}
        keywords="Montessori Resources, Montessori Articles, Early Childhood Guides Hyderabad, Maria Montessori Method, Prepared Environment Guides"
      />
      <div className="container-standard">
        
        {/* Breadcrumbs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#7E766D', marginBottom: '1rem' }}>
          <Link to="/" style={{ color: '#554F47', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <span style={{ color: '#234338', fontWeight: 600 }}>Resources</span>
        </div>

        {/* Hero Section with Interactive <GradientWaves /> */}
        <div className="page-hero-banner" style={{ backgroundColor: '#1E351C' }}>
          {/* GradientWaves Background Canvas */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'auto' }}>
            <GradientWaves
              horizonColor="#5A713C"
              waveColor="#C88528"
              crestColor="#F5DDA9"
              speed={0.4}
              amplitude={2.5}
              waveScale={0.6}
              waveRatio={0.9}
              swell={35}
              turbulence={20}
              tilt={1.11}
              zoom={1.0}
              height={5.5}
              fogDepth={15}
              detail="medium"
              brightness={1.05}
              opacity={0.9}
              mouseInteraction={true}
              parallaxStrength={0.5}
              grain={true}
              grainIntensity={0.04}
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
              backgroundColor: 'rgba(18, 45, 36, 0.75)',
              backdropFilter: 'blur(8px)',
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              border: '1px solid rgba(221, 187, 123, 0.35)',
              marginBottom: '0.75rem'
            }}>
              <span style={{ color: '#DDBB7B' }}>{RESOURCES_DATA.hero.eyebrow}</span>
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
              {RESOURCES_DATA.hero.heading}
            </h1>
            
            <p style={{
              fontSize: '1rem',
              color: '#F0F7F3',
              maxWidth: '820px',
              lineHeight: 1.55,
              margin: 0,
              textShadow: '0 1px 6px rgba(0, 0, 0, 0.4)'
            }}>
              {RESOURCES_DATA.hero.intro}
            </p>
          </div>
        </div>

        {/* Mobile Horizontal Selector (Saves Mobile Scrolling) */}
        <div className="mobile-horizontal-selector">
          {RESOURCES_DATA.articles.map((art, idx) => {
            const isActive = activeArticleIndex === idx;
            return (
              <button
                key={art.id}
                onClick={() => setActiveArticleIndex(idx)}
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
                Guide {art.number}: {art.title.split('?')[0].trim()}?
              </button>
            );
          })}
        </div>

        {/* Master-Detail Interactive Layout for 9 Full Guides */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.75rem', alignItems: 'start', marginBottom: '2.5rem' }} className="resources-interactive-layout">
          
          {/* Desktop Left Column (Hidden on Mobile) */}
          <div className="desktop-vertical-selector" style={{ flexDirection: 'column', gap: '0.65rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#888075', marginBottom: '0.15rem' }}>
              Select a Question Guide (9 Guides)
            </div>
            {RESOURCES_DATA.articles.map((art, idx) => {
              const isActive = activeArticleIndex === idx;
              return (
                <BorderGlow
                  key={art.id}
                  borderRadius={8}
                  backgroundColor={isActive ? '#FFFFFF' : '#FAF3E2'}
                  colors={isActive ? ['#234338', '#C99428', '#4D8A74'] : ['#D6D0C4', '#A89E90', '#ECE7DF']}
                  onClick={() => setActiveArticleIndex(idx)}
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
                        GUIDE #{art.number}
                      </div>
                      <div style={{ fontFamily: "'Newsreader', serif", fontSize: '0.98rem', fontWeight: 600, color: isActive ? '#234338' : '#1A1714', lineHeight: 1.25 }}>
                        {art.title}
                      </div>
                    </div>
                    <ChevronRight size={16} color={isActive ? '#234338' : '#B8B0A2'} />
                  </div>
                </BorderGlow>
              );
            })}
          </div>

          {/* Right Column: Full In-Depth Guide Reader with BorderGlow */}
          <BorderGlow
            borderRadius={12}
            backgroundColor="#FFFFFF"
            glowRadius={32}
            colors={['#234338', '#DDBB7B', '#5A9B80']}
          >
            <div className="reader-content-card">
              <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C99428', marginBottom: '0.35rem' }}>
                RESOURCE GUIDE #{currentArticle.number}
              </div>

              <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 600, color: '#1A1714', lineHeight: 1.25, marginBottom: '0.45rem' }}>
                {currentArticle.title}
              </h2>

              <div style={{ fontSize: '1rem', fontStyle: 'italic', color: '#554F47', marginBottom: '1.5rem', paddingBottom: '0.85rem', borderBottom: '1px solid #ECE7DF' }}>
                {currentArticle.subtitle}
              </div>

              {/* Sections of the Guide */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {currentArticle.sections.map((sec, sIdx) => (
                  <div key={sIdx}>
                    <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.25rem', fontWeight: 600, color: '#234338', marginBottom: '0.5rem' }}>
                      {sec.heading}
                    </h3>
                    <p style={{ fontSize: '0.96rem', color: '#3A3631', lineHeight: 1.65, margin: 0 }}>
                      {sec.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid #ECE7DF', flexWrap: 'wrap', gap: '0.75rem' }}>
                <SpecularButton
                  disabled={activeArticleIndex === 0}
                  size="sm"
                  radius={6}
                  tint="#FAF3E2"
                  tintOpacity={1}
                  textColor="#24201C"
                  lineColor="#234338"
                  baseColor="#D6D0C4"
                  intensity={1.2}
                  shineSize={14}
                  onClick={() => setActiveArticleIndex(prev => Math.max(0, prev - 1))}
                >
                  ← Previous Guide
                </SpecularButton>

                <span style={{ fontSize: '0.8rem', color: '#7E766D' }}>
                  Guide {activeArticleIndex + 1} of {RESOURCES_DATA.articles.length}
                </span>

                <SpecularButton
                  disabled={activeArticleIndex === RESOURCES_DATA.articles.length - 1}
                  size="sm"
                  radius={6}
                  tint="#234338"
                  tintOpacity={1}
                  textColor="#FFFFFF"
                  lineColor="#DDBB7B"
                  baseColor="#143229"
                  intensity={1.4}
                  shineSize={14}
                  onClick={() => setActiveArticleIndex(prev => Math.min(RESOURCES_DATA.articles.length - 1, prev + 1))}
                >
                  Next Guide →
                </SpecularButton>
              </div>

            </div>
          </BorderGlow>

        </div>

        {/* Suggest a Topic / Search the Library Box with BorderGlow */}
        <BorderGlow
          borderRadius={12}
          backgroundColor="#234338"
          glowColor="42 80 80"
          glowRadius={32}
          colors={['#DDBB7B', '#2E6351', '#FFE39B']}
          fillOpacity={0.3}
        >
          <div className="card-pad-standard" style={{ color: '#FFFFFF' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#DDBB7B', marginBottom: '0.35rem' }}>
              {RESOURCES_DATA.librarySearch.eyebrow}
            </div>
            <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.4rem, 2.2vw, 1.75rem)', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.5rem' }}>
              {RESOURCES_DATA.librarySearch.heading}
            </h2>
            <p style={{ fontSize: '0.92rem', color: '#C6D9CE', maxWidth: '700px', lineHeight: 1.55, marginBottom: '1.25rem' }}>
              {RESOURCES_DATA.librarySearch.intro}
            </p>

            {isSuggested ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', backgroundColor: 'rgba(255, 255, 255, 0.15)', padding: '0.85rem 1.25rem', borderRadius: '6px' }}>
                <CheckCircle2 size={18} color="#DDBB7B" />
                <span style={{ fontSize: '0.9rem' }}>
                  Thank you! We have logged your request. If we publish a guide on this topic, our research team will notify you.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSuggestionSubmit} style={{ display: 'flex', gap: '0.65rem', maxWidth: '640px', flexWrap: 'wrap', alignItems: 'center' }}>
                <input
                  type="text"
                  required
                  value={suggestionTopic}
                  onChange={(e) => setSuggestionTopic(e.target.value)}
                  placeholder="Suggest a topic (e.g. 'Outdoor Nature Play')..."
                  style={{
                    flex: 1,
                    minWidth: '240px',
                    padding: '0.75rem 1rem',
                    borderRadius: '6px',
                    border: 'none',
                    outline: 'none',
                    fontSize: '16px',
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
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
                  intensity={1.5}
                  shineSize={16}
                >
                  <span>Suggest Topic</span>
                  <Send size={14} />
                </SpecularButton>
              </form>
            )}
          </div>
        </BorderGlow>

      </div>
    </div>
  );
}
