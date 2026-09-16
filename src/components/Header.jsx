'use client';
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from '../lib/navigation';
import { Search, ChevronDown, ExternalLink, Menu, X } from 'lucide-react';
import NidoLogo from './NidoLogo';
import SpecularButton from './SpecularButton';
import SearchModal from './SearchModal';

export default function Header({ onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [researchDropdownOpen, setResearchDropdownOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Listen for global keyboard shortcuts (Ctrl+K, Cmd+K, /) and custom event 'open-nido-search'
  useEffect(() => {
    const handleOpenSearch = () => setSearchModalOpen(true);
    window.addEventListener('open-nido-search', handleOpenSearch);

    const handleKeyDown = (e) => {
      // Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchModalOpen(true);
      }
      // Slash key when not typing in an input or textarea
      if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        setSearchModalOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('open-nido-search', handleOpenSearch);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'var(--bg-parchment, #FAF3E2)' }}>
      {/* Main Navigation Bar */}
      <div style={{
        backgroundColor: 'var(--bg-parchment, #FAF3E2)',
        borderBottom: '1px solid #E5DAC0',
        boxShadow: '0 1px 4px rgba(43, 35, 25, 0.03)'
      }}>
        <div className="container-wide" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.65rem 2rem',
          height: '72px'
        }}>
          
          {/* Logo & Brand Identity */}
          <Link 
            to="/"
            style={{ 
              textDecoration: 'none', 
              display: 'flex', 
              alignItems: 'center',
              marginLeft: '0.75rem'
            }}
          >
            <NidoLogo size="medium" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="header-desktop-nav">
            <Link 
              to="/"
              style={{
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: isActive('/') && location.pathname === '/' ? 600 : 500,
                color: isActive('/') && location.pathname === '/' ? '#234338' : '#554F47',
                borderBottom: isActive('/') && location.pathname === '/' ? '2px solid #234338' : '2px solid transparent',
                padding: '0.4rem 0.15rem'
              }}
            >
              Home
            </Link>

            {/* Research Dropdown */}
            <div 
              style={{ position: 'relative' }}
              onMouseEnter={() => setResearchDropdownOpen(true)}
              onMouseLeave={() => setResearchDropdownOpen(false)}
            >
              <button 
                onClick={() => navigate('/research')}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '0.9rem',
                  fontWeight: isActive('/research') ? 600 : 500,
                  color: isActive('/research') ? '#234338' : '#554F47',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  padding: '0.4rem 0.15rem',
                  cursor: 'pointer'
                }}
              >
                <span>Research</span>
                <ChevronDown size={14} style={{ transform: researchDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>

              {researchDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #ECE7DF',
                  borderRadius: '8px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                  padding: '0.5rem 0',
                  minWidth: '230px',
                  zIndex: 200
                }}>
                  <Link 
                    to="/research/approach"
                    onClick={() => setResearchDropdownOpen(false)}
                    style={{
                      display: 'block',
                      padding: '0.65rem 1.25rem',
                      fontSize: '0.85rem',
                      color: '#24201C',
                      textDecoration: 'none',
                      fontWeight: 500
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F7F5EE'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    Our Research Approach
                  </Link>
                  <Link 
                    to="/research/areas"
                    onClick={() => setResearchDropdownOpen(false)}
                    style={{
                      display: 'block',
                      padding: '0.65rem 1.25rem',
                      fontSize: '0.85rem',
                      color: '#24201C',
                      textDecoration: 'none',
                      fontWeight: 500
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F7F5EE'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    Research Areas
                  </Link>
                  <Link 
                    to="/research/methodology"
                    onClick={() => setResearchDropdownOpen(false)}
                    style={{
                      display: 'block',
                      padding: '0.65rem 1.25rem',
                      fontSize: '0.85rem',
                      color: '#24201C',
                      textDecoration: 'none',
                      fontWeight: 500
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F7F5EE'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    Observation & Methodology
                  </Link>
                  <Link 
                    to="/research/ethics"
                    onClick={() => setResearchDropdownOpen(false)}
                    style={{
                      display: 'block',
                      padding: '0.65rem 1.25rem',
                      fontSize: '0.85rem',
                      color: '#24201C',
                      textDecoration: 'none',
                      fontWeight: 500
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F7F5EE'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    Research Ethics
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/publications"
              style={{
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: isActive('/publications') || isActive('/research-studies') ? 600 : 500,
                color: isActive('/publications') || isActive('/research-studies') ? '#234338' : '#554F47',
                borderBottom: isActive('/publications') || isActive('/research-studies') ? '2px solid #234338' : '2px solid transparent',
                padding: '0.4rem 0.15rem'
              }}
            >
              Publications
            </Link>

            <Link 
              to="/projects"
              style={{
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: isActive('/projects') ? 600 : 500,
                color: isActive('/projects') ? '#234338' : '#554F47',
                borderBottom: isActive('/projects') ? '2px solid #234338' : '2px solid transparent',
                padding: '0.4rem 0.15rem'
              }}
            >
              Projects
            </Link>

            <Link 
              to="/parent-insights"
              style={{
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: isActive('/parent-insights') ? 600 : 500,
                color: isActive('/parent-insights') ? '#234338' : '#554F47',
                borderBottom: isActive('/parent-insights') ? '2px solid #234338' : '2px solid transparent',
                padding: '0.4rem 0.15rem'
              }}
            >
              Parent Insights
            </Link>

            <Link 
              to="/resources"
              style={{
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: isActive('/resources') ? 600 : 500,
                color: isActive('/resources') ? '#234338' : '#554F47',
                borderBottom: isActive('/resources') ? '2px solid #234338' : '2px solid transparent',
                padding: '0.4rem 0.15rem'
              }}
            >
              Resources
            </Link>

            <Link 
              to="/about"
              style={{
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: isActive('/about') ? 600 : 500,
                color: isActive('/about') ? '#234338' : '#554F47',
                borderBottom: isActive('/about') ? '2px solid #234338' : '2px solid transparent',
                padding: '0.4rem 0.15rem'
              }}
            >
              About
            </Link>

            <Link 
              to="/contact"
              style={{
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: isActive('/contact') ? 600 : 500,
                color: isActive('/contact') ? '#234338' : '#554F47',
                borderBottom: isActive('/contact') ? '2px solid #234338' : '2px solid transparent',
                padding: '0.4rem 0.15rem'
              }}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Items */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            {/* Search Icon Button */}
            <button 
              onClick={() => {
                setSearchModalOpen(true);
                if (onOpenSearch) onOpenSearch();
              }}
              style={{
                background: 'none',
                border: 'none',
                color: '#4A463F',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.45rem',
                borderRadius: '50%',
                transition: 'color 0.2s, background-color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#234338';
                e.currentTarget.style.backgroundColor = '#F5F3EC';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#4A463F';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              title="Search research archive (Ctrl+K or /)"
              aria-label="Search research archive (Ctrl+K or /)"
            >
              <Search size={18} />
            </button>

            {/* Visit Nido Montessori SpecularButton (Hidden on tiny screens) */}
            <div className="d-none d-sm-block">
              <SpecularButton
                size="sm"
                radius={9999}
                tint="#234338"
                tintOpacity={1}
                textColor="#FFFFFF"
                lineColor="#DDBB7B"
                baseColor="#143229"
                intensity={1.4}
                shineSize={16}
                href="https://www.nidomontessori.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Visit Nido</span>
                <ExternalLink size={12} />
              </SpecularButton>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="header-mobile-toggle"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div style={{
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid #ECE7DF',
            padding: '1rem 1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.65rem'
          }}>
            {/* Quick Search trigger in mobile drawer */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setSearchModalOpen(true);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                backgroundColor: '#FAF3E2',
                border: '1px solid #E5DAC0',
                borderRadius: '8px',
                padding: '0.65rem 0.9rem',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: '#234338',
                cursor: 'pointer',
                width: '100%',
                textAlign: 'left',
                marginBottom: '0.35rem'
              }}
            >
              <Search size={16} color="#234338" />
              <span>Search Research & Archive...</span>
              <kbd style={{
                marginLeft: 'auto',
                fontSize: '0.68rem',
                fontFamily: 'monospace',
                backgroundColor: '#EDE5D5',
                color: '#5C5549',
                padding: '0.15rem 0.4rem',
                borderRadius: '4px',
                border: '1px solid #D6CCB9'
              }}>
                Ctrl+K
              </kbd>
            </button>
            <Link 
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: isActive('/') && location.pathname === '/' ? 700 : 500,
                color: isActive('/') && location.pathname === '/' ? '#234338' : '#554F47',
                padding: '0.35rem 0'
              }}
            >
              Home
            </Link>
            <Link 
              to="/research"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: isActive('/research') ? 700 : 500,
                color: isActive('/research') ? '#234338' : '#554F47',
                padding: '0.35rem 0'
              }}
            >
              Research
            </Link>
            <Link 
              to="/publications"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: isActive('/publications') ? 700 : 500,
                color: isActive('/publications') ? '#234338' : '#554F47',
                padding: '0.35rem 0'
              }}
            >
              Publications
            </Link>
            <Link 
              to="/projects"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: isActive('/projects') ? 700 : 500,
                color: isActive('/projects') ? '#234338' : '#554F47',
                padding: '0.35rem 0'
              }}
            >
              Projects
            </Link>
            <Link 
              to="/parent-insights"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: isActive('/parent-insights') ? 700 : 500,
                color: isActive('/parent-insights') ? '#234338' : '#554F47',
                padding: '0.35rem 0'
              }}
            >
              Parent Insights
            </Link>
            <Link 
              to="/resources"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: isActive('/resources') ? 700 : 500,
                color: isActive('/resources') ? '#234338' : '#554F47',
                padding: '0.35rem 0'
              }}
            >
              Resources
            </Link>
            <Link 
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: isActive('/about') ? 700 : 500,
                color: isActive('/about') ? '#234338' : '#554F47',
                padding: '0.35rem 0'
              }}
            >
              About
            </Link>

            <Link 
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: isActive('/contact') ? 700 : 500,
                color: isActive('/contact') ? '#234338' : '#554F47',
                padding: '0.35rem 0'
              }}
            >
              Contact
            </Link>
            <div style={{ paddingTop: '0.5rem', borderTop: '1px solid #ECE7DF', marginTop: '0.25rem' }}>
              <SpecularButton
                size="sm"
                radius={9999}
                tint="#234338"
                tintOpacity={1}
                textColor="#FFFFFF"
                lineColor="#DDBB7B"
                baseColor="#143229"
                intensity={1.4}
                shineSize={16}
                href="https://www.nidomontessori.in/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Visit Nido Montessori</span>
                <ExternalLink size={12} />
              </SpecularButton>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Global Search Modal */}
      <SearchModal 
        isOpen={searchModalOpen} 
        onClose={() => setSearchModalOpen(false)} 
      />
    </header>
  );
}
