import React, { useState } from 'react';
import { Clock, Milestone } from 'lucide-react';

export default function LongitudinalVisual() {
  const [selectedPlane, setSelectedPlane] = useState(0);

  const planes = [
    {
      title: "First Plane: Infancy & Early Childhood (Ages 0–6)",
      theme: "The Absorbent Mind & Sensorial Self-Construction",
      focus: "Physical independence, sensory refinement, motor coordination, language emergence, and focus building.",
      keyObservation: "Child tracks wooden cylinders, self-corrects spatial alignment, and transitions from parallel play to initial peer co-operation.",
      metric: "42,000+ Work cycles logged in 3–6 Children's Houses"
    },
    {
      title: "Second Plane: Childhood (Ages 6–12)",
      theme: "The Reasoning Mind & Moral Consciousness",
      focus: "Abstract mathematical formulation, social ethics, cosmic education, geometric reasoning, and peer collaboration.",
      keyObservation: "Child transitions from Golden Beads to paper algebra, initiates group research projects, and negotiates community rules autonomously.",
      metric: "180+ Student-led research projects and botanical studies"
    },
    {
      title: "Third Plane: Adolescence (Ages 12–18)",
      theme: "Human Potential & Social Economic Agency",
      focus: "Erdkinder stewardship, scientific prototyping, technological synthesis, economic independence, and civic leadership.",
      keyObservation: "Youth manage real-world agricultural & lab projects, draft research manuscripts, and contribute valid intellectual property.",
      metric: "Longitudinal tracking through age 18 ongoing"
    }
  ];

  return (
    <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container-standard">
        
        {/* Editorial Heading */}
        <div style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-sage-dark)', marginBottom: '0.75rem' }}>
          Longitudinal Continuity & Time
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '4rem', alignItems: 'center' }} className="longitudinal-grid">
          
          {/* Left Column: Emotional Narrative */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: 500, color: 'var(--text-heading)', lineHeight: 1.2, marginBottom: '1.75rem' }}>
              Research that follows the child across time.
            </h2>

            <div style={{ borderLeft: '3px solid var(--color-ochre)', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.4rem', fontStyle: 'italic', color: 'var(--text-heading)', lineHeight: 1.5 }}>
                A child changes.<br />
                A question changes.<br />
                A classroom changes.<br />
                <span style={{ color: 'var(--color-ochre-dark)' }}>Research follows the change.</span>
              </div>
            </div>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Snapshots tell us what a child can do at one isolated moment. Longitudinal observation tells us who the child is becoming. By tracking the same panel of children across developmental planes, NIDO Research Institute proves that the abstract thinker of age 10 is built by the sensorial explorer of age 3.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {planes.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPlane(idx)}
                  className={`filter-pill ${selectedPlane === idx ? 'active' : ''}`}
                  style={{ padding: '0.6rem 1.1rem', fontSize: '0.88rem' }}
                >
                  Plane {idx + 1} ({idx === 0 ? '0-6 Yrs' : idx === 1 ? '6-12 Yrs' : '12-18 Yrs'})
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Plane Card */}
          <div style={{ backgroundColor: 'var(--bg-parchment)', border: '1px solid var(--border-medium)', borderRadius: '10px', padding: '2.5rem', boxShadow: 'var(--shadow-card)', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-ochre-dark)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '0.75rem' }}>
              <Milestone size={16} />
              <span>Developmental Plane Overview</span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.65rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
              {planes[selectedPlane].title}
            </h3>

            <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-sage-dark)', marginBottom: '1.25rem' }}>
              {planes[selectedPlane].theme}
            </div>

            <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {planes[selectedPlane].focus}
            </p>

            <div style={{ backgroundColor: 'var(--color-ochre-tint)', border: '1px solid var(--color-ochre-light)', padding: '1rem 1.25rem', borderRadius: '6px', marginBottom: '1.5rem' }}>
              <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-ochre-dark)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                Key Observational Pattern
              </strong>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontStyle: 'italic' }}>
                "{planes[selectedPlane].keyObservation}"
              </span>
            </div>

            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Clock size={15} color="var(--color-sage)" />
              <span>{planes[selectedPlane].metric}</span>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .longitudinal-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
