'use client';
import React, { useState } from 'react';
import { 
  Compass, 
  Target, 
  Brain, 
  Users, 
  Activity, 
  MessageSquare, 
  Sparkles, 
  Home 
} from 'lucide-react';

export const RESEARCH_AREAS_DATA = [
  {
    id: "independence",
    title: "Independence",
    icon: Compass,
    category: "PRACTICAL LIFE & AUTONOMY",
    question: "How do children gradually become capable of doing things for themselves?",
    description: "We explore the relationship between environment, choice, repetition and the development of independence. In our Montessori environments, independence is not taught through direct instruction, but developed through self-directed purposeful activity.",
    highlights: [
      "Self-directed choice and purposeful repetition without adult redirection",
      "Physical self-reliance through authentic practical life activities",
      "Internal motivation and spontaneous confidence in problem-solving"
    ],
    tags: ["#Independence", "#PracticalLife", "#SelfDirection", "#Autonomy", "#PreparedEnvironment"]
  },
  {
    id: "concentration",
    title: "Concentration",
    icon: Target,
    category: "ATTENTION & IMMERSIVE WORK",
    question: "What helps children stay with something?",
    description: "We look at how prepared environments, purposeful activity, movement and uninterrupted work may support developing concentration. We study the emergence of deep focus and how it transforms classroom behavior.",
    highlights: [
      "Uninterrupted three-hour work cycles and natural attention curves",
      "Protection of spontaneous focus from adult redirection or synthetic rewards",
      "Restorative impact of deep material engagement on child emotional equilibrium"
    ],
    tags: ["#DeepConcentration", "#WorkCycle", "#AttentionCurves", "#Absorption", "#FlowState"]
  },
  {
    id: "executive-function",
    title: "Executive Function",
    icon: Brain,
    category: "NEURODEVELOPMENT & COGNITIVE CONTROL",
    question: "How do young children learn to regulate attention, remember, adapt and manage impulses?",
    description: "We explore these developing capacities through everyday classroom experiences rather than isolated tests alone. Children naturally exercise executive control as they navigate choices, clean up work, and collaborate with peers.",
    highlights: [
      "Working memory strengthened through complex multi-step material routines",
      "Inhibitory control fostered through purposeful turn-taking and precision movement",
      "Cognitive flexibility developed across mixed-age multi-tasking environments"
    ],
    tags: ["#ExecutiveFunction", "#WorkingMemory", "#InhibitoryControl", "#SelfRegulation", "#CognitiveFlexibility"]
  },
  {
    id: "social-development",
    title: "Social Development",
    icon: Users,
    category: "COMMUNITY & SOCIAL LEARNING",
    question: "How do children learn to live with one another?",
    description: "Our work looks at cooperation, empathy, conflict, leadership, observation and peer learning within children's communities. Mixed-age groups provide a natural social microcosm where children develop authentic communal responsibility.",
    highlights: [
      "Spontaneous peer mentorship across multi-age 3-to-6 year classroom cohorts",
      "Grace and courtesy protocols embedded in daily community rituals",
      "Organic conflict resolution and autonomous empathetic peer navigation"
    ],
    tags: ["#SocialCohesion", "#MixedAge", "#GraceAndCourtesy", "#PeerMentorship", "#Empathy"]
  },
  {
    id: "movement",
    title: "Movement",
    icon: Activity,
    category: "PSYCHOMOTOR & EMBODIED LEARNING",
    question: "Movement is not separate from learning.",
    description: "We explore the relationship between movement, coordination, exploration and children's growing ability to engage with their environment. The hand is the instrument of the mind, and intellectual growth is inseparable from physical action.",
    highlights: [
      "Fine motor refinement through graduated manipulation of tactile apparatus",
      "Freedom of purposeful movement within structured spatial boundaries",
      "Hand-brain synthesis: how physical purposeful action builds cognitive schema"
    ],
    tags: ["#GrossMotor", "#FineMotor", "#EmbodiedLearning", "#Coordination", "#HandBrainSynthesis"]
  },
  {
    id: "language",
    title: "Language",
    icon: MessageSquare,
    category: "EMERGENT COMMUNICATION & LITERACY",
    question: "Children build language through relationships, conversation, listening and meaningful experiences.",
    description: "We investigate how language emerges and develops within rich social and learning environments. Rather than drill-based phonics, children absorb spoken and written language through nomenclature, tactile sandpapers, and immersive dialogue.",
    highlights: [
      "Tactile and multisensory phonetic literacy preparation",
      "Precise nomenclature exploration across botany, zoology, and geography",
      "Expressive verbal confidence through conversational storytelling and listening"
    ],
    tags: ["#LanguageAcquisition", "#PhoneticAwareness", "#Nomenclature", "#ExpressiveLanguage", "#Literacy"]
  },
  {
    id: "sensorial-development",
    title: "Sensorial Development",
    icon: Sparkles,
    category: "SENSORY DISCRIMINATION & ORDER",
    question: "Children meet the world through their senses.",
    description: "Our research explores how sensorial experiences support children's observation, classification, discrimination and understanding of their surroundings. Sensorial apparatus serves as materialized abstractions that prepare the mathematical mind.",
    highlights: [
      "Sensory isolation isolating chromatic, tactile, auditory, and baric dimensions",
      "Preparation for mathematical abstractions through physical dimensional hierarchy",
      "Refining perceptual acuity and developing structured mental categorization"
    ],
    tags: ["#SensorialEducation", "#SensoryIsolation", "#Classification", "#Perception", "#MathematicalMind"]
  },
  {
    id: "montessori-at-home",
    title: "Montessori at Home",
    icon: Home,
    category: "FAMILY LIFE & DOMESTIC CONTINUITY",
    question: "A child's Montessori experience does not stop at the classroom door.",
    description: "We are curious about how parents understand Montessori principles and how these principles may translate into everyday family life as well. We explore how home environments can support developing independence and practical agency.",
    highlights: [
      "Domestic environment preparation supporting toddler and child agency",
      "Translating classroom independence into feeding, dressing, and routine participation",
      "Strengthening reciprocal parent-educator communication and shared developmental goals"
    ],
    tags: ["#MontessoriAtHome", "#ParentPartnership", "#HomePreparation", "#FamilyRoutines", "#ParentInsights"]
  }
];

