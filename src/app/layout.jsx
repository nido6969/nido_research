import React from 'react';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import schemaGraphData from '../data/schemaGraph.json';

export const metadata = {
  metadataBase: new URL('https://research.nidomontessori.in'),
  title: {
    default: 'Nido Montessori Research Institute | Montessori Education Research',
    template: '%s | NIDO Research Institute'
  },
  description: 'NIDO Research Institute conducts naturalistic classroom observations, longitudinal developmental cohorts, and empirical Montessori pedagogical research associated with Nido Montessori Preschool in Bachupally, Hyderabad, India.',
  keywords: [
    'Nido Montessori Research Institute',
    'Montessori education research',
    'Montessori pedagogy',
    'child development research Hyderabad',
    'naturalistic classroom observation',
    'prepared environment',
    'early childhood development',
    'Nido Montessori School Bachupally',
    'Shobha Goyal'
  ],
  authors: [{ name: 'NIDO Research Institute', url: 'https://research.nidomontessori.in' }],
  creator: 'NIDO Research Institute',
  publisher: 'NIDO Research Institute',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://research.nidomontessori.in/',
    types: {
      'application/rss+xml': 'https://research.nidomontessori.in/feed.xml',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://research.nidomontessori.in/',
    siteName: 'NIDO Research Institute',
    title: 'Nido Montessori Research Institute | Montessori Education Research',
    description: 'Empirical early childhood research, authentic Montessori case studies, and naturalistic observation datasets from Nido Montessori Preschool, Bachupally, Hyderabad.',
    images: [
      {
        url: 'https://research.nidomontessori.in/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Nido Research Institute Logo — Understanding Childhood. Nurturing Tomorrow.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nido Montessori Research Institute | Montessori Education Research',
    description: 'Evidence-based early childhood research and naturalistic Montessori classroom observation from Hyderabad, India.',
    images: ['https://research.nidomontessori.in/images/logo.png'],
  },
  other: {
    'geo.region': 'IN-TG',
    'geo.placename': 'Bachupally, Hyderabad, Telangana, India',
    'geo.position': '17.553145;78.3838549',
    'ICBM': '17.553145, 78.3838549',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" type="application/rss+xml" title="NIDO Research Institute RSS Feed" href="/feed.xml" />

        {/* Verified Schema.org JSON-LD Knowledge Graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraphData) }}
        />
      </head>
      <body style={{ backgroundColor: '#FAF3E2', color: '#1A1714', margin: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <ScrollToTop />
        <Header />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
