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
    subtitle: "Certified Ordinary Portland Cement (OPC) & Portland Pozzolana Cement (PPC)",
    iconName: "Layers",
    heroImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=80",
    overview: "GG Construction Co. maintains primary manufacturer distribution alliances supplying bulk bagged and loose tanker cement directly to major civil infrastructure projects, commercial builders, and RMC batching plants. Every batch is supported by physical test certificates (MTC) verifying fineness, setting times, and compressive strength.",
    advantages: [
      "Direct dispatch from certified cement manufacturing facilities",
      "Supplied with manufacturer Test Certificates (MTC) for each batch",
      "Bulk tanker supply (bulker) available for on-site batching plants",
      "Strict moisture-proof warehouse staging and rapid fleet delivery",
    ],
    authorizedBrandsPlaceholder: [
      "[VERIFY AUTHORIZED BRAND - UltraTech / ACC / Ambuja / Shree / Dalmia]",
      "[VERIFY REGIONAL TIE-UPS - J.K. Cement / Birla Corporation]",
      "[ADD VERIFIED SUPPLIER DEALERSHIP REGISTRATION]",
    ],
    qualityAssuranceNotes: "Tested per IS 12269 (OPC 53 Grade) and IS 1489 (PPC). Comprehensive laboratory checks include 3-day, 7-day, and 28-day compressive strength audits, Blaine fineness test, and Le Chatelier soundness verification.",
    bulkLogisticsDetails: "Supplied in standard 50 kg HDPE bags or pressurized bulkers (25 to 40 MT capacity). Rapid delivery guaranteed within 24 to 48 hours of dispatch scheduling across key regional hubs.",
    products: [
      {
        name: "OPC 53 Grade Cement",
        gradeVariants: ["Grade 53 Standard", "High Early Strength", "Rapid Hardening"],
        specifications: [
          { label: "Standard Compliance", value: "[VERIFY SPECIFICATION - IS 12269:2013 Compliant]" },
          { label: "28-Day Strength", value: "[VERIFY SPECIFICATION - Minimum 53 MPa / Target 58+ MPa]" },
          { label: "Initial Setting Time", value: "[VERIFY SPECIFICATION - Minimum 30 Minutes]" },
          { label: "Soundness (Le Chatelier)", value: "[VERIFY SPECIFICATION - Max 10 mm]" },
        ],
        applications: ["High-rise RCC frames", "Prestressed concrete girders", "Heavy machine footings", "Runway pavements"],
        packaging: "50 kg Sealed Polypropylene Bags / Bulk Tankers",
        minimumOrder: "500 Bags (25 MT) / 1 Bulk Tanker",
      },
      {
        name: "PPC (Portland Pozzolana Cement)",
        gradeVariants: ["Flyash-Based Pozzolana", "Calcined Clay"],
        specifications: [
          { label: "Standard Compliance", value: "[VERIFY SPECIFICATION - IS 1489 Part 1:2015 Compliant]" },
          { label: "28-Day Strength", value: "[VERIFY SPECIFICATION - Minimum 33 MPa / Achieves 43+ MPa]" },
          { label: "Sulphate Resistance", value: "[VERIFY SPECIFICATION - High Resistance]" },
        ],
        applications: ["Plastering and brick masonry", "Subterranean foundation walls", "Hydraulic structures and dams", "General civil mass concrete"],
        packaging: "50 kg Moisture-Proof Bags",
        minimumOrder: "300 Bags (15 MT)",
      },
      {
        name: "Slag Cement (PSC / GGBS)",
        gradeVariants: ["IS 455 Portland Slag Cement", "Ground Granulated Blast Furnace Slag"],
        specifications: [
          { label: "Standard Compliance", value: "[VERIFY SPECIFICATION - IS 455 / IS 16714:2018]" },
          { label: "Chemical Resistance", value: "[VERIFY SPECIFICATION - Superior Chloride & Sulphate Attack Resistance]" },
        ],
        applications: ["Marine and coastal civil structures", "Effluent treatment plants", "Mass concrete pours with low heat of hydration"],
        packaging: "50 kg Bags / Loose Tanker Bulkers",
        minimumOrder: "500 Bags (25 MT)",
      },
    ],
    faqs: [
      {
        question: "Can GG Construction Co. supply bulk cement directly to site silos via bulkers?",
        answer: "Yes. For infrastructure and large commercial sites equipped with storage silos, we deploy pneumatic discharge bulkers ranging from 25 MT to 40 MT capacity with on-site compressor unloading.",
      },
      {
        question: "Do you supply factory manufacturer test certificates (MTC) with each shipment?",
        answer: "Every single truckload or bulker consignment comes accompanied by the original manufacturer batch test certificate detailing 3-day and 7-day compressive strength, chemical composition, and fineness.",
      },
    ],
    relatedCategorySlugs: ["tmt-steel", "sand", "aggregates", "construction-chemicals"],
  },
  {
    slug: "tmt-steel",
    title: "TMT Rebars & Structural Steel",
    subtitle: "High-Ductility Primary Steel Rebars (Fe 500D / Fe 550D / CRS)",
    iconName: "ShieldCheck",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    overview: "We supply primary manufacturer Thermo-Mechanically Treated (TMT) steel reinforcement bars engineered for high yield strength and superior elongation. Crucial for seismic-resistant reinforced concrete, our rebars are sourced through verified primary mill channels ensuring consistent rib patterns and zero brittleness.",
    advantages: [
      "Direct sourcing from primary integrated steel plants (ISP)",
      "High elongation (16%+) meeting strict seismic Zone IV & V ductility codes",
      "Corrosion Resistant Steel (CRS) variants for moisture-prone basements and coastal belts",
      "Full traceability with heat numbers embossed on every rebar meter",
    ],
    authorizedBrandsPlaceholder: [
      "[VERIFY AUTHORIZED BRAND - Tata Tiscon / JSW Neosteel / SAIL / Jindal Panther]",
      "[ADD VERIFIED PRIMARY STEEL DISTRIBUTION REGISTRATION]",
    ],
    qualityAssuranceNotes: "Fully compliant with IS 1786:2008. Verified for carbon equivalent (CE) below 0.42% to guarantee faultless weldability and bendability without micro-fracturing.",
    bulkLogisticsDetails: "Dispatched in standard 12-meter straight lengths or pre-cut lengths by articulated flatbed trailers (25 to 35 MT payload). Bundles strapped with tamper-proof metal tags.",
    products: [
      {
        name: "Fe 500D Seismic Grade TMT",
        gradeVariants: ["8mm", "10mm", "12mm", "16mm", "20mm", "25mm", "32mm"],
        specifications: [
          { label: "Yield Strength", value: "[VERIFY SPECIFICATION - Min 500 N/mm²]" },
          { label: "Tensile Strength (UTS)", value: "[VERIFY SPECIFICATION - Min 565 N/mm²]" },
          { label: "Total Elongation (Agt)", value: "[VERIFY SPECIFICATION - Min 16% (High Ductility)]" },
          { label: "Standard", value: "[VERIFY SPECIFICATION - IS 1786 Fe 500D]" },
        ],
        applications: ["Seismic columns and beams", "Foundation mats and pile caps", "Commercial high-rise frames", "Bridge piers and retaining walls"],
        packaging: "12m Bundles / Standard Weight Tolerances",
        minimumOrder: "15 Metric Tons",
      },
      {
        name: "Fe 550D Heavy Infrastructure TMT",
        gradeVariants: ["16mm", "20mm", "25mm", "28mm", "32mm", "36mm", "40mm"],
        specifications: [
          { label: "Yield Strength", value: "[VERIFY SPECIFICATION - Min 550 N/mm²]" },
          { label: "Tensile Strength (UTS)", value: "[VERIFY SPECIFICATION - Min 600 N/mm²]" },
          { label: "Total Elongation (Agt)", value: "[VERIFY SPECIFICATION - Min 14.5%]" },
        ],
        applications: ["Heavy industrial foundations", "Flyovers and infrastructure bridges", "Heavy gantry foundation anchor cages"],
        packaging: "12m Bundles with Identification Heat Tags",
        minimumOrder: "20 Metric Tons",
      },
      {
        name: "Corrosion Resistant Steel (CRS) Rebars",
        gradeVariants: ["Fe 500D CRS", "Copper-Chromium Alloyed"],
        specifications: [
          { label: "Corrosion Index", value: "[VERIFY SPECIFICATION - Up to 1.8x Standard Rebar Longevity]" },
          { label: "Protection Type", value: "[VERIFY SPECIFICATION - Inherent Chemical Passivation Layer]" },
        ],
        applications: ["Deep multi-level subterranean basements", "Coastal high-humidity construction", "Effluent & water treatment structures"],
        packaging: "12m Bundles Sealed with Anti-Rust Vapor Barrier",
        minimumOrder: "20 Metric Tons",
      },
    ],
    faqs: [
      {
        question: "Why should contractors specify Fe 500D instead of standard Fe 500?",
        answer: "The 'D' designation indicates high ductility with a minimum total elongation of 16%, compared to 12% in standard Fe 500. Under seismic earthquake stresses, ductile rebars absorb vibrational energy through controlled deformation rather than abrupt brittle failure.",
      },
      {
        question: "Can GG Construction Co. deliver pre-bent and pre-cut rebar to site?",
        answer: "Yes, we provide factory cut-and-bend services per client Bar Bending Schedules (BBS), saving on-site scrap waste, labor congestion, and assembly time.",
      },
    ],
    relatedCategorySlugs: ["cement", "aggregates", "construction-chemicals"],
  },
  {
    slug: "bricks-blocks",
    title: "Bricks & AAC Blocks",
    subtitle: "Precision Autoclaved Aerated Concrete (AAC) & High-Strength Red Clay Bricks",
    iconName: "Boxes",
    heroImage: "https://images.unsplash.com/photo-1584463699026-df06a5e1c0c6?auto=format&fit=crop&w=1600&q=80",
    overview: "Wall masonry directly impacts structural dead load, thermal insulation, and plaster finish consumption. We supply factory-cured AAC blocks engineered for millimeter dimensional accuracy, together with kiln-fired wire-cut red clay bricks and heavy-duty concrete solid blocks.",
    advantages: [
      "AAC blocks reduce structural dead load by up to 50% compared to traditional red bricks",
      "High thermal insulation (low thermal conductivity) reducing indoor air conditioning bills",
      "Factory steam autoclaving eliminates post-masonry shrinkage cracking",
      "Pre-squared edges enable thin-bed joint adhesive masonry with zero mortar mess",
    ],
    authorizedBrandsPlaceholder: [
      "[VERIFY AUTHORIZED BRAND - Magicrete / Siporex / Biltech / Godrej Koroot]",
      "[ADD VERIFIED LOCAL HIGH-STRENGTH CLAY KILN SUPPLIERS]",
    ],
    qualityAssuranceNotes: "Tested per IS 2185 Part 3 for AAC blocks and IS 1077 for red clay bricks. Compressive strength, water absorption (less than 10%), and dry density rigorously audited per truckload.",
    bulkLogisticsDetails: "Delivered palletized with stretch wrapping on hydraulic tail-lift trucks or flatbed carriers. Minimal breakage guaranteed under 1.5% on delivery.",
    products: [
      {
        name: "AAC Lightweight Blocks",
        gradeVariants: ["4-inch (100mm)", "6-inch (150mm)", "8-inch (200mm)", "9-inch (230mm)"],
        specifications: [
          { label: "Dry Density", value: "[VERIFY SPECIFICATION - 550 - 650 kg/m³]" },
          { label: "Compressive Strength", value: "[VERIFY SPECIFICATION - Min 3.5 - 4.5 N/mm²]" },
          { label: "Fire Resistance", value: "[VERIFY SPECIFICATION - Up to 4 Hours (IS 2185 Part 3)]" },
          { label: "Thermal Conductivity", value: "[VERIFY SPECIFICATION - 0.16 W/m·K]" },
        ],
        applications: ["Internal partition walls", "External non-load-bearing curtain walls", "Commercial office partition grids"],
        packaging: "Palletized & Shrink-Wrapped",
        minimumOrder: "1 Truckload (~25-30 Cubic Meters)",
      },
      {
        name: "High-Strength Wire-Cut Red Bricks",
        gradeVariants: ["Class 7.5", "Class 10.0", "Class 12.5"],
        specifications: [
          { label: "Compressive Strength", value: "[VERIFY SPECIFICATION - 7.5 to 12.5 N/mm²]" },
          { label: "Water Absorption", value: "[VERIFY SPECIFICATION - Max 15%]" },
        ],
        applications: ["Load-bearing residential masonry", "Exposed architectural brickwork", "Substructure foundation masonry"],
        packaging: "Bundled Pallet Loads",
        minimumOrder: "5,000 Pieces",
      },
      {
        name: "Concrete Solid & Hollow Blocks",
        gradeVariants: ["400x200x200 mm", "400x200x150 mm", "400x200x100 mm"],
        specifications: [
          { label: "Density Class", value: "[VERIFY SPECIFICATION - Grade A / B per IS 2185 Part 1]" },
          { label: "Compressive Strength", value: "[VERIFY SPECIFICATION - Min 5.0 to 7.0 N/mm²]" },
        ],
        applications: ["Boundary compound walls", "Basement retaining core masonry", "Industrial partition walls"],
        packaging: "Palletized Delivery",
        minimumOrder: "1,500 Pieces",
      },
    ],
    faqs: [
      {
        question: "How much cement mortar is saved by using AAC blocks instead of red clay bricks?",
        answer: "By using precision AAC blocks with thin-bed polymer block jointing adhesive (2-3mm joint), you eliminate traditional 12-15mm cement-sand mortar, reducing mortar consumption by over 70% and eliminating plaster sand hauling.",
      },
    ],
    relatedCategorySlugs: ["cement", "sand", "construction-chemicals"],
  },
  {
    slug: "sand",
    title: "Sand & Fine Aggregates",
    subtitle: "Eco-Friendly Manufactured Sand (M-Sand) & Plastering Sand (P-Sand)",
    iconName: "Gem",
    heroImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80",
    overview: "With regulatory restrictions and environmental damage associated with river sand dredging, GG Construction Co. supplies precision-crushed Manufactured Sand (M-Sand) and washed Plastering Sand (P-Sand). Processed through vertical shaft impactors (VSI) and hydro-cyclone air classifiers, our sand guarantees optimum silt content and consistent zone grading.",
    advantages: [
      "100% free from organic impurities, clay lumps, and river silt",
      "VSI shaped cubical particles guaranteeing superior concrete workability and bonding",
      "Silt content strictly verified below 3% through continuous laboratory washing checks",
      "Graded to Zone II per IS 383, delivering higher concrete compressive strength with less cement",
    ],
    authorizedBrandsPlaceholder: [
      "[VERIFY CERTIFIED QUARRY PARTNERS - VSI Crushing & Hydro-Wash Units]",
      "[ADD VERIFIED NABL LAB TESTING AFFILIATION]",
    ],
    qualityAssuranceNotes: "Conforms to IS 383:2016 for fine aggregates. Sieve analysis conducted on every consignment verifying Zone II for M-Sand and Zone IV for P-Sand.",
    bulkLogisticsDetails: "Delivered by 10-wheeler and 12-wheeler heavy tipper dump trucks (16 to 28 MT per load). Weighbridge printouts provided at dispatch and site entry.",
    products: [
      {
        name: "Concrete M-Sand (Zone II)",
        gradeVariants: ["0 to 4.75mm Graded VSI Sand"],
        specifications: [
          { label: "Grading Zone", value: "[VERIFY SPECIFICATION - IS 383 Zone II]" },
          { label: "Silt Content", value: "[VERIFY SPECIFICATION - Silt < 3% by Weight]" },
          { label: "Specific Gravity", value: "[VERIFY SPECIFICATION - 2.60 - 2.70]" },
        ],
        applications: ["RCC slabs, columns, and foundations", "Pre-cast concrete elements", "Ready-Mix Concrete (RMC) batching"],
        packaging: "Loose Bulk Tipper Delivery",
        minimumOrder: "16 Metric Tons (1 Tipper Load)",
      },
      {
        name: "Plastering P-Sand (Zone IV)",
        gradeVariants: ["0 to 2.36mm Hydro-Washed Fine Sand"],
        specifications: [
          { label: "Grading Zone", value: "[VERIFY SPECIFICATION - IS 383 Zone IV]" },
          { label: "Clay & Silt Content", value: "[VERIFY SPECIFICATION - Minimized through air classification]" },
        ],
        applications: ["Internal and external wall plastering", "Tile adhesive screeds", "Fine masonry bedding"],
        packaging: "Loose Bulk Tipper / 50 kg Moisture-Resistant Bags",
        minimumOrder: "16 Metric Tons",
      },
    ],
    faqs: [
      {
        question: "Does M-Sand deliver equal or higher strength compared to river sand?",
        answer: "Independent laboratory testing confirms that concrete mixed with washed VSI M-Sand typically exhibits 10% to 15% higher compressive strength due to its cubical angularity and zero silt interference.",
      },
    ],
    relatedCategorySlugs: ["aggregates", "cement", "bricks-blocks"],
  },
  {
    slug: "aggregates",
    title: "Coarse Aggregates & GSB",
    subtitle: "Machine-Crushed Blue Metal Aggregates (10mm, 20mm, 40mm & Wet Mix)",
    iconName: "Layers",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1600&q=80",
    overview: "Our coarse aggregates are quarried from dense hard-granite and basalt formations, crushed through multi-stage cone crushers to achieve minimal elongation and flakiness. Sized for optimal packing density, our aggregates maximize concrete durability while minimizing required cement paste.",
    advantages: [
      "Low flakiness and elongation index (below 15%), preventing structural honeycombing",
      "High aggregate crushing and impact resistance value meeting highway and bridge specifications",
      "Washed clean of quarry dust and loam before loading",
      "Guaranteed volume verification via digital multi-axle weighbridges",
    ],
    authorizedBrandsPlaceholder: [
      "[VERIFY PRIMARY QUARRY CONCESSIONS & CRUSHING PLANTS]",
      "[ADD GOVERNMENT CRUSHING LICENSE & ENVIRONMENTAL CLEARANCE]",
    ],
    qualityAssuranceNotes: "Fully compliant with IS 383:2016 for coarse aggregates. Tested for Aggregate Impact Value (AIV < 20%), Flakiness Index (< 15%), and Water Absorption (< 0.6%).",
    bulkLogisticsDetails: "Shipped via 6-wheeler, 10-wheeler, and 12-wheeler dump trucks (10 to 30 MT capacity). Dedicated fleet ensures continuous pours for large raft foundations.",
    products: [
      {
        name: "20mm Graded Coarse Aggregate",
        gradeVariants: ["Single Sized 20mm", "Graded 20mm to 10mm Mix"],
        specifications: [
          { label: "Impact Value", value: "[VERIFY SPECIFICATION - Max 18%]" },
          { label: "Flakiness & Elongation", value: "[VERIFY SPECIFICATION - Combined < 15%]" },
          { label: "Standard", value: "[VERIFY SPECIFICATION - IS 383:2016]" },
        ],
        applications: ["RCC structural beams, slabs, columns", "PQC concrete highway pavements", "Heavy civil foundations"],
        packaging: "Loose Tipper Delivery",
        minimumOrder: "16 Metric Tons",
      },
      {
        name: "10mm Fine Coarse Aggregate",
        gradeVariants: ["Single Sized 10mm"],
        specifications: [
          { label: "Cleanliness", value: "[VERIFY SPECIFICATION - Washed Granite / Basalt]" },
        ],
        applications: ["Thin slab sections and pre-cast concrete", "Self-compacting concrete mixes", "Bituminous wearing courses"],
        packaging: "Loose Tipper Delivery",
        minimumOrder: "16 Metric Tons",
      },
      {
        name: "40mm Mass Concrete & GSB Sub-Base",
        gradeVariants: ["40mm Ballast", "Granular Sub-Base (GSB)", "Wet Mix Macadam (WMM)"],
        specifications: [
          { label: "California Bearing Ratio (CBR)", value: "[VERIFY SPECIFICATION - Exceeds 30% for GSB]" },
        ],
        applications: ["Mass raft foundations", "Road pavement sub-base layers", "Industrial floor sub-grade compaction"],
        packaging: "Loose Bulk Dumpers",
        minimumOrder: "25 Metric Tons",
      },
    ],
    faqs: [
      {
        question: "Why is low flakiness crucial for structural concrete?",
        answer: "Flaky and elongated stones break easily under compaction and impede concrete flow around tightly spaced rebar cages, causing structural voids. Our multi-stage cone-crushed stone maintains cubical geometry for smooth pumpability.",
      },
    ],
    relatedCategorySlugs: ["sand", "cement", "tmt-steel"],
  },
  {
    slug: "plumbing",
    title: "Plumbing & Sanitary Systems",
    subtitle: "Engineered CPVC, UPVC, SWR Piping & Commercial Valves",
    iconName: "Wrench",
    heroImage: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1600&q=80",
    overview: "Commercial and residential developments require leak-proof, pressure-rated plumbing lines engineered to handle thermal cycling and corrosive water conditions. We supply complete piping networks from primary CPVC hot/cold lines to heavy-duty underground HDPE and ductile iron (DI) pipe grids.",
    advantages: [
      "Lead-free, NSF certified potable water CPVC and UPVC pipes",
      "High chemical and chlorine resistance preventing pipe scaling",
      "SWR drainage systems with elastomeric rubber ring leak-proof joints",
      "Complete assortment of engineered brass valves, flanges, and fire-fighting fittings",
    ],
    authorizedBrandsPlaceholder: [
      "[VERIFY AUTHORIZED BRAND - Astral / Ashirvad / Supreme / Finolex / Prince]",
      "[ADD VERIFIED PLUMBING DISTRIBUTOR CODE]",
    ],
    qualityAssuranceNotes: "Compliant with ASTM D2846 (CPVC), IS 4985 (UPVC Pressure Pipes), and IS 13592 (SWR Drainage). Hydrostatic pressure tested up to 28 kg/cm².",
    bulkLogisticsDetails: "Packed in protective sleeve bundles, delivered via covered trucks directly to site stores. Fitting accessories boxed in protective cartons.",
    products: [
      {
        name: "CPVC Hot & Cold Water Distribution Pipes",
        gradeVariants: ["SDR 11 (Class 1)", "SDR 13.5 (Class 2)", "Sizes: 1/2-inch to 4-inch"],
        specifications: [
          { label: "Working Temperature", value: "[VERIFY SPECIFICATION - Up to 93°C (200°F)]" },
          { label: "Standard", value: "[VERIFY SPECIFICATION - ASTM D2846 & IS 15778]" },
        ],
        applications: ["Domestic potable water distribution", "Solar water heater interconnects", "Hospital and hotel hot water loops"],
        packaging: "3m and 5m Standard Lengths",
        minimumOrder: "Full Project Lot / ₹ 50,000 Minimum",
      },
      {
        name: "UPVC SWR Ring-Fit Drainage Pipes",
        gradeVariants: ["Type A (Rainwater)", "Type B (Soil & Waste)", "75mm, 110mm, 160mm"],
        specifications: [
          { label: "Joint Type", value: "[VERIFY SPECIFICATION - Integrated Rubber Ring Seal]" },
          { label: "Standard", value: "[VERIFY SPECIFICATION - IS 13592]" },
        ],
        applications: ["Vertical plumbing shafts", "Basement soil and waste drainage", "Roof stormwater rainwater downspouts"],
        packaging: "Protective Bundles",
        minimumOrder: "Full Project Lot",
      },
    ],
    faqs: [
      {
        question: "Do you supply complete matching solvent cements and fittings?",
        answer: "Yes, we mandate supplying only manufacturer-approved solvent cements and heavy-duty fittings along with pipe lengths to preserve system warranty and pressure ratings.",
      },
    ],
    relatedCategorySlugs: ["electrical", "construction-chemicals"],
  },
  {
    slug: "electrical",
    title: "Electrical Infrastructure & Cables",
    subtitle: "FR / FRLS Copper Wires, Armoured Power Cables & Modular Conduits",
    iconName: "Zap",
    heroImage: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1600&q=80",
    overview: "Electrical safety is non-negotiable in civil structures. We supply certified Flame Retardant Low Smoke (FRLS) single-core copper wires, multi-core armored LT/HT power cables, heavy-duty rigid PVC conduits, and industrial distribution boards.",
    advantages: [
      "100% Electrolytic Grade Bright Annealed Copper (> 99.97% purity)",
      "FRLS insulation drastically reduces toxic gas emission during fire events",
      "Armoured underground power cables resistant to rodent attack and mechanical damage",
      "High dielectric insulation strength conforming to Bureau of Indian Standards (BIS)",
    ],
    authorizedBrandsPlaceholder: [
      "[VERIFY AUTHORIZED BRAND - Polycab / Havells / KEI / Finolex / Schneider Electric]",
      "[ADD VERIFIED ELECTRICAL WHOLESALE CREDENTIALS]",
    ],
    qualityAssuranceNotes: "Fully compliant with IS 694 for domestic wires and IS 7098 for XLPE cables. 100% spark-tested on production lines.",
    bulkLogisticsDetails: "Packed on heavy wooden cable drums (cables) or standard 90-meter shrink-wrapped coils (wires). Inspected with tamper-proof security holograms.",
    products: [
      {
        name: "FRLS / Zero Halogen House Wires",
        gradeVariants: ["0.75 sq.mm", "1.0 sq.mm", "1.5 sq.mm", "2.5 sq.mm", "4.0 sq.mm", "6.0 sq.mm"],
        specifications: [
          { label: "Conductivity", value: "[VERIFY SPECIFICATION - 100% EC Pure Copper]" },
          { label: "Standard", value: "[VERIFY SPECIFICATION - IS 694 Certified]" },
          { label: "Oxygen Index", value: "[VERIFY SPECIFICATION - > 29%]" },
        ],
        applications: ["Concealed conduit house wiring", "Commercial office lighting grids", "Control panel wiring"],
        packaging: "90 Meter Coils / 180 Meter Project Packs",
        minimumOrder: "50 Coils Assorted",
      },
      {
        name: "XLPE Armoured LT Power Cables",
        gradeVariants: ["2-Core to 4-Core", "16 sq.mm to 400 sq.mm Aluminum / Copper"],
        specifications: [
          { label: "Voltage Grade", value: "[VERIFY SPECIFICATION - 1.1 kV Grade (IS 7098 Part 1)]" },
          { label: "Armouring", value: "[VERIFY SPECIFICATION - Galvanized Steel Wire / Strip]" },
        ],
        applications: ["Main distribution from transformer to main switchboard", "Industrial motor drives", "Underground perimeter feeds"],
        packaging: "500m / 1000m Wooden Cable Drums",
        minimumOrder: "100 Meters Cut Length / Full Drum",
      },
    ],
    faqs: [
      {
        question: "What is the safety benefit of FRLS insulation in multi-storey projects?",
        answer: "FRLS (Flame Retardant Low Smoke) wiring contains additives that retard flame propagation and release less than 20% acid gas when burned, ensuring clear visibility in emergency stairwells during an evacuation.",
      },
    ],
    relatedCategorySlugs: ["plumbing", "construction-chemicals"],
  },
  {
    slug: "construction-chemicals",
    title: "Construction Chemicals & Waterproofing",
    subtitle: "Polymer Admixtures, Crystalline Waterproofing, Epoxies & Tile Grouts",
    iconName: "FlaskConical",
    heroImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80",
    overview: "Modern structural performance depends on chemical engineering. We supply high-performance concrete plasticizers, crystalline waterproofing compounds, polyurethane joint sealants, micro-concreting repair mortars, and high-strength structural bonding epoxies.",
    advantages: [
      "Polycarboxylate Ether (PCE) superplasticizers delivering high slump retention with low water-cement ratios",
      "Integral crystalline waterproofing that self-heals micro-cracks up to 0.4mm within concrete",
      "UV-resistant elastomeric liquid membranes for flat terrace waterproofing",
      "Non-shrink structural grouts for machine base plates and anchor bolts",
    ],
    authorizedBrandsPlaceholder: [
      "[VERIFY AUTHORIZED BRAND - Fosroc / Dr. Fixit (Pidilite) / Sika / MAPEI / BASF Master Builders]",
      "[ADD CERTIFIED CHEMICAL APPLICATOR ALLIANCE]",
    ],
    qualityAssuranceNotes: "Compliant with ASTM C494 (Chemical Admixtures) and EN 1504 (Concrete Repair Systems). Every batch provided with technical data sheets (TDS) and material safety sheets (MSDS).",
    bulkLogisticsDetails: "Shipped in 20-liter pails, 200-liter drums, or 1,000-liter IBC totes for batching plants. Dry powders supplied in 25 kg multi-wall paper bags.",
    products: [
      {
        name: "Integral Crystalline Waterproofing Admixture",
        gradeVariants: ["Dry Powder Admixture", "Slurry Surface Coating"],
        specifications: [
          { label: "Permeability Reduction", value: "[VERIFY SPECIFICATION - Up to 70% per DIN 1048]" },
          { label: "Crack Self-Healing", value: "[VERIFY SPECIFICATION - Heals cracks up to 0.4mm]" },
        ],
        applications: ["Basement raft slabs and retaining walls", "Water retaining tanks and swimming pools", "Pre-cast tunnel segments"],
        packaging: "20 kg Bags / 5 kg Pails",
        minimumOrder: "200 kg Lot",
      },
      {
        name: "PCE High-Range Superplasticizer",
        gradeVariants: ["M30 to M60 Grade Mixes", "M70+ High Performance Concrete"],
        specifications: [
          { label: "Water Reduction", value: "[VERIFY SPECIFICATION - Up to 35% Water Reduction]" },
          { label: "Slump Retention", value: "[VERIFY SPECIFICATION - Up to 120 Minutes at 35°C]" },
        ],
        applications: ["Ready-Mix Concrete batching", "High-rise pumpable concrete", "Pre-stressed bridge girders"],
        packaging: "220 kg Drums / 1000L IBC Totes",
        minimumOrder: "1 Drum (220 kg)",
      },
      {
        name: "Non-Shrink Free-Flow Structural Grout",
        gradeVariants: ["High Strength (60 MPa)", "Ultra High Strength (80+ MPa)"],
        specifications: [
          { label: "Expansion", value: "[VERIFY SPECIFICATION - Controlled positive expansion 0.2 - 2.0%]" },
          { label: "Flowability", value: "[VERIFY SPECIFICATION - Self-leveling 250mm flow cone]" },
        ],
        applications: ["Heavy machinery base plates", "Bridge bearing seating", "Anchor bolt grouting and pre-cast joints"],
        packaging: "25 kg Moisture-Resistant Bags",
        minimumOrder: "40 Bags (1 MT)",
      },
    ],
    faqs: [
      {
        question: "How does crystalline waterproofing self-heal concrete cracks?",
        answer: "The proprietary chemicals react with unhydrated cement particles and water to produce insoluble microscopic needle-like crystals that fill capillary pores and hairline cracks, permanently halting water ingress even under high hydrostatic head pressure.",
      },
    ],
    relatedCategorySlugs: ["cement", "tmt-steel", "sand"],
  },
  {
    slug: "other-building-supplies",
    title: "Other Building & Site Supplies",
    subtitle: "Hardware, Safety PPE, Scaffolding Accessories & Fasteners",
    iconName: "Hammer",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    overview: "Completing our building materials division, we stock essential jobsite infrastructure consumables: ISI-certified safety gear, cuplock scaffolding hardware, tie rods, shuttering plywood, rebar couplers, and structural mechanical fasteners.",
    advantages: [
      "All safety gear complies with DGMS and OSHA jobsite safety mandates",
      "High-repetition film-faced shuttering plywood (up to 25 repetitions)",
      "High-tensile rebar couplers eliminating manual lap-splice steel waste",
      "Complete site safety barrier netting and hazard signage kits",
    ],
    authorizedBrandsPlaceholder: [
      "[VERIFY AUTHORIZED BRAND - Karam / 3M / Hilti / Fischer / Centuryply / Greenply]",
      "[ADD VERIFIED SAFETY PARTNER ACCREDITATIONS]",
    ],
    qualityAssuranceNotes: "Helmets certified to IS 2925, safety harnesses to IS 3521, and film-faced plywood to IS 4990.",
    bulkLogisticsDetails: "Delivered alongside primary materials or scheduled on demand via express logistics vans.",
    products: [
      {
        name: "Film-Faced Shuttering Plywood (12mm / 18mm)",
        gradeVariants: ["30 kg / 34 kg Calibrated Phenolic Plywood"],
        specifications: [
          { label: "Standard", value: "[VERIFY SPECIFICATION - IS 4990 Certified]" },
          { label: "Repetition Life", value: "[VERIFY SPECIFICATION - 18 to 25 Repetitions with Proper Release Agent]" },
        ],
        applications: ["Slab formwork and beam shuttering", "Column formwork", "Pre-cast casting beds"],
        packaging: "Bundles of 50 Sheets",
        minimumOrder: "100 Sheets",
      },
      {
        name: "Site Safety PPE Kits & Full Body Harnesses",
        gradeVariants: ["Standard Civil Site Kit", "High-Altitude Tower Kit"],
        specifications: [
          { label: "Standard Compliance", value: "[VERIFY SPECIFICATION - IS 3521 / CE EN 361]" },
        ],
        applications: ["Mandatory workforce protective equipment across all construction sites"],
        packaging: "Boxed Kits per Worker",
        minimumOrder: "25 Kits",
      },
    ],
    faqs: [
      {
        question: "Can GG Construction Co. supply complete scaffolding and formwork systems on lease or sale?",
        answer: "Yes, we provide both sale and project-duration leasing of cuplock scaffolding, prop jacks, aluminum beam formwork, and heavy safety edge barriers.",
      },
    ],
    relatedCategorySlugs: ["cement", "tmt-steel", "construction-chemicals"],
  },
];
