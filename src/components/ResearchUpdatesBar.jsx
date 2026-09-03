'use client';
import React from 'react';
import { ArrowRight, FileText, Calendar, PenTool, BookOpen } from 'lucide-react';
import { RESEARCH_UPDATES } from '../data/researchData';
import SpecularButton from './SpecularButton';
import BorderGlow from './BorderGlow';

export default function ResearchUpdatesBar({ onSelectUpdate, onOpenArchive }) {
  const getIcon = (idx) => {
    switch (idx % 4) {
      case 0: return <FileText size={16} color="#234338" />;
      case 1: return <Calendar size={16} color="#C99428" />;
      case 2: return <PenTool size={16} color="#D49A2A" />;
      default: return <BookOpen size={16} color="#234338" />;
    }
  };

  return (
    <section style={{
      padding: '2.5rem 0 3.5rem 0',
      backgroundColor: '#FAF3E2'
    }}>
      <div className="container-standard">
        
        {/* Header Row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.5rem'
        }}>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '0.85rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: '#1A1714'
          }}>
            RESEARCH UPDATES
          </h2>

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

        {/* 4-Item Horizontal Strip Box with BorderGlow */}
        <BorderGlow
          borderRadius={10}
          backgroundColor="#F3F2EB"
          edgeSensitivity={25}
          glowRadius={30}
          colors={['#234338', '#C99428', '#5E9480']}
        >
          <div style={{ padding: '1.35rem 1.6rem' }}>
            <div className="updates-strip-grid">
              {RESEARCH_UPDATES.map((item, idx) => (
                <div 
                  key={item.id} 
                  onClick={() => onSelectUpdate(item)}
                  style={{
                    display: 'flex',
                    gap: '0.9rem',
                    alignItems: 'flex-start',
                    paddingRight: idx < 3 ? '1rem' : '0',
                    borderRight: idx < 3 ? '1px solid #E0DDD2' : 'none',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    borderRadius: '8px',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className="update-item-col"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.06)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    const arrow = e.currentTarget.querySelector('.update-arrow');
                    if (arrow) arrow.style.transform = 'translateX(3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'none';
                    const arrow = e.currentTarget.querySelector('.update-arrow');
                    if (arrow) arrow.style.transform = 'none';
                  }}
                >
                  {/* Icon in Circle */}
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #DFDCD0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '0.15rem'
                  }}>
                    {getIcon(idx)}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: '#9E968B',
                      marginBottom: '0.3rem'
                    }}>
                      {item.date}
                    </div>
                    <div style={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#1A1714',
                      lineHeight: 1.35,
                      marginBottom: '0.35rem'
                    }}>
                      {item.title}
                    </div>
                    {item.excerpt && (
                      <p style={{
                        fontSize: '0.78rem',
                        color: '#4A453E',
                        lineHeight: 1.45,
                        marginBottom: '0.45rem',
                        margin: '0 0 0.45rem 0'
                      }}>
                        {item.excerpt}
                      </p>
                    )}
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: '#234338'
                    }}>
                      <span>{item.linkText.replace(' →', '')}</span>
                      <span className="update-arrow" style={{ display: 'inline-flex', transition: 'transform 0.2s ease' }}>
                        <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BorderGlow>

      </div>
    </section>
  );
}
