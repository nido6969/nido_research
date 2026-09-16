'use client';
import React from 'react';
import { useParams, Link } from '../lib/navigation';
import { RESOURCES_DATA } from '../data/researchData';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import TrustBar from '../components/TrustBar';
import SEO from '../components/SEO';

export default function ResourceDetailPage() {
  const { slug } = useParams();

  // Find matching guide by slug or id or number
  const articles = RESOURCES_DATA.articles;
  const currentIndex = articles.findIndex(a => a.slug === slug || a.id === slug);
  const article = currentIndex !== -1 ? articles[currentIndex] : articles[0];
  const activeIndex = currentIndex !== -1 ? currentIndex : 0;

  const prevArticle = activeIndex > 0 ? articles[activeIndex - 1] : null;
  const nextArticle = activeIndex < articles.length - 1 ? articles[activeIndex + 1] : null;

  return (
    <>
      <SEO 
        title={`${article.title.replace(/^[“”"]/g, '').replace(/[“”"]$/g, '')} | Montessori Resources | NIDO Research`}
        description={article.subtitle}
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
              href="/resources"
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
              <span>Back to All Resources</span>
            </Link>

            <div style={{ color: '#8A8275', fontSize: '0.82rem' }}>
              Guide {article.number} of {articles.length}
            </div>
          </div>

          {/* Main Article Container Card */}
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
                GUIDE {article.number < 10 ? `0${article.number}` : article.number}
              </span>
              <span style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#8A8275'
              }}>
                PARENT RESOURCE & OBSERVATION
              </span>
            </div>

            {/* Main Article Title */}
            <h1 style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontWeight: 700,
              color: '#234338',
              lineHeight: 1.2,
              marginBottom: '1rem'
            }}>
              {article.title}
            </h1>

            {/* Subtitle */}
            <div style={{
              fontSize: '1.1rem',
              color: '#554F47',
              fontWeight: 500,
              lineHeight: 1.5,
              marginBottom: '2.5rem'
            }}>
              {article.subtitle}
            </div>

            {/* Article Content Rendered Exactly from Word Document */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {article.contentBlocks ? (
                article.contentBlocks.map((block, bIdx) => {
                  if (block.type === 'h2') {
                    return (
                      <h2 
                        key={bIdx} 
                        style={{
                          fontFamily: "'Newsreader', Georgia, serif",
                          fontSize: 'clamp(1.35rem, 2.2vw, 1.65rem)',
                          fontWeight: 700,
                          color: '#234338',
                          marginTop: '2rem',
                          marginBottom: '0.75rem',
                          lineHeight: 1.3
                        }}
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === 'h3') {
                    return (
                      <h3 
                        key={bIdx} 
                        style={{
                          fontSize: '1.08rem',
                          fontWeight: 700,
                          color: '#234338',
                          marginTop: '1.35rem',
                          marginBottom: '0.5rem',
                          lineHeight: 1.4
                        }}
                      >
                        {block.text}
                      </h3>
                    );
                  }
                  if (block.type === 'bullets') {
                    return (
                      <ul 
                        key={bIdx} 
                        style={{
                          listStyle: 'none',
                          paddingLeft: 0,
                          margin: '0.5rem 0 1.25rem 0',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.5rem'
                        }}
                      >
                        {block.items.map((item, iIdx) => (
                          <li 
                            key={iIdx} 
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.75rem',
                              fontSize: '1.02rem',
                              color: '#1A1714',
                              lineHeight: 1.7
                            }}
                          >
                            <span 
                              style={{
                                color: '#234338',
                                fontWeight: 700,
                                fontSize: '1.1rem',
                                lineHeight: 1.6,
                                flexShrink: 0,
                                userSelect: 'none'
                              }}
                              aria-hidden="true"
                            >
                              ➢
                            </span>
                            <span style={{ flex: 1, whiteSpace: 'pre-line' }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (block.type === 'numbered') {
                    return (
                      <ol 
                        key={bIdx} 
                        style={{
                          listStyle: 'none',
                          paddingLeft: 0,
                          margin: '0.5rem 0 1.25rem 0',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.5rem'
                        }}
                      >
                        {block.items.map((item, iIdx) => (
                          <li 
                            key={iIdx} 
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.75rem',
                              fontSize: '1.02rem',
                              color: '#1A1714',
                              lineHeight: 1.7
                            }}
                          >
                            <span 
                              style={{
                                color: '#234338',
                                fontWeight: 700,
                                minWidth: '1.5rem',
                                flexShrink: 0
                              }}
                            >
                              {iIdx + 1}.
                            </span>
                            <span style={{ flex: 1, whiteSpace: 'pre-line' }}>{item}</span>
                          </li>
                        ))}
                      </ol>
                    );
                  }
                  // Standard Paragraph
                  return (
                    <p 
                      key={bIdx} 
                      style={{
                        fontSize: '1.02rem',
                        color: '#1A1714',
                        lineHeight: 1.8,
                        marginBottom: '1rem',
                        whiteSpace: 'pre-line'
                      }}
                    >
                      {block.text}
                    </p>
                  );
                })
              ) : (
                // Fallback to sections if contentBlocks is not available
                article.sections?.map((section, sIdx) => (
                  <section key={sIdx} style={{ borderTop: sIdx > 0 ? '1px solid #F0EAE1' : 'none', paddingTop: sIdx > 0 ? '2rem' : '0' }}>
                    <h2 style={{
                      fontFamily: "'Newsreader', Georgia, serif",
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#1A1714',
                      marginBottom: '1rem',
                      lineHeight: 1.3
                    }}>
                      {section.heading}
                    </h2>
                    <div style={{
                      fontSize: '1.02rem',
                      color: '#1A1714',
                      lineHeight: 1.8,
                      whiteSpace: 'pre-line'
                    }}>
                      {section.content}
                    </div>
                  </section>
                ))
              )}
            </div>

            {/* Orange Italic Concluding Line at the bottom of each resource topic */}
            {article.orangeItalicLine && (
              <div 
                style={{
                  marginTop: '2.5rem',
                  paddingTop: '1.75rem',
                  borderTop: '1px solid #E5DFD2',
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  color: '#C88528',
                  fontStyle: 'italic',
                  fontWeight: 500
                }}
              >
                {article.orangeItalicLine}
              </div>
            )}
          </article>

          {/* Bottom Pagination / Guide Switcher */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: prevArticle && nextArticle ? '1fr 1fr' : '1fr',
            gap: '1.25rem',
            marginTop: '2.5rem'
          }}>
            {prevArticle && (
              <Link
                href={`/resources/${prevArticle.slug}`}
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
                  <span>Previous Guide #{prevArticle.number}</span>
                </div>
                <div style={{
                  fontFamily: "'Newsreader', Georgia, serif",
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: '#234338',
                  lineHeight: 1.3
                }}>
                  {prevArticle.title}
                </div>
              </Link>
            )}

            {nextArticle && (
              <Link
                href={`/resources/${nextArticle.slug}`}
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
                  <span>Next Guide #{nextArticle.number}</span>
                  <ArrowRight size={14} />
                </div>
                <div style={{
                  fontFamily: "'Newsreader', Georgia, serif",
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: '#234338',
                  lineHeight: 1.3
                }}>
                  {nextArticle.title}
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
