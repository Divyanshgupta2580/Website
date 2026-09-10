export type TestimonialDivision =
  | "Building Materials Supply"
  | "Building Construction"
  | "Real Estate Sales & Assistance"
  | "Construction & Engineering"
  | "Real Estate & Property Development";

export interface TestimonialItem {
  id: string;
  clientNamePlaceholder: string;
  designation: string;
  organizationPlaceholder: string;
  division: TestimonialDivision;
  projectContext: string;
  quote: string;
  rating: number;
  year: string;
  isPlaceholder: boolean;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "testimonial-placeholder-1",
    clientNamePlaceholder: "[ADD VERIFIED CUSTOMER TESTIMONIAL - CLIENT NAME]",
    designation: "[VERIFY DESIGNATION - e.g. Homeowner / Contractor]",
    organizationPlaceholder: "[ADD VERIFIED CLIENT / RESIDENTIAL PROJECT]",
    division: "Building Materials Supply",
    projectContext: "Building Materials Supply (Cement & TMT Steel Supply)",
    quote: "[ADD VERIFIED CUSTOMER TESTIMONIAL - Verified customer feedback regarding dependable on-time delivery of cement and TMT steel directly to the construction site with transparent billing.]",
    rating: 5,
    year: "2024",
    isPlaceholder: true,
  },
  {
    id: "testimonial-placeholder-2",
    clientNamePlaceholder: "[ADD VERIFIED CUSTOMER TESTIMONIAL - CLIENT NAME]",
    designation: "[VERIFY DESIGNATION - e.g. Building Owner]",
    organizationPlaceholder: "[ADD VERIFIED BUILDING CONSTRUCTION WORK]",
    division: "Building Construction",
    projectContext: "4-Floor Residential Building Construction",
    quote: "[ADD VERIFIED CUSTOMER TESTIMONIAL - Verified customer feedback on civil construction work for residential/commercial building up to 4-5 floors, covering brick masonry, RCC casting, and honest site supervision.]",
    rating: 5,
    year: "2024",
    isPlaceholder: true,
  },
  {
    id: "testimonial-placeholder-3",
    clientNamePlaceholder: "[ADD VERIFIED CUSTOMER TESTIMONIAL - CLIENT NAME]",
    designation: "[VERIFY DESIGNATION - e.g. Property Buyer / Owner]",
    organizationPlaceholder: "[ADD VERIFIED PROPERTY TRANSACTION]",
    division: "Real Estate Sales & Assistance",
    projectContext: "Property Sales & Buyer-Seller Coordination",
    quote: "[ADD VERIFIED CUSTOMER TESTIMONIAL - Verified customer feedback regarding transparent property marketing, site visits, and helpful buyer-seller coordination.]",
    rating: 5,
    year: "2024",
    isPlaceholder: true,
  },
  {
    id: "testimonial-placeholder-4",
    clientNamePlaceholder: "[ADD VERIFIED CUSTOMER TESTIMONIAL - CLIENT NAME]",
    designation: "[VERIFY DESIGNATION - e.g. Civil Contractor]",
    organizationPlaceholder: "[ADD VERIFIED LOCAL CONTRACTOR]",
    division: "Building Materials Supply",
    projectContext: "Sand, Aggregates & Brick Supply",
    quote: "[ADD VERIFIED CUSTOMER TESTIMONIAL - Verified customer feedback on dependable delivery of sand, coarse aggregates, and red bricks directly to project sites.]",
    rating: 5,
    year: "2023",
    isPlaceholder: true,
  },
];
