export type ProjectSector =
  | "residential"
  | "commercial"
  | "industrial"
  | "renovation"
  | "real-estate-development";

export interface ProjectItem {
  slug: string;
  title: string;
  subtitle: string;
  sector: ProjectSector;
  sectorLabel: string;
  location: string;
  status: "Completed" | "Under Construction" | "Planning & Approvals";
  year: string;
  builtUpArea: string;
  timeline: string;
  clientTypePlaceholder: string;
  projectValuePlaceholder: string;
  heroImage: string;
  galleryImages: string[];
  scope: string[];
  keyFeatures: string[];
  engineeringHighlights: {
    title: string;
    description: string;
  }[];
  overview: string;
  challenge: string;
  solution: string;
  relatedProjectSlugs: string[];
}

export const projectsData: ProjectItem[] = [
  {
    slug: "apex-commercial-tower",
    title: "Apex Commercial Centre",
    subtitle: "G+18 Grade-A Commercial Tower with Post-Tensioned Slabs & Integrated Facade",
    sector: "commercial",
    sectorLabel: "Commercial",
    location: "Commercial Business District, Sector 62 [VERIFY CITY]",
    status: "Completed",
    year: "2024",
    builtUpArea: "485,000 Sq. Ft.",
    timeline: "28 Months",
    clientTypePlaceholder: "[ADD VERIFIED CLIENT / DEVELOPER NAME]",
    projectValuePlaceholder: "[ADD VERIFIED CONTRACT VALUE]",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    ],
    scope: [
      "Turnkey civil construction including 3-level subterranean basement",
      "Post-tensioned long-span slab casting across 18 storeys",
      "Unitized double-glazed energy-efficient curtain wall envelope",
      "Integrated MEP, HVAC chiller plants & 100% DG power backup",
      "BMS automation & advanced fire suppression systems",
    ],
    keyFeatures: [
      "Column-free 12-meter floor spans maximizing tenant usable floor area",
      "Triple-height granite entrance lobby with acoustic baffling",
      "Automated multi-level car parking with EV charging infrastructure",
      "Rooftop photovoltaic solar generation array",
    ],
    engineeringHighlights: [
      {
        title: "Deep Diaphragm Wall Excavation",
        description: "Engineered a 14-meter anchored perimeter diaphragm wall through dense urban strata, preventing settlement in adjacent structures.",
      },
      {
        title: "High-Strength Self-Compacting Concrete",
        description: "Utilized M50 & M60 grade self-compacting concrete withGGBS mineral admixtures, reducing carbon footprint while guaranteeing high early strength.",
      },
      {
        title: "Post-Tensioned Slab Technology",
        description: "Reduced concrete slab thickness by 25% compared to conventional RCC, lowering structural dead load and overall seismic forces.",
      },
    ],
    overview: "Apex Commercial Centre stands as a testament to precision multi-storey engineering in a congested urban corridor. Delivered on schedule with zero safety incidents, the project combined high-performance concrete technology with pre-procured structural steel and in-house batch testing.",
    challenge: "Executing deep 14-meter basement excavations directly alongside an active arterial roadway with heavy traffic, requiring zero soil shifting or groundwater disturbance.",
    solution: "Deployed anchored continuous diaphragm walls with vibrating wire piezometers for real-time hydrostatic pressure tracking and pre-planned nocturnal logistics.",
    relatedProjectSlugs: ["horizon-trade-centre", "zenith-logistics-park"],
  },
  {
    slug: "zenith-logistics-park",
    title: "Zenith Mega Logistics Hub",
    subtitle: "620,000 Sq. Ft. Pre-Engineered Industrial Warehouse with FM-2 Superflat Floors",
    sector: "industrial",
    sectorLabel: "Industrial & Logistics",
    location: "Industrial Corridor, NH-48 Express Node [VERIFY REGION]",
    status: "Completed",
    year: "2023",
    builtUpArea: "620,000 Sq. Ft.",
    timeline: "14 Months",
    clientTypePlaceholder: "[ADD VERIFIED LOGISTICS OPERATOR NAME]",
    projectValuePlaceholder: "[ADD VERIFIED CONTRACT VALUE]",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    ],
    scope: [
      "Site grading, soil stabilization and 45-acre master infrastructure",
      "High-clearance Pre-Engineered Steel Building (PEB) fabrication & erection",
      "FM-2 category jointless laser screed industrial concrete flooring",
      "Hydraulic dock leveller pits and canopy loading bays",
      "Stormwater drainage retention lagoons and fire hydrant ring mains",
    ],
    keyFeatures: [
      "12-meter clear standing height beneath structural haunches",
      "48 automated loading docks equipped with industrial shelters",
      "Steel-fiber reinforced jointless concrete flooring (SFRC)",
      "High-efficiency industrial LED lighting and skylight day-lighting",
    ],
    engineeringHighlights: [
      {
        title: "Laser Screed Superflat Floor Execution",
        description: "Poured 2,500 sq. meters daily using automated laser screed technology, achieving TR34 FM-2 flatness tolerances.",
      },
      {
        title: "PEB High-Tensile Structural Framing",
        description: "Optimized 345 MPa high-tensile steel rafters and columns engineered to withstand severe regional wind velocity conditions.",
      },
    ],
    overview: "Constructed for large-scale multi-tenant warehousing, Zenith Logistics Hub combined earthwork balance, specialized industrial floor technology, and heavy crane erection to beat tight retail delivery deadlines.",
    challenge: "Expansive black-cotton soil across 45 acres requiring deep stabilization to prevent future slab heave and structural foundation shifting.",
    solution: "Implemented lime-flyash sub-grade stabilization underlain by biaxial geogrids and stone columns, guaranteeing zero sub-base settlement.",
    relatedProjectSlugs: ["matrix-manufacturing-facility", "apex-commercial-tower"],
  },
  {
    slug: "serene-villas-phase1",
    title: "Serene Meadow Estates - Phase I",
    subtitle: "Gated Enclave of 42 Bespoke Luxury Residences with Private Plunge Pools",
    sector: "residential",
    sectorLabel: "Residential",
    location: "Green Belt Enclave, Foothills Boulevard [VERIFY LOCATION]",
    status: "Completed",
    year: "2024",
    builtUpArea: "215,000 Sq. Ft.",
    timeline: "22 Months",
    clientTypePlaceholder: "[ADD VERIFIED CLIENT / HOUSING SOCIETY]",
    projectValuePlaceholder: "[ADD VERIFIED CONTRACT VALUE]",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    ],
    scope: [
      "Turnkey design-build of 42 individual triplex residential villas",
      "Gated community road infrastructure, underground cabling and landscaping",
      "Clubhouse civil construction, Olympic lap pool and tennis courts",
      "Comprehensive basement and roof crystalline waterproofing",
    ],
    keyFeatures: [
      "Double-height living rooms with floor-to-ceiling thermal glass walls",
      "Imported natural stone cladding and exterior weather-resistant wood finishes",
      "Individual rainwater harvesting sumps and solar geyser piping",
      "Dedicated home automation conduits and EV charger bays",
    ],
    engineeringHighlights: [
      {
        title: "Acoustic Isolation Engineering",
        description: "Specialized floating screed and decoupled wall partitions providing superior sound transmission class (STC) ratings between living zones.",
      },
      {
        title: "Multi-Barrier Moisture Proofing",
        description: "Zero dampness certified through 3-tier waterproofing: integral concrete crystalline, primer membranes, and protective screeds.",
      },
    ],
    overview: "Serene Meadow Estates showcases our dedication to architectural precision in luxury residential construction. Every villa was constructed with structural tolerances under 3mm, integrating natural stone and high-grade glass.",
    challenge: "Achieving seamless finishes across large open-plan living areas with expansive cantilevered second-storey balconies.",
    solution: "Utilized reinforced post-tensioned cantilever beams paired with vibration-damping structural brackets to deliver graceful overhangs.",
    relatedProjectSlugs: ["the-grand-residence", "horizon-trade-centre"],
  },
  {
    slug: "horizon-trade-centre",
    title: "Horizon Integrated Business Park",
    subtitle: "Twin-Tower Mixed-Use Commercial and Retail Centre with Central Plaza",
    sector: "commercial",
    sectorLabel: "Commercial",
    location: "Financial District Outer Ring [VERIFY LOCATION]",
    status: "Under Construction",
    year: "2025",
    builtUpArea: "780,000 Sq. Ft.",
    timeline: "36 Months (Ongoing)",
    clientTypePlaceholder: "[ADD VERIFIED ENTERPRISE DEVELOPER]",
    projectValuePlaceholder: "[ADD VERIFIED CONTRACT VALUE]",
    heroImage: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    ],
    scope: [
      "Twin G+22 tower construction connected by a 3-storey retail skybridge",
      "Four subterranean basement parking levels holding 1,800 vehicles",
      "Central pedestrian landscaped plaza with kinetic water features",
      "Full MEP, dual water treatment plants, and smart energy monitoring",
    ],
    keyFeatures: [
      "Skybridge viewing terrace linking executive lounges across both towers",
      "IGBC Platinum targeted sustainable envelope with high-performance solar glass",
      "Automated destination-control elevators travelling at 4 meters/second",
    ],
    engineeringHighlights: [
      {
        title: "Complex Skybridge Steel Truss Lift",
        description: "Pre-assembled a 280-ton steel bridge truss on the ground and hoisted it 60 meters using synchronized strand jacks.",
      },
      {
        title: "Seismic Base Dissipation",
        description: "Incorporated tuned mass dampers in upper mechanical storeys to minimize wind sway in extreme weather.",
      },
    ],
    overview: "Currently one of the most ambitious engineering undertakings in our portfolio, Horizon Business Park represents state-of-the-art multi-tower coordination, slip-form central cores, and complex structural skyway engineering.",
    challenge: "Hoisting and securing a 280-metric-ton steel skybridge between two independent concrete towers with thermal expansion joints.",
    solution: "Designed sliding spherical bearings that accommodate differential tower sway and thermal movement while transferring structural dead loads.",
    relatedProjectSlugs: ["apex-commercial-tower", "matrix-manufacturing-facility"],
  },
  {
    slug: "matrix-manufacturing-facility",
    title: "Matrix Precision Component Plant",
    subtitle: "Heavy Engineering Manufacturing Facility with Gantry Cranes & Vibration Footings",
    sector: "industrial",
    sectorLabel: "Industrial",
    location: "Automotive & Engineering SEZ [VERIFY REGION]",
    status: "Completed",
    year: "2023",
    builtUpArea: "340,000 Sq. Ft.",
    timeline: "18 Months",
    clientTypePlaceholder: "[ADD VERIFIED INDUSTRIAL CLIENT NAME]",
    projectValuePlaceholder: "[ADD VERIFIED CONTRACT VALUE]",
    heroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    ],
    scope: [
      "Civil design and construction of heavy machine press pits",
      "PEB fabrication supporting twin 35-ton overhead traveling cranes",
      "Substation civil construction with 33kV high-voltage switchyard",
      "Zero Liquid Discharge (ZLD) effluent treatment civil reservoirs",
    ],
    keyFeatures: [
      "35-ton crane runway girders with precision rail alignment tolerances",
      "Reinforced heavy equipment pads isolated by cork-neoprene vibration barriers",
      "Chemical-resistant epoxy floor coatings for automotive lubricant containment",
    ],
    engineeringHighlights: [
      {
        title: "Dynamic Shock Isolation",
        description: "Constructed deep inertia blocks resting on tuned elastomeric springs, absorbing 95% of shock vibrations from 1,000-ton stamping presses.",
      },
    ],
    overview: "Engineered specifically for heavy machining and stamping, Matrix Component Plant exemplifies our ability to design and pour complex concrete pits and assemble crane-grade steel superstructures with millimeter precision.",
    challenge: "Preventing high-frequency press vibrations from propagating through the ground and disturbing precision CNC grinding machines nearby.",
    solution: "Engineered isolated mass concrete foundations with continuous air gap trenches and specialized isolation elastomer springs.",
    relatedProjectSlugs: ["zenith-logistics-park", "apex-commercial-tower"],
  },
  {
    slug: "heritage-courtyard-restoration",
    title: "Heritage Courtyard Corporate HQ",
    subtitle: "Adaptive Reuse & Structural CFRP Retrofit of a 60-Year-Old Administrative Building",
    sector: "renovation",
    sectorLabel: "Renovation & Retrofit",
    location: "Civil Lines Old City District [VERIFY LOCATION]",
    status: "Completed",
    year: "2024",
    builtUpArea: "85,000 Sq. Ft.",
    timeline: "12 Months",
    clientTypePlaceholder: "[ADD VERIFIED CORPORATE CLIENT]",
    projectValuePlaceholder: "[ADD VERIFIED CONTRACT VALUE]",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    ],
    scope: [
      "Forensic non-destructive concrete strength and carbonation testing",
      "Carbon Fiber Reinforced Polymer (CFRP) column and beam wrapping",
      "Restoration of heritage brick arches and lime mortar masonry",
      "Integration of modern hidden VRV air conditioning and fire sprinklers",
    ],
    keyFeatures: [
      "Preserved colonial-era brick archway courtyard converted to an atrium",
      "Upgraded structural rating from unreinforced masonry to current seismic standards",
      "Double-glazed acoustic timber windows replicating original historic joinery",
    ],
    engineeringHighlights: [
      {
        title: "CFRP Structural Strengthening",
        description: "Applied high-modulus carbon wraps across 84 load-bearing columns, augmenting structural capacity by 45% without enlarging column dimensions.",
      },
    ],
    overview: "A showcase in sustainable architecture, this adaptive reuse project turned an obsolete administrative compound into a vibrant, modern headquarters while respecting its architectural heritage.",
    challenge: "Increasing floor live load capacity from 2.0 kN/m² to 4.0 kN/m² for modern archive and office use without demolishing heritage ceilings.",
    solution: "Bonded structural steel flitch plates to timber joists and wrapped concrete cross-beams with bidirectional carbon fiber fabric.",
    relatedProjectSlugs: ["serene-villas-phase1", "apex-commercial-tower"],
  },
  {
    slug: "the-grand-residence",
    title: "The Grand Residence",
    subtitle: "Monolithic Architectural Manor with Exposed Architectural Concrete & Glass",
    sector: "residential",
    sectorLabel: "Residential",
    location: "Exclusive Estate Enclave [VERIFY LOCATION]",
    status: "Completed",
    year: "2023",
    builtUpArea: "18,500 Sq. Ft.",
    timeline: "16 Months",
    clientTypePlaceholder: "[ADD VERIFIED CLIENT NAME - PRIVATE]",
    projectValuePlaceholder: "[ADD VERIFIED CONTRACT VALUE]",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
    scope: [
      "Bespoke private residence with 4-level living spaces",
      "Architectural board-formed fair-faced concrete finish walls",
      "Cantilevered 15-meter infinity pool suspended over landscaped garden",
      "Subterranean home theater, wine cellar, and climate-controlled garage",
    ],
    keyFeatures: [
      "Impeccable fair-faced concrete surfaces requiring zero plaster or paint",
      "Motorized sliding glass walls opening to uninterrupted mountain panoramas",
      "Integrated geothermal cooling loops and smart KNX automation",
    ],
    engineeringHighlights: [
      {
        title: "Board-Formed Architectural Concrete",
        description: "Utilized customized timber formwork liners and calibrated concrete mix ratios to achieve a warm wood-grain texture on structural concrete.",
      },
    ],
    overview: "A masterclass in exposed structural concrete and restrained minimalism, The Grand Residence was built with zero margin for error. With fair-faced concrete, every pour was executed with immaculate vibration and formwork sealing.",
    challenge: "Pouring 8-meter-tall continuous architectural concrete walls without honeycombing, tie-rod leakage, or cold joint blemishes.",
    solution: "Engineered a custom self-consolidating concrete mix with optimized viscosity-modifying admixtures and executed continuous pump placement.",
    relatedProjectSlugs: ["serene-villas-phase1", "heritage-courtyard-restoration"],
  },
];
