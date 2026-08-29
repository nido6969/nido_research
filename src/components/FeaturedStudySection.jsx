import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { FEATURED_STUDIES } from '../data/researchData';
import SpecularButton from './SpecularButton';
import BorderGlow from './BorderGlow';

export default function FeaturedStudySection({ onSelectPaper, onViewAll }) {
  const featuredCards = FEATURED_STUDIES.map((study) => ({
    id: study.id,
    badge: study.badge || 'PUBLISHED',
    icon: <FileText size={16} color="#234338" />,
    date: study.date || '2026',
    title: study.title,
    snippet: study.summary || study.question,
    image: study.image,
    rawPaper: study
  }));

  return (
    <section id="featured-studies" style={{
      padding: '4rem 0 3.5rem 0',
      backgroundColor: '#FAF3E2'
    }}>
      <div className="container-standard">
        
        {/* Section Header Row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '2rem'
        }}>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '0.85rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: '#1A1714'
          }}>
            FEATURED STUDIES
          </h2>

          <SpecularButton
            size="sm"
            radius={6}
            tint="#FAF3E2"
            tintOpacity={1}
            textColor="#24201C"
            lineColor="#234338"
            baseColor="#ECE7DF"
            intensity={1.2}
            shineSize={16}
            onClick={onViewAll}
          >
            <span>View All Studies</span>
            <ArrowRight size={14} />
          </SpecularButton>
        </div>

        {/* 3-Column Card Grid with BorderGlow */}
        <div className="featured-studies-grid">
          {featuredCards.map((card) => (
            <BorderGlow
              key={card.id}
              borderRadius={10}
              backgroundColor="#FFFFFF"
              edgeSensitivity={28}
              glowRadius={30}
              colors={['#234338', '#DDBB7B', '#4D8A74']}
              className="study-card hover-lift"
              onClick={() => onSelectPaper(card.rawPaper)}
            >
              <div style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}>
                {/* Card Image Container */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '215px',
                  overflow: 'hidden',
                  borderRadius: '10px 10px 0 0',
                  backgroundColor: '#EDE8DE'
                }}>
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />
                  
                  {/* Top Badge */}
                  <span style={{
                    position: 'absolute',
                    top: '0.85rem',
                    left: '0.85rem',
                    backgroundColor: '#FFFFFF',
                    color: '#1A1714',
                    fontSize: '0.66rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '4px',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.12)'
                  }}>
                    {card.badge}
                  </span>

                  {/* Circular Action Badge at bottom right of photo */}
                  <div 
                    className="study-circle-badge"
                    style={{
                      position: 'absolute',
                      bottom: '0.85rem',
                      right: '0.85rem',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 3px 8px rgba(0,0,0,0.14)',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    {card.icon}
                  </div>
                </div>

                {/* Card Content Area */}
                <div style={{
                  padding: '1.4rem 1.4rem 1.6rem 1.4rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1
                }}>
                  {/* Date */}
                  <div style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#948D82',
                    marginBottom: '0.55rem'
                  }}>
                    {card.date}
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                    fontSize: '1.18rem',
                    fontWeight: 600,
                    color: '#1A1714',
                    lineHeight: 1.3,
                    marginBottom: '0.75rem'
                  }}>
                    {card.title}
                  </h3>

                  {/* Excerpt */}
                  <p style={{
                    fontSize: '0.88rem',
                    color: '#5C564E',
                    lineHeight: 1.55,
                    marginBottom: '1.5rem',
                    flex: 1
                  }}>
                    {card.snippet}
                  </p>

                  {/* Link */}
                  <div 
                    className="read-study-link"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#234338',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>Read Study</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>

      </div>
    </section>
  );
}
