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
  shortDescription?: string;
  applicationsSummary?: string;
  exampleProducts?: string[];
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
  isOverview?: boolean;
}

export const materialsData: MaterialCategoryItem[] = [
  {
    slug: "cement",
    title: "Cement & Binders",
    shortTitle: "Cement",
    subtitle: "Standard Ordinary Portland Cement (OPC 43/53) & Portland Pozzolana Cement (PPC)",
    iconName: "Layers",
    heroImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Fresh 50 kg bags of Ordinary Portland Cement (OPC 43/53) and Portland Pozzolana Cement (PPC) for structural RCC, masonry, and plastering.",
    applicationsSummary: "RCC columns, beams, foundation footings, slabs, brickwork, and smooth wall plastering.",
    exampleProducts: ["OPC 53 Grade Cement", "PPC Pozzolana Cement", "OPC 43 Grade Cement"],
    isOverview: true,
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
    relatedCategorySlugs: ["bricks-blocks", "sand-aggregates", "shuttering-plywood", "cover-blocks"],
  },
  {
    slug: "bricks-blocks",
    title: "Bricks & AAC Blocks",
    shortTitle: "Bricks & Blocks",
    subtitle: "Kiln-Fired Red Clay Bricks, Lightweight AAC Blocks & Concrete Solid Blocks",
    iconName: "Boxes",
    heroImage: "https://images.unsplash.com/photo-1584463699026-df06a5e1c0c6?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Well-baked red clay bricks and precision lightweight AAC blocks delivered by trolley or truckload directly to your plot.",
    applicationsSummary: "Load-bearing exterior walls, interior room partitions, compound boundary walls, and foundation substructures.",
    exampleProducts: ["First-Class Red Clay Bricks", "AAC Lightweight Blocks (4\"/6\"/8\")", "Concrete Solid Blocks"],
    isOverview: true,
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
    relatedCategorySlugs: ["cement", "sand-aggregates", "hardware", "cover-blocks"],
  },
  {
    slug: "sand-aggregates",
    title: "Sand & Coarse Aggregates",
    shortTitle: "Sand & Aggregates",
    subtitle: "Screened Concrete Sand, Washed Plaster Sand & Crushed Blue Stone Aggregates",
    iconName: "Gem",
    heroImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Clean screened concrete sand, washed plastering sand, and machine-crushed 10mm, 20mm & 40mm stone aggregates with honest weighbridge slips.",
    applicationsSummary: "RCC roof slabs, column pours, foundation footings, masonry mortar, and smooth wall plastering.",
    exampleProducts: ["Zone II Concrete Sand", "Washed Plaster Sand", "20mm & 10mm Blue Stone"],
    isOverview: true,
    overview: "GG Construction Co. provides synchronized supply and delivery of both sand and coarse aggregates so builders and contractors receive all required dry materials together, preventing work halts during critical foundation and roof slab pours.",
    advantages: [
      "Single-point delivery coordination saving transit time and site congestion",
      "Screened concrete sand, plastering sand, 10mm, 20mm, and 40mm stone",
      "Direct weighbridge or volumetric measurement with honest billing",
      "Reliable regional supply directly to building sites",
    ],
    authorizedBrandsPlaceholder: [
      "[VERIFY REGIONAL CRUSHER ALLIANCES & MINING SOURCES]",
      "[VERIFY COMBINED TARIFFS & TRUCKLOAD DISCOUNTS]",
    ],
    qualityAssuranceNotes: "Tested per IS 383 guidelines for clean, sound fine and coarse aggregates with minimal silt content.",
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
    relatedCategorySlugs: ["cement", "bricks-blocks", "shuttering-plywood", "cover-blocks"],
  },
  {
    slug: "shuttering-plywood",
    title: "Shuttering Plywood & Formwork",
    shortTitle: "Shuttering Plywood",
    subtitle: "Calibrated Film-Faced Shuttering Plywood Panels & Formwork Accessories",
    iconName: "Layers",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "High-density calibrated film-faced plywood sheets providing clean concrete slab finishes and repeated formwork pour cycles.",
    applicationsSummary: "RCC slab shuttering, structural beam bottoms, column casting boxes, and pre-cast concrete molds.",
    exampleProducts: ["12mm Film-Faced Plywood (30/34 kg)", "18mm Heavy-Duty Shuttering Sheets", "Shuttering Oil & Release Agents"],
    isOverview: true,
    overview: "High-quality shuttering plywood is essential for safe formwork and smooth concrete surfaces. GG Construction Co. supplies calibrated film-faced plywood sheets with high phenolic glue bonding, designed to withstand heavy concrete loads and provide multiple reuse cycles for slabs, beams, and columns.",
    advantages: [
      "Calibrated thickness ensuring level slab casting and minimal concrete leakage",
      "Double-sided phenolic film coating providing mirror-smooth concrete finishes",
      "High repetition rate across multiple casting pours when handled with shuttering oil",
      "Available in standard 12mm and 18mm thicknesses for local delivery",
    ],
    authorizedBrandsPlaceholder: [
      "[VERIFY AVAILABLE PLYWOOD BRANDS & REPUTED MILLS]",
      "[VERIFY CURRENT SHEET RATES & BUNDLE DISCOUNTS]",
    ],
    qualityAssuranceNotes: "Manufactured with boiling waterproof (BWP) grade adhesives conforming to IS 4990 standards for concrete shuttering work.",
    bulkLogisticsDetails: "Delivered in bundled palletized lots directly to your construction plot or contractor site.",
    products: [
      {
        name: "12mm Calibrated Film-Faced Plywood",
        gradeVariants: ["Standard 8x4 ft Sheets", "30 kg Density", "34 kg Density"],
        specifications: [
          { label: "Standard", value: "[VERIFY SPECIFICATION - IS 4990 Compliant]" },
          { label: "Dimensions", value: "8 ft x 4 ft (2440mm x 1220mm)" },
          { label: "Film Coating", value: "Phenolic Film on both faces" },
        ],
        applications: ["RCC roof slab formwork", "Lintels and chajjas casting", "Light beam casing"],
        packaging: "Strapped Bundles of Sheets",
        minimumOrder: "15 Sheets",
      },
      {
        name: "18mm Heavy-Duty Formwork Plywood",
        gradeVariants: ["Standard 8x4 ft Sheets", "Heavy Density (~42 kg)"],
        specifications: [
          { label: "Standard", value: "[VERIFY SPECIFICATION - IS 4990 Compliant]" },
          { label: "Dimensions", value: "8 ft x 4 ft (2440mm x 1220mm)" },
          { label: "Load Capacity", value: "Heavy commercial and thick slab casting" },
        ],
        applications: ["Heavy beam bottoms and sides", "Basement retaining wall formwork", "Column casting boxes"],
        packaging: "Strapped Bundles",
        minimumOrder: "10 Sheets",
      },
      {
        name: "Formwork Shuttering Oil & Mold Release",
        gradeVariants: ["Neat Oil", "Emulsion Concentrate"],
        specifications: [
          { label: "Usage", value: "Brush or spray application before rebar placement" },
        ],
        applications: ["Prolonging plywood sheet life and ensuring clean de-shuttering"],
        packaging: "20 Liter Buckets / 200L Drums",
        minimumOrder: "20 Liters",
      },
    ],
    faqs: [
      {
        question: "How many times can film-faced shuttering plywood be reused?",
        answer: "With careful handling, proper application of shuttering oil before each pour, and clean de-shuttering, quality 30–34 kg 12mm plywood typically delivers 8 to 12 reuse cycles on residential and low-rise building sites.",
      },
    ],
    relatedCategorySlugs: ["cement", "sand-aggregates", "hardware", "cover-blocks"],
  },
  {
    slug: "hardware",
    title: "Construction Hardware & Fasteners",
    shortTitle: "Hardware",
    subtitle: "Binding Wire, Wire Nails, Column Clamps, Fasteners & Site Tools",
    iconName: "Wrench",
    heroImage: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Essential jobsite hardware including 18-gauge binding wire, wire nails, column clamps, fasteners, and daily construction consumables.",
    applicationsSummary: "Rebar cage tying, formwork assembly, masonry alignment, scaffolding connections, and general site fabrication.",
    exampleProducts: ["18-Gauge Annealed Binding Wire", "Wire Nails (2\" to 4\")", "Column Clamps & Tie Rods"],
    isOverview: true,
    overview: "Every construction site requires a steady stream of basic hardware and fixing supplies to keep work progressing without delays. GG Construction Co. supplies contractor-grade annealed binding wire, wire nails, column clamps, and essential jobsite fasteners alongside your main material orders.",
    advantages: [
      "Soft annealed 18-gauge binding wire that ties easily without snapping",
      "Standard wire nails in assorted sizes (2-inch to 4-inch) for timber formwork",
      "Heavy-duty adjustable steel column clamps and tie rod assemblies",
      "Supplied in bulk coils and boxes directly with your primary material dispatches",
    ],
    authorizedBrandsPlaceholder: [
      "[VERIFY LOCAL HARDWARE SOURCES & CONTRACTOR GRADE SUPPLY]",
      "[VERIFY BUNDLE AND COIL WEIGHT DISCOUNTS]",
    ],
    qualityAssuranceNotes: "Annealed mild steel wire and high-strength fasteners inspected for consistent gauge and rust-free storage.",
    bulkLogisticsDetails: "Packaged in coils, gunny bags, and cartons delivered directly to site.",
    products: [
      {
        name: "18-Gauge Annealed Binding Wire",
        gradeVariants: ["Standard Black Annealed Wire", "GI Rust-Resistant Wire"],
        specifications: [
          { label: "Gauge", value: "18 SWG (Standard Soft Annealed)" },
          { label: "Packaging", value: "25 kg Coils" },
        ],
        applications: ["Tying TMT rebar intersections in slabs, columns, and beams", "Securing stirrups"],
        packaging: "25 kg Wrapped Coils",
        minimumOrder: "2 Coils (50 kg)",
      },
      {
        name: "Construction Wire Nails (Assorted)",
        gradeVariants: ["2-inch", "2.5-inch", "3-inch", "4-inch"],
        specifications: [
          { label: "Material", value: "Bright Drawn Hard Steel Wire" },
        ],
        applications: ["Timber formwork joining", "Shuttering props bracing", "General site carpentry"],
        packaging: "50 kg Gunny Bags / 5 kg Boxes",
        minimumOrder: "25 kg",
      },
      {
        name: "Adjustable Steel Column Clamps",
        gradeVariants: ["Standard 2.5 ft", "Heavy 3.0 ft"],
        specifications: [
          { label: "Material", value: "Forged Heavy Mild Steel" },
        ],
        applications: ["Holding column shuttering boxes firmly during concrete vibration"],
        packaging: "Bundles of 10",
        minimumOrder: "10 Pieces",
      },
    ],
    faqs: [
      {
        question: "How much binding wire is typically required per ton of TMT steel?",
        answer: "As a general construction benchmark, approximately 9 to 12 kg of 18-gauge binding wire is required per metric ton of reinforcement steel, depending on bar diameter and spacing.",
      },
    ],
    relatedCategorySlugs: ["shuttering-plywood", "cover-blocks", "tarpaulins-site-essentials"],
  },
  {
    slug: "cover-blocks",
    title: "Concrete Cover Blocks & Spacers",
    shortTitle: "Cover Blocks",
    subtitle: "High-Strength Pre-Cast Concrete & PVC Spacers for Structural Rebar Cover",
    iconName: "Boxes",
    heroImage: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "High-density pre-cast concrete cover blocks and PVC spacers ensuring structural reinforcement maintains accurate cover depth during concrete pours.",
    applicationsSummary: "Roof slab bottom cover (20mm), beam sides & bottom (25mm), column cages (40mm), and foundation footings (50mm).",
    exampleProducts: ["20mm Slab Cover Blocks", "25mm Beam Cover Blocks", "40mm Column Spacers", "50mm Footing Blocks"],
    isOverview: true,
    overview: "Adequate concrete cover over reinforcement steel is critical to prevent moisture ingress, rebar corrosion, and structural spalling. GG Construction Co. supplies pre-cast high-density concrete cover blocks and PVC spacers in all standard dimensions to protect your building's structural integrity.",
    advantages: [
      "Consistent cover dimensions conforming to IS 456 structural code requirements",
      "High compressive strength matching or exceeding M30/M40 concrete grades",
      "Integrated wire holes for secure tie-up to rebar mats before concrete pouring",
      "Prevents rebar exposure, surface rust marks, and long-term concrete deterioration",
    ],
    authorizedBrandsPlaceholder: [
      "[VERIFY LOCAL MANUFACTURERS & GRADE RATINGS]",
      "[VERIFY BAG SIZES (100 / 500 PIECES)]",
    ],
    qualityAssuranceNotes: "Pre-cast with rich cement-sand-micro aggregate mortars and cured to prevent breakage under worker foot traffic.",
    bulkLogisticsDetails: "Packed in convenient gunny bags of 100 or 500 pieces delivered alongside primary materials.",
    products: [
      {
        name: "20mm & 25mm Concrete Slab & Beam Spacers",
        gradeVariants: ["20mm (Slabs)", "25mm (Beams)"],
        specifications: [
          { label: "Standard", value: "IS 456 Structural Cover Compliant" },
          { label: "Material", value: "High-Strength Dense Pre-Cast Concrete" },
        ],
        applications: ["Elevating bottom reinforcement rebar mesh in roof slabs and floor beams"],
        packaging: "Bags of 250 / 500 Pieces",
        minimumOrder: "2 Bags",
      },
      {
        name: "40mm & 50mm Column & Footing Cover Blocks",
        gradeVariants: ["40mm (Columns)", "50mm (Foundation Footings)"],
        specifications: [
          { label: "Standard", value: "IS 456 Foundation Cover Compliant" },
        ],
        applications: ["Maintaining peripheral concrete thickness in structural columns and foundation mats"],
        packaging: "Bags of 100 / 250 Pieces",
        minimumOrder: "2 Bags",
      },
    ],
    faqs: [
      {
        question: "Why shouldn't broken brick pieces or stone chips be used as cover blocks?",
        answer: "Broken bricks and irregular stones have uneven thickness, absorb water, and create weak spots in the concrete where moisture easily penetrates to rust the steel bars. Standard pre-cast concrete cover blocks provide uniform cover, high density, and complete bond with poured concrete.",
      },
    ],
    relatedCategorySlugs: ["cement", "shuttering-plywood", "hardware"],
  },
  {
    slug: "tarpaulins-site-essentials",
    title: "Tarpaulins & Site Essentials",
    shortTitle: "Tarpaulins & Site Essentials",
    subtitle: "Heavy-Duty Waterproof HDPE Tarpaulins, Jute Curing Cloth & Site Protection",
    iconName: "ShieldCheck",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Multilayer waterproof HDPE tarpaulins, absorbent jute curing hessian, and essential site protective gear to safeguard materials from rain and sun.",
    applicationsSummary: "Covering cement bags and sand piles, moisture retention curing on concrete columns and slabs, monsoon weatherproofing, and site dust barriers.",
    exampleProducts: ["HDPE Waterproof Tarpaulins (12x18 to 24x30 ft)", "Jute Hessian Curing Bags", "Site Safety Helmets & Vests"],
    isOverview: true,
    overview: "Protecting materials from unexpected rain, harsh sunlight, and dust keeps construction quality high and prevents material waste. GG Construction Co. supplies heavy-duty waterproof HDPE tarpaulins, natural jute hessian curing fabric, and essential jobsite safety gear.",
    advantages: [
      "100% waterproof multi-layer laminated HDPE tarpaulins with reinforced corner eyelets",
      "Protects expensive cement bags, electrical boxes, and sand piles from rainwater spoilage",
      "Natural jute hessian cloth ensuring continuous wet curing for columns and beams",
      "Durable, UV-stabilized construction grade that withstands rough jobsite handling",
    ],
    authorizedBrandsPlaceholder: [
      "[VERIFY AVAILABLE TARPAULIN GSM GRADES - e.g. 120 / 150 / 200 / 250 GSM]",
      "[VERIFY STANDARD SHEET SIZES & BULK ROLL RATES]",
    ],
    qualityAssuranceNotes: "UV-stabilized virgin polymer tarpaulins with heat-sealed seams and aluminum eyelets every 3 feet.",
    bulkLogisticsDetails: "Supplied in individual bundles and master bales delivered directly to your building plot.",
    products: [
      {
        name: "Heavy-Duty Waterproof HDPE Tarpaulins",
        gradeVariants: ["12x18 ft", "18x24 ft", "24x30 ft", "150 GSM / 200 GSM"],
        specifications: [
          { label: "Material", value: "Virgin HDPE Woven Fabric with LDPE Lamination" },
          { label: "Eyelets", value: "Reinforced Aluminum Eyelets every 1 Meter" },
        ],
        applications: ["Covering cement stacks on site", "Sand pile rain protection", "Temporary site sheds and monsoon screening"],
        packaging: "Individually Wrapped Sheets",
        minimumOrder: "2 Sheets",
      },
      {
        name: "Jute Hessian Curing Bags & Fabric",
        gradeVariants: ["Standard Curing Rolls", "Jute Hessian Bags"],
        specifications: [
          { label: "Material", value: "100% Natural Biodegradable Jute Fiber" },
        ],
        applications: ["Wrapping RCC columns and beams for continuous water curing retention"],
        packaging: "Bales / Bundles",
        minimumOrder: "1 Bundle",
      },
      {
        name: "Basic Jobsite Safety Gear",
        gradeVariants: ["ISI Safety Helmets", "High-Visibility Reflective Jackets", "Heavy-Duty Gloves"],
        specifications: [
          { label: "Standard", value: "Standard On-Site Worker Protection" },
        ],
        applications: ["Construction site worker safety during excavation and casting"],
        packaging: "Sets of 5 / 10",
        minimumOrder: "5 Sets",
      },
    ],
    faqs: [
      {
        question: "How long should jute hessian cloth remain on columns after casting?",
        answer: "Columns should be wrapped in jute hessian immediately upon de-shuttering and kept continuously moist by water spraying for at least 14 days (up to 21 days in hot weather) to achieve full design compressive strength.",
      },
    ],
    relatedCategorySlugs: ["cement", "shuttering-plywood", "hardware"],
  },
  // PRESERVED CATEGORIES (Kept in data layer so their individual detail routes do not break)
  {
    slug: "tmt-steel",
    title: "TMT Steel & Rebars",
    shortTitle: "TMT Steel",
    subtitle: "High-Strength TMT Reinforcement Steel Bars (Fe 500 / Fe 500D)",
    iconName: "ShieldCheck",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    overview: "We supply Thermo-Mechanically Treated (TMT) steel reinforcement bars essential for reinforced concrete construction. Sourced through dependable supply networks, our rebars offer consistent rib patterns, superior bendability, and dependable yield strength for building foundations, columns, beams, and slabs.",
    shortDescription: "Tested Thermo-Mechanically Treated (TMT) steel reinforcement bars in Fe 500 / Fe 500D grades.",
    applicationsSummary: "RCC columns, structural beams, foundation footings, and roof slabs.",
    exampleProducts: ["Fe 500D TMT Rebars (8mm–25mm)", "Binding Wire", "Pre-Formed Stirrups"],
    isOverview: false,
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
    qualityAssuranceNotes: "Standard Fe 500 and Fe 500D rebars conforming to IS 1786 specifications.",
    bulkLogisticsDetails: "Delivered in standard 12-meter straight lengths strapped in secure bundles.",
    products: [
      {
        name: "Fe 500D Seismic Grade TMT Rebars",
        gradeVariants: ["8mm", "10mm", "12mm", "16mm", "20mm", "25mm"],
        specifications: [
          { label: "Yield Strength", value: "[VERIFY SPECIFICATION - Minimum 500 N/mm²]" },
          { label: "Standard", value: "[VERIFY SPECIFICATION - IS 1786 Fe 500D]" },
        ],
        applications: ["RCC columns and structural beams", "Foundation footings", "Roof slabs"],
        packaging: "12m Bundles with Standard Weight Tolerances",
        minimumOrder: "1 Metric Ton",
      },
    ],
    faqs: [
      {
        question: "Why is Fe 500D recommended over regular Fe 500 for buildings?",
        answer: "The 'D' in Fe 500D stands for ductility, allowing the structure to absorb vibration safely.",
      },
    ],
    relatedCategorySlugs: ["cement", "shuttering-plywood", "hardware"],
  },
  {
    slug: "plumbing",
    title: "Plumbing & Sanitary Materials",
    shortTitle: "Plumbing Materials",
    subtitle: "CPVC, UPVC, SWR Pipes, Heavy-Duty Fittings & Overhead Water Tanks",
    iconName: "Wrench",
    heroImage: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1600&q=80",
    overview: "Residential and commercial buildings require leak-proof, pressure-rated plumbing lines. GG Construction Co. supplies piping materials from CPVC hot/cold water supply pipes to UPVC drainage lines, brass fittings, and overhead water storage tanks.",
    shortDescription: "Complete piping solutions: CPVC water lines, UPVC SWR drainage, and storage tanks.",
    applicationsSummary: "Concealed domestic water distribution, sanitary drainage, and rooftop water storage.",
    exampleProducts: ["CPVC SDR 11 Pipes", "UPVC SWR Drainage Pipes", "Overhead Water Tanks"],
    isOverview: false,
    advantages: [
      "Lead-free, food-grade CPVC pipes and fittings for domestic water",
      "Durable UPVC pipes for sanitary soil, waste, and rainwater drainage",
      "Full assortment of valves, elbows, tees, and solvent cements",
      "Reliable supply for entire building plumbing contracts",
    ],
    authorizedBrandsPlaceholder: [
      "[VERIFY AVAILABLE BRANDS - e.g. Astral / Ashirvad / Supreme / Finolex / Prince]",
    ],
    qualityAssuranceNotes: "Compliant with ASTM D2846 and IS 15778.",
    bulkLogisticsDetails: "Packed in protective sleeve bundles delivered directly to site.",
    products: [
      {
        name: "CPVC Hot & Cold Water Pipes",
        gradeVariants: ["SDR 11", "SDR 13.5", "1/2\" to 2\""],
        specifications: [
          { label: "Standard", value: "ASTM D2846 & IS 15778" },
        ],
        applications: ["Bathroom water supply", "Kitchen hot water lines"],
        packaging: "3m & 5m Bundles",
        minimumOrder: "Project Lot",
      },
    ],
    faqs: [
      {
        question: "Why is CPVC preferred over GI pipes?",
        answer: "CPVC does not rust, corrode, or scale internally, ensuring clean drinking water.",
      },
    ],
    relatedCategorySlugs: ["cement", "hardware"],
  },
  {
    slug: "electrical",
    title: "Electrical Materials & Wiring",
    shortTitle: "Electrical Materials",
    subtitle: "FR / FRLS Copper Wires, Rigid PVC Conduits, Modular Boxes & Distribution Boards",
    iconName: "Zap",
    heroImage: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1600&q=80",
    overview: "Electrical safety is non-negotiable in building construction. We supply certified Flame Retardant (FR/FRLS) copper wires, heavy-duty rigid PVC conduit pipes, concealed metal boxes, and distribution panels needed during civil construction and finishing.",
    shortDescription: "Certified FR/FRLS copper wires, PVC conduit channeling, and electrical distribution boxes.",
    applicationsSummary: "Concealed conduit wiring, heavy appliance power circuits, and lighting distribution.",
    exampleProducts: ["FR Copper Wires (1.0 to 6.0 sq.mm)", "Rigid PVC Conduits", "Modular Metal Boxes"],
    isOverview: false,
    advantages: [
      "100% pure electrolytic grade copper wires for high conductivity",
      "Flame Retardant (FR/FRLS) insulation resisting fire spread",
      "Heavy-duty rigid PVC conduit pipes for slab and wall concealed channeling",
    ],
    authorizedBrandsPlaceholder: [
      "[VERIFY AVAILABLE BRANDS - e.g. Polycab / Havells / KEI / Finolex / Anchor]",
    ],
    qualityAssuranceNotes: "ISI marked copper wires conforming to IS 694.",
    bulkLogisticsDetails: "Packed in standard 90-meter shrink-wrapped coils.",
    products: [
      {
        name: "FR Pure Copper House Wires",
        gradeVariants: ["1.0 sq.mm", "1.5 sq.mm", "2.5 sq.mm", "4.0 sq.mm"],
        specifications: [
          { label: "Standard", value: "IS 694 Certified" },
        ],
        applications: ["Concealed conduit house wiring", "Appliance power circuits"],
        packaging: "90 Meter Coils",
        minimumOrder: "10 Coils",
      },
    ],
    faqs: [
      {
        question: "Which wire gauge is recommended for air conditioners?",
        answer: "Standard practice is 4.0 sq.mm copper wire for 1.5 to 2.0 ton split air conditioners.",
      },
    ],
    relatedCategorySlugs: ["plumbing", "hardware"],
  },
  {
    slug: "construction-chemicals",
    title: "Construction Chemicals & Waterproofing",
    shortTitle: "Construction Chemicals",
    subtitle: "Integral Waterproofing Liquids, Terrace Coatings, Tile Adhesives & Grouts",
    iconName: "FlaskConical",
    heroImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80",
    overview: "Proper chemical application prevents water leakage and enhances concrete quality. GG Construction Co. supplies proven waterproofing liquids, integral concrete compounds, polymer-modified tile adhesives, and joint sealants for residential and commercial building work.",
    shortDescription: "Integral waterproofing admixtures, elastomeric roof coatings, and polymer tile adhesives.",
    applicationsSummary: "Slab concrete waterproofing, roof terrace coatings, bathroom sunken slab sealing, and tile fixing.",
    exampleProducts: ["Integral Waterproofing Liquids", "Terrace Waterproofing Membranes", "Tile Adhesives"],
    isOverview: false,
    advantages: [
      "Liquid integral waterproofing compounds mixed directly into concrete",
      "UV-resistant elastomeric coatings for roof terrace waterproofing",
      "High-bond polymer tile adhesives for wall and floor tiles",
    ],
    authorizedBrandsPlaceholder: [
      "[VERIFY AVAILABLE BRANDS - e.g. Dr. Fixit / Fosroc / Sika / Asian Paints SmartCare]",
    ],
    qualityAssuranceNotes: "Conforms to IS 2645 for integral waterproofing and IS 15477 for tile adhesives.",
    bulkLogisticsDetails: "Available in 1L, 5L, 20L cans, and 20kg bags.",
    products: [
      {
        name: "Integral Concrete Waterproofing Compound",
        gradeVariants: ["Standard Liquid Admixture"],
        specifications: [
          { label: "Standard", value: "IS 2645 Compliant" },
        ],
        applications: ["Basement concrete", "Roof slab pours", "Wall plaster mortars"],
        packaging: "1L, 5L, 20L Containers",
        minimumOrder: "5 Liters",
      },
    ],
    faqs: [
      {
        question: "How much waterproofing liquid should be added per bag of cement?",
        answer: "Typically 200 ml per 50 kg bag of cement mixed into the water.",
      },
    ],
    relatedCategorySlugs: ["cement", "sand-aggregates"],
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
    authorizedBrandsPlaceholder: ["[VERIFY REGIONAL SOURCES]"],
    qualityAssuranceNotes: "Tested per IS 383 guidelines.",
    bulkLogisticsDetails: "Delivered loose by tipper trucks or tractor trolleys.",
    products: [],
    faqs: [],
    relatedCategorySlugs: ["sand-aggregates", "cement"],
    isOverview: false,
  },
  {
    slug: "aggregates",
    title: "Coarse Aggregates & Stone",
    shortTitle: "Aggregates",
    subtitle: "Machine-Crushed Blue Metal Stone Aggregates (10mm, 20mm & 40mm)",
    iconName: "Layers",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1600&q=80",
    overview: "We supply machine-crushed hard-stone aggregates in standard 10mm, 20mm, and 40mm sizes, as well as stone dust and GSB for sub-base leveling.",
    advantages: [
      "Machine-crushed angular stone particles ensuring solid mechanical interlocking",
      "Screened to remove excess quarry dust",
    ],
    authorizedBrandsPlaceholder: ["[VERIFY LOCAL CRUSHERS]"],
    qualityAssuranceNotes: "Conforming to IS 383 specifications.",
    bulkLogisticsDetails: "Delivered loose by tipper dump trucks.",
    products: [],
    faqs: [],
    relatedCategorySlugs: ["sand-aggregates", "cement"],
    isOverview: false,
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
    ],
    authorizedBrandsPlaceholder: ["[VERIFY LOCAL SUPPLIERS]"],
    qualityAssuranceNotes: "Durable jobsite consumables.",
    bulkLogisticsDetails: "Delivered alongside primary building materials.",
    products: [],
    faqs: [],
    relatedCategorySlugs: ["shuttering-plywood", "hardware", "cover-blocks", "tarpaulins-site-essentials"],
    isOverview: false,
  },
];

/**
 * Overview categories strictly focused on the 7 primary materials requested:
 * 1. Cement
 * 2. Bricks & Blocks
 * 3. Sand & Aggregates
 * 4. Shuttering Plywood
 * 5. Hardware
 * 6. Cover Blocks
 * 7. Tarpaulins & Site Essentials
 */
export const overviewMaterialSlugs = [
  "cement",
  "bricks-blocks",
  "sand-aggregates",
  "shuttering-plywood",
  "hardware",
  "cover-blocks",
  "tarpaulins-site-essentials",
] as const;

export const overviewMaterials: MaterialCategoryItem[] = overviewMaterialSlugs
  .map((slug) => materialsData.find((m) => m.slug === slug))
  .filter((m): m is MaterialCategoryItem => Boolean(m));
