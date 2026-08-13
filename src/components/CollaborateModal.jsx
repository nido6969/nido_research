import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

export default function CollaborateModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    role: 'University Researcher',
    inquiryType: 'Joint Longitudinal Study',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '680px' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-ochre-dark)', fontWeight: 600 }}>
              Academic Inquiry
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.8rem', color: 'var(--text-heading)', margin: 0 }}>
              Explore Research Collaboration
            </h2>
          </div>

          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
            <X size={24} />
          </button>
        </div>

        {submitted ? (
          <div style={{ textAlignment: 'center', padding: '3rem 1.5rem' }}>
            <CheckCircle2 size={48} color="var(--color-sage)" style={{ margin: '0 auto 1rem auto', display: 'block' }} />
            <h3 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.6rem', color: 'var(--text-heading)', marginBottom: '0.75rem' }}>
              Collaboration Inquiry Received
            </h3>
            <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Thank you, <strong>{formData.name}</strong>. Your research proposal has been logged with the NIDO Academic Review Secretariat. A research fellow will respond to <strong>{formData.email}</strong> within 3 business days.
            </p>
            <button onClick={onClose} className="btn-primary">
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
              NIDO Research Institute welcomes scholarly collaborations with universities, developmental psychology labs, independent researchers, and Montessori educational leaders.
            </p>

            {/* Name & Email */}
            <div className="grid-2" style={{ gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.35rem' }}>
                  Full Name *
                </label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Dr. Eleanor Vance"
                  style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '4px', border: '1px solid var(--border-medium)', backgroundColor: 'var(--bg-surface)', fontSize: '0.9rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.35rem' }}>
                  Academic / Institutional Email *
                </label>
                <input 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="evance@university.edu"
                  style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '4px', border: '1px solid var(--border-medium)', backgroundColor: 'var(--bg-surface)', fontSize: '0.9rem' }}
                />
              </div>
            </div>

            {/* Institution & Role */}
            <div className="grid-2" style={{ gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.35rem' }}>
                  Institution / Organization *
                </label>
                <input 
                  type="text" 
                  required 
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  placeholder="Dept of Psychology, University of..."
                  style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '4px', border: '1px solid var(--border-medium)', backgroundColor: 'var(--bg-surface)', fontSize: '0.9rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.35rem' }}>
                  Inquiry Category
                </label>
                <select 
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '4px', border: '1px solid var(--border-medium)', backgroundColor: 'var(--bg-surface)', fontSize: '0.9rem' }}
                >
                  <option value="Joint Longitudinal Study">Joint Longitudinal Study</option>
                  <option value="Visiting Fellow / Scholar">Visiting Fellow / Scholar</option>
                  <option value="Anonymized Dataset Access">Anonymized Dataset Access</option>
                  <option value="Montessori School Collaboration">Montessori School Collaboration</option>
                  <option value="Media / Press Inquiry">Media / Press Inquiry</option>
                </select>
              </div>
            </div>

            {/* Proposal Brief */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.35rem' }}>
                Research Scope / Proposal Summary *
              </label>
              <textarea 
                rows="4" 
                required 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Briefly describe your research domain, methodology questions, or desired collaboration parameters..."
                style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '4px', border: '1px solid var(--border-medium)', backgroundColor: 'var(--bg-surface)', fontSize: '0.9rem', fontFamily: 'var(--font-body)' }}
              ></textarea>
            </div>

            {/* Submit CTA */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
              <button type="submit" className="btn-ochre">
                <Send size={16} />
                <span>Submit Collaboration Proposal</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
