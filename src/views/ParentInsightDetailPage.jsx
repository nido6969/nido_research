'use client';
import React from 'react';
import { useParams, Link } from '../lib/navigation';
import { PARENT_INSIGHTS_DATA } from '../data/researchData';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import TrustBar from '../components/TrustBar';
import SEO from '../components/SEO';

export default function ParentInsightDetailPage() {
  const { slug } = useParams();

  // Find matching topic by slug or id or topicNumber
  const topics = PARENT_INSIGHTS_DATA.topics;
  const currentIndex = topics.findIndex(t => t.slug === slug || t.id === slug);
  const topic = currentIndex !== -1 ? topics[currentIndex] : topics[0];
  const activeIndex = currentIndex !== -1 ? currentIndex : 0;

  const prevTopic = activeIndex > 0 ? topics[activeIndex - 1] : null;
  const nextTopic = activeIndex < topics.length - 1 ? topics[activeIndex + 1] : null;

  return (
    <>
      <SEO 
        title={`${topic.title} | Parent Insights | NIDO Research`}
        description={topic.quote || topic.body?.[0]}
      />

      <div style={{ backgroundColor: '#FAF8F5', minHeight: '100vh', padding: '2.5rem 1.5rem 5rem 1.5rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          
          {/* Top Breadcrumb & Navigation */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            marginBottom: '2rem',
            fontSize: '0.85rem'
          }}>
            <Link 
              href="/parent-insights"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#234338',
                fontWeight: 600,
                textDecoration: 'none',
                padding: '0.45rem 0.85rem',
                borderRadius: '8px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5DFD2',
                transition: 'all 0.2s ease'
              }}
              className="hover-lift"
            >
              <ArrowLeft size={16} />
              <span>Back to All Parent Insights</span>
            </Link>

            <div style={{ color: '#8A8275', fontSize: '0.82rem' }}>
              Topic {topic.topicNumber} of {topics.length}
            </div>
          </div>

          {/* Main Topic Container Card */}
          <article style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #E5DFD2',
            boxShadow: '0 8px 30px rgba(24, 21, 18, 0.05)',
            padding: '3rem 3rem',
            overflow: 'hidden'
          }} className="article-container-responsive">

            {/* Header Eyebrow & Metadata */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem',
              flexWrap: 'wrap'
            }}>
              <span style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#234338',
                backgroundColor: '#EEF4F0',
                padding: '0.3rem 0.75rem',
                borderRadius: '6px',
                border: '1px solid #D6E4DB'
              }}>
                TOPIC {topic.topicNumber < 10 ? `0${topic.topicNumber}` : topic.topicNumber}
              </span>
              <span style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#8A8275'
              }}>
                PRACTICAL MONTESSORI PARENT INSIGHT
              </span>
            </div>

            {/* Main Article Title */}
            <h1 style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontWeight: 700,
              color: '#234338',
              lineHeight: 1.2,
              marginBottom: '1.25rem'
            }}>
              {topic.title}
            </h1>

            {/* Featured Quote Callout Card (Orange Italic) */}
            {topic.quote && (
              <div style={{
                backgroundColor: '#FAF3E2',
                borderLeft: '4px solid #C88528',
                padding: '1.25rem 1.75rem',
                borderRadius: '0 12px 12px 0',
                marginBottom: '2.5rem'
              }}>
                <div style={{
                  fontSize: '1.15rem',
                  fontStyle: 'italic',
                  color: '#C88528',
                  fontWeight: 600,
                  fontFamily: "'Newsreader', Georgia, serif",
                  lineHeight: 1.4
                }}>
                  {topic.quote}
                </div>
              </div>
            )}

            {/* Body Paragraphs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              {topic.body?.map((p, pIdx) => (
                <p key={pIdx} style={{
                  fontSize: '1.02rem',
                  color: '#1A1714',
                  lineHeight: 1.8,
                  margin: 0,
                  whiteSpace: 'pre-line'
                }}>
                  {p}
                </p>
              ))}
            </div>

            {/* Bullet List Section (if present) */}
            {topic.bullets && topic.bullets.length > 0 && (
              <div style={{
                backgroundColor: '#F8FAF8',
                border: '1px solid #E3EBE5',
                borderRadius: '12px',
                padding: '1.5rem 1.75rem',
                marginBottom: '2rem'
              }}>
                {topic.bulletHeader && (
                  <div style={{
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: '#234338',
                    marginBottom: '0.85rem'
                  }}>
                    {topic.bulletHeader}
                  </div>
                )}
                <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {topic.bullets.map((b, bIdx) => (
                    <li key={bIdx} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                      <span style={{ color: '#234338', fontWeight: 700, lineHeight: 1.6 }}>•</span>
                      <span style={{ fontSize: '0.96rem', color: '#1A1714', lineHeight: 1.6 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* After Bullets Text */}
            {topic.afterBullets && (
              <p style={{ fontSize: '1.02rem', color: '#1A1714', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                {topic.afterBullets}
              </p>
            )}

            {/* Useful Rule Callout */}
            {topic.usefulRule && (
              <div style={{
                padding: '1.25rem 1.5rem',
                backgroundColor: '#FAF3E2',
                border: '1px solid #E5DFD2',
                borderRadius: '10px',
                fontSize: '0.98rem',
                color: '#1A1714',
                fontWeight: 600,
                lineHeight: 1.65,
                marginBottom: '1.75rem'
              }}>
                {topic.usefulRule}
              </div>
            )}

            {/* Comparison Examples (if present) */}
            {topic.examples && topic.examples.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {topic.examples.map((ex, exIdx) => (
                  <div key={exIdx} style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                    padding: '1.25rem',
                    backgroundColor: '#FAF8F5',
                    border: '1px solid #E5DFD2',
                    borderRadius: '10px'
                  }}>
                    <div>
                      <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', color: '#8A8275', marginBottom: '0.35rem' }}>
                        Rather than
                      </div>
                      <div style={{ fontSize: '0.95rem', color: '#554F47', fontStyle: 'italic' }}>
                        {ex.ratherThan}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', color: '#234338', marginBottom: '0.35rem' }}>
                        Try this
                      </div>
                      <div style={{ fontSize: '0.95rem', color: '#234338', fontWeight: 600 }}>
                        {ex.tryThis}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Additional Guidance Sections */}
            {topic.tantrumGuidance && (
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ fontSize: '1.02rem', color: '#1A1714', lineHeight: 1.8, margin: 0, whiteSpace: 'pre-line' }}>
                  {topic.tantrumGuidance}
                </p>
              </div>
            )}

            {topic.askYourself && (
              <div style={{
                padding: '1.25rem 1.5rem',
                backgroundColor: '#EEF4F0',
                border: '1px solid #D6E4DB',
                borderRadius: '10px',
                marginBottom: '1.75rem'
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#234338', marginBottom: '0.4rem' }}>
                  A Question to Ask Yourself
                </div>
                <div style={{ fontSize: '0.96rem', color: '#1A1714', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                  {topic.askYourself}
                </div>
              </div>
            )}

            {topic.sofaExample && (
              <p style={{ fontSize: '1.02rem', color: '#1A1714', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                {topic.sofaExample}
              </p>
            )}

            {topic.sharedResponsibility && (
              <p style={{ fontSize: '1.02rem', color: '#1A1714', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                {topic.sharedResponsibility}
              </p>
            )}

            {topic.rhythm && (
              <p style={{ fontSize: '1.02rem', color: '#1A1714', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                {topic.rhythm}
              </p>
            )}

            {topic.boredomHabit && (
              <div style={{
                padding: '1.25rem 1.5rem',
                backgroundColor: '#FAF3E2',
                borderLeft: '4px solid #C88528',
                borderRadius: '0 10px 10px 0',
                marginBottom: '1.75rem'
              }}>
                <div style={{ fontSize: '0.96rem', color: '#1A1714', lineHeight: 1.7 }}>
                  {topic.boredomHabit}
                </div>
              </div>
            )}

            {/* Reflection Box (Italic Orange Callout) */}
            {topic.reflection && (
              <div style={{
                padding: '1.5rem 1.75rem',
                backgroundColor: '#FAF8F5',
                border: '1px solid #E5DFD2',
                borderRadius: '12px',
                marginTop: '2rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  fontSize: '1.05rem',
                  fontStyle: 'italic',
                  color: '#C88528',
                  fontWeight: 600,
                  lineHeight: 1.6,
                  fontFamily: "'Newsreader', Georgia, serif",
                  whiteSpace: 'pre-line'
                }}>
                  {topic.reflection}
                </div>
              </div>
            )}

            {/* Try This Today Box */}
            {topic.tryThisToday && (
              <div style={{
                padding: '1.5rem 1.75rem',
                backgroundColor: '#EEF4F0',
                border: '1px solid #C5DDD0',
                borderRadius: '12px',
                marginTop: '1.5rem'
              }}>
                <div style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#234338',
                  marginBottom: '0.5rem'
                }}>
                  PRACTICAL ACTION TO TRY TODAY
                </div>
                <p style={{
                  margin: 0,
                  fontSize: '0.98rem',
                  color: '#1A1714',
                  lineHeight: 1.7
                }}>
                  {topic.tryThisToday}
                </p>
              </div>
            )}

          </article>

          {/* Bottom Pagination / Topic Switcher */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: prevTopic && nextTopic ? '1fr 1fr' : '1fr',
            gap: '1.25rem',
            marginTop: '2.5rem'
          }}>
            {prevTopic && (
              <Link
                href={`/parent-insights/${prevTopic.slug}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1.25rem 1.5rem',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5DFD2',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 8px rgba(24, 21, 18, 0.04)'
                }}
                className="hover-lift"
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#8A8275',
                  textTransform: 'uppercase',
                  marginBottom: '0.35rem'
                }}>
                  <ArrowLeft size={14} />
                  <span>Previous Topic #{prevTopic.topicNumber}</span>
                </div>
                <div style={{
                  fontFamily: "'Newsreader', Georgia, serif",
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: '#234338',
                  lineHeight: 1.3
                }}>
                  {prevTopic.title}
                </div>
              </Link>
            )}

            {nextTopic && (
              <Link
                href={`/parent-insights/${nextTopic.slug}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  textAlign: 'right',
                  padding: '1.25rem 1.5rem',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5DFD2',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 8px rgba(24, 21, 18, 0.04)'
                }}
                className="hover-lift"
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#8A8275',
                  textTransform: 'uppercase',
                  marginBottom: '0.35rem'
                }}>
                  <span>Next Topic #{nextTopic.topicNumber}</span>
                  <ArrowRight size={14} />
                </div>
                <div style={{
                  fontFamily: "'Newsreader', Georgia, serif",
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: '#234338',
                  lineHeight: 1.3
                }}>
                  {nextTopic.title}
                </div>
              </Link>
            )}
          </div>

        </div>

        <div style={{ marginTop: '4rem' }}>
          <TrustBar />
        </div>
      </div>
    </>
  );
}
