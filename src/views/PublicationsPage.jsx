'use client';
import React from 'react';
import { Link, useNavigate } from '../lib/navigation';
import { ArrowRight } from 'lucide-react';
import { FEATURED_STUDIES, PUBLICATIONS_DATA } from '../data/researchData';
import BorderGlow from '../components/BorderGlow';
import TrustBar from '../components/TrustBar';
import SEO from '../components/SEO';

export default function PublicationsPage() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#FAF8F5', minHeight: '100vh', paddingTop: '1.5rem', paddingBottom: '4rem' }}>
      <SEO 
        title="Montessori Publications & Longitudinal Research Papers"
        description="Browse peer-reviewed early childhood observational research, empirical monographs, and the Founding Case Study of Nido Montessori Preschool Bachupally."
        keywords="Montessori Publications, Early Childhood Research Papers, Montessori Case Study Hyderabad, Shobha Goyal Research, Child Development Studies, Open Access Montessori Journal"
      />
      <div className="container-standard">
        
        {/* Breadcrumbs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#7E766D', marginBottom: '1.25rem' }}>
          <Link to="/" style={{ color: '#554F47', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <span style={{ color: '#234338', fontWeight: 600 }}>Publications</span>
        </div>

        {/* Hero Header (Seamless, Transparent) */}
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
            <span>{PUBLICATIONS_DATA.hero.eyebrow}</span>
          </div>
          <h1 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 700, color: '#234338', lineHeight: 1.2, margin: '0 0 1rem 0' }}>
            {PUBLICATIONS_DATA.hero.heading}
          </h1>
          <p style={{ fontSize: '1rem', color: '#1A1714', maxWidth: '860px', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            {PUBLICATIONS_DATA.hero.intro}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
            {PUBLICATIONS_DATA.hero.bullets.map((b, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.94rem', color: '#1A1714' }}>
                <span style={{ color: '#234338', fontWeight: 700 }}>•</span>
                <span>{b}</span>
              </div>
            ))}
          </div>

          <div style={{ fontSize: '0.95rem', fontStyle: 'italic', color: '#C88528', fontWeight: 500 }}>
            {PUBLICATIONS_DATA.hero.closing}
          </div>
        </div>

        {/* Featured Research Studies Catalog */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.4rem, 2.4vw, 1.75rem)', fontWeight: 600, color: '#234338' }}>
              Featured Publications
            </h2>
            <span style={{ fontSize: '0.82rem', color: '#7E766D' }}>
              Showing {FEATURED_STUDIES.length} Publications
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {FEATURED_STUDIES.map((study, index) => {
              const isOriginal = index === 0;
              return (
                <BorderGlow
                  key={study.id}
                  borderRadius={12}
                  backgroundColor="#FFFFFF"
                  edgeSensitivity={28}
                  glowRadius={30}
                  colors={['#234338', '#DDBB7B', '#4D8A74']}
                  className={`study-card ${isOriginal ? 'hover-lift' : ''}`}
                  onClick={isOriginal ? () => navigate(`/research-studies/${study.slug}`) : undefined}
                  style={{ cursor: isOriginal ? 'pointer' : 'default' }}
                >
                  <div 
                    style={{
                      cursor: isOriginal ? 'pointer' : 'default',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%'
                    }}
                  >
                    {/* Photo */}
                    <div style={{ height: '165px', position: 'relative', overflow: 'hidden', backgroundColor: '#EDE8DE', borderRadius: '12px 12px 0 0' }}>
                      <img 
                        src={study.image} 
                        alt={study.title}
                        width={360}
                        height={165}
                        loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <span style={{
                        position: 'absolute',
                        top: '0.75rem',
                        left: '0.75rem',
                        backgroundColor: '#FFFFFF',
                        color: '#1A1714',
                        fontSize: '0.62rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.12)'
                      }}>
                        {isOriginal ? study.badge : 'IN PROGRESS'}
                      </span>
                    </div>

                    {/* Content */}
                    <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', color: '#C99428', marginBottom: '0.35rem' }}>
                        {isOriginal ? (study.status || 'Research Study') : 'Upcoming Study'} | {study.date}
                      </div>
                      <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.15rem', fontWeight: 600, color: '#1A1714', lineHeight: 1.3, marginBottom: '0.5rem' }}>
                        {study.title}
                      </h3>
                      <p style={{ fontSize: '0.84rem', color: '#5C564E', lineHeight: 1.5, marginBottom: '1rem', flex: 1 }}>
                        {study.summary}
                      </p>
                      {isOriginal ? (
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.84rem', fontWeight: 600, color: '#234338' }}>
                          <span>Read Publication</span>
                          <ArrowRight size={13} />
                        </div>
                      ) : (
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem', fontWeight: 600, color: '#8C857B', userSelect: 'none' }}>
                          <span>Study in Progress</span>
                        </div>
                      )}
                    </div>
                  </div>
                </BorderGlow>
              );
            })}
          </div>
        </div>

        {/* 5 Publication Categories */}
        <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#C99428', '#386684']} style={{ marginBottom: '2rem' }}>
          <div className="card-pad-standard">
            <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.4rem, 2.2vw, 1.65rem)', fontWeight: 600, color: '#234338', marginBottom: '1.25rem' }}>
              Publication Categories
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              {PUBLICATIONS_DATA.categories.map((cat, idx) => (
                <BorderGlow key={idx} borderRadius={8} backgroundColor="#FAF3E2" colors={['#234338', '#DDBB7B', '#5A9B80']}>
                  <div style={{ padding: '1rem' }}>
                    <h4 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.05rem', fontWeight: 600, color: '#1A1714', marginBottom: '0.3rem' }}>
                      {cat.title}
                    </h4>
                    <p style={{ fontSize: '0.82rem', color: '#5C564E', lineHeight: 1.45, margin: 0 }}>
                      {cat.description}
                    </p>
                  </div>
                </BorderGlow>
              ))}
            </div>
          </div>
        </BorderGlow>

        {/* Note About Publications */}
        <div style={{
          backgroundColor: '#FAF8F5',
          borderRadius: '12px',
          border: '1px solid #E5DFD2',
          borderLeft: '4px solid #C88528',
          padding: '1.5rem 1.85rem',
          marginBottom: '2rem'
        }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#234338', marginBottom: '0.35rem' }}>
            {PUBLICATIONS_DATA.note.title}
          </div>
          <h3 style={{
            fontFamily: "'Newsreader', serif",
            fontSize: '1.25rem',
            fontStyle: 'italic',
            fontWeight: 600,
            color: '#C88528',
            marginBottom: '0.65rem'
          }}>
            "{PUBLICATIONS_DATA.note.heading}"
          </h3>
          <p style={{ fontSize: '0.92rem', color: '#1A1714', lineHeight: 1.65, margin: 0 }}>
            {PUBLICATIONS_DATA.note.text}
          </p>
        </div>

      </div>

      <div style={{ marginTop: '3rem' }}>
        <TrustBar />
      </div>
    </div>
  );
}
