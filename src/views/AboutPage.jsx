'use client';
import React from 'react';
import { Link } from '../lib/navigation';
import { MapPin, ExternalLink, Mail, Phone } from 'lucide-react';
import { ABOUT_DATA, INSTITUTION_INFO } from '../data/researchData';
import BorderGlow from '../components/BorderGlow';
import NidoLogo from '../components/NidoLogo';
import TrustBar from '../components/TrustBar';
import SEO from '../components/SEO';

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#FAF8F5', minHeight: '100vh', paddingTop: '1.5rem', paddingBottom: '4rem' }}>
      <SEO 
        title="About NIDO Research Institute | AMI Flagship Montessori in Hyderabad"
        description="Learn about NIDO Research Institute, our founding story at Nido Montessori Preschool Bachupally, our 6 guiding pedagogical principles, and our partnership with Blue Blocks School."
        keywords="About Nido Montessori, Nido Research Institute Background, Shobha Goyal, Bachupally Montessori Campus, AMI Montessori Principles, IMF Flagship School Hyderabad"
      />
      <div className="container-standard">
        
        {/* Breadcrumbs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#7E766D', marginBottom: '1.25rem' }}>
          <Link to="/" style={{ color: '#554F47', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <span style={{ color: '#234338', fontWeight: 600 }}>About</span>
        </div>

        {/* Hero Header (Seamless, Transparent) */}
        <div style={{
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: 'none',
          padding: '0.5rem 0 1.5rem 0',
          marginBottom: '1.5rem'
        }}>
          <div style={{ marginBottom: '1.25rem' }}>
            <NidoLogo size="large" />
          </div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#234338',
            backgroundColor: '#EEF4F0',
            padding: '0.3rem 0.75rem',
            borderRadius: '9999px',
            border: '1px solid #D6E4DB',
            marginBottom: '0.75rem'
          }}>
            <span>{ABOUT_DATA.hero.eyebrow}</span>
          </div>
          <h1 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 700, color: '#234338', lineHeight: 1.2, margin: '0 0 0.5rem 0' }}>
            {ABOUT_DATA.hero.heading}
          </h1>
          <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#1A1714', marginBottom: '0.85rem' }}>
            {ABOUT_DATA.hero.subheading}
          </div>
          <p style={{ fontSize: '1rem', color: '#1A1714', maxWidth: '860px', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            {ABOUT_DATA.hero.intro}
          </p>

          <div style={{ fontSize: '0.94rem', fontStyle: 'italic', color: '#C88528', backgroundColor: '#FAF3E2', borderLeft: '4px solid #C88528', padding: '0.85rem 1.25rem', borderRadius: '6px', display: 'inline-block' }}>
            "{ABOUT_DATA.hero.startingPoint}"
          </div>
        </div>

        {/* Our Story with BorderGlow */}
        <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#DDBB7B', '#5A9B80']} style={{ marginBottom: '2rem' }}>
          <div className="card-pad-standard">
            <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.4rem, 2.4vw, 1.75rem)', fontWeight: 600, color: '#234338', marginBottom: '0.75rem' }}>
              {ABOUT_DATA.ourStory.title}
            </h2>
            <p style={{ fontSize: '0.98rem', color: '#3A3631', lineHeight: 1.65, margin: 0 }}>
              {ABOUT_DATA.ourStory.content}
            </p>
          </div>
        </BorderGlow>

        {/* Why We Research with BorderGlow */}
        <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#C99428', '#386684']} style={{ marginBottom: '2rem' }}>
          <div className="card-pad-standard">
            <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.4rem, 2.4vw, 1.75rem)', fontWeight: 600, color: '#234338', marginBottom: '0.35rem' }}>
              {ABOUT_DATA.whyWeResearch.title}
            </h2>
            <div style={{ fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C99428', marginBottom: '0.75rem' }}>
              {ABOUT_DATA.whyWeResearch.tagline}
            </div>
            <p style={{ fontSize: '0.98rem', color: '#3A3631', lineHeight: 1.65, margin: 0 }}>
              {ABOUT_DATA.whyWeResearch.content}
            </p>
          </div>
        </BorderGlow>

        {/* Our 6 Guiding Principles with BorderGlow */}
        <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#DDBB7B', '#4D8A74']} style={{ marginBottom: '2rem' }}>
          <div className="card-pad-standard">
            <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C99428', marginBottom: '0.35rem' }}>
              CORE FOUNDATIONS
            </div>
            <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.4rem, 2.4vw, 1.75rem)', fontWeight: 600, color: '#234338', marginBottom: '1.25rem' }}>
              Our 6 Guiding Principles
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {ABOUT_DATA.principles.map((pr, idx) => (
                <BorderGlow key={idx} borderRadius={8} backgroundColor="#FAF3E2" colors={['#234338', '#C99428', '#5A9B80']}>
                  <div style={{ padding: '1.25rem' }}>
                    <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#C99428', marginBottom: '0.25rem' }}>
                      PRINCIPLE {pr.number}
                    </div>
                    <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.15rem', fontWeight: 600, color: '#1A1714', marginBottom: '0.35rem' }}>
                      {pr.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#1A1714', lineHeight: 1.55, margin: 0 }}>
                      {pr.description.includes('BEING!') ? (
                        <>
                          {pr.description.replace('BEING!', '')}
                          <span style={{ color: '#C88528', fontWeight: 700 }}>BEING!</span>
                        </>
                      ) : (
                        pr.description
                      )}
                    </p>
                  </div>
                </BorderGlow>
              ))}
            </div>
          </div>
        </BorderGlow>

        {/* Our Relationship with Montessori with BorderGlow */}
        <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#C99428', '#386684']} style={{ marginBottom: '2rem' }}>
          <div className="card-pad-standard">
            <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#234338', marginBottom: '0.35rem' }}>
              {ABOUT_DATA.relationshipWithMontessori.heading}
            </div>
            <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.4rem, 2.4vw, 1.75rem)', fontWeight: 600, color: '#234338', marginBottom: '1rem' }}>
              {ABOUT_DATA.relationshipWithMontessori.title}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {ABOUT_DATA.relationshipWithMontessori.paragraphs.map((p, idx) => (
                <p key={idx} style={{ fontSize: '0.96rem', color: '#1A1714', lineHeight: 1.65, margin: 0 }}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </BorderGlow>

        {/* Contact & Inquiries Box with BorderGlow */}
        <BorderGlow
          borderRadius={12}
          backgroundColor="#234338"
          glowColor="42 80 80"
          glowRadius={36}
          colors={['#DDBB7B', '#2E6351', '#FFE39B']}
          fillOpacity={0.3}
        >
          <div className="card-pad-standard" style={{ color: '#FFFFFF' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#DDBB7B', marginBottom: '0.35rem' }}>
              CONTACT
            </div>
            <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.4rem, 2.4vw, 1.75rem)', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.5rem' }}>
              {ABOUT_DATA.contact.heading}
            </h2>
            <p style={{ fontSize: '0.94rem', color: '#D4E2DC', marginBottom: '1.5rem', maxWidth: '720px', lineHeight: 1.5 }}>
              {ABOUT_DATA.contact.subheading}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#DDBB7B', fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  <MapPin size={15} />
                  <span>Visit</span>
                </div>
                <div style={{ fontSize: '0.9rem', color: '#FFFFFF', lineHeight: 1.45 }}>
                  {ABOUT_DATA.contact.visit}
                </div>
                <a
                  href={ABOUT_DATA.contact.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.82rem',
                    color: '#DDBB7B',
                    marginTop: '0.35rem',
                    textDecoration: 'none'
                  }}
                >
                  <span>View on Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#DDBB7B', fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  <Mail size={15} />
                  <span>Email</span>
                </div>
                <a href={`mailto:${ABOUT_DATA.contact.email}`} style={{ fontSize: '0.9rem', color: '#FFFFFF', textDecoration: 'none' }}>
                  {ABOUT_DATA.contact.email}
                </a>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#DDBB7B', fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  <Phone size={15} />
                  <span>Phone</span>
                </div>
                <a href={`tel:${ABOUT_DATA.contact.phone}`} style={{ fontSize: '0.9rem', color: '#FFFFFF', textDecoration: 'none' }}>
                  {ABOUT_DATA.contact.phone}
                </a>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#DDBB7B', fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  <ExternalLink size={15} />
                  <span>Website</span>
                </div>
                <a href="https://nidomontessori.in" target="_blank" rel="noreferrer" style={{ fontSize: '0.9rem', color: '#FFFFFF', textDecoration: 'none' }}>
                  nidomontessori.in ↗
                </a>
              </div>
            </div>
          </div>
        </BorderGlow>

      </div>

      <div style={{ marginTop: '3rem' }}>
        <TrustBar />
      </div>
    </div>
  );
}
