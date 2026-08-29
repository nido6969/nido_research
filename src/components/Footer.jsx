'use client';
import React, { useState } from 'react';
import { Link } from '../lib/navigation';
import { MapPin, Mail, Phone, X, Shield, FileText } from 'lucide-react';
import NidoLogo from './NidoLogo';

// Crisp SVG icons for social platforms
const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"/>
  </svg>
);

export default function Footer() {
  const [legalModal, setLegalModal] = useState(null);

  return (
    <footer style={{
      backgroundColor: 'var(--bg-parchment, #FAF3E2)',
      borderTop: '1px solid #E5DAC0',
      paddingTop: '3.5rem'
    }}>
      <div className="container-standard">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr',
          gap: '2.5rem',
          paddingBottom: '3.5rem'
        }} className="footer-columns-grid">
          
          {/* Column 1: Brand & Bio with Enlarged Logo */}
          <div>
            <Link 
              to="/"
              style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '1.25rem' }}
            >
              <NidoLogo size="large" />
            </Link>

            <p style={{
              fontSize: '0.85rem',
              color: '#6E675F',
              lineHeight: 1.55,
              marginBottom: '1.5rem',
              maxWidth: '280px'
            }}>
              A research initiative by Nido Montessori School, Bachupally.
            </p>

            {/* Social Links in Small Circles */}
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #D6D0C4',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#4A463F',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#234338';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#234338';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#4A463F';
                  e.currentTarget.style.borderColor = '#D6D0C4';
                }}
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>

              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #D6D0C4',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#4A463F',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#234338';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#234338';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#4A463F';
                  e.currentTarget.style.borderColor = '#D6D0C4';
                }}
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>

              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #D6D0C4',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#4A463F',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#234338';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#234338';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#4A463F';
                  e.currentTarget.style.borderColor = '#D6D0C4';
                }}
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>

              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #D6D0C4',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#4A463F',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#234338';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#234338';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#4A463F';
                  e.currentTarget.style.borderColor = '#D6D0C4';
                }}
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h4 style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#1A1714',
              marginBottom: '1.2rem'
            }}>
              Explore
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li><Link to="/" style={{ fontSize: '0.85rem', color: '#554F47', textDecoration: 'none' }}>Home</Link></li>
              <li><Link to="/research" style={{ fontSize: '0.85rem', color: '#554F47', textDecoration: 'none' }}>Research</Link></li>
              <li><Link to="/publications" style={{ fontSize: '0.85rem', color: '#554F47', textDecoration: 'none' }}>Publications</Link></li>
              <li><Link to="/projects" style={{ fontSize: '0.85rem', color: '#554F47', textDecoration: 'none' }}>Projects</Link></li>
              <li><Link to="/parent-insights" style={{ fontSize: '0.85rem', color: '#554F47', textDecoration: 'none' }}>Insights</Link></li>
              <li><Link to="/resources" style={{ fontSize: '0.85rem', color: '#554F47', textDecoration: 'none' }}>Resources</Link></li>
              <li><Link to="/about" style={{ fontSize: '0.85rem', color: '#554F47', textDecoration: 'none' }}>About</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#1A1714',
              marginBottom: '1.2rem'
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <a href="https://nidomontessori.in" target="_blank" rel="noreferrer" style={{ fontSize: '0.85rem', color: '#554F47' }}>
                  Visit Nido Montessori
                </a>
              </li>
              <li>
                <a href="https://nidomontessori.in/admissions" target="_blank" rel="noreferrer" style={{ fontSize: '0.85rem', color: '#554F47' }}>
                  Admissions
                </a>
              </li>
              <li>
                <a href="https://nidomontessori.in/programs" target="_blank" rel="noreferrer" style={{ fontSize: '0.85rem', color: '#554F47' }}>
                  Programs
                </a>
              </li>
              <li>
                <Link to="/resources" style={{ fontSize: '0.85rem', color: '#554F47', textDecoration: 'none' }}>
                  Parent Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ fontSize: '0.85rem', color: '#554F47', textDecoration: 'none' }}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div>
            <h4 style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#1A1714',
              marginBottom: '1.2rem'
            }}>
              Get in Touch
            </h4>
            
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.85rem', color: '#554F47', marginBottom: '0.9rem' }}>
              <MapPin size={17} color="#C99428" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
              <div>
                <a 
                  href="https://maps.app.goo.gl/RWANXVExPMoDvgXv9" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  Nido Montessori School<br />
                  Bachupally, Hyderabad, Telangana
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '0.85rem', color: '#554F47', marginBottom: '0.9rem' }}>
              <Mail size={16} color="#C99428" style={{ flexShrink: 0 }} />
              <a href="mailto:info@nidomontessori.in" style={{ color: 'inherit' }}>
                info@nidomontessori.in
              </a>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '0.85rem', color: '#554F47' }}>
              <Phone size={16} color="#C99428" style={{ flexShrink: 0 }} />
              <a href="tel:9618853888" style={{ color: 'inherit' }}>
                +91 96188 53888
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Dark Forest Green Bottom Copyright Bar */}
      <div style={{
        backgroundColor: '#1E3E33',
        color: '#D4E2D9',
        padding: '1.1rem 0',
        fontSize: '0.82rem'
      }}>
        <div className="container-standard">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              © 2026 Nido Montessori Research Updates. All rights reserved.
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <button 
                onClick={() => setLegalModal('privacy')}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: '#D4E2D9', 
                  cursor: 'pointer', 
                  fontSize: '0.82rem', 
                  padding: 0,
                  transition: 'color 0.2s ease' 
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#D4E2D9'}
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setLegalModal('terms')}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: '#D4E2D9', 
                  cursor: 'pointer', 
                  fontSize: '0.82rem', 
                  padding: 0,
                  transition: 'color 0.2s ease' 
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#D4E2D9'}
              >
                Terms of Use
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Legal & Policy Modal */}
      {legalModal && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(20, 36, 28, 0.75)',
            backdropFilter: 'blur(8px)',
            zIndex: 1200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem'
          }}
          onClick={() => setLegalModal(null)}
        >
          <div 
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '14px',
              maxWidth: '680px',
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              padding: '2.25rem 2rem',
              boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
              position: 'relative',
              border: '1px solid #E2DDD2'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLegalModal(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: '#FAF3E2',
                border: '1px solid #DFD8CB',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#4A463F'
              }}
            >
              <X size={18} />
            </button>

            {legalModal === 'privacy' ? (
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#A67C2E', marginBottom: '0.4rem' }}>
                  <Shield size={14} color="#A67C2E" />
                  <span>Institutional Compliance</span>
                </div>
                <h2 style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: '1.75rem', fontWeight: 600, color: '#1A1815', marginBottom: '1rem' }}>
                  Privacy & Child Protection Policy
                </h2>
                <div style={{ fontSize: '0.9rem', color: '#554F47', lineHeight: 1.65, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p>
                    <strong>1. Commitment to Child Dignity:</strong> Nido Montessori Research Updates operates under strict ethical guidelines. All naturalistic observations in our classrooms prioritize the child's psychological safety, privacy, and authentic developmental workflow above all else.
                  </p>
                  <p>
                    <strong>2. Anonymization & De-identification:</strong> No identifiable student records, personal demographic identifiers, or home addresses are published in open-access manuscripts or repository datasets. Observational logs use anonymized codes.
                  </p>
                  <p>
                    <strong>3. Parental Consent & Assent:</strong> Observational research at Nido Montessori Preschool is conducted with full institutional parental consent and active classroom guide assent. Parents may request data exclusion at any time.
                  </p>
                  <p>
                    <strong>4. Website Visitor Privacy:</strong> We do not sell, barter, or distribute personal data gathered via newsletter subscriptions or contact forms. All analytical telemetry is strictly privacy-preserving.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#A67C2E', marginBottom: '0.4rem' }}>
                  <FileText size={14} color="#A67C2E" />
                  <span>Scholarly Terms</span>
                </div>
                <h2 style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: '1.75rem', fontWeight: 600, color: '#1A1815', marginBottom: '1rem' }}>
                  Terms of Academic & Clinical Use
                </h2>
                <div style={{ fontSize: '0.9rem', color: '#554F47', lineHeight: 1.65, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p>
                    <strong>1. Open Scholarly Citation:</strong> Research publications, monographs, and case studies published on Nido Montessori Research Updates are made available under academic open-access terms. When citing, please use the provided APA, BibTeX, Chicago, or MLA citation formats.
                  </p>
                  <p>
                    <strong>2. Pedagogical Application:</strong> Montessori practitioners, school founders, and educators are encouraged to implement the practical recommendations and observational findings in their prepared environments.
                  </p>
                  <p>
                    <strong>3. Intellectual Property:</strong> Institutional trademarks, including the Nido Research Institute heraldic emblem and official photographic archives, remain the exclusive property of Nido Montessori Preschool, Bachupally.
                  </p>
                </div>
              </div>
            )}

            <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid #ECE7DE', display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setLegalModal(null)}
                style={{
                  backgroundColor: '#234338',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '0.6rem 1.4rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Close Statement
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
