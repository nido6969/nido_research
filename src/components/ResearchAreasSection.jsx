import React, { useState } from 'react';
import { RESEARCH_AREAS } from '../data/researchData';
import { Sprout, Compass, Brain, Lightbulb, Users, Layout, Target, Leaf, ArrowRight, HelpCircle } from 'lucide-react';

export default function ResearchAreasSection({ setActiveView }) {
  const [selectedArea, setSelectedArea] = useState(RESEARCH_AREAS[0]);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Sprout': return <Sprout size={20} />;
      case 'Compass': return <Compass size={20} />;
      case 'Brain': return <Brain size={20} />;
      case 'Lightbulb': return <Lightbulb size={20} />;
      case 'Users': return <Users size={20} />;
      case 'Layout': return <Layout size={20} />;
      case 'Target': return <Target size={20} />;
      case 'Leaf': return <Leaf size={20} />;
      default: return <Sprout size={20} />;
    }
  };

  return (
    <section id="research-areas" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-parchment)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container-standard">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <div style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-ochre-dark)', marginBottom: '0.75rem' }}>
            Domains of Inquiry
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: 500, color: 'var(--text-heading)', lineHeight: 1.25, marginBottom: '1.25rem' }}>
            Eight Major Research Territories
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            Our research architecture is divided into eight continuous research territories, each addressing specific developmental, cognitive, spatial, and social questions.
          </p>
        </div>

        {/* Layout: Left List Selector, Right Detail View */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '3rem', alignItems: 'start' }} className="areas-grid">
          
          {/* Left Column: Typographic Territory Index */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {RESEARCH_AREAS.map((area) => (
              <div
                key={area.id}
                onClick={() => setSelectedArea(area)}
                style={{
                  padding: '1.25rem 1.5rem',
                  borderRadius: '6px',
                  backgroundColor: selectedArea.id === area.id ? 'var(--bg-surface)' : 'transparent',
                  border: selectedArea.id === area.id ? '1px solid var(--border-accent)' : '1px solid var(--border-subtle)',
                  borderLeft: selectedArea.id === area.id ? '4px solid var(--color-ochre)' : '1px solid var(--border-subtle)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ color: selectedArea.id === area.id ? 'var(--color-ochre)' : 'var(--color-sage-dark)' }}>
                    {getIcon(area.icon)}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.2rem', color: 'var(--text-heading)', margin: 0 }}>
                      {area.title}
                    </h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      Lead: {area.leadFellow} • {area.activeProjectsCount} Active Studies
                    </span>
                  </div>
                </div>

                <ArrowRight size={16} color={selectedArea.id === area.id ? 'var(--color-ochre)' : 'var(--border-medium)'} />
              </div>
            ))}
          </div>

          {/* Right Column: Detailed Editorial Territory Overview */}
          <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-medium)', borderRadius: '10px', padding: '2.5rem', boxShadow: 'var(--shadow-card)', sticky: true, top: '6rem' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--color-ochre-dark)' }}>
              {getIcon(selectedArea.icon)}
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', fontWeight: 600 }}>
                Research Territory Details
              </span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '2rem', color: 'var(--text-heading)', marginBottom: '0.75rem' }}>
              {selectedArea.title}
            </h3>

            <p style={{ fontSize: '1.05rem', fontStyle: 'italic', fontFamily: 'var(--font-serif-heading)', color: 'var(--color-sage-dark)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              "{selectedArea.subtitle}"
            </p>

            <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
              {selectedArea.description}
            </p>

            {/* Key Inquiries Section */}
            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '1rem' }}>
                <HelpCircle size={16} color="var(--color-ochre)" />
                <span>Primary Inquiries Under Investigation</span>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {selectedArea.keyQuestions.map((q, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--color-ochre-dark)', fontWeight: 600 }}>•</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Footer */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Lead Research Fellow: <strong>{selectedArea.leadFellow}</strong>
              </span>
              <button 
                onClick={() => {
                  setActiveView('publications');
                  window.location.hash = 'publications';
                }}
                className="btn-secondary"
                style={{ padding: '0.45rem 0.9rem', fontSize: '0.82rem' }}
              >
                <span>Browse Domain Papers</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .areas-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
