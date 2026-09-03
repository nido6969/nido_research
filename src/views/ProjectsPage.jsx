'use client';
import React from 'react';
import { Link, useNavigate } from '../lib/navigation';
import { ArrowRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/researchData';
import SpecularButton from '../components/SpecularButton';
import TrustBar from '../components/TrustBar';
import SEO from '../components/SEO';

export default function ProjectsPage() {
  const navigate = useNavigate();
  const hero = PROJECTS_DATA?.hero || {};
  const projects = PROJECTS_DATA?.projects || [];
  const banner = PROJECTS_DATA?.banner || {};

  return (
    <div style={{ backgroundColor: '#FAF8F5', minHeight: '100vh', paddingTop: '1.5rem', paddingBottom: '4rem' }}>
      <SEO 
        title="Current Research Projects | Nido Montessori"
        description="Some questions deserve time. Explore ongoing longitudinal research projects into toddler independence, Montessori at home, concentration, and mixed-age peer learning."
        keywords="Montessori Projects, Longitudinal Child Studies, Ongoing Research Cohorts Hyderabad, Nido Montessori Inquiries, Early Childhood Science"
      />
      <div className="container-standard">
        
        {/* Breadcrumbs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#7E766D', marginBottom: '1.25rem' }}>
          <Link href="/" style={{ color: '#554F47', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <span style={{ color: '#234338', fontWeight: 600 }}>Projects</span>
        </div>

        {/* Hero Section (Seamless, No Background Container) */}
        <div style={{
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: 'none',
          padding: '0.5rem 0 1.5rem 0',
          marginBottom: '1.5rem'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
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
            <span>{hero.eyebrow}</span>
          </div>
          
          <h1 style={{
            fontFamily: "'Newsreader', Georgia, serif",
            fontSize: 'clamp(2.2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: '#234338',
            lineHeight: 1.2,
            margin: '0 0 1rem 0'
          }}>
            {hero.heading}
          </h1>
          
          <div style={{
            fontSize: '1rem',
            color: '#1A1714',
            maxWidth: '860px',
            lineHeight: 1.7,
            margin: 0
          }}>
            {hero.body?.map((p, idx) => (
              <p key={idx} style={{ marginBottom: idx < hero.body.length - 1 ? '0.75rem' : 0, color: '#1A1714' }}>
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Current Research Projects Grid */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h2 style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#234338', margin: 0 }}>
              Current Research Projects
            </h2>
            <span style={{ fontSize: '0.85rem', color: '#8A8275', fontWeight: 600 }}>
              {projects.length} Ongoing Projects
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {projects.map((proj) => (
              <div
                key={proj.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E5DFD2',
                  padding: '1.85rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 16px rgba(24, 21, 18, 0.04)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#234338';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(35, 67, 56, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#E5DFD2';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(24, 21, 18, 0.04)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#234338',
                    backgroundColor: '#EEF4F0',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '6px',
                    border: '1px solid #D6E4DB'
                  }}>
                    {proj.number}
                  </span>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    backgroundColor: '#FAF3E2',
                    color: '#C88528',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '4px',
                    border: '1px solid #EADBBA'
                  }}>
                    Status: {proj.status}
                  </span>
                </div>

                {/* Subheading in Black */}
                <h3 style={{
                  fontFamily: "'Newsreader', Georgia, serif",
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: '#1A1714',
                  lineHeight: 1.3,
                  marginBottom: '0.65rem'
                }}>
                  {proj.title}
                </h3>

                {/* Question in Warm Orange, Italic */}
                <div style={{
                  fontSize: '0.94rem',
                  fontStyle: 'italic',
                  color: '#C88528',
                  fontWeight: 500,
                  lineHeight: 1.5,
                  marginBottom: '0.85rem',
                  fontFamily: "'Newsreader', Georgia, serif"
                }}>
                  "{proj.question}"
                </div>

                {/* Description in Deep Black */}
                <p style={{
                  fontSize: '0.9rem',
                  color: '#1A1714',
                  lineHeight: 1.65,
                  margin: 0
                }}>
                  {proj.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Project Journey Section (Verbatim from PDF page 10) */}
        {PROJECTS_DATA?.journey && (
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #E5DFD2',
            padding: '2.5rem 3rem',
            boxShadow: '0 4px 20px rgba(24, 21, 18, 0.04)',
            marginBottom: '3.5rem'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
              alignItems: 'flex-start'
            }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C88528' }}>
                RESEARCH LIFECYCLE
              </div>
              <h2 style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: '#234338', margin: 0 }}>
                {PROJECTS_DATA.journey.title}
              </h2>
              <div style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#1A1714',
                letterSpacing: '0.04em',
                padding: '0.75rem 1.25rem',
                backgroundColor: '#FAF8F5',
                borderRadius: '8px',
                border: '1px solid #E5DFD2'
              }}>
                {PROJECTS_DATA.journey.steps}
              </div>
              <p style={{
                fontSize: '0.98rem',
                fontStyle: 'italic',
                color: '#C88528',
                lineHeight: 1.6,
                margin: 0
              }}>
                {PROJECTS_DATA.journey.tagline}
              </p>
            </div>
          </div>
        )}

      </div>

      <div style={{ marginTop: '2rem' }}>
        <TrustBar />
      </div>
    </div>
  );
}
