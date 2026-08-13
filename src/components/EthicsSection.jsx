import React from 'react';
import { ShieldCheck, Lock, EyeOff, FileCheck, UserCheck, Scale } from 'lucide-react';

export default function EthicsSection() {
  return (
    <section id="ethics" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container-standard">
        
        {/* Section Header */}
        <div style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-ochre-dark)', marginBottom: '0.75rem' }}>
          Institutional Responsibility
        </div>

        <div style={{ maxWidth: '800px', marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: 500, color: 'var(--text-heading)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
            Ethics & Child Safeguarding Charter
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            Because NIDO Research Institute conducts inquiry within early childhood environments, child dignity, physical safeguarding, and data privacy precede all scientific ambitions.
          </p>
        </div>

        {/* 6 Ethical Pillars */}
        <div className="grid-3" style={{ gap: '2.5rem', marginBottom: '4rem' }}>
          
          <div className="card-archival" style={{ backgroundColor: 'var(--bg-parchment)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--color-ochre)' }}>
              <ShieldCheck size={24} />
              <h3 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.35rem', color: 'var(--text-heading)', margin: 0 }}>
                Child-First Safeguarding
              </h3>
            </div>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Research activity is strictly secondary to the child's physical, emotional, and psychological well-being. If an observation ever interferes with a child's focus or comfort, observation ceases immediately.
            </p>
          </div>

          <div className="card-archival" style={{ backgroundColor: 'var(--bg-parchment)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--color-sage)' }}>
              <EyeOff size={24} />
              <h3 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.35rem', color: 'var(--text-heading)', margin: 0 }}>
                Visual Privacy & Anonymity
              </h3>
            </div>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              We never publish unblurred facial imagery, full names, or location identifiers of minors. Visual documentation focuses strictly on hands, materials, work processes, and anonymized field sketches.
            </p>
          </div>

          <div className="card-archival" style={{ backgroundColor: 'var(--bg-parchment)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--color-ochre)' }}>
              <Lock size={24} />
              <h3 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.35rem', color: 'var(--text-heading)', margin: 0 }}>
                Air-Gapped Data Storage
              </h3>
            </div>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              All quantitative observational logs are stored on encrypted, air-gapped local repositories. Data transmitted for open science publication is completely stripped of personal metadata.
            </p>
          </div>

          <div className="card-archival" style={{ backgroundColor: 'var(--bg-parchment)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--color-sage)' }}>
              <FileCheck size={24} />
              <h3 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.35rem', color: 'var(--text-heading)', margin: 0 }}>
                Informed Parental Consent
              </h3>
            </div>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Parents are fully briefed on observational methodologies prior to inclusion in longitudinal cohort panels. Parents retain the right to withdraw their child's anonymized data at any time without penalty.
            </p>
          </div>

          <div className="card-archival" style={{ backgroundColor: 'var(--bg-parchment)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--color-ochre)' }}>
              <UserCheck size={24} />
              <h3 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.35rem', color: 'var(--text-heading)', margin: 0 }}>
                Embedded Fellow Vetting
              </h3>
            </div>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              All Research Fellows undergo background verification, child protection certification, and AMI Montessori pedagogical training before entering the observation floor.
            </p>
          </div>

          <div className="card-archival" style={{ backgroundColor: 'var(--bg-parchment)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--color-sage)' }}>
              <Scale size={24} />
              <h3 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.35rem', color: 'var(--text-heading)', margin: 0 }}>
                Independent Ethics Board
              </h3>
            </div>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              An independent Institutional Review Board (IRB) composed of external developmental psychologists, pediatricians, and legal scholars reviews all proposed research protocols annually.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
