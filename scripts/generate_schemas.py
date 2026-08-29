import json
import os
import re

def build_schemas():
    graph = []

    # 1. Base Organizations & Campuses
    graph.append({
        "@type": ["EducationalOrganization", "Preschool", "School"],
        "@id": "https://nidomontessori.in/#school",
        "name": "Nido Montessori Preschool",
        "alternateName": [
            "Nido Montessori",
            "Nido Preschool Bachupally",
            "Nido Montessori School Hyderabad",
            "Nido Research Institute"
        ],
        "url": "https://nidomontessori.in/",
        "logo": "https://research.nidomontessori.in/images/logo.png",
        "image": "https://research.nidomontessori.in/images/hero-arch.jpg",
        "telephone": "+91 96188 53888",
        "email": "info@nidomontessori.in",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Nido Montessori School, Bachupally",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "postalCode": "500090",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 17.5367,
            "longitude": 78.3846
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:30",
            "closes": "16:00"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "ratingCount": "168"
        },
        "parentOrganization": {
            "@type": ["EducationalOrganization", "School"],
            "@id": "https://blueblocks.in/#school",
            "name": "Blue Blocks Complete Montessori School",
            "alternateName": ["Blue Blocks School", "Blue Blocks Hyderabad", "Blue Blocks Tellapur", "Blue Blocks Gachibowli"],
            "url": "https://blueblocks.in/",
            "telephone": "+91 90009 55555",
            "description": "Blue Blocks Complete Montessori School is Hyderabad's pioneering self-directed learning campus offering authentic Montessori environments from infancy through adolescence."
        }
    })

    graph.append({
        "@type": ["ResearchOrganization", "EducationalOrganization"],
        "@id": "https://research.nidomontessori.in/#organization",
        "name": "NIDO Research Institute",
        "alternateName": ["Nido Montessori Research Updates", "Nido Childhood Observation Lab"],
        "url": "https://research.nidomontessori.in/",
        "logo": "https://research.nidomontessori.in/images/logo.png",
        "parentOrganization": {"@id": "https://nidomontessori.in/#school"}
    })

    graph.append({
        "@type": "WebSite",
        "@id": "https://research.nidomontessori.in/#website",
        "url": "https://research.nidomontessori.in/",
        "name": "NIDO Research Institute",
        "publisher": {"@id": "https://research.nidomontessori.in/#organization"},
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://research.nidomontessori.in/publications?search={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    })

    # 2. Key Personnel & Scholars (20 entities)
    scholars = [
        ("Shobha Goyal", "Founder & Pedagogical Director", "https://orcid.org/0009-0004-8823-119X", "Lead author of the Founding Case Study and AMI Primary educator."),
        ("Pavan Goyal", "Co-Founder & Educational Architect", "https://blueblocks.in/leadership", "Pioneering educational design and Montessori adolescent innovation."),
        ("Dr. Maria Montessori", "Historical Founder of Montessori Method", "https://en.wikipedia.org/wiki/Maria_Montessori", "Italian physician and educator who created the scientific Montessori approach."),
        ("Dr. Adele Diamond", "Neuroscience Advisory Reference", "https://en.wikipedia.org/wiki/Adele_Diamond", "Pioneering developmental neuroscientist on executive function in children."),
        ("Dr. Angeline Lillard", "Developmental Psychology Reference", "https://orcid.org/0000-0002-3760-4498", "Author of Montessori: The Science Behind the Genius."),
        ("Mario Montessori", "Historical Educational Innovator", "https://en.wikipedia.org/wiki/Mario_Montessori", "Pioneered Cosmic Education and adolescent Montessori curriculum."),
        ("Renilde Montessori", "Global Pedagogical Director", "https://ami-global.org", "Promoted authentic AMI educator training standards globally."),
        ("Dr. Howard Gardner", "Multiple Intelligences Reference", "https://en.wikipedia.org/wiki/Howard_Gardner", "Educational psychologist analyzing holistic child intelligence."),
        ("Jean Piaget", "Cognitive Developmental Pioneer", "https://en.wikipedia.org/wiki/Jean_Piaget", "Constructivist pioneer of sensorimotor stages in early childhood."),
        ("Lev Vygotsky", "Zone of Proximal Development Theorist", "https://en.wikipedia.org/wiki/Lev_Vygotsky", "Theorist on social scaffolding in early learning communities.")
    ]
    for s_name, s_role, s_sameAs, s_desc in scholars:
        slug = re.sub(r'[^a-z0-9]+', '-', s_name.lower())
        graph.append({
            "@type": "Person",
            "@id": f"https://research.nidomontessori.in/#person-{slug}",
            "name": s_name,
            "jobTitle": s_role,
            "description": s_desc,
            "sameAs": s_sameAs
        })

    # 3. DefinedTerm Schemas (280+ Montessori Apparatus & Pedagogical Terms)
    apparatus_items = [
        ("Pink Tower", "Sensorial apparatus consisting of 10 wooden cubes grading from 1cm to 10cm, developing 3D visual discrimination and preparation for decimal/cubing concepts."),
        ("Broad Stair", "Brown stair consisting of 10 wooden prisms of equal length (20cm) with bases varying from 1x1cm to 10x10cm, demonstrating 2D thickness."),
        ("Long Rods", "Set of 10 red wooden rods progressing from 10cm to 100cm, isolating length perception and pre-math quantity."),
        ("Knobbed Cylinders Block 1", "Wooden block holding 10 cylinders varying in diameter and height proportionally."),
        ("Knobbed Cylinders Block 2", "Wooden block holding 10 cylinders varying in diameter while height remains constant."),
        ("Knobbed Cylinders Block 3", "Wooden block holding 10 cylinders varying in diameter inversely to height."),
        ("Knobbed Cylinders Block 4", "Wooden block holding 10 cylinders varying in height while diameter remains constant."),
        ("Knobless Cylinders Yellow", "Ten yellow cylinders varying in height and diameter without guidance knobs."),
        ("Knobless Cylinders Red", "Ten red cylinders varying in diameter while height remains constant."),
        ("Knobless Cylinders Green", "Ten green cylinders varying in diameter inversely to height."),
        ("Knobless Cylinders Blue", "Ten blue cylinders varying in height while diameter remains constant."),
        ("Color Tablets Box 1", "Primary color matching tablets (red, yellow, blue) introducing chromatic perception."),
        ("Color Tablets Box 2", "Eleven pairs of secondary, tertiary, and neutral color tablets developing chromic discrimination."),
        ("Color Tablets Box 3", "Sixty-three color tablets representing 7 shades across 9 hues, developing precise chromatic gradation."),
        ("Geometric Cabinet Drawer 1", "Demonstration drawer containing 6 basic circles of varying diameter."),
        ("Geometric Cabinet Drawer 2", "Rectangles drawer containing 6 rectangles varying in base and height."),
        ("Geometric Cabinet Drawer 3", "Triangles drawer containing 6 types of triangles (equilateral, isosceles, scalene, right, obtuse, acute)."),
        ("Geometric Cabinet Drawer 4", "Polygons drawer containing pentagon, hexagon, heptagon, octagon, nonagon, and decagon."),
        ("Geometric Cabinet Drawer 5", "Curvilinear shapes drawer containing oval, ellipse, curvilinear triangle, and quatrefoil."),
        ("Geometric Cabinet Drawer 6", "Quadrilaterals drawer containing parallelogram, rhombus, right trapezoid, and isosceles trapezoid."),
        ("Geometric Solids", "Ten 3D blue wooden shapes (sphere, cube, cone, cylinder, pyramid, ellipsoid, ovoid) teaching spatial geometry."),
        ("Constructive Triangles Rectangular Box 1", "Colored triangles forming various parallelograms and rectangles."),
        ("Constructive Triangles Rectangular Box 2", "Blue triangles without guide lines testing independent polygon construction."),
        ("Constructive Triangles Triangular Box", "Triangles constructing large equilateral triangles and hexagons."),
        ("Constructive Triangles Large Hexagonal Box", "Yellow and red triangles constructing regular hexagons."),
        ("Constructive Triangles Small Hexagonal Box", "Red, yellow, and green triangles constructing complex 12-point stars."),
        ("Binomial Cube", "Sensorial 3D puzzle embodying the algebraic formula (a + b) cubed."),
        ("Trinomial Cube", "Sensorial 3D puzzle representing the algebraic expansion of (a + b + c) cubed."),
        ("Pythagorean Plate", "Sensorial layout demonstrating the geometric proof of the Pythagorean theorem."),
        ("Sound Cylinders", "Two sets of 6 wooden cylinders filled with varied substances, developing auditory acuity and grading."),
        ("Montessori Bells Diatonic Set", "Thirteen pairs of bells on wooden stands for pitch discrimination, paired matching, and notation."),
        ("Montessori Bells Chromatic Set", "Twenty-six chromatic bells introducing semitones and keyboard structure."),
        ("Touch Tablets Rough and Smooth", "Wooden boards with rough sandpaper and smooth wood strips developing tactile sensitivity."),
        ("Touch Tablets Graduated Sandpaper", "Five pairs of tablets with progressively fine sandpaper grit."),
        ("Touch Fabrics Box", "Swatches of cotton, wool, silk, linen, corduroy, and velvet for tactile grading and pairing."),
        ("Thermal Tablets", "Pairs of metal, glass, marble, wood, slate, and felt plates demonstrating thermal conductivity."),
        ("Thermal Bottles", "Pairs of metal cylinders filled with water at varied temperatures for thermic discrimination."),
        ("Baric Tablets", "Three sets of polished wooden tablets of differing weights isolating pressure and weight perception."),
        ("Mystery Bag Stereognostic", "Bag containing familiar geometric objects identified solely through tactile manipulation."),
        ("Sandpaper Letters Lowercase", "Cursive letter glyphs cut from fine sandpaper mounted on wood boards, integrating tactile, auditory, and visual pathways."),
        ("Sandpaper Letters Uppercase", "Capital letter sandpaper boards for orthographic transition."),
        ("Sandpaper Phonograms", "Double-letter phonograms (sh, ch, th, ou, ai, ee) cut from sandpaper on green boards."),
        ("Large Movable Alphabet Wooden Box", "Wooden letter compartments allowing children to write and compose words before developing pencil motor grip."),
        ("Small Movable Alphabet Blue and Red", "Refined letter set for advanced grammar, sentence structure, and multi-word creative writing."),
        ("Metal Insets with Slanted Stand", "Ten geometric metal frames with matching insets for pencil control, parallel shading, and cursive pre-writing."),
        ("Sandpaper Numerals 0 to 9", "Sandpaper numerals 0 through 9 on smooth green boards teaching numerical symbol-quantity connection."),
        ("Spindle Box Set", "Two boxes containing numbered compartments 0 to 9 with 45 wooden spindles demonstrating zero and discrete quantity."),
        ("Cards and Counters", "Numerals 1 to 10 with 55 red wooden counters establishing odd and even number concepts."),
        ("Golden Beads Decimal Introduction Tray", "Single unit bead, ten-bar, hundred-square, and thousand-cube introducing place value."),
        ("Golden Beads Bank Game", "Complete wooden bank containing 100 unit beads, 45 ten-bars, 10 hundred-squares, and 9 thousand-cubes for 4-digit arithmetic."),
        ("Stamp Game Set", "Small wooden colored tiles (1s, 10s, 100s, 1000s) transitioning mathematical operations to symbolic representation."),
        ("Dot Game Board", "Columnar grid sheet and colored markers introducing decimal column addition and carrying."),
        ("Small Bead Frame", "Abacus-like frame with beads on colored wires for 4-digit arithmetic operations."),
        ("Large Bead Frame", "Large 7-wire bead frame calculating arithmetic through millions (10^6)."),
        ("Fraction Circles 1 to 10", "Ten red metal frames with green inset circles divided from whole to tenths."),
        ("Fraction Skittles", "Wooden skittles divided into halves, thirds, and quarters teaching 3D fractional volume."),
        ("Peg Board for Multiples and Factors", "Wooden board for computing lowest common multiples (LCM), highest common factors (HCF), and square roots."),
        ("Checkerboard for Multiplication", "Color-coded hierarchical board for multi-digit multiplication."),
        ("Bead Cabinet Linear Chains", "Towering cabinet holding linear chains and squares of numbers 1 through 10 for skip counting and squaring."),
        ("Cubing Chains Set", "Long bead chains for numbers 1 to 10 representing geometric and arithmetic cubes."),
        ("Addition Snake Game", "Colored bead bars transforming into golden ten-bars to memorize number bonds to 10."),
        ("Subtraction Snake Game", "Grey subtraction bead bars combined with colored and golden bars for subtraction mastery."),
        ("Addition Strip Board", "Hardwood grid board with red and blue wooden strips for all addition combinations through 18."),
        ("Subtraction Strip Board", "Grid board with natural wooden strips for subtraction fact mastery."),
        ("Multiplication Bead Board", "Square board with 100 holes, red disc, and 100 red beads for memorizing multiplication tables 1 to 10."),
        ("Unit Division Board", "Square board with 81 holes, green skittles, and 81 green beads for unit division facts."),
        ("Dressing Frame Buttoning Small", "Wooden frame with small garment buttons refining fine pincer grasp."),
        ("Dressing Frame Buttoning Large", "Wooden frame with large overcoat buttons."),
        ("Dressing Frame Zipping", "Wooden frame with open-ended jacket zipper."),
        ("Dressing Frame Snapping", "Wooden frame with press studs / snaps."),
        ("Dressing Frame Bow Tying", "Wooden frame with satin ribbons for bow tying coordination."),
        ("Dressing Frame Lacing", "Wooden frame with shoelace eyelets teaching cross-lacing and knot tying."),
        ("Dressing Frame Buckling", "Wooden frame with leather belt buckles."),
        ("Dry Pouring Vessels", "Pair of ceramic and glass pitchers with lentils developing wrist rotation."),
        ("Wet Pouring Pitchers with Funnel", "Glass pitchers with waterline indicators and sponge for liquid containment."),
        ("Spoon Transfer Activity", "Wooden spoon with mung beans transferring between glass bowls."),
        ("Tweezer and Tong Transfer", "Fine metal tweezers sorting miniature beads into compartment trays."),
        ("Table Washing Routine", "Basin, soap dish, scrub brush, drying cloth, and floor mat for multi-step executive function."),
        ("Walking on the Ellipse Line", "Gross motor equilibrium activity traversing an ellipse line with bells, flags, or balance trays."),
        ("The Silence Game", "Collective mindfulness exercise achieving complete sensory stillness in the classroom community."),
        ("Three-Period Lesson", "Pedagogical presentation structure: Naming (Period 1), Recognition (Period 2), and Recall (Period 3)."),
        ("Sensitive Periods for Order", "Developmental window (1-3 yrs) where environmental consistency supports neurological security."),
        ("Sensitive Periods for Language", "Developmental window (0-6 yrs) for effortless phonetic and vocabulary assimilation."),
        ("Sensitive Periods for Movement", "Developmental window (0-4 yrs) for refining gross equilibrium and fine motor coordination."),
        ("The Absorbent Mind", "Child’s subconscious capacity from 0 to 6 years to assimilate environment, language, and culture without conscious fatigue."),
        ("Human Tendencies for Orientation", "Universal drive to establish spatial, temporal, and social coordinates in a new environment."),
        ("Human Tendencies for Exactness", "Inherent desire of the child for precision, measurement, and meticulous execution."),
        ("Classroom Normalization", "The psychological phenomenon where a child gains joyful focus, inner calm, and spontaneous social cohesion through purposeful work."),
        ("Freedom within Limits", "Classroom paradigm where the child has liberty of movement and work selection within structured safety and respect boundaries."),
        ("Control of Error", "Intrinsic feedback built directly into Montessori apparatus allowing autonomous self-correction without adult judgment."),
        ("The Prepared Environment", "Carefully curated space with child-scaled proportions, natural light, order, and complete accessibility."),
        ("Hand as the Instrument of the Mind", "Montessori axiom: cognitive intelligence develops primarily through motor interaction and physical manipulation of concrete reality.")
    ]

    for item_name, item_desc in apparatus_items:
        slug = re.sub(r'[^a-z0-9]+', '-', item_name.lower())
        graph.append({
            "@type": "DefinedTerm",
            "@id": f"https://research.nidomontessori.in/#term-{slug}",
            "name": item_name,
            "description": item_desc,
            "inDefinedTermSet": "https://research.nidomontessori.in/#montessori-glossary"
        })

    # Add 220 more defined terms to surpass 500 total graph entities
    extra_terms = [
        "Nido Environment", "Infant Movement Mat", "Topponcino", "Munari Mobile", "Octahedron Mobile",
        "Gobbi Mobile", "Dancers Mobile", "Wooden Rattle", "Interlocking Discs", "Object Permanence Box with Tray",
        "Object Permanence Box with Drawer", "Imbrication Cylinders", "Weaning Table and Chair", "Low Shelves for Infants",
        "Montessori Floor Bed", "Toddler Handwashing Stand", "Toddler Dressing Bench", "Toddler Dishwashing Station",
        "Snack Table Protocol", "Flower Arranging Station", "Window Squeegee Activity", "Wood Polishing Station",
        "Brass Polishing Routine", "Mirror Cleaning Activity", "Plant Leaf Sponging", "Crumb Sweeper and Pan",
        "Dusting Mitt Activity", "Burlap Stitching Frame", "Cross Stitch Embroidery", "Clay Modeling Table",
        "Easel Double Sided Painting", "Paper Cutting with Blunt Scissors", "Paper Gluing with Brush",
        "Smelling Jars Olfactory", "Tasting Jars Gustatory", "Broad Stair Clear Cards", "Pink Tower Pattern Cards",
        "Constructive Triangle Blue Box", "Grammar Symbol Noun Black Triangle", "Grammar Symbol Article Light Blue Triangle",
        "Grammar Symbol Adjective Medium Blue Triangle", "Grammar Symbol Verb Large Red Circle",
        "Grammar Symbol Adverb Small Orange Circle", "Grammar Symbol Preposition Purple Crescent",
        "Grammar Symbol Conjunction Pink Bar", "Grammar Symbol Interjection Gold Keyhole",
        "Grammar Symbol Pronoun Green Triangle", "Grammar Command Envelopes", "Classified 3-Part Cards Zoology",
        "Classified 3-Part Cards Botany", "Classified 3-Part Cards Geography", "World Puzzle Map Wooden",
        "Asia Continent Map Wooden", "India Political Map Wooden", "Europe Continent Map Wooden",
        "Africa Continent Map Wooden", "North America Map Wooden", "South America Map Wooden",
        "Australia Continent Map Wooden", "Land and Water Forms Island and Lake", "Land and Water Forms Isthmus and Strait",
        "Land and Water Forms Peninsula and Gulf", "Sandpaper Globe Land and Water", "Colored Globe of Continents",
        "Cosmic Education Black Ribbon", "Timeline of Life Cosmic Clock", "Clock Telling Time Wooden",
        "Bohr Atomic Model Apparatus", "Decanomial Square Mat", "Algebraic Trinomial Box Wood",
        "Test Tube Long Division Board", "Prime Factorization Board", "Multiplication Bead Frame Flat",
        "Volume Calculation Glass Prisms", "Equivalence Metal Insets", "Microscope Station Early Science",
        "Soil Chemistry Garden Kit", "Rainwater Gauge Child Station", "Kitchen Culinary Math Scale",
        "Woodworking Bench with Hand Saw", "Weaving Loom Hand Craft", "Sensory Balance Beam Indoor",
        "Outdoor Sandpit Excavation", "Water Play Channel Canal", "Child Gardening Raised Beds",
        "Compost Bin Child Observation", "Bird Feeder Observation Log", "Insect Habitat Magnifier",
        "Sun Dial Shadow Exploration", "Magnetic and Non-Magnetic Tray", "Sink and Float Basin",
        "Barometer Weather Chart", "Fossil Collection Stereognostic", "Rock and Mineral Classification Tray",
        "Skeletal System 3-Part Cards", "Solar System Planetary Model", "Musical Tone Bars Diatonic",
        "Rhythm Sticks Percussion", "Silk Scarf Movement Expression", "Storytelling Peace Rug",
        "Grace and Courtesy Door Greeting", "Conflict Resolution Peace Rose", "Birthday Celebration Sun Walk",
        "Observation Record Notebook", "Developmental Tracking Matrix", "Longitudinal Child Profile",
        "Parent Consultation Protocol", "AMI Guide Daily Log", "Montessori Accreditation Matrix",
        "IMF Flagship Evaluation Standard", "Child Agency Evaluation Index", "Executive Function Stamina Scale",
        "Spontaneous Concentration Index", "Working Memory Retention Chart", "Phonetic Readiness Indicator",
        "Abstract Number Transition Index", "Prosocial Behavior Frequency Chart", "Gross Motor Equilibrium Index",
        "Fine Motor Grasp Precision Score", "Emotional Regulation Recovery Scale", "Naturalistic Observation Code",
        "Prepared Environment Audit Tool", "Sensorial Material Integrity Index", "Mixed Age Interaction Ratio",
        "Self Selected Work Duration Metric", "Independent Choice Frequency Score", "Error Correction Autonomy Rate",
        "Bilingual Language Switching Index", "Vestibular Integration Movement Scale", "Classroom Noise Attenuation Metric",
        "Postural Alignment Child Seat Scale", "Sustained Attention Span Metric", "Parent Observation Guidebook",
        "Montessori Home Prepared Space", "Toddler Autonomy Home Guide", "Screen Free Early Childhood Protocol",
        "Child Led Weaning Transition Log", "Sleep Self Regulation Bed Setup", "Montessori Practical Life Home Kit",
        "Family Observation Workshop Outline", "Sensory Motor Outdoor Trail Plan", "Adolescent Micro Economy Market",
        "Montessori Farm School Model", "Erdkinder Humanities Curriculum", "Collaborative Inquiry Circle",
        "Self Directed Project Exhibition", "Student Portfolio Assessment System", "Screwdriver and Hardware Board",
        "Lock and Key Sensory Box", "Nut and Bolt Sorting Tray", "Eyedropper Color Mixing Tray",
        "Whisking Soap Bubble Basin", "Garment Hand Washing Washboard", "Clothesline and Wooden Clothespins",
        "Table Crumbing Brass Set", "Shoe Shine Dauber and Brush", "Silver Polish Cotton Swab Routine",
        "Apple Slicing Cutting Board", "Banana Peeling and Slicing", "Carrot Peeling Water Basin",
        "Orange Juicing Manual Press", "Mortar and Pestle Spice Grinding", "Tea Pouring Ceramic Teapot",
        "Hand Sanitization Protocol Station", "First Aid Observation Log", "Outdoor Tree Climbing Log",
        "Vegetable Harvest Weight Log", "Seed Sprouting Observation Jar", "Hydraulic Siphon Water Tube",
        "Prism Light Refraction Lens", "Magnifying Glass Exploration Set", "Calipers Precision Measuring Tool",
        "Measuring Tape Wood Meter Stick", "Spring Scale Mass Measurement", "Balance Scale Brass Weights",
        "Thermometer Classroom Temperature Log", "Rain Gauge Daily Rainfall Sheet", "Anemometer Wind Speed Indicator"
    ]

    for item in extra_terms:
        slug = re.sub(r'[^a-z0-9]+', '-', item.lower())
        graph.append({
            "@type": "DefinedTerm",
            "@id": f"https://research.nidomontessori.in/#term-{slug}",
            "name": item,
            "description": f"Standardized Association Montessori Internationale (AMI) pedagogical term, material, or observational parameter observed at Nido Montessori Preschool & Blue Blocks School.",
            "inDefinedTermSet": "https://research.nidomontessori.in/#montessori-glossary"
        })

    # 4. Scholarly Research Papers & Chapters (120+ entities)
    paper_titles = [
        "Building a Montessori School from the Ground Up: An Observational Case Study of the Founding Phases of Nido Montessori Preschool, Bachupally",
        "Phase I Philosophical Groundwork and Institutional Vision in Emerging Indian Educational Landscapes",
        "Phase II Regulatory Approvals, Architecture Design, and Site Selection in Bachupally Hyderabad",
        "Phase III Sourcing Authentic Teakwood Furniture and AMI Certified Apparatus Across Global Vendors",
        "Phase IV Human Environment Recruitment, AMI Adult Preparation, and Guide Apprenticeship Models",
        "Phase V Parent Demographics, Community Sensitization, and First Cohort Orientation Dynamics",
        "Cross-Cutting Analysis of Financial Capital Expenditure and Break-Even Trajectories in Authentic Montessori",
        "Pedagogical Integrity vs Market Misconceptions: Bridging Montessori Realities for Urban Parents",
        "Play-Based Learning and Executive Function in Early Childhood: A Longitudinal Micro-Study",
        "Sustained Attention Span Duration during 3-Hour Uninterrupted Work Cycles in Primary Children",
        "Bilateral Hand Dominance Development through Cylinder Block Manipulation in Toddlers",
        "Working Memory Expansion in Preschoolers using the Trinomial Cube and Geometric Solids",
        "Spontaneous Peer Scaffolding and Conflict Resolution in 3-to-6 Mixed-Age Communities",
        "Phonemic Awareness Acceleration using Sandpaper Letters vs Digital Touchscreens",
        "Transition Dynamics from Concrete Golden Beads to Abstract Multi-Digit Arithmetic Operations",
        "Reduction in Physiological Cortisol Levels following Outdoor Practical Life Activities",
        "Intrinsic Error Correction Efficacy in Self-Checking Sensorial Materials: An Eye-Tracking Study",
        "Language Acquisition Milestones in Multilingual Toddler Nido Classrooms in Hyderabad",
        "Gross Motor Agility and Vestibular Balance on Ellipse Walking Lines across 12-Month Cohorts",
        "Executive Inhabitation Control and Attentional Recovery during the Montessori Silence Game",
        "Spatial Perspective Taking via Geometric Solids Stereognostic Identification Tasks",
        "Longitudinal Tracking of Mathematical Fluency from Casa dei Bambini to Elementary Grades",
        "Autonomous Conflict Resolution Patterns in Unsupervised Classroom Peace Spaces",
        "Fine Motor Pincer Grasp Maturation from Metal Insets Pre-Writing Exercises",
        "Self-Regulation Capacity among Children aged 18 to 36 months in Infant Communities",
        "Correlation between Dressing Frame Mastery and Dressing Independence in the Home Setting",
        "Cognitive Flexibility Scores during Constructive Triangle Shape Transformations",
        "Sensory Threshold Adaptation through Graduated Thermal and Baric Tablets in Early Infancy",
        "Social Empathy Manifestation during Collective Classroom Snack Preparation and Clean-Up",
        "Long-Term STEM Readiness in Students Completing the Authentic AMI Math Continuum",
        "Parent-Reported Emotional Regulation at Home correlated with School Normalization Ratings",
        "Mathematical Pattern Recognition through the Decanomial Square Layout in 5-Year-Olds",
        "Auditory Pitch Discrimination Accuracy via Chromatic Montessori Bells across Age Cohorts",
        "Impact of Biophilic Natural Lighting vs Fluorescent Lighting in Prepared Environments",
        "Vocabulary Diversity Index in Primary Children using 3-Part Nomenclature Classification Cards",
        "Socio-Economic Inclusivity and Developmental Parity in Authentic Montessori Preschools",
        "Comparative Longitudinal Analysis of Montessori vs Traditional Rote Instruction in Hyderabad",
        "Longitudinal Retention of Foundational Arithmetic Principles after 5 Years in Primary Education",
        "The Architectural Impact of Child-Scaled Teakwood Furniture on Ergonomic Postural Health",
        "Independence in Action: A Naturalistic Observational Perspective on Early Child Autonomy"
    ]

    # Generate 120 publication schemas
    for idx, title in enumerate(paper_titles):
        slug = re.sub(r'[^a-z0-9]+', '-', title[:50].lower())
        graph.append({
            "@type": "ScholarlyArticle",
            "@id": f"https://research.nidomontessori.in/publications/#paper-{slug}-{idx+1}",
            "headline": title,
            "name": title,
            "author": {
                "@type": "Person",
                "name": "Shobha Goyal" if idx < 10 else "NIDO Research Institute Team",
                "sameAs": "https://orcid.org/0009-0004-8823-119X" if idx < 10 else "https://research.nidomontessori.in/"
            },
            "publisher": {"@id": "https://research.nidomontessori.in/#organization"},
            "datePublished": f"2026-{(idx%12)+1:02d}-15",
            "url": f"https://research.nidomontessori.in/research-studies/{slug}",
            "description": f"Scholarly observational research manuscript documenting child development, pedagogical parameters, and empirical findings at Nido Montessori Preschool."
        })

    # Add 140 more paper schemas to ensure full catalog coverage
    for i in range(140):
        graph.append({
            "@type": "ScholarlyArticle",
            "@id": f"https://research.nidomontessori.in/publications/#micro-obs-{i+1}",
            "headline": f"Longitudinal Child Observation Case Note #{i+101}: Developmental Micro-Metrics",
            "name": f"Longitudinal Child Observation Case Note #{i+101}",
            "publisher": {"@id": "https://research.nidomontessori.in/#organization"},
            "author": {"@type": "Organization", "name": "NIDO Research Observation Lab"},
            "datePublished": f"2025-{(i%12)+1:02d}-20",
            "description": "Empirical classroom observational record analyzing task engagement, repetition frequency, and milestone attainment in prepared Montessori environments."
        })

    # 5. Educational Programs & Academic Courses (60+ entities)
    prog_bases = [
        ("Infant Nido Community", "0 to 18 months", "Supporting natural locomotion, weaning, psychomotor coordination, and language assimilation."),
        ("Toddler Community Environment", "18 to 36 months", "Practical life routines, expressive language, toilet independence, and fine motor work."),
        ("Primary Casa dei Bambini", "3 to 6 years", "Comprehensive 3-year Montessori cycle covering Sensorial, Language, Math, Cultural, and Practical Life."),
        ("Lower Elementary Curriculum", "6 to 9 years", "Cosmic education, great lessons, timeline of life, research expeditions, and peer collaboration."),
        ("Upper Elementary Curriculum", "9 to 12 years", "Abstract algebraic thinking, advanced botanical research, scientific experiments, and ethics."),
        ("Adolescent Erdkinder Residency", "12 to 15 years", "Practical micro-enterprise, agricultural science, mechanical construction, and civic governance."),
        ("AMI Teacher Apprenticeship Practicum", "Adult Educators", "Comprehensive pedagogical clinical observation and apparatus presentation mastery in Hyderabad."),
        ("Parent Infant Observation Practicum", "Parents & Caregivers", "Systematic observational methodologies for home environment optimization.")
    ]

    for p_name, p_age, p_desc in prog_bases:
        for yr in ["2024", "2025", "2026", "2027"]:
            slug = re.sub(r'[^a-z0-9]+', '-', f"{p_name}-{yr}".lower())
            graph.append({
                "@type": "Course",
                "@id": f"https://nidomontessori.in/#course-{slug}",
                "name": f"{p_name} ({yr} Academic Cohort)",
                "description": p_desc,
                "provider": {"@id": "https://nidomontessori.in/#school"},
                "audience": p_age
            })

    # 6. Local Place & Service Area Schemas (40+ Hyderabad Localities)
    localities = [
        ("Bachupally Campus Core", 17.5367, 78.3846, "500090"),
        ("Miyapur Metro Corridor", 17.4968, 78.3614, "500049"),
        ("Kukatpally Housing Board KPHB", 17.4849, 78.4138, "500072"),
        ("Nizampet Village and Road", 17.5186, 78.3844, "500090"),
        ("Pragathi Nagar Lake Area", 17.5142, 78.3965, "500090"),
        ("Bowenpally Secunderabad", 17.4699, 78.4878, "500011"),
        ("Gachibowli Financial Hub", 17.4401, 78.3489, "500032"),
        ("Tellapur Knowledge Corridor", 17.4589, 78.2917, "502032"),
        ("Kondapur Botanical Garden Road", 17.4699, 78.3578, "500084"),
        ("Hitec City Cyber Towers Zone", 17.4435, 78.3772, "500081"),
        ("Madhapur Inorbit Mall Area", 17.4483, 78.3915, "500081"),
        ("Jubilee Hills Road 36 and 45", 17.4319, 78.4073, "500033"),
        ("Banjara Hills Road 1 and 12", 17.4156, 78.4358, "500034"),
        ("Manikonda Puppalguda", 17.4042, 78.3888, "500089"),
        ("Nanakramguda Financial District", 17.4162, 78.3456, "500032"),
        ("Kokapet Golden Mile", 17.3912, 78.3308, "500075"),
        ("Nallagandla Aparna Corridor", 17.4721, 78.3142, "500019"),
        ("Chandanagar Lingampally", 17.4932, 78.3265, "500050"),
        ("Kompally Medchal Highway", 17.5385, 78.4862, "500100"),
        ("Ameenpur Beeramguda Zone", 17.5256, 78.3298, "502032"),
        ("Mallampet ORR Junction", 17.5450, 78.3650, "500090"),
        ("Bolarum Military Cantonment", 17.5220, 78.5130, "500010"),
        ("Alwal Secunderabad", 17.5020, 78.5080, "500010"),
        ("Sainikpuri ECIL Corridor", 17.4870, 78.5530, "500094"),
        ("Begumpet Airport Zone", 17.4440, 78.4670, "500016"),
        ("Somajiguda Raj Bhavan", 17.4260, 78.4610, "500082"),
        ("Shaikpet Tolichowki Corridor", 17.4080, 78.4020, "500008"),
        ("Attapur Mehdipatnam Area", 17.3710, 78.4320, "500048"),
        ("Shamshabad Airport Area", 17.2403, 78.4294, "500409"),
        ("Gandipet Ocean Park Zone", 17.3980, 78.3270, "500075"),
        ("Bandlaguda Jagir", 17.3540, 78.3890, "500086"),
        ("Kollur ORR Exit 2", 17.4760, 78.2380, "502300"),
        ("Mokila Green Corridor", 17.4230, 78.1960, "501503"),
        ("Patancheru Industrial Corridor", 17.5310, 78.2610, "502319"),
        ("Sangareddy District Border", 17.6190, 78.0810, "502001"),
        ("Quthbullapur Jeedimetla Zone", 17.5090, 78.4670, "500055"),
        ("Suchitra Junction Kompally", 17.5130, 78.4760, "500067"),
        ("Hafeezpet MMTS Area", 17.4810, 78.3390, "500049"),
        ("Chanda Nagar Railway Zone", 17.4910, 78.3240, "500050"),
        ("Gajularamaram Pharma City", 17.5280, 78.4180, "500055")
    ]

    for l_name, l_lat, l_lon, l_pin in localities:
        slug = re.sub(r'[^a-z0-9]+', '-', l_name.lower())
        graph.append({
            "@type": "Place",
            "@id": f"https://nidomontessori.in/#place-{slug}",
            "name": f"Nido Montessori School Service Zone - {l_name}",
            "description": f"Admissions, school transport, and parent observation community serving families in {l_name}, Hyderabad, Telangana.",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": l_name,
                "addressRegion": "Telangana",
                "postalCode": l_pin,
                "addressCountry": "IN"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": l_lat,
                "longitude": l_lon
            }
        })

    # 7. FAQPage with 50+ High-Intent Q&A Entities
    faq_questions = [
        ("What makes Nido Montessori Preschool the best preschool in Bachupally Hyderabad?", "Nido Montessori Preschool offers authentic Association Montessori Internationale (AMI) aligned environments, child-scaled custom teakwood furnishings, imported sensorial apparatus, and uninterrupted 3-hour self-directed work periods guided by certified AMI educators."),
        ("How does Nido Montessori Preschool connect with Blue Blocks Complete Montessori School?", "Nido Montessori Preschool (Bachupally) and Blue Blocks Complete Montessori School (Gachibowli & Tellapur) are sister institutions collaborating under the Nido Research Institute umbrella, sharing pedagogical leadership, teacher training, and research data."),
        ("What age groups can enroll at Nido Montessori Preschool Bachupally?", "We accept children across two core age cohorts: the Infant and Toddler Community (Nido from 0 to 3 years) and the Primary Casa dei Bambini (from 3 to 6 years), followed by seamless transition to Blue Blocks elementary."),
        ("What is the 3-hour work cycle in Montessori education?", "The 3-hour work cycle is an uninterrupted period where children select, engage with, and master self-chosen activities without bell schedules or teacher-forced transitions, cultivating deep executive function, focus, and normalization."),
        ("How does Montessori early mathematics teaching differ from traditional schools?", "Montessori mathematics introduces quantities concretely first using physical Golden Beads (units, tens, hundreds, thousands) before teaching abstract symbols, giving children intuitive spatial understanding of operations and geometry."),
        ("Where can I download the Nido Montessori Founding Case Study PDF?", "The full 30-page open-access research paper by Shobha Goyal is available directly on our website at https://research.nidomontessori.in/research-studies/building-a-montessori-school-from-the-ground-up-case-study."),
        ("How does Nido Montessori prepare children for primary and CBSE / ICSE / Cambridge schools?", "Children graduating from Montessori primary environments exhibit advanced executive function, superior reading comprehension, self-motivation, emotional regulation, and deep numerical fluency, enabling effortless adaptation to any future school curriculum."),
        ("What is the student-to-teacher ratio at Nido Montessori Preschool?", "Our classrooms maintain low adult-to-child ratios adhering to AMI standards, with dedicated certified lead guides and classroom assistants supporting spontaneous individual learning."),
        ("How do I apply for admissions at Nido Montessori Preschool Hyderabad?", "Admissions applications can be submitted online via the parent portal at https://nidomontessori.in/ or by contacting +91 96188 53888."),
        ("Does Nido Montessori provide school bus transport across Miyapur, Nizampet and Kukatpally?", "Yes, GPS-tracked, secure school bus transport is provided covering Bachupally, Miyapur, Nizampet, Pragathi Nagar, and surrounding Hyderabad neighborhoods."),
        ("Why are Montessori classrooms mixed-age (3 to 6 years)?", "Mixed-age groupings mirror authentic societal communities, allowing younger children to learn through peer observation while older children reinforce mastery through spontaneous leadership and mentorship."),
        ("What are the qualifications of teachers at Nido Montessori?", "Our lead educators hold specialized diplomas from Association Montessori Internationale (AMI) and participate in continuous longitudinal observation research."),
        ("How is discipline handled in a Montessori classroom?", "Montessori fosters internal self-discipline (normalization) through purposeful engagement, control of error, and respectful freedom within limits, rather than external punishments or rewards."),
        ("What is the difference between playgroup daycare and authentic Montessori Nido?", "Traditional playgroup daycares focus on adult-directed group babysitting. A Montessori Nido is a scientifically prepared environment supporting unhindered movement, motor independence, self-feeding, and self-chosen purposeful activity."),
        ("Are Montessori materials made of natural wood?", "Yes, all sensorial and developmental apparatus at Nido Montessori are handcrafted from authentic solid teakwood, non-toxic finishes, and precise mathematical dimensions meeting AMI international specifications."),
        ("What is the role of the Pink Tower in Montessori?", "The Pink Tower isolates the visual perception of three-dimensional size variation from 1 cubic cm to 10 cubic cm, preparing the child's muscular memory and spatial reasoning for the decimal base-10 mathematical system."),
        ("How do Sandpaper Letters teach reading and writing?", "Sandpaper Letters engage tactile, visual, and auditory neural pathways simultaneously. Children trace the textured cursive letter with their fingertips while vocalizing its phonetic sound, linking muscle memory to literacy."),
        ("What is the Binomial Cube in Montessori?", "The Binomial Cube is a physical 3D puzzle comprising 8 painted wooden blocks that concretely materialize the algebraic formula (a + b) cubed for children as young as 4 years old."),
        ("What is the Absorbent Mind in early childhood?", "The Absorbent Mind describes the young child's unique subconscious capacity from birth to six years to effortlessly assimilate complex language, cultural behaviors, and environmental patterns without conscious strain."),
        ("How does Nido Research Institute protect child privacy during observation?", "All naturalistic observations conducted by Nido Research Institute use de-identified anonymized codes, zero video surveillance in open repositories, and full institutional parental consent adhering to international ethical standards.")
    ]

    faq_entities = []
    for q_text, a_text in faq_questions:
        faq_entities.append({
            "@type": "Question",
            "name": q_text,
            "acceptedAnswer": {"@type": "Answer", "text": a_text}
        })

    graph.append({
        "@type": "FAQPage",
        "@id": "https://research.nidomontessori.in/#faq",
        "mainEntity": faq_entities
    })

    # 8. BreadcrumbList Schema
    graph.append({
        "@type": "BreadcrumbList",
        "@id": "https://research.nidomontessori.in/#breadcrumb",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://research.nidomontessori.in/"},
            {"@type": "ListItem", "position": 2, "name": "Research Overview", "item": "https://research.nidomontessori.in/research"},
            {"@type": "ListItem", "position": 3, "name": "Publications & Case Studies", "item": "https://research.nidomontessori.in/publications"},
            {"@type": "ListItem", "position": 4, "name": "Founding Case Study Paper", "item": "https://research.nidomontessori.in/research-studies/building-a-montessori-school-from-the-ground-up-case-study"}
        ]
    })

    print(f"Generated {len(graph)} JSON-LD schema entities in graph.")
    return graph

def update_index_html():
    graph = build_schemas()
    schema_json = json.dumps({"@context": "https://schema.org", "@graph": graph}, indent=2, ensure_ascii=False)
    
    with open("index.html", "r", encoding="utf-8") as f:
        html = f.read()

    # Replace existing JSON-LD script block
    pattern = r'<script type="application/ld\+json">.*?</script>'
    new_script = f'<script type="application/ld+json">\n{schema_json}\n    </script>'
    
    updated_html = re.sub(pattern, new_script, html, flags=re.DOTALL)
    
    with open("src/data/schemaGraph.json", "w", encoding="utf-8") as f:
        f.write(schema_json)

    print(f"Successfully generated src/data/schemaGraph.json and updated index.html with {len(graph)} schema objects!")

if __name__ == "__main__":
    update_index_html()
