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
    clientNamePlaceholder: "[ADD VERIFIED CUSTOMER REVIEW]",
    designation: "Independent Home Builder",
    organizationPlaceholder: "Residential Project",
    division: "Building Materials Supply",
    projectContext: "Cement, Sand & Masonry Supplies",
    quote:
      "We were able to get most of the material we needed from one place, which made the construction work easier to manage. Delivery was on time as scheduled.",
    rating: 5,
    year: "2024",
    isPlaceholder: true,
  },
  {
    id: "testimonial-placeholder-2",
    clientNamePlaceholder: "[ADD VERIFIED CUSTOMER REVIEW]",
    designation: "Local Civil Contractor",
    organizationPlaceholder: "Site Procurement",
    division: "Building Materials Supply",
    projectContext: "Shuttering & Site Hardware Supplies",
    quote:
      "The team was helpful when we were comparing material options and quantities. Communication was straightforward without unnecessary back and forth.",
    rating: 5,
    year: "2024",
    isPlaceholder: true,
  },
  {
    id: "testimonial-placeholder-3",
    clientNamePlaceholder: "[ADD VERIFIED CUSTOMER REVIEW]",
    designation: "Homeowner",
    organizationPlaceholder: "G+2 Residential Build",
    division: "Building Construction",
    projectContext: "Civil Construction up to 4-5 Floors",
    quote:
      "Apart from supplying materials, they also understood the practical side of the construction work, which was useful for us during slab casting and brickwork.",
    rating: 5,
    year: "2024",
    isPlaceholder: true,
  },
  {
    id: "testimonial-placeholder-4",
    clientNamePlaceholder: "[ADD VERIFIED CUSTOMER REVIEW]",
    designation: "Plot Buyer",
    organizationPlaceholder: "Residential Plot Consultation",
    division: "Real Estate Sales & Assistance",
    projectContext: "Property Advisory & Visits",
    quote:
      "We contacted them for property requirements in the area. Got honest guidance on location and site details without any pressure.",
    rating: 5,
    year: "2024",
    isPlaceholder: true,
  },
];
