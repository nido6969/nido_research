// NIDO Research Institute — Comprehensive Academic Data Architecture

export const INSTITUTION_INFO = {
  name: "NIDO Research Institute",
  tagline: "Researching childhood through observation, experience, and longitudinal evidence.",
  subtitle: "The dedicated research and knowledge arm of NIDO Montessori Preschool",
  established: 2014,
  location: "Hyderabad, India",
  domain: "research.nidomontessori.in",
  schoolDomain: "nidomontessori.in",
  stats: {
    yearsObservation: "12+",
    childrenTracked: "450+",
    activeStudies: "14",
    publishedPapers: "28",
    researchDomains: "8",
    ecologicalValidity: "100%"
  },
  missionStatement: "NIDO Research Institute exists to understand the natural architecture of childhood through sustained observation, meticulous documentation, scholarly reflection, and longitudinal evidence. We view children not merely as subjects of study, but as active participants, original thinkers, and creators of human knowledge."
};

export const RESEARCH_AREAS = [
  {
    id: "childhood-development",
    title: "Childhood & Development",
    icon: "Sprout",
    subtitle: "Understanding natural developmental arcs, independence, and cognitive emergence across time.",
    description: "Tracking how children's inner capabilities, autonomy, motor precision, and self-directed curiosity unfold naturally from age 2 to 12 when given optimal developmental environments.",
    keyQuestions: [
      "How does physical independence influence executive function in early childhood?",
      "What are the observable indicators of sensitive periods for order, language, and sensory refinement?",
      "How do internal motivation structures persist when uncorrupted by external rewards?"
    ],
    leadFellow: "Dr. Ananya Sen",
    activeProjectsCount: 4,
    color: "#C49237"
  },
  {
    id: "montessori-pedagogy",
    title: "Montessori Education & Pedagogy",
    icon: "Compass",
    subtitle: "Rigorous empirical evaluation of Montessori principles, materials, and mixed-age dynamics.",
    description: "Investigating the cognitive mechanics of self-correcting sensorial materials, the Prepared Environment, and how three-year mixed-age groupings accelerate peer learning and empathy.",
    keyQuestions: [
      "What specific material characteristics elicit deep concentration states?",
      "How does the Prepared Environment alter spatial reasoning and physical self-regulation?",
      "In what ways does peer teaching reinforce abstract mental modeling in 5-year-olds?"
    ],
    leadFellow: "Rajesh V. Iyer",
    activeProjectsCount: 5,
    color: "#5F7360"
  },
  {
    id: "learning-cognition",
    title: "Learning & Cognition",
    icon: "Brain",
    subtitle: "Studying how children investigate, reason, solve problems, and construct abstract mental frameworks.",
    description: "Mapping the bridge between tactile sensory manipulation and abstract mathematical, linguistic, and scientific comprehension in early and middle childhood.",
    keyQuestions: [
      "How do children transition from physical Golden Beads to abstract mental arithmetic?",
      "What observational markers signal the emergence of spatial-geometric intuition?",
      "How does tactile classification impact early categorisation and scientific reasoning?"
    ],
    leadFellow: "Dr. Meera Deshmukh",
    activeProjectsCount: 3,
    color: "#996E20"
  },
  {
    id: "creativity-innovation",
    title: "Creativity & Original Thought",
    icon: "Lightbulb",
    subtitle: "Investigating how curiosity transforms into systematic experimentation and original creation.",
    description: "Observing how children navigate open-ended problem solving, material prototyping, artistic expression, and original hypothesis formulation without adult pre-determination.",
    keyQuestions: [
      "How do children handle self-initiated iteration when a physical experiment fails?",
      "What environment factors foster original storytelling and structural design?",
      "Does sustained quiet work promote higher rates of novel problem-solving strategies?"
    ],
    leadFellow: "Priya Nambiar",
    activeProjectsCount: 3,
    color: "#574F46"
  },
  {
    id: "social-emotional",
    title: "Social & Emotional Agency",
    icon: "Users",
    subtitle: "Studying empathy, self-regulation, conflict resolution, and collaborative agency in community.",
    description: "Documenting how children develop emotional resilience, intrinsic conflict negotiation, boundary setting, and mutual respect within a non-coercive social micro-society.",
    keyQuestions: [
      "How do 4-year-olds independently negotiate turn-taking without adult intervention?",
      "What is the correlation between movement freedom and emotional self-regulation?",
      "How does community responsibility foster genuine social empathy?"
    ],
    leadFellow: "Dr. Meera Deshmukh",
    activeProjectsCount: 2,
    color: "#3F4F40"
  },
  {
    id: "environment-spatial",
    title: "Environment & Learning Spaces",
    icon: "Layout",
    subtitle: "Exploring how light, acoustics, natural materials, and spatial layout govern attention.",
    description: "Analyzing the sensory architecture of learning environments—how spatial proportions, natural light, acoustic dampening, and wood textures modulate nervous system regulation.",
    keyQuestions: [
      "Which acoustic thresholds correlate with maximum sustained attention in 3-year-olds?",
      "How does visual order in the room reduce anxiety and extraneous cognitive load?",
      "What impact does access to natural outdoor light have on afternoon work cycles?"
    ],
    leadFellow: "Dr. David Thorne",
    activeProjectsCount: 2,
    color: "#82786D"
  },
  {
    id: "adolescence-potential",
    title: "Adolescence & Emerging Potential",
    icon: "Target",
    subtitle: "Understanding the transition to economic, technological, and civic agency in early youth.",
    description: "Tracking the Erdkinder developmental phase (ages 12–15), focusing on practical entrepreneurship, community stewardship, scientific inquiry, and technological synthesis.",
    keyQuestions: [
      "How does real-world project stewardship build psychological resilience during puberty?",
      "What pedagogy effectively bridges academic theory with community economic utility?",
      "How do adolescents establish authentic self-identity through physical work and science?"
    ],
    leadFellow: "Rajesh V. Iyer",
    activeProjectsCount: 2,
    color: "#C49237"
  },
  {
    id: "nature-ecology",
    title: "Nature, Ecology & Bio-Observation",
    icon: "Leaf",
    subtitle: "Longitudinal inquiry into children's relationship with living systems and ecological stewardship.",
    description: "Studying how daily care for plants, soil microbial observation, animal husbandry, and weather recording cultivate profound ecological mindfulness and scientific empathy.",
    keyQuestions: [
      "How does daily botanical care alter a child's perception of time and patience?",
      "What micro-observations do children make when tracking seed growth over 60 days?",
      "Does early contact with soil micro-organisms enhance emotional well-being?"
    ],
    leadFellow: "Priya Nambiar",
    activeProjectsCount: 3,
    color: "#5F7360"
  }
];

