import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  Compass, 
  Layers, 
  Eye, 
  ShieldCheck, 
  CheckCircle2
} from 'lucide-react';
import { RESEARCH_TAB_DATA } from '../data/researchData';
import SpecularButton from '../components/SpecularButton';
import BorderGlow from '../components/BorderGlow';
import GhostFibers from '../components/GhostFibers';
import SEO from '../components/SEO';

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
    { id: 'approach', label: '1. Approach', icon: <Compass size={15} /> },
    { id: 'areas', label: '2. Research Areas', icon: <Layers size={15} /> },
    { id: 'methodology', label: '3. Observation', icon: <Eye size={15} /> },
    { id: 'ethics', label: '4. Research Ethics', icon: <ShieldCheck size={15} /> }
  ];

  const tabContent = RESEARCH_TAB_DATA[activeTab] || RESEARCH_TAB_DATA.approach;

  const approachSteps = Array.isArray(RESEARCH_TAB_DATA?.approach) 
    ? RESEARCH_TAB_DATA.approach 
    : (RESEARCH_TAB_DATA?.approach?.steps || []);

  const researchAreas = RESEARCH_TAB_DATA?.areas || [];
  const methodologySources = RESEARCH_TAB_DATA?.methodology?.sources || [];
  const ethicsGuidelines = RESEARCH_TAB_DATA?.ethics?.guidelines || [];

  return (
    <div style={{ backgroundColor: '#FAF3E2', minHeight: '100vh', paddingTop: '1.5rem', paddingBottom: '4rem' }}>
      <SEO 
        title={`Research ${tabContent.eyebrow || 'Overview'} | Montessori Pedagogy & Childhood Observation`}
        description="Explore NIDO Research Institute methodology, 8 developmental domains, naturalistic observational protocols, and ethical standards."
        keywords="Montessori Research Methodology, Early Childhood Observation, Nido Research Domains, Montessori Ethics, Longitudinal Child Development Hyderabad"
      />
      <div className="container-standard">
        
        {/* Breadcrumbs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#7E766D', marginBottom: '1rem' }}>
          <Link to="/" style={{ color: '#554F47', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <span style={{ color: '#234338', fontWeight: 600 }}>Research</span>
        </div>

        {/* Hero Section with Interactive <GhostFibers /> */}
        <div className="page-hero-banner" style={{ backgroundColor: '#1E351C' }}>
          {/* GhostFibers Canvas Background */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'auto' }}>
            <GhostFibers
              lineColor="#C88528"
              glowColor="#5A713C"
              speed={0.2}
              scale={2}
              rotation={0}
              rotationSpeed={0.25}
              layers={4}
              waveAmplitude={0.015}
              waveFrequency={3}
              waveSpeed={0.15}
              layerSpeed={0.08}
              twist={0.1}
              twistFrequency={5}
              twistSpeed={1.2}
              lineFrequency={5}
              lineSpacing={2}
              lineSharpness={16}
              glowFalloff={10}
              glowIntensity={1.6}
              brightness={2}
              blueBoost={1.25}
              vignette={0.8}
              grain={0.05}
              dpr={1}
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
              <span style={{ color: '#DDBB7B' }}>NIDO RESEARCH PHILOSOPHY</span>
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
              Rooted in Montessori. Grounded in Evidence.
            </h1>

            <p style={{
              fontSize: '1rem',
              color: '#D4E2DC',
              maxWidth: '780px',
              lineHeight: 1.6,
              marginBottom: '1.75rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)'
            }}>
              Explore our foundational approach, the 8 core developmental areas we observe, our naturalistic observational methodology, and our strict ethical principles.
            </p>

            {/* Subtab Switcher using SpecularButton */}
            <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <SpecularButton
                    key={tab.id}
                    size="sm"
                    radius={6}
                    tint={isActive ? '#1E3E33' : 'rgba(15, 36, 29, 0.75)'}
                    tintOpacity={0.9}
                    textColor={isActive ? '#DDBB7B' : '#F0F4F2'}
                    lineColor={isActive ? '#FFE8A3' : '#4D8A74'}
                    baseColor={isActive ? '#142E25' : 'rgba(10, 25, 20, 0.6)'}
                    intensity={1.5}
                    onClick={() => handleTabChange(tab.id)}
                    style={{
                      border: isActive ? '1px solid rgba(221, 187, 123, 0.6)' : '1px solid rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(8px)'
                    }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                      {tab.icon}
                      <span>{tab.label}</span>
                    </span>
                  </SpecularButton>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab 1: Approach */}
        {activeTab === 'approach' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#DDBB7B', '#5A9B80']}>
              <div className="card-pad-standard">
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C99428', marginBottom: '0.35rem' }}>
                  OUR 5-STEP METHOD
                </div>
                <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)', fontWeight: 600, color: '#1A1714', marginBottom: '0.5rem' }}>
                  Our Research Approach
                </h2>
                <p style={{ fontSize: '0.96rem', color: '#554F47', lineHeight: 1.6, maxWidth: '780px', marginBottom: '1.5rem' }}>
                  How we observe, formulate questions, connect with developmental literature, document with integrity, and share insights.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                  {approachSteps.map((st, idx) => (
                    <BorderGlow key={idx} borderRadius={8} backgroundColor="#FAF3E2" colors={['#234338', '#C99428', '#386684']}>
                      <div style={{ padding: '1.25rem' }}>
                        <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#234338', marginBottom: '0.3rem' }}>
                          STEP {st.step || `0${idx + 1}`}
                        </div>
                        <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.15rem', fontWeight: 600, color: '#1A1714', marginBottom: '0.4rem' }}>
                          {st.title}
                        </h3>
                        <p style={{ fontSize: '0.86rem', color: '#554F47', lineHeight: 1.55, margin: 0 }}>
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

        {/* Tab 2: Areas */}
        {activeTab === 'areas' && (
          <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#C99428', '#386684']}>
            <div className="card-pad-standard">
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C99428', marginBottom: '0.35rem' }}>
                8 CORE DOMAINS
              </div>
              <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)', fontWeight: 600, color: '#1A1714', marginBottom: '0.5rem' }}>
                Research Areas in Early Childhood
              </h2>
              <p style={{ fontSize: '0.96rem', color: '#554F47', lineHeight: 1.6, maxWidth: '780px', marginBottom: '1.75rem' }}>
                Our research focuses on eight developmental areas observed within our Montessori classrooms at Bachupally.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                {researchAreas.map((area, idx) => (
                  <BorderGlow key={area.id || idx} borderRadius={8} backgroundColor="#FAF3E2" colors={['#234338', '#DDBB7B', '#4D8A74']}>
                    <div style={{ padding: '1.35rem' }}>
                      <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#C99428', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                        AREA 0{idx + 1}
                      </div>
                      <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.2rem', fontWeight: 600, color: '#1A1714', marginBottom: '0.4rem' }}>
                        {area.title}
                      </h3>
                      <div style={{ fontSize: '0.88rem', fontStyle: 'italic', color: '#234338', fontWeight: 600, marginBottom: '0.6rem' }}>
                        "{area.question}"
                      </div>
                      <p style={{ fontSize: '0.86rem', color: '#554F47', lineHeight: 1.55, margin: 0 }}>
                        {area.description}
                      </p>
                    </div>
                  </BorderGlow>
                ))}
              </div>
            </div>
          </BorderGlow>
        )}

        {/* Tab 3: Methodology */}
        {activeTab === 'methodology' && (
          <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#DDBB7B', '#5A9B80']}>
            <div className="card-pad-standard">
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C99428', marginBottom: '0.35rem' }}>
                OBSERVATIONAL METHODS
              </div>
              <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)', fontWeight: 600, color: '#1A1714', marginBottom: '0.5rem' }}>
                Naturalistic Observation & Evidence
              </h2>
              <p style={{ fontSize: '0.96rem', color: '#554F47', lineHeight: 1.6, maxWidth: '780px', marginBottom: '1.75rem' }}>
                We observe children in their natural classroom flow without intrusive interventions or synthetic test environments.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                {methodologySources.map((src, idx) => (
                  <BorderGlow key={idx} borderRadius={8} backgroundColor="#FAF3E2" colors={['#234338', '#C99428', '#688E7D']}>
                    <div style={{ padding: '1.1rem', display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                      <CheckCircle2 size={16} color="#234338" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '0.88rem', color: '#2B2723', fontWeight: 500 }}>{src}</span>
                    </div>
                  </BorderGlow>
                ))}
              </div>
            </div>
          </BorderGlow>
        )}

        {/* Tab 4: Ethics */}
        {activeTab === 'ethics' && (
          <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#C99428', '#386684']}>
            <div className="card-pad-standard">
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C99428', marginBottom: '0.35rem' }}>
                CHILD SAFETY & ETHICS
              </div>
              <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)', fontWeight: 600, color: '#1A1714', marginBottom: '0.5rem' }}>
                Research Ethics & Child Wellbeing First
              </h2>
              <p style={{ fontSize: '0.96rem', color: '#554F47', lineHeight: 1.6, maxWidth: '780px', marginBottom: '1.75rem' }}>
                Research must always serve the child. We never compromise the child's psychological safety, privacy, or classroom joy.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                {ethicsGuidelines.map((g, idx) => (
                  <BorderGlow key={idx} borderRadius={8} backgroundColor="#FAF3E2" colors={['#234338', '#DDBB7B', '#4D8A74']}>
                    <div style={{ padding: '1.25rem' }}>
                      <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#234338', marginBottom: '0.25rem' }}>
                        ETHICAL PRINCIPLE 0{idx + 1}
                      </div>
                      <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.15rem', fontWeight: 600, color: '#1A1714', marginBottom: '0.35rem' }}>
                        {g.title}
                      </h3>
                      <p style={{ fontSize: '0.86rem', color: '#554F47', lineHeight: 1.55, margin: 0 }}>
                        {g.description}
                      </p>
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
