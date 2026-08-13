import React from 'react';
import { Sprout, BookOpen, ArrowRight, Compass, Eye } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/researchData';

export default function HeroSection({ setActiveView, onOpenCollaborate }) {
  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--bg-parchment)', paddingTop: '4rem', paddingBottom: '5rem', borderBottom: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
      
      {/* Background Subtle Botanical Line Pattern SVG */}
      <div style={{ position: 'absolute', right: '-5%', top: '5%', opacity: 0.05, pointerEvents: 'none', width: '500px' }}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#C49237" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C87,14.6,81.4,29.1,73.1,41.9C64.8,54.7,53.8,65.8,40.4,73.1C27,80.4,11.2,83.9,-4.3,88.8C-19.8,93.7,-35.1,100,-48.2,94.9C-61.3,89.8,-72.3,73.3,-79.9,58.8C-87.5,44.3,-91.7,31.8,-91.3,19.5C-90.9,7.2,-85.9,-4.9,-80.4,-16.8C-74.9,-28.7,-68.9,-40.4,-59.1,-50.2C-49.3,-60,-35.7,-67.9,-21.8,-75.2C-7.9,-82.5,6.3,-89.2,20.8,-87.3C35.3,-85.4,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container-standard">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Column: Institutional Text */}
          <div>
            {/* Header Kicker */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.35rem 0.85rem', backgroundColor: 'var(--color-ochre-tint)', border: '1px solid var(--color-ochre-light)', borderRadius: '20px', marginBottom: '1.5rem' }}>
              <Sprout size={16} color="var(--color-ochre)" />
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-ochre-dark)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                Independent Academic Research Institute
              </span>
            </div>

            {/* Main Headline */}
            <h1 style={{ fontFamily: 'var(--font-serif-heading)', color: 'var(--text-heading)', fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', fontWeight: 500, lineHeight: 1.15, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Researching childhood through <em style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif-display)', color: 'var(--color-ochre-dark)' }}>observation</em>, experience, and evidence.
            </h1>

            {/* Subheading */}
            <p className="lead" style={{ color: 'var(--text-secondary)', fontSize: '1.18rem', lineHeight: 1.65, marginBottom: '2rem' }}>
              A dedicated research initiative rooted in the everyday life of Montessori education, studying how children grow, think, create, relate, and develop over time.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <button 
                onClick={() => {
                  setActiveView('publications');
                  window.location.hash = 'publications';
                }}
                className="btn-primary" 
                style={{ padding: '0.85rem 1.8rem', fontSize: '0.98rem' }}
              >
                <BookOpen size={18} />
                <span>Explore Our Research</span>
              </button>

              <button 
                onClick={() => {
                  setActiveView('institute');
                  window.location.hash = 'institute';
                }}
                className="btn-secondary" 
                style={{ padding: '0.85rem 1.8rem', fontSize: '0.98rem' }}
              >
                <span>About the Institute</span>
                <ArrowRight size={16} />
              </button>

              <button 
                onClick={onOpenCollaborate}
                className="btn-secondary" 
                style={{ padding: '0.85rem 1.8rem', fontSize: '0.98rem', borderStyle: 'dashed' }}
              >
                <span>Collaborate</span>
              </button>
            </div>

            {/* Quiet Institutional Badge */}
            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Eye size={16} color="var(--color-sage)" />
                <span>Embedded Observation</span>
              </div>
              <span style={{ color: 'var(--border-medium)' }}>•</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Compass size={16} color="var(--color-ochre)" />
                <span>100% Ecological Validity</span>
              </div>
            </div>

          </div>

          {/* Right Column: Sophisticated Editorial Photography & Margin Note */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-medium)', boxShadow: 'var(--shadow-card)', backgroundColor: 'var(--bg-card)' }}>
              <img 
                src="/images/nido-botanical-research.png" 
                alt="Child engaged in observation and sensory research"
                style={{ width: '100%', height: '440px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', bottom: 0, inset: 'auto 0 0 0', background: 'linear-gradient(180deg, transparent, rgba(24, 21, 18, 0.85))', padding: '1.75rem', color: '#FFF' }}>
                <div style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.3rem', color: 'var(--color-ochre-light)', marginBottom: '0.2rem' }}>
                  Field Observation #142 — Sensorial Refinement
                </div>
                <div style={{ fontSize: '0.88rem', color: '#E2D8C8', lineHeight: 1.4 }}>
                  "Tactile discrimination of wooden cylinders naturally precedes formal spatial geometry."
                </div>
              </div>
            </div>

            {/* Handwritten Floating Archival Card */}
            <div style={{ position: 'absolute', top: '-1.5rem', right: '-1rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-accent)', borderRadius: '6px', padding: '0.85rem 1.25rem', boxShadow: 'var(--shadow-subtle)', maxWidth: '220px', zIndex: 2 }}>
              <span style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.2rem', color: 'var(--color-sage-dark)', display: 'block', lineHeight: 1.3 }}>
                "Research begins with patient attention."
              </span>
              <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>
                — Maria Montessori, 1912
              </span>
            </div>

          </div>

        </div>

        {/* Institutional Statistics Bar */}
        <div style={{ marginTop: '4rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '2rem 2.5rem' }}>
          <div className="grid-4" style={{ gap: '2rem', textAlign: 'center' }}>
            <div style={{ borderRight: '1px solid var(--border-subtle)', paddingRight: '1rem' }} className="stat-item">
              <div style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '2.5rem', fontWeight: 600, color: 'var(--color-ochre-dark)', lineHeight: 1 }}>
                {INSTITUTION_INFO.stats.yearsObservation}
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 500, marginTop: '0.4rem' }}>
                Years of Continuous Observation
              </div>
            </div>
            <div style={{ borderRight: '1px solid var(--border-subtle)', paddingRight: '1rem' }} className="stat-item">
              <div style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '2.5rem', fontWeight: 600, color: 'var(--color-sage-dark)', lineHeight: 1 }}>
                {INSTITUTION_INFO.stats.childrenTracked}
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 500, marginTop: '0.4rem' }}>
                Children in Longitudinal Panel
              </div>
            </div>
            <div style={{ borderRight: '1px solid var(--border-subtle)', paddingRight: '1rem' }} className="stat-item">
              <div style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '2.5rem', fontWeight: 600, color: 'var(--text-heading)', lineHeight: 1 }}>
                {INSTITUTION_INFO.stats.publishedPapers}
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 500, marginTop: '0.4rem' }}>
                Published Papers & DOIs
              </div>
            </div>
            <div className="stat-item">
              <div style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '2.5rem', fontWeight: 600, color: 'var(--color-ochre-dark)', lineHeight: 1 }}>
                {INSTITUTION_INFO.stats.ecologicalValidity}
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 500, marginTop: '0.4rem' }}>
                Ecological Context (No Labs)
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .stat-item { border-right: none !important; border-bottom: 1px solid var(--border-subtle); padding-bottom: 1rem; padding-right: 0 !important; }
          .stat-item:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  );
}