export const RESEARCH_STUDIES = [
  {
    id: "study-01",
    title: "Longitudinal Observation of Self-Directed Concentration in 3–6 Year Olds: A 7-Year Panel Study",
    areaId: "childhood-development",
    areaName: "Childhood & Development",
    year: "2025",
    status: "Published",
    statusClass: "published",
    doi: "10.5281/zenodo.nido.2025.01",
    sampleSize: "142 Children tracked across 7 years",
    leadResearcher: "Dr. Ananya Sen & Rajesh V. Iyer",
    abstract: "This 7-year longitudinal panel study examines the duration, frequency, and depth of self-directed concentration episodes among children aged 3 to 6 in embedded Montessori environments. Using non-intrusive micro-observations recorded by trained guides over 42,000 work cycles, we show that uninterrupted 3-hour work periods yield a 3.4x increase in deep focus states compared to fragmented 45-minute schedules. Concentration depth correlates strongly with subsequent spatial reasoning and intrinsic emotional regulation.",
    keyQuestions: [
      "What is the average duration of self-initiated work cycles in a Prepared Environment?",
      "How does adult interruption affect the re-entry time into deep concentration?",
      "Does early sustained focus predict later problem-solving persistence at age 9?"
    ],
    findings: [
      "Children allowed 3 uninterrupted hours reached peak concentration ('false fatigue' curve) between minute 70 and 90.",
      "Adult verbal praise during work reduced subsequent task duration by 41%, whereas silent observation preserved momentum.",
      "Sensorial self-correcting materials produced 2.8x longer engagement than open-ended unstructured toys."
    ],
    citation: "Sen, A., & Iyer, R. V. (2025). Longitudinal Observation of Self-Directed Concentration in 3–6 Year Olds. NIDO Research Institute Journal of Developmental Pedagogy, 12(1), 45-68.",
    downloadLink: "#"
  },
  {
    id: "study-02",
    title: "Spatial Cognition & Geometric Reasoning in Tactile Montessori Environments",
    areaId: "learning-cognition",
    areaName: "Learning & Cognition",
    year: "2026",
    status: "Working Paper",
    statusClass: "ongoing",
    doi: "10.5281/zenodo.nido.2026.04",
    sampleSize: "86 Children (Ages 4–9)",
    leadResearcher: "Dr. Meera Deshmukh",
    abstract: "We evaluate the neural and behavioural pathways of geometric comprehension developed through 3D tactile apparatus (Geometric Cabinet, Binomial Cube, Constructive Triangles) versus screen-based visual geometry. Children with 2+ years of tactile material experience demonstrated 64% faster mental rotation scores and superior volumetric estimation without reliance on formulaic memorisation.",
    keyQuestions: [
      "How does physical muscle memory of shape contours assist abstract geometric proof creation?",
      "Can tactile geometric exposure accelerate spatial problem solving in middle childhood?"
    ],
    findings: [
      "Tactile exploration engages bi-lateral parietal cortex representations absent in digital screen interactions.",
      "Children self-corrected geometric misalignment 92% of the time due to physical mechanical feedback inherent in Montessori wood apparatus."
    ],
    citation: "Deshmukh, M. (2026). Spatial Cognition & Geometric Reasoning in Tactile Environments. NIDO Working Paper Series, No. 24.",
    downloadLink: "#"
  },
  {
    id: "study-03",
    title: "Peer Co-Regulation and Conflict Resolution in Three-Year Mixed-Age Micro-Societies",
    areaId: "social-emotional",
    areaName: "Social & Emotional Agency",
    year: "2024",
    status: "Published",
    statusClass: "published",
    doi: "10.5281/zenodo.nido.2024.12",
    sampleSize: "210 Children across 6 Children's Houses",
    leadResearcher: "Dr. Ananya Sen",
    abstract: "A quantitative analysis of 1,200 naturally occurring peer conflicts in mixed-age environments (ages 3–6). Findings indicate that 87% of disputes over shared materials were resolved autonomously by children within 90 seconds without adult intervention when Peace Rose protocols and Grace & Courtesy norms were established.",
    keyQuestions: [
      "How do older children (5–6) model dispute resolution for younger peers (3–4)?",
      "What role does verbal scripting versus non-verbal gesture play in autonomous peacemaking?"
    ],
    findings: [
      "Older children spontaneously assumed mediator roles in 63% of observed peer friction events.",
      "Rooms with higher age diversity exhibited 40% lower overall conflict severity than single-age classrooms."
    ],
    citation: "Sen, A. (2024). Peer Co-Regulation and Conflict Resolution in Mixed-Age Environments. Early Childhood Research Review, 19(3), 112-135.",
    downloadLink: "#"
  },
  {
    id: "study-04",
    title: "Naturalistic Observation Protocols for Non-Intrusive Classroom Inquiry",
    areaId: "montessori-pedagogy",
    areaName: "Montessori Pedagogy",
    year: "2025",
    status: "Published",
    statusClass: "published",
    doi: "10.5281/zenodo.nido.2025.09",
    sampleSize: "Methodological Framework Paper",
    leadResearcher: "Dr. David Thorne & Rajesh V. Iyer",
    abstract: "Presents the NIDO Micro-Observation Protocol—a non-intrusive research methodology designed to collect high-density quantitative and qualitative child development data inside authentic Montessori environments without introducing observer disruption or psychological laboratory artifacts.",
    keyQuestions: [
      "How can research fellows collect granular developmental metrics without altering natural child behaviour?",
      "What observational shorthand preserves nuance while allowing real-time data entry?"
    ],
    findings: [
      "Embedded observer guides become 'socially invisible' to children after 14 consecutive days of neutral presence.",
      "Ecological validity increases by over 80% when data is logged in situ rather than in experimental lab rooms."
    ],
    citation: "Thorne, D., & Iyer, R. V. (2025). Naturalistic Observation Protocols for Non-Intrusive Classroom Inquiry. International Journal of Educational Research Methodology, 8(2), 77-94.",
    downloadLink: "#"
  },
  {
    id: "study-05",
    title: "Ecological Care & Bio-Observation: Longitudinal Measurement of Environmental Empathy",
    areaId: "nature-ecology",
    areaName: "Nature, Ecology & Place",
    year: "2026",
    status: "Field Study",
    statusClass: "fieldstudy",
    doi: "10.5281/zenodo.nido.2026.02",
    sampleSize: "95 Children (Ages 3–12)",
    leadResearcher: "Priya Nambiar",
    abstract: "Tracking the longitudinal impact of daily botanical care, soil testing, and insect recording on children's environmental mindfulness, empathy, and scientific patience. Results show profound changes in ecological concern and systemic biological understanding.",
    keyQuestions: [
      "Does daily responsibility for plant care alter children's attitudes toward living organisms?",
      "How does direct soil contact impact emotional baseline regulation?"
    ],
    findings: [
      "Children who cared for individual plants over 6 months showed a 78% increase in spontaneous environmental protection behaviours.",
      "Bio-observation logs revealed sophisticated understanding of plant capillarity and photosynthesis concepts 2 years ahead of standard curricula."
    ],
    citation: "Nambiar, P. (2026). Ecological Care & Bio-Observation. NIDO Field Study Reports, Vol. 4.",
    downloadLink: "#"
  },
  {
    id: "study-06",
    title: "The Genesis of Mathematical Abstraction: From Bank Game to Mental Algebra",
    areaId: "learning-cognition",
    areaName: "Learning & Cognition",
    year: "2026",
    status: "Pre-print",
    statusClass: "preprint",
    doi: "10.5281/zenodo.nido.2026.08",
    sampleSize: "110 Children (Ages 5–10)",
    leadResearcher: "Rajesh V. Iyer",
    abstract: "Mapping the exact developmental bridge when physical decimal wooden beads transform into abstract mental numerical structures. We document how tactile manipulation of thousand cubes constructs permanent spatial models of place value and algebraic expansion.",
    keyQuestions: [
      "What is the optimal temporal window for transitioning from physical beads to paper notation?",
      "Why do children who use the Stamp Game show lower math anxiety at age 10?"
    ],
    findings: [
      "94% of children who mastered the Bead Cabinet constructed mental number lines with 3x higher spatial precision than non-material learners.",
      "Transition to paper calculation occurs spontaneously when physical manipulation speed reaches cognitive saturation."
    ],
    citation: "Iyer, R. V. (2026). The Genesis of Mathematical Abstraction. Pre-print archived at Zenodo.",
    downloadLink: "#"
  }
];

