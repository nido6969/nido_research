'use client';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from '../lib/navigation';
import { RESEARCH_TAB_DATA } from '../data/researchData';
import BorderGlow from '../components/BorderGlow';
import SEO from '../components/SEO';
import ResearchAreasExplorer from '../components/ResearchAreasExplorer';
import TrustBar from '../components/TrustBar';

const VALID_TABS = ['approach', 'areas', 'methodology', 'ethics'];

export default function ResearchPage() {
  const { subtab } = useParams();
  const navigate = useNavigate();

  const currentTab = subtab && VALID_TABS.includes(subtab) ? subtab : 'approach';
  const [activeTab, setActiveTab] = useState(currentTab);

  useEffect(() => {
    if (subtab && VALID_TABS.includes(subtab)) {
      setActiveTab(subtab);
    }
  }, [subtab]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    navigate(`/research/${tabId}`);
  };

  const tabs = [
    { id: 'approach', label: 'Our Research Approach' },
    { id: 'areas', label: 'Research Areas' },
    { id: 'methodology', label: 'Observation & Methodology' },
    { id: 'ethics', label: 'Research Ethics' }
  ];

  const approachSteps = RESEARCH_TAB_DATA?.approach || [];
  const researchAreas = RESEARCH_TAB_DATA?.areas || [];
  const methodology = RESEARCH_TAB_DATA?.methodology || {};
  const ethics = RESEARCH_TAB_DATA?.ethics || {};

  return (
    <div style={{ backgroundColor: '#FAF3E2', minHeight: '100vh', paddingTop: '1.5rem', paddingBottom: '4rem' }}>
      <SEO 
        title="Our Research | Nido Montessori Preschool & Research Institute"
        description="We begin with a question. Then we watch carefully. Explore Nido Montessori's research approach, areas of study, naturalistic methodology, and ethics."
        keywords="Montessori Research Approach, Classroom Observation, Early Childhood Research Hyderabad, Child Centered Research, Authentic Montessori Pedagogy"
      />
      <div className="container-standard">
        
        {/* Breadcrumbs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#7E766D', marginBottom: '1rem' }}>
          <Link to="/" style={{ color: '#554F47', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <span style={{ color: '#234338', fontWeight: 600 }}>Research</span>
        </div>

        {/* Compact Hero Section without Background Animation */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid #E5DFD2',
          padding: '2rem 2.25rem',
          marginBottom: '2rem',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)'
        }}>
          {/* Eyebrow */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#234338',
            backgroundColor: '#EEF4F0',
            padding: '0.25rem 0.75rem',
            borderRadius: '9999px',
            border: '1px solid #D6E4DB',
            marginBottom: '0.75rem'
          }}>
            <span>OUR RESEARCH</span>
          </div>

          {/* Heading in Green */}
          <h1 style={{
            fontFamily: "'Newsreader', Georgia, serif",
            fontSize: 'clamp(1.85rem, 3.2vw, 2.6rem)',
            fontWeight: 700,
            color: '#234338',
            lineHeight: 1.2,
            marginBottom: '0.85rem'
          }}>
            We Begin With a Question.<br />Then We Watch Carefully.
          </h1>

          {/* Subheading and Observation Text in Black with Italic Orange Accent */}
          <div style={{
            fontSize: '0.95rem',
            color: '#1A1714',
            maxWidth: '840px',
            lineHeight: 1.6,
            marginBottom: '1.5rem'
          }}>
            <p style={{ marginBottom: '0.55rem', color: '#1A1714', fontWeight: 600 }}>
              Children are constantly showing us something.
            </p>
            <div style={{ fontStyle: 'italic', color: '#C88528', marginBottom: '0.65rem', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <div>A child who repeats an activity for twenty minutes.</div>
              <div>A child who watches another before trying.</div>
              <div>A child who struggles, pauses and tries again.</div>
              <div>A child who suddenly chooses to help someone younger.</div>
            </div>
            <p style={{ color: '#1A1714', marginBottom: '0.55rem' }}>
              These moments can easily pass unnoticed.<br />
              At Nido, we believe they are worth paying attention to.
            </p>
            <p style={{ marginBottom: '0.55rem', color: '#1A1714' }}>
              Our research begins within the everyday life of the Montessori environment. We observe children's experiences, identify meaningful questions, examine relevant literature and document what we see as carefully and transparently as possible.
            </p>
            <p style={{ margin: 0, fontWeight: 600, color: '#1A1714' }}>
              We do not research children to reduce them to numbers. We research because understanding children better helps us create environments that respect how they actually learn and grow.
            </p>
          </div>

          {/* Subtab Switcher without Icons */}
          <div style={{ display: 'flex', gap: '0.55rem', flexWrap: 'wrap' }}>
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  style={{
                    backgroundColor: isActive ? '#234338' : '#FAF3E2',
                    color: isActive ? '#FFFFFF' : '#1A1714',
                    border: isActive ? '1px solid #234338' : '1px solid #DDD6CA',
                    borderRadius: '8px',
                    padding: '0.55rem 1.15rem',
                    fontSize: '0.86rem',
                    fontWeight: isActive ? 600 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    boxShadow: isActive ? '0 2px 6px rgba(35, 67, 56, 0.2)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = '#EFE7D5';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = '#FAF3E2';
                    }
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab 1: Approach */}
        {activeTab === 'approach' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#DDBB7B', '#5A9B80']}>
              <div className="card-pad-standard">
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#234338', marginBottom: '0.35rem' }}>
                  OUR RESEARCH APPROACH
                </div>
                <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)', fontWeight: 600, color: '#234338', marginBottom: '1.5rem' }}>
                  Our Research Approach
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                  {approachSteps.map((st, idx) => (
                    <BorderGlow key={idx} borderRadius={8} backgroundColor="#FAF3E2" colors={['#234338', '#C99428', '#386684']}>
                      <div style={{ padding: '1.35rem' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#234338', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                          {st.step}
                        </div>
                        <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.15rem', fontWeight: 600, color: '#1A1714', marginBottom: '0.35rem' }}>
                          {st.tagline}
                        </h3>
                        <p style={{ fontSize: '0.88rem', color: '#1A1714', lineHeight: 1.55, margin: 0 }}>
                          {st.description}
                        </p>
                      </div>
                    </BorderGlow>
                  ))}
                </div>
              </div>
            </BorderGlow>
          </div>
        )}

        {/* Tab 2: Areas (Interactive Master-Detail Sidebar + Detail Panel) */}
        {activeTab === 'areas' && (
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#234338', marginBottom: '0.35rem' }}>
              WHAT WE ARE CURIOUS ABOUT
            </div>
            <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#234338', marginBottom: '1.25rem' }}>
              Research Areas
            </h2>
            <ResearchAreasExplorer />
          </div>
        )}

        {/* Tab 3: Methodology */}
        {activeTab === 'methodology' && (
          <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#DDBB7B', '#5A9B80']}>
            <div className="card-pad-standard">
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#234338', marginBottom: '0.35rem' }}>
                OUR METHOD
              </div>
              <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)', fontWeight: 600, color: '#234338', marginBottom: '0.75rem' }}>
                Observation & Methodology
              </h2>
              <p style={{ fontSize: '1rem', fontWeight: 600, color: '#1A1714', lineHeight: 1.5, maxWidth: '780px', marginBottom: '0.5rem' }}>
                {methodology.intro}
              </p>
              <p style={{ fontSize: '0.94rem', color: '#1A1714', lineHeight: 1.6, maxWidth: '780px', marginBottom: '1.25rem' }}>
                {methodology.description}
              </p>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1A1714', marginBottom: '0.85rem' }}>
                Depending on the study, we may draw upon:
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {methodology.sources?.map((src, idx) => (
                  <BorderGlow key={idx} borderRadius={8} backgroundColor="#FAF3E2" colors={['#234338', '#C99428', '#688E7D']}>
                    <div style={{ padding: '0.95rem 1.1rem' }}>
                      <span style={{ fontSize: '0.9rem', color: '#1A1714', fontWeight: 500 }}>{src}</span>
                    </div>
                  </BorderGlow>
                ))}
              </div>

              <div style={{
                backgroundColor: '#FAF3E2',
                borderLeft: '4px solid #C88528',
                padding: '1rem 1.25rem',
                borderRadius: '4px',
                fontSize: '0.94rem',
                color: '#C88528',
                fontStyle: 'italic',
                fontWeight: 600
              }}>
                {methodology.distinction}
              </div>
            </div>
          </BorderGlow>
        )}

        {/* Tab 4: Ethics */}
        {activeTab === 'ethics' && (
          <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#C99428', '#386684']}>
            <div className="card-pad-standard">
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#234338', marginBottom: '0.35rem' }}>
                CHILDREN COME BEFORE THE RESEARCH
              </div>
              <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)', fontWeight: 600, color: '#234338', marginBottom: '1.5rem' }}>
                Research Ethics
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {ethics.paragraphs?.map((p, idx) => {
                  const isConclusion = idx === (ethics.paragraphs.length - 1);
                  return (
                    <BorderGlow key={idx} borderRadius={8} backgroundColor={isConclusion ? '#FAF3E2' : '#FAF8F5'} colors={['#234338', '#DDBB7B', '#4D8A74']}>
                      <div style={{ padding: '1.25rem' }}>
                        <p style={{
                          fontSize: '0.94rem',
                          color: isConclusion ? '#C88528' : '#1A1714',
                          fontStyle: isConclusion ? 'italic' : 'normal',
                          lineHeight: 1.6,
                          margin: 0,
                          fontWeight: isConclusion || idx === 0 ? 600 : 400
                        }}>
                          {p}
                        </p>
                      </div>
                    </BorderGlow>
                  );
                })}
              </div>
            </div>
          </BorderGlow>
        )}

      </div>

      <div style={{ marginTop: '3rem' }}>
        <TrustBar />
      </div>
    </div>
  );
}
