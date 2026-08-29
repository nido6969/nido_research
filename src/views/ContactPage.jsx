'use client';
import React, { useState } from 'react';
import { Link } from '../lib/navigation';
import { MapPin, Mail, Phone, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/researchData';
import SpecularButton from '../components/SpecularButton';
import BorderGlow from '../components/BorderGlow';
import SEO from '../components/SEO';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Parent',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', role: 'Parent', subject: '', message: '' });
    }, 6000);
  };

  return (
    <div style={{ backgroundColor: '#FAF3E2', minHeight: '100vh', paddingTop: '1.5rem', paddingBottom: '4rem' }}>
      <SEO 
        title="Contact Nido Montessori Preschool & Research Institute | Bachupally Campus"
        description="Get in touch with NIDO Research Institute & Nido Montessori Preschool in Bachupally, Hyderabad. Schedule classroom observations, inquire about admissions, or request research collaborations."
        keywords="Contact Nido Montessori, Nido Preschool Bachupally Phone, Nido Montessori Admissions Hyderabad, Visit Nido Bachupally, Montessori Research Inquiries"
      />
      <div className="container-standard">
        
        {/* Breadcrumbs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#7E766D', marginBottom: '1rem' }}>
          <Link to="/" style={{ color: '#554F47', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <span style={{ color: '#234338', fontWeight: 600 }}>Contact & Collaboration</span>
        </div>

        {/* Hero Header with BorderGlow */}
        <BorderGlow
          borderRadius={14}
          backgroundColor="#FFFFFF"
          glowRadius={36}
          colors={['#234338', '#C99428', '#5E9480']}
          style={{ marginBottom: '2rem' }}
        >
          <div className="card-pad-standard">
            <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C99428', marginBottom: '0.4rem' }}>
              CONNECT WITH US
            </div>
            <h1 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.8rem, 3.2vw, 2.75rem)', fontWeight: 600, color: '#1A1714', lineHeight: 1.2, marginBottom: '0.75rem' }}>
              Collaborate, Inquire or Connect
            </h1>
            <p style={{ fontSize: '0.98rem', color: '#554F47', maxWidth: '780px', lineHeight: 1.6, margin: 0 }}>
              Whether you are an educator, developmental researcher, university partner, or parent, we welcome thoughtful inquiries, joint research explorations, and community conversations.
            </p>
          </div>
        </BorderGlow>

        {/* Two-Column Grid: Contact Form & Campus Information (Stacks on mobile) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>
          
          {/* Form with BorderGlow */}
          <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#DDBB7B', '#4D8A74']}>
            <div className="card-pad-standard">
              <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.4rem, 2.2vw, 1.6rem)', fontWeight: 600, color: '#1A1714', marginBottom: '1.25rem' }}>
                Send an Inquiry Message
              </h2>

              {isSubmitted ? (
                <div style={{ padding: '1.25rem', backgroundColor: '#F1F6F3', border: '1px solid #C4D9CD', borderRadius: '8px', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} color="#234338" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                  <div>
                    <div style={{ fontWeight: 700, color: '#234338', fontSize: '0.96rem', marginBottom: '0.25rem' }}>
                      Thank you for reaching out!
                    </div>
                    <div style={{ fontSize: '0.88rem', color: '#3A3631', lineHeight: 1.5 }}>
                      Your message has been received by the Nido Montessori Research Team. We will reply to your email address shortly.
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#1A1714', marginBottom: '0.35rem' }}>
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Priya Sharma"
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.9rem',
                        borderRadius: '6px',
                        border: '1px solid #D6D0C4',
                        fontSize: '16px',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#1A1714', marginBottom: '0.35rem' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. priya.sharma@domain.edu"
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.9rem',
                        borderRadius: '6px',
                        border: '1px solid #D6D0C4',
                        fontSize: '16px',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#1A1714', marginBottom: '0.35rem' }}>
                      I Am A:
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.9rem',
                        borderRadius: '6px',
                        border: '1px solid #D6D0C4',
                        fontSize: '16px',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        backgroundColor: '#FFFFFF',
                        outline: 'none'
                      }}
                    >
                      <option value="Parent">Parent / Caregiver</option>
                      <option value="Montessori Educator">Montessori Educator / Guide</option>
                      <option value="Academic Researcher">Academic Researcher / Professor</option>
                      <option value="School Leader">Montessori School Leader</option>
                      <option value="Media">Media / Publisher</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#1A1714', marginBottom: '0.35rem' }}>
                      Subject / Area of Interest *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Collaboration on Executive Function Study"
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.9rem',
                        borderRadius: '6px',
                        border: '1px solid #D6D0C4',
                        fontSize: '16px',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#1A1714', marginBottom: '0.35rem' }}>
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about your question, observation, or proposed collaboration..."
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.9rem',
                        borderRadius: '6px',
                        border: '1px solid #D6D0C4',
                        fontSize: '16px',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <div>
                    <SpecularButton
                      type="submit"
                      size="sm"
                      radius={6}
                      tint="#234338"
                      tintOpacity={1}
                      textColor="#FFFFFF"
                      lineColor="#DDBB7B"
                      baseColor="#143229"
                      intensity={1.5}
                      shineSize={18}
                    >
                      <span>Submit Inquiry</span>
                      <Send size={15} />
                    </SpecularButton>
                  </div>
                </form>
              )}
            </div>
          </BorderGlow>

          {/* Direct Campus Information Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <BorderGlow borderRadius={12} backgroundColor="#FFFFFF" colors={['#234338', '#C99428', '#386684']}>
              <div className="card-pad-standard">
                <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(1.25rem, 2vw, 1.4rem)', fontWeight: 600, color: '#1A1714', marginBottom: '1rem' }}>
                  Campus & Contact Information
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <MapPin size={18} color="#C99428" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <div>
                      <strong style={{ color: '#1A1714', display: 'block', fontSize: '0.88rem' }}>Campus Address</strong>
                      <div style={{ fontSize: '0.85rem', color: '#554F47', lineHeight: 1.45 }}>
                        {INSTITUTION_INFO.contact.address}
                      </div>
                      <a
                        href={INSTITUTION_INFO.contact.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          fontSize: '0.82rem',
                          color: '#234338',
                          fontWeight: 600,
                          marginTop: '0.3rem',
                          textDecoration: 'none'
                        }}
                      >
                        <span>Open in Google Maps</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <Mail size={18} color="#C99428" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <div>
                      <strong style={{ color: '#1A1714', display: 'block', fontSize: '0.88rem' }}>Email</strong>
                      <a href={`mailto:${INSTITUTION_INFO.contact.email}`} style={{ fontSize: '0.85rem', color: '#234338', textDecoration: 'none' }}>
                        {INSTITUTION_INFO.contact.email}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <Phone size={18} color="#C99428" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <div>
                      <strong style={{ color: '#1A1714', display: 'block', fontSize: '0.88rem' }}>Phone</strong>
                      <a href={`tel:${INSTITUTION_INFO.contact.phone}`} style={{ fontSize: '0.85rem', color: '#234338', textDecoration: 'none' }}>
                        {INSTITUTION_INFO.contact.formattedPhone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </BorderGlow>

            <BorderGlow borderRadius={12} backgroundColor="#FAF3E2" colors={['#D6D0C4', '#A89E90', '#ECE7DF']}>
              <div style={{ padding: '1.35rem' }}>
                <h4 style={{ fontFamily: "'Newsreader', serif", fontSize: '1.1rem', fontWeight: 600, color: '#1A1714', marginBottom: '0.4rem' }}>
                  Visiting Our Campus
                </h4>
                <p style={{ fontSize: '0.84rem', color: '#554F47', lineHeight: 1.5, margin: 0 }}>
                  To preserve uninterrupted classroom flow for the children, visits to our Children's Houses and observation environments are scheduled in advance by appointment.
                </p>
              </div>
            </BorderGlow>
          </div>

        </div>

      </div>
    </div>
  );
}