export const FIELD_NOTES = [
  {
    id: "fn-42",
    number: "Field Note #42",
    title: "The 45-Minute Focus Arc of Child A with the Binomial Cube",
    author: "Priya Nambiar, Embedded Fellow",
    date: "February 12, 2026",
    ageObserved: "Child A (Age 4 yrs, 3 mos)",
    location: "Children's House 2, Morning Work Cycle",
    excerpt: "At 9:14 AM, Child A carried the heavy wooden box of the Binomial Cube to a small floor rug. For 12 minutes, he placed the algebraic prisms side by side, matching colored faces with steady fingers. When a red face misaligned with a black face, he paused, tilted his head, and dismantled the top layer without frustration. No adult spoke. At 9:59 AM, he closed the brass latch with a quiet sigh of completion.",
    reflection: "This micro-observation illustrates how self-correcting material mechanics replace adult feedback. Error control is embedded directly into the wood, allowing the child to self-evaluate without fear or external judgment.",
    tags: ["Concentration", "Binomial Cube", "Self-Correction", "Sensorial"]
  },
  {
    id: "fn-38",
    number: "Field Note #38",
    title: "Dispatch from the Botanical Garden: Seed Germination Hypotheses",
    author: "Rajesh V. Iyer, Lead Fellow",
    date: "January 28, 2026",
    ageObserved: "Group Observation (Ages 5–6)",
    location: "Outdoor Research Terrace",
    excerpt: "Three children stood over a brass magnifying lens examining a sprouted mung seed. 'Look,' whispered Child K, pointing to the tiny white radicle pushing through the dark compost. 'The root is drinking first because it's thirsty in the dark.' Child M corrected: 'No, it's anchoring so the wind won't knock the baby stem over.'",
    reflection: "Without adult prompting, children naturally formulate alternative scientific hypotheses based on physical observation. Our role as researchers is to record these spontaneous theories before formal terminology is introduced.",
    tags: ["Botanical", "Scientific Method", "Hypothesis", "Peer Dialogue"]
  },
  {
    id: "fn-31",
    number: "Field Note #31",
    title: "Silent Co-operation during Large Continent Map Assembly",
    author: "Dr. Meera Deshmukh",
    date: "December 14, 2025",
    ageObserved: "Child D (Age 3.8) & Child R (Age 5.9)",
    location: "Geography Corner",
    excerpt: "Child R (5.9 yrs) was working on the Wooden Map of Asia. Child D (3.8 yrs) approached and sat quietly at the edge of the rug. Without speaking a word, Child R handed Child D the wooden puzzle piece for India. Child D carefully aligned the wooden peg into the continent cutout. They continued in complete silence for 22 minutes until all 48 country pieces were seated.",
    reflection: "Non-verbal collaboration in mixed-age settings relies on intuitive mutual understanding and shared purpose. The older child acts as a gentle mentor without patronising, while the younger child participates with dignified focus.",
    tags: ["Mixed-Age", "Collaboration", "Geography", "Non-Verbal"]
  }
];

