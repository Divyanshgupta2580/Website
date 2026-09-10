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
  materialFocus: string;
  constructionFocus: string;
  realEstateFocus: string;
  customerCommitment: string;
  regionalFocus: string;
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
    whatsappNumber?: string;
    whatsappFormatted?: string;
    address?: {
      line1: string;
      line2: string;
      city: string;
      state: string;
      pincode: string;
      country: string;
      full: string;
    };
    officeHours?: string;
  };
  metrics: CompanyMetrics;
  certifications: string[];
  qualityPolicy: string;
  safetyRecordPlaceholder: string;
  divisions: Division[];
  leadership: LeadershipMember[];
  mission: string;
  vision: string;
  values: {
    title: string;
    description: string;
  }[];
  milestones: {
    year: string;
    title: string;
    description: string;
  }[];
  practicalPrinciples: {
    title: string;
    description: string;
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
}

export const companyData: CompanyConfig = {
  name: "GG Construction Co.",
  legalName: "GG Construction Co. [VERIFY LEGAL ENTITY NAME]",
  establishedPlaceholder: "[VERIFY YEAR FOUNDED WITH OWNER]",
  tagline: "Building Materials. Construction. Real Estate.",
  positioning: "Dependable building materials supply, practical building construction up to 4–5 floors, and trusted real estate sales assistance.",
  heroHeadline: "Building Materials. Construction. Real Estate.",
  heroSupportingText: "Reliable building materials, practical construction services and property sales assistance under one trusted name.",
  
  contact: {
    phone: "+919811034825",
    phoneFormatted: "+91 98110 34825",
    email: "gunjan29gupta@gmail.com",
    enquiryEmail: "gunjan29gupta@gmail.com",
  },

  metrics: {
    materialFocus: "Essential Building Supplies & Bulk Delivery",
    constructionFocus: "Small & Mid-Rise Buildings (Up to 4–5 Floors)",
    realEstateFocus: "Property Sales & Enquiry Assistance",
    customerCommitment: "Personal Service & Transparent Dealings",
    regionalFocus: "Delhi NCR & Regional",
  },

  certifications: [
    "[VERIFY TRADE LICENSES & REGISTRATIONS WITH OWNER]",
    "[ADD VERIFIED MATERIAL SUPPLY PARTNERSHIPS]",
    "[ADD LOCAL BUILDING CONTRACTOR REGISTRATION]",
  ],

  qualityPolicy: "Supplying genuine, verified building materials, maintaining hands-on site supervision on every construction project, and providing honest advice on property sales.",
  safetyRecordPlaceholder: "[VERIFY WORKPLACE SAFETY PRACTICES WITH OWNER]",

  divisions: [
    {
      id: "materials",
      name: "Building Materials Supply",
      shortName: "Building Materials",
      tagline: "Primary Business // Quality Construction Supplies & Delivery",
      description: "Our primary business focuses on the sale and supply of essential construction materials required for building projects, from foundation cement and steel to plumbing and electrical supplies.",
      href: "/materials",
      iconName: "Boxes",
      accentColor: "#B89A63",
      statsPlaceholder: "[VERIFY MATERIAL PRODUCT RANGE & LOCAL DELIVERY AREA]",
      capabilities: [
        "Cement (OPC, PPC & Construction Binders)",
        "TMT Reinforcement Steel (Fe 500D / Standard Sizes)",
        "Red Clay Bricks & AAC Concrete Blocks",
        "Coarse Sand, Pit Sand & Graded Stone Aggregates",
        "Plumbing Pipes, Fittings & Sanitary Basics",
        "Electrical Conduits, Wires & Cable Accessories",
      ],
    },
    {
      id: "construction",
      name: "Building Construction",
      shortName: "Construction",
      tagline: "Secondary Business // Residential & Commercial Construction",
      description: "Undertaking small to medium-sized building projects—typically up to 4–5 floors—including residential homes, small apartment buildings, shops, offices, and renovation work.",
      href: "/services",
      iconName: "HardHat",
      accentColor: "#B89A63",
      statsPlaceholder: "[VERIFY TYPICAL PROJECT SIZES - e.g. 3–5 Floor Buildings]",
      capabilities: [
        "Residential Building Construction (Independent Floors & Homes)",
        "Small Commercial Buildings & Offices (Up to 4–5 Floors)",
        "Retail Shops, Commercial Showrooms & Business Premises",
        "Complete Renovation, Remodeling & Floor Additions",
        "Building Maintenance & Structural Repairs",
        "Construction Planning, Material Estimation & Site Supervision",
      ],
    },
    {
      id: "real-estate",
      name: "Real Estate Sales & Property Assistance",
      shortName: "Real Estate",
      tagline: "Secondary Business // Property Sales, Marketing & Coordination",
      description: "Assisting property owners, developers, and buyers with property sales, marketing, buyer-seller coordination, and enquiry support across residential and commercial spaces.",
      href: "/real-estate",
      iconName: "Building2",
      accentColor: "#667582",
      statsPlaceholder: "[VERIFY LISTED PROPERTIES & SALES SCOPE]",
      capabilities: [
        "Residential Property Sales Assistance (Flats, Floors & Plots)",
        "Commercial Property & Retail Shop Sales Marketing",
        "Marketing on Behalf of Property Owners & Developers",
        "Buyer-Seller Enquiry Coordination & Property Viewings",
        "Practical Guidance on Local Property Documentation",
        "Commission-Based Brokerage & Property Agency Services",
      ],
    },
  ],

  leadership: [
    {
      name: "[ADD OWNER / FOUNDER NAME]",
      role: "Founder & Managing Director",
      credentialsPlaceholder: "[VERIFY FOUNDER BACKGROUND & PRACTICAL EXPERIENCE]",
      bio: "Leads GG Construction Co. with hands-on expertise in building material sourcing, local construction project supervision, and customer relationships.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "[ADD KEY OPERATIONS LEAD NAME]",
      role: "Manager - Materials & Site Coordination",
      credentialsPlaceholder: "[VERIFY ROLE & YEARS OF LOCAL TRADE EXPERIENCE]",
      bio: "Oversees daily building material dispatch, site logistics, and trade coordination with local subcontractors and building owners.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    },
  ],

  mission: "To supply dependable building materials at fair prices, construct sturdy low-rise buildings with care, and provide transparent property sales assistance with personal attention and practical advice.",

  vision: "To be the most dependable local partner for homeowners, builders, and property buyers seeking reliable materials, honest building work, and straightforward property guidance.",

  values: [
    {
      title: "Practical Building Knowledge",
      description: "We understand real construction on the ground. We recommend materials and construction methods that suit local building practices and realistic budgets.",
    },
    {
      title: "Material Quality & Fair Pricing",
      description: "We believe in supplying dependable materials with transparent pricing, accurate measurements, and prompt delivery to construction sites.",
    },
    {
      title: "Hands-On Site Supervision",
      description: "We believe good construction requires on-site attention. We personally supervise work to ensure proper masonry, reinforcement, and finishing.",
    },
    {
      title: "Honest Client Relationships",
      description: "Whether supplying cement, building a floor, or coordinating a property sale, we operate with straightforward communication and zero false claims.",
    },
    {
      title: "Dependable Customer Support",
      description: "We stand by our work and our materials. Our customers know they can call us directly for advice, order updates, or follow-up support.",
    },
  ],

  milestones: [
    {
      year: "[VERIFY START YEAR]",
      title: "Building Materials Supply Operations",
      description: "Commenced supply of essential construction materials including cement, TMT steel, and aggregates to local builders and homeowners.",
    },
    {
      year: "[VERIFY EXPANSION YEAR]",
      title: "Expanding into Building Construction",
      description: "Began undertaking small and medium building construction contracts, building residential houses and low-rise commercial structures up to 4–5 floors.",
    },
    {
      year: "[VERIFY RECENT YEAR]",
      title: "Real Estate Sales & Coordination",
      description: "Introduced property sales assistance, helping property owners market their spaces and connecting prospective buyers with verified properties.",
    },
    {
      year: "Today",
      title: "Integrated Local Services",
      description: "Serving customers with dependable material supply, quality low-rise building construction, and personal property sales coordination.",
    },
  ],

  practicalPrinciples: [
    {
      title: "Quality Materials at the Core",
      description: "Every strong building starts with proper cement, tested TMT steel, and sound masonry. We supply the materials we trust on our own jobs.",
    },
    {
      title: "Realistic Project Sizing",
      description: "We specialize in what we do best: residential homes, small offices, shops, and buildings up to 4–5 floors, giving each project personal attention.",
    },
    {
      title: "Clear Costing & Honest Estimates",
      description: "We provide itemized material requirements and straightforward construction estimates so clients understand exactly where their budget goes.",
    },
    {
      title: "Clear Distinction in Real Estate",
      description: "When showing properties, we clearly state whether a property was constructed by us or is being marketed on behalf of another owner.",
    },
  ],

  benefits: [
    {
      title: "Direct Material Access",
      description: "Getting materials directly from our supply arm keeps construction costs transparent and prevents unnecessary site delays.",
    },
    {
      title: "Personal Supervision",
      description: "Small to medium projects get direct supervision, ensuring masonry, casting, and finishing adhere to proper building standards.",
    },
    {
      title: "Transparent Billing",
      description: "Straightforward estimates for materials and building work with no hidden line items or surprise charges.",
    },
    {
      title: "Accessible Local Team",
      description: "Speak directly with our experienced team by phone or email whenever you need material quotes or construction guidance.",
    },
  ],
};
