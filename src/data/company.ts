export interface Division {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  href: string;
  iconName: string;
  accentColor: string;
  statsPlaceholder: string;
  capabilities: string[];
}

export interface LeadershipMember {
  name: string;
  role: string;
  credentialsPlaceholder: string;
  bio: string;
  image: string;
}

export interface CompanyMetrics {
  yearsInIndustry: string;
  completedProjects: string;
  citiesPresence: string;
  activeWorkforce: string;
  materialTonnageAnnually: string;
  clientRetentionRate: string;
}

export interface CompanyConfig {
  name: string;
  legalName: string;
  establishedPlaceholder: string;
  tagline: string;
  positioning: string;
  heroHeadline: string;
  heroSupportingText: string;
  contact: {
    phone: string;
    phoneFormatted: string;
    email: string;
    enquiryEmail: string;
    whatsappNumber: string;
    whatsappFormatted: string;
    address: {
      line1: string;
      line2: string;
      city: string;
      state: string;
      pincode: string;
      country: string;
      full: string;
    };
    officeHours: string;
  };
  metrics: CompanyMetrics;
  certifications: string[];
  qualityPolicy: string;
  safetyRecordPlaceholder: string;
  divisions: Division[];
  leadership: LeadershipMember[];
}

export const companyData: CompanyConfig = {
  name: "GG Construction Co.",
  legalName: "GG Construction & Infrastructure Projects (P) Ltd. [VERIFY LEGAL ENTITY]",
  establishedPlaceholder: "[VERIFY YEAR FOUNDED - e.g. Est. 2008]",
  tagline: "One trusted partner from materials and engineering through construction and development.",
  positioning: "Integrated construction engineering, quality property development, and high-specification building material supply across India.",
  heroHeadline: "Building Strong Foundations. Creating Better Futures.",
  heroSupportingText: "GG Construction Co. brings together construction expertise, real-estate engineering and dependable building-material supply under one trusted name.",
  
  contact: {
    phone: "+919876543210", // Placeholder format
    phoneFormatted: "+91 [VERIFY PHONE NUMBER]",
    email: "contact@ggconstruction.com [VERIFY EMAIL]",
    enquiryEmail: "enquiry@ggconstruction.com [VERIFY EMAIL]",
    whatsappNumber: "+919876543210",
    whatsappFormatted: "+91 [VERIFY WHATSAPP]",
    address: {
      line1: "Plot No. [VERIFY PLOT / TOWER NUMBER], Construction Hub",
      line2: "Industrial Area Phase II, Highway Corridor",
      city: "[VERIFY PRIMARY CITY - e.g. New Delhi / Gurugram / Bengaluru]",
      state: "[VERIFY STATE]",
      pincode: "[VERIFY PINCODE]",
      country: "India",
      full: "[VERIFY CORPORATE ADDRESS - e.g. Corporate Tower, Sector 44, Commercial Corridor, India]",
    },
    officeHours: "Mon - Sat: 08:30 AM - 06:30 PM (IST)",
  },

  metrics: {
    yearsInIndustry: "[VERIFY YEARS IN INDUSTRY - e.g. 15+]",
    completedProjects: "[ADD VERIFIED PROJECT COUNT - e.g. 180+]",
    citiesPresence: "[ADD VERIFIED CITIES - e.g. 12+]",
    activeWorkforce: "[ADD VERIFIED WORKFORCE - e.g. 450+]",
    materialTonnageAnnually: "[ADD VERIFIED ANNUAL SUPPLY TONNAGE - e.g. 75,000+ MT]",
    clientRetentionRate: "[ADD VERIFIED RETENTION / SATISFACTION RATE]",
  },

  certifications: [
    "[ADD VERIFIED ISO 9001:2015 QUALITY CERTIFICATION]",
    "[ADD VERIFIED ISO 45001 OCCUPATIONAL HEALTH & SAFETY]",
    "[ADD VERIFIED INDIAN GREEN BUILDING COUNCIL (IGBC) AFFILIATION]",
    "[ADD VERIFIED STATE RERA REGISTRATION CODES]",
    "[ADD VERIFIED NATIONAL ACCREDITATION BOARD FOR TESTING (NABL) PARTNER]",
  ],

  qualityPolicy: "Rigorous grade testing on every material consignment, seismic-compliant structural engineering, and precision timeline controls on every turnkey site.",
  safetyRecordPlaceholder: "[ADD VERIFIED SAFE MAN-HOURS STATISTIC - e.g. Over 2.4 Million Safe Work Hours Logged]",

  divisions: [
    {
      id: "construction",
      name: "Construction & Engineering",
      shortName: "Construction",
      tagline: "Turnkey Civil, Commercial & Industrial Engineering",
      description: "Complete design-build, civil structural contracting, pre-engineered building (PEB), and industrial development executed under certified engineering protocols.",
      href: "/services",
      iconName: "HardHat",
      accentColor: "#B89A63",
      statsPlaceholder: "[ADD VERIFIED SQFT BUILT - e.g. 3.2M+ Sq. Ft. Built]",
      capabilities: [
        "High-Rise Commercial Complexes",
        "Turnkey Industrial Warehousing & Factories",
        "Custom Luxury Residential Estates",
        "Civil Infrastructure & Roadways",
        "Deep Foundation & Pile Engineering",
      ],
    },
    {
      id: "real-estate",
      name: "Real Estate & Property Development",
      shortName: "Real Estate",
      tagline: "Sustainable Residential & Commercial Developments",
      description: "Thoughtfully conceived developments integrating modern architectural aesthetics, RERA compliance, premium structural integrity, and prime urban locations.",
      href: "/real-estate",
      iconName: "Building2",
      accentColor: "#667582",
      statsPlaceholder: "[ADD VERIFIED DEVELOPMENT PORTFOLIO - e.g. 12 Active Sites]",
      capabilities: [
        "Gated Residential Communities",
        "Bespoke Commercial Office Suites",
        "Plotted Infrastructure Developments",
        "Joint Venture Redevelopments",
        "RERA-Compliant Project Delivery",
      ],
    },
    {
      id: "materials",
      name: "Building Materials Supply",
      shortName: "Materials Supply",
      tagline: "Direct-From-Plant Bulk Supply & Quality Testing",
      description: "Direct procurement networks for primary TMT steel, certified grade cements, manufactured sand, aggregates, and construction chemicals for builders and contractors.",
      href: "/materials",
      iconName: "Boxes",
      accentColor: "#B89A63",
      statsPlaceholder: "[ADD VERIFIED BULK FLEET & CAPACITY]",
      capabilities: [
        "Primary TMT Steel Rebars (Fe 500D / 550D)",
        "Certified OPC 53, PPC & Slag Cement",
        "Precision Graded M-Sand & Coarse Aggregates",
        "Autoclaved Aerated Concrete (AAC) Blocks",
        "Structural Waterproofing & Polymer Admixtures",
      ],
    },
  ],

  leadership: [
    {
      name: "[ADD FOUNDER / MANAGING DIRECTOR NAME]",
      role: "Managing Director & Chairman",
      credentialsPlaceholder: "[VERIFY CREDENTIALS - e.g. B.Tech Civil (IIT), 25+ Years Experience]",
      bio: "Guides overall strategic direction and oversees the vertical integration across materials supply and civil infrastructure delivery.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "[ADD CHIEF ENGINEERING OFFICER NAME]",
      role: "Chief Engineer & Technical Director",
      credentialsPlaceholder: "[VERIFY CREDENTIALS - e.g. M.Tech Structural Engineering, FIE]",
      bio: "Directs structural compliance, seismic-resistant engineering designs, quality audit labs, and automated site execution teams.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "[ADD HEAD OF REAL ESTATE DEVELOPMENT NAME]",
      role: "Head of Real Estate & Acquisitions",
      credentialsPlaceholder: "[VERIFY CREDENTIALS - e.g. MBA Urban Planning]",
      bio: "Oversees land acquisition, master planning, RERA statutory approvals, and customer handover lifecycles.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "[ADD SUPPLY CHAIN & MATERIALS DIRECTOR NAME]",
      role: "Director - Building Materials & Logistics",
      credentialsPlaceholder: "[VERIFY CREDENTIALS - e.g. Materials Management Specialist]",
      bio: "Manages direct manufacturer procurement partnerships, bulk fleet operations, and quality laboratory certification.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    },
  ],
};
