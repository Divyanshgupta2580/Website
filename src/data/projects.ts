export type ProjectSector =
  | "residential"
  | "commercial"
  | "mixed-use"
  | "renovation";

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
  floors: string;
  timeline: string;
  clientTypePlaceholder: string;
  projectValuePlaceholder: string;
  isRepresentativePlaceholder: boolean;
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
    slug: "residential-building-4-floors",
    title: "Residential Building — 4 Floors",
    subtitle: "Low-Rise 4-Storey Residential Building with Brick Masonry & RCC Frame",
    sector: "residential",
    sectorLabel: "Residential",
    location: "Delhi NCR [VERIFY LOCATION]",
    status: "Completed",
    year: "2024",
    builtUpArea: "Approx. 7,200 Sq. Ft.",
    floors: "G+3 (4 Floors)",
    timeline: "11 Months",
    clientTypePlaceholder: "[ADD VERIFIED CLIENT NAME]",
    projectValuePlaceholder: "[ADD VERIFIED CONTRACT VALUE]",
    isRepresentativePlaceholder: true,
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    ],
    scope: [
      "RCC column and beam framed structure for G+3 floors",
      "Quality red brick masonry wall construction",
      "Internal cement plastering and electrical conduit routing",
      "Plumbing lines, sanitary drainage and overhead water tank setup",
      "Terrace waterproofing and exterior weather-resistant painting",
    ],
    keyFeatures: [
      "Independent floor layouts planned for family living",
      "Staircase and provision for small residential passenger elevator",
      "High-durability TMT bar reinforcement and standard 43/53 grade cement",
      "Well-ventilated room layouts with dedicated utility balconies",
    ],
    engineeringHighlights: [
      {
        title: "Quality Concrete Batching & Curing",
        description: "Monitored proper water-cement ratios and maintained standard 14 to 21-day curing cycles for optimal slab and column strength.",
      },
      {
        title: "Damp-Proof Course (DPC) Installation",
        description: "Carefully placed plinth-level DPC membranes to prevent capillary moisture rise into ground-floor walls.",
      },
    ],
    overview: "Representative project example illustrating GG Construction Co.'s core building construction capabilities for small-to-medium residential structures up to 4 floors. Focuses on dependable material usage, solid masonry, and tidy structural execution.",
    challenge: "Managing structural construction and material delivery within a compact residential plot with narrow neighborhood access.",
    solution: "Scheduled phased cement, sand, and aggregate drop-offs directly to the site to prevent street blockage while maintaining steady pouring schedules.",
    relatedProjectSlugs: ["family-residence-3-floors", "mixed-use-building-5-floors"],
  },
  {
    slug: "family-residence-3-floors",
    title: "Family Residence — 3 Floors",
    subtitle: "G+2 Independent Residential House Construction",
    sector: "residential",
    sectorLabel: "Residential",
    location: "Ghaziabad [VERIFY LOCATION]",
    status: "Completed",
    year: "2023",
    builtUpArea: "Approx. 4,500 Sq. Ft.",
    floors: "G+2 (3 Floors)",
    timeline: "9 Months",
    clientTypePlaceholder: "[ADD VERIFIED CLIENT NAME]",
    projectValuePlaceholder: "[ADD VERIFIED CONTRACT VALUE]",
    isRepresentativePlaceholder: true,
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    ],
    scope: [
      "Foundation excavation and footing casting for G+2 residential load",
      "RCC structure casting with tested TMT steel bars",
      "First-class brickwork partitions and exterior boundary wall",
      "Concealed copper wiring conduit and CPVC/UPVC plumbing",
      "Flooring base preparation, plaster work, and terrace waterproofing",
    ],
    keyFeatures: [
      "Spacious living and dining areas with natural lighting",
      "Covered ground floor parking bay and front portico",
      "Terrace parapet walls with rainwater drainage spouts",
      "Durable exterior texture and weather-protective coatings",
    ],
    engineeringHighlights: [
      {
        title: "Foundation Soil Compaction",
        description: "Compacted excavation trenches mechanically and laid a lean concrete mud mat prior to steel footing cage positioning.",
      },
    ],
    overview: "Representative residential build demonstrating practical house construction from ground breaking to finishing handover. Emphasizes clean finishes, dependable building materials, and honest supervision.",
    challenge: "Ensuring effective basement and ground-level water protection during the monsoon season.",
    solution: "Integrated waterproofing compound into foundation concrete and applied dual-layer bitumen coatings to external sub-grade masonry.",
    relatedProjectSlugs: ["residential-building-4-floors", "residential-renovation-addition"],
  },
  {
    slug: "commercial-building-4-floors",
    title: "Commercial Building — 4 Floors",
    subtitle: "Low-Rise Commercial Complex for Retail Shops & Upper Floor Offices",
    sector: "commercial",
    sectorLabel: "Commercial",
    location: "Noida [VERIFY LOCATION]",
    status: "Completed",
    year: "2024",
    builtUpArea: "Approx. 9,500 Sq. Ft.",
    floors: "G+3 (4 Floors)",
    timeline: "12 Months",
    clientTypePlaceholder: "[ADD VERIFIED CLIENT NAME]",
    projectValuePlaceholder: "[ADD VERIFIED CONTRACT VALUE]",
    isRepresentativePlaceholder: true,
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    ],
    scope: [
      "Commercial-grade reinforced concrete frame (columns, beams, slabs)",
      "Open-plan floor plates allowing flexible office and retail partitions",
      "Commercial electrical distribution conduit and fire safety shafts",
      "Toughened glass storefront provisions and exterior aluminum composite paneling",
      "Dedicated overhead water storage and commercial drainage lines",
    ],
    keyFeatures: [
      "Wide ground-floor retail shop frontage with roll-up shutter fittings",
      "Upper floor open-span office spaces with ample natural daylight",
      "Central staircase with granite tread finishes and stainless steel handrails",
      "Rear parking spaces and dedicated utility meter room",
    ],
    engineeringHighlights: [
      {
        title: "Commercial Floor Load Design",
        description: "Cast reinforced slabs designed for typical commercial office and retail storage loads (3.0 to 4.0 kN/m²).",
      },
    ],
    overview: "Representative commercial building project showcasing small-to-medium commercial construction up to 4 floors. Focuses on commercial functionality, clean facades, and low-maintenance materials.",
    challenge: "Creating wide, clear spans on the ground floor to maximize retail visibility without excessive column intrusions.",
    solution: "Carefully positioned heavy-section RCC transfer beams to balance upper-floor column loads onto peripheral structural points.",
    relatedProjectSlugs: ["shop-and-office-building-3-floors", "mixed-use-building-5-floors"],
  },
  {
    slug: "mixed-use-building-5-floors",
    title: "Mixed-Use Building — 5 Floors",
    subtitle: "Ground-Level Commercial Retail with 4 Upper Residential / Office Floors",
    sector: "mixed-use",
    sectorLabel: "Mixed Use",
    location: "Delhi NCR [VERIFY LOCATION]",
    status: "Under Construction",
    year: "2024–2025",
    builtUpArea: "Approx. 12,000 Sq. Ft.",
    floors: "G+4 (5 Floors)",
    timeline: "14 Months",
    clientTypePlaceholder: "[ADD VERIFIED CLIENT NAME]",
    projectValuePlaceholder: "[ADD VERIFIED CONTRACT VALUE]",
    isRepresentativePlaceholder: true,
    heroImage: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1200&q=80",
    ],
    scope: [
      "Deep footing and column frame construction for 5-storey load capacity",
      "Concrete slab casting across 5 levels with rigorous quality control",
      "Separate utility shafts for ground commercial and upper residential units",
      "Exterior plastering, weatherproofing, and safety railing installation",
      "Coordination of electrical meters and municipal water connections",
    ],
    keyFeatures: [
      "Dual-use design: vibrant ground commercial shops and quiet upper floors",
      "Separate entrance staircase for residential occupants to ensure privacy",
      "Built with high-grade 500D TMT steel and durable Portland Pozzolana Cement",
      "Top-floor terrace space with parapet protection and water tank tower",
    ],
    engineeringHighlights: [
      {
        title: "5-Storey RCC Structural Supervision",
        description: "Consistent concrete vibrator compaction during pours to prevent honeycomb formation across all 5 levels.",
      },
    ],
    overview: "Representative 5-floor building project demonstrating GG Construction Co.'s maximum personal construction scale (approximately 4–5 floors). Combining ground commercial use with upper residential living.",
    challenge: "Separating plumbing and electrical distribution lines between commercial tenants and residential upper floors.",
    solution: "Built two separate vertical service shafts allowing independent maintenance and metering without cross-interference.",
    relatedProjectSlugs: ["residential-building-4-floors", "commercial-building-4-floors"],
  },
  {
    slug: "shop-and-office-building-3-floors",
    title: "Shop & Office Building — 3 Floors",
    subtitle: "Neighborhood Commercial Building with Ground Retail & Upper Professional Suites",
    sector: "commercial",
    sectorLabel: "Commercial",
    location: "Delhi NCR [VERIFY LOCATION]",
    status: "Completed",
    year: "2023",
    builtUpArea: "Approx. 5,000 Sq. Ft.",
    floors: "G+2 (3 Floors)",
    timeline: "7 Months",
    clientTypePlaceholder: "[ADD VERIFIED CLIENT NAME]",
    projectValuePlaceholder: "[ADD VERIFIED CONTRACT VALUE]",
    isRepresentativePlaceholder: true,
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    ],
    scope: [
      "Full civil construction of 3-storey commercial unit",
      "Red brick walls and smooth cement interior plastering",
      "Aluminum-framed glass windows and front shop rolling shutters",
      "Sanitary fittings, washrooms on each floor, and rooftop water tanks",
    ],
    keyFeatures: [
      "Compact commercial footprint maximizing rental return on small plots",
      "Durable vitrified tile flooring in common hallways and offices",
      "Provision for split air-conditioning copper lines and drainage",
    ],
    engineeringHighlights: [
      {
        title: "Fast-Track Civil Sequencing",
        description: "Organized synchronized brick masonry and electrical conduit chasing to complete civil work within 7 months.",
      },
    ],
    overview: "Representative 3-floor commercial building for local businesses, clinics, or retail shops. High utility, low maintenance costs, and durable material specifications.",
    challenge: "Rapid execution within a busy market area with restricted unloading hours.",
    solution: "Coordinated early morning material deliveries and efficient on-site storage to keep construction moving without disruptions.",
    relatedProjectSlugs: ["commercial-building-4-floors", "mixed-use-building-5-floors"],
  },
  {
    slug: "residential-renovation-addition",
    title: "Residential Floor Addition & Renovation",
    subtitle: "Upper Floor Expansion, Structural Strengthening & Facade Refresh",
    sector: "renovation",
    sectorLabel: "Renovation",
    location: "Delhi NCR [VERIFY LOCATION]",
    status: "Completed",
    year: "2024",
    builtUpArea: "Approx. 2,200 Sq. Ft.",
    floors: "1 New Floor Added + Ground Renovation",
    timeline: "4 Months",
    clientTypePlaceholder: "[ADD VERIFIED CLIENT NAME]",
    projectValuePlaceholder: "[ADD VERIFIED CONTRACT VALUE]",
    isRepresentativePlaceholder: true,
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1200&q=80",
    ],
    scope: [
      "Inspection and reinforcement of existing structural columns and beams",
      "Addition of a new residential floor using lightweight AAC blocks",
      "Complete rooftop waterproofing with brick bat coba and membrane sealing",
      "Remodeling of existing ground floor bathrooms and kitchen plumbing",
      "Exterior facade repaint and architectural molding refresh",
    ],
    keyFeatures: [
      "Added usable living space without disturbing ground-floor occupancy",
      "Reduced dead load on older foundation by using certified AAC blocks",
      "Fresh modern facade giving the entire home a renewed look",
    ],
    engineeringHighlights: [
      {
        title: "Dead-Load Optimization",
        description: "Replaced conventional heavy red bricks with lightweight autoclave aerated concrete (AAC) blocks to ensure safe floor addition on existing foundations.",
      },
    ],
    overview: "Representative renovation and floor addition showcasing practical home improvement, structural expansion, and damp-proofing for existing residential properties.",
    challenge: "Carrying out upper floor construction while the ground floor remained occupied by the family.",
    solution: "Installed temporary external scaffolding and safety netting, with designated access pathways to minimize noise, dust, and disturbance.",
    relatedProjectSlugs: ["residential-building-4-floors", "family-residence-3-floors"],
  },
];
