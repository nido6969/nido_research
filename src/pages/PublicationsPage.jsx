import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FEATURED_STUDIES, PUBLICATIONS_DATA } from '../data/researchData';
import BorderGlow from '../components/BorderGlow';
import SEO from '../components/SEO';

export default function PublicationsPage() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#FAF3E2', minHeight: '100vh', paddingTop: '1.5rem', paddingBottom: '4rem' }}>
      <SEO 
        title="Montessori Publications & Longitudinal Research Papers"
        description="Browse peer-reviewed early childhood observational research, empirical monographs, and the Founding Case Study of Nido Montessori Preschool Bachupally."
        keywords="Montessori Publications, Early Childhood Research Papers, Montessori Case Study Hyderabad, Shobha Goyal Research, Child Development Studies, Open Access Montessori Journal"
      />
      <div className="container-standard">
        
        {/* Breadcrumbs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#7E766D', marginBottom: '1rem' }}>
          <Link to="/" style={{ color: '#554F47', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <span style={{ color: '#234338', fontWeight: 600 }}>Publications</span>
        </div>

        {/* Hero Header with BorderGlow */}
        <BorderGlow
          borderRadius={14}
          backgroundColor="#FFFFFF"
          glowRadius={36}
          colors={['#234338', '#C99428', '#5E9480']}
          style={{ marginBottom: '2rem' }}
        >
          <div className="card-pad-standard">
            <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C99428', marginBottom: '0.4rem' }}>
              {PUBLICATIONS_DATA.hero.eyebrow}
            </div>
            <h1 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.8rem, 3.2vw, 2.75rem)', fontWeight: 600, color: '#1A1714', lineHeight: 1.2, marginBottom: '0.75rem' }}>
              {PUBLICATIONS_DATA.hero.heading}
            </h1>
            <p style={{ fontSize: '0.98rem', color: '#554F47', maxWidth: '780px', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              {PUBLICATIONS_DATA.hero.intro}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1rem' }}>
              {PUBLICATIONS_DATA.hero.bullets.map((b, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.9rem', color: '#3A3631' }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#234338' }} />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div style={{ fontSize: '0.88rem', fontStyle: 'italic', color: '#6A635B' }}>
              {PUBLICATIONS_DATA.hero.closing}
            </div>
          </div>
        </BorderGlow>

        {/* Featured Research Studies Catalog */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.4rem, 2.4vw, 1.75rem)', fontWeight: 600, color: '#1A1714' }}>
              Published Studies & Papers
            </h2>
            <span style={{ fontSize: '0.82rem', color: '#7E766D' }}>
              Showing {FEATURED_STUDIES.length} Reports
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {FEATURED_STUDIES.map((study) => (
              <BorderGlow
                key={study.id}
                borderRadius={12}
                backgroundColor="#FFFFFF"
                edgeSensitivity={30}
                glowRadius={30}
                colors={['#234338', '#DDBB7B', '#4D8A74']}
                className="study-card hover-lift"
                onClick={() => navigate(`/research-studies/${study.slug}`)}
              >
                <div 
                  style={{
                    cursor: 'pointer',
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
                      {study.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', color: '#C99428', marginBottom: '0.35rem' }}>
                      {study.date} • {study.areaName}
                    </div>
                    <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.15rem', fontWeight: 600, color: '#1A1714', lineHeight: 1.3, marginBottom: '0.5rem' }}>
                      {study.title}
                    </h3>
                    <p style={{ fontSize: '0.84rem', color: '#5C564E', lineHeight: 1.5, marginBottom: '1rem', flex: 1 }}>
                      {study.summary}
                    </p>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.84rem', fontWeight: 600, color: '#234338' }}>
                      <span>Read Full Study</span>
                      <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              </BorderGlow>
            ))}
          </div>
        </div>

        {/* 5 Publication Categories */}
        <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#C99428', '#386684']} style={{ marginBottom: '2rem' }}>
          <div className="card-pad-standard">
            <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.4rem, 2.2vw, 1.65rem)', fontWeight: 600, color: '#1A1714', marginBottom: '1.25rem' }}>
              5 Categories of Publication
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              {PUBLICATIONS_DATA.categories.map((cat, idx) => (
                <BorderGlow key={idx} borderRadius={8} backgroundColor="#FAF3E2" colors={['#234338', '#DDBB7B', '#5A9B80']}>
                  <div style={{ padding: '1rem' }}>
                    <h4 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.05rem', fontWeight: 600, color: '#234338', marginBottom: '0.3rem' }}>
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
        <BorderGlow borderRadius={8} backgroundColor="#F1F6F3" colors={['#234338', '#C99428', '#4D8A74']}>
          <div style={{ padding: '1.25rem 1.5rem', borderLeft: '4px solid #234338' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C99428', marginBottom: '0.25rem' }}>
              {PUBLICATIONS_DATA.note.title}
            </div>
            <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.15rem', fontWeight: 600, color: '#1A1714', marginBottom: '0.4rem' }}>
              "{PUBLICATIONS_DATA.note.heading}"
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#3A3631', lineHeight: 1.55, margin: 0 }}>
              {PUBLICATIONS_DATA.note.text}
            </p>
          </div>
        </BorderGlow>

      </div>
    </div>
  );
}
