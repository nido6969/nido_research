import React from 'react';
import { ShieldCheck, ArrowUpRight, MapPin } from 'lucide-react';

export default function Footer({ setActiveView, onOpenCollaborate }) {
  const handleNav = (view) => {
    setActiveView(view);
    window.location.hash = view;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: '#191512', color: '#E5DFD5', borderTop: '2px solid var(--color-ochre)', paddingTop: '4.5rem', paddingBottom: '3rem' }}>
      <div className="container-standard">
        <div className="grid-4" style={{ gap: '3rem', marginBottom: '4rem' }}>
          
          {/* Column 1: Institutional Foundation */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <img 
                src="/images/nido-logo.png" 
                alt="NIDO Logo" 
                style={{ height: '42px', filter: 'brightness(1.1) contrast(0.95)' }} 
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.2rem', color: '#FFF', fontWeight: 600 }}>
                  NIDO
                </span>
                <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-ochre-light)' }}>
                  Research Institute
                </span>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#A8A095', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              An independent academic research institute studying childhood development, cognition, and human potential through embedded longitudinal observation inside natural Montessori environments.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-ochre-light)' }}>
              <MapPin size={15} />
              <span>Hyderabad, Telangana, India</span>
            </div>
          </div>

          {/* Column 2: Research Territories */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif-heading)', color: '#FFF', fontSize: '1.1rem', marginBottom: '1.25rem', borderBottom: '1px solid #332C26', paddingBottom: '0.5rem' }}>
              Research Territories
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', color: '#B5AC9E' }}>
              <li><button onClick={() => handleNav('research-areas')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left' }}>Childhood & Development</button></li>
              <li><button onClick={() => handleNav('research-areas')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left' }}>Montessori Pedagogy</button></li>
              <li><button onClick={() => handleNav('research-areas')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left' }}>Learning & Cognition</button></li>
              <li><button onClick={() => handleNav('research-areas')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left' }}>Creativity & Innovation</button></li>
              <li><button onClick={() => handleNav('research-areas')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left' }}>Social & Emotional Agency</button></li>
              <li><button onClick={() => handleNav('research-areas')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left' }}>Nature & Bio-Observation</button></li>
            </ul>
          </div>

          {/* Column 3: Institutional Navigation */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif-heading)', color: '#FFF', fontSize: '1.1rem', marginBottom: '1.25rem', borderBottom: '1px solid #332C26', paddingBottom: '0.5rem' }}>
              The Institute
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', color: '#B5AC9E' }}>
              <li><button onClick={() => handleNav('institute')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>About the Institute</button></li>
              <li><button onClick={() => handleNav('methodology')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>Observation Methodology</button></li>
              <li><button onClick={() => handleNav('publications')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>Publications & Pre-prints</button></li>
              <li><button onClick={() => handleNav('field-notes')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>Field Notes & Dispatches</button></li>
              <li><button onClick={() => handleNav('ethics')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>Child Safeguarding & Ethics</button></li>
              <li><button onClick={() => handleNav('team')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>Research Team</button></li>
              <li><button onClick={onOpenCollaborate} style={{ background: 'none', border: 'none', color: 'var(--color-ochre-light)', cursor: 'pointer', fontWeight: 600 }}>Explore Collaboration →</button></li>
            </ul>
          </div>

          {/* Column 4: School Connection & Open Science */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif-heading)', color: '#FFF', fontSize: '1.1rem', marginBottom: '1.25rem', borderBottom: '1px solid #332C26', paddingBottom: '0.5rem' }}>
              School Connection
            </h4>
            <div style={{ backgroundColor: '#241F1A', border: '1px solid #383028', borderRadius: '6px', padding: '1rem', marginBottom: '1.25rem' }}>
              <p style={{ fontSize: '0.82rem', color: '#C9BCA7', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                NIDO Research Institute is the dedicated research and inquiry arm rooted in the daily life of:
              </p>
              <a 
                href="https://nidomontessori.in" 
                target="_blank" 
                rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-ochre-light)', fontSize: '0.88rem', fontWeight: 600 }}
              >
                <span>NIDO Montessori Preschool</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
            <div style={{ fontSize: '0.8rem', color: '#8C8275', lineHeight: 1.5 }}>
              <p>Zenodo Open Science Repository: DOIs assigned to all published pre-prints and naturalistic data protocols.</p>
            </div>
          </div>

        </div>

        {/* Ethical Notice Banner */}
        <div style={{ backgroundColor: '#221D18', border: '1px solid #332B22', borderRadius: '6px', padding: '1.25rem 1.75rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <ShieldCheck size={22} color="var(--color-ochre)" />
            <div style={{ fontSize: '0.85rem', color: '#C9BCA7' }}>
              <strong style={{ color: '#FFF' }}>Child Privacy & Ethical Integrity:</strong> All research is conducted under non-intrusive embedded protocols. Children's identity is strictly anonymized.
            </div>
          </div>
          <button onClick={() => handleNav('ethics')} style={{ background: 'none', border: '1px solid var(--color-ochre)', color: 'var(--color-ochre-light)', padding: '0.35rem 0.85rem', borderRadius: '4px', fontSize: '0.8rem', cursor: 'pointer' }}>
            View Ethics Charter
          </button>
        </div>

        {/* Bottom Line & Legal */}
        <div style={{ borderTop: '1px solid #2B2520', paddingTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', fontSize: '0.82rem', color: '#7A7165' }}>
          <div>
            © {new Date().getFullYear()} NIDO Research Institute. All rights reserved. Registered Academic Research Unit.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <button onClick={() => handleNav('ethics')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>Privacy Policy</button>
            <button onClick={() => handleNav('ethics')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>Safeguarding Guidelines</button>
            <button onClick={() => handleNav('contact')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>Academic Contact</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
