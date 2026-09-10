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
    shortDescription: "Complete construction of independent family houses, builder floors, duplex homes, and residential buildings up to 4–5 floors.",
    iconName: "Home",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    badge: "Residential Specialist",
    overview: "GG Construction Co. specializes in constructing sturdy, practical residential buildings including independent houses, family floors, and apartment buildings up to 4–5 floors. We coordinate all stages from foundation footings and brickwork to casting, plastering, plumbing, and electrical finishing with hands-on site supervision.",
    capabilities: [
      "Independent family home and villa construction",
      "Builder floor buildings (G+3 and G+4 floors)",
      "Foundation footing excavation and RCC column casting",
      "Quality brickwork and plastering with verified cement and sand",
      "Plumbing, electrical conduit laying and finishing work",
      "Flooring, tile setting, interior painting and waterproofing",
    ],
    benefits: [
      {
        title: "Hands-On Supervision",
        description: "Our experienced team is on-site to inspect steel tie-ups, concrete casting, and brick alignment at every stage.",
      },
      {
        title: "Direct Material Quality",
        description: "Our building materials supply arm ensures proper cement, verified TMT steel, and sound bricks are used directly on your home.",
      },
      {
        title: "Transparent Cost Estimation",
        description: "We provide clear itemized estimates for materials and labor so you know your project costs upfront.",
      },
      {
        title: "Realistic Timelines",
        description: "We establish practical, achievable construction schedules and keep you updated as each floor progresses.",
      },
    ],
    process: [
      {
        stepNumber: "01",
        title: "Plot Inspection & Requirement Discussion",
        description: "Review of plot dimensions, soil condition, floor plan requirements, and target budget.",
        deliverables: ["Initial Scope Summary", "Basic Layout Plan", "Preliminary Cost Estimate"],
      },
      {
        stepNumber: "02",
        title: "Foundation & Substructure",
        description: "Excavation, anti-termite treatment, PCC base, RCC footings, plinth beam casting, and damp-proof course.",
        deliverables: ["Plinth Level Verification", "Foundation Quality Check", "Plinth Beam Inspection"],
      },
      {
        stepNumber: "03",
        title: "Superstructure & Brickwork",
        description: "RCC columns, beam casting, slab casting per floor, followed by exterior and interior brick wall masonry.",
        deliverables: ["Slab Curing Records", "Brickwork Alignment Check", "Window & Door Frame Fixing"],
      },
      {
        stepNumber: "04",
        title: "Plumbing, Electrical & Plaster",
        description: "Concealed electrical and plumbing lines, internal wall plastering, exterior weather-coat plaster, and tile base prep.",
        deliverables: ["Plumbing Pressure Test", "Conduit Verification", "Plaster Curing Confirmation"],
      },
      {
        stepNumber: "05",
        title: "Finishing & Handover",
        description: "Flooring, wall putty, painting, sanitary ware fitting, doors, and final client walkthrough for handover.",
        deliverables: ["Completed Building Handover", "Final Itemized Accounts", "Ongoing Support Contact"],
      },
    ],
    relatedProjectSlugs: ["residential-building-4-floors", "family-residence-3-floors"],
    faqs: [
      {
        question: "What is the typical scale of residential buildings you construct?",
        answer: "We typically build residential projects ranging from single-family houses to 3, 4, and 5-floor residential apartment/builder floor buildings.",
      },
      {
        question: "Can we source our own finishing materials like tiles and sanitary fittings?",
        answer: "Yes. Clients are welcome to choose their own tiles, paint shades, and sanitary fixtures, or we can assist in procuring them through our trade contacts.",
      },
    ],
  },
  {
    slug: "commercial-construction",
    title: "Commercial Building Construction",
    shortDescription: "Construction of small to medium-sized commercial premises, office buildings, and retail complexes up to 4–5 floors.",
    iconName: "Building2",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    badge: "Commercial Buildings",
    overview: "We construct practical, functional commercial buildings up to 4–5 floors tailored for local businesses, corporate offices, clinics, and professional practices. Our focus is on open floor layouts, durable finishes, reliable plumbing and electrical distribution, and timely completion.",
    capabilities: [
      "Low-rise commercial office buildings (up to 4–5 floors)",
      "Open floor-plate designs for office cubicles and meeting rooms",
      "Sturdy commercial staircases and lift shaft construction",
      "Heavy-duty commercial vitrified tile and granite flooring",
      "Commercial electrical power distribution and backup wiring prep",
      "Exterior modern facade, ACP panel, or glass elevation work",
    ],
    benefits: [
      {
        title: "Optimized Usable Space",
        description: "We plan beam and column positions to maximize open commercial floor space for tenants or your own business.",
      },
      {
        title: "Durable Commercial Finishes",
        description: "Using quality cement, heavy-duty tiles, and weather-resistant exterior finishes designed for regular foot traffic.",
      },
      {
        title: "Direct Material Logistics",
        description: "Our material supply arm keeps construction moving without waiting on delayed local retail dealers.",
      },
      {
        title: "Practical Commercial Advice",
        description: "We guide you on cost-effective construction choices that look professional while keeping capital expenditure reasonable.",
      },
    ],
    process: [
      {
        stepNumber: "01",
        title: "Commercial Needs Assessment",
        description: "Reviewing commercial plot zoning, client parking requirements, intended tenant use, and floor heights.",
        deliverables: ["Commercial Feasibility Note", "Floor Height Recommendations", "Preliminary BOQ"],
      },
      {
        stepNumber: "02",
        title: "RCC Frame & Slab Casting",
        description: "Constructing columns, lift shaft walls, and RCC slabs designed for commercial live loads per standard building codes.",
        deliverables: ["Frame Inspection", "Slab Casting Verification", "Lift Well Alignment"],
      },
      {
        stepNumber: "03",
        title: "Masonry & Core Services",
        description: "Brick or AAC block partition walls, washroom blocks, commercial plumbing risers, and heavy electrical conduit runs.",
        deliverables: ["Masonry Inspection", "Riser Testing", "Concealed Piping Checks"],
      },
      {
        stepNumber: "04",
        title: "Commercial Finishes & Handover",
        description: "High-traffic floor tiles, glass or ACP facade installation, entrance foyer finishes, and final utility testing.",
        deliverables: ["Ready-for-Fitout Handover", "As-Built Utility Guide", "Final Statement of Accounts"],
      },
    ],
    relatedProjectSlugs: ["commercial-building-4-floors", "shop-and-office-building-3-floors"],
    faqs: [
      {
        question: "What is the maximum height of commercial buildings you undertake?",
        answer: "We focus on low-rise and mid-rise commercial buildings typically up to 4 or 5 floors.",
      },
      {
        question: "Can you provide bare-shell handover for tenant customization?",
        answer: "Yes, we frequently complete bare-shell or semi-finished commercial buildings where tenants install customized interiors.",
      },
    ],
  },
  {
    slug: "turnkey-construction",
    title: "Turnkey Building Construction",
    shortDescription: "Complete single-point construction responsibility from plot excavation and civil structure to interior handover.",
    iconName: "KeyRound",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1600&q=80",
    badge: "Complete Building Contract",
    overview: "Our Turnkey Building Construction service is designed for property owners who want a complete, single-point solution. We manage the entire building process—from raw earth excavation and foundation casting to masonry, roofing, plastering, wiring, plumbing, and painting—delivering a move-in ready building on time.",
    capabilities: [
      "Single-point contractor responsibility for civil and finishing work",
      "Direct procurement of verified cement, TMT steel, and brick supplies",
      "Coordination of skilled masons, steel fixers, carpenters, and painters",
      "Complete plumbing and electrical sanitary installation",
      "Quality floor tiling, granite counters, doors, and window installations",
      "Final site cleanup and keys handover with complete billing transparency",
    ],
    benefits: [
      {
        title: "Single Accountability",
        description: "No disputes between different labor contractors or material vendors. We handle everything under one roof.",
      },
      {
        title: "Material Cost Advantage",
        description: "Direct access to our own building materials division eliminates dealer markups on cement, sand, and steel.",
      },
      {
        title: "Owner Peace of Mind",
        description: "You don't need to spend every day managing laborers or chasing suppliers; we handle daily site coordination.",
      },
      {
        title: "Transparent Progress Billing",
        description: "Payments are tied directly to visible project milestones (foundation, each slab, brickwork, plaster, and finishing).",
      },
    ],
    process: [
      {
        stepNumber: "01",
        title: "Scope & Specification Agreement",
        description: "Defining structural specifications, tile grades, sanitary brands, and milestone payment schedules.",
        deliverables: ["Signed Agreement", "Detailed Specification Sheet", "Milestone Schedule"],
      },
      {
        stepNumber: "02",
        title: "Foundation to Plinth",
        description: "Earthwork excavation, footing casting, anti-termite treatment, and plinth beam completion.",
        deliverables: ["Plinth Milestone Inspection", "Material Testing Review"],
      },
      {
        stepNumber: "03",
        title: "Floor Slab Castings",
        description: "Sequential casting of columns, beams, and slabs up to the terrace floor with proper curing periods.",
        deliverables: ["Slab Completion Certificates", "Weekly Progress Photos"],
      },
      {
        stepNumber: "04",
        title: "Finishing & Handover",
        description: "Masonry, plastering, electrical, plumbing, tiling, painting, and thorough walkthrough before final handover.",
        deliverables: ["Move-In Ready Handover", "Warranty on Workmanship", "Final Settlement"],
      },
    ],
    relatedProjectSlugs: ["residential-building-4-floors", "mixed-use-building-5-floors"],
    faqs: [
      {
        question: "How are payments structured on a turnkey building contract?",
        answer: "Payments are divided into milestone stages: advance on signing, foundation completion, each roof slab casting, plaster completion, and final handover.",
      },
      {
        question: "Who purchases the building materials on a turnkey contract?",
        answer: "On turnkey contracts, we supply and manage all primary materials (cement, steel, bricks, sand, aggregate) directly through our materials division.",
      },
    ],
  },
  {
    slug: "industrial-construction",
    title: "Low-Rise & Workshop Construction",
    shortDescription: "Construction of low-rise storage godowns, light manufacturing workshops, and commercial sheds.",
    iconName: "Warehouse",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    badge: "Godowns & Workshops",
    overview: "We undertake practical low-rise industrial building construction for local businesses needing godowns, storage sheds, workshops, or light assembly spaces. We construct reinforced concrete flooring, durable masonry boundary walls, and sturdy structural roofing.",
    capabilities: [
      "Low-rise warehouse and storage godown construction",
      "Small workshop and light industrial shed building",
      "Reinforced concrete industrial floor slabs for equipment loads",
      "Boundary wall construction, security gates, and perimeter fencing",
      "Ventilated roofing, water drainage channels, and loading bays",
      "Heavy electrical load wiring prep and industrial lighting layout",
    ],
    benefits: [
      {
        title: "Durable Floor Construction",
        description: "We cast high-strength concrete floors properly cured to withstand vehicular movement and goods stacking.",
      },
      {
        title: "Speedy Execution",
        description: "Simple, robust structural design that allows workshops and godowns to become operational quickly.",
      },
      {
        title: "Practical Material Sourcing",
        description: "Direct supply of structural steel sections, cement, and aggregates to keep storage construction cost-effective.",
      },
      {
        title: "Weatherproof Construction",
        description: "Proper rainwater drainage, roof overhangs, and waterproofing to safeguard stored goods.",
      },
    ],
    process: [
      {
        stepNumber: "01",
        title: "Site & Load Assessment",
        description: "Evaluating soil stability, vehicle turning space, floor loading requirements, and shed dimensions.",
        deliverables: ["Layout Proposal", "Floor Thickness Recommendation", "Cost Estimate"],
      },
      {
        stepNumber: "02",
        title: "Foundations & Heavy Flooring",
        description: "Excavation, base compaction, reinforcement mesh laying, and heavy-duty concrete floor casting.",
        deliverables: ["Compaction Verification", "Floor Pour Inspection"],
      },
      {
        stepNumber: "03",
        title: "Superstructure & Roof Installation",
        description: "Brick or block side masonry, structural columns, roof trusses, and profile sheet installation.",
        deliverables: ["Roof Water-tightness Check", "Side Masonry Quality Check"],
      },
      {
        stepNumber: "04",
        title: "Shutters, Electrical & Handover",
        description: "Rolling shutter installation, industrial lighting and power connection points, and site handover.",
        deliverables: ["Completed Shed Handover", "Operational Signoff"],
      },
    ],
    relatedProjectSlugs: ["commercial-building-4-floors"],
    faqs: [
      {
        question: "Do you build large logistics parks or mega industrial plants?",
        answer: "No. We focus on small to medium-sized commercial sheds, storage godowns, and local workshop buildings.",
      },
    ],
  },
  {
    slug: "renovation-remodeling",
    title: "Renovation & Remodeling",
    shortDescription: "Structural additions, floor additions, home remodeling, and complete building modernization.",
    iconName: "Hammer",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    badge: "Building Remodeling",
    overview: "GG Construction Co. provides comprehensive renovation, remodeling, and structural improvement services. Whether you want to add an additional floor to an existing residential building, reconfigure commercial shop layouts, or modernise an older property, we deliver safe, clean execution with minimal disruption.",
    capabilities: [
      "Additional floor construction on existing building structures",
      "Internal wall removal and structural beam retrofitting",
      "Complete bathroom, kitchen, and living space renovation",
      "Exterior facade rejuvenation, plaster repair, and weather coating",
      "Dampness treatment, terrace waterproofing, and roof resurfacing",
      "Complete electrical rewiring and modern plumbing replacement",
    ],
    benefits: [
      {
        title: "Structural Safety First",
        description: "We assess the existing building's columns and foundations before recommending any floor additions or wall modifications.",
      },
      {
        title: "Quality Upgraded Materials",
        description: "Replacing aging pipes, degraded wiring, and worn tiles with durable, modern materials sourced from our supply arm.",
      },
      {
        title: "Clean, Organized Site Management",
        description: "We take care to manage debris disposal and maintain clean working conditions to minimize inconvenience to occupants.",
      },
      {
        title: "Enhanced Property Value",
        description: "A well-executed renovation significantly improves daily comfort and enhances market rental or resale value.",
      },
    ],
    process: [
      {
        stepNumber: "01",
        title: "Structural Inspection & Scope",
        description: "Assessing existing column conditions, foundation strength, crack inspection, and client renovation goals.",
        deliverables: ["Renovation Assessment Report", "Proposed Layout", "Itemized Budget"],
      },
      {
        stepNumber: "02",
        title: "Demolition & Structural Prep",
        description: "Controlled removal of old plaster, non-loadbearing walls, or damaged flooring with safe debris hauling.",
        deliverables: ["Demolition Safety Clearance", "Structural Tie-in Prep"],
      },
      {
        stepNumber: "03",
        title: "New Construction & Services",
        description: "Erecting new walls, new floor casting (if floor addition), and rough-in plumbing and electrical lines.",
        deliverables: ["Rough-in Verification", "Waterproofing Test"],
      },
      {
        stepNumber: "04",
        title: "Finishes & Final Touch-up",
        description: "Tiling, wall skimming, painting, fixture installation, and thorough site cleaning before handover.",
        deliverables: ["Renovated Space Handover", "Final Bill Reconciliation"],
      },
    ],
    relatedProjectSlugs: ["residential-renovation-floors", "commercial-showroom-renovation"],
    faqs: [
      {
        question: "Can an extra floor be added to my existing 2-story building?",
        answer: "We inspect your existing column size, footing type, and wall structure. If the structure is sound, we plan a lightweight or standard RCC addition.",
      },
    ],
  },
  {
    slug: "site-development",
    title: "Small Office & Shop Construction",
    shortDescription: "Construction and fit-out of neighborhood commercial shops, showrooms, and local office premises.",
    iconName: "Store",
    heroImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80",
    badge: "Shops & Showrooms",
    overview: "We construct and prepare retail shops, showrooms, and boutique commercial offices. From sturdy rolling shutter entrances and glazed storefronts to durable flooring and electrical provision for heavy signage, we deliver retail-ready spaces tailored for business owners.",
    capabilities: [
      "Commercial retail shop construction and street-level storefronts",
      "Small boutique offices and professional consultation suites",
      "Sturdy motorized or manual rolling shutter installation",
      "Polished vitrified tile, Kota stone, or granite shop flooring",
      "Adequate power circuitry for commercial refrigeration and display lighting",
      "Glass front elevations and signage support framing",
    ],
    benefits: [
      {
        title: "Commercial Street Visibility",
        description: "Designed with clean glass frontages and maximum street visibility to attract customers to your business.",
      },
      {
        title: "Sturdy & Secure",
        description: "High-strength steel rolling shutters, secure lock points, and durable masonry for business security.",
      },
      {
        title: "Prompt Turnaround",
        description: "We understand that every day spent in construction is a day without business revenue; we work to tight schedules.",
      },
      {
        title: "Direct Material Supplies",
        description: "Supplying quality cement, sand, and bricks directly to keep shop construction costs controlled.",
      },
    ],
    process: [
      {
        stepNumber: "01",
        title: "Shop Requirements & Layout",
        description: "Assessing shop dimensions, display window placement, rolling shutter height, and utility needs.",
        deliverables: ["Shop Floor Layout", "Estimate of Materials & Labor"],
      },
      {
        stepNumber: "02",
        title: "Civil Work & Frontage",
        description: "Brick masonry, RCC beam support for rolling shutter, plastering, and floor base preparation.",
        deliverables: ["Masonry Inspection", "Plaster Curing Confirmation"],
      },
      {
        stepNumber: "03",
        title: "Shutters, Tiling & Electrical",
        description: "Installing rolling shutters, heavy-duty commercial flooring, and circuit wiring for lights and equipment.",
        deliverables: ["Shutter Operation Check", "Electrical Circuit Check"],
      },
      {
        stepNumber: "04",
        title: "Handover for Store Setup",
        description: "Final paint coat, glass installation, and key handover ready for commercial display shelving.",
        deliverables: ["Ready-to-Trade Handover", "Final Invoice"],
      },
    ],
    relatedProjectSlugs: ["commercial-showroom-renovation", "shop-and-office-building-3-floors"],
    faqs: [
      {
        question: "Can you construct shops with attached storage mezzanine floors?",
        answer: "Yes, where ceiling heights permit, we frequently build sturdy steel or RCC mezzanine floors for extra inventory storage.",
      },
    ],
  },
  {
    slug: "project-management",
    title: "Building Maintenance & Improvement",
    shortDescription: "Essential structural repair, terrace waterproofing, plumbing overhauls, and routine building upkeep.",
    iconName: "Wrench",
    heroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
    badge: "Building Care",
    overview: "Regular building maintenance prevents minor seepage or hairline cracks from turning into costly structural headaches. GG Construction Co. provides practical maintenance and repair services for residential buildings, apartment blocks, and commercial premises.",
    capabilities: [
      "Terrace and parapet wall waterproofing to prevent monsoon leaks",
      "Repair of concrete spalling, exposed rebar treatment, and crack filling",
      "Overhead water tank repair, cleaning, and waterproof coating",
      "Replacement of aging galvanized iron (GI) pipes with modern CPVC/UPVC lines",
      "Drainage pipe unblocking, line realignment, and inspection chamber repairs",
      "Exterior building repainting and weather-shield coatings",
    ],
    benefits: [
      {
        title: "Early Problem Resolution",
        description: "Fixing seepage and plaster cracks early protects reinforcement steel from internal rusting.",
      },
      {
        title: "Experienced Repair Masons",
        description: "Our skilled workmen know how to properly treat concrete and masonry issues rather than just covering them with paint.",
      },
      {
        title: "Direct Material Access",
        description: "We use tested waterproofing polymers, repair mortars, and certified piping from our supply division.",
      },
      {
        title: "Reliable Response",
        description: "A local, accessible team that homeowners and building societies can contact directly.",
      },
    ],
    process: [
      {
        stepNumber: "01",
        title: "Site Inspection & Problem Diagnosis",
        description: "Inspecting dampness, seepage origin, structural cracks, or plumbing issues across the property.",
        deliverables: ["Problem Diagnosis Note", "Recommended Solution & Estimate"],
      },
      {
        stepNumber: "02",
        title: "Surface Preparation & Treatment",
        description: "Chipping loose plaster, cleaning exposed rebar, rust converter application, or waterproofing surface prep.",
        deliverables: ["Substrate Preparation Check"],
      },
      {
        stepNumber: "03",
        title: "Repair Execution",
        description: "Applying polymer repair mortar, laying waterproofing membranes, or installing replacement pipe runs.",
        deliverables: ["Ponding / Leakage Test for Waterproofing"],
      },
      {
        stepNumber: "04",
        title: "Re-plastering & Paint Touchup",
        description: "Restoring wall surfaces with matched plaster and paint, cleaning the work area, and final signoff.",
        deliverables: ["Completed Repair Signoff", "Maintenance Tips"],
      },
    ],
    relatedProjectSlugs: ["residential-renovation-floors"],
    faqs: [
      {
        question: "How do you treat terrace water leakage?",
        answer: "We inspect for cracks in the screed, repair joint gaps, apply polymer-modified waterproofing coats, and ensure proper slope toward rainwater drain outlets.",
      },
    ],
  },
  {
    slug: "construction-planning",
    title: "Construction Planning & Material Estimation",
    shortDescription: "Practical bill of quantities (BOQ), material requirement calculations, and budget estimation for building owners.",
    iconName: "FileSpreadsheet",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    badge: "Budget & Planning",
    overview: "Before laying the first brick, knowing how much cement, steel, sand, and bricks your project needs is vital. We help building owners and small contractors prepare realistic material estimates, stage-wise budget plans, and construction timelines so projects finish without budget shocks.",
    capabilities: [
      "Detailed material quantity estimation (cement bags, steel tonnage, bricks, sand volume)",
      "Stage-by-stage construction cost breakdown for 1 to 5 floor buildings",
      "Material requirement scheduling to prevent site overstocking and wastage",
      "Comparison of construction options (e.g. red bricks vs. AAC blocks)",
      "Independent contractor quote evaluation and item-rate validation",
      "Milestone-linked cash-flow planning for building owners",
    ],
    benefits: [
      {
        title: "Avoid Cost Overruns",
        description: "Accurate material calculation prevents emergency mid-project budget shortages.",
      },
      {
        title: "Prevent Material Wastage",
        description: "Knowing exact stage-wise quantities means you order cement and sand only when needed on site.",
      },
      {
        title: "Fair Market Pricing",
        description: "Backed by our daily experience in building material trade, our estimates reflect real local market rates.",
      },
      {
        title: "Empowered Decision Making",
        description: "Compare trade-offs between different building materials with clear price and durability facts.",
      },
    ],
    process: [
      {
        stepNumber: "01",
        title: "Drawing & Requirement Review",
        description: "Analyzing your floor plans, proposed number of floors, built-up area, and desired finishing specifications.",
        deliverables: ["Scope Definition"],
      },
      {
        stepNumber: "02",
        title: "Material Quantity Takeoff",
        description: "Calculating volume of concrete, steel reinforcement weights, brick counts, and plaster areas.",
        deliverables: ["Itemized Quantity Sheet"],
      },
      {
        stepNumber: "03",
        title: "Cost Estimation & Scheduling",
        description: "Applying realistic material and labor rates to compile a stage-by-stage budget and delivery schedule.",
        deliverables: ["Comprehensive Project Cost Estimate", "Stage-wise Cash Flow Guide"],
      },
    ],
    relatedProjectSlugs: ["residential-building-4-floors", "commercial-building-4-floors"],
    faqs: [
      {
        question: "Can you provide a material estimate if I have my own labor contractor?",
        answer: "Yes. We frequently provide material estimates and supply materials to owners who have their own masons or labor teams.",
      },
    ],
  },
  {
    slug: "engineering-coordination",
    title: "Site Coordination & Quality Supervision",
    shortDescription: "On-site supervision, contractor coordination, and material quality checks for ongoing building projects.",
    iconName: "ClipboardCheck",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1600&q=80",
    badge: "On-Site Supervision",
    overview: "Proper building execution depends on careful on-site oversight. We provide site coordination services for residential and commercial building projects, checking that steel reinforcement matches drawings, concrete is properly vibrated and cured, and masonry walls are plumb and true.",
    capabilities: [
      "On-site inspection of rebar placement and cover blocks prior to slab casting",
      "Concrete mixing proportion checks and slump consistency monitoring",
      "Supervision of curing periods for slabs, columns, and brickwork",
      "Checking masonry plumb, mortar ratios, and joint thicknesses",
      "Coordination between masonry, plumbing, and electrical trade workers",
      "Daily progress updates and material consumption tracking for the owner",
    ],
    benefits: [
      {
        title: "Quality Assurance",
        description: "Ensures labor contractors follow proper building practices instead of taking shortcuts during casting.",
      },
      {
        title: "Material Verification",
        description: "Verify that specified steel grades and cement types are used correctly on the jobsite.",
      },
      {
        title: "Less Stress for Owners",
        description: "Owners who cannot visit the site every day get independent, experienced supervision.",
      },
      {
        title: "Defect Prevention",
        description: "Catching mistakes during steel-tying or shuttering prevents permanent structural flaws in cured concrete.",
      },
    ],
    process: [
      {
        stepNumber: "01",
        title: "Site Onboarding & Drawing Review",
        description: "Reviewing approved drawings, contractor work schedules, and setting up inspection checkpoints.",
        deliverables: ["Inspection Checklist"],
      },
      {
        stepNumber: "02",
        title: "Milestone Site Inspections",
        description: "Visiting the site at critical stages: footing steel, plinth, column ties, slab shuttering, and before pours.",
        deliverables: ["Pre-Pour Inspection Clearance", "Photo Records"],
      },
      {
        stepNumber: "03",
        title: "Quality & Curing Monitoring",
        description: "Ensuring proper water curing schedules are strictly maintained on newly cast concrete and brickwork.",
        deliverables: ["Curing Log Confirmation", "Progress Summary for Owner"],
      },
    ],
    relatedProjectSlugs: ["residential-building-4-floors", "mixed-use-building-5-floors"],
    faqs: [
      {
        question: "Why is pre-pour inspection critical on a building site?",
        answer: "Once concrete is poured, reinforcement mistakes or missing cover blocks cannot be fixed. Inspection before casting ensures safety.",
      },
    ],
  },
];
