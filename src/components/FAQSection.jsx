import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/researchData';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="resources" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container-standard">
        
        {/* Section Header */}
        <div style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-ochre-dark)', marginBottom: '0.75rem' }}>
          Institutional Questions
        </div>

        <div style={{ maxWidth: '800px', marginBottom: '3.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: 500, color: 'var(--text-heading)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
            Frequently Asked Inquiries
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            Common questions regarding institutional structure, data safety, observational methodologies, and academic collaboration.
          </p>
        </div>

        {/* Collapsible Accordion Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '900px' }}>
          {FAQ_ITEMS.map((item, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: 'var(--bg-parchment)',
                border: '1px solid var(--border-medium)',
                borderRadius: '8px',
                overflow: 'hidden',
                transition: 'all 0.2s ease'
              }}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                style={{
                  width: '100%',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'space-between',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontFamily: 'var(--font-serif-heading)',
                  fontSize: '1.25rem',
                  color: 'var(--text-heading)',
                  fontWeight: 500
                }}
              >
                <span>{item.question}</span>
                {openIdx === idx ? <ChevronUp size={20} color="var(--color-ochre)" /> : <ChevronDown size={20} color="var(--text-muted)" />}
              </button>

              {openIdx === idx && (
                <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                  <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
