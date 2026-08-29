import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Compass, Layers, Eye, ShieldCheck } from 'lucide-react';
import BorderGlow from './BorderGlow';

export default function ExploreWorkSection({ onOpenSection }) {
  const navigate = useNavigate();

  const exploreCards = [
    {
      id: "approach",
      title: "Our Research Approach",
      subtitle: "How we observe, formulate questions and evaluate evidence.",
      linkText: "Learn about our approach",
      path: "/research/approach",
      icon: <Compass size={22} color="#234338" />
    },
    {
      id: "areas",
      title: "Research Areas",
      subtitle: "Eight focus areas spanning cognitive, social, emotional and motor development.",
      linkText: "Explore our areas of study",
      path: "/research/areas",
      icon: <Layers size={22} color="#234338" />
    },
    {
      id: "methodology",
      title: "Observation & Methodology",
      subtitle: "The tools, frameworks and ethical guidelines shaping our classroom observations.",
      linkText: "See our methodology",
      path: "/research/methodology",
      icon: <Eye size={22} color="#234338" />
    },
    {
      id: "ethics",
      title: "Research Ethics",
      subtitle: "How we safeguard children's privacy, dignity and authentic learning experiences.",
      linkText: "Read our ethics framework",
      path: "/research/ethics",
      icon: <ShieldCheck size={22} color="#234338" />
    }
  ];

  const handleCardClick = (card) => {
    if (onOpenSection) {
      onOpenSection(card.id);
    } else {
      navigate(card.path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section style={{
      padding: '3.5rem 0 4.5rem 0',
      backgroundColor: '#FAF3E2'
    }}>
      <div className="container-standard">
        
        {/* Section Title */}
        <h2 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '0.85rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: '#1A1714',
          marginBottom: '2rem'
        }}>
          EXPLORE OUR WORK
        </h2>

        {/* 4-Card Grid with BorderGlow */}
        <div className="explore-work-grid">
          {exploreCards.map((card) => (
            <BorderGlow
              key={card.id}
              borderRadius={10}
              backgroundColor="#FFFFFF"
              edgeSensitivity={30}
              glowRadius={30}
              colors={['#234338', '#C99428', '#386684']}
              className="explore-card hover-lift"
              onClick={() => handleCardClick(card)}
            >
              <div 
                style={{
                  padding: '1.85rem 1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  cursor: 'pointer'
                }}
              >
                {/* Circular Icon Container */}
                <div 
                  className="explore-icon-box"
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    backgroundColor: '#F3F6F4',
                    border: '1px solid #DFE7E2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.35rem',
                    transition: 'all 0.25s ease'
                  }}
                >
                  {card.icon}
                </div>

                {/* Card Title */}
                <h3 style={{
                  fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1A1714',
                  lineHeight: 1.25,
                  marginBottom: '0.75rem'
                }}>
                  {card.title}
                </h3>

                {/* Subtitle / Excerpt */}
                <p style={{
                  fontSize: '0.86rem',
                  color: '#615A52',
                  lineHeight: 1.55,
                  marginBottom: '1.5rem',
                  flex: 1
                }}>
                  {card.subtitle}
                </p>

                {/* Arrow Link */}
                <div 
                  className="explore-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: '#234338',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>{card.linkText}</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>

      </div>
    </section>
  );
}
