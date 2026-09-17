export type TestimonialCategory =
  | "Residential Construction"
  | "Commercial Construction"
  | "Building Renovation";

export interface TestimonialItem {
  id: string;
  clientNamePlaceholder: string;
  designation: string;
  organizationPlaceholder: string;
  category: TestimonialCategory;
  projectContext: string;
  quote: string;
  rating: number;
  year: string;
  isPlaceholder: boolean;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "testimonial-placeholder-1",
    clientNamePlaceholder: "[REPRESENTATIVE HOMEOWNER FEEDBACK]",
    designation: "Residential Building Owner",
    organizationPlaceholder: "G+3 Builder Floor Project (Rohini)",
    category: "Residential Construction",
    projectContext: "Low-Rise Residential Construction",
    quote:
      "The on-site supervision was steady throughout the foundation and slab casting stages. Work was explained clearly as each floor progressed without unexpected costs.",
    rating: 5,
    year: "Representative Scope",
    isPlaceholder: true,
  },
  {
    id: "testimonial-placeholder-2",
    clientNamePlaceholder: "[REPRESENTATIVE COMMERCIAL OWNER FEEDBACK]",
    designation: "Commercial Property Owner",
    organizationPlaceholder: "Shop & Commercial Building (Pitampura)",
    category: "Commercial Construction",
    projectContext: "Low-Rise Commercial Construction",
    quote:
      "They understood practical building requirements for retail spaces. Column placement and front shop shutters were executed accurately according to our layout.",
    rating: 5,
    year: "Representative Scope",
    isPlaceholder: true,
  },
  {
    id: "testimonial-placeholder-3",
    clientNamePlaceholder: "[REPRESENTATIVE RENOVATION CLIENT FEEDBACK]",
    designation: "Homeowner",
    organizationPlaceholder: "Upper Floor Addition & Waterproofing (Delhi)",
    category: "Building Renovation",
    projectContext: "Structural Floor Addition",
    quote:
      "We added an upper floor while staying downstairs. The team used lightweight blocks as promised and handled terrace waterproofing cleanly.",
    rating: 5,
    year: "Representative Scope",
    isPlaceholder: true,
  },
];
