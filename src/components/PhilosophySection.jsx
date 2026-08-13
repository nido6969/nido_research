import React from 'react';


export default function PhilosophySection() {
  const pillars = [
    {
      num: "01",
      title: "Observation",
      subtitle: "Attention without Interference",
      desc: "Understanding children by observing their natural choices, concentration cycles, and physical interactions within authentic, uncoerced daily environments."
    },
    {
      num: "02",
      title: "Continuity",
      subtitle: "Longitudinal Developmental Arcs",
      desc: "Tracking cognitive and emotional development continuously across years (ages 2 to 12) rather than drawing conclusions from brief 30-minute laboratory snapshots."
    },
    {
      num: "03",
      title: "Context",
      subtitle: "Ecological Validity",
      desc: "Studying learning within the child's actual social, physical, and pedagogical ecosystem where actions carry real social and mechanical consequences."
    },
    {
      num: "04",
      title: "Reflection",
      subtitle: "Transforming Evidence to Insight",
      desc: "Systematically converting observational field notes into rigorous research questions, mathematical models, and scholarly developmental hypotheses."
    },
    {
      num: "05",
      title: "Practice",
      subtitle: "Continuous Pedagogical Feedback",
      desc: "Ensuring research findings immediately re-enter the classroom to refine material design, environment architecture, and guide practices within weeks."
    },
    {
      num: "06",
      title: "Collaboration",
      subtitle: "Open Academic Dialogue",
      desc: "Working in transparent partnership with developmental psychologists, Montessori scholars, university labs, families, and international open science networks."
    }
  ];

  return (
    <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container-standard">
        
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4.5rem auto' }}>
          <div style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-sage-dark)', marginBottom: '0.75rem' }}>
            The Research Philosophy
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', fontWeight: 500, color: 'var(--text-heading)', lineHeight: 1.25, marginBottom: '1.25rem' }}>
            Six Pillars of Inquiry Rooted in Nature & Evidence
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            Our research framework is designed to preserve the sanctity of childhood while applying rigorous scientific methodologies to document human developmental potential.
          </p>
        </div>

        {/* Editorial Archival Grid */}
        <div className="grid-3" style={{ gap: '2.5rem' }}>
          {pillars.map((p) => (
            <div 
              key={p.num} 
              className="card-archival"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'var(--bg-parchment)' }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.8rem', fontWeight: 600, color: 'var(--color-ochre)' }}>
                    {p.num}
                  </span>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
                    Pillar
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.5rem', color: 'var(--text-heading)', marginBottom: '0.4rem' }}>
                  {p.title}
                </h3>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-sage-dark)', marginBottom: '1rem', letterSpacing: '0.02em' }}>
                  {p.subtitle}
                </div>

                <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
