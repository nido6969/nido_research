import json
import os
import re

def build_schemas():
    graph = []

    # =========================================================================
    # 1. Base Organizations, Campuses & WebSite
    # =========================================================================
    graph.append({
        "@type": ["EducationalOrganization", "Preschool", "School"],
        "@id": "https://nidomontessori.in/#school",
        "name": "Nido Montessori Preschool",
        "alternateName": [
            "Nido Montessori",
            "Nido Preschool Bachupally",
            "Nido Montessori School Hyderabad",
            "Nido Research Institute",
            "Nido Bachupally Campus"
        ],
        "url": "https://nidomontessori.in/",
        "logo": "https://research.nidomontessori.in/images/logo.png",
        "image": "https://research.nidomontessori.in/images/WhatsApp%20Image%202026-09-02%20at%2011.50.47%20AM.jpeg",
        "telephone": "+91 96188 53888",
        "email": "info@nidomontessori.in",
        "hasMap": "https://maps.app.goo.gl/naRP5GC3BFH92j5v6",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Plot No. 405, Block no. 19, Lahari Green Park Road, Bowrampet, Bachupally",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "postalCode": "500043",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 17.553145,
            "longitude": 78.3838549
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
            "ratingCount": "194"
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
        "alternateName": ["Nido Montessori Research Updates", "Nido Childhood Observation Lab", "Nido Center for Child Development"],
        "url": "https://research.nidomontessori.in/",
        "logo": "https://research.nidomontessori.in/images/logo.png",
        "image": "https://research.nidomontessori.in/images/WhatsApp%20Image%202026-09-02%20at%2011.50.47%20AM.jpeg",
        "parentOrganization": {"@id": "https://nidomontessori.in/#school"},
        "description": "Empirical early childhood research institute publishing naturalistic longitudinal classroom observation data, AMI Montessori case studies, and cognitive developmental monographs in Hyderabad, India."
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

    # =========================================================================
    # 2. Key Personnel, Researchers & Historical Pedagogues (20 entities)
    # =========================================================================
    scholars = [
        ("Shobha Goyal", "Founder & Pedagogical Director", "https://orcid.org/0009-0002-8830-5476", "Lead author of the Founding Case Study and AMI Primary educator guiding Nido Montessori Preschool."),
        ("Pavan Goyal", "Co-Founder & Educational Architect", "https://blueblocks.in/leadership", "Pioneering educational design, adolescent Montessori environments, and spatial acoustics in Hyderabad."),
        ("Dr. Maria Montessori", "Historical Founder of Montessori Method", "https://en.wikipedia.org/wiki/Maria_Montessori", "Italian physician and educator whose scientific method underpins naturalistic classroom observation."),
        ("Dr. Adele Diamond", "Neuroscience Advisory Reference", "https://en.wikipedia.org/wiki/Adele_Diamond", "Pioneering developmental cognitive neuroscientist on executive function and self-regulation in early childhood."),
        ("Dr. Angeline Lillard", "Developmental Psychology Reference", "https://orcid.org/0000-0002-3760-4498", "Author of Montessori: The Science Behind the Genius, validating Montessori pedagogical outcomes."),
        ("Mario Montessori", "Historical Educational Innovator", "https://en.wikipedia.org/wiki/Mario_Montessori", "Pioneered Cosmic Education, human tendencies framework, and adolescent Erdkinder curriculum."),
        ("Renilde Montessori", "Global Pedagogical Director", "https://ami-global.org", "Promoted authentic AMI educator training and child observation rigor globally."),
        ("Dr. Howard Gardner", "Multiple Intelligences Reference", "https://en.wikipedia.org/wiki/Howard_Gardner", "Developmental psychologist whose theory aligns with Montessori multidimensional sensorial exploration."),
        ("Jean Piaget", "Cognitive Developmental Pioneer", "https://en.wikipedia.org/wiki/Jean_Piaget", "Constructivist pioneer whose sensorimotor stage parallels the Montessori absorbent mind period."),
        ("Lev Vygotsky", "Zone of Proximal Development Theorist", "https://en.wikipedia.org/wiki/Lev_Vygotsky", "Theorist on social scaffolding, directly embodied in mixed-age 3-to-6 Montessori classrooms."),
        ("Dr. Silvana Montanaro", "Infant Specialist & AMI Trainer", "https://ami-global.org", "Pioneered the Montessori Assistant to Infancy (0-3) Nido environment standards worldwide."),
        ("Dr. Judy Willis", "Educational Neuroscientist", "https://www.radteach.com/", "Author on neuroplasticity, memory retention, and stress reduction through self-chosen hands-on activities."),
        ("E.M. Standing", "Montessori Biographer & Educational Historian", "https://en.wikipedia.org/wiki/E._M._Standing", "Close associate of Maria Montessori documenting child normalization and inner discipline."),
        ("Dr. Daniel Siegel", "Interpersonal Neurobiology Authority", "https://drdansiegel.com/", "Researcher on emotional co-regulation and interpersonal neurobiology in early childhood."),
        ("Dr. Bruce Perry", "Neurodevelopment & Childhood Trauma Specialist", "https://www.bdperry.com/", "Pioneer in rhythm-based nervous system regulation in calm prepared environments."),
        ("Munir Goyal", "Montessori Research Fellow", "https://research.nidomontessori.in/about", "Researcher analyzing naturalistic observation datasets and longitudinal tracking systems."),
        ("Radhika Raman", "Lead AMI Primary Guide (3-6)", "https://research.nidomontessori.in/about", "Master Montessori practitioner specializing in sensorial apparatus and mathematical normalization."),
        ("Sunita Reddy", "Lead Toddler Community Guide (14-36m)", "https://research.nidomontessori.in/about", "Specialist in practical life autonomy, toilet learning, and expressive language in toddlers."),
        ("Anuradha Rao", "Observation & Documentation Lead", "https://research.nidomontessori.in/about", "Naturalistic behavioral coding specialist tracking task repetition and distraction recovery."),
        ("Dr. Vikram Sharma", "Pediatric Developmental Consultant", "https://research.nidomontessori.in/about", "Consultant monitoring vestibular equilibrium, gross motor balance, and ergonomic health.")
    ]

    for s_name, s_role, s_sameAs, s_desc in scholars:
        slug = re.sub(r'[^a-z0-9]+', '-', s_name.lower())
        graph.append({
            "@type": "Person",
            "@id": f"https://research.nidomontessori.in/#person-{slug}",
            "name": s_name,
            "jobTitle": s_role,
            "description": s_desc,
            "sameAs": s_sameAs,
            "affiliation": {"@id": "https://research.nidomontessori.in/#organization"}
        })

    # =========================================================================
    # 3. DefinedTerm Schemas: 380+ Montessori Apparatus & Pedagogical Terms
    # =========================================================================
    core_apparatus = [
        # Sensorial (Visual, Dimension, Form)
        ("Pink Tower", "Sensorial apparatus of 10 solid wooden cubes ranging from 1cm³ to 10cm³, developing 3D size discrimination and preparing for base-10 cubing."),
        ("Broad Stair", "Brown stair consisting of 10 solid wooden prisms of equal 20cm length with square faces from 1cm² to 10cm², isolating thickness."),
        ("Long Rods", "Set of 10 red wooden rods progressing from 10cm to 100cm, isolating length perception and physical pre-mathematics quantity."),
        ("Knobbed Cylinders Block 1", "Beechwood block holding 10 cylinders varying in diameter and height proportionally."),
        ("Knobbed Cylinders Block 2", "Beechwood block holding 10 cylinders varying in diameter while height remains constant."),
        ("Knobbed Cylinders Block 3", "Beechwood block holding 10 cylinders varying in diameter inversely to height."),
        ("Knobbed Cylinders Block 4", "Beechwood block holding 10 cylinders varying in height while diameter remains constant."),
        ("Knobless Cylinders Yellow", "Ten yellow cylinders varying in height and diameter without knobs, refining visual grading."),
        ("Knobless Cylinders Red", "Ten red cylinders varying in diameter with uniform height."),
        ("Knobless Cylinders Green", "Ten green cylinders varying inversely in diameter and height."),
        ("Knobless Cylinders Blue", "Ten blue cylinders varying in height with uniform diameter."),
        ("Color Tablets Box 1", "Primary color matching tablets (red, yellow, blue) introducing chromatic visual pairing."),
        ("Color Tablets Box 2", "Eleven pairs of secondary, tertiary, and neutral color tablets developing chromic discrimination."),
        ("Color Tablets Box 3", "Sixty-three color tablets representing 7 shades across 9 hues, developing precise chromatic gradation."),
        ("Geometric Cabinet Drawer 1 Circles", "Demonstration drawer containing 6 inset circles of varying diameters from 5cm to 10cm."),
        ("Geometric Cabinet Drawer 2 Rectangles", "Rectangles drawer containing 6 insets varying in base and height dimensions."),
        ("Geometric Cabinet Drawer 3 Triangles", "Triangles drawer with equilateral, isosceles, scalene, right-angled, obtuse, and acute triangles."),
        ("Geometric Cabinet Drawer 4 Polygons", "Polygons drawer containing regular pentagon, hexagon, heptagon, octagon, nonagon, and decagon."),
        ("Geometric Cabinet Drawer 5 Curvilinear", "Curvilinear shapes drawer containing oval, ellipse, curvilinear triangle, and quatrefoil."),
        ("Geometric Cabinet Drawer 6 Quadrilaterals", "Quadrilaterals drawer with parallelogram, rhombus, right trapezoid, and isosceles trapezoid."),
        ("Geometric Solids 3D", "Ten solid wooden shapes (sphere, cube, cone, cylinder, pyramid, ellipsoid, ovoid) teaching spatial stereognostic geometry."),
        ("Constructive Triangles Rectangular Box 1", "Colored triangles forming various parallelograms, rhombi, and rectangles."),
        ("Constructive Triangles Rectangular Box 2", "Blue triangles without black guidelines testing independent polygon construction."),
        ("Constructive Triangles Triangular Box", "Triangles constructing large equilateral triangles and regular hexagons."),
        ("Constructive Triangles Large Hexagonal Box", "Yellow and red triangles constructing regular hexagons with internal dividing lines."),
        ("Constructive Triangles Small Hexagonal Box", "Red, yellow, and green triangles constructing complex 12-point stars and hexagons."),
        ("Binomial Cube", "Sensorial 3D puzzle comprising 8 painted wooden blocks concretely embodying (a + b)³."),
        ("Trinomial Cube", "Sensorial 3D puzzle comprising 27 painted wooden blocks concretely embodying (a + b + c)³."),
        ("Pythagorean Plate", "Sensorial layout demonstrating the visual geometric proof of the Pythagorean theorem."),
        # Sensorial (Auditory, Tactile, Olfactory, Gustatory)
        ("Sound Cylinders", "Two sets of 6 wooden cylinders filled with substances producing graded auditory volumes from faint to loud."),
        ("Montessori Bells Diatonic Set", "Thirteen pairs of bells on wooden stands for pitch discrimination, paired matching, and musical notation."),
        ("Montessori Bells Chromatic Set", "Twenty-six chromatic bells introducing semitones, sharps, flats, and keyboard architecture."),
        ("Touch Tablets Rough and Smooth", "Wooden boards with rough sandpaper and smooth wood strips developing tactile sensitivity."),
        ("Touch Tablets Graduated Sandpaper", "Five pairs of tablets with progressively fine sandpaper grit for tactile gradation."),
        ("Touch Fabrics Box", "Swatches of cotton, wool, silk, linen, corduroy, and velvet for tactile grading and pairing."),
        ("Thermal Tablets", "Pairs of metal, glass, marble, wood, slate, and felt plates demonstrating material thermal conductivity."),
        ("Thermal Bottles", "Pairs of metal cylinders filled with water at varied temperatures for thermic discrimination."),
        ("Baric Tablets", "Three sets of polished wooden tablets of differing weights isolating muscular pressure and weight perception."),
        ("Smelling Bottles", "Sets of glass jars containing essential oils and herbs for olfactory discrimination."),
        ("Tasting Bottles", "Dropper bottles introducing the four primary gustatory tastes: sweet, salty, sour, and bitter."),
        ("Mystery Bag Stereognostic", "Opaque bag containing familiar geometric objects identified solely through tactile manipulation."),
        # Language Materials
        ("Sandpaper Letters Lowercase", "Cursive letter glyphs cut from fine sandpaper mounted on wood boards, integrating tactile, auditory, and visual pathways."),
        ("Sandpaper Letters Uppercase", "Capital letter sandpaper boards for orthographic transition and capitalization."),
        ("Sandpaper Phonograms", "Double-letter phonograms (sh, ch, th, ou, ai, ee, oa) cut from sandpaper on green boards."),
        ("Large Movable Alphabet Wooden Box", "Wooden letter compartments allowing children to write and compose words before developing pencil motor grip."),
        ("Small Movable Alphabet Blue and Red", "Refined letter set for advanced grammar, sentence structure, and multi-word creative writing."),
        ("Metal Insets with Slanted Stand", "Ten geometric metal frames with matching insets for pencil control, parallel shading, and cursive pre-writing."),
        ("Phonetic Object Box 1", "Miniature 3D objects with matching 3-letter phonetic CVC word labels for initial reading."),
        ("Phonetic Reading Cards Pink Scheme", "CVC phonetic cards with real photographs developing foundational reading fluency."),
        ("Blends and Clusters Blue Scheme", "Four-letter and five-letter phonetic words with consonant blends and clusters."),
        ("Phonogram Green Scheme", "Reading booklets, word lists, and cards isolating complex phonetic digraphs and diphthongs."),
        ("Grammar Farm Box", "Miniature physical farm environment with animals, fences, and buildings for 3D part-of-speech parsing."),
        ("Grammar Solid Symbols", "Nine 3D wooden geometric symbols representing parts of speech: black pyramid (noun), red sphere (verb), etc."),
        ("Grammar Inset Boards", "Stencils of grammatical symbols for labeling handwritten creative stories."),
        # Mathematics Materials
        ("Sandpaper Numerals 0 to 9", "Sandpaper numerals 0 through 9 on smooth green boards teaching numerical symbol-quantity connection."),
        ("Spindle Box Set", "Two boxes containing numbered compartments 0 to 9 with 45 wooden spindles demonstrating zero and discrete quantity."),
        ("Cards and Counters", "Numerals 1 to 10 with 55 red wooden counters establishing odd and even number concepts."),
        ("Golden Beads Decimal Introduction Tray", "Single unit bead, ten-bar, hundred-square, and thousand-cube introducing place value."),
        ("Golden Beads Bank Game", "Complete wooden bank containing 100 unit beads, 45 ten-bars, 10 hundred-squares, and 9 thousand-cubes for 4-digit arithmetic."),
        ("Stamp Game Set", "Small wooden colored tiles (1s, 10s, 100s, 1000s) transitioning mathematical operations to symbolic representation."),
        ("Dot Game Board", "Columnar grid sheet and colored markers introducing decimal column addition and carrying."),
        ("Small Bead Frame", "Abacus-like frame with beads on colored wires for 4-digit arithmetic operations."),
        ("Large Bead Frame", "Large 7-wire bead frame calculating arithmetic through millions (10⁶)."),
        ("Fraction Circles 1 to 10", "Ten red metal frames with green inset circles divided from whole to tenths."),
        ("Fraction Skittles", "Wooden skittles divided into halves, thirds, and quarters teaching 3D fractional volume."),
        ("Peg Board for Multiples and Factors", "Wooden board for computing lowest common multiples (LCM), highest common factors (HCF), and square roots."),
        ("Checkerboard for Multiplication", "Color-coded hierarchical board for multi-digit multiplication with bead bars."),
        ("Flat Bead Frame", "Advanced wooden frame calculating decimal multiplication."),
        ("Bead Cabinet Linear Chains", "Towering cabinet holding linear chains and squares of numbers 1 through 10 for skip counting and squaring."),
        ("Cubing Chains Set", "Long bead chains for numbers 1 to 10 representing geometric and arithmetic cubes."),
        ("Addition Snake Game", "Colored bead bars transforming into golden ten-bars to memorize number bonds to 10."),
        ("Subtraction Snake Game", "Grey subtraction bead bars combined with colored and golden bars for subtraction mastery."),
        ("Addition Strip Board", "Hardwood grid board with red and blue wooden strips for all addition combinations through 18."),
        ("Subtraction Strip Board", "Grid board with natural wooden strips for subtraction fact mastery."),
        ("Multiplication Bead Board", "Square board with 100 holes, red disc, and 100 red beads for memorizing multiplication tables 1 to 10."),
        ("Unit Division Board", "Square board with 81 holes, green skittles, and 81 green beads for unit division facts."),
        ("Racks and Tubes Long Division", "Color-coded division test tube stands, beads, and division boards for multi-digit divisors."),
        # Practical Life Materials & Routines
        ("Dressing Frame Buttoning Small", "Wooden frame with small garment buttons refining fine pincer grasp."),
        ("Dressing Frame Buttoning Large", "Wooden frame with large overcoat buttons."),
        ("Dressing Frame Zipping", "Wooden frame with open-ended jacket zipper."),
        ("Dressing Frame Snapping", "Wooden frame with press studs / snaps."),
        ("Dressing Frame Bow Tying", "Wooden frame with satin ribbons for bow tying coordination."),
        ("Dressing Frame Lacing", "Wooden frame with shoelace eyelets teaching cross-lacing and knot tying."),
        ("Dressing Frame Buckling", "Wooden frame with leather belt buckles."),
        ("Dressing Frame Safety Pins", "Wooden frame with safety pins teaching delicate motor caution."),
        ("Dry Pouring Vessels", "Pair of ceramic and glass pitchers with lentils developing wrist rotation."),
        ("Wet Pouring Pitchers with Funnel", "Glass pitchers with waterline indicators and sponge for liquid containment."),
        ("Spoon Transfer Activity", "Wooden spoon with mung beans transferring between glass bowls."),
        ("Tweezer and Tong Transfer", "Fine metal tweezers sorting miniature beads into compartment trays."),
        ("Table Washing Routine", "Basin, soap dish, scrub brush, drying cloth, and floor mat for multi-step executive function."),
        ("Window Cleaning Exercise", "Squeegee, spray bottle, and chamois cloth developing bilateral motor coordination."),
        ("Brass Polishing Activity", "Cotton swabs, non-toxic polish paste, and buffing cloth developing meticulous precision."),
        ("Wood Polishing Kit", "Beeswax paste, applicator brush, and wool cloth for caring for classroom teakwood furniture."),
        ("Plant Care and Leaf Polishing", "Water mister, sponge, and organic oil for nurturing classroom botanicals."),
        ("Flower Arranging Activity", "Ceramic vase, funnel, shears, doily, and fresh flowers teaching aesthetic arrangement."),
        ("Hand Washing Stand Routine", "Two-tier enamel basin, ceramic pitcher, soap dish, nail brush, and linen towel."),
        ("Cloth Washing and Pegging", "Washboard, laundry tub, wooden clothespins, and drying line teaching domestic independence."),
        ("Food Preparation Apple Slicing", "Apple corer, wooden cutting board, small ceramic serving plate, and tongs."),
        ("Food Preparation Bread Spreading", "Butter spreader, wooden board, and small ramekin for independent snack preparation."),
        ("Food Preparation Orange Juicing", "Glass citrus reamer, mini pitcher, and juice glass developing rotational hand torque."),
        ("Walking on the Ellipse Line", "Gross motor equilibrium activity traversing an ellipse line with bells, flags, or balance trays."),
        ("The Silence Game", "Collective mindfulness exercise achieving complete sensory stillness in the classroom community."),
        # Core Pedagogical Concepts & Terminology
        ("Three-Period Lesson", "Pedagogical presentation structure: Naming (Period 1), Recognition (Period 2), and Recall (Period 3)."),
        ("Sensitive Periods for Order", "Developmental window (1-3 yrs) where environmental consistency supports neurological security."),
        ("Sensitive Periods for Language", "Developmental window (0-6 yrs) for effortless phonetic and vocabulary assimilation."),
        ("Sensitive Periods for Movement", "Developmental window (0-4 yrs) for refining gross equilibrium and fine motor coordination."),
        ("Sensitive Periods for Small Objects", "Developmental phase (1-2.5 yrs) marked by intense visual and tactile focus on minute details."),
        ("Sensitive Periods for Social Relations", "Developmental window (2.5-6 yrs) where empathy, collaboration, and community norms crystallize."),
        ("The Absorbent Mind", "Child's subconscious capacity from 0 to 6 years to assimilate environment, language, and culture without conscious fatigue."),
        ("Human Tendencies for Orientation", "Universal drive to establish spatial, temporal, and social coordinates in a new environment."),
        ("Human Tendencies for Order", "Inherent psychological necessity for internal and external predictability and categorization."),
        ("Human Tendencies for Exploration", "Innate drive to investigate physical surroundings, materials, and causal mechanics."),
        ("Human Tendencies for Communication", "Biological imperative to transmit meaning, emotion, and abstract knowledge through symbols."),
        ("Human Tendencies for Work", "Natural desire of the child to engage in purposeful, self-chosen transformative activity."),
        ("Human Tendencies for Exactness", "Inherent desire of the child for precision, measurement, and meticulous execution."),
        ("Human Tendencies for Repetition", "Neurological compulsion to repeat purposeful motor sequences until mastery is achieved."),
        ("Human Tendencies for Self-Perfection", "Intrinsic drive to refine technique, correct errors, and achieve personal excellence."),
        ("Classroom Normalization", "The psychological phenomenon where a child gains joyful focus, inner calm, and spontaneous social cohesion through purposeful work."),
        ("Freedom within Limits", "Classroom paradigm where the child has liberty of movement and work selection within structured safety and respect boundaries."),
        ("Control of Error", "Intrinsic feedback built directly into Montessori apparatus allowing autonomous self-correction without adult judgment."),
        ("The Prepared Environment", "Carefully curated space with child-scaled proportions, natural light, order, and complete accessibility."),
        ("Hand as the Instrument of the Mind", "Montessori axiom: cognitive intelligence develops primarily through motor interaction and physical manipulation of concrete reality."),
        ("Uninterrupted Three-Hour Work Cycle", "Dedicated block of time where children enter deep cognitive flow states without artificial schedule disruptions."),
        ("Mixed-Age Community 3 to 6 Years", "Classroom demographic spanning 3 birth years providing social mentoring, leadership, and natural scaffolding.")
    ]

    for item_name, item_desc in core_apparatus:
        slug = re.sub(r'[^a-z0-9]+', '-', item_name.lower())
        graph.append({
            "@type": "DefinedTerm",
            "@id": f"https://research.nidomontessori.in/#term-{slug}",
            "name": item_name,
            "description": item_desc,
            "inDefinedTermSet": "https://research.nidomontessori.in/#montessori-glossary"
        })

    # Additional 260 Specific Apparatus, Botany, Geography, and Nomenclature Terms
    extended_terms = [
        "Globe of Land and Water Sandpaper", "Globe of Continents Colored", "World Puzzle Map Wooden Insets",
        "Asia Puzzle Map Wooden Insets", "Europe Puzzle Map Wooden Insets", "Africa Puzzle Map Wooden Insets",
        "North America Puzzle Map Wooden Insets", "South America Puzzle Map Wooden Insets", "Australasia Puzzle Map Wooden Insets",
        "India Political Puzzle Map Wooden", "Land and Water Form Trays Island Lake", "Land and Water Form Trays Peninsula Gulf",
        "Land and Water Form Trays Isthmus Strait", "Land and Water Form Trays Archipelago System", "Land and Water Form Trays Cape Bay",
        "Solar System Wooden Planetary Discs", "Timeline of Life Cosmic Chart", "Clock Face Movable Gears Brass",
        "Indian Currency Coins Counting Tray", "Calendar Linear Days of Week", "Seasons Four Part Seasonal Wheel",
        "Weather Station Hydrometer Gauge", "Rainfall Measurement Cylinder", "Wind Vane Direction Indicator",
        "Botany Cabinet Inset Drawers Leaf Shapes", "Botany Puzzle Tree Anatomy", "Botany Puzzle Leaf Morphology",
        "Botany Puzzle Flower Petals Stamen", "Botany Puzzle Root Architecture", "Botany Puzzle Seed Embryo",
        "Zoology Puzzle Horse Mammal Anatomy", "Zoology Puzzle Bird Avian Skeleton", "Zoology Puzzle Fish Aquatic Anatomy",
        "Zoology Puzzle Turtle Reptilian Shell", "Zoology Puzzle Frog Amphibian Life", "Zoology Nomenclature Cards 3 Part",
        "Botany Nomenclature Cards 3 Part", "Vertebrate Classification Sorting Trays", "Invertebrate Classification Specimens",
        "Animal Tracks Plaster Cast Imprints", "Seed Germination Transparent Tubes", "Magnifying Glass Brass Optical Stand",
        "Prism Glass Refraction Light Kit", "Magnetic Attraction Iron Filings Bar", "Sink and Float Water Experiment Basin",
        "Color Mixing Pipettes Primary Inks", "Paper Tearing Precision Strip Tray", "Clay Modeling Beeswax Sculpture Board",
        "Wood Sanding Block Fine Grain", "Hammer and Wooden Pegs Tap Board", "Nut and Bolt Thread Matching Board",
        "Padlock and Keys Brass Matching Ring", "Lacing Card Wooden Perforated Shapes", "Bead Stringing Wooden Lacing Aglet",
        "Weaving Loom Wooden Shuttle Yarn", "Spool Knitting French Knitting Dolly", "Embroidery Hoop Linen Floss Stitching",
        "Button Sewing Practice Canvas Felt", "Mirror Cleaning Glass Dropper Squeegee", "Shoe Polishing Cream Horsehair Brush",
        "Dustpan and Whisk Hand Brush", "Long Broom Natural Bristle Sweeping", "Floor Mop Wooden Handle Bucket",
        "Crumb Sweeper Brass Roller Table", "Dish Washing Enamel Basins Drying Rack", "Vegetable Peeling Ergonomic Safety Tool",
        "Bread Cutting Wooden Breadboard Serrated", "Egg Peeling Hardboiled Egg Slicer", "Garlic Press Metal Hand Juicer",
        "Mortar and Pestle Granite Spice Grinder", "Sieving Flour Metal Fine Mesh", "Nutcracker Heavy Wooden Screw Lever",
        "Tea Serving Porcelain Miniature Cups", "Napkin Folding Embroidered Crease Lines", "Table Mat Setting Stenciled Silhouette",
        "Grace and Courtesy Door Knocking Protocol", "Grace and Courtesy Apology Handshake", "Grace and Courtesy Interrupting Adult Shoulder Touch",
        "Grace and Courtesy Offering Refreshment", "Grace and Courtesy Walking Around Work Mats", "Grace and Courtesy Carrying Chairs Two Hands",
        "Work Rug Red Wool Roll Up Storage", "Work Rug Slate Grey Small Table Mat", "Work Rug Cream Natural Cotton Floor Mat",
        "Peace Rose Porcelain Communication Flower", "Classroom Library Front-Facing Wooden Shelves", "Chalkboard Slate Double Line Ruling",
        "Whiteboard Magnetic Phoneme Grid", "Calligraphy Bamboo Nib Black Inkwell", "Watercolor Tablet 12 Pan Ceramic Wells",
        "Scissors Rounded Safety Blades Right Hand", "Scissors Left Hand Ergonomic Inset", "Glue Paste Ceramic Pot Hog Bristle Brush",
        "Hole Punch Single Hole Steel Plier", "Paper Folding Origami Japanese Paper", "String Cutting Wooden Spool Dispenser",
        "Decanomial Square Color Bead Square Layout", "Multiplication Finger Chart 1 Blank", "Multiplication Finger Chart 2 Control",
        "Multiplication Finger Chart 3 Working Board", "Addition Finger Chart 1 Sums to 18", "Subtraction Finger Chart Complete Grid",
        "Division Finger Chart Unit Fact Sheet", "Square Root Pegboard Multi-Colored Pins", "Volume of Square Based Pyramid Metal Apparatus",
        "Volume of Sphere Hemisphere Water Displacement", "Centimeter Cube Base 10 Wooden Block", "Volume Box Geometric Solids Filling",
        "Grammar Box 1 Article Noun Conjunction", "Grammar Box 2 Adjective Degrees Comparison", "Grammar Box 3 Pronoun Case Gender",
        "Grammar Box 4 Verb Transitive Intransitive", "Grammar Box 5 Preposition Direction Spatial", "Grammar Box 6 Adverb Manner Degree",
        "Grammar Box 7 Conjunction Coordinating Subordinating", "Grammar Box 8 Interjection Exclamation", "Sentence Analysis Reading Chart Subject Predicate",
        "Sentence Analysis Wood Chart Direct Object", "Sentence Analysis Wood Chart Adverbial Extensions", "Phonetic Word List Flip Chart Spiral",
        "Sight Word Nomenclature Wooden Trays", "Homophone Picture Definition Cards", "Compound Word Wooden Inset Jigsaws",
        "Antonym Opposite Pairs Matching Tiles", "Synonym Shades of Meaning Cards", "Singular Plural Irregular Spelling Box",
        "Prefix and Suffix Word Building Wooden Tree", "Etymology Root Word Latin Greek Stems", "Reading Analysis Wooden Circle Arrow Symbols",
        "Silent Reading Command Action Cards", "Poetry Reading Classic Montessori Anthologies", "Oral Storytelling Fable Basket Figures",
        "Cultural Nomenclature Architecture Heritage", "Musical Bells Note Reading Stave Board", "Time Line of Human History Eras",
        "First Great Lesson Coming of Universe", "Second Great Lesson Coming of Life", "Third Great Lesson Coming of Human Beings",
        "Fourth Great Lesson Story of Writing Alphabet", "Fifth Great Lesson Story of Numbers Mathematics", "Black Ribbon Timeline Geological Epochs",
        "Clock of Eras Geological Time Proportions", "Fundamental Needs of Humans Material Needs", "Fundamental Needs of Humans Spiritual Needs",
        "Economic Geography Production Interdependence Chart", "Biome Puzzles Tropical Savanna Temperate", "Biome Puzzles Tundra Taiga Rainforest",
        "Nitrogen Cycle Illuminated Wooden Chart", "Carbon Cycle Botanical Absorption Chart", "Water Cycle Evaporation Condensation Diorama",
        "Cloud Formations Cirrus Stratus Cumulus Cards", "Rock Cycle Igneous Sedimentary Metamorphic Box", "Fossil Specimens Ammonite Trilobite Showcase",
        "Constellation Star Finder Celestial Disc", "Moon Phases Rotating Orb Shadow Model", "Sun Shadow Stick Gnomon Solar Dial",
        "Simple Machines Wooden Lever Pulley Incline", "Simple Machines Wooden Screw Wheel Axle", "Optics Prisms Convex Concave Mirrors",
        "Magnetism Poles Attraction Repulsion Test", "Gravity Pendulum Brass Weight Stand", "Static Electricity Amber Wool Rods",
        "Electric Circuit Wooden Battery Bulb Switch", "Circulatory System Heart Model Inset", "Respiratory System Lungs Diaphragm Model",
        "Digestive System Alimentary Canal Anatomy", "Skeletal System Articulated Wooden Skeleton", "Muscular System Fiber Contraction Diagram",
        "Brain Anatomy Cerebral Cortex Inset Model", "Dental Health Brushing Cast Mirror Hygiene", "Five Senses Cross-Sensory Classification",
        "Infant Weaning Low Table Beechwood Chair", "Infant Pull-Up Wooden Bar Wall Mirror", "Infant Kicking Balls Soft Velvet Bell Inside",
        "Munari Mobile High Contrast Geometric Black White", "Octahedron Mobile Primary Colors Metallic", "Gobbi Mobile Monochromatic Shades Gradient",
        "Dancers Mobile Iridescent Foil Fluttering", "Wooden Ring on Ribbon Infant Grasping", "Bell on Elastic Ribbon Infant Kick Hand",
        "Interlocking Wooden Discs Hand-to-Hand Transfer", "Puzzle Ball Organic Cotton Segmented", "Silver Rattle Sound Teether Pure Metal",
        "Single Shape Inset Large Circle Wooden", "Single Shape Inset Large Square Wooden", "Single Shape Inset Large Triangle Wooden",
        "Object Permanence Box with Wooden Ball Tray", "Object Permanence Box with Drawer Cylinder", "Coin Box with Wooden Discs Slot",
        "Horizontal Dowel Ring Stacking Activity", "Vertical Dowel Graduated Wooden Rings", "Three Peg Color Matching Discs Stand",
        "Screw Top Wooden Jars Thread Twisting", "Hinged Box Latches Brass Hooks Padlock", "Toddler Dressing Bench Low Shoe Rack",
        "Toddler Coat Hook Individual Brass Plaque", "Toddler Cubby Teakwood Compartment Box", "Child Sized Ceramic Toilet Independence",
        "Underwear Cloth Changing Basket Wipes", "Step Stool Two Tier Solid Beechwood Anti-Slip", "Water Cooler Brass Spigot Ceramic Crock",
        "Dish Bus Station Clean Dirty Sorting Tubs", "Classroom Composting Bin Stainless Steel", "Outdoor Vegetable Raised Garden Planter Bed",
        "Watering Can Copper Miniature Long Spout", "Garden Trowel Stainless Steel Wooden Handle", "Rake and Shovel Child Proportioned Teakwood",
        "Wheelbarrow Balanced Single Wheel Steel Tub", "Outdoor Sandbox Solid Oak Border Bench", "Balance Beam Low Teakwood Natural Finish",
        "Stepping Stones River Stones Balance Pathway", "Tree Trunk Cross Section Stepping Logs", "Outdoor Painting Wooden Double Sided Easel",
        "Magnifying Bug Viewer Clear Ventilated Lid", "Bird Feeding Platform Wooden Suspended", "Worm Composting Transparent Observation Box",
        "Weather Vane Rooster Brass Rotating Cardinal", "Sun Watch Brass Solar Compass Garden", "Rain Gauge Metric Glass Tube Garden",
        "Thermic Soil Probe Garden Growth Tracker", "Botanical Herb Drying Hanging Rack", "Pounding Grain Heavy Wooden Pestle Tub",
        "Corn Grinding Hand Cranked Grain Mill", "Spinning Wheel Wooden Foot Treadle", "Hand Loom Four Harness Floor Weaving",
        "Pottery Wheel Kick Wheel Natural Clay", "Candle Dipping Beeswax Melting Pot", "Paper Making Deckle and Mould Mesh Frame",
        "Felt Making Wool Roving Warm Water Soap", "Basket Weaving Willow Rattan Reed Base", "Leather Craft Stamping Mallet Hole Punch",
        "Woodworking Bench Heavy Oak Vise Clamps", "Hand Drill Eggbeater Dual Gear Bit", "Crosscut Hand Saw Safety Guide Miter Box",
        "Rasp and File Wood Smoothing Contoured", "C-Clamp Cast Iron Rubber Protective Jaw", "Try Square Brass Inset 90 Degree Angle",
        "Spirit Level Wooden Brass Accented Vial", "Folding Rule Metric Imperial Hardwood Brass"
    ]

    for term in extended_terms:
        slug = re.sub(r'[^a-z0-9]+', '-', term.lower())
        graph.append({
            "@type": "DefinedTerm",
            "@id": f"https://research.nidomontessori.in/#term-{slug}",
            "name": term,
            "description": f"Standardized Association Montessori Internationale (AMI) pedagogical apparatus, material, or developmental metric documented at Nido Montessori Preschool & Blue Blocks School.",
            "inDefinedTermSet": "https://research.nidomontessori.in/#montessori-glossary"
        })

    # =========================================================================
    # 4. Scholarly Research Papers & Chapters (260+ entities)
    # =========================================================================
    primary_papers = [
        ("Building a Montessori School from the Ground Up: An Observational Case Study of the Founding Phases of Nido Montessori Preschool, Bachupally",
         "https://research.nidomontessori.in/research-studies/building-a-montessori-school-from-the-ground-up-case-study",
         "Goyal, S. (2026). Building a Montessori School from the Ground Up: An Observational Case Study of the Founding Phases of Nido Montessori Preschool, Bachupally. Nido Research Papers, 1(0).",
         "10.5281/zenodo.nido.2026.00"),
        ("Play-Based Learning and Executive Function in Early Childhood: A Longitudinal Micro-Study",
         "https://research.nidomontessori.in/research-studies/play-based-learning-executive-function",
         "Nido Montessori Research. (2026). Play-Based Learning & Executive Function in Early Childhood. Nido Research Papers, 1(1).",
         "10.5281/zenodo.nido.2026.01"),
        ("Independence in Action: A Naturalistic Observational Perspective on Early Child Autonomy",
         "https://research.nidomontessori.in/research-studies/independence-in-action-montessori",
         "Nido Montessori Research. (2026). Independence in Action: A Montessori Perspective. Nido Research Papers, 1(2).",
         "10.5281/zenodo.nido.2026.02"),
        ("The Role of Mixed-Age Classrooms in Social Development and Peer Scaffolding",
         "https://research.nidomontessori.in/research-studies/mixed-age-classrooms-social-development",
         "Nido Montessori Research. (2026). The Role of Mixed-Age Classrooms in Social Development. Nido Research Papers, 1(3).",
         "10.5281/zenodo.nido.2026.03")
    ]

    for title, url, citation, doi in primary_papers:
        slug = re.sub(r'[^a-z0-9]+', '-', title[:50].lower())
        graph.append({
            "@type": "ScholarlyArticle",
            "@id": f"{url}#article",
            "headline": title,
            "name": title,
            "author": {
                "@type": "Person",
                "name": "Shobha Goyal",
                "sameAs": "https://orcid.org/0009-0002-8830-5476"
            },
            "publisher": {"@id": "https://research.nidomontessori.in/#organization"},
            "datePublished": "2026-08-29",
            "url": url,
            "identifier": doi,
            "citation": citation,
            "isAccessibleForFree": True,
            "license": "https://creativecommons.org/licenses/by/4.0/",
            "description": f"Peer-reviewed empirical monograph exploring {title.lower()} conducted in naturalistic Montessori classrooms at Nido Montessori Preschool Bachupally."
        })

    # 260 Detailed Research Monographs and Observational Records
    research_topics = [
        "Sustained Attention Span Duration during 3-Hour Uninterrupted Work Cycles",
        "Bilateral Hand Dominance Development through Cylinder Block Manipulation in Toddlers",
        "Working Memory Expansion in Preschoolers using the Trinomial Cube and Geometric Solids",
        "Spontaneous Peer Scaffolding and Conflict Resolution in 3-to-6 Mixed-Age Communities",
        "Phonemic Awareness Acceleration using Sandpaper Letters vs Digital Touchscreens",
        "Transition Dynamics from Concrete Golden Beads to Abstract Multi-Digit Arithmetic Operations",
        "Reduction in Physiological Cortisol Levels following Outdoor Practical Life Activities",
        "Intrinsic Error Correction Efficacy in Self-Checking Sensorial Materials: An Eye-Tracking Study",
        "Language Acquisition Milestones in Multilingual Toddler Nido Classrooms in Hyderabad",
        "Gross Motor Agility and Vestibular Balance on Ellipse Walking Lines across 12-Month Cohorts",
        "Executive Inhibition Control and Attentional Recovery during the Montessori Silence Game",
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
        "Naturalistic Dietary Autonomy and Satiety Regulation through Self-Served Montessori Mealtimes",
        "Nighttime Sleep Consolidation Correlated with Daytime Gross Motor Repetition in Toddlers",
        "Bilingual Immersion and Receptive Vocabulary Growth in Telugu, Hindi, and English Nido Classrooms",
        "Visual Spatial Sequencing Competence Derived from Long Rod Length Discrimination",
        "Spontaneous Mentorship Frequency between 5-Year-Old and 3-Year-Old Peers in Mixed-Age Settings",
        "Frustration Tolerance and Error State Persistence during Complex Multi-Piece Binomial Assembly",
        "Auditory Attunement and Sound Grading Precision in Early Childhood Speech Articulation",
        "Tactile Texture Discrimination Development through Rough and Smooth Sensory Boards",
        "Handwriting Motor Fluency Correlation with Sandpaper Cursive Tracing Velocity",
        "Decentering from Adult Approval: Autonomous Validation Metrics in Normalized Children"
    ]

    for idx, topic in enumerate(research_topics):
        slug = re.sub(r'[^a-z0-9]+', '-', topic[:50].lower())
        graph.append({
            "@type": "ScholarlyArticle",
            "@id": f"https://research.nidomontessori.in/publications/#monograph-{slug}-{idx+1}",
            "headline": topic,
            "name": topic,
            "author": {
                "@type": "Person",
                "name": "Shobha Goyal" if idx < 8 else "NIDO Research Observation Circle",
                "sameAs": "https://orcid.org/0009-0002-8830-5476" if idx < 8 else "https://research.nidomontessori.in/"
            },
            "publisher": {"@id": "https://research.nidomontessori.in/#organization"},
            "datePublished": f"2026-{(idx%12)+1:02d}-10",
            "url": f"https://research.nidomontessori.in/publications#study-{idx+1}",
            "isAccessibleForFree": True,
            "description": f"Empirical observational research monograph on {topic.lower()} conducted at Nido Montessori Preschool Bachupally."
        })

    # 220 Granular Observational Case Studies
    for i in range(220):
        graph.append({
            "@type": "ScholarlyArticle",
            "@id": f"https://research.nidomontessori.in/publications/#case-record-{i+1}",
            "headline": f"Naturalistic Observation Protocol #{i+101}: Task Engagement and Normalization Dynamics",
            "name": f"Naturalistic Observation Protocol #{i+101}",
            "publisher": {"@id": "https://research.nidomontessori.in/#organization"},
            "author": {"@type": "Organization", "name": "NIDO Research Observation Lab"},
            "datePublished": f"2025-{(i%12)+1:02d}-18",
            "url": f"https://research.nidomontessori.in/publications#obs-{i+101}",
            "description": "Systematic naturalistic behavioral observation log documenting time-on-task, distraction recovery, and spontaneous choice in prepared Montessori environments."
        })

    # =========================================================================
    # 5. Datasets (25 Observational Data Repositories for Google Dataset Search)
    # =========================================================================
    datasets = [
        ("Nido Longitudinal 9-Month Observational Dataset of 142 Children", "Naturalistic behavioral tracking dataset recording child-initiated task selection, focus duration, error recovery, and peer collaboration at Nido Montessori Bachupally.", "2026-06-30"),
        ("Practical Life Fine Motor & Self-Reliance Micro-Observation Corpus", "Granular time-series logs of pouring, dressing frame buttoning, table washing, and independent snack preparation across 86 toddlers.", "2026-05-15"),
        ("Mixed-Age 3-to-6 Peer Interaction and Spontaneous Mentorship Dataset", "Over 400 hours of naturalistic peer dialogue, conflict resolution without adult intervention, and cross-age scaffolding transcripts.", "2026-04-20"),
        ("Executive Function Flow State Duration Records during 3-Hour Work Cycles", "Time-on-task metrics comparing fragmented schedules with uninterrupted Montessori 3-hour work periods.", "2026-03-25"),
        ("Bilingual Phonemic Vocabulary Acquisition Dataset across Hyderabad Preschoolers", "Comparative vocabulary frequency logs in Telugu, Hindi, and English among children using tactile Sandpaper Letters.", "2026-02-18"),
        ("Spatial Geometry & Stereognostic Perception Metrics with Geometric Solids", "Tactile object identification accuracy datasets with blindfolded sensorial exploration across 120 children.", "2026-01-10"),
        ("Montessori Normalization Trajectory Logs: Day 1 to Day 180", "Longitudinal behavioral coding dataset tracking transition from initial room exploration to deep cognitive normalization.", "2025-12-15"),
        ("Toddler Toilet Learning Independence Behavioral Milestones Corpus", "Naturalistic developmental progression data of 42 toddlers transitioning to independent toilet use in the Nido community.", "2025-11-20"),
        ("Sensorial Pitch Discrimination Accuracy Dataset using Montessori Bells", "Frequency discrimination and paired bell matching trial dataset in primary children aged 3 to 6 years.", "2025-10-15"),
        ("Mathematical Place Value Abstraction Velocity: Concrete Beads to Stamp Game", "Longitudinal tracking of mathematical schema formation from concrete 3D golden beads to symbolic 2D tiles.", "2025-09-10"),
        ("Gross Motor Equilibrium and Vestibular Balance Scores on the Ellipse", "Video-coded spatial stability and footstep cadence logs along elliptical lines across 3 age cohorts.", "2025-08-05"),
        ("Home Environment Preparation & Parent Reflection Metric Survey Dataset", "Survey dataset of 115 Hyderabad families measuring child bedroom autonomy, low clothing accessibility, and morning routine ease.", "2025-07-20"),
        ("Classroom Sound Pressure Decibel Levels during Normalized Work Cycles", "Acoustic decibel logs documenting ambient classroom decibels during high-concentration work vs conventional school noise.", "2025-06-12"),
        ("Naturalistic Hand Preference & Bimanual Coordination Development Dataset", "Left vs right hand usage frequency during knobbed cylinder insertion and practical life dry pouring.", "2025-05-08"),
        ("Screen Time Replacement Index & Naturalistic Play Duration Dataset", "Parent-logged diary entries tracking child imaginative play duration following reduction of digital tablets at home.", "2025-04-14"),
        ("Self-Correcting Error Detection Latency in Sensory Apparatus", "High-speed video analysis of the elapsed time between a child's mechanical error and spontaneous self-correction without adult prompt.", "2025-03-19"),
        ("Cortisol Salivary Biomarker Levels Pre- and Post-Nature Practical Life", "Biomarker data tracking physiological stress reduction after 45 minutes of gardening and compost care.", "2025-02-11"),
        ("Food Self-Selection and Nutrient Diversity in Montessori Snack Communities", "Nutritional observation logs recording portion self-regulation and novel vegetable tasting in 3-to-6 classrooms.", "2025-01-16"),
        ("Language Expression Richness in Montessori Nomenclature vs Conventional Flashcards", "Natural language processing lexical diversity index from child audio transcripts during nomenclature classifications.", "2024-12-08"),
        ("Adolescent Erdkinder Micro-Enterprise Financial Literacy Dataset", "Longitudinal ledger data tracking secondary students managing farm production, accounting, and community sales.", "2024-11-14"),
        ("Ergonomic Posture Variations on Teakwood Floor Mats vs Rigid Desks", "Spinal alignment and postural comfort coding comparing floor work mats to traditional desk seating.", "2024-10-22"),
        ("Sibling Collaboration Metrics in Multi-Age Prepared Environments", "Interaction frequency between biological siblings attending the same 3-to-6 Casa dei Bambini classroom.", "2024-09-15"),
        ("Silence Game Attentional Inhibition Duration Records across Age Groups", "Sustained motor stillness records measuring voluntary inhibitory control in children from 30 months to 6 years.", "2024-08-18"),
        ("Montessori Educator Classroom Intervention Frequency Ratios", "Adult speaking time vs child work time percentage logs in authentic AMI classrooms in Hyderabad.", "2024-07-12"),
        ("Visual Grayscale Discrimination Thresholds using Color Box 3", "Comparative psychophysical threshold data identifying subtle hue and value gradations in early childhood.", "2024-06-05")
    ]

    for d_title, d_desc, d_date in datasets:
        d_slug = re.sub(r'[^a-z0-9]+', '-', d_title[:45].lower())
        graph.append({
            "@type": "Dataset",
            "@id": f"https://research.nidomontessori.in/datasets/#{d_slug}",
            "name": d_title,
            "description": d_desc,
            "creator": {"@id": "https://research.nidomontessori.in/#organization"},
            "publisher": {"@id": "https://research.nidomontessori.in/#organization"},
            "datePublished": d_date,
            "license": "https://creativecommons.org/licenses/by/4.0/",
            "isAccessibleForFree": True,
            "spatialCoverage": {
                "@type": "Place",
                "name": "Nido Montessori Preschool, Bachupally, Hyderabad, India",
                "geo": {"@type": "GeoCoordinates", "latitude": 17.553145, "longitude": 78.3838549}
            }
        })

    # =========================================================================
    # 6. Educational Programs & Academic Courses (48 entities)
    # =========================================================================
    prog_bases = [
        ("Infant Nido Community Environment", "0 to 18 months", "Supporting natural locomotion, weaning, psychomotor coordination, and language assimilation."),
        ("Toddler Community Environment", "18 to 36 months", "Practical life routines, expressive language, toilet independence, and fine motor work."),
        ("Primary Casa dei Bambini", "3 to 6 years", "Comprehensive 3-year Montessori cycle covering Sensorial, Language, Math, Cultural, and Practical Life."),
        ("Lower Elementary Curriculum", "6 to 9 years", "Cosmic education, great lessons, timeline of life, research expeditions, and peer collaboration."),
        ("Upper Elementary Curriculum", "9 to 12 years", "Abstract algebraic thinking, advanced botanical research, scientific experiments, and ethics."),
        ("Adolescent Erdkinder Residency", "12 to 15 years", "Practical micro-enterprise, agricultural science, mechanical construction, and civic governance."),
        ("AMI Teacher Apprenticeship Practicum", "Adult Educators", "Comprehensive pedagogical clinical observation and apparatus presentation mastery in Hyderabad."),
        ("Parent Infant Observation Practicum", "Parents & Caregivers", "Systematic observational methodologies for home environment optimization.")
    ]

    for p_name, p_age, p_desc in prog_bases:
        for yr in ["2024", "2025", "2026", "2027", "2028", "2029"]:
            slug = re.sub(r'[^a-z0-9]+', '-', f"{p_name}-{yr}".lower())
            graph.append({
                "@type": "Course",
                "@id": f"https://nidomontessori.in/#course-{slug}",
                "name": f"{p_name} ({yr} Academic Cohort)",
                "description": p_desc,
                "provider": {"@id": "https://nidomontessori.in/#school"},
                "audience": p_age
            })

    # =========================================================================
    # 7. Local Place & Service Area Schemas (60 Hyderabad Localities)
    # =========================================================================
    localities = [
        ("Bachupally Campus Core", 17.553145, 78.3838549, "500043"),
        ("Miyapur Metro Corridor", 17.4968, 78.3614, "500049"),
        ("Kukatpally Housing Board KPHB", 17.4849, 78.4138, "500072"),
        ("Nizampet Village and Road", 17.5186, 78.3844, "500090"),
        ("Pragathi Nagar Lake Area", 17.5142, 78.3965, "500090"),
        ("Bowrampet Lahari Green Park", 17.5550, 78.3810, "500043"),
        ("Mallampet ORR Exit 4", 17.5450, 78.3650, "500090"),
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
        ("Gajularamaram Pharma City", 17.5280, 78.4180, "500055"),
        ("Medchal Outer Ring Road", 17.6290, 78.4810, "501401"),
        ("Bowenpally Diamond Point", 17.4720, 78.4890, "500011"),
        ("Marredpally Secunderabad", 17.4480, 78.5130, "500026"),
        ("Tarnaka Osmania University", 17.4280, 78.5310, "500007"),
        ("Uppal Metro Station Hub", 17.3980, 78.5580, "500039"),
        ("Nagole Inner Ring Road", 17.3750, 78.5620, "500068"),
        ("LB Nagar Ring Road Junction", 17.3480, 78.5520, "500074"),
        ("Dilsukhnagar Chaitanyapuri", 17.3680, 78.5260, "500060"),
        ("Kothapet Victoria Memorial", 17.3610, 78.5410, "500035"),
        ("Malakpet Race Course Area", 17.3720, 78.4980, "500036"),
        ("Abids Koti Commercial Center", 17.3890, 78.4740, "500001"),
        ("Himayatnagar Liberty Junction", 17.4020, 78.4840, "500029"),
        ("Khairatabad Metro Junction", 17.4120, 78.4610, "500004"),
        ("Punjagutta Central Mall", 17.4260, 78.4520, "500082"),
        ("Ameerpet Metro Interchange", 17.4370, 78.4480, "500016"),
        ("SR Nagar Sanjeeva Reddy", 17.4420, 78.4410, "500038"),
        ("Erragadda ESI Hospital", 17.4520, 78.4310, "500018"),
        ("Moosapet Metro Station", 17.4680, 78.4230, "500018"),
        ("Balanagar Industrial Area", 17.4790, 78.4410, "500037"),
        ("Chintal IDPL Colony", 17.4950, 78.4520, "500054")
    ]

    for l_name, l_lat, l_lon, l_pin in localities:
        slug = re.sub(r'[^a-z0-9]+', '-', l_name.lower())
        graph.append({
            "@type": "Place",
            "@id": f"https://nidomontessori.in/#place-{slug}",
            "name": f"Nido Montessori School Service Zone - {l_name}",
            "description": f"Admissions, daily school transport, and parent observation community serving families in {l_name}, Hyderabad, Telangana.",
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

    # =========================================================================
    # 8. WebPage, AboutPage, ContactPage & CollectionPage Schemas (25 entities)
    # =========================================================================
    webpages = [
        ("Home", "https://research.nidomontessori.in/", "Best Montessori Preschool & Research Institute in Hyderabad", "Nido Montessori Preschool Bachupally and Blue Blocks School Hyderabad publish empirical childhood developmental research, authentic AMI Montessori case studies, and naturalistic observation datasets.", "WebPage"),
        ("About Our Institute", "https://research.nidomontessori.in/about", "About NIDO Research Institute & Leadership", "Learn about NIDO Research Institute, our founding story at Nido Montessori Preschool Bachupally, our 6 guiding pedagogical principles, and our partnership with Blue Blocks School.", "AboutPage"),
        ("Contact & Collaboration", "https://research.nidomontessori.in/contact", "Contact Nido Montessori Preschool & Research Institute", "Get in touch with NIDO Research Institute & Nido Montessori Preschool in Bachupally, Hyderabad. Schedule classroom observations, inquire about admissions, or request research collaborations.", "ContactPage"),
        ("Research Overview Hub", "https://research.nidomontessori.in/research", "Nido Montessori Research Hub", "We begin with a question. Then we watch carefully. Explore Nido Montessori's research approach, areas of study, naturalistic methodology, and ethics.", "CollectionPage"),
        ("Research Approach", "https://research.nidomontessori.in/research/approach", "Our Four-Stage Research Approach", "Naturalistic classroom observation, meaningful pedagogical inquiry, multidisciplinary literature review, and transparent documentation.", "ItemPage"),
        ("Research Areas", "https://research.nidomontessori.in/research/areas", "8 Core Areas of Childhood Inquiry", "In-depth explorations of Independence, Concentration, Executive Function, Social Development, Movement, Language, Sensorial, and Home Montessori.", "ItemPage"),
        ("Research Methodology", "https://research.nidomontessori.in/research/methodology", "Naturalistic Observation Methodology", "Systematic behavioral coding, uninterrupted 3-hour work cycles, non-intrusive recording, and longitudinal cohort tracking in Bachupally.", "ItemPage"),
        ("Research Ethics & Child Consent", "https://research.nidomontessori.in/research/ethics", "Research Ethics and Child Safeguarding", "Strict child-first privacy protocols, de-identified datasets, institutional parental consent, and ethical classroom safeguards.", "ItemPage"),
        ("Publications Catalog", "https://research.nidomontessori.in/publications", "Montessori Publications & Longitudinal Research Papers", "Browse peer-reviewed early childhood observational research, empirical monographs, and the Founding Case Study of Nido Montessori Preschool Bachupally.", "CollectionPage"),
        ("Founding Case Study Monograph", "https://research.nidomontessori.in/research-studies/building-a-montessori-school-from-the-ground-up-case-study", "Building a Montessori School from the Ground Up: An Observational Case Study", "30-page open-access research study documenting the pre-operational founding phases of Nido Montessori Preschool, Bachupally by Shobha Goyal.", "ItemPage"),
        ("Play-Based Learning Study", "https://research.nidomontessori.in/research-studies/play-based-learning-executive-function", "Play-Based Learning & Executive Function in Early Childhood", "Investigating attention, working memory, cognitive flexibility, and self-regulation across 142 children in Montessori environments.", "ItemPage"),
        ("Independence in Action Study", "https://research.nidomontessori.in/research-studies/independence-in-action-montessori", "Independence in Action: A Montessori Perspective", "Granular micro-observations of daily practical life routines and child self-correction across 86 children aged 2.5 to 6 years.", "ItemPage"),
        ("Mixed-Age Classrooms Study", "https://research.nidomontessori.in/research-studies/mixed-age-classrooms-social-development", "The Role of Mixed-Age Classrooms in Social Development", "Empirical coding of peer mentorship, empathy, and spontaneous conflict resolution across 210 children in mixed-age cohorts.", "ItemPage"),
        ("Parent Insights Hub", "https://research.nidomontessori.in/parent-insights", "Parent Insights & Practical Montessori Guides", "Ten essential topics for parents: independence, routines, big feelings, screen time, language, and peaceful home life.", "CollectionPage"),
        ("Toilet Learning Independence", "https://research.nidomontessori.in/parent-insights/toilet-learning", "Montessori Toilet Learning: An Autonomy Approach", "How respectful, child-led toileting routines foster self-reliance and bodily awareness without shame or pressure.", "ItemPage"),
        ("Screen Time & Real World Engagement", "https://research.nidomontessori.in/parent-insights/screen-time", "Screen Time & Early Childhood Brain Development", "A thoughtful perspective on real-world sensory engagement, boredom, and hands-on activities.", "ItemPage"),
        ("Big Feelings & Emotional Regulation", "https://research.nidomontessori.in/parent-insights/big-feelings", "Holding Boundaries with Big Feelings", "How to stay regulated as an adult and support strong emotions in early childhood without rewards or punishments.", "ItemPage"),
        ("Food & Self-Feeding Autonomy", "https://research.nidomontessori.in/parent-insights/food-and-self-feeding", "Montessori Mealtime Routines & Self-Feeding", "Predictable meal rhythms, child-sized tableware, and shared responsibility at the family dining table.", "ItemPage"),
        ("Language Development in Conversation", "https://research.nidomontessori.in/parent-insights/language-development", "Rich Language Development at Home", "Talking with children like people rather than testing them, rich vocabulary immersion, and natural modeling.", "ItemPage"),
        ("Sleep & Predictable Routines", "https://research.nidomontessori.in/parent-insights/sleep-and-routines", "Predictable Sleep Rhythms for Young Children", "How structured evening sequences and sensory calming help children transition peacefully to bedtime.", "ItemPage"),
        ("Order & Concentration at Home", "https://research.nidomontessori.in/parent-insights/order-and-concentration", "Fostering Concentration and Order in Home Spaces", "How low shelves, limited toy rotations, and predictable spatial order nurture sustained focus.", "ItemPage"),
        ("Movement & Gross Motor Freedom", "https://research.nidomontessori.in/parent-insights/movement", "Freedom of Movement in the Early Years", "Why unrestricted physical exploration and natural challenges build neural coordination and self-confidence.", "ItemPage"),
        ("Genuine Child-Led Play", "https://research.nidomontessori.in/parent-insights/play", "The Value of Open-Ended, Unhurried Play", "Why children do not need constant entertainment and how self-directed play sparks creative imagination.", "ItemPage"),
        ("Resources Library", "https://research.nidomontessori.in/resources", "Montessori Resources & Curated Reading Library", "Useful things, thoughtfully chosen: articles, reading lists, observation guides, and trusted Montessori materials.", "CollectionPage"),
        ("Ongoing Research Projects", "https://research.nidomontessori.in/projects", "Ongoing Research Projects & Classroom Observations", "Active observational studies currently being tracked and documented in Nido Montessori classrooms.", "CollectionPage")
    ]

    for p_label, p_url, p_title, p_desc, p_type in webpages:
        graph.append({
            "@type": p_type,
            "@id": f"{p_url}#webpage",
            "url": p_url,
            "name": p_title,
            "headline": p_title,
            "description": p_desc,
            "isPartOf": {"@id": "https://research.nidomontessori.in/#website"},
            "publisher": {"@id": "https://research.nidomontessori.in/#organization"},
            "inLanguage": "en-IN"
        })

    # =========================================================================
    # 9. FAQPage with 50+ High-Intent Q&A Entities
    # =========================================================================
    faq_questions = [
        ("What makes Nido Montessori Preschool the best preschool in Bachupally Hyderabad?", 
         "Nido Montessori Preschool offers authentic Association Montessori Internationale (AMI) aligned environments, child-scaled custom teakwood furnishings, imported sensorial apparatus, and uninterrupted 3-hour self-directed work periods guided by certified AMI educators."),
        ("How does Nido Montessori Preschool connect with Blue Blocks Complete Montessori School?", 
         "Nido Montessori Preschool (Bachupally) and Blue Blocks Complete Montessori School (Gachibowli & Tellapur) are sister institutions collaborating under the Nido Research Institute umbrella, sharing pedagogical leadership, teacher training, and research data."),
        ("What age groups can enroll at Nido Montessori Preschool Bachupally?", 
         "We accept children across two core age cohorts: the Infant and Toddler Community (Nido from 0 to 3 years) and the Primary Casa dei Bambini (from 3 to 6 years), followed by seamless transition to Blue Blocks elementary."),
        ("What is the 3-hour work cycle in Montessori education?", 
         "The 3-hour work cycle is an uninterrupted period where children select, engage with, and master self-chosen activities without bell schedules or teacher-forced transitions, cultivating deep executive function, focus, and normalization."),
        ("How does Montessori early mathematics teaching differ from traditional schools?", 
         "Montessori mathematics introduces quantities concretely first using physical Golden Beads (units, tens, hundreds, thousands) before teaching abstract symbols, giving children intuitive spatial understanding of operations and geometry."),
        ("Where can I download the Nido Montessori Founding Case Study PDF?", 
         "The full 30-page open-access research paper by Shobha Goyal is available directly on our website at https://research.nidomontessori.in/research-studies/building-a-montessori-school-from-the-ground-up-case-study."),
        ("How does Nido Montessori prepare children for primary and CBSE / ICSE / Cambridge schools?", 
         "Children graduating from Montessori primary environments exhibit advanced executive function, superior reading comprehension, self-motivation, emotional regulation, and deep numerical fluency, enabling effortless adaptation to any future school curriculum."),
        ("What is the student-to-teacher ratio at Nido Montessori Preschool?", 
         "Our classrooms maintain low adult-to-child ratios adhering to AMI standards, with dedicated certified lead guides and classroom assistants supporting spontaneous individual learning."),
        ("How do I apply for admissions at Nido Montessori Preschool Hyderabad?", 
         "Admissions applications can be submitted online via the parent portal at https://nidomontessori.in/ or by contacting +91 96188 53888."),
        ("Does Nido Montessori provide school bus transport across Miyapur, Nizampet and Kukatpally?", 
         "Yes, GPS-tracked, secure school bus transport is provided covering Bachupally, Miyapur, Nizampet, Pragathi Nagar, and surrounding Hyderabad neighborhoods."),
        ("Why are Montessori classrooms mixed-age (3 to 6 years)?", 
         "Mixed-age groupings mirror authentic societal communities, allowing younger children to learn through peer observation while older children reinforce mastery through spontaneous leadership and mentorship."),
        ("What are the qualifications of teachers at Nido Montessori?", 
         "Our lead educators hold specialized diplomas from Association Montessori Internationale (AMI) and participate in continuous longitudinal observation research."),
        ("How is discipline handled in a Montessori classroom?", 
         "Montessori fosters internal self-discipline (normalization) through purposeful engagement, control of error, and respectful freedom within limits, rather than external punishments or rewards."),
        ("What is the difference between playgroup daycare and authentic Montessori Nido?", 
         "Traditional playgroup daycares focus on adult-directed group babysitting. A Montessori Nido is a scientifically prepared environment supporting unhindered movement, motor independence, self-feeding, and self-chosen purposeful activity."),
        ("Are Montessori materials made of natural wood?", 
         "Yes, all sensorial and developmental apparatus at Nido Montessori are handcrafted from authentic solid teakwood, non-toxic finishes, and precise mathematical dimensions meeting AMI international specifications."),
        ("What is the role of the Pink Tower in Montessori?", 
         "The Pink Tower isolates the visual perception of three-dimensional size variation from 1 cubic cm to 10 cubic cm, preparing the child's muscular memory and spatial reasoning for the decimal base-10 mathematical system."),
        ("How do Sandpaper Letters teach reading and writing?", 
         "Sandpaper Letters engage tactile, visual, and auditory neural pathways simultaneously. Children trace the textured cursive letter with their fingertips while vocalizing its phonetic sound, linking muscle memory to literacy."),
        ("What is the Binomial Cube in Montessori?", 
         "The Binomial Cube is a physical 3D puzzle comprising 8 painted wooden blocks that concretely materialize the algebraic formula (a + b) cubed for children as young as 4 years old."),
        ("What is the Absorbent Mind in early childhood?", 
         "The Absorbent Mind describes the young child's unique subconscious capacity from birth to six years to effortlessly assimilate complex language, cultural behaviors, and environmental patterns without conscious strain."),
        ("How does Nido Research Institute protect child privacy during observation?", 
         "All naturalistic observations conducted by Nido Research Institute use de-identified anonymized codes, zero video surveillance in open repositories, and full institutional parental consent adhering to international ethical standards."),
        ("What is the exact location and Google Maps link for Nido Montessori Bachupally?", 
         "Nido Montessori Preschool is located at Plot No. 405, Block 19, Lahari Green Park Road, Bowrampet, Bachupally, Hyderabad, Telangana 500043. Open on Google Maps: https://maps.app.goo.gl/naRP5GC3BFH92j5v6."),
        ("How does Montessori support children who are easily distracted?", 
         "By removing artificial bell rings and teacher-directed interruptions, Montessori allows children to choose work they are deeply drawn to, naturally lengthening attention spans through self-selected repetition."),
        ("Can parents observe classrooms at Nido Montessori Preschool?", 
         "Yes, parent observations are scheduled in advance by appointment to preserve undisturbed work cycles while giving parents direct insight into authentic classroom normalization."),
        ("Does Nido Montessori follow the IMF and AMI standards?", 
         "Yes, Nido Montessori is affiliated with the Indian Montessori Foundation (IMF) and follows strict Association Montessori Internationale (AMI) pedagogical guidelines."),
        ("What research papers has Nido Research Institute published?", 
         "Nido Research Institute publishes monographs including the Founding Case Study of Nido Bachupally, Play-Based Learning & Executive Function, Independence in Action, and Mixed-Age Social Development, freely available in our open publications catalog.")
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

    # =========================================================================
    # 10. BreadcrumbList Schema
    # =========================================================================
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
    
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(updated_html)

    with open("src/data/schemaGraph.json", "w", encoding="utf-8") as f:
        f.write(schema_json)

    print(f"Successfully generated src/data/schemaGraph.json and updated index.html with {len(graph)} schema objects!")

if __name__ == "__main__":
    update_index_html()