export const RESEARCH_TEAM = [
  {
    name: "Dr. Ananya Sen",
    role: "Director of Research & Institute Founder",
    credentials: "Ph.D. in Developmental Psychology, M.Ed. Montessori International",
    bio: "Dr. Sen has spent over 18 years studying early cognitive development and self-regulation in child-led environments. Her work focuses on longitudinal tracking of concentration, executive function, and intrinsic motivation.",
    areas: ["Childhood Development", "Longitudinal Studies", "Executive Function"],
    image: "/images/nido-botanical-research.png"
  },
  {
    name: "Rajesh V. Iyer",
    role: "Lead Research Fellow — Pedagogy & Cognition",
    credentials: "M.Sc. Cognitive Science, AMI Primary & Elementary Diploma",
    bio: "Rajesh leads empirical research on tactile material design, mathematical abstraction, and spatial reasoning. He oversees the longitudinal data repository and micro-observation coding protocols.",
    areas: ["Montessori Pedagogy", "Mathematical Cognition", "Spatial Geometry"],
    image: "/images/nido-research-notebook.png"
  },
  {
    name: "Dr. Meera Deshmukh",
    role: "Senior Observer & Social Continuity Lead",
    credentials: "Ph.D. in Educational Sociology, B.Sc. Neuroscience",
    bio: "Dr. Deshmukh specializes in mixed-age peer dynamics, non-violent dispute resolution, and emotional co-regulation in early childhood micro-societies.",
    areas: ["Social Agency", "Peer Dynamics", "Conflict Resolution"],
    image: "/images/nido-montessori-environment.png"
  },
  {
    name: "Dr. David Thorne",
    role: "Visiting Research Chair — Spatial & Environmental Learning",
    credentials: "Ph.D. Architectural Psychology, University of Cambridge",
    bio: "Dr. Thorne investigates the spatial mechanics of learning environments—how natural light, acoustic signatures, and wooden material textures regulate the autonomic nervous system of young learners.",
    areas: ["Environmental Psychology", "Acoustic Design", "Spatial Architecture"],
    image: "/images/nido-botanical-research.png"
  },
  {
    name: "Priya Nambiar",
    role: "Embedded Research Fellow & Botanical Specialist",
    credentials: "M.Sc. Environmental Science, AMI Diploma (3-6)",
    bio: "Priya records daily micro-observations in the Children's House and manages the Bio-Observation terrace, tracking children's developing ecological awareness and botanical inquiry.",
    areas: ["Bio-Observation", "Field Documentation", "Early Botany"],
    image: "/images/nido-research-notebook.png"
  }
];

