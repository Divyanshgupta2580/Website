export interface MaterialProduct {
  name: string;
  gradeVariants: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  applications: string[];
  packaging: string;
  minimumOrder: string;
}

export interface MaterialCategoryItem {
  slug: string;
  title: string;
  shortTitle?: string;
  subtitle: string;
  iconName: string;
  heroImage: string;
  overview: string;
  advantages: string[];
  products: MaterialProduct[];
  authorizedBrandsPlaceholder: string[];
  qualityAssuranceNotes: string;
  bulkLogisticsDetails: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedCategorySlugs: string[];
}

export const materialsData: MaterialCategoryItem[] = [
  {
    slug: "cement",
    title: "Cement & Binders",
    shortTitle: "Cement",
    subtitle: "Standard Ordinary Portland Cement (OPC 43/53) & Portland Pozzolana Cement (PPC)",
    iconName: "Layers",
    heroImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=80",
    overview: "GG Construction Co. provides dependable supply and distribution of cement for residential houses, commercial buildings, and general construction work. Sourced through established trade channels, we cater to retail, contractor, and bulk project orders with prompt local and site deliveries.",
    advantages: [
      "Supplied in fresh, factory-packed 50 kg moisture-resistant bags directly to site",
      "Choice of OPC 43/53 for structural RCC work and PPC for masonry, plastering, and tiling",
      "Competitive wholesale rates for contractor orders and full-truckload bookings",
      "Dependable local delivery scheduling to prevent work delays",
    ],
    authorizedBrandsPlaceholder: [
      "[VERIFY AVAILABLE BRANDS UPON ORDER - e.g. UltraTech / ACC / Ambuja / JK Cement / Shree / Regional Brands]",
      "[VERIFY CURRENT BAG RATE & MINIMUM TRUCKLOAD DISCOUNT]",
    ],
    qualityAssuranceNotes: "Supplied fresh from standard manufacturer dispatches conforming to Bureau of Indian Standards (IS 12269 for OPC 53, IS 8112 for OPC 43, and IS 1489 for PPC). Stored in dry, elevated warehouse bays to prevent lump formation.",
    bulkLogisticsDetails: "Supplied in standard 50 kg HDPE bags. Dispatched via local light and medium trucks directly to your construction plot or project site.",
    products: [
      {
        name: "OPC 53 Grade Cement",
        gradeVariants: ["Grade 53 Standard", "High Early Strength"],
        specifications: [
          { label: "Standard Compliance", value: "[VERIFY SPECIFICATION - IS 12269 Compliant]" },
          { label: "28-Day Strength", value: "[VERIFY SPECIFICATION - Minimum 53 MPa]" },
          { label: "Setting Time", value: "[VERIFY SPECIFICATION - Initial: >30 mins | Final: <600 mins]" },
          { label: "Recommended Use", value: "RCC columns, beams, slabs, and load-bearing structures" },
        ],
        applications: ["RCC structural frames", "Foundation footings and slabs", "Pre-cast lintels and stairs"],
        packaging: "50 kg Sealed Polypropylene Bags",
        minimumOrder: "50 Bags (2.5 MT) / Inquire for Retail",
      },
      {
        name: "PPC (Portland Pozzolana Cement)",
        gradeVariants: ["Flyash-Based Pozzolana"],
        specifications: [
          { label: "Standard Compliance", value: "[VERIFY SPECIFICATION - IS 1489 Part 1 Compliant]" },
          { label: "28-Day Strength", value: "[VERIFY SPECIFICATION - Minimum 33 MPa (Typically achieves 43+ MPa)]" },
          { label: "Workability", value: "Superior cohesion and smooth plaster finish" },
        ],
        applications: ["Brick masonry work", "Internal and external wall plastering", "Flooring screeds and tile bedding"],
        packaging: "50 kg Sealed Bags",
        minimumOrder: "50 Bags (2.5 MT)",
      },
      {
        name: "OPC 43 Grade Cement",
        gradeVariants: ["Grade 43 General Purpose"],
        specifications: [
          { label: "Standard Compliance", value: "[VERIFY SPECIFICATION - IS 8112 Compliant]" },
          { label: "28-Day Strength", value: "[VERIFY SPECIFICATION - Minimum 43 MPa]" },
        ],
        applications: ["General civil construction", "Plain cement concrete (PCC)", "Driveways and pathways"],
        packaging: "50 kg Sealed Bags",
        minimumOrder: "50 Bags",
      },
    ],
    faqs: [
      {
        question: "What is the difference between OPC 53 and PPC cement for home construction?",
        answer: "OPC 53 provides rapid early strength gain, making it ideal for structural RCC casting like slabs, columns, and beams where shuttering needs to be removed on schedule. PPC has a slower heat release, lower permeability, and produces fewer micro-cracks, making it excellent for brickwork, plastering, and water-retaining structures.",
      },
      {
        question: "How should cement bags be stored at the construction site?",
        answer: "Cement bags should always be stacked on a raised wooden platform (at least 6 inches off the ground) inside a dry, covered shed or wrapped securely in waterproof tarpaulins, kept away from damp walls.",
      },
      {
        question: "Can I order mixed quantities of OPC and PPC for my project?",
        answer: "Yes. We regularly coordinate mixed truckload dispatches combining OPC for your structural slab pour and PPC for your ongoing brickwork and plastering.",
      },
    ],
    relatedCategorySlugs: ["sand", "aggregates", "tmt-steel", "construction-chemicals"],
  },
  {
    slug: "tmt-steel",
    title: "TMT Steel & Rebars",
    shortTitle: "TMT Steel",
    subtitle: "High-Strength TMT Reinforcement Steel Bars (Fe 500 / Fe 500D)",
    iconName: "ShieldCheck",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    overview: "We supply Thermo-Mechanically Treated (TMT) steel reinforcement bars essential for reinforced concrete construction. Sourced through dependable supply networks, our rebars offer consistent rib patterns, superior bendability, and dependable yield strength for building foundations, columns, beams, and slabs.",
    advantages: [
      "Available in standard diameters: 8mm, 10mm, 12mm, 16mm, 20mm, and 25mm",
      "High-ductility Fe 500D grade suitable for building earthquake resilience",
      "Accurate weight and bundle counts with transparent billing",
      "Local site unloading and direct truck delivery",
    ],
    authorizedBrandsPlaceholder: [
      "[VERIFY AVAILABLE BRANDS - e.g. Tata Tiscon / JSW Neosteel / Jindal Panther / Kamdhenu / Regional Primary & Secondary Brands]",
      "[VERIFY CURRENT RATE PER TONNE / PER BUNDLE]",
    ],
    qualityAssuranceNotes: "Standard Fe 500 and Fe 500D rebars conforming to IS 1786 specifications, ensuring proper elongation, tensile strength, and rib bonding with concrete.",
    bulkLogisticsDetails: "Delivered in standard 12-meter straight lengths strapped in secure bundles. Dispatched by local flatbed trucks directly to your construction site.",
    products: [
      {
        name: "Fe 500D Seismic Grade TMT Rebars",
        gradeVariants: ["8mm", "10mm", "12mm", "16mm", "20mm", "25mm"],
        specifications: [
          { label: "Yield Strength", value: "[VERIFY SPECIFICATION - Minimum 500 N/mm²]" },
          { label: "Total Elongation", value: "[VERIFY SPECIFICATION - Minimum 16% (High Ductility)]" },
          { label: "Standard", value: "[VERIFY SPECIFICATION - IS 1786 Fe 500D]" },
          { label: "Length", value: "Standard 12 Meters (Straight Bundles)" },
        ],
        applications: ["RCC columns and structural beams", "Foundation mats and footings", "Roof slabs and cantilever balconies"],
        packaging: "12m Bundles with Standard Weight Tolerances",
        minimumOrder: "1 Metric Ton / Inquire for Project Lots",
      },
      {
        name: "Binding Wire & Column Stirrups",
        gradeVariants: ["18-Gauge Annealed Binding Wire", "Pre-Formed 8mm Stirrups / Rings"],
        specifications: [
          { label: "Material", value: "Mild Steel Annealed Wire / TMT Stirrups" },
          { label: "Standard Use", value: "Binding reinforcement rebar intersections and shear links" },
        ],
        applications: ["Tying rebar cages in beams and columns", "Column lateral ties / rings"],
        packaging: "25 kg Coils / Bundles",
        minimumOrder: "2 Coils / 50 kg",
      },
    ],
    faqs: [
      {
        question: "Why is Fe 500D recommended over regular Fe 500 for buildings?",
        answer: "The 'D' in Fe 500D stands for ductility. While both grades have a yield strength of 500 N/mm², Fe 500D provides higher elongation (at least 16% compared to 12%), allowing the structure to absorb earthquake vibrations safely without sudden brittle failure.",
      },
      {
        question: "How do you calculate the weight of TMT steel needed for a house?",
        answer: "As a general estimate, residential RCC construction consumes approximately 3.5 to 4.5 kg of steel per square foot of built-up area, depending on the structural drawings. Contact us with your bar bending schedule (BBS) or structural plan for an exact quote.",
      },
    ],
    relatedCategorySlugs: ["cement", "aggregates", "construction-chemicals"],
  },
  {
    slug: "bricks-blocks",
    title: "Bricks & AAC Blocks",
    shortTitle: "Bricks & Blocks",
    subtitle: "Kiln-Fired Red Clay Bricks, Lightweight AAC Blocks & Concrete Solid Blocks",
    iconName: "Boxes",
    heroImage: "https://images.unsplash.com/photo-1584463699026-df06a5e1c0c6?auto=format&fit=crop&w=1600&q=80",
    overview: "Wall masonry directly impacts structural load, thermal comfort, and plaster consumption. GG Construction Co. supplies well-baked red clay bricks, precision autoclaved aerated concrete (AAC) blocks, and concrete solid blocks for all residential and commercial building needs.",
    advantages: [
      "Well-baked red bricks offering solid compressive strength and traditional durability",
      "Lightweight AAC blocks that reduce dead weight on foundations and speed up construction",
      "Uniform block sizes requiring significantly less joint mortar and plaster",
      "Direct delivery by truckload or tractor trolley to your building plot",
    ],
    authorizedBrandsPlaceholder: [
      "[VERIFY LOCAL KILN SUPPLIERS & AAC BLOCK BRANDS - e.g. Magicrete / Biltech / Godrej / Regional Kilns]",
      "[VERIFY CURRENT RATE PER 1,000 BRICKS OR PER BLOCK]",
    ],
    qualityAssuranceNotes: "Red bricks are inspected for uniform shape, deep red color, and clear ringing sound upon striking. AAC blocks comply with IS 2185 standards with low transit breakage.",
    bulkLogisticsDetails: "Delivered by tipper trucks, tractor trolleys, or palletized flatbeds. Care taken to ensure safe unloading and minimal breakage on site.",
    products: [
      {
        name: "First-Class Red Clay Bricks",
        gradeVariants: ["Standard Kiln-Fired 9x4x3 inch"],
        specifications: [
          { label: "Compressive Strength", value: "[VERIFY SPECIFICATION - 7.5 to 10.5 N/mm²]" },
          { label: "Water Absorption", value: "[VERIFY SPECIFICATION - Max 15% to 20%]" },
          { label: "Size", value: "9\" x 4.25\" x 2.75\" (Standard Modular / Traditional)" },
        ],
        applications: ["Load-bearing residential walls", "Boundary walls and partition walls", "Substructure foundation masonry"],
        packaging: "Trolley / Truckload Stacking",
        minimumOrder: "2,000 Pieces",
      },
      {
        name: "AAC Lightweight Concrete Blocks",
        gradeVariants: ["4-inch (100mm)", "6-inch (150mm)", "8-inch (200mm)", "9-inch (230mm)"],
        specifications: [
          { label: "Dry Density", value: "[VERIFY SPECIFICATION - 550 - 650 kg/m³]" },
          { label: "Compressive Strength", value: "[VERIFY SPECIFICATION - Min 3.5 - 4.5 N/mm²]" },
          { label: "Standard", value: "[VERIFY SPECIFICATION - IS 2185 Part 3]" },
        ],
        applications: ["Internal apartment partitions", "External curtain walls in RCC frame buildings", "Upper floor additions"],
        packaging: "Palletized / Truckload Delivery",
        minimumOrder: "1 Trolley / Truckload (~12 to 20 m³)",
      },
      {
        name: "Concrete Solid & Hollow Blocks",
        gradeVariants: ["400x200x200 mm", "400x200x150 mm", "400x200x100 mm"],
        specifications: [
          { label: "Standard", value: "[VERIFY SPECIFICATION - IS 2185 Part 1]" },
        ],
        applications: ["Boundary compound walls", "Basement retaining walls", "Commercial partition walls"],
        packaging: "Palletized / Loose Delivery",
        minimumOrder: "500 Pieces",
      },
    ],
    faqs: [
      {
        question: "Should I choose red bricks or AAC blocks for my 3-4 floor building?",
        answer: "For framed RCC structures (columns and beams), AAC blocks offer major advantages: they are 50% lighter than red bricks (reducing building dead load), provide better heat insulation, and save up to 70% in joint mortar. For traditional load-bearing structures without RCC columns, first-class red clay bricks remain the preferred choice.",
      },
      {
        question: "What is the expected transit breakage for brick and block deliveries?",
        answer: "We ensure careful loading and unloading. Standard acceptable transit breakage is under 2% for AAC blocks and 3% to 5% for red bricks, which can typically be used as bat pieces for door and window openings.",
      },
    ],
    relatedCategorySlugs: ["cement", "sand", "construction-chemicals"],
  },
  {
    slug: "sand",
    title: "Sand & Fine Aggregates",
    shortTitle: "Sand",
    subtitle: "Screened Concrete Sand, Washed Plastering Sand & Crusher Sand",
    iconName: "Gem",
    heroImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80",
    overview: "Clean, properly graded sand is vital for durable concrete and crack-free wall plaster. GG Construction Co. supplies screened concrete sand and washed plastering sand suitable for civil masonry, plaster work, and RCC casting across regional construction sites.",
    advantages: [
      "Screened to minimize silt, clay lumps, and organic debris",
      "Properly graded fine aggregate ensuring strong cement bonding",
      "Available for both structural concrete and smooth wall plastering",
      "Delivered by full tipper truck or tractor trolley with honest measurement",
    ],
    authorizedBrandsPlaceholder: [
      "[VERIFY REGIONAL SAND SOURCES & CRUSHER UNITS]",
      "[VERIFY CURRENT RATE PER CUBIC FEET (CFT) / PER TONNE]",
    ],
    qualityAssuranceNotes: "Tested per IS 383 guidelines to verify silt content remains within safe limits (under 5% for structural concrete) to prevent mortar weakness.",
    bulkLogisticsDetails: "Delivered loose by local 6-wheeler / 10-wheeler tipper trucks or tractor trolleys directly to your construction plot.",
    products: [
      {
        name: "Concrete Sand (Zone II Graded)",
        gradeVariants: ["Coarse Washed Sand / M-Sand"],
        specifications: [
          { label: "Grading Zone", value: "[VERIFY SPECIFICATION - IS 383 Zone II]" },
          { label: "Silt Content", value: "[VERIFY SPECIFICATION - Safe limit < 5%]" },
        ],
        applications: ["RCC columns, beams, and slabs", "Foundation footings and ground flooring", "PCC bed concrete"],
        packaging: "Loose Bulk Tipper Delivery",
        minimumOrder: "1 Tractor Trolley / 1 Tipper Load (~8 to 16 MT)",
      },
      {
        name: "Plastering Sand (Fine Washed)",
        gradeVariants: ["Fine Screened Sand / P-Sand"],
        specifications: [
          { label: "Particle Size", value: "Fine graded (< 2.36mm) for smooth finish" },
          { label: "Standard", value: "[VERIFY SPECIFICATION - IS 383 Zone IV]" },
        ],
        applications: ["Internal wall smooth plastering", "External sand-face plastering", "Tile bedding mortar"],
        packaging: "Loose Bulk Delivery / Bagged upon request",
        minimumOrder: "1 Tractor Trolley / Tipper Load",
      },
    ],
    faqs: [
      {
        question: "Why should plaster sand be finer than concrete sand?",
        answer: "Concrete sand requires coarse, angular particles (Zone II) to interlock with stone aggregates and cement for high compressive strength. Plaster sand must be finer (Zone IV) and free of pebbles so the mason can achieve a uniform, smooth wall finish without surface pitting.",
      },
    ],
    relatedCategorySlugs: ["aggregates", "cement", "bricks-blocks"],
  },
  {
    slug: "aggregates",
    title: "Coarse Aggregates & Stone",
    shortTitle: "Aggregates",
    subtitle: "Machine-Crushed Blue Metal Stone Aggregates (10mm, 20mm & 40mm)",
    iconName: "Layers",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1600&q=80",
    overview: "We supply machine-crushed hard-stone aggregates in standard 10mm, 20mm, and 40mm sizes, as well as stone dust and GSB for sub-base leveling. Sourced from certified crushing units, our aggregates provide dependable mechanical strength for structural RCC.",
    advantages: [
      "Machine-crushed angular stone particles ensuring solid mechanical interlocking",
      "Screened to remove excess quarry dust and weak flaky stones",
      "Supplied in full truckloads or trolleys for steady slab casting pours",
      "Honest volume and weighbridge measurement",
    ],
    authorizedBrandsPlaceholder: [
      "[VERIFY LOCAL CRUSHER SOURCES & QUARRIES]",
      "[VERIFY RATE PER CUBIC FEET (CFT) / PER TONNE]",
    ],
    qualityAssuranceNotes: "Conforming to IS 383 specifications for coarse aggregates, ensuring appropriate impact resistance and low water absorption.",
    bulkLogisticsDetails: "Delivered loose by 6-wheeler and 10-wheeler tipper dump trucks directly to the construction site.",
    products: [
      {
        name: "20mm Graded Coarse Aggregate",
        gradeVariants: ["Single Sized 20mm", "20mm-10mm Mixed Graded"],
        specifications: [
          { label: "Standard", value: "[VERIFY SPECIFICATION - IS 383 Compliant]" },
          { label: "Application", value: "Standard aggregate for RCC building frames" },
        ],
        applications: ["RCC slabs, beams, columns, and lintels", "Foundation footings and retaining walls"],
        packaging: "Loose Tipper Delivery",
        minimumOrder: "1 Tipper Load (~10 to 16 MT)",
      },
      {
        name: "10mm Fine Stone Aggregate",
        gradeVariants: ["Single Sized 10mm Stone Chips"],
        specifications: [
          { label: "Cleanliness", value: "Machine-screened crushed granite / basalt" },
        ],
        applications: ["Thin RCC sections and chajjas", "Flooring concrete screeds", "Pre-cast elements"],
        packaging: "Loose Tipper Delivery",
        minimumOrder: "1 Tipper Load",
      },
      {
        name: "40mm Base Aggregate & Stone Dust",
        gradeVariants: ["40mm Ballast", "Crushed Stone Dust"],
        specifications: [
          { label: "Standard", value: "Heavy sub-base compaction grade" },
        ],
        applications: ["Foundation mud mat (PCC)", "Driveways and ground slab bedding", "Floor leveling under tile work"],
        packaging: "Loose Bulk Dumpers",
        minimumOrder: "1 Tipper Load",
      },
    ],
    faqs: [
      {
        question: "What is the standard ratio of 20mm and 10mm aggregates for roof slab casting?",
        answer: "A widely used mix ratio for M20 or M25 slab concrete is approximately 60% of 20mm aggregate blended with 40% of 10mm aggregate. This grading fills voids efficiently, resulting in dense, leak-proof concrete.",
      },
    ],
    relatedCategorySlugs: ["sand", "cement", "tmt-steel"],
  },
  {
    slug: "sand-aggregates",
    title: "Sand & Aggregates Combo",
    shortTitle: "Sand & Aggregates",
    subtitle: "Synchronized Supply of Screened Sand & Crushed Stone Aggregates",
    iconName: "Gem",
    heroImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80",
    overview: "GG Construction Co. provides synchronized supply and delivery of both sand and coarse aggregates so builders and contractors receive all required dry materials together, preventing work halts during critical foundation and roof slab pours.",
    advantages: [
      "Single-point delivery coordination saving transit time and site congestion",
      "Screened concrete sand, plastering sand, 10mm, 20mm, and 40mm stone",
      "Direct weighbridge or volumetric measurement with honest billing",
      "Reliable regional supply to construction sites",
    ],
    authorizedBrandsPlaceholder: [
      "[VERIFY REGIONAL CRUSHER ALLIANCES]",
      "[VERIFY COMBINED TARIFFS & TRUCKLOAD DISCOUNTS]",
    ],
    qualityAssuranceNotes: "Compliant with IS 383 guidelines for clean, sound fine and coarse aggregates.",
    bulkLogisticsDetails: "Delivered by local tipper trucks or tractor trolleys directly to your construction plot.",
    products: [
      {
        name: "Slab Casting Combo: Concrete Sand + 20mm Stone",
        gradeVariants: ["Matched Proportions for M20/M25 Concrete"],
        specifications: [
          { label: "Standard", value: "[VERIFY SPECIFICATION - IS 383 Compliant]" },
        ],
        applications: ["Roof slab casting", "Column and beam RCC pours", "Raft and footing concrete"],
        packaging: "Loose Bulk Tipper Delivery",
        minimumOrder: "1 Paired Order (Sand + Aggregate)",
      },
      {
        name: "Masonry & Plaster Combo: Fine Sand + 10mm Stone",
        gradeVariants: ["Plastering and screed mix materials"],
        specifications: [
          { label: "Quality", value: "Screened and washed fine aggregates" },
        ],
        applications: ["Brickwork mortar", "Internal and external wall plastering", "Floor bedding screeds"],
        packaging: "Loose Bulk Tipper Delivery",
        minimumOrder: "1 Paired Order",
      },
    ],
    faqs: [
      {
        question: "Can I schedule sand and aggregate deliveries for the morning of my slab pour?",
        answer: "Yes. We coordinate early morning or previous-evening deliveries so your materials are neatly staged on site before the concrete mixer and labor crew start.",
      },
    ],
    relatedCategorySlugs: ["cement", "bricks-blocks", "construction-chemicals"],
  },
  {
    slug: "plumbing",
    title: "Plumbing & Sanitary Materials",
    shortTitle: "Plumbing Materials",
    subtitle: "CPVC, UPVC, SWR Pipes, Heavy-Duty Fittings & Overhead Water Tanks",
    iconName: "Wrench",
    heroImage: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1600&q=80",
    overview: "Residential and commercial buildings require leak-proof, pressure-rated plumbing lines. GG Construction Co. supplies complete piping materials from CPVC hot/cold water supply pipes to UPVC drainage lines, brass fittings, and overhead water storage tanks.",
    advantages: [
      "Lead-free, food-grade CPVC pipes and fittings for hot and cold domestic water",
      "Durable UPVC pipes for sanitary soil, waste, and rainwater drainage",
      "Full assortment of matching brass valves, elbows, tees, unions, and solvent cements",
      "Reliable supply for entire building plumbing contracts",
    ],
    authorizedBrandsPlaceholder: [
      "[VERIFY AVAILABLE BRANDS - e.g. Astral / Ashirvad / Supreme / Finolex / Prince / Sintex]",
      "[VERIFY TRADE DISCOUNTS ON COMPLETE BILL OF QUANTITIES]",
    ],
    qualityAssuranceNotes: "Compliant with ASTM D2846 (CPVC), IS 15778, and IS 4985 / IS 13592 (UPVC/SWR). Tested for pressure resistance and leak-free performance.",
    bulkLogisticsDetails: "Packed in protective sleeve bundles and cartons, delivered directly to your building site.",
    products: [
      {
        name: "CPVC Hot & Cold Water Distribution Pipes",
        gradeVariants: ["SDR 11 (Class 1)", "SDR 13.5 (Class 2)", "Sizes: 1/2\" to 2\""],
        specifications: [
          { label: "Working Temperature", value: "[VERIFY SPECIFICATION - Up to 93°C (200°F)]" },
          { label: "Standard", value: "[VERIFY SPECIFICATION - ASTM D2846 & IS 15778]" },
        ],
        applications: ["Bathroom concealed water supply", "Kitchen and geyser hot water lines", "Overhead tank distribution pipelines"],
        packaging: "3m & 5m Standard Bundles",
        minimumOrder: "Project Lot / Inquire for Retail Quantities",
      },
      {
        name: "UPVC SWR Drainage & Rainwater Pipes",
        gradeVariants: ["Type A (Rainwater)", "Type B (Soil & Waste)", "75mm, 110mm, 160mm"],
        specifications: [
          { label: "Joint Type", value: "Rubber Ring Fit / Solvent Weld" },
          { label: "Standard", value: "[VERIFY SPECIFICATION - IS 13592]" },
        ],
        applications: ["Vertical drainage shafts", "Basement waste lines", "Roof rainwater downpipes"],
        packaging: "Protective Bundles",
        minimumOrder: "Project Lot",
      },
      {
        name: "Multi-Layer Overhead Water Storage Tanks",
        gradeVariants: ["500 Liters", "1,000 Liters", "1,500 Liters", "2,000 Liters"],
        specifications: [
          { label: "Construction", value: "3-Layer / 4-Layer UV Protected Food-Grade Plastic" },
        ],
        applications: ["Rooftop domestic water storage for houses and apartments"],
        packaging: "Individual Factory Wrapped Units",
        minimumOrder: "1 Unit",
      },
    ],
    faqs: [
      {
        question: "Why is CPVC preferred over GI (galvanized iron) pipes for domestic plumbing?",
        answer: "CPVC does not rust, corrode, or build up internal mineral scale over time, ensuring consistent water pressure and clean drinking water. It is also lighter, easier to install with solvent welding, and handles hot water safely.",
      },
    ],
    relatedCategorySlugs: ["electrical", "construction-chemicals"],
  },
  {
    slug: "electrical",
    title: "Electrical Materials & Wiring",
    shortTitle: "Electrical Materials",
    subtitle: "FR / FRLS Copper Wires, Rigid PVC Conduits, Modular Boxes & Distribution Boards",
    iconName: "Zap",
    heroImage: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1600&q=80",
    overview: "Electrical safety is non-negotiable in building construction. We supply certified Flame Retardant (FR/FRLS) copper wires, heavy-duty rigid PVC conduit pipes, concealed metal boxes, and distribution panels needed during civil construction and finishing.",
    advantages: [
      "100% pure electrolytic grade copper wires for high conductivity and energy efficiency",
      "Flame Retardant (FR/FRLS) insulation that resists fire spread",
      "Heavy-duty rigid PVC conduit pipes for slab and wall concealed channeling",
      "Complete electrical supplies for residential and commercial building work",
    ],
    authorizedBrandsPlaceholder: [
      "[VERIFY AVAILABLE BRANDS - e.g. Polycab / Havells / KEI / Finolex / Anchor / Schneider / Legrand]",
      "[VERIFY WHOLESALE ELECTRICAL DISCOUNTS ON PROJECT ORDERS]",
    ],
    qualityAssuranceNotes: "ISI marked copper wires conforming to IS 694 and conduit pipes conforming to IS 9537 specifications.",
    bulkLogisticsDetails: "Packed in standard 90-meter shrink-wrapped coils and pipe bundles delivered directly to site.",
    products: [
      {
        name: "FR / FRLS Pure Copper House Wires",
        gradeVariants: ["0.75 sq.mm", "1.0 sq.mm", "1.5 sq.mm", "2.5 sq.mm", "4.0 sq.mm", "6.0 sq.mm"],
        specifications: [
          { label: "Conductivity", value: "100% Electrolytic Pure Copper" },
          { label: "Standard", value: "[VERIFY SPECIFICATION - IS 694 Certified]" },
        ],
        applications: ["Concealed conduit house wiring", "Air conditioner and geyser power circuits", "Lighting and fan points"],
        packaging: "90 Meter Standard Coils",
        minimumOrder: "10 Coils Assorted / Full Project Lot",
      },
      {
        name: "Rigid PVC Conduit Pipes & Junction Boxes",
        gradeVariants: ["20mm Medium & Heavy", "25mm Heavy Gauge"],
        specifications: [
          { label: "Standard", value: "[VERIFY SPECIFICATION - IS 9537 Part 3]" },
        ],
        applications: ["Concealed slab casting electrical piping", "Chased brick wall conduit routing"],
        packaging: "Bundles of 25 lengths (3m each)",
        minimumOrder: "5 Bundles",
      },
    ],
    faqs: [
      {
        question: "Which wire gauge should be used for air conditioners and power geysers?",
        answer: "Standard practice is to use 4.0 sq.mm copper wire for 1.5 to 2.0 ton split air conditioners and water heaters, 2.5 sq.mm for standard power plug points, and 1.5 sq.mm for general lighting and fan circuits.",
      },
    ],
    relatedCategorySlugs: ["plumbing", "construction-chemicals"],
  },
  {
    slug: "construction-chemicals",
    title: "Construction Chemicals & Waterproofing",
    shortTitle: "Construction Chemicals",
    subtitle: "Integral Waterproofing Liquids, Terrace Coatings, Tile Adhesives & Grouts",
    iconName: "FlaskConical",
    heroImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80",
    overview: "Proper chemical application prevents water leakage and enhances concrete quality. GG Construction Co. supplies proven waterproofing liquids, integral concrete compounds, polymer-modified tile adhesives, and joint sealants for residential and commercial building work.",
    advantages: [
      "Liquid integral waterproofing compounds mixed directly into concrete and plaster mortars",
      "UV-resistant elastomeric coatings for roof terrace and balcony waterproofing",
      "High-bond polymer tile adhesives for durable wall and floor tile fixing",
      "Ready stock available in convenient cans, buckets, and bags",
    ],
    authorizedBrandsPlaceholder: [
      "[VERIFY AVAILABLE BRANDS - e.g. Dr. Fixit (Pidilite) / Fosroc / Sika / Asian Paints SmartCare / Roff]",
      "[VERIFY PACKAGING SIZES & TRADE DISCOUNTS]",
    ],
    qualityAssuranceNotes: "Formulated to standard construction specifications (IS 2645 for integral waterproofing, IS 15477 for tile adhesives). Supplied with manufacturer batch numbers.",
    bulkLogisticsDetails: "Available in 1L, 5L, 20L cans, 200L drums, and 20kg/25kg bags delivered directly to site.",
    products: [
      {
        name: "Integral Concrete Waterproofing Compound",
        gradeVariants: ["Standard Liquid Admixture (e.g., LW+)"],
        specifications: [
          { label: "Standard", value: "[VERIFY SPECIFICATION - IS 2645 Compliant]" },
          { label: "Dosage", value: "Typically 200ml per 50 kg cement bag" },
        ],
        applications: ["Basement concrete and foundation footings", "Roof slab concrete pours", "External wall plaster mortars"],
        packaging: "1L, 5L, 20L Containers",
        minimumOrder: "5 Liters",
      },
      {
        name: "Terrace & Bathroom Waterproofing Coating",
        gradeVariants: ["Elastomeric Acrylic Membrane / Polymer Coating"],
        specifications: [
          { label: "Application", value: "Brush-applied 2-coat system with fiber mesh" },
        ],
        applications: ["Flat roof terrace waterproofing", "Bathroom sunken slabs", "Balconies and chajjas"],
        packaging: "4kg, 20kg Pails",
        minimumOrder: "1 Pail",
      },
      {
        name: "Polymer-Modified Tile Adhesive",
        gradeVariants: ["Type 1 (Floor Tiling)", "Type 2 (Wall & Vitrified Tiling)"],
        specifications: [
          { label: "Standard", value: "[VERIFY SPECIFICATION - IS 15477 Compliant]" },
        ],
        applications: ["Fixing vitrified tiles, ceramic tiles, and granite slabs", "Tile-on-tile renovation"],
        packaging: "20 kg Moisture-Proof Bags",
        minimumOrder: "5 Bags",
      },
    ],
    faqs: [
      {
        question: "How much integral waterproofing liquid should be added per bag of cement?",
        answer: "Standard practice for typical integral waterproofing liquids is approximately 200 ml per 50 kg bag of cement. It should be mixed thoroughly into the gauging water before adding to dry sand and cement.",
      },
    ],
    relatedCategorySlugs: ["cement", "tmt-steel", "sand"],
  },
  {
    slug: "other-building-supplies",
    title: "Other Building & Site Supplies",
    shortTitle: "Other Materials",
    subtitle: "Shuttering Plywood, Hardware, Cover Blocks, Tarpaulins & Site Essentials",
    iconName: "Hammer",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    overview: "To keep building work moving without interruption, GG Construction Co. supplies contractors and homebuilders with essential jobsite accessories: film-faced shuttering plywood, binding wires, concrete cover blocks, safety helmets, and basic site supplies.",
    advantages: [
      "Calibrated film-faced shuttering plywood providing smooth concrete slab finishes",
      "Concrete cover blocks ensuring proper rebar cover depth in slabs and beams",
      "Essential site safety gear including helmets, gloves, and reflective jackets",
      "Convenient one-stop supply alongside your cement, steel, and bricks",
    ],
    authorizedBrandsPlaceholder: [
      "[VERIFY LOCAL HARDWARE SUPPLIERS & BRANDED CONSUMABLES]",
      "[VERIFY PLYWOOD SPECIFICATIONS & REUSE GRADES]",
    ],
    qualityAssuranceNotes: "Durable jobsite consumables conforming to standard construction site safety and formwork practices.",
    bulkLogisticsDetails: "Delivered alongside primary building materials to save transport costs and ensure timely availability.",
    products: [
      {
        name: "Film-Faced Shuttering Plywood",
        gradeVariants: ["12mm Calibrated", "18mm Calibrated", "30 kg / 34 kg Density"],
        specifications: [
          { label: "Standard", value: "[VERIFY SPECIFICATION - IS 4990 Compliant]" },
          { label: "Repetition", value: "Multiple re-use cycles with proper shuttering oil" },
        ],
        applications: ["Concrete slab and beam formwork", "Column casting boxes"],
        packaging: "Bundles of Sheets",
        minimumOrder: "10 Sheets",
      },
      {
        name: "Concrete Cover Blocks & Spacers",
        gradeVariants: ["20mm (Slabs)", "25mm (Beams)", "40mm (Columns)", "50mm (Footings)"],
        specifications: [
          { label: "Material", value: "High-density concrete / PVC spacers" },
        ],
        applications: ["Maintaining structural rebar cover depth during concrete pours"],
        packaging: "Bags of 100 / 500 Pieces",
        minimumOrder: "2 Bags",
      },
      {
        name: "Basic Site Safety Essentials",
        gradeVariants: ["ISI Safety Helmets", "Reflective Jackets", "Gloves"],
        specifications: [
          { label: "Standard", value: "Standard workforce protective equipment" },
        ],
        applications: ["On-site construction worker protection"],
        packaging: "Bundled Packs",
        minimumOrder: "5 Sets",
      },
    ],
    faqs: [
      {
        question: "Why are concrete cover blocks critical during slab casting?",
        answer: "Cover blocks ensure that reinforcement steel remains elevated at the correct distance from the shuttering surface. Without proper cover blocks, steel bars get exposed to air and moisture, leading to rust stains and concrete spalling.",
      },
    ],
    relatedCategorySlugs: ["cement", "tmt-steel", "construction-chemicals"],
  },
];
