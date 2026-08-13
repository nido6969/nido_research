import React, { useState } from 'react';
import { X, Copy, Check, Download, FileText } from 'lucide-react';

export default function PaperModal({ paper, onClose }) {
  const [copiedFormat, setCopiedFormat] = useState(null);

  if (!paper) return null;

  const apaCitation = paper.citation;
  const bibtexCitation = `@article{nido_${paper.id},\n  title={${paper.title}},\n  author={${paper.leadResearcher}},\n  journal={NIDO Research Institute Repository},\n  year={${paper.year}},\n  doi={${paper.doi}}\n}`;

  const copyToClipboard = (text, format) => {
    navigator.clipboard.writeText(text);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
          <div>
            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span className={`status-badge ${paper.statusClass}`}>
                {paper.status}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {paper.areaName} • {paper.year}
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.8rem', color: 'var(--text-heading)', margin: 0, lineHeight: 1.25 }}>
              {paper.title}
            </h2>
          </div>

          <button 
            onClick={onClose}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: '0.2rem' }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Paper Metadata */}
        <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', padding: '1rem 1.25rem', borderRadius: '6px', marginBottom: '1.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
          <div><strong>Authors:</strong> {paper.leadResearcher}</div>
          <div><strong>DOI:</strong> <span style={{ fontFamily: 'monospace' }}>{paper.doi}</span></div>
          {paper.sampleSize && <div><strong>Sample Size:</strong> {paper.sampleSize}</div>}
        </div>

        {/* Abstract */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.2rem', marginBottom: '0.65rem', color: 'var(--text-heading)' }}>
            Abstract
          </h4>
          <p style={{ fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.65 }}>
            {paper.abstract}
          </p>
        </div>

        {/* Key Findings if present */}
        {paper.findings && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.2rem', marginBottom: '0.65rem', color: 'var(--text-heading)' }}>
              Main Research Findings
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {paper.findings.map((f, idx) => (
                <li key={idx} style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--color-ochre)' }}>•</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Academic Citation Generator */}
        <div style={{ backgroundColor: '#F0ECE1', border: '1px solid var(--border-medium)', borderRadius: '6px', padding: '1.25rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <h4 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.1rem', color: 'var(--text-heading)', margin: 0 }}>
              Academic Citation (APA Format)
            </h4>
            <button 
              onClick={() => copyToClipboard(apaCitation, 'APA')}
              className="btn-secondary"
              style={{ padding: '0.3rem 0.75rem', fontSize: '0.78rem' }}
            >
              {copiedFormat === 'APA' ? <Check size={14} color="green" /> : <Copy size={14} />}
              <span>{copiedFormat === 'APA' ? 'Copied APA!' : 'Copy APA'}</span>
            </button>
          </div>
          <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontStyle: 'italic', lineHeight: 1.5, backgroundColor: 'var(--bg-parchment)', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>
            {apaCitation}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
          <button 
            onClick={() => copyToClipboard(bibtexCitation, 'BibTeX')}
            className="btn-secondary"
            style={{ fontSize: '0.85rem' }}
          >
            {copiedFormat === 'BibTeX' ? <Check size={14} color="green" /> : <FileText size={14} />}
            <span>{copiedFormat === 'BibTeX' ? 'Copied BibTeX!' : 'Copy BibTeX Code'}</span>
          </button>

          <button 
            onClick={() => alert(`Pre-print manuscript file request sent for DOI: ${paper.doi}. Document link dispatched.`)}
            className="btn-primary"
            style={{ fontSize: '0.85rem' }}
          >
            <Download size={15} />
            <span>Download Manuscript (PDF)</span>
          </button>
        </div>

      </div>
    </div>
  );
}