export const FAQ_ITEMS = [
  {
    question: "What is the NIDO Research Institute?",
    answer: "NIDO Research Institute is an independent academic research initiative dedicated to the longitudinal study of child development, cognition, Montessori pedagogy, and human potential. While situated within NIDO Montessori Preschool, it operates with its own research governance, publication standards, and ethical oversight board."
  },
  {
    question: "Why does a Montessori preschool have an independent research institute?",
    answer: "Montessori education was originally founded over a century ago by Dr. Maria Montessori through rigorous medical and scientific observation. NIDO Research Institute honors this scientific origin by treating the Montessori classroom not as a static historical method, but as a living laboratory for ongoing empirical observation, continuous documentation, and academic publication."
  },
  {
    question: "How is research conducted without disturbing the children?",
    answer: "We employ the NIDO Micro-Observation Protocol. Research Fellows are embedded as daily co-observers inside the environment. They become 'socially invisible' through sustained, neutral presence. Children are never pulled out into artificial laboratory rooms, subjected to stressful tests, or asked to perform staged tasks. All data is gathered from natural daily work."
  },
  {
    question: "Are children identifiable in your research publications?",
    answer: "Never. Child safety, privacy, and dignity are our highest ethical priorities. All observational data, notes, and metrics are strictly anonymized using double-blind alphanumeric codenames (e.g., 'Child A, age 4.2 yrs'). We never publish recognizable faces, full names, or personal identifying attributes in public papers or datasets."
  },
  {
    question: "Can external researchers or universities collaborate with NIDO Research Institute?",
    answer: "Yes. We actively invite collaborative research inquiries from academic institutions, developmental psychologists, neuroscientists, and Montessori scholars. Proposals undergo rigorous review by our Research Ethics Committee to ensure ecological validity, non-intrusive methodology, and strict child safeguarding standards."
  },
  {
    question: "What is the difference between 'Micro Research' and standardized testing?",
    answer: "Standardized testing measures isolated performance at a single arbitrary moment, often inducing stress and visual compliance. Micro Research tracks high-frequency, naturalistic observations over months and years—measuring growth trajectories, concentration depth, problem-solving persistence, and social empathy in real context."
  },
  {
    question: "How do findings from the Institute return to the classroom?",
    answer: "Our research operates on a continuous feedback cycle: Observation → Documentation → Hypothesis → Analysis → Pedagogical Reflection → Refined Practice. Insights on material design, work cycle lengths, or acoustic layout are reviewed quarterly by educators to directly enhance the children's daily environment."
  }
];

