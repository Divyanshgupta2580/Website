export interface ServiceProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  iconName: string;
  heroImage: string;
  badge: string;
  overview: string;
  capabilities: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  process: ServiceProcessStep[];
  relatedProjectSlugs: string[];
  faqs: ServiceFAQ[];
}

export const servicesData: ServiceItem[] = [
  {
    slug: "residential-construction",
    title: "Residential Building Construction",
    shortDescription:
      "Complete construction of independent family houses, builder floors, and residential buildings up to 4–5 floors with quality RCC structural framing and dedicated site supervision.",
    iconName: "Home",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    badge: "Residential Specialist",
    overview:
      "GG Construction Co. specializes in constructing sturdy, practical residential buildings including independent family houses, builder floors (G+3 and G+4 floors), and duplex residences across Rohini, Pitampura, and nearby areas of Delhi. We manage the construction process from foundation excavation and plinth casting to brick masonry, RCC slab pouring, plastering, and finishing with attentive on-site supervision.",
    capabilities: [
      "Independent family home and house construction",
      "Residential builder floors (G+3 and G+4 floor configurations)",
      "Foundation footing excavation, PCC bed, and RCC plinth beam casting",
      "Quality red brick and lightweight AAC block wall masonry",
      "Electrical conduit routing and sanitary plumbing line installation",
      "Smooth internal cement plastering, external weather-coat, and tile flooring",
    ],
    benefits: [
      {
        title: "Hands-On Site Supervision",
        description:
          "Our experienced construction team inspects reinforcement placement, concrete batching, and brick alignment on site every day.",
      },
      {
        title: "Durable Structural Execution",
        description:
          "We follow disciplined building standards with proper water-cement ratios and full 14–21 day curing cycles for all slabs and columns.",
      },
      {
        title: "Transparent Itemized Estimates",
        description:
          "Clear cost breakdowns for civil work, masonry, and finishing stages so you know your project budget upfront.",
      },
      {
        title: "Realistic Construction Schedules",
        description:
          "We establish practical timelines for each floor and keep you updated as each structural milestone is reached.",
      },
    ],
    process: [
      {
        stepNumber: "01",
        title: "Plot Inspection & Requirement Discussion",
        description:
          "Review of plot dimensions, soil conditions, room layouts, floor configuration, and target budget.",
        deliverables: ["Initial Scope Summary", "Layout Discussion", "Preliminary Cost Estimate"],
      },
      {
        stepNumber: "02",
        title: "Foundation & Plinth Substructure",
        description:
          "Excavation, anti-termite treatment, PCC base, RCC footings, and plinth beam casting with damp-proof course (DPC).",
        deliverables: ["Plinth Level Verification", "Foundation Quality Check", "Plinth Beam Inspection"],
      },
      {
        stepNumber: "03",
        title: "Superstructure & Slab Casting",
        description:
          "RCC columns, beam framing, formwork staging, and roof slab casting per floor with disciplined concrete curing.",
        deliverables: ["Slab Curing Records", "Structural Frame Verification", "Lintel & Beam Check"],
      },
      {
        stepNumber: "04",
        title: "Brickwork, Plumbing & Electrical",
        description:
          "Exterior and interior wall masonry, concealed electrical conduit piping, and sanitary drainage lines.",
        deliverables: ["Plumbing Pressure Test", "Conduit Verification", "Plaster Curing Confirmation"],
      },
      {
        stepNumber: "05",
        title: "Finishing & Handover",
        description:
          "Internal and external plastering, waterproofing, flooring, and a comprehensive client walkthrough before handover.",
        deliverables: ["Completed Building Handover", "Final Milestone Accounts", "Ongoing Support Contact"],
      },
    ],
    relatedProjectSlugs: ["residential-building-4-floors", "family-residence-3-floors"],
    faqs: [
      {
        question: "What types of residential buildings do you construct?",
        answer:
          "We build independent homes, builder floors (typically G+3 or G+4 floors), and residential duplexes up to approximately 4–5 floors maximum across Rohini, Pitampura, and nearby Delhi areas.",
      },
      {
        question: "How do you ensure structural quality during slab casting?",
        answer:
          "We verify steel rebar placement against structural drawings, ensure proper concrete cover, monitor mechanical vibration during the pour, and enforce strict 14 to 21-day pond curing for maximum compressive strength.",
      },
      {
        question: "Can you work from our existing architectural drawings?",
        answer:
          "Yes. If you already have approved drawings and municipal sanctions, we review them carefully, provide an itemized construction estimate, and execute the civil construction accordingly.",
      },
    ],
  },
  {
    slug: "commercial-construction",
    title: "Low-Rise Commercial Construction",
    shortDescription:
      "Construction of small commercial buildings, office complexes, and retail premises up to 4–5 floors with open floor plans and durable civil finishes.",
    iconName: "Building2",
    heroImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    badge: "Commercial Specialist",
    overview:
      "GG Construction Co. provides practical commercial construction services for low-rise commercial buildings, shops, and small offices up to 4–5 floors across Rohini, Pitampura, and nearby areas of Delhi. We build durable structures designed for high footfall, practical column placement for open commercial layouts, and robust utility infrastructure.",
    capabilities: [
      "Low-rise commercial buildings and office blocks up to 4–5 floors",
      "Wide-span beam and column layouts for flexible commercial floor plates",
      "Sturdy ground-floor storefronts and customer entrance construction",
      "Staircase, ramp, and commercial passenger lift shaft integration",
      "Heavy-duty commercial flooring and electrical sub-meter provisions",
      "Terrace waterproofing and low-maintenance exterior wall finishes",
    ],
    benefits: [
      {
        title: "Open Commercial Layouts",
        description:
          "RCC column-beam structural designs that maximize usable floor area for showrooms, offices, or retail partitions.",
      },
      {
        title: "Local Execution Experience",
        description:
          "Demonstrated construction experience in commercial hubs and neighborhood markets across Rohini, Pitampura, and Delhi.",
      },
      {
        title: "Stage-Wise Milestone Delivery",
        description:
          "Structured milestone schedules that keep commercial building owners informed and work progressing steadily.",
      },
      {
        title: "Heavy-Duty Specifications",
        description:
          "Commercial-grade concrete, durable floor screeds, and resilient waterproofing suitable for business operations.",
      },
    ],
    process: [
      {
        stepNumber: "01",
        title: "Commercial Site & Layout Planning",
        description:
          "Site access analysis, plot survey, commercial utility assessment, and review of intended occupancy.",
        deliverables: ["Site Logistics Plan", "Floor Layout Scope", "Preliminary Commercial Estimate"],
      },
      {
        stepNumber: "02",
        title: "Heavy Footing & Substructure",
        description:
          "Deep footing excavation, plinth casting, and ground preparation designed for commercial floor loadings.",
        deliverables: ["Substructure Inspection", "DPC Application Record", "Load Bearing Check"],
      },
      {
        stepNumber: "03",
        title: "RCC Frame & Wide-Span Slabs",
        description:
          "Pouring commercial columns, transfer beams, and floor slabs with monitored curing schedules.",
        deliverables: ["Frame Dimensional Verification", "Slab Pouring Log", "Curing Records"],
      },
      {
        stepNumber: "04",
        title: "Wall Enclosures & Services Channeling",
        description:
          "Masonry partition walls, high-capacity electrical conduits, commercial plumbing lines, and fire staircases.",
        deliverables: ["Utility Conduits Sign-off", "Plumbing Pressure Test", "Wall Alignment Inspection"],
      },
      {
        stepNumber: "05",
        title: "Commercial Finishing & Handover",
        description:
          "Tiling, facade plastering, rolling shutter / glass front openings, and joint site inspection for handover.",
        deliverables: ["Building Handover Document", "As-Built Scope Notes", "Operational Contacts"],
      },
    ],
    relatedProjectSlugs: ["commercial-building-4-floors", "shop-and-office-building-3-floors"],
    faqs: [
      {
        question: "What is your typical commercial building scale?",
        answer:
          "We construct small to medium low-rise commercial buildings, typically between 2 to 5 floors, including commercial shops, standalone office buildings, and retail blocks.",
      },
      {
        question: "Can you accommodate lift provisions in low-rise commercial structures?",
        answer:
          "Yes. We regularly construct reinforced RCC lift shafts and machine rooms for standard commercial passenger or freight lifts in 3 to 5-floor buildings.",
      },
      {
        question: "How do you manage construction on tight commercial plots?",
        answer:
          "We carefully schedule off-peak material deliveries, coordinate daily site cleanliness, and use compact staging areas to prevent disruption to surrounding businesses.",
      },
    ],
  },
  {
    slug: "shop-office-construction",
    title: "Shop & Office Construction",
    shortDescription:
      "Dedicated construction of retail shops, showroom spaces, and workplace office structures with practical layouts and reliable utilities.",
    iconName: "Briefcase",
    heroImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    badge: "Commercial Workspaces",
    overview:
      "GG Construction Co. constructs dedicated retail shops, local commercial markets, and small office premises across Rohini, Pitampura, and nearby areas of Delhi. We focus on durable building construction that maximizes floor visibility, storefront access, and practical utility integration for commercial tenants and business owners.",
    capabilities: [
      "Retail shop and storefront civil construction",
      "Multi-unit neighborhood market and shop row construction",
      "Office building shells and floor partitions",
      "High-durability vitrified tile flooring and heavy-duty thresholds",
      "Electrical cable conduits planned for computers, lighting, and HVAC",
      "Restroom and pantry plumbing lines for commercial occupancies",
    ],
    benefits: [
      {
        title: "Retail-Ready Spaces",
        description:
          "Practical frontage layouts with clear openings for glass facades or rolling shutters.",
      },
      {
        title: "Robust Electrical & Utility Planning",
        description:
          "Proper conduit layouts designed for commercial air conditioning, lighting, and signage.",
      },
      {
        title: "Durable Finishes",
        description:
          "Wear-resistant plastering and flooring designed to withstand daily customer foot traffic.",
      },
      {
        title: "Timely Project Execution",
        description:
          "Focused scheduling to help business owners open and begin commercial operations on time.",
      },
    ],
    process: [
      {
        stepNumber: "01",
        title: "Requirement & Commercial Review",
        description:
          "Discussion of shop dimensions, counter requirements, electrical points, and access layout.",
        deliverables: ["Scope Definition", "Shop Layout Check", "Itemized Budget"],
      },
      {
        stepNumber: "02",
        title: "Civil Shell & Masonry Construction",
        description:
          "Foundational masonry, structural framing, boundary partitions, and ceiling slab casting.",
        deliverables: ["Structural Shell Check", "Partition Layout Verification"],
      },
      {
        stepNumber: "03",
        title: "Services, Plaster & Flooring",
        description:
          "Laying concealed power cables, sanitary plumbing lines, wall plastering, and floor base preparation.",
        deliverables: ["Conduit Layout Sign-off", "Plaster Curing Confirmation"],
      },
      {
        stepNumber: "04",
        title: "Finishing & Handover",
        description:
          "Flooring tile installation, shutter/frame fittings, wall painting, and complete cleanup for occupancy.",
        deliverables: ["Final Inspection", "Commercial Handover"],
      },
    ],
    relatedProjectSlugs: ["shop-and-office-building-3-floors", "commercial-building-4-floors"],
    faqs: [
      {
        question: "Do you construct standalone shops as well as multi-shop complexes?",
        answer:
          "Yes, we build both individual retail shops and small commercial row complexes with multiple shop units.",
      },
      {
        question: "Can you assist with structural modifications for existing shops?",
        answer:
          "Yes, we undertake shop expansions, wall removals with proper structural lintel supports, and updated commercial floorings.",
      },
    ],
  },
  {
    slug: "renovation-remodeling",
    title: "Renovation & Structural Improvement",
    shortDescription:
      "Vertical floor additions, structural strengthening, layout remodeling, and building improvements for existing residential and commercial buildings.",
    iconName: "Hammer",
    heroImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    badge: "Building Renovation",
    overview:
      "GG Construction Co. provides comprehensive building renovation and structural improvement services across Rohini, Pitampura, and nearby areas of Delhi. We specialize in vertical additions (adding an upper floor or room extension to an existing structure), structural column retrofitting, dampness rectification, terrace waterproofing, and modernizing older residential and commercial buildings.",
    capabilities: [
      "Vertical floor additions (adding 3rd or 4th floor to existing residential buildings)",
      "Room extensions and structural layout reconfiguration",
      "RCC column and beam retrofitting with structural steel brackets",
      "Lightweight AAC block masonry to minimize dead load on existing foundations",
      "Terrace and roof waterproofing to permanently resolve seepage",
      "Complete replacement of aging plumbing lines, electrical conduits, and floor tiles",
    ],
    benefits: [
      {
        title: "Careful Structural Assessment",
        description:
          "We evaluate existing foundations and columns before adding floors or altering load-bearing walls.",
      },
      {
        title: "Lightweight Material Utilization",
        description:
          "Using precision AAC blocks and lightweight mortar to keep structural dead weight within safe limits.",
      },
      {
        title: "Minimal Disturbance to Occupants",
        description:
          "Systematic phasing of demolition and construction to keep disruptions to lower floors to a minimum.",
      },
      {
        title: "Long-Term Waterproofing",
        description:
          "Multi-layer terrace waterproofing systems that permanently prevent roof leakage and wall dampness.",
      },
    ],
    process: [
      {
        stepNumber: "01",
        title: "Structural Inspection & Feasibility",
        description:
          "Detailed inspection of the existing structure, foundation condition, column locations, and wall thickness.",
        deliverables: ["Feasibility Report", "Renovation Scope", "Itemized Costing"],
      },
      {
        stepNumber: "02",
        title: "Controlled Demolition & Site Prep",
        description:
          "Careful dismantling of old parapets, outdated tiles, or partition walls with protective safety measures.",
        deliverables: ["Demolition Safety Check", "Site Clearance Confirmation"],
      },
      {
        stepNumber: "03",
        title: "Structural Masonry & New Casting",
        description:
          "Column extensions, slab pouring for upper floors, and lightweight block masonry walls.",
        deliverables: ["Structural Extension Check", "Curing Records"],
      },
      {
        stepNumber: "04",
        title: "Waterproofing, Services & Plastering",
        description:
          "Terrace waterproofing, plumbing upgrades, concealed wiring, and cement plastering.",
        deliverables: ["Waterproofing Ponding Test", "Utility Verification"],
      },
      {
        stepNumber: "05",
        title: "Final Finishing & Clean Handover",
        description:
          "Flooring, wall putty, paint finish, sanitary fittings, and thorough site cleanup for handover.",
        deliverables: ["Renovated Building Handover", "Warranty Guidance"],
      },
    ],
    relatedProjectSlugs: ["family-residence-3-floors", "residential-building-4-floors"],
    faqs: [
      {
        question: "Can I add another floor to my existing house?",
        answer:
          "Yes, depending on the strength of your existing foundation and RCC columns. We assess your building first and often use lightweight AAC blocks to safely minimize the load on lower floors.",
      },
      {
        question: "How do you protect lower floors from rain during upper floor construction?",
        answer:
          "We maintain active weather protection, keep terrace drainage channels clear, and schedule roof slab casting during dry weather windows to safeguard existing living areas below.",
      },
      {
        question: "Do you handle complete bathroom and kitchen plumbing overhauls?",
        answer:
          "Yes, we replace aging galvanized iron pipes with modern CPVC/UPVC lines, test for leaks under pressure, and apply waterproofing under new tile floors.",
      },
    ],
  },
  {
    slug: "construction-planning",
    title: "Construction Planning & Execution",
    shortDescription:
      "End-to-end project coordination, material scheduling, on-site supervision, and stage-wise execution for low-rise building construction.",
    iconName: "ClipboardCheck",
    heroImage:
      "/images/construction-planning.jpg",
    badge: "Site Execution",
    overview:
      "GG Construction Co. provides comprehensive construction planning and site execution for residential and commercial building projects up to 4–5 floors across Rohini, Pitampura, and nearby areas of Delhi. We coordinate material procurement schedules, supervise masonry and concrete crews daily, and enforce milestone timelines so your building is completed smoothly without common contractor delays.",
    capabilities: [
      "Itemized construction quantity surveying and cost estimation",
      "Stage-wise milestone scheduling from excavation to handover",
      "Coordination of compliant steel, cement, bricks, and aggregate arrivals on site",
      "Daily on-site supervision of steel rebar tying, formwork, and concrete pouring",
      "Trade coordination between masons, electricians, plumbers, and plasterers",
      "Direct milestone reporting and personal walkthroughs with the property owner",
    ],
    benefits: [
      {
        title: "Disciplined Daily Supervision",
        description:
          "An experienced site manager on site to verify workmanship, mortar ratios, and rebar placement continuously.",
      },
      {
        title: "Predictable Milestone Scheduling",
        description:
          "Structured phases prevent trades from clashing and keep your building moving forward steadily.",
      },
      {
        title: "Transparent Cost Management",
        description:
          "Clear billing aligned with verified progress on site, preventing unexpected cost overruns.",
      },
      {
        title: "Local Delhi NCR Knowledge",
        description:
          "Proven coordination of materials and labor in Rohini, Pitampura, and North-West Delhi neighborhoods.",
      },
    ],
    process: [
      {
        stepNumber: "01",
        title: "Project Scope & Timeline Mapping",
        description:
          "Detailed breakdown of drawings into work packages, material quantities, and phase schedules.",
        deliverables: ["Master Schedule", "Quantity Estimate", "Milestone Breakdown"],
      },
      {
        stepNumber: "02",
        title: "Site Mobilization & Procurement Plan",
        description:
          "Arranging site storage, water supply, electricity, and staged material drop-offs.",
        deliverables: ["Site Setup Confirmation", "Delivery Calendar"],
      },
      {
        stepNumber: "03",
        title: "Civil Execution & Daily Supervision",
        description:
          "Managing active crews, inspecting reinforcement, checking concrete slump, and verifying masonry alignment.",
        deliverables: ["Weekly Progress Updates", "Quality Inspection Notes"],
      },
      {
        stepNumber: "04",
        title: "Trades Coordination & Inspections",
        description:
          "Overseeing electrical conduit routing, plumbing pressure checks, and surface plastering.",
        deliverables: ["Utility Test Certificates", "Pre-Finishing Checklist"],
      },
      {
        stepNumber: "05",
        title: "Final Walkthrough & Project Closure",
        description:
          "Complete quality snagging, fixture verification, final billing reconciliation, and handover.",
        deliverables: ["Handover Certificate", "Final Milestone Reconciliation"],
      },
    ],
    relatedProjectSlugs: ["residential-building-4-floors", "commercial-building-4-floors"],
    faqs: [
      {
        question: "How do you coordinate with clients during construction?",
        answer:
          "We hold regular on-site walkthroughs at key milestones (foundation, each slab casting, brickwork, and plastering) and provide direct photo and milestone updates.",
      },
      {
        question: "Can you manage projects where the client already has an architect?",
        answer:
          "Yes, we collaborate smoothly with your appointed architect, following structural drawings precisely and coordinating technical site queries promptly.",
      },
    ],
  },
];
