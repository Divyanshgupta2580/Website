export interface LeadershipMember {
  name: string;
  role: string;
  credentialsPlaceholder: string;
  bio: string;
  image: string;
}

export interface CompanyMetrics {
  constructionFocus: string;
  buildingScale: string;
  supervisionCommitment: string;
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
  tagline: "Reliable Construction for Homes and Low-Rise Buildings.",
  positioning:
    "Specialized in residential homes, builder floors, shops, and small commercial building construction up to 4–5 floors across Rohini, Pitampura, and nearby areas of Delhi.",
  heroHeadline: "Reliable Construction for Homes and Low-Rise Buildings.",
  heroSupportingText:
    "GG Construction Co. has carried out construction work across Rohini, Pitampura and nearby areas of Delhi, delivering quality low-rise residential and commercial buildings with attentive site supervision.",

  contact: {
    phone: "+919811034825",
    phoneFormatted: "+91 98110 34825",
    email: "gunjan29gupta@gmail.com",
    enquiryEmail: "gunjan29gupta@gmail.com",
  },

  metrics: {
    constructionFocus: "Residential Homes, Builder Floors, Shops & Offices",
    buildingScale: "Low-Rise Structures (Up to 4–5 Floors)",
    supervisionCommitment: "Dedicated Day-to-Day Site Oversight",
    customerCommitment: "Direct Communication & Milestone Transparency",
    regionalFocus: "Rohini, Pitampura & Nearby Delhi Areas",
  },

  certifications: [
    "[VERIFY TRADE LICENSES & LOCAL CONTRACTOR REGISTRATION WITH OWNER]",
    "[ADD LOCAL BUILDING CONTRACTOR REGISTRATION DETAILS]",
  ],

  qualityPolicy:
    "Delivering durable low-rise building construction through sound RCC structural execution, disciplined concrete curing, true masonry lines, and attentive on-site supervision.",
  safetyRecordPlaceholder: "[VERIFY WORKPLACE SAFETY PRACTICES WITH OWNER]",

  leadership: [
    {
      name: "[ADD OWNER / FOUNDER NAME]",
      role: "Founder & Managing Director",
      credentialsPlaceholder: "[VERIFY FOUNDER BACKGROUND & PRACTICAL EXPERIENCE]",
      bio: "Leads GG Construction Co. with hands-on expertise in low-rise building construction, project coordination, and client communication.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "[ADD KEY OPERATIONS LEAD NAME]",
      role: "Site Operations & Construction Lead",
      credentialsPlaceholder: "[VERIFY ROLE & YEARS OF LOCAL TRADE EXPERIENCE]",
      bio: "Supervises day-to-day on-site civil works, structural casting, and trade coordination across active building sites.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    },
  ],

  mission:
    "To build sturdy, well-engineered low-rise homes, shops, and commercial buildings with honest craftsmanship, disciplined site supervision, and transparent milestone pricing.",

  vision:
    "To be the most trusted local construction contractor in Rohini, Pitampura, and nearby areas of Delhi for practical, durable low-rise building construction.",

  values: [
    {
      title: "Sound Structural Craftsmanship",
      description:
        "Every project is built on solid engineering fundamentals: proper foundation footings, compliant rebar detailing, and full-term concrete curing.",
    },
    {
      title: "Hands-On Site Supervision",
      description:
        "Good building requires constant attention on site. We supervise masonry, structural casting, and finishing day to day.",
    },
    {
      title: "Transparent Estimates & Billing",
      description:
        "We provide itemized construction cost estimates and clear milestone billing with zero hidden extras or ambiguities.",
    },
    {
      title: "Reliable Local Experience",
      description:
        "Deep familiarity with local soil conditions, municipal building norms, and practical construction practices across Rohini, Pitampura, and Delhi.",
    },
    {
      title: "Clear, Direct Communication",
      description:
        "Clients speak directly with our core team. We keep building owners updated at every construction milestone from foundation to finish.",
    },
  ],

  milestones: [
    {
      year: "[VERIFY START YEAR]",
      title: "Establishment of GG Construction Co.",
      description:
        "Commenced building construction operations, undertaking independent home and floor projects with hands-on supervision.",
    },
    {
      year: "[VERIFY EXPANSION YEAR]",
      title: "Low-Rise Commercial & Residential Portfolio",
      description:
        "Expanded building construction across residential builder floors, shops, and small commercial buildings up to 4–5 floors.",
    },
    {
      year: "Today",
      title: "Trusted Local Construction Contractor",
      description:
        "Actively carrying out residential and commercial construction work across Rohini, Pitampura, and nearby areas of Delhi.",
    },
  ],

  practicalPrinciples: [
    {
      title: "Realistic Building Scale",
      description:
        "We specialize in what we know best: residential homes, builder floors, shops, and small commercial buildings up to 4–5 floors.",
    },
    {
      title: "Rigorous Structural Standards",
      description:
        "Disciplined RCC beam and column casting, compliant reinforcement placement, and full 14–21 day water curing cycles.",
    },
    {
      title: "Clear Costing & Milestone Accountability",
      description:
        "Stage-wise milestone payments tied directly to verified physical construction progress on site.",
    },
    {
      title: "Direct Team Accessibility",
      description:
        "Direct access to our supervision team throughout the building process for prompt query resolution and site walkthroughs.",
    },
  ],

  benefits: [
    {
      title: "Attentive Personal Supervision",
      description:
        "Every project receives dedicated on-site supervision to ensure masonry, casting, and finishing adhere to proper standards.",
    },
    {
      title: "Local Building Experience",
      description:
        "Proven construction experience in Rohini, Pitampura, and nearby Delhi areas ensures smooth execution and site logistics.",
    },
    {
      title: "Itemized Cost Estimates",
      description:
        "Clear, detailed breakdowns of civil works, labor, and finishing stages without confusing terms or unexpected costs.",
    },
    {
      title: "Direct Client Accessibility",
      description:
        "Direct phone and email contact with the project lead for continuous updates from foundation to building handover.",
    },
  ],
};
