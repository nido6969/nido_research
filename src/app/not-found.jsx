import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: '404 - Page Not Found',
  description: 'The requested page could not be found.',
};

export default function NotFound() {
  return (
    <div style={{ backgroundColor: '#FAF3E2', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
      <div style={{ maxWidth: '480px' }}>
        <span style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C99428', display: 'block', marginBottom: '0.5rem' }}>
          404 ERROR
        </span>
        <h1 style={{ fontFamily: "'Newsreader', serif", fontSize: '2.5rem', fontWeight: 600, color: '#1A1714', marginBottom: '0.75rem' }}>
          Page Not Found
        </h1>
        <p style={{ fontSize: '0.95rem', color: '#554F47', lineHeight: 1.55, marginBottom: '1.5rem' }}>
          The page or publication you are looking for has been moved or does not exist in our research repository.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.65rem 1.4rem',
            backgroundColor: '#234338',
            color: '#FFFFFF',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.88rem'
          }}
        >
          Return to Research Home
        </Link>
      </div>
    </div>
  );
}
