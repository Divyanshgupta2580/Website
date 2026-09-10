export type PropertyStatus = "Ready to Move" | "Under Construction" | "Upcoming Launch";
export type PropertyType = "Residential Luxury" | "Commercial Office" | "Retail Spaces" | "Plotted Enclave";

export interface PropertyItem {
  slug: string;
  title: string;
  tagline: string;
  propertyType: PropertyType;
  status: PropertyStatus;
  location: string;
  cityArea: string;
  priceStartingPlaceholder: string;
  sizeRange: string;
  unitsTotalPlaceholder: string;
  reraNumberPlaceholder: string;
  possessionDate: string;
  heroImage: string;
  galleryImages: string[];
  overview: string;
  highlights: string[];
  amenities: string[];
  unitConfigurations: {
    type: string;
    superArea: string;
    carpetArea: string;
    facing: string;
  }[];
}

export const propertiesData: PropertyItem[] = [
  {
    slug: "gg-aurum-residences",
    title: "GG Aurum Residences",
    tagline: "Exclusive 3 & 4 BHK Low-Density Architectural Homes",
    propertyType: "Residential Luxury",
    status: "Under Construction",
    location: "Sector 108, Expressway Corridor [VERIFY LOCATION]",
    cityArea: "Prime Suburban Corridor",
    priceStartingPlaceholder: "[ADD VERIFIED STARTING PRICE - e.g. ₹ 2.45 Cr onwards]",
    sizeRange: "2,350 - 3,650 Sq. Ft.",
    unitsTotalPlaceholder: "[VERIFY TOTAL UNITS - e.g. 112 Exclusive Residences]",
    reraNumberPlaceholder: "[ADD VERIFIED RERA REGISTRATION NUMBER]",
    possessionDate: "December 2025",
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    ],
    overview: "Conceived as an enclave of architectural calm, GG Aurum Residences pairs low-density master planning with seismic-zone IV structural engineering. Only two residences per floor ensure complete privacy, three-sided natural ventilation, and unhindered natural sunlight.",
    highlights: [
      "Only 2 apartments per floor with dedicated dual service and resident elevators",
      "11-foot clear floor-to-ceiling heights with wide wrap-around balconies",
      "Direct structural engineering oversight and material provenance by GG Construction Co.",
      "100% IGBC Green Home baseline compliant with solar heated hot water",
    ],
    amenities: [
      "Clubhouse with Heated Indoor Lap Pool",
      "Fully Equipped Technogym Fitness Suite",
      "Private Screening Room & Library",
      "Multi-tier 24/7 Security with Biometric Access",
      "EV Charging Infrastructure for Every Parking Bay",
      "Landscaped Reflexology Garden & Walking Track",
    ],
    unitConfigurations: [
      {
        type: "3 BHK + Maid Room",
        superArea: "2,350 Sq. Ft.",
        carpetArea: "1,720 Sq. Ft.",
        facing: "Park & Skyline Facing",
      },
      {
        type: "4 BHK + Maid Room",
        superArea: "3,150 Sq. Ft.",
        carpetArea: "2,380 Sq. Ft.",
        facing: "North-East Morning Sun",
      },
      {
        type: "Penthouse Sky Villa",
        superArea: "4,600 Sq. Ft.",
        carpetArea: "3,520 Sq. Ft.",
        facing: "360-Degree Panoramic View",
      },
    ],
  },
  {
    slug: "gg-monolith-business-hub",
    title: "GG Monolith Business Hub",
    tagline: "Grade-A Corporate Suites & High-Street Retail Spaces",
    propertyType: "Commercial Office",
    status: "Under Construction",
    location: "Central Business Gateway, Phase 4 [VERIFY LOCATION]",
    cityArea: "Commercial Core",
    priceStartingPlaceholder: "[ADD VERIFIED STARTING PRICE - e.g. ₹ 95 Lakhs onwards]",
    sizeRange: "850 - 18,000 Sq. Ft. Floorplates",
    unitsTotalPlaceholder: "[VERIFY TOTAL INVENTORY - e.g. 84 Executive Suites & Retail]",
    reraNumberPlaceholder: "[ADD VERIFIED RERA REGISTRATION NUMBER]",
    possessionDate: "August 2026",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    ],
    overview: "GG Monolith Business Hub delivers scalable corporate infrastructure tailored for modern enterprises, consulting firms, and technology offices. Boasting grand 4.2-meter floor-to-floor heights, post-tensioned spans, and high-efficiency double glazing.",
    highlights: [
      "Scalable floorplates from compact 850 sq.ft. suites to full 18,000 sq.ft. floor plates",
      "Bespoke ground-floor retail promenade with heavy pedestrian footfall",
      "Triple-height granite atrium with security turnstiles & visitor management",
      "100% DG power backup and redundant high-speed telecom shafts",
    ],
    amenities: [
      "Executive Conference Facilities & Boardrooms",
      "Rooftop Cafe & Breakout Sky Garden",
      "Triple-Level Automated Basement Parking",
      "High-Speed Destination Elevators",
      "Central Water-Cooled VRV Air-Conditioning System",
      "Fire Sprinklers & Pressurized Fire Escape Towers",
    ],
    unitConfigurations: [
      {
        type: "Executive Office Suite",
        superArea: "850 - 1,450 Sq. Ft.",
        carpetArea: "610 - 1,040 Sq. Ft.",
        facing: "Main Boulevard Facing",
      },
      {
        type: "Full Corporate Floor Plate",
        superArea: "12,500 - 18,000 Sq. Ft.",
        carpetArea: "9,600 - 13,800 Sq. Ft.",
        facing: "Four-Sided Daylight Exposure",
      },
      {
        type: "High-Street Retail Showroom",
        superArea: "1,200 - 3,500 Sq. Ft.",
        carpetArea: "950 - 2,800 Sq. Ft.",
        facing: "Ground Floor Highway Frontage",
      },
    ],
  },
  {
    slug: "gg-verona-gardens",
    title: "GG Verona Gardens",
    tagline: "Completed Ready-to-Move Gated Community with Resort Living",
    propertyType: "Residential Luxury",
    status: "Ready to Move",
    location: "Hillside Enclave, Lake Road [VERIFY LOCATION]",
    cityArea: "Lakeside District",
    priceStartingPlaceholder: "[ADD VERIFIED STARTING PRICE - e.g. ₹ 1.85 Cr onwards]",
    sizeRange: "1,850 - 2,800 Sq. Ft.",
    unitsTotalPlaceholder: "[VERIFY TOTAL UNITS - e.g. 78 Occupied Residences]",
    reraNumberPlaceholder: "[ADD VERIFIED RERA REGISTRATION NUMBER]",
    possessionDate: "Ready for Handover / OC Received",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    ],
    overview: "A completed testament to our execution capability, GG Verona Gardens is an inhabited luxury community that received its Occupancy Certificate (OC) strictly on schedule. Surrounded by manicured greenery and equipped with full leisure facilities.",
    highlights: [
      "Occupancy Certificate (OC) Received - Zero GST liability for buyers",
      "78% open green landscaped grounds designed by leading landscape architects",
      "Direct piped natural gas (PNG) and 24-hour pressurized treated water supply",
      "Active Residents Welfare Association (RWA) and seamless facility management",
    ],
    amenities: [
      "Operational 15,000 Sq. Ft. Clubhouse",
      "All-Weather Badminton & Squash Courts",
      "Dedicated Children's Adventure Play Area",
      "Senior Citizen Sit-Out Pavilion",
      "Perimeter Smart CCTV Surveillance & Intercom",
    ],
    unitConfigurations: [
      {
        type: "3 BHK Premium",
        superArea: "1,850 Sq. Ft.",
        carpetArea: "1,340 Sq. Ft.",
        facing: "Garden & Pool Facing",
      },
      {
        type: "3 BHK + Study / Lounge",
        superArea: "2,200 Sq. Ft.",
        carpetArea: "1,610 Sq. Ft.",
        facing: "Panoramic Hill View",
      },
    ],
  },
  {
    slug: "gg-terranova-industrial-estates",
    title: "GG Terranova Industrial & Logistics Park",
    tagline: "Planned Industrial Plots & Built-to-Suit Warehouse Facilities",
    propertyType: "Plotted Enclave",
    status: "Upcoming Launch",
    location: "Golden Quadrilateral Logistics Spur [VERIFY LOCATION]",
    cityArea: "Highway Industrial Zone",
    priceStartingPlaceholder: "[ADD VERIFIED STARTING PRICE - Inquire for Plot Tariff]",
    sizeRange: "1 Acre to 15 Acre Land Parcels",
    unitsTotalPlaceholder: "[VERIFY TOTAL PARCELS - e.g. 24 Industrial Plots]",
    reraNumberPlaceholder: "[ADD VERIFIED INDUSTRIAL APPROVAL CODE]",
    possessionDate: "Pre-Launch Bookings Open / Mid 2026",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    ],
    overview: "Designed specifically for logistics consolidators, electronics manufacturing, and light engineering. GG Terranova combines fully approved industrial zoning with plug-and-play heavy civil infrastructure.",
    highlights: [
      "Pre-approved industrial zoning with environmental clearance in place",
      "4-lane internal heavy concrete roadways capable of 60-ton vehicle movement",
      "High-tension 66kV industrial power feed with dedicated substation plots",
      "Direct rail siding and highway access within 3 kilometers",
    ],
    amenities: [
      "Central Truck Parking Terminal with Drivers Rest Lounges",
      "Common Effluent Treatment Substructures (CETP)",
      "Weighbridge and 24/7 Security Gatehouse",
      "Underground Industrial Stormwater Network",
      "Fiber Optic Telecom Connectivity",
    ],
    unitConfigurations: [
      {
        type: "Standard Light Engineering Plot",
        superArea: "1.0 Acre Parcel",
        carpetArea: "43,560 Sq. Ft. Usable Area",
        facing: "45-meter Frontage to Internal 24m Road",
      },
      {
        type: "Mega Logistics Warehouse Parcel",
        superArea: "5.0 - 10.0 Acre Parcel",
        carpetArea: "217,800+ Sq. Ft. Usable Area",
        facing: "Direct Access to Arterial Freight Corridor",
      },
    ],
  },
];
