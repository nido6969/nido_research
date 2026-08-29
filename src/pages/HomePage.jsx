import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import FeaturedStudySection from '../components/FeaturedStudySection';
import ResearchUpdatesBar from '../components/ResearchUpdatesBar';
import ExploreWorkSection from '../components/ExploreWorkSection';
import NewsletterSection from '../components/NewsletterSection';
import TrustBar from '../components/TrustBar';
import SEO from '../components/SEO';
import { FEATURED_STUDIES } from '../data/researchData';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{ flex: 1 }}>
      <SEO 
        title="Best Montessori Preschool & Research Institute in Hyderabad"
        description="Nido Montessori Preschool Bachupally and Blue Blocks School Hyderabad publish empirical childhood developmental research, authentic AMI Montessori case studies, and naturalistic observation datasets."
        keywords="Best Montessori School in Hyderabad, Nido Montessori Preschool Bachupally, Blue Blocks School Hyderabad, Best Preschool in Bachupally, Montessori Education Research, Early Childhood Development Hyderabad"
      />
      {/* Hero Section */}
      <HeroSection 
        onExploreClick={() => {
          const el = document.getElementById('featured-studies');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onAboutClick={() => navigate('/about')}
      />

      {/* Featured Studies Grid */}
      <FeaturedStudySection 
        onSelectPaper={(paper) => {
          if (paper && paper.slug) {
            navigate(`/research-studies/${paper.slug}`);
          } else {
            navigate('/publications');
          }
        }}
        onViewAll={() => navigate('/publications')}
      />

      {/* Research Updates Strip */}
      <ResearchUpdatesBar 
        onSelectUpdate={(item) => {
          if (item.targetStudyId) {
            const study = FEATURED_STUDIES.find(s => s.id === item.targetStudyId);
            if (study && study.slug) {
              navigate(`/research-studies/${study.slug}`);
              return;
            }
          }
          navigate('/publications');
        }}
        onOpenArchive={() => navigate('/publications')}
      />

      {/* Explore Our Work - 4 Tinted Cards */}
      <ExploreWorkSection 
        onOpenSection={(sectionId) => {
          navigate(`/research/${sectionId}`);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Newsletter Container */}
      <NewsletterSection />

      {/* Trust & Accreditations */}
      <TrustBar />
    </div>
  );
}
