'use client';
import React from 'react';
import { useParams, Link } from '../lib/navigation';
import { RESOURCES_DATA } from '../data/researchData';
import { ArrowLeft, ArrowRight, BookOpen, Share2 } from 'lucide-react';
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
              fontStyle: 'italic',
              color: '#C88528',
              fontWeight: 600,
              lineHeight: 1.45,
              marginBottom: '2rem'
            }}>
              {article.subtitle}
            </div>

            {/* Featured Quote Callout Card */}
            {article.quote && (
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
                  {article.quote}
                </div>
              </div>
            )}

            {/* Article Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>
              {article.sections?.map((section, sIdx) => (
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
              ))}
            </div>

            {/* Article Footer & Key Takeaway */}
            <div style={{
              marginTop: '3.5rem',
              padding: '1.75rem 2rem',
              backgroundColor: '#F8FAF8',
              border: '1px solid #E3EBE5',
              borderRadius: '12px'
            }}>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#234338',
                marginBottom: '0.5rem'
              }}>
                A REFLECTION FOR PARENTS & EDUCATORS
              </div>
              <p style={{
                margin: 0,
                fontSize: '0.96rem',
                color: '#1A1714',
                lineHeight: 1.65
              }}>
                At Nido Montessori, we observe before we interpret. When everyday moments challenge our patience, we look for the developing capability underneath. What can we make possible for the child today?
              </p>
            </div>

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
