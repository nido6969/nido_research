import React from 'react';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import schemaGraphData from '../data/schemaGraph.json';

export const metadata = {
  metadataBase: new URL('https://research.nidomontessori.in'),
  title: {
    default: 'NIDO Research Institute | Best Montessori Preschool & Research in Hyderabad',
    template: '%s | NIDO Research Institute'
  },
  description: 'NIDO Research Institute is the premier early childhood development research institute affiliated with Nido Montessori Preschool (Bachupally) and Blue Blocks Complete Montessori School (Gachibowli, Tellapur, Hyderabad). Explore peer-reviewed longitudinal research, authentic AMI Montessori case studies, and naturalistic child observation data.',
  keywords: [
    'Best Montessori school in Hyderabad',
    'Best preschool in Bachupally',
    'Nido Montessori Preschool Bachupally',
    'Nido Montessori School Hyderabad',
    'Blue Blocks School Hyderabad',
    'Blue Blocks Montessori School',
    'Best preschool in Miyapur',
    'Best preschool in Nizampet',
    'Best preschool in Kukatpally',
    'Top preschools in Bachupally Hyderabad',
    'Montessori admissions Hyderabad 2026',
    'Preschool admissions Bachupally',
    'AMI Montessori Hyderabad',
    'IMF Flagship school Hyderabad',
    'Montessori research institute',
    'Early childhood education research',
    'Child development research Hyderabad',
    'Montessori case study Shobha Goyal',
    'Executive function in early childhood',
    'Play based learning Montessori',
    'Mixed age classroom social development',
    'Authentic Montessori apparatus',
    'Shobha Goyal'
  ],
  authors: [{ name: 'NIDO Research Institute & Nido Montessori Preschool', url: 'https://research.nidomontessori.in' }],
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
    title: 'NIDO Research Institute | Best Montessori Preschool & Research in Hyderabad',
    description: 'Longitudinal Montessori research, developmental case studies, and naturalistic observation from Nido Montessori Preschool (Bachupally) & Blue Blocks School (Hyderabad).',
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
    site: '@NidoMontessori',
    title: 'NIDO Research Institute | Nido Montessori Preschool & Blue Blocks School',
    description: 'Evidence-based early childhood research and authentic AMI Montessori case studies from Hyderabad\'s premier Montessori institutions.',
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
        
        {/* Google Scholar Metadata for Academic Indexing */}
        <meta name="citation_title" content="Building a Montessori School from the Ground Up: An Observational Case Study of the Founding Phases of Nido Montessori Preschool, Bachupally" />
        <meta name="citation_author" content="Shobha Goyal" />
        <meta name="citation_publication_date" content="2026/08/29" />
        <meta name="citation_journal_title" content="Nido Research Papers" />
        <meta name="citation_volume" content="1" />
        <meta name="citation_issue" content="0" />
        <meta name="citation_doi" content="10.5281/zenodo.nido.2026.00" />
        <meta name="citation_pdf_url" content="https://research.nidomontessori.in/Nido_Montessori_Founding_Case_Study.pdf" />

        {/* 810+ Schema.org JSON-LD Knowledge Graph */}
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
