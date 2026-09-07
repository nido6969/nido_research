'use client';
import React from 'react';
import { useNavigate } from '../lib/navigation';
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
          navigate('/research-studies/building-a-montessori-school-from-the-ground-up-case-study');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onAboutClick={() => {
          navigate('/about');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
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
        onOpenArchive={() => navigate('/publications')}
      />

      {/* Explore Our Work - 4 Cards */}
      <ExploreWorkSection />

      {/* Newsletter Container */}
      <NewsletterSection />

      {/* Trust & Accreditations */}
      <TrustBar />
    </div>
  );
}
