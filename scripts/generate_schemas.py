#!/usr/bin/env python3
"""
Generates the authentic, verified Schema.org JSON-LD Knowledge Graph for
NIDO Research Institute (https://research.nidomontessori.in).

Strictly adheres to white-hat SEO & Google Search Essentials:
- Zero fake reviews or aggregate ratings.
- Zero fake scholar/affiliate claims.
- Zero unregistered DOIs.
- Only factual, entity-connected nodes matching visible page content.
- Consistent trailing-slash canonical URLs matching Next.js trailingSlash: true.
"""

import json
import os

def build_schemas():
    SITE_URL = "https://research.nidomontessori.in"
    SCHOOL_URL = "https://nidomontessori.in"

    graph = []

    # =========================================================================
    # 1. Base Organizations & WebSite
    # =========================================================================
    # Associated Primary School (Local Educational Entity)
    graph.append({
        "@type": ["EducationalOrganization", "Preschool"],
        "@id": f"{SCHOOL_URL}/#school",
        "name": "Nido Montessori Preschool",
        "alternateName": ["Nido Montessori", "Nido Preschool Bachupally", "Nido Montessori School"],
        "url": f"{SCHOOL_URL}/",
        "logo": f"{SITE_URL}/images/logo.png",
        "image": f"{SITE_URL}/images/WhatsApp%20Image%202026-09-02%20at%2011.50.47%20AM.jpeg",
        "telephone": "+91 96188 53888",
        "email": "info@nidomontessori.in",
        "hasMap": "https://maps.app.goo.gl/naRP5GC3BFH92j5v6",
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
        "parentOrganization": {
            "@type": "EducationalOrganization",
            "@id": "https://blueblocks.in/#school",
            "name": "Blue Blocks Complete Montessori School",
            "alternateName": ["Blue Blocks School", "Blue Blocks Hyderabad"],
            "url": "https://blueblocks.in/",
            "telephone": "+91 90009 55555"
        }
    })

    # The Research Institute (Dedicated Research Arm)
    graph.append({
        "@type": ["ResearchOrganization", "EducationalOrganization"],
        "@id": f"{SITE_URL}/#organization",
        "name": "NIDO Research Institute",
        "alternateName": ["Nido Montessori Research Institute", "Nido Research Updates"],
        "url": f"{SITE_URL}/",
        "logo": f"{SITE_URL}/images/logo.png",
        "image": f"{SITE_URL}/images/WhatsApp%20Image%202026-09-02%20at%2011.50.47%20AM.jpeg",
        "parentOrganization": {"@id": f"{SCHOOL_URL}/#school"},
        "description": "Empirical early childhood research institute publishing naturalistic classroom observation data, longitudinal case studies, and developmental insights associated with Nido Montessori Preschool in Bachupally, Hyderabad, India."
    })

    # WebSite with SearchAction
    graph.append({
        "@type": "WebSite",
        "@id": f"{SITE_URL}/#website",
        "url": f"{SITE_URL}/",
        "name": "NIDO Research Institute",
        "publisher": {"@id": f"{SITE_URL}/#organization"},
        "inLanguage": "en",
        "potentialAction": {
            "@type": "SearchAction",
            "target": f"{SITE_URL}/publications/?search={{search_term_string}}",
            "query-input": "required name=search_term_string"
        }
    })

    # =========================================================================
    # 2. Key Verified Personnel & Authors
    # =========================================================================
    graph.append({
        "@type": "Person",
        "@id": f"{SITE_URL}/#person-shobha-goyal",
        "name": "Shobha Goyal",
        "jobTitle": "Founder & Pedagogical Director",
        "description": "Founder and Director of Nido Montessori Preschool, Bachupally. AMI Primary educator and lead author of the Founding Case Study on building a prepared environment.",
        "sameAs": "https://orcid.org/0009-0002-8830-5476",
        "affiliation": {"@id": f"{SITE_URL}/#organization"}
    })

    graph.append({
        "@type": "Person",
        "@id": f"{SITE_URL}/#person-pavan-goyal",
        "name": "Pavan Goyal",
        "jobTitle": "Co-Founder & Educational Architect",
        "description": "Co-founder of Blue Blocks School and educational architect supporting learning environments and Montessori design in Hyderabad.",
        "sameAs": "https://blueblocks.in/leadership",
        "affiliation": {"@id": f"{SITE_URL}/#organization"}
    })

    # =========================================================================
    # 3. Founding Scholarly Research Publication
    # =========================================================================
    study_slug = "building-a-montessori-school-from-the-ground-up-case-study"
    study_url = f"{SITE_URL}/research-studies/{study_slug}/"
    graph.append({
        "@type": "ScholarlyArticle",
        "@id": f"{study_url}#article",
        "isPartOf": {"@id": f"{SITE_URL}/#website"},
        "headline": "Building a Montessori School from the Ground Up: An Observational Case Study of the Founding Phases of Nido Montessori Preschool, Bachupally",
        "name": "Building a Montessori School from the Ground Up Case Study",
        "description": "An empirical observational case study tracing the five founding phases of Nido Montessori Preschool from conceptualization through its first cohort, analyzing material procurement, child-proportioned furniture, regulatory approvals, staff preparation, and community admissions.",
        "url": study_url,
        "mainEntityOfPage": study_url,
        "datePublished": "2026-08-29",
        "dateModified": "2026-09-06",
        "inLanguage": "en",
        "author": {"@id": f"{SITE_URL}/#person-shobha-goyal"},
        "publisher": {"@id": f"{SITE_URL}/#organization"},
        "image": f"{SITE_URL}/images/case-study/appendix-phase3-classroom-prepared.jpg",
        "encoding": {
            "@type": "MediaObject",
            "contentUrl": f"{SITE_URL}/Nido_Montessori_Founding_Case_Study.pdf",
            "encodingFormat": "application/pdf"
        },
        "about": [
            {"@type": "Thing", "name": "Montessori Education"},
            {"@type": "Thing", "name": "Prepared Environment"},
            {"@type": "Thing", "name": "Early Childhood Education"},
            {"@type": "Thing", "name": "Classroom Observation"}
        ]
    })

    # Breadcrumb for the Case Study
    graph.append({
        "@type": "BreadcrumbList",
        "@id": f"{study_url}#breadcrumb",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": f"{SITE_URL}/"},
            {"@type": "ListItem", "position": 2, "name": "Publications", "item": f"{SITE_URL}/publications/"},
            {"@type": "ListItem", "position": 3, "name": "Founding Case Study", "item": study_url}
        ]
    })

    # =========================================================================
    # 4. Hub WebPages & Hierarchical Breadcrumbs
    # =========================================================================
    core_pages = [
        ("about", "About NIDO Research Institute", "Learn about NIDO Research Institute, our founding story at Nido Montessori Preschool Bachupally, and our 6 guiding pedagogical principles."),
        ("contact", "Contact & Campus Location", "Get in touch with NIDO Research Institute & Nido Montessori Preschool in Bachupally, Hyderabad. Campus address, direct phone, and email."),
        ("research", "Research Framework & Observation Methodology", "Explore the research approach, 8 developmental domains, naturalistic observational protocols, and ethical standards of NIDO Research Institute."),
        ("publications", "Research Publications & Papers", "Browse observational research, empirical monographs, and the Founding Case Study of Nido Montessori Preschool Bachupally."),
        ("projects", "Longitudinal Inquiries & Classroom Cohorts", "Multi-year longitudinal research cohorts investigating executive function, spatial cognition, language acquisition, and mixed-age dynamics."),
        ("parent-insights", "Parent Insights & Observation Guides", "Evidence-based early childhood insights and practical reflections derived directly from authentic Montessori classroom observations."),
        ("resources", "Educational Articles & Prepared Environment Guides", "Curated articles, essays, and guidance on the prepared environment, child development, and purposeful activity.")
    ]

    for page_slug, title, desc in core_pages:
        page_url = f"{SITE_URL}/{page_slug}/"
        graph.append({
            "@type": "WebPage",
            "@id": f"{page_url}#webpage",
            "url": page_url,
            "name": f"{title} | NIDO Research Institute",
            "description": desc,
            "isPartOf": {"@id": f"{SITE_URL}/#website"},
            "breadcrumb": {"@id": f"{page_url}#breadcrumb"},
            "inLanguage": "en"
        })
        graph.append({
            "@type": "BreadcrumbList",
            "@id": f"{page_url}#breadcrumb",
            "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": f"{SITE_URL}/"},
                {"@type": "ListItem", "position": 2, "name": title, "item": page_url}
            ]
        })

    # Research Subtabs
    research_subtabs = [
        ("approach", "Our Research Approach", "Pedagogical foundations and evidence-rooted inquiry at NIDO Research Institute."),
        ("areas", "Research Areas & Domains", "Eight core developmental domains observed across Montessori classrooms."),
        ("methodology", "Observation & Methodology", "Naturalistic, non-intrusive observation protocols and longitudinal tracking."),
        ("ethics", "Research Ethics & Child Protection", "Institutional ethics safeguarding child dignity, privacy, and authentic activity.")
    ]

    for sub_slug, sub_title, sub_desc in research_subtabs:
        sub_url = f"{SITE_URL}/research/{sub_slug}/"
        graph.append({
            "@type": "WebPage",
            "@id": f"{sub_url}#webpage",
            "url": sub_url,
            "name": f"{sub_title} | NIDO Research Institute",
            "description": sub_desc,
            "isPartOf": {"@id": f"{SITE_URL}/#website"},
            "breadcrumb": {"@id": f"{sub_url}#breadcrumb"},
            "inLanguage": "en"
        })
        graph.append({
            "@type": "BreadcrumbList",
            "@id": f"{sub_url}#breadcrumb",
            "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": f"{SITE_URL}/"},
                {"@type": "ListItem", "position": 2, "name": "Research", "item": f"{SITE_URL}/research/"},
                {"@type": "ListItem", "position": 3, "name": sub_title, "item": sub_url}
            ]
        })

    # =========================================================================
    # 5. Parent Insights Articles (All 10 Real Guides)
    # =========================================================================
    parent_insights = [
        ("independence-at-home", "Independence at Home", "Why the toddler drive for self-care is developmental work rather than defiance, and small ways to support autonomy."),
        ("toddler-behaviour", "Toddler Behaviour & Resistance", "Understanding resistance, setting consistent respectful boundaries, and reducing conflict during emotional storms."),
        ("concentration", "Protecting Child Concentration", "How concentration grows when adults resist interrupting self-chosen purposeful activity in early childhood."),
        ("movement", "Movement & Physical Coordination", "Why movement is essential to cognitive development, and how to provide purposeful motor work at home."),
        ("food-and-self-feeding", "Food & Self-Feeding", "Approaching mealtimes with shared responsibility, child-sized tools, and predictable eating routines."),
        ("screen-time", "Screen Time & Real-World Engagement", "Looking at what screens replace and fostering rich hands-on real-world experiences for toddlers."),
        ("language-development", "Language Development", "Fostering rich conversation and vocabulary naturally by living in language rather than constant testing."),
        ("big-feelings", "Navigating Big Feelings", "How regulated adults provide safe boundaries and compassionate co-regulation during toddler emotional storms."),
        ("sleep-and-routines", "Sleep & Predictable Routines", "Why rhythmic, familiar daily sequences reduce bedtime anxiety and create reassurance for young children."),
        ("play", "Meaningful Open-Ended Play", "Why genuine play gives children the freedom to direct their imagination without constant adult-managed entertainment.")
    ]

    for slug, title, desc in parent_insights:
        url = f"{SITE_URL}/parent-insights/{slug}/"
        graph.append({
            "@type": "Article",
            "@id": f"{url}#article",
            "isPartOf": {"@id": f"{SITE_URL}/#website"},
            "headline": title,
            "description": desc,
            "url": url,
            "mainEntityOfPage": url,
            "inLanguage": "en",
            "publisher": {"@id": f"{SITE_URL}/#organization"},
            "author": {"@id": f"{SITE_URL}/#organization"},
            "about": [
                {"@type": "Thing", "name": "Montessori Parenting"},
                {"@type": "Thing", "name": "Child Development"}
            ]
        })
        graph.append({
            "@type": "BreadcrumbList",
            "@id": f"{url}#breadcrumb",
            "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": f"{SITE_URL}/"},
                {"@type": "ListItem", "position": 2, "name": "Parent Insights", "item": f"{SITE_URL}/parent-insights/"},
                {"@type": "ListItem", "position": 3, "name": title, "item": url}
            ]
        })

    # =========================================================================
    # 6. Resources Educational Articles (All 10 Real In-Depth Essays)
    # =========================================================================
    resource_articles = [
        ("why-does-my-child-want-to-do-everything-by-themselves", "Why Does My Child Want to Do Everything by Themselves?", "Understanding the sensitive period for autonomy and practical life activities in the home."),
        ("do-i-really-need-to-buy-montessori-toys", "Do I Really Need to Buy Montessori Toys?", "Why Montessori at home is about real-world participation rather than expensive commercial toys."),
        ("why-does-my-child-keep-doing-the-same-thing-again-and-again", "Why Does My Child Keep Doing the Same Thing Again and Again?", "How purposeful repetition develops motor precision, cognitive mastery, and deep concentration."),
        ("why-wont-my-child-sit-still", "Why Won't My Child Sit Still?", "Why movement is inextricably linked to cognitive development, and how to provide purposeful physical work."),
        ("my-child-makes-a-mess-all-day-what-am-i-supposed-to-do", "My Child Makes a Mess All Day: What Am I Supposed to Do?", "Looking beneath the mess to see developing coordination and preparing the environment for self-correction."),
        ("my-child-cries-every-morning-at-school-should-i-be-worried", "My Child Cries Every Morning at School: Should I Be Worried?", "Understanding separation, emotional transitions, and how children build security in prepared classrooms."),
        ("my-child-can-do-it-at-school-but-not-at-home-why", "My Child Can Do It at School—but Not at Home: Why?", "How accessible environments, peer modeling, and emotional release influence child independence."),
        ("is-my-child-actually-learning-if-they-arent-doing-worksheets", "Is My Child Actually Learning If They Aren't Doing Worksheets?", "Building fundamental cognitive capacities and sensorimotor foundations before formal symbols."),
        ("why-doesnt-montessori-give-children-more-homework", "Why Doesn't Montessori Give Children More Homework?", "Why real-life family conversation, outdoor exploration, and daily household work nourish childhood best."),
        ("how-do-i-set-boundaries-without-punishments-or-rewards", "How Do I Set Boundaries Without Punishments or Rewards?", "Implementing freedom within limits through natural consequences and calm adult consistency.")
    ]

    for slug, title, desc in resource_articles:
        url = f"{SITE_URL}/resources/{slug}/"
        graph.append({
            "@type": "Article",
            "@id": f"{url}#article",
            "isPartOf": {"@id": f"{SITE_URL}/#website"},
            "headline": title,
            "description": desc,
            "url": url,
            "mainEntityOfPage": url,
            "inLanguage": "en",
            "publisher": {"@id": f"{SITE_URL}/#organization"},
            "author": {"@id": f"{SITE_URL}/#organization"},
            "about": [
                {"@type": "Thing", "name": "Montessori Pedagogy"},
                {"@type": "Thing", "name": "Early Childhood Education"}
            ]
        })
        graph.append({
            "@type": "BreadcrumbList",
            "@id": f"{url}#breadcrumb",
            "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": f"{SITE_URL}/"},
                {"@type": "ListItem", "position": 2, "name": "Resources", "item": f"{SITE_URL}/resources/"},
                {"@type": "ListItem", "position": 3, "name": title, "item": url}
            ]
        })

    return {
        "@context": "https://schema.org",
        "@graph": graph
    }

def main():
    data = build_schemas()
    output_path = os.path.join(os.path.dirname(__file__), "..", "src", "data", "schemaGraph.json")
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"Successfully generated authentic Schema.org graph with {len(data['@graph'])} verified nodes.")

if __name__ == "__main__":
    main()
