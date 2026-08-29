import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SearchModal from './components/SearchModal';

// Dedicated Page Views
import HomePage from './pages/HomePage';
import ResearchPage from './pages/ResearchPage';
import PublicationsPage from './pages/PublicationsPage';
import StudyDetailPage from './pages/StudyDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ParentInsightsPage from './pages/ParentInsightsPage';
import ResourcesPage from './pages/ResourcesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-parchment, #FAF3E2)' }}>
        
        {/* Persistent Sticky Header */}
        <Header onOpenSearch={() => setIsSearchOpen(true)} />

        {/* Dedicated Route Pages */}
        <main style={{ flex: 1 }}>
          <Routes>
            {/* 1. Home Page */}
            <Route path="/" element={<HomePage />} />

            {/* 2. Research Overview & Subtabs */}
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/research/:subtab" element={<ResearchPage />} />

            {/* 3. Publications Catalog */}
            <Route path="/publications" element={<PublicationsPage />} />

            {/* 4. Dedicated Study Reader Pages (domain/research-studies/:slug) */}
            <Route path="/research-studies/:slug" element={<StudyDetailPage />} />
            <Route path="/studies/:slug" element={<StudyDetailPage />} />

            {/* 5. Ongoing Projects */}
            <Route path="/projects" element={<ProjectsPage />} />

            {/* 6. Parent Insights */}
            <Route path="/parent-insights" element={<ParentInsightsPage />} />
            <Route path="/insights" element={<ParentInsightsPage />} />

            {/* 7. Resources & Guides */}
            <Route path="/resources" element={<ResourcesPage />} />

            {/* 8. About Nido Montessori Research */}
            <Route path="/about" element={<AboutPage />} />

            {/* 9. Contact & Collaboration */}
            <Route path="/contact" element={<ContactPage />} />

            {/* Fallback Route */}
            <Route path="*" element={<HomePage onOpenSearch={() => setIsSearchOpen(true)} />} />
          </Routes>
        </main>

        {/* Persistent Footer */}
        <Footer />

        {/* Search Modal Triggered by Header Search Icon */}
        <SearchModal 
          isOpen={isSearchOpen} 
          onClose={() => setIsSearchOpen(false)} 
        />

      </div>
    </BrowserRouter>
  );
}
