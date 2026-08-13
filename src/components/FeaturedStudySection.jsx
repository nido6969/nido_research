import React from 'react';
import { BookOpen, FileText, CheckCircle2 } from 'lucide-react';
import { RESEARCH_STUDIES } from '../data/researchData';

export default function FeaturedStudySection({ onSelectPaper }) {
  const featured = RESEARCH_STUDIES[0]; // Landmark 7-year panel study

  return (
    <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container-standard">
        
        {/* Editorial Header */}
        <div style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-ochre-dark)', marginBottom: '0.75rem' }}>
          Spotlight Research Feature
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }} className="featured-grid">
          
          {/* Left: Study Details & Findings */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span className={`status-badge ${featured.statusClass}`}>
                {featured.status}
              </span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                DOI: {featured.doi}
              </span>
            </div>

            <h2 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', fontWeight: 500, color: 'var(--text-heading)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
              {featured.title}
            </h2>

            <p style={{ fontSize: '1.08rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.75rem' }}>
              {featured.abstract}
            </p>

            {/* Key Findings Box */}
            <div style={{ backgroundColor: 'var(--bg-parchment)', border: '1px solid var(--border-medium)', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem' }}>
              <h4 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.2rem', color: 'var(--text-heading)', marginBottom: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                Key Empirical Insights
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {featured.findings.map((f, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                    <CheckCircle2 size={16} color="var(--color-sage)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <button 
                onClick={() => onSelectPaper(featured)}
                className="btn-primary" 
                style={{ padding: '0.8rem 1.6rem', fontSize: '0.92rem' }}
              >
                <BookOpen size={16} />
                <span>Read Full Abstract & Citation</span>
              </button>

              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Sample: <strong>{featured.sampleSize}</strong>
              </div>
            </div>

          </div>

          {/* Right: Archival Journal Visual */}
          <div style={{ position: 'relative' }}>
            <div style={{ backgroundColor: 'var(--bg-parchment)', border: '1px solid var(--border-medium)', borderRadius: '8px', padding: '2rem', boxShadow: 'var(--shadow-card)' }}>
              
              <div style={{ borderBottom: '2px solid var(--color-ochre)', paddingBottom: '1rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-heading)' }}>
                    NIDO Journal of Developmental Pedagogy
                  </span>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', uppercase: 'true' }}>
                    Vol. 12, Issue 1 — Open Access
                  </span>
                </div>
                <FileText size={24} color="var(--color-ochre)" />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <img 
                  src="/images/nido-research-notebook.png" 
                  alt="Archival notebook and observation log"
                  style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '4px', border: '1px solid var(--border-subtle)', marginBottom: '1rem' }}
                />
                <div style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.25rem', color: 'var(--color-sage-dark)', lineHeight: 1.3 }}>
                  "Figure 4.2: False Fatigue concentration curve recorded during morning work cycles."
                </div>
              </div>

              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', backgroundColor: 'var(--bg-surface)', padding: '1rem', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>
                <strong>Authors:</strong> {featured.leadResearcher}<br />
                <strong>Methodology:</strong> 42,000+ non-intrusive micro-observations logged by embedded fellows over 7 consecutive years.
              </div>

            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .featured-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
