import React from 'react';
import { RESEARCH_TEAM } from '../data/researchData';
import { GraduationCap } from 'lucide-react';

export default function TeamSection() {
  return (
    <section id="team" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-parchment)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container-standard">
        
        {/* Section Header */}
        <div style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-ochre-dark)', marginBottom: '0.75rem' }}>
          Scholarly Directory
        </div>

        <div style={{ maxWidth: '800px', marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: 500, color: 'var(--text-heading)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
            Research Leadership & Embedded Fellows
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            Our research team combines expertise in developmental psychology, neuroscience, cognitive science, architectural psychology, and AMI Montessori pedagogy.
          </p>
        </div>

        {/* Team Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {RESEARCH_TEAM.map((member, idx) => (
            <div 
              key={idx}
              className="card-archival"
              style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '2rem', alignItems: 'start', backgroundColor: 'var(--bg-surface)' }}
            >
              {/* Photo Avatar */}
              <div style={{ width: '120px', height: '120px', borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--border-medium)' }}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Bio Details */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.6rem', color: 'var(--text-heading)', margin: 0 }}>
                    {member.name}
                  </h3>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-ochre-dark)', backgroundColor: 'var(--color-ochre-tint)', border: '1px solid var(--color-ochre-light)', padding: '0.2rem 0.6rem', borderRadius: '3px' }}>
                    {member.role}
                  </span>
                </div>

                <div style={{ fontSize: '0.88rem', color: 'var(--color-sage-dark)', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <GraduationCap size={16} />
                  <span>{member.credentials}</span>
                </div>

                <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {member.bio}
                </p>

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {member.areas.map((area, aIdx) => (
                    <span key={aIdx} style={{ fontSize: '0.78rem', backgroundColor: 'var(--bg-parchment)', color: 'var(--text-secondary)', border: '1px solid var(--border-subtle)', padding: '0.2rem 0.65rem', borderRadius: '3px' }}>
                      {area}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
