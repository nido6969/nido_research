import React from 'react';
import { Eye, ShieldCheck, Sparkles } from 'lucide-react';

export default function InstitutionalIntro({ setActiveView }) {
  return (
    <section id="institute" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-parchment)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container-standard">
        
        {/* Section Header */}
        <div style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-ochre-dark)', marginBottom: '0.75rem' }}>
          Institutional Introduction
        </div>

        {/* Large Statement Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'start' }} className="intro-grid">
          
          {/* Left: Large Editorial Statement */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: 500, lineHeight: 1.2, color: 'var(--text-heading)', marginBottom: '1.75rem' }}>
              Research begins with <em style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif-display)', color: 'var(--color-sage-dark)' }}>sustained attention</em> to the child's daily reality.
            </h2>

            <div className="citation-block" style={{ marginBottom: '2rem' }}>
              <p style={{ fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--text-primary)', margin: 0, lineHeight: 1.6 }}>
                "Children are not incomplete adults waiting to be filled with pre-packaged knowledge. They are active observers, hypothesis generators, and self-constructing creators of human capability."
              </p>
              <div style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-sage-dark)', fontWeight: 600, marginTop: '0.75rem' }}>
                — NIDO Research Charter, Section 1.2
              </div>
            </div>

            <p style={{ fontSize: '1.08rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Most academic child development research takes place in artificial laboratories or through short-term questionnaires. <strong>NIDO Research Institute</strong> rejects this 'Goldfish Bowl' approach. We observe children continuously inside their daily Montessori learning environment—capturing genuine developmental arcs over years, not minutes.
            </p>
          </div>

          {/* Right: Institutional Breakdown */}
          <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-medium)', borderRadius: '8px', padding: '2.5rem' }}>
            <h3 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.5rem', marginBottom: '1.25rem', color: 'var(--text-heading)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
              Children as Co-Creators of Knowledge
            </h3>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              In our research methodology, children are never treated as passive test subjects. Instead, they are recognized as:
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <div style={{ padding: '0.35rem', backgroundColor: 'var(--color-ochre-tint)', border: '1px solid var(--color-ochre-light)', borderRadius: '4px', color: 'var(--color-ochre-dark)' }}>
                  <Eye size={16} />
                </div>
                <div>
                  <strong style={{ color: 'var(--text-heading)', display: 'block', fontSize: '0.95rem' }}>Original Observers</strong>
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Formulating their own spontaneous hypotheses about living systems and physical laws.</span>
                </div>
              </li>

              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <div style={{ padding: '0.35rem', backgroundColor: 'var(--color-sage-tint)', border: '1px solid var(--color-sage-light)', borderRadius: '4px', color: 'var(--color-sage-dark)' }}>
                  <Sparkles size={16} />
                </div>
                <div>
                  <strong style={{ color: 'var(--text-heading)', display: 'block', fontSize: '0.95rem' }}>Self-Directed Makers</strong>
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Constructing abstract geometric and mathematical concepts through hands-on materials.</span>
                </div>
              </li>

              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <div style={{ padding: '0.35rem', backgroundColor: 'var(--color-ochre-tint)', border: '1px solid var(--color-ochre-light)', borderRadius: '4px', color: 'var(--color-ochre-dark)' }}>
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <strong style={{ color: 'var(--text-heading)', display: 'block', fontSize: '0.95rem' }}>Autonomous Micro-Societies</strong>
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Negotiating social boundaries, empathy, and conflict resolution without adult coercion.</span>
                </div>
              </li>
            </ul>

            <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Connected to NIDO Montessori Preschool</span>
              <button 
                onClick={() => {
                  setActiveView('methodology');
                  window.location.hash = 'methodology';
                }}
                style={{ background: 'none', border: 'none', color: 'var(--color-ochre-dark)', fontWeight: 600, fontSize: '0.88rem', cursor: 'pointer' }}
              >
                Read Methodology →
              </button>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .intro-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
