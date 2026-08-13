import React, { useState } from 'react';
import { BookOpen, Menu, X, ChevronRight } from 'lucide-react';

export default function Header({ activeView, setActiveView, onOpenCollaborate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'institute', label: 'The Institute' },
    { id: 'research-areas', label: 'Research Areas' },
    { id: 'publications', label: 'Publications' },
    { id: 'methodology', label: 'Methodology' },
    { id: 'field-notes', label: 'Field Notes' },
    { id: 'team', label: 'People' },
    { id: 'ethics', label: 'Ethics & Privacy' },
    { id: 'resources', label: 'Resources' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveView(id);
    setMobileMenuOpen(false);
    window.location.hash = id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header-sticky">
      {/* Top Banner Notice */}
      <div style={{ backgroundColor: '#F0ECE1', borderBottom: '1px solid #E2D7C5', padding: '0.35rem 1rem', fontSize: '0.8rem', color: '#574F46', textAlign: 'center' }}>
        <span style={{ fontWeight: 600, color: '#C49237' }}>NIDO Research Institute</span> — An independent research initiative connected to <a href="https://nidomontessori.in" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: '#3F4F40' }}>NIDO Montessori Preschool</a>
      </div>

      <div className="container-wide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.9rem 1.5rem' }}>
        {/* Brand Identity / Logo */}
        <div 
          onClick={() => handleNavClick('home')} 
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.9rem' }}
        >
          {/* Logo Mark */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <img 
              src="/images/nido-logo.png" 
              alt="NIDO Logo" 
              style={{ height: '48px', objectFit: 'contain' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', borderLeft: '1px solid var(--border-medium)', paddingLeft: '0.8rem' }}>
            <span style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-heading)', letterSpacing: '0.04em', lineHeight: 1.1 }}>
              NIDO
            </span>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-ochre-dark)', fontWeight: 600 }}>
              Research Institute
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none', gap: '0.2rem', alignItems: 'center' }} className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link ${activeView === item.id ? 'active' : ''}`}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button 
            onClick={() => handleNavClick('publications')}
            className="btn-secondary" 
            style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
          >
            <BookOpen size={15} />
            <span>Archive</span>
          </button>
          <button 
            onClick={onOpenCollaborate}
            className="btn-primary" 
            style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}
          >
            <span>Collaborate</span>
            <ChevronRight size={14} />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', border: '1px solid var(--border-medium)', borderRadius: '4px', padding: '0.4rem', color: 'var(--text-primary)', cursor: 'pointer' }}
            className="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-medium)', padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                textAlign: 'left',
                padding: '0.75rem',
                background: activeView === item.id ? 'rgba(196, 146, 55, 0.12)' : 'transparent',
                border: 'none',
                borderLeft: activeView === item.id ? '3px solid var(--color-ochre)' : '3px solid transparent',
                color: 'var(--text-heading)',
                fontSize: '1rem',
                fontFamily: 'var(--font-body)',
                cursor: 'pointer',
                borderRadius: '4px'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
