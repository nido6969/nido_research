'use client';
import React, { useState } from 'react';
import { Link } from '../lib/navigation';
import { ArrowRight, CheckCircle2, Send, BookOpen } from 'lucide-react';
import { RESOURCES_DATA } from '../data/researchData';
import SpecularButton from '../components/SpecularButton';
import TrustBar from '../components/TrustBar';
import SEO from '../components/SEO';

export default function ResourcesPage() {
  const [suggestionTopic, setSuggestionTopic] = useState('');
  const [isSuggested, setIsSuggested] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSuggestionSubmit = async (e) => {
    e.preventDefault();
    if (suggestionTopic.trim()) {
      setSubmitting(true);
      try {
        await fetch('/api/suggest-topic', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ topic: suggestionTopic })
        });
      } catch (err) {
        console.error('Error sending suggestion:', err);
      } finally {
        setSubmitting(false);
        setIsSuggested(true);
        setTimeout(() => {
          setIsSuggested(false);
          setSuggestionTopic('');
        }, 6000);
      }
    }
  };

  return (
    <div style={{ backgroundColor: '#FAF8F5', minHeight: '100vh', paddingTop: '1.5rem', paddingBottom: '4rem' }}>
      <SEO 
        title="Montessori Resources & Pedagogical Guides | NIDO Research"
        description="Explore 10 in-depth pedagogical guides for parents and educators on independence, Montessori toys, concentration, movement, and emotional regulation."
        keywords="Montessori Resources, Montessori Articles, Early Childhood Guides, Maria Montessori Method, Prepared Environment Guides"
      />
      <div className="container-standard">
        
        {/* Breadcrumbs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#7E766D', marginBottom: '1.25rem' }}>
          <Link href="/" style={{ color: '#554F47', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <span style={{ color: '#234338', fontWeight: 600 }}>Resources</span>
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
            <span>{RESOURCES_DATA.hero.eyebrow}</span>
          </div>
          
          <h1 style={{
            fontFamily: "'Newsreader', Georgia, serif",
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
            fontWeight: 700,
            color: '#234338',
            lineHeight: 1.2,
            margin: '0 0 1rem 0'
          }}>
            {RESOURCES_DATA.hero.heading}
          </h1>
          
          <div style={{
            fontSize: '0.96rem',
            color: '#1A1714',
            maxWidth: '860px',
            lineHeight: 1.65,
            margin: 0
          }}>
            <p style={{ marginBottom: '0.65rem' }}>{RESOURCES_DATA.hero.intro}</p>
            <p style={{ marginBottom: '0.45rem', fontWeight: 600, color: '#234338' }}>{RESOURCES_DATA.hero.subIntro}</p>
            <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '0.85rem' }}>
              {RESOURCES_DATA.hero.bullets?.map((b, bIdx) => (
                <li key={bIdx} style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                  <span style={{ color: '#234338', fontWeight: 700 }}>•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p style={{ margin: 0, fontStyle: 'italic', color: '#C88528', fontWeight: 500 }}>
              {RESOURCES_DATA.hero.closing}
            </p>
          </div>
        </div>

        {/* Section Header for the 10 Guides */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{
            fontSize: '0.74rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#234338',
            marginBottom: '0.3rem'
          }}>
            PEDAGOGICAL ESSAYS & OBSERVATIONS
          </div>
          <h2 style={{
            fontFamily: "'Newsreader', Georgia, serif",
            fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)',
            fontWeight: 700,
            color: '#234338',
            margin: '0 0 0.35rem 0'
          }}>
            10 In-Depth Question Guides
          </h2>
          <p style={{ fontSize: '0.92rem', color: '#1A1714', margin: 0 }}>
            Select any guide to open the full reflection and practical recommendations.
          </p>
        </div>

        {/* 10 Separate Containers (Cards) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3.5rem'
        }}>
          {RESOURCES_DATA.articles.map((art) => {
            const previewText = art.sections?.[0]?.content 
              ? art.sections[0].content.split('\n\n')[0].replace(/\n/g, ' ')
              : art.subtitle;

            return (
              <Link
                key={art.id}
                href={`/resources/${art.slug}`}
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
                      GUIDE {art.number < 10 ? `0${art.number}` : art.number}
                    </span>

                    <span style={{
                      fontSize: '0.75rem',
                      color: '#8A8275',
                      fontWeight: 500
                    }}>
                      Parent Resource
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
                    {art.title}
                  </h3>

                  {/* Subtitle */}
                  <div style={{
                    fontSize: '0.9rem',
                    fontStyle: 'italic',
                    color: '#C88528',
                    fontWeight: 600,
                    lineHeight: 1.4,
                    marginBottom: '0.85rem'
                  }}>
                    {art.subtitle}
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
                  <span>Read Full Guide</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Section 6: Research Library & Topic Suggestion */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid #E5DFD2',
          padding: '2.5rem',
          boxShadow: '0 4px 20px rgba(24, 21, 18, 0.04)'
        }}>
          <div style={{ maxWidth: '640px' }}>
            <div style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#234338',
              marginBottom: '0.35rem'
            }}>
              {RESOURCES_DATA.librarySearch.eyebrow}
            </div>
            <h2 style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: '1.75rem',
              fontWeight: 700,
              color: '#234338',
              margin: '0 0 0.5rem 0'
            }}>
              {RESOURCES_DATA.librarySearch.heading}
            </h2>
            <div style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              color: '#C88528',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem'
            }}>
              {RESOURCES_DATA.librarySearch.tagline}
            </div>
            <p style={{
              fontSize: '0.92rem',
              color: '#1A1714',
              lineHeight: 1.6,
              marginBottom: '1.5rem'
            }}>
              {RESOURCES_DATA.librarySearch.intro}
            </p>

            <form onSubmit={handleSuggestionSubmit} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <input
                type="text"
                placeholder={RESOURCES_DATA.librarySearch.inputPlaceholder}
                value={suggestionTopic}
                onChange={(e) => setSuggestionTopic(e.target.value)}
                style={{
                  flex: '1 1 280px',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid #D6D0C4',
                  backgroundColor: '#FAF8F5',
                  color: '#1A1714',
                  fontSize: '0.92rem',
                  outline: 'none'
                }}
              />
              <SpecularButton type="submit" disabled={submitting}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <Send size={15} />
                  <span>{submitting ? 'Submitting...' : RESOURCES_DATA.librarySearch.buttonText}</span>
                </span>
              </SpecularButton>
            </form>

            {isSuggested && (
              <div style={{
                marginTop: '1rem',
                padding: '0.75rem 1rem',
                backgroundColor: '#EEF4F0',
                border: '1px solid #52D19B',
                borderRadius: '8px',
                color: '#234338',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <CheckCircle2 size={16} color="#234338" />
                <span>Thank you! Your topic suggestion has been received for our research team.</span>
              </div>
            )}
          </div>
        </div>

      </div>

      <div style={{ marginTop: '3.5rem' }}>
        <TrustBar />
      </div>
    </div>
  );
}
