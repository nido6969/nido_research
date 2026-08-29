'use client';
import React, { useEffect } from 'react';
import { useLocation } from '../lib/navigation';

/**
 * World-class Dynamic SEO Head Manager
 * Updates document title, canonical link, meta descriptions, OpenGraph, Twitter tags, and breadcrumbs on every route change.
 */
export default function SEO({ 
  title, 
  description, 
  keywords, 
  image = 'https://research.nidomontessori.in/images/logo.png',
  article = false,
  publishedTime,
  author = 'NIDO Research Institute'
}) {
  const location = useLocation();
  const canonicalUrl = `https://research.nidomontessori.in${location.pathname}`;
  
  const siteTitle = 'NIDO Research Institute | Nido Montessori Preschool & Blue Blocks School Hyderabad';
  const fullTitle = title ? `${title} | NIDO Research Institute` : siteTitle;
  const metaDescription = description || 'NIDO Research Institute is the premier early childhood development research institute affiliated with Nido Montessori Preschool (Bachupally) and Blue Blocks Complete Montessori School (Gachibowli, Tellapur, Hyderabad). Explore peer-reviewed longitudinal research, authentic AMI Montessori case studies, and naturalistic child observation data.';
  const metaKeywords = keywords || 'Nido Montessori, Nido Montessori Preschool, Nido Montessori School Bachupally, Blue Blocks School, Blue Blocks Montessori School, Best Montessori school in Hyderabad, Best preschool in Bachupally, Best preschool in Hyderabad, Montessori schools in Hyderabad, AMI Montessori Hyderabad, IMF Flagship school Hyderabad, child development research Hyderabad';

  useEffect(() => {
    // 1. Dynamic Title
    document.title = fullTitle;

    // Helper to update or create meta tags
    const updateMeta = (selector, attributeName, attributeValue, content) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Primary Meta Tags
    updateMeta('meta[name="description"]', 'name', 'description', metaDescription);
    updateMeta('meta[name="keywords"]', 'name', 'keywords', metaKeywords);
    updateMeta('meta[name="author"]', 'name', 'author', author);

    // 3. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // 4. OpenGraph Tags
    updateMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    updateMeta('meta[property="og:description"]', 'property', 'og:description', metaDescription);
    updateMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    updateMeta('meta[property="og:image"]', 'property', 'og:image', image);
    updateMeta('meta[property="og:type"]', 'property', 'og:type', article ? 'article' : 'website');

    // 5. Twitter Card Tags
    updateMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    updateMeta('meta[name="twitter:description"]', 'name', 'twitter:description', metaDescription);
    updateMeta('meta[name="twitter:image"]', 'name', 'twitter:image', image);

    if (article && publishedTime) {
      updateMeta('meta[property="article:published_time"]', 'property', 'article:published_time', publishedTime);
      updateMeta('meta[property="article:author"]', 'property', 'article:author', author);
    }
  }, [fullTitle, metaDescription, metaKeywords, canonicalUrl, image, article, publishedTime, author]);

  return null;
}
