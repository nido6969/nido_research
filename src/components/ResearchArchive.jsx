import React, { useState, useMemo } from 'react';
import { Search, BookOpen, Calendar, User } from 'lucide-react';
import { RESEARCH_STUDIES, RESEARCH_AREAS } from '../data/researchData';

export default function ResearchArchive({ onSelectPaper }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const filteredStudies = useMemo(() => {
    return RESEARCH_STUDIES.filter((study) => {
      const matchesSearch = 
        study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.leadResearcher.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.areaName.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesArea = selectedArea === 'all' || study.areaId === selectedArea;
      const matchesStatus = selectedStatus === 'all' || study.status.toLowerCase() === selectedStatus.toLowerCase();
      const matchesYear = selectedYear === 'all' || study.year === selectedYear;

      return matchesSearch && matchesArea && matchesStatus && matchesYear;
    });
  }, [searchQuery, selectedArea, selectedStatus, selectedYear]);

  return (
    <section id="publications" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-parchment)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container-standard">
        
        {/* Section Header */}
        <div style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-ochre-dark)', marginBottom: '0.75rem' }}>
          Institutional Repository
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: 500, color: 'var(--text-heading)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
          Publications & Research Archive
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: '800px', marginBottom: '3rem' }}>
          Browse peer-reviewed papers, working manuscripts, methodology protocols, field studies, and pre-prints produced by NIDO Research Institute fellows.
        </p>

        {/* Filter & Search Bar Box */}
        <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-medium)', borderRadius: '8px', padding: '1.75rem', marginBottom: '3rem', boxShadow: 'var(--shadow-subtle)' }}>
          
          {/* Search Input */}
          <div style={{ position: 'relative', marginBottom: '1.25rem' }}>
            <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              placeholder="Search by research title, keyword, author, or abstract..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Filter Dropdowns & Pills */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            
            {/* Domain Filter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Domain:</span>
              <select 
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                style={{ padding: '0.45rem 0.85rem', borderRadius: '4px', border: '1px solid var(--border-medium)', backgroundColor: 'var(--bg-parchment)', fontSize: '0.85rem', color: 'var(--text-primary)' }}
              >
                <option value="all">All Domains (8)</option>
                {RESEARCH_AREAS.map((a) => (
                  <option key={a.id} value={a.id}>{a.title}</option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Status:</span>
              <select 
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                style={{ padding: '0.45rem 0.85rem', borderRadius: '4px', border: '1px solid var(--border-medium)', backgroundColor: 'var(--bg-parchment)', fontSize: '0.85rem', color: 'var(--text-primary)' }}
              >
                <option value="all">All Statuses</option>
                <option value="published">Published</option>
                <option value="working paper">Working Paper</option>
                <option value="field study">Field Study</option>
                <option value="pre-print">Pre-print</option>
              </select>
            </div>

            {/* Year Filter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Year:</span>
              <select 
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                style={{ padding: '0.45rem 0.85rem', borderRadius: '4px', border: '1px solid var(--border-medium)', backgroundColor: 'var(--bg-parchment)', fontSize: '0.85rem', color: 'var(--text-primary)' }}
              >
                <option value="all">All Years</option>
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
              </select>
            </div>

            {(searchQuery || selectedArea !== 'all' || selectedStatus !== 'all' || selectedYear !== 'all') && (
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedArea('all');
                  setSelectedStatus('all');
                  setSelectedYear('all');
                }}
                style={{ background: 'none', border: 'none', color: 'var(--color-ochre-dark)', fontSize: '0.82rem', cursor: 'pointer', textDecoration: 'underline', marginLeft: 'auto' }}
              >
                Reset Filters
              </button>
            )}

          </div>

        </div>

        {/* Results List */}
        {filteredStudies.length === 0 ? (
          <div style={{ textAlignment: 'center', padding: '4rem 2rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '8px' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>No research studies match your search criteria.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {filteredStudies.map((study) => (
              <div 
                key={study.id} 
                className="card-archival"
                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              >
                {/* Meta Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <span className={`status-badge ${study.statusClass}`}>
                      {study.status}
                    </span>
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-sage-dark)' }}>
                      {study.areaName}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Calendar size={14} />
                      <span>{study.year}</span>
                    </div>
                    <span>•</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <User size={14} />
                      <span>{study.leadResearcher}</span>
                    </div>
                  </div>
                </div>

                {/* Title & Abstract */}
                <div>
                  <h3 
                    onClick={() => onSelectPaper(study)}
                    style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.45rem', color: 'var(--text-heading)', marginBottom: '0.75rem', cursor: 'pointer' }}
                  >
                    {study.title}
                  </h3>
                  <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                    {study.abstract}
                  </p>
                </div>

                {/* Footer Controls */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.85rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                    DOI: {study.doi}
                  </span>

                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <button 
                      onClick={() => onSelectPaper(study)}
                      className="btn-secondary" 
                      style={{ padding: '0.4rem 0.85rem', fontSize: '0.82rem' }}
                    >
                      <BookOpen size={14} />
                      <span>Read Paper & Citation</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
