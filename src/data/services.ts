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
    slug: "turnkey-construction",
    title: "Turnkey Construction",
    shortDescription: "Complete single-point responsibility from soil testing and architectural design to MEP installation and final occupancy handover.",
    iconName: "KeyRound",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1600&q=80",
    badge: "Integrated Flagship Service",
    overview: "Our Turnkey Construction practice unifies every stage of the project lifecycle under one unified contract. By managing structural engineering, in-house material procurement, regulatory approvals, and on-site execution, we eliminate finger-pointing between contractors and deliver certainty on cost, schedule, and quality.",
    capabilities: [
      "Integrated Architectural & Structural Design Coordination",
      "Statutory Approvals & Municipal Permitting Assistance",
      "Direct Procurement of Foundation & Finishing Materials",
      "Full Mechanical, Electrical, and Plumbing (MEP) Execution",
      "Interior Fit-Out & Pre-Commissioning Testing",
      "Final Handover with Digital As-Built Documentation",
    ],
    benefits: [
      {
        title: "Single Point of Accountability",
        description: "Zero disputes between architects, civil contractors, and material vendors. GG Construction Co. carries full warranty and project risk.",
      },
      {
        title: "Material Supply Synergy",
        description: "Direct access to our materials division eliminates middleman markup and prevents site delays caused by cement or steel shortages.",
      },
      {
        title: "Rigorous Milestone Governance",
        description: "Weekly milestone audits with photogrammetric progress reports, keeping owners fully informed at every structural stage.",
      },
      {
        title: "Guaranteed Completion Timelines",
        description: "Legally backed scheduling with liquidated damages clauses for commercial certainty.",
      },
    ],
    process: [
      {
        stepNumber: "01",
        title: "Site Survey & Engineering Assessment",
        description: "Topographical survey, soil geotechnical boring tests, and preliminary feasibility study.",
        deliverables: ["Geotechnical Soil Report", "Feasibility Matrix", "Permit Checklist"],
      },
      {
        stepNumber: "02",
        title: "Architectural & Structural Finalization",
        description: "Detailed BIM 3D models, structural load calculation conforming to IS codes, and bill of quantities.",
        deliverables: ["Approved Structural Blueprints", "Itemized BOQ", "Statutory Submissions"],
      },
      {
        stepNumber: "03",
        title: "Civil Execution & Material Integration",
        description: "Foundation casting, RCC frame superstructure, masonry, and MEP conduit integration.",
        deliverables: ["Cube Test Certificates", "Reinforcement Inspection Logs", "Milestone Reports"],
      },
      {
        stepNumber: "04",
        title: "Finishing, QA Audits & Handover",
        description: "Premium architectural finishes, pressure testing of MEP lines, fire compliance audits, and key handover.",
        deliverables: ["Occupancy Readiness Dossier", "As-Built Blueprints", "Warranty Documents"],
      },
    ],
    relatedProjectSlugs: ["apex-commercial-tower", "zenith-logistics-park", "serene-villas-phase1"],
    faqs: [
      {
        question: "What is included in a turnkey construction contract with GG Construction Co.?",
        answer: "Our turnkey contracts encompass the entire scope: from site excavation, soil strengthening, RCC foundation and structure, brickwork/plastering, complete MEP (sanitary, water supply, electricals, HVAC conduit), flooring, painting, doors/windows, through to testing, commissioning, and final municipal handover readiness.",
      },
      {
        question: "How do you protect clients against material price fluctuations during construction?",
        answer: "By operating our own Building Materials Supply division, we lock in bulk purchase prices for critical inputs like TMT steel and cement, shielding client budgets from short-term market volatility.",
      },
      {
        question: "Are turnkey projects subject to third-party structural safety audits?",
        answer: "Yes, in addition to our internal NABL-aligned laboratory batch testing, we facilitate independent structural verification by certified third-party testing agencies before concrete casting.",
      },
    ],
  },
  {
    slug: "commercial-construction",
    title: "Commercial Construction",
    shortDescription: "High-performance office towers, retail complexes, and institutional facilities built for long-term commercial yield and operational efficiency.",
    iconName: "Building2",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    badge: "High-Volume Engineering",
    overview: "Commercial developments demand rapid structural turnaround without compromising life-safety, floorplate flexibility, or energy efficiency. We deploy advanced aluminum formwork, post-tensioned slabs, and pre-cast facade systems to compress timelines and optimize rentable floor area.",
    capabilities: [
      "Grade-A Corporate Headquarters & IT Parks",
      "High-Density Retail Malls & Multiplex Shells",
      "Post-Tensioned (PT) Large-Span Concrete Slabs",
      "Seismic Zone Compliant Structural Framing",
      "Centralized HVAC & High-Speed Elevator Well Construction",
      "Facade Glass Curtain Wall Engineering",
    ],
    benefits: [
      {
        title: "Maximized Usable Floor Plates",
        description: "Engineered column grids and post-tensioned technology deliver wide spans with fewer obstructing columns.",
      },
      {
        title: "Accelerated Floor-to-Floor Cycles",
        description: "System formwork allows 7-day to 10-day slab casting cycles, expediting tenant fit-out timelines.",
      },
      {
        title: "Green Building Standard Preparedness",
        description: "Structural insulation and thermal envelope engineering designed to meet IGBC Gold/Platinum baseline ratings.",
      },
      {
        title: "Heavy MEP Redundancy",
        description: "Dedicated shaft infrastructure for dual power backup, fiber telemetry, and industrial air filtration.",
      },
    ],
    process: [
      {
        stepNumber: "01",
        title: "Zoning, Floor Area & Structural Design",
        description: "Evaluating local FAR/FSI regulations, fire lane accessibility, and structural core geometry.",
        deliverables: ["FAR Compliance Audit", "Structural Core Geometry", "Basement Parking Layout"],
      },
      {
        stepNumber: "02",
        title: "Deep Basement & Retaining Wall Works",
        description: "Diaphragm walls, soldier piling, and multi-level basement excavation with dewatering systems.",
        deliverables: ["Pore Pressure Monitoring", "Earth Retention Certification"],
      },
      {
        stepNumber: "03",
        title: "Superstructure & Aluminum Formwork",
        description: "Rapid cycle core-and-slab casting using automated concrete placement booms.",
        deliverables: ["Concrete Stress Logs", "Post-Tensioning Elongation Reports"],
      },
      {
        stepNumber: "04",
        title: "Envelope, Glazing & Mechanical Integration",
        description: "Unitized glass facade installation, roof cooling towers, transformer substations, and common area finishes.",
        deliverables: ["Acoustic Test Logs", "Facade Water Infiltration Test", "Handover Certificate"],
      },
    ],
    relatedProjectSlugs: ["apex-commercial-tower", "horizon-trade-centre"],
    faqs: [
      {
        question: "Can GG Construction Co. build commercial properties in dense urban centers?",
        answer: "Yes, we specialize in urban infill construction involving deep multi-level basement excavations, anchored diaphragm walls, and night-time material staging to minimize neighborhood disruption.",
      },
      {
        question: "Do your commercial buildings comply with National Building Code (NBC) fire safety rules?",
        answer: "Strictly. Every commercial layout adheres to NBC 2016 Part 4 guidelines regarding exit stair widths, pressurized fire refuge areas, sprinkler grid layouts, and emergency vehicle maneuvering lanes.",
      },
    ],
  },
  {
    slug: "industrial-construction",
    title: "Industrial Construction",
    shortDescription: "Pre-Engineered Buildings (PEB), heavy manufacturing plants, logistics hubs, and cold-storage facilities built to heavy engineering standards.",
    iconName: "Factory",
    heroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
    badge: "Heavy Engineering",
    overview: "Industrial facilities operate under severe mechanical dynamic loads, heavy machinery vibrations, and continuous material transport. We design heavy-duty laser screed industrial flooring, high-clearance PEB superstructures, and robust effluent treatment infrastructure tailored to operational realities.",
    capabilities: [
      "Large-Span Pre-Engineered Steel Structures (PEB)",
      "FM-2 Laser Screed Superflat Industrial Flooring",
      "Heavy Machine Foundation & Gantry Crane Runway Beams",
      "Hazardous Material Containment & Spill Berms",
      "Effluent Treatment Plant (ETP) & Civil Substructures",
      "High-Bay Automated Storage Warehousing (ASRS)",
    ],
    benefits: [
      {
        title: "Vibration-Isolated Machinery Footings",
        description: "Specialized dynamic load calculations to prevent structural fatigue from high-tonnage stamping presses and turbines.",
      },
      {
        title: "Superflat Industrial Floors",
        description: "Laser-guided placement achieving tight flatness and levelness tolerances (FM-2 / TR34) for high-reach forklifts.",
      },
      {
        title: "Accelerated Erection Speed",
        description: "Precision factory-fabricated steel components assembled on site using certified mobile crane riggers.",
      },
      {
        title: "Long-Term Thermal & Corrosion Durability",
        description: "Anti-corrosive coating systems and high-reflectance insulated roofing to minimize ambient plant temperatures.",
      },
    ],
    process: [
      {
        stepNumber: "01",
        title: "Industrial Workflow & Load Engineering",
        description: "Collaborating with plant process engineers to map crane loads, floor axle weights, and utility trenches.",
        deliverables: ["Dynamic Foundation Plan", "Utility Trench Schematics", "PEB GA Drawings"],
      },
      {
        stepNumber: "02",
        title: "Sub-Base Compaction & Heavy Foundations",
        description: "Sub-grade stabilization with geo-textiles, pile foundations, and anchor-bolt placement for steel columns.",
        deliverables: ["Proctor Compaction Density Test", "Anchor Bolt Alignment Survey"],
      },
      {
        stepNumber: "03",
        title: "Structural Steel Erection & Laser Screed Slabs",
        description: "Erecting primary portal frames and pouring jointless steel fiber reinforced concrete (SFRC) slabs.",
        deliverables: ["Ultrasonic Weld Test Reports", "Floor Flatness (F-number) Audit"],
      },
      {
        stepNumber: "04",
        title: "Cladding, Fire Suppression & Industrial Handover",
        description: "Insulated sandwich panel installation, deluge fire systems, dock levelers, and power sub-station commissioning.",
        deliverables: ["Factory Inspector Compliance Dossier", "Dry Run Operations Sign-Off"],
      },
    ],
    relatedProjectSlugs: ["zenith-logistics-park", "matrix-manufacturing-facility"],
    faqs: [
      {
        question: "What floor specifications do you achieve for logistics warehouses?",
        answer: "We deliver FM-2 and FM-3 category industrial floors according to UK Concrete Society TR34 specifications, using high-performance dry-shake hardeners and laser-guided screeding to prevent joint curling and spalling.",
      },
      {
        question: "Can you provide crane-ready pre-engineered steel buildings?",
        answer: "Yes, our engineering team designs PEB structures equipped with runway beams and brackets engineered to support overhead EOT cranes from 5 MT up to 50 MT lifting capacity.",
      },
    ],
  },
  {
    slug: "residential-construction",
    title: "Residential Construction",
    shortDescription: "Architectural residences, luxury villas, and multi-family residential towers constructed with uncompromising craftsmanship and longevity.",
    iconName: "Home",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    badge: "Bespoke & Multi-Family",
    overview: "From bespoke independent villas to multi-story gated communities, our residential division blends architectural elegance with durable civil engineering. We prioritize thermal comfort, acoustic isolation between living spaces, moisture-barrier integrity, and premium material finishes.",
    capabilities: [
      "Custom Luxury Private Villas & Farmhouses",
      "Multi-Story Gated Apartment Complexes",
      "Comprehensive Basement Waterproofing Systems",
      "Thermal Insulation & Double Glazed Envelopes",
      "Acoustic Separation for Floors and Party Walls",
      "Rooftop Infinity Pools & Landscaped Terraces",
    ],
    benefits: [
      {
        title: "Zero-Dampness Guarantee",
        description: "Multi-coat polymer crystalline waterproofing across basements, wet areas, and flat roofs backed by long warranties.",
      },
      {
        title: "Refined Architectural Detailing",
        description: "Micro-tolerance alignment of stone cladding, exposed architectural concrete, and custom joinery.",
      },
      {
        title: "Optimized Indoor Air & Natural Light",
        description: "Designs engineered around cross-ventilation, daylighting studies, and passive solar shading.",
      },
      {
        title: "Turnkey Interior Integration",
        description: "Seamless handover from civil structure straight into bespoke millwork and interior lighting.",
      },
    ],
    process: [
      {
        stepNumber: "01",
        title: "Architectural Planning & Climate Study",
        description: "Sun-path analysis, room orientation, spatial planning, and structural design coordination.",
        deliverables: ["3D Spatial Renderings", "Structural CAD Sets", "Material Palette Spec"],
      },
      {
        stepNumber: "02",
        title: "Excavation & Anti-Termite Foundation",
        description: "Foundation casting with chemical anti-termite barriers and continuous crystalline moisture proofing.",
        deliverables: ["Anti-Termite Certification", "Concrete Cube Test Reports"],
      },
      {
        stepNumber: "03",
        title: "RCC Frame & Fine Masonry",
        description: "Precision brickwork/AAC block masonry with lintel bands and embedded plumbing and electrical conduits.",
        deliverables: ["Conduit Pressure Test", "Wall Plumbness Inspection"],
      },
      {
        stepNumber: "04",
        title: "Finishes, Landscaping & Move-in Clean",
        description: "Italian marble / vitrified flooring, bathroom sanitary fixtures, terrace landscaping, and final deep clean.",
        deliverables: ["Client Snag List Clearance", "Fixture Warranty Packet", "Keys to Residence"],
      },
    ],
    relatedProjectSlugs: ["serene-villas-phase1", "the-grand-residence"],
    faqs: [
      {
        question: "How do you ensure homes remain free from water leakage and dampness?",
        answer: "We apply a triple-layer waterproofing strategy: concrete integral waterproofing chemicals in all wet slabs, crystalline coatings on vertical blockwork, and elastomeric UV-resistant membranes on all terraces and balconies.",
      },
      {
        question: "Can you accommodate custom interior design modifications during construction?",
        answer: "Yes, our construction engineers work in synchronization with interior designers, allowing planned adjustments to electrical points, plumbing layouts, and false ceilings before plastering.",
      },
    ],
  },
  {
    slug: "renovation-remodeling",
    title: "Renovation & Remodeling",
    shortDescription: "Structural retrofitting, adaptive reuse, commercial remodeling, and luxury home transformations executed with minimal downtime.",
    iconName: "Hammer",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    badge: "Adaptive Engineering",
    overview: "Breathing new life into aging or structurally deficient structures requires forensic engineering. We assess existing load-bearing capacities, execute carbon-fiber retrofitting, modernize obsolete MEP systems, and redesign spatial layouts to meet contemporary demands.",
    capabilities: [
      "Commercial Building Adaptive Reuse",
      "Structural Carbon Fiber (CFRP) Strengthening",
      "Seismic Retrofitting of Concrete Columns",
      "Facade Modernization & Thermal Envelope Upgrades",
      "Live-Building Phased Renovation",
      "Complete MEP Infrastructure Overhaul",
    ],
    benefits: [
      {
        title: "Preserved Capital Investment",
        description: "Rehabilitating existing structures avoids demolition costs and reduces regulatory permitting cycles.",
      },
      {
        title: "Enhanced Structural Safety",
        description: "Jacketing and CFRP wrap technology upgrades older buildings to withstand updated seismic codes.",
      },
      {
        title: "Energy Efficiency Improvements",
        description: "Replacing obsolete glazing and HVAC networks cuts ongoing building operational expenses significantly.",
      },
      {
        title: "Operational Continuity",
        description: "Night shifts and dust-barricade staging keep existing offices or residences functioning during renovations.",
      },
    ],
    process: [
      {
        stepNumber: "01",
        title: "Forensic Structural Non-Destructive Testing (NDT)",
        description: "Rebound hammer tests, ultrasonic pulse velocity, and core drilling to map remaining structural capacity.",
        deliverables: ["Structural Health Audit", "NDT Report", "Retrofit Feasibility"],
      },
      {
        stepNumber: "02",
        title: "Temporary Shoring & Load Transfer",
        description: "Heavy hydraulic propping to relieve structural stresses prior to column strengthening or wall removal.",
        deliverables: ["Shoring Stability Certificate", "Safety Protocol Plan"],
      },
      {
        stepNumber: "03",
        title: "Structural Retrofitting & Core Modernization",
        description: "Micro-concreting, steel plate bonding, carbon wrap installation, and new MEP risers.",
        deliverables: ["Retrofit Pull-Off Tests", "MEP Pressure Logs"],
      },
      {
        stepNumber: "04",
        title: "Architectural Refinishing & Commissioning",
        description: "New facades, interior finishes, smart building management systems, and final compliance sign-offs.",
        deliverables: ["Refurbishment Warranty", "Updated As-Built Schematics"],
      },
    ],
    relatedProjectSlugs: ["heritage-courtyard-restoration"],
    faqs: [
      {
        question: "How do you check if an old building is structurally safe to renovate?",
        answer: "We perform Non-Destructive Testing (NDT) including rebound hammer tests, ultrasonic pulse velocity (UPV), and carbonation depth tests to confirm concrete integrity before creating structural modification blueprints.",
      },
      {
        question: "Can we continue occupying parts of the building while renovation is underway?",
        answer: "Yes, we specialize in phased renovation where noisy and invasive tasks are scheduled after-hours, with sealed negative-pressure dust barriers protecting occupied zones.",
      },
    ],
  },
  {
    slug: "project-management",
    title: "Project Management & EPC",
    shortDescription: "End-to-end engineering, procurement, and construction management providing budget control, quality assurance, and schedule certainty.",
    iconName: "KanbanSquare",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    badge: "Owner's Representation",
    overview: "Large developments frequently experience cost overruns due to misaligned incentives and fragmented oversight. Our Project Management Consultancy (PMC) team acts as the client’s technical representative, enforcing rigorous quality audits, contractor milestone verification, and material quantity reconciliation.",
    capabilities: [
      "Master Schedule Development (Primavera P6 & MS Project)",
      "Vendor Pre-qualification & Tender Management",
      "On-Site Quality Assurance & Material Batch Verification",
      "Earned Value Budget Tracking & Cost Variance Analysis",
      "Environmental, Health, and Safety (EHS) Site Governance",
      "Claims & Contract Dispute Resolution",
    ],
    benefits: [
      {
        title: "Zero Budget Surprises",
        description: "Independent quantity surveyor checks prevent inflated contractor billing and unauthorized variation orders.",
      },
      {
        title: "Real-Time Digital Dashboards",
        description: "Clients track site progress, material delivery logs, and milestone gates through live cloud reporting.",
      },
      {
        title: "Strict EHS Compliance",
        description: "Zero-compromise safety protocols minimizing jobsite incident risks and legal liabilities.",
      },
      {
        title: "Defect-Free Handover",
        description: "Rigorous 3-stage snagging process ensures every finish and MEP system operates to specification before final sign-off.",
      },
    ],
    process: [
      {
        stepNumber: "01",
        title: "Project Charter & Master Scheduling",
        description: "Establishing critical path methodology (CPM), work breakdown structure, and milestone payment gates.",
        deliverables: ["Master Project Charter", "Critical Path Schedule", "Cash Flow Forecast"],
      },
      {
        stepNumber: "02",
        title: "Tender Engineering & Contractor Vetting",
        description: "Scrutinizing technical bids, conducting contractor financial solvency checks, and drafting EPC agreements.",
        deliverables: ["Bid Evaluation Matrix", "Award Recommendations", "Contract Dossiers"],
      },
      {
        stepNumber: "03",
        title: "Daily Site Supervision & Quality Audits",
        description: "Resident engineers verifying formwork alignments, concrete batch tickets, and MEP pressure tests.",
        deliverables: ["Daily Progress Reports", "Non-Conformance Reports (NCR)", "Monthly Audits"],
      },
      {
        stepNumber: "04",
        title: "Testing, Commissioning & Final Billing Reconciliation",
        description: "Witnessing system commissioning, verifying contractor as-builts, and releasing final retention funds.",
        deliverables: ["Commissioning Witness Sheets", "Final Bill Clearance", "Project Closeout Report"],
      },
    ],
    relatedProjectSlugs: ["apex-commercial-tower", "zenith-logistics-park"],
    faqs: [
      {
        question: "How is your Project Management different from hiring a regular general contractor?",
        answer: "As your PMC, we serve strictly as the owner’s advocate. We do not self-certify contractor bills or conceal delays. We scrutinize every invoice against actual site measurements and enforce contractual accountability.",
      },
    ],
  },
  {
    slug: "site-development",
    title: "Site Development & Civil Infrastructure",
    shortDescription: "Bulk earthmoving, stormwater drainage, subterranean utility networks, retaining structures, and road infrastructure for large land parcels.",
    iconName: "Truck",
    heroImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80",
    badge: "Substructure & Land Works",
    overview: "Sound vertical construction requires unyielding horizontal groundwork. We undertake large-scale site preparation: clearing, grading, cut-and-fill balancing, deep stormwater holding retention ponds, sewage trunk lines, and heavy-duty internal road networks.",
    capabilities: [
      "Cut and Fill Earthwork Optimization (3D Drone Surveying)",
      "Stormwater Management & Rainwater Harvesting Ponds",
      "Gravity Sewer Networks & Underground Water Reservoirs",
      "Reinforced Soil (RS) & Gabion Retaining Walls",
      "Asphalt & PQC Concrete Internal Road Construction",
      "High-Mast Electrical Distribution & Trenching",
    ],
    benefits: [
      {
        title: "Balanced Earthwork Economics",
        description: "Advanced cut-and-fill modeling ensures zero unnecessary haulage of soil offsite, saving significant expenditure.",
      },
      {
        title: "Zero Monsoon Inundation",
        description: "Hydrological modeling sized to 50-year rainfall events protects plots from water logging and erosion.",
      },
      {
        title: "High-Load Pavement Design",
        description: "Roads designed for continuous heavy multi-axle truck movements with resilient crushed-stone sub-bases.",
      },
      {
        title: "Rapid Parcel Handover",
        description: "Systematic phasing enables vertical construction to commence on zone A while site utilities continue in zone B.",
      },
    ],
    process: [
      {
        stepNumber: "01",
        title: "Topographic LiDAR Survey & Hydrology Study",
        description: "Contour mapping, watershed catchment calculation, and flood plain assessment.",
        deliverables: ["Digital Elevation Model", "Hydrological Discharge Report", "Grading Plan"],
      },
      {
        stepNumber: "02",
        title: "Mass Grading & Retention Structures",
        description: "Heavy excavator deployment, soil compaction testing, and retaining wall construction.",
        deliverables: ["Compaction Test Sheets", "Retaining Wall Stability Log"],
      },
      {
        stepNumber: "03",
        title: "Deep Utility Trunk Line Installation",
        description: "Laying RCC hume pipes, HDPE water supply lines, electrical conduit banks, and manholes.",
        deliverables: ["Hydraulic Pressure Test", "CCTV Pipe Survey"],
      },
      {
        stepNumber: "04",
        title: "Road Sub-Bases & Surface Paving",
        description: "Wet mix macadam, prime coats, dense bituminous macadam, or PQC paving with street lighting.",
        deliverables: ["Pavement Quality Test", "As-Built Infrastructure Grid"],
      },
    ],
    relatedProjectSlugs: ["zenith-logistics-park", "serene-villas-phase1"],
    faqs: [
      {
        question: "How do you prevent post-construction road and ground settling?",
        answer: "We mandate layer-by-layer roller compaction with field moisture density tests (Proctor compaction) verified to 98% maximum dry density prior to applying pavement layers.",
      },
    ],
  },
  {
    slug: "construction-planning",
    title: "Construction Planning & BIM",
    shortDescription: "Virtual design and construction (VDC), Building Information Modeling (BIM 4D/5D), and parametric cost estimation prior to ground break.",
    iconName: "Layers",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    badge: "Virtual Pre-Construction",
    overview: "Solving engineering clashes on a computer monitor costs pennies; solving them in cured concrete costs millions. Our Virtual Design & Construction specialists build the complete structure digitally first, detecting MEP collisions, simulating construction staging, and generating accurate bill of materials.",
    capabilities: [
      "BIM LOD 300 to LOD 500 Modeling",
      "Clash Detection between Structural, MEP & Architecture",
      "4D Schedule Simulation & Staging Visualizations",
      "5D Parametric Quantity Takeoff & Cost Estimation",
      "Constructability Reviews & Value Engineering",
      "Drone-Based Photogrammetry & Progress Verification",
    ],
    benefits: [
      {
        title: "Elimination of On-Site Clashes",
        description: "Zero pipe-through-beam emergencies or duct collisions during physical execution.",
      },
      {
        title: "Accurate Procurement Quantities",
        description: "Automated quantity takeoff prevents over-ordering steel or experiencing unexpected concrete shortages.",
      },
      {
        title: "Stakeholder Alignment",
        description: "Photorealistic 3D walk-throughs ensure clients approve interior sightlines and functionality before pouring concrete.",
      },
      {
        title: "Value Engineering Cost Savings",
        description: "Identifying redundant structural weights and alternative material specifications reduces build budgets.",
      },
    ],
    process: [
      {
        stepNumber: "01",
        title: "Model Federation & Clash Audit",
        description: "Combining architectural CAD, structural Revit models, and MEP engineering drawings into a single coordinated model.",
        deliverables: ["Clash Detection Log", "Coordination Resolution Matrix"],
      },
      {
        stepNumber: "02",
        title: "4D Schedule & Staging Integration",
        description: "Linking Primavera/MS Project schedule milestones directly to 3D BIM geometry to simulate physical construction phases.",
        deliverables: ["4D Construction Simulation Video", "Staging Logistics Plan"],
      },
      {
        stepNumber: "03",
        title: "5D Cost Takeoff & Material Scheduling",
        description: "Extracting exact steel tonnage, concrete cubic meters, and duct surface areas directly from coordinated elements.",
        deliverables: ["Automated BIM BOQ", "Material Procurement Schedule"],
      },
      {
        stepNumber: "04",
        title: "Field Deployment & Shop Drawing Generation",
        description: "Exporting conflict-free 2D shop drawings for site teams and deploying cloud model viewers to site tablet computers.",
        deliverables: ["Approved Shop Drawings Set", "Cloud BIM Access Setup"],
      },
    ],
    relatedProjectSlugs: ["apex-commercial-tower", "zenith-logistics-park"],
    faqs: [
      {
        question: "What level of detail (LOD) do your BIM models provide?",
        answer: "We support models from LOD 200 (schematic concept) up to LOD 400 (fabrication-ready) and LOD 500 (as-built facilities management handover).",
      },
    ],
  },
  {
    slug: "engineering-coordination",
    title: "Engineering Coordination",
    shortDescription: "Multidisciplinary structural, geotechnical, and MEP engineering synchronization ensuring code compliance and structural longevity.",
    iconName: "Compass",
    heroImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80",
    badge: "Structural Rigor",
    overview: "A modern building is a living organism of reinforced concrete, power substations, pressurized water loops, and air exchanges. Our Engineering Coordination division bridges the gap between specialized consultants to guarantee seamless integration, seismic compliance, and code alignment.",
    capabilities: [
      "Seismic Analysis & Indian Standard (IS) Code Certification",
      "Geotechnical Settlement & Foundation Interaction Analysis",
      "Electrical Load Balancing & Transformer Substation Integration",
      "HVAC Airflow & Thermal Load Calculations",
      "Plumbing Hydraulic Calculations & Pump Sizing",
      "Acoustic & Vibration Mitigation Design",
    ],
    benefits: [
      {
        title: "IS Code Compliance Verification",
        description: "Strict adherence to IS 456 (Plain and Reinforced Concrete), IS 1893 (Earthquake Resistant Design), and IS 800 (Steel Design).",
      },
      {
        title: "Optimized MEP Equipment Capacities",
        description: "Preventing over-sized or under-sized chiller plants, transformers, and water storage sumps.",
      },
      {
        title: "Streamlined Statutory Clearances",
        description: "Pre-coordinated documentation accelerates approvals from Fire Safety, Municipal Corporations, and Environmental Boards.",
      },
      {
        title: "Extended Structural Life",
        description: "Mitigating corrosion hazards, electrolytic interactions between dissimilar metals, and expansion joint failures.",
      },
    ],
    process: [
      {
        stepNumber: "01",
        title: "Consultant Briefing & Baseline Alignment",
        description: "Harmonizing design criteria across structural, geotechnical, MEP, and acoustic engineering teams.",
        deliverables: ["Engineering Design Basis Report (DBR)", "Interface Matrix"],
      },
      {
        stepNumber: "02",
        title: "Peer Review & Cross-Discipline Audit",
        description: "Cross-checking structural reactions against foundation soil capacities and verifying shaft dimensions against MEP duct runs.",
        deliverables: ["Peer Review Memo", "Clearance Requisition Form"],
      },
      {
        stepNumber: "03",
        title: "Statutory Approval Documentation",
        description: "Compiling structural stability certificates, electrical load release requests, and environmental impact dossiers.",
        deliverables: ["Statutory Compliance Dossier", "Signed Engineer Certificates"],
      },
      {
        stepNumber: "04",
        title: "Construction Phase Quality Verification",
        description: "Field inspections to ensure rebars, anchors, and conduits are installed strictly in accordance with coordinated drawings.",
        deliverables: ["Pre-Pour Inspection Logs", "Final Coordination Sign-Off"],
      },
    ],
    relatedProjectSlugs: ["apex-commercial-tower", "the-grand-residence"],
    faqs: [
      {
        question: "Which Indian engineering codes do you prioritize during coordination?",
        answer: "We ensure compliance with IS 456 (RCC), IS 1893 (Seismic Criteria), IS 13920 (Ductile Detailing), IS 875 (Wind & Imposed Loads), National Electrical Code (NEC), and the National Building Code (NBC 2016).",
      },
    ],
  },
];