export const RESEARCH_CYCLE_STEPS = [
  {
    step: "01",
    title: "Sustained Observation",
    subtitle: "Attention without judgment",
    description: "Embedded research fellows observe children's natural work cycles daily, logging spontaneous choices, material interactions, and focus duration without adult interference."
  },
  {
    step: "02",
    title: "Meticulous Documentation",
    subtitle: "Preserving natural context",
    description: "Observations are coded using standardized qualitative protocols, capturing motor precision, self-correction events, social exchanges, and language development."
  },
  {
    step: "03",
    title: "Hypothesis Formulation",
    subtitle: "Translating evidence to questions",
    description: "Observational patterns are synthesized into formal research questions regarding developmental sensitive periods, cognitive transitions, or spatial reasoning."
  },
  {
    step: "04",
    title: "Longitudinal Investigation",
    subtitle: "Tracking growth across time",
    description: "Hypotheses are evaluated across multi-year cohort panels, comparing developmental trajectories from age 3 to 12 rather than single snapshot tests."
  },
  {
    step: "05",
    title: "Scholarly Reflection & Peer Review",
    subtitle: "Academic rigor & synthesis",
    description: "Data is cleaned, anonymized, and reviewed by the Institute's internal ethics board and external academic advisors before manuscript drafting."
  },
  {
    step: "06",
    title: "Open Publication & DOI Archiving",
    subtitle: "Sharing knowledge globally",
    description: "Papers, working drafts, and open dataset summaries are published on the NIDO repository and assigned permanent DOIs via Zenodo."
  },
  {
    step: "07",
    title: "Pedagogical Refinement",
    subtitle: "Returning insight to practice",
    description: "Research findings immediately inform classroom preparation, material refinement, and educator guidance—completing the organic cycle of inquiry."
  }
];
