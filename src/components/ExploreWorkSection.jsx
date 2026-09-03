import React from 'react';
import { useNavigate } from '../lib/navigation';
import { ArrowRight, BookOpen, Clock, Lightbulb, Search } from 'lucide-react';
import BorderGlow from './BorderGlow';

export default function ExploreWorkSection({ onOpenSearch }) {
  const navigate = useNavigate();

  const exploreCards = [
    {
      id: "publications",
      title: "Publications",
      eyebrow: "From our questions to the wider world.",
      subtitle: "Explore our research papers, studies, reports and published work covering Montessori education, early childhood development and children's everyday learning.",
      linkText: "Browse Publications",
      path: "/publications",
      icon: <BookOpen size={22} color="#234338" />
    },
    {
      id: "projects",
      title: "Ongoing Projects",
      eyebrow: "Some questions take longer to answer.",
      subtitle: "Discover the research projects we are currently observing, documenting and developing—with some studies growing directly from questions that arise in our classrooms.",
      linkText: "View Projects",
      path: "/projects",
      icon: <Clock size={22} color="#234338" />
    },
    {
      id: "insights",
      title: "Educator Insights",
      eyebrow: "What happens when educators slow down and observe?",
      subtitle: "Read reflections, conversations and practical insights from educators working closely with children every day.",
      linkText: "Read Insights",
      path: "/parent-insights",
      icon: <Lightbulb size={22} color="#234338" />
    },
    {
      id: "search",
      title: "Search the Archive",
      eyebrow: "Curiosity leaves a trail.",
      subtitle: "Explore our growing archive of studies, observations, questions, topics and classroom research.",
      linkText: "Search Now",
      path: "/publications",
      isSearch: true,
      icon: <Search size={22} color="#234338" />
    }
  ];

  const handleCardClick = (card) => {
    if (card.isSearch && onOpenSearch) {
      onOpenSearch();
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
                  marginBottom: '0.35rem'
                }}>
                  {card.title}
                </h3>

                {/* Eyebrow */}
                {card.eyebrow && (
                  <div style={{
                    fontSize: '0.85rem',
                    fontStyle: 'italic',
                    fontWeight: 500,
                    color: '#C88528',
                    marginBottom: '0.65rem'
                  }}>
                    {card.eyebrow}
                  </div>
                )}

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
