import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-parchment)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container-standard">
        
        {/* Section Header */}
        <div style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-ochre-dark)', marginBottom: '0.75rem' }}>
          Institutional Communications
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'start' }} className="contact-grid">
          
          {/* Left: Contact Info */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', fontWeight: 500, color: 'var(--text-heading)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Connect with the Secretariat
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '2.5rem' }}>
              For research inquiries, publication permissions, visiting scholar requests, or media correspondence, please contact our academic office.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '0.5rem', backgroundColor: 'var(--color-ochre-tint)', border: '1px solid var(--color-ochre-light)', borderRadius: '6px', color: 'var(--color-ochre-dark)' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-heading)', marginBottom: '0.2rem' }}>Location & Campus</strong>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    NIDO Research Institute<br />
                    NIDO Montessori Preschool Campus<br />
                    Hyderabad, Telangana, India
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '0.5rem', backgroundColor: 'var(--color-sage-tint)', border: '1px solid var(--color-sage-light)', borderRadius: '6px', color: 'var(--color-sage-dark)' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-heading)', marginBottom: '0.2rem' }}>Academic Enquiries Email</strong>
                  <a href="mailto:research@nidomontessori.in" style={{ fontSize: '0.9rem', color: 'var(--color-ochre-dark)', fontWeight: 600 }}>
                    research@nidomontessori.in
                  </a>
                </div>
              </div>
            </div>

            {/* School Relationship Card */}
            <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-medium)', borderRadius: '8px', padding: '1.5rem' }}>
              <h4 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.15rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
                Preschool Admissions & General School Inquiries
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                For parent admissions, campus visits, or preschool programs, please visit the primary NIDO Montessori Preschool website:
              </p>
              <a 
                href="https://nidomontessori.in" 
                target="_blank" 
                rel="noreferrer" 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-ochre-dark)', fontWeight: 600, fontSize: '0.9rem' }}
              >
                <span>nidomontessori.in</span>
                <ArrowUpRight size={15} />
              </a>
            </div>

          </div>

          {/* Right: Contact Form */}
          <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-medium)', borderRadius: '10px', padding: '2.5rem', boxShadow: 'var(--shadow-subtle)' }}>
            
            <h3 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.6rem', color: 'var(--text-heading)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
              General Academic Inquiry Form
            </h3>

            {sent ? (
              <div style={{ textAlignment: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={40} color="var(--color-sage)" style={{ margin: '0 auto 1rem auto', display: 'block' }} />
                <h4 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.4rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
                  Message Sent Successfully
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  Thank you. Our academic secretariat will review your message and reply promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.35rem' }}>
                    Your Name *
                  </label>
                  <input type="text" required placeholder="Full Name" style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '4px', border: '1px solid var(--border-medium)', backgroundColor: 'var(--bg-parchment)', fontSize: '0.9rem' }} />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.35rem' }}>
                    Email Address *
                  </label>
                  <input type="email" required placeholder="name@domain.com" style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '4px', border: '1px solid var(--border-medium)', backgroundColor: 'var(--bg-parchment)', fontSize: '0.9rem' }} />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.35rem' }}>
                    Subject / Topic
                  </label>
                  <input type="text" placeholder="e.g. Citation Permission, Data Query" style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '4px', border: '1px solid var(--border-medium)', backgroundColor: 'var(--bg-parchment)', fontSize: '0.9rem' }} />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.35rem' }}>
                    Inquiry Message *
                  </label>
                  <textarea rows="4" required placeholder="Write your inquiry..." style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '4px', border: '1px solid var(--border-medium)', backgroundColor: 'var(--bg-parchment)', fontSize: '0.9rem', fontFamily: 'var(--font-body)' }}></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
