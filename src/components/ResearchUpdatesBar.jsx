'use client';
import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { RESEARCH_UPDATES } from '../data/researchData';
import SpecularButton from './SpecularButton';

function splitDate(dateStr) {
  // "20 JUL 2026" → { day: "20", month: "JUL", year: "2026" }
  const parts = dateStr.trim().split(/\s+/);
  return {
    day: parts[0] || '',
    month: parts[1] || '',
    year: parts[2] || '',
  };
}

export default function ResearchUpdatesBar({ onOpenArchive }) {
  const [activeId, setActiveId] = useState(RESEARCH_UPDATES[0]?.id);
  const lead = RESEARCH_UPDATES.find((u) => u.id === activeId) || RESEARCH_UPDATES[0];
  const leadDate = splitDate(lead.date);

  return (
    <section
      style={{
        padding: '3.25rem 0 4rem 0',
        background:
          'linear-gradient(180deg, #F7F0E4 0%, #FAF3E2 45%, #F3EDE0 100%)',
        borderTop: '1px solid #E8DFCF',
        borderBottom: '1px solid #E8DFCF',
      }}
    >
      <div className="container-standard">
        {/* Masthead */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '1.5rem',
            flexWrap: 'wrap',
            marginBottom: '1.75rem',
            paddingBottom: '1rem',
            borderBottom: '2px solid #234338',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#8B2030',
                marginBottom: '0.45rem',
              }}
            >
              From the research desk
            </div>
            <h2
              style={{
                fontFamily: "'Newsreader', Georgia, serif",
                fontSize: 'clamp(1.65rem, 2.8vw, 2.15rem)',
                fontWeight: 600,
                color: '#1A1714',
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Research Updates
            </h2>
          </div>

          <SpecularButton
            size="sm"
            radius={6}
            tint="#FAF3E2"
            tintOpacity={1}
            textColor="#24201C"
            lineColor="#234338"
            baseColor="#ECE7DF"
            intensity={1.2}
            shineSize={16}
            onClick={onOpenArchive}
          >
            <span>All Updates</span>
            <ArrowRight size={14} />
          </SpecularButton>
        </div>

        {/* Editorial split: lead + dispatch rail */}
        <div className="research-updates-layout">
          {/* Lead dispatch */}
          <article
            className="research-update-lead"
            style={{
              position: 'relative',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5DFD2',
              borderRadius: '14px',
              padding: '1.75rem 1.85rem 1.6rem',
              overflow: 'hidden',
              boxShadow: '0 10px 28px rgba(26, 23, 20, 0.05)',
            }}
          >
            {/* Accent spine */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '4px',
                background: 'linear-gradient(180deg, #8B2030 0%, #234338 100%)',
              }}
            />

            <div
              style={{
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'stretch',
                flexWrap: 'wrap',
              }}
            >
              {/* Oversized date block */}
              <div
                style={{
                  flex: '0 0 auto',
                  minWidth: '88px',
                  padding: '0.85rem 0.9rem',
                  backgroundColor: '#FAF3E2',
                  border: '1px solid #E8DFCF',
                  borderRadius: '10px',
                  textAlign: 'center',
                  alignSelf: 'flex-start',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Newsreader', Georgia, serif",
                    fontSize: '2.35rem',
                    fontWeight: 600,
                    color: '#234338',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {leadDate.day}
                </div>
                <div
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#8B2030',
                    marginTop: '0.35rem',
                  }}
                >
                  {leadDate.month}
                </div>
                <div
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    color: '#8A8275',
                    marginTop: '0.15rem',
                  }}
                >
                  {leadDate.year}
                </div>
              </div>

              <div style={{ flex: '1 1 260px', minWidth: 0 }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#234338',
                    backgroundColor: '#EEF4F0',
                    border: '1px solid #D6E4DB',
                    borderRadius: '999px',
                    padding: '0.28rem 0.7rem',
                    marginBottom: '0.85rem',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#C99428',
                      boxShadow: '0 0 0 3px rgba(201, 148, 40, 0.25)',
                      animation: 'nido-pulse 2.2s ease-in-out infinite',
                    }}
                  />
                  {lead.linkText || 'In Progress'}
                </div>

                <h3
                  style={{
                    fontFamily: "'Newsreader', Georgia, serif",
                    fontSize: 'clamp(1.35rem, 2.4vw, 1.75rem)',
                    fontWeight: 600,
                    color: '#1A1714',
                    lineHeight: 1.25,
                    margin: '0 0 0.7rem 0',
                  }}
                >
                  {lead.title}
                </h3>

                {lead.excerpt && (
                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: '#554F47',
                      lineHeight: 1.6,
                      margin: '0 0 1.15rem 0',
                      maxWidth: '38rem',
                    }}
                  >
                    {lead.excerpt}
                  </p>
                )}

                <button
                  type="button"
                  onClick={onOpenArchive}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    color: '#234338',
                    fontFamily: 'inherit',
                  }}
                >
                  Read the dispatch
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </div>
          </article>

          {/* Dispatch rail */}
          <aside className="research-update-rail" aria-label="Other research updates">
            <div
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#8A8275',
                marginBottom: '0.75rem',
              }}
            >
              Recent dispatches
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {RESEARCH_UPDATES.map((item, idx) => {
                const d = splitDate(item.date);
                const isActive = item.id === lead.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className="research-update-rail-item"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '3.2rem 1fr',
                      gap: '0.85rem',
                      alignItems: 'start',
                      textAlign: 'left',
                      padding: '0.85rem 0.95rem',
                      borderRadius: '10px',
                      border: isActive ? '1px solid #234338' : '1px solid #E5DFD2',
                      backgroundColor: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.45)',
                      boxShadow: isActive ? '0 6px 18px rgba(26,23,20,0.06)' : 'none',
                      cursor: 'pointer',
                      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                      fontFamily: 'inherit',
                    }}
                  >
                    <div style={{ textAlign: 'center', paddingTop: '0.1rem' }}>
                      <div
                        style={{
                          fontFamily: "'Newsreader', Georgia, serif",
                          fontSize: '1.25rem',
                          fontWeight: 600,
                          color: isActive ? '#8B2030' : '#234338',
                          lineHeight: 1,
                        }}
                      >
                        {d.day}
                      </div>
                      <div
                        style={{
                          fontSize: '0.62rem',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#8A8275',
                          marginTop: '0.2rem',
                        }}
                      >
                        {d.month}
                      </div>
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: '0.84rem',
                          fontWeight: 600,
                          color: '#1A1714',
                          lineHeight: 1.35,
                          marginBottom: '0.25rem',
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontSize: '0.72rem',
                          color: '#8A8275',
                          fontWeight: 500,
                        }}
                      >
                        {String(idx + 1).padStart(2, '0')} · {item.linkText || 'In Progress'}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        .research-updates-layout {
          display: grid;
          grid-template-columns: 1.45fr 0.9fr;
          gap: 1.35rem;
          align-items: start;
        }

        .research-update-rail-item:hover {
          background-color: #FFFFFF !important;
          border-color: #C9B89A !important;
          transform: translateX(3px);
        }

        @keyframes nido-pulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(201, 148, 40, 0.22); opacity: 1; }
          50% { box-shadow: 0 0 0 6px rgba(201, 148, 40, 0.08); opacity: 0.85; }
        }

        @media (max-width: 900px) {
          .research-updates-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
