'use client';
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from '../lib/navigation';
import { 
  ArrowLeft, 
  ArrowRight, 
  Download, 
  Copy, 
  Check, 
  FileText,
  ExternalLink,
  Maximize2,
  X,
  Bookmark
} from 'lucide-react';
import { FEATURED_STUDIES } from '../data/researchData';
import SpecularButton from '../components/SpecularButton';
import BorderGlow from '../components/BorderGlow';
import NidoLogo from '../components/NidoLogo';
import SEO from '../components/SEO';

export default function StudyDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [citationFormat, setCitationFormat] = useState('APA');
  const [copied, setCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Find matching study by slug or id
  const study = FEATURED_STUDIES.find(s => s.slug === slug || s.id === slug) || FEATURED_STUDIES[0];
  const isCaseStudy = Boolean(study.phases || study.literatureReview || study.id === 'study-founding-case-study');

  const citations = {
    APA: study.apaCitation || `${study.author || 'Shobha Goyal'}. (2026). ${study.title}. Nido Montessori Research Updates. DOI: ${study.doi || '10.5281/zenodo.nido.2026.01'}`,
    BibTeX: study.bibtexCitation || `@article{nido_${study.id || 'study'},\n  title={${study.title}},\n  author={${study.author || 'Shobha Goyal'}},\n  journal={Nido Montessori Research Updates},\n  year={2026},\n  doi={${study.doi || '10.5281/zenodo.nido.2026.01'}}\n}`,
    Chicago: `${study.author || 'Shobha Goyal'}. "${study.title}." Nido Montessori Research Updates (2026). https://doi.org/${study.doi || '10.5281/zenodo.nido.2026.01'}.`,
    MLA: `${study.author || 'Shobha Goyal'}. "${study.title}." Nido Montessori Research Updates, 2026, doi:${study.doi || '10.5281/zenodo.nido.2026.01'}.`
  };

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(citations[citationFormat]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    setDownloadSuccess(true);
    if (study.id === 'study-founding-case-study') {
      const link = document.createElement('a');
      link.href = '/Nido_Montessori_Founding_Case_Study.pdf';
      link.download = 'Nido_Montessori_Founding_Case_Study.pdf';
      link.click();
    } else {
      const content = `NIDO MONTESSORI RESEARCH REPORT\nTitle: ${study.title}\nDate: ${study.date}\nDOI: ${study.doi}\n\nABSTRACT:\n${study.fullOverview || study.summary}\n\nMETHODOLOGY:\n${study.methodology || ''}\n\nKEY FINDINGS:\n${study.keyFindings?.map((f, i) => `${i + 1}. ${f}`).join('\n') || ''}\n\nCITATION:\n${citations.APA}`;
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${study.slug || 'nido-study'}-report.txt`;
      link.click();
      URL.revokeObjectURL(url);
    }
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  const relatedStudies = FEATURED_STUDIES.filter(s => s.id !== study.id);

  return (
    <div style={{ backgroundColor: '#FAF3E2', minHeight: '100vh', paddingTop: '1.5rem', paddingBottom: '5rem' }}>
      <SEO 
        title={study.title}
        description={study.fullOverview ? study.fullOverview.slice(0, 160) : study.summary}
        keywords={`${study.title}, Montessori Research, DOI ${study.doi}, ${study.author || 'Shobha Goyal'}, Nido Montessori, Blue Blocks School`}
        article={true}
        publishedTime="2026-08-20"
        author={study.author || 'Shobha Goyal'}
      />
      <div className="container-standard">
        
        {/* Breadcrumbs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#7E766D', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
          <Link to="/" style={{ color: '#554F47', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <Link to="/publications" style={{ color: '#554F47', textDecoration: 'none' }}>Publications</Link>
          <span>/</span>
          <span style={{ color: '#234338', fontWeight: 600 }}>{study.badge} • {study.date}</span>
        </div>

        {/* Back Button */}
        <button 
          onClick={() => navigate('/publications')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'none',
            border: 'none',
            fontSize: '0.86rem',
            fontWeight: 600,
            color: '#234338',
            cursor: 'pointer',
            marginBottom: '1.25rem',
            padding: 0
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to All Publications</span>
        </button>

        {/* Paper Header Container with BorderGlow */}
        <BorderGlow
          borderRadius={14}
          backgroundColor="#FFFFFF"
          glowRadius={36}
          colors={['#234338', '#C99428', '#5E9480']}
          style={{ marginBottom: '2rem' }}
        >
          <div className="card-pad-standard">
            {/* Running Head with Nido Logo */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem', borderBottom: '1px solid #F0EAE1', paddingBottom: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <NidoLogo size="small" />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.74rem', color: '#6A635B', fontFamily: 'monospace', backgroundColor: '#F4EFE6', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>
                  DOI: {study.doi}
                </span>
                {study.authorOrcid && (
                  <a 
                    href={study.authorOrcid} 
                    target="_blank" 
                    rel="noreferrer"
                    style={{ fontSize: '0.74rem', color: '#234338', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontWeight: 600 }}
                  >
                    <span>ORCID iD</span>
                    <ExternalLink size={11} />
                  </a>
                )}
              </div>
            </div>

            {/* Badges & Meta */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <span style={{
                backgroundColor: '#234338',
                color: '#FFFFFF',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                padding: '0.25rem 0.65rem',
                borderRadius: '4px',
                textTransform: 'uppercase'
              }}>
                {study.badge}
              </span>
              <span style={{ fontSize: '0.82rem', color: '#C99428', fontWeight: 700 }}>
                {study.date}
              </span>
              <span style={{ fontSize: '0.82rem', color: '#7E766D' }}>
                • {study.areaName}
              </span>
            </div>

            {/* Main Title - Heading in Green */}
            <h1 style={{
              fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.8rem, 3.4vw, 2.75rem)',
              fontWeight: 600,
              color: '#234338',
              lineHeight: 1.22,
              marginBottom: '1.25rem'
            }}>
              {study.title}
            </h1>

            {/* Author Byline - Subheading in Black */}
            <div style={{ fontSize: '1.1rem', color: '#1A1714', fontWeight: 600, marginBottom: '0.35rem', fontFamily: "'Newsreader', serif" }}>
              {study.leadAuthor}
            </div>
            <div style={{ fontSize: '0.88rem', color: '#6A635B', marginBottom: '1.25rem' }}>
              {study.authorAffiliation || 'Nido Montessori Preschool, Hyderabad, Telangana, India'}
            </div>

            {/* Inquiry / Subtitle Quote Banner - Italic in Orange */}
            <div style={{
              fontSize: '1.02rem',
              fontStyle: 'italic',
              color: '#C88528',
              lineHeight: 1.55,
              padding: '0.9rem 1.25rem',
              backgroundColor: '#FDF8EE',
              borderLeft: '4px solid #C88528',
              borderRadius: '4px',
              marginBottom: '1.25rem'
            }}>
              "{study.question}"
            </div>

            {/* Author Note if present */}
            {study.authorNote && (
              <div style={{
                backgroundColor: '#FAF3E2',
                border: '1px solid #ECE7DF',
                borderRadius: '8px',
                padding: '1rem 1.25rem',
                fontSize: '0.84rem',
                color: '#554F47',
                lineHeight: 1.55,
                marginTop: '1rem'
              }}>
                <div style={{ fontWeight: 700, color: '#1A1714', marginBottom: '0.3rem', textTransform: 'uppercase', fontSize: '0.74rem', letterSpacing: '0.06em' }}>
                  Author Note
                </div>
                <div style={{ whiteSpace: 'pre-line' }}>
                  {study.authorNote}
                </div>
              </div>
            )}
          </div>
        </BorderGlow>

        {/* Action Controls Header Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem', backgroundColor: '#FFFFFF', padding: '0.85rem 1.25rem', borderRadius: '10px', border: '1px solid #EBE5DB' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84rem', color: '#554F47' }}>
            <FileText size={16} color="#234338" />
            <span>Complete Scholarly Manuscript</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            {study.id === 'study-founding-case-study' && (
              <a
                href="/Nido_Montessori_Founding_Case_Study.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: '#FAF3E2',
                  border: '1px solid #D4CEBE',
                  borderRadius: '6px',
                  padding: '0.45rem 0.9rem',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#234338',
                  textDecoration: 'none'
                }}
              >
                <Download size={14} />
                <span>Download Original PDF</span>
              </a>
            )}
            
            <button
              onClick={handleCopyCitation}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: '#FAF3E2',
                border: '1px solid #D4CEBE',
                borderRadius: '6px',
                padding: '0.45rem 0.9rem',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#234338',
                cursor: 'pointer'
              }}
            >
              {copied ? <Check size={14} color="#234338" /> : <Copy size={14} />}
              <span>{copied ? 'Citation Copied' : 'Cite APA'}</span>
            </button>
          </div>
        </div>

        {/* CASE STUDY FULL READER VIEW */}
        {isCaseStudy ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }}>
            
            {/* Main Academic Paper Body */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Abstract & Keywords Card */}
              <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#DDBB7B', '#5A9B80']}>
                <div className="card-pad-medium">
                  <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.5rem', fontWeight: 600, color: '#234338', marginBottom: '0.85rem' }}>
                    Abstract
                  </h2>
                  <p style={{ fontSize: '1rem', color: '#2B2621', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                    {study.fullOverview}
                  </p>
                  {study.keywords && (
                    <div style={{ borderTop: '1px solid #F0EAE1', paddingTop: '0.85rem', fontSize: '0.88rem', color: '#554F47' }}>
                      <strong style={{ color: '#C88528', fontStyle: 'italic' }}>Keywords:</strong> {study.keywords.join(', ')}
                    </div>
                  )}
                </div>
              </BorderGlow>

              {/* Background and Rationale */}
              {study.background && (
                <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#C99428', '#386684']}>
                  <div className="card-pad-medium">
                    <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.5rem', fontWeight: 600, color: '#234338', marginBottom: '1rem' }}>
                      Background and Rationale
                    </h2>
                    <div style={{ fontSize: '1rem', color: '#2B2621', lineHeight: 1.75, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {study.background.split('\n\n').map((para, i) => (
                        <p key={i} style={{ margin: 0 }}>{para}</p>
                      ))}
                    </div>
                  </div>
                </BorderGlow>
              )}

              {/* Purpose and Scope & Research Questions */}
              <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#DDBB7B', '#4D8A74']}>
                <div className="card-pad-medium">
                  <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.5rem', fontWeight: 600, color: '#234338', marginBottom: '0.85rem' }}>
                    Purpose and Scope of the Study
                  </h2>
                  <p style={{ fontSize: '1rem', color: '#2B2621', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    {study.purposeAndScope}
                  </p>

                  <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.25rem', fontWeight: 600, color: '#1A1714', marginBottom: '0.75rem' }}>
                    Research Questions
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {study.researchQuestions?.map((rq, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', backgroundColor: '#FAF3E2', padding: '0.85rem 1.15rem', borderRadius: '6px', border: '1px solid #ECE7DF' }}>
                        <span style={{ color: '#C99428', fontWeight: 700, fontSize: '0.9rem' }}>RQ{idx + 1}.</span>
                        <p style={{ fontSize: '0.95rem', color: '#2B2621', lineHeight: 1.55, margin: 0 }}>
                          {rq.replace(/^RQ\d+\.\s*/, '')}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </BorderGlow>

              {/* Literature Review */}
              {study.literatureReview && (
                <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#C99428', '#5E9480']}>
                  <div className="card-pad-medium">
                    <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.5rem', fontWeight: 600, color: '#234338', marginBottom: '1.25rem' }}>
                      Literature Review
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      {study.literatureReview.map((section, sIdx) => (
                        <div key={sIdx}>
                          <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.2rem', fontWeight: 600, color: '#1A1714', marginBottom: '0.65rem' }}>
                            {section.heading}
                          </h3>
                          {section.paragraphs.map((p, pIdx) => (
                            <p key={pIdx} style={{ fontSize: '0.98rem', color: '#2B2621', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                              {p}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </BorderGlow>
              )}

              {/* Method & Figure 1 */}
              <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#DDBB7B', '#386684']}>
                <div className="card-pad-medium">
                  <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.5rem', fontWeight: 600, color: '#234338', marginBottom: '1.25rem' }}>
                    Method
                  </h2>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.98rem', color: '#2B2621', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    {study.methodology.split('\n\n').map((m, mIdx) => (
                      <p key={mIdx} style={{ margin: 0 }}>{m}</p>
                    ))}
                  </div>

                  {/* Timeline Text */}
                  {study.timelineText && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.2rem', fontWeight: 600, color: '#1A1714', marginBottom: '0.5rem' }}>
                        Timeline
                      </h3>
                      <p style={{ fontSize: '0.98rem', color: '#2B2621', lineHeight: 1.7, margin: 0 }}>
                        {study.timelineText}
                      </p>
                    </div>
                  )}

                  {/* Figure 1 - Exact PDF Image */}
                  {study.figure1 && (
                    <div style={{ backgroundColor: '#FAF3E2', border: '1px solid #E5E0D6', borderRadius: '10px', padding: '1.25rem', marginBottom: '1.75rem', textAlign: 'center' }}>
                      <div 
                        style={{ position: 'relative', cursor: 'pointer', overflow: 'hidden', borderRadius: '8px', backgroundColor: '#FFFFFF', border: '1px solid #EBE5DB', display: 'inline-block', maxWidth: '100%' }}
                        onClick={() => setSelectedImage({ src: study.figure1.image, alt: study.figure1.alt, caption: study.figure1.caption })}
                      >
                        <img 
                          src={study.figure1.image} 
                          alt={study.figure1.alt}
                          style={{ width: '100%', maxWidth: '780px', height: 'auto', display: 'block' }}
                        />
                        <div style={{ position: 'absolute', right: '8px', bottom: '8px', backgroundColor: 'rgba(0,0,0,0.65)', color: '#FFFFFF', padding: '4px 8px', borderRadius: '4px', fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Maximize2 size={12} />
                          <span>Enlarge</span>
                        </div>
                      </div>
                      <div style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: '#C88528', fontStyle: 'italic', lineHeight: 1.45, whiteSpace: 'pre-line' }}>
                        {study.figure1.caption}
                      </div>
                    </div>
                  )}

                  {/* Positionality and Reflexivity */}
                  {study.positionality && (
                    <div style={{ marginBottom: '1.5rem', borderTop: '1px solid #F0EAE1', paddingTop: '1.25rem' }}>
                      <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.2rem', fontWeight: 600, color: '#1A1714', marginBottom: '0.65rem' }}>
                        Positionality and Reflexivity
                      </h3>
                      <p style={{ fontSize: '0.98rem', color: '#2B2621', lineHeight: 1.7, margin: 0 }}>
                        {study.positionality}
                      </p>
                    </div>
                  )}

                  {/* Ethical Considerations */}
                  {study.ethicalConsiderations && (
                    <div style={{ borderTop: '1px solid #F0EAE1', paddingTop: '1.25rem' }}>
                      <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.2rem', fontWeight: 600, color: '#1A1714', marginBottom: '0.65rem' }}>
                        Ethical Considerations
                      </h3>
                      <p style={{ fontSize: '0.98rem', color: '#2B2621', lineHeight: 1.7, margin: 0 }}>
                        {study.ethicalConsiderations}
                      </p>
                    </div>
                  )}
                </div>
              </BorderGlow>

              {/* Findings & The 5 Phases (with Figures 2, 3, 4) */}
              <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#C99428', '#5E9480']}>
                <div className="card-pad-medium">
                  <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.65rem', fontWeight: 600, color: '#234338', marginBottom: '0.85rem' }}>
                    Findings
                  </h2>
                  <p style={{ fontSize: '1rem', color: '#2B2621', lineHeight: 1.7, marginBottom: '2rem' }}>
                    {study.findingsIntro}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                    {study.phases?.map((phase) => (
                      <div key={phase.phaseNumber} style={{ borderTop: '1px solid #ECE7DF', paddingTop: '1.75rem' }}>
                        <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.35rem', fontWeight: 600, color: '#1A1714', marginBottom: '1rem' }}>
                          {phase.title}
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.98rem', color: '#2B2621', lineHeight: 1.72 }}>
                          {phase.paragraphs?.map((p, pIdx) => {
                            const isQuote = p.startsWith('“') || p.startsWith('"');
                            return isQuote ? (
                              <div key={pIdx} style={{
                                fontStyle: 'italic',
                                color: '#C88528',
                                padding: '0.85rem 1.25rem',
                                backgroundColor: '#FDF8EE',
                                borderLeft: '4px solid #C88528',
                                borderRadius: '4px',
                                margin: '0.5rem 0'
                              }}>
                                {p}
                              </div>
                            ) : (
                              <p key={pIdx} style={{ margin: 0 }}>{p}</p>
                            );
                          })}
                        </div>

                        {/* Phase Figure if present */}
                        {phase.figure && (
                          <div style={{ backgroundColor: '#FAF3E2', border: '1px solid #E5E0D6', borderRadius: '10px', padding: '1.25rem', margin: '1.75rem 0', textAlign: 'center' }}>
                            <div 
                              style={{ position: 'relative', cursor: 'pointer', overflow: 'hidden', borderRadius: '8px', backgroundColor: '#FFFFFF', border: '1px solid #EBE5DB', display: 'inline-block', maxWidth: '100%' }}
                              onClick={() => setSelectedImage({ src: phase.figure.image, alt: phase.figure.alt, caption: phase.figure.caption })}
                            >
                              <img 
                                src={phase.figure.image} 
                                alt={phase.figure.alt}
                                style={{ width: '100%', maxWidth: '780px', height: 'auto', display: 'block' }}
                              />
                              <div style={{ position: 'absolute', right: '8px', bottom: '8px', backgroundColor: 'rgba(0,0,0,0.65)', color: '#FFFFFF', padding: '4px 8px', borderRadius: '4px', fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <Maximize2 size={12} />
                                <span>Enlarge</span>
                              </div>
                            </div>
                            <div style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: '#C88528', fontStyle: 'italic', lineHeight: 1.45, whiteSpace: 'pre-line' }}>
                              {phase.figure.caption}
                            </div>
                          </div>
                        )}

                        {/* Additional paragraphs after figure */}
                        {phase.afterFigureParagraphs && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.98rem', color: '#2B2621', lineHeight: 1.72, marginTop: '1rem' }}>
                            {phase.afterFigureParagraphs.map((afp, afIdx) => {
                              const isQuote = afp.startsWith('“') || afp.startsWith('"') || afp.includes('The founder’s reflection:');
                              return isQuote ? (
                                <div key={afIdx} style={{
                                  fontStyle: 'italic',
                                  color: '#C88528',
                                  padding: '0.85rem 1.25rem',
                                  backgroundColor: '#FDF8EE',
                                  borderLeft: '4px solid #C88528',
                                  borderRadius: '4px',
                                  margin: '0.5rem 0'
                                }}>
                                  {afp}
                                </div>
                              ) : (
                                <p key={afIdx} style={{ margin: 0 }}>{afp}</p>
                              );
                            })}
                          </div>
                        )}

                        {/* Closing paragraphs */}
                        {phase.closingParagraphs && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.98rem', color: '#2B2621', lineHeight: 1.72, marginTop: '1rem' }}>
                            {phase.closingParagraphs.map((cp, cpIdx) => (
                              <p key={cpIdx} style={{ margin: 0 }}>{cp}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </BorderGlow>

              {/* Table 1: Cross-Cutting Challenges Across the Founding Process */}
              {study.table1 && (
                <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#DDBB7B', '#4D8A74']}>
                  <div className="card-pad-medium">
                    <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.5rem', fontWeight: 600, color: '#234338', marginBottom: '0.85rem' }}>
                      Cross-Cutting Challenges and Adaptive Strategies
                    </h2>
                    <p style={{ fontSize: '0.98rem', color: '#2B2621', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                      Several challenges recurred across more than one phase rather than belonging neatly to a single stage of the founding process. Table 1 summarizes these, together with the adaptive strategies the founding team used in response.
                    </p>

                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#1A1714' }}>
                        Table 1
                      </div>
                      <div style={{ fontStyle: 'italic', fontSize: '0.95rem', color: '#C88528' }}>
                        Cross-Cutting Challenges Across the Founding Process
                      </div>
                    </div>

                    <div style={{ overflowX: 'auto', marginBottom: '1rem', border: '1px solid #E5E0D6', borderRadius: '8px' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', textAlign: 'left' }}>
                        <thead>
                          <tr style={{ backgroundColor: '#234338', color: '#FFFFFF' }}>
                            <th style={{ padding: '0.85rem 1rem', fontWeight: 600, width: '32%' }}>Challenge</th>
                            <th style={{ padding: '0.85rem 1rem', fontWeight: 600, width: '18%' }}>Phase(s) Most Affected</th>
                            <th style={{ padding: '0.85rem 1rem', fontWeight: 600, width: '50%' }}>Adaptive Strategy Used</th>
                          </tr>
                        </thead>
                        <tbody>
                          {study.table1.rows.map((row, rIdx) => (
                            <tr key={rIdx} style={{ borderBottom: '1px solid #ECE7DF', backgroundColor: rIdx % 2 === 0 ? '#FFFFFF' : '#FAF3E2' }}>
                              <td style={{ padding: '0.85rem 1rem', fontWeight: 600, color: '#1A1714', verticalAlign: 'top' }}>{row.challenge}</td>
                              <td style={{ padding: '0.85rem 1rem', color: '#C99428', fontWeight: 700, verticalAlign: 'top' }}>{row.phases}</td>
                              <td style={{ padding: '0.85rem 1rem', color: '#3A3631', lineHeight: 1.5, verticalAlign: 'top' }}>{row.strategy}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </BorderGlow>
              )}

              {/* Discussion */}
              {study.discussion && (
                <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#C99428', '#386684']}>
                  <div className="card-pad-medium">
                    <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.5rem', fontWeight: 600, color: '#234338', marginBottom: '1rem' }}>
                      Discussion
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.98rem', color: '#2B2621', lineHeight: 1.72 }}>
                      {study.discussion.map((discPara, dIdx) => (
                        <p key={dIdx} style={{ margin: 0 }}>{discPara}</p>
                      ))}
                    </div>
                  </div>
                </BorderGlow>
              )}

              {/* Recommendations for Practitioners & Table 2 */}
              {study.recommendations && (
                <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#DDBB7B', '#5A9B80']}>
                  <div className="card-pad-medium">
                    <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.5rem', fontWeight: 600, color: '#234338', marginBottom: '0.85rem' }}>
                      Recommendations for Practitioners
                    </h2>
                    <p style={{ fontSize: '0.98rem', color: '#2B2621', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                      {study.recommendations.intro}
                    </p>

                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#1A1714' }}>
                        Table 2
                      </div>
                      <div style={{ fontStyle: 'italic', fontSize: '0.95rem', color: '#C88528' }}>
                        Practical Recommendations for Prospective Montessori Founders
                      </div>
                    </div>

                    {/* Table 2 */}
                    <div style={{ overflowX: 'auto', marginBottom: '1rem', border: '1px solid #E5E0D6', borderRadius: '8px' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', textAlign: 'left' }}>
                        <thead>
                          <tr style={{ backgroundColor: '#234338', color: '#FFFFFF' }}>
                            <th style={{ padding: '0.85rem 1rem', fontWeight: 600, width: '48px', textAlign: 'center' }}>#</th>
                            <th style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>Recommendation</th>
                          </tr>
                        </thead>
                        <tbody>
                          {study.recommendations.table?.rows.map((row) => (
                            <tr key={row.num} style={{ borderBottom: '1px solid #ECE7DF', backgroundColor: row.num % 2 === 1 ? '#FFFFFF' : '#FAF3E2' }}>
                              <td style={{ padding: '0.85rem 1rem', fontWeight: 700, color: '#234338', textAlign: 'center', verticalAlign: 'top' }}>{row.num}</td>
                              <td style={{ padding: '0.85rem 1rem', color: '#2B2621', lineHeight: 1.55, verticalAlign: 'top' }}>{row.text}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </BorderGlow>
              )}

              {/* Limitations and Directions for Future Research */}
              {study.limitations && (
                <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#C99428', '#386684']}>
                  <div className="card-pad-medium">
                    <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.5rem', fontWeight: 600, color: '#234338', marginBottom: '0.85rem' }}>
                      Limitations and Directions for Future Research
                    </h2>
                    <p style={{ fontSize: '0.98rem', color: '#2B2621', lineHeight: 1.72, margin: 0 }}>
                      {study.limitations}
                    </p>
                  </div>
                </BorderGlow>
              )}

              {/* Conclusion */}
              {study.conclusion && (
                <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#DDBB7B', '#4D8A74']}>
                  <div className="card-pad-medium">
                    <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.5rem', fontWeight: 600, color: '#234338', marginBottom: '0.85rem' }}>
                      Conclusion
                    </h2>
                    <p style={{ fontSize: '0.98rem', color: '#2B2621', lineHeight: 1.72, margin: 0 }}>
                      {study.conclusion}
                    </p>
                  </div>
                </BorderGlow>
              )}

              {/* References */}
              {study.references && (
                <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#C99428', '#5E9480']}>
                  <div className="card-pad-medium">
                    <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.5rem', fontWeight: 600, color: '#234338', marginBottom: '1.25rem' }}>
                      References
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                      {study.references.map((ref) => (
                        <div key={ref.id} style={{ fontSize: '0.9rem', color: '#3A3631', lineHeight: 1.6, paddingLeft: '1.5rem', textIndent: '-1.5rem' }}>
                          <span style={{ fontWeight: 600, color: '#234338', marginRight: '0.4rem' }}>{ref.id}.</span>
                          <span>{ref.citation}</span>
                          {ref.url && (
                            <a 
                              href={ref.url} 
                              target="_blank" 
                              rel="noreferrer"
                              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem', color: '#234338', marginLeft: '0.5rem', fontWeight: 600, textDecoration: 'underline' }}
                            >
                              <span>Link</span>
                              <ExternalLink size={12} />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </BorderGlow>
              )}

              {/* Appendix A: Documentation Log of the Founding Process (All Exact Images) */}
              {study.appendixA && (
                <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#DDBB7B', '#2E6351']}>
                  <div className="card-pad-medium">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', color: '#C99428', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.78rem', letterSpacing: '0.08em' }}>
                      <Bookmark size={15} />
                      <span>Primary Institutional Archive</span>
                    </div>
                    <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.65rem', fontWeight: 600, color: '#234338', marginBottom: '0.5rem' }}>
                      {study.appendixA.title}
                    </h2>
                    <p style={{ fontSize: '0.95rem', color: '#554F47', marginBottom: '1.75rem' }}>
                      {study.appendixA.description}
                    </p>

                    <div style={{ marginBottom: '1.25rem' }}>
                      <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#1A1714' }}>
                        Table A1
                      </div>
                      <div style={{ fontStyle: 'italic', fontSize: '0.95rem', color: '#C88528' }}>
                        Suggested Media Documentation by Founding Phase
                      </div>
                    </div>

                    {/* Table A1 Layout - Exact 3-Column Academic Table */}
                    <div style={{ overflowX: 'auto', border: '1px solid #D5CEBE', borderRadius: '8px', marginBottom: '1rem' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', textAlign: 'left' }}>
                        <thead>
                          <tr style={{ backgroundColor: '#1E351C', color: '#FFFFFF' }}>
                            <th style={{ padding: '0.9rem 1.1rem', fontWeight: 600, width: '20%', verticalAlign: 'top', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                              Phase
                            </th>
                            <th style={{ padding: '0.9rem 1.1rem', fontWeight: 600, width: '30%', verticalAlign: 'top', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                              Suggested Media
                            </th>
                            <th style={{ padding: '0.9rem 1.1rem', fontWeight: 600, width: '50%', verticalAlign: 'top' }}>
                              Supporting Media
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {study.appendixA.table?.phases.map((ph, phIdx) => (
                            <tr key={phIdx} style={{ borderBottom: '1px solid #E5DFD2', backgroundColor: phIdx % 2 === 0 ? '#FAF3E2' : '#FFFFFF' }}>
                              <td style={{ padding: '1.1rem', fontWeight: 700, color: '#1A1714', verticalAlign: 'top', borderRight: '1px solid #E5DFD2' }}>
                                {ph.phase}
                              </td>
                              <td style={{ padding: '1.1rem', verticalAlign: 'top', borderRight: '1px solid #E5DFD2' }}>
                                <div style={{ fontStyle: 'italic', color: '#C88528', lineHeight: 1.55 }}>
                                  {ph.suggestedMedia}
                                </div>
                              </td>
                              <td style={{ padding: '1.1rem', verticalAlign: 'top' }}>
                                <div style={{
                                  display: 'grid',
                                  gridTemplateColumns: ph.images.length === 1 ? '1fr' : 'repeat(auto-fit, minmax(180px, 1fr))',
                                  gap: '1rem'
                                }}>
                                  {ph.images.map((img, iIdx) => (
                                    <div 
                                      key={iIdx}
                                      style={{
                                        backgroundColor: '#FFFFFF',
                                        border: '1px solid #DFD8C9',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        transition: 'transform 0.2s, box-shadow 0.2s',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                                      }}
                                      className="hover-lift"
                                      onClick={() => setSelectedImage(img)}
                                    >
                                      <div style={{ height: '170px', overflow: 'hidden', backgroundColor: '#F3EFE6', position: 'relative' }}>
                                        <img 
                                          src={img.src} 
                                          alt={img.alt}
                                          style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                                        />
                                        <div style={{ position: 'absolute', right: '6px', bottom: '6px', backgroundColor: 'rgba(0,0,0,0.65)', color: '#FFFFFF', padding: '3px 6px', borderRadius: '4px', fontSize: '0.68rem', display: 'flex', alignItems: 'center', gap: '3px' }}>
                                          <Maximize2 size={11} />
                                          <span>Zoom</span>
                                        </div>
                                      </div>
                                      <div style={{ padding: '0.65rem', fontSize: '0.76rem', color: '#443F39', lineHeight: 1.4, fontWeight: 500 }}>
                                        {img.caption || img.alt}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </BorderGlow>
              )}

            </div>
          </div>
        ) : (
          /* STANDARD SHORT STUDY VIEW (For Study 1, Study 2, Study 3) */
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>
            
            {/* Main Article Content Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              
              {/* Featured Image */}
              <div style={{
                width: '100%',
                height: '240px',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
                border: '1px solid #ECE7DF'
              }}>
                <img 
                  src={study.image} 
                  alt={study.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* 1. Executive Abstract */}
              <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#DDBB7B', '#5A9B80']}>
                <div className="card-pad-medium">
                  <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.45rem', fontWeight: 600, color: '#234338', marginBottom: '0.75rem' }}>
                    1. Executive Overview & Abstract
                  </h2>
                  <p style={{ fontSize: '0.98rem', color: '#3A3631', lineHeight: 1.65, marginBottom: '1rem' }}>
                    {study.fullOverview}
                  </p>
                  {study.background && (
                    <p style={{ fontSize: '0.94rem', color: '#554F47', lineHeight: 1.6 }}>
                      {study.background}
                    </p>
                  )}
                </div>
              </BorderGlow>

              {/* 2. Observational Methodology */}
              <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#C99428', '#386684']}>
                <div className="card-pad-medium">
                  <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.45rem', fontWeight: 600, color: '#234338', marginBottom: '0.75rem' }}>
                    2. Methodology & Observational Setting
                  </h2>
                  <p style={{ fontSize: '0.96rem', color: '#443F39', lineHeight: 1.65, marginBottom: '1rem' }}>
                    {study.methodology}
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.85rem', backgroundColor: '#FAF3E2', padding: '1rem', borderRadius: '8px', border: '1px solid #EBE5DB' }}>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#888075', textTransform: 'uppercase', fontWeight: 700 }}>Study Period</div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1A1714' }}>{study.studyPeriod || 'Observational Cycle'}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#888075', textTransform: 'uppercase', fontWeight: 700 }}>Sample Cohort</div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1A1714' }}>{study.sampleSize || 'Bachupally environments'}</div>
                    </div>
                  </div>
                </div>
              </BorderGlow>

              {/* 3. Key Empirical Findings */}
              {study.keyFindings && (
                <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#DDBB7B', '#4D8A74']}>
                  <div className="card-pad-medium">
                    <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.45rem', fontWeight: 600, color: '#234338', marginBottom: '1rem' }}>
                      3. Key Findings & Empirical Observations
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                      {study.keyFindings.map((finding, idx) => (
                        <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                          <div style={{
                            width: '26px',
                            height: '26px',
                            borderRadius: '50%',
                            backgroundColor: '#234338',
                            color: '#FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            flexShrink: 0,
                            marginTop: '0.15rem'
                          }}>
                            {idx + 1}
                          </div>
                          <p style={{ fontSize: '0.95rem', color: '#3A3631', lineHeight: 1.6, margin: 0 }}>
                            {finding}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </BorderGlow>
              )}

              {/* 4. Practical Implications */}
              {study.implications && (
                <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#C99428', '#386684']}>
                  <div className="card-pad-medium">
                    <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.45rem', fontWeight: 600, color: '#234338', marginBottom: '0.75rem' }}>
                      4. Practical Implications for Parents & Guides
                    </h2>
                    <p style={{ fontSize: '0.96rem', color: '#3A3631', lineHeight: 1.65, margin: 0 }}>
                      {study.implications}
                    </p>
                  </div>
                </BorderGlow>
              )}

            </div>

            {/* Sidebar / Tools Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Download Full Paper Action Box */}
              <BorderGlow
                borderRadius={12}
                backgroundColor="#234338"
                glowColor="42 80 80"
                glowRadius={36}
                colors={['#DDBB7B', '#2E6351', '#FFE39B']}
                fillOpacity={0.3}
              >
                <div style={{ padding: '1.5rem', color: '#FFFFFF' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#DDBB7B', fontSize: '0.74rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    <FileText size={15} />
                    <span>Research Distribution</span>
                  </div>
                  
                  <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.3rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.4rem' }}>
                    Download Complete Paper
                  </h3>
                  
                  <p style={{ fontSize: '0.86rem', color: '#D6E4DB', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    Receive the full classroom transcript, observational records, and statistical tables.
                  </p>

                  <SpecularButton
                    size="sm"
                    radius={6}
                    tint="#DDBB7B"
                    tintOpacity={1}
                    textColor="#143229"
                    lineColor="#FFFFFF"
                    baseColor="#C99428"
                    intensity={1.5}
                    shineSize={16}
                    onClick={handleDownload}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Download size={14} />
                      <span>{downloadSuccess ? 'Downloaded!' : 'Download Paper (TXT)'}</span>
                    </span>
                  </SpecularButton>
                </div>
              </BorderGlow>

              {/* Citation Generator Box */}
              <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#DDBB7B', '#5A9B80']}>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <h4 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.15rem', fontWeight: 600, color: '#1A1714' }}>
                      Cite This Research
                    </h4>
                    <span style={{ fontSize: '0.72rem', color: '#888075', textTransform: 'uppercase' }}>Reference</span>
                  </div>

                  <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.85rem' }}>
                    {['APA', 'BibTeX', 'Chicago', 'MLA'].map((fmt) => (
                      <button
                        key={fmt}
                        onClick={() => setCitationFormat(fmt)}
                        style={{
                          padding: '0.25rem 0.55rem',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          borderRadius: '4px',
                          border: citationFormat === fmt ? '1px solid #234338' : '1px solid #D6D0C4',
                          backgroundColor: citationFormat === fmt ? '#234338' : '#FAF3E2',
                          color: citationFormat === fmt ? '#FFFFFF' : '#443F39',
                          cursor: 'pointer'
                        }}
                      >
                        {fmt}
                      </button>
                    ))}
                  </div>

                  <div style={{
                    backgroundColor: '#FAF3E2',
                    border: '1px solid #EBE5DB',
                    borderRadius: '6px',
                    padding: '0.85rem',
                    fontSize: '0.8rem',
                    color: '#3A3631',
                    fontFamily: citationFormat === 'BibTeX' ? 'monospace' : 'inherit',
                    lineHeight: 1.45,
                    whiteSpace: citationFormat === 'BibTeX' ? 'pre-wrap' : 'normal',
                    marginBottom: '1rem',
                    maxHeight: '130px',
                    overflowY: 'auto'
                  }}>
                    {citations[citationFormat]}
                  </div>

                  <SpecularButton
                    size="sm"
                    radius={6}
                    tint="#FAF3E2"
                    tintOpacity={1}
                    textColor="#24201C"
                    lineColor="#234338"
                    baseColor="#D6D0C4"
                    intensity={1.2}
                    shineSize={14}
                    onClick={handleCopyCitation}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                      {copied ? <Check size={14} color="#234338" /> : <Copy size={14} />}
                      <span>{copied ? 'Citation Copied!' : 'Copy Citation'}</span>
                    </span>
                  </SpecularButton>
                </div>
              </BorderGlow>

            </div>

          </div>
        )}

        {/* Related Research Reports Carousel / Grid */}
        <div style={{ marginTop: '3.5rem', borderTop: '1px solid #EAE5DC', paddingTop: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C99428', marginBottom: '0.2rem' }}>
                Academic Archive
              </div>
              <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.6rem', fontWeight: 600, color: '#1A1714', margin: 0 }}>
                Other Studies in this Series
              </h3>
            </div>
            
            <Link 
              to="/publications" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.88rem', fontWeight: 600, color: '#234338', textDecoration: 'none' }}
            >
              <span>View All Publications</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {relatedStudies.map((rel) => (
              <BorderGlow
                key={rel.id}
                borderRadius={10}
                backgroundColor="#FFFFFF"
                colors={['#234338', '#DDBB7B', '#5A9B80']}
                className="study-card hover-lift"
                onClick={() => {
                  navigate(`/research-studies/${rel.slug}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div style={{ padding: '1.25rem', cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#C99428', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    {rel.badge} • {rel.date}
                  </div>
                  <h4 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.1rem', fontWeight: 600, color: '#1A1714', lineHeight: 1.3, marginBottom: '0.65rem' }}>
                    {rel.title}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: '#5C564E', lineHeight: 1.45, marginBottom: '1rem', flex: 1 }}>
                    {rel.summary}
                  </p>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem', fontWeight: 600, color: '#234338' }}>
                    <span>Read Paper</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </BorderGlow>
            ))}
          </div>
        </div>

      </div>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(10, 20, 16, 0.88)',
            backdropFilter: 'blur(8px)',
            zIndex: 1200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div 
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.85rem 1.25rem', borderBottom: '1px solid #ECE7DF' }}>
              <span style={{ fontSize: '0.86rem', fontWeight: 600, color: '#234338' }}>
                {selectedImage.caption || selectedImage.alt || 'Manuscript Evidence / Figure'}
              </span>
              <button 
                onClick={() => setSelectedImage(null)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#554F47', padding: '4px', borderRadius: '50%' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image Body */}
            <div style={{ padding: '1.25rem', overflowY: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8F6F1', minHeight: '300px' }}>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                style={{ maxWidth: '100%', maxHeight: '72vh', objectFit: 'contain', borderRadius: '6px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
