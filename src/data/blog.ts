export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Structural Engineering" | "Real Estate Due Diligence" | "Material Science" | "Project Management";
  readTime: string;
  publishedDate: string;
  authorNamePlaceholder: string;
  authorRole: string;
  heroImage: string;
  content: {
    heading: string;
    paragraphs: string[];
    callout?: string;
  }[];
  tags: string[];
}

export const blogPostsData: BlogPost[] = [
  {
    slug: "understanding-is-1786-seismic-ductility-fe500d",
    title: "Engineering Guide: Understanding IS 1786 and Why Fe 500D TMT Steel is Critical for Seismic Zones",
    excerpt: "Why the 'D' designation in Fe 500D matters for earthquake safety, structural elongation, and preventing catastrophic brittle collapse in reinforced concrete.",
    category: "Material Science",
    readTime: "6 min read",
    publishedDate: "October 14, 2024",
    authorNamePlaceholder: "[VERIFY AUTHOR - Chief Structural Engineer]",
    authorRole: "Technical Director, Engineering Division",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    tags: ["TMT Steel", "Seismic Design", "IS 1786", "Concrete Reinforcement", "Structural Safety"],
    content: [
      {
        heading: "The Physics of Ductility in Seismic Events",
        paragraphs: [
          "During an earthquake, reinforced concrete structures are subjected to severe cyclic lateral loads. While concrete has high compressive strength, it possesses negligible tensile capacity. Steel reinforcement bars must not only carry the resultant tension, but they must also deform plastically without snapping.",
          "This ability to deform without sudden fracture is known as ductility. Without adequate ductility, a building's columns and shear walls can suffer sudden shear failure—leading to rapid structural collapse before occupants can evacuate.",
        ],
        callout: "Fe 500D guarantees a minimum total elongation at maximum force (Agt) of 16%, compared to only 12% in standard Fe 500.",
      },
      {
        heading: "Decoding the Indian Standard IS 1786:2008",
        paragraphs: [
          "The Bureau of Indian Standards (BIS) formulated IS 1786 to classify high-strength deformed steel bars. The designation 'Fe' stands for iron, '500' indicates a minimum 0.2% proof stress / yield stress of 500 N/mm², and 'D' denotes high ductility.",
          "In addition to higher elongation, Fe 500D strictly restricts carbon, sulphur, and phosphorus levels. Lower sulphur and phosphorus content (max 0.040% each) prevents internal inclusions, micro-cracks during bending, and hydrogen embrittlement.",
        ],
      },
      {
        heading: "Primary vs. Secondary Steel: The Quality Chasm",
        paragraphs: [
          "Not all rebars bearing an Fe 500D stamp are created equal. Secondary induction furnace steel often relies on melted scrap with inconsistent chemical purity and uncontrolled trace tramp elements (like copper and tin) that drastically reduce fatigue resistance.",
          "At GG Construction Co., our Building Materials division sources exclusively from primary integrated steel producers who refine virgin iron ore in basic oxygen furnaces with ladle refining. This guarantees continuous rib height, predictable modulus of elasticity, and certified carbon equivalents below 0.42%.",
        ],
      },
      {
        heading: "Best Practices on the Construction Site",
        paragraphs: [
          "Ensure rebar mandrels match IS 2502 bending diameters. Re-bending cold bars or using undersized mandrel pins induces severe micro-fissuring at bend radii, nullifying ductile benefits.",
          "Always verify batch Mill Test Certificates against the heat numbers embossed directly onto every rebar meter before approving pours.",
        ],
      },
    ],
  },
  {
    slug: "navigating-rera-compliance-and-escrow-governance",
    title: "Real Estate Due Diligence: How RERA Escrow Mechanisms Protect Homebuyers and Institutional Capital",
    excerpt: "A comprehensive breakdown of Section 4(2)(l)(D) escrow accounts, architect certification procedures, and structural defect liability clauses.",
    category: "Real Estate Due Diligence",
    readTime: "8 min read",
    publishedDate: "November 02, 2024",
    authorNamePlaceholder: "[VERIFY AUTHOR - Legal & Regulatory Counsel]",
    authorRole: "Head of Statutory Compliance & RERA Cell",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    tags: ["RERA", "Escrow Accounts", "Real Estate Law", "Due Diligence", "Buyer Protection"],
    content: [
      {
        heading: "The Paradigm Shift: From Speculation to Accountability",
        paragraphs: [
          "Prior to the enactment of the Real Estate (Regulation and Development) Act (RERA) in 2016, the Indian property market suffered from pervasive fund diversion. Capital raised from homebuyers in Project A was routinely diverted to acquire land for Project B, leaving the initial site starved of working capital and resulting in years of delay.",
          "RERA revolutionized this landscape by institutionalizing transparency, statutory disclosures, and ring-fenced financial governance.",
        ],
        callout: "70% of all customer collections must be deposited into a dedicated scheduled bank escrow account utilized solely for land and construction expenses of that specific project.",
      },
      {
        heading: "The Three-Tier Withdrawal Certification Process",
        paragraphs: [
          "Funds from the RERA project escrow account cannot be withdrawn at will. Every withdrawal requires simultaneous, independent certifications from three distinct professionals:",
          "1. The Project Architect certifies the physical percentage of construction completion. 2. The Structural Engineer verifies the technical execution against approved structural drawings. 3. A practicing Chartered Accountant certifies that the withdrawal proportion precisely matches actual expenses incurred on land and construction.",
          "This tri-party verification ensures developers can only access capital as physical progress is verified on the ground.",
        ],
      },
      {
        heading: "Section 14(3): The 5-Year Structural Defect Liability",
        paragraphs: [
          "One of the most consequential provisions for engineering firms is Section 14(3). RERA mandates that any structural defect or workmanship defect brought to the developer's notice within five years of possession must be rectified by the promoter within 30 days without charge.",
          "For developers who rely on cheap materials and sub-contractors, this clause represents an existential liability. For GG Construction Co., our vertical integration—where we manage our own concrete mixes, TMT steel, and civil execution—ensures structural permanence from day one, safeguarding our balance sheet and customer trust.",
        ],
      },
    ],
  },
  {
    slug: "post-tensioned-slabs-commercial-construction-economics",
    title: "Civil Engineering: Why Post-Tensioned (PT) Slabs are Replacing Conventional RCC in Modern Commercial Towers",
    excerpt: "Examining the structural mechanics, material tonnage savings, and rentable floorplate optimization delivered by unbonded post-tensioning.",
    category: "Structural Engineering",
    readTime: "7 min read",
    publishedDate: "December 18, 2024",
    authorNamePlaceholder: "[VERIFY AUTHOR - Senior Structural Consultant]",
    authorRole: "Principal Engineer, Commercial Vertical",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1600&q=80",
    tags: ["Post-Tensioning", "Commercial Construction", "BIM", "Structural Optimization", "Concrete Tech"],
    content: [
      {
        heading: "The Commercial Imperative: Larger Spans, Fewer Columns",
        paragraphs: [
          "In contemporary commercial office design, rentable value is directly proportional to layout flexibility. Corporate tenants and IT conglomerates demand open, uninterrupted floorplates that allow flexible workstation arrangements and clear sightlines.",
          "Conventional reinforced cement concrete (RCC) beam-and-slab systems struggle with spans exceeding 8 meters without requiring deep, obtrusive drop beams that eat into vertical ceiling heights and impede mechanical duct routing.",
        ],
        callout: "Post-tensioning enables clear spans of 10 to 14 meters with flat soffit slabs, eliminating interior beams entirely.",
      },
      {
        heading: "Structural Mechanics: Active vs. Passive Reinforcement",
        paragraphs: [
          "Traditional RCC reinforcement is passive: the steel does not resist load until the concrete has already cracked slightly and deflected under stress.",
          "In post-tensioning, high-strength 7-wire steel strands (tendons) with ultimate tensile strengths of 1860 MPa are draped in parabolic profiles inside grease-filled plastic ducts. After the concrete cures to approximately 70% design strength, hydraulic jacks tension the strands, imparting a permanent compressive pre-stress that balances structural dead loads.",
        ],
      },
      {
        heading: "The Triple Dividend: Weight, Carbon, and Speed",
        paragraphs: [
          "1. Structural Weight Reduction: PT slabs are typically 20% to 30% thinner than equivalent RCC slabs. This dead load reduction cascades through the columns and foundations, reducing required rebar tonnage throughout the building.",
          "2. Lower Embodied Carbon: Thinner slabs require significantly less cement and aggregate volume, directly contributing to green building certifications (IGBC / LEED).",
          "3. Accelerated Cycle Times: Because tendons are stressed early, formwork stripping times can be reduced to 4 to 6 days per floor, speeding up total structural delivery.",
        ],
      },
    ],
  },
];
