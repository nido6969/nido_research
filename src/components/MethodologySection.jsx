import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function MethodologySection() {
  return (
    <section id="methodology" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-parchment)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container-standard">
        
        {/* Section Header */}
        <div style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-ochre-dark)', marginBottom: '0.75rem' }}>
          Scientific Rigor & Framework
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: 500, color: 'var(--text-heading)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
          The NIDO Observation Methodology
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: '850px', marginBottom: '4rem' }}>
          Institutional credibility rests on methodological transparency. We operate on the principle of <strong>Ecological Validity</strong>—collecting high-density quantitative and qualitative child development data inside authentic learning environments without introducing observer disruption.
        </p>

        {/* Comparative Analysis Grid: Embedded Ecological vs Sterile Lab Studies */}
        <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-medium)', borderRadius: '10px', padding: '3rem', marginBottom: '4rem', boxShadow: 'var(--shadow-card)' }}>
          <h3 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.8rem', color: 'var(--text-heading)', marginBottom: '2rem', textAlign: 'center' }}>
            Ecological Context vs. Sterile Laboratory Research
          </h3>

          <div className="grid-2" style={{ gap: '2.5rem' }}>
            
            {/* Column 1: NIDO Embedded Ecological Method */}
            <div style={{ backgroundColor: 'var(--bg-parchment)', border: '2px solid var(--color-sage)', borderRadius: '8px', padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-sage-dark)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
                <CheckCircle2 size={18} color="var(--color-sage)" />
                <span>NIDO Embedded Research Protocol</span>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.1rem', fontSize: '0.94rem', color: 'var(--text-primary)' }}>
                <li style={{ display: 'flex', gap: '0.75rem' }}>
                  <strong style={{ color: 'var(--color-sage-dark)' }}>• Environment:</strong>
                  <span>Natural daily Montessori Prepared Environment with 3-hour work cycles.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem' }}>
                  <strong style={{ color: 'var(--color-sage-dark)' }}>• Observer Presence:</strong>
                  <span>Embedded Research Fellows who are familiar daily guides; children feel zero novelty stress.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem' }}>
                  <strong style={{ color: 'var(--color-sage-dark)' }}>• Tasks:</strong>
                  <span>Real self-chosen work with physical materials, real peer interactions, and authentic consequences.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem' }}>
                  <strong style={{ color: 'var(--color-sage-dark)' }}>• Time Horizon:</strong>
                  <span>Continuous longitudinal tracking across 3 to 7 consecutive years.</span>
                </li>
              </ul>
            </div>

            {/* Column 2: Standard Lab Research */}
            <div style={{ backgroundColor: 'var(--bg-parchment)', border: '1px solid var(--border-medium)', borderRadius: '8px', padding: '2rem', opacity: 0.85 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
                <XCircle size={18} color="var(--text-muted)" />
                <span>Conventional Laboratory Research</span>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.1rem', fontSize: '0.94rem', color: 'var(--text-secondary)' }}>
                <li style={{ display: 'flex', gap: '0.75rem' }}>
                  <strong style={{ color: 'var(--text-heading)' }}>• Environment:</strong>
                  <span>Isolated testing rooms, stranger presence, artificial equipment setups.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem' }}>
                  <strong style={{ color: 'var(--text-heading)' }}>• Observer Presence:</strong>
                  <span>Unknown external researchers inducing performance anxiety or visual compliance.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem' }}>
                  <strong style={{ color: 'var(--text-heading)' }}>• Tasks:</strong>
                  <span>Forced computer tasks, standardized flashcards, or short artificial puzzles.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem' }}>
                  <strong style={{ color: 'var(--text-heading)' }}>• Time Horizon:</strong>
                  <span>Single 20-minute snapshot sessions; high attrition rates.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* 4 Pillars of Data Governance */}
        <div className="grid-4" style={{ gap: '2rem' }}>
          <div className="card-archival">
            <h4 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-heading)' }}>
              1. Non-Intrusive Coding
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
              Observers log metrics silently using standardized shorthands. Work is never interrupted for testing or questioning.
            </p>
          </div>

          <div className="card-archival">
            <h4 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-heading)' }}>
              2. Double-Blind Anonymization
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
              All child IDs are stripped of names, dates of birth, and personal identifiers. Data is stored under alphanumeric keys.
            </p>
          </div>

          <div className="card-archival">
            <h4 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-heading)' }}>
              3. Data Integrity & Validation
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
              Observations undergo inter-rater reliability checks (Cohen's Kappa &gt; 0.85) across independent fellows before archiving.
            </p>
          </div>

          <div className="card-archival">
            <h4 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-heading)' }}>
              4. Open Science DOIs
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
              Pre-prints, protocols, and anonymized datasets receive permanent Digital Object Identifiers (DOIs) registered on Zenodo.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
