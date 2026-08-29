'use client';
import React, { useState, useEffect } from 'react';
import { useNavigate } from '../lib/navigation';
import { Search, X } from 'lucide-react';
import { FEATURED_STUDIES, PARENT_INSIGHTS_DATA, RESOURCES_DATA, RESEARCH_TAB_DATA } from '../data/researchData';

export default function SearchModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const term = searchTerm.toLowerCase().trim();

  const filteredStudies = term 
    ? FEATURED_STUDIES.filter(s => 
        s.title.toLowerCase().includes(term) ||
        s.summary.toLowerCase().includes(term) ||
        (s.question && s.question.toLowerCase().includes(term)) ||
        (s.areaName && s.areaName.toLowerCase().includes(term))
      )
    : FEATURED_STUDIES;

  const filteredInsights = term
    ? PARENT_INSIGHTS_DATA.topics.filter(t =>
        t.title.toLowerCase().includes(term) ||
        t.quote.toLowerCase().includes(term) ||
        t.body.some(b => b.toLowerCase().includes(term))
      )
    : PARENT_INSIGHTS_DATA.topics.slice(0, 3);

  const filteredResources = term
    ? RESOURCES_DATA.articles.filter(a =>
        a.title.toLowerCase().includes(term) ||
        a.subtitle.toLowerCase().includes(term) ||
        a.sections.some(s => s.heading.toLowerCase().includes(term) || s.content.toLowerCase().includes(term))
      )
    : RESOURCES_DATA.articles.slice(0, 3);

  const filteredAreas = term
    ? RESEARCH_TAB_DATA.areas.filter(a =>
        a.title.toLowerCase().includes(term) ||
        a.question.toLowerCase().includes(term) ||
        a.description.toLowerCase().includes(term)
      )
    : [];

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(20, 36, 28, 0.72)',
        backdropFilter: 'blur(8px)',
        zIndex: 1200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '14px',
          maxWidth: '720px',
          width: '100%',
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 24px 60px rgba(0,0,0,0.25)',
          border: '1px solid #E5E1D8',
          overflow: 'hidden',
          padding: '1.75rem'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#234338' }}>
            <Search size={20} color="#234338" />
            <span style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: '1.35rem', fontWeight: 600, color: '#1A1714' }}>
              Search Nido Research & Knowledge
            </span>
          </div>
          <button 
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#6E675F', cursor: 'pointer', padding: '0.25rem' }}
            aria-label="Close search"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search Input Box */}
        <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
          <input 
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search studies, parent insights, guides, keywords (e.g. 'Concentration', 'Independence', 'Play', 'Movement')..."
            style={{
              width: '100%',
              padding: '0.85rem 1rem 0.85rem 2.6rem',
              backgroundColor: '#FAF3E2',
              border: '1px solid #D6D0C4',
              borderRadius: '8px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '0.95rem',
              color: '#1A1714',
              outline: 'none'
            }}
          />
          <Search size={17} color="#7E766D" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
        </div>

        {/* Results Container */}
        <div style={{ maxHeight: '440px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingRight: '0.5rem' }}>
          
          {/* Studies Result */}
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#C99428', marginBottom: '0.75rem' }}>
              Research Studies ({filteredStudies.length})
            </div>
            {filteredStudies.length === 0 ? (
              <div style={{ fontSize: '0.88rem', color: '#7E766D', fontStyle: 'italic' }}>No matching studies found.</div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {filteredStudies.map((study) => (
                  <div 
                    key={study.id}
                    onClick={() => {
                      onClose();
                      navigate(`/research-studies/${study.slug}`);
                    }}
                    style={{
                      padding: '0.85rem 1rem',
                      backgroundColor: '#FAF3E2',
                      borderRadius: '6px',
                      border: '1px solid #ECE7DF',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#FFFFFF';
                      e.currentTarget.style.borderColor = '#234338';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#FAF3E2';
                      e.currentTarget.style.borderColor = '#ECE7DF';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#234338' }}>
                        {study.badge} • {study.date}
                      </span>
                      <span style={{ fontSize: '0.72rem', color: '#7E766D' }}>
                        {study.areaName}
                      </span>
                    </div>
                    <div style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: '1.05rem', fontWeight: 600, color: '#1A1714', lineHeight: 1.3 }}>
                      {study.title}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Parent Insights Result */}
          {filteredInsights.length > 0 && (
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#234338', marginBottom: '0.75rem' }}>
                Parent Insights & Family Guides ({filteredInsights.length})
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {filteredInsights.map((t) => (
                  <div 
                    key={t.id}
                    onClick={() => {
                      onClose();
                      navigate('/parent-insights');
                    }}
                    style={{
                      padding: '0.75rem 1rem',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #ECE7DF',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#234338';
                      e.currentTarget.style.backgroundColor = '#FAF3E2';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#ECE7DF';
                      e.currentTarget.style.backgroundColor = '#FFFFFF';
                    }}
                  >
                    <div style={{ fontSize: '0.74rem', color: '#C99428', fontWeight: 700 }}>
                      Topic {t.topicNumber}: {t.title}
                    </div>
                    <div style={{ fontSize: '0.88rem', color: '#1A1714', fontStyle: 'italic' }}>
                      {t.quote}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Resources Result */}
          {filteredResources.length > 0 && (
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#386684', marginBottom: '0.75rem' }}>
                Resource Question Guides ({filteredResources.length})
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {filteredResources.map((res) => (
                  <div 
                    key={res.id}
                    onClick={() => {
                      onClose();
                      navigate('/resources');
                    }}
                    style={{
                      padding: '0.75rem 1rem',
                      backgroundColor: '#FAF3E2',
                      border: '1px solid #ECE7DF',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ fontSize: '0.74rem', color: '#386684', fontWeight: 700 }}>
                      Guide #{res.number}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '0.92rem', color: '#1A1714' }}>
                      {res.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Research Areas Result */}
          {filteredAreas.length > 0 && (
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#234338', marginBottom: '0.75rem' }}>
                Research Areas ({filteredAreas.length})
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {filteredAreas.map((area) => (
                  <div 
                    key={area.id}
                    onClick={() => {
                      onClose();
                      navigate('/research/areas');
                    }}
                    style={{
                      padding: '0.75rem 1rem',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #ECE7DF',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ fontWeight: 600, fontSize: '0.92rem', color: '#1A1714' }}>
                      {area.title}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#554F47' }}>
                      {area.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
