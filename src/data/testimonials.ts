export interface TestimonialItem {
  id: string;
  clientNamePlaceholder: string;
  designation: string;
  organizationPlaceholder: string;
  division: "Construction & Engineering" | "Real Estate & Property Development" | "Building Materials Supply";
  projectContext: string;
  quote: string;
  rating: number; // 5 out of 5
  year: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    clientNamePlaceholder: "[VERIFY CLIENT NAME - Managing Director, Logistics Asset Group]",
    designation: "Head of Infrastructure Development",
    organizationPlaceholder: "[VERIFY ENTERPRISE CLIENT - National Logistics REIT]",
    division: "Construction & Engineering",
    projectContext: "Zenith Mega Logistics Hub (620,000 Sq. Ft.)",
    quote: "Delivering an FM-2 laser screed floor across 620,000 square feet within 14 months seemed aggressive. GG Construction Co. not only met the deadline but their integrated materials arm ensured we never faced a single day of steel or cement shortages despite regional supply crunches.",
    rating: 5,
    year: "2024",
  },
  {
    id: "test-2",
    clientNamePlaceholder: "[VERIFY CLIENT NAME - Chief Operating Officer]",
    designation: "Executive Director - Commercial Portfolio",
    organizationPlaceholder: "[VERIFY CORPORATE CLIENT - Technology Park Developers]",
    division: "Construction & Engineering",
    projectContext: "Apex Commercial Centre (485,000 Sq. Ft.)",
    quote: "Their engineering rigor during deep basement excavation directly next to an active arterial metro corridor was flawless. Continuous structural monitoring and zero settlement in neighboring infrastructure gave our board immense peace of mind.",
    rating: 5,
    year: "2024",
  },
  {
    id: "test-3",
    clientNamePlaceholder: "[VERIFY CLIENT NAME - Homeowner & Private Investor]",
    designation: "Resident Owner",
    organizationPlaceholder: "[VERIFY CLIENT - Private Residential Estate Owner]",
    division: "Real Estate & Property Development",
    projectContext: "GG Aurum Residences (3 & 4 BHK Enclave)",
    quote: "The quality of civil construction in residential real estate is often masked by cosmetic paint. With GG Construction Co., the structural substance is real—from sound insulation to zero dampness during monsoons. You can feel the engineering superiority.",
    rating: 5,
    year: "2024",
  },
  {
    id: "test-4",
    clientNamePlaceholder: "[VERIFY CLIENT NAME - Procurement Vice President]",
    designation: "VP - Central Procurement & Supply Chain",
    organizationPlaceholder: "[VERIFY REGIONAL BUILDER - Grade-A Highrise Contractor]",
    division: "Building Materials Supply",
    projectContext: "Ongoing Multi-Site TMT & Cement Supply (~4,000 MT Monthly)",
    quote: "Most building material suppliers fail on consistent batch quality and test documentation. GG Construction Co. delivers original mill test certificates with every trailer. Their automated weighbridge receipts eliminate billing disputes completely.",
    rating: 5,
    year: "2023",
  },
  {
    id: "test-5",
    clientNamePlaceholder: "[VERIFY CLIENT NAME - Chief Project Officer]",
    designation: "Director - Plant Engineering",
    organizationPlaceholder: "[VERIFY INDUSTRIAL CLIENT - Automotive Systems Manufacturer]",
    division: "Construction & Engineering",
    projectContext: "Matrix Precision Component Plant (340,000 Sq. Ft.)",
    quote: "Heavy stamping press machine foundations require micro-millimeter anchor bolt alignments and vibration damping. GG's engineering coordination between European equipment designers and local civil teams was exemplary.",
    rating: 5,
    year: "2023",
  },
];
