import React, { useState } from 'react';
import { Sprout, ChevronRight } from 'lucide-react';
import { RESEARCH_CYCLE_STEPS } from '../data/researchData';

export default function ObservationCycle() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-parchment)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container-standard">
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-ochre-dark)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
            <Sprout size={16} />
            <span>Organic Inquiry Cycle</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: 500, color: 'var(--text-heading)', lineHeight: 1.25, marginBottom: '1.25rem' }}>
            From Observation to Knowledge
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            Research at NIDO is not a linear conveyor belt. Like living nature, it expands in an organic continuous feedback loop where every observation generates deeper inquiry.
          </p>
        </div>

        {/* Step Selector Pills */}
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {RESEARCH_CYCLE_STEPS.map((s, idx) => (
            <button
              key={s.step}
              onClick={() => setActiveStep(idx)}
              style={{
                padding: '0.65rem 1.1rem',
                borderRadius: '6px',
                border: activeStep === idx ? '1px solid var(--color-ochre)' : '1px solid var(--border-subtle)',
                backgroundColor: activeStep === idx ? 'var(--color-ochre-tint)' : 'var(--bg-surface)',
                color: activeStep === idx ? 'var(--color-ochre-dark)' : 'var(--text-secondary)',
                fontWeight: activeStep === idx ? 600 : 400,
                fontSize: '0.9rem',
                fontFamily: 'var(--font-body)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-serif-heading)', opacity: 0.8 }}>
                {s.step}
              </span>
              <span>{s.title}</span>
            </button>
          ))}
        </div>

        {/* Active Step Detailed Card */}
        <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-medium)', borderRadius: '12px', padding: '3rem', maxWidth: '960px', margin: '0 auto', boxShadow: 'var(--shadow-card)', position: 'relative' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2.5rem', alignItems: 'start' }} className="cycle-detail-grid">
            
            {/* Step Number Circle */}
            <div style={{ width: '84px', height: '84px', borderRadius: '50%', backgroundColor: 'var(--color-ochre-tint)', border: '2px solid var(--color-ochre)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--color-ochre-dark)' }}>
              <span style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '2rem', fontWeight: 600, lineHeight: 1 }}>
                {RESEARCH_CYCLE_STEPS[activeStep].step}
              </span>
              <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Stage</span>
            </div>

            {/* Content */}
            <div>
              <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-sage-dark)', fontWeight: 600, marginBottom: '0.35rem' }}>
                {RESEARCH_CYCLE_STEPS[activeStep].subtitle}
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '2.2rem', color: 'var(--text-heading)', marginBottom: '1.25rem' }}>
                {RESEARCH_CYCLE_STEPS[activeStep].title}
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                {RESEARCH_CYCLE_STEPS[activeStep].description}
              </p>

              {/* Navigation Controls */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem' }}>
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : RESEARCH_CYCLE_STEPS.length - 1))}
                  style={{ background: 'none', border: '1px solid var(--border-medium)', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', fontSize: '0.88rem', color: 'var(--text-secondary)' }}
                >
                  ← Previous Stage
                </button>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Stage {activeStep + 1} of {RESEARCH_CYCLE_STEPS.length}
                </div>
                <button
                  onClick={() => setActiveStep((prev) => (prev < RESEARCH_CYCLE_STEPS.length - 1 ? prev + 1 : 0))}
                  className="btn-ochre"
                  style={{ padding: '0.5rem 1.1rem', fontSize: '0.88rem' }}
                >
                  <span>Next Stage</span>
                  <ChevronRight size={16} />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .cycle-detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
