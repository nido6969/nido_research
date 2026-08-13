import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import InstitutionalIntro from './components/InstitutionalIntro';
import PhilosophySection from './components/PhilosophySection';
import ObservationCycle from './components/ObservationCycle';
import LongitudinalVisual from './components/LongitudinalVisual';
import ResearchAreasSection from './components/ResearchAreasSection';
import FeaturedStudySection from './components/FeaturedStudySection';
import ResearchArchive from './components/ResearchArchive';
import FieldNotesSection from './components/FieldNotesSection';
import MethodologySection from './components/MethodologySection';
import EthicsSection from './components/EthicsSection';
import TeamSection from './components/TeamSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import PaperModal from './components/PaperModal';
import CollaborateModal from './components/CollaborateModal';

export default function App() {
  const [activeView, setActiveView] = useState('home');
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [isCollaborateOpen, setIsCollaborateOpen] = useState(false);

  // Sync hash navigation on load and hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActiveView(hash);
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-parchment)' }}>
      {/* Institutional Sticky Header */}
      <Header 
        activeView={activeView} 
        setActiveView={setActiveView}
        onOpenCollaborate={() => setIsCollaborateOpen(true)}
      />

      {/* Main Narrative Flow */}
      <main style={{ flex: 1 }}>
        <HeroSection 
          setActiveView={setActiveView} 
          onOpenCollaborate={() => setIsCollaborateOpen(true)} 
        />
        
        <InstitutionalIntro 
          setActiveView={setActiveView} 
        />

        <PhilosophySection />

        <ObservationCycle />

        <LongitudinalVisual />

        <ResearchAreasSection 
          setActiveView={setActiveView} 
        />

        <FeaturedStudySection 
          onSelectPaper={(paper) => setSelectedPaper(paper)} 
        />

        <ResearchArchive 
          onSelectPaper={(paper) => setSelectedPaper(paper)} 
        />

        <FieldNotesSection />

        <MethodologySection />

        <EthicsSection />

        <TeamSection />

        <FAQSection />

        <ContactSection />
      </main>

      {/* Substantial Institutional Footer */}
      <Footer 
        setActiveView={setActiveView} 
        onOpenCollaborate={() => setIsCollaborateOpen(true)} 
      />

      {/* Interactive Paper Detail & Citation Modal */}
      {selectedPaper && (
        <PaperModal 
          paper={selectedPaper} 
          onClose={() => setSelectedPaper(null)} 
        />
      )}

      {/* Collaboration Inquiry Modal */}
      <CollaborateModal 
        isOpen={isCollaborateOpen} 
        onClose={() => setIsCollaborateOpen(false)} 
      />
    </div>
  );
}