export default function ResearchAreasExplorer() {
  const [selectedId, setSelectedId] = useState(RESEARCH_AREAS_DATA[0].id);

  const selectedArea = RESEARCH_AREAS_DATA.find(a => a.id === selectedId) || RESEARCH_AREAS_DATA[0];
  const ActiveIcon = selectedArea.icon;

  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      borderRadius: '18px',
      border: '1px solid #E5DFD2',
      boxShadow: '0 8px 24px rgba(24, 21, 18, 0.05)',
      overflow: 'hidden',
      marginBottom: '2.5rem'
    }}>
      {/* Two-Panel Layout (Sidebar + Detail Panel) */}
      <div className="research-areas-split" style={{
        display: 'flex',
        flexWrap: 'wrap',
        minHeight: '520px'
      }}>
        
        {/* Left Sidebar Navigation */}
        <div style={{
          flex: '0 0 310px',
          backgroundColor: '#142E25',
          padding: '1.75rem 1.25rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start'
        }} className="research-areas-sidebar">
          
          {/* Top Status Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.85rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(35, 67, 56, 0.75)',
            border: '1px solid rgba(82, 209, 155, 0.35)',
            marginBottom: '1.25rem',
            width: 'fit-content'
          }}>
            <span style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: '#52D19B',
              boxShadow: '0 0 8px #52D19B'
            }} />
            <span style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              color: '#52D19B',
              textTransform: 'uppercase'
            }}>
              8 Areas of Inquiry
            </span>
          </div>

          {/* Navigation Items List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {RESEARCH_AREAS_DATA.map((area) => {
              const isActive = area.id === selectedId;
              const ItemIcon = area.icon;

              return (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => setSelectedId(area.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    width: '100%',
                    transition: 'all 0.2s ease',
                    background: isActive 
                      ? 'linear-gradient(90deg, #234338 0%, #2F6851 100%)' 
                      : 'transparent',
                    color: isActive ? '#FFFFFF' : 'rgba(240, 244, 242, 0.78)',
                    boxShadow: isActive ? '0 4px 14px rgba(35, 67, 56, 0.35)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.color = '#FFFFFF';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'rgba(240, 244, 242, 0.78)';
                    }
                  }}
                >
                  <ItemIcon 
                    size={17} 
                    color={isActive ? '#FFFFFF' : 'rgba(240, 244, 242, 0.6)'} 
                    style={{ flexShrink: 0 }} 
                  />
                  <span style={{
                    fontSize: '0.9rem',
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: '0.01em',
                    lineHeight: 1.2
                  }}>
                    {area.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Detail Content Panel */}
        <div style={{
          flex: '1 1 500px',
          padding: '2.5rem 3rem',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }} className="research-areas-detail">
          
          <div>
            {/* Top Detail Header with Rounded Icon Box */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.25rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '14px',
                backgroundColor: '#EEF4F0',
                border: '1px solid #D6E4DB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#234338',
                flexShrink: 0
              }}>
                <ActiveIcon size={26} color="#234338" />
              </div>

              <div>
                <div style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#234338',
                  marginBottom: '0.25rem'
                }}>
                  {selectedArea.category}
                </div>
                <h3 style={{
                  fontFamily: "'Newsreader', Georgia, serif",
                  fontSize: 'clamp(1.75rem, 2.5vw, 2.2rem)',
                  fontWeight: 700,
                  color: '#1A1714',
                  margin: 0,
                  lineHeight: 1.15
                }}>
                  {selectedArea.title}
                </h3>
                <div style={{
                  fontSize: '0.96rem',
                  fontStyle: 'italic',
                  color: '#C88528',
                  fontWeight: 600,
                  marginTop: '0.35rem'
                }}>
                  {selectedArea.question}
                </div>
              </div>
            </div>

            {/* Description Paragraph */}
            <p style={{
              fontSize: '0.96rem',
              color: '#1A1714',
              lineHeight: 1.65,
              marginBottom: '1.75rem',
              maxWidth: '780px'
            }}>
              {selectedArea.description}
            </p>

            {/* Key Observation Highlights (Full-Width Rounded Rows) */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              marginBottom: '2rem'
            }}>
              {selectedArea.highlights.map((point, pIdx) => (
                <div
                  key={pIdx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.9rem',
                    padding: '0.95rem 1.35rem',
                    backgroundColor: '#F8FAF8',
                    border: '1px solid #E3EBE5',
                    borderRadius: '12px',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02)',
                    transition: 'transform 0.15s ease'
                  }}
                  className="hover-lift"
                >
                  <span style={{
                    width: '9px',
                    height: '9px',
                    borderRadius: '50%',
                    backgroundColor: '#234338',
                    boxShadow: '0 0 8px rgba(35, 67, 56, 0.4)',
                    flexShrink: 0
                  }} />
                  <span style={{
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    color: '#1A1714',
                    letterSpacing: '-0.01em'
                  }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Tags / Keywords */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.65rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid #F0EAE1'
          }}>
            {selectedArea.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: '#234338',
                  backgroundColor: '#EEF4F0',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '6px',
                  border: '1px solid #D6E4DB'
                }}
              >
                {tag}
              </span>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
