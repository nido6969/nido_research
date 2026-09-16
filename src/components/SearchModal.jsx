'use client';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from '../lib/navigation';
import { 
  Search, 
  X, 
  ArrowRight, 
  BookOpen, 
  Clock, 
  FileText, 
  Compass, 
  Sparkles, 
  ExternalLink,
  MapPin,
  Tag
} from 'lucide-react';
import { 
  FEATURED_STUDIES, 
  PARENT_INSIGHTS_DATA, 
  RESOURCES_DATA, 
  PROJECTS_DATA, 
  RESEARCH_TAB_DATA,
  INSTITUTION_INFO 
} from '../data/researchData';

// Popular query suggestions for quick discovery
const POPULAR_SUGGESTIONS = [
  'Independence',
  'Play & Executive Function',
  'Toddler Behaviour',
  'Mixed-Age Classrooms',
  'Concentration',
  'Prepared Environment',
  'Founding Case Study',
  'Observation Methodology'
];

// Helper to safely highlight matching query tokens inside text
function HighlightedText({ text, query }) {
  if (!text || !query || !query.trim()) return <span>{text}</span>;

  const tokens = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return <span>{text}</span>;

  // Escape special regex characters
  const escapedTokens = tokens.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${escapedTokens.join('|')})`, 'gi');
  const parts = String(text).split(regex);

  return (
    <span>
      {parts.map((part, i) => {
        const isMatch = tokens.some(t => t.toLowerCase() === part.toLowerCase());
        return isMatch ? (
          <mark
            key={i}
            style={{
              backgroundColor: '#FDF1D3',
              color: '#8B5B14',
              fontWeight: 700,
              padding: '0 2px',
              borderRadius: '2px'
            }}
          >
            {part}
          </mark>
        ) : (
          part
        );
      })}
    </span>
  );
}

export default function SearchModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const resultsContainerRef = useRef(null);
  const navigate = useNavigate();

  // Build indexed items across the entire platform
  const searchCatalog = useMemo(() => {
    const items = [];

    // 1. Featured Research Studies & Founding Case Study
    (FEATURED_STUDIES || []).forEach(study => {
      const findingsText = Array.isArray(study.keyFindings) ? study.keyFindings.join(' ') : '';
      items.push({
        id: `study-${study.id || study.slug}`,
        category: 'study',
        categoryLabel: 'Research Study',
        badge: study.badge || 'Published Paper',
        badgeColor: { bg: '#EAF3ED', text: '#234338', border: '#C5DCCB' },
        icon: <FileText size={15} color="#234338" />,
        title: study.title,
        subtitle: `${study.date || '2026'} • ${study.leadAuthor || 'Nido Research'} • ${study.areaName || 'Montessori Pedagogy'}`,
        snippet: study.question || study.summary || study.fullOverview?.slice(0, 160) || '',
        url: `/research-studies/${study.slug || study.id}`,
        searchContent: [
          study.title,
          study.shortTitle,
          study.badge,
          study.tag,
          study.leadAuthor,
          study.areaName,
          study.question,
          study.summary,
          study.fullOverview,
          study.methodology,
          study.doi,
          findingsText,
          'publication',
          'paper',
          'research'
        ].filter(Boolean).join(' ')
      });
    });

    // 2. Parent Insights Topics
    (PARENT_INSIGHTS_DATA?.topics || []).forEach(topic => {
      const bodyText = Array.isArray(topic.body) ? topic.body.join(' ') : '';
      const bulletsText = Array.isArray(topic.bullets) ? topic.bullets.join(' ') : '';
      items.push({
        id: `insight-${topic.id || topic.slug}`,
        category: 'insight',
        categoryLabel: 'Parent Insight',
        badge: `Topic #${topic.topicNumber}`,
        badgeColor: { bg: '#FEF6E9', text: '#A86D1E', border: '#F4DEB7' },
        icon: <BookOpen size={15} color="#A86D1E" />,
        title: topic.title,
        subtitle: `Family Guidance Topic #${topic.topicNumber} • Classroom Observation`,
        snippet: topic.quote || topic.body?.[0] || '',
        url: `/parent-insights/${topic.slug || topic.id}`,
        searchContent: [
          topic.title,
          `Topic ${topic.topicNumber}`,
          topic.quote,
          bodyText,
          bulletsText,
          topic.reflection,
          topic.tryThisToday,
          topic.usefulRule,
          'parent',
          'family',
          'children',
          'home'
        ].filter(Boolean).join(' ')
      });
    });

    // 3. Pedagogical Resource Guides
    (RESOURCES_DATA?.articles || []).forEach(guide => {
      const sectionsText = Array.isArray(guide.sections) 
        ? guide.sections.map(s => `${s.heading} ${s.content}`).join(' ') 
        : '';
      items.push({
        id: `guide-${guide.id || guide.slug}`,
        category: 'guide',
        categoryLabel: 'Resource Guide',
        badge: `Guide #${guide.number}`,
        badgeColor: { bg: '#EBF4FA', text: '#2C6287', border: '#BEDBF0' },
        icon: <Compass size={15} color="#2C6287" />,
        title: guide.title.replace(/^[“”"]/g, '').replace(/[“”"]$/g, ''),
        subtitle: `Pedagogical Guide #${guide.number} • Prepared Environment`,
        snippet: guide.subtitle || guide.quote || '',
        url: `/resources/${guide.slug || guide.id}`,
        searchContent: [
          guide.title,
          guide.subtitle,
          guide.quote,
          sectionsText,
          `Guide ${guide.number}`,
          'resource',
          'pedagogy',
          'montessori practical guide'
        ].filter(Boolean).join(' ')
      });
    });

    // 4. Ongoing Research Projects
    (PROJECTS_DATA?.projects || []).forEach(project => {
      items.push({
        id: `project-${project.id}`,
        category: 'project',
        categoryLabel: 'Ongoing Project',
        badge: project.number || 'Active Inquiry',
        badgeColor: { bg: '#F5EFF8', text: '#6D3F84', border: '#DDC9E7' },
        icon: <Clock size={15} color="#6D3F84" />,
        title: project.title,
        subtitle: `Status: ${project.status || 'Ongoing'} • Nido Classroom Observation Cohort`,
        snippet: project.question || project.description || '',
        url: `/projects#${project.id}`,
        searchContent: [
          project.title,
          project.number,
          project.status,
          project.question,
          project.description,
          'project',
          'cohort',
          'ongoing inquiry'
        ].filter(Boolean).join(' ')
      });
    });

    // 5. Research Areas & Approach
    (RESEARCH_TAB_DATA?.areas || []).forEach(area => {
      items.push({
        id: `area-${area.id}`,
        category: 'area',
        categoryLabel: 'Research Area',
        badge: 'Core Domain',
        badgeColor: { bg: '#F2F6ED', text: '#3F622C', border: '#CFE0C4' },
        icon: <Tag size={15} color="#3F622C" />,
        title: area.title,
        subtitle: 'Institutional Domain of Inquiry • NIDO Research Institute',
        snippet: area.question || area.description || '',
        url: '/research/areas',
        searchContent: [
          area.title,
          area.question,
          area.description,
          'research area',
          'methodology',
          'approach'
        ].filter(Boolean).join(' ')
      });
    });

    // 6. Platform Key Navigation & Institutional Knowledge
    items.push(
      {
        id: 'page-about',
        category: 'page',
        categoryLabel: 'Institute',
        badge: 'About Us',
        badgeColor: { bg: '#FAF3E2', text: '#24201C', border: '#E5DAC0' },
        icon: <Compass size={15} color="#24201C" />,
        title: 'About NIDO Research Institute & Founders',
        subtitle: 'Founding Directors Shobha Goyal & Pavan Goyal • Core Research Principles',
        snippet: 'A research initiative emerging from the authentic Montessori classrooms of Nido Montessori, Bachupally, Hyderabad.',
        url: '/about',
        searchContent: 'about institute founders shobha goyal pavan goyal bachupally hyderabad principles story why we research history'
      },
      {
        id: 'page-contact',
        category: 'page',
        categoryLabel: 'Campus',
        badge: 'Contact',
        badgeColor: { bg: '#FAF3E2', text: '#24201C', border: '#E5DAC0' },
        icon: <MapPin size={15} color="#C88528" />,
        title: 'Contact Campus & Research Location',
        subtitle: `${INSTITUTION_INFO?.contact?.address || 'Bachupally, Hyderabad'} • Phone: +91 96188 53888`,
        snippet: 'Get in touch with the Nido research and observation team or visit our prepared environments in Bachupally, Hyderabad.',
        url: '/contact',
        searchContent: 'contact address phone email location bachupally bowrampet hyderabad map visit phone 9618853888 info@nidomontessori.in'
      },
      {
        id: 'page-publications',
        category: 'page',
        categoryLabel: 'Archive',
        badge: 'Catalog',
        badgeColor: { bg: '#EAF3ED', text: '#234338', border: '#C5DCCB' },
        icon: <FileText size={15} color="#234338" />,
        title: 'Full Publications & Research Papers Catalog',
        subtitle: 'Open-access observational monographs, case studies, and literature reviews',
        snippet: 'Browse all published empirical papers from Nido Montessori Preschool classrooms and child development cohorts.',
        url: '/publications',
        searchContent: 'publications catalog papers archive studies monographs case studies downloads pdf citation'
      },
      {
        id: 'page-admissions',
        category: 'page',
        categoryLabel: 'Preschool',
        badge: 'Admissions',
        badgeColor: { bg: '#FEF6E9', text: '#A86D1E', border: '#F4DEB7' },
        icon: <ExternalLink size={15} color="#A86D1E" />,
        title: 'Nido Montessori Preschool Admissions (Ages 14m – 6y)',
        subtitle: 'Visit Campus • Toddler Community & Primary Children\'s House Environments',
        snippet: 'Admissions and campus observation visits for Nido Montessori Preschool in Bachupally, Hyderabad.',
        url: 'https://www.nidomontessori.in/admissions',
        external: true,
        searchContent: 'admissions admission school enroll preschool nursery toddler casa primary hyderabad bachupally visit application'
      }
    );

    return items;
  }, []);

  // Filter and score results based on query tokens
  const searchResults = useMemo(() => {
    const rawTerm = searchTerm.trim();
    if (!rawTerm) {
      // Default / empty search: show top featured studies + first insights + first guides
      return searchCatalog.slice(0, 10);
    }

    const tokens = rawTerm.toLowerCase().split(/\s+/).filter(Boolean);

    const scored = searchCatalog
      .map(item => {
        const titleLower = item.title.toLowerCase();
        const subtitleLower = (item.subtitle || '').toLowerCase();
        const snippetLower = (item.snippet || '').toLowerCase();
        const contentLower = item.searchContent.toLowerCase();

        // Must match all tokens somewhere in search content
        const matchesAll = tokens.every(tok => contentLower.includes(tok));
        if (!matchesAll) return null;

        // Calculate relevance score
        let score = 0;
        if (titleLower === rawTerm.toLowerCase()) score += 200;
        else if (titleLower.startsWith(rawTerm.toLowerCase())) score += 120;
        else if (titleLower.includes(rawTerm.toLowerCase())) score += 80;

        tokens.forEach(tok => {
          if (titleLower.includes(tok)) score += 50;
          if (subtitleLower.includes(tok)) score += 25;
          if (snippetLower.includes(tok)) score += 15;
          if (contentLower.includes(tok)) score += 5;
        });

        return { ...item, score };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score);

    return scored;
  }, [searchCatalog, searchTerm]);

  // Apply category filtering
  const filteredResults = useMemo(() => {
    if (activeCategory === 'all') return searchResults;
    return searchResults.filter(item => item.category === activeCategory);
  }, [searchResults, activeCategory]);

  // Category counts for quick tabs
  const categoryCounts = useMemo(() => {
    const counts = {
      all: searchResults.length,
      study: 0,
      insight: 0,
      guide: 0,
      project: 0,
      area: 0,
      page: 0
    };
    searchResults.forEach(item => {
      if (counts[item.category] !== undefined) {
        counts[item.category]++;
      }
    });
    return counts;
  }, [searchResults]);

  // Focus input & lock body scroll on open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 50);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
      setSearchTerm('');
      setActiveCategory('all');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Reset selected index when filtered list changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchTerm, activeCategory]);

  const handleSelect = React.useCallback((item) => {
    onClose();
    if (item.external) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else {
      navigate(item.url);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [navigate, onClose]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => Math.min(prev + 1, filteredResults.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter') {
        if (filteredResults.length > 0 && filteredResults[selectedIndex]) {
          e.preventDefault();
          handleSelect(filteredResults[selectedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredResults, selectedIndex, onClose, handleSelect]);

  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(20, 36, 28, 0.72)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        zIndex: 1200,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '3rem 1.25rem 2rem 1.25rem',
        animation: 'fadeInModal 0.2s ease-out'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          maxWidth: '780px',
          width: '100%',
          maxHeight: 'calc(90vh - 3rem)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(229, 218, 192, 0.6)',
          border: '1px solid #E5DAC0',
          overflow: 'hidden',
          animation: 'slideDownModal 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Bar */}
        <div style={{
          padding: '1.25rem 1.5rem 0.85rem 1.5rem',
          borderBottom: '1px solid #EFECE6',
          backgroundColor: '#FCFAF6'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '0.85rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                backgroundColor: '#234338',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF'
              }}>
                <Search size={15} />
              </div>
              <span style={{
                fontFamily: "'Newsreader', Georgia, serif",
                fontSize: '1.35rem',
                fontWeight: 600,
                color: '#234338',
                letterSpacing: '-0.01em'
              }}>
                Search Nido Research & Archive
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <kbd style={{
                fontSize: '0.72rem',
                fontFamily: 'monospace',
                backgroundColor: '#EFEAE1',
                color: '#6A6359',
                padding: '0.2rem 0.45rem',
                borderRadius: '4px',
                border: '1px solid #DFD9CE'
              }}>
                ESC to close
              </kbd>
              <button 
                onClick={onClose}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#6A6359',
                  cursor: 'pointer',
                  padding: '0.35rem',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.15s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EFEAE1'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                aria-label="Close search dialog"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Search Input Field */}
          <div style={{ position: 'relative' }}>
            <Search 
              size={18} 
              color="#234338" 
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none'
              }} 
            />
            <input 
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search studies, topics, insights, guides (e.g., 'Independence', 'Play', 'Toddler')..."
              style={{
                width: '100%',
                boxSizing: 'border-box',
                padding: '0.9rem 2.8rem 0.9rem 2.85rem',
                backgroundColor: '#FFFFFF',
                border: '2px solid #234338',
                borderRadius: '10px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '1rem',
                color: '#1A1714',
                outline: 'none',
                boxShadow: '0 2px 8px rgba(35, 67, 56, 0.08)'
              }}
            />
            {searchTerm && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  inputRef.current?.focus();
                }}
                style={{
                  position: 'absolute',
                  right: '0.85rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: '#EAE5DB',
                  border: 'none',
                  borderRadius: '50%',
                  width: '22px',
                  height: '22px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#4A453C'
                }}
                title="Clear query"
              >
                <X size={13} />
              </button>
            )}
          </div>

          {/* Category Filter Pills (shown when there are results) */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            overflowX: 'auto',
            padding: '0.75rem 0 0.25rem 0',
            scrollbarWidth: 'none'
          }}>
            {[
              { id: 'all', label: 'All Results', count: categoryCounts.all },
              { id: 'study', label: 'Studies', count: categoryCounts.study },
              { id: 'insight', label: 'Parent Insights', count: categoryCounts.insight },
              { id: 'guide', label: 'Guides', count: categoryCounts.guide },
              { id: 'project', label: 'Projects', count: categoryCounts.project },
              { id: 'area', label: 'Research Areas', count: categoryCounts.area },
              { id: 'page', label: 'Pages', count: categoryCounts.page }
            ].filter(tab => tab.id === 'all' || tab.count > 0).map(tab => {
              const active = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.78rem',
                    fontWeight: active ? 700 : 500,
                    backgroundColor: active ? '#234338' : '#F1ECE2',
                    color: active ? '#FFFFFF' : '#4E483F',
                    border: 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <span>{tab.label}</span>
                  <span style={{
                    fontSize: '0.7rem',
                    padding: '0.1rem 0.35rem',
                    borderRadius: '9999px',
                    backgroundColor: active ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.06)',
                    color: active ? '#FFFFFF' : '#6E675E'
                  }}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Body / Scrollable Area */}
        <div 
          ref={resultsContainerRef}
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1.25rem 1.5rem',
            backgroundColor: '#FAF8F5'
          }}
        >
          {/* If Search is empty: Show Popular Keywords and Featured Studies */}
          {!searchTerm.trim() && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Popular Searches */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#C88528',
                  marginBottom: '0.65rem'
                }}>
                  <Sparkles size={14} color="#C88528" />
                  <span>Popular Research Keywords</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {POPULAR_SUGGESTIONS.map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => {
                        setSearchTerm(suggestion);
                        inputRef.current?.focus();
                      }}
                      style={{
                        padding: '0.38rem 0.85rem',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E2DCcf',
                        borderRadius: '20px',
                        fontSize: '0.82rem',
                        color: '#234338',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#234338';
                        e.currentTarget.style.color = '#FFFFFF';
                        e.currentTarget.style.borderColor = '#234338';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#FFFFFF';
                        e.currentTarget.style.color = '#234338';
                        e.currentTarget.style.borderColor = '#E2DCcf';
                      }}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>

              {/* Browse Catalog items */}
              <div>
                <div style={{
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#6A6359',
                  marginBottom: '0.65rem'
                }}>
                  Featured Research Publications ({filteredResults.length})
                </div>
              </div>
            </div>
          )}

          {/* Zero Results State */}
          {searchTerm.trim() && filteredResults.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '2.5rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                backgroundColor: '#F3EDE1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#8A8073',
                marginBottom: '1rem'
              }}>
                <Search size={26} />
              </div>
              <h3 style={{
                fontFamily: "'Newsreader', Georgia, serif",
                fontSize: '1.35rem',
                fontWeight: 600,
                color: '#234338',
                marginBottom: '0.35rem'
              }}>
                No matches found for “{searchTerm}”
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#6E675F',
                maxWidth: '440px',
                lineHeight: 1.5,
                marginBottom: '1.5rem'
              }}>
                Try searching for a simpler topic keyword (such as <em>independence</em>, <em>play</em>, <em>toddler</em>, or <em>observation</em>), or select one of the suggested topics below:
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', maxWidth: '500px' }}>
                {POPULAR_SUGGESTIONS.slice(0, 6).map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => {
                      setSearchTerm(suggestion);
                      inputRef.current?.focus();
                    }}
                    style={{
                      padding: '0.35rem 0.8rem',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #DED7C8',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      color: '#234338',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Result Cards List */}
          {filteredResults.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {filteredResults.map((item, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    style={{
                      padding: '0.95rem 1.15rem',
                      backgroundColor: isSelected ? '#FFFFFF' : '#FFFFFF',
                      borderRadius: '10px',
                      border: isSelected ? '2px solid #234338' : '1px solid #E8E2D6',
                      boxShadow: isSelected 
                        ? '0 6px 18px rgba(35, 67, 56, 0.12)' 
                        : '0 1px 3px rgba(0, 0, 0, 0.03)',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.3rem',
                      transition: 'all 0.18s ease',
                      position: 'relative'
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    {/* Badge & Category Row */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.5rem'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                        <span style={{
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          backgroundColor: item.badgeColor.bg,
                          color: item.badgeColor.text,
                          border: `1px solid ${item.badgeColor.border}`,
                          padding: '0.15rem 0.5rem',
                          borderRadius: '4px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem'
                        }}>
                          {item.icon}
                          <span>{item.categoryLabel}</span>
                        </span>
                        <span style={{
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          color: '#C88528'
                        }}>
                          {item.badge}
                        </span>
                      </div>

                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        fontSize: '0.75rem',
                        color: isSelected ? '#234338' : '#8A8175',
                        fontWeight: 600
                      }}>
                        <span>Open</span>
                        <ArrowRight size={13} />
                      </div>
                    </div>

                    {/* Result Title with Search Highlighting */}
                    <h4 style={{
                      fontFamily: "'Newsreader', Georgia, serif",
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      color: '#1A1714',
                      lineHeight: 1.35,
                      margin: '0.2rem 0'
                    }}>
                      <HighlightedText text={item.title} query={searchTerm} />
                    </h4>

                    {/* Subtitle / Meta */}
                    {item.subtitle && (
                      <div style={{
                        fontSize: '0.78rem',
                        color: '#6E675E',
                        fontWeight: 500
                      }}>
                        <HighlightedText text={item.subtitle} query={searchTerm} />
                      </div>
                    )}

                    {/* Contextual Snippet */}
                    {item.snippet && (
                      <p style={{
                        fontSize: '0.84rem',
                        color: '#4B453E',
                        lineHeight: 1.5,
                        margin: '0.25rem 0 0 0',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        <HighlightedText text={item.snippet} query={searchTerm} />
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#F3EFE6',
          borderTop: '1px solid #E5DAC0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.78rem',
          color: '#655E54',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          <div>
            Showing <strong>{filteredResults.length}</strong> matching {filteredResults.length === 1 ? 'record' : 'records'}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span>Navigate: <kbd style={{ padding: '0.1rem 0.35rem', backgroundColor: '#FFFFFF', borderRadius: '3px', border: '1px solid #D8D1C3' }}>↑</kbd> <kbd style={{ padding: '0.1rem 0.35rem', backgroundColor: '#FFFFFF', borderRadius: '3px', border: '1px solid #D8D1C3' }}>↓</kbd></span>
            <span>Select: <kbd style={{ padding: '0.1rem 0.35rem', backgroundColor: '#FFFFFF', borderRadius: '3px', border: '1px solid #D8D1C3' }}>↵</kbd></span>
          </div>
        </div>
      </div>

      {/* Embedded CSS Animations */}
      <style jsx global>{`
        @keyframes fadeInModal {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDownModal {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
