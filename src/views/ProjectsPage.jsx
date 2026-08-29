'use client';
import React from 'react';
import { Link } from '../lib/navigation';
import { Clock } from 'lucide-react';
import { PROJECTS_DATA } from '../data/researchData';
import BorderGlow from '../components/BorderGlow';
import LightTunnel from '../components/LightTunnel';
import SEO from '../components/SEO';

export default function ProjectsPage() {
  const hero = PROJECTS_DATA?.hero || {
    eyebrow: "ONGOING PROJECTS",
    heading: "Some Questions Deserve Time.",
    intro: "Not every question can be answered in a few weeks. Some require months of observation while others grow into entirely new questions along the way."
  };

  const projects = PROJECTS_DATA?.projects || [];
  const journey = PROJECTS_DATA?.journey || {
    eyebrow: "HOW RESEARCH UNFOLDS",
    heading: "The Project Journey",
    intro: "Every research project at Nido moves through a disciplined, patient sequence of classroom observation and reflection.",
    stages: []
  };

  return (
    <div style={{ backgroundColor: '#FAF3E2', minHeight: '100vh', paddingTop: '1.5rem', paddingBottom: '4rem' }}>
      <SEO 
        title="Ongoing Longitudinal Projects & Inquiries | Montessori Research"
        description="Explore ongoing multi-year longitudinal research cohorts investigating executive function, spatial cognition, language acquisition, and mixed-age dynamics."
        keywords="Montessori Projects, Longitudinal Child Studies, Ongoing Research Cohorts Hyderabad, Nido Montessori Inquiries, Early Childhood Science"
      />
      <div className="container-standard">
        
        {/* Breadcrumbs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#7E766D', marginBottom: '1rem' }}>
          <Link to="/" style={{ color: '#554F47', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <span style={{ color: '#234338', fontWeight: 600 }}>Projects</span>
        </div>

        {/* Hero Section with Interactive <LightTunnel /> */}
        <div className="page-hero-banner" style={{ backgroundColor: '#1E351C' }}>
          {/* LightTunnel Canvas */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'auto' }}>
            <LightTunnel
              cableColor="#C88528"
              pulseColor="#5A713C"
              tunnelColor="#152614"
              tunnelOpacity={0.25}
              speed={0.12}
              flowDirection="outward"
              pulseSpeed={2.2}
              pulseLength={0.28}
              pulseBlend={1}
              pulseWidth={1}
              cableCount={22}
              thickness={0.35}
              rimWidth={0.15}
              waviness={0.3}
              sway={0.5}
              size={1.0}
              centerX={0.0}
              centerY={0.0}
              glow={1.2}
              fadeNear={0.5}
              fadeFar={2}
              brightness={1.05}
              colorVariance={true}
              grain={true}
              grainIntensity={0.04}
              opacity={0.95}
              mouseInteraction={true}
              mouseStrength={0.12}
            />
          </div>

          {/* Foreground Hero Content */}
          <div className="page-hero-content">
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              backgroundColor: 'rgba(15, 36, 29, 0.75)',
              backdropFilter: 'blur(8px)',
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              border: '1px solid rgba(221, 187, 123, 0.35)',
              marginBottom: '0.75rem'
            }}>
              <span style={{ color: '#DDBB7B' }}>{hero.eyebrow}</span>
            </div>
            
            <h1 style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
              fontWeight: 600,
              color: '#FFFFFF',
              lineHeight: 1.15,
              marginBottom: '0.75rem',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.4)'
            }}>
              {hero.heading}
            </h1>
            
            <p style={{
              fontSize: '1rem',
              color: '#F0F7F3',
              maxWidth: '820px',
              lineHeight: 1.55,
              margin: 0,
              textShadow: '0 1px 6px rgba(0, 0, 0, 0.4)'
            }}>
              {hero.intro}
            </p>
          </div>
        </div>

        {/* 4 Ongoing Projects Grid */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.4rem, 2.4vw, 1.75rem)', fontWeight: 600, color: '#1A1714' }}>
              Active Research Cohorts & Studies
            </h2>
            <span style={{ fontSize: '0.82rem', color: '#7E766D' }}>
              {projects.length} Inquiries
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {projects.map((proj, idx) => (
              <BorderGlow
                key={proj.id || idx}
                borderRadius={12}
                backgroundColor="#FFFFFF"
                edgeSensitivity={30}
                glowRadius={30}
                colors={['#234338', '#DDBB7B', '#4D8A74']}
                className="hover-lift"
              >
                <div style={{
                  padding: '1.35rem 1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
                    <span style={{
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      backgroundColor: '#EEF4F0',
                      color: '#234338',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px'
                    }}>
                      {proj.status || 'Ongoing'}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#888075', fontWeight: 600 }}>
                      PROJECT 0{idx + 1}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.2rem', fontWeight: 600, color: '#1A1714', lineHeight: 1.3, marginBottom: '0.5rem' }}>
                    {proj.title}
                  </h3>

                  <div style={{ fontSize: '0.88rem', fontStyle: 'italic', color: '#C99428', fontWeight: 600, marginBottom: '0.65rem' }}>
                    "{proj.question}"
                  </div>

                  <p style={{ fontSize: '0.86rem', color: '#554F47', lineHeight: 1.55, marginBottom: '1.25rem', flex: 1 }}>
                    {proj.description}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.8rem', color: '#234338', fontWeight: 600, paddingTop: '0.85rem', borderTop: '1px solid #F0ECE4' }}>
                    <Clock size={14} />
                    <span>Longitudinal observation in progress</span>
                  </div>
                </div>
              </BorderGlow>
            ))}
          </div>
        </div>

        {/* Project Journey Lifecycle */}
        {journey && journey.stages && (
          <BorderGlow
            borderRadius={12}
            backgroundColor="#FFFFFF"
            glowRadius={32}
            colors={['#234338', '#C99428', '#386684']}
          >
            <div className="card-pad-standard">
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C99428', marginBottom: '0.35rem' }}>
                {journey.eyebrow}
              </div>
              <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.4rem, 2.2vw, 1.65rem)', fontWeight: 600, color: '#1A1714', marginBottom: '0.5rem' }}>
                {journey.heading}
              </h2>
              <p style={{ fontSize: '0.92rem', color: '#554F47', marginBottom: '1.5rem', maxWidth: '750px' }}>
                {journey.intro}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                {journey.stages.map((st, idx) => (
                  <BorderGlow
                    key={idx}
                    borderRadius={8}
                    backgroundColor="#FAF3E2"
                    edgeSensitivity={25}
                    glowRadius={22}
                    colors={['#234338', '#DDBB7B', '#5A9B80']}
                  >
                    <div style={{ padding: '1rem' }}>
                      <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#234338', marginBottom: '0.25rem' }}>
                        STAGE {st.step || `0${idx + 1}`}
                      </div>
                      <div style={{ fontFamily: "'Newsreader', serif", fontSize: '1.05rem', fontWeight: 600, color: '#1A1714', marginBottom: '0.25rem' }}>
                        {st.name}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#6A635B', lineHeight: 1.4 }}>
                        {st.description}
                      </div>
                    </div>
                  </BorderGlow>
                ))}
              </div>
            </div>
          </BorderGlow>
        )}

      </div>
    </div>
  );
}
