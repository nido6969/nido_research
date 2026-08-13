import React from 'react';
import { FIELD_NOTES } from '../data/researchData';
import { Feather } from 'lucide-react';

export default function FieldNotesSection() {
  return (
    <section id="field-notes" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container-standard">
        
        {/* Section Header */}
        <div style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-sage-dark)', marginBottom: '0.75rem' }}>
          Human & Observational Dispatches
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <div style={{ maxWidth: '750px' }}>
            <h2 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: 500, color: 'var(--text-heading)', lineHeight: 1.2, marginBottom: '1rem' }}>
              Field Notes & Observational Notebooks
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              Daily dispatches recorded by embedded research fellows inside the Children's House. These micro-observations capture the lived reality of child development before formal statistical synthesis.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-ochre-dark)', fontWeight: 600, fontSize: '0.9rem' }}>
            <Feather size={18} />
            <span>Updated Weekly</span>
          </div>
        </div>

        {/* Magazine-Style Editorial Grid */}
        <div className="grid-3" style={{ gap: '2.5rem' }}>
          {FIELD_NOTES.map((note) => (
            <article 
              key={note.id}
              className="card-archival"
              style={{ backgroundColor: 'var(--bg-parchment)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.65rem' }}>
                  <span style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-ochre)' }}>
                    {note.number}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {note.date}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.4rem', color: 'var(--text-heading)', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  {note.title}
                </h3>

                <div style={{ fontSize: '0.82rem', color: 'var(--color-sage-dark)', fontWeight: 600, marginBottom: '1.25rem' }}>
                  {note.author} • {note.location}
                </div>

                <div style={{ position: 'relative', marginBottom: '1.5rem', borderLeft: '2px solid var(--color-ochre-light)', paddingLeft: '1rem', fontStyle: 'italic', fontSize: '0.94rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                  "{note.excerpt}"
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '6px', padding: '1rem', marginBottom: '1.5rem' }}>
                  <strong style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                    Researcher Reflection
                  </strong>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    {note.reflection}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.85rem' }}>
                {note.tags.map((tag, idx) => (
                  <span key={idx} style={{ fontSize: '0.72rem', backgroundColor: 'var(--color-sage-tint)', color: 'var(--color-sage-dark)', padding: '0.2rem 0.55rem', borderRadius: '3px', border: '1px solid var(--color-sage-light)' }}>
                    #{tag}
                  </span>
                ))}
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
