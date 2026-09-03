'use client';
import React from 'react';
import { Link } from '../lib/navigation';
import { ArrowRight, BookOpen } from 'lucide-react';
import { PARENT_INSIGHTS_DATA } from '../data/researchData';
import TrustBar from '../components/TrustBar';
import SEO from '../components/SEO';

export default function ParentInsightsPage() {
  return (
    <div style={{ backgroundColor: '#FAF8F5', minHeight: '100vh', paddingTop: '1.5rem', paddingBottom: '4rem' }}>
      <SEO 
        title="Parent Insights | Practical Reflections for Everyday Family Life | NIDO Research"
        description="Explore 10 evidence-based parenting insights on independence at home, toddler behaviour, concentration, movement, screen time, language, and big feelings."
        keywords="Montessori Parenting, Early Childhood Development at Home, Montessori Toddler Routine, Screen Free Parenting Hyderabad"
      />
      <div className="container-standard">
        
        {/* Breadcrumbs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#7E766D', marginBottom: '1.25rem' }}>
          <Link href="/" style={{ color: '#554F47', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <span style={{ color: '#234338', fontWeight: 600 }}>Parent Insights</span>
        </div>

        {/* Hero Section (No background, clean open typography) */}
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
            <span>{PARENT_INSIGHTS_DATA.hero.eyebrow}</span>
          </div>
          
          <h1 style={{
            fontFamily: "'Newsreader', Georgia, serif",
            fontSize: 'clamp(2.2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: '#234338',
            lineHeight: 1.2,
            margin: '0 0 1rem 0'
          }}>
            {PARENT_INSIGHTS_DATA.hero.heading}
          </h1>
          
          <div style={{
            fontSize: '1rem',
            color: '#1A1714',
            maxWidth: '860px',
            lineHeight: 1.7,
            margin: '0 0 1.5rem 0'
          }}>
            <p style={{ margin: 0 }}>{PARENT_INSIGHTS_DATA.hero.intro}</p>
          </div>

          {/* Hero Core Question Callout - Highlighted in Warm Orange (#C88528) Italic */}
          <div style={{
            padding: '1rem 1.35rem',
            backgroundColor: '#FAF3E2',
            borderLeft: '4px solid #C88528',
            borderRadius: '0 10px 10px 0',
            maxWidth: '800px'
          }}>
            <p style={{
              margin: 0,
              fontSize: '1.02rem',
              fontStyle: 'italic',
              color: '#C88528',
              fontWeight: 600,
              lineHeight: 1.55,
              fontFamily: "'Newsreader', Georgia, serif"
            }}>
              {PARENT_INSIGHTS_DATA.hero.coreQuestion}
            </p>
          </div>
        </div>

        {/* Section Header for the 10 Topics */}
        <div style={{ marginBottom: '1.5rem', marginTop: '1.5rem' }}>
          <div style={{
            fontSize: '0.74rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#234338',
            marginBottom: '0.3rem'
          }}>
            PRACTICAL TOPICS FOR EVERYDAY FAMILY LIFE
          </div>
          <h2 style={{
            fontFamily: "'Newsreader', Georgia, serif",
            fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)',
            fontWeight: 700,
            color: '#234338',
            margin: '0 0 0.35rem 0'
          }}>
            10 Practical Parent Insights
          </h2>
          <p style={{ fontSize: '0.92rem', color: '#1A1714', margin: 0 }}>
            Select any topic container to read the full insight, daily routines, and home reflections.
          </p>
        </div>

        {/* 10 Separate Containers (Cards) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3.5rem'
        }}>
          {PARENT_INSIGHTS_DATA.topics.map((topic) => {
            const previewText = topic.body?.[0] ? topic.body[0].replace(/\n/g, ' ') : '';

            return (
              <Link
                key={topic.id}
                href={`/parent-insights/${topic.slug}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E5DFD2',
                  padding: '1.85rem 2rem',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 4px 16px rgba(24, 21, 18, 0.04)',
                  position: 'relative'
                }}
                className="hover-card-elevate"
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
                <div>
                  {/* Card Top Metadata Badge */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem'
                  }}>
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
                      TOPIC {topic.topicNumber < 10 ? `0${topic.topicNumber}` : topic.topicNumber}
                    </span>

                    <span style={{
                      fontSize: '0.75rem',
                      color: '#8A8275',
                      fontWeight: 500
                    }}>
                      Parent Insight
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 style={{
                    fontFamily: "'Newsreader', Georgia, serif",
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#234338',
                    lineHeight: 1.3,
                    margin: '0 0 0.5rem 0'
                  }}>
                    {topic.title}
                  </h3>

                  {/* Quote / Subtitle in Warm Orange (#C88528) Italic */}
                  <div style={{
                    fontSize: '0.92rem',
                    fontStyle: 'italic',
                    color: '#C88528',
                    fontWeight: 600,
                    lineHeight: 1.4,
                    marginBottom: '0.85rem'
                  }}>
                    {topic.quote}
                  </div>

                  {/* Excerpt Paragraph */}
                  <p style={{
                    fontSize: '0.88rem',
                    color: '#1A1714',
                    lineHeight: 1.6,
                    margin: 0,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {previewText}
                  </p>
                </div>

                {/* Card Action Link */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  color: '#234338',
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid #F0EAE1'
                }}>
                  <span>Read Full Insight</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
            );
          })}
        </div>

      </div>

      <div style={{ marginTop: '3.5rem' }}>
        <TrustBar />
      </div>
    </div>
  );
}
