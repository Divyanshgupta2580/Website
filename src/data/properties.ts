export type PropertyStatus = "Available" | "Under Construction" | "Ready to Move";
export type PropertyType = "Residential Floor" | "Residential Apartment" | "Commercial Shop / Office" | "Residential Plot";
export type PropertyNature =
  | "Marketed on behalf of Owner / Developer"
  | "External Property Opportunity"
  | "Constructed by GG Construction Co.";

export interface PropertyItem {
  slug: string;
  title: string;
  tagline: string;
  propertyType: PropertyType;
  listingNature: PropertyNature;
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
    slug: "prime-residential-floors-delhi",
    title: "Independent Builder Floors (3–4 BHK)",
    tagline: "Property Opportunity: Spacious Independent Floors with Parking & Lift",
    propertyType: "Residential Floor",
    listingNature: "Marketed on behalf of Owner / Developer",
    status: "Ready to Move",
    location: "Delhi NCR [VERIFY EXACT LOCATION]",
    cityArea: "Established Residential Colony",
    priceStartingPlaceholder: "[INQUIRE FOR PRICE - MARKETED FOR OWNER]",
    sizeRange: "1,600 - 2,400 Sq. Ft.",
    unitsTotalPlaceholder: "[VERIFY AVAILABLE INVENTORY]",
    reraNumberPlaceholder: "[VERIFY IF APPLICABLE / LOCAL REGISTRATION]",
    possessionDate: "Immediate Handover Available",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    ],
    overview: "Property sales opportunity: Independent residential floors situated in an established residential neighborhood with direct road access, municipal water connection, and nearby local markets. Marketed by GG Construction Co. on behalf of property owners.",
    highlights: [
      "Marketed on behalf of owner/developer through GG Construction Co. sales coordination",
      "Dedicated ground-level stilt car parking and passenger elevator access",
      "Spacious bedroom layouts with modular kitchen fittings and wide balconies",
      "Transparent buyer-seller coordination and documentation assistance",
    ],
    amenities: [
      "Dedicated Car Parking",
      "Passenger Elevator",
      "Gated Neighborhood Security",
      "Overhead Water Storage Tanks",
      "Power Backup Provision",
    ],
    unitConfigurations: [
      {
        type: "3 BHK Independent Floor",
        superArea: "1,650 Sq. Ft.",
        carpetArea: "1,250 Sq. Ft.",
        facing: "East Facing",
      },
      {
        type: "4 BHK Independent Floor",
        superArea: "2,350 Sq. Ft.",
        carpetArea: "1,800 Sq. Ft.",
        facing: "Park Facing",
      },
    ],
  },
  {
    slug: "commercial-retail-shops-noida",
    title: "High-Footfall Commercial Retail Shops",
    tagline: "Property Opportunity: Ground Floor Retail & Showroom Spaces",
    propertyType: "Commercial Shop / Office",
    listingNature: "Marketed on behalf of Owner / Developer",
    status: "Ready to Move",
    location: "Noida [VERIFY EXACT LOCATION]",
    cityArea: "Commercial Market Sector",
    priceStartingPlaceholder: "[INQUIRE FOR PRICE - OWNER DIRECT LISTING]",
    sizeRange: "450 - 1,800 Sq. Ft.",
    unitsTotalPlaceholder: "[VERIFY UNIT AVAILABILITY]",
    reraNumberPlaceholder: "[ADD VERIFIED RERA / PROJECT REGISTRATION]",
    possessionDate: "Ready for Shop Fit-out",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    ],
    overview: "Commercial shop opportunity suited for daily retail, grocery, pharmacy, diagnostic clinic, or office showroom. GG Construction Co. assists prospective buyers and tenants with site visits and direct owner negotiations.",
    highlights: [
      "Marketed on behalf of property developer with sales assistance",
      "Prominent frontage on high-activity commercial access road",
      "Ample surface parking for customers and delivery vehicles",
      "Complete coordination from initial site walkthrough to paperwork",
    ],
    amenities: [
      "High-Visibility Frontage",
      "Customer Surface Parking",
      "Dedicated Power Metering",
      "Commercial Water Connection",
      "Rolling Shutter Security",
    ],
    unitConfigurations: [
      {
        type: "Ground Floor Retail Shop",
        superArea: "450 Sq. Ft.",
        carpetArea: "360 Sq. Ft.",
        facing: "Main Road Facing",
      },
      {
        type: "Corner Showroom Space",
        superArea: "1,450 Sq. Ft.",
        carpetArea: "1,180 Sq. Ft.",
        facing: "Dual Road Frontage",
      },
    ],
  },
  {
    slug: "low-rise-apartments-ghaziabad",
    title: "Low-Rise 2 & 3 BHK Apartments",
    tagline: "Property Opportunity: Peaceful Family Living in Well-Connected Enclave",
    propertyType: "Residential Apartment",
    listingNature: "External Property Opportunity",
    status: "Under Construction",
    location: "Ghaziabad [VERIFY LOCATION]",
    cityArea: "Emerging Residential Corridor",
    priceStartingPlaceholder: "[INQUIRE FOR PRICING & PAYMENT PLANS]",
    sizeRange: "1,050 - 1,550 Sq. Ft.",
    unitsTotalPlaceholder: "[VERIFY INVENTORY WITH DEVELOPER]",
    reraNumberPlaceholder: "[VERIFY DEVELOPER RERA NUMBER]",
    possessionDate: "Expected Handover 2025",
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
    overview: "Affordable family apartment opportunity marketed to home seekers. GG Construction Co. provides prospective buyers with project site visits, builder credentials verification, and transparent coordination.",
    highlights: [
      "External property opportunity marketed with buyer advisory support",
      "Well-ventilated 2 and 3 BHK apartment floor plans with ample natural daylight",
      "Proximity to regional schools, healthcare centers, and public transit links",
      "Assistance with home loan processing through approved financial institutions",
    ],
    amenities: [
      "Children's Play Area",
      "Gated Security Entry",
      "Power Backup for Common Areas",
      "Rainwater Harvesting System",
      "Visitor Parking",
    ],
    unitConfigurations: [
      {
        type: "2 BHK Family Unit",
        superArea: "1,050 Sq. Ft.",
        carpetArea: "790 Sq. Ft.",
        facing: "Internal Garden Facing",
      },
      {
        type: "3 BHK Family Unit",
        superArea: "1,550 Sq. Ft.",
        carpetArea: "1,180 Sq. Ft.",
        facing: "North-East Morning Light",
      },
    ],
  },
  {
    slug: "residential-plots-delhi-ncr",
    title: "Gated Residential Enclave Plots",
    tagline: "Property Opportunity: Clear-Title Freehold Plots for Custom Home Construction",
    propertyType: "Residential Plot",
    listingNature: "External Property Opportunity",
    status: "Available",
    location: "Delhi NCR Outskirts [VERIFY LOCATION]",
    cityArea: "Developing Residential Sector",
    priceStartingPlaceholder: "[INQUIRE FOR PLOT SIZES & RATES]",
    sizeRange: "100 Sq. Yds. - 250 Sq. Yds.",
    unitsTotalPlaceholder: "[VERIFY AVAILABLE PLOTS]",
    reraNumberPlaceholder: "[VERIFY LAYOUT SANCTION / APPROVAL]",
    possessionDate: "Immediate Registry & Demarcation",
    heroImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
    overview: "Freehold residential plot opportunities suitable for immediate house construction or long-term family investment. GG Construction Co. can coordinate both plot selection and subsequent building construction and material supply.",
    highlights: [
      "Clear title external property opportunity with registry and demarcation assistance",
      "Option to engage GG Construction Co. for direct home construction and building materials",
      "Demarcated plot boundaries with internal paved roads and streetlight lines",
      "Direct owner-to-buyer negotiation support with zero hidden charges",
    ],
    amenities: [
      "Paved Internal Roads",
      "Electricity Line Installed",
      "Boundary Wall Demarcation",
      "Nearby Local Market",
      "Clear Title & Registry Assistance",
    ],
    unitConfigurations: [
      {
        type: "Standard Residential Plot",
        superArea: "100 Sq. Yds.",
        carpetArea: "900 Sq. Ft.",
        facing: "East Facing Road",
      },
      {
        type: "Corner Residential Plot",
        superArea: "200 Sq. Yds.",
        carpetArea: "1,800 Sq. Ft.",
        facing: "Corner Two-Side Open",
      },
    ],
  },
];
